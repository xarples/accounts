interface IOptions {
  clientId?: string
}

export function useClients(options: IOptions) {
  const params = new URLSearchParams({ client_id: options.clientId! })

  return fetch(`http://localhost:5000/api/clients?${params.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
