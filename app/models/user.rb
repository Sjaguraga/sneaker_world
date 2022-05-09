class User < ApplicationRecord
  has_secure_password

  has_many :carts
  has_many :sneakers, through: :carts

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
