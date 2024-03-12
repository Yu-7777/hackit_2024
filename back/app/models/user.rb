class User < ApplicationRecord

  before_save { email.downcase! }
  EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence:   true,
                    length:     { maximum: 255 },
                    format:     { with: EMAIL_FORMAT },
                    uniqueness: true

  has_secure_password
  validates :password,  presence: true,
                        length:   { minimum: 8 }
end
