Rails.application.routes.draw do
namespace :api do
# resources :facts
get 'movies', to: 'movies#index'
get 'movies/:id', to: 'movies#show'
# client send in param {movie:{username, text, stars(0-5) source}}
post 'movies', to: 'movies#create'
put 'movies/:id', to: 'movies#update'
delete 'movies/:id', to: 'movies#destroy'

get 'images', to: 'images#index'
get 'images/:id', to: 'images#show'
# client send in param {movie:{username, text, stars(0-5) source}}
post 'images', to: 'images#create'
put 'images/:id', to: 'images#update'
delete 'images/:id', to: 'images#destroy'

  end
end
