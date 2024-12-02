import React from 'react'
import barca from "../assets/barca.jpg";

const Location = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${barca})` }}>
  <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 bg-white  p-6 text-black text-center rounded">
    <h1>I knew you never say NO to me ❤️</h1>
    <p>Lets meet tomorrow at <a href="https://www.google.com/maps/place/Spotify+Camp+Nou/@41.380896,2.1202449,17z/data=!3m1!4b1!4m6!3m5!1s0x12a498f576297baf:0x44f65330fe1b04b9!8m2!3d41.380896!4d2.1228198!16zL20vMDFnZ2ps?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">Camp Nou</a> 6.00 pm</p>
  </div>
</div>

  )
}

export default Location