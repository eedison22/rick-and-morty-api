import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ResidentInfo = ({ urlResident }) => {
    const [residentInfo, setResidentInfo] = useState(null);

    const loadResidentInfo = async () =>{
        try {
            const res = await axios.get(urlResident);
            setResidentInfo(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const bgStatus = () => {
        if (residentInfo.status === 'Alive') {
          return 'green';
        } else if (residentInfo.status === 'Dead') {
          return 'red';
        } else {
          return 'gray';
        }
      };    
    
    useEffect(()=> {
        loadResidentInfo();
    },[])
  return (
    <>
    {residentInfo && (
        <div className='w-60 flex flex-wrap border-solid border-black rounded-lg shadow-xl shadow-black'>
            <div className='w-full relative'>
                <img className='rounded-t-lg mb-2' src={residentInfo.image}/>
                <div className='flex ml-2 absolute top-2 -left-2 bg-[#05292e] rounded-r-lg p-1 gap-x-2'>
                  <div className="w-2 h-2 z-10 mt-1 rounded-full border-2 border-green-400"
                  style={{ backgroundColor: bgStatus() }}>
                  </div>
                  <p className="text-green-400 text-xs font-semibold">
                          {residentInfo.status === 'Alive'
                          ? 'Vivo'
                          : residentInfo.status === 'Dead'
                          ? 'Muerto'
                          : 'Desconocido'}
                      </p>
                </div>
                <h3 className='text-white ml-2'>{residentInfo.name}</h3>
                <hr/>
                <ul className='text-xs text-white ml-2 mt-1'>
                    <li><span className='text-stone-600'>SPECIE<br/></span>{residentInfo.species}</li>
                    <li><span className='text-stone-600'>ORIGIN<br/></span>{residentInfo.origin.name}</li>
                    <li><span className='text-stone-600'>EPISODES<br/></span>{residentInfo.episode.length}</li>
                </ul>
            </div>
        </div>
        
    )};
    </>
  )
}

export default ResidentInfo