class AddUserColumnGoalAnnualIncome < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :goal_annual_income, :integer
  end
end
