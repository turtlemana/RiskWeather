import {AiOutlineSearch} from 'react-icons/ai'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';



const Header=()=>{
    // const router=useRouter();
    const {asPath}=useRouter()
    const [curPath,setCurPath]=useState();

    useEffect(()=>{setCurPath(asPath)},[asPath])
    return (
        <div className={`w-full h-16 shadow-sm bg-white sticky z-50 `}>
            <div className={`h-full flex items-center justify-center lg:justify-between ` + ((curPath === "/" || curPath === "/contact" ) ? `wrap2` : `wrap2`)}>
                <div className={`logo cursor-pointer hidden lg:block`}>
                    <Link href='/'>
                        <a>
                        <Image width="196px" height="30px" src="/img/logo_risk_weather.png" alt="logo-img"></Image>
                        </a>
                    </Link>
                </div>
                <div className={`menu`}>
                    <ul id="listItem" className={`flex gap-9 max-[450px]:gap-5 `}>
                        <li className={`text-6 hover:text-primary ` + ((curPath === "/") ? `text-primary font-medium` : ``)}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className={`text-6 hover:text-primary  `  + ((curPath === "/explore") ? `text-primary font-medium` : ``)}>
                            <Link href='/explore/'>Explore</Link>
                        </li>
                        <li className={`text-6 hover:text-primary  `  + ((curPath === "/learn") ? `text-primary font-medium` : ``)}>
                            <Link href='/learn'>Learn</Link>
                        </li>
                        <li className={`text-6 hover:text-primary  `  + ((curPath === "/contact") ? `text-primary font-medium` : ``)}>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className={`text-6 hover:text-primary  `  + ((curPath === "/company") ? `text-primary font-medium` : ``)}>
                            <Link href='http://www.juroinstruments.com/'>Company</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
