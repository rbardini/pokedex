const request = <T,>(url: string, options?: RequestInit) =>
  fetch(url, options).then(response => response.json() as Promise<T>)

export default request
