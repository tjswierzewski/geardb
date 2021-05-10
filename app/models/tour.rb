class Tour < ApplicationRecord
  validates :name, :duaration, presence: true
end
