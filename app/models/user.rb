class User < ApplicationRecord
  before_validation :create_shop

  # Include default devise modules.
  devise :database_authenticatable, :registerable, :recoverable, :rememberable
  :validatable
  include DeviseTokenAuth::Concerns::User
  belongs_to :shop

  private

  def create_shop
    if self[:shop_id] == nil
      self[:shop_id] =
        Shop.create(
          name: Faker::Company.name,
          address: '123 Main st',
          city: 'Boston',
          state: 'MA',
          zipcode: '02135'
        ).id
    end
  end
end
