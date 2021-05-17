Faker::UniqueGenerator.clear

test_user = User.new(email: 'thisismail@gmail.com', password: 'testing')
test_user.save

t1 =
  Tour.create(
    name: 'The Magical Mystery Tour',
    artist: 'The Beatles',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250)
  )
t2 =
  Tour.create(
    name: 'Not In This Life Time',
    artist: 'Guns and Roses',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250)
  )
t3 =
  Tour.create(
    name: 'Stop Making Sense',
    artist: 'Talk Heads',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250)
  )
t4 =
  Tour.create(
    name: 'Turn It On Again',
    artist: 'Genesis',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250)
  )
t5 =
  Tour.create(
    name: 'Bridges to Babylon',
    artist: 'Rolling Stones',
    duration: Faker::Date.backward(days: 250)..Faker::Date.forward(days: 250)
  )

c1 = Case.create(prefix: 'M32', case_number: 1, height: 48, length: 24, width: 24, weight: 180)
c2 =
  Case.create(
    prefix: 'WC',
    case_number: Faker::Number.unique.number(digits: 3),
    height: 48,
    length: 24,
    width: 24,
    weight: 180
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
    weight: 180
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
