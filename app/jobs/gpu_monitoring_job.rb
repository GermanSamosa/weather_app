class GpuMonitoringJob < ApplicationJob
  queue_as :default

  def perform(*args)
    gpu_info = GpuMonitor.gpu_info

    # we can parse 'gpu_info' and update the monitoring data in the cache/db
  end
end
