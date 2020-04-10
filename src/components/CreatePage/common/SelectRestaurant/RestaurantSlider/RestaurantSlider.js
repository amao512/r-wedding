import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import s from './slider.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                        {restaurants.length <= 0 
                            ? <div className={s.noRestaurants}>
                                <h1>There is no restaurants</h1>
                            </div>
                            :   <Slider className={s.slider}>
                                    {restaurants.map(res => (
                                        <Slide key={res.sys.id} index={res.sys.id} 
                                                className={s.slide} 
                                                style={{'backgroundImage': `url(${res.fields.img.fields.file.url})`}}
                                        >
                                            <div className={s.titleBtn}>
                                                <h1>{res.fields.title}</h1>

                                                <div className={s.buttons}>
                                                    <NavLink to={`/restaurants/${res.fields.slug}`} className={s.more}>
                                                        <button>More</button>
                                                    </NavLink>
                                                    <button className={s.select} 
                                                            onClick={() => {
                                                                setRestaurant(res);
                                                                setTitle(res.fields.title);
                                                            }}
                                                    >Select</button>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </Slider>
                        }
                        

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

RestaurantSlider.propTypes = {
    show: PropTypes.bool.isRequired,
    restaurants: PropTypes.array.isRequired,
    setRestaurant: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired
}

export default RestaurantSlider;