ActiveAdmin.register Excursion do
  actions :all, except: :show
  config.filters = false

  index do
    column :image do |excurcion|
      image_tag excurcion.image.url(:thumb)
    end
    column :title
    column :description
    column :created_at
    column :updated_at

    actions
  end

  form do |f|
    f.inputs  do
      f.input :image
      f.input :title
      f.input :description

      if f.object.images.blank?
        f.input :images, as: :file, input_html: { multiple: true, name: 'excursion[images_attributes][][file]' }
      else
        f.has_many :images, class: 'image_select_areas_data_wrapper' do |i|
          if i.object.file?
            i.input :file,
                    hint: image_tag(i.object.file.url(:thumb), class: 'photo_with_areas'),
                    wrapper_html: {
                        class: 'image_select_areas_wrapper',
                        data: { excursion_id: i.object.id }
                    }

            i.input :_destroy, as: :boolean, required: :false, label: 'Удалить изображение'
          else
            i.input :file
            i.input :_destroy, as: :boolean, required: :false, label: 'Удалить изображение'
          end
        end
      end
    end

    f.actions
  end

  permit_params :title, :image, :description, images_attributes: [:id, :file, :_destroy]
end
