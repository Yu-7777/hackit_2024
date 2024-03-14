class AddReferencePartTimeColorToPartTime < ActiveRecord::Migration[7.0]
  def change
    add_reference :part_times, :part_time_color, foreign_key: true, null: false
  end
end
