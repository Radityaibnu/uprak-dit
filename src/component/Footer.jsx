import petanikode1 from '../assets/svgexport-30.svg'
import facebook from '../assets/svgexport-17.svg'
import twitter from '../assets/svgexport-18.svg'
import telegram from '../assets/svgexport-19.svg'
import instagram from '../assets/svgexport-20.svg'
import yt from '../assets/svgexport-21.svg'





export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-auto">
      <div className=" display : flex-inline flex">
        <div className='flex-col'>
        <img className='size-50 ml-40' src={petanikode1} alt="" />
        <h1 className='ml-20'>Tempat belajar budidaya kode(coding)dengan 
          <br />tutorial gampang dan mudah dipahami.</h1>
        </div>
        <div className='flex flex-col ml-30 font-bold '>
        <a href=''className='text-2xl mt-10 py-2'>belajar</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Artikel</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Tutorial</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Buku</a>
        </div>
        <div className='flex flex-col ml-20 font-bold '>
        <a href='' className='text-2xl mt-10 py-2'>Popular Tutorial</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Tutorial Bahasa C</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Tutorial Javascript</a>
        <a href=''className='text-gray-300 hover:text-teal-600'>Tutorial Java</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Tutorial PHP</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Tutorial Phyton</a>
        </div>
        <div className='flex flex-col ml-20 font-bold '>
        <a href='' className='text-2xl mt-10 py-2'>Social Media</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Facebook Page</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Instagram</a>
        <a href=''className='text-gray-300 hover:text-teal-600'>Twitter</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Youtube channel</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>Telegram Channel</a>
        </div>
         <div className='flex flex-col ml-20 font-bold '>
        <a href='' className='text-2xl mt-10 py-2'>Petani Kode</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>About</a>
        <a href='' className='text-gray-300 hover:text-teal-600'>FAQs</a>
        <a href=''className='text-gray-300 hover:text-teal-600'>Contact</a>
        </div>
      </div>
      <br />
      <hr className='text-gray-700'/>
      <br />
      <h1 className='ml-180'>ikuti kami di </h1>
      <br />
      <div className='flex size-10 ml-160 gap-2'>
      <img className='hover:bg-blue-800 bg-white rounded-md' src={facebook} alt="" />
      <img className='hover:bg-sky-500 bg-white rounded-md' src={twitter} alt="" />
      <img className='hover:bg-sky-500 bg-white rounded-md' src={telegram} alt="" />
      <img className='bg-white hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white rounded-md"' src={instagram} alt="" />
      <img className='hover:bg-red-500 bg-white rounded-md' src={yt} alt="" />
      </div>
      <br />
      <p className="text-gray-100 text-xs pb-4 flex justify-center items-center">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Petani Kode</span> • Made with <span className="text-red-400">❤</span> using Hugo 0.134.0
        </p>
      <div>
      </div>
      
    </footer>
  );
}