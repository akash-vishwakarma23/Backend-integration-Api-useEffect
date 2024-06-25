
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services.jsx'
import Show from './components/Show'

const App = () => {


  return (
    <div className='p-4'>
       <nav className='flex justify-center gap-10 m-4'>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/show">Show</Link>
       </nav>
       <hr />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/show" element={<Show />} />
       </Routes>
     
    </div>
  )
}

export default App








{/* <button onClick={getProducts} className='px-2 py-1 bg-zinc-500 text-white'>Call Product Api</button>
<button onClick={addProducts} className='m-4 px-2 py-1 bg-zinc-500 text-white'>add New Product Api</button>

<hr className='mb-6'/> */}