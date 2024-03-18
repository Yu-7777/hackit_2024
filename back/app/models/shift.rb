class Shift < ApplicationRecord
  belongs_to :part_time

  def index_shifts_to_json
    {
      id: self.id,
      part_time_id: part_time_id,
      shift: self
    }
  end

  def show_shifts_to_json
    {
      part_time_id: part_time_id,
      shift: self
    }
  end
end
