import React from "react";
import Portfolio from './Portfolio';
import './App.css';
import content from './content';

function App() {

    return (
        <div className="w-full font-primary">
            <section className="min-h-screen grid place-content-center bg-black">
                <h1 className="relative text-white font-bold text-5xl px-8">
                    Halo 👋, <br/>
                    Gue <span className="font-normal text-blue-400">Ali</span>. <br/>
                    Programer
                    <span className="font-normal text-gray-900 block md:inline md:absolute md:pl-7">Swasta</span>
                </h1>
            </section>
            <section className="min-h-screen grid place-content-center bg-white">
                <h2 className="font-bold text-2xl md:text-3xl px-8">
                    Fullstack<sup>*</sup> Developer
                </h2>
                <small className="text-gray-200 px-8"><sup>*</sup>) bukan full departemen IT</small>
                <small className="text-gray-200 px-8 block"><sup>*</sup>) tapi belum bisa bikin aplikasi mobile</small>
            </section>
            <section className="min-h-screen bg-gray-100 grid md:grid-cols-2">
                {content.jobs.map((job, index) => (
                    <Portfolio job={job} key={index}/>
                ))}
            </section>
            <section className="min-h-screen p-8">
                <h4 className="text-2xl font-bold mb-4">
                    Yang pernah gue buat:
                    <span className="text-gray-200 font-normal"> atau terlibat</span>
                </h4>
                {content.old.map((job, index) => (
                    <div className="py-2 flex hover:bg-gray-100" key={index}>
                        <span className="text-blue-400 mr-3">{job.year}</span>
                        <span className="flex flex-col md:block">
                            <span>{job.title}</span>
                            <span className="text-gray-500 ml-0 md:ml-3">{job.stack}</span>
                        </span>
                    </div>
                ))}
            </section>
            <section className="min-h-screen p-8 grid place-content-center bg-black">
                <h6 className="text-white">
                    Posisi:&nbsp;
                    <b>
                        Cinere,&nbsp;
                        <span className="line-through text-gray-500">Depok</span>
                        &nbsp;Jakarta <span className="text-gray-500">Barat Daya</span>
                    </b>
                </h6>
            </section>
            <section className="min-h-screen p-8 grid place-content-center">
                <h6 className="text-2xl font-bold mb-4 relative">
                    Makasih udah mampir bos, <br/>
                    boleh lanjut sini:
                    <span className="text-gray-200 block md:inline md:absolute md:pl-4"> stalkingnya</span>
                </h6>
                <ul>
                    <li className="py-1">
                        <a href="https://github.com/aligz" target="_blank" className="underline hover:text-blue-400"
                           rel="nofollow noopener noreferrer">
                            Github
                        </a>
                        <span className="text-blue-400 ml-4">aligz</span>
                    </li>
                    <li className="py-1">
                        <a href="https://twitter.com/alialghozaly" className="underline hover:text-blue-400"
                           target="_blank" rel="nofollow noopener noreferrer">
                            Twitter
                        </a>
                        <span className="text-blue-400 ml-4">alialghozaly</span>
                    </li>
                    <li className="py-1">
                        <a href="https://www.linkedin.com/in/alialghozaly/" target="_blank"
                           className="underline hover:text-blue-400" rel="nofollow noopener noreferrer">
                            LinkedIn
                        </a>
                        <span className="text-blue-400 ml-4">alialghozaly</span>
                    </li>
                    <li className="py-1">
                        <a href="https://gueprogramer.com" target="_blank" className="underline hover:text-blue-400"
                           rel="nofollow noopener noreferrer">
                            GueProgramer
                        </a>
                        <span className="text-blue-400 ml-4">ali</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;
