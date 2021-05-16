import './App.css';

function App() {
    return (
        <div className="w-full font-primary">
            <section className="min-h-screen grid place-content-center bg-black">
                <h1 className="relative text-white font-bold text-5xl px-8">
                    Halo 👋, <br/>
                    Gue <span className="font-normal text-blue-400">Ali</span>. <br/>
                    Programer <span className="font-normal text-gray-900 block md:inline md:absolute md:pl-7">Swasta</span>
                </h1>
            </section>
            <section className="min-h-screen grid place-content-center bg-white">
                <h2 className="font-bold text-2xl md:text-3xl px-8">
                    {/*<span className="font-normal text-gray-600">Seorang:</span><br/>*/}
                    Fullstack<sup>*</sup> Developer
                </h2>
                <small className="text-gray-200 px-8"><sup>*</sup>) bukan full departemen IT</small>
                <small className="text-gray-200 px-8 block"><sup>*</sup>) tapi belum bisa bikin aplikasi mobile</small>
            </section>
            <section className="min-h-screen bg-gray-100 grid grid-cols-2">
                <div className="p-8">
                    1
                </div>
                <div className="p-8 bg-blue-400">
                    2
                </div>
                <div className="p-8 bg-blue-400">
                    3
                </div>
                <div className="p-8">
                    4
                </div>
            </section>
        </div>
    );
}

export default App;
