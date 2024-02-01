import { useState } from 'react';
import './App.css';
import Box from './components/Box';
function App() {
  const [text, setText] = useState("")
  let boxes = [
    { text: '1', color: 'gray' },
    { text: '2', color: 'gold' },
    { text: '3', color: 'pink' },
    { text: '4', color: '' },
    { text: '11', color: '' },
  ];
  const onChange = (e) => {
    // input ees text ig avj bn
    const text = e.target.value;
    // text state shinechleh
    setText(text)
  }
  // text state eer boxiig filter hj bn
  const list = boxes.filter(b => b.text.includes(text))
  return (
    <div className="App">
      <input type="text" onChange={onChange} />
      <div>
        {list.map(box =>
          <Box text={box.text} color={box.color} />
        )}
      </div>
    </div>
  );
}

export default App;
