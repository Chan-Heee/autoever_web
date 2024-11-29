import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios.get('http://autoever-test-loadBalancer-906777232.ap-northeast-2.elb.amazonaws.com/users')
      .then((response) => {
           console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
  
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data ? (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre> 
        </div>
      ) : (
        <p>Loading data...</p> 
      )}
    </div>
  );
}

export default App;
