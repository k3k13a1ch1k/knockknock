import logo from './logo.svg';
import { UseState, UseEffect, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/articles/')
      .then(resp => setArticles(resp.data))
      .catch(error => console.log(error.response));
  }, []);
  return (
    <div className='App'>
      {articles &&
        articles.map(article => {
          return (
            <div key={article.id}>
              <h4>{article.title}</h4>
            </div>
          );
        })}
    </div>
  );
}

export default App;
