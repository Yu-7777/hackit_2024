class AddJobIdToPartTimes < ActiveRecord::Migration[7.0]
  def change
    add_column :part_times, :job_id, :integer
  end
end
