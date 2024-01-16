import React from 'react';

const QuoteComponent = ({ quote }) => {
    return (
        <div>
            <p>{quote.text}</p>
            <p>- {quote.quthor}</p>
        </div>
    );
};

export default QuoteComponent;