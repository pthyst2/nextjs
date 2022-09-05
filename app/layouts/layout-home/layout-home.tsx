import Header from "../../partials/header/header";
import BannerImage from "../../partials/banner-image/banner-image";
export default function LayoutHome({ children }: any){
    const banner = {
        type: 'logo-text',
        image: '/images/backgrounds/1.jpg',
        //title: 'Empaty',
        description: 'Creating your 3D spaces',
        logo: '/images/logos/logo-empaty.svg'
    }

    return (
        <>
            <Header /> 
            <BannerImage input={banner}></BannerImage>
            <main>
                { children }
            </main>
        </>
    )
}