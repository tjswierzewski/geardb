class Api::V1::ElectronicsController < ApplicationController
  before_action :authenticate_api_v1_user!
  def index
    render json: Electronic.all
  end

  def create
    new_electronic = Electronic.new(electronic_params)
    if new_electronic.save
      render json: new_electronic, serializer: ElectronicSerializer
    else
      render json: { errors: new_electronic.errors.to_hash(true) }, status: :unprocessable_entity
    end
  end

  def add
    electronic = Electronic.find(params[:id])
    road_case = Case.find(params[:electronic][:id])
    electronic.case = road_case
    if electronic.save
      render json: electronic, serializer: ElectronicSerializer
    else
      render json: { errors: new_electronic.errors.to_hash(true) }, status: :unprocessable_entity
    end
  end

  private

  def electronic_params
    params.permit(
      :name,
      :manufacture,
      :model_number,
      :serial_number,
      :weight,
      :cost,
      :frimware_version,
      :software_version,
      :barcode
    )
  end
end
