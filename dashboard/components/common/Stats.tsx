import React from 'react'
import Icon from '@/helper/Icon'
import Image from 'next/image'
import PriceFormatter from '@/helper/PriceFormatter';
import StatsTooltip from './StatsTooltip';

type statsProps = {
  title: string;
  amount: number;
  orders: number;
  percentage: number;
  icon: string;
  bgColor: string;
}

const Stats = ({title , amount, orders , percentage , icon , bgColor} : statsProps) => {
  return (
    <div className="bg-white dark:bg-black cursor-pointer font-poppins rounded-lg w-[100%] px-5 py-3">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <div className={`bg-${bgColor} p-2 rounded-md shadow-md`}>
            <Icon name={icon} />
          </div>

          <h3 className="ml-3 text-medium">{title}</h3>
        </div>
        <StatsTooltip />
      </div>

      <div className="flex justify-between px-2 items-center pt-5">
        <div>
          <h3 className="text-xl font-bold">
            <PriceFormatter price={amount} />
          </h3>
          <p className="text-small dark:text-[#d1d1d1] text-gray-500 my-1">{orders} Order</p>
        </div>

        <div
          className={`text-md px-3 rounded-2xl ${percentage >= 0 ? "bg-success text-white" : "bg-[#FFE5D7] text-danger"}`}
        >
          {percentage >= 0 ? <span>+</span> : <span>-</span>} {Math.abs(percentage)} %
        </div>
      </div>
    </div>
  );
}

export default Stats
