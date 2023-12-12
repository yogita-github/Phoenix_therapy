// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Games from './screens/components/Games';
import HomeSide from './screens/components/Home_inside';
import Balloon from './screens/components/Balloon';
import IntroPage from './screens/components/IntroPage';
import Register from './screens/components/Register';
import Testing from './screens/Testing';
import StoryPage from './screens/components/StoryPage';
import S2 from "./screens/components/S2";
import TodoApp from './screens/components/TodoApp';
import Timer from './screens/components/Timer';
// import BottomNavigator from './screens/BottomNavigator';
import Therapy from './screens/components/Therapy';
import Profile from './screens/components/Profile';
import Progress from './screens/components/Progress';
import QuizGame from './screens/components/QuizGame';
import TongueTwisterGame from './screens/components/TongueTwister';
import ArticulationMaze from './screens/components/ArticulationMaze';
import Sentence from './screens/components/Sentence';
import Idioms from "./screens/components/Idioms";
import AgeTherapy from './screens/components/AgeTherapy';
import LipsExercise from './screens/components/LipsExercise';
import MouthExercise from './screens/components/MouthExercise';
import TongueExercise from './screens/components/TongueExercise';
import Exercise from "./screens/components/Exercise";
import ButtonPage from './screens/ButtonPage';
import VideoPage from './screens/VideoPage';
import LetsStart from "./screens/components/LetsStart";
import SelfLearning2 from "./screens/components/SelfLearning2"
import SplashScreen from './screens/components/SplashScreen';
import Activities from "./screens/components/Activities";
import MirrorTherapy from './screens/components/MirrorTherapy';
import PeerInside from './screens/components/PeerInside';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import MirrorTherapy from "./screens/components/MirrorTherapy";

const Drawer =createDrawerNavigator();

const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="LetsStart" headerMode="none">
//       <Stack.Screen name="LetsStart" component={LetsStart} />
//       {/* Add other screens here */}
//     </Stack.Navigator>
//   );
// };

const App = () =>{
  return (
    <NavigationContainer>
      {/* <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <Profile {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeStack} />
          {/* Add other screens or stacks as needed */}
      {/* </Drawer.Navigator> */}

      <Stack.Navigator initialRouteName="LetsStart">
        <Stack.Screen name="Test" component={Testing} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="PeerInside" component={PeerInside} />
        <Stack.Screen name="HomeSide" component={HomeSide} />
        <Stack.Screen name="Balloon" component={Balloon} />
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Therapy" component={Therapy} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="QuizGame" component={QuizGame} />
        <Stack.Screen name="TongueTwisterGame" component={TongueTwisterGame} />
        <Stack.Screen name="Sentence" component={Sentence} />
        <Stack.Screen name="Idioms" component={Idioms} />
        <Stack.Screen name="MirrorTherapy" component={MirrorTherapy} />
        <Stack.Screen name="AgeTherapy" component={AgeTherapy} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="TodoApp" component={TodoApp} />
        <Stack.Screen name="Timer" component={Timer} />

        <Stack.Screen name="ArticulationMaze" component={ArticulationMaze} />
        <Stack.Screen name="LipsExercise" component={LipsExercise} />
        <Stack.Screen name="TongueExercise" component={TongueExercise} />
        <Stack.Screen name="MouthExercise" component={MouthExercise} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="ButtonPage" component={ButtonPage} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
        <Stack.Screen name="LetsStart" component={LetsStart} />
        <Stack.Screen name="SelfLearning2" component={SelfLearning2} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="StoryPage" component={StoryPage} />
        <Stack.Screen name="S2" component={S2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
