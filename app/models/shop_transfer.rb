class ShopTransfer < ApplicationRecord
  belongs_to :shop
  belongs_to :inventoryable, polymorphic: true
end
