require 'factory_bot'

FactoryBot.define do
  factory :shop do
    name { Faker::Company.name }
    address { '123 Main st' }
    city { 'Boston' }
    state { 'MA' }
    zipcode { '02135' }
  end

  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    shop { Shop.first || association(:shop) }
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
    shops { [Shop.first] || association(:shops) }
  end

  factory :case do
    prefix { 'MA' }
    case_number { Faker::Number.number(digits: 3) }
    height { 48 }
    length { 24 }
    width { 24 }
    weight { 180 }
    shop { Shop.first || association(:shop) }
  end

  factory :tour do
    name { Faker::Esport.event }
    artist { Faker::Kpop.boy_bands }
    duration { Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250) }
    shop { Shop.first || association(:shop) }
  end
end
