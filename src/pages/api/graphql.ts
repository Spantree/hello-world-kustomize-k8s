import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { IncomingMessage, ServerResponse } from 'http';
import { RequestHandler } from 'micro';
import { createContext } from 'server/context';
import { schema } from 'server/nexusSchema';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

const handler = async (req: IncomingMessage, res: ServerResponse) => {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

const allowOptionHandler = (handler: RequestHandler) => {
  return (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'OPTIONS') {
      res.end('');
    } else {
      return handler(req, res);
    }
  };
};

export default cors(allowOptionHandler(handler));
