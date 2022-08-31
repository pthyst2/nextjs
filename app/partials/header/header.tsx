import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
export default function Header(){
    const [trans, setTrans] = useState(true);
    const onScroll = useCallback((event: any) => {
        setTrans(window.pageYOffset > 60 ? false : true)
    },[]);
    useEffect(
        (): any => {
            window.addEventListener("scroll", onScroll, true);
            return window.removeEventListener("scroll", onScroll, false)
        }, []
    )
    return (
        <>
            <div className={['shadow-md fixed top-0 left-0 z-[1020] w-full text-white px-[1em] md:px-[2em] xl:px-[4em]', trans === true ? '' : 'bg-black'].join(" ")}>
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
                    <Image className="grow-0" src="/images/logos/logo-empaty.svg" width={100} height={60}/>
                </div>
            </div>
            <div className="mb-[60px]"></div>
        </>
    )
}