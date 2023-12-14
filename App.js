// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Games from './screens/components/Games';
import HomeSide from './screens/components/Home_inside';
import Balloon from './screens/components/Balloon';
import IntroPage from './screens/components/IntroPage';
import Register from './screens/components/Register';
import LoginScreen from './screens/LoginScreen';
import Testing from './screens/Testing';
import StoryPage from './screens/components/StoryPage';
import S2 from "./screens/components/S2";
import TodoApp from './screens/components/TodoApp';
import Timer from './screens/components/Timer';
// import BottomNavigator from './screens/BottomNavigator';
import Therapy from './screens/components/Therapy';
import Profile from './screens/components/Profile';

import QuizGame from './screens/components/QuizGame';
import TongueTwister from './screens/components/TongueTwister';
import ArticulationMaze from './screens/components/ArticulationMaze';
import Sentence from './screens/components/Sentence';
import Idioms from "./screens/components/Idioms";
import AgeTherapy from './screens/components/AgeTherapy';
import LipsExercise from './screens/components/LipsExercise';
import MouthExercise from './screens/components/MouthExercise';
import TongueExercise from './screens/components/TongueExercise';
import Exercise from "./screens/components/Exercise";
import LetsStart from "./screens/components/LetsStart";
import SelfLearning2 from "./screens/components/SelfLearning2"
import SplashScreen from './screens/components/SplashScreen';
import Activities from "./screens/components/Activities";
import PeerInside from './screens/components/PeerInside';
import VarnamalaPage from './screens/components/VarnamalaPage';
import WordsPage from "./screens/components/WordsPage";
import CameraScreen from "./screens/components/CameraScreen";
import LettersPage from './screens/LettersPage';
import LetterDetail from './screens/LetterDetail';
import HomeScreen from './screens/HomeScreen';


// import MirrorTherapy from "./screens/components/MirrorTherapy";

// const Drawer =createDrawerNavigator();

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

      <Stack.Navigator>
      <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={Testing} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="PeerInside" component={PeerInside} />
        <Stack.Screen name="HomeSide" component={HomeSide} />
        <Stack.Screen name="Balloon" component={Balloon} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CameraScreen" component={CameraScreen}/>
        <Stack.Screen name="Therapy" component={Therapy} />
        <Stack.Screen name="Profile" component={Profile} />
  
        <Stack.Screen name="QuizGame" component={QuizGame} />
        <Stack.Screen name="TongueTwister" component={TongueTwister} />
        <Stack.Screen name="Sentence" component={Sentence} />
        <Stack.Screen name="Idioms" component={Idioms} />
        <Stack.Screen name="VarnamalaPage" component={VarnamalaPage} />
        <Stack.Screen name="AgeTherapy" component={AgeTherapy} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="TodoApp" component={TodoApp} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="WordsPage" component={WordsPage} />

        <Stack.Screen name="ArticulationMaze" component={ArticulationMaze} />
        <Stack.Screen name="LipsExercise" component={LipsExercise} />
        <Stack.Screen name="TongueExercise" component={TongueExercise} />
        <Stack.Screen name="MouthExercise" component={MouthExercise} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="LetsStart" component={LetsStart} />
        <Stack.Screen name="SelfLearning2" component={SelfLearning2} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="StoryPage" component={StoryPage} />
        <Stack.Screen name="S2" component={S2} />

        <Stack.Screen name="LettersPage" component={LettersPage} />
      <Stack.Screen name="LetterDetail" component={LetterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
