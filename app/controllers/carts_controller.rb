class CartsController < ApplicationController
  def shoppingcart
    user_items = Cart.where(user_id: params[:id])
    puts user_items
    render json: user_items
  end

  def index
    allCart = Cart.all
    render json: allCartc
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

  def clearCart
    user_items = Cart.where(user_id: params[:id])
    user_items.destroy_all
    render json: user_items
  end

  private

  def user_sneaker_params
    params.permit(:user_id, :sneaker_id)
  end
end
