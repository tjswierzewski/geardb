# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_13_180410) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "case_assignments", force: :cascade do |t|
    t.bigint "case_id", null: false
    t.bigint "tour_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["case_id"], name: "index_case_assignments_on_case_id"
    t.index ["tour_id"], name: "index_case_assignments_on_tour_id"
  end

  create_table "cases", force: :cascade do |t|
    t.string "prefix", null: false
    t.integer "case_number", null: false
    t.integer "height", null: false
    t.integer "width", null: false
    t.integer "length", null: false
    t.integer "weight", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "electronics", force: :cascade do |t|
    t.string "name", null: false
    t.string "manufacture", null: false
    t.string "model_number", null: false
    t.string "serial_number", null: false
    t.integer "weight"
    t.integer "cost"
    t.string "firmware_version"
    t.string "software_version"
    t.bigint "barcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "case_id"
    t.index ["case_id"], name: "index_electronics_on_case_id"
  end

  create_table "shop_transfers", force: :cascade do |t|
    t.bigint "shop_id", null: false
    t.string "inventoryable_type"
    t.bigint "inventoryable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["inventoryable_type", "inventoryable_id"], name: "index_shop_transfers_on_inventoryable_type_and_inventoryable_id"
    t.index ["shop_id"], name: "index_shop_transfers_on_shop_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tours", force: :cascade do |t|
    t.string "name", null: false
    t.daterange "duration", null: false
    t.string "artist"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "electronics", "cases"
end
