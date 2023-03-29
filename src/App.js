import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Instructions from './components/Instructions';
import DaysButton from './components/DaysButton';
import DropDown from './components/DropDown';
import Input from './components/Input';
import MoodOverview from './components/MoodOverview';

function App() {
  return (
    <>
      <Header HeaderContent="Daily Mood Tracker"/>
      <Description DescriptionContent="We are here to help you keep track of how you're feeling each morning.
      Creating space each morning to check-in with yourself can be a life changing habit."/>
      <Instructions InstructionsContent="Step 1: Choose which day of the week it is..."/>
      <DaysButton />
      <Instructions InstructionsContent="Step 2: Select the feeling that best describes your mood today..."/>
      <DropDown />
      <Instructions InstructionsContent="Step 3: Enter your name and click submit!"/>
      <Input />
      <MoodOverview />
    </>
  );
}

export default App;
