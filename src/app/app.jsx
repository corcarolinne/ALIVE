import React, { memo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'

import Routes from './routes'
import Header from './containers/ConnectedHeader'

const appStyle = { overflowX: 'hidden' }

const App = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend} options={{ enableMouseEvents: true }}>
      <Grid container direction="column" alignItems="center" style={appStyle}>
        <Header isMobile={isMobile} />
        <Routes />
      </Grid>
    </DndProvider>
  )
}

export default memo(App)
