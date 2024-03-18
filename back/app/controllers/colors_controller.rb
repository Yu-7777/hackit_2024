class ColorsController < ApplicationController
  def index
    color_list = PartTimeColor.all
    render json: color_list
  end
end
