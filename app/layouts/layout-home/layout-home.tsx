import BannerVideo from "../../partials/banner-video/banner-video"
import Header from "../../partials/header/header"
export default function LayoutHome({content}:any){
    return (
        <>
            <Header /> 
            <BannerVideo />
            <main className="min-h-[2000px]">
                { content }
            </main>
        </>
    )
}