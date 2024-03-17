class DeleteShiftId < ActiveRecord::Migration[7.0]
  def change
    remove_column :shifts, :shift_id
  end
end
