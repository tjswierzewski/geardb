class CreateCases < ActiveRecord::Migration[5.2]
  def change
    create_table :cases do |t|
      t.string :prefix, null: false
      t.integer :case_number, null: false
      t.integer :height, null: false
      t.integer :width, null: false
      t.integer :length, null: false
      t.integer :weight, null: false
      t.timestamps
    end
  end
end
