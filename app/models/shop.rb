class Shop < ApplicationRecord
  has_many :shop_transfers
  has_many :electronics, through: :shop_transfers, source: :inventoryable, source_type: 'Electronic'
  has_many :users
  has_many :cases
  has_many :tours
  validates :name, :address, :city, :state, :zipcode, presence: true
end
