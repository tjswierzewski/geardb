class Api::V1::ElectronicsController < ApplicationController
  def index
    render json: Electronic.all
  end
end
