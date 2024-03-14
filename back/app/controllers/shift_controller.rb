class ShiftsController < ApplicationController
  require 'httpclient'

  def show
    shift = Shift.find(params[:id])

    render json: shift
  end

  def create
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
