class RemoveShiftHoliday < ActiveRecord::Migration[7.0]
  def change
    remove_column :shifts, :holiday
  end
end
