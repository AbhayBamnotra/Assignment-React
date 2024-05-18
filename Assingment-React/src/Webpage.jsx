import React from 'react'
import ServicesGrid from '../public/components/service_grid'


function Webpage() {
  return (
    <section className='  bg-white '>
      <div className=" flex items-center justify-center min-h-screen bg-[FFFFFF] ">
        <div className="w-[1280px] h-[1377px] p-[64px] gap-[64px] border border-white bg-gray">
          <p className="  text-center font-poppins font-bold text-[50px] leading-[65px] tracking-[-0.02em] ">SCOPE OF SERVICES</p>
          <ServicesGrid />

          <div className='flex items-center justify-center mt-8'>
            <p className=' px-2'>View all</p>
            <svg className=' ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4194 9.45056C14.4194 9.0352 14.7566 8.69796 15.172 8.69796C15.5873 8.69796 15.9246 9.0352 15.9246 9.45056V13.7722C15.9246 14.3855 15.6746 14.9427 15.2709 15.3464C14.8673 15.75 14.31 16 13.6967 16H2.24618C1.63289 16 1.0756 15.75 0.671956 15.3464C0.268311 14.9427 0.0183105 14.3855 0.0183105 13.7722V2.23832C0.0183105 1.62504 0.268311 1.06775 0.671956 0.664104C1.0756 0.260458 1.63289 0.0104582 2.24618 0.0104582H6.54045C6.95581 0.0104582 7.29305 0.347698 7.29305 0.763062C7.29305 1.17843 6.95581 1.51567 6.54045 1.51567H2.24618C2.04826 1.51567 1.86857 1.5977 1.73706 1.72791C1.60555 1.85942 1.52482 2.0391 1.52482 2.23702V13.7709C1.52482 13.9688 1.60685 14.1485 1.73706 14.28C1.86857 14.4115 2.04826 14.4922 2.24618 14.4922H13.698C13.8959 14.4922 14.0756 14.4102 14.2071 14.28C14.3386 14.1498 14.4194 13.9688 14.4194 13.7709V9.45056ZM14.6563 2.27348L7.05086 9.974C6.7605 10.2696 6.28394 10.2735 5.98836 9.98311C5.69279 9.69275 5.68888 9.21619 5.97925 8.92061L13.2917 1.51567H10.2475C9.83211 1.51567 9.49487 1.17843 9.49487 0.763062C9.49487 0.347698 9.83211 0.0104582 10.2475 0.0104582H13.698C14.3647 0.0104582 15.224 -0.102823 15.7358 0.414104C16.0587 0.740927 15.9871 3.3464 15.9454 4.85551C15.935 5.24614 15.9259 5.54431 15.9259 5.75785C15.9259 6.17322 15.5886 6.51046 15.1733 6.51046C14.7579 6.51046 14.4207 6.17322 14.4207 5.75785C14.4207 5.71749 14.4311 5.32556 14.4454 4.81515C14.4662 4.02869 14.5925 2.98702 14.6563 2.27348Z" fill="#0C395A" />
            </svg>
          </div>

        </div>
      </div>
      <props />

    </section>
  )
}

export default Webpage