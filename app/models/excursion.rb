class Excursion < ApplicationRecord
  has_attached_file :image, styles: { main: '1000x560>', thumb: '100x55>' }
  crop_attached_file :image, aspect: 420..235
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_size :image, less_than: 10.megabytes

  validates :title, :description, presence: true
end
