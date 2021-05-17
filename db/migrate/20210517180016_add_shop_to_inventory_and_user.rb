class AddShopToInventoryAndUser < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :shop, foreign_key: true
    add_reference :cases, :shop, foreign_key: true
    add_reference :tours, :shop, foreign_key: true
  end
end
