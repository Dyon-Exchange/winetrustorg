import { createTheme } from '@mui/material/styles'

const materialTheme = createTheme({
  typography: {
    fontFamily: `Gilroy`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontWeight: 400,
      fontSize: '4.1rem'
    }
  }
})
export default materialTheme
