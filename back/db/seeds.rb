# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

default_color_data = [
  {
    "name": "レッド",
    "colorcode": "#F64D4D"
  },
  {
    "name": "ブルー",
    "colorcode": "#0038FF"
  },
  {
    "name": "イエロー",
    "colorcode": "#FAFF00"
  },
  {
    "name": "グリーン",
    "colorcode": "#00FF0A"
  }
]

default_color_data.each do |color|
  PartTimeColor.find_or_create_by!(color)
end
