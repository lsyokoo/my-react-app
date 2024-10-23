import react, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'
import StyledButton from './StyledButton.jsx'
import Counter from './Counter.jsx'
import Form from './Form.jsx'


function App() {
  // const [count, setCount] = useState(0)
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

    const [count, setCount] = useState(1);
    const [post, setPost] = useState(null);
  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => {
  //       setPosts(data);
  //       setLoading(false);
  //     });
  // }, []);
  
  useEffect(() => {
    
    // fetching the post data based on the count value
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [count]); // The effect depends on the count


  return (
    <>
      {/* <div>
    {loading ? <p>Loading...</p> : (
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    )}
  </div> */}

  <div>
      <p>Current Post ID: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Next Post
      </button>

      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>




      <div>
      <Greeting name="lily"/>
      
      <Greeting/>
      <StyledButton/>
      <Counter></Counter>
      <Form/>
     
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  ) 
}

export default App
