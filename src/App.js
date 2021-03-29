import { ApolloProvider } from '@apollo/client';
import { useRoutes } from 'hookrouter';

import client from './configs/apollo-client';
import routes from './configs/routes';
import 'antd/dist/antd.css';


function App() {
  const routeResult = useRoutes(routes);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {routeResult}
      </div>
    </ApolloProvider>
  );
}

export default App;