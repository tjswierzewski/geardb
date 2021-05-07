class ElectronicSerializer < ActiveModel::Serializer
  attributes :id, :name, :model_number, :barcode
  belongs_to :case
end
