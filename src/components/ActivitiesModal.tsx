import { activitiesModalProps } from '@/utils/types';
import { CalendarMonthOutlined, EmailOutlined } from '@mui/icons-material';
import Image from 'next/image';


const KeyActivities = [
    { id: 1, name: "Cafe A100 for Woodland Bank", company: 'Woodland Bank', amount: '$280,000', days: '8 days to close', img: '/userplaceholder.svg', position: 'COO', at: 'Northwind Traders', icon: <EmailOutlined  style={{fontSize: '14px'}} />, topic: 'Review draft and reply to Chris Naido' },
    { id: 2, name: "Partnership opportunity for Fabrikam", company: 'Fabrikam', amount: '$5,000,000', days: '12 days to close', img: '/slide-1.png', position: 'Head of Real Estate Development', at: 'Contoso Coffee', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: "Prepare me for Fabrikan's stakeholders meeting" },
    { id: 3, name: "Harrison Curtis", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 4, name: "Jermaine Berrett", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 5, name: "Gerald Stephens", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 6, name: "Halle Griffiths", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 7, name: "Rachel Michael", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 8, name: "Alex Baker", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 9, name: "Lily Pyles", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 10, name: "Jane Reyes", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 11, name: "Mike Pears", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
]
  
  
const ActivitiesModal: React.FC<activitiesModalProps> = ({ handleActivitiesToggle }) => {

  return (
    <div className="fixed inset-0 p-2 flex items-center justify-center z-50">
      <div className="relative w-[94%] h-[89.5%] sm:w-[90%] sm:h-[88.5%] md:w-[90%] md:h-[88.5%] lg:w-[75%] lg:h-[88.5%] xl:w-[52%] xl:h-[88.5%] rounded-[20px] p-[2.5px] bg-gradient-to-r from-[#5971fc] via-[#60a5fa] to-[#c084fc]">
        <div className="custom-scrollbar overflow-auto py-3 px-3 sm:py-5 sm:px-6 w-full h-full bg-gradient-to-b from-white via-white to-[#f0edf4] rounded-[17px] shadow-xl flex flex-col gap-4">
            <div className="w-full flex items-center justify-end">
                <button onClick={handleActivitiesToggle} className="border w-6 h-6 p-2 flex items-center justify-center rounded-full hover:bg-gray-100 text-2xl">
                    &times;
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {KeyActivities.map(keyActivity => (
                    <div key={keyActivity.id} className="w-full rounded-xl border shadow-sm py-2 px-3">
                        <div className="flex gap-2">
                        <div className="relative w-8 h-8 rounded-full">
                            <Image
                            src={keyActivity.img}
                            alt="GreenBasket's Logo"
                            fill
                            className="object-contain rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex flex-col gap-">
                            <p className='text-xs font-semibold'>{keyActivity.name}</p>
                            <div className='text-xs text-gray-500 flex items-center flex-wrap gap-1'>
                            {keyActivity.company}
                            <p className='w-1 h-1 bg-gray-500 rounded-full inline'></p>
                            {keyActivity.amount}
                            <p className='w-1 h-1 bg-gray-500 rounded-full inline'></p>
                            {keyActivity.days}
                            </div>
                        </div>
                        </div>
                        <div className="py-2 px-3 mt-1 bg-gradient-to-tr from-blue-50 to-purple-50 flex flex-col gap-2 rounded-md text-xs">
                        <div className="flex items-center gap-1">
                            {keyActivity.icon}
                            <p className='text-xs'>{keyActivity.topic}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesModal;
