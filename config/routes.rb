Rails.application.routes.draw do
  resources :carts
  resources :sneakers, only: %i[index show]
  get "/shoppingcarts/:id", to: "carts#shoppingcart"
  delete "/clearCart/:id", to: "carts#clearCart"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
