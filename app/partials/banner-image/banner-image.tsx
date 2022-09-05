import Image from 'next/image'
export default function BannerImage({ input }: any){
    function Output(){
        let result = <></>;
        switch (input.type) {
            default: case 'texts': {
                result = <Texts title={input.title} description={input.description}/>
                break;
            } 
            case 'logo-text': {
                result = <LogoText logo={input.logo} description={input.description} />
                break;
            }
        }
        return result;
    }

    return (
        <div className="relative w-[100%] -mt-[60px] text-white">
            <Image priority={true} className='absolute top-0 left-0 z-[10]' src={input.image} layout="responsive" width={'100%'} height={'50vh'}/>     
            { Output()}
        </div>
    )
}
export function Texts({ title, description} : any){
    return (
        <div className="absolute top-[50%] left-[50%] z-[12] text-center -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-[16px] md:text-[20px] lg:text-[24px]">{title}</h1>
            {
                description ? <p className="text-[14px] md:text-[16px]">{description}</p> : <></>
            }
        </div>
    )
}
export function LogoText({ logo, description } : any){
    return (
        <div className="absolute top-[50%] left-[50%] z-[12] text-center -translate-x-[50%] -translate-y-[50%]">
            <img src={logo} className="inline-block w-[120px] h-[40px] md:w-[200px] md:h-[50px] lg:w-[260px] lg:h-[80px]"/> 
            {
                description ? <p className="text-[14px] md:text-[16px]">{description}</p> : <></>
            }
        </div>
    )
}