class CaseSerializer < ActiveModel::Serializer
  attributes :id, :prefix, :case_number
  has_many :electronics
  class ElectronicSerializer < ActiveModel::Serializer
    attributes :id
  end
end
