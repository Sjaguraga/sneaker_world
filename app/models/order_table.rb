class OrderTable < ApplicationRecord
  belongs_to :sneaker
  belongs_to :order
end
