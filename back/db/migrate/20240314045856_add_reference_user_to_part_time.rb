class AddReferenceUserToPartTime < ActiveRecord::Migration[7.0]
  def change
    add_reference :part_times, :user, foreign_key: true, null: false
  end
end
