class AddHolidayToShifts < ActiveRecord::Migration[7.0]
  def change
    add_column :shifts, :holiday, :string
  end
end
