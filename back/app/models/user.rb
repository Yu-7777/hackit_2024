class User < ApplicationRecord
        
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  # before_save { email.downcase! }
  # EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  # validates :email, presence:   true,
  #                   length:     { maximum: 255 },
  #                   format:     { with: EMAIL_FORMAT },
  #                   uniqueness: true

  # has_secure_password
  # validates :password,  presence: true,
  #                       length:   { minimum: 8 }
end
