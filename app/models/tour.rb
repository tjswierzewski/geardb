class Tour < ApplicationRecord
  has_many :case_assignments
  has_many :cases, through: :case_assignments
  belongs_to :shop
  validates :name, :duration, presence: true
end
