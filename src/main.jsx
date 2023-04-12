import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import GlobalStyle from './style/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
