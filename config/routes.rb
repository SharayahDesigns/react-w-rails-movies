Rails.application.routes.draw do
namespace :api do
# resources :facts
get 'movies', to: 'movies#index'
get 'movies/:id', to: 'movies#show'
# client send in param {movie:{username, text, stars(0-5) source}}
post 'movies', to: 'movies#create'
put 'movies/:id', to: 'movies#update'
delete 'movies/:id', to: 'movies#destroy'

  end
end
