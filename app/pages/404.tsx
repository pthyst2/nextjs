import Link from 'next/link';
export default function PageNotFound(){
    const bgStyle = () => ({
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    })
    return (<>
        <div className="flex justify-center items-center w-[100%] h-[100vh]" style={bgStyle()}>
            <div className="text-center">
                <h1 className="text-[16px] md:text-[20px] lg:text-[24px] uppercase font-semibold">404 | Page Not Found</h1>
                <p className="py-4 text-[14px] md:text-[16px]">The page you're looking for is not existed or broken down.</p>
                <Link href="/">
                    <a className="inline-block py-2 px-4 hover:underline rounded-4 bg-white text-black">
                        Go Hompage 
                    </a>
                </Link>
            </div>
        </div>
    </>)
}