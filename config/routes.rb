Rails
  .application
  .routes
  .draw do
    root 'homes#index'
    devise_for :users

    namespace :api do
      namespace :v1 do
        resources :tours, only: %i[index create] do
          member { get 'contents' }
          member { get 'items' }
        end
        resources :electronics, only: %i[index create] do
          member { post 'add' }
        end
        resources :cases, only: %i[index create] do
          member { get 'contents' }
          member { post 'add' }
        end
      end
    end
  end
