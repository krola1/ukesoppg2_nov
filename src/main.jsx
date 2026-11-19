// main.jsx is the STARTING POINT of the app.
// This is the first file that runs. Its only job is to put our React app
// onto the web page.

// StrictMode is a helper from React. It does not show anything on the screen,
// but it warns us about possible mistakes while we are developing.
import { StrictMode } from 'react'

// createRoot connects React to a real HTML element on the page.
import { createRoot } from 'react-dom/client'

// Importing a CSS file applies those styles to the whole app.
import './index.css'

// App is our main component. Every other component lives inside it.
import App from './App.jsx'

// 1. Find the <div id="root"> inside index.html
// 2. Tell React to take control of that div
// 3. Render (draw) our <App /> component inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
