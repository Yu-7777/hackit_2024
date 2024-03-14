class PartTimeController < ApplicationController
  before_action :authenticate_api_v1_user!

  def create
    user_id = current_api_v1_user.id
    part_time = PartTime.new(part_time_params)
    part_time.user_id = user_id

    if part_time.save
      render json: part_time, status: :created
    else
      render json: part_time.errors, status: :unprocessable_entity
    end
  end

  private
  def part_time_params
    params.require(:part_time).permit(
      :job_name, # バイト名
      :hourly_wage, # 時給
      :transportation_allowance, # 交通費
      :holiday_allowance, # 休日手当
      :time_allowance_start, # 時間外手当開始時間
      :time_allowance_end,  # 時間外手当終了時間
      :target_monthly_income, # 目標月収
      :closing_date,  # 締め日
      :transfer_date, # 振込日
      :up_manny, # 時間外手当時の時給
      :part_time_color_id # カラーコード
    )
  end
end
