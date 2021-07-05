interface IOptions {
  id: string
  name: string
  description: string
  type: string
  redirectUris: string[]
}

export function useUpdateClient({ id, ...options }: IOptions) {
  return fetch(`http://localhost:5000/api/clients/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }).then(res => res.json)
}
