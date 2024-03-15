import { useState } from "react"
import "./slider-style.css"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"

type ImageSliderProps = {
    images: {
        url: string
        alt: string
    }[]
}
export function ImageSlider ({ images }: ImageSliderProps) {
    // create index and store the value for next/previous buttons
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    return (
        <section className="section--slider-wrapper">
            <div className="slider__image-wrapper">
                {images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={url}
                        alt={alt}
                        aria-hidden={imageIndex !== index}
                        className="slider__image"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>

            <button
                onClick={showPrevImage}
                className="slider__button slider__button--previous"
                aria-label="View Previous Image"
            >
                <ArrowBigLeft aria-hidden />
            </button>
            <button
                onClick={showNextImage}
                className="slider__button slider__button--next"
                aria-label="View Next Image"
            >
                <ArrowBigRight aria-hidden />
            </button>

            <div className="slider__button--dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="slider__button--dot"
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <CircleDot aria-hidden />
                        ) : (
                            <Circle aria-hidden />
                        )}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    )
}
