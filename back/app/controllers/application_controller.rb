class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :split_tokens
  before_action :authenticate_api_v1_user!, unless: -> { request.headers['Authorization'].nil? }
  before_action :configure_permitted_parameters, if: :devise_controller?

  private
    def split_tokens
      return if request.headers['Authorization'].nil?

      token = JSON.parse(Base64.decode64(CGI.unescape(request.headers['Authorization'].match(/Bearer /).post_match)))
      request.headers['access-token'] = token['access-token']
      request.headers['client'] = token['client']
      request.headers['uid'] = token['uid']
    end

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:account_update, keys: [:goal_annual_income])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:goal_annual_income])
    end
end
