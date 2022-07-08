import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/cards/banner'
import Cardpopular from '../components/cards/cardpopular'
import Header from '../components/header'
import Tabar from '../components/tabar'
import styles from '../styles/Home.module.css'
import * as Ai from "react-icons/ai"
import * as Bs from "react-icons/bs"
import Search from '../components/search'
import { category } from '../components/data/caterory'
import Layout from '../components/layout'


export default function Home() {
  const sliderCategoryleft = () => {
    let slider = document.getElementById("sliderCategory")
    slider.scrollLeft = slider.scrollLeft - 300
  }

  const sliderCategoryright = () => {
    let slider = document.getElementById("sliderCategory")
    slider.scrollLeft = slider.scrollLeft + 300
  }

  let tes = "Lorem ipsum dolor sit amet consectetur adipisicing ?"
  return (

    <Layout title="Acceuil">
        <div className="flex text-sm font-normal md:text-md text-slate-600 gap-1 p-1 snap-x overflow-x-scroll
         scrollbar-hide items-center">
          {category.map((item, key) => (
            <p className="px-2 py-1 border-[1px] flex flex-none rounded-xl" key="key">{item.name}</p>
          ))}
        </div>
        <Banner />
        {/* popular services */}
        <div className="px-3 my-7 relative">
          <h3 className="text-lg md:text-2xl font-bold md:py-3 md:px-6">LES SERVICES LES PLUS POPULIARES</h3>

          <div  className="flex relative items-center gap-1"> 
            <Ai.AiOutlineLeft onClick={() => sliderCategoryleft()} 
              className="h-8 w-8 p-1 hidden md:inline-flex rounded-full shadow shadow-slate-700 justify-center 
             " />  

            <div id="sliderCategory" className="flex gap-3 overflow-x-scroll  snap-x scrollbar-hide">
              {category.map((item, key) => <Cardpopular key={key} image={item.path} title={item.name}  
              subtitle={item.sub} className="flex-none snap-start" />)}
            </div>
            
            <Ai.AiOutlineRight onClick={() => sliderCategoryright()} 
            className="h-8 w-8 p-1 hidden md:inline-flex rounded-full shadow shadow-slate-700 
            justify-center " />
            
          </div>

        </div>

        {/*  */}
        <div className="p-8 mt-20 ">
          <h3 className="text-lg md:text-3xl font-semibold w-3/4 ">Facilitez-vous la vie et celui de votre audiance à l'achat et acquisition de vos tikets d'évemenement</h3>
          <h4 className="font-light">Plus aucune limitation d'acquisition des tikets de vos évenements</h4>
          <div className="mt-4">
            <div className="py-7 px-4">
                <ul className="flex flex-col gap-2">
                    <li className="flex text-sm md:text-base gap-x-2">
                      <Bs.BsCalendar2CheckFill  className="translate-y-1" /> <span>Créez votre évemenement en trois(3) clic seulement</span>
                    </li> 
                    <li className="flex text-sm md:text-base gap-x-2"><Bs.BsFillCheckSquareFill className="translate-y-1"  />  <span>Publiez et partagez le Lien ou Qrcode de votre évemenement </span></li>

                    <li className="flex text-sm md:text-base gap-x-2"><Bs.BsFillCheckSquareFill className="translate-y-1" />  <span>Controlez l'authenticité du tikets de votre audience en temps réel </span> </li>

                    <li className="flex text-sm md:text-base gap-x-2"><Bs.BsShieldFillCheck className="translate-y-1" />  <span>Retirez vos gain en toute securité</span></li>
                </ul>
            </div>

            <div>

            </div>
          </div>

        </div>

        <div className="bg-yellow-200 py-16 px-10">
          <h3 className="text-xl md:text-3xl font-semibold w-3/4 md:w-2/4">Tout un univers de professionnels à votre portée</h3>

          <div className="flex flex-col  gap-5 md:flex-row ">

            <div className="md:w-2/4"></div>

            <div className='md:w-2/4'>
              <ul className="text-lg md:text-xl font-semibold text-zinc-800 flex flex-col gap-3 pt-6 ">
                
                <li className="flex  flex-col gap-[2px]"><div className="flex  gap-4"> <Bs.BsCheck2Circle  className="md:h-6 md:w-6 translate-y-[1px] " /> 
                  <span >Des services de qualité pour tous les budgets</span>
                  </div>  
                  <span className="text-base md:text-lg text-slate-700 font-light px-2">Trouvez des services de haute qualité à tous les prix. Une tarification en fonction des projets.</span>
                </li>

                <li className="flex flex-col gap-[2px] ">
                  <div className="flex  gap-4"> <Bs.BsCheck2Circle className="md:h-6 md:w-6 translate-y-[1px] " /> <span>Un travail de qualité réalisé rapidement</span>
                  </div>
                  <span className="text-base md:text-lg text-slate-700 font-light px-2">Trouvez le partenaire idéal pour commencer à travailler sur votre projet évemenemenciel en quelques minutes seulement.</span>
                </li>
                <li className="flex flex-col gap-[2px] ">
                  <div className="flex  gap-4"> <Bs.BsCheck2Circle className="md:h-6 md:w-6 translate-y-[1px] " /> <span>Des paiements protégés</span>
                  </div>
                  <span className="text-base md:text-lg text-slate-700 font-light px-2">Sachez toujours ce que vous allez payer d'avance. Votre paiement n'est pas débloqué tant que vous n'avez pas approuvé le travail.</span>
                </li>
                <li className="flex flex-col gap-[2px] ">
                  <div className="flex  gap-4"> <Bs.BsCheck2Circle className="md:h-6 md:w-6 translate-y-[1px] " /> <span>Une assistance 24h/24 et 7j/7</span>
                  </div>
                  <span className="text-base md:text-lg text-slate-700 font-light px-2">Des questions ? Notre équipe d'assistance est disponible 24 heures sur 24 pour vous aider à tout moment et en tout lieu.</span>
                </li>
              </ul>
            </div>

            
          </div>
        </div>

    </Layout>
  )
}


export async function getStaticProps() {



  return {
    props: {}, // will be passed to the page component as props
  }
}
