require 'rails_helper'

RSpec.describe Api::V1::CasesController, type: :controller do
  let!(:cases) { FactoryBot.create_list(:case, 5) }

  describe 'GET#index' do
    it 'should return a list of all cases' do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 5
      expect(returned_json[0]['prefix']).to be_truthy
      expect(returned_json[0]['case_number']).to be_truthy
      expect(returned_json[0]['weight']).to be_falsey
      expect(returned_json[0]['width']).to be_falsey
    end
  end

  describe 'POST#create' do
    post_json = { prefix: 'MA', case_number: 700, height: 48, length: 30, width: 30, weight: 170 }
    post_error = { prefix: 'MA' }

    it 'creates a new case' do
      prev_count = Case.count
      post(:create, params: post_json, format: :json)
      expect(Case.count).to eq(prev_count + 1)
    end

    it 'returns a persisted case' do
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json['id']).to be_truthy
      expect(returned_json['prefix']).to eq 'MA'
      expect(returned_json['case_number']).to eq 700
    end

    it 'does not create a case when incorrect data is recieved.' do
      post(:create, params: post_error, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 422
      expect(response.content_type).to eq('application/json')

      expect(returned_json['errors']['case_number'].first).to eq "Case number can't be blank"
      expect(returned_json['errors']['height'].first).to eq "Height can't be blank"
      expect(returned_json['errors']['width'].first).to eq "Width can't be blank"
      expect(returned_json['errors']['length'].first).to eq "Length can't be blank"
      expect(returned_json['errors']['weight'].first).to eq "Weight can't be blank"
    end
  end

  describe 'GET#contents' do
    let!(:case1) { Case.first }
    let!(:electronics1) { FactoryBot.create(:electronic, case: case1) }
    let!(:electronics2) { FactoryBot.create(:electronic, case: case1) }
    let!(:electronics3) { FactoryBot.create(:electronic, case: case1) }
    it 'gets the electronics that are in a case' do
      get :contents, params: { id: case1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json['electronics'].length).to eq 3
      expect(returned_json['electronics'][0]['name']).to be_truthy
      expect(returned_json['electronics'][0]['model_number']).to be_truthy
      expect(returned_json['electronics'][0]['barcode']).to be_truthy
      expect(returned_json['electronics'][0]['serial_number']).to be_falsey
      expect(returned_json['electronics'][0]['cost']).to be_falsey
    end
  end

  describe 'POST#add' do
    let!(:case1) { FactoryBot.create(:case) }
    let!(:tour1) { FactoryBot.create(:tour) }
    it 'adds a case to a tour' do
      post_json = { case: { id: tour1.id }, id: case1.id }
      post(:add, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)
      tour = Tour.find(tour1.id)

      expect(tour.cases).to eq [case1]
    end
  end
end
