class CreateShifts < ActiveRecord::Migration[7.0]
  def change
    create_table :shifts do |t|
      t.integer :shift_id
      t.string :shift_title
      t.datetime :work_start
      t.datetime :work_end
      t.integer :rest_time
      t.string :shift_memo

      t.timestamps
    end
  end
end
