import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings167074Navigator from '../features/Settings167074/navigator';
import UserProfile167067Navigator from '../features/UserProfile167067/navigator';
import Settings167066Navigator from '../features/Settings167066/navigator';
import Settings167064Navigator from '../features/Settings167064/navigator';
import SignIn2167062Navigator from '../features/SignIn2167062/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings167074: { screen: Settings167074Navigator },
UserProfile167067: { screen: UserProfile167067Navigator },
Settings167066: { screen: Settings167066Navigator },
Settings167064: { screen: Settings167064Navigator },
SignIn2167062: { screen: SignIn2167062Navigator },

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
