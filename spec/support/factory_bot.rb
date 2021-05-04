require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  FactoryBot.define do
    factory :electronic do
      name { Faker::Appliance.equipment }
      manufacture { Faker::Appliance.brand }
      model_number { Faker::Barcode.ean }
      serial_number { Faker::Device.unique.serial }
      cost { Faker::Number.number(digits: 3) }
      firmware_version { Faker::Internet.ip_v4_address }
      software_version { Faker::Computer.os }
      barcode { Faker::Barcode.unique.ean }
    end
  end
end
