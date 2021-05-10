class Tour < ApplicationRecord
  has_many :case_assignments
  has_many :cases, through: :case_assignments
  validates :name, :duration, presence: true
end
