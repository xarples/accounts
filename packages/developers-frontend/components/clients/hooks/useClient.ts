import { useContext } from '@nuxtjs/composition-api'

interface IOptions {
  id: string
}

export function useClient(options: IOptions) {
  const headers = useContext().req.headers

  return fetch(`http://localhost:5002/api/clients/${options.id}`, {
    method: 'GET',
    headers: {
      ...(headers as HeadersInit),
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(res => res.json())
}
