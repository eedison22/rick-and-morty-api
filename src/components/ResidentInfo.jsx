import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {

    const [residentItem, setResidentItem] = useState([])

    useEffect(() => {
        axios.get(`${resident}`)
            .then(res => {
                setResidentItem(res.data)
            })
    }, [])
    
    const bgStatus = () => {
      if (residentItem.status === 'Alive') {
        return 'green';
      } else if (residentItem.status === 'Dead') {
        return 'red';
      } else {
        return 'gray';
      }
    };    

    return (
        <div className='relative w-60 flex flex-wrap border-solid border-black rounded-lg shadow-xl shadow-black'>
            <img className='rounded-t-lg mb-2' src={residentItem.image} alt={residentItem.name} />
            <div className='w-full relative'>
                <h2 className='text-white ml-2'>{residentItem.name}</h2>
                <hr />
                <p className='text-white ml-2'><strong className='text-stone-600'>Especie: </strong> {residentItem.species}</p>
                <p className='text-white ml-2'><strong className='text-stone-600'>Origen: </strong> {residentItem.origin?.name}</p>
                <p className='text-white ml-2'><strong className='text-stone-600'>Episodios: </strong> {residentItem.episode?.length}</p>
            </div>
            <div className='w-165 h-30 bg-black bg-opacity-100 rounded-5 px-4 flex items-center absolute top-259 left-0 border-2 border-green-400 text-green-400 text-lg'>
            <div className="w-2 h-2 z-10 mt-1 rounded-full border-2 border-green-400"
                  style={{ backgroundColor: bgStatus() }}>
                </div>
                <p className="text-green-400 text-xs font-semibold">
                          {residentItem.status === 'Alive'
                          ? 'Vivo'
                          : residentItem.status === 'Dead'
                          ? 'Muerto'
                          : 'Desconocido'}
                      </p>
            </div>
        </div>
    );
};

export default ResidentInfo;