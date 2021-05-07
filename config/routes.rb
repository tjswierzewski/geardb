Rails
  .application
  .routes
  .draw do
    root 'homes#index'
    devise_for :users

    namespace :api do
      namespace :v1 do
        resources :electronics, only: %i[index create]
        resources :cases, only: %i[index create] do
          resources :electronics, only: [] do
            member { post 'add' }
          end
        end
      end
    end
  end
