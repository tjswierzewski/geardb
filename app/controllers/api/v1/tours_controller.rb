class Api::V1::ToursController < ApplicationController
  def index
    render json: Tour.all
  end
end
