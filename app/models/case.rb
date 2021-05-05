class Case < ApplicationRecord
  validates :prefix, :case_number, :height, :width, :length, :weight, presence: true
end
