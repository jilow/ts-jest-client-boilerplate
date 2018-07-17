import 'jest'
import Client from './client'

const wrapJsend = (data: object) => ({
  status: 'success',
  data,
})

describe('test', () => {

  const client = new Client('https://httpbin.org')

  it('can fetch foo', async () => {
    const jsend = wrapJsend({ foo: 'bar' })
    const res = await client.fetch(jsend)
    expect(res).toEqual({ foo: 'bar' })
  })

  it('can fetch poo', async () => {
    const jsend = wrapJsend({ poo: 'bar' })
    const res = await client.fetch(jsend)
    expect(res).toEqual({ poo: 'bar' })
  })

  it('can throw poo', async () => {
    try {
      const jsend = { poo: 'bar' }
      await client.fetch(jsend)
    } catch(err) {
      expect(err.message).toEqual('Response body contained invalid jsend: {\"poo\":\"bar\"}')
    }
  })

})
