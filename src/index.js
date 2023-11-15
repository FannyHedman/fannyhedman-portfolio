import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { LanguageProvider } from '../src/components/language/LanguageContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
)
