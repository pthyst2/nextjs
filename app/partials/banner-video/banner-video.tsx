/**
 * This component is no longer working on live site due to CORB issue of web browser.
 * If you want to use it, consider to slove the problem first.
 */
export default function BannerVideo(){
    return ( 
        <video loop autoPlay muted className="absolute top-0 bottom-0 min-w-[100%]">
            <source src="/videos/empaty.mp4" />
        </video>
     )
}