require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  Faker::UniqueGenerator.clear
  factory :electronic do
    name { Faker::Appliance.equipment }
    manufacture { Faker::Appliance.brand }
    model_number { Faker::Barcode.ean }
    serial_number { Faker::Device.serial }
    cost { Faker::Number.number(digits: 3) }
    firmware_version { Faker::Internet.ip_v4_address }
    software_version { Faker::Computer.os }
    barcode { Faker::Barcode.ean }
  end

  factory :case do
    prefix { 'MA' }
    case_number { Faker::Number.number(digits: 3) }
    height { 48 }
    length { 24 }
    width { 24 }
    weight { 180 }
  end

  factory :tour do
    name { Faker::Esport.event }
    artist { Faker::Kpop.boy_bands }
    duration { Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250) }
  end
end
