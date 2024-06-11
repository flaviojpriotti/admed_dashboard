// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

interface Column {
  id: 'name' | 'registered' | 'email' | 'status' | 'role'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'role', label: 'Role', minWidth: 170 },
  {
    id: 'registered',
    label: 'Sign up date',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US')
  },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
]

interface RowType {
  name: string
  registered: string
  email: string
  status: string
  role: string
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
  },
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

const TableUsers = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.email}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableUsers
