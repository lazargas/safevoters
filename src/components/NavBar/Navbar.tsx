import React from 'react'
import style from "./NavBar.module.css"

const Navbar = () => {
  return (
    <>
    <div className={style.navbar} >
     <div className='text-white hover:text-[25px] ease-in-out transition-all cursor-none ' >VOTING DAO</div>
     <a className='text-white hover:text-[#0ff] ease-in-out transition-all cursor-none ' href='https://https://voting-dao-lazargas.vercel.app/' >LAUNCH {`->`} </a>
    </div>
    
    </>
  )
}

export default Navbar