# app/controllers/incomes_controller.rb

class IncomesController < ApplicationController
    def record_income
      # リクエストボディから年収と月収を取得
      yearly_income = params[:income][:yearly_income].to_i
      monthly_income = params[:income][:monthly_income].to_i
  
      # データベースに年収と月収を保存
      income = Income.new(yearly_income: yearly_income, monthly_income: monthly_income)
      if income.save
        render json: income, status: :ok
      else
        render json: income, status: :unprocessable_entity
      end
    end
  end
  