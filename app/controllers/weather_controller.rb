require 'json'

class WeatherController < ApplicationController
    def index

        base_url = 'https://api.openweathermap.org/data/2.5/weather'
        headers = {
            lat: '45.5019',
            lon: '73.5674',
            date: '2023-07-04',
            units: 'metric',
            lang: 'en', # fr for french
            appid: ENV['API_KEY']
          }
      

        response = HTTParty.get(base_url, headers: headers)

        if response.success?
            data = response.parsed_response
            # process data as needed
        else
            error_message = response.parsed_response['error']
            # error handle
      end
end
