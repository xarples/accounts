interface IOptions {
  email: string
  password: string
}

export async function useSignIn(options: IOptions) {
  const response = await fetch(`/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  })

  const data = await response.json()

  if (!response.ok) {
    return Promise.reject(data)
  }

  return Promise.resolve(data)
}
