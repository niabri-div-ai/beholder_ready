import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './public/Login/Login';
import Settings from './private/Settings/Settings';
import Dashboard from './private/Dashboard/Dashboard';
import Orders from './private/Orders/Orders';
import Monitors from './private/Monitors/Monitors';
import Automations from './private/Automations/Automations';
import OrderTemplates from './private/OrderTemplates/OrderTemplates';
import WithdrawTemplates from './private/WithdrawTemplates/WithdrawTemplates';
import Reports from './private/Reports/Reports';
import Symbols from './private/Symbols/Symbols';
import Wallet from './private/Wallet/Wallet';

function AppRoutes() { // Renamed component to avoid confusion with the 'Routes' component from the library

    function PrivateRoute({ children }) {
        const token = localStorage.getItem("token");
        return token ? children : <Navigate to="/" />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                <Route path="/orders/:symbol?" element={<PrivateRoute><Orders /></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/monitors" element={<PrivateRoute><Monitors /></PrivateRoute>} />
                <Route path="/automations" element={<PrivateRoute><Automations /></PrivateRoute>} />
                <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
                <Route path="/symbols" element={<PrivateRoute><Symbols /></PrivateRoute>} />
                <Route path="/orderTemplates/:symbol?" element={<PrivateRoute><OrderTemplates /></PrivateRoute>} />
                <Route path="/withdrawTemplates/:coin?" element={<PrivateRoute><WithdrawTemplates /></PrivateRoute>} />
                <Route path="/wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;