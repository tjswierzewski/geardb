class TourSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist
  has_many :cases
  class CaseSerializer < ActiveModel::Serializer
    attributes :id
  end
end
