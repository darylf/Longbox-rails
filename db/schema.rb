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

ActiveRecord::Schema.define(version: 20180406222010) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "name"
    t.string "issue"
    t.integer "book_type", default: 0
    t.bigint "series_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["series_id"], name: "index_books_on_series_id"
  end

  create_table "creators", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "publishers", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_publishers_on_name"
  end

  create_table "relations", force: :cascade do |t|
    t.bigint "book_id", null: false
    t.bigint "creator_id", null: false
    t.integer "role", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id", "creator_id", "role"], name: "index_relations_on_book_id_and_creator_id_and_role", unique: true
    t.index ["book_id"], name: "index_relations_on_book_id"
    t.index ["creator_id"], name: "index_relations_on_creator_id"
  end

  create_table "series", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "publisher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_series_on_name"
    t.index ["publisher_id"], name: "index_series_on_publisher_id"
  end

  add_foreign_key "books", "series"
  add_foreign_key "relations", "books"
  add_foreign_key "relations", "creators"
  add_foreign_key "series", "publishers"
end