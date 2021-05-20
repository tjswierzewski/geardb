require 'rails_helper'

RSpec.describe Api::V1::ToursController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }
  let!(:tours) { FactoryBot.create_list(:tour, 5) }

  describe 'GET#index' do
    it 'should return a list of all cases' do
      request.headers.merge! user.create_new_auth_token
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json['tours'].length).to eq 5
      expect(returned_json['tours'][0]['name']).to be_truthy
      expect(returned_json['tours'][0]['artist']).to be_truthy
      expect(returned_json['tours'][0]['duration']).to be_falsey
    end
  end

  describe 'POST#create' do
    post_json = {
      name: 'The Magical Mystery Tour',
      artist: 'The Beatles',
      start_date: Faker::Date.backward(days: 250),
      end_date: Faker::Date.forward(days: 250)
    }
    post_error = { artist: 'Tame Impala' }

    it 'creates a new tour' do
      prev_count = Tour.count
      request.headers.merge! user.create_new_auth_token
      post(:create, params: post_json, format: :json)
      expect(Tour.count).to eq(prev_count + 1)
    end

    it 'returns a persisted tour' do
      request.headers.merge! user.create_new_auth_token
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json['id']).to be_truthy
      expect(returned_json['name']).to eq 'The Magical Mystery Tour'
      expect(returned_json['artist']).to eq 'The Beatles'
    end

    it 'does not create an tour when incorrect data is recieved.' do
      request.headers.merge! user.create_new_auth_token
      post(:create, params: post_error, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 422
      expect(response.content_type).to eq('application/json')

      expect(returned_json['errors']['name'].first).to eq "Name can't be blank"
    end
  end

  describe 'GET#contents' do
    let!(:tour1) { Tour.first }
    let!(:case1) { FactoryBot.create(:case) }
    let!(:case2) { FactoryBot.create(:case) }
    let!(:case3) { FactoryBot.create(:case) }
    let!(:assignment1) { CaseAssignment.create(case: case1, tour: tour1) }
    let!(:assignment2) { CaseAssignment.create(case: case2, tour: tour1) }
    let!(:assignment3) { CaseAssignment.create(case: case3, tour: tour1) }
    it 'gets the casess that are in a tour' do
      request.headers.merge! user.create_new_auth_token
      get :contents, params: { id: tour1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json['cases'].length).to eq 3
      expect(returned_json['cases'][0]['prefix']).to be_truthy
      expect(returned_json['cases'][0]['case_number']).to be_truthy
      expect(returned_json['cases'][0]['barcode']).to be_falsey
      expect(returned_json['cases'][0]['weight']).to be_falsey
    end
  end

  describe 'GET#items' do
    let!(:tour1) { Tour.first }
    let!(:case1) { FactoryBot.create(:case) }
    let!(:case2) { FactoryBot.create(:case) }
    let!(:case3) { FactoryBot.create(:case) }
    let!(:assignment1) { CaseAssignment.create(case: case1, tour: tour1) }
    let!(:assignment2) { CaseAssignment.create(case: case2, tour: tour1) }
    let!(:assignment3) { CaseAssignment.create(case: case3, tour: tour1) }
    let!(:electronics1) { FactoryBot.create(:electronic, case: case1) }
    let!(:electronics2) { FactoryBot.create(:electronic, case: case1) }
    let!(:electronics3) { FactoryBot.create(:electronic, case: case1) }
    let!(:electronics4) { FactoryBot.create(:electronic, case: case2) }
    let!(:electronics5) { FactoryBot.create(:electronic, case: case3) }
    it 'gets the electronics that are in a case' do
      request.headers.merge! user.create_new_auth_token
      get :items, params: { id: tour1.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json['electronics'].length).to eq 5
      expect(returned_json['electronics'][0]['name']).to be_truthy
      expect(returned_json['electronics'][0]['model_number']).to be_truthy
      expect(returned_json['electronics'][0]['barcode']).to be_truthy
      expect(returned_json['electronics'][0]['serial_number']).to be_falsey
      expect(returned_json['electronics'][0]['cost']).to be_falsey
    end
  end
end
