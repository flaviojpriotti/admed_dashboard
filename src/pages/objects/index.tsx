import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import React from 'react'
import TableObjects from 'src/views/tables/TableObjects'

const objects = () => {
    return (
        <Card>
            <CardHeader title='Objects' titleTypographyProps={{ variant: 'h6' }} />
            <TableObjects />
        </Card>
    )
}

export default objects
