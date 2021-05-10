require 'rails_helper'

RSpec.describe Api::V1::ToursController, type: :controller do
  let!(:tours) { FactoryBot.create_list(:tour, 5) }

  describe 'GET#index' do
    it 'should return a list of all cases' do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 5
      expect(returned_json[0]['name']).to be_truthy
      expect(returned_json[0]['artist']).to be_truthy
      expect(returned_json[0]['duration']).to be_falsey
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
      post(:create, params: post_json, format: :json)
      expect(Tour.count).to eq(prev_count + 1)
    end

    it 'returns a persisted electronic' do
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json['id']).to be_truthy
      expect(returned_json['name']).to eq 'The Magical Mystery Tour'
      expect(returned_json['artist']).to eq 'The Beatles'
    end

    it 'does not create an electronic when incorrect data is recieved.' do
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
end
