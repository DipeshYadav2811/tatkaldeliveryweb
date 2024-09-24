import React from 'react'
import './style.css';
import Facts from '../../../../assets/Fact Counter.svg';

const TatkalFacts = () => {
  return (
    <div className='factsContainer'>
        <img src={Facts} alt='facts' width={'100%'}/>
    </div>
  )
}

export default TatkalFacts