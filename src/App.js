import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Names } from './Names';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });
  return (
    <ApolloProvider client= {client}>
    <div className="App">
      <Names />
    </div>
    </ApolloProvider>
  );
}

export default App;
