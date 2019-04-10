class CreateExcursions < ActiveRecord::Migration[5.2]
  def change
    create_table :excursions do |t|
      t.string :title
      t.attachment :image
      t.text :description

      t.timestamps
    end
  end
end
