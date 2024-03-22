import React from 'react'
import Carditem from './Carditem'
import '../Styles/Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check these Epic Destination</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem 
                        src='img/img-1.jpg'
                        text ='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path = '/services'
                    />              
                     <Carditem 
                        src='img\1 (2).jpg'
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                    />
                </ul>

                <ul className='cards__items'>
                     <Carditem
                        src='img/img-1.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                     />
                    <Carditem
                        src='img/img-1.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                    />
                     <Carditem
                        src='img/img-1.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                    />
                </ul>
            </div>
        </div>
   </div>
  )
}

export default Cards