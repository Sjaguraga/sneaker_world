Rails.application.routes.draw do
  resources :carts, only: %i[index create destroy]
  resources :sneakers, only: %i[index show]
  get "/carts/:id", to: "carts#cart"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
