import './App.css'
import { MuiTypography } from './components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { MuiTextField } from './components/MuiTextField'
import { MuiSelect } from './components/MuiSelect'
import { MuiRadio } from './components/MuiRadio'
import { MuiCheckBox } from './components/MuiCheckBox'
import { MuiLayouts} from './components/MuiLayouts'
import { MuiTable } from './components/MuiTable'
import { MuiDialog } from './components/MuiDialog'
import { MuiSkeleton } from './components/MuiSkeleton'
import { MuiPagination } from './components/MuiPagination'

export default function App() {

  return (
    <>
      <MuiTypography />
      <MuiButton /><br />
      <MuiTextField /><br />
      <MuiSelect /><br />
      <MuiRadio /><br />
      <MuiCheckBox /><br />
      <MuiLayouts />
      <MuiTable />
      <MuiDialog />
      <MuiSkeleton />
      <MuiPagination />
    </>
  )
}
