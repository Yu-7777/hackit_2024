class AddUserIdToGachas < ActiveRecord::Migration[7.0]
  def change
    add_column :gachas, :user_id, :integer
  end
end
