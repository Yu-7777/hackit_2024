class AddProbability < ActiveRecord::Migration[7.0]
  def change
    add_column :gachas, :probability, :integer
  end
end
