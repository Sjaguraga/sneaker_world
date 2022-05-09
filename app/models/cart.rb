class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :sneaker
  validates :sneaker,
            uniqueness: {
              scope: :user_id,
              message: "only one sneaker per user"
            }
end
