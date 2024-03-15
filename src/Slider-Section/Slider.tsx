import "./slider-style.css"
import { ImageSlider } from "./ImageSlider"
import car1 from "./images/img-1.jpeg"
import car2 from "./images/img-2.jpeg"
import car3 from "./images/img-3.jpeg"
import car4 from "./images/img-4.jpeg"
import car5 from "./images/img-5.jpeg"

const IMAGES = [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
    { url: car4, alt: "Car Four" },
    { url: car5, alt: "Car Five" },
]
export function Slider() {
    return (
        <div className="section section--slider">
            <ImageSlider images={IMAGES}/>
        </div>
    )
}
