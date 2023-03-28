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
      <Description DescriptionContent="Please use this space to keep track of how you're feeling each morning.
      Creating space each morning to check-in with yourself can be a life changing habit."/>
      <Instructions />
      <DaysButton />
      <DropDown />
      <Input />
      <MoodOverview />
    </>
  );
}

export default App;
