'use client';

import React, { useEffect, useState } from 'react';
import BasicPagination from './Pagination';
import { leads } from '@/utils/data';
import { KeyboardArrowDown, Search } from '@mui/icons-material';
import Link from 'next/link';
import { Lead } from '@/utils/types';

type LeadKeys = keyof Lead;

interface SortConfig {
  key: LeadKeys;
  direction: 'asc' | 'desc';
}


const LeadTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [leadsPerPage, setLeadsPerPage] = useState<number>(10);
  const [totalLeads, setTotalLeads] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  useEffect(() => {
    setTotalLeads(leads.length);
  }, []);

  // sort
  const sortedLeads = React.useMemo(() => {
    const sortableLeads = [...leads];
    if (sortConfig !== null) {
      sortableLeads.sort((a, b) => {
        const aKey = a[sortConfig.key];
        const bKey = b[sortConfig.key];
  
        if (aKey < bKey) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aKey > bKey) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
  
    return sortableLeads;
  }, [sortConfig]);

  // Search function
  const filteredLeads = sortedLeads.filter((lead) => {
    return (
      lead.name.toLowerCase().includes(searchText.toLowerCase()) ||
      lead.topic.toLowerCase().includes(searchText.toLowerCase()) ||
      lead.statusReason.toLowerCase().includes(searchText.toLowerCase()) ||
      lead.createdOn.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLeadsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // Handle column sorting
  const requestSort = (key: LeadKeys) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      {leads && leads.length > 0 ? (
        <>
          {/* Search bar */}
          <div className='custom-scrollbar overflow-x-scroll w-full rounded-md'>
            <table className='min-w-full'>
              <thead className='bg-white'>
                <tr className='border-none rounded-[4px]'>
                  <th className='pl-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider' colSpan={5}>
                    <div className="flex items-center gap-1 rounded-[5px] md:gap-3 w-4/5 md:w-2/5 p-[2px] bg-gradient-to-r from-[#5971fc9c] via-[#60a5facd] to-[#c084fc95]">
                      <div className="px-1 bg-white w-full rounded-[3px] flex items-center justify-between">
                        <input
                          type="text"
                          placeholder="Sort, filter and search"
                          name="searchText"
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                          className="bg-transparent w-full py-1 text-xs pl-1 focus:outline-0 placeholder:text-xs md:text-base text-gray-700 leading-tight"
                        />
                        <button type="button">
                          <span className="text-[#666666]"><Search className="h-4 w-4 md:h-6 md:w-6" /></span>
                        </button>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <thead className='bg-white border-b'>
                <tr className='border-0 rounded-[4px]'>
                  <th className='pl-6 py-3 text-left text-xs font-semibold tracking-wider'></th>
                  <th onClick={() => requestSort('name')} className='px-6 pl-3 py-2 text-left text-xs font-semibold tracking-wider text-gray-700 cursor-pointer'>
                    Name <KeyboardArrowDown fontSize='small' />
                  </th>
                  <th onClick={() => requestSort('topic')} className='px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 cursor-pointer'>
                    Topic <KeyboardArrowDown fontSize='small' />
                  </th>
                  <th onClick={() => requestSort('statusReason')} className='px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 cursor-pointer'>
                    Status reason <KeyboardArrowDown fontSize='small' />
                  </th>
                  <th onClick={() => requestSort('createdOn')} className='px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 cursor-pointer'>
                    Created on <KeyboardArrowDown fontSize='small' />
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {currentLeads.map((lead) => (
                  <tr key={lead.id} className='border-b'>
                    <td className='pl-6 py-3 text-xs whitespace-nowrap w-2'>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <Link href={`/leads/${lead.id}`} className='px-6 pl-3 py-2 text-xs whitespace-nowrap text-blue-500'>
                        {lead.name}
                      </Link>
                    </td>
                    <td className='px-6 py-3 text-xs whitespace-nowrap text-gray-700'>
                      {lead.topic}
                    </td>
                    <td className='px-6 py-3 text-xs whitespace-nowrap text-gray-700'>
                      {lead.statusReason}
                    </td>
                    <td className='px-6 py-3 text-xs whitespace-nowrap text-gray-700'>
                      {lead.createdOn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='pagination mt-6 flex flex-col md:flex-row items-center justify-between'>
            <div className='pages flex items-center justify-between gap-3'>
              <span>Showing</span>
              <div className="select-container">
                <select
                  value={leadsPerPage}
                  onChange={handleRowsPerPageChange}
                  className="span"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <span>out of {totalLeads}</span>
            </div>
            <BasicPagination count={totalPages} onPageChange={paginate} currentPage={currentPage} />
          </div>
        </>
      ) : (
        <div className='text-center text-xl text-gray-600'>No leads found</div>
      )}
    </>
  );
};

export default LeadTable;