import React from 'react';
import { ArrowDropDownLine, BaselineCalendarMonth } from '../../../icons/icons';
import SelectList from '../../generals/components/list/SelectList';
import List from '../../generals/components/list/List';
import { Reveal } from '../../animations/Reveal';

export default function RentNow() {
  return (
    <section data-overlay-dark="5" className="fixedImg relative flex items-center max-md:!h-screen">
      <div className="relative px-[12px] container mx-auto flex flex-col items-center z-2">
        <Reveal>
          <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase">RENT NOW</p>
        </Reveal>
        <Reveal>
          <h4 className="font-bold text-[35px] mb-8 text-white">Book Auto Rental</h4>
        </Reveal>
        <Reveal width="100%">
          <form id="BookAutoRental" action="" className="w-full grid grid-cols-6 max-lg:!rounded-[20px] max-lg:grid-cols-7 max-md:grid-cols-1">
            <span className="max-lg:col-span-2 h-[60px] mb-[15px] relative">
              <SelectList text="ChooseCar Type" icon={<ArrowDropDownLine className="text-primary w-6 h-6" />} />
            </span>
            <span className="max-lg:col-span-2 h-[60px] mb-[15px] relative">
              <SelectList text="Pick Up Location" icon={<ArrowDropDownLine className="text-primary w-6 h-6" />} />
            </span>
            <span className="max-lg:col-span-3 h-[60px] mb-[15px] relative">
              <List id="return_date" text="Pick Up Date" icon={<BaselineCalendarMonth className="text-primary w-4 h-4" />} />
            </span>
            <span className="max-lg:col-span-2 h-[60px] mb-[15px] relative">
              <SelectList text="Drop Off Location" icon={<ArrowDropDownLine className="text-primary w-6 h-6" />} />
            </span>
            <span className="max-lg:col-span-3 h-[60px] mb-[15px] relative">
              <List id="pick_date" classs="noborder" text="Return Date" icon={<BaselineCalendarMonth className="text-primary w-4 h-4" />} />
            </span>
            <span className="max-lg:col-span-2 mb-[15px] !border-0">
              <button className="flex shrink-0 w-full justify-center items-center h-full cursor-pointer transition-all hover:border-white hover:bg-white rounded-4xl bg-[var(--primary)] text-black text-[14px] font-light px-5 py-2 border border-[var(--primary)]">
                Rent Now
              </button>
            </span>
          </form>
        </Reveal>
      </div>
    </section>
  );
}