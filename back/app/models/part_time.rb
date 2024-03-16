class PartTime < ApplicationRecord
    has_many :shits
    belongs_to :part_time_color

    def index_part_times_to_json
        {
            id: part_time_id,
            name: job_name
        }
    end

    def details_part_time_to_json
        {
            id: part_time_id,
            name: job_name,
            color: part_time_color_id,
            closingDate: closing_date,
            payDay: transfer_date,
            pay: hourly_wage
        }
    end
end
