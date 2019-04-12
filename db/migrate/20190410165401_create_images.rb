class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.attachment :file
      t.references :excursion, index: true

      t.timestamps
    end
  end
end
