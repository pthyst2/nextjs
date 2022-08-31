import BannerImages from "../../partials/banner-images/banner-images"
import Header from "../../partials/header/header";
import { useState } from 'react';
export default function LayoutHome({ children }: any){
    const [imageType, setImageType] = useState('single');
    return (
        <>
            <Header /> 
            <BannerImages type={ imageType } />
            <main>
                { children }
            </main>
        </>
    )
}