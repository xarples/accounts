export function useScopes() {
  return fetch(`http://localhost:5000/api/scopes`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
