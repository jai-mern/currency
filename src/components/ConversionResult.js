import React from 'react';

const ConversionResult = ({ amount }) => (
    <div>
        <h2>Converted Amount: {amount.toFixed(2)}</h2>
    </div>
);

export default ConversionResult;
