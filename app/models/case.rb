class Case < ApplicationRecord
  has_many :electronics
  has_many :case_assignments
  has_many :tours, through: :case_assignments
  validates :prefix, :case_number, :height, :width, :length, :weight, presence: true
end
