class Api::V1::CasesController < ApplicationController
  before_action :authenticate_api_v1_user!
  def index
    render json: Case.all
  end

  def create
    new_case = Case.new(case_params)
    if new_case.save
      render json: new_case, serializer: CaseSerializer
    else
      render json: { errors: new_case.errors.to_hash(true) }, status: :unprocessable_entity
    end
  end

  def contents
    selected_case = Case.find(params[:id])
    electronics =
      selected_case.electronics.map do |electronic|
        ActiveModelSerializers::SerializableResource.new(
          electronic,
          { serializer: ElectronicSerializer }
        )
      end
    render json: { electronics: electronics }
  end

  def add
    road_case = Case.find(params[:id])
    tour = Tour.find(params[:case][:id])
    tour.cases << road_case
    if tour.save
      render json: road_case, serializer: CaseSerializer
    else
      render json: { errors: road_case.errors.to_hash(true) }, status: :unprocessable_entity
    end
  end

  private

  def case_params
    params.permit(:prefix, :case_number, :height, :length, :width, :weight)
  end
end
