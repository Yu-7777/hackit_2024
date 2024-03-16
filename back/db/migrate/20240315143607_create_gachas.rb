class CreateGachas < ActiveRecord::Migration[7.0]
  def change
    create_table :gachas do |t|
      t.string :title
      t.integer :money
      t.integer :count
      t.string :memo

      t.timestamps
    end
  end
end
