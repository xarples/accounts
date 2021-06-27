interface IOptions {
  firstName: string
  lastName: string
  email: string
  password: string
}

export function useCreateUser(options: IOptions) {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }).then(res => res.json)
}
