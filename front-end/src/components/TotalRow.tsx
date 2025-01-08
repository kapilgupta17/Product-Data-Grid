import React from 'react';

interface TotalRowProps {
    totals: {
        potentialRevenue: number;
        processingVolume: number;
        merchant: number;
        revenueAccount: number;
        marketshare:number;
        commercial:number;
    };
}

const formatNumber = (value: number) => {
    return value >= 1000000
        ? `$${(value / 1000000).toFixed(2)}M`
        : `$${(value / 1000).toFixed(2)}K`;
};

const TotalRow: React.FC<TotalRowProps> = ({ totals }) => {
    return (
        <tr style={{ fontWeight: 'bold' }}>
            <td>Total</td>
            <td>{formatNumber(totals.potentialRevenue)}</td>
            <td>{formatNumber(totals.processingVolume)}</td>
            <td>{(totals.merchant)}</td>
            <td>{formatNumber(totals.revenueAccount)}</td>
            <td>{(totals.marketshare)}</td>
            <td>{(totals.commercial)}</td>
            <td></td>
        </tr>
    );
};

export default TotalRow;
