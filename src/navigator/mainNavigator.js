import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfSignIn2203843Navigator from '../features/CopyOfSignIn2203843/navigator';
import CopyOfSignIn2203842Navigator from '../features/CopyOfSignIn2203842/navigator';
import Settings203841Navigator from '../features/Settings203841/navigator';
import UserProfile203834Navigator from '../features/UserProfile203834/navigator';
import Settings203833Navigator from '../features/Settings203833/navigator';
import Settings203831Navigator from '../features/Settings203831/navigator';
import SignIn2203829Navigator from '../features/SignIn2203829/navigator';
import Settings203808Navigator from '../features/Settings203808/navigator';
import UserProfile203801Navigator from '../features/UserProfile203801/navigator';
import Settings203800Navigator from '../features/Settings203800/navigator';
import Settings203798Navigator from '../features/Settings203798/navigator';
import SignIn2203796Navigator from '../features/SignIn2203796/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfSignIn2203843: { screen: CopyOfSignIn2203843Navigator },
CopyOfSignIn2203842: { screen: CopyOfSignIn2203842Navigator },
Settings203841: { screen: Settings203841Navigator },
UserProfile203834: { screen: UserProfile203834Navigator },
Settings203833: { screen: Settings203833Navigator },
Settings203831: { screen: Settings203831Navigator },
SignIn2203829: { screen: SignIn2203829Navigator },
Settings203808: { screen: Settings203808Navigator },
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
