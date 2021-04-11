import './App.css';
import Form from './components/Form';

function App() {

  let questionsArr = [
      "How do you break rocks?",
      "How long does it take for rocks to respawn?",
      "Give me an example of a bug that sells for a lot of bells.",
      "Is Nook a crook?",
      "How do you obtain star fragments?"
  ];

  return (
    <div className="App">
      <Form title="Animal Crossing Trivia" inputType="text" questions={questionsArr}/>
    </div>
  );
}

export default App;
