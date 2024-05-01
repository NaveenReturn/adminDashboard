import React, { useEffect, useState } from 'react'

const Home = () => {
  const [product,setProduct] = useState([]);
   useEffect(()=>{
    const getAllData = async()=>{
      const response = await fetch('https://dummyjson.com/products');
      const res = await response.json();
      setProduct(res.products)
  }
  getAllData();
   },[])
  return (
    <div>
       <section className='product-gallery-section'>
           {
             product && product.map((items)=>(
              <div class="outdoar-section">
              <div class="image-hov">
                <img src={items.images[0]} height={100} alt="ARS_BROTHER" />
              </div>
              <div class="our-details">
                <span class="title">{items.title}</span>
                <h5>Rate : <span class="amount">$ {items.price}</span></h5>
                  <div class="order d-flex justify-content-center py-1">
                      <button class="btn btn-warning px-3">Buy Now</button>
                  </div>
              </div>
            </div>
             ))
           }
       </section>
    </div>
  )
}

export default Home