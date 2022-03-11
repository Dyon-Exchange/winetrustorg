import { makeStyles } from '@material-ui/core/styles'

const profileStyles = makeStyles(theme => {
  return {
    root: {
      '& .profile-container': {
        marginTop: '120px',
        marginBottom: '100px'
      },
      '& .profile-bg-outer': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '66vh',
        justifyContent: 'center'
      },
      '& .profile-backdrop ': {
        height: '300px',
        background: 'rgb(229, 232, 235)',
        borderRadius: '5px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
      },
      '& .profile-outer': {
        position: 'absolute',
        bottom: '-28%',
        left: '10%',
        display: 'flex'
      },
      '& .profile-pic': {
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        objectFit: 'cover'
      },
      '& .profile-name': {
        float: 'right',
        fontWeight: '500',
        alignSelf: 'flex-end',
        marginLeft: '20px'
      },
      '& .mobile-profile': {
        display: 'flex'
      },
      '& .profile-form': {
        marginTop: '140px',
        width: '100%',
        '& .profile-intl-tel-input': {
          padding: '13px 20px',
          border: '1px solid #cccccc',
          borderRadius: '3px',
          paddingLeft: '65px!important',
          width: '100%'
        }
      },
      '& .profile-img-overlay': {
        position: 'absolute',
        bottom: '8px',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.54)',
        color: '#fff',
        display: 'none !important'
      },
      '& .mobile-profile-edit': {
        display: 'block',
        alignSelf: 'flex-end'
      },
      [theme.breakpoints.up('md')]: {
        '& .profile-form': {
          width: '40%',
          paddingLeft: '7rem'
        },
        '& #profile-img:hover .profile-img-overlay': {
          display: 'flex !important'
        },
        '& .mobile-profile-edit': {
          display: 'none'
        }
      },
      [theme.breakpoints.between('sm', 'md')]: {
        '& .profile-form': {
          width: '60%',
          paddingLeft: '5rem'
        }
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        '& .profile-outer': {
          display: 'block',
          bottom: '-40%'
        },
        '& .profile-name': {
          margin: 0,
          textAlign: 'center',
          float: 'unset'
        },
        '& .profile-form': {
          marginTop: '160px'
        }
      }
    }
  }
})

export default profileStyles
