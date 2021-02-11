import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile203801Navigator from '../features/UserProfile203801/navigator';
import Settings203800Navigator from '../features/Settings203800/navigator';
import Settings203798Navigator from '../features/Settings203798/navigator';
import SignIn2203796Navigator from '../features/SignIn2203796/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile203801: { screen: UserProfile203801Navigator },
Settings203800: { screen: Settings203800Navigator },
Settings203798: { screen: Settings203798Navigator },
SignIn2203796: { screen: SignIn2203796Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
