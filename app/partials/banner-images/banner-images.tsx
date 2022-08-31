
import Image from 'next/image';
export default function BannerImages({ type }:any){
    const url = '/images/backgrounds/';
    const images = [
        "1.jpg","2.jpg","4.jpg"
    ];
    
    return (
        <div className='-mt-[60px]'>
            { type == 'single' ?  <Image src={ url + images[0] }  width="100vw" height="50vh" layout="responsive" />: <p>This feature is no available now.</p>}
        </div>
    )
}