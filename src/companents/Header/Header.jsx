import React from "react";
import './Header.scss'
import icon from "../../constants/icon";
import image from "../../constants/image";
import Image from "../../constants/image";

const Header = () => {
    return (
        <div>
            <header>
                <div className="container m-auto">
                    
                   <div className="flex justify-between items-center mt-8">
                        <div className="flex items-center">
                             <img className="hidden sm:block" src={image.menu} alt="menu"/>
                             <img className="w-24 sm:w-28 h-6 ml-6 md:ml-7" src={image.logo} alt="logo" width={116} height={25}/>

                             <form className="searchForm flex items-center bg-slate-200 #f3f4f6 ml-2 md:ml-14 rounded-3xl">
                                 <input className="search outline-0 rounded-3xl bg-slate-200 pl-4 md:pl-5 w-32 sm:w-80 md:w-56 lg:w-96" type="search" placeholder="Search" />
                                 <button className="btn pr-6 py-3 rounded-3xl bg-slate-200" type="submit"><img src={image.search} alt="search" /></button>
                             </form>
                         </div>

                         <div className="flex justify-between items-center gap-x-8 md:gap-x-12">
                             <img className="w-7 h-5 hidden md:block" src={image.video} alt="video" />
                             <img className="w-6 h-6 hidden md:block" src={image.bell} alt="bell"/>
                             <img className="w-6 h-6 hidden sm:block" src={image.menues} alt="menues" />
                             <img className="w-8 h-8 rounded-full" src={image.accauntImg} alt="accauntImg" width={40}/>
                         </div>
                   </div>
                </div>
            </header>
        </div>
    )
}

export default Header;