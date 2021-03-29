import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache({
        typePolicies: {
        Query: {
            fields: {
            pokemons: {
                keyArgs: false,
                merge(existing, incoming){
                let mergedData = {...incoming};
                if (existing){
                    mergedData.results = [...existing.results, ...incoming.results];
                }
                return mergedData;
                }
            }
            },
        },
        },
    })
});

export default client;
