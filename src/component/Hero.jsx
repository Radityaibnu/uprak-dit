import petanikode from '../assets/petanikode.svg'
export default function Hero() {
  return (
    <section className="bg-slate-800 py-20">
      <h1 className="text-5xl font-bold mb-5 text-white ml-38">Petani Kode</h1>
      <p className="text-lg text-white max-w-xl mb-30 ml-39 ">
        Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux
      </p>
      <div className="-mb-20"></div>
      <button className="px-3 py-1 border-teal-600 rounded-md border-2 bg-teal-600 h text-white ml-38 mb-10 hover:bg-teal-700 hover:border-teal-700">Mulai Belajar</button>
      <button className="px-3 py-1 hover:border-teal-700 rounded-md border-2 hover:bg-teal-700 text-teal-100 ml-5 mb-10">Join Newsletter</button>
      <img className='size-120 ml-250 -mt-80 -mb-45' src={petanikode} alt="" />
    </section>
  );
}