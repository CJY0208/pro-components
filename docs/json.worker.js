;(function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var i = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function(e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t]
            }.bind(null, i),
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e['default']
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = './'),
    n((n.s = 'fYf6'))
})({
  '4qbe': function(e, t) {
    ;(function(t) {
      e.exports = (function() {
        var e = {
            873: function(e) {
              var t
              t = (function() {
                return this
              })()
              try {
                t = t || new Function('return this')()
              } catch (n) {
                'object' === typeof window && (t = window)
              }
              e.exports = t
            },
          },
          n = {}
        function r(t) {
          if (n[t]) return n[t].exports
          var i = (n[t] = { exports: {} }),
            o = !0
          try {
            e[t](i, i.exports, r), (o = !1)
          } finally {
            o && delete n[t]
          }
          return i.exports
        }
        return (r.ab = t + '/'), r(873)
      })()
    }.call(this, '/'))
  },
  '4wim': function(e, t, n) {
    'use strict'
    ;(function(e, r) {
      n.d(t, 'd', function() {
        return v
      }),
        n.d(t, 'b', function() {
          return y
        }),
        n.d(t, 'c', function() {
          return b
        }),
        n.d(t, 'a', function() {
          return _
        }),
        n.d(t, 'e', function() {
          return S
        })
      const i = 'en'
      let o,
        s,
        a,
        u = !1,
        l = !1,
        c = !1,
        h = !1,
        f = !1,
        d = !1,
        m = i
      const g =
        'undefined' !== typeof e &&
        'undefined' !== typeof e.versions &&
        'undefined' !== typeof e.versions.electron &&
        'renderer' === e.type
      if ('object' !== typeof navigator || g) {
        if ('object' === typeof e) {
          ;(u = 'win32' === e.platform), (l = 'darwin' === e.platform), (c = 'linux' === e.platform), (o = i), (m = i)
          const t = Object({ NODE_ENV: 'production' })['VSCODE_NLS_CONFIG']
          if (t)
            try {
              const e = JSON.parse(t),
                n = e.availableLanguages['*']
              ;(o = e.locale), (m = n || i), (s = e._translationsConfigFile)
            } catch (w) {}
          h = !0
        }
      } else
        (a = navigator.userAgent),
          (u = a.indexOf('Windows') >= 0),
          (l = a.indexOf('Macintosh') >= 0),
          (d =
            (a.indexOf('Macintosh') >= 0 || a.indexOf('iPad') >= 0 || a.indexOf('iPhone') >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0),
          (c = a.indexOf('Linux') >= 0),
          (f = !0),
          (o = navigator.language),
          (m = o)
      let p = 0
      l ? (p = 1) : u ? (p = 3) : c && (p = 2)
      const v = u,
        y = l,
        b = f,
        C = 'object' === typeof self ? self : 'object' === typeof r ? r : {},
        _ = C,
        S = (function() {
          if (_.setImmediate) return _.setImmediate.bind(_)
          if ('function' === typeof _.postMessage && !_.importScripts) {
            let e = []
            _.addEventListener('message', t => {
              if (t.data && t.data.vscodeSetImmediateId)
                for (let n = 0, r = e.length; n < r; n++) {
                  const r = e[n]
                  if (r.id === t.data.vscodeSetImmediateId) return e.splice(n, 1), void r.callback()
                }
            })
            let t = 0
            return n => {
              const r = ++t
              e.push({ id: r, callback: n }), _.postMessage({ vscodeSetImmediateId: r }, '*')
            }
          }
          if ('undefined' !== typeof e && 'function' === typeof e.nextTick) return e.nextTick.bind(e)
          const t = Promise.resolve()
          return e => t.then(e)
        })()
    }.call(this, n('BBhR'), n('4qbe')))
  },
  BBhR: function(e, t, n) {
    ;(t.nextTick = function(e) {
      var t = Array.prototype.slice.call(arguments)
      t.shift(),
        setTimeout(function() {
          e.apply(null, t)
        }, 0)
    }),
      (t.platform = t.arch = t.execPath = t.title = 'browser'),
      (t.pid = 1),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.binding = function(e) {
        throw new Error('No such module. (Possibly not yet loaded)')
      }),
      (function() {
        var e,
          r = '/'
        ;(t.cwd = function() {
          return r
        }),
          (t.chdir = function(t) {
            e || (e = n('ytnY')), (r = e.resolve(t, r))
          })
      })(),
      (t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}),
      (t.features = {})
  },
  SEXO: function(e, t, n) {
    'use strict'
    ;(function(e) {
      n.d(t, 'a', function() {
        return o
      }),
        n.d(t, 'b', function() {
          return s
        }),
        n.d(t, 'c', function() {
          return a
        })
      var r = n('4wim')
      const i =
          'undefined' === typeof e
            ? {
                cwd() {
                  return '/'
                },
                env: Object.create(null),
                get platform() {
                  return r['d'] ? 'win32' : r['b'] ? 'darwin' : 'linux'
                },
                nextTick(e) {
                  return Object(r['e'])(e)
                },
              }
            : e,
        o = i.cwd,
        s = i.env,
        a = i.platform
    }.call(this, n('BBhR')))
  },
  e0W4: function(e, t, n) {
    'use strict'
    ;(function(e) {
      n.d(t, 'a', function() {
        return p
      })
      var r,
        i,
        o = (function() {
          var e = function(t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }),
              e(t, n)
            )
          }
          return function(t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
          }
        })()
      if ('object' === typeof e) i = 'win32' === e.platform
      else if ('object' === typeof navigator) {
        var s = navigator.userAgent
        i = s.indexOf('Windows') >= 0
      }
      var a = /^\w[\w\d+.-]*$/,
        u = /^\//,
        l = /^\/\//
      function c(e, t) {
        if (!e.scheme && t)
          throw new Error(
            '[UriError]: Scheme is missing: {scheme: "", authority: "' +
              e.authority +
              '", path: "' +
              e.path +
              '", query: "' +
              e.query +
              '", fragment: "' +
              e.fragment +
              '"}',
          )
        if (e.scheme && !a.test(e.scheme)) throw new Error('[UriError]: Scheme contains illegal characters.')
        if (e.path)
          if (e.authority) {
            if (!u.test(e.path))
              throw new Error(
                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
              )
          } else if (l.test(e.path))
            throw new Error(
              '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
            )
      }
      function h(e, t) {
        return e || t ? e : 'file'
      }
      function f(e, t) {
        switch (e) {
          case 'https':
          case 'http':
          case 'file':
            t ? t[0] !== m && (t = m + t) : (t = m)
            break
        }
        return t
      }
      var d = '',
        m = '/',
        g = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        p = (function() {
          function e(e, t, n, r, i, o) {
            void 0 === o && (o = !1),
              'object' === typeof e
                ? ((this.scheme = e.scheme || d),
                  (this.authority = e.authority || d),
                  (this.path = e.path || d),
                  (this.query = e.query || d),
                  (this.fragment = e.fragment || d))
                : ((this.scheme = h(e, o)),
                  (this.authority = t || d),
                  (this.path = f(this.scheme, n || d)),
                  (this.query = r || d),
                  (this.fragment = i || d),
                  c(this, o))
          }
          return (
            (e.isUri = function(t) {
              return (
                t instanceof e ||
                (!!t &&
                  'string' === typeof t.authority &&
                  'string' === typeof t.fragment &&
                  'string' === typeof t.path &&
                  'string' === typeof t.query &&
                  'string' === typeof t.scheme &&
                  'function' === typeof t.fsPath &&
                  'function' === typeof t.with &&
                  'function' === typeof t.toString)
              )
            }),
            Object.defineProperty(e.prototype, 'fsPath', {
              get: function() {
                return S(this, !1)
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.with = function(e) {
              if (!e) return this
              var t = e.scheme,
                n = e.authority,
                r = e.path,
                i = e.query,
                o = e.fragment
              return (
                void 0 === t ? (t = this.scheme) : null === t && (t = d),
                void 0 === n ? (n = this.authority) : null === n && (n = d),
                void 0 === r ? (r = this.path) : null === r && (r = d),
                void 0 === i ? (i = this.query) : null === i && (i = d),
                void 0 === o ? (o = this.fragment) : null === o && (o = d),
                t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment
                  ? this
                  : new y(t, n, r, i, o)
              )
            }),
            (e.parse = function(e, t) {
              void 0 === t && (t = !1)
              var n = g.exec(e)
              return n
                ? new y(n[2] || d, x(n[4] || d), x(n[5] || d), x(n[7] || d), x(n[9] || d), t)
                : new y(d, d, d, d, d)
            }),
            (e.file = function(e) {
              var t = d
              if ((i && (e = e.replace(/\\/g, m)), e[0] === m && e[1] === m)) {
                var n = e.indexOf(m, 2)
                ;-1 === n ? ((t = e.substring(2)), (e = m)) : ((t = e.substring(2, n)), (e = e.substring(n) || m))
              }
              return new y('file', t, e, d, d)
            }),
            (e.from = function(e) {
              return new y(e.scheme, e.authority, e.path, e.query, e.fragment)
            }),
            (e.prototype.toString = function(e) {
              return void 0 === e && (e = !1), w(this, e)
            }),
            (e.prototype.toJSON = function() {
              return this
            }),
            (e.revive = function(t) {
              if (t) {
                if (t instanceof e) return t
                var n = new y(t)
                return (n._formatted = t.external), (n._fsPath = t._sep === v ? t.fsPath : null), n
              }
              return t
            }),
            e
          )
        })(),
        v = i ? 1 : void 0,
        y = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this
            return (t._formatted = null), (t._fsPath = null), t
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'fsPath', {
              get: function() {
                return this._fsPath || (this._fsPath = S(this, !1)), this._fsPath
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function(e) {
              return (
                void 0 === e && (e = !1),
                e ? w(this, !0) : (this._formatted || (this._formatted = w(this, !1)), this._formatted)
              )
            }),
            (t.prototype.toJSON = function() {
              var e = { $mid: 1 }
              return (
                this._fsPath && ((e.fsPath = this._fsPath), (e._sep = v)),
                this._formatted && (e.external = this._formatted),
                this.path && (e.path = this.path),
                this.scheme && (e.scheme = this.scheme),
                this.authority && (e.authority = this.authority),
                this.query && (e.query = this.query),
                this.fragment && (e.fragment = this.fragment),
                e
              )
            }),
            t
          )
        })(p),
        b =
          ((r = {}),
          (r[58] = '%3A'),
          (r[47] = '%2F'),
          (r[63] = '%3F'),
          (r[35] = '%23'),
          (r[91] = '%5B'),
          (r[93] = '%5D'),
          (r[64] = '%40'),
          (r[33] = '%21'),
          (r[36] = '%24'),
          (r[38] = '%26'),
          (r[39] = '%27'),
          (r[40] = '%28'),
          (r[41] = '%29'),
          (r[42] = '%2A'),
          (r[43] = '%2B'),
          (r[44] = '%2C'),
          (r[59] = '%3B'),
          (r[61] = '%3D'),
          (r[32] = '%20'),
          r)
      function C(e, t) {
        for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i)
          if (
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            45 === o ||
            46 === o ||
            95 === o ||
            126 === o ||
            (t && 47 === o)
          )
            -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)), void 0 !== n && (n += e.charAt(i))
          else {
            void 0 === n && (n = e.substr(0, i))
            var s = b[o]
            void 0 !== s
              ? (-1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)), (n += s))
              : -1 === r && (r = i)
          }
        }
        return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e
      }
      function _(e) {
        for (var t = void 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n)
          35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), (t += b[r])) : void 0 !== t && (t += e[n])
        }
        return void 0 !== t ? t : e
      }
      function S(e, t) {
        var n
        return (
          (n =
            e.authority && e.path.length > 1 && 'file' === e.scheme
              ? '//' + e.authority + e.path
              : 47 === e.path.charCodeAt(0) &&
                ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                  (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
                58 === e.path.charCodeAt(2)
              ? t
                ? e.path.substr(1)
                : e.path[1].toLowerCase() + e.path.substr(2)
              : e.path),
          i && (n = n.replace(/\//g, '\\')),
          n
        )
      }
      function w(e, t) {
        var n = t ? _ : C,
          r = '',
          i = e.scheme,
          o = e.authority,
          s = e.path,
          a = e.query,
          u = e.fragment
        if ((i && ((r += i), (r += ':')), (o || 'file' === i) && ((r += m), (r += m)), o)) {
          var l = o.indexOf('@')
          if (-1 !== l) {
            var c = o.substr(0, l)
            ;(o = o.substr(l + 1)),
              (l = c.indexOf(':')),
              -1 === l ? (r += n(c, !1)) : ((r += n(c.substr(0, l), !1)), (r += ':'), (r += n(c.substr(l + 1), !1))),
              (r += '@')
          }
          ;(o = o.toLowerCase()),
            (l = o.indexOf(':')),
            -1 === l ? (r += n(o, !1)) : ((r += n(o.substr(0, l), !1)), (r += o.substr(l)))
        }
        if (s) {
          if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2)) {
            var h = s.charCodeAt(1)
            h >= 65 && h <= 90 && (s = '/' + String.fromCharCode(h + 32) + ':' + s.substr(3))
          } else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
            h = s.charCodeAt(0)
            h >= 65 && h <= 90 && (s = String.fromCharCode(h + 32) + ':' + s.substr(2))
          }
          r += n(s, !0)
        }
        return a && ((r += '?'), (r += n(a, !1))), u && ((r += '#'), (r += t ? u : C(u, !1))), r
      }
      function A(e) {
        try {
          return decodeURIComponent(e)
        } catch (r) {
          return e.length > 3 ? e.substr(0, 3) + A(e.substr(3)) : e
        }
      }
      var E = /(%[0-9A-Za-z][0-9A-Za-z])+/g
      function x(e) {
        return e.match(E)
          ? e.replace(E, function(e) {
              return A(e)
            })
          : e
      }
    }.call(this, n('BBhR')))
  },
  fYf6: function(e, t, n) {
    'use strict'
    n.r(t)
    class r {
      constructor() {
        ;(this.listeners = []),
          (this.unexpectedErrorHandler = function(e) {
            setTimeout(() => {
              if (e.stack) throw new Error(e.message + '\n\n' + e.stack)
              throw e
            }, 0)
          })
      }
      emit(e) {
        this.listeners.forEach(t => {
          t(e)
        })
      }
      onUnexpectedError(e) {
        this.unexpectedErrorHandler(e), this.emit(e)
      }
      onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e)
      }
    }
    const i = new r()
    function o(e) {
      u(e) || i.onUnexpectedError(e)
    }
    function s(e) {
      if (e instanceof Error) {
        let { name: t, message: n } = e
        const r = e.stacktrace || e.stack
        return { $isError: !0, name: t, message: n, stack: r }
      }
      return e
    }
    const a = 'Canceled'
    function u(e) {
      return e instanceof Error && e.name === a && e.message === a
    }
    var l
    ;(function(e) {
      function t(e) {
        return e && 'object' === typeof e && 'function' === typeof e[Symbol.iterator]
      }
      e.is = t
      const n = Object.freeze([])
      function r() {
        return n
      }
      function* i(e) {
        yield e
      }
      function o(e) {
        return e || n
      }
      function s(e) {
        return e[Symbol.iterator]().next().value
      }
      function a(e, t) {
        for (const n of e) if (t(n)) return !0
        return !1
      }
      function* u(e, t) {
        for (const n of e) t(n) && (yield n)
      }
      function* l(e, t) {
        for (const n of e) yield t(n)
      }
      function* c(...e) {
        for (const t of e) for (const e of t) yield e
      }
      function h(t, n = Number.POSITIVE_INFINITY) {
        const r = []
        if (0 === n) return [r, t]
        const i = t[Symbol.iterator]()
        for (let o = 0; o < n; o++) {
          const t = i.next()
          if (t.done) return [r, e.empty()]
          r.push(t.value)
        }
        return [
          r,
          {
            [Symbol.iterator]() {
              return i
            },
          },
        ]
      }
      ;(e.empty = r),
        (e.single = i),
        (e.from = o),
        (e.first = s),
        (e.some = a),
        (e.filter = u),
        (e.map = l),
        (e.concat = c),
        (e.consume = h)
    })(l || (l = {}))
    const c = !1,
      h = '__is_disposable_tracked__'
    function f(e) {
      if (c && e && e !== y.None)
        try {
          e[h] = !0
        } catch (t) {}
    }
    function d(e) {
      if (!c) return e
      const t = new Error('Potentially leaked disposable').stack
      return (
        setTimeout(() => {
          e[h] || console.log(t)
        }, 3e3),
        e
      )
    }
    class m extends Error {
      constructor(e) {
        super(`Encounter errors while disposing of store. Errors: [${e.join(', ')}]`), (this.errors = e)
      }
    }
    function g(e) {
      if (l.is(e)) {
        let n = []
        for (const r of e)
          if (r) {
            f(r)
            try {
              r.dispose()
            } catch (t) {
              n.push(t)
            }
          }
        if (1 === n.length) throw n[0]
        if (n.length > 1) throw new m(n)
        return Array.isArray(e) ? [] : e
      }
      if (e) return f(e), e.dispose(), e
    }
    function p(...e) {
      return e.forEach(f), d({ dispose: () => g(e) })
    }
    class v {
      constructor() {
        ;(this._toDispose = new Set()), (this._isDisposed = !1)
      }
      dispose() {
        this._isDisposed || (f(this), (this._isDisposed = !0), this.clear())
      }
      clear() {
        try {
          g(this._toDispose.values())
        } finally {
          this._toDispose.clear()
        }
      }
      add(e) {
        if (!e) return e
        if (e === this) throw new Error('Cannot register a disposable on itself!')
        return (
          f(e),
          this._isDisposed
            ? v.DISABLE_DISPOSED_WARNING ||
              console.warn(
                new Error(
                  'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                ).stack,
              )
            : this._toDispose.add(e),
          e
        )
      }
    }
    v.DISABLE_DISPOSED_WARNING = !1
    class y {
      constructor() {
        ;(this._store = new v()), d(this)
      }
      dispose() {
        f(this), this._store.dispose()
      }
      _register(e) {
        if (e === this) throw new Error('Cannot register a disposable on itself!')
        return this._store.add(e)
      }
    }
    y.None = Object.freeze({ dispose() {} })
    var b = n('4wim')
    function C(e) {
      let t = [],
        n = Object.getPrototypeOf(e)
      while (Object.prototype !== n) (t = t.concat(Object.getOwnPropertyNames(n))), (n = Object.getPrototypeOf(n))
      return t
    }
    function _(e) {
      const t = []
      for (const n of C(e)) 'function' === typeof e[n] && t.push(n)
      return t
    }
    function S(e, t) {
      const n = e =>
        function() {
          const n = Array.prototype.slice.call(arguments, 0)
          return t(e, n)
        }
      let r = {}
      for (const i of e) r[i] = n(i)
      return r
    }
    const w = '$initialize'
    class A {
      constructor(e) {
        ;(this._workerId = -1),
          (this._handler = e),
          (this._lastSentReq = 0),
          (this._pendingReplies = Object.create(null))
      }
      setWorkerId(e) {
        this._workerId = e
      }
      sendMessage(e, t) {
        let n = String(++this._lastSentReq)
        return new Promise((r, i) => {
          ;(this._pendingReplies[n] = { resolve: r, reject: i }),
            this._send({ vsWorker: this._workerId, req: n, method: e, args: t })
        })
      }
      handleMessage(e) {
        e && e.vsWorker && ((-1 !== this._workerId && e.vsWorker !== this._workerId) || this._handleMessage(e))
      }
      _handleMessage(e) {
        if (e.seq) {
          let t = e
          if (!this._pendingReplies[t.seq]) return void console.warn('Got reply to unknown seq')
          let n = this._pendingReplies[t.seq]
          if ((delete this._pendingReplies[t.seq], t.err)) {
            let e = t.err
            return (
              t.err.$isError &&
                ((e = new Error()), (e.name = t.err.name), (e.message = t.err.message), (e.stack = t.err.stack)),
              void n.reject(e)
            )
          }
          return void n.resolve(t.res)
        }
        let t = e,
          n = t.req,
          r = this._handler.handleMessage(t.method, t.args)
        r.then(
          e => {
            this._send({ vsWorker: this._workerId, seq: n, res: e, err: void 0 })
          },
          e => {
            e.detail instanceof Error && (e.detail = s(e.detail)),
              this._send({ vsWorker: this._workerId, seq: n, res: void 0, err: s(e) })
          },
        )
      }
      _send(e) {
        let t = []
        if (e.req) {
          const n = e
          for (let e = 0; e < n.args.length; e++) n.args[e] instanceof ArrayBuffer && t.push(n.args[e])
        } else {
          const n = e
          n.res instanceof ArrayBuffer && t.push(n.res)
        }
        this._handler.sendMessage(e, t)
      }
    }
    class E {
      constructor(e, t) {
        ;(this._requestHandlerFactory = t),
          (this._requestHandler = null),
          (this._protocol = new A({
            sendMessage: (t, n) => {
              e(t, n)
            },
            handleMessage: (e, t) => this._handleMessage(e, t),
          }))
      }
      onmessage(e) {
        this._protocol.handleMessage(e)
      }
      _handleMessage(e, t) {
        if (e === w) return this.initialize(t[0], t[1], t[2], t[3])
        if (!this._requestHandler || 'function' !== typeof this._requestHandler[e])
          return Promise.reject(new Error('Missing requestHandler or method: ' + e))
        try {
          return Promise.resolve(this._requestHandler[e].apply(this._requestHandler, t))
        } catch (n) {
          return Promise.reject(n)
        }
      }
      initialize(e, t, n, r) {
        this._protocol.setWorkerId(e)
        const i = (e, t) => this._protocol.sendMessage(e, t),
          o = S(r, i)
        return this._requestHandlerFactory
          ? ((this._requestHandler = this._requestHandlerFactory(o)), Promise.resolve(_(this._requestHandler)))
          : (t &&
              ('undefined' !== typeof t.baseUrl && delete t['baseUrl'],
              'undefined' !== typeof t.paths && 'undefined' !== typeof t.paths.vs && delete t.paths['vs'],
              (t.catchError = !0),
              self.require.config(t)),
            new Promise((e, t) => {
              self.require(
                [n],
                n => {
                  ;(this._requestHandler = n.create(o)),
                    this._requestHandler ? e(_(this._requestHandler)) : t(new Error('No RequestHandler!'))
                },
                t,
              )
            }))
      }
    }
    function x(e, t) {
      return L(e, t, 0, e.length - 1, []), e
    }
    function N(e, t, n, r, i, o) {
      let s = n,
        a = r + 1
      for (let u = n; u <= i; u++) o[u] = e[u]
      for (let u = n; u <= i; u++)
        s > r ? (e[u] = o[a++]) : a > i ? (e[u] = o[s++]) : t(o[a], o[s]) < 0 ? (e[u] = o[a++]) : (e[u] = o[s++])
    }
    function L(e, t, n, r, i) {
      if (r <= n) return
      const o = (n + (r - n) / 2) | 0
      L(e, t, n, o, i), L(e, t, o + 1, r, i), t(e[o], e[o + 1]) <= 0 || N(e, t, n, o, r, i)
    }
    class k {
      constructor(e, t, n, r) {
        ;(this.originalStart = e), (this.originalLength = t), (this.modifiedStart = n), (this.modifiedLength = r)
      }
      getOriginalEnd() {
        return this.originalStart + this.originalLength
      }
      getModifiedEnd() {
        return this.modifiedStart + this.modifiedLength
      }
    }
    function T(e) {
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e.charCodeAt(t)
        if (32 !== n && 9 !== n) return t
      }
      return -1
    }
    function O(e, t = e.length - 1) {
      for (let n = t; n >= 0; n--) {
        const t = e.charCodeAt(n)
        if (32 !== t && 9 !== t) return n
      }
      return -1
    }
    function I(e) {
      return 55296 <= e && e <= 56319
    }
    function M(e) {
      return 56320 <= e && e <= 57343
    }
    function P(e, t) {
      return t - 56320 + ((e - 55296) << 10) + 65536
    }
    String.fromCharCode(65279)
    class R {
      constructor() {
        this._data = D()
      }
      static getInstance() {
        return R._INSTANCE || (R._INSTANCE = new R()), R._INSTANCE
      }
      getGraphemeBreakType(e) {
        if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4
        if (e < 127) return 0
        const t = this._data,
          n = t.length / 3
        let r = 1
        while (r <= n)
          if (e < t[3 * r]) r *= 2
          else {
            if (!(e > t[3 * r + 1])) return t[3 * r + 2]
            r = 2 * r + 1
          }
        return 0
      }
    }
    function D() {
      return JSON.parse(
        '[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]',
      )
    }
    function F(e, t) {
      return ((t << 5) - t + e) | 0
    }
    function j(e, t) {
      t = F(149417, t)
      for (let n = 0, r = e.length; n < r; n++) t = F(e.charCodeAt(n), t)
      return t
    }
    function U(e, t, n = 32) {
      const r = n - t,
        i = ~((1 << r) - 1)
      return ((e << t) | ((i & e) >>> r)) >>> 0
    }
    function V(e, t = 0, n = e.byteLength, r = 0) {
      for (let i = 0; i < n; i++) e[t + i] = r
    }
    function $(e, t, n = '0') {
      while (e.length < t) e = n + e
      return e
    }
    function W(e, t = 32) {
      return $((e >>> 0).toString(16), t / 4)
    }
    R._INSTANCE = null
    class q {
      constructor() {
        ;(this._h0 = 1732584193),
          (this._h1 = 4023233417),
          (this._h2 = 2562383102),
          (this._h3 = 271733878),
          (this._h4 = 3285377520),
          (this._buff = new Uint8Array(67)),
          (this._buffDV = new DataView(this._buff.buffer)),
          (this._buffLen = 0),
          (this._totalLen = 0),
          (this._leftoverHighSurrogate = 0),
          (this._finished = !1)
      }
      update(e) {
        const t = e.length
        if (0 === t) return
        const n = this._buff
        let r,
          i,
          o = this._buffLen,
          s = this._leftoverHighSurrogate
        0 !== s ? ((r = s), (i = -1), (s = 0)) : ((r = e.charCodeAt(0)), (i = 0))
        while (1) {
          let a = r
          if (I(r)) {
            if (!(i + 1 < t)) {
              s = r
              break
            }
            {
              const t = e.charCodeAt(i + 1)
              M(t) ? (i++, (a = P(r, t))) : (a = 65533)
            }
          } else M(r) && (a = 65533)
          if (((o = this._push(n, o, a)), i++, !(i < t))) break
          r = e.charCodeAt(i)
        }
        ;(this._buffLen = o), (this._leftoverHighSurrogate = s)
      }
      _push(e, t, n) {
        return (
          n < 128
            ? (e[t++] = n)
            : n < 2048
            ? ((e[t++] = 192 | ((1984 & n) >>> 6)), (e[t++] = 128 | ((63 & n) >>> 0)))
            : n < 65536
            ? ((e[t++] = 224 | ((61440 & n) >>> 12)),
              (e[t++] = 128 | ((4032 & n) >>> 6)),
              (e[t++] = 128 | ((63 & n) >>> 0)))
            : ((e[t++] = 240 | ((1835008 & n) >>> 18)),
              (e[t++] = 128 | ((258048 & n) >>> 12)),
              (e[t++] = 128 | ((4032 & n) >>> 6)),
              (e[t++] = 128 | ((63 & n) >>> 0))),
          t >= 64 && (this._step(), (t -= 64), (this._totalLen += 64), (e[0] = e[64]), (e[1] = e[65]), (e[2] = e[66])),
          t
        )
      }
      digest() {
        return (
          this._finished ||
            ((this._finished = !0),
            this._leftoverHighSurrogate &&
              ((this._leftoverHighSurrogate = 0), (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
            (this._totalLen += this._buffLen),
            this._wrapUp()),
          W(this._h0) + W(this._h1) + W(this._h2) + W(this._h3) + W(this._h4)
        )
      }
      _wrapUp() {
        ;(this._buff[this._buffLen++] = 128),
          V(this._buff, this._buffLen),
          this._buffLen > 56 && (this._step(), V(this._buff))
        const e = 8 * this._totalLen
        this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
          this._buffDV.setUint32(60, e % 4294967296, !1),
          this._step()
      }
      _step() {
        const e = q._bigBlock32,
          t = this._buffDV
        for (let c = 0; c < 64; c += 4) e.setUint32(c, t.getUint32(c, !1), !1)
        for (let c = 64; c < 320; c += 4)
          e.setUint32(
            c,
            U(e.getUint32(c - 12, !1) ^ e.getUint32(c - 32, !1) ^ e.getUint32(c - 56, !1) ^ e.getUint32(c - 64, !1), 1),
            !1,
          )
        let n,
          r,
          i,
          o = this._h0,
          s = this._h1,
          a = this._h2,
          u = this._h3,
          l = this._h4
        for (let c = 0; c < 80; c++)
          c < 20
            ? ((n = (s & a) | (~s & u)), (r = 1518500249))
            : c < 40
            ? ((n = s ^ a ^ u), (r = 1859775393))
            : c < 60
            ? ((n = (s & a) | (s & u) | (a & u)), (r = 2400959708))
            : ((n = s ^ a ^ u), (r = 3395469782)),
            (i = (U(o, 5) + n + l + r + e.getUint32(4 * c, !1)) & 4294967295),
            (l = u),
            (u = a),
            (a = U(s, 30)),
            (s = o),
            (o = i)
        ;(this._h0 = (this._h0 + o) & 4294967295),
          (this._h1 = (this._h1 + s) & 4294967295),
          (this._h2 = (this._h2 + a) & 4294967295),
          (this._h3 = (this._h3 + u) & 4294967295),
          (this._h4 = (this._h4 + l) & 4294967295)
      }
    }
    q._bigBlock32 = new DataView(new ArrayBuffer(320))
    class B {
      constructor(e) {
        this.source = e
      }
      getElements() {
        const e = this.source,
          t = new Int32Array(e.length)
        for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n)
        return t
      }
    }
    function K(e, t, n) {
      return new z(new B(e), new B(t)).ComputeDiff(n).changes
    }
    class H {
      static Assert(e, t) {
        if (!e) throw new Error(t)
      }
    }
    class Y {
      static Copy(e, t, n, r, i) {
        for (let o = 0; o < i; o++) n[r + o] = e[t + o]
      }
      static Copy2(e, t, n, r, i) {
        for (let o = 0; o < i; o++) n[r + o] = e[t + o]
      }
    }
    class G {
      constructor() {
        ;(this.m_changes = []),
          (this.m_originalStart = 1073741824),
          (this.m_modifiedStart = 1073741824),
          (this.m_originalCount = 0),
          (this.m_modifiedCount = 0)
      }
      MarkNextChange() {
        ;(this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
          this.m_changes.push(
            new k(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount),
          ),
          (this.m_originalCount = 0),
          (this.m_modifiedCount = 0),
          (this.m_originalStart = 1073741824),
          (this.m_modifiedStart = 1073741824)
      }
      AddOriginalElement(e, t) {
        ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
          (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
          this.m_originalCount++
      }
      AddModifiedElement(e, t) {
        ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
          (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
          this.m_modifiedCount++
      }
      getChanges() {
        return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes
      }
      getReverseChanges() {
        return (
          (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
          this.m_changes.reverse(),
          this.m_changes
        )
      }
    }
    class z {
      constructor(e, t, n = null) {
        this.ContinueProcessingPredicate = n
        const [r, i, o] = z._getElements(e),
          [s, a, u] = z._getElements(t)
        ;(this._hasStrings = o && u),
          (this._originalStringElements = r),
          (this._originalElementsOrHash = i),
          (this._modifiedStringElements = s),
          (this._modifiedElementsOrHash = a),
          (this.m_forwardHistory = []),
          (this.m_reverseHistory = [])
      }
      static _isStringArray(e) {
        return e.length > 0 && 'string' === typeof e[0]
      }
      static _getElements(e) {
        const t = e.getElements()
        if (z._isStringArray(t)) {
          const e = new Int32Array(t.length)
          for (let n = 0, r = t.length; n < r; n++) e[n] = j(t[n], 0)
          return [t, e, !0]
        }
        return t instanceof Int32Array ? [[], t, !1] : [[], new Int32Array(t), !1]
      }
      ElementsAreEqual(e, t) {
        return (
          this._originalElementsOrHash[e] === this._modifiedElementsOrHash[t] &&
          (!this._hasStrings || this._originalStringElements[e] === this._modifiedStringElements[t])
        )
      }
      OriginalElementsAreEqual(e, t) {
        return (
          this._originalElementsOrHash[e] === this._originalElementsOrHash[t] &&
          (!this._hasStrings || this._originalStringElements[e] === this._originalStringElements[t])
        )
      }
      ModifiedElementsAreEqual(e, t) {
        return (
          this._modifiedElementsOrHash[e] === this._modifiedElementsOrHash[t] &&
          (!this._hasStrings || this._modifiedStringElements[e] === this._modifiedStringElements[t])
        )
      }
      ComputeDiff(e) {
        return this._ComputeDiff(
          0,
          this._originalElementsOrHash.length - 1,
          0,
          this._modifiedElementsOrHash.length - 1,
          e,
        )
      }
      _ComputeDiff(e, t, n, r, i) {
        const o = [!1]
        let s = this.ComputeDiffRecursive(e, t, n, r, o)
        return i && (s = this.PrettifyChanges(s)), { quitEarly: o[0], changes: s }
      }
      ComputeDiffRecursive(e, t, n, r, i) {
        i[0] = !1
        while (e <= t && n <= r && this.ElementsAreEqual(e, n)) e++, n++
        while (t >= e && r >= n && this.ElementsAreEqual(t, r)) t--, r--
        if (e > t || n > r) {
          let i
          return (
            n <= r
              ? (H.Assert(e === t + 1, 'originalStart should only be one more than originalEnd'),
                (i = [new k(e, 0, n, r - n + 1)]))
              : e <= t
              ? (H.Assert(n === r + 1, 'modifiedStart should only be one more than modifiedEnd'),
                (i = [new k(e, t - e + 1, n, 0)]))
              : (H.Assert(e === t + 1, 'originalStart should only be one more than originalEnd'),
                H.Assert(n === r + 1, 'modifiedStart should only be one more than modifiedEnd'),
                (i = [])),
            i
          )
        }
        const o = [0],
          s = [0],
          a = this.ComputeRecursionPoint(e, t, n, r, o, s, i),
          u = o[0],
          l = s[0]
        if (null !== a) return a
        if (!i[0]) {
          const o = this.ComputeDiffRecursive(e, u, n, l, i)
          let s = []
          return (
            (s = i[0]
              ? [new k(u + 1, t - (u + 1) + 1, l + 1, r - (l + 1) + 1)]
              : this.ComputeDiffRecursive(u + 1, t, l + 1, r, i)),
            this.ConcatenateChanges(o, s)
          )
        }
        return [new k(e, t - e + 1, n, r - n + 1)]
      }
      WALKTRACE(e, t, n, r, i, o, s, a, u, l, c, h, f, d, m, g, p, v) {
        let y = null,
          b = null,
          C = new G(),
          _ = t,
          S = n,
          w = f[0] - g[0] - r,
          A = -1073741824,
          E = this.m_forwardHistory.length - 1
        do {
          const t = w + e
          t === _ || (t < S && u[t - 1] < u[t + 1])
            ? ((c = u[t + 1]),
              (d = c - w - r),
              c < A && C.MarkNextChange(),
              (A = c),
              C.AddModifiedElement(c + 1, d),
              (w = t + 1 - e))
            : ((c = u[t - 1] + 1),
              (d = c - w - r),
              c < A && C.MarkNextChange(),
              (A = c - 1),
              C.AddOriginalElement(c, d + 1),
              (w = t - 1 - e)),
            E >= 0 && ((u = this.m_forwardHistory[E]), (e = u[0]), (_ = 1), (S = u.length - 1))
        } while (--E >= -1)
        if (((y = C.getReverseChanges()), v[0])) {
          let e = f[0] + 1,
            t = g[0] + 1
          if (null !== y && y.length > 0) {
            const n = y[y.length - 1]
            ;(e = Math.max(e, n.getOriginalEnd())), (t = Math.max(t, n.getModifiedEnd()))
          }
          b = [new k(e, h - e + 1, t, m - t + 1)]
        } else {
          ;(C = new G()),
            (_ = o),
            (S = s),
            (w = f[0] - g[0] - a),
            (A = 1073741824),
            (E = p ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2)
          do {
            const e = w + i
            e === _ || (e < S && l[e - 1] >= l[e + 1])
              ? ((c = l[e + 1] - 1),
                (d = c - w - a),
                c > A && C.MarkNextChange(),
                (A = c + 1),
                C.AddOriginalElement(c + 1, d + 1),
                (w = e + 1 - i))
              : ((c = l[e - 1]),
                (d = c - w - a),
                c > A && C.MarkNextChange(),
                (A = c),
                C.AddModifiedElement(c + 1, d + 1),
                (w = e - 1 - i)),
              E >= 0 && ((l = this.m_reverseHistory[E]), (i = l[0]), (_ = 1), (S = l.length - 1))
          } while (--E >= -1)
          b = C.getChanges()
        }
        return this.ConcatenateChanges(y, b)
      }
      ComputeRecursionPoint(e, t, n, r, i, o, s) {
        let a = 0,
          u = 0,
          l = 0,
          c = 0,
          h = 0,
          f = 0
        e--, n--, (i[0] = 0), (o[0] = 0), (this.m_forwardHistory = []), (this.m_reverseHistory = [])
        const d = t - e + (r - n),
          m = d + 1,
          g = new Int32Array(m),
          p = new Int32Array(m),
          v = r - n,
          y = t - e,
          b = e - n,
          C = t - r,
          _ = y - v,
          S = _ % 2 === 0
        ;(g[v] = e), (p[y] = t), (s[0] = !1)
        for (let w = 1; w <= d / 2 + 1; w++) {
          let d = 0,
            _ = 0
          ;(l = this.ClipDiagonalBound(v - w, w, v, m)), (c = this.ClipDiagonalBound(v + w, w, v, m))
          for (let e = l; e <= c; e += 2) {
            ;(a = e === l || (e < c && g[e - 1] < g[e + 1]) ? g[e + 1] : g[e - 1] + 1), (u = a - (e - v) - b)
            const n = a
            while (a < t && u < r && this.ElementsAreEqual(a + 1, u + 1)) a++, u++
            if (((g[e] = a), a + u > d + _ && ((d = a), (_ = u)), !S && Math.abs(e - y) <= w - 1 && a >= p[e]))
              return (
                (i[0] = a),
                (o[0] = u),
                n <= p[e] && w <= 1448 ? this.WALKTRACE(v, l, c, b, y, h, f, C, g, p, a, t, i, u, r, o, S, s) : null
              )
          }
          const A = (d - e + (_ - n) - w) / 2
          if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(d, A))
            return (
              (s[0] = !0),
              (i[0] = d),
              (o[0] = _),
              A > 0 && w <= 1448
                ? this.WALKTRACE(v, l, c, b, y, h, f, C, g, p, a, t, i, u, r, o, S, s)
                : (e++, n++, [new k(e, t - e + 1, n, r - n + 1)])
            )
          ;(h = this.ClipDiagonalBound(y - w, w, y, m)), (f = this.ClipDiagonalBound(y + w, w, y, m))
          for (let m = h; m <= f; m += 2) {
            ;(a = m === h || (m < f && p[m - 1] >= p[m + 1]) ? p[m + 1] - 1 : p[m - 1]), (u = a - (m - y) - C)
            const d = a
            while (a > e && u > n && this.ElementsAreEqual(a, u)) a--, u--
            if (((p[m] = a), S && Math.abs(m - v) <= w && a <= g[m]))
              return (
                (i[0] = a),
                (o[0] = u),
                d >= g[m] && w <= 1448 ? this.WALKTRACE(v, l, c, b, y, h, f, C, g, p, a, t, i, u, r, o, S, s) : null
              )
          }
          if (w <= 1447) {
            let e = new Int32Array(c - l + 2)
            ;(e[0] = v - l + 1),
              Y.Copy2(g, l, e, 1, c - l + 1),
              this.m_forwardHistory.push(e),
              (e = new Int32Array(f - h + 2)),
              (e[0] = y - h + 1),
              Y.Copy2(p, h, e, 1, f - h + 1),
              this.m_reverseHistory.push(e)
          }
        }
        return this.WALKTRACE(v, l, c, b, y, h, f, C, g, p, a, t, i, u, r, o, S, s)
      }
      PrettifyChanges(e) {
        for (let t = 0; t < e.length; t++) {
          const n = e[t],
            r = t < e.length - 1 ? e[t + 1].originalStart : this._originalElementsOrHash.length,
            i = t < e.length - 1 ? e[t + 1].modifiedStart : this._modifiedElementsOrHash.length,
            o = n.originalLength > 0,
            s = n.modifiedLength > 0
          while (
            n.originalStart + n.originalLength < r &&
            n.modifiedStart + n.modifiedLength < i &&
            (!o || this.OriginalElementsAreEqual(n.originalStart, n.originalStart + n.originalLength)) &&
            (!s || this.ModifiedElementsAreEqual(n.modifiedStart, n.modifiedStart + n.modifiedLength))
          )
            n.originalStart++, n.modifiedStart++
          let a = [null]
          t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], a) && ((e[t] = a[0]), e.splice(t + 1, 1), t--)
        }
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t]
          let r = 0,
            i = 0
          if (t > 0) {
            const n = e[t - 1]
            n.originalLength > 0 && (r = n.originalStart + n.originalLength),
              n.modifiedLength > 0 && (i = n.modifiedStart + n.modifiedLength)
          }
          const o = n.originalLength > 0,
            s = n.modifiedLength > 0
          let a = 0,
            u = this._boundaryScore(n.originalStart, n.originalLength, n.modifiedStart, n.modifiedLength)
          for (let e = 1; ; e++) {
            const t = n.originalStart - e,
              l = n.modifiedStart - e
            if (t < r || l < i) break
            if (o && !this.OriginalElementsAreEqual(t, t + n.originalLength)) break
            if (s && !this.ModifiedElementsAreEqual(l, l + n.modifiedLength)) break
            const c = this._boundaryScore(t, n.originalLength, l, n.modifiedLength)
            c > u && ((u = c), (a = e))
          }
          ;(n.originalStart -= a), (n.modifiedStart -= a)
        }
        return e
      }
      _OriginalIsBoundary(e) {
        return (
          e <= 0 ||
          e >= this._originalElementsOrHash.length - 1 ||
          (this._hasStrings && /^\s*$/.test(this._originalStringElements[e]))
        )
      }
      _OriginalRegionIsBoundary(e, t) {
        if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0
        if (t > 0) {
          const n = e + t
          if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0
        }
        return !1
      }
      _ModifiedIsBoundary(e) {
        return (
          e <= 0 ||
          e >= this._modifiedElementsOrHash.length - 1 ||
          (this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]))
        )
      }
      _ModifiedRegionIsBoundary(e, t) {
        if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0
        if (t > 0) {
          const n = e + t
          if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0
        }
        return !1
      }
      _boundaryScore(e, t, n, r) {
        const i = this._OriginalRegionIsBoundary(e, t) ? 1 : 0,
          o = this._ModifiedRegionIsBoundary(n, r) ? 1 : 0
        return i + o
      }
      ConcatenateChanges(e, t) {
        let n = []
        if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e
        if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
          const r = new Array(e.length + t.length - 1)
          return Y.Copy(e, 0, r, 0, e.length - 1), (r[e.length - 1] = n[0]), Y.Copy(t, 1, r, e.length, t.length - 1), r
        }
        {
          const n = new Array(e.length + t.length)
          return Y.Copy(e, 0, n, 0, e.length), Y.Copy(t, 0, n, e.length, t.length), n
        }
      }
      ChangesOverlap(e, t, n) {
        if (
          (H.Assert(e.originalStart <= t.originalStart, 'Left change is not less than or equal to right change'),
          H.Assert(e.modifiedStart <= t.modifiedStart, 'Left change is not less than or equal to right change'),
          e.originalStart + e.originalLength >= t.originalStart ||
            e.modifiedStart + e.modifiedLength >= t.modifiedStart)
        ) {
          const r = e.originalStart
          let i = e.originalLength
          const o = e.modifiedStart
          let s = e.modifiedLength
          return (
            e.originalStart + e.originalLength >= t.originalStart &&
              (i = t.originalStart + t.originalLength - e.originalStart),
            e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
              (s = t.modifiedStart + t.modifiedLength - e.modifiedStart),
            (n[0] = new k(r, i, o, s)),
            !0
          )
        }
        return (n[0] = null), !1
      }
      ClipDiagonalBound(e, t, n, r) {
        if (e >= 0 && e < r) return e
        const i = n,
          o = r - n - 1,
          s = t % 2 === 0
        if (e < 0) {
          const e = i % 2 === 0
          return s === e ? 0 : 1
        }
        {
          const e = o % 2 === 0
          return s === e ? r - 1 : r - 2
        }
      }
    }
    var J = n('SEXO')
    const Q = 65,
      X = 97,
      Z = 90,
      ee = 122,
      te = 46,
      ne = 47,
      re = 92,
      ie = 58,
      oe = 63
    class se extends Error {
      constructor(e, t, n) {
        let r
        'string' === typeof t && 0 === t.indexOf('not ')
          ? ((r = 'must not be'), (t = t.replace(/^not /, '')))
          : (r = 'must be')
        const i = -1 !== e.indexOf('.') ? 'property' : 'argument'
        let o = `The "${e}" ${i} ${r} of type ${t}`
        ;(o += '. Received type ' + typeof n), super(o), (this.code = 'ERR_INVALID_ARG_TYPE')
      }
    }
    function ae(e, t) {
      if ('string' !== typeof e) throw new se(t, 'string', e)
    }
    function ue(e) {
      return e === ne || e === re
    }
    function le(e) {
      return e === ne
    }
    function ce(e) {
      return (e >= Q && e <= Z) || (e >= X && e <= ee)
    }
    function he(e, t, n, r) {
      let i = '',
        o = 0,
        s = -1,
        a = 0,
        u = 0
      for (let l = 0; l <= e.length; ++l) {
        if (l < e.length) u = e.charCodeAt(l)
        else {
          if (r(u)) break
          u = ne
        }
        if (r(u)) {
          if (s === l - 1 || 1 === a);
          else if (2 === a) {
            if (i.length < 2 || 2 !== o || i.charCodeAt(i.length - 1) !== te || i.charCodeAt(i.length - 2) !== te) {
              if (i.length > 2) {
                const e = i.lastIndexOf(n)
                ;-1 === e ? ((i = ''), (o = 0)) : ((i = i.slice(0, e)), (o = i.length - 1 - i.lastIndexOf(n))),
                  (s = l),
                  (a = 0)
                continue
              }
              if (0 !== i.length) {
                ;(i = ''), (o = 0), (s = l), (a = 0)
                continue
              }
            }
            t && ((i += i.length > 0 ? `${n}..` : '..'), (o = 2))
          } else i.length > 0 ? (i += `${n}${e.slice(s + 1, l)}`) : (i = e.slice(s + 1, l)), (o = l - s - 1)
          ;(s = l), (a = 0)
        } else u === te && -1 !== a ? ++a : (a = -1)
      }
      return i
    }
    function fe(e, t) {
      if (null === t || 'object' !== typeof t) throw new se('pathObject', 'Object', t)
      const n = t.dir || t.root,
        r = t.base || `${t.name || ''}${t.ext || ''}`
      return n ? (n === t.root ? `${n}${r}` : `${n}${e}${r}`) : r
    }
    const de = {
        resolve(...e) {
          let t = '',
            n = '',
            r = !1
          for (let i = e.length - 1; i >= -1; i--) {
            let o
            if (i >= 0) {
              if (((o = e[i]), ae(o, 'path'), 0 === o.length)) continue
            } else
              0 === t.length
                ? (o = J['a']())
                : ((o = J['b'][`=${t}`] || J['a']()),
                  (void 0 === o || (o.slice(0, 2).toLowerCase() !== t.toLowerCase() && o.charCodeAt(2) === re)) &&
                    (o = `${t}\\`))
            const s = o.length
            let a = 0,
              u = '',
              l = !1
            const c = o.charCodeAt(0)
            if (1 === s) ue(c) && ((a = 1), (l = !0))
            else if (ue(c))
              if (((l = !0), ue(o.charCodeAt(1)))) {
                let e = 2,
                  t = e
                while (e < s && !ue(o.charCodeAt(e))) e++
                if (e < s && e !== t) {
                  const n = o.slice(t, e)
                  t = e
                  while (e < s && ue(o.charCodeAt(e))) e++
                  if (e < s && e !== t) {
                    t = e
                    while (e < s && !ue(o.charCodeAt(e))) e++
                    ;(e !== s && e === t) || ((u = `\\\\${n}\\${o.slice(t, e)}`), (a = e))
                  }
                }
              } else a = 1
            else
              ce(c) &&
                o.charCodeAt(1) === ie &&
                ((u = o.slice(0, 2)), (a = 2), s > 2 && ue(o.charCodeAt(2)) && ((l = !0), (a = 3)))
            if (u.length > 0)
              if (t.length > 0) {
                if (u.toLowerCase() !== t.toLowerCase()) continue
              } else t = u
            if (r) {
              if (t.length > 0) break
            } else if (((n = `${o.slice(a)}\\${n}`), (r = l), l && t.length > 0)) break
          }
          return (n = he(n, !r, '\\', ue)), r ? `${t}\\${n}` : `${t}${n}` || '.'
        },
        normalize(e) {
          ae(e, 'path')
          const t = e.length
          if (0 === t) return '.'
          let n,
            r = 0,
            i = !1
          const o = e.charCodeAt(0)
          if (1 === t) return le(o) ? '\\' : e
          if (ue(o))
            if (((i = !0), ue(e.charCodeAt(1)))) {
              let i = 2,
                o = i
              while (i < t && !ue(e.charCodeAt(i))) i++
              if (i < t && i !== o) {
                const s = e.slice(o, i)
                o = i
                while (i < t && ue(e.charCodeAt(i))) i++
                if (i < t && i !== o) {
                  o = i
                  while (i < t && !ue(e.charCodeAt(i))) i++
                  if (i === t) return `\\\\${s}\\${e.slice(o)}\\`
                  i !== o && ((n = `\\\\${s}\\${e.slice(o, i)}`), (r = i))
                }
              }
            } else r = 1
          else
            ce(o) &&
              e.charCodeAt(1) === ie &&
              ((n = e.slice(0, 2)), (r = 2), t > 2 && ue(e.charCodeAt(2)) && ((i = !0), (r = 3)))
          let s = r < t ? he(e.slice(r), !i, '\\', ue) : ''
          return (
            0 !== s.length || i || (s = '.'),
            s.length > 0 && ue(e.charCodeAt(t - 1)) && (s += '\\'),
            void 0 === n ? (i ? `\\${s}` : s) : i ? `${n}\\${s}` : `${n}${s}`
          )
        },
        isAbsolute(e) {
          ae(e, 'path')
          const t = e.length
          if (0 === t) return !1
          const n = e.charCodeAt(0)
          return ue(n) || (t > 2 && ce(n) && e.charCodeAt(1) === ie && ue(e.charCodeAt(2)))
        },
        join(...e) {
          if (0 === e.length) return '.'
          let t, n
          for (let o = 0; o < e.length; ++o) {
            const r = e[o]
            ae(r, 'path'), r.length > 0 && (void 0 === t ? (t = n = r) : (t += `\\${r}`))
          }
          if (void 0 === t) return '.'
          let r = !0,
            i = 0
          if ('string' === typeof n && ue(n.charCodeAt(0))) {
            ++i
            const e = n.length
            e > 1 && ue(n.charCodeAt(1)) && (++i, e > 2 && (ue(n.charCodeAt(2)) ? ++i : (r = !1)))
          }
          if (r) {
            while (i < t.length && ue(t.charCodeAt(i))) i++
            i >= 2 && (t = `\\${t.slice(i)}`)
          }
          return de.normalize(t)
        },
        relative(e, t) {
          if ((ae(e, 'from'), ae(t, 'to'), e === t)) return ''
          const n = de.resolve(e),
            r = de.resolve(t)
          if (n === r) return ''
          if (((e = n.toLowerCase()), (t = r.toLowerCase()), e === t)) return ''
          let i = 0
          while (i < e.length && e.charCodeAt(i) === re) i++
          let o = e.length
          while (o - 1 > i && e.charCodeAt(o - 1) === re) o--
          const s = o - i
          let a = 0
          while (a < t.length && t.charCodeAt(a) === re) a++
          let u = t.length
          while (u - 1 > a && t.charCodeAt(u - 1) === re) u--
          const l = u - a,
            c = s < l ? s : l
          let h = -1,
            f = 0
          for (; f < c; f++) {
            const n = e.charCodeAt(i + f)
            if (n !== t.charCodeAt(a + f)) break
            n === re && (h = f)
          }
          if (f !== c) {
            if (-1 === h) return r
          } else {
            if (l > c) {
              if (t.charCodeAt(a + f) === re) return r.slice(a + f + 1)
              if (2 === f) return r.slice(a + f)
            }
            s > c && (e.charCodeAt(i + f) === re ? (h = f) : 2 === f && (h = 3)), -1 === h && (h = 0)
          }
          let d = ''
          for (f = i + h + 1; f <= o; ++f) (f !== o && e.charCodeAt(f) !== re) || (d += 0 === d.length ? '..' : '\\..')
          return (a += h), d.length > 0 ? `${d}${r.slice(a, u)}` : (r.charCodeAt(a) === re && ++a, r.slice(a, u))
        },
        toNamespacedPath(e) {
          if ('string' !== typeof e) return e
          if (0 === e.length) return ''
          const t = de.resolve(e)
          if (t.length <= 2) return e
          if (t.charCodeAt(0) === re) {
            if (t.charCodeAt(1) === re) {
              const e = t.charCodeAt(2)
              if (e !== oe && e !== te) return `\\\\?\\UNC\\${t.slice(2)}`
            }
          } else if (ce(t.charCodeAt(0)) && t.charCodeAt(1) === ie && t.charCodeAt(2) === re) return `\\\\?\\${t}`
          return e
        },
        dirname(e) {
          ae(e, 'path')
          const t = e.length
          if (0 === t) return '.'
          let n = -1,
            r = 0
          const i = e.charCodeAt(0)
          if (1 === t) return ue(i) ? e : '.'
          if (ue(i)) {
            if (((n = r = 1), ue(e.charCodeAt(1)))) {
              let i = 2,
                o = i
              while (i < t && !ue(e.charCodeAt(i))) i++
              if (i < t && i !== o) {
                o = i
                while (i < t && ue(e.charCodeAt(i))) i++
                if (i < t && i !== o) {
                  o = i
                  while (i < t && !ue(e.charCodeAt(i))) i++
                  if (i === t) return e
                  i !== o && (n = r = i + 1)
                }
              }
            }
          } else ce(i) && e.charCodeAt(1) === ie && ((n = t > 2 && ue(e.charCodeAt(2)) ? 3 : 2), (r = n))
          let o = -1,
            s = !0
          for (let a = t - 1; a >= r; --a)
            if (ue(e.charCodeAt(a))) {
              if (!s) {
                o = a
                break
              }
            } else s = !1
          if (-1 === o) {
            if (-1 === n) return '.'
            o = n
          }
          return e.slice(0, o)
        },
        basename(e, t) {
          void 0 !== t && ae(t, 'ext'), ae(e, 'path')
          let n,
            r = 0,
            i = -1,
            o = !0
          if (
            (e.length >= 2 && ce(e.charCodeAt(0)) && e.charCodeAt(1) === ie && (r = 2),
            void 0 !== t && t.length > 0 && t.length <= e.length)
          ) {
            if (t === e) return ''
            let s = t.length - 1,
              a = -1
            for (n = e.length - 1; n >= r; --n) {
              const u = e.charCodeAt(n)
              if (ue(u)) {
                if (!o) {
                  r = n + 1
                  break
                }
              } else
                -1 === a && ((o = !1), (a = n + 1)),
                  s >= 0 && (u === t.charCodeAt(s) ? -1 === --s && (i = n) : ((s = -1), (i = a)))
            }
            return r === i ? (i = a) : -1 === i && (i = e.length), e.slice(r, i)
          }
          for (n = e.length - 1; n >= r; --n)
            if (ue(e.charCodeAt(n))) {
              if (!o) {
                r = n + 1
                break
              }
            } else -1 === i && ((o = !1), (i = n + 1))
          return -1 === i ? '' : e.slice(r, i)
        },
        extname(e) {
          ae(e, 'path')
          let t = 0,
            n = -1,
            r = 0,
            i = -1,
            o = !0,
            s = 0
          e.length >= 2 && e.charCodeAt(1) === ie && ce(e.charCodeAt(0)) && (t = r = 2)
          for (let a = e.length - 1; a >= t; --a) {
            const t = e.charCodeAt(a)
            if (ue(t)) {
              if (!o) {
                r = a + 1
                break
              }
            } else
              -1 === i && ((o = !1), (i = a + 1)),
                t === te ? (-1 === n ? (n = a) : 1 !== s && (s = 1)) : -1 !== n && (s = -1)
          }
          return -1 === n || -1 === i || 0 === s || (1 === s && n === i - 1 && n === r + 1) ? '' : e.slice(n, i)
        },
        format: fe.bind(null, '\\'),
        parse(e) {
          ae(e, 'path')
          const t = { root: '', dir: '', base: '', ext: '', name: '' }
          if (0 === e.length) return t
          const n = e.length
          let r = 0,
            i = e.charCodeAt(0)
          if (1 === n) return ue(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t)
          if (ue(i)) {
            if (((r = 1), ue(e.charCodeAt(1)))) {
              let t = 2,
                i = t
              while (t < n && !ue(e.charCodeAt(t))) t++
              if (t < n && t !== i) {
                i = t
                while (t < n && ue(e.charCodeAt(t))) t++
                if (t < n && t !== i) {
                  i = t
                  while (t < n && !ue(e.charCodeAt(t))) t++
                  t === n ? (r = t) : t !== i && (r = t + 1)
                }
              }
            }
          } else if (ce(i) && e.charCodeAt(1) === ie) {
            if (n <= 2) return (t.root = t.dir = e), t
            if (((r = 2), ue(e.charCodeAt(2)))) {
              if (3 === n) return (t.root = t.dir = e), t
              r = 3
            }
          }
          r > 0 && (t.root = e.slice(0, r))
          let o = -1,
            s = r,
            a = -1,
            u = !0,
            l = e.length - 1,
            c = 0
          for (; l >= r; --l)
            if (((i = e.charCodeAt(l)), ue(i))) {
              if (!u) {
                s = l + 1
                break
              }
            } else
              -1 === a && ((u = !1), (a = l + 1)),
                i === te ? (-1 === o ? (o = l) : 1 !== c && (c = 1)) : -1 !== o && (c = -1)
          return (
            -1 !== a &&
              (-1 === o || 0 === c || (1 === c && o === a - 1 && o === s + 1)
                ? (t.base = t.name = e.slice(s, a))
                : ((t.name = e.slice(s, o)), (t.base = e.slice(s, a)), (t.ext = e.slice(o, a)))),
            (t.dir = s > 0 && s !== r ? e.slice(0, s - 1) : t.root),
            t
          )
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      },
      me = {
        resolve(...e) {
          let t = '',
            n = !1
          for (let r = e.length - 1; r >= -1 && !n; r--) {
            const i = r >= 0 ? e[r] : J['a']()
            ae(i, 'path'), 0 !== i.length && ((t = `${i}/${t}`), (n = i.charCodeAt(0) === ne))
          }
          return (t = he(t, !n, '/', le)), n ? `/${t}` : t.length > 0 ? t : '.'
        },
        normalize(e) {
          if ((ae(e, 'path'), 0 === e.length)) return '.'
          const t = e.charCodeAt(0) === ne,
            n = e.charCodeAt(e.length - 1) === ne
          return (
            (e = he(e, !t, '/', le)), 0 === e.length ? (t ? '/' : n ? './' : '.') : (n && (e += '/'), t ? `/${e}` : e)
          )
        },
        isAbsolute(e) {
          return ae(e, 'path'), e.length > 0 && e.charCodeAt(0) === ne
        },
        join(...e) {
          if (0 === e.length) return '.'
          let t
          for (let n = 0; n < e.length; ++n) {
            const r = e[n]
            ae(r, 'path'), r.length > 0 && (void 0 === t ? (t = r) : (t += `/${r}`))
          }
          return void 0 === t ? '.' : me.normalize(t)
        },
        relative(e, t) {
          if ((ae(e, 'from'), ae(t, 'to'), e === t)) return ''
          if (((e = me.resolve(e)), (t = me.resolve(t)), e === t)) return ''
          const n = 1,
            r = e.length,
            i = r - n,
            o = 1,
            s = t.length - o,
            a = i < s ? i : s
          let u = -1,
            l = 0
          for (; l < a; l++) {
            const r = e.charCodeAt(n + l)
            if (r !== t.charCodeAt(o + l)) break
            r === ne && (u = l)
          }
          if (l === a)
            if (s > a) {
              if (t.charCodeAt(o + l) === ne) return t.slice(o + l + 1)
              if (0 === l) return t.slice(o + l)
            } else i > a && (e.charCodeAt(n + l) === ne ? (u = l) : 0 === l && (u = 0))
          let c = ''
          for (l = n + u + 1; l <= r; ++l) (l !== r && e.charCodeAt(l) !== ne) || (c += 0 === c.length ? '..' : '/..')
          return `${c}${t.slice(o + u)}`
        },
        toNamespacedPath(e) {
          return e
        },
        dirname(e) {
          if ((ae(e, 'path'), 0 === e.length)) return '.'
          const t = e.charCodeAt(0) === ne
          let n = -1,
            r = !0
          for (let i = e.length - 1; i >= 1; --i)
            if (e.charCodeAt(i) === ne) {
              if (!r) {
                n = i
                break
              }
            } else r = !1
          return -1 === n ? (t ? '/' : '.') : t && 1 === n ? '//' : e.slice(0, n)
        },
        basename(e, t) {
          void 0 !== t && ae(t, 'ext'), ae(e, 'path')
          let n,
            r = 0,
            i = -1,
            o = !0
          if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t === e) return ''
            let s = t.length - 1,
              a = -1
            for (n = e.length - 1; n >= 0; --n) {
              const u = e.charCodeAt(n)
              if (u === ne) {
                if (!o) {
                  r = n + 1
                  break
                }
              } else
                -1 === a && ((o = !1), (a = n + 1)),
                  s >= 0 && (u === t.charCodeAt(s) ? -1 === --s && (i = n) : ((s = -1), (i = a)))
            }
            return r === i ? (i = a) : -1 === i && (i = e.length), e.slice(r, i)
          }
          for (n = e.length - 1; n >= 0; --n)
            if (e.charCodeAt(n) === ne) {
              if (!o) {
                r = n + 1
                break
              }
            } else -1 === i && ((o = !1), (i = n + 1))
          return -1 === i ? '' : e.slice(r, i)
        },
        extname(e) {
          ae(e, 'path')
          let t = -1,
            n = 0,
            r = -1,
            i = !0,
            o = 0
          for (let s = e.length - 1; s >= 0; --s) {
            const a = e.charCodeAt(s)
            if (a !== ne)
              -1 === r && ((i = !1), (r = s + 1)),
                a === te ? (-1 === t ? (t = s) : 1 !== o && (o = 1)) : -1 !== t && (o = -1)
            else if (!i) {
              n = s + 1
              break
            }
          }
          return -1 === t || -1 === r || 0 === o || (1 === o && t === r - 1 && t === n + 1) ? '' : e.slice(t, r)
        },
        format: fe.bind(null, '/'),
        parse(e) {
          ae(e, 'path')
          const t = { root: '', dir: '', base: '', ext: '', name: '' }
          if (0 === e.length) return t
          const n = e.charCodeAt(0) === ne
          let r
          n ? ((t.root = '/'), (r = 1)) : (r = 0)
          let i = -1,
            o = 0,
            s = -1,
            a = !0,
            u = e.length - 1,
            l = 0
          for (; u >= r; --u) {
            const t = e.charCodeAt(u)
            if (t !== ne)
              -1 === s && ((a = !1), (s = u + 1)),
                t === te ? (-1 === i ? (i = u) : 1 !== l && (l = 1)) : -1 !== i && (l = -1)
            else if (!a) {
              o = u + 1
              break
            }
          }
          if (-1 !== s) {
            const r = 0 === o && n ? 1 : o
            ;-1 === i || 0 === l || (1 === l && i === s - 1 && i === o + 1)
              ? (t.base = t.name = e.slice(r, s))
              : ((t.name = e.slice(r, i)), (t.base = e.slice(r, s)), (t.ext = e.slice(i, s)))
          }
          return o > 0 ? (t.dir = e.slice(0, o - 1)) : n && (t.dir = '/'), t
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      }
    ;(me.win32 = de.win32 = de), (me.posix = de.posix = me)
    'win32' === J['c'] ? de.normalize : me.normalize,
      'win32' === J['c'] ? de.resolve : me.resolve,
      'win32' === J['c'] ? de.relative : me.relative,
      'win32' === J['c'] ? de.dirname : me.dirname,
      'win32' === J['c'] ? de.basename : me.basename,
      'win32' === J['c'] ? de.extname : me.extname,
      'win32' === J['c'] ? de.sep : me.sep
    const ge = /^\w[\w\d+.-]*$/,
      pe = /^\//,
      ve = /^\/\//
    function ye(e, t) {
      if (!e.scheme && t)
        throw new Error(
          `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`,
        )
      if (e.scheme && !ge.test(e.scheme)) throw new Error('[UriError]: Scheme contains illegal characters.')
      if (e.path)
        if (e.authority) {
          if (!pe.test(e.path))
            throw new Error(
              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
            )
        } else if (ve.test(e.path))
          throw new Error(
            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
          )
    }
    function be(e, t) {
      return e || t ? e : 'file'
    }
    function Ce(e, t) {
      switch (e) {
        case 'https':
        case 'http':
        case 'file':
          t ? t[0] !== Se && (t = Se + t) : (t = Se)
          break
      }
      return t
    }
    const _e = '',
      Se = '/',
      we = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
    class Ae {
      constructor(e, t, n, r, i, o = !1) {
        'object' === typeof e
          ? ((this.scheme = e.scheme || _e),
            (this.authority = e.authority || _e),
            (this.path = e.path || _e),
            (this.query = e.query || _e),
            (this.fragment = e.fragment || _e))
          : ((this.scheme = be(e, o)),
            (this.authority = t || _e),
            (this.path = Ce(this.scheme, n || _e)),
            (this.query = r || _e),
            (this.fragment = i || _e),
            ye(this, o))
      }
      static isUri(e) {
        return (
          e instanceof Ae ||
          (!!e &&
            'string' === typeof e.authority &&
            'string' === typeof e.fragment &&
            'string' === typeof e.path &&
            'string' === typeof e.query &&
            'string' === typeof e.scheme &&
            'function' === typeof e.fsPath &&
            'function' === typeof e.with &&
            'function' === typeof e.toString)
        )
      }
      get fsPath() {
        return Te(this, !1)
      }
      with(e) {
        if (!e) return this
        let { scheme: t, authority: n, path: r, query: i, fragment: o } = e
        return (
          void 0 === t ? (t = this.scheme) : null === t && (t = _e),
          void 0 === n ? (n = this.authority) : null === n && (n = _e),
          void 0 === r ? (r = this.path) : null === r && (r = _e),
          void 0 === i ? (i = this.query) : null === i && (i = _e),
          void 0 === o ? (o = this.fragment) : null === o && (o = _e),
          t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment
            ? this
            : new xe(t, n, r, i, o)
        )
      }
      static parse(e, t = !1) {
        const n = we.exec(e)
        return n
          ? new xe(n[2] || _e, Pe(n[4] || _e), Pe(n[5] || _e), Pe(n[7] || _e), Pe(n[9] || _e), t)
          : new xe(_e, _e, _e, _e, _e)
      }
      static file(e) {
        let t = _e
        if ((b['d'] && (e = e.replace(/\\/g, Se)), e[0] === Se && e[1] === Se)) {
          const n = e.indexOf(Se, 2)
          ;-1 === n ? ((t = e.substring(2)), (e = Se)) : ((t = e.substring(2, n)), (e = e.substring(n) || Se))
        }
        return new xe('file', t, e, _e, _e)
      }
      static from(e) {
        return new xe(e.scheme, e.authority, e.path, e.query, e.fragment)
      }
      static joinPath(e, ...t) {
        if (!e.path) throw new Error('[UriError]: cannot call joinPaths on URI without path')
        let n
        return (
          (n = b['d'] && 'file' === e.scheme ? Ae.file(de.join(Te(e, !0), ...t)).path : me.join(e.path, ...t)),
          e.with({ path: n })
        )
      }
      toString(e = !1) {
        return Oe(this, e)
      }
      toJSON() {
        return this
      }
      static revive(e) {
        if (e) {
          if (e instanceof Ae) return e
          {
            const t = new xe(e)
            return (t._formatted = e.external), (t._fsPath = e._sep === Ee ? e.fsPath : null), t
          }
        }
        return e
      }
    }
    const Ee = b['d'] ? 1 : void 0
    class xe extends Ae {
      constructor() {
        super(...arguments), (this._formatted = null), (this._fsPath = null)
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = Te(this, !1)), this._fsPath
      }
      toString(e = !1) {
        return e ? Oe(this, !0) : (this._formatted || (this._formatted = Oe(this, !1)), this._formatted)
      }
      toJSON() {
        const e = { $mid: 1 }
        return (
          this._fsPath && ((e.fsPath = this._fsPath), (e._sep = Ee)),
          this._formatted && (e.external = this._formatted),
          this.path && (e.path = this.path),
          this.scheme && (e.scheme = this.scheme),
          this.authority && (e.authority = this.authority),
          this.query && (e.query = this.query),
          this.fragment && (e.fragment = this.fragment),
          e
        )
      }
    }
    const Ne = {
      [58]: '%3A',
      [47]: '%2F',
      [63]: '%3F',
      [35]: '%23',
      [91]: '%5B',
      [93]: '%5D',
      [64]: '%40',
      [33]: '%21',
      [36]: '%24',
      [38]: '%26',
      [39]: '%27',
      [40]: '%28',
      [41]: '%29',
      [42]: '%2A',
      [43]: '%2B',
      [44]: '%2C',
      [59]: '%3B',
      [61]: '%3D',
      [32]: '%20',
    }
    function Le(e, t) {
      let n,
        r = -1
      for (let i = 0; i < e.length; i++) {
        const o = e.charCodeAt(i)
        if (
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          45 === o ||
          46 === o ||
          95 === o ||
          126 === o ||
          (t && 47 === o)
        )
          -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)), void 0 !== n && (n += e.charAt(i))
        else {
          void 0 === n && (n = e.substr(0, i))
          const t = Ne[o]
          void 0 !== t
            ? (-1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)), (n += t))
            : -1 === r && (r = i)
        }
      }
      return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e
    }
    function ke(e) {
      let t
      for (let n = 0; n < e.length; n++) {
        const r = e.charCodeAt(n)
        35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), (t += Ne[r])) : void 0 !== t && (t += e[n])
      }
      return void 0 !== t ? t : e
    }
    function Te(e, t) {
      let n
      return (
        (n =
          e.authority && e.path.length > 1 && 'file' === e.scheme
            ? `//${e.authority}${e.path}`
            : 47 === e.path.charCodeAt(0) &&
              ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
              58 === e.path.charCodeAt(2)
            ? t
              ? e.path.substr(1)
              : e.path[1].toLowerCase() + e.path.substr(2)
            : e.path),
        b['d'] && (n = n.replace(/\//g, '\\')),
        n
      )
    }
    function Oe(e, t) {
      const n = t ? ke : Le
      let r = '',
        { scheme: i, authority: o, path: s, query: a, fragment: u } = e
      if ((i && ((r += i), (r += ':')), (o || 'file' === i) && ((r += Se), (r += Se)), o)) {
        let e = o.indexOf('@')
        if (-1 !== e) {
          const t = o.substr(0, e)
          ;(o = o.substr(e + 1)),
            (e = t.indexOf(':')),
            -1 === e ? (r += n(t, !1)) : ((r += n(t.substr(0, e), !1)), (r += ':'), (r += n(t.substr(e + 1), !1))),
            (r += '@')
        }
        ;(o = o.toLowerCase()),
          (e = o.indexOf(':')),
          -1 === e ? (r += n(o, !1)) : ((r += n(o.substr(0, e), !1)), (r += o.substr(e)))
      }
      if (s) {
        if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2)) {
          const e = s.charCodeAt(1)
          e >= 65 && e <= 90 && (s = `/${String.fromCharCode(e + 32)}:${s.substr(3)}`)
        } else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
          const e = s.charCodeAt(0)
          e >= 65 && e <= 90 && (s = `${String.fromCharCode(e + 32)}:${s.substr(2)}`)
        }
        r += n(s, !0)
      }
      return a && ((r += '?'), (r += n(a, !1))), u && ((r += '#'), (r += t ? u : Le(u, !1))), r
    }
    function Ie(e) {
      try {
        return decodeURIComponent(e)
      } catch (t) {
        return e.length > 3 ? e.substr(0, 3) + Ie(e.substr(3)) : e
      }
    }
    const Me = /(%[0-9A-Za-z][0-9A-Za-z])+/g
    function Pe(e) {
      return e.match(Me) ? e.replace(Me, e => Ie(e)) : e
    }
    class Re {
      constructor(e, t) {
        ;(this.lineNumber = e), (this.column = t)
      }
      with(e = this.lineNumber, t = this.column) {
        return e === this.lineNumber && t === this.column ? this : new Re(e, t)
      }
      delta(e = 0, t = 0) {
        return this.with(this.lineNumber + e, this.column + t)
      }
      equals(e) {
        return Re.equals(this, e)
      }
      static equals(e, t) {
        return (!e && !t) || (!!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column)
      }
      isBefore(e) {
        return Re.isBefore(this, e)
      }
      static isBefore(e, t) {
        return e.lineNumber < t.lineNumber || (!(t.lineNumber < e.lineNumber) && e.column < t.column)
      }
      isBeforeOrEqual(e) {
        return Re.isBeforeOrEqual(this, e)
      }
      static isBeforeOrEqual(e, t) {
        return e.lineNumber < t.lineNumber || (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
      }
      static compare(e, t) {
        let n = 0 | e.lineNumber,
          r = 0 | t.lineNumber
        if (n === r) {
          let n = 0 | e.column,
            r = 0 | t.column
          return n - r
        }
        return n - r
      }
      clone() {
        return new Re(this.lineNumber, this.column)
      }
      toString() {
        return '(' + this.lineNumber + ',' + this.column + ')'
      }
      static lift(e) {
        return new Re(e.lineNumber, e.column)
      }
      static isIPosition(e) {
        return e && 'number' === typeof e.lineNumber && 'number' === typeof e.column
      }
    }
    class De {
      constructor(e, t, n, r) {
        e > n || (e === n && t > r)
          ? ((this.startLineNumber = n), (this.startColumn = r), (this.endLineNumber = e), (this.endColumn = t))
          : ((this.startLineNumber = e), (this.startColumn = t), (this.endLineNumber = n), (this.endColumn = r))
      }
      isEmpty() {
        return De.isEmpty(this)
      }
      static isEmpty(e) {
        return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn
      }
      containsPosition(e) {
        return De.containsPosition(this, e)
      }
      static containsPosition(e, t) {
        return (
          !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) &&
          !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) &&
          !(t.lineNumber === e.endLineNumber && t.column > e.endColumn)
        )
      }
      containsRange(e) {
        return De.containsRange(this, e)
      }
      static containsRange(e, t) {
        return (
          !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) &&
          !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) &&
          !(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) &&
          !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn)
        )
      }
      strictContainsRange(e) {
        return De.strictContainsRange(this, e)
      }
      static strictContainsRange(e, t) {
        return (
          !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) &&
          !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) &&
          !(t.startLineNumber === e.startLineNumber && t.startColumn <= e.startColumn) &&
          !(t.endLineNumber === e.endLineNumber && t.endColumn >= e.endColumn)
        )
      }
      plusRange(e) {
        return De.plusRange(this, e)
      }
      static plusRange(e, t) {
        let n, r, i, o
        return (
          t.startLineNumber < e.startLineNumber
            ? ((n = t.startLineNumber), (r = t.startColumn))
            : t.startLineNumber === e.startLineNumber
            ? ((n = t.startLineNumber), (r = Math.min(t.startColumn, e.startColumn)))
            : ((n = e.startLineNumber), (r = e.startColumn)),
          t.endLineNumber > e.endLineNumber
            ? ((i = t.endLineNumber), (o = t.endColumn))
            : t.endLineNumber === e.endLineNumber
            ? ((i = t.endLineNumber), (o = Math.max(t.endColumn, e.endColumn)))
            : ((i = e.endLineNumber), (o = e.endColumn)),
          new De(n, r, i, o)
        )
      }
      intersectRanges(e) {
        return De.intersectRanges(this, e)
      }
      static intersectRanges(e, t) {
        let n = e.startLineNumber,
          r = e.startColumn,
          i = e.endLineNumber,
          o = e.endColumn,
          s = t.startLineNumber,
          a = t.startColumn,
          u = t.endLineNumber,
          l = t.endColumn
        return (
          n < s ? ((n = s), (r = a)) : n === s && (r = Math.max(r, a)),
          i > u ? ((i = u), (o = l)) : i === u && (o = Math.min(o, l)),
          n > i || (n === i && r > o) ? null : new De(n, r, i, o)
        )
      }
      equalsRange(e) {
        return De.equalsRange(this, e)
      }
      static equalsRange(e, t) {
        return (
          !!e &&
          !!t &&
          e.startLineNumber === t.startLineNumber &&
          e.startColumn === t.startColumn &&
          e.endLineNumber === t.endLineNumber &&
          e.endColumn === t.endColumn
        )
      }
      getEndPosition() {
        return De.getEndPosition(this)
      }
      static getEndPosition(e) {
        return new Re(e.endLineNumber, e.endColumn)
      }
      getStartPosition() {
        return De.getStartPosition(this)
      }
      static getStartPosition(e) {
        return new Re(e.startLineNumber, e.startColumn)
      }
      toString() {
        return (
          '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']'
        )
      }
      setEndPosition(e, t) {
        return new De(this.startLineNumber, this.startColumn, e, t)
      }
      setStartPosition(e, t) {
        return new De(e, t, this.endLineNumber, this.endColumn)
      }
      collapseToStart() {
        return De.collapseToStart(this)
      }
      static collapseToStart(e) {
        return new De(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn)
      }
      static fromPositions(e, t = e) {
        return new De(e.lineNumber, e.column, t.lineNumber, t.column)
      }
      static lift(e) {
        return e ? new De(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null
      }
      static isIRange(e) {
        return (
          e &&
          'number' === typeof e.startLineNumber &&
          'number' === typeof e.startColumn &&
          'number' === typeof e.endLineNumber &&
          'number' === typeof e.endColumn
        )
      }
      static areIntersectingOrTouching(e, t) {
        return (
          !(
            e.endLineNumber < t.startLineNumber ||
            (e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn)
          ) &&
          !(
            t.endLineNumber < e.startLineNumber ||
            (t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn)
          )
        )
      }
      static areIntersecting(e, t) {
        return (
          !(
            e.endLineNumber < t.startLineNumber ||
            (e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn)
          ) &&
          !(
            t.endLineNumber < e.startLineNumber ||
            (t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn)
          )
        )
      }
      static compareRangesUsingStarts(e, t) {
        if (e && t) {
          const n = 0 | e.startLineNumber,
            r = 0 | t.startLineNumber
          if (n === r) {
            const n = 0 | e.startColumn,
              r = 0 | t.startColumn
            if (n === r) {
              const n = 0 | e.endLineNumber,
                r = 0 | t.endLineNumber
              if (n === r) {
                const n = 0 | e.endColumn,
                  r = 0 | t.endColumn
                return n - r
              }
              return n - r
            }
            return n - r
          }
          return n - r
        }
        const n = e ? 1 : 0,
          r = t ? 1 : 0
        return n - r
      }
      static compareRangesUsingEnds(e, t) {
        return e.endLineNumber === t.endLineNumber
          ? e.endColumn === t.endColumn
            ? e.startLineNumber === t.startLineNumber
              ? e.startColumn - t.startColumn
              : e.startLineNumber - t.startLineNumber
            : e.endColumn - t.endColumn
          : e.endLineNumber - t.endLineNumber
      }
      static spansMultipleLines(e) {
        return e.endLineNumber > e.startLineNumber
      }
    }
    const Fe = 3
    function je(e, t, n, r) {
      const i = new z(e, t, n)
      return i.ComputeDiff(r)
    }
    class Ue {
      constructor(e) {
        const t = [],
          n = []
        for (let r = 0, i = e.length; r < i; r++) (t[r] = Ke(e[r], 1)), (n[r] = He(e[r], 1))
        ;(this.lines = e), (this._startColumns = t), (this._endColumns = n)
      }
      getElements() {
        const e = []
        for (let t = 0, n = this.lines.length; t < n; t++)
          e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1)
        return e
      }
      getStartLineNumber(e) {
        return e + 1
      }
      getEndLineNumber(e) {
        return e + 1
      }
      createCharSequence(e, t, n) {
        const r = [],
          i = [],
          o = []
        let s = 0
        for (let a = t; a <= n; a++) {
          const t = this.lines[a],
            n = e ? this._startColumns[a] : 1,
            u = e ? this._endColumns[a] : t.length + 1
          for (let e = n; e < u; e++) (r[s] = t.charCodeAt(e - 1)), (i[s] = a + 1), (o[s] = e), s++
        }
        return new Ve(r, i, o)
      }
    }
    class Ve {
      constructor(e, t, n) {
        ;(this._charCodes = e), (this._lineNumbers = t), (this._columns = n)
      }
      getElements() {
        return this._charCodes
      }
      getStartLineNumber(e) {
        return this._lineNumbers[e]
      }
      getStartColumn(e) {
        return this._columns[e]
      }
      getEndLineNumber(e) {
        return this._lineNumbers[e]
      }
      getEndColumn(e) {
        return this._columns[e] + 1
      }
    }
    class $e {
      constructor(e, t, n, r, i, o, s, a) {
        ;(this.originalStartLineNumber = e),
          (this.originalStartColumn = t),
          (this.originalEndLineNumber = n),
          (this.originalEndColumn = r),
          (this.modifiedStartLineNumber = i),
          (this.modifiedStartColumn = o),
          (this.modifiedEndLineNumber = s),
          (this.modifiedEndColumn = a)
      }
      static createFromDiffChange(e, t, n) {
        let r, i, o, s, a, u, l, c
        return (
          0 === e.originalLength
            ? ((r = 0), (i = 0), (o = 0), (s = 0))
            : ((r = t.getStartLineNumber(e.originalStart)),
              (i = t.getStartColumn(e.originalStart)),
              (o = t.getEndLineNumber(e.originalStart + e.originalLength - 1)),
              (s = t.getEndColumn(e.originalStart + e.originalLength - 1))),
          0 === e.modifiedLength
            ? ((a = 0), (u = 0), (l = 0), (c = 0))
            : ((a = n.getStartLineNumber(e.modifiedStart)),
              (u = n.getStartColumn(e.modifiedStart)),
              (l = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1)),
              (c = n.getEndColumn(e.modifiedStart + e.modifiedLength - 1))),
          new $e(r, i, o, s, a, u, l, c)
        )
      }
    }
    function We(e) {
      if (e.length <= 1) return e
      const t = [e[0]]
      let n = t[0]
      for (let r = 1, i = e.length; r < i; r++) {
        const i = e[r],
          o = i.originalStart - (n.originalStart + n.originalLength),
          s = i.modifiedStart - (n.modifiedStart + n.modifiedLength),
          a = Math.min(o, s)
        a < Fe
          ? ((n.originalLength = i.originalStart + i.originalLength - n.originalStart),
            (n.modifiedLength = i.modifiedStart + i.modifiedLength - n.modifiedStart))
          : (t.push(i), (n = i))
      }
      return t
    }
    class qe {
      constructor(e, t, n, r, i) {
        ;(this.originalStartLineNumber = e),
          (this.originalEndLineNumber = t),
          (this.modifiedStartLineNumber = n),
          (this.modifiedEndLineNumber = r),
          (this.charChanges = i)
      }
      static createFromDiffResult(e, t, n, r, i, o, s) {
        let a, u, l, c, h
        if (
          (0 === t.originalLength
            ? ((a = n.getStartLineNumber(t.originalStart) - 1), (u = 0))
            : ((a = n.getStartLineNumber(t.originalStart)),
              (u = n.getEndLineNumber(t.originalStart + t.originalLength - 1))),
          0 === t.modifiedLength
            ? ((l = r.getStartLineNumber(t.modifiedStart) - 1), (c = 0))
            : ((l = r.getStartLineNumber(t.modifiedStart)),
              (c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1))),
          o && t.originalLength > 0 && t.originalLength < 20 && t.modifiedLength > 0 && t.modifiedLength < 20 && i())
        ) {
          const o = n.createCharSequence(e, t.originalStart, t.originalStart + t.originalLength - 1),
            a = r.createCharSequence(e, t.modifiedStart, t.modifiedStart + t.modifiedLength - 1)
          let u = je(o, a, i, !0).changes
          s && (u = We(u)), (h = [])
          for (let e = 0, t = u.length; e < t; e++) h.push($e.createFromDiffChange(u[e], o, a))
        }
        return new qe(a, u, l, c, h)
      }
    }
    class Be {
      constructor(e, t, n) {
        ;(this.shouldComputeCharChanges = n.shouldComputeCharChanges),
          (this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges),
          (this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace),
          (this.shouldMakePrettyDiff = n.shouldMakePrettyDiff),
          (this.originalLines = e),
          (this.modifiedLines = t),
          (this.original = new Ue(e)),
          (this.modified = new Ue(t)),
          (this.continueLineDiff = Ye(n.maxComputationTime)),
          (this.continueCharDiff = Ye(0 === n.maxComputationTime ? 0 : Math.min(n.maxComputationTime, 5e3)))
      }
      computeDiff() {
        if (1 === this.original.lines.length && 0 === this.original.lines[0].length)
          return {
            quitEarly: !1,
            changes: [
              {
                originalStartLineNumber: 1,
                originalEndLineNumber: 1,
                modifiedStartLineNumber: 1,
                modifiedEndLineNumber: this.modified.lines.length,
                charChanges: [
                  {
                    modifiedEndColumn: 0,
                    modifiedEndLineNumber: 0,
                    modifiedStartColumn: 0,
                    modifiedStartLineNumber: 0,
                    originalEndColumn: 0,
                    originalEndLineNumber: 0,
                    originalStartColumn: 0,
                    originalStartLineNumber: 0,
                  },
                ],
              },
            ],
          }
        if (1 === this.modified.lines.length && 0 === this.modified.lines[0].length)
          return {
            quitEarly: !1,
            changes: [
              {
                originalStartLineNumber: 1,
                originalEndLineNumber: this.original.lines.length,
                modifiedStartLineNumber: 1,
                modifiedEndLineNumber: 1,
                charChanges: [
                  {
                    modifiedEndColumn: 0,
                    modifiedEndLineNumber: 0,
                    modifiedStartColumn: 0,
                    modifiedStartLineNumber: 0,
                    originalEndColumn: 0,
                    originalEndLineNumber: 0,
                    originalStartColumn: 0,
                    originalStartLineNumber: 0,
                  },
                ],
              },
            ],
          }
        const e = je(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff),
          t = e.changes,
          n = e.quitEarly
        if (this.shouldIgnoreTrimWhitespace) {
          const e = []
          for (let n = 0, r = t.length; n < r; n++)
            e.push(
              qe.createFromDiffResult(
                this.shouldIgnoreTrimWhitespace,
                t[n],
                this.original,
                this.modified,
                this.continueCharDiff,
                this.shouldComputeCharChanges,
                this.shouldPostProcessCharChanges,
              ),
            )
          return { quitEarly: n, changes: e }
        }
        const r = []
        let i = 0,
          o = 0
        for (let s = -1, a = t.length; s < a; s++) {
          const e = s + 1 < a ? t[s + 1] : null,
            n = e ? e.originalStart : this.originalLines.length,
            u = e ? e.modifiedStart : this.modifiedLines.length
          while (i < n && o < u) {
            const e = this.originalLines[i],
              t = this.modifiedLines[o]
            if (e !== t) {
              {
                let n = Ke(e, 1),
                  s = Ke(t, 1)
                while (n > 1 && s > 1) {
                  const r = e.charCodeAt(n - 2),
                    i = t.charCodeAt(s - 2)
                  if (r !== i) break
                  n--, s--
                }
                ;(n > 1 || s > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, n, o + 1, 1, s)
              }
              {
                let n = He(e, 1),
                  s = He(t, 1)
                const a = e.length + 1,
                  u = t.length + 1
                while (n < a && s < u) {
                  const t = e.charCodeAt(n - 1),
                    r = e.charCodeAt(s - 1)
                  if (t !== r) break
                  n++, s++
                }
                ;(n < a || s < u) && this._pushTrimWhitespaceCharChange(r, i + 1, n, a, o + 1, s, u)
              }
            }
            i++, o++
          }
          e &&
            (r.push(
              qe.createFromDiffResult(
                this.shouldIgnoreTrimWhitespace,
                e,
                this.original,
                this.modified,
                this.continueCharDiff,
                this.shouldComputeCharChanges,
                this.shouldPostProcessCharChanges,
              ),
            ),
            (i += e.originalLength),
            (o += e.modifiedLength))
        }
        return { quitEarly: n, changes: r }
      }
      _pushTrimWhitespaceCharChange(e, t, n, r, i, o, s) {
        if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s)) return
        let a
        this.shouldComputeCharChanges && (a = [new $e(t, n, t, r, i, o, i, s)]), e.push(new qe(t, t, i, i, a))
      }
      _mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s) {
        const a = e.length
        if (0 === a) return !1
        const u = e[a - 1]
        return (
          0 !== u.originalEndLineNumber &&
          0 !== u.modifiedEndLineNumber &&
          u.originalEndLineNumber + 1 === t &&
          u.modifiedEndLineNumber + 1 === i &&
          ((u.originalEndLineNumber = t),
          (u.modifiedEndLineNumber = i),
          this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new $e(t, n, t, r, i, o, i, s)),
          !0)
        )
      }
    }
    function Ke(e, t) {
      const n = T(e)
      return -1 === n ? t : n + 1
    }
    function He(e, t) {
      const n = O(e)
      return -1 === n ? t : n + 2
    }
    function Ye(e) {
      if (0 === e) return () => !0
      const t = Date.now()
      return () => Date.now() - t < e
    }
    function Ge(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e
    }
    function ze(e) {
      return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e
    }
    class Je {
      constructor(e, t) {
        ;(this.index = e), (this.remainder = t)
      }
    }
    class Qe {
      constructor(e) {
        ;(this.values = e),
          (this.prefixSum = new Uint32Array(e.length)),
          (this.prefixSumValidIndex = new Int32Array(1)),
          (this.prefixSumValidIndex[0] = -1)
      }
      insertValues(e, t) {
        e = ze(e)
        const n = this.values,
          r = this.prefixSum,
          i = t.length
        return (
          0 !== i &&
          ((this.values = new Uint32Array(n.length + i)),
          this.values.set(n.subarray(0, e), 0),
          this.values.set(n.subarray(e), e + i),
          this.values.set(t, e),
          e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1),
          (this.prefixSum = new Uint32Array(this.values.length)),
          this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)),
          !0)
        )
      }
      changeValue(e, t) {
        return (
          (e = ze(e)),
          (t = ze(t)),
          this.values[e] !== t &&
            ((this.values[e] = t), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0)
        )
      }
      removeValues(e, t) {
        ;(e = ze(e)), (t = ze(t))
        const n = this.values,
          r = this.prefixSum
        if (e >= n.length) return !1
        let i = n.length - e
        return (
          t >= i && (t = i),
          0 !== t &&
            ((this.values = new Uint32Array(n.length - t)),
            this.values.set(n.subarray(0, e), 0),
            this.values.set(n.subarray(e + t), e),
            (this.prefixSum = new Uint32Array(this.values.length)),
            e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)),
            !0)
        )
      }
      getTotalValue() {
        return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1)
      }
      getAccumulatedValue(e) {
        return e < 0 ? 0 : ((e = ze(e)), this._getAccumulatedValue(e))
      }
      _getAccumulatedValue(e) {
        if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e]
        let t = this.prefixSumValidIndex[0] + 1
        0 === t && ((this.prefixSum[0] = this.values[0]), t++), e >= this.values.length && (e = this.values.length - 1)
        for (let n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n]
        return (this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e)), this.prefixSum[e]
      }
      getIndexOf(e) {
        ;(e = Math.floor(e)), this.getTotalValue()
        let t = 0,
          n = this.values.length - 1,
          r = 0,
          i = 0,
          o = 0
        while (t <= n)
          if (((r = (t + (n - t) / 2) | 0), (i = this.prefixSum[r]), (o = i - this.values[r]), e < o)) n = r - 1
          else {
            if (!(e >= i)) break
            t = r + 1
          }
        return new Je(r, e - o)
      }
    }
    class Xe {
      constructor(e, t, n, r) {
        ;(this._uri = e),
          (this._lines = t),
          (this._eol = n),
          (this._versionId = r),
          (this._lineStarts = null),
          (this._cachedTextValue = null)
      }
      dispose() {
        this._lines.length = 0
      }
      getText() {
        return (
          null === this._cachedTextValue && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue
        )
      }
      onEvents(e) {
        e.eol && e.eol !== this._eol && ((this._eol = e.eol), (this._lineStarts = null))
        const t = e.changes
        for (const n of t)
          this._acceptDeleteRange(n.range),
            this._acceptInsertText(new Re(n.range.startLineNumber, n.range.startColumn), n.text)
        ;(this._versionId = e.versionId), (this._cachedTextValue = null)
      }
      _ensureLineStarts() {
        if (!this._lineStarts) {
          const e = this._eol.length,
            t = this._lines.length,
            n = new Uint32Array(t)
          for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e
          this._lineStarts = new Qe(n)
        }
      }
      _setLineText(e, t) {
        ;(this._lines[e] = t),
          this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length)
      }
      _acceptDeleteRange(e) {
        if (e.startLineNumber !== e.endLineNumber)
          this._setLineText(
            e.startLineNumber - 1,
            this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
              this._lines[e.endLineNumber - 1].substring(e.endColumn - 1),
          ),
            this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber),
            this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber)
        else {
          if (e.startColumn === e.endColumn) return
          this._setLineText(
            e.startLineNumber - 1,
            this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
              this._lines[e.startLineNumber - 1].substring(e.endColumn - 1),
          )
        }
      }
      _acceptInsertText(e, t) {
        if (0 === t.length) return
        let n = t.split(/\r\n|\r|\n/)
        if (1 === n.length)
          return void this._setLineText(
            e.lineNumber - 1,
            this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
              n[0] +
              this._lines[e.lineNumber - 1].substring(e.column - 1),
          )
        ;(n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1)),
          this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0])
        let r = new Uint32Array(n.length - 1)
        for (let i = 1; i < n.length; i++)
          this._lines.splice(e.lineNumber + i - 1, 0, n[i]), (r[i - 1] = n[i].length + this._eol.length)
        this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r)
      }
    }
    const Ze = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?'
    function et(e = '') {
      let t = '(-?\\d*\\.\\d\\w*)|([^'
      for (const n of Ze) e.indexOf(n) >= 0 || (t += '\\' + n)
      return (t += '\\s]+)'), new RegExp(t, 'g')
    }
    const tt = et()
    function nt(e) {
      let t = tt
      if (e && e instanceof RegExp)
        if (e.global) t = e
        else {
          let n = 'g'
          e.ignoreCase && (n += 'i'), e.multiline && (n += 'm'), e.unicode && (n += 'u'), (t = new RegExp(e.source, n))
        }
      return (t.lastIndex = 0), t
    }
    const rt = { maxLen: 1e3, windowSize: 15, timeBudget: 150 }
    function it(e, t, n, r, i = rt) {
      if (n.length > i.maxLen) {
        let o = e - i.maxLen / 2
        return o < 0 ? ((r += e), (o = 0)) : (r += o), (n = n.substring(o, e + i.maxLen / 2)), it(e, t, n, r, i)
      }
      Date.now()
      const o = e - 1 - r
      let s = -1,
        a = null
      for (let u = 1; ; u++) {
        Date.now(), i.timeBudget
        const e = o - i.windowSize * u
        t.lastIndex = Math.max(0, e)
        const r = ot(t, n, o, s)
        if (!r && a) break
        if (((a = r), e <= 0)) break
        s = e
      }
      if (a) {
        let e = { word: a[0], startColumn: r + 1 + a.index, endColumn: r + 1 + a.index + a[0].length }
        return (t.lastIndex = 0), e
      }
      return null
    }
    function ot(e, t, n, r) {
      let i
      while ((i = e.exec(t))) {
        const t = i.index || 0
        if (t <= n && e.lastIndex >= n) return i
        if (r > 0 && t > r) return null
      }
      return null
    }
    class st {
      constructor(e) {
        let t = Ge(e)
        ;(this._defaultValue = t), (this._asciiMap = st._createAsciiMap(t)), (this._map = new Map())
      }
      static _createAsciiMap(e) {
        let t = new Uint8Array(256)
        for (let n = 0; n < 256; n++) t[n] = e
        return t
      }
      set(e, t) {
        let n = Ge(t)
        e >= 0 && e < 256 ? (this._asciiMap[e] = n) : this._map.set(e, n)
      }
      get(e) {
        return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue
      }
    }
    class at {
      constructor(e, t, n) {
        const r = new Uint8Array(e * t)
        for (let i = 0, o = e * t; i < o; i++) r[i] = n
        ;(this._data = r), (this.rows = e), (this.cols = t)
      }
      get(e, t) {
        return this._data[e * this.cols + t]
      }
      set(e, t, n) {
        this._data[e * this.cols + t] = n
      }
    }
    class ut {
      constructor(e) {
        let t = 0,
          n = 0
        for (let i = 0, o = e.length; i < o; i++) {
          let [r, o, s] = e[i]
          o > t && (t = o), r > n && (n = r), s > n && (n = s)
        }
        t++, n++
        let r = new at(n, t, 0)
        for (let i = 0, o = e.length; i < o; i++) {
          let [t, n, o] = e[i]
          r.set(t, n, o)
        }
        ;(this._states = r), (this._maxCharCode = t)
      }
      nextState(e, t) {
        return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t)
      }
    }
    let lt = null
    function ct() {
      return (
        null === lt &&
          (lt = new ut([
            [1, 104, 2],
            [1, 72, 2],
            [1, 102, 6],
            [1, 70, 6],
            [2, 116, 3],
            [2, 84, 3],
            [3, 116, 4],
            [3, 84, 4],
            [4, 112, 5],
            [4, 80, 5],
            [5, 115, 9],
            [5, 83, 9],
            [5, 58, 10],
            [6, 105, 7],
            [6, 73, 7],
            [7, 108, 8],
            [7, 76, 8],
            [8, 101, 9],
            [8, 69, 9],
            [9, 58, 10],
            [10, 47, 11],
            [11, 47, 12],
          ])),
        lt
      )
    }
    let ht = null
    function ft() {
      if (null === ht) {
        ht = new st(0)
        const e =
          ' \t<>\'"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u201c\u3008\u300a\u300c\u300e\u3010\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u3011\u300f\u300d\u300b\u3009\u201d\u2019\uff40\uff5e\u2026'
        for (let n = 0; n < e.length; n++) ht.set(e.charCodeAt(n), 1)
        const t = '.,;'
        for (let n = 0; n < t.length; n++) ht.set(t.charCodeAt(n), 2)
      }
      return ht
    }
    class dt {
      static _createLink(e, t, n, r, i) {
        let o = i - 1
        do {
          const n = t.charCodeAt(o),
            r = e.get(n)
          if (2 !== r) break
          o--
        } while (o > r)
        if (r > 0) {
          const e = t.charCodeAt(r - 1),
            n = t.charCodeAt(o)
          ;((40 === e && 41 === n) || (91 === e && 93 === n) || (123 === e && 125 === n)) && o--
        }
        return {
          range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 },
          url: t.substring(r, o + 1),
        }
      }
      static computeLinks(e, t = ct()) {
        const n = ft()
        let r = []
        for (let i = 1, o = e.getLineCount(); i <= o; i++) {
          const o = e.getLineContent(i),
            s = o.length
          let a = 0,
            u = 0,
            l = 0,
            c = 1,
            h = !1,
            f = !1,
            d = !1,
            m = !1
          while (a < s) {
            let e = !1
            const s = o.charCodeAt(a)
            if (13 === c) {
              let t
              switch (s) {
                case 40:
                  ;(h = !0), (t = 0)
                  break
                case 41:
                  t = h ? 0 : 1
                  break
                case 91:
                  ;(d = !0), (f = !0), (t = 0)
                  break
                case 93:
                  ;(d = !1), (t = f ? 0 : 1)
                  break
                case 123:
                  ;(m = !0), (t = 0)
                  break
                case 125:
                  t = m ? 0 : 1
                  break
                case 39:
                  t = 34 === l || 96 === l ? 0 : 1
                  break
                case 34:
                  t = 39 === l || 96 === l ? 0 : 1
                  break
                case 96:
                  t = 39 === l || 34 === l ? 0 : 1
                  break
                case 42:
                  t = 42 === l ? 1 : 0
                  break
                case 124:
                  t = 124 === l ? 1 : 0
                  break
                case 32:
                  t = d ? 0 : 1
                  break
                default:
                  t = n.get(s)
              }
              1 === t && (r.push(dt._createLink(n, o, i, u, a)), (e = !0))
            } else if (12 === c) {
              let t
              91 === s ? ((f = !0), (t = 0)) : (t = n.get(s)), 1 === t ? (e = !0) : (c = 13)
            } else (c = t.nextState(c, s)), 0 === c && (e = !0)
            e && ((c = 1), (h = !1), (f = !1), (m = !1), (u = a + 1), (l = s)), a++
          }
          13 === c && r.push(dt._createLink(n, o, i, u, s))
        }
        return r
      }
    }
    function mt(e) {
      return e && 'function' === typeof e.getLineCount && 'function' === typeof e.getLineContent
        ? dt.computeLinks(e)
        : []
    }
    class gt {
      constructor() {
        this._defaultValueSet = [
          ['true', 'false'],
          ['True', 'False'],
          ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
          ['public', 'protected', 'private'],
        ]
      }
      navigateValueSet(e, t, n, r, i) {
        if (e && t) {
          let n = this.doNavigateValueSet(t, i)
          if (n) return { range: e, value: n }
        }
        if (n && r) {
          let e = this.doNavigateValueSet(r, i)
          if (e) return { range: n, value: e }
        }
        return null
      }
      doNavigateValueSet(e, t) {
        let n = this.numberReplace(e, t)
        return null !== n ? n : this.textReplace(e, t)
      }
      numberReplace(e, t) {
        let n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1)),
          r = Number(e),
          i = parseFloat(e)
        return isNaN(r) || isNaN(i) || r !== i
          ? null
          : 0 !== r || t
          ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
          : null
      }
      textReplace(e, t) {
        return this.valueSetsReplace(this._defaultValueSet, e, t)
      }
      valueSetsReplace(e, t, n) {
        let r = null
        for (let i = 0, o = e.length; null === r && i < o; i++) r = this.valueSetReplace(e[i], t, n)
        return r
      }
      valueSetReplace(e, t, n) {
        let r = e.indexOf(t)
        return r >= 0 ? ((r += n ? 1 : -1), r < 0 ? (r = e.length - 1) : (r %= e.length), e[r]) : null
      }
    }
    gt.INSTANCE = new gt()
    class pt {
      constructor(e) {
        ;(this.element = e), (this.next = pt.Undefined), (this.prev = pt.Undefined)
      }
    }
    pt.Undefined = new pt(void 0)
    class vt {
      constructor() {
        ;(this._first = pt.Undefined), (this._last = pt.Undefined), (this._size = 0)
      }
      get size() {
        return this._size
      }
      isEmpty() {
        return this._first === pt.Undefined
      }
      clear() {
        ;(this._first = pt.Undefined), (this._last = pt.Undefined), (this._size = 0)
      }
      unshift(e) {
        return this._insert(e, !1)
      }
      push(e) {
        return this._insert(e, !0)
      }
      _insert(e, t) {
        const n = new pt(e)
        if (this._first === pt.Undefined) (this._first = n), (this._last = n)
        else if (t) {
          const e = this._last
          ;(this._last = n), (n.prev = e), (e.next = n)
        } else {
          const e = this._first
          ;(this._first = n), (n.next = e), (e.prev = n)
        }
        this._size += 1
        let r = !1
        return () => {
          r || ((r = !0), this._remove(n))
        }
      }
      shift() {
        if (this._first !== pt.Undefined) {
          const e = this._first.element
          return this._remove(this._first), e
        }
      }
      pop() {
        if (this._last !== pt.Undefined) {
          const e = this._last.element
          return this._remove(this._last), e
        }
      }
      _remove(e) {
        if (e.prev !== pt.Undefined && e.next !== pt.Undefined) {
          const t = e.prev
          ;(t.next = e.next), (e.next.prev = t)
        } else
          e.prev === pt.Undefined && e.next === pt.Undefined
            ? ((this._first = pt.Undefined), (this._last = pt.Undefined))
            : e.next === pt.Undefined
            ? ((this._last = this._last.prev), (this._last.next = pt.Undefined))
            : e.prev === pt.Undefined && ((this._first = this._first.next), (this._first.prev = pt.Undefined))
        this._size -= 1
      }
      *[Symbol.iterator]() {
        let e = this._first
        while (e !== pt.Undefined) yield e.element, (e = e.next)
      }
      toArray() {
        const e = []
        for (let t = this._first; t !== pt.Undefined; t = t.next) e.push(t.element)
        return e
      }
    }
    var yt
    ;(function(e) {
      function t(e) {
        return (t, n = null, r) => {
          let i,
            o = !1
          return (
            (i = e(
              e => {
                if (!o) return i ? i.dispose() : (o = !0), t.call(n, e)
              },
              null,
              r,
            )),
            o && i.dispose(),
            i
          )
        }
      }
      function n(e, t) {
        return u((n, r = null, i) => e(e => n.call(r, t(e)), null, i))
      }
      function r(e, t) {
        return u((n, r = null, i) =>
          e(
            e => {
              t(e), n.call(r, e)
            },
            null,
            i,
          ),
        )
      }
      function i(e, t) {
        return u((n, r = null, i) => e(e => t(e) && n.call(r, e), null, i))
      }
      function o(e) {
        return e
      }
      function s(...e) {
        return (t, n = null, r) => p(...e.map(e => e(e => t.call(n, e), null, r)))
      }
      function a(e, t, r) {
        let i = r
        return n(e, e => ((i = t(i, e)), i))
      }
      function u(e) {
        let t
        const n = new _t({
          onFirstListenerAdd() {
            t = e(n.fire, n)
          },
          onLastListenerRemove() {
            t.dispose()
          },
        })
        return n.event
      }
      function l(e, t, n = 100, r = !1, i) {
        let o,
          s,
          a,
          u = 0
        const l = new _t({
          leakWarningThreshold: i,
          onFirstListenerAdd() {
            o = e(e => {
              u++,
                (s = t(s, e)),
                r && !a && (l.fire(s), (s = void 0)),
                clearTimeout(a),
                (a = setTimeout(() => {
                  const e = s
                  ;(s = void 0), (a = void 0), (!r || u > 1) && l.fire(e), (u = 0)
                }, n))
            })
          },
          onLastListenerRemove() {
            o.dispose()
          },
        })
        return l.event
      }
      function c(e) {
        const r = new Date().getTime()
        return n(t(e), e => new Date().getTime() - r)
      }
      function h(e) {
        let t,
          n = !0
        return i(e, e => {
          const r = n || e !== t
          return (n = !1), (t = e), r
        })
      }
      function f(e, t = !1, n = []) {
        let r = n.slice(),
          i = e(e => {
            r ? r.push(e) : s.fire(e)
          })
        const o = () => {
            r && r.forEach(e => s.fire(e)), (r = null)
          },
          s = new _t({
            onFirstListenerAdd() {
              i || (i = e(e => s.fire(e)))
            },
            onFirstListenerDidAdd() {
              r && (t ? setTimeout(o) : o())
            },
            onLastListenerRemove() {
              i && i.dispose(), (i = null)
            },
          })
        return s.event
      }
      ;(e.None = () => y.None),
        (e.once = t),
        (e.map = n),
        (e.forEach = r),
        (e.filter = i),
        (e.signal = o),
        (e.any = s),
        (e.reduce = a),
        (e.snapshot = u),
        (e.debounce = l),
        (e.stopwatch = c),
        (e.latch = h),
        (e.buffer = f)
      class d {
        constructor(e) {
          this.event = e
        }
        map(e) {
          return new d(n(this.event, e))
        }
        forEach(e) {
          return new d(r(this.event, e))
        }
        filter(e) {
          return new d(i(this.event, e))
        }
        reduce(e, t) {
          return new d(a(this.event, e, t))
        }
        latch() {
          return new d(h(this.event))
        }
        debounce(e, t = 100, n = !1, r) {
          return new d(l(this.event, e, t, n, r))
        }
        on(e, t, n) {
          return this.event(e, t, n)
        }
        once(e, n, r) {
          return t(this.event)(e, n, r)
        }
      }
      function m(e) {
        return new d(e)
      }
      function g(e, t, n = e => e) {
        const r = (...e) => s.fire(n(...e)),
          i = () => e.on(t, r),
          o = () => e.removeListener(t, r),
          s = new _t({ onFirstListenerAdd: i, onLastListenerRemove: o })
        return s.event
      }
      function v(e, t, n = e => e) {
        const r = (...e) => s.fire(n(...e)),
          i = () => e.addEventListener(t, r),
          o = () => e.removeEventListener(t, r),
          s = new _t({ onFirstListenerAdd: i, onLastListenerRemove: o })
        return s.event
      }
      function b(e) {
        const t = new _t()
        let n = !1
        return (
          e
            .then(void 0, () => null)
            .then(() => {
              n ? t.fire(void 0) : setTimeout(() => t.fire(void 0), 0)
            }),
          (n = !0),
          t.event
        )
      }
      function C(e) {
        return new Promise(n => t(e)(n))
      }
      ;(e.chain = m), (e.fromNodeEventEmitter = g), (e.fromDOMEventEmitter = v), (e.fromPromise = b), (e.toPromise = C)
    })(yt || (yt = {}))
    let bt = -1
    class Ct {
      constructor(
        e,
        t = Math.random()
          .toString(18)
          .slice(2, 5),
      ) {
        ;(this.customThreshold = e), (this.name = t), (this._warnCountdown = 0)
      }
      dispose() {
        this._stacks && this._stacks.clear()
      }
      check(e) {
        let t = bt
        if (('number' === typeof this.customThreshold && (t = this.customThreshold), t <= 0 || e < t)) return
        this._stacks || (this._stacks = new Map())
        const n = new Error().stack
            .split('\n')
            .slice(3)
            .join('\n'),
          r = this._stacks.get(n) || 0
        if ((this._stacks.set(n, r + 1), (this._warnCountdown -= 1), this._warnCountdown <= 0)) {
          let n
          this._warnCountdown = 0.5 * t
          let r = 0
          for (const [e, t] of this._stacks) (!n || r < t) && ((n = e), (r = t))
          console.warn(
            `[${this.name}] potential listener LEAK detected, having ${e} listeners already. MOST frequent listener (${r}):`,
          ),
            console.warn(n)
        }
        return () => {
          const e = this._stacks.get(n) || 0
          this._stacks.set(n, e - 1)
        }
      }
    }
    class _t {
      constructor(e) {
        ;(this._disposed = !1),
          (this._options = e),
          (this._leakageMon = bt > 0 ? new Ct(this._options && this._options.leakWarningThreshold) : void 0)
      }
      get event() {
        return (
          this._event ||
            (this._event = (e, t, n) => {
              this._listeners || (this._listeners = new vt())
              const r = this._listeners.isEmpty()
              r && this._options && this._options.onFirstListenerAdd && this._options.onFirstListenerAdd(this)
              const i = this._listeners.push(t ? [e, t] : e)
              let o, s
              return (
                r && this._options && this._options.onFirstListenerDidAdd && this._options.onFirstListenerDidAdd(this),
                this._options && this._options.onListenerDidAdd && this._options.onListenerDidAdd(this, e, t),
                this._leakageMon && (o = this._leakageMon.check(this._listeners.size)),
                (s = {
                  dispose: () => {
                    if (
                      (o && o(),
                      (s.dispose = _t._noop),
                      !this._disposed && (i(), this._options && this._options.onLastListenerRemove))
                    ) {
                      const e = this._listeners && !this._listeners.isEmpty()
                      e || this._options.onLastListenerRemove(this)
                    }
                  },
                }),
                n instanceof v ? n.add(s) : Array.isArray(n) && n.push(s),
                s
              )
            }),
          this._event
        )
      }
      fire(e) {
        if (this._listeners) {
          this._deliveryQueue || (this._deliveryQueue = new vt())
          for (let t of this._listeners) this._deliveryQueue.push([t, e])
          while (this._deliveryQueue.size > 0) {
            const [e, n] = this._deliveryQueue.shift()
            try {
              'function' === typeof e ? e.call(void 0, n) : e[0].call(e[1], n)
            } catch (t) {
              o(t)
            }
          }
        }
      }
      dispose() {
        this._listeners && this._listeners.clear(),
          this._deliveryQueue && this._deliveryQueue.clear(),
          this._leakageMon && this._leakageMon.dispose(),
          (this._disposed = !0)
      }
    }
    _t._noop = function() {}
    const St = Object.freeze(function(e, t) {
      const n = setTimeout(e.bind(t), 0)
      return {
        dispose() {
          clearTimeout(n)
        },
      }
    })
    var wt
    ;(function(e) {
      function t(t) {
        return (
          t === e.None ||
          t === e.Cancelled ||
          t instanceof At ||
          (!(!t || 'object' !== typeof t) &&
            'boolean' === typeof t.isCancellationRequested &&
            'function' === typeof t.onCancellationRequested)
        )
      }
      ;(e.isCancellationToken = t),
        (e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: yt.None })),
        (e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: St }))
    })(wt || (wt = {}))
    class At {
      constructor() {
        ;(this._isCancelled = !1), (this._emitter = null)
      }
      cancel() {
        this._isCancelled || ((this._isCancelled = !0), this._emitter && (this._emitter.fire(void 0), this.dispose()))
      }
      get isCancellationRequested() {
        return this._isCancelled
      }
      get onCancellationRequested() {
        return this._isCancelled ? St : (this._emitter || (this._emitter = new _t()), this._emitter.event)
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), (this._emitter = null))
      }
    }
    class Et {
      constructor(e) {
        ;(this._token = void 0),
          (this._parentListener = void 0),
          (this._parentListener = e && e.onCancellationRequested(this.cancel, this))
      }
      get token() {
        return this._token || (this._token = new At()), this._token
      }
      cancel() {
        this._token ? this._token instanceof At && this._token.cancel() : (this._token = wt.Cancelled)
      }
      dispose(e = !1) {
        e && this.cancel(),
          this._parentListener && this._parentListener.dispose(),
          this._token ? this._token instanceof At && this._token.dispose() : (this._token = wt.None)
      }
    }
    class xt {
      constructor() {
        ;(this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null))
      }
      define(e, t) {
        ;(this._keyCodeToStr[e] = t), (this._strToKeyCode[t.toLowerCase()] = e)
      }
      keyCodeToStr(e) {
        return this._keyCodeToStr[e]
      }
      strToKeyCode(e) {
        return this._strToKeyCode[e.toLowerCase()] || 0
      }
    }
    const Nt = new xt(),
      Lt = new xt(),
      kt = new xt()
    var Tt,
      Ot,
      It,
      Mt,
      Pt,
      Rt,
      Dt,
      Ft,
      jt,
      Ut,
      Vt,
      $t,
      Wt,
      qt,
      Bt,
      Kt,
      Ht,
      Yt,
      Gt,
      zt,
      Jt,
      Qt,
      Xt,
      Zt,
      en,
      tn,
      nn,
      rn,
      on,
      sn,
      an,
      un,
      ln,
      cn
    function hn(e, t) {
      const n = ((65535 & t) << 16) >>> 0
      return (e | n) >>> 0
    }
    ;(function() {
      function e(e, t, n = t, r = n) {
        Nt.define(e, t), Lt.define(e, n), kt.define(e, r)
      }
      e(0, 'unknown'),
        e(1, 'Backspace'),
        e(2, 'Tab'),
        e(3, 'Enter'),
        e(4, 'Shift'),
        e(5, 'Ctrl'),
        e(6, 'Alt'),
        e(7, 'PauseBreak'),
        e(8, 'CapsLock'),
        e(9, 'Escape'),
        e(10, 'Space'),
        e(11, 'PageUp'),
        e(12, 'PageDown'),
        e(13, 'End'),
        e(14, 'Home'),
        e(15, 'LeftArrow', 'Left'),
        e(16, 'UpArrow', 'Up'),
        e(17, 'RightArrow', 'Right'),
        e(18, 'DownArrow', 'Down'),
        e(19, 'Insert'),
        e(20, 'Delete'),
        e(21, '0'),
        e(22, '1'),
        e(23, '2'),
        e(24, '3'),
        e(25, '4'),
        e(26, '5'),
        e(27, '6'),
        e(28, '7'),
        e(29, '8'),
        e(30, '9'),
        e(31, 'A'),
        e(32, 'B'),
        e(33, 'C'),
        e(34, 'D'),
        e(35, 'E'),
        e(36, 'F'),
        e(37, 'G'),
        e(38, 'H'),
        e(39, 'I'),
        e(40, 'J'),
        e(41, 'K'),
        e(42, 'L'),
        e(43, 'M'),
        e(44, 'N'),
        e(45, 'O'),
        e(46, 'P'),
        e(47, 'Q'),
        e(48, 'R'),
        e(49, 'S'),
        e(50, 'T'),
        e(51, 'U'),
        e(52, 'V'),
        e(53, 'W'),
        e(54, 'X'),
        e(55, 'Y'),
        e(56, 'Z'),
        e(57, 'Meta'),
        e(58, 'ContextMenu'),
        e(59, 'F1'),
        e(60, 'F2'),
        e(61, 'F3'),
        e(62, 'F4'),
        e(63, 'F5'),
        e(64, 'F6'),
        e(65, 'F7'),
        e(66, 'F8'),
        e(67, 'F9'),
        e(68, 'F10'),
        e(69, 'F11'),
        e(70, 'F12'),
        e(71, 'F13'),
        e(72, 'F14'),
        e(73, 'F15'),
        e(74, 'F16'),
        e(75, 'F17'),
        e(76, 'F18'),
        e(77, 'F19'),
        e(78, 'NumLock'),
        e(79, 'ScrollLock'),
        e(80, ';', ';', 'OEM_1'),
        e(81, '=', '=', 'OEM_PLUS'),
        e(82, ',', ',', 'OEM_COMMA'),
        e(83, '-', '-', 'OEM_MINUS'),
        e(84, '.', '.', 'OEM_PERIOD'),
        e(85, '/', '/', 'OEM_2'),
        e(86, '`', '`', 'OEM_3'),
        e(110, 'ABNT_C1'),
        e(111, 'ABNT_C2'),
        e(87, '[', '[', 'OEM_4'),
        e(88, '\\', '\\', 'OEM_5'),
        e(89, ']', ']', 'OEM_6'),
        e(90, "'", "'", 'OEM_7'),
        e(91, 'OEM_8'),
        e(92, 'OEM_102'),
        e(93, 'NumPad0'),
        e(94, 'NumPad1'),
        e(95, 'NumPad2'),
        e(96, 'NumPad3'),
        e(97, 'NumPad4'),
        e(98, 'NumPad5'),
        e(99, 'NumPad6'),
        e(100, 'NumPad7'),
        e(101, 'NumPad8'),
        e(102, 'NumPad9'),
        e(103, 'NumPad_Multiply'),
        e(104, 'NumPad_Add'),
        e(105, 'NumPad_Separator'),
        e(106, 'NumPad_Subtract'),
        e(107, 'NumPad_Decimal'),
        e(108, 'NumPad_Divide')
    })(),
      (function(e) {
        function t(e) {
          return Nt.keyCodeToStr(e)
        }
        function n(e) {
          return Nt.strToKeyCode(e)
        }
        function r(e) {
          return Lt.keyCodeToStr(e)
        }
        function i(e) {
          return kt.keyCodeToStr(e)
        }
        function o(e) {
          return Lt.strToKeyCode(e) || kt.strToKeyCode(e)
        }
        ;(e.toString = t),
          (e.fromString = n),
          (e.toUserSettingsUS = r),
          (e.toUserSettingsGeneral = i),
          (e.fromUserSettings = o)
      })(Tt || (Tt = {}))
    class fn extends De {
      constructor(e, t, n, r) {
        super(e, t, n, r),
          (this.selectionStartLineNumber = e),
          (this.selectionStartColumn = t),
          (this.positionLineNumber = n),
          (this.positionColumn = r)
      }
      toString() {
        return (
          '[' +
          this.selectionStartLineNumber +
          ',' +
          this.selectionStartColumn +
          ' -> ' +
          this.positionLineNumber +
          ',' +
          this.positionColumn +
          ']'
        )
      }
      equalsSelection(e) {
        return fn.selectionsEqual(this, e)
      }
      static selectionsEqual(e, t) {
        return (
          e.selectionStartLineNumber === t.selectionStartLineNumber &&
          e.selectionStartColumn === t.selectionStartColumn &&
          e.positionLineNumber === t.positionLineNumber &&
          e.positionColumn === t.positionColumn
        )
      }
      getDirection() {
        return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn
          ? 0
          : 1
      }
      setEndPosition(e, t) {
        return 0 === this.getDirection()
          ? new fn(this.startLineNumber, this.startColumn, e, t)
          : new fn(e, t, this.startLineNumber, this.startColumn)
      }
      getPosition() {
        return new Re(this.positionLineNumber, this.positionColumn)
      }
      setStartPosition(e, t) {
        return 0 === this.getDirection()
          ? new fn(e, t, this.endLineNumber, this.endColumn)
          : new fn(this.endLineNumber, this.endColumn, e, t)
      }
      static fromPositions(e, t = e) {
        return new fn(e.lineNumber, e.column, t.lineNumber, t.column)
      }
      static liftSelection(e) {
        return new fn(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn)
      }
      static selectionsArrEqual(e, t) {
        if ((e && !t) || (!e && t)) return !1
        if (!e && !t) return !0
        if (e.length !== t.length) return !1
        for (let n = 0, r = e.length; n < r; n++) if (!this.selectionsEqual(e[n], t[n])) return !1
        return !0
      }
      static isISelection(e) {
        return (
          e &&
          'number' === typeof e.selectionStartLineNumber &&
          'number' === typeof e.selectionStartColumn &&
          'number' === typeof e.positionLineNumber &&
          'number' === typeof e.positionColumn
        )
      }
      static createWithDirection(e, t, n, r, i) {
        return 0 === i ? new fn(e, t, n, r) : new fn(n, r, e, t)
      }
    }
    class dn {
      constructor(e, t, n) {
        ;(this.offset = 0 | e), (this.type = t), (this.language = n)
      }
      toString() {
        return '(' + this.offset + ', ' + this.type + ')'
      }
    }
    ;(function(e) {
      ;(e[(e['Unknown'] = 0)] = 'Unknown'), (e[(e['Disabled'] = 1)] = 'Disabled'), (e[(e['Enabled'] = 2)] = 'Enabled')
    })(Ot || (Ot = {})),
      (function(e) {
        ;(e[(e['KeepWhitespace'] = 1)] = 'KeepWhitespace'), (e[(e['InsertAsSnippet'] = 4)] = 'InsertAsSnippet')
      })(It || (It = {})),
      (function(e) {
        ;(e[(e['Method'] = 0)] = 'Method'),
          (e[(e['Function'] = 1)] = 'Function'),
          (e[(e['Constructor'] = 2)] = 'Constructor'),
          (e[(e['Field'] = 3)] = 'Field'),
          (e[(e['Variable'] = 4)] = 'Variable'),
          (e[(e['Class'] = 5)] = 'Class'),
          (e[(e['Struct'] = 6)] = 'Struct'),
          (e[(e['Interface'] = 7)] = 'Interface'),
          (e[(e['Module'] = 8)] = 'Module'),
          (e[(e['Property'] = 9)] = 'Property'),
          (e[(e['Event'] = 10)] = 'Event'),
          (e[(e['Operator'] = 11)] = 'Operator'),
          (e[(e['Unit'] = 12)] = 'Unit'),
          (e[(e['Value'] = 13)] = 'Value'),
          (e[(e['Constant'] = 14)] = 'Constant'),
          (e[(e['Enum'] = 15)] = 'Enum'),
          (e[(e['EnumMember'] = 16)] = 'EnumMember'),
          (e[(e['Keyword'] = 17)] = 'Keyword'),
          (e[(e['Text'] = 18)] = 'Text'),
          (e[(e['Color'] = 19)] = 'Color'),
          (e[(e['File'] = 20)] = 'File'),
          (e[(e['Reference'] = 21)] = 'Reference'),
          (e[(e['Customcolor'] = 22)] = 'Customcolor'),
          (e[(e['Folder'] = 23)] = 'Folder'),
          (e[(e['TypeParameter'] = 24)] = 'TypeParameter'),
          (e[(e['User'] = 25)] = 'User'),
          (e[(e['Issue'] = 26)] = 'Issue'),
          (e[(e['Snippet'] = 27)] = 'Snippet')
      })(Mt || (Mt = {})),
      (function(e) {
        e[(e['Deprecated'] = 1)] = 'Deprecated'
      })(Pt || (Pt = {})),
      (function(e) {
        ;(e[(e['Invoke'] = 0)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 1)] = 'TriggerCharacter'),
          (e[(e['TriggerForIncompleteCompletions'] = 2)] = 'TriggerForIncompleteCompletions')
      })(Rt || (Rt = {})),
      (function(e) {
        ;(e[(e['EXACT'] = 0)] = 'EXACT'), (e[(e['ABOVE'] = 1)] = 'ABOVE'), (e[(e['BELOW'] = 2)] = 'BELOW')
      })(Dt || (Dt = {})),
      (function(e) {
        ;(e[(e['NotSet'] = 0)] = 'NotSet'),
          (e[(e['ContentFlush'] = 1)] = 'ContentFlush'),
          (e[(e['RecoverFromMarkers'] = 2)] = 'RecoverFromMarkers'),
          (e[(e['Explicit'] = 3)] = 'Explicit'),
          (e[(e['Paste'] = 4)] = 'Paste'),
          (e[(e['Undo'] = 5)] = 'Undo'),
          (e[(e['Redo'] = 6)] = 'Redo')
      })(Ft || (Ft = {})),
      (function(e) {
        ;(e[(e['LF'] = 1)] = 'LF'), (e[(e['CRLF'] = 2)] = 'CRLF')
      })(jt || (jt = {})),
      (function(e) {
        ;(e[(e['Text'] = 0)] = 'Text'), (e[(e['Read'] = 1)] = 'Read'), (e[(e['Write'] = 2)] = 'Write')
      })(Ut || (Ut = {})),
      (function(e) {
        ;(e[(e['None'] = 0)] = 'None'),
          (e[(e['Keep'] = 1)] = 'Keep'),
          (e[(e['Brackets'] = 2)] = 'Brackets'),
          (e[(e['Advanced'] = 3)] = 'Advanced'),
          (e[(e['Full'] = 4)] = 'Full')
      })(Vt || (Vt = {})),
      (function(e) {
        ;(e[(e['acceptSuggestionOnCommitCharacter'] = 0)] = 'acceptSuggestionOnCommitCharacter'),
          (e[(e['acceptSuggestionOnEnter'] = 1)] = 'acceptSuggestionOnEnter'),
          (e[(e['accessibilitySupport'] = 2)] = 'accessibilitySupport'),
          (e[(e['accessibilityPageSize'] = 3)] = 'accessibilityPageSize'),
          (e[(e['ariaLabel'] = 4)] = 'ariaLabel'),
          (e[(e['autoClosingBrackets'] = 5)] = 'autoClosingBrackets'),
          (e[(e['autoClosingOvertype'] = 6)] = 'autoClosingOvertype'),
          (e[(e['autoClosingQuotes'] = 7)] = 'autoClosingQuotes'),
          (e[(e['autoIndent'] = 8)] = 'autoIndent'),
          (e[(e['automaticLayout'] = 9)] = 'automaticLayout'),
          (e[(e['autoSurround'] = 10)] = 'autoSurround'),
          (e[(e['codeLens'] = 11)] = 'codeLens'),
          (e[(e['colorDecorators'] = 12)] = 'colorDecorators'),
          (e[(e['columnSelection'] = 13)] = 'columnSelection'),
          (e[(e['comments'] = 14)] = 'comments'),
          (e[(e['contextmenu'] = 15)] = 'contextmenu'),
          (e[(e['copyWithSyntaxHighlighting'] = 16)] = 'copyWithSyntaxHighlighting'),
          (e[(e['cursorBlinking'] = 17)] = 'cursorBlinking'),
          (e[(e['cursorSmoothCaretAnimation'] = 18)] = 'cursorSmoothCaretAnimation'),
          (e[(e['cursorStyle'] = 19)] = 'cursorStyle'),
          (e[(e['cursorSurroundingLines'] = 20)] = 'cursorSurroundingLines'),
          (e[(e['cursorSurroundingLinesStyle'] = 21)] = 'cursorSurroundingLinesStyle'),
          (e[(e['cursorWidth'] = 22)] = 'cursorWidth'),
          (e[(e['disableLayerHinting'] = 23)] = 'disableLayerHinting'),
          (e[(e['disableMonospaceOptimizations'] = 24)] = 'disableMonospaceOptimizations'),
          (e[(e['dragAndDrop'] = 25)] = 'dragAndDrop'),
          (e[(e['emptySelectionClipboard'] = 26)] = 'emptySelectionClipboard'),
          (e[(e['extraEditorClassName'] = 27)] = 'extraEditorClassName'),
          (e[(e['fastScrollSensitivity'] = 28)] = 'fastScrollSensitivity'),
          (e[(e['find'] = 29)] = 'find'),
          (e[(e['fixedOverflowWidgets'] = 30)] = 'fixedOverflowWidgets'),
          (e[(e['folding'] = 31)] = 'folding'),
          (e[(e['foldingStrategy'] = 32)] = 'foldingStrategy'),
          (e[(e['foldingHighlight'] = 33)] = 'foldingHighlight'),
          (e[(e['unfoldOnClickAfterEndOfLine'] = 34)] = 'unfoldOnClickAfterEndOfLine'),
          (e[(e['fontFamily'] = 35)] = 'fontFamily'),
          (e[(e['fontInfo'] = 36)] = 'fontInfo'),
          (e[(e['fontLigatures'] = 37)] = 'fontLigatures'),
          (e[(e['fontSize'] = 38)] = 'fontSize'),
          (e[(e['fontWeight'] = 39)] = 'fontWeight'),
          (e[(e['formatOnPaste'] = 40)] = 'formatOnPaste'),
          (e[(e['formatOnType'] = 41)] = 'formatOnType'),
          (e[(e['glyphMargin'] = 42)] = 'glyphMargin'),
          (e[(e['gotoLocation'] = 43)] = 'gotoLocation'),
          (e[(e['hideCursorInOverviewRuler'] = 44)] = 'hideCursorInOverviewRuler'),
          (e[(e['highlightActiveIndentGuide'] = 45)] = 'highlightActiveIndentGuide'),
          (e[(e['hover'] = 46)] = 'hover'),
          (e[(e['inDiffEditor'] = 47)] = 'inDiffEditor'),
          (e[(e['letterSpacing'] = 48)] = 'letterSpacing'),
          (e[(e['lightbulb'] = 49)] = 'lightbulb'),
          (e[(e['lineDecorationsWidth'] = 50)] = 'lineDecorationsWidth'),
          (e[(e['lineHeight'] = 51)] = 'lineHeight'),
          (e[(e['lineNumbers'] = 52)] = 'lineNumbers'),
          (e[(e['lineNumbersMinChars'] = 53)] = 'lineNumbersMinChars'),
          (e[(e['links'] = 54)] = 'links'),
          (e[(e['matchBrackets'] = 55)] = 'matchBrackets'),
          (e[(e['minimap'] = 56)] = 'minimap'),
          (e[(e['mouseStyle'] = 57)] = 'mouseStyle'),
          (e[(e['mouseWheelScrollSensitivity'] = 58)] = 'mouseWheelScrollSensitivity'),
          (e[(e['mouseWheelZoom'] = 59)] = 'mouseWheelZoom'),
          (e[(e['multiCursorMergeOverlapping'] = 60)] = 'multiCursorMergeOverlapping'),
          (e[(e['multiCursorModifier'] = 61)] = 'multiCursorModifier'),
          (e[(e['multiCursorPaste'] = 62)] = 'multiCursorPaste'),
          (e[(e['occurrencesHighlight'] = 63)] = 'occurrencesHighlight'),
          (e[(e['overviewRulerBorder'] = 64)] = 'overviewRulerBorder'),
          (e[(e['overviewRulerLanes'] = 65)] = 'overviewRulerLanes'),
          (e[(e['padding'] = 66)] = 'padding'),
          (e[(e['parameterHints'] = 67)] = 'parameterHints'),
          (e[(e['peekWidgetDefaultFocus'] = 68)] = 'peekWidgetDefaultFocus'),
          (e[(e['definitionLinkOpensInPeek'] = 69)] = 'definitionLinkOpensInPeek'),
          (e[(e['quickSuggestions'] = 70)] = 'quickSuggestions'),
          (e[(e['quickSuggestionsDelay'] = 71)] = 'quickSuggestionsDelay'),
          (e[(e['readOnly'] = 72)] = 'readOnly'),
          (e[(e['renameOnType'] = 73)] = 'renameOnType'),
          (e[(e['renderControlCharacters'] = 74)] = 'renderControlCharacters'),
          (e[(e['renderIndentGuides'] = 75)] = 'renderIndentGuides'),
          (e[(e['renderFinalNewline'] = 76)] = 'renderFinalNewline'),
          (e[(e['renderLineHighlight'] = 77)] = 'renderLineHighlight'),
          (e[(e['renderLineHighlightOnlyWhenFocus'] = 78)] = 'renderLineHighlightOnlyWhenFocus'),
          (e[(e['renderValidationDecorations'] = 79)] = 'renderValidationDecorations'),
          (e[(e['renderWhitespace'] = 80)] = 'renderWhitespace'),
          (e[(e['revealHorizontalRightPadding'] = 81)] = 'revealHorizontalRightPadding'),
          (e[(e['roundedSelection'] = 82)] = 'roundedSelection'),
          (e[(e['rulers'] = 83)] = 'rulers'),
          (e[(e['scrollbar'] = 84)] = 'scrollbar'),
          (e[(e['scrollBeyondLastColumn'] = 85)] = 'scrollBeyondLastColumn'),
          (e[(e['scrollBeyondLastLine'] = 86)] = 'scrollBeyondLastLine'),
          (e[(e['scrollPredominantAxis'] = 87)] = 'scrollPredominantAxis'),
          (e[(e['selectionClipboard'] = 88)] = 'selectionClipboard'),
          (e[(e['selectionHighlight'] = 89)] = 'selectionHighlight'),
          (e[(e['selectOnLineNumbers'] = 90)] = 'selectOnLineNumbers'),
          (e[(e['showFoldingControls'] = 91)] = 'showFoldingControls'),
          (e[(e['showUnused'] = 92)] = 'showUnused'),
          (e[(e['snippetSuggestions'] = 93)] = 'snippetSuggestions'),
          (e[(e['smoothScrolling'] = 94)] = 'smoothScrolling'),
          (e[(e['stopRenderingLineAfter'] = 95)] = 'stopRenderingLineAfter'),
          (e[(e['suggest'] = 96)] = 'suggest'),
          (e[(e['suggestFontSize'] = 97)] = 'suggestFontSize'),
          (e[(e['suggestLineHeight'] = 98)] = 'suggestLineHeight'),
          (e[(e['suggestOnTriggerCharacters'] = 99)] = 'suggestOnTriggerCharacters'),
          (e[(e['suggestSelection'] = 100)] = 'suggestSelection'),
          (e[(e['tabCompletion'] = 101)] = 'tabCompletion'),
          (e[(e['tabIndex'] = 102)] = 'tabIndex'),
          (e[(e['unusualLineTerminators'] = 103)] = 'unusualLineTerminators'),
          (e[(e['useTabStops'] = 104)] = 'useTabStops'),
          (e[(e['wordSeparators'] = 105)] = 'wordSeparators'),
          (e[(e['wordWrap'] = 106)] = 'wordWrap'),
          (e[(e['wordWrapBreakAfterCharacters'] = 107)] = 'wordWrapBreakAfterCharacters'),
          (e[(e['wordWrapBreakBeforeCharacters'] = 108)] = 'wordWrapBreakBeforeCharacters'),
          (e[(e['wordWrapColumn'] = 109)] = 'wordWrapColumn'),
          (e[(e['wordWrapMinified'] = 110)] = 'wordWrapMinified'),
          (e[(e['wrappingIndent'] = 111)] = 'wrappingIndent'),
          (e[(e['wrappingStrategy'] = 112)] = 'wrappingStrategy'),
          (e[(e['showDeprecated'] = 113)] = 'showDeprecated'),
          (e[(e['editorClassName'] = 114)] = 'editorClassName'),
          (e[(e['pixelRatio'] = 115)] = 'pixelRatio'),
          (e[(e['tabFocusMode'] = 116)] = 'tabFocusMode'),
          (e[(e['layoutInfo'] = 117)] = 'layoutInfo'),
          (e[(e['wrappingInfo'] = 118)] = 'wrappingInfo')
      })($t || ($t = {})),
      (function(e) {
        ;(e[(e['TextDefined'] = 0)] = 'TextDefined'), (e[(e['LF'] = 1)] = 'LF'), (e[(e['CRLF'] = 2)] = 'CRLF')
      })(Wt || (Wt = {})),
      (function(e) {
        ;(e[(e['LF'] = 0)] = 'LF'), (e[(e['CRLF'] = 1)] = 'CRLF')
      })(qt || (qt = {})),
      (function(e) {
        ;(e[(e['None'] = 0)] = 'None'),
          (e[(e['Indent'] = 1)] = 'Indent'),
          (e[(e['IndentOutdent'] = 2)] = 'IndentOutdent'),
          (e[(e['Outdent'] = 3)] = 'Outdent')
      })(Bt || (Bt = {})),
      (function(e) {
        ;(e[(e['Unknown'] = 0)] = 'Unknown'),
          (e[(e['Backspace'] = 1)] = 'Backspace'),
          (e[(e['Tab'] = 2)] = 'Tab'),
          (e[(e['Enter'] = 3)] = 'Enter'),
          (e[(e['Shift'] = 4)] = 'Shift'),
          (e[(e['Ctrl'] = 5)] = 'Ctrl'),
          (e[(e['Alt'] = 6)] = 'Alt'),
          (e[(e['PauseBreak'] = 7)] = 'PauseBreak'),
          (e[(e['CapsLock'] = 8)] = 'CapsLock'),
          (e[(e['Escape'] = 9)] = 'Escape'),
          (e[(e['Space'] = 10)] = 'Space'),
          (e[(e['PageUp'] = 11)] = 'PageUp'),
          (e[(e['PageDown'] = 12)] = 'PageDown'),
          (e[(e['End'] = 13)] = 'End'),
          (e[(e['Home'] = 14)] = 'Home'),
          (e[(e['LeftArrow'] = 15)] = 'LeftArrow'),
          (e[(e['UpArrow'] = 16)] = 'UpArrow'),
          (e[(e['RightArrow'] = 17)] = 'RightArrow'),
          (e[(e['DownArrow'] = 18)] = 'DownArrow'),
          (e[(e['Insert'] = 19)] = 'Insert'),
          (e[(e['Delete'] = 20)] = 'Delete'),
          (e[(e['KEY_0'] = 21)] = 'KEY_0'),
          (e[(e['KEY_1'] = 22)] = 'KEY_1'),
          (e[(e['KEY_2'] = 23)] = 'KEY_2'),
          (e[(e['KEY_3'] = 24)] = 'KEY_3'),
          (e[(e['KEY_4'] = 25)] = 'KEY_4'),
          (e[(e['KEY_5'] = 26)] = 'KEY_5'),
          (e[(e['KEY_6'] = 27)] = 'KEY_6'),
          (e[(e['KEY_7'] = 28)] = 'KEY_7'),
          (e[(e['KEY_8'] = 29)] = 'KEY_8'),
          (e[(e['KEY_9'] = 30)] = 'KEY_9'),
          (e[(e['KEY_A'] = 31)] = 'KEY_A'),
          (e[(e['KEY_B'] = 32)] = 'KEY_B'),
          (e[(e['KEY_C'] = 33)] = 'KEY_C'),
          (e[(e['KEY_D'] = 34)] = 'KEY_D'),
          (e[(e['KEY_E'] = 35)] = 'KEY_E'),
          (e[(e['KEY_F'] = 36)] = 'KEY_F'),
          (e[(e['KEY_G'] = 37)] = 'KEY_G'),
          (e[(e['KEY_H'] = 38)] = 'KEY_H'),
          (e[(e['KEY_I'] = 39)] = 'KEY_I'),
          (e[(e['KEY_J'] = 40)] = 'KEY_J'),
          (e[(e['KEY_K'] = 41)] = 'KEY_K'),
          (e[(e['KEY_L'] = 42)] = 'KEY_L'),
          (e[(e['KEY_M'] = 43)] = 'KEY_M'),
          (e[(e['KEY_N'] = 44)] = 'KEY_N'),
          (e[(e['KEY_O'] = 45)] = 'KEY_O'),
          (e[(e['KEY_P'] = 46)] = 'KEY_P'),
          (e[(e['KEY_Q'] = 47)] = 'KEY_Q'),
          (e[(e['KEY_R'] = 48)] = 'KEY_R'),
          (e[(e['KEY_S'] = 49)] = 'KEY_S'),
          (e[(e['KEY_T'] = 50)] = 'KEY_T'),
          (e[(e['KEY_U'] = 51)] = 'KEY_U'),
          (e[(e['KEY_V'] = 52)] = 'KEY_V'),
          (e[(e['KEY_W'] = 53)] = 'KEY_W'),
          (e[(e['KEY_X'] = 54)] = 'KEY_X'),
          (e[(e['KEY_Y'] = 55)] = 'KEY_Y'),
          (e[(e['KEY_Z'] = 56)] = 'KEY_Z'),
          (e[(e['Meta'] = 57)] = 'Meta'),
          (e[(e['ContextMenu'] = 58)] = 'ContextMenu'),
          (e[(e['F1'] = 59)] = 'F1'),
          (e[(e['F2'] = 60)] = 'F2'),
          (e[(e['F3'] = 61)] = 'F3'),
          (e[(e['F4'] = 62)] = 'F4'),
          (e[(e['F5'] = 63)] = 'F5'),
          (e[(e['F6'] = 64)] = 'F6'),
          (e[(e['F7'] = 65)] = 'F7'),
          (e[(e['F8'] = 66)] = 'F8'),
          (e[(e['F9'] = 67)] = 'F9'),
          (e[(e['F10'] = 68)] = 'F10'),
          (e[(e['F11'] = 69)] = 'F11'),
          (e[(e['F12'] = 70)] = 'F12'),
          (e[(e['F13'] = 71)] = 'F13'),
          (e[(e['F14'] = 72)] = 'F14'),
          (e[(e['F15'] = 73)] = 'F15'),
          (e[(e['F16'] = 74)] = 'F16'),
          (e[(e['F17'] = 75)] = 'F17'),
          (e[(e['F18'] = 76)] = 'F18'),
          (e[(e['F19'] = 77)] = 'F19'),
          (e[(e['NumLock'] = 78)] = 'NumLock'),
          (e[(e['ScrollLock'] = 79)] = 'ScrollLock'),
          (e[(e['US_SEMICOLON'] = 80)] = 'US_SEMICOLON'),
          (e[(e['US_EQUAL'] = 81)] = 'US_EQUAL'),
          (e[(e['US_COMMA'] = 82)] = 'US_COMMA'),
          (e[(e['US_MINUS'] = 83)] = 'US_MINUS'),
          (e[(e['US_DOT'] = 84)] = 'US_DOT'),
          (e[(e['US_SLASH'] = 85)] = 'US_SLASH'),
          (e[(e['US_BACKTICK'] = 86)] = 'US_BACKTICK'),
          (e[(e['US_OPEN_SQUARE_BRACKET'] = 87)] = 'US_OPEN_SQUARE_BRACKET'),
          (e[(e['US_BACKSLASH'] = 88)] = 'US_BACKSLASH'),
          (e[(e['US_CLOSE_SQUARE_BRACKET'] = 89)] = 'US_CLOSE_SQUARE_BRACKET'),
          (e[(e['US_QUOTE'] = 90)] = 'US_QUOTE'),
          (e[(e['OEM_8'] = 91)] = 'OEM_8'),
          (e[(e['OEM_102'] = 92)] = 'OEM_102'),
          (e[(e['NUMPAD_0'] = 93)] = 'NUMPAD_0'),
          (e[(e['NUMPAD_1'] = 94)] = 'NUMPAD_1'),
          (e[(e['NUMPAD_2'] = 95)] = 'NUMPAD_2'),
          (e[(e['NUMPAD_3'] = 96)] = 'NUMPAD_3'),
          (e[(e['NUMPAD_4'] = 97)] = 'NUMPAD_4'),
          (e[(e['NUMPAD_5'] = 98)] = 'NUMPAD_5'),
          (e[(e['NUMPAD_6'] = 99)] = 'NUMPAD_6'),
          (e[(e['NUMPAD_7'] = 100)] = 'NUMPAD_7'),
          (e[(e['NUMPAD_8'] = 101)] = 'NUMPAD_8'),
          (e[(e['NUMPAD_9'] = 102)] = 'NUMPAD_9'),
          (e[(e['NUMPAD_MULTIPLY'] = 103)] = 'NUMPAD_MULTIPLY'),
          (e[(e['NUMPAD_ADD'] = 104)] = 'NUMPAD_ADD'),
          (e[(e['NUMPAD_SEPARATOR'] = 105)] = 'NUMPAD_SEPARATOR'),
          (e[(e['NUMPAD_SUBTRACT'] = 106)] = 'NUMPAD_SUBTRACT'),
          (e[(e['NUMPAD_DECIMAL'] = 107)] = 'NUMPAD_DECIMAL'),
          (e[(e['NUMPAD_DIVIDE'] = 108)] = 'NUMPAD_DIVIDE'),
          (e[(e['KEY_IN_COMPOSITION'] = 109)] = 'KEY_IN_COMPOSITION'),
          (e[(e['ABNT_C1'] = 110)] = 'ABNT_C1'),
          (e[(e['ABNT_C2'] = 111)] = 'ABNT_C2'),
          (e[(e['MAX_VALUE'] = 112)] = 'MAX_VALUE')
      })(Kt || (Kt = {})),
      (function(e) {
        ;(e[(e['Hint'] = 1)] = 'Hint'),
          (e[(e['Info'] = 2)] = 'Info'),
          (e[(e['Warning'] = 4)] = 'Warning'),
          (e[(e['Error'] = 8)] = 'Error')
      })(Ht || (Ht = {})),
      (function(e) {
        ;(e[(e['Unnecessary'] = 1)] = 'Unnecessary'), (e[(e['Deprecated'] = 2)] = 'Deprecated')
      })(Yt || (Yt = {})),
      (function(e) {
        ;(e[(e['Inline'] = 1)] = 'Inline'), (e[(e['Gutter'] = 2)] = 'Gutter')
      })(Gt || (Gt = {})),
      (function(e) {
        ;(e[(e['UNKNOWN'] = 0)] = 'UNKNOWN'),
          (e[(e['TEXTAREA'] = 1)] = 'TEXTAREA'),
          (e[(e['GUTTER_GLYPH_MARGIN'] = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (e[(e['GUTTER_LINE_NUMBERS'] = 3)] = 'GUTTER_LINE_NUMBERS'),
          (e[(e['GUTTER_LINE_DECORATIONS'] = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (e[(e['GUTTER_VIEW_ZONE'] = 5)] = 'GUTTER_VIEW_ZONE'),
          (e[(e['CONTENT_TEXT'] = 6)] = 'CONTENT_TEXT'),
          (e[(e['CONTENT_EMPTY'] = 7)] = 'CONTENT_EMPTY'),
          (e[(e['CONTENT_VIEW_ZONE'] = 8)] = 'CONTENT_VIEW_ZONE'),
          (e[(e['CONTENT_WIDGET'] = 9)] = 'CONTENT_WIDGET'),
          (e[(e['OVERVIEW_RULER'] = 10)] = 'OVERVIEW_RULER'),
          (e[(e['SCROLLBAR'] = 11)] = 'SCROLLBAR'),
          (e[(e['OVERLAY_WIDGET'] = 12)] = 'OVERLAY_WIDGET'),
          (e[(e['OUTSIDE_EDITOR'] = 13)] = 'OUTSIDE_EDITOR')
      })(zt || (zt = {})),
      (function(e) {
        ;(e[(e['TOP_RIGHT_CORNER'] = 0)] = 'TOP_RIGHT_CORNER'),
          (e[(e['BOTTOM_RIGHT_CORNER'] = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (e[(e['TOP_CENTER'] = 2)] = 'TOP_CENTER')
      })(Jt || (Jt = {})),
      (function(e) {
        ;(e[(e['Left'] = 1)] = 'Left'),
          (e[(e['Center'] = 2)] = 'Center'),
          (e[(e['Right'] = 4)] = 'Right'),
          (e[(e['Full'] = 7)] = 'Full')
      })(Qt || (Qt = {})),
      (function(e) {
        ;(e[(e['Off'] = 0)] = 'Off'),
          (e[(e['On'] = 1)] = 'On'),
          (e[(e['Relative'] = 2)] = 'Relative'),
          (e[(e['Interval'] = 3)] = 'Interval'),
          (e[(e['Custom'] = 4)] = 'Custom')
      })(Xt || (Xt = {})),
      (function(e) {
        ;(e[(e['None'] = 0)] = 'None'), (e[(e['Text'] = 1)] = 'Text'), (e[(e['Blocks'] = 2)] = 'Blocks')
      })(Zt || (Zt = {})),
      (function(e) {
        ;(e[(e['Smooth'] = 0)] = 'Smooth'), (e[(e['Immediate'] = 1)] = 'Immediate')
      })(en || (en = {})),
      (function(e) {
        ;(e[(e['Auto'] = 1)] = 'Auto'), (e[(e['Hidden'] = 2)] = 'Hidden'), (e[(e['Visible'] = 3)] = 'Visible')
      })(tn || (tn = {})),
      (function(e) {
        ;(e[(e['LTR'] = 0)] = 'LTR'), (e[(e['RTL'] = 1)] = 'RTL')
      })(nn || (nn = {})),
      (function(e) {
        ;(e[(e['Invoke'] = 1)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 2)] = 'TriggerCharacter'),
          (e[(e['ContentChange'] = 3)] = 'ContentChange')
      })(rn || (rn = {})),
      (function(e) {
        ;(e[(e['File'] = 0)] = 'File'),
          (e[(e['Module'] = 1)] = 'Module'),
          (e[(e['Namespace'] = 2)] = 'Namespace'),
          (e[(e['Package'] = 3)] = 'Package'),
          (e[(e['Class'] = 4)] = 'Class'),
          (e[(e['Method'] = 5)] = 'Method'),
          (e[(e['Property'] = 6)] = 'Property'),
          (e[(e['Field'] = 7)] = 'Field'),
          (e[(e['Constructor'] = 8)] = 'Constructor'),
          (e[(e['Enum'] = 9)] = 'Enum'),
          (e[(e['Interface'] = 10)] = 'Interface'),
          (e[(e['Function'] = 11)] = 'Function'),
          (e[(e['Variable'] = 12)] = 'Variable'),
          (e[(e['Constant'] = 13)] = 'Constant'),
          (e[(e['String'] = 14)] = 'String'),
          (e[(e['Number'] = 15)] = 'Number'),
          (e[(e['Boolean'] = 16)] = 'Boolean'),
          (e[(e['Array'] = 17)] = 'Array'),
          (e[(e['Object'] = 18)] = 'Object'),
          (e[(e['Key'] = 19)] = 'Key'),
          (e[(e['Null'] = 20)] = 'Null'),
          (e[(e['EnumMember'] = 21)] = 'EnumMember'),
          (e[(e['Struct'] = 22)] = 'Struct'),
          (e[(e['Event'] = 23)] = 'Event'),
          (e[(e['Operator'] = 24)] = 'Operator'),
          (e[(e['TypeParameter'] = 25)] = 'TypeParameter')
      })(on || (on = {})),
      (function(e) {
        e[(e['Deprecated'] = 1)] = 'Deprecated'
      })(sn || (sn = {})),
      (function(e) {
        ;(e[(e['Hidden'] = 0)] = 'Hidden'),
          (e[(e['Blink'] = 1)] = 'Blink'),
          (e[(e['Smooth'] = 2)] = 'Smooth'),
          (e[(e['Phase'] = 3)] = 'Phase'),
          (e[(e['Expand'] = 4)] = 'Expand'),
          (e[(e['Solid'] = 5)] = 'Solid')
      })(an || (an = {})),
      (function(e) {
        ;(e[(e['Line'] = 1)] = 'Line'),
          (e[(e['Block'] = 2)] = 'Block'),
          (e[(e['Underline'] = 3)] = 'Underline'),
          (e[(e['LineThin'] = 4)] = 'LineThin'),
          (e[(e['BlockOutline'] = 5)] = 'BlockOutline'),
          (e[(e['UnderlineThin'] = 6)] = 'UnderlineThin')
      })(un || (un = {})),
      (function(e) {
        ;(e[(e['AlwaysGrowsWhenTypingAtEdges'] = 0)] = 'AlwaysGrowsWhenTypingAtEdges'),
          (e[(e['NeverGrowsWhenTypingAtEdges'] = 1)] = 'NeverGrowsWhenTypingAtEdges'),
          (e[(e['GrowsOnlyWhenTypingBefore'] = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (e[(e['GrowsOnlyWhenTypingAfter'] = 3)] = 'GrowsOnlyWhenTypingAfter')
      })(ln || (ln = {})),
      (function(e) {
        ;(e[(e['None'] = 0)] = 'None'),
          (e[(e['Same'] = 1)] = 'Same'),
          (e[(e['Indent'] = 2)] = 'Indent'),
          (e[(e['DeepIndent'] = 3)] = 'DeepIndent')
      })(cn || (cn = {}))
    class mn {
      static chord(e, t) {
        return hn(e, t)
      }
    }
    function gn() {
      return {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: Et,
        Emitter: _t,
        KeyCode: Kt,
        KeyMod: mn,
        Position: Re,
        Range: De,
        Selection: fn,
        SelectionDirection: nn,
        MarkerSeverity: Ht,
        MarkerTag: Yt,
        Uri: Ae,
        Token: dn,
      }
    }
    ;(mn.CtrlCmd = 2048), (mn.Shift = 1024), (mn.Alt = 512), (mn.WinCtrl = 256)
    var pn = function(e, t, n, r) {
      function i(e) {
        return e instanceof n
          ? e
          : new n(function(t) {
              t(e)
            })
      }
      return new (n || (n = Promise))(function(n, o) {
        function s(e) {
          try {
            u(r.next(e))
          } catch (t) {
            o(t)
          }
        }
        function a(e) {
          try {
            u(r['throw'](e))
          } catch (t) {
            o(t)
          }
        }
        function u(e) {
          e.done ? n(e.value) : i(e.value).then(s, a)
        }
        u((r = r.apply(e, t || [])).next())
      })
    }
    class vn extends Xe {
      get uri() {
        return this._uri
      }
      get version() {
        return this._versionId
      }
      get eol() {
        return this._eol
      }
      getValue() {
        return this.getText()
      }
      getLinesContent() {
        return this._lines.slice(0)
      }
      getLineCount() {
        return this._lines.length
      }
      getLineContent(e) {
        return this._lines[e - 1]
      }
      getWordAtPosition(e, t) {
        let n = it(e.column, nt(t), this._lines[e.lineNumber - 1], 0)
        return n ? new De(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null
      }
      words(e) {
        const t = this._lines,
          n = this._wordenize.bind(this)
        let r = 0,
          i = '',
          o = 0,
          s = []
        return {
          *[Symbol.iterator]() {
            while (1)
              if (o < s.length) {
                const e = i.substring(s[o].start, s[o].end)
                ;(o += 1), yield e
              } else {
                if (!(r < t.length)) break
                ;(i = t[r]), (s = n(i, e)), (o = 0), (r += 1)
              }
          },
        }
      }
      getLineWords(e, t) {
        let n = this._lines[e - 1],
          r = this._wordenize(n, t),
          i = []
        for (const o of r) i.push({ word: n.substring(o.start, o.end), startColumn: o.start + 1, endColumn: o.end + 1 })
        return i
      }
      _wordenize(e, t) {
        const n = []
        let r
        t.lastIndex = 0
        while ((r = t.exec(e))) {
          if (0 === r[0].length) break
          n.push({ start: r.index, end: r.index + r[0].length })
        }
        return n
      }
      getValueInRange(e) {
        if (((e = this._validateRange(e)), e.startLineNumber === e.endLineNumber))
          return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1)
        let t = this._eol,
          n = e.startLineNumber - 1,
          r = e.endLineNumber - 1,
          i = []
        i.push(this._lines[n].substring(e.startColumn - 1))
        for (let o = n + 1; o < r; o++) i.push(this._lines[o])
        return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t)
      }
      offsetAt(e) {
        return (
          (e = this._validatePosition(e)),
          this._ensureLineStarts(),
          this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1)
        )
      }
      positionAt(e) {
        ;(e = Math.floor(e)), (e = Math.max(0, e)), this._ensureLineStarts()
        let t = this._lineStarts.getIndexOf(e),
          n = this._lines[t.index].length
        return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) }
      }
      _validateRange(e) {
        const t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }),
          n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn })
        return t.lineNumber !== e.startLineNumber ||
          t.column !== e.startColumn ||
          n.lineNumber !== e.endLineNumber ||
          n.column !== e.endColumn
          ? { startLineNumber: t.lineNumber, startColumn: t.column, endLineNumber: n.lineNumber, endColumn: n.column }
          : e
      }
      _validatePosition(e) {
        if (!Re.isIPosition(e)) throw new Error('bad position')
        let { lineNumber: t, column: n } = e,
          r = !1
        if (t < 1) (t = 1), (n = 1), (r = !0)
        else if (t > this._lines.length) (t = this._lines.length), (n = this._lines[t - 1].length + 1), (r = !0)
        else {
          let e = this._lines[t - 1].length + 1
          n < 1 ? ((n = 1), (r = !0)) : n > e && ((n = e), (r = !0))
        }
        return r ? { lineNumber: t, column: n } : e
      }
    }
    class yn {
      constructor(e, t) {
        ;(this._host = e),
          (this._models = Object.create(null)),
          (this._foreignModuleFactory = t),
          (this._foreignModule = null)
      }
      dispose() {
        this._models = Object.create(null)
      }
      _getModel(e) {
        return this._models[e]
      }
      _getModels() {
        let e = []
        return Object.keys(this._models).forEach(t => e.push(this._models[t])), e
      }
      acceptNewModel(e) {
        this._models[e.url] = new vn(Ae.parse(e.url), e.lines, e.EOL, e.versionId)
      }
      acceptModelChanged(e, t) {
        if (!this._models[e]) return
        let n = this._models[e]
        n.onEvents(t)
      }
      acceptRemovedModel(e) {
        this._models[e] && delete this._models[e]
      }
      computeDiff(e, t, n, r) {
        return pn(this, void 0, void 0, function*() {
          const i = this._getModel(e),
            o = this._getModel(t)
          if (!i || !o) return null
          const s = i.getLinesContent(),
            a = o.getLinesContent(),
            u = new Be(s, a, {
              shouldComputeCharChanges: !0,
              shouldPostProcessCharChanges: !0,
              shouldIgnoreTrimWhitespace: n,
              shouldMakePrettyDiff: !0,
              maxComputationTime: r,
            }),
            l = u.computeDiff(),
            c = !(l.changes.length > 0) && this._modelsAreIdentical(i, o)
          return { quitEarly: l.quitEarly, identical: c, changes: l.changes }
        })
      }
      _modelsAreIdentical(e, t) {
        const n = e.getLineCount(),
          r = t.getLineCount()
        if (n !== r) return !1
        for (let i = 1; i <= n; i++) {
          const n = e.getLineContent(i),
            r = t.getLineContent(i)
          if (n !== r) return !1
        }
        return !0
      }
      computeMoreMinimalEdits(e, t) {
        return pn(this, void 0, void 0, function*() {
          const n = this._getModel(e)
          if (!n) return t
          const r = []
          let i
          t = x(t, (e, t) => {
            if (e.range && t.range) return De.compareRangesUsingStarts(e.range, t.range)
            let n = e.range ? 0 : 1,
              r = t.range ? 0 : 1
            return n - r
          })
          for (let { range: e, text: o, eol: s } of t) {
            if (('number' === typeof s && (i = s), De.isEmpty(e) && !o)) continue
            const t = n.getValueInRange(e)
            if (((o = o.replace(/\r\n|\n|\r/g, n.eol)), t === o)) continue
            if (Math.max(o.length, t.length) > yn._diffLimit) {
              r.push({ range: e, text: o })
              continue
            }
            const a = K(t, o, !1),
              u = n.offsetAt(De.lift(e).getStartPosition())
            for (const e of a) {
              const t = n.positionAt(u + e.originalStart),
                i = n.positionAt(u + e.originalStart + e.originalLength),
                s = {
                  text: o.substr(e.modifiedStart, e.modifiedLength),
                  range: {
                    startLineNumber: t.lineNumber,
                    startColumn: t.column,
                    endLineNumber: i.lineNumber,
                    endColumn: i.column,
                  },
                }
              n.getValueInRange(s.range) !== s.text && r.push(s)
            }
          }
          return (
            'number' === typeof i &&
              r.push({
                eol: i,
                text: '',
                range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 },
              }),
            r
          )
        })
      }
      computeLinks(e) {
        return pn(this, void 0, void 0, function*() {
          let t = this._getModel(e)
          return t ? mt(t) : null
        })
      }
      textualSuggest(e, t, n, r) {
        return pn(this, void 0, void 0, function*() {
          const i = this._getModel(e)
          if (!i) return null
          const o = [],
            s = new Set(),
            a = new RegExp(n, r),
            u = i.getWordAtPosition(t, a)
          u && s.add(i.getValueInRange(u))
          for (let e of i.words(a))
            if (!s.has(e) && (s.add(e), isNaN(Number(e)) && (o.push(e), s.size > yn._suggestionsLimit))) break
          return o
        })
      }
      computeWordRanges(e, t, n, r) {
        return pn(this, void 0, void 0, function*() {
          let i = this._getModel(e)
          if (!i) return Object.create(null)
          const o = new RegExp(n, r),
            s = Object.create(null)
          for (let e = t.startLineNumber; e < t.endLineNumber; e++) {
            let t = i.getLineWords(e, o)
            for (const n of t) {
              if (!isNaN(Number(n.word))) continue
              let t = s[n.word]
              t || ((t = []), (s[n.word] = t)),
                t.push({ startLineNumber: e, startColumn: n.startColumn, endLineNumber: e, endColumn: n.endColumn })
            }
          }
          return s
        })
      }
      navigateValueSet(e, t, n, r, i) {
        return pn(this, void 0, void 0, function*() {
          let o = this._getModel(e)
          if (!o) return null
          let s = new RegExp(r, i)
          t.startColumn === t.endColumn &&
            (t = {
              startLineNumber: t.startLineNumber,
              startColumn: t.startColumn,
              endLineNumber: t.endLineNumber,
              endColumn: t.endColumn + 1,
            })
          let a = o.getValueInRange(t),
            u = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, s)
          if (!u) return null
          let l = o.getValueInRange(u),
            c = gt.INSTANCE.navigateValueSet(t, a, u, l, n)
          return c
        })
      }
      loadForeignModule(e, t, n) {
        const r = (e, t) => this._host.fhr(e, t),
          i = S(n, r)
        let o = { host: i, getMirrorModels: () => this._getModels() }
        return this._foreignModuleFactory
          ? ((this._foreignModule = this._foreignModuleFactory(o, t)), Promise.resolve(_(this._foreignModule)))
          : Promise.reject(new Error('Unexpected usage'))
      }
      fmr(e, t) {
        if (!this._foreignModule || 'function' !== typeof this._foreignModule[e])
          return Promise.reject(new Error('Missing requestHandler or method: ' + e))
        try {
          return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, t))
        } catch (n) {
          return Promise.reject(n)
        }
      }
    }
    ;(yn._diffLimit = 1e5), (yn._suggestionsLimit = 1e4), 'function' === typeof importScripts && (b['a'].monaco = gn())
    let bn = !1
    function Cn(e) {
      if (bn) return
      bn = !0
      const t = new E(
        e => {
          self.postMessage(e)
        },
        t => new yn(t, e),
      )
      self.onmessage = e => {
        t.onmessage(e.data)
      }
    }
    function _n(e, t) {
      void 0 === t && (t = !1)
      var n = e.length,
        r = 0,
        i = '',
        o = 0,
        s = 16,
        a = 0,
        u = 0,
        l = 0,
        c = 0,
        h = 0
      function f(t, n) {
        var i = 0,
          o = 0
        while (i < t || !n) {
          var s = e.charCodeAt(r)
          if (s >= 48 && s <= 57) o = 16 * o + s - 48
          else if (s >= 65 && s <= 70) o = 16 * o + s - 65 + 10
          else {
            if (!(s >= 97 && s <= 102)) break
            o = 16 * o + s - 97 + 10
          }
          r++, i++
        }
        return i < t && (o = -1), o
      }
      function d(e) {
        ;(r = e), (i = ''), (o = 0), (s = 16), (h = 0)
      }
      function m() {
        var t = r
        if (48 === e.charCodeAt(r)) r++
        else {
          r++
          while (r < e.length && An(e.charCodeAt(r))) r++
        }
        if (r < e.length && 46 === e.charCodeAt(r)) {
          if ((r++, !(r < e.length && An(e.charCodeAt(r))))) return (h = 3), e.substring(t, r)
          r++
          while (r < e.length && An(e.charCodeAt(r))) r++
        }
        var n = r
        if (r < e.length && (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r)))
          if (
            (r++,
            ((r < e.length && 43 === e.charCodeAt(r)) || 45 === e.charCodeAt(r)) && r++,
            r < e.length && An(e.charCodeAt(r)))
          ) {
            r++
            while (r < e.length && An(e.charCodeAt(r))) r++
            n = r
          } else h = 3
        return e.substring(t, n)
      }
      function g() {
        var t = '',
          i = r
        while (1) {
          if (r >= n) {
            ;(t += e.substring(i, r)), (h = 2)
            break
          }
          var o = e.charCodeAt(r)
          if (34 === o) {
            ;(t += e.substring(i, r)), r++
            break
          }
          if (92 !== o) {
            if (o >= 0 && o <= 31) {
              if (wn(o)) {
                ;(t += e.substring(i, r)), (h = 2)
                break
              }
              h = 6
            }
            r++
          } else {
            if (((t += e.substring(i, r)), r++, r >= n)) {
              h = 2
              break
            }
            var s = e.charCodeAt(r++)
            switch (s) {
              case 34:
                t += '"'
                break
              case 92:
                t += '\\'
                break
              case 47:
                t += '/'
                break
              case 98:
                t += '\b'
                break
              case 102:
                t += '\f'
                break
              case 110:
                t += '\n'
                break
              case 114:
                t += '\r'
                break
              case 116:
                t += '\t'
                break
              case 117:
                var a = f(4, !0)
                a >= 0 ? (t += String.fromCharCode(a)) : (h = 4)
                break
              default:
                h = 5
            }
            i = r
          }
        }
        return t
      }
      function p() {
        if (((i = ''), (h = 0), (o = r), (u = a), (c = l), r >= n)) return (o = n), (s = 17)
        var t = e.charCodeAt(r)
        if (Sn(t)) {
          do {
            r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r))
          } while (Sn(t))
          return (s = 15)
        }
        if (wn(t))
          return (
            r++,
            (i += String.fromCharCode(t)),
            13 === t && 10 === e.charCodeAt(r) && (r++, (i += '\n')),
            a++,
            (l = r),
            (s = 14)
          )
        switch (t) {
          case 123:
            return r++, (s = 1)
          case 125:
            return r++, (s = 2)
          case 91:
            return r++, (s = 3)
          case 93:
            return r++, (s = 4)
          case 58:
            return r++, (s = 6)
          case 44:
            return r++, (s = 5)
          case 34:
            return r++, (i = g()), (s = 10)
          case 47:
            var f = r - 1
            if (47 === e.charCodeAt(r + 1)) {
              r += 2
              while (r < n) {
                if (wn(e.charCodeAt(r))) break
                r++
              }
              return (i = e.substring(f, r)), (s = 12)
            }
            if (42 === e.charCodeAt(r + 1)) {
              r += 2
              var d = n - 1,
                p = !1
              while (r < d) {
                var y = e.charCodeAt(r)
                if (42 === y && 47 === e.charCodeAt(r + 1)) {
                  ;(r += 2), (p = !0)
                  break
                }
                r++, wn(y) && (13 === y && 10 === e.charCodeAt(r) && r++, a++, (l = r))
              }
              return p || (r++, (h = 1)), (i = e.substring(f, r)), (s = 13)
            }
            return (i += String.fromCharCode(t)), r++, (s = 16)
          case 45:
            if (((i += String.fromCharCode(t)), r++, r === n || !An(e.charCodeAt(r)))) return (s = 16)
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (i += m()), (s = 11)
          default:
            while (r < n && v(t)) r++, (t = e.charCodeAt(r))
            if (o !== r) {
              switch (((i = e.substring(o, r)), i)) {
                case 'true':
                  return (s = 8)
                case 'false':
                  return (s = 9)
                case 'null':
                  return (s = 7)
              }
              return (s = 16)
            }
            return (i += String.fromCharCode(t)), r++, (s = 16)
        }
      }
      function v(e) {
        if (Sn(e) || wn(e)) return !1
        switch (e) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1
        }
        return !0
      }
      function y() {
        var e
        do {
          e = p()
        } while (e >= 12 && e <= 15)
        return e
      }
      return {
        setPosition: d,
        getPosition: function() {
          return r
        },
        scan: t ? y : p,
        getToken: function() {
          return s
        },
        getTokenValue: function() {
          return i
        },
        getTokenOffset: function() {
          return o
        },
        getTokenLength: function() {
          return r - o
        },
        getTokenStartLine: function() {
          return u
        },
        getTokenStartCharacter: function() {
          return o - c
        },
        getTokenError: function() {
          return h
        },
      }
    }
    function Sn(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (e >= 8192 && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      )
    }
    function wn(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e
    }
    function An(e) {
      return e >= 48 && e <= 57
    }
    function En(e, t, n) {
      var r, i, o, s, a
      if (t) {
        ;(s = t.offset), (a = s + t.length), (o = s)
        while (o > 0 && !kn(e, o - 1)) o--
        var u = a
        while (u < e.length && !kn(e, u)) u++
        ;(i = e.substring(o, u)), (r = Nn(i, n))
      } else (i = e), (r = 0), (o = 0), (s = 0), (a = e.length)
      var l,
        c = Ln(n, e),
        h = !1,
        f = 0
      l = n.insertSpaces ? xn(' ', n.tabSize || 4) : '\t'
      var d = _n(i, !1),
        m = !1
      function g() {
        return c + xn(l, r + f)
      }
      function p() {
        var e = d.scan()
        h = !1
        while (15 === e || 14 === e) (h = h || 14 === e), (e = d.scan())
        return (m = 16 === e || 0 !== d.getTokenError()), e
      }
      var v = []
      function y(t, n, r) {
        !m && n < a && r > s && e.substring(n, r) !== t && v.push({ offset: n, length: r - n, content: t })
      }
      var b = p()
      if (17 !== b) {
        var C = d.getTokenOffset() + o,
          _ = xn(l, r)
        y(_, o, C)
      }
      while (17 !== b) {
        var S = d.getTokenOffset() + d.getTokenLength() + o,
          w = p(),
          A = ''
        while (!h && (12 === w || 13 === w)) {
          var E = d.getTokenOffset() + o
          y(' ', S, E), (S = d.getTokenOffset() + d.getTokenLength() + o), (A = 12 === w ? g() : ''), (w = p())
        }
        if (2 === w) 1 !== b && (f--, (A = g()))
        else if (4 === w) 3 !== b && (f--, (A = g()))
        else {
          switch (b) {
            case 3:
            case 1:
              f++, (A = g())
              break
            case 5:
            case 12:
              A = g()
              break
            case 13:
              A = h ? g() : ' '
              break
            case 6:
              A = ' '
              break
            case 10:
              if (6 === w) {
                A = ''
                break
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === w || 13 === w ? (A = ' ') : 5 !== w && 17 !== w && (m = !0)
              break
            case 16:
              m = !0
              break
          }
          !h || (12 !== w && 13 !== w) || (A = g())
        }
        var x = d.getTokenOffset() + o
        y(A, S, x), (b = w)
      }
      return v
    }
    function xn(e, t) {
      for (var n = '', r = 0; r < t; r++) n += e
      return n
    }
    function Nn(e, t) {
      var n = 0,
        r = 0,
        i = t.tabSize || 4
      while (n < e.length) {
        var o = e.charAt(n)
        if (' ' === o) r++
        else {
          if ('\t' !== o) break
          r += i
        }
        n++
      }
      return Math.floor(r / i)
    }
    function Ln(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t.charAt(n)
        if ('\r' === r) return n + 1 < t.length && '\n' === t.charAt(n + 1) ? '\r\n' : '\r'
        if ('\n' === r) return '\n'
      }
      return (e && e.eol) || '\n'
    }
    function kn(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t))
    }
    var Tn
    function On(e, t, n) {
      void 0 === t && (t = []), void 0 === n && (n = Tn.DEFAULT)
      var r = null,
        i = [],
        o = []
      function s(e) {
        Array.isArray(i) ? i.push(e) : null !== r && (i[r] = e)
      }
      var a = {
        onObjectBegin: function() {
          var e = {}
          s(e), o.push(i), (i = e), (r = null)
        },
        onObjectProperty: function(e) {
          r = e
        },
        onObjectEnd: function() {
          i = o.pop()
        },
        onArrayBegin: function() {
          var e = []
          s(e), o.push(i), (i = e), (r = null)
        },
        onArrayEnd: function() {
          i = o.pop()
        },
        onLiteralValue: s,
        onError: function(e, n, r) {
          t.push({ error: e, offset: n, length: r })
        },
      }
      return Dn(e, a, n), i[0]
    }
    function In(e) {
      if (!e.parent || !e.parent.children) return []
      var t = In(e.parent)
      if ('property' === e.parent.type) {
        var n = e.parent.children[0].value
        t.push(n)
      } else if ('array' === e.parent.type) {
        var r = e.parent.children.indexOf(e)
        ;-1 !== r && t.push(r)
      }
      return t
    }
    function Mn(e) {
      switch (e.type) {
        case 'array':
          return e.children.map(Mn)
        case 'object':
          for (var t = Object.create(null), n = 0, r = e.children; n < r.length; n++) {
            var i = r[n],
              o = i.children[1]
            o && (t[i.children[0].value] = Mn(o))
          }
          return t
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
          return e.value
        default:
          return
      }
    }
    function Pn(e, t, n) {
      return void 0 === n && (n = !1), (t >= e.offset && t < e.offset + e.length) || (n && t === e.offset + e.length)
    }
    function Rn(e, t, n) {
      if ((void 0 === n && (n = !1), Pn(e, t, n))) {
        var r = e.children
        if (Array.isArray(r))
          for (var i = 0; i < r.length && r[i].offset <= t; i++) {
            var o = Rn(r[i], t, n)
            if (o) return o
          }
        return e
      }
    }
    function Dn(e, t, n) {
      void 0 === n && (n = Tn.DEFAULT)
      var r = _n(e, !1)
      function i(e) {
        return e
          ? function() {
              return e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter())
            }
          : function() {
              return !0
            }
      }
      function o(e) {
        return e
          ? function(t) {
              return e(t, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter())
            }
          : function() {
              return !0
            }
      }
      var s = i(t.onObjectBegin),
        a = o(t.onObjectProperty),
        u = i(t.onObjectEnd),
        l = i(t.onArrayBegin),
        c = i(t.onArrayEnd),
        h = o(t.onLiteralValue),
        f = o(t.onSeparator),
        d = i(t.onComment),
        m = o(t.onError),
        g = n && n.disallowComments,
        p = n && n.allowTrailingComma
      function v() {
        while (1) {
          var e = r.scan()
          switch (r.getTokenError()) {
            case 4:
              y(14)
              break
            case 5:
              y(15)
              break
            case 3:
              y(13)
              break
            case 1:
              g || y(11)
              break
            case 2:
              y(12)
              break
            case 6:
              y(16)
              break
          }
          switch (e) {
            case 12:
            case 13:
              g ? y(10) : d()
              break
            case 16:
              y(1)
              break
            case 15:
            case 14:
              break
            default:
              return e
          }
        }
      }
      function y(e, t, n) {
        if ((void 0 === t && (t = []), void 0 === n && (n = []), m(e), t.length + n.length > 0)) {
          var i = r.getToken()
          while (17 !== i) {
            if (-1 !== t.indexOf(i)) {
              v()
              break
            }
            if (-1 !== n.indexOf(i)) break
            i = v()
          }
        }
      }
      function b(e) {
        var t = r.getTokenValue()
        return e ? h(t) : a(t), v(), !0
      }
      function C() {
        switch (r.getToken()) {
          case 11:
            var e = 0
            try {
              ;(e = JSON.parse(r.getTokenValue())), 'number' !== typeof e && (y(2), (e = 0))
            } catch (t) {
              y(2)
            }
            h(e)
            break
          case 7:
            h(null)
            break
          case 8:
            h(!0)
            break
          case 9:
            h(!1)
            break
          default:
            return !1
        }
        return v(), !0
      }
      function _() {
        return 10 !== r.getToken()
          ? (y(3, [], [2, 5]), !1)
          : (b(!1), 6 === r.getToken() ? (f(':'), v(), A() || y(4, [], [2, 5])) : y(5, [], [2, 5]), !0)
      }
      function S() {
        s(), v()
        var e = !1
        while (2 !== r.getToken() && 17 !== r.getToken()) {
          if (5 === r.getToken()) {
            if ((e || y(4, [], []), f(','), v(), 2 === r.getToken() && p)) break
          } else e && y(6, [], [])
          _() || y(4, [], [2, 5]), (e = !0)
        }
        return u(), 2 !== r.getToken() ? y(7, [2], []) : v(), !0
      }
      function w() {
        l(), v()
        var e = !1
        while (4 !== r.getToken() && 17 !== r.getToken()) {
          if (5 === r.getToken()) {
            if ((e || y(4, [], []), f(','), v(), 4 === r.getToken() && p)) break
          } else e && y(6, [], [])
          A() || y(4, [], [4, 5]), (e = !0)
        }
        return c(), 4 !== r.getToken() ? y(8, [4], []) : v(), !0
      }
      function A() {
        switch (r.getToken()) {
          case 3:
            return w()
          case 1:
            return S()
          case 10:
            return b(!0)
          default:
            return C()
        }
      }
      return (
        v(),
        17 === r.getToken()
          ? !!n.allowEmptyContent || (y(4, [], []), !1)
          : A()
          ? (17 !== r.getToken() && y(9, [], []), !0)
          : (y(4, [], []), !1)
      )
    }
    ;(self.onmessage = e => {
      bn || Cn(null)
    }),
      (function(e) {
        e.DEFAULT = { allowTrailingComma: !1 }
      })(Tn || (Tn = {}))
    var Fn,
      jn,
      Un,
      Vn,
      $n,
      Wn,
      qn,
      Bn,
      Kn,
      Hn,
      Yn,
      Gn,
      zn,
      Jn,
      Qn,
      Xn,
      Zn,
      er,
      tr,
      nr,
      rr = _n,
      ir = On,
      or = Rn,
      sr = In,
      ar = Mn
    function ur(e, t, n) {
      return En(e, t, n)
    }
    function lr(e, t) {
      if (e === t) return !0
      if (null === e || void 0 === e || null === t || void 0 === t) return !1
      if (typeof e !== typeof t) return !1
      if ('object' !== typeof e) return !1
      if (Array.isArray(e) !== Array.isArray(t)) return !1
      var n, r
      if (Array.isArray(e)) {
        if (e.length !== t.length) return !1
        for (n = 0; n < e.length; n++) if (!lr(e[n], t[n])) return !1
      } else {
        var i = []
        for (r in e) i.push(r)
        i.sort()
        var o = []
        for (r in t) o.push(r)
        if ((o.sort(), !lr(i, o))) return !1
        for (n = 0; n < i.length; n++) if (!lr(e[i[n]], t[i[n]])) return !1
      }
      return !0
    }
    function cr(e) {
      return 'number' === typeof e
    }
    function hr(e) {
      return 'undefined' !== typeof e
    }
    function fr(e) {
      return 'boolean' === typeof e
    }
    function dr(e) {
      return 'string' === typeof e
    }
    ;(function(e) {
      function t(e, t) {
        return { line: e, character: t }
      }
      function n(e) {
        var t = e
        return qr.objectLiteral(t) && qr.number(t.line) && qr.number(t.character)
      }
      ;(e.create = t), (e.is = n)
    })(Fn || (Fn = {})),
      (function(e) {
        function t(e, t, n, r) {
          if (qr.number(e) && qr.number(t) && qr.number(n) && qr.number(r))
            return { start: Fn.create(e, t), end: Fn.create(n, r) }
          if (Fn.is(e) && Fn.is(t)) return { start: e, end: t }
          throw new Error('Range#create called with invalid arguments[' + e + ', ' + t + ', ' + n + ', ' + r + ']')
        }
        function n(e) {
          var t = e
          return qr.objectLiteral(t) && Fn.is(t.start) && Fn.is(t.end)
        }
        ;(e.create = t), (e.is = n)
      })(jn || (jn = {})),
      (function(e) {
        function t(e, t) {
          return { uri: e, range: t }
        }
        function n(e) {
          var t = e
          return qr.defined(t) && jn.is(t.range) && (qr.string(t.uri) || qr.undefined(t.uri))
        }
        ;(e.create = t), (e.is = n)
      })(Un || (Un = {})),
      (function(e) {
        function t(e, t, n, r) {
          return { targetUri: e, targetRange: t, targetSelectionRange: n, originSelectionRange: r }
        }
        function n(e) {
          var t = e
          return (
            qr.defined(t) &&
            jn.is(t.targetRange) &&
            qr.string(t.targetUri) &&
            (jn.is(t.targetSelectionRange) || qr.undefined(t.targetSelectionRange)) &&
            (jn.is(t.originSelectionRange) || qr.undefined(t.originSelectionRange))
          )
        }
        ;(e.create = t), (e.is = n)
      })(Vn || (Vn = {})),
      (function(e) {
        function t(e, t, n, r) {
          return { red: e, green: t, blue: n, alpha: r }
        }
        function n(e) {
          var t = e
          return qr.number(t.red) && qr.number(t.green) && qr.number(t.blue) && qr.number(t.alpha)
        }
        ;(e.create = t), (e.is = n)
      })($n || ($n = {})),
      (function(e) {
        function t(e, t) {
          return { range: e, color: t }
        }
        function n(e) {
          var t = e
          return jn.is(t.range) && $n.is(t.color)
        }
        ;(e.create = t), (e.is = n)
      })(Wn || (Wn = {})),
      (function(e) {
        function t(e, t, n) {
          return { label: e, textEdit: t, additionalTextEdits: n }
        }
        function n(e) {
          var t = e
          return (
            qr.string(t.label) &&
            (qr.undefined(t.textEdit) || Qn.is(t)) &&
            (qr.undefined(t.additionalTextEdits) || qr.typedArray(t.additionalTextEdits, Qn.is))
          )
        }
        ;(e.create = t), (e.is = n)
      })(qn || (qn = {})),
      (function(e) {
        ;(e['Comment'] = 'comment'), (e['Imports'] = 'imports'), (e['Region'] = 'region')
      })(Bn || (Bn = {})),
      (function(e) {
        function t(e, t, n, r, i) {
          var o = { startLine: e, endLine: t }
          return (
            qr.defined(n) && (o.startCharacter = n),
            qr.defined(r) && (o.endCharacter = r),
            qr.defined(i) && (o.kind = i),
            o
          )
        }
        function n(e) {
          var t = e
          return (
            qr.number(t.startLine) &&
            qr.number(t.startLine) &&
            (qr.undefined(t.startCharacter) || qr.number(t.startCharacter)) &&
            (qr.undefined(t.endCharacter) || qr.number(t.endCharacter)) &&
            (qr.undefined(t.kind) || qr.string(t.kind))
          )
        }
        ;(e.create = t), (e.is = n)
      })(Kn || (Kn = {})),
      (function(e) {
        function t(e, t) {
          return { location: e, message: t }
        }
        function n(e) {
          var t = e
          return qr.defined(t) && Un.is(t.location) && qr.string(t.message)
        }
        ;(e.create = t), (e.is = n)
      })(Hn || (Hn = {})),
      (function(e) {
        ;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
      })(Yn || (Yn = {})),
      (function(e) {
        ;(e.Unnecessary = 1), (e.Deprecated = 2)
      })(Gn || (Gn = {})),
      (function(e) {
        function t(e, t, n, r, i, o) {
          var s = { range: e, message: t }
          return (
            qr.defined(n) && (s.severity = n),
            qr.defined(r) && (s.code = r),
            qr.defined(i) && (s.source = i),
            qr.defined(o) && (s.relatedInformation = o),
            s
          )
        }
        function n(e) {
          var t = e
          return (
            qr.defined(t) &&
            jn.is(t.range) &&
            qr.string(t.message) &&
            (qr.number(t.severity) || qr.undefined(t.severity)) &&
            (qr.number(t.code) || qr.string(t.code) || qr.undefined(t.code)) &&
            (qr.string(t.source) || qr.undefined(t.source)) &&
            (qr.undefined(t.relatedInformation) || qr.typedArray(t.relatedInformation, Hn.is))
          )
        }
        ;(e.create = t), (e.is = n)
      })(zn || (zn = {})),
      (function(e) {
        function t(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
          var i = { title: e, command: t }
          return qr.defined(n) && n.length > 0 && (i.arguments = n), i
        }
        function n(e) {
          var t = e
          return qr.defined(t) && qr.string(t.title) && qr.string(t.command)
        }
        ;(e.create = t), (e.is = n)
      })(Jn || (Jn = {})),
      (function(e) {
        function t(e, t) {
          return { range: e, newText: t }
        }
        function n(e, t) {
          return { range: { start: e, end: e }, newText: t }
        }
        function r(e) {
          return { range: e, newText: '' }
        }
        function i(e) {
          var t = e
          return qr.objectLiteral(t) && qr.string(t.newText) && jn.is(t.range)
        }
        ;(e.replace = t), (e.insert = n), (e.del = r), (e.is = i)
      })(Qn || (Qn = {})),
      (function(e) {
        function t(e, t) {
          return { textDocument: e, edits: t }
        }
        function n(e) {
          var t = e
          return qr.defined(t) && gr.is(t.textDocument) && Array.isArray(t.edits)
        }
        ;(e.create = t), (e.is = n)
      })(Xn || (Xn = {})),
      (function(e) {
        function t(e, t) {
          var n = { kind: 'create', uri: e }
          return void 0 === t || (void 0 === t.overwrite && void 0 === t.ignoreIfExists) || (n.options = t), n
        }
        function n(e) {
          var t = e
          return (
            t &&
            'create' === t.kind &&
            qr.string(t.uri) &&
            (void 0 === t.options ||
              ((void 0 === t.options.overwrite || qr.boolean(t.options.overwrite)) &&
                (void 0 === t.options.ignoreIfExists || qr.boolean(t.options.ignoreIfExists))))
          )
        }
        ;(e.create = t), (e.is = n)
      })(Zn || (Zn = {})),
      (function(e) {
        function t(e, t, n) {
          var r = { kind: 'rename', oldUri: e, newUri: t }
          return void 0 === n || (void 0 === n.overwrite && void 0 === n.ignoreIfExists) || (r.options = n), r
        }
        function n(e) {
          var t = e
          return (
            t &&
            'rename' === t.kind &&
            qr.string(t.oldUri) &&
            qr.string(t.newUri) &&
            (void 0 === t.options ||
              ((void 0 === t.options.overwrite || qr.boolean(t.options.overwrite)) &&
                (void 0 === t.options.ignoreIfExists || qr.boolean(t.options.ignoreIfExists))))
          )
        }
        ;(e.create = t), (e.is = n)
      })(er || (er = {})),
      (function(e) {
        function t(e, t) {
          var n = { kind: 'delete', uri: e }
          return void 0 === t || (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) || (n.options = t), n
        }
        function n(e) {
          var t = e
          return (
            t &&
            'delete' === t.kind &&
            qr.string(t.uri) &&
            (void 0 === t.options ||
              ((void 0 === t.options.recursive || qr.boolean(t.options.recursive)) &&
                (void 0 === t.options.ignoreIfNotExists || qr.boolean(t.options.ignoreIfNotExists))))
          )
        }
        ;(e.create = t), (e.is = n)
      })(tr || (tr = {})),
      (function(e) {
        function t(e) {
          var t = e
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function(e) {
                return qr.string(e.kind) ? Zn.is(e) || er.is(e) || tr.is(e) : Xn.is(e)
              }))
          )
        }
        e.is = t
      })(nr || (nr = {}))
    var mr,
      gr,
      pr,
      vr,
      yr,
      br,
      Cr,
      _r,
      Sr,
      wr,
      Ar,
      Er,
      xr,
      Nr,
      Lr,
      kr,
      Tr,
      Or,
      Ir,
      Mr,
      Pr,
      Rr,
      Dr,
      Fr,
      jr,
      Ur,
      Vr,
      $r = (function() {
        function e(e) {
          this.edits = e
        }
        return (
          (e.prototype.insert = function(e, t) {
            this.edits.push(Qn.insert(e, t))
          }),
          (e.prototype.replace = function(e, t) {
            this.edits.push(Qn.replace(e, t))
          }),
          (e.prototype.delete = function(e) {
            this.edits.push(Qn.del(e))
          }),
          (e.prototype.add = function(e) {
            this.edits.push(e)
          }),
          (e.prototype.all = function() {
            return this.edits
          }),
          (e.prototype.clear = function() {
            this.edits.splice(0, this.edits.length)
          }),
          e
        )
      })()
    ;(function() {
      function e(e) {
        var t = this
        ;(this._textEditChanges = Object.create(null)),
          e &&
            ((this._workspaceEdit = e),
            e.documentChanges
              ? e.documentChanges.forEach(function(e) {
                  if (Xn.is(e)) {
                    var n = new $r(e.edits)
                    t._textEditChanges[e.textDocument.uri] = n
                  }
                })
              : e.changes &&
                Object.keys(e.changes).forEach(function(n) {
                  var r = new $r(e.changes[n])
                  t._textEditChanges[n] = r
                }))
      }
      Object.defineProperty(e.prototype, 'edit', {
        get: function() {
          return this._workspaceEdit
        },
        enumerable: !0,
        configurable: !0,
      }),
        (e.prototype.getTextEditChange = function(e) {
          if (gr.is(e)) {
            if (
              (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }),
              !this._workspaceEdit.documentChanges)
            )
              throw new Error('Workspace edit is not configured for document changes.')
            var t = e,
              n = this._textEditChanges[t.uri]
            if (!n) {
              var r = [],
                i = { textDocument: t, edits: r }
              this._workspaceEdit.documentChanges.push(i), (n = new $r(r)), (this._textEditChanges[t.uri] = n)
            }
            return n
          }
          if (
            (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }),
            !this._workspaceEdit.changes)
          )
            throw new Error('Workspace edit is not configured for normal text edit changes.')
          n = this._textEditChanges[e]
          if (!n) {
            r = []
            ;(this._workspaceEdit.changes[e] = r), (n = new $r(r)), (this._textEditChanges[e] = n)
          }
          return n
        }),
        (e.prototype.createFile = function(e, t) {
          this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(Zn.create(e, t))
        }),
        (e.prototype.renameFile = function(e, t, n) {
          this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(er.create(e, t, n))
        }),
        (e.prototype.deleteFile = function(e, t) {
          this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(tr.create(e, t))
        }),
        (e.prototype.checkDocumentChanges = function() {
          if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
            throw new Error('Workspace edit is not configured for document changes.')
        })
    })()
    ;(function(e) {
      function t(e) {
        return { uri: e }
      }
      function n(e) {
        var t = e
        return qr.defined(t) && qr.string(t.uri)
      }
      ;(e.create = t), (e.is = n)
    })(mr || (mr = {})),
      (function(e) {
        function t(e, t) {
          return { uri: e, version: t }
        }
        function n(e) {
          var t = e
          return qr.defined(t) && qr.string(t.uri) && (null === t.version || qr.number(t.version))
        }
        ;(e.create = t), (e.is = n)
      })(gr || (gr = {})),
      (function(e) {
        function t(e, t, n, r) {
          return { uri: e, languageId: t, version: n, text: r }
        }
        function n(e) {
          var t = e
          return (
            qr.defined(t) && qr.string(t.uri) && qr.string(t.languageId) && qr.number(t.version) && qr.string(t.text)
          )
        }
        ;(e.create = t), (e.is = n)
      })(pr || (pr = {})),
      (function(e) {
        ;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
      })(vr || (vr = {})),
      (function(e) {
        function t(t) {
          var n = t
          return n === e.PlainText || n === e.Markdown
        }
        e.is = t
      })(vr || (vr = {})),
      (function(e) {
        function t(e) {
          var t = e
          return qr.objectLiteral(e) && vr.is(t.kind) && qr.string(t.value)
        }
        e.is = t
      })(yr || (yr = {})),
      (function(e) {
        ;(e.Text = 1),
          (e.Method = 2),
          (e.Function = 3),
          (e.Constructor = 4),
          (e.Field = 5),
          (e.Variable = 6),
          (e.Class = 7),
          (e.Interface = 8),
          (e.Module = 9),
          (e.Property = 10),
          (e.Unit = 11),
          (e.Value = 12),
          (e.Enum = 13),
          (e.Keyword = 14),
          (e.Snippet = 15),
          (e.Color = 16),
          (e.File = 17),
          (e.Reference = 18),
          (e.Folder = 19),
          (e.EnumMember = 20),
          (e.Constant = 21),
          (e.Struct = 22),
          (e.Event = 23),
          (e.Operator = 24),
          (e.TypeParameter = 25)
      })(br || (br = {})),
      (function(e) {
        ;(e.PlainText = 1), (e.Snippet = 2)
      })(Cr || (Cr = {})),
      (function(e) {
        e.Deprecated = 1
      })(_r || (_r = {})),
      (function(e) {
        function t(e) {
          return { label: e }
        }
        e.create = t
      })(Sr || (Sr = {})),
      (function(e) {
        function t(e, t) {
          return { items: e || [], isIncomplete: !!t }
        }
        e.create = t
      })(wr || (wr = {})),
      (function(e) {
        function t(e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
        }
        function n(e) {
          var t = e
          return qr.string(t) || (qr.objectLiteral(t) && qr.string(t.language) && qr.string(t.value))
        }
        ;(e.fromPlainText = t), (e.is = n)
      })(Ar || (Ar = {})),
      (function(e) {
        function t(e) {
          var t = e
          return (
            !!t &&
            qr.objectLiteral(t) &&
            (yr.is(t.contents) || Ar.is(t.contents) || qr.typedArray(t.contents, Ar.is)) &&
            (void 0 === e.range || jn.is(e.range))
          )
        }
        e.is = t
      })(Er || (Er = {})),
      (function(e) {
        function t(e, t) {
          return t ? { label: e, documentation: t } : { label: e }
        }
        e.create = t
      })(xr || (xr = {})),
      (function(e) {
        function t(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
          var i = { label: e }
          return qr.defined(t) && (i.documentation = t), qr.defined(n) ? (i.parameters = n) : (i.parameters = []), i
        }
        e.create = t
      })(Nr || (Nr = {})),
      (function(e) {
        ;(e.Text = 1), (e.Read = 2), (e.Write = 3)
      })(Lr || (Lr = {})),
      (function(e) {
        function t(e, t) {
          var n = { range: e }
          return qr.number(t) && (n.kind = t), n
        }
        e.create = t
      })(kr || (kr = {})),
      (function(e) {
        ;(e.File = 1),
          (e.Module = 2),
          (e.Namespace = 3),
          (e.Package = 4),
          (e.Class = 5),
          (e.Method = 6),
          (e.Property = 7),
          (e.Field = 8),
          (e.Constructor = 9),
          (e.Enum = 10),
          (e.Interface = 11),
          (e.Function = 12),
          (e.Variable = 13),
          (e.Constant = 14),
          (e.String = 15),
          (e.Number = 16),
          (e.Boolean = 17),
          (e.Array = 18),
          (e.Object = 19),
          (e.Key = 20),
          (e.Null = 21),
          (e.EnumMember = 22),
          (e.Struct = 23),
          (e.Event = 24),
          (e.Operator = 25),
          (e.TypeParameter = 26)
      })(Tr || (Tr = {})),
      (function(e) {
        e.Deprecated = 1
      })(Or || (Or = {})),
      (function(e) {
        function t(e, t, n, r, i) {
          var o = { name: e, kind: t, location: { uri: r, range: n } }
          return i && (o.containerName = i), o
        }
        e.create = t
      })(Ir || (Ir = {})),
      (function(e) {
        function t(e, t, n, r, i, o) {
          var s = { name: e, detail: t, kind: n, range: r, selectionRange: i }
          return void 0 !== o && (s.children = o), s
        }
        function n(e) {
          var t = e
          return (
            t &&
            qr.string(t.name) &&
            qr.number(t.kind) &&
            jn.is(t.range) &&
            jn.is(t.selectionRange) &&
            (void 0 === t.detail || qr.string(t.detail)) &&
            (void 0 === t.deprecated || qr.boolean(t.deprecated)) &&
            (void 0 === t.children || Array.isArray(t.children))
          )
        }
        ;(e.create = t), (e.is = n)
      })(Mr || (Mr = {})),
      (function(e) {
        ;(e.Empty = ''),
          (e.QuickFix = 'quickfix'),
          (e.Refactor = 'refactor'),
          (e.RefactorExtract = 'refactor.extract'),
          (e.RefactorInline = 'refactor.inline'),
          (e.RefactorRewrite = 'refactor.rewrite'),
          (e.Source = 'source'),
          (e.SourceOrganizeImports = 'source.organizeImports'),
          (e.SourceFixAll = 'source.fixAll')
      })(Pr || (Pr = {})),
      (function(e) {
        function t(e, t) {
          var n = { diagnostics: e }
          return void 0 !== t && null !== t && (n.only = t), n
        }
        function n(e) {
          var t = e
          return (
            qr.defined(t) &&
            qr.typedArray(t.diagnostics, zn.is) &&
            (void 0 === t.only || qr.typedArray(t.only, qr.string))
          )
        }
        ;(e.create = t), (e.is = n)
      })(Rr || (Rr = {})),
      (function(e) {
        function t(e, t, n) {
          var r = { title: e }
          return Jn.is(t) ? (r.command = t) : (r.edit = t), void 0 !== n && (r.kind = n), r
        }
        function n(e) {
          var t = e
          return (
            t &&
            qr.string(t.title) &&
            (void 0 === t.diagnostics || qr.typedArray(t.diagnostics, zn.is)) &&
            (void 0 === t.kind || qr.string(t.kind)) &&
            (void 0 !== t.edit || void 0 !== t.command) &&
            (void 0 === t.command || Jn.is(t.command)) &&
            (void 0 === t.isPreferred || qr.boolean(t.isPreferred)) &&
            (void 0 === t.edit || nr.is(t.edit))
          )
        }
        ;(e.create = t), (e.is = n)
      })(Dr || (Dr = {})),
      (function(e) {
        function t(e, t) {
          var n = { range: e }
          return qr.defined(t) && (n.data = t), n
        }
        function n(e) {
          var t = e
          return qr.defined(t) && jn.is(t.range) && (qr.undefined(t.command) || Jn.is(t.command))
        }
        ;(e.create = t), (e.is = n)
      })(Fr || (Fr = {})),
      (function(e) {
        function t(e, t) {
          return { tabSize: e, insertSpaces: t }
        }
        function n(e) {
          var t = e
          return qr.defined(t) && qr.number(t.tabSize) && qr.boolean(t.insertSpaces)
        }
        ;(e.create = t), (e.is = n)
      })(jr || (jr = {})),
      (function(e) {
        function t(e, t, n) {
          return { range: e, target: t, data: n }
        }
        function n(e) {
          var t = e
          return qr.defined(t) && jn.is(t.range) && (qr.undefined(t.target) || qr.string(t.target))
        }
        ;(e.create = t), (e.is = n)
      })(Ur || (Ur = {})),
      (function(e) {
        function t(e, t) {
          return { range: e, parent: t }
        }
        function n(t) {
          var n = t
          return void 0 !== n && jn.is(n.range) && (void 0 === n.parent || e.is(n.parent))
        }
        ;(e.create = t), (e.is = n)
      })(Vr || (Vr = {}))
    var Wr
    ;(function(e) {
      function t(e, t, n, r) {
        return new Br(e, t, n, r)
      }
      function n(e) {
        var t = e
        return !!(
          qr.defined(t) &&
          qr.string(t.uri) &&
          (qr.undefined(t.languageId) || qr.string(t.languageId)) &&
          qr.number(t.lineCount) &&
          qr.func(t.getText) &&
          qr.func(t.positionAt) &&
          qr.func(t.offsetAt)
        )
      }
      function r(e, t) {
        for (
          var n = e.getText(),
            r = i(t, function(e, t) {
              var n = e.range.start.line - t.range.start.line
              return 0 === n ? e.range.start.character - t.range.start.character : n
            }),
            o = n.length,
            s = r.length - 1;
          s >= 0;
          s--
        ) {
          var a = r[s],
            u = e.offsetAt(a.range.start),
            l = e.offsetAt(a.range.end)
          if (!(l <= o)) throw new Error('Overlapping edit')
          ;(n = n.substring(0, u) + a.newText + n.substring(l, n.length)), (o = u)
        }
        return n
      }
      function i(e, t) {
        if (e.length <= 1) return e
        var n = (e.length / 2) | 0,
          r = e.slice(0, n),
          o = e.slice(n)
        i(r, t), i(o, t)
        var s = 0,
          a = 0,
          u = 0
        while (s < r.length && a < o.length) {
          var l = t(r[s], o[a])
          e[u++] = l <= 0 ? r[s++] : o[a++]
        }
        while (s < r.length) e[u++] = r[s++]
        while (a < o.length) e[u++] = o[a++]
        return e
      }
      ;(e.create = t), (e.is = n), (e.applyEdits = r)
    })(Wr || (Wr = {}))
    var qr,
      Br = (function() {
        function e(e, t, n, r) {
          ;(this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0)
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end)
              return this._content.substring(t, n)
            }
            return this._content
          }),
          (e.prototype.update = function(e, t) {
            ;(this._content = e.text), (this._version = t), (this._lineOffsets = void 0)
          }),
          (e.prototype.getLineOffsets = function() {
            if (void 0 === this._lineOffsets) {
              for (var e = [], t = this._content, n = !0, r = 0; r < t.length; r++) {
                n && (e.push(r), (n = !1))
                var i = t.charAt(r)
                ;(n = '\r' === i || '\n' === i), '\r' === i && r + 1 < t.length && '\n' === t.charAt(r + 1) && r++
              }
              n && t.length > 0 && e.push(t.length), (this._lineOffsets = e)
            }
            return this._lineOffsets
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0)
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length
            if (0 === r) return Fn.create(0, e)
            while (n < r) {
              var i = Math.floor((n + r) / 2)
              t[i] > e ? (r = i) : (n = i + 1)
            }
            var o = n - 1
            return Fn.create(o, e - t[o])
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets()
            if (e.line >= t.length) return this._content.length
            if (e.line < 0) return 0
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
            return Math.max(Math.min(n + e.character, r), n)
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
    ;(function(e) {
      var t = Object.prototype.toString
      function n(e) {
        return 'undefined' !== typeof e
      }
      function r(e) {
        return 'undefined' === typeof e
      }
      function i(e) {
        return !0 === e || !1 === e
      }
      function o(e) {
        return '[object String]' === t.call(e)
      }
      function s(e) {
        return '[object Number]' === t.call(e)
      }
      function a(e) {
        return '[object Function]' === t.call(e)
      }
      function u(e) {
        return null !== e && 'object' === typeof e
      }
      function l(e, t) {
        return Array.isArray(e) && e.every(t)
      }
      ;(e.defined = n),
        (e.undefined = r),
        (e.boolean = i),
        (e.string = o),
        (e.number = s),
        (e.func = a),
        (e.objectLiteral = u),
        (e.typedArray = l)
    })(qr || (qr = {}))
    var Kr,
      Hr,
      Yr,
      Gr = (function() {
        function e(e, t, n, r) {
          ;(this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0)
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end)
              return this._content.substring(t, n)
            }
            return this._content
          }),
          (e.prototype.update = function(t, n) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r]
              if (e.isIncremental(o)) {
                var s = Qr(o.range),
                  a = this.offsetAt(s.start),
                  u = this.offsetAt(s.end)
                this._content =
                  this._content.substring(0, a) + o.text + this._content.substring(u, this._content.length)
                var l = Math.max(s.start.line, 0),
                  c = Math.max(s.end.line, 0),
                  h = this._lineOffsets,
                  f = Jr(o.text, !1, a)
                if (c - l === f.length) for (var d = 0, m = f.length; d < m; d++) h[d + l + 1] = f[d]
                else
                  f.length < 1e4
                    ? h.splice.apply(h, [l + 1, c - l].concat(f))
                    : (this._lineOffsets = h = h.slice(0, l + 1).concat(f, h.slice(c + 1)))
                var g = o.text.length - (u - a)
                if (0 !== g) for (d = l + 1 + f.length, m = h.length; d < m; d++) h[d] = h[d] + g
              } else {
                if (!e.isFull(o)) throw new Error('Unknown change event received')
                ;(this._content = o.text), (this._lineOffsets = void 0)
              }
            }
            this._version = n
          }),
          (e.prototype.getLineOffsets = function() {
            return void 0 === this._lineOffsets && (this._lineOffsets = Jr(this._content, !0)), this._lineOffsets
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0)
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length
            if (0 === r) return { line: 0, character: e }
            while (n < r) {
              var i = Math.floor((n + r) / 2)
              t[i] > e ? (r = i) : (n = i + 1)
            }
            var o = n - 1
            return { line: o, character: e - t[o] }
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets()
            if (e.line >= t.length) return this._content.length
            if (e.line < 0) return 0
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
            return Math.max(Math.min(n + e.character, r), n)
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.isIncremental = function(e) {
            var t = e
            return (
              void 0 !== t &&
              null !== t &&
              'string' === typeof t.text &&
              void 0 !== t.range &&
              (void 0 === t.rangeLength || 'number' === typeof t.rangeLength)
            )
          }),
          (e.isFull = function(e) {
            var t = e
            return (
              void 0 !== t && null !== t && 'string' === typeof t.text && void 0 === t.range && void 0 === t.rangeLength
            )
          }),
          e
        )
      })()
    function zr(e, t) {
      if (e.length <= 1) return e
      var n = (e.length / 2) | 0,
        r = e.slice(0, n),
        i = e.slice(n)
      zr(r, t), zr(i, t)
      var o = 0,
        s = 0,
        a = 0
      while (o < r.length && s < i.length) {
        var u = t(r[o], i[s])
        e[a++] = u <= 0 ? r[o++] : i[s++]
      }
      while (o < r.length) e[a++] = r[o++]
      while (s < i.length) e[a++] = i[s++]
      return e
    }
    function Jr(e, t, n) {
      void 0 === n && (n = 0)
      for (var r = t ? [n] : [], i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i)
        ;(13 !== o && 10 !== o) ||
          (13 === o && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++, r.push(n + i + 1))
      }
      return r
    }
    function Qr(e) {
      var t = e.start,
        n = e.end
      return t.line > n.line || (t.line === n.line && t.character > n.character) ? { start: n, end: t } : e
    }
    function Xr(e) {
      var t = Qr(e.range)
      return t !== e.range ? { newText: e.newText, range: t } : e
    }
    function Zr(e, t) {
      var n
      return (
        (n =
          0 === t.length
            ? e
            : e.replace(/\{(\d+)\}/g, function(e, n) {
                var r = n[0]
                return 'undefined' !== typeof t[r] ? t[r] : e
              })),
        n
      )
    }
    function ei(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
      return Zr(t, n)
    }
    function ti(e) {
      return ei
    }
    ;(function(e) {
      function t(e, t, n, r) {
        return new Gr(e, t, n, r)
      }
      function n(e, t, n) {
        if (e instanceof Gr) return e.update(t, n), e
        throw new Error('TextDocument.update: document must be created by TextDocument.create')
      }
      function r(e, t) {
        for (
          var n = e.getText(),
            r = zr(t.map(Xr), function(e, t) {
              var n = e.range.start.line - t.range.start.line
              return 0 === n ? e.range.start.character - t.range.start.character : n
            }),
            i = 0,
            o = [],
            s = 0,
            a = r;
          s < a.length;
          s++
        ) {
          var u = a[s],
            l = e.offsetAt(u.range.start)
          if (l < i) throw new Error('Overlapping edit')
          l > i && o.push(n.substring(i, l)), u.newText.length && o.push(u.newText), (i = e.offsetAt(u.range.end))
        }
        return o.push(n.substr(i)), o.join('')
      }
      ;(e.create = t), (e.update = n), (e.applyEdits = r)
    })(Kr || (Kr = {})),
      (function(e) {
        ;(e[(e['Undefined'] = 0)] = 'Undefined'),
          (e[(e['EnumValueMismatch'] = 1)] = 'EnumValueMismatch'),
          (e[(e['UnexpectedEndOfComment'] = 257)] = 'UnexpectedEndOfComment'),
          (e[(e['UnexpectedEndOfString'] = 258)] = 'UnexpectedEndOfString'),
          (e[(e['UnexpectedEndOfNumber'] = 259)] = 'UnexpectedEndOfNumber'),
          (e[(e['InvalidUnicode'] = 260)] = 'InvalidUnicode'),
          (e[(e['InvalidEscapeCharacter'] = 261)] = 'InvalidEscapeCharacter'),
          (e[(e['InvalidCharacter'] = 262)] = 'InvalidCharacter'),
          (e[(e['PropertyExpected'] = 513)] = 'PropertyExpected'),
          (e[(e['CommaExpected'] = 514)] = 'CommaExpected'),
          (e[(e['ColonExpected'] = 515)] = 'ColonExpected'),
          (e[(e['ValueExpected'] = 516)] = 'ValueExpected'),
          (e[(e['CommaOrCloseBacketExpected'] = 517)] = 'CommaOrCloseBacketExpected'),
          (e[(e['CommaOrCloseBraceExpected'] = 518)] = 'CommaOrCloseBraceExpected'),
          (e[(e['TrailingComma'] = 519)] = 'TrailingComma'),
          (e[(e['DuplicateKey'] = 520)] = 'DuplicateKey'),
          (e[(e['CommentNotPermitted'] = 521)] = 'CommentNotPermitted'),
          (e[(e['SchemaResolveError'] = 768)] = 'SchemaResolveError')
      })(Hr || (Hr = {})),
      (function(e) {
        e.LATEST = {
          textDocument: {
            completion: {
              completionItem: { documentationFormat: [vr.Markdown, vr.PlainText], commitCharactersSupport: !0 },
            },
          },
        }
      })(Yr || (Yr = {}))
    var ni,
      ri = (function() {
        var e = function(t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              }),
            e(t, n)
          )
        }
        return function(t, n) {
          function r() {
            this.constructor = t
          }
          e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()))
        }
      })(),
      ii = ti(),
      oi = {
        'color-hex': {
          errorMessage: ii('colorHexFormatWarning', 'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'),
          pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
        },
        'date-time': {
          errorMessage: ii('dateTimeFormatWarning', 'String is not a RFC3339 date-time.'),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        date: {
          errorMessage: ii('dateFormatWarning', 'String is not a RFC3339 date.'),
          pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
        },
        time: {
          errorMessage: ii('timeFormatWarning', 'String is not a RFC3339 time.'),
          pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
        },
        email: {
          errorMessage: ii('emailFormatWarning', 'String is not an e-mail address.'),
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
      },
      si = (function() {
        function e(e, t, n) {
          void 0 === n && (n = 0), (this.offset = t), (this.length = n), (this.parent = e)
        }
        return (
          Object.defineProperty(e.prototype, 'children', {
            get: function() {
              return []
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.toString = function() {
            return (
              'type: ' +
              this.type +
              ' (' +
              this.offset +
              '/' +
              this.length +
              ')' +
              (this.parent ? ' parent: {' + this.parent.toString() + '}' : '')
            )
          }),
          e
        )
      })(),
      ai = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'null'), (r.value = null), r
        }
        return ri(t, e), t
      })(si),
      ui = (function(e) {
        function t(t, n, r) {
          var i = e.call(this, t, r) || this
          return (i.type = 'boolean'), (i.value = n), i
        }
        return ri(t, e), t
      })(si),
      li = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'array'), (r.items = []), r
        }
        return (
          ri(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.items
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })(si),
      ci = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'number'), (r.isInteger = !0), (r.value = Number.NaN), r
        }
        return ri(t, e), t
      })(si),
      hi = (function(e) {
        function t(t, n, r) {
          var i = e.call(this, t, n, r) || this
          return (i.type = 'string'), (i.value = ''), i
        }
        return ri(t, e), t
      })(si),
      fi = (function(e) {
        function t(t, n, r) {
          var i = e.call(this, t, n) || this
          return (i.type = 'property'), (i.colonOffset = -1), (i.keyNode = r), i
        }
        return (
          ri(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode]
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })(si),
      di = (function(e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this
          return (r.type = 'object'), (r.properties = []), r
        }
        return (
          ri(t, e),
          Object.defineProperty(t.prototype, 'children', {
            get: function() {
              return this.properties
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        )
      })(si)
    function mi(e) {
      return fr(e) ? (e ? {} : { not: {} }) : e
    }
    ;(function(e) {
      ;(e[(e['Key'] = 0)] = 'Key'), (e[(e['Enum'] = 1)] = 'Enum')
    })(ni || (ni = {}))
    var gi = (function() {
        function e(e, t) {
          void 0 === e && (e = -1), (this.focusOffset = e), (this.exclude = t), (this.schemas = [])
        }
        return (
          (e.prototype.add = function(e) {
            this.schemas.push(e)
          }),
          (e.prototype.merge = function(e) {
            Array.prototype.push.apply(this.schemas, e.schemas)
          }),
          (e.prototype.include = function(e) {
            return (-1 === this.focusOffset || _i(e, this.focusOffset)) && e !== this.exclude
          }),
          (e.prototype.newSub = function() {
            return new e(-1, this.exclude)
          }),
          e
        )
      })(),
      pi = (function() {
        function e() {}
        return (
          Object.defineProperty(e.prototype, 'schemas', {
            get: function() {
              return []
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.add = function(e) {}),
          (e.prototype.merge = function(e) {}),
          (e.prototype.include = function(e) {
            return !0
          }),
          (e.prototype.newSub = function() {
            return this
          }),
          (e.instance = new e()),
          e
        )
      })(),
      vi = (function() {
        function e() {
          ;(this.problems = []),
            (this.propertiesMatches = 0),
            (this.propertiesValueMatches = 0),
            (this.primaryValueMatches = 0),
            (this.enumValueMatch = !1),
            (this.enumValues = void 0)
        }
        return (
          (e.prototype.hasProblems = function() {
            return !!this.problems.length
          }),
          (e.prototype.mergeAll = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t]
              this.merge(r)
            }
          }),
          (e.prototype.merge = function(e) {
            this.problems = this.problems.concat(e.problems)
          }),
          (e.prototype.mergeEnumValues = function(e) {
            if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
              this.enumValues = this.enumValues.concat(e.enumValues)
              for (var t = 0, n = this.problems; t < n.length; t++) {
                var r = n[t]
                r.code === Hr.EnumValueMismatch &&
                  (r.message = ii(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    this.enumValues
                      .map(function(e) {
                        return JSON.stringify(e)
                      })
                      .join(', '),
                  ))
              }
            }
          }),
          (e.prototype.mergePropertyMatch = function(e) {
            this.merge(e),
              this.propertiesMatches++,
              (e.enumValueMatch || (!e.hasProblems() && e.propertiesMatches)) && this.propertiesValueMatches++,
              e.enumValueMatch && e.enumValues && 1 === e.enumValues.length && this.primaryValueMatches++
          }),
          (e.prototype.compare = function(e) {
            var t = this.hasProblems()
            return t !== e.hasProblems()
              ? t
                ? -1
                : 1
              : this.enumValueMatch !== e.enumValueMatch
              ? e.enumValueMatch
                ? -1
                : 1
              : this.primaryValueMatches !== e.primaryValueMatches
              ? this.primaryValueMatches - e.primaryValueMatches
              : this.propertiesValueMatches !== e.propertiesValueMatches
              ? this.propertiesValueMatches - e.propertiesValueMatches
              : this.propertiesMatches - e.propertiesMatches
          }),
          e
        )
      })()
    function yi(e, t) {
      return void 0 === t && (t = []), new Si(e, t, [])
    }
    function bi(e) {
      return ar(e)
    }
    function Ci(e) {
      return sr(e)
    }
    function _i(e, t, n) {
      return void 0 === n && (n = !1), (t >= e.offset && t < e.offset + e.length) || (n && t === e.offset + e.length)
    }
    var Si = (function() {
      function e(e, t, n) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          (this.root = e),
          (this.syntaxErrors = t),
          (this.comments = n)
      }
      return (
        (e.prototype.getNodeFromOffset = function(e, t) {
          if ((void 0 === t && (t = !1), this.root)) return or(this.root, e, t)
        }),
        (e.prototype.visit = function(e) {
          if (this.root) {
            var t = function(n) {
              var r = e(n),
                i = n.children
              if (Array.isArray(i)) for (var o = 0; o < i.length && r; o++) r = t(i[o])
              return r
            }
            t(this.root)
          }
        }),
        (e.prototype.validate = function(e, t) {
          if (this.root && t) {
            var n = new vi()
            return (
              wi(this.root, t, n, pi.instance),
              n.problems.map(function(t) {
                var n = jn.create(e.positionAt(t.location.offset), e.positionAt(t.location.offset + t.location.length))
                return zn.create(n, t.message, t.severity, t.code)
              })
            )
          }
        }),
        (e.prototype.getMatchingSchemas = function(e, t, n) {
          void 0 === t && (t = -1)
          var r = new gi(t, n)
          return this.root && e && wi(this.root, e, new vi(), r), r.schemas
        }),
        e
      )
    })()
    function wi(e, t, n, r) {
      if (e && r.include(e)) {
        var i = e
        switch (i.type) {
          case 'object':
            l(i, t, n, r)
            break
          case 'array':
            u(i, t, n, r)
            break
          case 'string':
            a(i, t, n, r)
            break
          case 'number':
            s(i, t, n, r)
            break
          case 'property':
            return wi(i.valueNode, t, n, r)
        }
        o(), r.add({ node: i, schema: t })
      }
      function o() {
        function e(e) {
          return i.type === e || ('integer' === e && 'number' === i.type && i.isInteger)
        }
        if (
          (Array.isArray(t.type)
            ? t.type.some(e) ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: Yn.Warning,
                message:
                  t.errorMessage ||
                  ii('typeArrayMismatchWarning', 'Incorrect type. Expected one of {0}.', t.type.join(', ')),
              })
            : t.type &&
              (e(t.type) ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: Yn.Warning,
                  message: t.errorMessage || ii('typeMismatchWarning', 'Incorrect type. Expected "{0}".', t.type),
                })),
          Array.isArray(t.allOf))
        )
          for (var o = 0, s = t.allOf; o < s.length; o++) {
            var a = s[o]
            wi(i, mi(a), n, r)
          }
        var u = mi(t.not)
        if (u) {
          var l = new vi(),
            c = r.newSub()
          wi(i, u, l, c),
            l.hasProblems() ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: Yn.Warning,
                message: ii('notSchemaWarning', 'Matches a schema that is not allowed.'),
              })
          for (var h = 0, f = c.schemas; h < f.length; h++) {
            var d = f[h]
            ;(d.inverted = !d.inverted), r.add(d)
          }
        }
        var m = function(e, t) {
          for (var o = [], s = void 0, a = 0, u = e; a < u.length; a++) {
            var l = u[a],
              c = mi(l),
              h = new vi(),
              f = r.newSub()
            if ((wi(i, c, h, f), h.hasProblems() || o.push(c), s))
              if (t || h.hasProblems() || s.validationResult.hasProblems()) {
                var d = h.compare(s.validationResult)
                d > 0
                  ? (s = { schema: c, validationResult: h, matchingSchemas: f })
                  : 0 === d && (s.matchingSchemas.merge(f), s.validationResult.mergeEnumValues(h))
              } else
                s.matchingSchemas.merge(f),
                  (s.validationResult.propertiesMatches += h.propertiesMatches),
                  (s.validationResult.propertiesValueMatches += h.propertiesValueMatches)
            else s = { schema: c, validationResult: h, matchingSchemas: f }
          }
          return (
            o.length > 1 &&
              t &&
              n.problems.push({
                location: { offset: i.offset, length: 1 },
                severity: Yn.Warning,
                message: ii('oneOfWarning', 'Matches multiple schemas when only one must validate.'),
              }),
            s &&
              (n.merge(s.validationResult),
              (n.propertiesMatches += s.validationResult.propertiesMatches),
              (n.propertiesValueMatches += s.validationResult.propertiesValueMatches),
              r.merge(s.matchingSchemas)),
            o.length
          )
        }
        Array.isArray(t.anyOf) && m(t.anyOf, !1), Array.isArray(t.oneOf) && m(t.oneOf, !0)
        var g = function(e) {
            var t = new vi(),
              o = r.newSub()
            wi(i, mi(e), t, o),
              n.merge(t),
              (n.propertiesMatches += t.propertiesMatches),
              (n.propertiesValueMatches += t.propertiesValueMatches),
              r.merge(o)
          },
          p = function(e, t, n) {
            var o = mi(e),
              s = new vi(),
              a = r.newSub()
            wi(i, o, s, a), r.merge(a), s.hasProblems() ? n && g(n) : t && g(t)
          },
          v = mi(t.if)
        if ((v && p(v, mi(t.then), mi(t.else)), Array.isArray(t.enum))) {
          for (var y = bi(i), b = !1, C = 0, _ = t.enum; C < _.length; C++) {
            var S = _[C]
            if (lr(y, S)) {
              b = !0
              break
            }
          }
          ;(n.enumValues = t.enum),
            (n.enumValueMatch = b),
            b ||
              n.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: Yn.Warning,
                code: Hr.EnumValueMismatch,
                message:
                  t.errorMessage ||
                  ii(
                    'enumWarning',
                    'Value is not accepted. Valid values: {0}.',
                    t.enum
                      .map(function(e) {
                        return JSON.stringify(e)
                      })
                      .join(', '),
                  ),
              })
        }
        if (hr(t.const)) {
          y = bi(i)
          lr(y, t.const)
            ? (n.enumValueMatch = !0)
            : (n.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: Yn.Warning,
                code: Hr.EnumValueMismatch,
                message: t.errorMessage || ii('constWarning', 'Value must be {0}.', JSON.stringify(t.const)),
              }),
              (n.enumValueMatch = !1)),
            (n.enumValues = [t.const])
        }
        t.deprecationMessage &&
          i.parent &&
          n.problems.push({
            location: { offset: i.parent.offset, length: i.parent.length },
            severity: Yn.Warning,
            message: t.deprecationMessage,
          })
      }
      function s(e, t, n, r) {
        var i = e.value
        function o(e) {
          var t,
            n = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(e.toString())
          return (
            n && {
              value: Number(n[1] + (n[2] || '')),
              multiplier: ((null === (t = n[2]) || void 0 === t ? void 0 : t.length) || 0) - (parseInt(n[3]) || 0),
            }
          )
        }
        if (cr(t.multipleOf)) {
          var s = -1
          if (Number.isInteger(t.multipleOf)) s = i % t.multipleOf
          else {
            var a = o(t.multipleOf),
              u = o(i)
            if (a && u) {
              var l = Math.pow(10, Math.abs(u.multiplier - a.multiplier))
              u.multiplier < a.multiplier ? (u.value *= l) : (a.value *= l), (s = u.value % a.value)
            }
          }
          0 !== s &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('multipleOfWarning', 'Value is not divisible by {0}.', t.multipleOf),
            })
        }
        function c(e, t) {
          return cr(t) ? t : fr(t) && t ? e : void 0
        }
        function h(e, t) {
          if (!fr(t) || !t) return e
        }
        var f = c(t.minimum, t.exclusiveMinimum)
        cr(f) &&
          i <= f &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            severity: Yn.Warning,
            message: ii('exclusiveMinimumWarning', 'Value is below the exclusive minimum of {0}.', f),
          })
        var d = c(t.maximum, t.exclusiveMaximum)
        cr(d) &&
          i >= d &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            severity: Yn.Warning,
            message: ii('exclusiveMaximumWarning', 'Value is above the exclusive maximum of {0}.', d),
          })
        var m = h(t.minimum, t.exclusiveMinimum)
        cr(m) &&
          i < m &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            severity: Yn.Warning,
            message: ii('minimumWarning', 'Value is below the minimum of {0}.', m),
          })
        var g = h(t.maximum, t.exclusiveMaximum)
        cr(g) &&
          i > g &&
          n.problems.push({
            location: { offset: e.offset, length: e.length },
            severity: Yn.Warning,
            message: ii('maximumWarning', 'Value is above the maximum of {0}.', g),
          })
      }
      function a(e, t, n, r) {
        if (
          (cr(t.minLength) &&
            e.value.length < t.minLength &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('minLengthWarning', 'String is shorter than the minimum length of {0}.', t.minLength),
            }),
          cr(t.maxLength) &&
            e.value.length > t.maxLength &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('maxLengthWarning', 'String is longer than the maximum length of {0}.', t.maxLength),
            }),
          dr(t.pattern))
        ) {
          var i = new RegExp(t.pattern)
          i.test(e.value) ||
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message:
                t.patternErrorMessage ||
                t.errorMessage ||
                ii('patternWarning', 'String does not match the pattern of "{0}".', t.pattern),
            })
        }
        if (t.format)
          switch (t.format) {
            case 'uri':
            case 'uri-reference':
              var o = void 0
              if (e.value) {
                var s = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(e.value)
                s
                  ? s[2] || 'uri' !== t.format || (o = ii('uriSchemeMissing', 'URI with a scheme is expected.'))
                  : (o = ii('uriMissing', 'URI is expected.'))
              } else o = ii('uriEmpty', 'URI expected.')
              o &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Yn.Warning,
                  message:
                    t.patternErrorMessage || t.errorMessage || ii('uriFormatWarning', 'String is not a URI: {0}', o),
                })
              break
            case 'color-hex':
            case 'date-time':
            case 'date':
            case 'time':
            case 'email':
              var a = oi[t.format]
              ;(e.value && a.pattern.exec(e.value)) ||
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Yn.Warning,
                  message: t.patternErrorMessage || t.errorMessage || a.errorMessage,
                })
            default:
          }
      }
      function u(e, t, n, r) {
        if (Array.isArray(t.items)) {
          for (var i = t.items, o = 0; o < i.length; o++) {
            var s = i[o],
              a = mi(s),
              u = new vi(),
              l = e.items[o]
            l ? (wi(l, a, u, r), n.mergePropertyMatch(u)) : e.items.length >= i.length && n.propertiesValueMatches++
          }
          if (e.items.length > i.length)
            if ('object' === typeof t.additionalItems)
              for (var c = i.length; c < e.items.length; c++) {
                u = new vi()
                wi(e.items[c], t.additionalItems, u, r), n.mergePropertyMatch(u)
              }
            else
              !1 === t.additionalItems &&
                n.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: Yn.Warning,
                  message: ii(
                    'additionalItemsWarning',
                    'Array has too many items according to schema. Expected {0} or fewer.',
                    i.length,
                  ),
                })
        } else {
          var h = mi(t.items)
          if (h)
            for (var f = 0, d = e.items; f < d.length; f++) {
              ;(l = d[f]), (u = new vi())
              wi(l, h, u, r), n.mergePropertyMatch(u)
            }
        }
        var m = mi(t.contains)
        if (m) {
          var g = e.items.some(function(e) {
            var t = new vi()
            return wi(e, m, t, pi.instance), !t.hasProblems()
          })
          g ||
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: t.errorMessage || ii('requiredItemMissingWarning', 'Array does not contain required item.'),
            })
        }
        if (
          (cr(t.minItems) &&
            e.items.length < t.minItems &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('minItemsWarning', 'Array has too few items. Expected {0} or more.', t.minItems),
            }),
          cr(t.maxItems) &&
            e.items.length > t.maxItems &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('maxItemsWarning', 'Array has too many items. Expected {0} or fewer.', t.maxItems),
            }),
          !0 === t.uniqueItems)
        ) {
          var p = bi(e),
            v = p.some(function(e, t) {
              return t !== p.lastIndexOf(e)
            })
          v &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('uniqueItemsWarning', 'Array has duplicate items.'),
            })
        }
      }
      function l(e, t, n, r) {
        for (var i = Object.create(null), o = [], s = 0, a = e.properties; s < a.length; s++) {
          var u = a[s],
            l = u.keyNode.value
          ;(i[l] = u.valueNode), o.push(l)
        }
        if (Array.isArray(t.required))
          for (var c = 0, h = t.required; c < h.length; c++) {
            var f = h[c]
            if (!i[f]) {
              var d = e.parent && 'property' === e.parent.type && e.parent.keyNode,
                m = d ? { offset: d.offset, length: d.length } : { offset: e.offset, length: 1 }
              n.problems.push({
                location: m,
                severity: Yn.Warning,
                message: ii('MissingRequiredPropWarning', 'Missing property "{0}".', f),
              })
            }
          }
        var g = function(e) {
          var t = o.indexOf(e)
          while (t >= 0) o.splice(t, 1), (t = o.indexOf(e))
        }
        if (t.properties)
          for (var p = 0, v = Object.keys(t.properties); p < v.length; p++) {
            f = v[p]
            g(f)
            var y = t.properties[f],
              b = i[f]
            if (b)
              if (fr(y))
                if (y) n.propertiesMatches++, n.propertiesValueMatches++
                else {
                  u = b.parent
                  n.problems.push({
                    location: { offset: u.keyNode.offset, length: u.keyNode.length },
                    severity: Yn.Warning,
                    message: t.errorMessage || ii('DisallowedExtraPropWarning', 'Property {0} is not allowed.', f),
                  })
                }
              else {
                var C = new vi()
                wi(b, y, C, r), n.mergePropertyMatch(C)
              }
          }
        if (t.patternProperties)
          for (var _ = 0, S = Object.keys(t.patternProperties); _ < S.length; _++)
            for (var w = S[_], A = new RegExp(w), E = 0, x = o.slice(0); E < x.length; E++) {
              f = x[E]
              if (A.test(f)) {
                g(f)
                b = i[f]
                if (b) {
                  y = t.patternProperties[w]
                  if (fr(y))
                    if (y) n.propertiesMatches++, n.propertiesValueMatches++
                    else {
                      u = b.parent
                      n.problems.push({
                        location: { offset: u.keyNode.offset, length: u.keyNode.length },
                        severity: Yn.Warning,
                        message: t.errorMessage || ii('DisallowedExtraPropWarning', 'Property {0} is not allowed.', f),
                      })
                    }
                  else {
                    C = new vi()
                    wi(b, y, C, r), n.mergePropertyMatch(C)
                  }
                }
              }
            }
        if ('object' === typeof t.additionalProperties)
          for (var N = 0, L = o; N < L.length; N++) {
            ;(f = L[N]), (b = i[f])
            if (b) {
              C = new vi()
              wi(b, t.additionalProperties, C, r), n.mergePropertyMatch(C)
            }
          }
        else if (!1 === t.additionalProperties && o.length > 0)
          for (var k = 0, T = o; k < T.length; k++) {
            ;(f = T[k]), (b = i[f])
            if (b) {
              u = b.parent
              n.problems.push({
                location: { offset: u.keyNode.offset, length: u.keyNode.length },
                severity: Yn.Warning,
                message: t.errorMessage || ii('DisallowedExtraPropWarning', 'Property {0} is not allowed.', f),
              })
            }
          }
        if (
          (cr(t.maxProperties) &&
            e.properties.length > t.maxProperties &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii('MaxPropWarning', 'Object has more properties than limit of {0}.', t.maxProperties),
            }),
          cr(t.minProperties) &&
            e.properties.length < t.minProperties &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: Yn.Warning,
              message: ii(
                'MinPropWarning',
                'Object has fewer properties than the required number of {0}',
                t.minProperties,
              ),
            }),
          t.dependencies)
        )
          for (var O = 0, I = Object.keys(t.dependencies); O < I.length; O++) {
            l = I[O]
            var M = i[l]
            if (M) {
              var P = t.dependencies[l]
              if (Array.isArray(P))
                for (var R = 0, D = P; R < D.length; R++) {
                  var F = D[R]
                  i[F]
                    ? n.propertiesValueMatches++
                    : n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        severity: Yn.Warning,
                        message: ii(
                          'RequiredDependentPropWarning',
                          'Object is missing property {0} required by property {1}.',
                          F,
                          l,
                        ),
                      })
                }
              else {
                y = mi(P)
                if (y) {
                  C = new vi()
                  wi(e, y, C, r), n.mergePropertyMatch(C)
                }
              }
            }
          }
        var j = mi(t.propertyNames)
        if (j)
          for (var U = 0, V = e.properties; U < V.length; U++) {
            var $ = V[U]
            l = $.keyNode
            l && wi(l, j, n, pi.instance)
          }
      }
    }
    function Ai(e, t) {
      var n = [],
        r = -1,
        i = e.getText(),
        o = rr(i, !1),
        s = t && t.collectComments ? [] : void 0
      function a() {
        while (1) {
          var t = o.scan()
          switch ((c(), t)) {
            case 12:
            case 13:
              Array.isArray(s) &&
                s.push(
                  jn.create(e.positionAt(o.getTokenOffset()), e.positionAt(o.getTokenOffset() + o.getTokenLength())),
                )
              break
            case 15:
            case 14:
              break
            default:
              return t
          }
        }
      }
      function u(t, i, o, s, a) {
        if ((void 0 === a && (a = Yn.Error), 0 === n.length || o !== r)) {
          var u = jn.create(e.positionAt(o), e.positionAt(s))
          n.push(zn.create(u, t, a, i, e.languageId)), (r = o)
        }
      }
      function l(e, t, n, r, s) {
        void 0 === n && (n = void 0), void 0 === r && (r = []), void 0 === s && (s = [])
        var l = o.getTokenOffset(),
          c = o.getTokenOffset() + o.getTokenLength()
        if (l === c && l > 0) {
          l--
          while (l > 0 && /\s/.test(i.charAt(l))) l--
          c = l + 1
        }
        if ((u(e, t, l, c), n && h(n, !1), r.length + s.length > 0)) {
          var f = o.getToken()
          while (17 !== f) {
            if (-1 !== r.indexOf(f)) {
              a()
              break
            }
            if (-1 !== s.indexOf(f)) break
            f = a()
          }
        }
        return n
      }
      function c() {
        switch (o.getTokenError()) {
          case 4:
            return l(ii('InvalidUnicode', 'Invalid unicode sequence in string.'), Hr.InvalidUnicode), !0
          case 5:
            return l(ii('InvalidEscapeCharacter', 'Invalid escape character in string.'), Hr.InvalidEscapeCharacter), !0
          case 3:
            return l(ii('UnexpectedEndOfNumber', 'Unexpected end of number.'), Hr.UnexpectedEndOfNumber), !0
          case 1:
            return l(ii('UnexpectedEndOfComment', 'Unexpected end of comment.'), Hr.UnexpectedEndOfComment), !0
          case 2:
            return l(ii('UnexpectedEndOfString', 'Unexpected end of string.'), Hr.UnexpectedEndOfString), !0
          case 6:
            return (
              l(
                ii('InvalidCharacter', 'Invalid characters in string. Control characters must be escaped.'),
                Hr.InvalidCharacter,
              ),
              !0
            )
        }
        return !1
      }
      function h(e, t) {
        return (e.length = o.getTokenOffset() + o.getTokenLength() - e.offset), t && a(), e
      }
      function f(e) {
        if (3 === o.getToken()) {
          var t = new li(e, o.getTokenOffset())
          a()
          var n = !1
          while (4 !== o.getToken() && 17 !== o.getToken()) {
            if (5 === o.getToken()) {
              n || l(ii('ValueExpected', 'Value expected'), Hr.ValueExpected)
              var r = o.getTokenOffset()
              if ((a(), 4 === o.getToken())) {
                n && u(ii('TrailingComma', 'Trailing comma'), Hr.TrailingComma, r, r + 1)
                continue
              }
            } else n && l(ii('ExpectedComma', 'Expected comma'), Hr.CommaExpected)
            var i = b(t)
            i ? t.items.push(i) : l(ii('PropertyExpected', 'Value expected'), Hr.ValueExpected, void 0, [], [4, 5]),
              (n = !0)
          }
          return 4 !== o.getToken()
            ? l(ii('ExpectedCloseBracket', 'Expected comma or closing bracket'), Hr.CommaOrCloseBacketExpected, t)
            : h(t, !0)
        }
      }
      var d = new hi(void 0, 0, 0)
      function m(t, n) {
        var r = new fi(t, o.getTokenOffset(), d),
          i = p(r)
        if (!i) {
          if (16 !== o.getToken()) return
          l(ii('DoubleQuotesExpected', 'Property keys must be doublequoted'), Hr.Undefined)
          var s = new hi(r, o.getTokenOffset(), o.getTokenLength())
          ;(s.value = o.getTokenValue()), (i = s), a()
        }
        r.keyNode = i
        var c = n[i.value]
        if (
          (c
            ? (u(
                ii('DuplicateKeyWarning', 'Duplicate object key'),
                Hr.DuplicateKey,
                r.keyNode.offset,
                r.keyNode.offset + r.keyNode.length,
                Yn.Warning,
              ),
              'object' === typeof c &&
                u(
                  ii('DuplicateKeyWarning', 'Duplicate object key'),
                  Hr.DuplicateKey,
                  c.keyNode.offset,
                  c.keyNode.offset + c.keyNode.length,
                  Yn.Warning,
                ),
              (n[i.value] = !0))
            : (n[i.value] = r),
          6 === o.getToken())
        )
          (r.colonOffset = o.getTokenOffset()), a()
        else if (
          (l(ii('ColonExpected', 'Colon expected'), Hr.ColonExpected),
          10 === o.getToken() && e.positionAt(i.offset + i.length).line < e.positionAt(o.getTokenOffset()).line)
        )
          return (r.length = i.length), r
        var h = b(r)
        return h
          ? ((r.valueNode = h), (r.length = h.offset + h.length - r.offset), r)
          : l(ii('ValueExpected', 'Value expected'), Hr.ValueExpected, r, [], [2, 5])
      }
      function g(e) {
        if (1 === o.getToken()) {
          var t = new di(e, o.getTokenOffset()),
            n = Object.create(null)
          a()
          var r = !1
          while (2 !== o.getToken() && 17 !== o.getToken()) {
            if (5 === o.getToken()) {
              r || l(ii('PropertyExpected', 'Property expected'), Hr.PropertyExpected)
              var i = o.getTokenOffset()
              if ((a(), 2 === o.getToken())) {
                r && u(ii('TrailingComma', 'Trailing comma'), Hr.TrailingComma, i, i + 1)
                continue
              }
            } else r && l(ii('ExpectedComma', 'Expected comma'), Hr.CommaExpected)
            var s = m(t, n)
            s
              ? t.properties.push(s)
              : l(ii('PropertyExpected', 'Property expected'), Hr.PropertyExpected, void 0, [], [2, 5]),
              (r = !0)
          }
          return 2 !== o.getToken()
            ? l(ii('ExpectedCloseBrace', 'Expected comma or closing brace'), Hr.CommaOrCloseBraceExpected, t)
            : h(t, !0)
        }
      }
      function p(e) {
        if (10 === o.getToken()) {
          var t = new hi(e, o.getTokenOffset())
          return (t.value = o.getTokenValue()), h(t, !0)
        }
      }
      function v(e) {
        if (11 === o.getToken()) {
          var t = new ci(e, o.getTokenOffset())
          if (0 === o.getTokenError()) {
            var n = o.getTokenValue()
            try {
              var r = JSON.parse(n)
              if (!cr(r)) return l(ii('InvalidNumberFormat', 'Invalid number format.'), Hr.Undefined, t)
              t.value = r
            } catch (i) {
              return l(ii('InvalidNumberFormat', 'Invalid number format.'), Hr.Undefined, t)
            }
            t.isInteger = -1 === n.indexOf('.')
          }
          return h(t, !0)
        }
      }
      function y(e) {
        switch (o.getToken()) {
          case 7:
            return h(new ai(e, o.getTokenOffset()), !0)
          case 8:
            return h(new ui(e, !0, o.getTokenOffset()), !0)
          case 9:
            return h(new ui(e, !1, o.getTokenOffset()), !0)
          default:
            return
        }
      }
      function b(e) {
        return f(e) || g(e) || p(e) || v(e) || y(e)
      }
      var C = void 0,
        _ = a()
      return (
        17 !== _ &&
          ((C = b(C)),
          C
            ? 17 !== o.getToken() && l(ii('End of file expected', 'End of file expected.'), Hr.Undefined)
            : l(ii('Invalid symbol', 'Expected a JSON object, array or literal.'), Hr.Undefined)),
        new Si(C, n, s)
      )
    }
    function Ei(e, t, n) {
      if (null !== e && 'object' === typeof e) {
        var r = t + '\t'
        if (Array.isArray(e)) {
          if (0 === e.length) return '[]'
          for (var i = '[\n', o = 0; o < e.length; o++)
            (i += r + Ei(e[o], r, n)), o < e.length - 1 && (i += ','), (i += '\n')
          return (i += t + ']'), i
        }
        var s = Object.keys(e)
        if (0 === s.length) return '{}'
        for (i = '{\n', o = 0; o < s.length; o++) {
          var a = s[o]
          ;(i += r + JSON.stringify(a) + ': ' + Ei(e[a], r, n)), o < s.length - 1 && (i += ','), (i += '\n')
        }
        return (i += t + '}'), i
      }
      return n(e)
    }
    function xi(e, t) {
      if (e.length < t.length) return !1
      for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1
      return !0
    }
    function Ni(e, t) {
      var n = e.length - t.length
      return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t
    }
    function Li(e) {
      return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*')
    }
    var ki = ti(),
      Ti = [',', '}', ']'],
      Oi = [':'],
      Ii = (function() {
        function e(e, t, n, r) {
          void 0 === t && (t = []),
            void 0 === n && (n = Promise),
            void 0 === r && (r = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = n),
            (this.clientCapabilities = r)
        }
        return (
          (e.prototype.doResolve = function(e) {
            for (var t = this.contributions.length - 1; t >= 0; t--) {
              var n = this.contributions[t].resolveCompletion
              if (n) {
                var r = n(e)
                if (r) return r
              }
            }
            return this.promiseConstructor.resolve(e)
          }),
          (e.prototype.doComplete = function(e, t, n) {
            var r = this,
              i = { items: [], isIncomplete: !1 },
              o = e.getText(),
              s = e.offsetAt(t),
              a = n.getNodeFromOffset(s, !0)
            if (this.isInComment(e, a ? a.offset : 0, s)) return Promise.resolve(i)
            if (a && s === a.offset + a.length && s > 0) {
              var u = o[s - 1]
              ;(('object' === a.type && '}' === u) || ('array' === a.type && ']' === u)) && (a = a.parent)
            }
            var l,
              c = this.getCurrentWord(e, s)
            if (!a || ('string' !== a.type && 'number' !== a.type && 'boolean' !== a.type && 'null' !== a.type)) {
              var h = s - c.length
              h > 0 && '"' === o[h - 1] && h--, (l = jn.create(e.positionAt(h), t))
            } else l = jn.create(e.positionAt(a.offset), e.positionAt(a.offset + a.length))
            var f = !1,
              d = {},
              m = {
                add: function(e) {
                  var t = e.label,
                    n = d[t]
                  if (n) n.documentation || (n.documentation = e.documentation)
                  else {
                    if (((t = t.replace(/[\n]/g, '\u21b5')), t.length > 60)) {
                      var r = t.substr(0, 57).trim() + '...'
                      d[r] || (t = r)
                    }
                    l && void 0 !== e.insertText && (e.textEdit = Qn.replace(l, e.insertText)),
                      f && (e.commitCharacters = e.kind === br.Property ? Oi : Ti),
                      (e.label = t),
                      (d[t] = e),
                      i.items.push(e)
                  }
                },
                setAsIncomplete: function() {
                  i.isIncomplete = !0
                },
                error: function(e) {
                  console.error(e)
                },
                log: function(e) {
                  console.log(e)
                },
                getNumberOfProposals: function() {
                  return i.items.length
                },
              }
            return this.schemaService.getSchemaForResource(e.uri, n).then(function(t) {
              var u = [],
                h = !0,
                f = '',
                g = void 0
              if (a && 'string' === a.type) {
                var p = a.parent
                p &&
                  'property' === p.type &&
                  p.keyNode === a &&
                  ((h = !p.valueNode), (g = p), (f = o.substr(a.offset + 1, a.length - 2)), p && (a = p.parent))
              }
              if (a && 'object' === a.type) {
                if (a.offset === s) return i
                var v = a.properties
                v.forEach(function(e) {
                  ;(g && g === e) || (d[e.keyNode.value] = Sr.create('__'))
                })
                var y = ''
                h && (y = r.evaluateSeparatorAfter(e, e.offsetAt(l.end))),
                  t ? r.getPropertyCompletions(t, n, a, h, y, m) : r.getSchemaLessPropertyCompletions(n, a, f, m)
                var b = Ci(a)
                r.contributions.forEach(function(t) {
                  var n = t.collectPropertyCompletions(e.uri, b, c, h, '' === y, m)
                  n && u.push(n)
                }),
                  !t &&
                    c.length > 0 &&
                    '"' !== o.charAt(s - c.length - 1) &&
                    (m.add({
                      kind: br.Property,
                      label: r.getLabelForValue(c),
                      insertText: r.getInsertTextForProperty(c, void 0, !1, y),
                      insertTextFormat: Cr.Snippet,
                      documentation: '',
                    }),
                    m.setAsIncomplete())
              }
              var C = {}
              return (
                t ? r.getValueCompletions(t, n, a, s, e, m, C) : r.getSchemaLessValueCompletions(n, a, s, e, m),
                r.contributions.length > 0 && r.getContributedValueCompletions(n, a, s, e, m, u),
                r.promiseConstructor.all(u).then(function() {
                  if (0 === m.getNumberOfProposals()) {
                    var t = s
                    !a ||
                      ('string' !== a.type && 'number' !== a.type && 'boolean' !== a.type && 'null' !== a.type) ||
                      (t = a.offset + a.length)
                    var n = r.evaluateSeparatorAfter(e, t)
                    r.addFillerValueCompletions(C, n, m)
                  }
                  return i
                })
              )
            })
          }),
          (e.prototype.getPropertyCompletions = function(e, t, n, r, i, o) {
            var s = this,
              a = t.getMatchingSchemas(e.schema, n.offset)
            a.forEach(function(e) {
              if (e.node === n && !e.inverted) {
                var t = e.schema.properties
                t &&
                  Object.keys(t).forEach(function(e) {
                    var n = t[e]
                    if ('object' === typeof n && !n.deprecationMessage && !n.doNotSuggest) {
                      var a = {
                        kind: br.Property,
                        label: e,
                        insertText: s.getInsertTextForProperty(e, n, r, i),
                        insertTextFormat: Cr.Snippet,
                        filterText: s.getFilterTextForValue(e),
                        documentation: s.fromMarkup(n.markdownDescription) || n.description || '',
                      }
                      void 0 !== n.suggestSortText && (a.sortText = n.suggestSortText),
                        a.insertText &&
                          Ni(a.insertText, '$1' + i) &&
                          (a.command = { title: 'Suggest', command: 'editor.action.triggerSuggest' }),
                        o.add(a)
                    }
                  })
                var a = e.schema.propertyNames
                if ('object' === typeof a && !a.deprecationMessage && !a.doNotSuggest) {
                  var u = function(e, t) {
                    void 0 === t && (t = void 0)
                    var n = {
                      kind: br.Property,
                      label: e,
                      insertText: s.getInsertTextForProperty(e, void 0, r, i),
                      insertTextFormat: Cr.Snippet,
                      filterText: s.getFilterTextForValue(e),
                      documentation: t || s.fromMarkup(a.markdownDescription) || a.description || '',
                    }
                    void 0 !== a.suggestSortText && (n.sortText = a.suggestSortText),
                      n.insertText &&
                        Ni(n.insertText, '$1' + i) &&
                        (n.command = { title: 'Suggest', command: 'editor.action.triggerSuggest' }),
                      o.add(n)
                  }
                  if (a.enum)
                    for (var l = 0; l < a.enum.length; l++) {
                      var c = void 0
                      a.markdownEnumDescriptions && l < a.markdownEnumDescriptions.length
                        ? (c = s.fromMarkup(a.markdownEnumDescriptions[l]))
                        : a.enumDescriptions && l < a.enumDescriptions.length && (c = a.enumDescriptions[l]),
                        u(a.enum[l], c)
                    }
                  a.const && u(a.const)
                }
              }
            })
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function(e, t, n, r) {
            var i = this,
              o = function(e) {
                e.properties.forEach(function(e) {
                  var t = e.keyNode.value
                  r.add({
                    kind: br.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ''),
                    insertTextFormat: Cr.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: '',
                  })
                })
              }
            if (t.parent)
              if ('property' === t.parent.type) {
                var s = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === s &&
                      e.valueNode &&
                      'object' === e.valueNode.type &&
                      o(e.valueNode),
                    !0
                  )
                })
              } else
                'array' === t.parent.type &&
                  t.parent.items.forEach(function(e) {
                    'object' === e.type && e !== t && o(e)
                  })
            else
              'object' === t.type &&
                r.add({
                  kind: br.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty('$schema', void 0, !0, ''),
                  insertTextFormat: Cr.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema'),
                })
          }),
          (e.prototype.getSchemaLessValueCompletions = function(e, t, n, r, i) {
            var o = this,
              s = n
            if (
              (!t ||
                ('string' !== t.type && 'number' !== t.type && 'boolean' !== t.type && 'null' !== t.type) ||
                ((s = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind('object'),
                  label: 'Empty object',
                  insertText: this.getInsertTextForValue({}, ''),
                  insertTextFormat: Cr.Snippet,
                  documentation: '',
                }),
                void i.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: Cr.Snippet,
                  documentation: '',
                })
              )
            var a = this.evaluateSeparatorAfter(r, s),
              u = function(e) {
                e.parent &&
                  !_i(e.parent, n, !0) &&
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, r),
                    insertText: o.getInsertTextForMatchingNode(e, r, a),
                    insertTextFormat: Cr.Snippet,
                    documentation: '',
                  }),
                  'boolean' === e.type && o.addBooleanValueCompletion(!e.value, a, i)
              }
            if ('property' === t.type && n > (t.colonOffset || 0)) {
              var l = t.valueNode
              if (l && (n > l.offset + l.length || 'object' === l.type || 'array' === l.type)) return
              var c = t.keyNode.value
              e.visit(function(e) {
                return 'property' === e.type && e.keyNode.value === c && e.valueNode && u(e.valueNode), !0
              }),
                '$schema' === c && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(a, i)
            }
            if ('array' === t.type)
              if (t.parent && 'property' === t.parent.type) {
                var h = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e.keyNode.value === h &&
                      e.valueNode &&
                      'array' === e.valueNode.type &&
                      e.valueNode.items.forEach(u),
                    !0
                  )
                })
              } else t.items.forEach(u)
          }),
          (e.prototype.getValueCompletions = function(e, t, n, r, i, o, s) {
            var a = r,
              u = void 0,
              l = void 0
            if (
              (!n ||
                ('string' !== n.type && 'number' !== n.type && 'boolean' !== n.type && 'null' !== n.type) ||
                ((a = n.offset + n.length), (l = n), (n = n.parent)),
              n)
            ) {
              if ('property' === n.type && r > (n.colonOffset || 0)) {
                var c = n.valueNode
                if (c && r > c.offset + c.length) return
                ;(u = n.keyNode.value), (n = n.parent)
              }
              if (n && (void 0 !== u || 'array' === n.type)) {
                for (
                  var h = this.evaluateSeparatorAfter(i, a),
                    f = t.getMatchingSchemas(e.schema, n.offset, l),
                    d = 0,
                    m = f;
                  d < m.length;
                  d++
                ) {
                  var g = m[d]
                  if (g.node === n && !g.inverted && g.schema) {
                    if ('array' === n.type && g.schema.items)
                      if (Array.isArray(g.schema.items)) {
                        var p = this.findItemAtOffset(n, i, r)
                        p < g.schema.items.length && this.addSchemaValueCompletions(g.schema.items[p], h, o, s)
                      } else this.addSchemaValueCompletions(g.schema.items, h, o, s)
                    if (void 0 !== u) {
                      var v = !1
                      if (g.schema.properties) {
                        var y = g.schema.properties[u]
                        y && ((v = !0), this.addSchemaValueCompletions(y, h, o, s))
                      }
                      if (g.schema.patternProperties && !v)
                        for (var b = 0, C = Object.keys(g.schema.patternProperties); b < C.length; b++) {
                          var _ = C[b],
                            S = new RegExp(_)
                          if (S.test(u)) {
                            v = !0
                            y = g.schema.patternProperties[_]
                            this.addSchemaValueCompletions(y, h, o, s)
                          }
                        }
                      if (g.schema.additionalProperties && !v) {
                        y = g.schema.additionalProperties
                        this.addSchemaValueCompletions(y, h, o, s)
                      }
                    }
                  }
                }
                '$schema' !== u || n.parent || this.addDollarSchemaCompletions(h, o),
                  s['boolean'] && (this.addBooleanValueCompletion(!0, h, o), this.addBooleanValueCompletion(!1, h, o)),
                  s['null'] && this.addNullValueCompletion(h, o)
              }
            } else this.addSchemaValueCompletions(e.schema, '', o, s)
          }),
          (e.prototype.getContributedValueCompletions = function(e, t, n, r, i, o) {
            if (t) {
              if (
                (('string' !== t.type && 'number' !== t.type && 'boolean' !== t.type && 'null' !== t.type) ||
                  (t = t.parent),
                t && 'property' === t.type && n > (t.colonOffset || 0))
              ) {
                var s = t.keyNode.value,
                  a = t.valueNode
                if ((!a || n <= a.offset + a.length) && t.parent) {
                  var u = Ci(t.parent)
                  this.contributions.forEach(function(e) {
                    var t = e.collectValueCompletions(r.uri, u, s, i)
                    t && o.push(t)
                  })
                }
              }
            } else
              this.contributions.forEach(function(e) {
                var t = e.collectDefaultCompletions(r.uri, i)
                t && o.push(t)
              })
          }),
          (e.prototype.addSchemaValueCompletions = function(e, t, n, r) {
            var i = this
            'object' === typeof e &&
              (this.addEnumValueCompletions(e, t, n),
              this.addDefaultValueCompletions(e, t, n),
              this.collectTypes(e, r),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, n, r)
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, n, r)
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, n, r)
                }))
          }),
          (e.prototype.addDefaultValueCompletions = function(e, t, n, r) {
            var i = this
            void 0 === r && (r = 0)
            var o = !1
            if (hr(e.default)) {
              for (var s = e.type, a = e.default, u = r; u > 0; u--) (a = [a]), (s = 'array')
              n.add({
                kind: this.getSuggestionKind(s),
                label: this.getLabelForValue(a),
                insertText: this.getInsertTextForValue(a, t),
                insertTextFormat: Cr.Snippet,
                detail: ki('json.suggest.default', 'Default value'),
              }),
                (o = !0)
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function(s) {
                for (var a = e.type, u = s, l = r; l > 0; l--) (u = [u]), (a = 'array')
                n.add({
                  kind: i.getSuggestionKind(a),
                  label: i.getLabelForValue(u),
                  insertText: i.getInsertTextForValue(u, t),
                  insertTextFormat: Cr.Snippet,
                }),
                  (o = !0)
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function(s) {
                  var a,
                    u,
                    l = e.type,
                    c = s.body,
                    h = s.label
                  if (hr(c)) {
                    e.type
                    for (var f = r; f > 0; f--) (c = [c]), 'array'
                    ;(a = i.getInsertTextForSnippetValue(c, t)),
                      (u = i.getFilterTextForSnippetValue(c)),
                      (h = h || i.getLabelForSnippetValue(c))
                  } else {
                    if ('string' !== typeof s.bodyText) return
                    var d = '',
                      m = '',
                      g = ''
                    for (f = r; f > 0; f--) (d = d + g + '[\n'), (m = m + '\n' + g + ']'), (g += '\t'), (l = 'array')
                    ;(a = d + g + s.bodyText.split('\n').join('\n' + g) + m + t),
                      (h = h || a),
                      (u = a.replace(/[\n]/g, ''))
                  }
                  n.add({
                    kind: i.getSuggestionKind(l),
                    label: h,
                    documentation: i.fromMarkup(s.markdownDescription) || s.description,
                    insertText: a,
                    insertTextFormat: Cr.Snippet,
                    filterText: u,
                  }),
                    (o = !0)
                }),
              !o &&
                'object' === typeof e.items &&
                !Array.isArray(e.items) &&
                r < 5 &&
                this.addDefaultValueCompletions(e.items, t, n, r + 1)
          }),
          (e.prototype.addEnumValueCompletions = function(e, t, n) {
            if (
              (hr(e.const) &&
                n.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: Cr.Snippet,
                  documentation: this.fromMarkup(e.markdownDescription) || e.description,
                }),
              Array.isArray(e.enum))
            )
              for (var r = 0, i = e.enum.length; r < i; r++) {
                var o = e.enum[r],
                  s = this.fromMarkup(e.markdownDescription) || e.description
                e.markdownEnumDescriptions && r < e.markdownEnumDescriptions.length && this.doesSupportMarkdown()
                  ? (s = this.fromMarkup(e.markdownEnumDescriptions[r]))
                  : e.enumDescriptions && r < e.enumDescriptions.length && (s = e.enumDescriptions[r]),
                  n.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: Cr.Snippet,
                    documentation: s,
                  })
              }
          }),
          (e.prototype.collectTypes = function(e, t) {
            if (!Array.isArray(e.enum) && !hr(e.const)) {
              var n = e.type
              Array.isArray(n)
                ? n.forEach(function(e) {
                    return (t[e] = !0)
                  })
                : n && (t[n] = !0)
            }
          }),
          (e.prototype.addFillerValueCompletions = function(e, t, n) {
            e['object'] &&
              n.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: Cr.Snippet,
                detail: ki('defaults.object', 'New object'),
                documentation: '',
              }),
              e['array'] &&
                n.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: Cr.Snippet,
                  detail: ki('defaults.array', 'New array'),
                  documentation: '',
                })
          }),
          (e.prototype.addBooleanValueCompletion = function(e, t, n) {
            n.add({
              kind: this.getSuggestionKind('boolean'),
              label: e ? 'true' : 'false',
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: Cr.Snippet,
              documentation: '',
            })
          }),
          (e.prototype.addNullValueCompletion = function(e, t) {
            t.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + e,
              insertTextFormat: Cr.Snippet,
              documentation: '',
            })
          }),
          (e.prototype.addDollarSchemaCompletions = function(e, t) {
            var n = this,
              r = this.schemaService.getRegisteredSchemaIds(function(e) {
                return 'http' === e || 'https' === e
              })
            r.forEach(function(r) {
              return t.add({
                kind: br.Module,
                label: n.getLabelForValue(r),
                filterText: n.getFilterTextForValue(r),
                insertText: n.getInsertTextForValue(r, e),
                insertTextFormat: Cr.Snippet,
                documentation: '',
              })
            })
          }),
          (e.prototype.getLabelForValue = function(e) {
            return JSON.stringify(e)
          }),
          (e.prototype.getFilterTextForValue = function(e) {
            return JSON.stringify(e)
          }),
          (e.prototype.getFilterTextForSnippetValue = function(e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1')
          }),
          (e.prototype.getLabelForSnippetValue = function(e) {
            var t = JSON.stringify(e)
            return t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1')
          }),
          (e.prototype.getInsertTextForPlainText = function(e) {
            return e.replace(/[\\\$\}]/g, '\\$&')
          }),
          (e.prototype.getInsertTextForValue = function(e, t) {
            var n = JSON.stringify(e, null, '\t')
            return '{}' === n ? '{$1}' + t : '[]' === n ? '[$1]' + t : this.getInsertTextForPlainText(n + t)
          }),
          (e.prototype.getInsertTextForSnippetValue = function(e, t) {
            var n = function(e) {
              return 'string' === typeof e && '^' === e[0] ? e.substr(1) : JSON.stringify(e)
            }
            return Ei(e, '', n) + t
          }),
          (e.prototype.getInsertTextForGuessedValue = function(e, t) {
            switch (typeof e) {
              case 'object':
                return null === e ? '${1:null}' + t : this.getInsertTextForValue(e, t)
              case 'string':
                var n = JSON.stringify(e)
                return (n = n.substr(1, n.length - 2)), (n = this.getInsertTextForPlainText(n)), '"${1:' + n + '}"' + t
              case 'number':
              case 'boolean':
                return '${1:' + JSON.stringify(e) + '}' + t
            }
            return this.getInsertTextForValue(e, t)
          }),
          (e.prototype.getSuggestionKind = function(e) {
            if (Array.isArray(e)) {
              var t = e
              e = t.length > 0 ? t[0] : void 0
            }
            if (!e) return br.Value
            switch (e) {
              case 'string':
                return br.Value
              case 'object':
                return br.Module
              case 'property':
                return br.Property
              default:
                return br.Value
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function(e, t) {
            switch (e.type) {
              case 'array':
                return '[]'
              case 'object':
                return '{}'
              default:
                var n = t.getText().substr(e.offset, e.length)
                return n
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function(e, t, n) {
            switch (e.type) {
              case 'array':
                return this.getInsertTextForValue([], n)
              case 'object':
                return this.getInsertTextForValue({}, n)
              default:
                var r = t.getText().substr(e.offset, e.length) + n
                return this.getInsertTextForPlainText(r)
            }
          }),
          (e.prototype.getInsertTextForProperty = function(e, t, n, r) {
            var i = this.getInsertTextForValue(e, '')
            if (!n) return i
            var o,
              s = i + ': ',
              a = 0
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body
                  hr(u) && (o = this.getInsertTextForSnippetValue(u, ''))
                }
                a += t.defaultSnippets.length
              }
              if (
                (t.enum &&
                  (o || 1 !== t.enum.length || (o = this.getInsertTextForGuessedValue(t.enum[0], '')),
                  (a += t.enum.length)),
                hr(t.default) && (o || (o = this.getInsertTextForGuessedValue(t.default, '')), a++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o || (o = this.getInsertTextForGuessedValue(t.examples[0], '')), (a += t.examples.length)),
                0 === a)
              ) {
                var l = Array.isArray(t.type) ? t.type[0] : t.type
                switch ((l || (t.properties ? (l = 'object') : t.items && (l = 'array')), l)) {
                  case 'boolean':
                    o = '$1'
                    break
                  case 'string':
                    o = '"$1"'
                    break
                  case 'object':
                    o = '{$1}'
                    break
                  case 'array':
                    o = '[$1]'
                    break
                  case 'number':
                  case 'integer':
                    o = '${1:0}'
                    break
                  case 'null':
                    o = '${1:null}'
                    break
                  default:
                    return i
                }
              }
            }
            return (!o || a > 1) && (o = '$1'), s + o + r
          }),
          (e.prototype.getCurrentWord = function(e, t) {
            var n = t - 1,
              r = e.getText()
            while (n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n))) n--
            return r.substring(n + 1, t)
          }),
          (e.prototype.evaluateSeparatorAfter = function(e, t) {
            var n = rr(e.getText(), !0)
            n.setPosition(t)
            var r = n.scan()
            switch (r) {
              case 5:
              case 2:
              case 4:
              case 17:
                return ''
              default:
                return ','
            }
          }),
          (e.prototype.findItemAtOffset = function(e, t, n) {
            for (var r = rr(t.getText(), !0), i = e.items, o = i.length - 1; o >= 0; o--) {
              var s = i[o]
              if (n > s.offset + s.length) {
                r.setPosition(s.offset + s.length)
                var a = r.scan()
                return 5 === a && n >= r.getTokenOffset() + r.getTokenLength() ? o + 1 : o
              }
              if (n >= s.offset) return o
            }
            return 0
          }),
          (e.prototype.isInComment = function(e, t, n) {
            var r = rr(e.getText(), !1)
            r.setPosition(t)
            var i = r.scan()
            while (17 !== i && r.getTokenOffset() + r.getTokenLength() < n) i = r.scan()
            return (12 === i || 13 === i) && r.getTokenOffset() <= n
          }),
          (e.prototype.fromMarkup = function(e) {
            if (e && this.doesSupportMarkdown()) return { kind: vr.Markdown, value: e }
          }),
          (e.prototype.doesSupportMarkdown = function() {
            if (!hr(this.supportsMarkdown)) {
              var e = this.clientCapabilities.textDocument && this.clientCapabilities.textDocument.completion
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !== e.completionItem.documentationFormat.indexOf(vr.Markdown)
            }
            return this.supportsMarkdown
          }),
          (e.prototype.doesSupportsCommitCharacters = function() {
            if (!hr(this.supportsCommitCharacters)) {
              var e = this.clientCapabilities.textDocument && this.clientCapabilities.textDocument.completion
              this.supportsCommitCharacters = e && e.completionItem && !!e.completionItem.commitCharactersSupport
            }
            return this.supportsCommitCharacters
          }),
          e
        )
      })(),
      Mi = (function() {
        function e(e, t, n) {
          void 0 === t && (t = []), (this.schemaService = e), (this.contributions = t), (this.promise = n || Promise)
        }
        return (
          (e.prototype.doHover = function(e, t, n) {
            var r = e.offsetAt(t),
              i = n.getNodeFromOffset(r)
            if (!i || (('object' === i.type || 'array' === i.type) && r > i.offset + 1 && r < i.offset + i.length - 1))
              return this.promise.resolve(null)
            var o = i
            if ('string' === i.type) {
              var s = i.parent
              if (s && 'property' === s.type && s.keyNode === i && ((i = s.valueNode), !i))
                return this.promise.resolve(null)
            }
            for (
              var a = jn.create(e.positionAt(o.offset), e.positionAt(o.offset + o.length)),
                u = function(e) {
                  var t = { contents: e, range: a }
                  return t
                },
                l = Ci(i),
                c = this.contributions.length - 1;
              c >= 0;
              c--
            ) {
              var h = this.contributions[c],
                f = h.getInfoContribution(e.uri, l)
              if (f)
                return f.then(function(e) {
                  return u(e)
                })
            }
            return this.schemaService.getSchemaForResource(e.uri, n).then(function(e) {
              if (e && i) {
                var t = n.getMatchingSchemas(e.schema, i.offset),
                  r = void 0,
                  o = void 0,
                  s = void 0,
                  a = void 0
                t.every(function(e) {
                  if (
                    e.node === i &&
                    !e.inverted &&
                    e.schema &&
                    ((r = r || e.schema.title),
                    (o = o || e.schema.markdownDescription || Pi(e.schema.description)),
                    e.schema.enum)
                  ) {
                    var t = e.schema.enum.indexOf(bi(i))
                    e.schema.markdownEnumDescriptions
                      ? (s = e.schema.markdownEnumDescriptions[t])
                      : e.schema.enumDescriptions && (s = Pi(e.schema.enumDescriptions[t])),
                      s && ((a = e.schema.enum[t]), 'string' !== typeof a && (a = JSON.stringify(a)))
                  }
                  return !0
                })
                var l = ''
                return (
                  r && (l = Pi(r)),
                  o && (l.length > 0 && (l += '\n\n'), (l += o)),
                  s && (l.length > 0 && (l += '\n\n'), (l += '`' + Ri(a) + '`: ' + s)),
                  u([l])
                )
              }
              return null
            })
          }),
          e
        )
      })()
    function Pi(e) {
      if (e) {
        var t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3')
        return t.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
      }
    }
    function Ri(e) {
      return -1 !== e.indexOf('`') ? '`` ' + e + ' ``' : e
    }
    var Di = n('e0W4'),
      Fi = ti(),
      ji = (function() {
        function e(e, t) {
          ;(this.patternRegExps = []), (this.isInclude = [])
          try {
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                o = '!' !== i[0]
              o || (i = i.substring(1)), this.patternRegExps.push(new RegExp(Li(i) + '$')), this.isInclude.push(o)
            }
            this.uris = t
          } catch (s) {
            ;(this.patternRegExps.length = 0), (this.isInclude.length = 0), (this.uris = [])
          }
        }
        return (
          (e.prototype.matchesPattern = function(e) {
            for (var t = !1, n = 0; n < this.patternRegExps.length; n++) {
              var r = this.patternRegExps[n]
              r.test(e) && (t = this.isInclude[n])
            }
            return t
          }),
          (e.prototype.getURIs = function() {
            return this.uris
          }),
          e
        )
      })(),
      Ui = (function() {
        function e(e, t, n) {
          ;(this.service = e),
            (this.url = t),
            (this.dependencies = {}),
            n && (this.unresolvedSchema = this.service.promise.resolve(new Vi(n)))
        }
        return (
          (e.prototype.getUnresolvedSchema = function() {
            return (
              this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.url)),
              this.unresolvedSchema
            )
          }),
          (e.prototype.getResolvedSchema = function() {
            var e = this
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(function(t) {
                  return e.service.resolveSchemaContent(t, e.url, e.dependencies)
                })),
              this.resolvedSchema
            )
          }),
          (e.prototype.clearSchema = function() {
            ;(this.resolvedSchema = void 0), (this.unresolvedSchema = void 0), (this.dependencies = {})
          }),
          e
        )
      })(),
      Vi = (function() {
        function e(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t)
        }
        return e
      })(),
      $i = (function() {
        function e(e, t) {
          void 0 === t && (t = []), (this.schema = e), (this.errors = t)
        }
        return (
          (e.prototype.getSection = function(e) {
            var t = this.getSectionRecursive(e, this.schema)
            if (t) return mi(t)
          }),
          (e.prototype.getSectionRecursive = function(e, t) {
            if (!t || 'boolean' === typeof t || 0 === e.length) return t
            var n = e.shift()
            if (t.properties && (t.properties[n], 1)) return this.getSectionRecursive(e, t.properties[n])
            if (t.patternProperties)
              for (var r = 0, i = Object.keys(t.patternProperties); r < i.length; r++) {
                var o = i[r],
                  s = new RegExp(o)
                if (s.test(n)) return this.getSectionRecursive(e, t.patternProperties[o])
              }
            else {
              if ('object' === typeof t.additionalProperties) return this.getSectionRecursive(e, t.additionalProperties)
              if (n.match('[0-9]+'))
                if (Array.isArray(t.items)) {
                  var a = parseInt(n, 10)
                  if (!isNaN(a) && t.items[a]) return this.getSectionRecursive(e, t.items[a])
                } else if (t.items) return this.getSectionRecursive(e, t.items)
            }
          }),
          e
        )
      })(),
      Wi = (function() {
        function e(e, t, n) {
          ;(this.contextService = t),
            (this.requestService = e),
            (this.promiseConstructor = n || Promise),
            (this.callOnDispose = []),
            (this.contributionSchemas = {}),
            (this.contributionAssociations = []),
            (this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {})
        }
        return (
          (e.prototype.getRegisteredSchemaIds = function(e) {
            return Object.keys(this.registeredSchemasIds).filter(function(t) {
              var n = Di['a'].parse(t).scheme
              return 'schemaservice' !== n && (!e || e(n))
            })
          }),
          Object.defineProperty(e.prototype, 'promise', {
            get: function() {
              return this.promiseConstructor
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.dispose = function() {
            while (this.callOnDispose.length > 0) this.callOnDispose.pop()()
          }),
          (e.prototype.onResourceChange = function(e) {
            var t = this,
              n = !1
            e = Bi(e)
            var r = [e],
              i = Object.keys(this.schemasById).map(function(e) {
                return t.schemasById[e]
              })
            while (r.length)
              for (var o = r.pop(), s = 0; s < i.length; s++) {
                var a = i[s]
                a &&
                  (a.url === o || a.dependencies[o]) &&
                  (a.url !== o && r.push(a.url), a.clearSchema(), (i[s] = void 0), (n = !0))
              }
            return n
          }),
          (e.prototype.setSchemaContributions = function(e) {
            if (e.schemas) {
              var t = e.schemas
              for (var n in t) {
                var r = Bi(n)
                this.contributionSchemas[r] = this.addSchemaHandle(r, t[n])
              }
            }
            if (Array.isArray(e.schemaAssociations))
              for (var i = e.schemaAssociations, o = 0, s = i; o < s.length; o++) {
                var a = s[o],
                  u = a.uris.map(Bi),
                  l = this.addFilePatternAssociation(a.pattern, u)
                this.contributionAssociations.push(l)
              }
          }),
          (e.prototype.addSchemaHandle = function(e, t) {
            var n = new Ui(this, e, t)
            return (this.schemasById[e] = n), n
          }),
          (e.prototype.getOrAddSchemaHandle = function(e, t) {
            return this.schemasById[e] || this.addSchemaHandle(e, t)
          }),
          (e.prototype.addFilePatternAssociation = function(e, t) {
            var n = new ji(e, t)
            return this.filePatternAssociations.push(n), n
          }),
          (e.prototype.registerExternalSchema = function(e, t, n) {
            var r = Bi(e)
            return (
              (this.registeredSchemasIds[r] = !0),
              (this.cachedSchemaForResource = void 0),
              t && this.addFilePatternAssociation(t, [e]),
              n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r)
            )
          }),
          (e.prototype.clearExternalSchemas = function() {
            for (var e in ((this.schemasById = {}),
            (this.filePatternAssociations = []),
            (this.registeredSchemasIds = {}),
            (this.cachedSchemaForResource = void 0),
            this.contributionSchemas))
              (this.schemasById[e] = this.contributionSchemas[e]), (this.registeredSchemasIds[e] = !0)
            for (var t = 0, n = this.contributionAssociations; t < n.length; t++) {
              var r = n[t]
              this.filePatternAssociations.push(r)
            }
          }),
          (e.prototype.getResolvedSchema = function(e) {
            var t = Bi(e),
              n = this.schemasById[t]
            return n ? n.getResolvedSchema() : this.promise.resolve(void 0)
          }),
          (e.prototype.loadSchema = function(e) {
            if (!this.requestService) {
              var t = Fi(
                'json.schema.norequestservice',
                "Unable to load schema from '{0}'. No schema request service available",
                Ki(e),
              )
              return this.promise.resolve(new Vi({}, [t]))
            }
            return this.requestService(e).then(
              function(t) {
                if (!t) {
                  var n = Fi('json.schema.nocontent', "Unable to load schema from '{0}': No content.", Ki(e))
                  return new Vi({}, [n])
                }
                var r = {},
                  i = []
                r = ir(t, i)
                var o = i.length
                  ? [
                      Fi(
                        'json.schema.invalidFormat',
                        "Unable to parse content from '{0}': Parse error at offset {1}.",
                        Ki(e),
                        i[0].offset,
                      ),
                    ]
                  : []
                return new Vi(r, o)
              },
              function(t) {
                var n = t.toString(),
                  r = t.toString().split('Error: ')
                return (
                  r.length > 1 && (n = r[1]),
                  Ni(n, '.') && (n = n.substr(0, n.length - 1)),
                  new Vi({}, [Fi('json.schema.nocontent', "Unable to load schema from '{0}': {1}.", Ki(e), n)])
                )
              },
            )
          }),
          (e.prototype.resolveSchemaContent = function(e, t, n) {
            var r = this,
              i = e.errors.slice(0),
              o = e.schema
            if (o.$schema) {
              var s = Bi(o.$schema)
              if ('http://json-schema.org/draft-03/schema' === s)
                return this.promise.resolve(
                  new $i({}, [Fi('json.schema.draft03.notsupported', 'Draft-03 schemas are not supported.')]),
                )
              'https://json-schema.org/draft/2019-09/schema' === s &&
                i.push(Fi('json.schema.draft201909.notsupported', 'Draft 2019-09 schemas are not yet fully supported.'))
            }
            var a = this.contextService,
              u = function(e, t) {
                if (!t) return e
                var n = e
                return (
                  '/' === t[0] && (t = t.substr(1)),
                  t.split('/').some(function(e) {
                    return (n = n[e]), !n
                  }),
                  n
                )
              },
              l = function(e, t, n, r) {
                var o = r ? decodeURIComponent(r) : void 0,
                  s = u(t, o)
                if (s) for (var a in s) s.hasOwnProperty(a) && !e.hasOwnProperty(a) && (e[a] = s[a])
                else i.push(Fi('json.schema.invalidref', "$ref '{0}' in '{1}' can not be resolved.", o, n))
              },
              c = function(e, t, n, o, s) {
                a && !/^\w+:\/\/.*/.test(t) && (t = a.resolveRelativePath(t, o)), (t = Bi(t))
                var u = r.getOrAddSchemaHandle(t)
                return u.getUnresolvedSchema().then(function(r) {
                  if (((s[t] = !0), r.errors.length)) {
                    var o = n ? t + '#' + n : t
                    i.push(Fi('json.schema.problemloadingref', "Problems loading reference '{0}': {1}", o, r.errors[0]))
                  }
                  return l(e, r.schema, t, n), h(e, r.schema, t, u.dependencies)
                })
              },
              h = function(e, t, n, i) {
                if (!e || 'object' !== typeof e) return Promise.resolve(null)
                var o = [e],
                  s = [],
                  a = [],
                  u = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                    for (var n = 0, r = e; n < r.length; n++) {
                      var i = r[n]
                      'object' === typeof i && o.push(i)
                    }
                  },
                  h = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                    for (var n = 0, r = e; n < r.length; n++) {
                      var i = r[n]
                      if ('object' === typeof i)
                        for (var s in i) {
                          var a = s,
                            u = i[a]
                          'object' === typeof u && o.push(u)
                        }
                    }
                  },
                  f = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                    for (var n = 0, r = e; n < r.length; n++) {
                      var i = r[n]
                      if (Array.isArray(i))
                        for (var s = 0, a = i; s < a.length; s++) {
                          var u = a[s]
                          'object' === typeof u && o.push(u)
                        }
                    }
                  },
                  d = function(e) {
                    var r = []
                    while (e.$ref) {
                      var o = e.$ref,
                        s = o.split('#', 2)
                      if ((delete e.$ref, s[0].length > 0)) return void a.push(c(e, s[0], s[1], n, i))
                      ;-1 === r.indexOf(o) && (l(e, t, n, s[1]), r.push(o))
                    }
                    u(
                      e.items,
                      e.additionalItems,
                      e.additionalProperties,
                      e.not,
                      e.contains,
                      e.propertyNames,
                      e.if,
                      e.then,
                      e.else,
                    ),
                      h(e.definitions, e.properties, e.patternProperties, e.dependencies),
                      f(e.anyOf, e.allOf, e.oneOf, e.items)
                  }
                while (o.length) {
                  var m = o.pop()
                  s.indexOf(m) >= 0 || (s.push(m), d(m))
                }
                return r.promise.all(a)
              }
            return h(o, o, t, n).then(function(e) {
              return new $i(o, i)
            })
          }),
          (e.prototype.getSchemaForResource = function(e, t) {
            if (t && t.root && 'object' === t.root.type) {
              var n = t.root.properties.filter(function(e) {
                return '$schema' === e.keyNode.value && e.valueNode && 'string' === e.valueNode.type
              })
              if (n.length > 0) {
                var r = n[0].valueNode
                if (r && 'string' === r.type) {
                  var i = bi(r)
                  if (
                    (i && xi(i, '.') && this.contextService && (i = this.contextService.resolveRelativePath(i, e)), i)
                  ) {
                    var o = Bi(i)
                    return this.getOrAddSchemaHandle(o).getResolvedSchema()
                  }
                }
              }
            }
            if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === e)
              return this.cachedSchemaForResource.resolvedSchema
            for (var s = Object.create(null), a = [], u = 0, l = this.filePatternAssociations; u < l.length; u++) {
              var c = l[u]
              if (c.matchesPattern(e))
                for (var h = 0, f = c.getURIs(); h < f.length; h++) {
                  var d = f[h]
                  s[d] || (a.push(d), (s[d] = !0))
                }
            }
            var m = a.length > 0 ? this.createCombinedSchema(e, a).getResolvedSchema() : this.promise.resolve(void 0)
            return (this.cachedSchemaForResource = { resource: e, resolvedSchema: m }), m
          }),
          (e.prototype.createCombinedSchema = function(e, t) {
            if (1 === t.length) return this.getOrAddSchemaHandle(t[0])
            var n = 'schemaservice://combinedSchema/' + encodeURIComponent(e),
              r = {
                allOf: t.map(function(e) {
                  return { $ref: e }
                }),
              }
            return this.addSchemaHandle(n, r)
          }),
          (e.prototype.getMatchingSchemas = function(e, t, n) {
            if (n) {
              var r = n.id || 'schemaservice://untitled/matchingSchemas/' + qi++
              return this.resolveSchemaContent(new Vi(n), r, {}).then(function(e) {
                return t.getMatchingSchemas(e.schema).filter(function(e) {
                  return !e.inverted
                })
              })
            }
            return this.getSchemaForResource(e.uri, t).then(function(e) {
              return e
                ? t.getMatchingSchemas(e.schema).filter(function(e) {
                    return !e.inverted
                  })
                : []
            })
          }),
          e
        )
      })(),
      qi = 0
    function Bi(e) {
      try {
        return Di['a'].parse(e).toString()
      } catch (t) {
        return e
      }
    }
    function Ki(e) {
      try {
        var t = Di['a'].parse(e)
        if ('file' === t.scheme) return t.fsPath
      } catch (n) {}
      return e
    }
    var Hi = ti(),
      Yi = (function() {
        function e(e, t) {
          ;(this.jsonSchemaService = e), (this.promise = t), (this.validationEnabled = !0)
        }
        return (
          (e.prototype.configure = function(e) {
            e && ((this.validationEnabled = e.validate), (this.commentSeverity = e.allowComments ? void 0 : Yn.Error))
          }),
          (e.prototype.doValidation = function(e, t, n, r) {
            var i = this
            if (!this.validationEnabled) return this.promise.resolve([])
            var o = [],
              s = {},
              a = function(e) {
                var t = e.range.start.line + ' ' + e.range.start.character + ' ' + e.message
                s[t] || ((s[t] = !0), o.push(e))
              },
              u = function(r) {
                var s = n ? Qi(n.trailingCommas) : Yn.Error,
                  u = n ? Qi(n.comments) : i.commentSeverity
                if (r) {
                  if (r.errors.length && t.root) {
                    var l = t.root,
                      c = 'object' === l.type ? l.properties[0] : void 0
                    if (c && '$schema' === c.keyNode.value) {
                      var h = c.valueNode || c,
                        f = jn.create(e.positionAt(h.offset), e.positionAt(h.offset + h.length))
                      a(zn.create(f, r.errors[0], Yn.Warning, Hr.SchemaResolveError))
                    } else {
                      f = jn.create(e.positionAt(l.offset), e.positionAt(l.offset + 1))
                      a(zn.create(f, r.errors[0], Yn.Warning, Hr.SchemaResolveError))
                    }
                  } else {
                    var d = t.validate(e, r.schema)
                    d && d.forEach(a)
                  }
                  zi(r.schema) && (u = void 0), Ji(r.schema) && (s = void 0)
                }
                for (var m = 0, g = t.syntaxErrors; m < g.length; m++) {
                  var p = g[m]
                  if (p.code === Hr.TrailingComma) {
                    if ('number' !== typeof s) continue
                    p.severity = s
                  }
                  a(p)
                }
                if ('number' === typeof u) {
                  var v = Hi('InvalidCommentToken', 'Comments are not permitted in JSON.')
                  t.comments.forEach(function(e) {
                    a(zn.create(e, v, u, Hr.CommentNotPermitted))
                  })
                }
                return o
              }
            if (r) {
              var l = r.id || 'schemaservice://untitled/' + Gi++
              return this.jsonSchemaService.resolveSchemaContent(new Vi(r), l, {}).then(function(e) {
                return u(e)
              })
            }
            return this.jsonSchemaService.getSchemaForResource(e.uri, t).then(function(e) {
              return u(e)
            })
          }),
          e
        )
      })(),
      Gi = 0
    function zi(e) {
      if (e && 'object' === typeof e) {
        if (fr(e.allowComments)) return e.allowComments
        if (e.allOf)
          for (var t = 0, n = e.allOf; t < n.length; t++) {
            var r = n[t],
              i = zi(r)
            if (fr(i)) return i
          }
      }
    }
    function Ji(e) {
      if (e && 'object' === typeof e) {
        if (fr(e.allowTrailingCommas)) return e.allowTrailingCommas
        var t = e
        if (fr(t['allowsTrailingCommas'])) return t['allowsTrailingCommas']
        if (e.allOf)
          for (var n = 0, r = e.allOf; n < r.length; n++) {
            var i = r[n],
              o = Ji(i)
            if (fr(o)) return o
          }
      }
    }
    function Qi(e) {
      switch (e) {
        case 'error':
          return Yn.Error
        case 'warning':
          return Yn.Warning
        case 'ignore':
          return
      }
    }
    var Xi = 48,
      Zi = 57,
      eo = 65,
      to = 97,
      no = 102
    function ro(e) {
      return e < Xi ? 0 : e <= Zi ? e - Xi : (e < to && (e += to - eo), e >= to && e <= no ? e - to + 10 : 0)
    }
    function io(e) {
      if ('#' === e[0])
        switch (e.length) {
          case 4:
            return {
              red: (17 * ro(e.charCodeAt(1))) / 255,
              green: (17 * ro(e.charCodeAt(2))) / 255,
              blue: (17 * ro(e.charCodeAt(3))) / 255,
              alpha: 1,
            }
          case 5:
            return {
              red: (17 * ro(e.charCodeAt(1))) / 255,
              green: (17 * ro(e.charCodeAt(2))) / 255,
              blue: (17 * ro(e.charCodeAt(3))) / 255,
              alpha: (17 * ro(e.charCodeAt(4))) / 255,
            }
          case 7:
            return {
              red: (16 * ro(e.charCodeAt(1)) + ro(e.charCodeAt(2))) / 255,
              green: (16 * ro(e.charCodeAt(3)) + ro(e.charCodeAt(4))) / 255,
              blue: (16 * ro(e.charCodeAt(5)) + ro(e.charCodeAt(6))) / 255,
              alpha: 1,
            }
          case 9:
            return {
              red: (16 * ro(e.charCodeAt(1)) + ro(e.charCodeAt(2))) / 255,
              green: (16 * ro(e.charCodeAt(3)) + ro(e.charCodeAt(4))) / 255,
              blue: (16 * ro(e.charCodeAt(5)) + ro(e.charCodeAt(6))) / 255,
              alpha: (16 * ro(e.charCodeAt(7)) + ro(e.charCodeAt(8))) / 255,
            }
        }
    }
    var oo = (function() {
      function e(e) {
        this.schemaService = e
      }
      return (
        (e.prototype.findDocumentSymbols = function(e, t, n) {
          var r = this
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE })
          var i = t.root
          if (!i) return []
          var o = n.resultLimit || Number.MAX_VALUE,
            s = e.uri
          if (
            ('vscode://defaultsettings/keybindings.json' === s || Ni(s.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var a = [], u = 0, l = i.items; u < l.length; u++) {
              var c = l[u]
              if ('object' === c.type)
                for (var h = 0, f = c.properties; h < f.length; h++) {
                  var d = f[h]
                  if ('key' === d.keyNode.value && d.valueNode) {
                    var m = Un.create(e.uri, so(e, c))
                    if ((a.push({ name: bi(d.valueNode), kind: Tr.Function, location: m }), o--, o <= 0))
                      return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), a
                  }
                }
            }
            return a
          }
          var g = [{ node: i, containerName: '' }],
            p = 0,
            v = !1,
            y = [],
            b = function(t, n) {
              'array' === t.type
                ? t.items.forEach(function(e) {
                    e && g.push({ node: e, containerName: n })
                  })
                : 'object' === t.type &&
                  t.properties.forEach(function(t) {
                    var i = t.valueNode
                    if (i)
                      if (o > 0) {
                        o--
                        var s = Un.create(e.uri, so(e, t)),
                          a = n ? n + '.' + t.keyNode.value : t.keyNode.value
                        y.push({
                          name: r.getKeyLabel(t),
                          kind: r.getSymbolKind(i.type),
                          location: s,
                          containerName: n,
                        }),
                          g.push({ node: i, containerName: a })
                      } else v = !0
                  })
            }
          while (p < g.length) {
            var C = g[p++]
            b(C.node, C.containerName)
          }
          return v && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), y
        }),
        (e.prototype.findDocumentSymbols2 = function(e, t, n) {
          var r = this
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE })
          var i = t.root
          if (!i) return []
          var o = n.resultLimit || Number.MAX_VALUE,
            s = e.uri
          if (
            ('vscode://defaultsettings/keybindings.json' === s || Ni(s.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var a = [], u = 0, l = i.items; u < l.length; u++) {
              var c = l[u]
              if ('object' === c.type)
                for (var h = 0, f = c.properties; h < f.length; h++) {
                  var d = f[h]
                  if ('key' === d.keyNode.value && d.valueNode) {
                    var m = so(e, c),
                      g = so(e, d.keyNode)
                    if (
                      (a.push({ name: bi(d.valueNode), kind: Tr.Function, range: m, selectionRange: g }), o--, o <= 0)
                    )
                      return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), a
                  }
                }
            }
            return a
          }
          var p = [],
            v = [{ node: i, result: p }],
            y = 0,
            b = !1,
            C = function(t, n) {
              'array' === t.type
                ? t.items.forEach(function(t, i) {
                    if (t)
                      if (o > 0) {
                        o--
                        var s = so(e, t),
                          a = s,
                          u = String(i),
                          l = { name: u, kind: r.getSymbolKind(t.type), range: s, selectionRange: a, children: [] }
                        n.push(l), v.push({ result: l.children, node: t })
                      } else b = !0
                  })
                : 'object' === t.type &&
                  t.properties.forEach(function(t) {
                    var i = t.valueNode
                    if (i)
                      if (o > 0) {
                        o--
                        var s = so(e, t),
                          a = so(e, t.keyNode),
                          u = {
                            name: r.getKeyLabel(t),
                            kind: r.getSymbolKind(i.type),
                            range: s,
                            selectionRange: a,
                            children: [],
                          }
                        n.push(u), v.push({ result: u.children, node: i })
                      } else b = !0
                  })
            }
          while (y < v.length) {
            var _ = v[y++]
            C(_.node, _.result)
          }
          return b && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), p
        }),
        (e.prototype.getSymbolKind = function(e) {
          switch (e) {
            case 'object':
              return Tr.Module
            case 'string':
              return Tr.String
            case 'number':
              return Tr.Number
            case 'array':
              return Tr.Array
            case 'boolean':
              return Tr.Boolean
            default:
              return Tr.Variable
          }
        }),
        (e.prototype.getKeyLabel = function(e) {
          var t = e.keyNode.value
          return t && (t = t.replace(/[\n]/g, '\u21b5')), t && t.trim() ? t : '"' + t + '"'
        }),
        (e.prototype.findDocumentColors = function(e, t, n) {
          return this.schemaService.getSchemaForResource(e.uri, t).then(function(r) {
            var i = []
            if (r)
              for (
                var o = n && 'number' === typeof n.resultLimit ? n.resultLimit : Number.MAX_VALUE,
                  s = t.getMatchingSchemas(r.schema),
                  a = {},
                  u = 0,
                  l = s;
                u < l.length;
                u++
              ) {
                var c = l[u]
                if (
                  !c.inverted &&
                  c.schema &&
                  ('color' === c.schema.format || 'color-hex' === c.schema.format) &&
                  c.node &&
                  'string' === c.node.type
                ) {
                  var h = String(c.node.offset)
                  if (!a[h]) {
                    var f = io(bi(c.node))
                    if (f) {
                      var d = so(e, c.node)
                      i.push({ color: f, range: d })
                    }
                    if (((a[h] = !0), o--, o <= 0))
                      return n && n.onResultLimitExceeded && n.onResultLimitExceeded(e.uri), i
                  }
                }
              }
            return i
          })
        }),
        (e.prototype.getColorPresentations = function(e, t, n, r) {
          var i,
            o = [],
            s = Math.round(255 * n.red),
            a = Math.round(255 * n.green),
            u = Math.round(255 * n.blue)
          function l(e) {
            var t = e.toString(16)
            return 2 !== t.length ? '0' + t : t
          }
          return (
            (i = 1 === n.alpha ? '#' + l(s) + l(a) + l(u) : '#' + l(s) + l(a) + l(u) + l(Math.round(255 * n.alpha))),
            o.push({ label: i, textEdit: Qn.replace(r, JSON.stringify(i)) }),
            o
          )
        }),
        e
      )
    })()
    function so(e, t) {
      return jn.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length))
    }
    var ao = ti(),
      uo = {
        schemaAssociations: [],
        schemas: {
          'http://json-schema.org/schema#': { $ref: 'http://json-schema.org/draft-07/schema#' },
          'http://json-schema.org/draft-04/schema#': {
            title: ao('schema.json', 'Describes a JSON file using a schema. See json-schema.org for more info.'),
            $schema: 'http://json-schema.org/draft-04/schema#',
            definitions: {
              schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
              positiveInteger: { type: 'integer', minimum: 0 },
              positiveIntegerDefault0: { allOf: [{ $ref: '#/definitions/positiveInteger' }, { default: 0 }] },
              simpleTypes: {
                type: 'string',
                enum: ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'],
              },
              stringArray: { type: 'array', items: { type: 'string' }, minItems: 1, uniqueItems: !0 },
            },
            type: 'object',
            properties: {
              id: { type: 'string', format: 'uri' },
              $schema: { type: 'string', format: 'uri' },
              title: { type: 'string' },
              description: { type: 'string' },
              default: {},
              multipleOf: { type: 'number', minimum: 0, exclusiveMinimum: !0 },
              maximum: { type: 'number' },
              exclusiveMaximum: { type: 'boolean', default: !1 },
              minimum: { type: 'number' },
              exclusiveMinimum: { type: 'boolean', default: !1 },
              maxLength: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minLength: { allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }] },
              pattern: { type: 'string', format: 'regex' },
              additionalItems: { anyOf: [{ type: 'boolean' }, { $ref: '#' }], default: {} },
              items: { anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }], default: {} },
              maxItems: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minItems: { allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }] },
              uniqueItems: { type: 'boolean', default: !1 },
              maxProperties: { allOf: [{ $ref: '#/definitions/positiveInteger' }] },
              minProperties: { allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }] },
              required: { allOf: [{ $ref: '#/definitions/stringArray' }] },
              additionalProperties: { anyOf: [{ type: 'boolean' }, { $ref: '#' }], default: {} },
              definitions: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
              properties: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
              patternProperties: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
              dependencies: {
                type: 'object',
                additionalProperties: { anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }] },
              },
              enum: { type: 'array', minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: '#/definitions/simpleTypes' },
                  { type: 'array', items: { $ref: '#/definitions/simpleTypes' }, minItems: 1, uniqueItems: !0 },
                ],
              },
              format: {
                anyOf: [
                  { type: 'string', enum: ['date-time', 'uri', 'email', 'hostname', 'ipv4', 'ipv6', 'regex'] },
                  { type: 'string' },
                ],
              },
              allOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              anyOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              oneOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
              not: { allOf: [{ $ref: '#' }] },
            },
            dependencies: { exclusiveMaximum: ['maximum'], exclusiveMinimum: ['minimum'] },
            default: {},
          },
          'http://json-schema.org/draft-07/schema#': {
            title: ao('schema.json', 'Describes a JSON file using a schema. See json-schema.org for more info.'),
            definitions: {
              schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
              nonNegativeInteger: { type: 'integer', minimum: 0 },
              nonNegativeIntegerDefault0: { allOf: [{ $ref: '#/definitions/nonNegativeInteger' }, { default: 0 }] },
              simpleTypes: { enum: ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'] },
              stringArray: { type: 'array', items: { type: 'string' }, uniqueItems: !0, default: [] },
            },
            type: ['object', 'boolean'],
            properties: {
              $id: { type: 'string', format: 'uri-reference' },
              $schema: { type: 'string', format: 'uri' },
              $ref: { type: 'string', format: 'uri-reference' },
              $comment: { type: 'string' },
              title: { type: 'string' },
              description: { type: 'string' },
              default: !0,
              readOnly: { type: 'boolean', default: !1 },
              examples: { type: 'array', items: !0 },
              multipleOf: { type: 'number', exclusiveMinimum: 0 },
              maximum: { type: 'number' },
              exclusiveMaximum: { type: 'number' },
              minimum: { type: 'number' },
              exclusiveMinimum: { type: 'number' },
              maxLength: { $ref: '#/definitions/nonNegativeInteger' },
              minLength: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              pattern: { type: 'string', format: 'regex' },
              additionalItems: { $ref: '#' },
              items: { anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }], default: !0 },
              maxItems: { $ref: '#/definitions/nonNegativeInteger' },
              minItems: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              uniqueItems: { type: 'boolean', default: !1 },
              contains: { $ref: '#' },
              maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
              minProperties: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
              required: { $ref: '#/definitions/stringArray' },
              additionalProperties: { $ref: '#' },
              definitions: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
              properties: { type: 'object', additionalProperties: { $ref: '#' }, default: {} },
              patternProperties: {
                type: 'object',
                additionalProperties: { $ref: '#' },
                propertyNames: { format: 'regex' },
                default: {},
              },
              dependencies: {
                type: 'object',
                additionalProperties: { anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }] },
              },
              propertyNames: { $ref: '#' },
              const: !0,
              enum: { type: 'array', items: !0, minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: '#/definitions/simpleTypes' },
                  { type: 'array', items: { $ref: '#/definitions/simpleTypes' }, minItems: 1, uniqueItems: !0 },
                ],
              },
              format: { type: 'string' },
              contentMediaType: { type: 'string' },
              contentEncoding: { type: 'string' },
              if: { $ref: '#' },
              then: { $ref: '#' },
              else: { $ref: '#' },
              allOf: { $ref: '#/definitions/schemaArray' },
              anyOf: { $ref: '#/definitions/schemaArray' },
              oneOf: { $ref: '#/definitions/schemaArray' },
              not: { $ref: '#' },
            },
            default: !0,
          },
        },
      },
      lo = {
        id: ao('schema.json.id', 'A unique identifier for the schema.'),
        $schema: ao('schema.json.$schema', 'The schema to verify this document against.'),
        title: ao('schema.json.title', 'A descriptive title of the element.'),
        description: ao(
          'schema.json.description',
          'A long description of the element. Used in hover menus and suggestions.',
        ),
        default: ao('schema.json.default', 'A default value. Used by suggestions.'),
        multipleOf: ao(
          'schema.json.multipleOf',
          'A number that should cleanly divide the current value (i.e. have no remainder).',
        ),
        maximum: ao('schema.json.maximum', 'The maximum numerical value, inclusive by default.'),
        exclusiveMaximum: ao('schema.json.exclusiveMaximum', 'Makes the maximum property exclusive.'),
        minimum: ao('schema.json.minimum', 'The minimum numerical value, inclusive by default.'),
        exclusiveMinimum: ao('schema.json.exclusiveMininum', 'Makes the minimum property exclusive.'),
        maxLength: ao('schema.json.maxLength', 'The maximum length of a string.'),
        minLength: ao('schema.json.minLength', 'The minimum length of a string.'),
        pattern: ao(
          'schema.json.pattern',
          'A regular expression to match the string against. It is not implicitly anchored.',
        ),
        additionalItems: ao(
          'schema.json.additionalItems',
          'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.',
        ),
        items: ao(
          'schema.json.items',
          'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.',
        ),
        maxItems: ao('schema.json.maxItems', 'The maximum number of items that can be inside an array. Inclusive.'),
        minItems: ao('schema.json.minItems', 'The minimum number of items that can be inside an array. Inclusive.'),
        uniqueItems: ao(
          'schema.json.uniqueItems',
          'If all of the items in the array must be unique. Defaults to false.',
        ),
        maxProperties: ao(
          'schema.json.maxProperties',
          'The maximum number of properties an object can have. Inclusive.',
        ),
        minProperties: ao(
          'schema.json.minProperties',
          'The minimum number of properties an object can have. Inclusive.',
        ),
        required: ao(
          'schema.json.required',
          'An array of strings that lists the names of all properties required on this object.',
        ),
        additionalProperties: ao(
          'schema.json.additionalProperties',
          "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.",
        ),
        definitions: ao(
          'schema.json.definitions',
          'Not used for validation. Place subschemas here that you wish to reference inline with $ref.',
        ),
        properties: ao('schema.json.properties', 'A map of property names to schemas for each property.'),
        patternProperties: ao(
          'schema.json.patternProperties',
          'A map of regular expressions on property names to schemas for matching properties.',
        ),
        dependencies: ao(
          'schema.json.dependencies',
          'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.',
        ),
        enum: ao('schema.json.enum', 'The set of literal values that are valid.'),
        type: ao(
          'schema.json.type',
          'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.',
        ),
        format: ao('schema.json.format', 'Describes the format expected for the value.'),
        allOf: ao('schema.json.allOf', 'An array of schemas, all of which must match.'),
        anyOf: ao('schema.json.anyOf', 'An array of schemas, where at least one must match.'),
        oneOf: ao('schema.json.oneOf', 'An array of schemas, exactly one of which must match.'),
        not: ao('schema.json.not', 'A schema which must not match.'),
        $id: ao('schema.json.$id', 'A unique identifier for the schema.'),
        $ref: ao('schema.json.$ref', 'Reference a definition hosted on any location.'),
        $comment: ao('schema.json.$comment', 'Comments from schema authors to readers or maintainers of the schema.'),
        readOnly: ao(
          'schema.json.readOnly',
          'Indicates that the value of the instance is managed exclusively by the owning authority.',
        ),
        examples: ao(
          'schema.json.examples',
          'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.',
        ),
        contains: ao(
          'schema.json.contains',
          'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.',
        ),
        propertyNames: ao(
          'schema.json.propertyNames',
          'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.',
        ),
        const: ao(
          'schema.json.const',
          'An instance validates successfully against this keyword if its value is equal to the value of the keyword.',
        ),
        contentMediaType: ao('schema.json.contentMediaType', 'Describes the media type of a string property.'),
        contentEncoding: ao('schema.json.contentEncoding', 'Describes the content encoding of a string property.'),
        if: ao(
          'schema.json.if',
          'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.',
        ),
        then: ao('schema.json.then', 'The "if" subschema is used for validation when the "if" subschema succeeds.'),
        else: ao('schema.json.else', 'The "else" subschema is used for validation when the "if" subschema fails.'),
      }
    for (var co in uo.schemas) {
      var ho = uo.schemas[co]
      for (var fo in ho.properties) {
        var mo = ho.properties[fo]
        'boolean' === typeof mo && (mo = ho.properties[fo] = {})
        var go = lo[fo]
        go ? (mo['description'] = go) : console.log(fo + ": localize('schema.json." + fo + '\', "")')
      }
    }
    function po(e, t) {
      var n = [],
        r = [],
        i = [],
        o = -1,
        s = rr(e.getText(), !1),
        a = s.scan()
      function u(e) {
        n.push(e), r.push(i.length)
      }
      while (17 !== a) {
        switch (a) {
          case 1:
          case 3:
            var l = e.positionAt(s.getTokenOffset()).line,
              c = { startLine: l, endLine: l, kind: 1 === a ? 'object' : 'array' }
            i.push(c)
            break
          case 2:
          case 4:
            var h = 2 === a ? 'object' : 'array'
            if (i.length > 0 && i[i.length - 1].kind === h) {
              c = i.pop()
              var f = e.positionAt(s.getTokenOffset()).line
              c && f > c.startLine + 1 && o !== c.startLine && ((c.endLine = f - 1), u(c), (o = c.startLine))
            }
            break
          case 13:
            l = e.positionAt(s.getTokenOffset()).line
            var d = e.positionAt(s.getTokenOffset() + s.getTokenLength()).line
            1 === s.getTokenError() && l + 1 < e.lineCount
              ? s.setPosition(e.offsetAt(Fn.create(l + 1, 0)))
              : l < d && (u({ startLine: l, endLine: d, kind: Bn.Comment }), (o = l))
            break
          case 12:
            var m = e.getText().substr(s.getTokenOffset(), s.getTokenLength()),
              g = m.match(/^\/\/\s*#(region\b)|(endregion\b)/)
            if (g) {
              f = e.positionAt(s.getTokenOffset()).line
              if (g[1]) {
                c = { startLine: f, endLine: f, kind: Bn.Region }
                i.push(c)
              } else {
                var p = i.length - 1
                while (p >= 0 && i[p].kind !== Bn.Region) p--
                if (p >= 0) {
                  c = i[p]
                  ;(i.length = p), f > c.startLine && o !== c.startLine && ((c.endLine = f), u(c), (o = c.startLine))
                }
              }
            }
            break
        }
        a = s.scan()
      }
      var v = t && t.rangeLimit
      if ('number' !== typeof v || n.length <= v) return n
      t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri)
      for (var y = [], b = 0, C = r; b < C.length; b++) {
        var _ = C[b]
        _ < 30 && (y[_] = (y[_] || 0) + 1)
      }
      var S = 0,
        w = 0
      for (p = 0; p < y.length; p++) {
        var A = y[p]
        if (A) {
          if (A + S > v) {
            w = p
            break
          }
          S += A
        }
      }
      var E = []
      for (p = 0; p < n.length; p++) {
        _ = r[p]
        'number' === typeof _ && (_ < w || (_ === w && S++ < v)) && E.push(n[p])
      }
      return E
    }
    function vo(e, t, n) {
      function r(t) {
        var r = e.offsetAt(t),
          o = n.getNodeFromOffset(r, !0),
          a = []
        while (o) {
          switch (o.type) {
            case 'string':
            case 'object':
            case 'array':
              var u = o.offset + 1,
                l = o.offset + o.length - 1
              u < l && r >= u && r <= l && a.push(i(u, l)), a.push(i(o.offset, o.offset + o.length))
              break
            case 'number':
            case 'boolean':
            case 'null':
            case 'property':
              a.push(i(o.offset, o.offset + o.length))
              break
          }
          if ('property' === o.type || (o.parent && 'array' === o.parent.type)) {
            var c = s(o.offset + o.length, 5)
            ;-1 !== c && a.push(i(o.offset, c))
          }
          o = o.parent
        }
        for (var h = void 0, f = a.length - 1; f >= 0; f--) h = Vr.create(a[f], h)
        return h || (h = Vr.create(jn.create(t, t))), h
      }
      function i(t, n) {
        return jn.create(e.positionAt(t), e.positionAt(n))
      }
      var o = rr(e.getText(), !0)
      function s(e, t) {
        o.setPosition(e)
        var n = o.scan()
        return n === t ? o.getTokenOffset() + o.getTokenLength() : -1
      }
      return t.map(r)
    }
    function yo(e, t, n) {
      var r = e.offsetAt(t),
        i = n.getNodeFromOffset(r, !0)
      if (!i || !Co(i)) return Promise.resolve([])
      var o = i.parent,
        s = o.valueNode,
        a = s.value,
        u = _o(n, a)
      if (!u) return Promise.resolve([])
      var l = {
        targetUri: e.uri,
        originSelectionRange: bo(e, s),
        targetRange: bo(e, u),
        targetSelectionRange: bo(e, u),
      }
      return Promise.resolve([l])
    }
    function bo(e, t) {
      return jn.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length))
    }
    function Co(e) {
      return (
        ('string' === e.type &&
          e.parent &&
          'property' === e.parent.type &&
          e.parent.valueNode === e &&
          '$ref' === e.parent.keyNode.value) ||
        !1
      )
    }
    function _o(e, t) {
      var n = wo(t)
      return n ? So(n, e.root) : null
    }
    function So(e, t) {
      if (!t) return null
      if (0 === e.length) return t
      var n = e.shift()
      if (t && 'object' === t.type) {
        var r = t.properties.find(function(e) {
          return e.keyNode.value === n
        })
        return r ? So(e, r.valueNode) : null
      }
      if (t && 'array' === t.type && n.match(/^(0|[1-9][0-9]*)$/)) {
        var i = Number.parseInt(n),
          o = t.items[i]
        return o ? So(e, o) : null
      }
      return null
    }
    function wo(e) {
      return '#' === e
        ? []
        : '#' !== e[0] || '/' !== e[1]
        ? null
        : e
            .substring(2)
            .split(/\//)
            .map(Ao)
    }
    function Ao(e) {
      return e.replace(/~1/g, '/').replace(/~0/g, '~')
    }
    function Eo(e) {
      var t = e.promiseConstructor || Promise,
        n = new Wi(e.schemaRequestService, e.workspaceContext, t)
      n.setSchemaContributions(uo)
      var r = new Ii(n, e.contributions, t, e.clientCapabilities),
        i = new Mi(n, e.contributions, t),
        o = new oo(n),
        s = new Yi(n, t)
      return {
        configure: function(e) {
          n.clearExternalSchemas(),
            e.schemas &&
              e.schemas.forEach(function(e) {
                n.registerExternalSchema(e.uri, e.fileMatch, e.schema)
              }),
            s.configure(e)
        },
        resetSchema: function(e) {
          return n.onResourceChange(e)
        },
        doValidation: s.doValidation.bind(s),
        parseJSONDocument: function(e) {
          return Ai(e, { collectComments: !0 })
        },
        newJSONDocument: function(e, t) {
          return yi(e, t)
        },
        getMatchingSchemas: n.getMatchingSchemas.bind(n),
        doResolve: r.doResolve.bind(r),
        doComplete: r.doComplete.bind(r),
        findDocumentSymbols: o.findDocumentSymbols.bind(o),
        findDocumentSymbols2: o.findDocumentSymbols2.bind(o),
        findColorSymbols: function(e, t) {
          return o.findDocumentColors(e, t).then(function(e) {
            return e.map(function(e) {
              return e.range
            })
          })
        },
        findDocumentColors: o.findDocumentColors.bind(o),
        getColorPresentations: o.getColorPresentations.bind(o),
        doHover: i.doHover.bind(i),
        getFoldingRanges: po,
        getSelectionRanges: vo,
        findDefinition: yo,
        format: function(e, t, n) {
          var r = void 0
          if (t) {
            var i = e.offsetAt(t.start),
              o = e.offsetAt(t.end) - i
            r = { offset: i, length: o }
          }
          var s = { tabSize: n ? n.tabSize : 4, insertSpaces: !n || n.insertSpaces, eol: '\n' }
          return ur(e.getText(), r, s).map(function(t) {
            return Qn.replace(jn.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length)), t.content)
          })
        },
      }
    }
    var xo,
      No = function(e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function(t) {
                t(e)
              })
        }
        return new (n || (n = Promise))(function(n, o) {
          function s(e) {
            try {
              u(r.next(e))
            } catch (t) {
              o(t)
            }
          }
          function a(e) {
            try {
              u(r['throw'](e))
            } catch (t) {
              o(t)
            }
          }
          function u(e) {
            e.done ? n(e.value) : i(e.value).then(s, a)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      Lo = function(e, t) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function() {
              return this
            }),
          o
        )
        function a(e) {
          return function(t) {
            return u([e, t])
          }
        }
        function u(o) {
          if (n) throw new TypeError('Generator is already executing.')
          while (s)
            try {
              if (
                ((n = 1),
                r &&
                  (i = 2 & o[0] ? r['return'] : o[0] ? r['throw'] || ((i = r['return']) && i.call(r), 0) : r.next) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i
              switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o
                  break
                case 4:
                  return s.label++, { value: o[1], done: !1 }
                case 5:
                  s.label++, (r = o[1]), (o = [0])
                  continue
                case 7:
                  ;(o = s.ops.pop()), s.trys.pop()
                  continue
                default:
                  if (((i = s.trys), !(i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0]))) {
                    s = 0
                    continue
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    s.label = o[1]
                    break
                  }
                  if (6 === o[0] && s.label < i[1]) {
                    ;(s.label = i[1]), (i = o)
                    break
                  }
                  if (i && s.label < i[2]) {
                    ;(s.label = i[2]), s.ops.push(o)
                    break
                  }
                  i[2] && s.ops.pop(), s.trys.pop()
                  continue
              }
              o = t.call(e, s)
            } catch (a) {
              ;(o = [6, a]), (r = 0)
            } finally {
              n = i = 0
            }
          if (5 & o[0]) throw o[1]
          return { value: o[0] ? o[1] : void 0, done: !0 }
        }
      }
    'undefined' !== typeof fetch &&
      (xo = function(e) {
        return fetch(e).then(function(e) {
          return e.text()
        })
      })
    var ko = (function() {
        function e(e, t) {
          ;(this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId),
            (this._languageService = Eo({
              workspaceContext: {
                resolveRelativePath: function(e, t) {
                  var n = t.substr(0, t.lastIndexOf('/') + 1)
                  return Mo(n, e)
                },
              },
              schemaRequestService: t.enableSchemaRequest && xo,
            })),
            this._languageService.configure(this._languageSettings)
        }
        return (
          (e.prototype.doValidation = function(e) {
            return No(this, void 0, void 0, function() {
              var t, n
              return Lo(this, function(r) {
                return (
                  (t = this._getTextDocument(e)),
                  t
                    ? ((n = this._languageService.parseJSONDocument(t)), [2, this._languageService.doValidation(t, n)])
                    : [2, Promise.resolve([])]
                )
              })
            })
          }),
          (e.prototype.doComplete = function(e, t) {
            return No(this, void 0, void 0, function() {
              var n, r
              return Lo(this, function(i) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.parseJSONDocument(n)),
                  [2, this._languageService.doComplete(n, t, r)]
                )
              })
            })
          }),
          (e.prototype.doResolve = function(e) {
            return No(this, void 0, void 0, function() {
              return Lo(this, function(t) {
                return [2, this._languageService.doResolve(e)]
              })
            })
          }),
          (e.prototype.doHover = function(e, t) {
            return No(this, void 0, void 0, function() {
              var n, r
              return Lo(this, function(i) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.parseJSONDocument(n)),
                  [2, this._languageService.doHover(n, t, r)]
                )
              })
            })
          }),
          (e.prototype.format = function(e, t, n) {
            return No(this, void 0, void 0, function() {
              var r, i
              return Lo(this, function(o) {
                return (
                  (r = this._getTextDocument(e)), (i = this._languageService.format(r, t, n)), [2, Promise.resolve(i)]
                )
              })
            })
          }),
          (e.prototype.resetSchema = function(e) {
            return No(this, void 0, void 0, function() {
              return Lo(this, function(t) {
                return [2, Promise.resolve(this._languageService.resetSchema(e))]
              })
            })
          }),
          (e.prototype.findDocumentSymbols = function(e) {
            return No(this, void 0, void 0, function() {
              var t, n, r
              return Lo(this, function(i) {
                return (
                  (t = this._getTextDocument(e)),
                  (n = this._languageService.parseJSONDocument(t)),
                  (r = this._languageService.findDocumentSymbols(t, n)),
                  [2, Promise.resolve(r)]
                )
              })
            })
          }),
          (e.prototype.findDocumentColors = function(e) {
            return No(this, void 0, void 0, function() {
              var t, n, r
              return Lo(this, function(i) {
                return (
                  (t = this._getTextDocument(e)),
                  (n = this._languageService.parseJSONDocument(t)),
                  (r = this._languageService.findDocumentColors(t, n)),
                  [2, Promise.resolve(r)]
                )
              })
            })
          }),
          (e.prototype.getColorPresentations = function(e, t, n) {
            return No(this, void 0, void 0, function() {
              var r, i, o
              return Lo(this, function(s) {
                return (
                  (r = this._getTextDocument(e)),
                  (i = this._languageService.parseJSONDocument(r)),
                  (o = this._languageService.getColorPresentations(r, i, t, n)),
                  [2, Promise.resolve(o)]
                )
              })
            })
          }),
          (e.prototype.getFoldingRanges = function(e, t) {
            return No(this, void 0, void 0, function() {
              var n, r
              return Lo(this, function(i) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.getFoldingRanges(n, t)),
                  [2, Promise.resolve(r)]
                )
              })
            })
          }),
          (e.prototype.getSelectionRanges = function(e, t) {
            return No(this, void 0, void 0, function() {
              var n, r, i
              return Lo(this, function(o) {
                return (
                  (n = this._getTextDocument(e)),
                  (r = this._languageService.parseJSONDocument(n)),
                  (i = this._languageService.getSelectionRanges(n, t, r)),
                  [2, Promise.resolve(i)]
                )
              })
            })
          }),
          (e.prototype._getTextDocument = function(e) {
            for (var t = this._ctx.getMirrorModels(), n = 0, r = t; n < r.length; n++) {
              var i = r[n]
              if (i.uri.toString() === e) return Kr.create(e, this._languageId, i.version, i.getValue())
            }
            return null
          }),
          e
        )
      })(),
      To = '/'.charCodeAt(0),
      Oo = '.'.charCodeAt(0)
    function Io(e) {
      return e.charCodeAt(0) === To
    }
    function Mo(e, t) {
      if (Io(t)) {
        var n = Di['a'].parse(e),
          r = t.split('/')
        return n.with({ path: Po(r) }).toString()
      }
      return Ro(e, t)
    }
    function Po(e) {
      for (var t = [], n = 0, r = e; n < r.length; n++) {
        var i = r[n]
        0 === i.length ||
          (1 === i.length && i.charCodeAt(0) === Oo) ||
          (2 === i.length && i.charCodeAt(0) === Oo && i.charCodeAt(1) === Oo ? t.pop() : t.push(i))
      }
      e.length > 1 && 0 === e[e.length - 1].length && t.push('')
      var o = t.join('/')
      return 0 === e[0].length && (o = '/' + o), o
    }
    function Ro(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      for (var r = Di['a'].parse(e), i = r.path.split('/'), o = 0, s = t; o < s.length; o++) {
        var a = s[o]
        i.push.apply(i, a.split('/'))
      }
      return r.with({ path: Po(i) }).toString()
    }
    self.onmessage = function() {
      Cn(function(e, t) {
        return new ko(e, t)
      })
    }
  },
  ytnY: function(e, t, n) {
    ;(function(e) {
      function n(e, t) {
        for (var n = 0, r = e.length - 1; r >= 0; r--) {
          var i = e[r]
          '.' === i ? e.splice(r, 1) : '..' === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
        }
        if (t) for (; n--; n) e.unshift('..')
        return e
      }
      function r(e) {
        'string' !== typeof e && (e += '')
        var t,
          n = 0,
          r = -1,
          i = !0
        for (t = e.length - 1; t >= 0; --t)
          if (47 === e.charCodeAt(t)) {
            if (!i) {
              n = t + 1
              break
            }
          } else -1 === r && ((i = !1), (r = t + 1))
        return -1 === r ? '' : e.slice(n, r)
      }
      function i(e, t) {
        if (e.filter) return e.filter(t)
        for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r])
        return n
      }
      ;(t.resolve = function() {
        for (var t = '', r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
          var s = o >= 0 ? arguments[o] : e.cwd()
          if ('string' !== typeof s) throw new TypeError('Arguments to path.resolve must be strings')
          s && ((t = s + '/' + t), (r = '/' === s.charAt(0)))
        }
        return (
          (t = n(
            i(t.split('/'), function(e) {
              return !!e
            }),
            !r,
          ).join('/')),
          (r ? '/' : '') + t || '.'
        )
      }),
        (t.normalize = function(e) {
          var r = t.isAbsolute(e),
            s = '/' === o(e, -1)
          return (
            (e = n(
              i(e.split('/'), function(e) {
                return !!e
              }),
              !r,
            ).join('/')),
            e || r || (e = '.'),
            e && s && (e += '/'),
            (r ? '/' : '') + e
          )
        }),
        (t.isAbsolute = function(e) {
          return '/' === e.charAt(0)
        }),
        (t.join = function() {
          var e = Array.prototype.slice.call(arguments, 0)
          return t.normalize(
            i(e, function(e, t) {
              if ('string' !== typeof e) throw new TypeError('Arguments to path.join must be strings')
              return e
            }).join('/'),
          )
        }),
        (t.relative = function(e, n) {
          function r(e) {
            for (var t = 0; t < e.length; t++) if ('' !== e[t]) break
            for (var n = e.length - 1; n >= 0; n--) if ('' !== e[n]) break
            return t > n ? [] : e.slice(t, n - t + 1)
          }
          ;(e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1))
          for (var i = r(e.split('/')), o = r(n.split('/')), s = Math.min(i.length, o.length), a = s, u = 0; u < s; u++)
            if (i[u] !== o[u]) {
              a = u
              break
            }
          var l = []
          for (u = a; u < i.length; u++) l.push('..')
          return (l = l.concat(o.slice(a))), l.join('/')
        }),
        (t.sep = '/'),
        (t.delimiter = ':'),
        (t.dirname = function(e) {
          if (('string' !== typeof e && (e += ''), 0 === e.length)) return '.'
          for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, o = e.length - 1; o >= 1; --o)
            if (((t = e.charCodeAt(o)), 47 === t)) {
              if (!i) {
                r = o
                break
              }
            } else i = !1
          return -1 === r ? (n ? '/' : '.') : n && 1 === r ? '/' : e.slice(0, r)
        }),
        (t.basename = function(e, t) {
          var n = r(e)
          return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
        }),
        (t.extname = function(e) {
          'string' !== typeof e && (e += '')
          for (var t = -1, n = 0, r = -1, i = !0, o = 0, s = e.length - 1; s >= 0; --s) {
            var a = e.charCodeAt(s)
            if (47 !== a)
              -1 === r && ((i = !1), (r = s + 1)),
                46 === a ? (-1 === t ? (t = s) : 1 !== o && (o = 1)) : -1 !== t && (o = -1)
            else if (!i) {
              n = s + 1
              break
            }
          }
          return -1 === t || -1 === r || 0 === o || (1 === o && t === r - 1 && t === n + 1) ? '' : e.slice(t, r)
        })
      var o =
        'b' === 'ab'.substr(-1)
          ? function(e, t, n) {
              return e.substr(t, n)
            }
          : function(e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n)
            }
    }.call(this, n('BBhR')))
  },
})
