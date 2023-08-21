# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# require 'rubygems'
# set :output, "/weather_app/app/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever


#  every 15.minutes do
#      runner 'WeatherController.index'
#    end

#  every 1.minutes do
#     runner 'GpuDataController.index'
#  end
every 1.minute do
    runner 'GpuMonitoringJob.perform'
  end