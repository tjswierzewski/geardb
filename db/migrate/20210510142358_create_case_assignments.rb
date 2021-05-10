class CreateCaseAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :case_assignments do |t|
      t.references :case, null: false
      t.references :tour
      t.timestamps
    end
  end
end
