class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.string :image
      t.string :brand
      t.text :description
      t.integer :price

      t.timestamps
    end
  end
end
