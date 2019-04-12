# frozen_string_literal: true

module Api
  module V1
    class ImageSerializer < ActiveModel::Serializer
      attributes :original, :thumbnail

      # Абсолютный путь к файлу картинки со стилем main
      def original
        Rails.application.routes.url_helpers.root_url + object.file.url(:main)
      end

      # Абсолютный путь к файлу картинки со стилем thumb
      def thumbnail
        Rails.application.routes.url_helpers.root_url + object.file.url(:thumb)
      end
    end
  end
end
