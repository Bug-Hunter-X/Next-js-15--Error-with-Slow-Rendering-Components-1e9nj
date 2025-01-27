```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This component will cause the error */}      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  // Simulate a slow operation
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      setData({ message: 'Data fetched!' });
    };

    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
```