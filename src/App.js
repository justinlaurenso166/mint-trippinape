import Navbar from './components/Navbar'
import Minting from './components/Minting'
import Alert from './components/Alert'
import Marquee from './components/Marquee'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="bg-slate-800 min-h-screen text-white font-blue-goblet-regular relative">
            <ToastContainer />
            <div className="px-5 md:px-24 py-6">
                <Navbar />
            </div>
            <div className="px-5 md:px-40 mt-12">
                <Minting />
            </div>
            <div className='px-5 mt-12'>
                <Marquee />
            </div>
            <div>
                <Alert />
            </div>
        </div>
    )
}

export default App
