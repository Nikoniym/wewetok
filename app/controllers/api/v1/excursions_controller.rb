class Api::V1::ExcursionsController < ApplicationController
  def index
    render json: Excursion.all
  end

  def show
    render json: Excursion.find(params[:id])
  end

  def create
    excursion = Excursion.create(excursion_params)
    render json: excursion
  end

  def destroy
    Excursion.destroy(params[:id])
  end

  def update
    excursion = Excursion.find(params[:id])
    excursion.update_attributes(excursion_params)
    render json: excursion
  end

  private

  def excursion_params
    params.require(:excursion).permit(:title, :description, :image, :id)
  end
end