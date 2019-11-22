const heket = require('heket')
const fs = require('fs')
const assert = require('assert')

var block = false
var abnf = ''

const data = fs.readFileSync('../draft-humfrey-radio-scheme.md', 'utf8')
const lines = data.split(/\r?\n/)
lines.forEach((line) => {
  if (line.startsWith('~~~') && block === true) block = false
  if (block === true) abnf += line + '\n'
  if (line.startsWith('~~~abnf')) block = true
})

const parser = heket.createParser(abnf)

// AMSS scheme
suite('AMSS URI Scheme', () => {
  test('Valid AMSS URI', () => {
    assert.doesNotThrow(() => {
      parser.parse('amss:102030')
    })
  })

  test('Invalid SId - too short', () => {
    assert.throws(() => {
      parser.parse('amss:c479')
    }, /^Error: No matching option for string: "amss:c479"/)
  })
})

// DAB scheme
suite('DAB URI Scheme', () => {
  test('Valid DAB URI', () => {
    assert.doesNotThrow(() => {
      parser.parse('dab:de0.10bc.d75b.0')
    })
  })

  test('Valid DAB URI with long SID and UAType', () => {
    assert.doesNotThrow(() => {
      parser.parse('dab:ce1.c185.e1c00098.0.004')
    })
  })

  test('Invalid GCC - not hex', () => {
    assert.throws(() => {
      parser.parse('dab:xxx.ce15.c224.0')
    }, /^Error: No matching option for string: "dab:xxx.ce15.c224.0"/)
  })

  test('Invalid SId - too short', () => {
    assert.throws(() => {
      parser.parse('dab:ce1.ce15.224.0')
    }, /^Error: No matching option for string: "dab:ce1.ce15.224.0"/)
  })

  test('Invalid SId - 6 characters', () => {
    assert.throws(() => {
      parser.parse('dab:ce1.ce15.c224cc.0')
    }, /^Error: No matching option for string: "dab:ce1.ce15.c224cc.0"/)
  })
})

// DRM scheme
suite('DRM URI Scheme', () => {
  test('Valid DRM URI', () => {
    assert.doesNotThrow(() => {
      parser.parse('drm:e1c238')
    })
  })

  test('Valid DRM URI with App Domain and UAType', () => {
    assert.doesNotThrow(() => {
      parser.parse('drm:f07256.1.00d')
    })
  })

  test('Invalid SId - too short', () => {
    assert.throws(() => {
      parser.parse('drm:c479')
    }, /^Error: No matching option for string: "drm:c479"/)
  })

  test('Invalid App Domain - too long', () => {
    assert.throws(() => {
      parser.parse('drm:f07256.1c.00d')
    }, /^Error: Too much text to match \(expected "drm:f07256", got "drm:f07256.1c.00d"\)/)
  })

  test('Invalid UAType - too long', () => {
    assert.throws(() => {
      parser.parse('drm:f07256.1.00dd')
    }, /^Error: Too much text to match \(expected "drm:f07256.1.00d", got "drm:f07256.1.00dd"\)/)
  })

  test('Invalid App Domain - UAType missing', () => {
    assert.throws(() => {
      parser.parse('drm:f07256.1')
    }, /^Error: Too much text to match \(expected "drm:f07256", got "drm:f07256.1"\)/)
  })
})

// FM scheme
suite('FM URI Scheme', () => {
  test('Valid fm URI scheme with GCC, PI Code and frequency', () => {
    assert.doesNotThrow(() => {
      parser.parse('fm:ce1.c479.09580')
    })
  })

  test('Valid fm URI scheme with wildcard frequency', () => {
    assert.doesNotThrow(() => {
      parser.parse('fm:ce1.c479.*')
    })
  })

  test('Invalid GCC - not hex', () => {
    assert.throws(() => {
      parser.parse('fm:xxx.c479.09580')
    }, /^Error: No matching option for string: "fm:xxx.c479.09580"/)
  })

  test('Invalid PI Code - too short', () => {
    assert.throws(() => {
      parser.parse('fm:ce1.204.09250')
    }, /^Error: No matching option for string: "fm:ce1.204.09250"/)
  })
})

// Invalid scheme
suite('Invalid URI Scheme', () => {
  test('foo scheme', () => {
    assert.throws(() => {
      parser.parse('foo:ce1.204.09250')
    }, /^Error: No matching option for string: "foo:ce1.204.09250"/)
  })
})
