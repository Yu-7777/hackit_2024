class PartTime < ApplicationRecord
    has_many :shits
    belongs_to :part_time_color
end
