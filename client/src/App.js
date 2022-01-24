import { BrowserRouter } from "react-router-dom"
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import Navbar from './components/navigation/Navbar';
import AppRoutes from './app.routes';
import './App.css';
import config from './config';


// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: config.apolloUrl // your graphql server link
  }),
  credentials: "same-origin",
})

function App () {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
