import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            //  + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



const names = [
    'Food',
    'Rent',
    'Medicines',
    'Grocery',
    'Entertainment',
    'Travel',
];

function getStyles(name, category, theme) {
    return {
        fontWeight:
            category.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Category() {

    const theme = useTheme();
    const [category, setCategory] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategory(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className='mt-1'>
            <FormControl sx={{ width: 300, m: 1 }}>
                <Select
                    // multiple
                    displayEmpty
                    value={category}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Select Category</em>;
                        }
                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Categories..</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, category, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}