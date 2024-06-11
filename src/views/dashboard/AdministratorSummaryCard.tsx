// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import HexagonMultipleOutline from 'mdi-material-ui/HexagonMultipleOutline'
import AccountGroupOutline from 'mdi-material-ui/AccountGroupOutline'
import AccessPoint from 'mdi-material-ui/AccessPoint'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: DataType[] = [
  {
    stats: '153',
    title: 'Users',
    color: 'info',
    icon: <AccountGroupOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12024',
    color: 'primary',
    title: 'Objects',
    icon: <HexagonMultipleOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '100',
    title: 'Data 1',
    color: 'warning',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },

  {
    stats: '200',
    color: 'error',
    title: 'Data 2',
    icon: <AccessPoint sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  return salesData.map((item: DataType, index: number) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const AdministratorSummaryCard = () => {
  return (
    <Card>
      <CardHeader
        title='Platform information summary'
        subheader={
          <Typography variant='body2'>
            Here's an admin summary
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(1)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AdministratorSummaryCard
