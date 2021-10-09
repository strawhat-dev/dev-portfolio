import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { Switch, Tooltip, Stack } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

const EXP = { expires: new Date('1/19/38') };

export const DarkmodeToggle = () => {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get('darkmode') === 'enabled';
    setDarkmode(cookie);
    cookie
      ? import('darkreader').then((darkreader) => {
          darkreader.setFetchMethod(window.fetch);
          darkreader.enable({});
        })
      : import('darkreader').then((darkreader) => darkreader.disable());
  }, []);

  const handleChange = () => {
    Cookies.set('darkmode', darkmode ? 'disabled' : 'enabled', EXP);
    darkmode
      ? import('darkreader').then((darkreader) => darkreader.disable())
      : import('darkreader').then((darkreader) => {
          darkreader.setFetchMethod(window.fetch);
          darkreader.enable({});
        });

    setDarkmode(!darkmode);
  };

  return (
    <Stack direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
      <DarkMode />
      <Tooltip title="Toggle Dark Mode">
        <Switch
          checked={darkmode}
          onChange={handleChange}
          inputProps={{
            title: 'darkmode-toggle',
            'aria-label': 'darkmode-toggle',
            'aria-required': 'true',
          }}
        />
      </Tooltip>
    </Stack>
  );
};
