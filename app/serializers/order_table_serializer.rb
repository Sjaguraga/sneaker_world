class OrderTableSerializer < ActiveModel::Serializer
  attributes :id
  has_one :sneaker
  has_one :order
end
