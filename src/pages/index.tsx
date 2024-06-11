// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import DashboardTableUser from 'src/views/dashboard/DashboardTableUser'
import DashboardTableObjects from 'src/views/dashboard/DashboardTableObjects'
import WelcomeCard from 'src/views/dashboard/WelcomeCard'
import AdministratorSummaryCard from 'src/views/dashboard/AdministratorSummaryCard'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <AdministratorSummaryCard />
        </Grid>
        <Grid item xs={12}>
          <DashboardTableUser />
        </Grid>
        <Grid item xs={12}>
          <DashboardTableObjects />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
