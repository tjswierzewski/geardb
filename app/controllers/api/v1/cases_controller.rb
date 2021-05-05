class Api::V1::CasesController < ApplicationController
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

  private

  def case_params
    params.permit(:prefix, :case_number, :height, :length, :width, :weight)
  end
end
