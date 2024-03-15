class Shift < ApplicationRecord
  belongs_to :parttime

  def to_json
    {
      id: shift_id,
      partTimes: {
        id:   job_id,
        name: job_name
      }
      title: shift_title,
      start: work_start,
      end: work_end,
      restTime: rest_time,
      memo: shift_memo
    }
  end
end
