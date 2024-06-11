// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import CardHeader from '@mui/material/CardHeader'

interface RowType {
  name: string
  registered: string
  email: string
  status: string
  role: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    status: 'enabled',
    registered: '7/17/2023',
    name: 'Jacob Doyle',
    email: 'abropuk@pognihpus.gn',
    role: 'Admin'
  },
  {
    status: 'enabled',
    registered: '6/9/2023',
    name: 'Alex McDonald',
    email: 'obbem@cilituz.cr',
    role: 'User'
  },
  {
    status: 'enabled',
    registered: '2/10/2023',
    name: 'Lulu Lynch',
    email: 'sukuso@jibrepe.us',
    role: 'User'
  },
  {
    status: 'deleted',
    registered: '12/23/2023',
    name: 'Philip Hall',
    email: 'resavuto@ninevi.pn',
    role: 'User'
  },
  {
    status: 'disabled',
    registered: '5/9/2023',
    name: 'Celia Duncan',
    email: 'jofjo@evsozu.af',
    role: 'Admin'
  },
  {
    status: 'enabled',
    registered: '8/23/2023',
    name: 'Carl Ford',
    email: 'vu@nev.np',
    role: 'User'
  },
  {
    status: 'deleted',
    registered: '2/6/2023',
    name: 'Albert Carroll',
    email: 'ica@erconru.au',
    role: 'Admin'
  },
  {
    status: 'disabled',
    registered: '8/23/2013',
    name: 'Jorge Ford',
    email: 'jff@nev.np',
    role: 'Admin'
  }
]

const statusObj: StatusObj = {
  enabled: { color: 'info' },
  disabled: { color: 'warning' },
  deleted: { color: 'error' }
}

const DashboardTableUser = () => {
  return (
    <Card>
      <CardHeader title='Last Users' titleTypographyProps={{ variant: 'h6' }} />
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Signup Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{new Date(row.registered).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status.toUpperCase()}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTableUser
