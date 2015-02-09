Rails.application.routes.draw do
  resources :lessons

  root :to => "pages#home"
end
