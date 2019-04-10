Rails.application.routes.draw do
  default_url_options Rails.application.config.action_mailer.default_url_options

  devise_for :users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)

  namespace :api do
    namespace :v1 do
      resources :excursions, only: %i(index create destroy update)
    end
  end

  root to: 'home#index'
end
