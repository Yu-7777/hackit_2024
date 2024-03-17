class AddShiftsRelationShipToPartTime < ActiveRecord::Migration[7.0]
  def change
    add_reference :shifts, :part_time, foreign_key: true, null: false
  end
end
