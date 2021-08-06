interface IOptions {
  clientName: string
  clientDescription: string
  applicationType: string
  redirectUris: string[]
}

export async function useCreateClient(options: IOptions) {
  return fetch('/api/clients', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: options.clientName,
      description: options.clientDescription,
      application_type: options.applicationType,
      redirect_uris: options.redirectUris
    })
  }).then(res => res.json)
}
