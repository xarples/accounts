interface IOptions {
  id: string
  clientId: string
}

export function useClient(options: IOptions) {
  return fetch(`http://localhost:5000/api/clients/${options.id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
