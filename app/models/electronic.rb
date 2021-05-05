class Electronic < ApplicationRecord
  belongs_to :case, optional: true
  validates :name, :manufacture, :model_number, :serial_number, presence: true
end
