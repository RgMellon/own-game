import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { useMemo } from 'react'

// NormalizedCacheObject => o que pode receber

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // true se estiver no servidor, caso estiver na web retorna false
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),

    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = {}) {
  //serve para verificar se ja existe uma instancia, para n criar outra
  const apolloclientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    //se ja tiver um estado inicial, ele vai e restaura esse estado inicial pra dentro do global
    apolloclientGlobal.cache.restore(initialState)
  }

  //se estiver utilizando ssr, vc deve retornar o apolloClient
  //sempre inciando com o cache limpo, para que sempre reinicialize o cache do lado do server
  if (typeof window === 'undefined') return apolloclientGlobal

  //se eu n tiver no ssr, eu verifico se tem um apolloClient, e se tiver pega o anterior
  apolloClient = apolloClient ?? apolloclientGlobal

  return apolloClient
}

// cria um hook por caso o estado n mude, eu n fique reinicializando o tempo todo, para que se n mudar, n faça dnv
export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
