export function useClients() {
  return fetch('http://localhost:5002/api/clients', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
