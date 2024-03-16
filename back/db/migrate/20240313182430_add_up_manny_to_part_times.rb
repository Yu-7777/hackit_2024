class AddUpMannyToPartTimes < ActiveRecord::Migration[7.0]
  def change
    add_column :part_times, :up_manny, :integer
  end
end
