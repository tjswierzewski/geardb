class CreateElectronics < ActiveRecord::Migration[5.2]
  def change
    create_table :electronics do |t|
      t.string :name, null: false
      t.string :manufacture, null: false
      t.string :model_number, null: false
      t.string :serial_number, null: false
      t.integer :cost
      t.string :firmware_version
      t.string :software_version
      t.bigint :barcode
      t.timestamps
    end
  end
end
