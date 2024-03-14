class ShiftsController < ApplicationController
  before_action :set_shift, only[:show, :edit, :update, :destroy]
  require 'httpclient'

  def show
    user_id = current_api_v1_user
    shift = Shift.find(params[:id])

    render shift
  end

  def create
    user_id = current_api_v1_user
    shift = Shift.new(shift_params)

    if shift.save
      render json: shift, status: :created
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  private
  def shift_params
    params.require(:shift).permit(
      :shift_id,
      :partTimes,
      :shift_title,
      :work_start,
      :work_end,
      :rest_time,
      :shift_memo
    )
  end

  def partTimes_params
    params.require(:partTimes).permit(
      :job_id,
      :job_name
    )
  end
end
