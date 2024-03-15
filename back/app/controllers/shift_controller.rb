class ShiftsController < ApplicationController
  require 'httpclient'

def chekc_holiday(data)
  client = HTTPClient.new
  url = "http://api.national-holidays.jp/#{data}"
  response = client.get(url)
  res_json = JSON.parse(response.body)
  res_json.each do |key, value|
    if key == "name"
      holiday = value
    else
      holiday = null
    end
  return holiday
  end

  def show
    shift = Shift.find(params[:id])

    render json: shift
  end

  def create
    work_start = shift_params[:work_start]
    holiday = chekc_holiday(work_start.to_date)
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
      :shift_memo,
      :holiday,
      :job_id,
      :job_name
    )
  end
end
