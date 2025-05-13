import { Routes, Route } from 'react-router-dom';

import { Wellcome } from './LoginComponents/Wellcome';
import { Login } from './LoginComponents/Login';
import { Register } from './LoginComponents/Register';
import { RegisterPartner } from './LoginComponents/RegisterPartner';

export function AppRoutes () {
    return (
      <Routes>
        <Route path="/" element={<Wellcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerPartner" element={<RegisterPartner />} />

      </Routes>
    );
  };

  