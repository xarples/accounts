interface IOptions {
  email: string
  password: string
}

export function useSignIn(options: IOptions) {
  return fetch('/api/users/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }).then(res => res.json)
}
