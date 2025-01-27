```javascript
// pages/index.js
import MyComponent from '../components/MyComponent';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <MyComponent/>
      </Suspense>
    </div>
  );
}

// components/MyComponent.js
import { useState, useEffect, Suspense } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      setData({ message: 'Data fetched!' });
    };

    fetchData();
  }, []);

  if (data === null) {
    throw new Promise(resolve => setTimeout(() => resolve({message: 'Data fetched!'}), 3000));
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
```