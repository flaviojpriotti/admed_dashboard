// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { AccountGroupOutline, CogOutline, HexagonMultipleOutline } from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Entities'
    },
    {
      title: 'Users',
      icon: AccountGroupOutline,
      path: '/users',
      //openInNewTab: true
    },
    {
      title: 'Objects',
      icon: HexagonMultipleOutline,
      path: '/objects',
      //openInNewTab: true
    },
    {
      sectionTitle: 'Configuration'
    },
    {
      title: 'Profile',
      icon: AccountOutline,
      path: '/account-settings'
    },
    {
      title: 'Logout',
      icon: LogoutVariant,
      path: '/pages/login'
    },
  ]
}

export default navigation
