class CreateShopTransfers < ActiveRecord::Migration[5.2]
  def change
    create_table :shop_transfers do |t|
      t.references :shop, null: false
      t.references :inventoryable, polymorphic: true
      t.timestamps
    end
  end
end
