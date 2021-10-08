import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { Switch, Tooltip } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

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
    Cookies.set('darkmode', darkmode ? 'disabled' : 'enabled');
    darkmode
      ? import('darkreader').then((darkreader) => darkreader.disable())
      : import('darkreader').then((darkreader) => {
          darkreader.setFetchMethod(window.fetch);
          darkreader.enable({});
        });

    setDarkmode(!darkmode);
  };

  return (
    <>
      <DarkMode />
      <Tooltip title="Toggle Dark Mode">
        <Switch
          checked={darkmode}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Tooltip>
    </>
  );
};
