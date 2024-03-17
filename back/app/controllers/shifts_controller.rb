class ShiftsController < ApplicationController

  require 'httpclient'

def chekc_holiday(data)
  client = HTTPClient.new
  url = "http://api.national-holidays.jp/#{data}"
  begin
    response = client.get(url)
    res_json = JSON.parse(response.body)
    if res_json.has_key?("error") && res_json["error"] == "not_found"
      return nil
    elsif res_json.has_key?("name")
      return res_json["name"]
    else
      Rails.logger.erorr "API response format error: #{res_json}"
      return nil
    end
  rescue => e
    return "取得に失敗しました"
    Rails.logger.error "Error fetching holiday data: #{e}"
  end

  def show
    user_id = current_api_v1_user.id
    shift = Shift.find(params[:id])

    if user_id == part_time.user_id
      render json: shift
    else
      render json: shift.errors, status: :unprocessable_entity
    end
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

  def update
    user_id = current_api_v1_user.id
    shift = Shift.find(params[:id])

    if part_time.user_id == user_id && shift.update(shift_params)
      render json: shift, status: :ok
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
      :part_time_id,
      :job_name,
      :user_id
    )
  end
end
end
