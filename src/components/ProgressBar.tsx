import { Refresh } from '@mui/icons-material'
import React from 'react'

const ProgressBar = () => {
  return (
    <div className="flex-1">
      {/* Progress bar */}
      <div className="relative w-full">
        {/* Section Labels Above */}
        <div className="flex justify-between space-x-1 mb-0">
          <span className="text-xs self-end"><Refresh style={{ fontSize: '12px' }} /> 1 month until Q4 ends</span>
          <span className="flex justify-between space-x-7">
            <span className="text-xs self-end">Target &nbsp; <strong>$45 million</strong></span>
            <span className="text-xs self-end">68% of target achieved</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-lg">
          {/* Progress Sections */}
          <div className="absolute h-full bg-[#4ade808e] rounded-l-lg" style={{ width: '25%' }}></div>
          <div className="absolute left-[25%] h-full bg-[#60a5fa9c]" style={{ width: '10%' }}></div>
          <div className="absolute left-[35%] h-full bg-[#c084fc95]" style={{ width: '7%' }}></div>
          <div className="absolute left-[42%] h-full bg-[#fbbe248e]" style={{ width: '3%' }}></div>
          <div className="absolute left-[44%] h-full bg-[#e5e7eb]" style={{ width: '55%' }}></div>
          
          {/* Target Marker */}
          <div className="absolute bottom-0 left-2/3 transform -translate-x-1/2 w-[1px] h-6 bg-gray-800" style={{ left: '58%' }}></div>
        </div>

        {/* Section Labels Below */}
        <div className="flex items-center space-x-4">
          <div className="self-start flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#4ade808e] rounded-full"></div>
            <p className="text-xs">Won $18m</p>
          </div>
          <div className="self-start flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#60a5fa9c] rounded-full"></div>
            <p className="text-xs">Committed $8m</p>
          </div>
          <div className="self-start flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#c084fc95] rounded-full"></div>
            <p className="text-xs">Best case $7m</p>
          </div>
          <div className="self-start flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#fbbe248e] rounded-full"></div>
            <p className="text-xs">Qualified $3m</p>
          </div>
          <div className="self-start flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#e5e7eb] rounded-full"></div>
            <p className="text-xs">Leads $75m</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar