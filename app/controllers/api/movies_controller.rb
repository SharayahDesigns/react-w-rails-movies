class Api::MoviesController < ApplicationController
before_action :set_movie, only: [:show, :update, :destroy]

#--------------------------   INDEX
def index
  render json: Movie.all
end
#--------------------------  SHOW
def show
render json: @movie
end


#--------------------------   CREATE
def create
movie = Movie.new(movie_params)
    if(movie.save)
    render json: movie
    else 
      render json: {errors: movie.errors.full_messages}, status:422
    end

end

#---------------------------    UPDATE
def update
    if(@movie.update(movie_params))
    render json: @movie
    else  
      render json: {errors: @movie.errors.full_messages}, status:422
    end

end
#---------------------------   DESTROY
def destroy
      render json: @movie.destroy
end 
#-------------------------    PRIVATE
private
def movie_params
    params.require(:movie).permit(:title, :genre, :stars, :source, :director)
end
def set_movie
    @movie = Movie.find(params[:id])
end




end
