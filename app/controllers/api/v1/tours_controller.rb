class Api::V1::ToursController < ApplicationController
  def index
    render json: Tour.all
  end

  def create
    tour = Tour.new(tour_params)
    if tour.save
      render json: tour, serializer: TourSerializer
    else
      render json: { errors: tour.errors.to_hash(true) }, status: :unprocessable_entity
    end
  end

  def contents
    selected_tour = Tour.find(params[:id])
    cases =
      selected_tour.cases.map do |road_case|
        ActiveModelSerializers::SerializableResource.new(road_case, { serializer: CaseSerializer })
      end
    render json: { cases: cases }
  end

  private

  def tour_params
    params.permit(:name, :artist, :start_date, :end_date)
    {
      name: params['name'],
      artist: params['artist'],
      duration: params['start_date']..params['end_date']
    }
  end
end
