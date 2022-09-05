export default function SectionHome({ children, input }: any){
    let styleBg : any = {
        backgroundColor: "#fff"
    }

    if (input){
        if (input.backgroundColor) { styleBg.backgroundColor = input.backgroundColor }
    }

    return (<div className="py-[1em]" style={styleBg}>
        <div className="container mx-auto">
            <Title title={input.title}/>
            { children }
        </div>
    </div>)
}
export function Title({ title }: any) {
    if (title) {
        return <div className="text-center uppercase text-[16px] md:text-[20px] lg:text-[24px]">{ title }</div>
    } else { return <></> }
}