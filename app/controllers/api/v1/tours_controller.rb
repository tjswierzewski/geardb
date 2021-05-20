class Api::V1::ToursController < ApplicationController
  before_action :authenticate_api_v1_user!
  def index
    shop = current_api_v1_user.shop
    tours =
      shop.tours.map do |tour|
        ActiveModelSerializers::SerializableResource.new(tour, { serializer: TourSerializer })
      end
    render json: { tours: tours }
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

  def items
    selected_tour = Tour.find(params[:id])
    items =
      selected_tour.cases.map do |road_case|
        road_case.electronics.map do |electronic|
          ActiveModelSerializers::SerializableResource.new(
            electronic,
            { serializer: ElectronicSerializer }
          )
        end
      end
    items.flatten!
    render json: { electronics: items }
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
