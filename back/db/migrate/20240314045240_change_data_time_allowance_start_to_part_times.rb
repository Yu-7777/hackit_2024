class ChangeDataTimeAllowanceStartToPartTimes < ActiveRecord::Migration[7.0]
  def change
    change_column :part_times, :time_allowance_start, :string
    change_column :part_times, :time_allowance_end, :string
  end
end
