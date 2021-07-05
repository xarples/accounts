import useSWRV from 'swrv'
import { fetcherFn } from 'swrv/dist/types'

interface IOptions {
  id: string
}

export function useClient(options: IOptions, fetcher?: fetcherFn<any>) {
  return useSWRV(`/api/clients/${options.id}`, fetcher)

  // return fetch(`http://localhost:5002/api/clients/${options.id}`, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
}
