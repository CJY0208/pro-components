;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    e0W4: function(e, t, r) {
      'use strict'
      ;(function(e) {
        r.d(t, 'a', function() {
          return g
        })
        var n,
          i,
          o = (function() {
            var e = function(t, r) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(e, t) {
                      e.__proto__ = t
                    }) ||
                  function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                  }),
                e(t, r)
              )
            }
            return function(t, r) {
              function n() {
                this.constructor = t
              }
              e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()))
            }
          })()
        if ('object' === typeof e) i = 'win32' === e.platform
        else if ('object' === typeof navigator) {
          var a = navigator.userAgent
          i = a.indexOf('Windows') >= 0
        }
        var s = /^\w[\w\d+.-]*$/,
          u = /^\//,
          c = /^\/\//
        function l(e, t) {
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
          if (e.scheme && !s.test(e.scheme)) throw new Error('[UriError]: Scheme contains illegal characters.')
          if (e.path)
            if (e.authority) {
              if (!u.test(e.path))
                throw new Error(
                  '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                )
            } else if (c.test(e.path))
              throw new Error(
                '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
              )
        }
        function f(e, t) {
          return e || t ? e : 'file'
        }
        function h(e, t) {
          switch (e) {
            case 'https':
            case 'http':
            case 'file':
              t ? t[0] !== d && (t = d + t) : (t = d)
              break
          }
          return t
        }
        var p = '',
          d = '/',
          m = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
          g = (function() {
            function e(e, t, r, n, i, o) {
              void 0 === o && (o = !1),
                'object' === typeof e
                  ? ((this.scheme = e.scheme || p),
                    (this.authority = e.authority || p),
                    (this.path = e.path || p),
                    (this.query = e.query || p),
                    (this.fragment = e.fragment || p))
                  : ((this.scheme = f(e, o)),
                    (this.authority = t || p),
                    (this.path = h(this.scheme, r || p)),
                    (this.query = n || p),
                    (this.fragment = i || p),
                    l(this, o))
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
                  return k(this, !1)
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.with = function(e) {
                if (!e) return this
                var t = e.scheme,
                  r = e.authority,
                  n = e.path,
                  i = e.query,
                  o = e.fragment
                return (
                  void 0 === t ? (t = this.scheme) : null === t && (t = p),
                  void 0 === r ? (r = this.authority) : null === r && (r = p),
                  void 0 === n ? (n = this.path) : null === n && (n = p),
                  void 0 === i ? (i = this.query) : null === i && (i = p),
                  void 0 === o ? (o = this.fragment) : null === o && (o = p),
                  t === this.scheme &&
                  r === this.authority &&
                  n === this.path &&
                  i === this.query &&
                  o === this.fragment
                    ? this
                    : new y(t, r, n, i, o)
                )
              }),
              (e.parse = function(e, t) {
                void 0 === t && (t = !1)
                var r = m.exec(e)
                return r
                  ? new y(r[2] || p, I(r[4] || p), I(r[5] || p), I(r[7] || p), I(r[9] || p), t)
                  : new y(p, p, p, p, p)
              }),
              (e.file = function(e) {
                var t = p
                if ((i && (e = e.replace(/\\/g, d)), e[0] === d && e[1] === d)) {
                  var r = e.indexOf(d, 2)
                  ;-1 === r ? ((t = e.substring(2)), (e = d)) : ((t = e.substring(2, r)), (e = e.substring(r) || d))
                }
                return new y('file', t, e, p, p)
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
                  var r = new y(t)
                  return (r._formatted = t.external), (r._fsPath = t._sep === v ? t.fsPath : null), r
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
                  return this._fsPath || (this._fsPath = k(this, !1)), this._fsPath
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
          })(g),
          b =
            ((n = {}),
            (n[58] = '%3A'),
            (n[47] = '%2F'),
            (n[63] = '%3F'),
            (n[35] = '%23'),
            (n[91] = '%5B'),
            (n[93] = '%5D'),
            (n[64] = '%40'),
            (n[33] = '%21'),
            (n[36] = '%24'),
            (n[38] = '%26'),
            (n[39] = '%27'),
            (n[40] = '%28'),
            (n[41] = '%29'),
            (n[42] = '%2A'),
            (n[43] = '%2B'),
            (n[44] = '%2C'),
            (n[59] = '%3B'),
            (n[61] = '%3D'),
            (n[32] = '%20'),
            n)
        function x(e, t) {
          for (var r = void 0, n = -1, i = 0; i < e.length; i++) {
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
              -1 !== n && ((r += encodeURIComponent(e.substring(n, i))), (n = -1)), void 0 !== r && (r += e.charAt(i))
            else {
              void 0 === r && (r = e.substr(0, i))
              var a = b[o]
              void 0 !== a
                ? (-1 !== n && ((r += encodeURIComponent(e.substring(n, i))), (n = -1)), (r += a))
                : -1 === n && (n = i)
            }
          }
          return -1 !== n && (r += encodeURIComponent(e.substring(n))), void 0 !== r ? r : e
        }
        function S(e) {
          for (var t = void 0, r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r)
            35 === n || 63 === n ? (void 0 === t && (t = e.substr(0, r)), (t += b[n])) : void 0 !== t && (t += e[r])
          }
          return void 0 !== t ? t : e
        }
        function k(e, t) {
          var r
          return (
            (r =
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
            i && (r = r.replace(/\//g, '\\')),
            r
          )
        }
        function w(e, t) {
          var r = t ? S : x,
            n = '',
            i = e.scheme,
            o = e.authority,
            a = e.path,
            s = e.query,
            u = e.fragment
          if ((i && ((n += i), (n += ':')), (o || 'file' === i) && ((n += d), (n += d)), o)) {
            var c = o.indexOf('@')
            if (-1 !== c) {
              var l = o.substr(0, c)
              ;(o = o.substr(c + 1)),
                (c = l.indexOf(':')),
                -1 === c ? (n += r(l, !1)) : ((n += r(l.substr(0, c), !1)), (n += ':'), (n += r(l.substr(c + 1), !1))),
                (n += '@')
            }
            ;(o = o.toLowerCase()),
              (c = o.indexOf(':')),
              -1 === c ? (n += r(o, !1)) : ((n += r(o.substr(0, c), !1)), (n += o.substr(c)))
          }
          if (a) {
            if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) {
              var f = a.charCodeAt(1)
              f >= 65 && f <= 90 && (a = '/' + String.fromCharCode(f + 32) + ':' + a.substr(3))
            } else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
              f = a.charCodeAt(0)
              f >= 65 && f <= 90 && (a = String.fromCharCode(f + 32) + ':' + a.substr(2))
            }
            n += r(a, !0)
          }
          return s && ((n += '?'), (n += r(s, !1))), u && ((n += '#'), (n += t ? u : x(u, !1))), n
        }
        function C(e) {
          try {
            return decodeURIComponent(e)
          } catch (n) {
            return e.length > 3 ? e.substr(0, 3) + C(e.substr(3)) : e
          }
        }
        var A = /(%[0-9A-Za-z][0-9A-Za-z])+/g
        function I(e) {
          return e.match(A)
            ? e.replace(A, function(e) {
                return C(e)
              })
            : e
        }
      }.call(this, r('BBhR')))
    },
    uP3l: function(e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'setupMode', function() {
          return vr
        })
      var n,
        i = r('rHjE'),
        o = 12e4,
        a = (function() {
          function e(e) {
            var t = this
            ;(this._defaults = e),
              (this._worker = null),
              (this._idleCheckInterval = setInterval(function() {
                return t._checkIfIdle()
              }, 3e4)),
              (this._lastUsedTime = 0),
              (this._configChangeListener = this._defaults.onDidChange(function() {
                return t._stopWorker()
              }))
          }
          return (
            (e.prototype._stopWorker = function() {
              this._worker && (this._worker.dispose(), (this._worker = null)), (this._client = null)
            }),
            (e.prototype.dispose = function() {
              clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), this._stopWorker()
            }),
            (e.prototype._checkIfIdle = function() {
              if (this._worker) {
                var e = Date.now() - this._lastUsedTime
                e > o && this._stopWorker()
              }
            }),
            (e.prototype._getClient = function() {
              return (
                (this._lastUsedTime = Date.now()),
                this._client ||
                  ((this._worker = i['editor'].createWebWorker({
                    moduleId: 'vs/language/json/jsonWorker',
                    label: this._defaults.languageId,
                    createData: {
                      languageSettings: this._defaults.diagnosticsOptions,
                      languageId: this._defaults.languageId,
                      enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest,
                    },
                  })),
                  (this._client = this._worker.getProxy())),
                this._client
              )
            }),
            (e.prototype.getLanguageServiceWorker = function() {
              for (var e, t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
              return this._getClient()
                .then(function(t) {
                  e = t
                })
                .then(function(e) {
                  return t._worker.withSyncedResources(r)
                })
                .then(function(t) {
                  return e
                })
            }),
            e
          )
        })()
      function s(e, t) {
        void 0 === t && (t = !1)
        var r = e.length,
          n = 0,
          i = '',
          o = 0,
          a = 16,
          s = 0,
          f = 0,
          h = 0,
          p = 0,
          d = 0
        function m(t, r) {
          var i = 0,
            o = 0
          while (i < t || !r) {
            var a = e.charCodeAt(n)
            if (a >= 48 && a <= 57) o = 16 * o + a - 48
            else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10
            else {
              if (!(a >= 97 && a <= 102)) break
              o = 16 * o + a - 97 + 10
            }
            n++, i++
          }
          return i < t && (o = -1), o
        }
        function g(e) {
          ;(n = e), (i = ''), (o = 0), (a = 16), (d = 0)
        }
        function v() {
          var t = n
          if (48 === e.charCodeAt(n)) n++
          else {
            n++
            while (n < e.length && l(e.charCodeAt(n))) n++
          }
          if (n < e.length && 46 === e.charCodeAt(n)) {
            if ((n++, !(n < e.length && l(e.charCodeAt(n))))) return (d = 3), e.substring(t, n)
            n++
            while (n < e.length && l(e.charCodeAt(n))) n++
          }
          var r = n
          if (n < e.length && (69 === e.charCodeAt(n) || 101 === e.charCodeAt(n)))
            if (
              (n++,
              ((n < e.length && 43 === e.charCodeAt(n)) || 45 === e.charCodeAt(n)) && n++,
              n < e.length && l(e.charCodeAt(n)))
            ) {
              n++
              while (n < e.length && l(e.charCodeAt(n))) n++
              r = n
            } else d = 3
          return e.substring(t, r)
        }
        function y() {
          var t = '',
            i = n
          while (1) {
            if (n >= r) {
              ;(t += e.substring(i, n)), (d = 2)
              break
            }
            var o = e.charCodeAt(n)
            if (34 === o) {
              ;(t += e.substring(i, n)), n++
              break
            }
            if (92 !== o) {
              if (o >= 0 && o <= 31) {
                if (c(o)) {
                  ;(t += e.substring(i, n)), (d = 2)
                  break
                }
                d = 6
              }
              n++
            } else {
              if (((t += e.substring(i, n)), n++, n >= r)) {
                d = 2
                break
              }
              var a = e.charCodeAt(n++)
              switch (a) {
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
                  var s = m(4, !0)
                  s >= 0 ? (t += String.fromCharCode(s)) : (d = 4)
                  break
                default:
                  d = 5
              }
              i = n
            }
          }
          return t
        }
        function b() {
          if (((i = ''), (d = 0), (o = n), (f = s), (p = h), n >= r)) return (o = r), (a = 17)
          var t = e.charCodeAt(n)
          if (u(t)) {
            do {
              n++, (i += String.fromCharCode(t)), (t = e.charCodeAt(n))
            } while (u(t))
            return (a = 15)
          }
          if (c(t))
            return (
              n++,
              (i += String.fromCharCode(t)),
              13 === t && 10 === e.charCodeAt(n) && (n++, (i += '\n')),
              s++,
              (h = n),
              (a = 14)
            )
          switch (t) {
            case 123:
              return n++, (a = 1)
            case 125:
              return n++, (a = 2)
            case 91:
              return n++, (a = 3)
            case 93:
              return n++, (a = 4)
            case 58:
              return n++, (a = 6)
            case 44:
              return n++, (a = 5)
            case 34:
              return n++, (i = y()), (a = 10)
            case 47:
              var m = n - 1
              if (47 === e.charCodeAt(n + 1)) {
                n += 2
                while (n < r) {
                  if (c(e.charCodeAt(n))) break
                  n++
                }
                return (i = e.substring(m, n)), (a = 12)
              }
              if (42 === e.charCodeAt(n + 1)) {
                n += 2
                var g = r - 1,
                  b = !1
                while (n < g) {
                  var S = e.charCodeAt(n)
                  if (42 === S && 47 === e.charCodeAt(n + 1)) {
                    ;(n += 2), (b = !0)
                    break
                  }
                  n++, c(S) && (13 === S && 10 === e.charCodeAt(n) && n++, s++, (h = n))
                }
                return b || (n++, (d = 1)), (i = e.substring(m, n)), (a = 13)
              }
              return (i += String.fromCharCode(t)), n++, (a = 16)
            case 45:
              if (((i += String.fromCharCode(t)), n++, n === r || !l(e.charCodeAt(n)))) return (a = 16)
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
              return (i += v()), (a = 11)
            default:
              while (n < r && x(t)) n++, (t = e.charCodeAt(n))
              if (o !== n) {
                switch (((i = e.substring(o, n)), i)) {
                  case 'true':
                    return (a = 8)
                  case 'false':
                    return (a = 9)
                  case 'null':
                    return (a = 7)
                }
                return (a = 16)
              }
              return (i += String.fromCharCode(t)), n++, (a = 16)
          }
        }
        function x(e) {
          if (u(e) || c(e)) return !1
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
        function S() {
          var e
          do {
            e = b()
          } while (e >= 12 && e <= 15)
          return e
        }
        return {
          setPosition: g,
          getPosition: function() {
            return n
          },
          scan: t ? S : b,
          getToken: function() {
            return a
          },
          getTokenValue: function() {
            return i
          },
          getTokenOffset: function() {
            return o
          },
          getTokenLength: function() {
            return n - o
          },
          getTokenStartLine: function() {
            return f
          },
          getTokenStartCharacter: function() {
            return o - p
          },
          getTokenError: function() {
            return d
          },
        }
      }
      function u(e) {
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
      function c(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e
      }
      function l(e) {
        return e >= 48 && e <= 57
      }
      function f(e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = n.DEFAULT)
        var i = null,
          o = [],
          a = []
        function s(e) {
          Array.isArray(o) ? o.push(e) : null !== i && (o[i] = e)
        }
        var u = {
          onObjectBegin: function() {
            var e = {}
            s(e), a.push(o), (o = e), (i = null)
          },
          onObjectProperty: function(e) {
            i = e
          },
          onObjectEnd: function() {
            o = a.pop()
          },
          onArrayBegin: function() {
            var e = []
            s(e), a.push(o), (o = e), (i = null)
          },
          onArrayEnd: function() {
            o = a.pop()
          },
          onLiteralValue: s,
          onError: function(e, r, n) {
            t.push({ error: e, offset: r, length: n })
          },
        }
        return g(e, u, r), o[0]
      }
      function h(e) {
        if (!e.parent || !e.parent.children) return []
        var t = h(e.parent)
        if ('property' === e.parent.type) {
          var r = e.parent.children[0].value
          t.push(r)
        } else if ('array' === e.parent.type) {
          var n = e.parent.children.indexOf(e)
          ;-1 !== n && t.push(n)
        }
        return t
      }
      function p(e) {
        switch (e.type) {
          case 'array':
            return e.children.map(p)
          case 'object':
            for (var t = Object.create(null), r = 0, n = e.children; r < n.length; r++) {
              var i = n[r],
                o = i.children[1]
              o && (t[i.children[0].value] = p(o))
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
      function d(e, t, r) {
        return void 0 === r && (r = !1), (t >= e.offset && t < e.offset + e.length) || (r && t === e.offset + e.length)
      }
      function m(e, t, r) {
        if ((void 0 === r && (r = !1), d(e, t, r))) {
          var n = e.children
          if (Array.isArray(n))
            for (var i = 0; i < n.length && n[i].offset <= t; i++) {
              var o = m(n[i], t, r)
              if (o) return o
            }
          return e
        }
      }
      function g(e, t, r) {
        void 0 === r && (r = n.DEFAULT)
        var i = s(e, !1)
        function o(e) {
          return e
            ? function() {
                return e(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter())
              }
            : function() {
                return !0
              }
        }
        function a(e) {
          return e
            ? function(t) {
                return e(t, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter())
              }
            : function() {
                return !0
              }
        }
        var u = o(t.onObjectBegin),
          c = a(t.onObjectProperty),
          l = o(t.onObjectEnd),
          f = o(t.onArrayBegin),
          h = o(t.onArrayEnd),
          p = a(t.onLiteralValue),
          d = a(t.onSeparator),
          m = o(t.onComment),
          g = a(t.onError),
          v = r && r.disallowComments,
          y = r && r.allowTrailingComma
        function b() {
          while (1) {
            var e = i.scan()
            switch (i.getTokenError()) {
              case 4:
                x(14)
                break
              case 5:
                x(15)
                break
              case 3:
                x(13)
                break
              case 1:
                v || x(11)
                break
              case 2:
                x(12)
                break
              case 6:
                x(16)
                break
            }
            switch (e) {
              case 12:
              case 13:
                v ? x(10) : m()
                break
              case 16:
                x(1)
                break
              case 15:
              case 14:
                break
              default:
                return e
            }
          }
        }
        function x(e, t, r) {
          if ((void 0 === t && (t = []), void 0 === r && (r = []), g(e), t.length + r.length > 0)) {
            var n = i.getToken()
            while (17 !== n) {
              if (-1 !== t.indexOf(n)) {
                b()
                break
              }
              if (-1 !== r.indexOf(n)) break
              n = b()
            }
          }
        }
        function S(e) {
          var t = i.getTokenValue()
          return e ? p(t) : c(t), b(), !0
        }
        function k() {
          switch (i.getToken()) {
            case 11:
              var e = 0
              try {
                ;(e = JSON.parse(i.getTokenValue())), 'number' !== typeof e && (x(2), (e = 0))
              } catch (t) {
                x(2)
              }
              p(e)
              break
            case 7:
              p(null)
              break
            case 8:
              p(!0)
              break
            case 9:
              p(!1)
              break
            default:
              return !1
          }
          return b(), !0
        }
        function w() {
          return 10 !== i.getToken()
            ? (x(3, [], [2, 5]), !1)
            : (S(!1), 6 === i.getToken() ? (d(':'), b(), I() || x(4, [], [2, 5])) : x(5, [], [2, 5]), !0)
        }
        function C() {
          u(), b()
          var e = !1
          while (2 !== i.getToken() && 17 !== i.getToken()) {
            if (5 === i.getToken()) {
              if ((e || x(4, [], []), d(','), b(), 2 === i.getToken() && y)) break
            } else e && x(6, [], [])
            w() || x(4, [], [2, 5]), (e = !0)
          }
          return l(), 2 !== i.getToken() ? x(7, [2], []) : b(), !0
        }
        function A() {
          f(), b()
          var e = !1
          while (4 !== i.getToken() && 17 !== i.getToken()) {
            if (5 === i.getToken()) {
              if ((e || x(4, [], []), d(','), b(), 4 === i.getToken() && y)) break
            } else e && x(6, [], [])
            I() || x(4, [], [4, 5]), (e = !0)
          }
          return h(), 4 !== i.getToken() ? x(8, [4], []) : b(), !0
        }
        function I() {
          switch (i.getToken()) {
            case 3:
              return A()
            case 1:
              return C()
            case 10:
              return S(!0)
            default:
              return k()
          }
        }
        return (
          b(),
          17 === i.getToken()
            ? !!r.allowEmptyContent || (x(4, [], []), !1)
            : I()
            ? (17 !== i.getToken() && x(9, [], []), !0)
            : (x(4, [], []), !1)
        )
      }
      ;(function(e) {
        e.DEFAULT = { allowTrailingComma: !1 }
      })(n || (n = {}))
      var v,
        y,
        b,
        x,
        S,
        k,
        w,
        C,
        A,
        I,
        T,
        E,
        O,
        j,
        M,
        P,
        _,
        F,
        V,
        N,
        R = s,
        $ = f,
        L = m,
        D = h,
        W = p
      function U(e, t) {
        if (e === t) return !0
        if (null === e || void 0 === e || null === t || void 0 === t) return !1
        if (typeof e !== typeof t) return !1
        if ('object' !== typeof e) return !1
        if (Array.isArray(e) !== Array.isArray(t)) return !1
        var r, n
        if (Array.isArray(e)) {
          if (e.length !== t.length) return !1
          for (r = 0; r < e.length; r++) if (!U(e[r], t[r])) return !1
        } else {
          var i = []
          for (n in e) i.push(n)
          i.sort()
          var o = []
          for (n in t) o.push(n)
          if ((o.sort(), !U(i, o))) return !1
          for (r = 0; r < i.length; r++) if (!U(e[i[r]], t[i[r]])) return !1
        }
        return !0
      }
      function q(e) {
        return 'number' === typeof e
      }
      function B(e) {
        return 'undefined' !== typeof e
      }
      function K(e) {
        return 'boolean' === typeof e
      }
      function J(e) {
        return 'string' === typeof e
      }
      ;(function(e) {
        function t(e, t) {
          return { line: e, character: t }
        }
        function r(e) {
          var t = e
          return ke.objectLiteral(t) && ke.number(t.line) && ke.number(t.character)
        }
        ;(e.create = t), (e.is = r)
      })(v || (v = {})),
        (function(e) {
          function t(e, t, r, n) {
            if (ke.number(e) && ke.number(t) && ke.number(r) && ke.number(n))
              return { start: v.create(e, t), end: v.create(r, n) }
            if (v.is(e) && v.is(t)) return { start: e, end: t }
            throw new Error('Range#create called with invalid arguments[' + e + ', ' + t + ', ' + r + ', ' + n + ']')
          }
          function r(e) {
            var t = e
            return ke.objectLiteral(t) && v.is(t.start) && v.is(t.end)
          }
          ;(e.create = t), (e.is = r)
        })(y || (y = {})),
        (function(e) {
          function t(e, t) {
            return { uri: e, range: t }
          }
          function r(e) {
            var t = e
            return ke.defined(t) && y.is(t.range) && (ke.string(t.uri) || ke.undefined(t.uri))
          }
          ;(e.create = t), (e.is = r)
        })(b || (b = {})),
        (function(e) {
          function t(e, t, r, n) {
            return { targetUri: e, targetRange: t, targetSelectionRange: r, originSelectionRange: n }
          }
          function r(e) {
            var t = e
            return (
              ke.defined(t) &&
              y.is(t.targetRange) &&
              ke.string(t.targetUri) &&
              (y.is(t.targetSelectionRange) || ke.undefined(t.targetSelectionRange)) &&
              (y.is(t.originSelectionRange) || ke.undefined(t.originSelectionRange))
            )
          }
          ;(e.create = t), (e.is = r)
        })(x || (x = {})),
        (function(e) {
          function t(e, t, r, n) {
            return { red: e, green: t, blue: r, alpha: n }
          }
          function r(e) {
            var t = e
            return ke.number(t.red) && ke.number(t.green) && ke.number(t.blue) && ke.number(t.alpha)
          }
          ;(e.create = t), (e.is = r)
        })(S || (S = {})),
        (function(e) {
          function t(e, t) {
            return { range: e, color: t }
          }
          function r(e) {
            var t = e
            return y.is(t.range) && S.is(t.color)
          }
          ;(e.create = t), (e.is = r)
        })(k || (k = {})),
        (function(e) {
          function t(e, t, r) {
            return { label: e, textEdit: t, additionalTextEdits: r }
          }
          function r(e) {
            var t = e
            return (
              ke.string(t.label) &&
              (ke.undefined(t.textEdit) || M.is(t)) &&
              (ke.undefined(t.additionalTextEdits) || ke.typedArray(t.additionalTextEdits, M.is))
            )
          }
          ;(e.create = t), (e.is = r)
        })(w || (w = {})),
        (function(e) {
          ;(e['Comment'] = 'comment'), (e['Imports'] = 'imports'), (e['Region'] = 'region')
        })(C || (C = {})),
        (function(e) {
          function t(e, t, r, n, i) {
            var o = { startLine: e, endLine: t }
            return (
              ke.defined(r) && (o.startCharacter = r),
              ke.defined(n) && (o.endCharacter = n),
              ke.defined(i) && (o.kind = i),
              o
            )
          }
          function r(e) {
            var t = e
            return (
              ke.number(t.startLine) &&
              ke.number(t.startLine) &&
              (ke.undefined(t.startCharacter) || ke.number(t.startCharacter)) &&
              (ke.undefined(t.endCharacter) || ke.number(t.endCharacter)) &&
              (ke.undefined(t.kind) || ke.string(t.kind))
            )
          }
          ;(e.create = t), (e.is = r)
        })(A || (A = {})),
        (function(e) {
          function t(e, t) {
            return { location: e, message: t }
          }
          function r(e) {
            var t = e
            return ke.defined(t) && b.is(t.location) && ke.string(t.message)
          }
          ;(e.create = t), (e.is = r)
        })(I || (I = {})),
        (function(e) {
          ;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
        })(T || (T = {})),
        (function(e) {
          ;(e.Unnecessary = 1), (e.Deprecated = 2)
        })(E || (E = {})),
        (function(e) {
          function t(e, t, r, n, i, o) {
            var a = { range: e, message: t }
            return (
              ke.defined(r) && (a.severity = r),
              ke.defined(n) && (a.code = n),
              ke.defined(i) && (a.source = i),
              ke.defined(o) && (a.relatedInformation = o),
              a
            )
          }
          function r(e) {
            var t = e
            return (
              ke.defined(t) &&
              y.is(t.range) &&
              ke.string(t.message) &&
              (ke.number(t.severity) || ke.undefined(t.severity)) &&
              (ke.number(t.code) || ke.string(t.code) || ke.undefined(t.code)) &&
              (ke.string(t.source) || ke.undefined(t.source)) &&
              (ke.undefined(t.relatedInformation) || ke.typedArray(t.relatedInformation, I.is))
            )
          }
          ;(e.create = t), (e.is = r)
        })(O || (O = {})),
        (function(e) {
          function t(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n]
            var i = { title: e, command: t }
            return ke.defined(r) && r.length > 0 && (i.arguments = r), i
          }
          function r(e) {
            var t = e
            return ke.defined(t) && ke.string(t.title) && ke.string(t.command)
          }
          ;(e.create = t), (e.is = r)
        })(j || (j = {})),
        (function(e) {
          function t(e, t) {
            return { range: e, newText: t }
          }
          function r(e, t) {
            return { range: { start: e, end: e }, newText: t }
          }
          function n(e) {
            return { range: e, newText: '' }
          }
          function i(e) {
            var t = e
            return ke.objectLiteral(t) && ke.string(t.newText) && y.is(t.range)
          }
          ;(e.replace = t), (e.insert = r), (e.del = n), (e.is = i)
        })(M || (M = {})),
        (function(e) {
          function t(e, t) {
            return { textDocument: e, edits: t }
          }
          function r(e) {
            var t = e
            return ke.defined(t) && z.is(t.textDocument) && Array.isArray(t.edits)
          }
          ;(e.create = t), (e.is = r)
        })(P || (P = {})),
        (function(e) {
          function t(e, t) {
            var r = { kind: 'create', uri: e }
            return void 0 === t || (void 0 === t.overwrite && void 0 === t.ignoreIfExists) || (r.options = t), r
          }
          function r(e) {
            var t = e
            return (
              t &&
              'create' === t.kind &&
              ke.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite || ke.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists || ke.boolean(t.options.ignoreIfExists))))
            )
          }
          ;(e.create = t), (e.is = r)
        })(_ || (_ = {})),
        (function(e) {
          function t(e, t, r) {
            var n = { kind: 'rename', oldUri: e, newUri: t }
            return void 0 === r || (void 0 === r.overwrite && void 0 === r.ignoreIfExists) || (n.options = r), n
          }
          function r(e) {
            var t = e
            return (
              t &&
              'rename' === t.kind &&
              ke.string(t.oldUri) &&
              ke.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite || ke.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists || ke.boolean(t.options.ignoreIfExists))))
            )
          }
          ;(e.create = t), (e.is = r)
        })(F || (F = {})),
        (function(e) {
          function t(e, t) {
            var r = { kind: 'delete', uri: e }
            return void 0 === t || (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) || (r.options = t), r
          }
          function r(e) {
            var t = e
            return (
              t &&
              'delete' === t.kind &&
              ke.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive || ke.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists || ke.boolean(t.options.ignoreIfNotExists))))
            )
          }
          ;(e.create = t), (e.is = r)
        })(V || (V = {})),
        (function(e) {
          function t(e) {
            var t = e
            return (
              t &&
              (void 0 !== t.changes || void 0 !== t.documentChanges) &&
              (void 0 === t.documentChanges ||
                t.documentChanges.every(function(e) {
                  return ke.string(e.kind) ? _.is(e) || F.is(e) || V.is(e) : P.is(e)
                }))
            )
          }
          e.is = t
        })(N || (N = {}))
      var H,
        z,
        G,
        Z,
        X,
        Q,
        Y,
        ee,
        te,
        re,
        ne,
        ie,
        oe,
        ae,
        se,
        ue,
        ce,
        le,
        fe,
        he,
        pe,
        de,
        me,
        ge,
        ve,
        ye,
        be,
        xe = (function() {
          function e(e) {
            this.edits = e
          }
          return (
            (e.prototype.insert = function(e, t) {
              this.edits.push(M.insert(e, t))
            }),
            (e.prototype.replace = function(e, t) {
              this.edits.push(M.replace(e, t))
            }),
            (e.prototype.delete = function(e) {
              this.edits.push(M.del(e))
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
                    if (P.is(e)) {
                      var r = new xe(e.edits)
                      t._textEditChanges[e.textDocument.uri] = r
                    }
                  })
                : e.changes &&
                  Object.keys(e.changes).forEach(function(r) {
                    var n = new xe(e.changes[r])
                    t._textEditChanges[r] = n
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
            if (z.is(e)) {
              if (
                (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error('Workspace edit is not configured for document changes.')
              var t = e,
                r = this._textEditChanges[t.uri]
              if (!r) {
                var n = [],
                  i = { textDocument: t, edits: n }
                this._workspaceEdit.documentChanges.push(i), (r = new xe(n)), (this._textEditChanges[t.uri] = r)
              }
              return r
            }
            if (
              (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }),
              !this._workspaceEdit.changes)
            )
              throw new Error('Workspace edit is not configured for normal text edit changes.')
            r = this._textEditChanges[e]
            if (!r) {
              n = []
              ;(this._workspaceEdit.changes[e] = n), (r = new xe(n)), (this._textEditChanges[e] = r)
            }
            return r
          }),
          (e.prototype.createFile = function(e, t) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(_.create(e, t))
          }),
          (e.prototype.renameFile = function(e, t, r) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(F.create(e, t, r))
          }),
          (e.prototype.deleteFile = function(e, t) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(V.create(e, t))
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
        function r(e) {
          var t = e
          return ke.defined(t) && ke.string(t.uri)
        }
        ;(e.create = t), (e.is = r)
      })(H || (H = {})),
        (function(e) {
          function t(e, t) {
            return { uri: e, version: t }
          }
          function r(e) {
            var t = e
            return ke.defined(t) && ke.string(t.uri) && (null === t.version || ke.number(t.version))
          }
          ;(e.create = t), (e.is = r)
        })(z || (z = {})),
        (function(e) {
          function t(e, t, r, n) {
            return { uri: e, languageId: t, version: r, text: n }
          }
          function r(e) {
            var t = e
            return (
              ke.defined(t) && ke.string(t.uri) && ke.string(t.languageId) && ke.number(t.version) && ke.string(t.text)
            )
          }
          ;(e.create = t), (e.is = r)
        })(G || (G = {})),
        (function(e) {
          ;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
        })(Z || (Z = {})),
        (function(e) {
          function t(t) {
            var r = t
            return r === e.PlainText || r === e.Markdown
          }
          e.is = t
        })(Z || (Z = {})),
        (function(e) {
          function t(e) {
            var t = e
            return ke.objectLiteral(e) && Z.is(t.kind) && ke.string(t.value)
          }
          e.is = t
        })(X || (X = {})),
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
        })(Q || (Q = {})),
        (function(e) {
          ;(e.PlainText = 1), (e.Snippet = 2)
        })(Y || (Y = {})),
        (function(e) {
          e.Deprecated = 1
        })(ee || (ee = {})),
        (function(e) {
          function t(e) {
            return { label: e }
          }
          e.create = t
        })(te || (te = {})),
        (function(e) {
          function t(e, t) {
            return { items: e || [], isIncomplete: !!t }
          }
          e.create = t
        })(re || (re = {})),
        (function(e) {
          function t(e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
          }
          function r(e) {
            var t = e
            return ke.string(t) || (ke.objectLiteral(t) && ke.string(t.language) && ke.string(t.value))
          }
          ;(e.fromPlainText = t), (e.is = r)
        })(ne || (ne = {})),
        (function(e) {
          function t(e) {
            var t = e
            return (
              !!t &&
              ke.objectLiteral(t) &&
              (X.is(t.contents) || ne.is(t.contents) || ke.typedArray(t.contents, ne.is)) &&
              (void 0 === e.range || y.is(e.range))
            )
          }
          e.is = t
        })(ie || (ie = {})),
        (function(e) {
          function t(e, t) {
            return t ? { label: e, documentation: t } : { label: e }
          }
          e.create = t
        })(oe || (oe = {})),
        (function(e) {
          function t(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n]
            var i = { label: e }
            return ke.defined(t) && (i.documentation = t), ke.defined(r) ? (i.parameters = r) : (i.parameters = []), i
          }
          e.create = t
        })(ae || (ae = {})),
        (function(e) {
          ;(e.Text = 1), (e.Read = 2), (e.Write = 3)
        })(se || (se = {})),
        (function(e) {
          function t(e, t) {
            var r = { range: e }
            return ke.number(t) && (r.kind = t), r
          }
          e.create = t
        })(ue || (ue = {})),
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
        })(ce || (ce = {})),
        (function(e) {
          e.Deprecated = 1
        })(le || (le = {})),
        (function(e) {
          function t(e, t, r, n, i) {
            var o = { name: e, kind: t, location: { uri: n, range: r } }
            return i && (o.containerName = i), o
          }
          e.create = t
        })(fe || (fe = {})),
        (function(e) {
          function t(e, t, r, n, i, o) {
            var a = { name: e, detail: t, kind: r, range: n, selectionRange: i }
            return void 0 !== o && (a.children = o), a
          }
          function r(e) {
            var t = e
            return (
              t &&
              ke.string(t.name) &&
              ke.number(t.kind) &&
              y.is(t.range) &&
              y.is(t.selectionRange) &&
              (void 0 === t.detail || ke.string(t.detail)) &&
              (void 0 === t.deprecated || ke.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children))
            )
          }
          ;(e.create = t), (e.is = r)
        })(he || (he = {})),
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
        })(pe || (pe = {})),
        (function(e) {
          function t(e, t) {
            var r = { diagnostics: e }
            return void 0 !== t && null !== t && (r.only = t), r
          }
          function r(e) {
            var t = e
            return (
              ke.defined(t) &&
              ke.typedArray(t.diagnostics, O.is) &&
              (void 0 === t.only || ke.typedArray(t.only, ke.string))
            )
          }
          ;(e.create = t), (e.is = r)
        })(de || (de = {})),
        (function(e) {
          function t(e, t, r) {
            var n = { title: e }
            return j.is(t) ? (n.command = t) : (n.edit = t), void 0 !== r && (n.kind = r), n
          }
          function r(e) {
            var t = e
            return (
              t &&
              ke.string(t.title) &&
              (void 0 === t.diagnostics || ke.typedArray(t.diagnostics, O.is)) &&
              (void 0 === t.kind || ke.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || j.is(t.command)) &&
              (void 0 === t.isPreferred || ke.boolean(t.isPreferred)) &&
              (void 0 === t.edit || N.is(t.edit))
            )
          }
          ;(e.create = t), (e.is = r)
        })(me || (me = {})),
        (function(e) {
          function t(e, t) {
            var r = { range: e }
            return ke.defined(t) && (r.data = t), r
          }
          function r(e) {
            var t = e
            return ke.defined(t) && y.is(t.range) && (ke.undefined(t.command) || j.is(t.command))
          }
          ;(e.create = t), (e.is = r)
        })(ge || (ge = {})),
        (function(e) {
          function t(e, t) {
            return { tabSize: e, insertSpaces: t }
          }
          function r(e) {
            var t = e
            return ke.defined(t) && ke.number(t.tabSize) && ke.boolean(t.insertSpaces)
          }
          ;(e.create = t), (e.is = r)
        })(ve || (ve = {})),
        (function(e) {
          function t(e, t, r) {
            return { range: e, target: t, data: r }
          }
          function r(e) {
            var t = e
            return ke.defined(t) && y.is(t.range) && (ke.undefined(t.target) || ke.string(t.target))
          }
          ;(e.create = t), (e.is = r)
        })(ye || (ye = {})),
        (function(e) {
          function t(e, t) {
            return { range: e, parent: t }
          }
          function r(t) {
            var r = t
            return void 0 !== r && y.is(r.range) && (void 0 === r.parent || e.is(r.parent))
          }
          ;(e.create = t), (e.is = r)
        })(be || (be = {}))
      var Se
      ;(function(e) {
        function t(e, t, r, n) {
          return new we(e, t, r, n)
        }
        function r(e) {
          var t = e
          return !!(
            ke.defined(t) &&
            ke.string(t.uri) &&
            (ke.undefined(t.languageId) || ke.string(t.languageId)) &&
            ke.number(t.lineCount) &&
            ke.func(t.getText) &&
            ke.func(t.positionAt) &&
            ke.func(t.offsetAt)
          )
        }
        function n(e, t) {
          for (
            var r = e.getText(),
              n = i(t, function(e, t) {
                var r = e.range.start.line - t.range.start.line
                return 0 === r ? e.range.start.character - t.range.start.character : r
              }),
              o = r.length,
              a = n.length - 1;
            a >= 0;
            a--
          ) {
            var s = n[a],
              u = e.offsetAt(s.range.start),
              c = e.offsetAt(s.range.end)
            if (!(c <= o)) throw new Error('Overlapping edit')
            ;(r = r.substring(0, u) + s.newText + r.substring(c, r.length)), (o = u)
          }
          return r
        }
        function i(e, t) {
          if (e.length <= 1) return e
          var r = (e.length / 2) | 0,
            n = e.slice(0, r),
            o = e.slice(r)
          i(n, t), i(o, t)
          var a = 0,
            s = 0,
            u = 0
          while (a < n.length && s < o.length) {
            var c = t(n[a], o[s])
            e[u++] = c <= 0 ? n[a++] : o[s++]
          }
          while (a < n.length) e[u++] = n[a++]
          while (s < o.length) e[u++] = o[s++]
          return e
        }
        ;(e.create = t), (e.is = r), (e.applyEdits = n)
      })(Se || (Se = {}))
      var ke,
        we = (function() {
          function e(e, t, r, n) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = r),
              (this._content = n),
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
                  r = this.offsetAt(e.end)
                return this._content.substring(t, r)
              }
              return this._content
            }),
            (e.prototype.update = function(e, t) {
              ;(this._content = e.text), (this._version = t), (this._lineOffsets = void 0)
            }),
            (e.prototype.getLineOffsets = function() {
              if (void 0 === this._lineOffsets) {
                for (var e = [], t = this._content, r = !0, n = 0; n < t.length; n++) {
                  r && (e.push(n), (r = !1))
                  var i = t.charAt(n)
                  ;(r = '\r' === i || '\n' === i), '\r' === i && n + 1 < t.length && '\n' === t.charAt(n + 1) && n++
                }
                r && t.length > 0 && e.push(t.length), (this._lineOffsets = e)
              }
              return this._lineOffsets
            }),
            (e.prototype.positionAt = function(e) {
              e = Math.max(Math.min(e, this._content.length), 0)
              var t = this.getLineOffsets(),
                r = 0,
                n = t.length
              if (0 === n) return v.create(0, e)
              while (r < n) {
                var i = Math.floor((r + n) / 2)
                t[i] > e ? (n = i) : (r = i + 1)
              }
              var o = r - 1
              return v.create(o, e - t[o])
            }),
            (e.prototype.offsetAt = function(e) {
              var t = this.getLineOffsets()
              if (e.line >= t.length) return this._content.length
              if (e.line < 0) return 0
              var r = t[e.line],
                n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
              return Math.max(Math.min(r + e.character, n), r)
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
        function r(e) {
          return 'undefined' !== typeof e
        }
        function n(e) {
          return 'undefined' === typeof e
        }
        function i(e) {
          return !0 === e || !1 === e
        }
        function o(e) {
          return '[object String]' === t.call(e)
        }
        function a(e) {
          return '[object Number]' === t.call(e)
        }
        function s(e) {
          return '[object Function]' === t.call(e)
        }
        function u(e) {
          return null !== e && 'object' === typeof e
        }
        function c(e, t) {
          return Array.isArray(e) && e.every(t)
        }
        ;(e.defined = r),
          (e.undefined = n),
          (e.boolean = i),
          (e.string = o),
          (e.number = a),
          (e.func = s),
          (e.objectLiteral = u),
          (e.typedArray = c)
      })(ke || (ke = {}))
      var Ce,
        Ae,
        Ie,
        Te = (function() {
          function e(e, t, r, n) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = r),
              (this._content = n),
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
                  r = this.offsetAt(e.end)
                return this._content.substring(t, r)
              }
              return this._content
            }),
            (e.prototype.update = function(t, r) {
              for (var n = 0, i = t; n < i.length; n++) {
                var o = i[n]
                if (e.isIncremental(o)) {
                  var a = je(o.range),
                    s = this.offsetAt(a.start),
                    u = this.offsetAt(a.end)
                  this._content =
                    this._content.substring(0, s) + o.text + this._content.substring(u, this._content.length)
                  var c = Math.max(a.start.line, 0),
                    l = Math.max(a.end.line, 0),
                    f = this._lineOffsets,
                    h = Oe(o.text, !1, s)
                  if (l - c === h.length) for (var p = 0, d = h.length; p < d; p++) f[p + c + 1] = h[p]
                  else
                    h.length < 1e4
                      ? f.splice.apply(f, [c + 1, l - c].concat(h))
                      : (this._lineOffsets = f = f.slice(0, c + 1).concat(h, f.slice(l + 1)))
                  var m = o.text.length - (u - s)
                  if (0 !== m) for (p = c + 1 + h.length, d = f.length; p < d; p++) f[p] = f[p] + m
                } else {
                  if (!e.isFull(o)) throw new Error('Unknown change event received')
                  ;(this._content = o.text), (this._lineOffsets = void 0)
                }
              }
              this._version = r
            }),
            (e.prototype.getLineOffsets = function() {
              return void 0 === this._lineOffsets && (this._lineOffsets = Oe(this._content, !0)), this._lineOffsets
            }),
            (e.prototype.positionAt = function(e) {
              e = Math.max(Math.min(e, this._content.length), 0)
              var t = this.getLineOffsets(),
                r = 0,
                n = t.length
              if (0 === n) return { line: 0, character: e }
              while (r < n) {
                var i = Math.floor((r + n) / 2)
                t[i] > e ? (n = i) : (r = i + 1)
              }
              var o = r - 1
              return { line: o, character: e - t[o] }
            }),
            (e.prototype.offsetAt = function(e) {
              var t = this.getLineOffsets()
              if (e.line >= t.length) return this._content.length
              if (e.line < 0) return 0
              var r = t[e.line],
                n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
              return Math.max(Math.min(r + e.character, n), r)
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
                void 0 !== t &&
                null !== t &&
                'string' === typeof t.text &&
                void 0 === t.range &&
                void 0 === t.rangeLength
              )
            }),
            e
          )
        })()
      function Ee(e, t) {
        if (e.length <= 1) return e
        var r = (e.length / 2) | 0,
          n = e.slice(0, r),
          i = e.slice(r)
        Ee(n, t), Ee(i, t)
        var o = 0,
          a = 0,
          s = 0
        while (o < n.length && a < i.length) {
          var u = t(n[o], i[a])
          e[s++] = u <= 0 ? n[o++] : i[a++]
        }
        while (o < n.length) e[s++] = n[o++]
        while (a < i.length) e[s++] = i[a++]
        return e
      }
      function Oe(e, t, r) {
        void 0 === r && (r = 0)
        for (var n = t ? [r] : [], i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i)
          ;(13 !== o && 10 !== o) ||
            (13 === o && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++, n.push(r + i + 1))
        }
        return n
      }
      function je(e) {
        var t = e.start,
          r = e.end
        return t.line > r.line || (t.line === r.line && t.character > r.character) ? { start: r, end: t } : e
      }
      function Me(e) {
        var t = je(e.range)
        return t !== e.range ? { newText: e.newText, range: t } : e
      }
      function Pe(e, t) {
        var r
        return (
          (r =
            0 === t.length
              ? e
              : e.replace(/\{(\d+)\}/g, function(e, r) {
                  var n = r[0]
                  return 'undefined' !== typeof t[n] ? t[n] : e
                })),
          r
        )
      }
      function _e(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n]
        return Pe(t, r)
      }
      function Fe(e) {
        return _e
      }
      ;(function(e) {
        function t(e, t, r, n) {
          return new Te(e, t, r, n)
        }
        function r(e, t, r) {
          if (e instanceof Te) return e.update(t, r), e
          throw new Error('TextDocument.update: document must be created by TextDocument.create')
        }
        function n(e, t) {
          for (
            var r = e.getText(),
              n = Ee(t.map(Me), function(e, t) {
                var r = e.range.start.line - t.range.start.line
                return 0 === r ? e.range.start.character - t.range.start.character : r
              }),
              i = 0,
              o = [],
              a = 0,
              s = n;
            a < s.length;
            a++
          ) {
            var u = s[a],
              c = e.offsetAt(u.range.start)
            if (c < i) throw new Error('Overlapping edit')
            c > i && o.push(r.substring(i, c)), u.newText.length && o.push(u.newText), (i = e.offsetAt(u.range.end))
          }
          return o.push(r.substr(i)), o.join('')
        }
        ;(e.create = t), (e.update = r), (e.applyEdits = n)
      })(Ce || (Ce = {})),
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
        })(Ae || (Ae = {})),
        (function(e) {
          e.LATEST = {
            textDocument: {
              completion: {
                completionItem: { documentationFormat: [Z.Markdown, Z.PlainText], commitCharactersSupport: !0 },
              },
            },
          }
        })(Ie || (Ie = {}))
      var Ve,
        Ne = (function() {
          var e = function(t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t
                  }) ||
                function(e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              e(t, r)
            )
          }
          return function(t, r) {
            function n() {
              this.constructor = t
            }
            e(t, r), (t.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()))
          }
        })(),
        Re = Fe(),
        $e = {
          'color-hex': {
            errorMessage: Re('colorHexFormatWarning', 'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'),
            pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
          },
          'date-time': {
            errorMessage: Re('dateTimeFormatWarning', 'String is not a RFC3339 date-time.'),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
          },
          date: {
            errorMessage: Re('dateFormatWarning', 'String is not a RFC3339 date.'),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
          },
          time: {
            errorMessage: Re('timeFormatWarning', 'String is not a RFC3339 time.'),
            pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
          },
          email: {
            errorMessage: Re('emailFormatWarning', 'String is not an e-mail address.'),
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        },
        Le = (function() {
          function e(e, t, r) {
            void 0 === r && (r = 0), (this.offset = t), (this.length = r), (this.parent = e)
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
        })()
      ;(function(e) {
        function t(t, r) {
          var n = e.call(this, t, r) || this
          return (n.type = 'null'), (n.value = null), n
        }
        Ne(t, e)
      })(Le),
        (function(e) {
          function t(t, r, n) {
            var i = e.call(this, t, n) || this
            return (i.type = 'boolean'), (i.value = r), i
          }
          Ne(t, e)
        })(Le),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (n.type = 'array'), (n.items = []), n
          }
          Ne(t, e),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.items
              },
              enumerable: !1,
              configurable: !0,
            })
        })(Le),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (n.type = 'number'), (n.isInteger = !0), (n.value = Number.NaN), n
          }
          Ne(t, e)
        })(Le),
        (function(e) {
          function t(t, r, n) {
            var i = e.call(this, t, r, n) || this
            return (i.type = 'string'), (i.value = ''), i
          }
          Ne(t, e)
        })(Le),
        (function(e) {
          function t(t, r, n) {
            var i = e.call(this, t, r) || this
            return (i.type = 'property'), (i.colonOffset = -1), (i.keyNode = n), i
          }
          Ne(t, e),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode]
              },
              enumerable: !1,
              configurable: !0,
            })
        })(Le),
        (function(e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this
            return (n.type = 'object'), (n.properties = []), n
          }
          Ne(t, e),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.properties
              },
              enumerable: !1,
              configurable: !0,
            })
        })(Le)
      function De(e) {
        return K(e) ? (e ? {} : { not: {} }) : e
      }
      ;(function(e) {
        ;(e[(e['Key'] = 0)] = 'Key'), (e[(e['Enum'] = 1)] = 'Enum')
      })(Ve || (Ve = {}))
      var We = (function() {
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
              return (-1 === this.focusOffset || Je(e, this.focusOffset)) && e !== this.exclude
            }),
            (e.prototype.newSub = function() {
              return new e(-1, this.exclude)
            }),
            e
          )
        })(),
        Ue = (function() {
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
        qe = (function() {
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
              for (var t = 0, r = e; t < r.length; t++) {
                var n = r[t]
                this.merge(n)
              }
            }),
            (e.prototype.merge = function(e) {
              this.problems = this.problems.concat(e.problems)
            }),
            (e.prototype.mergeEnumValues = function(e) {
              if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
                this.enumValues = this.enumValues.concat(e.enumValues)
                for (var t = 0, r = this.problems; t < r.length; t++) {
                  var n = r[t]
                  n.code === Ae.EnumValueMismatch &&
                    (n.message = Re(
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
      function Be(e) {
        return W(e)
      }
      function Ke(e) {
        return D(e)
      }
      function Je(e, t, r) {
        return void 0 === r && (r = !1), (t >= e.offset && t < e.offset + e.length) || (r && t === e.offset + e.length)
      }
      ;(function() {
        function e(e, t, r) {
          void 0 === t && (t = []),
            void 0 === r && (r = []),
            (this.root = e),
            (this.syntaxErrors = t),
            (this.comments = r)
        }
        ;(e.prototype.getNodeFromOffset = function(e, t) {
          if ((void 0 === t && (t = !1), this.root)) return L(this.root, e, t)
        }),
          (e.prototype.visit = function(e) {
            if (this.root) {
              var t = function(r) {
                var n = e(r),
                  i = r.children
                if (Array.isArray(i)) for (var o = 0; o < i.length && n; o++) n = t(i[o])
                return n
              }
              t(this.root)
            }
          }),
          (e.prototype.validate = function(e, t) {
            if (this.root && t) {
              var r = new qe()
              return (
                He(this.root, t, r, Ue.instance),
                r.problems.map(function(t) {
                  var r = y.create(e.positionAt(t.location.offset), e.positionAt(t.location.offset + t.location.length))
                  return O.create(r, t.message, t.severity, t.code)
                })
              )
            }
          }),
          (e.prototype.getMatchingSchemas = function(e, t, r) {
            void 0 === t && (t = -1)
            var n = new We(t, r)
            return this.root && e && He(this.root, e, new qe(), n), n.schemas
          })
      })()
      function He(e, t, r, n) {
        if (e && n.include(e)) {
          var i = e
          switch (i.type) {
            case 'object':
              c(i, t, r, n)
              break
            case 'array':
              u(i, t, r, n)
              break
            case 'string':
              s(i, t, r, n)
              break
            case 'number':
              a(i, t, r, n)
              break
            case 'property':
              return He(i.valueNode, t, r, n)
          }
          o(), n.add({ node: i, schema: t })
        }
        function o() {
          function e(e) {
            return i.type === e || ('integer' === e && 'number' === i.type && i.isInteger)
          }
          if (
            (Array.isArray(t.type)
              ? t.type.some(e) ||
                r.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: T.Warning,
                  message:
                    t.errorMessage ||
                    Re('typeArrayMismatchWarning', 'Incorrect type. Expected one of {0}.', t.type.join(', ')),
                })
              : t.type &&
                (e(t.type) ||
                  r.problems.push({
                    location: { offset: i.offset, length: i.length },
                    severity: T.Warning,
                    message: t.errorMessage || Re('typeMismatchWarning', 'Incorrect type. Expected "{0}".', t.type),
                  })),
            Array.isArray(t.allOf))
          )
            for (var o = 0, a = t.allOf; o < a.length; o++) {
              var s = a[o]
              He(i, De(s), r, n)
            }
          var u = De(t.not)
          if (u) {
            var c = new qe(),
              l = n.newSub()
            He(i, u, c, l),
              c.hasProblems() ||
                r.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: T.Warning,
                  message: Re('notSchemaWarning', 'Matches a schema that is not allowed.'),
                })
            for (var f = 0, h = l.schemas; f < h.length; f++) {
              var p = h[f]
              ;(p.inverted = !p.inverted), n.add(p)
            }
          }
          var d = function(e, t) {
            for (var o = [], a = void 0, s = 0, u = e; s < u.length; s++) {
              var c = u[s],
                l = De(c),
                f = new qe(),
                h = n.newSub()
              if ((He(i, l, f, h), f.hasProblems() || o.push(l), a))
                if (t || f.hasProblems() || a.validationResult.hasProblems()) {
                  var p = f.compare(a.validationResult)
                  p > 0
                    ? (a = { schema: l, validationResult: f, matchingSchemas: h })
                    : 0 === p && (a.matchingSchemas.merge(h), a.validationResult.mergeEnumValues(f))
                } else
                  a.matchingSchemas.merge(h),
                    (a.validationResult.propertiesMatches += f.propertiesMatches),
                    (a.validationResult.propertiesValueMatches += f.propertiesValueMatches)
              else a = { schema: l, validationResult: f, matchingSchemas: h }
            }
            return (
              o.length > 1 &&
                t &&
                r.problems.push({
                  location: { offset: i.offset, length: 1 },
                  severity: T.Warning,
                  message: Re('oneOfWarning', 'Matches multiple schemas when only one must validate.'),
                }),
              a &&
                (r.merge(a.validationResult),
                (r.propertiesMatches += a.validationResult.propertiesMatches),
                (r.propertiesValueMatches += a.validationResult.propertiesValueMatches),
                n.merge(a.matchingSchemas)),
              o.length
            )
          }
          Array.isArray(t.anyOf) && d(t.anyOf, !1), Array.isArray(t.oneOf) && d(t.oneOf, !0)
          var m = function(e) {
              var t = new qe(),
                o = n.newSub()
              He(i, De(e), t, o),
                r.merge(t),
                (r.propertiesMatches += t.propertiesMatches),
                (r.propertiesValueMatches += t.propertiesValueMatches),
                n.merge(o)
            },
            g = function(e, t, r) {
              var o = De(e),
                a = new qe(),
                s = n.newSub()
              He(i, o, a, s), n.merge(s), a.hasProblems() ? r && m(r) : t && m(t)
            },
            v = De(t.if)
          if ((v && g(v, De(t.then), De(t.else)), Array.isArray(t.enum))) {
            for (var y = Be(i), b = !1, x = 0, S = t.enum; x < S.length; x++) {
              var k = S[x]
              if (U(y, k)) {
                b = !0
                break
              }
            }
            ;(r.enumValues = t.enum),
              (r.enumValueMatch = b),
              b ||
                r.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: T.Warning,
                  code: Ae.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    Re(
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
          if (B(t.const)) {
            y = Be(i)
            U(y, t.const)
              ? (r.enumValueMatch = !0)
              : (r.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: T.Warning,
                  code: Ae.EnumValueMismatch,
                  message: t.errorMessage || Re('constWarning', 'Value must be {0}.', JSON.stringify(t.const)),
                }),
                (r.enumValueMatch = !1)),
              (r.enumValues = [t.const])
          }
          t.deprecationMessage &&
            i.parent &&
            r.problems.push({
              location: { offset: i.parent.offset, length: i.parent.length },
              severity: T.Warning,
              message: t.deprecationMessage,
            })
        }
        function a(e, t, r, n) {
          var i = e.value
          function o(e) {
            var t,
              r = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(e.toString())
            return (
              r && {
                value: Number(r[1] + (r[2] || '')),
                multiplier: ((null === (t = r[2]) || void 0 === t ? void 0 : t.length) || 0) - (parseInt(r[3]) || 0),
              }
            )
          }
          if (q(t.multipleOf)) {
            var a = -1
            if (Number.isInteger(t.multipleOf)) a = i % t.multipleOf
            else {
              var s = o(t.multipleOf),
                u = o(i)
              if (s && u) {
                var c = Math.pow(10, Math.abs(u.multiplier - s.multiplier))
                u.multiplier < s.multiplier ? (u.value *= c) : (s.value *= c), (a = u.value % s.value)
              }
            }
            0 !== a &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('multipleOfWarning', 'Value is not divisible by {0}.', t.multipleOf),
              })
          }
          function l(e, t) {
            return q(t) ? t : K(t) && t ? e : void 0
          }
          function f(e, t) {
            if (!K(t) || !t) return e
          }
          var h = l(t.minimum, t.exclusiveMinimum)
          q(h) &&
            i <= h &&
            r.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: T.Warning,
              message: Re('exclusiveMinimumWarning', 'Value is below the exclusive minimum of {0}.', h),
            })
          var p = l(t.maximum, t.exclusiveMaximum)
          q(p) &&
            i >= p &&
            r.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: T.Warning,
              message: Re('exclusiveMaximumWarning', 'Value is above the exclusive maximum of {0}.', p),
            })
          var d = f(t.minimum, t.exclusiveMinimum)
          q(d) &&
            i < d &&
            r.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: T.Warning,
              message: Re('minimumWarning', 'Value is below the minimum of {0}.', d),
            })
          var m = f(t.maximum, t.exclusiveMaximum)
          q(m) &&
            i > m &&
            r.problems.push({
              location: { offset: e.offset, length: e.length },
              severity: T.Warning,
              message: Re('maximumWarning', 'Value is above the maximum of {0}.', m),
            })
        }
        function s(e, t, r, n) {
          if (
            (q(t.minLength) &&
              e.value.length < t.minLength &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('minLengthWarning', 'String is shorter than the minimum length of {0}.', t.minLength),
              }),
            q(t.maxLength) &&
              e.value.length > t.maxLength &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('maxLengthWarning', 'String is longer than the maximum length of {0}.', t.maxLength),
              }),
            J(t.pattern))
          ) {
            var i = new RegExp(t.pattern)
            i.test(e.value) ||
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message:
                  t.patternErrorMessage ||
                  t.errorMessage ||
                  Re('patternWarning', 'String does not match the pattern of "{0}".', t.pattern),
              })
          }
          if (t.format)
            switch (t.format) {
              case 'uri':
              case 'uri-reference':
                var o = void 0
                if (e.value) {
                  var a = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(e.value)
                  a
                    ? a[2] || 'uri' !== t.format || (o = Re('uriSchemeMissing', 'URI with a scheme is expected.'))
                    : (o = Re('uriMissing', 'URI is expected.'))
                } else o = Re('uriEmpty', 'URI expected.')
                o &&
                  r.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: T.Warning,
                    message:
                      t.patternErrorMessage || t.errorMessage || Re('uriFormatWarning', 'String is not a URI: {0}', o),
                  })
                break
              case 'color-hex':
              case 'date-time':
              case 'date':
              case 'time':
              case 'email':
                var s = $e[t.format]
                ;(e.value && s.pattern.exec(e.value)) ||
                  r.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: T.Warning,
                    message: t.patternErrorMessage || t.errorMessage || s.errorMessage,
                  })
              default:
            }
        }
        function u(e, t, r, n) {
          if (Array.isArray(t.items)) {
            for (var i = t.items, o = 0; o < i.length; o++) {
              var a = i[o],
                s = De(a),
                u = new qe(),
                c = e.items[o]
              c ? (He(c, s, u, n), r.mergePropertyMatch(u)) : e.items.length >= i.length && r.propertiesValueMatches++
            }
            if (e.items.length > i.length)
              if ('object' === typeof t.additionalItems)
                for (var l = i.length; l < e.items.length; l++) {
                  u = new qe()
                  He(e.items[l], t.additionalItems, u, n), r.mergePropertyMatch(u)
                }
              else
                !1 === t.additionalItems &&
                  r.problems.push({
                    location: { offset: e.offset, length: e.length },
                    severity: T.Warning,
                    message: Re(
                      'additionalItemsWarning',
                      'Array has too many items according to schema. Expected {0} or fewer.',
                      i.length,
                    ),
                  })
          } else {
            var f = De(t.items)
            if (f)
              for (var h = 0, p = e.items; h < p.length; h++) {
                ;(c = p[h]), (u = new qe())
                He(c, f, u, n), r.mergePropertyMatch(u)
              }
          }
          var d = De(t.contains)
          if (d) {
            var m = e.items.some(function(e) {
              var t = new qe()
              return He(e, d, t, Ue.instance), !t.hasProblems()
            })
            m ||
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: t.errorMessage || Re('requiredItemMissingWarning', 'Array does not contain required item.'),
              })
          }
          if (
            (q(t.minItems) &&
              e.items.length < t.minItems &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('minItemsWarning', 'Array has too few items. Expected {0} or more.', t.minItems),
              }),
            q(t.maxItems) &&
              e.items.length > t.maxItems &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('maxItemsWarning', 'Array has too many items. Expected {0} or fewer.', t.maxItems),
              }),
            !0 === t.uniqueItems)
          ) {
            var g = Be(e),
              v = g.some(function(e, t) {
                return t !== g.lastIndexOf(e)
              })
            v &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('uniqueItemsWarning', 'Array has duplicate items.'),
              })
          }
        }
        function c(e, t, r, n) {
          for (var i = Object.create(null), o = [], a = 0, s = e.properties; a < s.length; a++) {
            var u = s[a],
              c = u.keyNode.value
            ;(i[c] = u.valueNode), o.push(c)
          }
          if (Array.isArray(t.required))
            for (var l = 0, f = t.required; l < f.length; l++) {
              var h = f[l]
              if (!i[h]) {
                var p = e.parent && 'property' === e.parent.type && e.parent.keyNode,
                  d = p ? { offset: p.offset, length: p.length } : { offset: e.offset, length: 1 }
                r.problems.push({
                  location: d,
                  severity: T.Warning,
                  message: Re('MissingRequiredPropWarning', 'Missing property "{0}".', h),
                })
              }
            }
          var m = function(e) {
            var t = o.indexOf(e)
            while (t >= 0) o.splice(t, 1), (t = o.indexOf(e))
          }
          if (t.properties)
            for (var g = 0, v = Object.keys(t.properties); g < v.length; g++) {
              h = v[g]
              m(h)
              var y = t.properties[h],
                b = i[h]
              if (b)
                if (K(y))
                  if (y) r.propertiesMatches++, r.propertiesValueMatches++
                  else {
                    u = b.parent
                    r.problems.push({
                      location: { offset: u.keyNode.offset, length: u.keyNode.length },
                      severity: T.Warning,
                      message: t.errorMessage || Re('DisallowedExtraPropWarning', 'Property {0} is not allowed.', h),
                    })
                  }
                else {
                  var x = new qe()
                  He(b, y, x, n), r.mergePropertyMatch(x)
                }
            }
          if (t.patternProperties)
            for (var S = 0, k = Object.keys(t.patternProperties); S < k.length; S++)
              for (var w = k[S], C = new RegExp(w), A = 0, I = o.slice(0); A < I.length; A++) {
                h = I[A]
                if (C.test(h)) {
                  m(h)
                  b = i[h]
                  if (b) {
                    y = t.patternProperties[w]
                    if (K(y))
                      if (y) r.propertiesMatches++, r.propertiesValueMatches++
                      else {
                        u = b.parent
                        r.problems.push({
                          location: { offset: u.keyNode.offset, length: u.keyNode.length },
                          severity: T.Warning,
                          message:
                            t.errorMessage || Re('DisallowedExtraPropWarning', 'Property {0} is not allowed.', h),
                        })
                      }
                    else {
                      x = new qe()
                      He(b, y, x, n), r.mergePropertyMatch(x)
                    }
                  }
                }
              }
          if ('object' === typeof t.additionalProperties)
            for (var E = 0, O = o; E < O.length; E++) {
              ;(h = O[E]), (b = i[h])
              if (b) {
                x = new qe()
                He(b, t.additionalProperties, x, n), r.mergePropertyMatch(x)
              }
            }
          else if (!1 === t.additionalProperties && o.length > 0)
            for (var j = 0, M = o; j < M.length; j++) {
              ;(h = M[j]), (b = i[h])
              if (b) {
                u = b.parent
                r.problems.push({
                  location: { offset: u.keyNode.offset, length: u.keyNode.length },
                  severity: T.Warning,
                  message: t.errorMessage || Re('DisallowedExtraPropWarning', 'Property {0} is not allowed.', h),
                })
              }
            }
          if (
            (q(t.maxProperties) &&
              e.properties.length > t.maxProperties &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re('MaxPropWarning', 'Object has more properties than limit of {0}.', t.maxProperties),
              }),
            q(t.minProperties) &&
              e.properties.length < t.minProperties &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: T.Warning,
                message: Re(
                  'MinPropWarning',
                  'Object has fewer properties than the required number of {0}',
                  t.minProperties,
                ),
              }),
            t.dependencies)
          )
            for (var P = 0, _ = Object.keys(t.dependencies); P < _.length; P++) {
              c = _[P]
              var F = i[c]
              if (F) {
                var V = t.dependencies[c]
                if (Array.isArray(V))
                  for (var N = 0, R = V; N < R.length; N++) {
                    var $ = R[N]
                    i[$]
                      ? r.propertiesValueMatches++
                      : r.problems.push({
                          location: { offset: e.offset, length: e.length },
                          severity: T.Warning,
                          message: Re(
                            'RequiredDependentPropWarning',
                            'Object is missing property {0} required by property {1}.',
                            $,
                            c,
                          ),
                        })
                  }
                else {
                  y = De(V)
                  if (y) {
                    x = new qe()
                    He(e, y, x, n), r.mergePropertyMatch(x)
                  }
                }
              }
            }
          var L = De(t.propertyNames)
          if (L)
            for (var D = 0, W = e.properties; D < W.length; D++) {
              var U = W[D]
              c = U.keyNode
              c && He(c, L, r, Ue.instance)
            }
        }
      }
      function ze(e, t, r) {
        if (null !== e && 'object' === typeof e) {
          var n = t + '\t'
          if (Array.isArray(e)) {
            if (0 === e.length) return '[]'
            for (var i = '[\n', o = 0; o < e.length; o++)
              (i += n + ze(e[o], n, r)), o < e.length - 1 && (i += ','), (i += '\n')
            return (i += t + ']'), i
          }
          var a = Object.keys(e)
          if (0 === a.length) return '{}'
          for (i = '{\n', o = 0; o < a.length; o++) {
            var s = a[o]
            ;(i += n + JSON.stringify(s) + ': ' + ze(e[s], n, r)), o < a.length - 1 && (i += ','), (i += '\n')
          }
          return (i += t + '}'), i
        }
        return r(e)
      }
      function Ge(e, t) {
        if (e.length < t.length) return !1
        for (var r = 0; r < t.length; r++) if (e[r] !== t[r]) return !1
        return !0
      }
      function Ze(e, t) {
        var r = e.length - t.length
        return r > 0 ? e.lastIndexOf(t) === r : 0 === r && e === t
      }
      function Xe(e) {
        return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*')
      }
      var Qe = Fe(),
        Ye = [',', '}', ']'],
        et = [':']
      ;(function() {
        function e(e, t, r, n) {
          void 0 === t && (t = []),
            void 0 === r && (r = Promise),
            void 0 === n && (n = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = r),
            (this.clientCapabilities = n)
        }
        ;(e.prototype.doResolve = function(e) {
          for (var t = this.contributions.length - 1; t >= 0; t--) {
            var r = this.contributions[t].resolveCompletion
            if (r) {
              var n = r(e)
              if (n) return n
            }
          }
          return this.promiseConstructor.resolve(e)
        }),
          (e.prototype.doComplete = function(e, t, r) {
            var n = this,
              i = { items: [], isIncomplete: !1 },
              o = e.getText(),
              a = e.offsetAt(t),
              s = r.getNodeFromOffset(a, !0)
            if (this.isInComment(e, s ? s.offset : 0, a)) return Promise.resolve(i)
            if (s && a === s.offset + s.length && a > 0) {
              var u = o[a - 1]
              ;(('object' === s.type && '}' === u) || ('array' === s.type && ']' === u)) && (s = s.parent)
            }
            var c,
              l = this.getCurrentWord(e, a)
            if (!s || ('string' !== s.type && 'number' !== s.type && 'boolean' !== s.type && 'null' !== s.type)) {
              var f = a - l.length
              f > 0 && '"' === o[f - 1] && f--, (c = y.create(e.positionAt(f), t))
            } else c = y.create(e.positionAt(s.offset), e.positionAt(s.offset + s.length))
            var h = !1,
              p = {},
              d = {
                add: function(e) {
                  var t = e.label,
                    r = p[t]
                  if (r) r.documentation || (r.documentation = e.documentation)
                  else {
                    if (((t = t.replace(/[\n]/g, '\u21b5')), t.length > 60)) {
                      var n = t.substr(0, 57).trim() + '...'
                      p[n] || (t = n)
                    }
                    c && void 0 !== e.insertText && (e.textEdit = M.replace(c, e.insertText)),
                      h && (e.commitCharacters = e.kind === Q.Property ? et : Ye),
                      (e.label = t),
                      (p[t] = e),
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
            return this.schemaService.getSchemaForResource(e.uri, r).then(function(t) {
              var u = [],
                f = !0,
                h = '',
                m = void 0
              if (s && 'string' === s.type) {
                var g = s.parent
                g &&
                  'property' === g.type &&
                  g.keyNode === s &&
                  ((f = !g.valueNode), (m = g), (h = o.substr(s.offset + 1, s.length - 2)), g && (s = g.parent))
              }
              if (s && 'object' === s.type) {
                if (s.offset === a) return i
                var v = s.properties
                v.forEach(function(e) {
                  ;(m && m === e) || (p[e.keyNode.value] = te.create('__'))
                })
                var y = ''
                f && (y = n.evaluateSeparatorAfter(e, e.offsetAt(c.end))),
                  t ? n.getPropertyCompletions(t, r, s, f, y, d) : n.getSchemaLessPropertyCompletions(r, s, h, d)
                var b = Ke(s)
                n.contributions.forEach(function(t) {
                  var r = t.collectPropertyCompletions(e.uri, b, l, f, '' === y, d)
                  r && u.push(r)
                }),
                  !t &&
                    l.length > 0 &&
                    '"' !== o.charAt(a - l.length - 1) &&
                    (d.add({
                      kind: Q.Property,
                      label: n.getLabelForValue(l),
                      insertText: n.getInsertTextForProperty(l, void 0, !1, y),
                      insertTextFormat: Y.Snippet,
                      documentation: '',
                    }),
                    d.setAsIncomplete())
              }
              var x = {}
              return (
                t ? n.getValueCompletions(t, r, s, a, e, d, x) : n.getSchemaLessValueCompletions(r, s, a, e, d),
                n.contributions.length > 0 && n.getContributedValueCompletions(r, s, a, e, d, u),
                n.promiseConstructor.all(u).then(function() {
                  if (0 === d.getNumberOfProposals()) {
                    var t = a
                    !s ||
                      ('string' !== s.type && 'number' !== s.type && 'boolean' !== s.type && 'null' !== s.type) ||
                      (t = s.offset + s.length)
                    var r = n.evaluateSeparatorAfter(e, t)
                    n.addFillerValueCompletions(x, r, d)
                  }
                  return i
                })
              )
            })
          }),
          (e.prototype.getPropertyCompletions = function(e, t, r, n, i, o) {
            var a = this,
              s = t.getMatchingSchemas(e.schema, r.offset)
            s.forEach(function(e) {
              if (e.node === r && !e.inverted) {
                var t = e.schema.properties
                t &&
                  Object.keys(t).forEach(function(e) {
                    var r = t[e]
                    if ('object' === typeof r && !r.deprecationMessage && !r.doNotSuggest) {
                      var s = {
                        kind: Q.Property,
                        label: e,
                        insertText: a.getInsertTextForProperty(e, r, n, i),
                        insertTextFormat: Y.Snippet,
                        filterText: a.getFilterTextForValue(e),
                        documentation: a.fromMarkup(r.markdownDescription) || r.description || '',
                      }
                      void 0 !== r.suggestSortText && (s.sortText = r.suggestSortText),
                        s.insertText &&
                          Ze(s.insertText, '$1' + i) &&
                          (s.command = { title: 'Suggest', command: 'editor.action.triggerSuggest' }),
                        o.add(s)
                    }
                  })
                var s = e.schema.propertyNames
                if ('object' === typeof s && !s.deprecationMessage && !s.doNotSuggest) {
                  var u = function(e, t) {
                    void 0 === t && (t = void 0)
                    var r = {
                      kind: Q.Property,
                      label: e,
                      insertText: a.getInsertTextForProperty(e, void 0, n, i),
                      insertTextFormat: Y.Snippet,
                      filterText: a.getFilterTextForValue(e),
                      documentation: t || a.fromMarkup(s.markdownDescription) || s.description || '',
                    }
                    void 0 !== s.suggestSortText && (r.sortText = s.suggestSortText),
                      r.insertText &&
                        Ze(r.insertText, '$1' + i) &&
                        (r.command = { title: 'Suggest', command: 'editor.action.triggerSuggest' }),
                      o.add(r)
                  }
                  if (s.enum)
                    for (var c = 0; c < s.enum.length; c++) {
                      var l = void 0
                      s.markdownEnumDescriptions && c < s.markdownEnumDescriptions.length
                        ? (l = a.fromMarkup(s.markdownEnumDescriptions[c]))
                        : s.enumDescriptions && c < s.enumDescriptions.length && (l = s.enumDescriptions[c]),
                        u(s.enum[c], l)
                    }
                  s.const && u(s.const)
                }
              }
            })
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function(e, t, r, n) {
            var i = this,
              o = function(e) {
                e.properties.forEach(function(e) {
                  var t = e.keyNode.value
                  n.add({
                    kind: Q.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ''),
                    insertTextFormat: Y.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: '',
                  })
                })
              }
            if (t.parent)
              if ('property' === t.parent.type) {
                var a = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === a &&
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
                n.add({
                  kind: Q.Property,
                  label: '$schema',
                  insertText: this.getInsertTextForProperty('$schema', void 0, !0, ''),
                  insertTextFormat: Y.Snippet,
                  documentation: '',
                  filterText: this.getFilterTextForValue('$schema'),
                })
          }),
          (e.prototype.getSchemaLessValueCompletions = function(e, t, r, n, i) {
            var o = this,
              a = r
            if (
              (!t ||
                ('string' !== t.type && 'number' !== t.type && 'boolean' !== t.type && 'null' !== t.type) ||
                ((a = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind('object'),
                  label: 'Empty object',
                  insertText: this.getInsertTextForValue({}, ''),
                  insertTextFormat: Y.Snippet,
                  documentation: '',
                }),
                void i.add({
                  kind: this.getSuggestionKind('array'),
                  label: 'Empty array',
                  insertText: this.getInsertTextForValue([], ''),
                  insertTextFormat: Y.Snippet,
                  documentation: '',
                })
              )
            var s = this.evaluateSeparatorAfter(n, a),
              u = function(e) {
                e.parent &&
                  !Je(e.parent, r, !0) &&
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, n),
                    insertText: o.getInsertTextForMatchingNode(e, n, s),
                    insertTextFormat: Y.Snippet,
                    documentation: '',
                  }),
                  'boolean' === e.type && o.addBooleanValueCompletion(!e.value, s, i)
              }
            if ('property' === t.type && r > (t.colonOffset || 0)) {
              var c = t.valueNode
              if (c && (r > c.offset + c.length || 'object' === c.type || 'array' === c.type)) return
              var l = t.keyNode.value
              e.visit(function(e) {
                return 'property' === e.type && e.keyNode.value === l && e.valueNode && u(e.valueNode), !0
              }),
                '$schema' === l && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(s, i)
            }
            if ('array' === t.type)
              if (t.parent && 'property' === t.parent.type) {
                var f = t.parent.keyNode.value
                e.visit(function(e) {
                  return (
                    'property' === e.type &&
                      e.keyNode.value === f &&
                      e.valueNode &&
                      'array' === e.valueNode.type &&
                      e.valueNode.items.forEach(u),
                    !0
                  )
                })
              } else t.items.forEach(u)
          }),
          (e.prototype.getValueCompletions = function(e, t, r, n, i, o, a) {
            var s = n,
              u = void 0,
              c = void 0
            if (
              (!r ||
                ('string' !== r.type && 'number' !== r.type && 'boolean' !== r.type && 'null' !== r.type) ||
                ((s = r.offset + r.length), (c = r), (r = r.parent)),
              r)
            ) {
              if ('property' === r.type && n > (r.colonOffset || 0)) {
                var l = r.valueNode
                if (l && n > l.offset + l.length) return
                ;(u = r.keyNode.value), (r = r.parent)
              }
              if (r && (void 0 !== u || 'array' === r.type)) {
                for (
                  var f = this.evaluateSeparatorAfter(i, s),
                    h = t.getMatchingSchemas(e.schema, r.offset, c),
                    p = 0,
                    d = h;
                  p < d.length;
                  p++
                ) {
                  var m = d[p]
                  if (m.node === r && !m.inverted && m.schema) {
                    if ('array' === r.type && m.schema.items)
                      if (Array.isArray(m.schema.items)) {
                        var g = this.findItemAtOffset(r, i, n)
                        g < m.schema.items.length && this.addSchemaValueCompletions(m.schema.items[g], f, o, a)
                      } else this.addSchemaValueCompletions(m.schema.items, f, o, a)
                    if (void 0 !== u) {
                      var v = !1
                      if (m.schema.properties) {
                        var y = m.schema.properties[u]
                        y && ((v = !0), this.addSchemaValueCompletions(y, f, o, a))
                      }
                      if (m.schema.patternProperties && !v)
                        for (var b = 0, x = Object.keys(m.schema.patternProperties); b < x.length; b++) {
                          var S = x[b],
                            k = new RegExp(S)
                          if (k.test(u)) {
                            v = !0
                            y = m.schema.patternProperties[S]
                            this.addSchemaValueCompletions(y, f, o, a)
                          }
                        }
                      if (m.schema.additionalProperties && !v) {
                        y = m.schema.additionalProperties
                        this.addSchemaValueCompletions(y, f, o, a)
                      }
                    }
                  }
                }
                '$schema' !== u || r.parent || this.addDollarSchemaCompletions(f, o),
                  a['boolean'] && (this.addBooleanValueCompletion(!0, f, o), this.addBooleanValueCompletion(!1, f, o)),
                  a['null'] && this.addNullValueCompletion(f, o)
              }
            } else this.addSchemaValueCompletions(e.schema, '', o, a)
          }),
          (e.prototype.getContributedValueCompletions = function(e, t, r, n, i, o) {
            if (t) {
              if (
                (('string' !== t.type && 'number' !== t.type && 'boolean' !== t.type && 'null' !== t.type) ||
                  (t = t.parent),
                t && 'property' === t.type && r > (t.colonOffset || 0))
              ) {
                var a = t.keyNode.value,
                  s = t.valueNode
                if ((!s || r <= s.offset + s.length) && t.parent) {
                  var u = Ke(t.parent)
                  this.contributions.forEach(function(e) {
                    var t = e.collectValueCompletions(n.uri, u, a, i)
                    t && o.push(t)
                  })
                }
              }
            } else
              this.contributions.forEach(function(e) {
                var t = e.collectDefaultCompletions(n.uri, i)
                t && o.push(t)
              })
          }),
          (e.prototype.addSchemaValueCompletions = function(e, t, r, n) {
            var i = this
            'object' === typeof e &&
              (this.addEnumValueCompletions(e, t, r),
              this.addDefaultValueCompletions(e, t, r),
              this.collectTypes(e, n),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, r, n)
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, r, n)
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function(e) {
                  return i.addSchemaValueCompletions(e, t, r, n)
                }))
          }),
          (e.prototype.addDefaultValueCompletions = function(e, t, r, n) {
            var i = this
            void 0 === n && (n = 0)
            var o = !1
            if (B(e.default)) {
              for (var a = e.type, s = e.default, u = n; u > 0; u--) (s = [s]), (a = 'array')
              r.add({
                kind: this.getSuggestionKind(a),
                label: this.getLabelForValue(s),
                insertText: this.getInsertTextForValue(s, t),
                insertTextFormat: Y.Snippet,
                detail: Qe('json.suggest.default', 'Default value'),
              }),
                (o = !0)
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function(a) {
                for (var s = e.type, u = a, c = n; c > 0; c--) (u = [u]), (s = 'array')
                r.add({
                  kind: i.getSuggestionKind(s),
                  label: i.getLabelForValue(u),
                  insertText: i.getInsertTextForValue(u, t),
                  insertTextFormat: Y.Snippet,
                }),
                  (o = !0)
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function(a) {
                  var s,
                    u,
                    c = e.type,
                    l = a.body,
                    f = a.label
                  if (B(l)) {
                    e.type
                    for (var h = n; h > 0; h--) (l = [l]), 'array'
                    ;(s = i.getInsertTextForSnippetValue(l, t)),
                      (u = i.getFilterTextForSnippetValue(l)),
                      (f = f || i.getLabelForSnippetValue(l))
                  } else {
                    if ('string' !== typeof a.bodyText) return
                    var p = '',
                      d = '',
                      m = ''
                    for (h = n; h > 0; h--) (p = p + m + '[\n'), (d = d + '\n' + m + ']'), (m += '\t'), (c = 'array')
                    ;(s = p + m + a.bodyText.split('\n').join('\n' + m) + d + t),
                      (f = f || s),
                      (u = s.replace(/[\n]/g, ''))
                  }
                  r.add({
                    kind: i.getSuggestionKind(c),
                    label: f,
                    documentation: i.fromMarkup(a.markdownDescription) || a.description,
                    insertText: s,
                    insertTextFormat: Y.Snippet,
                    filterText: u,
                  }),
                    (o = !0)
                }),
              !o &&
                'object' === typeof e.items &&
                !Array.isArray(e.items) &&
                n < 5 &&
                this.addDefaultValueCompletions(e.items, t, r, n + 1)
          }),
          (e.prototype.addEnumValueCompletions = function(e, t, r) {
            if (
              (B(e.const) &&
                r.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: Y.Snippet,
                  documentation: this.fromMarkup(e.markdownDescription) || e.description,
                }),
              Array.isArray(e.enum))
            )
              for (var n = 0, i = e.enum.length; n < i; n++) {
                var o = e.enum[n],
                  a = this.fromMarkup(e.markdownDescription) || e.description
                e.markdownEnumDescriptions && n < e.markdownEnumDescriptions.length && this.doesSupportMarkdown()
                  ? (a = this.fromMarkup(e.markdownEnumDescriptions[n]))
                  : e.enumDescriptions && n < e.enumDescriptions.length && (a = e.enumDescriptions[n]),
                  r.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: Y.Snippet,
                    documentation: a,
                  })
              }
          }),
          (e.prototype.collectTypes = function(e, t) {
            if (!Array.isArray(e.enum) && !B(e.const)) {
              var r = e.type
              Array.isArray(r)
                ? r.forEach(function(e) {
                    return (t[e] = !0)
                  })
                : r && (t[r] = !0)
            }
          }),
          (e.prototype.addFillerValueCompletions = function(e, t, r) {
            e['object'] &&
              r.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: Y.Snippet,
                detail: Qe('defaults.object', 'New object'),
                documentation: '',
              }),
              e['array'] &&
                r.add({
                  kind: this.getSuggestionKind('array'),
                  label: '[]',
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: Y.Snippet,
                  detail: Qe('defaults.array', 'New array'),
                  documentation: '',
                })
          }),
          (e.prototype.addBooleanValueCompletion = function(e, t, r) {
            r.add({
              kind: this.getSuggestionKind('boolean'),
              label: e ? 'true' : 'false',
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: Y.Snippet,
              documentation: '',
            })
          }),
          (e.prototype.addNullValueCompletion = function(e, t) {
            t.add({
              kind: this.getSuggestionKind('null'),
              label: 'null',
              insertText: 'null' + e,
              insertTextFormat: Y.Snippet,
              documentation: '',
            })
          }),
          (e.prototype.addDollarSchemaCompletions = function(e, t) {
            var r = this,
              n = this.schemaService.getRegisteredSchemaIds(function(e) {
                return 'http' === e || 'https' === e
              })
            n.forEach(function(n) {
              return t.add({
                kind: Q.Module,
                label: r.getLabelForValue(n),
                filterText: r.getFilterTextForValue(n),
                insertText: r.getInsertTextForValue(n, e),
                insertTextFormat: Y.Snippet,
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
            var r = JSON.stringify(e, null, '\t')
            return '{}' === r ? '{$1}' + t : '[]' === r ? '[$1]' + t : this.getInsertTextForPlainText(r + t)
          }),
          (e.prototype.getInsertTextForSnippetValue = function(e, t) {
            var r = function(e) {
              return 'string' === typeof e && '^' === e[0] ? e.substr(1) : JSON.stringify(e)
            }
            return ze(e, '', r) + t
          }),
          (e.prototype.getInsertTextForGuessedValue = function(e, t) {
            switch (typeof e) {
              case 'object':
                return null === e ? '${1:null}' + t : this.getInsertTextForValue(e, t)
              case 'string':
                var r = JSON.stringify(e)
                return (r = r.substr(1, r.length - 2)), (r = this.getInsertTextForPlainText(r)), '"${1:' + r + '}"' + t
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
            if (!e) return Q.Value
            switch (e) {
              case 'string':
                return Q.Value
              case 'object':
                return Q.Module
              case 'property':
                return Q.Property
              default:
                return Q.Value
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function(e, t) {
            switch (e.type) {
              case 'array':
                return '[]'
              case 'object':
                return '{}'
              default:
                var r = t.getText().substr(e.offset, e.length)
                return r
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function(e, t, r) {
            switch (e.type) {
              case 'array':
                return this.getInsertTextForValue([], r)
              case 'object':
                return this.getInsertTextForValue({}, r)
              default:
                var n = t.getText().substr(e.offset, e.length) + r
                return this.getInsertTextForPlainText(n)
            }
          }),
          (e.prototype.getInsertTextForProperty = function(e, t, r, n) {
            var i = this.getInsertTextForValue(e, '')
            if (!r) return i
            var o,
              a = i + ': ',
              s = 0
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body
                  B(u) && (o = this.getInsertTextForSnippetValue(u, ''))
                }
                s += t.defaultSnippets.length
              }
              if (
                (t.enum &&
                  (o || 1 !== t.enum.length || (o = this.getInsertTextForGuessedValue(t.enum[0], '')),
                  (s += t.enum.length)),
                B(t.default) && (o || (o = this.getInsertTextForGuessedValue(t.default, '')), s++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o || (o = this.getInsertTextForGuessedValue(t.examples[0], '')), (s += t.examples.length)),
                0 === s)
              ) {
                var c = Array.isArray(t.type) ? t.type[0] : t.type
                switch ((c || (t.properties ? (c = 'object') : t.items && (c = 'array')), c)) {
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
            return (!o || s > 1) && (o = '$1'), a + o + n
          }),
          (e.prototype.getCurrentWord = function(e, t) {
            var r = t - 1,
              n = e.getText()
            while (r >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(n.charAt(r))) r--
            return n.substring(r + 1, t)
          }),
          (e.prototype.evaluateSeparatorAfter = function(e, t) {
            var r = R(e.getText(), !0)
            r.setPosition(t)
            var n = r.scan()
            switch (n) {
              case 5:
              case 2:
              case 4:
              case 17:
                return ''
              default:
                return ','
            }
          }),
          (e.prototype.findItemAtOffset = function(e, t, r) {
            for (var n = R(t.getText(), !0), i = e.items, o = i.length - 1; o >= 0; o--) {
              var a = i[o]
              if (r > a.offset + a.length) {
                n.setPosition(a.offset + a.length)
                var s = n.scan()
                return 5 === s && r >= n.getTokenOffset() + n.getTokenLength() ? o + 1 : o
              }
              if (r >= a.offset) return o
            }
            return 0
          }),
          (e.prototype.isInComment = function(e, t, r) {
            var n = R(e.getText(), !1)
            n.setPosition(t)
            var i = n.scan()
            while (17 !== i && n.getTokenOffset() + n.getTokenLength() < r) i = n.scan()
            return (12 === i || 13 === i) && n.getTokenOffset() <= r
          }),
          (e.prototype.fromMarkup = function(e) {
            if (e && this.doesSupportMarkdown()) return { kind: Z.Markdown, value: e }
          }),
          (e.prototype.doesSupportMarkdown = function() {
            if (!B(this.supportsMarkdown)) {
              var e = this.clientCapabilities.textDocument && this.clientCapabilities.textDocument.completion
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !== e.completionItem.documentationFormat.indexOf(Z.Markdown)
            }
            return this.supportsMarkdown
          }),
          (e.prototype.doesSupportsCommitCharacters = function() {
            if (!B(this.supportsCommitCharacters)) {
              var e = this.clientCapabilities.textDocument && this.clientCapabilities.textDocument.completion
              this.supportsCommitCharacters = e && e.completionItem && !!e.completionItem.commitCharactersSupport
            }
            return this.supportsCommitCharacters
          })
      })(),
        (function() {
          function e(e, t, r) {
            void 0 === t && (t = []), (this.schemaService = e), (this.contributions = t), (this.promise = r || Promise)
          }
          e.prototype.doHover = function(e, t, r) {
            var n = e.offsetAt(t),
              i = r.getNodeFromOffset(n)
            if (!i || (('object' === i.type || 'array' === i.type) && n > i.offset + 1 && n < i.offset + i.length - 1))
              return this.promise.resolve(null)
            var o = i
            if ('string' === i.type) {
              var a = i.parent
              if (a && 'property' === a.type && a.keyNode === i && ((i = a.valueNode), !i))
                return this.promise.resolve(null)
            }
            for (
              var s = y.create(e.positionAt(o.offset), e.positionAt(o.offset + o.length)),
                u = function(e) {
                  var t = { contents: e, range: s }
                  return t
                },
                c = Ke(i),
                l = this.contributions.length - 1;
              l >= 0;
              l--
            ) {
              var f = this.contributions[l],
                h = f.getInfoContribution(e.uri, c)
              if (h)
                return h.then(function(e) {
                  return u(e)
                })
            }
            return this.schemaService.getSchemaForResource(e.uri, r).then(function(e) {
              if (e && i) {
                var t = r.getMatchingSchemas(e.schema, i.offset),
                  n = void 0,
                  o = void 0,
                  a = void 0,
                  s = void 0
                t.every(function(e) {
                  if (
                    e.node === i &&
                    !e.inverted &&
                    e.schema &&
                    ((n = n || e.schema.title),
                    (o = o || e.schema.markdownDescription || tt(e.schema.description)),
                    e.schema.enum)
                  ) {
                    var t = e.schema.enum.indexOf(Be(i))
                    e.schema.markdownEnumDescriptions
                      ? (a = e.schema.markdownEnumDescriptions[t])
                      : e.schema.enumDescriptions && (a = tt(e.schema.enumDescriptions[t])),
                      a && ((s = e.schema.enum[t]), 'string' !== typeof s && (s = JSON.stringify(s)))
                  }
                  return !0
                })
                var c = ''
                return (
                  n && (c = tt(n)),
                  o && (c.length > 0 && (c += '\n\n'), (c += o)),
                  a && (c.length > 0 && (c += '\n\n'), (c += '`' + rt(s) + '`: ' + a)),
                  u([c])
                )
              }
              return null
            })
          }
        })()
      function tt(e) {
        if (e) {
          var t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3')
          return t.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
        }
      }
      function rt(e) {
        return -1 !== e.indexOf('`') ? '`` ' + e + ' ``' : e
      }
      var nt = r('e0W4'),
        it = Fe(),
        ot = (function() {
          function e(e, t) {
            ;(this.patternRegExps = []), (this.isInclude = [])
            try {
              for (var r = 0, n = e; r < n.length; r++) {
                var i = n[r],
                  o = '!' !== i[0]
                o || (i = i.substring(1)), this.patternRegExps.push(new RegExp(Xe(i) + '$')), this.isInclude.push(o)
              }
              this.uris = t
            } catch (a) {
              ;(this.patternRegExps.length = 0), (this.isInclude.length = 0), (this.uris = [])
            }
          }
          return (
            (e.prototype.matchesPattern = function(e) {
              for (var t = !1, r = 0; r < this.patternRegExps.length; r++) {
                var n = this.patternRegExps[r]
                n.test(e) && (t = this.isInclude[r])
              }
              return t
            }),
            (e.prototype.getURIs = function() {
              return this.uris
            }),
            e
          )
        })(),
        at = (function() {
          function e(e, t, r) {
            ;(this.service = e),
              (this.url = t),
              (this.dependencies = {}),
              r && (this.unresolvedSchema = this.service.promise.resolve(new st(r)))
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
        st = (function() {
          function e(e, t) {
            void 0 === t && (t = []), (this.schema = e), (this.errors = t)
          }
          return e
        })(),
        ut = (function() {
          function e(e, t) {
            void 0 === t && (t = []), (this.schema = e), (this.errors = t)
          }
          return (
            (e.prototype.getSection = function(e) {
              var t = this.getSectionRecursive(e, this.schema)
              if (t) return De(t)
            }),
            (e.prototype.getSectionRecursive = function(e, t) {
              if (!t || 'boolean' === typeof t || 0 === e.length) return t
              var r = e.shift()
              if (t.properties && (t.properties[r], 1)) return this.getSectionRecursive(e, t.properties[r])
              if (t.patternProperties)
                for (var n = 0, i = Object.keys(t.patternProperties); n < i.length; n++) {
                  var o = i[n],
                    a = new RegExp(o)
                  if (a.test(r)) return this.getSectionRecursive(e, t.patternProperties[o])
                }
              else {
                if ('object' === typeof t.additionalProperties)
                  return this.getSectionRecursive(e, t.additionalProperties)
                if (r.match('[0-9]+'))
                  if (Array.isArray(t.items)) {
                    var s = parseInt(r, 10)
                    if (!isNaN(s) && t.items[s]) return this.getSectionRecursive(e, t.items[s])
                  } else if (t.items) return this.getSectionRecursive(e, t.items)
              }
            }),
            e
          )
        })(),
        ct =
          ((function() {
            function e(e, t, r) {
              ;(this.contextService = t),
                (this.requestService = e),
                (this.promiseConstructor = r || Promise),
                (this.callOnDispose = []),
                (this.contributionSchemas = {}),
                (this.contributionAssociations = []),
                (this.schemasById = {}),
                (this.filePatternAssociations = []),
                (this.registeredSchemasIds = {})
            }
            ;(e.prototype.getRegisteredSchemaIds = function(e) {
              return Object.keys(this.registeredSchemasIds).filter(function(t) {
                var r = nt['a'].parse(t).scheme
                return 'schemaservice' !== r && (!e || e(r))
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
                  r = !1
                e = lt(e)
                var n = [e],
                  i = Object.keys(this.schemasById).map(function(e) {
                    return t.schemasById[e]
                  })
                while (n.length)
                  for (var o = n.pop(), a = 0; a < i.length; a++) {
                    var s = i[a]
                    s &&
                      (s.url === o || s.dependencies[o]) &&
                      (s.url !== o && n.push(s.url), s.clearSchema(), (i[a] = void 0), (r = !0))
                  }
                return r
              }),
              (e.prototype.setSchemaContributions = function(e) {
                if (e.schemas) {
                  var t = e.schemas
                  for (var r in t) {
                    var n = lt(r)
                    this.contributionSchemas[n] = this.addSchemaHandle(n, t[r])
                  }
                }
                if (Array.isArray(e.schemaAssociations))
                  for (var i = e.schemaAssociations, o = 0, a = i; o < a.length; o++) {
                    var s = a[o],
                      u = s.uris.map(lt),
                      c = this.addFilePatternAssociation(s.pattern, u)
                    this.contributionAssociations.push(c)
                  }
              }),
              (e.prototype.addSchemaHandle = function(e, t) {
                var r = new at(this, e, t)
                return (this.schemasById[e] = r), r
              }),
              (e.prototype.getOrAddSchemaHandle = function(e, t) {
                return this.schemasById[e] || this.addSchemaHandle(e, t)
              }),
              (e.prototype.addFilePatternAssociation = function(e, t) {
                var r = new ot(e, t)
                return this.filePatternAssociations.push(r), r
              }),
              (e.prototype.registerExternalSchema = function(e, t, r) {
                var n = lt(e)
                return (
                  (this.registeredSchemasIds[n] = !0),
                  (this.cachedSchemaForResource = void 0),
                  t && this.addFilePatternAssociation(t, [e]),
                  r ? this.addSchemaHandle(n, r) : this.getOrAddSchemaHandle(n)
                )
              }),
              (e.prototype.clearExternalSchemas = function() {
                for (var e in ((this.schemasById = {}),
                (this.filePatternAssociations = []),
                (this.registeredSchemasIds = {}),
                (this.cachedSchemaForResource = void 0),
                this.contributionSchemas))
                  (this.schemasById[e] = this.contributionSchemas[e]), (this.registeredSchemasIds[e] = !0)
                for (var t = 0, r = this.contributionAssociations; t < r.length; t++) {
                  var n = r[t]
                  this.filePatternAssociations.push(n)
                }
              }),
              (e.prototype.getResolvedSchema = function(e) {
                var t = lt(e),
                  r = this.schemasById[t]
                return r ? r.getResolvedSchema() : this.promise.resolve(void 0)
              }),
              (e.prototype.loadSchema = function(e) {
                if (!this.requestService) {
                  var t = it(
                    'json.schema.norequestservice',
                    "Unable to load schema from '{0}'. No schema request service available",
                    ft(e),
                  )
                  return this.promise.resolve(new st({}, [t]))
                }
                return this.requestService(e).then(
                  function(t) {
                    if (!t) {
                      var r = it('json.schema.nocontent', "Unable to load schema from '{0}': No content.", ft(e))
                      return new st({}, [r])
                    }
                    var n = {},
                      i = []
                    n = $(t, i)
                    var o = i.length
                      ? [
                          it(
                            'json.schema.invalidFormat',
                            "Unable to parse content from '{0}': Parse error at offset {1}.",
                            ft(e),
                            i[0].offset,
                          ),
                        ]
                      : []
                    return new st(n, o)
                  },
                  function(t) {
                    var r = t.toString(),
                      n = t.toString().split('Error: ')
                    return (
                      n.length > 1 && (r = n[1]),
                      Ze(r, '.') && (r = r.substr(0, r.length - 1)),
                      new st({}, [it('json.schema.nocontent', "Unable to load schema from '{0}': {1}.", ft(e), r)])
                    )
                  },
                )
              }),
              (e.prototype.resolveSchemaContent = function(e, t, r) {
                var n = this,
                  i = e.errors.slice(0),
                  o = e.schema
                if (o.$schema) {
                  var a = lt(o.$schema)
                  if ('http://json-schema.org/draft-03/schema' === a)
                    return this.promise.resolve(
                      new ut({}, [it('json.schema.draft03.notsupported', 'Draft-03 schemas are not supported.')]),
                    )
                  'https://json-schema.org/draft/2019-09/schema' === a &&
                    i.push(
                      it('json.schema.draft201909.notsupported', 'Draft 2019-09 schemas are not yet fully supported.'),
                    )
                }
                var s = this.contextService,
                  u = function(e, t) {
                    if (!t) return e
                    var r = e
                    return (
                      '/' === t[0] && (t = t.substr(1)),
                      t.split('/').some(function(e) {
                        return (r = r[e]), !r
                      }),
                      r
                    )
                  },
                  c = function(e, t, r, n) {
                    var o = n ? decodeURIComponent(n) : void 0,
                      a = u(t, o)
                    if (a) for (var s in a) a.hasOwnProperty(s) && !e.hasOwnProperty(s) && (e[s] = a[s])
                    else i.push(it('json.schema.invalidref', "$ref '{0}' in '{1}' can not be resolved.", o, r))
                  },
                  l = function(e, t, r, o, a) {
                    s && !/^\w+:\/\/.*/.test(t) && (t = s.resolveRelativePath(t, o)), (t = lt(t))
                    var u = n.getOrAddSchemaHandle(t)
                    return u.getUnresolvedSchema().then(function(n) {
                      if (((a[t] = !0), n.errors.length)) {
                        var o = r ? t + '#' + r : t
                        i.push(
                          it('json.schema.problemloadingref', "Problems loading reference '{0}': {1}", o, n.errors[0]),
                        )
                      }
                      return c(e, n.schema, t, r), f(e, n.schema, t, u.dependencies)
                    })
                  },
                  f = function(e, t, r, i) {
                    if (!e || 'object' !== typeof e) return Promise.resolve(null)
                    var o = [e],
                      a = [],
                      s = [],
                      u = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                        for (var r = 0, n = e; r < n.length; r++) {
                          var i = n[r]
                          'object' === typeof i && o.push(i)
                        }
                      },
                      f = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                        for (var r = 0, n = e; r < n.length; r++) {
                          var i = n[r]
                          if ('object' === typeof i)
                            for (var a in i) {
                              var s = a,
                                u = i[s]
                              'object' === typeof u && o.push(u)
                            }
                        }
                      },
                      h = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                        for (var r = 0, n = e; r < n.length; r++) {
                          var i = n[r]
                          if (Array.isArray(i))
                            for (var a = 0, s = i; a < s.length; a++) {
                              var u = s[a]
                              'object' === typeof u && o.push(u)
                            }
                        }
                      },
                      p = function(e) {
                        var n = []
                        while (e.$ref) {
                          var o = e.$ref,
                            a = o.split('#', 2)
                          if ((delete e.$ref, a[0].length > 0)) return void s.push(l(e, a[0], a[1], r, i))
                          ;-1 === n.indexOf(o) && (c(e, t, r, a[1]), n.push(o))
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
                          f(e.definitions, e.properties, e.patternProperties, e.dependencies),
                          h(e.anyOf, e.allOf, e.oneOf, e.items)
                      }
                    while (o.length) {
                      var d = o.pop()
                      a.indexOf(d) >= 0 || (a.push(d), p(d))
                    }
                    return n.promise.all(s)
                  }
                return f(o, o, t, r).then(function(e) {
                  return new ut(o, i)
                })
              }),
              (e.prototype.getSchemaForResource = function(e, t) {
                if (t && t.root && 'object' === t.root.type) {
                  var r = t.root.properties.filter(function(e) {
                    return '$schema' === e.keyNode.value && e.valueNode && 'string' === e.valueNode.type
                  })
                  if (r.length > 0) {
                    var n = r[0].valueNode
                    if (n && 'string' === n.type) {
                      var i = Be(n)
                      if (
                        (i && Ge(i, '.') && this.contextService && (i = this.contextService.resolveRelativePath(i, e)),
                        i)
                      ) {
                        var o = lt(i)
                        return this.getOrAddSchemaHandle(o).getResolvedSchema()
                      }
                    }
                  }
                }
                if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === e)
                  return this.cachedSchemaForResource.resolvedSchema
                for (var a = Object.create(null), s = [], u = 0, c = this.filePatternAssociations; u < c.length; u++) {
                  var l = c[u]
                  if (l.matchesPattern(e))
                    for (var f = 0, h = l.getURIs(); f < h.length; f++) {
                      var p = h[f]
                      a[p] || (s.push(p), (a[p] = !0))
                    }
                }
                var d =
                  s.length > 0 ? this.createCombinedSchema(e, s).getResolvedSchema() : this.promise.resolve(void 0)
                return (this.cachedSchemaForResource = { resource: e, resolvedSchema: d }), d
              }),
              (e.prototype.createCombinedSchema = function(e, t) {
                if (1 === t.length) return this.getOrAddSchemaHandle(t[0])
                var r = 'schemaservice://combinedSchema/' + encodeURIComponent(e),
                  n = {
                    allOf: t.map(function(e) {
                      return { $ref: e }
                    }),
                  }
                return this.addSchemaHandle(r, n)
              }),
              (e.prototype.getMatchingSchemas = function(e, t, r) {
                if (r) {
                  var n = r.id || 'schemaservice://untitled/matchingSchemas/' + ct++
                  return this.resolveSchemaContent(new st(r), n, {}).then(function(e) {
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
              })
          })(),
          0)
      function lt(e) {
        try {
          return nt['a'].parse(e).toString()
        } catch (t) {
          return e
        }
      }
      function ft(e) {
        try {
          var t = nt['a'].parse(e)
          if ('file' === t.scheme) return t.fsPath
        } catch (r) {}
        return e
      }
      var ht = Fe(),
        pt =
          ((function() {
            function e(e, t) {
              ;(this.jsonSchemaService = e), (this.promise = t), (this.validationEnabled = !0)
            }
            ;(e.prototype.configure = function(e) {
              e && ((this.validationEnabled = e.validate), (this.commentSeverity = e.allowComments ? void 0 : T.Error))
            }),
              (e.prototype.doValidation = function(e, t, r, n) {
                var i = this
                if (!this.validationEnabled) return this.promise.resolve([])
                var o = [],
                  a = {},
                  s = function(e) {
                    var t = e.range.start.line + ' ' + e.range.start.character + ' ' + e.message
                    a[t] || ((a[t] = !0), o.push(e))
                  },
                  u = function(n) {
                    var a = r ? gt(r.trailingCommas) : T.Error,
                      u = r ? gt(r.comments) : i.commentSeverity
                    if (n) {
                      if (n.errors.length && t.root) {
                        var c = t.root,
                          l = 'object' === c.type ? c.properties[0] : void 0
                        if (l && '$schema' === l.keyNode.value) {
                          var f = l.valueNode || l,
                            h = y.create(e.positionAt(f.offset), e.positionAt(f.offset + f.length))
                          s(O.create(h, n.errors[0], T.Warning, Ae.SchemaResolveError))
                        } else {
                          h = y.create(e.positionAt(c.offset), e.positionAt(c.offset + 1))
                          s(O.create(h, n.errors[0], T.Warning, Ae.SchemaResolveError))
                        }
                      } else {
                        var p = t.validate(e, n.schema)
                        p && p.forEach(s)
                      }
                      dt(n.schema) && (u = void 0), mt(n.schema) && (a = void 0)
                    }
                    for (var d = 0, m = t.syntaxErrors; d < m.length; d++) {
                      var g = m[d]
                      if (g.code === Ae.TrailingComma) {
                        if ('number' !== typeof a) continue
                        g.severity = a
                      }
                      s(g)
                    }
                    if ('number' === typeof u) {
                      var v = ht('InvalidCommentToken', 'Comments are not permitted in JSON.')
                      t.comments.forEach(function(e) {
                        s(O.create(e, v, u, Ae.CommentNotPermitted))
                      })
                    }
                    return o
                  }
                if (n) {
                  var c = n.id || 'schemaservice://untitled/' + pt++
                  return this.jsonSchemaService.resolveSchemaContent(new st(n), c, {}).then(function(e) {
                    return u(e)
                  })
                }
                return this.jsonSchemaService.getSchemaForResource(e.uri, t).then(function(e) {
                  return u(e)
                })
              })
          })(),
          0)
      function dt(e) {
        if (e && 'object' === typeof e) {
          if (K(e.allowComments)) return e.allowComments
          if (e.allOf)
            for (var t = 0, r = e.allOf; t < r.length; t++) {
              var n = r[t],
                i = dt(n)
              if (K(i)) return i
            }
        }
      }
      function mt(e) {
        if (e && 'object' === typeof e) {
          if (K(e.allowTrailingCommas)) return e.allowTrailingCommas
          var t = e
          if (K(t['allowsTrailingCommas'])) return t['allowsTrailingCommas']
          if (e.allOf)
            for (var r = 0, n = e.allOf; r < n.length; r++) {
              var i = n[r],
                o = mt(i)
              if (K(o)) return o
            }
        }
      }
      function gt(e) {
        switch (e) {
          case 'error':
            return T.Error
          case 'warning':
            return T.Warning
          case 'ignore':
            return
        }
      }
      var vt = 48,
        yt = 57,
        bt = 65,
        xt = 97,
        St = 102
      function kt(e) {
        return e < vt ? 0 : e <= yt ? e - vt : (e < xt && (e += xt - bt), e >= xt && e <= St ? e - xt + 10 : 0)
      }
      function wt(e) {
        if ('#' === e[0])
          switch (e.length) {
            case 4:
              return {
                red: (17 * kt(e.charCodeAt(1))) / 255,
                green: (17 * kt(e.charCodeAt(2))) / 255,
                blue: (17 * kt(e.charCodeAt(3))) / 255,
                alpha: 1,
              }
            case 5:
              return {
                red: (17 * kt(e.charCodeAt(1))) / 255,
                green: (17 * kt(e.charCodeAt(2))) / 255,
                blue: (17 * kt(e.charCodeAt(3))) / 255,
                alpha: (17 * kt(e.charCodeAt(4))) / 255,
              }
            case 7:
              return {
                red: (16 * kt(e.charCodeAt(1)) + kt(e.charCodeAt(2))) / 255,
                green: (16 * kt(e.charCodeAt(3)) + kt(e.charCodeAt(4))) / 255,
                blue: (16 * kt(e.charCodeAt(5)) + kt(e.charCodeAt(6))) / 255,
                alpha: 1,
              }
            case 9:
              return {
                red: (16 * kt(e.charCodeAt(1)) + kt(e.charCodeAt(2))) / 255,
                green: (16 * kt(e.charCodeAt(3)) + kt(e.charCodeAt(4))) / 255,
                blue: (16 * kt(e.charCodeAt(5)) + kt(e.charCodeAt(6))) / 255,
                alpha: (16 * kt(e.charCodeAt(7)) + kt(e.charCodeAt(8))) / 255,
              }
          }
      }
      ;(function() {
        function e(e) {
          this.schemaService = e
        }
        ;(e.prototype.findDocumentSymbols = function(e, t, r) {
          var n = this
          void 0 === r && (r = { resultLimit: Number.MAX_VALUE })
          var i = t.root
          if (!i) return []
          var o = r.resultLimit || Number.MAX_VALUE,
            a = e.uri
          if (
            ('vscode://defaultsettings/keybindings.json' === a || Ze(a.toLowerCase(), '/user/keybindings.json')) &&
            'array' === i.type
          ) {
            for (var s = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u]
              if ('object' === l.type)
                for (var f = 0, h = l.properties; f < h.length; f++) {
                  var p = h[f]
                  if ('key' === p.keyNode.value && p.valueNode) {
                    var d = b.create(e.uri, Ct(e, l))
                    if ((s.push({ name: Be(p.valueNode), kind: ce.Function, location: d }), o--, o <= 0))
                      return r && r.onResultLimitExceeded && r.onResultLimitExceeded(a), s
                  }
                }
            }
            return s
          }
          var m = [{ node: i, containerName: '' }],
            g = 0,
            v = !1,
            y = [],
            x = function(t, r) {
              'array' === t.type
                ? t.items.forEach(function(e) {
                    e && m.push({ node: e, containerName: r })
                  })
                : 'object' === t.type &&
                  t.properties.forEach(function(t) {
                    var i = t.valueNode
                    if (i)
                      if (o > 0) {
                        o--
                        var a = b.create(e.uri, Ct(e, t)),
                          s = r ? r + '.' + t.keyNode.value : t.keyNode.value
                        y.push({
                          name: n.getKeyLabel(t),
                          kind: n.getSymbolKind(i.type),
                          location: a,
                          containerName: r,
                        }),
                          m.push({ node: i, containerName: s })
                      } else v = !0
                  })
            }
          while (g < m.length) {
            var S = m[g++]
            x(S.node, S.containerName)
          }
          return v && r && r.onResultLimitExceeded && r.onResultLimitExceeded(a), y
        }),
          (e.prototype.findDocumentSymbols2 = function(e, t, r) {
            var n = this
            void 0 === r && (r = { resultLimit: Number.MAX_VALUE })
            var i = t.root
            if (!i) return []
            var o = r.resultLimit || Number.MAX_VALUE,
              a = e.uri
            if (
              ('vscode://defaultsettings/keybindings.json' === a || Ze(a.toLowerCase(), '/user/keybindings.json')) &&
              'array' === i.type
            ) {
              for (var s = [], u = 0, c = i.items; u < c.length; u++) {
                var l = c[u]
                if ('object' === l.type)
                  for (var f = 0, h = l.properties; f < h.length; f++) {
                    var p = h[f]
                    if ('key' === p.keyNode.value && p.valueNode) {
                      var d = Ct(e, l),
                        m = Ct(e, p.keyNode)
                      if (
                        (s.push({ name: Be(p.valueNode), kind: ce.Function, range: d, selectionRange: m }), o--, o <= 0)
                      )
                        return r && r.onResultLimitExceeded && r.onResultLimitExceeded(a), s
                    }
                  }
              }
              return s
            }
            var g = [],
              v = [{ node: i, result: g }],
              y = 0,
              b = !1,
              x = function(t, r) {
                'array' === t.type
                  ? t.items.forEach(function(t, i) {
                      if (t)
                        if (o > 0) {
                          o--
                          var a = Ct(e, t),
                            s = a,
                            u = String(i),
                            c = { name: u, kind: n.getSymbolKind(t.type), range: a, selectionRange: s, children: [] }
                          r.push(c), v.push({ result: c.children, node: t })
                        } else b = !0
                    })
                  : 'object' === t.type &&
                    t.properties.forEach(function(t) {
                      var i = t.valueNode
                      if (i)
                        if (o > 0) {
                          o--
                          var a = Ct(e, t),
                            s = Ct(e, t.keyNode),
                            u = {
                              name: n.getKeyLabel(t),
                              kind: n.getSymbolKind(i.type),
                              range: a,
                              selectionRange: s,
                              children: [],
                            }
                          r.push(u), v.push({ result: u.children, node: i })
                        } else b = !0
                    })
              }
            while (y < v.length) {
              var S = v[y++]
              x(S.node, S.result)
            }
            return b && r && r.onResultLimitExceeded && r.onResultLimitExceeded(a), g
          }),
          (e.prototype.getSymbolKind = function(e) {
            switch (e) {
              case 'object':
                return ce.Module
              case 'string':
                return ce.String
              case 'number':
                return ce.Number
              case 'array':
                return ce.Array
              case 'boolean':
                return ce.Boolean
              default:
                return ce.Variable
            }
          }),
          (e.prototype.getKeyLabel = function(e) {
            var t = e.keyNode.value
            return t && (t = t.replace(/[\n]/g, '\u21b5')), t && t.trim() ? t : '"' + t + '"'
          }),
          (e.prototype.findDocumentColors = function(e, t, r) {
            return this.schemaService.getSchemaForResource(e.uri, t).then(function(n) {
              var i = []
              if (n)
                for (
                  var o = r && 'number' === typeof r.resultLimit ? r.resultLimit : Number.MAX_VALUE,
                    a = t.getMatchingSchemas(n.schema),
                    s = {},
                    u = 0,
                    c = a;
                  u < c.length;
                  u++
                ) {
                  var l = c[u]
                  if (
                    !l.inverted &&
                    l.schema &&
                    ('color' === l.schema.format || 'color-hex' === l.schema.format) &&
                    l.node &&
                    'string' === l.node.type
                  ) {
                    var f = String(l.node.offset)
                    if (!s[f]) {
                      var h = wt(Be(l.node))
                      if (h) {
                        var p = Ct(e, l.node)
                        i.push({ color: h, range: p })
                      }
                      if (((s[f] = !0), o--, o <= 0))
                        return r && r.onResultLimitExceeded && r.onResultLimitExceeded(e.uri), i
                    }
                  }
                }
              return i
            })
          }),
          (e.prototype.getColorPresentations = function(e, t, r, n) {
            var i,
              o = [],
              a = Math.round(255 * r.red),
              s = Math.round(255 * r.green),
              u = Math.round(255 * r.blue)
            function c(e) {
              var t = e.toString(16)
              return 2 !== t.length ? '0' + t : t
            }
            return (
              (i = 1 === r.alpha ? '#' + c(a) + c(s) + c(u) : '#' + c(a) + c(s) + c(u) + c(Math.round(255 * r.alpha))),
              o.push({ label: i, textEdit: M.replace(n, JSON.stringify(i)) }),
              o
            )
          })
      })()
      function Ct(e, t) {
        return y.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length))
      }
      var At = Fe(),
        It = {
          schemaAssociations: [],
          schemas: {
            'http://json-schema.org/schema#': { $ref: 'http://json-schema.org/draft-07/schema#' },
            'http://json-schema.org/draft-04/schema#': {
              title: At('schema.json', 'Describes a JSON file using a schema. See json-schema.org for more info.'),
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
              title: At('schema.json', 'Describes a JSON file using a schema. See json-schema.org for more info.'),
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
        Tt = {
          id: At('schema.json.id', 'A unique identifier for the schema.'),
          $schema: At('schema.json.$schema', 'The schema to verify this document against.'),
          title: At('schema.json.title', 'A descriptive title of the element.'),
          description: At(
            'schema.json.description',
            'A long description of the element. Used in hover menus and suggestions.',
          ),
          default: At('schema.json.default', 'A default value. Used by suggestions.'),
          multipleOf: At(
            'schema.json.multipleOf',
            'A number that should cleanly divide the current value (i.e. have no remainder).',
          ),
          maximum: At('schema.json.maximum', 'The maximum numerical value, inclusive by default.'),
          exclusiveMaximum: At('schema.json.exclusiveMaximum', 'Makes the maximum property exclusive.'),
          minimum: At('schema.json.minimum', 'The minimum numerical value, inclusive by default.'),
          exclusiveMinimum: At('schema.json.exclusiveMininum', 'Makes the minimum property exclusive.'),
          maxLength: At('schema.json.maxLength', 'The maximum length of a string.'),
          minLength: At('schema.json.minLength', 'The minimum length of a string.'),
          pattern: At(
            'schema.json.pattern',
            'A regular expression to match the string against. It is not implicitly anchored.',
          ),
          additionalItems: At(
            'schema.json.additionalItems',
            'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.',
          ),
          items: At(
            'schema.json.items',
            'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.',
          ),
          maxItems: At('schema.json.maxItems', 'The maximum number of items that can be inside an array. Inclusive.'),
          minItems: At('schema.json.minItems', 'The minimum number of items that can be inside an array. Inclusive.'),
          uniqueItems: At(
            'schema.json.uniqueItems',
            'If all of the items in the array must be unique. Defaults to false.',
          ),
          maxProperties: At(
            'schema.json.maxProperties',
            'The maximum number of properties an object can have. Inclusive.',
          ),
          minProperties: At(
            'schema.json.minProperties',
            'The minimum number of properties an object can have. Inclusive.',
          ),
          required: At(
            'schema.json.required',
            'An array of strings that lists the names of all properties required on this object.',
          ),
          additionalProperties: At(
            'schema.json.additionalProperties',
            "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.",
          ),
          definitions: At(
            'schema.json.definitions',
            'Not used for validation. Place subschemas here that you wish to reference inline with $ref.',
          ),
          properties: At('schema.json.properties', 'A map of property names to schemas for each property.'),
          patternProperties: At(
            'schema.json.patternProperties',
            'A map of regular expressions on property names to schemas for matching properties.',
          ),
          dependencies: At(
            'schema.json.dependencies',
            'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.',
          ),
          enum: At('schema.json.enum', 'The set of literal values that are valid.'),
          type: At(
            'schema.json.type',
            'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.',
          ),
          format: At('schema.json.format', 'Describes the format expected for the value.'),
          allOf: At('schema.json.allOf', 'An array of schemas, all of which must match.'),
          anyOf: At('schema.json.anyOf', 'An array of schemas, where at least one must match.'),
          oneOf: At('schema.json.oneOf', 'An array of schemas, exactly one of which must match.'),
          not: At('schema.json.not', 'A schema which must not match.'),
          $id: At('schema.json.$id', 'A unique identifier for the schema.'),
          $ref: At('schema.json.$ref', 'Reference a definition hosted on any location.'),
          $comment: At('schema.json.$comment', 'Comments from schema authors to readers or maintainers of the schema.'),
          readOnly: At(
            'schema.json.readOnly',
            'Indicates that the value of the instance is managed exclusively by the owning authority.',
          ),
          examples: At(
            'schema.json.examples',
            'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.',
          ),
          contains: At(
            'schema.json.contains',
            'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.',
          ),
          propertyNames: At(
            'schema.json.propertyNames',
            'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.',
          ),
          const: At(
            'schema.json.const',
            'An instance validates successfully against this keyword if its value is equal to the value of the keyword.',
          ),
          contentMediaType: At('schema.json.contentMediaType', 'Describes the media type of a string property.'),
          contentEncoding: At('schema.json.contentEncoding', 'Describes the content encoding of a string property.'),
          if: At(
            'schema.json.if',
            'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.',
          ),
          then: At('schema.json.then', 'The "if" subschema is used for validation when the "if" subschema succeeds.'),
          else: At('schema.json.else', 'The "else" subschema is used for validation when the "if" subschema fails.'),
        }
      for (var Et in It.schemas) {
        var Ot = It.schemas[Et]
        for (var jt in Ot.properties) {
          var Mt = Ot.properties[jt]
          'boolean' === typeof Mt && (Mt = Ot.properties[jt] = {})
          var Pt = Tt[jt]
          Pt ? (Mt['description'] = Pt) : console.log(jt + ": localize('schema.json." + jt + '\', "")')
        }
      }
      var _t = (function() {
        function e(e, t, r) {
          var n = this
          ;(this._languageId = e), (this._worker = t), (this._disposables = []), (this._listener = Object.create(null))
          var o = function(e) {
              var t,
                r = e.getModeId()
              r === n._languageId &&
                ((n._listener[e.uri.toString()] = e.onDidChangeContent(function() {
                  clearTimeout(t),
                    (t = setTimeout(function() {
                      return n._doValidate(e.uri, r)
                    }, 500))
                })),
                n._doValidate(e.uri, r))
            },
            a = function(e) {
              i['editor'].setModelMarkers(e, n._languageId, [])
              var t = e.uri.toString(),
                r = n._listener[t]
              r && (r.dispose(), delete n._listener[t])
            }
          this._disposables.push(i['editor'].onDidCreateModel(o)),
            this._disposables.push(
              i['editor'].onWillDisposeModel(function(e) {
                a(e), n._resetSchema(e.uri)
              }),
            ),
            this._disposables.push(
              i['editor'].onDidChangeModelLanguage(function(e) {
                a(e.model), o(e.model), n._resetSchema(e.model.uri)
              }),
            ),
            this._disposables.push(
              r.onDidChange(function(e) {
                i['editor'].getModels().forEach(function(e) {
                  e.getModeId() === n._languageId && (a(e), o(e))
                })
              }),
            ),
            this._disposables.push({
              dispose: function() {
                for (var e in (i['editor'].getModels().forEach(a), n._listener)) n._listener[e].dispose()
              },
            }),
            i['editor'].getModels().forEach(o)
        }
        return (
          (e.prototype.dispose = function() {
            this._disposables.forEach(function(e) {
              return e && e.dispose()
            }),
              (this._disposables = [])
          }),
          (e.prototype._resetSchema = function(e) {
            this._worker().then(function(t) {
              t.resetSchema(e.toString())
            })
          }),
          (e.prototype._doValidate = function(e, t) {
            this._worker(e)
              .then(function(r) {
                return r.doValidation(e.toString()).then(function(r) {
                  var n = r.map(function(t) {
                      return Vt(e, t)
                    }),
                    o = i['editor'].getModel(e)
                  o && o.getModeId() === t && i['editor'].setModelMarkers(o, t, n)
                })
              })
              .then(void 0, function(e) {
                console.error(e)
              })
          }),
          e
        )
      })()
      function Ft(e) {
        switch (e) {
          case T.Error:
            return i['MarkerSeverity'].Error
          case T.Warning:
            return i['MarkerSeverity'].Warning
          case T.Information:
            return i['MarkerSeverity'].Info
          case T.Hint:
            return i['MarkerSeverity'].Hint
          default:
            return i['MarkerSeverity'].Info
        }
      }
      function Vt(e, t) {
        var r = 'number' === typeof t.code ? String(t.code) : t.code
        return {
          severity: Ft(t.severity),
          startLineNumber: t.range.start.line + 1,
          startColumn: t.range.start.character + 1,
          endLineNumber: t.range.end.line + 1,
          endColumn: t.range.end.character + 1,
          message: t.message,
          code: r,
          source: t.source,
        }
      }
      function Nt(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 }
      }
      function Rt(e) {
        if (e)
          return {
            start: { line: e.startLineNumber - 1, character: e.startColumn - 1 },
            end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
          }
      }
      function $t(e) {
        if (e) return new i['Range'](e.start.line + 1, e.start.character + 1, e.end.line + 1, e.end.character + 1)
      }
      function Lt(e) {
        return 'undefined' !== typeof e.insert && 'undefined' !== typeof e.replace
      }
      function Dt(e) {
        var t = i['languages'].CompletionItemKind
        switch (e) {
          case Q.Text:
            return t.Text
          case Q.Method:
            return t.Method
          case Q.Function:
            return t.Function
          case Q.Constructor:
            return t.Constructor
          case Q.Field:
            return t.Field
          case Q.Variable:
            return t.Variable
          case Q.Class:
            return t.Class
          case Q.Interface:
            return t.Interface
          case Q.Module:
            return t.Module
          case Q.Property:
            return t.Property
          case Q.Unit:
            return t.Unit
          case Q.Value:
            return t.Value
          case Q.Enum:
            return t.Enum
          case Q.Keyword:
            return t.Keyword
          case Q.Snippet:
            return t.Snippet
          case Q.Color:
            return t.Color
          case Q.File:
            return t.File
          case Q.Reference:
            return t.Reference
        }
        return t.Property
      }
      function Wt(e) {
        if (e) return { range: $t(e.range), text: e.newText }
      }
      var Ut = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          Object.defineProperty(e.prototype, 'triggerCharacters', {
            get: function() {
              return [' ', ':']
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function(e, t, r, n) {
            var o = e.uri
            return this._worker(o)
              .then(function(e) {
                return e.doComplete(o.toString(), Nt(t))
              })
              .then(function(r) {
                if (r) {
                  var n = e.getWordUntilPosition(t),
                    o = new i['Range'](t.lineNumber, n.startColumn, t.lineNumber, n.endColumn),
                    a = r.items.map(function(e) {
                      var t = {
                        label: e.label,
                        insertText: e.insertText || e.label,
                        sortText: e.sortText,
                        filterText: e.filterText,
                        documentation: e.documentation,
                        detail: e.detail,
                        range: o,
                        kind: Dt(e.kind),
                      }
                      return (
                        e.textEdit &&
                          (Lt(e.textEdit)
                            ? (t.range = { insert: $t(e.textEdit.insert), replace: $t(e.textEdit.replace) })
                            : (t.range = $t(e.textEdit.range)),
                          (t.insertText = e.textEdit.newText)),
                        e.additionalTextEdits && (t.additionalTextEdits = e.additionalTextEdits.map(Wt)),
                        e.insertTextFormat === Y.Snippet &&
                          (t.insertTextRules = i['languages'].CompletionItemInsertTextRule.InsertAsSnippet),
                        t
                      )
                    })
                  return { isIncomplete: r.isIncomplete, suggestions: a }
                }
              })
          }),
          e
        )
      })()
      function qt(e) {
        return e && 'object' === typeof e && 'string' === typeof e.kind
      }
      function Bt(e) {
        return 'string' === typeof e
          ? { value: e }
          : qt(e)
          ? 'plaintext' === e.kind
            ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&') }
            : { value: e.value }
          : { value: '```' + e.language + '\n' + e.value + '\n```\n' }
      }
      function Kt(e) {
        if (e) return Array.isArray(e) ? e.map(Bt) : [Bt(e)]
      }
      var Jt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideHover = function(e, t, r) {
            var n = e.uri
            return this._worker(n)
              .then(function(e) {
                return e.doHover(n.toString(), Nt(t))
              })
              .then(function(e) {
                if (e) return { range: $t(e.range), contents: Kt(e.contents) }
              })
          }),
          e
        )
      })()
      function Ht(e) {
        var t = i['languages'].SymbolKind
        switch (e) {
          case ce.File:
            return t.Array
          case ce.Module:
            return t.Module
          case ce.Namespace:
            return t.Namespace
          case ce.Package:
            return t.Package
          case ce.Class:
            return t.Class
          case ce.Method:
            return t.Method
          case ce.Property:
            return t.Property
          case ce.Field:
            return t.Field
          case ce.Constructor:
            return t.Constructor
          case ce.Enum:
            return t.Enum
          case ce.Interface:
            return t.Interface
          case ce.Function:
            return t.Function
          case ce.Variable:
            return t.Variable
          case ce.Constant:
            return t.Constant
          case ce.String:
            return t.String
          case ce.Number:
            return t.Number
          case ce.Boolean:
            return t.Boolean
          case ce.Array:
            return t.Array
        }
        return t.Function
      }
      var zt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideDocumentSymbols = function(e, t) {
            var r = e.uri
            return this._worker(r)
              .then(function(e) {
                return e.findDocumentSymbols(r.toString())
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return {
                      name: e.name,
                      detail: '',
                      containerName: e.containerName,
                      kind: Ht(e.kind),
                      range: $t(e.location.range),
                      selectionRange: $t(e.location.range),
                      tags: [],
                    }
                  })
              })
          }),
          e
        )
      })()
      function Gt(e) {
        return { tabSize: e.tabSize, insertSpaces: e.insertSpaces }
      }
      var Zt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentFormattingEdits = function(e, t, r) {
              var n = e.uri
              return this._worker(n).then(function(e) {
                return e.format(n.toString(), null, Gt(t)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(Wt)
                })
              })
            }),
            e
          )
        })(),
        Xt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentRangeFormattingEdits = function(e, t, r, n) {
              var i = e.uri
              return this._worker(i).then(function(e) {
                return e.format(i.toString(), Rt(t), Gt(r)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(Wt)
                })
              })
            }),
            e
          )
        })(),
        Qt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentColors = function(e, t) {
              var r = e.uri
              return this._worker(r)
                .then(function(e) {
                  return e.findDocumentColors(r.toString())
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      return { color: e.color, range: $t(e.range) }
                    })
                })
            }),
            (e.prototype.provideColorPresentations = function(e, t, r) {
              var n = e.uri
              return this._worker(n)
                .then(function(e) {
                  return e.getColorPresentations(n.toString(), t.color, Rt(t.range))
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      var t = { label: e.label }
                      return (
                        e.textEdit && (t.textEdit = Wt(e.textEdit)),
                        e.additionalTextEdits && (t.additionalTextEdits = e.additionalTextEdits.map(Wt)),
                        t
                      )
                    })
                })
            }),
            e
          )
        })(),
        Yt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideFoldingRanges = function(e, t, r) {
              var n = e.uri
              return this._worker(n)
                .then(function(e) {
                  return e.getFoldingRanges(n.toString(), t)
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      var t = { start: e.startLine + 1, end: e.endLine + 1 }
                      return 'undefined' !== typeof e.kind && (t.kind = er(e.kind)), t
                    })
                })
            }),
            e
          )
        })()
      function er(e) {
        switch (e) {
          case C.Comment:
            return i['languages'].FoldingRangeKind.Comment
          case C.Imports:
            return i['languages'].FoldingRangeKind.Imports
          case C.Region:
            return i['languages'].FoldingRangeKind.Region
        }
      }
      var tr = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideSelectionRanges = function(e, t, r) {
            var n = e.uri
            return this._worker(n)
              .then(function(e) {
                return e.getSelectionRanges(n.toString(), t.map(Nt))
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    var t = []
                    while (e) t.push({ range: $t(e.range) }), (e = e.parent)
                    return t
                  })
              })
          }),
          e
        )
      })()
      function rr(e) {
        return {
          getInitialState: function() {
            return new mr(null, null, !1, null)
          },
          tokenize: function(t, r, n, i) {
            return gr(e, t, r, n, i)
          },
        }
      }
      var nr = 'delimiter.bracket.json',
        ir = 'delimiter.array.json',
        or = 'delimiter.colon.json',
        ar = 'delimiter.comma.json',
        sr = 'keyword.json',
        ur = 'keyword.json',
        cr = 'string.value.json',
        lr = 'number.json',
        fr = 'string.key.json',
        hr = 'comment.block.json',
        pr = 'comment.line.json',
        dr = (function() {
          function e(e, t) {
            ;(this.parent = e), (this.type = t)
          }
          return (
            (e.pop = function(e) {
              return e ? e.parent : null
            }),
            (e.push = function(t, r) {
              return new e(t, r)
            }),
            (e.equals = function(e, t) {
              if (!e && !t) return !0
              if (!e || !t) return !1
              while (e && t) {
                if (e === t) return !0
                if (e.type !== t.type) return !1
                ;(e = e.parent), (t = t.parent)
              }
              return !0
            }),
            e
          )
        })(),
        mr = (function() {
          function e(e, t, r, n) {
            ;(this._state = e), (this.scanError = t), (this.lastWasColon = r), (this.parents = n)
          }
          return (
            (e.prototype.clone = function() {
              return new e(this._state, this.scanError, this.lastWasColon, this.parents)
            }),
            (e.prototype.equals = function(t) {
              return (
                t === this ||
                (!!(t && t instanceof e) &&
                  this.scanError === t.scanError &&
                  this.lastWasColon === t.lastWasColon &&
                  dr.equals(this.parents, t.parents))
              )
            }),
            (e.prototype.getStateData = function() {
              return this._state
            }),
            (e.prototype.setStateData = function(e) {
              this._state = e
            }),
            e
          )
        })()
      function gr(e, t, r, n, i) {
        void 0 === n && (n = 0)
        var o = 0,
          a = !1
        switch (r.scanError) {
          case 2:
            ;(t = '"' + t), (o = 1)
            break
          case 1:
            ;(t = '/*' + t), (o = 2)
            break
        }
        var s = R(t),
          u = r.lastWasColon,
          c = r.parents,
          l = { tokens: [], endState: r.clone() }
        while (1) {
          var f = n + s.getPosition(),
            h = '',
            p = s.scan()
          if (17 === p) break
          if (f === n + s.getPosition())
            throw new Error('Scanner did not advance, next 3 characters are: ' + t.substr(s.getPosition(), 3))
          switch ((a && (f -= o), (a = o > 0), p)) {
            case 1:
              ;(c = dr.push(c, 0)), (h = nr), (u = !1)
              break
            case 2:
              ;(c = dr.pop(c)), (h = nr), (u = !1)
              break
            case 3:
              ;(c = dr.push(c, 1)), (h = ir), (u = !1)
              break
            case 4:
              ;(c = dr.pop(c)), (h = ir), (u = !1)
              break
            case 6:
              ;(h = or), (u = !0)
              break
            case 5:
              ;(h = ar), (u = !1)
              break
            case 8:
            case 9:
              ;(h = sr), (u = !1)
              break
            case 7:
              ;(h = ur), (u = !1)
              break
            case 10:
              var d = c ? c.type : 0,
                m = 1 === d
              ;(h = u || m ? cr : fr), (u = !1)
              break
            case 11:
              ;(h = lr), (u = !1)
              break
          }
          if (e)
            switch (p) {
              case 12:
                h = pr
                break
              case 13:
                h = hr
                break
            }
          ;(l.endState = new mr(r.getStateData(), s.getTokenError(), u, c)), l.tokens.push({ startIndex: f, scopes: h })
        }
        return l
      }
      function vr(e) {
        var t = [],
          r = [],
          n = new a(e)
        t.push(n)
        var o = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return n.getLanguageServiceWorker.apply(n, e)
        }
        function s() {
          var t = e.languageId,
            n = e.modeConfiguration
          br(r),
            n.documentFormattingEdits && r.push(i['languages'].registerDocumentFormattingEditProvider(t, new Zt(o))),
            n.documentRangeFormattingEdits &&
              r.push(i['languages'].registerDocumentRangeFormattingEditProvider(t, new Xt(o))),
            n.completionItems && r.push(i['languages'].registerCompletionItemProvider(t, new Ut(o))),
            n.hovers && r.push(i['languages'].registerHoverProvider(t, new Jt(o))),
            n.documentSymbols && r.push(i['languages'].registerDocumentSymbolProvider(t, new zt(o))),
            n.tokens && r.push(i['languages'].setTokensProvider(t, rr(!0))),
            n.colors && r.push(i['languages'].registerColorProvider(t, new Qt(o))),
            n.foldingRanges && r.push(i['languages'].registerFoldingRangeProvider(t, new Yt(o))),
            n.diagnostics && r.push(new _t(t, o, e)),
            n.selectionRanges && r.push(i['languages'].registerSelectionRangeProvider(t, new tr(o)))
        }
        s(), t.push(i['languages'].setLanguageConfiguration(e.languageId, xr))
        var u = e.modeConfiguration
        return (
          e.onDidChange(function(e) {
            e.modeConfiguration !== u && ((u = e.modeConfiguration), s())
          }),
          t.push(yr(r)),
          yr(t)
        )
      }
      function yr(e) {
        return {
          dispose: function() {
            return br(e)
          },
        }
      }
      function br(e) {
        while (e.length) e.pop().dispose()
      }
      var xr = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: { lineComment: '//', blockComment: ['/*', '*/'] },
        brackets: [
          ['{', '}'],
          ['[', ']'],
        ],
        autoClosingPairs: [
          { open: '{', close: '}', notIn: ['string'] },
          { open: '[', close: ']', notIn: ['string'] },
          { open: '"', close: '"', notIn: ['string'] },
        ],
      }
    },
  },
])
