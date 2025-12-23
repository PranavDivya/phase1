import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Board, {InputBox} from './App.jsx'
import LifecycleA from './LifecycleA.jsx'
import Forms from './Forms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Board /> */}
    {/* <LifecycleA /> */}
    <Forms />
  </StrictMode>,
)
