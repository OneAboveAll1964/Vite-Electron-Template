import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div style={{
        width: '100vw', height: '100vh'
    }}>
      <div style={{ width: '100vw', height: '100vh' }}>
      <webview
        src="http://13.60.196.106/"
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
    </div>
  )
}

export default App
