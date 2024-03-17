class CreateIncames < ActiveRecord::Migration[7.0]
  def change
    create_table :incames do |t|
      t.integer :yearly_incame
      t.integer :monthly_incame

      t.timestamps
    end
  end
end
