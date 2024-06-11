import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import React from 'react'
import TableUsers from 'src/views/tables/TableUsers'

const users = () => {
    return (
        <Card>
            <CardHeader title='Users' titleTypographyProps={{ variant: 'h6' }} />
            <TableUsers />
        </Card>
    )
}

export default users
