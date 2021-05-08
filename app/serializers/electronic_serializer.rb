class ElectronicSerializer < ActiveModel::Serializer
  attributes :id, :name, :model_number, :barcode
end
