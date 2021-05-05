class AddCasesToElectronics < ActiveRecord::Migration[5.2]
  def change
    add_reference :electronics, :case, foreign_key: true
  end
end
