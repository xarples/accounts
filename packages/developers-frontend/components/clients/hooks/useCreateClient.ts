interface IOptions {
  clientName: string
  clientDescription: string
  applicationType: string
  redirectUris: string[]
}

export function useCreateClient(options: IOptions) {
  return fetch('/api/clients', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_name: options.clientName,
      client_description: options.clientDescription,
      application_type: options.applicationType,
      redirect_uris: options.redirectUris
    })
  }).then(res => res.json)
}
