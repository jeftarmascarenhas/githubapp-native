import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FavoritesRepoScreen from './containers/FavoritesRepoScreen';
import HomeScreen from './containers/HomeScreen';
import SideDrawer from './components/SideDrawer';

// export default StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Favorites: {
//       screen: FavoritesRepoScreen,
//     },
//   }, {
//     headerMode: 'none',
//     initialRouteName: 'Home',
//   },
// );

export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Favorites: {
    screen: FavoritesRepoScreen,
  },
}, {
  initialRouteName: 'Home',
  drawerBackgroundColor: '#222',
  contentComponent: SideDrawer,
  contentOptions: {
    activeTintColor: '#f1d303',
    inactiveTintColor: '#fff',
  },
});