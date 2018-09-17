class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :menu_items
      t.float :price

      t.timestamps
    end
  end
end
