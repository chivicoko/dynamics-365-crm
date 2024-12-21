'use client';

import { leadModalProps } from '@/utils/types'
import { CalendarMonthOutlined, EmailOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  

// LeadsCard component
const LeadsCard: React.FC<leadModalProps> = ({ handleLeadToggle }) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Handle card hover
    const handleMouseOver = (id: number) => {
        setHoveredCard(id);
    }

    const handleMouseOut = () => {
        setHoveredCard(null);
    }

    return (
        <div className="w-full">
            {/* Slider component */}
            <Slider {...settings}>
                {leadsCards.map((leadsCard) => (
                    <div key={leadsCard.id} className="relative p-2">
                        <button
                            onMouseOver={() => handleMouseOver(leadsCard.id)}
                            onMouseOut={handleMouseOut}
                            onClick={handleLeadToggle}
                            className="rounded-xl shadow-sm border-2 py-4 px-3 text-start"
                        >
                            <div className="flex gap-2">
                                <div className="relative w-8 h-8 rounded-full">
                                    <Image
                                        src={leadsCard.img}
                                        alt={leadsCard.name}
                                        fill
                                        className="object-contain rounded-full"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute flex items-center justify-center h-4 w-4 -bottom-1 -right-1 bg-white rounded-full">
                                        {leadsCard.badge}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className='text-xs font-semibold'>{leadsCard.name}</p>
                                    <div className='text-xs text-gray-500 flex items-center gap-1'>
                                        {leadsCard.position}
                                        <p className='w-1 h-1 bg-gray-500 rounded-full'></p>
                                        {leadsCard.at}
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-3 my-2 bg-gradient-to-tr from-blue-50 to-purple-50 flex flex-col gap-2 rounded-xl text-xs">
                                <div className="absolute -top-1 -right-1 bg-white rounded-full flex items-center justify-center h-6 w-6">
                                    <span className='bg-gradient-to-r from-[#475ac7] via-[#3a71b5] to-[#7848a9] bg-clip-text text-transparent'>✨</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {leadsCard.icon}
                                    <p className='text-xs font-semibold'>{leadsCard.topic} {leadsCard.name}</p>
                                </div>
                                <p className='text-xs'>{leadsCard.name} {leadsCard.description}</p>
                            </div>
                            <div className='text-xs whitespace-nowrap text-gray-500 px-3 flex items-center gap-1'>
                                {leadsCard.footerWriteup1}
                                <p className='w-1 h-1 bg-gray-500 rounded-full'></p>
                                {leadsCard.footerWriteup2}
                            </div>
                        </button>

                        {/* Conditional Popup on hover */}
                        {hoveredCard === leadsCard.id && (
                            <div className="absolute top-0 right-2 mt-2 p-2 w-52 bg-black text-white shadow-xl rounded-lg z-10 text-xs">
                                <p>{leadsCard.name}</p>
                                <hr className='my-1' />
                                <p>{leadsCard.position} at {leadsCard.at}</p>
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default LeadsCard;
