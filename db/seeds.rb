Faker::UniqueGenerator.clear

shop =
  Shop.create(
    name: 'Audio Picture',
    address: '4 Jersey St',
    city: 'Boston',
    state: 'MA',
    zipcode: '02215'
  )

test_user = User.new(email: 'thisismail@gmail.com', password: 'testing', shop: shop)
test_user.save

t1 =
  Tour.create(
    name: 'The Magical Mystery Tour',
    artist: 'The Beatles',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250),
    shop: shop
  )
t2 =
  Tour.create(
    name: 'Not In This Life Time',
    artist: 'Guns and Roses',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250),
    shop: shop
  )
t3 =
  Tour.create(
    name: 'Stop Making Sense',
    artist: 'Talk Heads',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250),
    shop: shop
  )
t4 =
  Tour.create(
    name: 'Turn It On Again',
    artist: 'Genesis',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250),
    shop: shop
  )
t5 =
  Tour.create(
    name: 'Bridges to Babylon',
    artist: 'Rolling Stones',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250),
    shop: shop
  )

c1 =
  Case.create(
    prefix: 'M32',
    case_number: 1,
    height: 48,
    length: 24,
    width: 24,
    weight: 180,
    shop: shop
  )
c2 =
  Case.create(
    prefix: 'WC',
    case_number: Faker::Number.unique.number(digits: 3),
    height: 48,
    length: 24,
    width: 24,
    weight: 180,
    shop: shop
  )
c1.tours << t1
c1.save
c2.tours << t1
c1.save
10.times do
  Case.create(
    prefix: 'WC',
    case_number: Faker::Number.unique.number(digits: 3),
    height: 48,
    length: 24,
    width: 24,
    weight: 180,
    shop: shop
  )
end

e1 =
  Electronic.create(
    name: 'M32 Live',
    manufacture: 'Midas',
    model_number: '000-C7R02-00010',
    serial_number: Faker::Device.unique.serial,
    weight: 55,
    cost: 2999.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c1
  )
e2 =
  Electronic.create(
    name: 'P10R+',
    manufacture: 'Shure',
    model_number: 'P10R+=-G10',
    serial_number: Faker::Device.unique.serial,
    weight: 2,
    cost: 875.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e3 =
  Electronic.create(
    name: 'PSM1000',
    manufacture: 'Shure',
    model_number: 'P10T=-G10',
    serial_number: Faker::Device.unique.serial,
    weight: 7,
    cost: 3105.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e4 =
  Electronic.create(
    name: 'P10R+',
    manufacture: 'Shure',
    model_number: 'P10R+=-G10',
    serial_number: Faker::Device.unique.serial,
    weight: 2,
    cost: 875.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e5 =
  Electronic.create(
    name: 'UA860SWB',
    manufacture: 'Shure',
    model_number: 'UA860SWB',
    serial_number: Faker::Device.unique.serial,
    weight: 1,
    cost: 237.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e6 =
  Electronic.create(
    name: 'ULXD4Q',
    manufacture: 'Shure',
    model_number: 'ULXD4Q=-H50',
    serial_number: Faker::Device.unique.serial,
    weight: 12,
    cost: 5015.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e7 =
  Electronic.create(
    name: 'ULXD2',
    manufacture: 'Shure',
    model_number: 'ULXD2=-H50',
    serial_number: Faker::Device.unique.serial,
    weight: 2,
    cost: 474.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e8 =
  Electronic.create(
    name: 'ULXD2',
    manufacture: 'Shure',
    model_number: 'ULXD2=-H50',
    serial_number: Faker::Device.unique.serial,
    weight: 2,
    cost: 474.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e9 =
  Electronic.create(
    name: 'SM58 Capsule',
    manufacture: 'Shure',
    model_number: 'SM58-C',
    serial_number: Faker::Device.unique.serial,
    weight: 1,
    cost: 100.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )
e10 =
  Electronic.create(
    name: 'SM58 Capsule',
    manufacture: 'Shure',
    model_number: 'SM58-C',
    serial_number: Faker::Device.unique.serial,
    weight: 1,
    cost: 100.00,
    firmware_version: Faker::Internet.ip_v4_address,
    software_version: Faker::Computer.os,
    barcode: Faker::Barcode.unique.ean,
    case: c2
  )

[e1, e2, e3, e4, e5, e6, e7, e8, e9, e10].each { |e| shop.electronics << e }
shop.save
