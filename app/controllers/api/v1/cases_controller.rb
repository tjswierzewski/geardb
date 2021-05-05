class Api::V1::CasesController < ApplicationController
  def index
    render json: Case.all
  end
end
