import React, { useState } from 'react';
import quotes from "../quotes.json"

const getRamdom = () => Math.floor(Math.random()* quotes.length);

const colors = ["#845EC2","#008E9B","#0089BA","#FF9671","#0081CF","#2C73D2","#008F7A","#DA0056"];

const QuoteBox = () => {
    
    const backgroundColor = colors[Math.floor(Math.random()*8)]
    document.body.style= `background: ${backgroundColor}`
    
    const [quote, setQuote] = useState(quotes[getRamdom()]);

    const changeQuote = () =>{
        setQuote(quotes[getRamdom()])
    }

    console.log();

    return (

        <div className='wrapper-quotes ' style={{color:backgroundColor}}>
            <div className='text-content'>
                <blockquote>
                    <i className="fa-solid fa-quote-left"></i> {quote.quote}
                </blockquote>
                <p>"{quote.author}"</p>
            </div>
            <div className='btn' >
                <button onClick={changeQuote} style={{background:backgroundColor}}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
        
    );
};

export default QuoteBox;