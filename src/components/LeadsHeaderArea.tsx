'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import KeyActivity from './KeyActivity'
import LeadsCard from './LeadsCard'
import LeadModal from './LeadModal';
import ActivitiesModal from './ActivitiesModal';

const LeadsHeaderArea = () => {
    const [leadOpen, setLeadOpen] = useState(false);
    const [activitieisOpen, setActivitiesOpen] = useState(false);

    const handleLeadToggle = () => setLeadOpen((prev) => !prev);

    const handleActivitiesToggle = () => setActivitiesOpen((prev) => !prev);

  return (
    <>
        <div className="rounded-[15px] p-[2.5px] bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95] transition-all duration-300 ease-in-out">
            <div className="py-5 px-3 md:px-6 bg-white rounded-[13px] shadow-xl">

                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-1 flex-wrap">
                    <div className="flex-1 flex flex-col sm:flex-row items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full">
                            <Image
                            src="/logo.jpg"
                            alt="GreenBasket's Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <p className='font-semibold text-sm md:whitespace-nowrap'>Hi Mona, <span className='text-blue-800'>68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.</p>
                    </div>

                    <ProgressBar/>

                </div>

                <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-6 mt-4">
                    <div className='w-full lg:w-2/3 border-b-2 lg:border-b-0 lg:border-r-2 pb-6 lg:pb-0 pr-4'>
                        <p className='text-sm mb-3 text-gray-700'>Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.</p>
                        <LeadsCard handleLeadToggle={handleLeadToggle} />
                    </div>

                    <div className='w-full lg:w-1/3'>
                        <p className='text-sm mb-3 mt-5 text-gray-700'>Other key activities</p>
                        <KeyActivity />
                        <button onClick={handleActivitiesToggle} className='text-blue-800 font-semibold text-xs mt-2'>Show all key activities</button>
                    </div>
                </div>
            </div>

        </div>

        {leadOpen && <LeadModal handleLeadToggle={handleLeadToggle} />}

        {activitieisOpen && <ActivitiesModal handleActivitiesToggle={handleActivitiesToggle} />}
    </>
  )
}

export default LeadsHeaderArea;