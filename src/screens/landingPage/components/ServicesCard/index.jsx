import React from 'react'
import ServicesIcon from '../../../../assets/servicesIcon.svg'
import './style.css'
function ServicesCard({cardHeader, cardDesc, cardList, isButton=false, ButtonTitle}) {
  return (
    <div className='servicesCard'>
        <div className='servicesIcon flex flex-column flex-center'>
            <img src={ServicesIcon} alt='services' />
            <div>
                <p className='h2'>{cardHeader}</p>
            </div>
        </div>
        <div className='cardDescription flex flex-center'>
            <p className='h6'>
                {cardDesc}
            </p>
        </div>
        <div>
            <ul>
            {
                cardList.map((item,index)=>{
                    return(
                        <li key={index} className='points cardDescription cardListing gray-font h6'>
                            {item}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    </div>
  )
}

export default ServicesCard