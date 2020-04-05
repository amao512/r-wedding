import React from 'react';
import InputForm from '../../../StyledComponents/InputForm';
import s from './restaurant.module.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SelectRestaurant = props => {

    const {
        show, setShow, title,
        setTitle, changeTitle,
        restaurants, setRestaurant
    } = props

    return (
        <div className={s.selectRestaurants}>
            <h3>Restaurant</h3>
            <div className={s.input}>
                <InputForm type='text' value={title || ''} 
                    onChange={e => changeTitle(e.target.value)} 
                    onClick={() => setShow(true)}    
                />

                <div className={show ? s.rotateArrows : s.arrows} 
                    onClick={() => setShow(!show)}
                >
                    <span className="material-icons">keyboard_arrow_down</span>
                </div>
            </div>

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
                                            <button className={s.more}>More</button>
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
        </div>
    )
}

export default SelectRestaurant;