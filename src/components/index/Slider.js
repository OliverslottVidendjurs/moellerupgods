import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Slider.module.scss";
import "@fortawesome/fontawesome-free/css/all.css"

//Welcome to my domain >:D

function Slider() {
    const [slide, setSlide] = useState([{
        id: 1,
        loaded: false
    },
    {
        id: 2,
        loaded: false
    },
    {
        id: 3,
        loaded: false
    }]);

    const [liStyle, setLiStyle] = useState([]);
    const [ulStyle, setUlStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const imgEl = useRef(null); //https://reactjs.org/docs/hooks-reference.html#useref
    const ulEl = useRef(null);
    const liEl = useRef([]);
    const reffy = useRef(liStyle);
    reffy.current = liStyle;

    function handleImgLoad(index) {
        let copy = slide.slice();
        copy[index].loaded = true;
        setSlide(copy);
    }

    useEffect(() => {
        function isLoaded(currentValue) {
            return currentValue.loaded;
        }
        if (slide.every(isLoaded)) {
            initSlider();
        }
    }, [slide]);

    const slideRight = useCallback(() => {
        setCurrentSlide(currentSlide + 1);
        let liStyleCopy = reffy.current.slice();
        if (currentSlide + 1 >= liEl.current.length) {
            for (let i = 0; i < liEl.current.length; i++) {
                liStyleCopy[i] = { ...liStyleCopy[i], transition: ".4s", left: (liEl.current[i].clientWidth * i) }
            }
            setCurrentSlide(0);
        } else {
            for (let i = 0; i < liEl.current.length; i++) {
                liStyleCopy[i] = { ...liStyleCopy[i], transition: ".4s", left: liStyleCopy[i].left - liEl.current[i].clientWidth }
            }
        }
        setLiStyle(liStyleCopy);
    }, [currentSlide]);

    useEffect(() => {
        window.addEventListener("resize", initSlider);
        return () => {
            window.removeEventListener("resize", initSlider);
        }
    }, []);

    useEffect(() => {
        const id = setTimeout(function () {
            slideRight();
        }, 5000);
        return () => {
            clearInterval(id);
        }
    }, [slideRight]);

    function initSlider() {
        setUlStyle({ height: liEl.current[0].clientHeight + "px" });
        var liList = [];
        for (let i = 0; i < liEl.current.length; i++) {
            liList.push({ position: "absolute", left: (ulEl.current.clientWidth * i) });
        }
        setLiStyle(liList);
    }

    function slideLeft() {
        setCurrentSlide(currentSlide - 1);
        let liStyleCopy = liStyle.slice();
        if (currentSlide - 1 < 0) {
            for (let i = 0; i < liEl.current.length; i++) {
                liStyleCopy[i] = { ...liStyleCopy[i], transition: ".4s", left: -(liEl.current[i].clientWidth * (liEl.current.length - 1 - i)) }
            }
            setCurrentSlide(liEl.current.length - 1);
        } else {
            for (let i = 0; i < liEl.current.length; i++) {
                liStyleCopy[i] = { ...liStyleCopy[i], transition: ".4s", left: liStyleCopy[i].left + liEl.current[i].clientWidth }
            }
        }
        setLiStyle(liStyleCopy);
    }

    function handleLeftClick() {
        slideLeft();
    }

    function handleRightClick() {
        slideRight();
    }

    let slideList = slide.map((slide, i) =>
        <li style={liStyle[i]} ref={ref => liEl.current[i] = ref} key={slide.id}>
            <img onLoad={() => handleImgLoad(i)} ref={imgEl} src={("slider/slider"+(i+1)+".png")} alt="img" />
        </li>
    );

    let indicatorList = liEl.current.map((li, index) => {
        if (index === currentSlide) {
            return <i key={index} className="fas fa-circle"></i>
        } else {
            return <i key={index} className="far fa-circle"></i>
        }
    });

    return (
        <div className={styles.slider}>
            <ul ref={ulEl} style={ulStyle}>
                {slideList}
            </ul>
            <i onClick={handleLeftClick} className={"fas fa-chevron-left " + styles.left}></i>
            <i onClick={handleRightClick} className={"fas fa-chevron-right " + styles.right}></i>
            <div className={styles.indicators}>
                {indicatorList}
            </div>
        </div>
    );
}

export default Slider;