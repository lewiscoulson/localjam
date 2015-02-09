class LessonsController < ApplicationController
  def index
    @lessons = Lesson.all
    render json: @lessons
  end

  def show
    @lesson = Lesson.find(params[:id])
  end

  def new
    @lesson = Lesson.new
  end

  def create
    @lesson = Lesson.new(secure_params)

    if @lesson.save
      redirect_to @lesson
    else
      redirect_to 'index'
    end
  end

  private
    def secure_params
      params.require(:lesson).permit(:title, :video, :notes)
    end
end
