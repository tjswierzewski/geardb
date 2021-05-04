require 'rails_helper'

RSpec.describe Api::V1::ElectronicsController, type: :controller do
  let!(:electronics) { FactoryBot.create_list(:electronic, 5) }

  describe 'GET#index' do
    it 'should return a list of all electronics' do
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
end
