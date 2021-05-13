Rails
  .application
  .routes
  .draw do
    root 'homes#index'

    namespace :api do
      namespace :v1 do
        mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
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
