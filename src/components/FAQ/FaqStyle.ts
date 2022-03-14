import { makeStyles } from '@material-ui/core/styles'

const faqStyles = makeStyles(theme => {
  return {
    root: {
      '& .container': {
        paddingTop: '80px',
        paddingBottom: '80px'
      },
      '& .accordion-title': {
        backgroundColor: '#e9eef3',
        padding: '10px 20px',
        borderTopLeftRadius: '6px',
        marginBottom: 0,

        cursor: 'pointer',
        borderTopRightRadius: '6px',
        alignItems: 'center',
        '& .MuiTypography-body1': {
          fontSize: '18px',
          fontWeight: 600
        }
      },
      '& .accordion-title:hover': {
        color: '#00939C'
      },
      '& .accordion-list': {
        marginBottom: '1.5rem',
        '& .accordion-desc': {
          backgroundColor: '#fbfbfb',
          padding: '30px 2rem',
          '& p': {
            fontWeight: 500,
            lineHeight: 2
          }
        }
      },
      '& .have-ques-div': {
        opacity: 1,
        backgroundColor: 'rgba(255,255,255,1)',
        padding: '0 3rem',
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
        display: 'flex',
        borderRadius: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& h4': {
          fontSize: '1.5rem',
          fontWeight: 500
        }
      },
      '& .MuiAvatar-root': {
        width: '21px',
        height: '9px'
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        '& .have-ques-div': {
          display: 'block',
          textAlign: 'center',
          paddingBottom: '30px',
          paddingTop: '1px'
        }
      }
    }
  }
})

export default faqStyles
