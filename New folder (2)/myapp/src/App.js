import React from 'react';
import { useDatabase } from 'react-notion/database';

function MyComponent() {
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
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
