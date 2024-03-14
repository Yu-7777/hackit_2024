class V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private
  def sign_up_params
      params.permit(:email, :password, :password_confirmation, :goal_annual_income)
  end
end
