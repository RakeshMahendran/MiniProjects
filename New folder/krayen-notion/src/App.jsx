import React from 'react';
import { render } from 'react-dom';
import { useDatabase} from 'react-notion'

function App() {
  const { data, loading } = useDatabase({
    databaseId: '0edf9a49be654db1b5eb4a11c890100c',
    filter: {},
    sort: [{ property: 'created_time', direction: 'descending' }],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

render(<App />, document.getElementById('root'));


export default App
