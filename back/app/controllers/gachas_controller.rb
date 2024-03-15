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
    @gacha = Gacha.new(gacha_params)

    if @gacha.save
      render json: @gacha, status: :created, location: @gacha
    else
      render json: @gacha.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gachas/1
  def update
    if @gacha.update(gacha_params)
      render json: @gacha
    else
      render json: @gacha.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gachas/1
  def destroy
    @gacha.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gacha
      @gacha = Gacha.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def gacha_params
      params.require(:gacha).permit(:title, :money, :count, :memo)
    end
end
