import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: `Gilroy`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
})

theme.typography.h1 = {
  fontWeight: 400,
  lineHeight: 1.16,
  [theme.breakpoints.up('md')]: {
    fontSize: '4.1rem'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '3.1rem'
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '30px'
  }
}

theme.typography.h2 = {
  fontWeight: 700,

  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
    lineHeight: '52px'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2rem',
    lineHeight: '52px'
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '24px',
    lineHeight: '38px'
  }
}

export default theme
