class PartTime < ApplicationRecord
    has_many :shits
    belongs_to :part_time_color

    def to_index_part_times_json
        {
            id: part_time_id,
            name: job_name
        }.to_json
    end

    def to_create_part_time_json
        {
            name: job_name,
            color: part_time_color_id,
            closingDate: closing_date,
            payDay: transfer_date,
            pay: hourly_wage
        }.to_json
    end
end
