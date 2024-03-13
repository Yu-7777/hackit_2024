class CreatePartTimeColors < ActiveRecord::Migration[7.0]
  def change
    create_table :part_time_colors do |t|
      t.string :name
      t.string :colorcode

      t.timestamps
    end
  end
end
