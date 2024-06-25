import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastsProvider} from "react-bootstrap-toasts";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ToastsProvider toastContainerProps={{position: 'top-end', className: 'p-2'}} limit={5}>
        <App/>
    </ToastsProvider>
)
