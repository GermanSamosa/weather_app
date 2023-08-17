module GpuMonitor
    class << self
        def gpu_info
            `nvidia-smi`
        end
    end 
end