import React, { useState } from 'react';
import './roll-1.css';
import image01 from './media/0001.JPG';
import image02 from './media/0002.JPG';
import image03 from './media/0003.JPG';
import image04 from './media/0004.JPG';
import image05 from './media/0005.JPG';
import image06 from './media/0006.JPG';
import image07 from './media/0007.JPG';
import image08 from './media/0008.JPG';
import image09 from './media/0009.JPG';
import image10 from './media/0010.JPG';
import image11 from './media/0011.JPG';
import image12 from './media/0012.JPG';
import image17 from './media/0017.JPG';
import image18 from './media/0018.JPG';
import image19 from './media/0019.JPG';
import image20 from './media/0020.JPG';
import image21 from './media/0021.JPG';
import image22 from './media/0022.JPG';
import image23 from './media/0023.JPG'


function RollOne() {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        if (isOpen === false) {
            setIsOpen(true);
        } else if (isOpen === true) {
            setIsOpen(false)
        }
    }

    if (isOpen === false) {
        return (
            <section 
                className="roll-link" 
                id="one" 
                onClick={handleClick}
            >
                <h2 className="roll-title" id="title-1">
                    one
                </h2>
            </section>
        );
    } else if (isOpen === true) {
        return (
            <div>
                <p 
                    className='close-button'
                    onClick={handleClick}
                >
                    close roll-one
                </p>

                <section id="grid-container-one">
                    <div className="grid-image" id="image-1">
                        <img src={image01} alt="" />
                    </div>
                    <div className="grid-image" id="image-2">
                        <img src={image02} alt="" />
                    </div>
                    <div className="grid-image" id="image-3">
                        <img src={image03} alt="" />
                    </div>
                    <div className="grid-image" id="image-4">
                        <img src={image04} alt="" />
                    </div>
                    <div className="grid-image" id="image-5">
                        <img src={image05} alt="" />
                    </div>
                    <div className="grid-image" id="image-6">
                        <img src={image06} alt="" />
                    </div>
                    <div className="grid-image" id="image-7">
                        <img src={image07} alt="" />
                    </div>
                    <div className="grid-image" id="image-8">
                        <img src={image08} alt="" />
                    </div>
                    <div className="grid-image" id="image-9">
                        <img src={image09} alt="" />
                    </div>
                    <div className="grid-image" id="image-10">
                        <img src={image10} alt="" />
                    </div>
                    <div className="grid-image" id="image-11">
                        <img src={image11} alt="" />
                    </div>
                    <div className="grid-image" id="image-12">
                        <img src={image12} alt="" />
                    </div>
                    <div className="grid-image" id="image-17">
                        <img src={image17} alt="" />
                    </div>
                    <div className="grid-image" id="image-18">
                        <img src={image18} alt="" />
                    </div>
                    <div className="grid-image" id="image-19">
                        <img src={image19} alt="" />
                    </div>
                    <div className="grid-image" id="image-20">
                        <img src={image20} alt="" />
                    </div>
                    <div className="grid-image" id="image-21">
                        <img src={image21} alt="" />
                    </div>
                    <div className="grid-image" id="image-22">
                        <img src={image22} alt="" />
                    </div>
                    <div className="grid-image" id="image-23">
                        <img src={image23} alt="" />
                    </div>
                </section>
                <p 
                    className='close-button'
                    onClick={handleClick}
                >
                    close roll-one
                </p>
            </div>
        );
    }
}

export default RollOne;