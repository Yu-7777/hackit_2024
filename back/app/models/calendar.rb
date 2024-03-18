class Calendar < ApplicationRecord

  def to_json
    {
      calendar: [
        {
          month: month,
          day: day,
          holiday: holiday,
          shifts: [
            {
              id: shift_id,
              title: shift_title,
              color: colorcode
            }
          ]
        }
      ],
      goalMonthlyIncome: target_monthly_income,
      currentIncome: monthly_incame
    }
  end
end
