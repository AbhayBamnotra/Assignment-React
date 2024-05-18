import React from 'react';

function ServiceCard({ title, description, bgColor, borderColor, icon }) {
  return (<>
    <section className=' absoulte w-[16.875rem] h-[21rem] bg-[#F5F5F5]'>
      <div className='flex flex-col -2 items-center justify-center h-[55%] w-[100%] mb-2 border-b-8 border-white rounded-b-[60%_18%] p-2' style={{ backgroundColor: bgColor }} >
        {icon && (
          <svg className='' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={icon} fill="#965514" />
          </svg>
        )}
        <h1 className='font-dmsans-bold text-[20px] text-center text-black font-[700] '>{title}</h1>
      </div>
      <div className='flex items-start h-[40%] w-[100%] px-4'>
        <p className=' font-dmsans-bold text-[20px] text-black font-[1rem]  text-center' >{description}</p>
      </div>
      
    </section>
    
    </>
    
  )
}

export default ServiceCard;

