import { styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const BootstrapBlueBtn = styled(Button)({
  textTransform: 'none',
  padding: '16px 40px 15px',
  backgroundColor: '#1483f8',
  borderColor: '#1483F8',
  width: 'max-content',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '16.7px',
  '& span': {
    color: '#fff'
  },
  '@media (max-width:600px)': {
    padding: '10px 18px 10px 18px',
    fontSize: '12px',
    lineHeight: '14.32px'
  }
})

export default BootstrapBlueBtn
