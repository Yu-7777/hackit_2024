class PartTimeColor < ApplicationRecord
  has_many :part_times, dependent: :destroy
end
