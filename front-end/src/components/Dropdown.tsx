import React from 'react';

interface DropdownProps {
    onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="location">Location</option>
            <option value="branch">Branch</option>
        </select>
    );
};

export default Dropdown;