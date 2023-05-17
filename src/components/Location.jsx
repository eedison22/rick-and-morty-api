import React from "react";

const Location = ({location}) => {
    
  return (
    <div className='bg-[#05292e]'>
        <section>
            <div className='text-center text-white'>
              <h1>{location.name}</h1>
              <div className='flex gap-4 justify-center mb-10'>
              <p>
                <u>Tipo</u>: {location.type}
              </p>
              <p>
                <u>Dimension</u>: {location.dimension}
              </p>
              <p>
                <u>Residentes</u>: {location.residents?.length}
              </p>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Location