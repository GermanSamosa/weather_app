include ActionView::Helpers::NumberHelper
require 'json'

class WeatherController < ApplicationController
    def index

        #Date
        t = Time.now
        @date = t.strftime("%A %d %B, %Y")

        #Temperature
        q = 'montreal,QC,CAN'
        lon = '45.4688'
        lat = '73.8756'
        date = '2023-07-04'
        lang = 'en' # fr for french
        units = 'metric'
        appid = ENV['API_KEY']
        
        url = sprintf('https://api.openweathermap.org/data/2.5/weather?appid=%s&q=%s',appid , q)
        # url = sprintf('https://api.openweathermap.org/data/2.5/weather?lat=%f&lon=%f&appid=%s', lat, lon, appid)
        response = HTTParty.get(url)

        if response.success?

            weather_data = JSON.parse(response.body)
            tKelv = weather_data['main']['temp']

            @temp = number_to_human(tKelv - 273.15)
            @desc = weather_data['weather'][0]['description'].titleize
            
            # skip the refresh?
            # big mistake lets see if we can find a fix aside pushing cron -> redirect_back(fallback_location: root_path)
        else
            error_message = response.parsed_response['error']
            # error handle
        end
      end
end
