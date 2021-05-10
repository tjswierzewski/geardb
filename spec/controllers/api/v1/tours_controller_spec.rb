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
end
