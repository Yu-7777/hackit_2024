Rails.application.routes.draw do
  resources :calendars
  resources :gachas
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        sessions: 'v1/auth/sessions',
        registrations: 'v1/auth/registrations'
      }
    end
  end


  scope '/users' do
    get "is_signed_in" => "users#is_signed_in"
    get "show" => "users#show"
  end

  resources :part_times
  resources :shifts
end
