class Electronic < ApplicationRecord
  belongs_to :case, optional: true
  has_many :shop_transfers, as: :inventoryable
  has_many :shops, through: :shop_transfers
  validates :name, :manufacture, :model_number, :serial_number, presence: true
end
