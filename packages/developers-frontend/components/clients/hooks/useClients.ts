import { useContext } from '@nuxtjs/composition-api'

export function useClients() {
  const headers = useContext().req.headers

  return fetch('http://localhost:5002/api/clients', {
    method: 'GET',
    headers: {
      ...(headers as HeadersInit),
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(res => res.json())
}
