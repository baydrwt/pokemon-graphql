import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PokemonContainer } from "./containers/PokemonContainers";
import "./App.css";

export default function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}
