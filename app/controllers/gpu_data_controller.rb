class GpuDataController < ApplicationController
    def index
        gpu_info = GpuMonitor.gpu_info
        render json: { gpu_info: gpu_info }
    end
end
