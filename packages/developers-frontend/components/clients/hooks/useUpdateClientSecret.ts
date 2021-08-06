import { useContext } from '@nuxtjs/composition-api'

interface IOptions {
  id: string
}

export function useUpdateClientSecret(options: IOptions) {
  const headers = useContext().req.headers

  return fetch(`/api/clients/${options.id}`, {
    method: 'PATCH',
    headers: {
      ...(headers as HeadersInit),
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json)
}
