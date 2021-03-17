import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#fafafa',
        text: '#000000',
      },
      secondary: {
        main: '#FF0000',
      },
      background: {
        default: '#eeeeee',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          textTransform: 'capitalize',
          color: '#ffffff',
        },
        iconSizeLarge: {
          fontSize: '2.1875rem',
        },
        textPrimary: {
          '&:hover': {
            backgroundColor: 'rgba(250,250,250, 0.4)',
          },
        },
      },
    },
  })
)

export default theme
