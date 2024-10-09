import React, { useState } from 'react';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      {!token ? (
        <AdminLogin setToken={setToken} />
      ) : (
        <AdminDashboard token={token} />
      )}
    </div>
  );
};

export default App;