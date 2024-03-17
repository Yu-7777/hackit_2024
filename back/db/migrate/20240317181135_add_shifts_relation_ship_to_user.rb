class AddShiftsRelationShipToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :shifts, :user, foreign_key: true, null: false
  end
end
