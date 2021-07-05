interface IOptions {
  name: string
  description: string
  type: string
  redirect_uris: string[]
}

export function useCreateClient(options: IOptions) {
  return fetch('http://localhost:5000/api/clients', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }).then(res => res.json)
}
