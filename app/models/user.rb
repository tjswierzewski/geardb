class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable, :recoverable, :rememberable
  :validatable
  include DeviseTokenAuth::Concerns::User
  belongs_to :shop
end
