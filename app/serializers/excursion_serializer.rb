class ExcursionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url

  # Абсолютный путь к изображению новости
  def image_url
    Rails.application.routes.url_helpers.root_url + object.image.url(:main)
  end
end
