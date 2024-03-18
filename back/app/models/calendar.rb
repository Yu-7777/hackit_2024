class Calendar < ApplicationRecord

  def to_json(user_id)
    # ユーザのバイト情報を取得
    part_times = PartTime.where(user_id: user_id)

    shifts = Shift.where(part_time_id: part_times.ids)

    # カレンダーに表示するためのデータを作成
    convert_shifts = []
    shifts.each do |shift|
      convert_shifts.push({
        "id": shift.id,
        "title": shift.shift_title,
        "color": shift.part_time.part_time_color.colorcode,
        "date": shift.work_start.strftime("%Y-%m-%d"),
    })
    end

    return {
      calendar: [
        {
          shifts: convert_shifts
        }
      ],
      goalMonthlyIncome: target_monthly_income,
      currentIncome: monthly_incame
    }
  end
end
