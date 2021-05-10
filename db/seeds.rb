Faker::UniqueGenerator.clear
15.times do
  Electronic.create(
    name: Faker::Appliance.equipment,
    manufacture: Faker::Appliance.brand,
    model_number: Faker::Barcode.ean,
    serial_number: Faker::Device.unique.serial,
    cost: Faker::Number.number(digits: 3),
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean
  )
end

3.times do
  Case.create(
    prefix: 'MA',
    case_number: Faker::Number.number(digits: 3),
    height: 48,
    length: 24,
    width: 24,
    weight: 180
  )
end
