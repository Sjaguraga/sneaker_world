class CreateOrderTables < ActiveRecord::Migration[6.1]
  def change
    create_table :order_tables do |t|
      t.belongs_to :sneaker, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
