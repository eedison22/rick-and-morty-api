import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ResidentInfo from './ResidentInfo'

const Location = () => {
    const [location, setLocation] = useState({})
    const [searchLoc, setSearchLoc] = useState("")

    let idLocation = Math.floor(Math.random() * 126) + 1;
    
    const locationInfo = async () => {
        const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

        try {
            const res = await axios.get(url);
            setLocation(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    
    const search = async () => {
        if (searchLoc <= 126) {
          const url = `https://rickandmortyapi.com/api/location/${searchLoc}`;
    
          try {
            const res = await axios.get(url);
    
            setLocation(res.data);
          } catch (error) {
            console.log(error);
          }
          setSearchLoc('');
        } else {
          alert('Ingresa un valor entre 1 y 126');
          setSearchLoc('');
        }
      };

      const handleSearch = (e) => {
        e.preventDefault();
        search();
      };
     

    useEffect(() => {
     locationInfo();
    }, []);

  return (
    <div className='bg-[#05292e]'>
        <section>
            <form className='py-5 flex content-center justify-center gap-4'>
              <input className='w-96' 
              placeholder="Ingresa un valor numerico entre 1 y 126"
              min={1}
              max={126}
              type="number"
              value={searchLoc}
              onChange={(e) => setSearchLoc(e.target.value)}/>
              <button onClick={handleSearch}>Buscar</button>
            </form>
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
        <section className='p-10 w-full grid grid-cols-[repeat(auto-fill,minmax(160px,_1fr))] gap-6 mb-10'> 
            {location.residents?.map((resident) => (<ResidentInfo key={resident} urlResident={resident}/>))}
        </section>
    </div>
  )
}

export default Location