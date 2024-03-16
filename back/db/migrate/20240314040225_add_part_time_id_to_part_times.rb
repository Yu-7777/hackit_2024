class AddPartTimeIdToPartTimes < ActiveRecord::Migration[7.0]
  def change
    add_column :part_times, :part_time_id, :integer
  end
end
