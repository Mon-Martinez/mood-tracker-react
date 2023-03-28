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
    <Header />
    <Description />
    <Instructions />
    <DaysButton />
    <DropDown />
    <Input />
    <MoodOverview />
    </>
  );
}

export default App;
