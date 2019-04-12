class Image < ApplicationRecord
  has_attached_file :file, styles: { main: '500x313#', thumb: '110x68#' }
  validates_attachment_content_type :file, content_type: /\Aimage\/.*\z/
  validates_attachment_size :file, less_than: 10.megabytes

  validates :file, presence: true
end
