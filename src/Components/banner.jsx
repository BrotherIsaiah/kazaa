import banner_background from "./Assets/background.jpg"
import "./banner.css"
export default function TheBanner (){
    return (
        <>
        <img src={banner_background} alt="Bannière de Kasa" />
        <h1>Chez vous, partout et ailleurs</h1>
        </>
    )
    
}