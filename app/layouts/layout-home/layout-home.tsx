import Header from "../../partials/header/header"
export default function LayoutHome({content}:any){
    return (
        <>
            <Header /> 
            <main className="min-h-[100vh]">
                { content }
            </main>
        </>
    )
}