class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.string :name, null: false
      t.daterange :duration, null: false
      t.string :artist
      t.timestamps
    end
  end
end
