// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import CardHeader from '@mui/material/CardHeader'

interface RowType {
  name: string
  number: number
  date: string
  description: string
}


const rows: RowType[] = [
  {
    name: 'Object 1',
    number: 1,
    date: '10/10/2022',
    description: 'This is the thing number 1'
  },
  {
    name: 'Object 2',
    number: 2,
    date: '10/10/2022',
    description: 'This is the thing number 2'
  },
  {
    name: 'Object 3',
    number: 3,
    date: '10/10/2022',
    description: 'This is the thing number 3'
  },
  {
    name: 'Object 4',
    number: 4,
    date: '10/10/2022',
    description: 'This is the thing number 4'
  },
  {
    name: 'Object 5',
    number: 5,
    date: '10/10/2022',
    description: 'This is the thing number 5'
  },
  {
    name: 'Object 6',
    number: 6,
    date: '10/10/2022',
    description: 'This is the thing number 6'
  },
  {
    name: 'Object 7',
    number: 7,
    date: '10/10/2022',
    description: 'This is the thing number 7'
  },
  {
    name: 'Object 8',
    number: 8,
    date: '10/10/2022',
    description: 'This is the thing number 8'
  }
]

const DashboardTableObjects = () => {
  return (
    <Card>
      <CardHeader title='Last Objects' titleTypographyProps={{ variant: 'h6' }} />
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{new Date(row.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTableObjects
