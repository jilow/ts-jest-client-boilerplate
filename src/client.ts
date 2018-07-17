import jsend from 'jsend'
import fetch from 'node-fetch'

export default class Client {
  private url: string

  constructor(url: string) {
    if (!url) throw new TypeError('url cannot be an empty string')
    this.url = url
  }

  private jsendError(body: any) {
    return new Error('Response body contained invalid jsend: ' + JSON.stringify(body))
  }

  public parseJsend(body: any) {
    if (!jsend.isValid(body)) throw this.jsendError(body)
    return body.data
  }

  public async fetch(payload?: object): Promise<object> {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    }
    return await fetch(`${this.url}/post`, options)
      .then((res) => res.json())
      .then((json) => json.json)
      .then((body) => this.parseJsend(body))
  }
}
