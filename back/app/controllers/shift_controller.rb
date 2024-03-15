class ShiftsController < ApplicationController
  require 'httpclient'

  def show
    shift = Shift.find(params[:id])

    render json: shift
  end

  def create
    shift = Shift.new(shift_params)

    if shift.save
      render json: shift, include: :part_time, status: :created
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

  def part_time_params
    params.require(:part_time).permit(
      :job_id,
      :job_name
    )
  end
end
