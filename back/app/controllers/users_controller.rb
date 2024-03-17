class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: @user
  end

  def new
    @user = User.new
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy!
  end

  def is_signed_in
    res = current_api_v1_user
    render json: {res: res}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      user = current_api_v1_user
      @user = User.find(user.id)
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:email, :password_digest, :remember_token)
    end
end
