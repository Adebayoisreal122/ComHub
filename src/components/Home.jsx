import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     <div onLoad={() => setLoading(false)}>
      {loading ? (
        <Loader/>
      ) : (
        <div>
          {
           <div className=" Home ">

           <div className=' '>
           </div>
           <div className='container w-85 text-center p-5 '>
           <h1 className='text-light welcome'>Welcome to Extreme Computers, your premier destination for hassle-free computer services!</h1>
           <p className='text-light mt-5 expe'>Experience the convenience and peace of mind that comes with choosing [Platform Name] for all your computer service needs. Get started today and let us help you unlock the full potential of your technology!</p>
           </div>
               </div>

          }
        </div>
      )}
    </div>
   
    </>
  )
}

export default Home
