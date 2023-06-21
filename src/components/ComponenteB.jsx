import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const options = [
	{ value: '+', label: '+' },
	{ value: '-', label: '-' },
	{ value: '*', label: '*' },
];

const ComponenteB = ({signo,handleChangeSigno}) => {
  return (
    <Box sx={{ minWidth: 40 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Signo</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={signo}
					label='Signo'
					onChange={handleChangeSigno}
				>
                    {options.map(item =>(
                        <MenuItem value={item.value} key={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
				</Select>
			</FormControl>
		</Box>
  );
};

export default ComponenteB;