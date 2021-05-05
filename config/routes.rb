Rails
  .application
  .routes
  .draw do
    root 'homes#index'
    devise_for :users

    namespace :api do
      namespace :v1 do
        resources :electronics, only: [:index]
        resources :cases, only: %i[index create]
      end
    end
  end
