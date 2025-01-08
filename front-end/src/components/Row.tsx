import React from 'react';

interface RowProps {
    data: any;
    onDelete: () => void;
    onLocationClick: (location: string) => void;
}

const Row: React.FC<RowProps> = ({ data, onDelete, onLocationClick }) => {
    return (
        <tr>
            <td style={{ cursor: 'pointer' }} onClick={() => onLocationClick(data.location)}>
                {data.location}
            </td>
            <td>{data.potentialRevenue}</td>
            <td>{data.processingVolume}</td>
            <td>{data.merchant}</td>
            <td>{data.revenueAccount}</td>
            <td>{data.marketshare}</td>
            <td>{data.commercial}</td>
            <td><button onClick={onDelete}>X</button></td>
        </tr>
    );
};

export default Row;
