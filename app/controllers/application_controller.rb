class ApplicationController < ActionController::API

  private
  
  def render_error(object)
    render json: {errors: object.errors.full_messages.join(', ')}, status: 422
  end
end
