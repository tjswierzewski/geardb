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
end
