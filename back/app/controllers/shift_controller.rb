class ShiftsController < ApplicationController
  require 'httpclient'

def chekc_holiday(data)
  client = HTTPClient.new
  url = "http://api.national-holidays.jp/#{data}"
  begin
    response = client.get(url)
    res_json = JSON.parse(response.body)
    if res_json.has_key?("error") && res_json["error"] == "not_found"
      return national
    elsif res_json.has_key?("name")
      return res_json["name"]
    else
      return nil
    end
  rescue => e
    return "取得に失敗しました"
  end

  def show
    shift = Shift.find(params[:id])

    render json: shift
  end

  def create
    work_start = shift_params[:work_start]
    holiday = chekc_holiday(work_start.to_date)
    shift = Shift.new(shift_params.merge(holiday: holiday))

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
