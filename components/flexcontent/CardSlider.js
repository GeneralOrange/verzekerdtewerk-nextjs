import Card from './Card'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../../styles/flexcontent/CardSlider.module.scss'

export default function CardSlider({ data, sliderOptions }){
    if(!data || data.length < 1){
        return null;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        slidesToShow: sliderOptions.slidesToShow ? sliderOptions.slidesToShow : 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    }

    return (
        <>
            <div className={styles.CardSlider}>
                <Container>
                    <div className={styles.CardSlider__wrapper}>
                        <Slider {...sliderSettings}>
                            {data.map((value, index) => (
                                <div key={index} className={styles.CardSlider__item}>
                                    <Card data={value} slider={true}/>  
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </div>
        </>
    )
}