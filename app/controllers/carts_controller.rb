class CartsController < ApplicationController
  def cart
    user_items = Cart.where(user_id: params[:id])
    render json: user_items
  end

  def create
    new_user_item = Cart.create!(user_sneaker_params)
    render json: new_user_item, status: :created
  end

  def destroy
    sneaker = Cart.find(params[:id])
    sneaker.destroy
    render json: sneaker
  end

  private

  def user_sneaker_params
    params.permit(:user_id, :sneaker_id)
  end
end
