import arrow from '../assets/svgexport-25.svg'
export default function Content(){
    return(
        <section>
            <h1 className="ml-38 text-teal-700 font-medium mt-15 py-1" >Kategori</h1>
            <h2 className="text-3xl font-bold ml-38">Mau Belajar apa hari ini?</h2>
            <h2 className="text-lg text-gray-400 max-w-x1 ml-38 py-1">Temukan tutorial berdasarkan minatmu.</h2>
            <div className="flex ">
            <div className="ml-18">
                <div className="container px-4 py-15  bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow font-bold max-w-md ">Basic Programming
                <div className="display : flex font-normal">Baca tutorial tutorial dasar pemrograman menggunakan C,C++,C#,Java,Javascript dan masih banyak lagi. <img className='' src={arrow} alt="" /></div>
                </div>
            </div>
            <div className="ml-5">
                <div className="container py-15  bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow font-bold max-w-md ">Web Programming
                <div className="display : flex font-normal">Baca tutorial cara membuat web,mulai dari HTML,CSS,JS,PHP,MYSSQL,Codeigniter,React dan masih banyak lagi. <img src={arrow} alt="" /></div>
                </div>
            </div>
            <div className="ml-5">
                <div className="container py-15  bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow font-bold max-w-md ">Tutorial Lainnya
                <div className="display : flex font-normal">Baca tutorial dalam kategori lainnya seperti Mobile programming,Game programming,loT,Blockchain dan masih banyak lagi. <img src={arrow} alt="" /></div>
                </div>
            </div>
            </div>
            <h1 className="ml-38 text-teal-700 font-medium mt-15 py-1" >Update</h1>
            <h2 className="text-3xl font-bold ml-38">Apa yang baru dari petani kode? </h2>
            <h2 className="text-lg text-gray-400 max-w-x1 ml-38 py-1">Baca artikel terbaru yang masih fresh dan hangat.</h2>
        </section>
    );
}