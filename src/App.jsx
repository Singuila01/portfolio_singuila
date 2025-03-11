import './App.css'
import fleche_blanche from './assets/arrow_down_white.png';
import fleche_noir from './assets/arrow_down.png';
import tzz from './assets/touzazimut.png';
import cv from './assets/cv.png';
import singuila from './assets/singuila.png';
import React from "react";
import { Link } from "react-scroll";

import home from './assets/home.png';
import way from './assets/way.png';
import brain from './assets/brain.png';
import star from './assets/stars.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';

function App() {
    return (
        <>
            <header id='entete' className='text-center bg-zinc-800 text-white shadow-xl'>
                <div className='flex flex-col justify-between items-center h-screen backdrop-blur-lg p-10'>
                    <div className='flex flex-row gap-5 rounded-full pl-5 pr-5 pb-2 pt-2 zones'>
                        <Link to="whoami" smooth={true} duration={500} className="myLink duration-350 hover:bg-purple-900 cursor-pointer font-bold text-2xl p-4 rounded-full"><img className='myImage' src={home} /><p>Qui je suis ?</p></Link>
                        <Link to="parcours" smooth={true} duration={500} className="myLink duration-350 hover:bg-purple-900 cursor-pointer font-bold text-2xl p-4 rounded-full"><img className='myImage' src={way} /><p>Mon parcours</p></Link>
                        <Link to="competences" smooth={true} duration={500} className="myLink duration-350 hover:bg-purple-900 cursor-pointer font-bold text-2xl p-4 rounded-full"><img className='myImage' src={brain} /><p>Mes compétences</p></Link>
                        <Link to="experiences" smooth={true} duration={500} className="myLink duration-350 hover:bg-purple-900 cursor-pointer font-bold text-2xl p-4 rounded-full"><img className='myImage' src={star} /><p>Mes expériences</p></Link>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h1 className='font-black text-7xl'>Singuila MBAYE AMADOU</h1>
                        <p className='font-bold text-4xl'>Développeur Web en alternance</p>
                    </div>
                    <div>
                        <Link to='whoami' smooth={true} duration={500} className='cursor-pointer bg-transparent border-purple-900 border-2 hover:bg-purple-900 duration-500 text-white text-2xl font-bold pt-3 pb-3 pl-5 pr-5 rounded-full'>Voir la suite</Link>
                        {/* <img src={fleche_blanche} className='h-15 m-auto'/> */}
                    </div>
                </div>
            </header>

            <section className='flex flex-col h-full bg-zinc-900 text-white'>
                {/* QUI SUIS-JE ? */}
                <div id="whoami" className='h-175 flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='font-black text-4xl p-10'>Qui suis-je ?</h1>
                    </div>
                    <div className='grid grid-cols-2 max-w-6xl justify-center items-center'>
                        <img src={singuila} className='h-80 hover:scale-105 hover:shadow-xl hover:rounded-3xl duration-350' />
                        <p className='text-xl'>Je m'appelle <b>Singuila MBAYE AMADOU</b> et j'ai 20 ans.<br/> J'ai commencé le developpement web en classe de Première, quand j'avais 16 ans, en créant des petits sites. <br/>J'ai pu effectuer différents stage en tant que <b>Développeur Web</b> qui m'ont aidé à m'orienter par la suite.<br/> Maintenant, je suis en alternance chez <b>Touzazimut</b> en tant qu'<b>Intégrateur CSS</b> depuis septembre 2024.</p>
                    </div>
                    {/* <div>
                        <img src={fleche_blanche} className='h-15 m-auto'/>
                    </div> */}
                </div>

                {/* CITATIONS */}
                {/* <div className='flex flex-col justify-center items-center bg-[url(./assets/laptop_apple.jpg)] bg-no-repeat bg-cover w-full overflow-hidden text-black backdrop-opacity-50'>
                    <div className='backdrop-blur-xl h-120 w-screen flex flex-row items-center justify-center'>
                        <div className='grid grid-cols-2 justify-center items-center max-w-7xl'>
                            <div className='text-center'>
                                <p className='text-3xl p-5 font-bold text-slate-900'>"Notre travail consiste à lire des choses qui ne sont pas encore sur la page."</p>
                                <p><i>Steve Jobs</i></p>
                            </div>

                            <div className='m-auto'>
                                <img src={steve} className='h-80 rounded-full' />
                            </div>

                            <div className='col-span-2'>
                                <img src={fleche_noir} className='h-15 m-auto'/>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* MON PARCOURS */}
                <div id='parcours' className='h-80 flex flex-col justify-center items-center p-10'>
                    <h1 className='font-black text-4xl'>Mon parcours</h1>
                    <div className='grid grid-cols-3 gap-10 p-5'>
                        <div className='text-center bg-purple-900 rounded-2xl p-8 hover:scale-105 hover:bg-purple-950 duration-350'>
                            <div className='flex flex-row justify-center items-center gap-5'>
                                <h1 className='font-bold text-2xl'>Lycée Professionnel</h1>
                                <p>2019-2022</p>
                            </div>
                            <p>Systèmes Numériques</p>
                            <p>Option <span className='font-bold italic text-lg'>Réseaux Informatiques et Systèmes Communiquants</span></p>
                        </div>
                        <div className='text-center bg-purple-900 rounded-2xl p-8 hover:scale-105 hover:bg-purple-950 duration-350'>
                            <div className='flex flex-row justify-center items-center gap-5'>
                                <h1 className='font-bold text-2xl'>BTS SIO</h1>
                                <p>2022-2024</p>
                            </div>
                            <p>Services Informatiques aux Organisations</p>
                            <p>Option <span className='font-bold italic text-lg'>Solutions Logicielles et Applications Métiers</span></p>
                        </div>
                        <div className='text-center bg-purple-900 rounded-2xl p-8 hover:scale-105 hover:bg-purple-950 duration-350'>
                            <div className='flex flex-row justify-center items-center gap-5'>
                                <h1 className='font-bold text-2xl'>Bachelor Développeur Web</h1>
                                <p>2024-2025</p>
                            </div>
                            <p>Bachelor 3e année</p>
                        </div>
                    </div>
                    {/* <div>
                        <img src={fleche_blanche} className='h-15 m-auto'/>
                    </div> */}
                </div>

                {/* ACTUELLEMENT CHEZ TOUZAZIMUT */}
                <div id='actuellementchez' className='h-96 justify-center items-center bg-[url(./assets/it.jpg)] bg-no-repeat bg-cover w-full overflow-hidden text-black backdrop-opacity-100'>
                    <div className='flex flex-col backdrop-blur-xl h-full gap-4.5 w-screen items-center justify-center'>
                        <h1 className='text-5xl font-bold'>Actuellement</h1>
                        <div className='grid grid-cols-2'>
                            <p className='text-2xl'>En alternance chez</p>
                            <img src={tzz} className='h-10 mx-2'/>
                        </div>
                        {/* <div>
                            <img src={fleche_noir} className='h-15 m-auto'/>
                        </div> */}
                    </div>
                </div>

                {/* MES COMPETENCES */}
                <div id='competences' className='h-200 flex flex-col justify-center items-center p-10'>
                    <h1 className='font-black text-4xl'>Mes compétences</h1>
                    <div className='grid grid-cols-2 gap-10 pt-5 max-w-screen'>
                        <div className='grid grid-cols-1 gap-10'> 
                            <div className='bg-purple-900 rounded-2xl p-10 hover:scale-105 hover:bg-purple-950 duration-350'>
                                <h2 className='font-bold text-center pb-5'>Développement web</h2>
                                <ul className='grid grid-cols-2 gap-7'>
                                    <li><span className='font-bold text-xl'>HTML/CSS</span><br/><span className='italic'>Intermédiaire</span></li>
                                    <li><span className='font-bold text-xl'>PHP</span><br/><span className='italic'>Intermédiaire</span></li>
                                    <li><span className='font-bold text-xl'>SQL</span><br/><span className='italic'>Intermédiaire</span></li>
                                    <li><span className='font-bold text-xl'>React</span><br/><span className='italic'>Débutant</span></li>
                                </ul>
                            </div>
                            <div className='bg-purple-900 rounded-2xl p-10 hover:scale-105 hover:bg-purple-950 duration-350'>
                                <h2 className='font-bold text-center pb-5'>Développement logiciel</h2>
                                <ul className='grid grid-cols-2 gap-2'>
                                    <li><span className='font-bold text-xl'>C#</span><br/><span className='italic'>Débutant</span></li>
                                    <li><span className='font-bold text-xl'>Java</span><br/><span className='italic'>Débutant</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img src={cv} className='monImage hover:scale-105 hover:rounded-2xl duration-350 cursor-pointer' alt='Cliquez pour télécharger mon CV !'/>
                        </div>
                    </div>
                    {/* <div>
                        <img src={fleche_blanche} className='h-15 m-auto mt-5'/>
                    </div> */}
                </div>
       
                {/* MES EXPERIENCES */}
                <div id='experiences' className='h-100 flex flex-col justify-center items-center p-10'>
                    <h1 className='font-black text-4xl'>Experiences</h1>
                    <div className='grid grid-cols-3 w-7xl gap-10 p-5'>
                        <div className='p-5 bg-purple-900 rounded-2xl hover:scale-110 hover:bg-purple-950 duration-350'>
                            <h3 className='font-bold'><span className='text-3xl'>Développeur web</span><br/> Rennes</h3>
                            <p>Anapoly</p>
                        </div>
                        <div className='p-5 bg-purple-900 rounded-2xl hover:scale-110 hover:bg-purple-950 duration-350'>
                            <h3 className='font-bold'><span className='text-3xl'>Développeur web</span><br/> Rennes</h3>
                            <p>Myrtille - Les mots libres</p>
                        </div>
                        <div className='p-5 bg-purple-900 rounded-2xl hover:scale-110 hover:bg-purple-950 duration-350'>
                            <h3 className='font-bold'><span className='text-3xl'>Intégrateur CSS</span><br/> Saint-Brieuc</h3>
                            <p>Touzazimut</p>
                        </div>
                    </div>


                    {/* <div className='grid grid-cols-1 gap-10 w-7xl'>
                        <div>
                            <h2 className='text-center p-2 font-bold text-2xl'>Stages</h2>
                            <div className='grid grid-cols-2 gap-10'>
                                <div className='bg-blue-600 p-5 rounded-2xl'>
                                    <h3><b>Anapoly</b></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat ipsam corrupti molestiae tempore eum hic voluptatibus adipisci fugit doloribus?</p>
                                </div>
                                <div>
                                    <h3><b>Myrtilles - Les mots libres</b></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat ipsam corrupti molestiae tempore eum hic voluptatibus adipisci fugit doloribus?</p>
                                </div>
                            </div>
                        </div>

                       <div>
                            <h2 className='text-center p-2 font-bold text-2xl'>Alternances</h2>
                            <div className='grid grid-cols-2 gap-10'>
                                <div>
                                    <h3><b>Touzazimut</b></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa voluptates, vel in, ut nihil sequi adipisci maiores quibusdam ipsam doloribus. Corporis omnis voluptatum reprehenderit!</p>
                                </div>
                            </div>
                       </div>
                    </div> */}
                </div>

                {/* PIED DE PAGE */}
                <div id='footer'>
                    <div className='p-10'>
                        <ul className='flex flex-row justify-between items-center'>
                            <li className=''>Singuila - 2025</li>
                            <div className='grid grid-cols-2 gap-5'>
                                <li><a href='https://www.linkedin.com/in/singuila-m-ab52b6250/'><img src={linkedin} className='picto' /></a></li>
                                <li><a href='https://github.com/Singuila01'><img src={github} className='picto' /></a></li>
                            </div>
                            <li><Link to="entete" smooth={true} duration={500} className="cursor-pointer text-white duration-150 hover:font-bold">Remonter tout en haut</Link></li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default App
