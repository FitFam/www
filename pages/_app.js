import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
