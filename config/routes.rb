Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'weather#index'
  # get '/weather', to: 'weather#index'
  get '/gpu_data', to: 'gpu_data#index'

end
