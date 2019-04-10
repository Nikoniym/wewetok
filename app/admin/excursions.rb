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
    end

    f.actions
  end

  permit_params :title, :image, :description
end
