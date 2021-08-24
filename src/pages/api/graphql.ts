import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { IncomingMessage, ServerResponse } from 'http';
import { createContext } from 'server/context';
import { schema } from 'server/nexusSchema';

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

export default handler;
