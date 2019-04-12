class Excursion < ApplicationRecord
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true

  has_attached_file :image, styles: { main: '1100x688#', list_item: '500x313#', thumb: '110x68#' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_size :image, less_than: 10.megabytes

  validates :title, :description, :image, presence: true
end
