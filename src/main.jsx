import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const customElement = React.createElement('a',{href: 'https://www.google.com', target: '_blank'},'I Am a Google')

createRoot(document.getElementById('root')).render(
  customElement
)
