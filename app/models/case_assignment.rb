class CaseAssignment < ApplicationRecord
  belongs_to :case
  belongs_to :tour
  validates :case, presence: true
end
