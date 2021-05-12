class Shop < ApplicationRecord
  has_many :shop_transfers
  has_many :electronics, through: :shop_transfers, source: :inventoryable, source_type: 'Electronic'
  validates :name, :address, :city, :state, :zipcode, presence: true
end
