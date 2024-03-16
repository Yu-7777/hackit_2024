class GachasController < ApplicationController
  before_action :set_gacha, only: %i[ show update destroy ]

  # GET /gachas/1
  def show
    user_id = current_api_v1_user.id
    gacha = Gacha.find(params[:id])

    if user_id == gacha.user_id
      render json: gacha.to_json
    else
      render json: gacha.errors, status: :unprocessable_entity
    end
  end

  # POST /gachas
  def create
    user_id = current_api_v1_user.id
    gacha = Gacha.find(params[:id])
    gacha.user_id = user_id

    if gacha.save
      render json: gacha.to_json, status: :created
    else
      render json: gacha.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gachas/1
  def update
    user_id = current_api_v1_user
    gacha = Gacha.find(params[:id])

    if gacha.user_id == user_id && gacha.update(gach_params)
      render json: gacha.to_json, status: :ok
    else
      render json: gacha.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gachas/1
  def destroy
    @gacha.destroy
  end

  private
    def gacha_params
      params.require(:gacha).permit(
        :user_id,
        :title,
        :money,
        :count,
        :memo
      )
    end
end
