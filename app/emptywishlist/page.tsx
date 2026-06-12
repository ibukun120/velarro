import React from 'react'
import EmptyWishlist from './EmptyWishlist'
import EmptyOrders from './EmptyOrders'
import EmptyCart from './EmptyCart'

const page = () => {
  return (
    <div> 
      <div>
   <EmptyWishlist/>
      </div>
   
    
    <div>
      <EmptyOrders/>
    </div>
    <div>
      <EmptyCart/>
    </div>

    </div>
  )
}

export default page