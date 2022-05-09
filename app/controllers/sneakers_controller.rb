class SneakersController < ApplicationController
  def index
    render json: Sneaker.all, status: :ok
  end
  def show
    selected_shoe = Sneaker.find(params[:id])
    render json: selected_shoe, status: :ok
  end

  private
end
