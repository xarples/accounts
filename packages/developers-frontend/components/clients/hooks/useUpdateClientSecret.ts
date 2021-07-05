interface IOptions {
  id: string
}

export function useUpdateClientSecret(options: IOptions) {
  return fetch(`/api/clients/${options.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json)
}
