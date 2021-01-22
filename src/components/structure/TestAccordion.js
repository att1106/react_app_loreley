import React from "react";
import Accordion from "./Accordion";


const accordioncontent = {
    testtitle: "this is my title",
    testcontent: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
}

const TestAccordion = () => {

    return (
        <div>
            <Accordion 
                title= {accordioncontent.testtitle}>
                <span className="accordion-text">{accordioncontent.testcontent}</span>
            </Accordion>
        </div>
    );
}

export default TestAccordion;