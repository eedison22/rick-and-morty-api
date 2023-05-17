import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col w-full min-h-full bg-[#05292e]'>
      <Header />
      <Main/>
      <Footer />
    </div>
  )
}

export default App