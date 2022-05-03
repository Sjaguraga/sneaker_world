class SneakersController < ApplicationController
def index
    render json: Sneaker.all, status: :ok
end
end
