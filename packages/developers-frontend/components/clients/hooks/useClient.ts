interface IOptions {
  id: string
}

export function useClient(options: IOptions) {
  return fetch(`http://localhost:5002/api/clients/${options.id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
