Paperclip::Attachment.default_options.update(
  {
    path: "#{Rails.root}/public/system/:class/:attachment/:year/:month/:day/:id/:style.:extension",
    url:  "#{ActionController::Base.relative_url_root}/system/:class/:attachment/:year/:month/:day/:id/:style.:extension",
    default_url: '/missing_styles/:class/:attachment_:style_missing.png'
  }
)

Paperclip.interpolates :year do |attachment, style|
  date = attachment.instance.try(:created_at)
  date.year if date.present?
end

Paperclip.interpolates :month do |attachment, style|
  date = attachment.instance.try(:created_at)
  date.strftime('%m') if date.present?
end

Paperclip.interpolates :day do |attachment, style|
  date = attachment.instance.try(:created_at)
  date.day if date.present?
end
