import React from 'react';
import { Select, MenuItem } from '@mui/material';

const countries = [
  { id: 'ES', name: 'España', flag: '🇪🇸', phone: '34' },
  { id: 'US', name: 'Estados Unidos', flag: '🇺🇸', phone: '1' },
  { id: 'MX', name: 'México', flag: '🇲🇽', phone: '52' },
  { id: 'AR', name: 'Argentina', flag: '🇦🇷', phone: '54' },
  { id: 'CO', name: 'Colombia', flag: '🇨🇴', phone: '57' },
  // Añade más países según necesites
];

const CountrySelect = ({ value, onChange }) => {
  return (
    <Select
      fullWidth
      value={value ? value.id : ''}
      onChange={(e) => {
        const selectedCountry = countries.find(country => country.id === e.target.value);
        onChange(selectedCountry);
      }}
      displayEmpty
      renderValue={(selected) => {
        if (!selected) {
          return 'Selecciona un país';
        }
        const country = countries.find(c => c.id === selected);
        return `${country.flag} ${country.name}`;
      }}
    >
      {countries.map((country) => (
        <MenuItem key={country.id} value={country.id}>
          {country.flag} {country.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
