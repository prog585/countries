import React from 'react';
import {
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent
} from '@mui/material';
import './searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="searchbar-container">
      <div>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 350
          }}>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a country..."
            inputProps={{ 'aria-label': 'search a country' }}
          />
        </Paper>
      </div>
      <div className="region-container">
        <FormControl sx={{ m: 1, minWidth: 120, width: 200, padding: 0, margin: 0 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            sx={{ fontWeight: 300, boxShadow: 'none' }}
            inputProps={{ 'aria-label': 'Without label' }}>
            <MenuItem value="">
              <em>Filter by Region</em>
            </MenuItem>

            <MenuItem value={10}>Africa</MenuItem>
            <MenuItem value={20}>America</MenuItem>
            <MenuItem value={30}>Asia</MenuItem>
            <MenuItem value={30}>Europe</MenuItem>
            <MenuItem value={30}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchBar;
