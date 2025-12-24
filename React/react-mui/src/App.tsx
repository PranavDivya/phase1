import './App.css'
import { MuiTypography } from './components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { MuiTextField } from './components/MuiTextField'
import { MuiSelect } from './components/MuiSelect'
import { MuiRadio } from './components/MuiRadio'
import { MuiCheckBox } from './components/MuiCheckBox'

export default function App() {

  return (
    <>
      <MuiTypography />
      <MuiButton /><br />
      <MuiTextField /><br />
      <MuiSelect /><br />
      <MuiRadio /><br />
      <MuiCheckBox />
    </>
  )
}
