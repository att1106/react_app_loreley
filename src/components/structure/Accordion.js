import React, { useState, useRef, useEffect } from "react";
import Chevron from "./Chevron";
import "./accordion.css";


const Accordion = (props) => {

    const [active, setActive] = useState("");
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, active])


    const [setRotate, setRotateState] = useState("accordion-icon")


    const toggleAccordion = () => {
        setActive(!active);
    }

    return (
        <div className="accordion-box">
            {/* <button className="accordion-title" onClick={toggleAccordion}>
                <p>{props.title}</p>
            

                <span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
                    <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
                 </span>

            </button> */}
           <div className="accordion-title">
           <p>{props.title}</p>
           <hr/>
                 <span className={active ? 'accordion-icon rotate' : 'accordion-icon'}  onClick={toggleAccordion}>
                    <Chevron 
                        className={`${setRotate}`}
                        width={15} fill={"#777"} /> 
                 </span>
                
           </div>        
            <div
                ref={contentRef}
                className="accordion-content"
            >
                <hr/>
                
                {props.children}
            </div>
        </div>

    );
}

export default Accordion;
