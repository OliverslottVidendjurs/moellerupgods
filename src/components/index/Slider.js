import React, { useState } from "react";
import Slider1Path from "../../assets/slider/slider1.png";
import Slider2Path from "../../assets/slider/slider2.png";
import Slider3Path from "../../assets/slider/slider3.png";

function Slider() {
    const [slide] = useState([{
        id: 1,
        path: Slider1Path
    },
    {
        id: 2,
        path: Slider2Path
    },
    {
        id: 3,
        path: Slider3Path
    }]);
    return (
        <div>
            <ul>
                <li>
                    <img src={slide[0].path} alt="" />
                </li>
            </ul>
        </div>
    );
}

export default Slider;