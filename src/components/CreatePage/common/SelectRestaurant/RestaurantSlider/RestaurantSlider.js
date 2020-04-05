import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import s from './slider.module.scss';
import { NavLink } from 'react-router-dom';

const RestaurantSlider = ({ show, restaurants, setRestaurant, setTitle }) => {
    return (
        <>
            {show && 
                <CarouselProvider naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                totalSlides={restaurants.length}
                >
                    <div className={s.restaurants}>
                        <div className={s.btnBack}>
                            <ButtonBack className={s.btn}>
                                <i className="material-icons">arrow_back_ios</i>
                            </ButtonBack>
                        </div>
                        
                        <Slider className={s.slider}>
                            {restaurants.map((item, index) => (
                                <Slide key={index} index={index} 
                                        className={s.slide} 
                                        style={{'backgroundImage': `url(${item.img})`}}
                                >
                                    <div className={s.titleBtn}>
                                        <h1>{item.title}</h1>

                                        <div className={s.buttons}>
                                            <NavLink to={`/restaurants/${item.slug}`} className={s.more}>
                                                <button>More</button>
                                            </NavLink>
                                            <button className={s.select} 
                                                    onClick={() => {
                                                        setRestaurant(item);
                                                        setTitle(item.title);
                                                    }}
                                            >Select</button>
                                        </div>
                                    </div>
                                </Slide>
                        ))}
                        </Slider>

                        <div className={s.btnNext}>
                            <ButtonNext className={s.btn}>
                                <i className="material-icons">arrow_forward_ios</i>
                            </ButtonNext>
                        </div>
                    </div>
                </CarouselProvider>
            }
        </>
    )
}

export default RestaurantSlider;