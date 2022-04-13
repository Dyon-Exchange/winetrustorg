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
        justifyContent: 'center',
        '& .profile-section': {
          display: 'block'
        }
      },
      '& .profile-outer': {
        display: 'flex',
        height: 'max-content'
      },
      '& #profile-img': {
        position: 'relative'
      },
      '& .profile-pic': {
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        objectFit: 'cover'
      },
      '& .profile-name': {
        fontWeight: '500',
        alignSelf: 'center',
        marginLeft: '20px'
      },
      '& .mobile-profile': {
        display: 'flex'
      },
      '& .profile-form': {
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
        backgroundColor: 'rgba(0, 0, 0, 0.54)',
        color: '#fff',
        display: 'none !important',
        top: 0
      },
      '& .mobile-profile-edit': {
        display: 'block',
        alignSelf: 'center',
        marginLeft: '10px'
      },
      '& .add-photo-outer': {
        display: 'contents',
        fontSize: '16px',
        '& span': {
          marginRight: '6px'
        }
      },
      [theme.breakpoints.up('md')]: {
        '& .profile-bg-outer': {
          '& .profile-section': {
            display: 'flex!important',
            justifyContent: 'space-between'
          }
        },
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
          paddingLeft: '1rem'
        }
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        '& .profile-name': {
          marginTop: '9px'
        },
        '& .profile-form': {
          marginTop: '80px'
        }
      }
    }
  }
})

export default profileStyles
