class CreatePartTimes < ActiveRecord::Migration[7.0]
  def change
    create_table :part_times do |t|
      t.string :job_name
      t.integer :hourly_wage
      t.integer :transportation_allowance
      t.integer :Holiday_allowance
      t.integer :time_allowance_start
      t.integer :time_allowance_end
      t.integer :target_monthly_income
      t.integer :closing_date
      t.integer :transfer_date

      t.timestamps
    end
  end
end
