'use client';

import React, { useState } from 'react';
import { leadModalProps } from '@/utils/types';
import { CalendarMonthOutlined, EditOutlined, EmailOutlined, LinkedIn, SendOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import Image from 'next/image';
import EngageLead from './EngageLead';
import Slider from 'react-slick';


// Leads data array
const leadsCards = [
    { id: 1, badge: '🎖️', name: "Jane Rayes", img: '/1.jpeg', position: 'COO', at: 'Northwind Traders', icon: <EmailOutlined  style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 2, badge: '🎗️', name: "Allan Munger", img: '/2.jpeg', position: 'Head of Real Estate Development', at: 'Contoso Coffee', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Prepare for meeting with', description: 'Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.', footerWriteup1: 'Upcoming meeting', footerWriteup2: 'Due today' },
    { id: 3, badge: '🎖️', name: "Harrison Curtis", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 4, badge: '🎗️', name: "Jermaine Berrett", img: '/3.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 5, badge: '🎖️', name: "Gerald Stephens", img: '/4.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 6, badge: '🎗️', name: "Halle Griffiths", img: '/5.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 7, badge: '🎖️', name: "Rachel Michael", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 8, badge: '🎗️', name: "Alex Baker", img: '/1.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 9, badge: '🎖️', name: "Lily Pyles", img: '/2.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 10, badge: '🎗️', name: "Jane Reyes", img: '/3.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 11, badge: '🎖️', name: "Mike Pears", img: '/4.jpeg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with', description: 'may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
  ]
  
const LeadModal: React.FC<leadModalProps> = ({ handleLeadToggle }) => {
  const [leadEngageOpen, setLeadEngageOpen] = useState(true);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(0);

  // console.log(typeof CalendarMonthOutlined);

  const handleEngageToggle = () => {
    setLeadEngageOpen((prev) => !prev);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentLeadIndex(current),
  };

  return (
    <div className="fixed inset-0 p-2 flex items-center justify-center z-50">
      <div className="relative w-[94%] h-[89.5%] sm:w-[90%] sm:h-[88.5%] md:w-[90%] md:h-[88.5%] lg:w-[75%] lg:h-[88.5%] xl:w-[52%] xl:h-[88.5%] rounded-[20px] p-[2.5px] bg-gradient-to-r from-[#5971fc] via-[#60a5fa] to-[#c084fc]">
        <div className="custom-scrollbar overflow-auto py-3 px-3 sm:py-5 sm:px-6 w-full h-full bg-gradient-to-b from-white via-white to-[#f0edf4] rounded-[17px] shadow-xl flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              📧 <span>Engage with {leadsCards[currentLeadIndex].name}</span>
            </p>
            <button onClick={handleLeadToggle} className="w-6 h-6 p-2 flex items-center justify-center rounded-full hover:bg-gray-100 text-2xl">
              &times;
            </button>
          </div>

          <Slider {...sliderSettings}>
            {leadsCards.map((lead, index) => (
              <div key={index}>
                <div className="flex gap-2 rounded-lg shadow-sm py-2 px-3 mb-3 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full">
                    <Image
                      src={lead.img || '/userplaceholder1.svg'}
                      alt={lead.name}
                      fill
                      className="object-contain rounded-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute flex items-center justify-center h-7 w-7 -bottom-2 -right-2 bg-white rounded-full">
                        {lead.badge}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p className="text-gray-700 font-semibold">{lead.name}</p>
                    <div className="text-xs flex items-center gap-1">
                      <span className="border-r-2 border-gray-400 pr-1 text-blue-500">
                        <LinkedIn />
                      </span>
                      <span className="text-gray-600">{lead.name}, {lead.position}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-lg mb-2 py-2 px-3 border-t border-gray-100 bg-gradient-to-b from-white via-[#60a5fa1d] to-[#c084fc07]">
                  <div className="flex items-center justify-between flex-wrap w-full gap-2 rounded-lg p-3 bg-gradient-to-r from-[#5971fc17] via-[#60a5fa1a] to-[#c084fc15]">
                    <p className="text-xs bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent">
                      ✨ {lead.name} {lead.description}
                    </p>
                    <div className="flex items-center flex-wrap gap-1">
                      <button className="rounded-sm py-1 px-2 text-xs bg-white">
                        <EditOutlined style={{ fontSize: '15px' }} /> Edit
                      </button>
                      <button className="rounded-sm py-1 px-2 text-xs bg-gradient-to-r from-[#4457c2] via-[#4273af] to-[#a471d6] text-white">
                        <SendOutlined style={{ fontSize: '15px' }} /> Approve and send
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 rounded-sm shadow-md pt-2 px-3">
                    <button
                      onClick={handleEngageToggle}
                      className={`${
                        leadEngageOpen ? 'border-[#60a5fa]' : 'border-transparent'
                      } text-xs border-b-[3px] md:hover:border-[#60a5fa] py-1`}
                    >
                      Engage
                    </button>
                    <button
                      onClick={handleEngageToggle}
                      className={`${
                        leadEngageOpen ? 'border-transparent' : 'border-[#60a5fa]'
                      } text-xs border-b-[3px] md:hover:border-[#60a5fa] py-1`}
                    >
                      Research
                    </button>
                  </div>

                  {leadEngageOpen ? (
                    <EngageLead lead={lead} />
                  ) : (
                    <div className="flex flex-col gap-2 rounded-lg shadow-xl py-2 px-3 bg-white">
                      <p>Research {lead.name} from here</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <p className="text-gray-700">
                Showing {currentLeadIndex + 1} of {leadsCards.length}
              </p>
              <button className="text-blue-500 text-xs border-l-2 border-gray-300 px-4">Show all</button>
            </div>
            <div className="flex text-xs items-center gap-2">
              <button className="text-gray-500">
                <ThumbUpOutlined style={{ fontSize: '18px' }} />
              </button>
              <button className="text-gray-500">
                <ThumbDownOutlined style={{ fontSize: '18px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
