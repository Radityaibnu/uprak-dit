import logo1 from '../assets/svgexport-1.svg'
import logo2 from '../assets/svgexport-2.svg'
import logo3 from '../assets/svgexport-3.svg'
import logo4 from '../assets/svgexport-4.svg'
import logo5 from '../assets/svgexport-5.svg'
import logo6 from '../assets/svgexport-6.svg'
import logo7 from '../assets/svgexport-7.svg'

function Navbar() {
  return (
    <nav className="bg-teal-600 text-white p-4 shadow">
      <div className="container mx-auto flex items-center space-x-10">
        <img src={logo1} alt="logo" className='h-10 object-contain' />
        <div className="space-x-5 display : inline-flex">
          <div className='hover:border rounded-md px-3 py-1 border-teal-700 hover:bg-teal-700'><ul className='display : inline-flex'><img src={logo2} alt="" /><a href="#" className="font-medium">Home</a></ul></div>
          <div className='hover:border rounded-md px-3 py-1 border-teal-700 hover:bg-teal-700'><ul className='display : inline-flex'><img src={logo3} alt="" /><a href="#" className="font-medium">Kelas</a></ul></div>
          <div className='hover:border rounded-md px-3 py-1 border-teal-700 hover:bg-teal-700'><ul className='display : inline-flex'><img src={logo4} alt="" /><a href="#" className="font-medium">Tutorial</a></ul></div>
          <div className='hover:border rounded-md px-3 py-1 border-teal-700 hover:bg-teal-700'><ul className='display : inline-flex'><img src={logo5} alt="" /><a href="#" className="font-medium">Buku</a></ul></div>
          <div className='hover:border rounded-md px-3 py-1 border-teal-700 hover:bg-teal-700'><ul className='display : inline-flex'><img src={logo6} alt="" /><a href="#" className="font-medium">Discord</a></ul></div>
          <div className='hover:border rounded-full ml-150 mt-2 hover:bg-teal-700 border-teal-700 '><img src={logo7} alt="" /></div>
          <div className=''><button className="px-3 py-1 border-teal-500 rounded-md border-2 bg-teal-500 h text-white hover:bg-teal-700 hover:border-teal-700">Join Newsletter</button></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar