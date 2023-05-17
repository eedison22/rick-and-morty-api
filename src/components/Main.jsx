import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './Location';
import ResidentInfo from './ResidentInfo';
import Pages from './Pages';

const Main = () => {

    const [location, setLocation] = useState({})
    const [searchLoc, setSearchLoc] = useState("")
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const locId = Math.floor(Math.random() * 125) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${locId}`)
            .then(res => {
                setLocation(res.data)
                quiteLoading()
                setPage(1)
            })
    }, [])

    const quiteLoading = () => {
        setTimeout(() => {
            setLoad(false)
        }, 1500)
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
    
    const [page, setPage] = useState(1)
    const perPages = 6
    const quantyPages = Math.ceil(location.residents?.length / perPages)

    let cardsToShow = location.residents?.slice((page - 1)* perPages, (page - 1)* perPages + perPages)

    return (
        <div>
            <div>
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
            </div>
            {
                load ? <div><i></i></div> :
            <>
            <Location location={location} />
            {location.residents[0] && <Pages className='py-5 flex content-center justify-center gap-4' quantyPages={quantyPages} page={page} setPage={setPage}/>}
            <div className='p-10 w-full grid grid-cols-[repeat(auto-fill,minmax(180px,_1fr))] gap-20 mb-10'>
                              
                    {location.residents[0] ? 
                    cardsToShow.map((resident) => (
                      <section key={resident}><ResidentInfo  resident={resident}/></section>))
                    
                 :
                    <div className='py-5 flex content-center justify-center text-white'>No existen habitantes en esta Dimension</div>
                }
            </div>
            </>}
        </div>
    );
};

export default Main;