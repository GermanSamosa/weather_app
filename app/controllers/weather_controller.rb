require 'json'

class WeatherController < ApplicationController
    def index

        lon = '45.4688'
        lat = '73.8756'
        date = '2023-07-04'
        lang = 'en' # fr for french
        units = 'metric'
        appid = ENV['API_KEY']
        
        url = sprintf('https://api.openweathermap.org/data/2.5/weather?lat=%f&lon=%f&appid=%s', lat, lon, appid)
      
        
        response = HTTParty.get(url)

        if response.success?
            # data = response.parsed_response
            weather_data = JSON.parse(response.body)

            @temp = weather_data['main']['temp']
            @desc = weather_data['weather'][0]['description']
        else
            error_message = response.parsed_response['error']
            # error handle
        end
      end
end
