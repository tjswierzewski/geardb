class Case < ApplicationRecord
  has_many :electronics
  validates :prefix, :case_number, :height, :width, :length, :weight, presence: true
end
