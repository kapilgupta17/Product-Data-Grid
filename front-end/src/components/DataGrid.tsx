import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import Row from './Row';
import TotalRow from './TotalRow';

const DataGrid: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [dataType, setDataType] = useState<string>('location');
    const [originalData, setOriginalData] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:5001/data?type=${dataType}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, [dataType]);

    const handleSort = (column: keyof typeof data[0]) => {
        const sortedData = [...data].sort((a, b) =>
            a[column] > b[column] ? 1 : -1
        );
        setData(sortedData);
    };

    const handleLocationClick = (location: string) => {
        const filteredData = originalData.filter(item => item.location === location);
        setData(filteredData);
    };

    const handleDelete = (index: number) => {
        const updatedData = data.filter((_, idx) => idx !== index);
        setData(updatedData);
    };

    const totals = data.reduce(
        (acc, item) => ({
            potentialRevenue: acc.potentialRevenue + parseFloat(item.potentialRevenue.replace(/[^0-9.-]+/g, "")),
            processingVolume: acc.processingVolume + parseFloat(item.processingVolume.replace(/[^0-9.-]+/g, "")),
            merchant: acc.merchant + parseFloat(item.merchant.replace(/[^0-9.-]+/g, "")),
            revenueAccount: acc.revenueAccount + parseFloat(item.revenueAccount.replace(/[^0-9.-]+/g, "")),
            marketshare: acc.marketshare + parseFloat(item.marketshare.replace(/[^0-9.-]+/g, "")),
            commercial: acc.commercial + parseFloat(item.commercial.replace(/[^0-9.-]+/g, ""))
        }),
        {
            potentialRevenue: 0,
            processingVolume: 0,
            merchant: 0,
            revenueAccount: 0,
            marketshare:0,
            commercial:0
        }
    );


    return (
        <div>
            <Dropdown onSelect={setDataType} />
            <table border={1}>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('location')}>Location ⬍</th>
                        <th>Competing Potential Revenue</th>
                        <th>Competing Processing Volume</th>
                        <th>Competitor Merchant</th>
                        <th>Revenue/Account</th>
                        <th>Market Share</th>
                        <th>Commercial DDA's</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TotalRow totals={totals} />
                    {data.map((item, index) => (
                        <Row key={index} data={item} onDelete={() => handleDelete(index)} onLocationClick={handleLocationClick} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataGrid;
