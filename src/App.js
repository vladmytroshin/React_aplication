import './App.css';
import { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import AppRoutes from './component/Routes/Routes';
import { AuthContext } from './context/Context';

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
  const authentication  = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  return (
    <Box className="App">
      <AuthContext.Provider value={authentication}>
        <AppRoutes />
      </AuthContext.Provider>
    </Box>
  );
}

export default App;
