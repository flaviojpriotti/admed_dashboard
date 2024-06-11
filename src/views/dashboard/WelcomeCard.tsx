// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the avatar image
const AvatarImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute',
  borderRadius: '100%'
})

const WelcomeCard = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardHeader
        title='Welcome John! 👋'
        subheader={
          <Typography variant='body2'>
            We're happy to have you here again!
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
      <CardContent sx={{ pt: theme => `${theme.spacing(6.5)} !important` }}>
        <Button size='small' variant='contained' href='/account-settings'>
          View Profile
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <AvatarImg alt='John Doe' src='/images/avatars/1.png' />
      </CardContent>
    </Card>
  )
}

export default WelcomeCard
