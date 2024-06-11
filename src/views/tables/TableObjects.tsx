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
    id: 'name' | 'number' | 'date' | 'description'
    label: string
    minWidth?: number
    align?: 'right'
    format?: (value: number) => string
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'number', label: 'Number', minWidth: 170 },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        format: (value: number) => value.toLocaleString('en-US')
    },
    { id: 'description', label: 'Description', minWidth: 170 }
]

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

const TableObjects = () => {
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
                                <TableRow hover role='checkbox' tabIndex={-1} key={row.name}>
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

export default TableObjects
