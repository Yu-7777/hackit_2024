class CalendarsController < ApplicationController
  before_action :set_calendar, only: %i[ show update destroy ]

  # GET /calendars
  def index
    user_id = current_api_v1_user.id

    # ユーザのバイト情報を取得
    part_times = PartTime.where(user_id: user_id)
    shifts = Shift.where(part_time_id: part_times.ids)

    # カレンダーに表示するためのデータを作成
    convert_shifts = []
    shifts.each do |shift|
      convert_shifts.push({
        id: shift.id,
        title: shift.shift_title,
        color: shift.part_time.part_time_color.colorcode,
        date: shift.work_start.strftime("%Y-%m-%d"),
        end_date: shift.work_end.strftime("%Y-%m-%d"),
        work_start: shift.work_start.strftime("%H:%M"),
        work_end: shift.work_end.strftime("%H:%M"),
        part_time: {
          id: shift.part_time.id,
          hourly_wage: shift.part_time.hourly_wage,
        }
    })
    end

    json_data = {
      calendar: { shifts: convert_shifts },
      goalAnnualIncome: current_api_v1_user.goal_annual_income
    }

    render json: json_data
  end

  # GET /calendars/1
  def show
    render json: @calendar
  end

  # POST /calendars
  def create
    @calendar = Calendar.new(calendar_params)

    if @calendar.save
      render json: @calendar, status: :created, location: @calendar
    else
      render json: @calendar.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /calendars/1
  def update
    if @calendar.update(calendar_params)
      render json: @calendar
    else
      render json: @calendar.errors, status: :unprocessable_entity
    end
  end

  # DELETE /calendars/1
  def destroy
    @calendar.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar
      @calendar = Calendar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calendar_params
      params.require(:calendar).permit(:month, :day)
    end
end
