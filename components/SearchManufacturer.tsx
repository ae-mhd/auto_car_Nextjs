'use client'
import { SearchManufacturerProps } from '@/types'
import { Combobox,Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import {manufacturers} from '@/constants'
 const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
  ]
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturer) => {
          return manufacturer.toLowerCase().includes(query.toLowerCase())
        })
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className=' absolute top-[14px]'>
            <Image src='/car-logo.svg' width={20} height={20} className='ml-4' alt='logo'/>
</Combobox.Button>
          <Combobox.Input className='search-manufacturer__input' placeholder='Mercedes'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e=>setQuery(e.target.value)}
          />
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')}>
            
            <Combobox.Options className='max-h-64 overflow-y-auto'>
              {filteredManufacturers.map((manufacturer) => (
                <Combobox.Option key={manufacturer} value={manufacturer} className={({active})=>` relative search-manufacturer__option  ${active?'bg-primary-blue text-white' :' text-gray-900'}`}>
                  {({ active, selected }) => (
              <li
                className={` cursor-pointer${
                  active ? ' text-white' : 'bg-white text-black'
                }`}
              >
                {selected }
                {manufacturer}
              </li>
            )}
                </Combobox.Option>
              ))}
      
    </Combobox.Options>
          </Transition>
        </div>
    
  </Combobox>
      </div>
  )
}

export default SearchManufacturer