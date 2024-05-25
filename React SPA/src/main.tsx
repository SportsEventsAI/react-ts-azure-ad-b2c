import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.scss';

import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

// Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

const msalInstance = new PublicClientApplication(msalConfig);

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>,
    );
}