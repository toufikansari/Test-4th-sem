import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './assets/picture.jpg'
// import box1 from './component/Box1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <box1></box1> */}
    <div className=' flex items-center justify-evenly pt-35 '>
     <div className=' w-120 h-96  '>
      <p className=' font-bold text-green-950'> ***Favratr Your Brand With us</p>
      <h2 className=' text-6xl font-bold  text-green-950'>Empowing Your Success With Digital Experties</h2><br />
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima excepturi nemo distinctio praesentium natus consequatur no</p>
      


      <div className=' flex gap-4 mt-4'>
        <button className='btn bg-green-950 font-bold py-1 px-2 cursor-pointer text-amber-50
        border-2 border-green-950 rounded-2xl hover:bg-white  hover:text-green-950 duration-500  '>Get Started--</button>
        <button className='  border-2 border-green-950 font-bold py-1 px-2 cursor-pointer rounded-2xl hover:bg-green-950  hover:text-white duration-500  '>npm run dev</button>
      </div>
     </div>
      <div>
        <img className='w-120 h-120' src={img} alt="Vite Logo" />
      </div>
      </div>
      <br /><br />
      <br />
      <br />
      <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      
      <div className="space-y-6">
        <img 
          src={img}
          alt="about"
          className="rounded-xl shadow-lg w-full h-60 object-cover"
        />

        <img 
          src={img}
          alt="about"
          className="rounded-xl shadow-lg w-full h-60 object-cover"
        />
      </div>

      
      <div>
        <p className="text-green-600 font-semibold mb-2">● About Us</p>
        
        <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
          Empowering Your Success <br /> with Digital Expertise
        </h2>

        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="space-y-5">

          
          <div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>Marketing & Business Growth</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-[85%]"></div>
            </div>
          </div>

          
          <div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>Creativity & Innovation</span>
              <span>60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-[60%]"></div>
            </div>
          </div>

          {/* Progress 3 */}
          <div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>Business & Financial Management</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-[95%]"></div>
            </div>
          </div>

        </div>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
          About Us →
        </button>
      </div>

    </div>

    {/* Bottom Stats */}
    <div className="grid md:grid-cols-4 gap-8 mt-16 text-center border-t pt-10">
      <div>
        <h3 className="text-3xl font-bold text-gray-800">3k+</h3>
        <p className="text-gray-500 text-sm">Successful Projects</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-gray-800">200+</h3>
        <p className="text-gray-500 text-sm">Expert Team</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-gray-800">350+</h3>
        <p className="text-gray-500 text-sm">Happy Customers</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-gray-800">16+</h3>
        <p className="text-gray-500 text-sm">Years of Experience</p>
      </div>
    </div>

  </div>
</section>

    </>
    
  )
}

export default App
