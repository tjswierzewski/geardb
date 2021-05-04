class Electronic < ApplicationRecord
  validates :name, :manufacture, :model_number, :serial_number, presence: true
end
