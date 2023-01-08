import React from 'react';
import { render } from 'react-dom';
import { useDatabase } from 'react-notion';

function App() {
  const { data, loading } = useDatabase({
    databaseId: 'YOUR_DATABASE_ID',
    filter: {},
    sort: [{ property: 'created_time', direction: 'descending' }],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

render(<App />, document.getElementById('root'));

