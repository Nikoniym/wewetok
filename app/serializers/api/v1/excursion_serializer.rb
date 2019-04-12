# frozen_string_literal: true

module Api
  module V1
    class ExcursionSerializer < ActiveModel::Serializer
      attributes :id, :title, :description, :image_url, :image_list_item

      has_many :images

      # Абсолютный путь к изображению экскурсии на странице show
      def image_url
        Rails.application.routes.url_helpers.root_url + object.image.url(:main)
      end

      # Абсолютный путь к изображению экскурсии на главной странице
      def image_list_item
        Rails.application.routes.url_helpers.root_url + object.image.url(:list_item)
      end
    end
  end
end
