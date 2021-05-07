require 'rails_helper'

RSpec.describe Api::V1::ElectronicsController, type: :controller do
  let!(:electronics) { FactoryBot.create_list(:electronic, 5) }

  describe 'GET#index' do
    it 'returns a list of all electronics' do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 5
      expect(returned_json[0]['name']).to be_truthy
      expect(returned_json[0]['model_number']).to be_truthy
      expect(returned_json[0]['barcode']).to be_truthy
      expect(returned_json[0]['serial_number']).to be_falsey
      expect(returned_json[0]['cost']).to be_falsey
    end
  end

  describe 'POST#create' do
    post_json = {
      name: '2050 Compressor',
      manufacture: 'API',
      model_number: 'CMP2050',
      serial_number: '4446G6H',
      barcode: '314354'
    }
    post_error = { weight: 'MA' }

    it 'creates a new electronic' do
      prev_count = Electronic.count
      post(:create, params: post_json, format: :json)
      expect(Electronic.count).to eq(prev_count + 1)
    end

    it 'returns a persisted electronic' do
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json['id']).to be_truthy
      expect(returned_json['name']).to eq '2050 Compressor'
      expect(returned_json['model_number']).to eq 'CMP2050'
      expect(returned_json['barcode']).to eq 314_354
    end

    it 'does not create an electronic when incorrect data is recieved.' do
      post(:create, params: post_error, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 422
      expect(response.content_type).to eq('application/json')

      expect(returned_json['errors']['name'].first).to eq "Name can't be blank"
      expect(returned_json['errors']['manufacture'].first).to eq "Manufacture can't be blank"
      expect(returned_json['errors']['model_number'].first).to eq "Model number can't be blank"
      expect(returned_json['errors']['serial_number'].first).to eq "Serial number can't be blank"
    end
  end

  describe 'POST#add' do
    let!(:electronic1) { FactoryBot.create(:electronic) }
    let!(:case1) { FactoryBot.create(:case) }
    it 'adds a electronic to a case' do
      post_json = { electronic: { id: case1.id }, id: electronic1.id }
      post(:add, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(returned_json['case']['id']).to be_truthy
      expect(returned_json['case']['prefix']).to be_truthy
      expect(returned_json['case']['case_number']).to be_truthy
    end
  end
end
