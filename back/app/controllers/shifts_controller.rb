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
  end

  def show
    user_id = current_api_v1_user.id
    shift = Shift.find(params[:id])

    if user_id == shift.user_id
      render json: shift.show_shifts_to_json, satatus: :ok
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def create
    user_id = current_api_v1_user.id
    shift = Shift.new(shift_params)
    shift.user_id = user_id
    shift.part_time = PartTime.find(shift_params[:part_time_id])

    if shift.save
      render json: shift, status: :created
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def update
    user_id = current_api_v1_user.id
    shift = Shift.find(params[:id])

    if shift.user_id == user_id && shift.update(shift_params)
      render json: shift, status: :ok
    else
      render json: shift.errors, status: :unprocessable_entity
    end
  end

  def index
    user_id = current_api_v1_user.id
    shift = Shift.where(user_id: user_id)

    render json: shift.map(&:index_shifts_to_json), status: :ok
  end

  def destroy
    user_id = current_api_v1_user.id
    shifts = Shift.find(params[:id])

    if user_id == shifts.user_id
      shifts.destroy!
    end
  end

  private
  def shift_params
    params.require(:shift).permit(
      :part_time_id,
      :shift_title,
      :work_start,
      :work_end,
      :rest_time,
      :shift_memo,
      :user_id
    )
  end
end
