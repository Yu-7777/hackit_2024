# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_03_14_184830) do
  create_table "part_time_colors", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "colorcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "part_times", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "job_name"
    t.integer "hourly_wage"
    t.integer "transportation_allowance"
    t.integer "Holiday_allowance"
    t.string "time_allowance_start"
    t.string "time_allowance_end"
    t.integer "target_monthly_income"
    t.integer "closing_date"
    t.integer "transfer_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "up_manny"
    t.integer "part_time_id"
    t.bigint "user_id", null: false
    t.bigint "part_time_color_id", null: false
    t.index ["part_time_color_id"], name: "index_part_times_on_part_time_color_id"
    t.index ["user_id"], name: "index_part_times_on_user_id"
  end

  create_table "shifts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "shift_id"
    t.string "shift_title"
    t.datetime "work_start"
    t.datetime "work_end"
    t.integer "rest_time"
    t.string "shift_memo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
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
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "goal_annual_income"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "part_times", "part_time_colors"
  add_foreign_key "part_times", "users"
end
