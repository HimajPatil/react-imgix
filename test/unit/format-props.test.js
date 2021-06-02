import { formatProps } from "../../src/HOFs/propFormatter"

describe('formatProps()', () => {
  it('should set width to null if negative', () => {
    const props = { height: 100, src: "/pione.jpg", width: -100 }
    const result = formatProps(props)
    const expected = { height: 100, src: "/pione.jpg", width: null}

    expect(result).toEqual(expected)
  })

  it('should set height to null if negative', () => {
    const props = { height: -100, src: "/pione.jpg", width: 100 }
    const result = formatProps(props)
    const expected = { height: null, src: "/pione.jpg", width: 100}

    expect(result).toEqual(expected)
  })


  it('should set src to 2-step URL if domain prop present', () => {
    const props = {
      domain: "assets.imgix.net",
      src: "/pione.jpg",
      width: 100
    }
    const result = formatProps(props)
    const expected = {
      height: null,
      domain: "assets.imgix.net",
      src: "https://assets.imgix.net/pione.jpg",
      width: 100
    }

    expect(result).toEqual(expected)
  })
})