class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :brand, :description, :price
end
