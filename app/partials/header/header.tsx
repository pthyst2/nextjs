import Image from 'next/image';
export default function Header(){
    return (
        <div className='fixed top-0 left-0 z-[1020] w-full bg-black text-white px-[1em] md:px-[2em] xl:px-[4em]'>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
                <Image className="grow-0" src="/images/logos/logo-empaty.svg" width={100} height={60}/>
            </div>
        </div>
    )
}