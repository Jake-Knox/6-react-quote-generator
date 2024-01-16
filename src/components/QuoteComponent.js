import React from 'react';

const QuoteComponent = ({ quote }) => {
    return (
        <div>
            <p>{quote.content}</p>
            <p>- {quote.author}</p>
        </div>
    );
};

export default QuoteComponent;