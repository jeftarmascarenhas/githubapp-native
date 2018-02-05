import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FavoritesRepoScreen from './containers/FavoritesRepoScreen';
import HomeScreen from './containers/HomeScreen';

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
});