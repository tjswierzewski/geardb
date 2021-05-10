class CreateCaseAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :case_assignments do |t|
      t.references :case, null: false
      t.references :tour, null: false
      t.timestamps
    end
  end
end
