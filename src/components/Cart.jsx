import React from 'react';

function Cart() {
  return (
    <div className='cart_page'>
     <div className='page_error'>
       <h1>Your cart is currently empty! </h1>
     </div>

        <h2 className='h2_explore'>Explore Category</h2>
        <div>
            <div className='categories'>
                <img src='./Image/sandcastle.png' className='round_image'/>
                <img src='./Image/sun.png' className='round_image'/>
            </div>

            <div className='words'>
                <h3 >Indoor Plants</h3>
                <h3 className='h3_right'>Outdoor Plants</h3>
            </div>

            <div className='categories'>
                <img src='./Image/forest.png' className='round_image'/>
                <img src='./Image/pot.png' className='round_image'/>
            </div>

            <div className='words'>
                <h3>Zuri Plants</h3>
                <h3 className='h3_right'>Ceramic Pots</h3>
            </div>
        </div>
    
    </div>
  )
}

export default Cart
