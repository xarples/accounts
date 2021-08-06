import { useContext } from '@nuxtjs/composition-api'

interface IOptions {
  id: string
  clientName: string
  clientDescription: string
  applicationType: string
  redirectUris: string[]
}

export function useUpdateClient({ id, ...options }: IOptions) {
  const headers = useContext().req.headers

  return fetch(`/api/clients/${id}`, {
    method: 'PUT',
    headers: {
      ...(headers as HeadersInit),
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_name: options.clientName,
      client_description: options.clientDescription,
      application_type: options.applicationType,
      redirect_uris: options.redirectUris
    })
  }).then(res => res.json)
}
