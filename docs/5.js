;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '54FV': function(e, t, n) {
      'use strict'
      ;(function(e) {
        n.d(t, 'a', function() {
          return g
        })
        var i,
          r,
          a = (function() {
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
              function i() {
                this.constructor = t
              }
              e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()))
            }
          })()
        if ('object' === typeof e) r = 'win32' === e.platform
        else if ('object' === typeof navigator) {
          var o = navigator.userAgent
          r = o.indexOf('Windows') >= 0
        }
        var s = /^\w[\w\d+.-]*$/,
          l = /^\//,
          c = /^\/\//
        function h(e, t) {
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
              if (!l.test(e.path))
                throw new Error(
                  '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                )
            } else if (c.test(e.path))
              throw new Error(
                '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
              )
        }
        function d(e, t) {
          return e || t ? e : 'file'
        }
        function u(e, t) {
          switch (e) {
            case 'https':
            case 'http':
            case 'file':
              t ? t[0] !== m && (t = m + t) : (t = m)
              break
          }
          return t
        }
        var p = '',
          m = '/',
          f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
          g = (function() {
            function e(e, t, n, i, r, a) {
              void 0 === a && (a = !1),
                'object' === typeof e
                  ? ((this.scheme = e.scheme || p),
                    (this.authority = e.authority || p),
                    (this.path = e.path || p),
                    (this.query = e.query || p),
                    (this.fragment = e.fragment || p))
                  : ((this.scheme = d(e, a)),
                    (this.authority = t || p),
                    (this.path = u(this.scheme, n || p)),
                    (this.query = i || p),
                    (this.fragment = r || p),
                    h(this, a))
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
                  return T(this, !1)
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.with = function(e) {
                if (!e) return this
                var t = e.scheme,
                  n = e.authority,
                  i = e.path,
                  r = e.query,
                  a = e.fragment
                return (
                  void 0 === t ? (t = this.scheme) : null === t && (t = p),
                  void 0 === n ? (n = this.authority) : null === n && (n = p),
                  void 0 === i ? (i = this.path) : null === i && (i = p),
                  void 0 === r ? (r = this.query) : null === r && (r = p),
                  void 0 === a ? (a = this.fragment) : null === a && (a = p),
                  t === this.scheme &&
                  n === this.authority &&
                  i === this.path &&
                  r === this.query &&
                  a === this.fragment
                    ? this
                    : new _(t, n, i, r, a)
                )
              }),
              (e.parse = function(e, t) {
                void 0 === t && (t = !1)
                var n = f.exec(e)
                return n
                  ? new _(n[2] || p, M(n[4] || p), M(n[5] || p), M(n[7] || p), M(n[9] || p), t)
                  : new _(p, p, p, p, p)
              }),
              (e.file = function(e) {
                var t = p
                if ((r && (e = e.replace(/\\/g, m)), e[0] === m && e[1] === m)) {
                  var n = e.indexOf(m, 2)
                  ;-1 === n ? ((t = e.substring(2)), (e = m)) : ((t = e.substring(2, n)), (e = e.substring(n) || m))
                }
                return new _('file', t, e, p, p)
              }),
              (e.from = function(e) {
                return new _(e.scheme, e.authority, e.path, e.query, e.fragment)
              }),
              (e.prototype.toString = function(e) {
                return void 0 === e && (e = !1), k(this, e)
              }),
              (e.prototype.toJSON = function() {
                return this
              }),
              (e.revive = function(t) {
                if (t) {
                  if (t instanceof e) return t
                  var n = new _(t)
                  return (n._formatted = t.external), (n._fsPath = t._sep === b ? t.fsPath : null), n
                }
                return t
              }),
              e
            )
          })(),
          b = r ? 1 : void 0,
          _ = (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this
              return (t._formatted = null), (t._fsPath = null), t
            }
            return (
              a(t, e),
              Object.defineProperty(t.prototype, 'fsPath', {
                get: function() {
                  return this._fsPath || (this._fsPath = T(this, !1)), this._fsPath
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.toString = function(e) {
                return (
                  void 0 === e && (e = !1),
                  e ? k(this, !0) : (this._formatted || (this._formatted = k(this, !1)), this._formatted)
                )
              }),
              (t.prototype.toJSON = function() {
                var e = { $mid: 1 }
                return (
                  this._fsPath && ((e.fsPath = this._fsPath), (e._sep = b)),
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
          w =
            ((i = {}),
            (i[58] = '%3A'),
            (i[47] = '%2F'),
            (i[63] = '%3F'),
            (i[35] = '%23'),
            (i[91] = '%5B'),
            (i[93] = '%5D'),
            (i[64] = '%40'),
            (i[33] = '%21'),
            (i[36] = '%24'),
            (i[38] = '%26'),
            (i[39] = '%27'),
            (i[40] = '%28'),
            (i[41] = '%29'),
            (i[42] = '%2A'),
            (i[43] = '%2B'),
            (i[44] = '%2C'),
            (i[59] = '%3B'),
            (i[61] = '%3D'),
            (i[32] = '%20'),
            i)
        function v(e, t) {
          for (var n = void 0, i = -1, r = 0; r < e.length; r++) {
            var a = e.charCodeAt(r)
            if (
              (a >= 97 && a <= 122) ||
              (a >= 65 && a <= 90) ||
              (a >= 48 && a <= 57) ||
              45 === a ||
              46 === a ||
              95 === a ||
              126 === a ||
              (t && 47 === a)
            )
              -1 !== i && ((n += encodeURIComponent(e.substring(i, r))), (i = -1)), void 0 !== n && (n += e.charAt(r))
            else {
              void 0 === n && (n = e.substr(0, r))
              var o = w[a]
              void 0 !== o
                ? (-1 !== i && ((n += encodeURIComponent(e.substring(i, r))), (i = -1)), (n += o))
                : -1 === i && (i = r)
            }
          }
          return -1 !== i && (n += encodeURIComponent(e.substring(i))), void 0 !== n ? n : e
        }
        function y(e) {
          for (var t = void 0, n = 0; n < e.length; n++) {
            var i = e.charCodeAt(n)
            35 === i || 63 === i ? (void 0 === t && (t = e.substr(0, n)), (t += w[i])) : void 0 !== t && (t += e[n])
          }
          return void 0 !== t ? t : e
        }
        function T(e, t) {
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
            r && (n = n.replace(/\//g, '\\')),
            n
          )
        }
        function k(e, t) {
          var n = t ? y : v,
            i = '',
            r = e.scheme,
            a = e.authority,
            o = e.path,
            s = e.query,
            l = e.fragment
          if ((r && ((i += r), (i += ':')), (a || 'file' === r) && ((i += m), (i += m)), a)) {
            var c = a.indexOf('@')
            if (-1 !== c) {
              var h = a.substr(0, c)
              ;(a = a.substr(c + 1)),
                (c = h.indexOf(':')),
                -1 === c ? (i += n(h, !1)) : ((i += n(h.substr(0, c), !1)), (i += ':'), (i += n(h.substr(c + 1), !1))),
                (i += '@')
            }
            ;(a = a.toLowerCase()),
              (c = a.indexOf(':')),
              -1 === c ? (i += n(a, !1)) : ((i += n(a.substr(0, c), !1)), (i += a.substr(c)))
          }
          if (o) {
            if (o.length >= 3 && 47 === o.charCodeAt(0) && 58 === o.charCodeAt(2)) {
              var d = o.charCodeAt(1)
              d >= 65 && d <= 90 && (o = '/' + String.fromCharCode(d + 32) + ':' + o.substr(3))
            } else if (o.length >= 2 && 58 === o.charCodeAt(1)) {
              d = o.charCodeAt(0)
              d >= 65 && d <= 90 && (o = String.fromCharCode(d + 32) + ':' + o.substr(2))
            }
            i += n(o, !0)
          }
          return s && ((i += '?'), (i += n(s, !1))), l && ((i += '#'), (i += t ? l : v(l, !1))), i
        }
        function S(e) {
          try {
            return decodeURIComponent(e)
          } catch (i) {
            return e.length > 3 ? e.substr(0, 3) + S(e.substr(3)) : e
          }
        }
        var x = /(%[0-9A-Za-z][0-9A-Za-z])+/g
        function M(e) {
          return e.match(x)
            ? e.replace(x, function(e) {
                return S(e)
              })
            : e
        }
      }.call(this, n('BBhR')))
    },
    PSJG: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'setupMode1', function() {
          return Jt
        }),
        n.d(t, 'setupMode', function() {
          return Yt
        })
      var i,
        r,
        a,
        o,
        s,
        l,
        c,
        h,
        d,
        u,
        p,
        m,
        f,
        g,
        b,
        _,
        w,
        v,
        y,
        T,
        k,
        S = n('Kqug'),
        x = 12e4,
        M = (function() {
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
                e > x && this._stopWorker()
              }
            }),
            (e.prototype._getClient = function() {
              return (
                (this._lastUsedTime = Date.now()),
                this._client ||
                  ((this._worker = S['editor'].createWebWorker({
                    moduleId: 'vs/language/html/htmlWorker',
                    createData: { languageSettings: this._defaults.options, languageId: this._defaults.languageId },
                    label: this._defaults.languageId,
                  })),
                  (this._client = this._worker.getProxy())),
                this._client
              )
            }),
            (e.prototype.getLanguageServiceWorker = function() {
              for (var e, t = this, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
              return this._getClient()
                .then(function(t) {
                  e = t
                })
                .then(function(e) {
                  return t._worker.withSyncedResources(n)
                })
                .then(function(t) {
                  return e
                })
            }),
            e
          )
        })()
      function L(e, t) {
        var n
        return (
          (n =
            0 === t.length
              ? e
              : e.replace(/\{(\d+)\}/g, function(e, n) {
                  var i = n[0]
                  return 'undefined' !== typeof t[i] ? t[i] : e
                })),
          n
        )
      }
      function E(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i]
        return L(t, n)
      }
      function A(e) {
        return E
      }
      ;(function(e) {
        function t(e, t) {
          return { line: e, character: t }
        }
        function n(e) {
          var t = e
          return oe.objectLiteral(t) && oe.number(t.line) && oe.number(t.character)
        }
        ;(e.create = t), (e.is = n)
      })(i || (i = {})),
        (function(e) {
          function t(e, t, n, r) {
            if (oe.number(e) && oe.number(t) && oe.number(n) && oe.number(r))
              return { start: i.create(e, t), end: i.create(n, r) }
            if (i.is(e) && i.is(t)) return { start: e, end: t }
            throw new Error('Range#create called with invalid arguments[' + e + ', ' + t + ', ' + n + ', ' + r + ']')
          }
          function n(e) {
            var t = e
            return oe.objectLiteral(t) && i.is(t.start) && i.is(t.end)
          }
          ;(e.create = t), (e.is = n)
        })(r || (r = {})),
        (function(e) {
          function t(e, t) {
            return { uri: e, range: t }
          }
          function n(e) {
            var t = e
            return oe.defined(t) && r.is(t.range) && (oe.string(t.uri) || oe.undefined(t.uri))
          }
          ;(e.create = t), (e.is = n)
        })(a || (a = {})),
        (function(e) {
          function t(e, t, n, i) {
            return { targetUri: e, targetRange: t, targetSelectionRange: n, originSelectionRange: i }
          }
          function n(e) {
            var t = e
            return (
              oe.defined(t) &&
              r.is(t.targetRange) &&
              oe.string(t.targetUri) &&
              (r.is(t.targetSelectionRange) || oe.undefined(t.targetSelectionRange)) &&
              (r.is(t.originSelectionRange) || oe.undefined(t.originSelectionRange))
            )
          }
          ;(e.create = t), (e.is = n)
        })(o || (o = {})),
        (function(e) {
          function t(e, t, n, i) {
            return { red: e, green: t, blue: n, alpha: i }
          }
          function n(e) {
            var t = e
            return oe.number(t.red) && oe.number(t.green) && oe.number(t.blue) && oe.number(t.alpha)
          }
          ;(e.create = t), (e.is = n)
        })(s || (s = {})),
        (function(e) {
          function t(e, t) {
            return { range: e, color: t }
          }
          function n(e) {
            var t = e
            return r.is(t.range) && s.is(t.color)
          }
          ;(e.create = t), (e.is = n)
        })(l || (l = {})),
        (function(e) {
          function t(e, t, n) {
            return { label: e, textEdit: t, additionalTextEdits: n }
          }
          function n(e) {
            var t = e
            return (
              oe.string(t.label) &&
              (oe.undefined(t.textEdit) || _.is(t)) &&
              (oe.undefined(t.additionalTextEdits) || oe.typedArray(t.additionalTextEdits, _.is))
            )
          }
          ;(e.create = t), (e.is = n)
        })(c || (c = {})),
        (function(e) {
          ;(e['Comment'] = 'comment'), (e['Imports'] = 'imports'), (e['Region'] = 'region')
        })(h || (h = {})),
        (function(e) {
          function t(e, t, n, i, r) {
            var a = { startLine: e, endLine: t }
            return (
              oe.defined(n) && (a.startCharacter = n),
              oe.defined(i) && (a.endCharacter = i),
              oe.defined(r) && (a.kind = r),
              a
            )
          }
          function n(e) {
            var t = e
            return (
              oe.number(t.startLine) &&
              oe.number(t.startLine) &&
              (oe.undefined(t.startCharacter) || oe.number(t.startCharacter)) &&
              (oe.undefined(t.endCharacter) || oe.number(t.endCharacter)) &&
              (oe.undefined(t.kind) || oe.string(t.kind))
            )
          }
          ;(e.create = t), (e.is = n)
        })(d || (d = {})),
        (function(e) {
          function t(e, t) {
            return { location: e, message: t }
          }
          function n(e) {
            var t = e
            return oe.defined(t) && a.is(t.location) && oe.string(t.message)
          }
          ;(e.create = t), (e.is = n)
        })(u || (u = {})),
        (function(e) {
          ;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
        })(p || (p = {})),
        (function(e) {
          ;(e.Unnecessary = 1), (e.Deprecated = 2)
        })(m || (m = {})),
        (function(e) {
          function t(e) {
            var t = e
            return void 0 !== t && null !== t && (oe.number(t.value) || oe.string(t.value)) && oe.string(t.target)
          }
          e.is = t
        })(f || (f = {})),
        (function(e) {
          function t(e, t, n, i, r, a) {
            var o = { range: e, message: t }
            return (
              oe.defined(n) && (o.severity = n),
              oe.defined(i) && (o.code = i),
              oe.defined(r) && (o.source = r),
              oe.defined(a) && (o.relatedInformation = a),
              o
            )
          }
          function n(e) {
            var t = e
            return (
              oe.defined(t) &&
              r.is(t.range) &&
              oe.string(t.message) &&
              (oe.number(t.severity) || oe.undefined(t.severity)) &&
              (oe.number(t.code) || oe.string(t.code) || oe.undefined(t.code)) &&
              (oe.string(t.source) || oe.undefined(t.source)) &&
              (oe.undefined(t.relatedInformation) || oe.typedArray(t.relatedInformation, u.is))
            )
          }
          ;(e.create = t), (e.is = n)
        })(g || (g = {})),
        (function(e) {
          function t(e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i]
            var r = { title: e, command: t }
            return oe.defined(n) && n.length > 0 && (r.arguments = n), r
          }
          function n(e) {
            var t = e
            return oe.defined(t) && oe.string(t.title) && oe.string(t.command)
          }
          ;(e.create = t), (e.is = n)
        })(b || (b = {})),
        (function(e) {
          function t(e, t) {
            return { range: e, newText: t }
          }
          function n(e, t) {
            return { range: { start: e, end: e }, newText: t }
          }
          function i(e) {
            return { range: e, newText: '' }
          }
          function a(e) {
            var t = e
            return oe.objectLiteral(t) && oe.string(t.newText) && r.is(t.range)
          }
          ;(e.replace = t), (e.insert = n), (e.del = i), (e.is = a)
        })(_ || (_ = {})),
        (function(e) {
          function t(e, t) {
            return { textDocument: e, edits: t }
          }
          function n(e) {
            var t = e
            return oe.defined(t) && z.is(t.textDocument) && Array.isArray(t.edits)
          }
          ;(e.create = t), (e.is = n)
        })(w || (w = {})),
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
              oe.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite || oe.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists || oe.boolean(t.options.ignoreIfExists))))
            )
          }
          ;(e.create = t), (e.is = n)
        })(v || (v = {})),
        (function(e) {
          function t(e, t, n) {
            var i = { kind: 'rename', oldUri: e, newUri: t }
            return void 0 === n || (void 0 === n.overwrite && void 0 === n.ignoreIfExists) || (i.options = n), i
          }
          function n(e) {
            var t = e
            return (
              t &&
              'rename' === t.kind &&
              oe.string(t.oldUri) &&
              oe.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite || oe.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists || oe.boolean(t.options.ignoreIfExists))))
            )
          }
          ;(e.create = t), (e.is = n)
        })(y || (y = {})),
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
              oe.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive || oe.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists || oe.boolean(t.options.ignoreIfNotExists))))
            )
          }
          ;(e.create = t), (e.is = n)
        })(T || (T = {})),
        (function(e) {
          function t(e) {
            var t = e
            return (
              t &&
              (void 0 !== t.changes || void 0 !== t.documentChanges) &&
              (void 0 === t.documentChanges ||
                t.documentChanges.every(function(e) {
                  return oe.string(e.kind) ? v.is(e) || y.is(e) || T.is(e) : w.is(e)
                }))
            )
          }
          e.is = t
        })(k || (k = {}))
      var R,
        z,
        I,
        H,
        C,
        U,
        W,
        D,
        P,
        O,
        q,
        N,
        F,
        j,
        B,
        G,
        V,
        K,
        J,
        Y,
        X,
        $,
        Q,
        Z,
        ee,
        te,
        ne,
        ie,
        re = (function() {
          function e(e) {
            this.edits = e
          }
          return (
            (e.prototype.insert = function(e, t) {
              this.edits.push(_.insert(e, t))
            }),
            (e.prototype.replace = function(e, t) {
              this.edits.push(_.replace(e, t))
            }),
            (e.prototype.delete = function(e) {
              this.edits.push(_.del(e))
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
                    if (w.is(e)) {
                      var n = new re(e.edits)
                      t._textEditChanges[e.textDocument.uri] = n
                    }
                  })
                : e.changes &&
                  Object.keys(e.changes).forEach(function(n) {
                    var i = new re(e.changes[n])
                    t._textEditChanges[n] = i
                  }))
        }
        Object.defineProperty(e.prototype, 'edit', {
          get: function() {
            return void 0 === this._workspaceEdit ? { documentChanges: [] } : this._workspaceEdit
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
                n = this._textEditChanges[t.uri]
              if (!n) {
                var i = [],
                  r = { textDocument: t, edits: i }
                this._workspaceEdit.documentChanges.push(r), (n = new re(i)), (this._textEditChanges[t.uri] = n)
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
              i = []
              ;(this._workspaceEdit.changes[e] = i), (n = new re(i)), (this._textEditChanges[e] = n)
            }
            return n
          }),
          (e.prototype.createFile = function(e, t) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(v.create(e, t))
          }),
          (e.prototype.renameFile = function(e, t, n) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(y.create(e, t, n))
          }),
          (e.prototype.deleteFile = function(e, t) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(T.create(e, t))
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
          return oe.defined(t) && oe.string(t.uri)
        }
        ;(e.create = t), (e.is = n)
      })(R || (R = {})),
        (function(e) {
          function t(e, t) {
            return { uri: e, version: t }
          }
          function n(e) {
            var t = e
            return oe.defined(t) && oe.string(t.uri) && (null === t.version || oe.number(t.version))
          }
          ;(e.create = t), (e.is = n)
        })(z || (z = {})),
        (function(e) {
          function t(e, t, n, i) {
            return { uri: e, languageId: t, version: n, text: i }
          }
          function n(e) {
            var t = e
            return (
              oe.defined(t) && oe.string(t.uri) && oe.string(t.languageId) && oe.number(t.version) && oe.string(t.text)
            )
          }
          ;(e.create = t), (e.is = n)
        })(I || (I = {})),
        (function(e) {
          ;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
        })(H || (H = {})),
        (function(e) {
          function t(t) {
            var n = t
            return n === e.PlainText || n === e.Markdown
          }
          e.is = t
        })(H || (H = {})),
        (function(e) {
          function t(e) {
            var t = e
            return oe.objectLiteral(e) && H.is(t.kind) && oe.string(t.value)
          }
          e.is = t
        })(C || (C = {})),
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
        })(U || (U = {})),
        (function(e) {
          ;(e.PlainText = 1), (e.Snippet = 2)
        })(W || (W = {})),
        (function(e) {
          e.Deprecated = 1
        })(D || (D = {})),
        (function(e) {
          function t(e, t, n) {
            return { newText: e, insert: t, replace: n }
          }
          function n(e) {
            var t = e
            return t && oe.string(t.newText) && r.is(t.insert) && r.is(t.replace)
          }
          ;(e.create = t), (e.is = n)
        })(P || (P = {})),
        (function(e) {
          function t(e) {
            return { label: e }
          }
          e.create = t
        })(O || (O = {})),
        (function(e) {
          function t(e, t) {
            return { items: e || [], isIncomplete: !!t }
          }
          e.create = t
        })(q || (q = {})),
        (function(e) {
          function t(e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
          }
          function n(e) {
            var t = e
            return oe.string(t) || (oe.objectLiteral(t) && oe.string(t.language) && oe.string(t.value))
          }
          ;(e.fromPlainText = t), (e.is = n)
        })(N || (N = {})),
        (function(e) {
          function t(e) {
            var t = e
            return (
              !!t &&
              oe.objectLiteral(t) &&
              (C.is(t.contents) || N.is(t.contents) || oe.typedArray(t.contents, N.is)) &&
              (void 0 === e.range || r.is(e.range))
            )
          }
          e.is = t
        })(F || (F = {})),
        (function(e) {
          function t(e, t) {
            return t ? { label: e, documentation: t } : { label: e }
          }
          e.create = t
        })(j || (j = {})),
        (function(e) {
          function t(e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i]
            var r = { label: e }
            return oe.defined(t) && (r.documentation = t), oe.defined(n) ? (r.parameters = n) : (r.parameters = []), r
          }
          e.create = t
        })(B || (B = {})),
        (function(e) {
          ;(e.Text = 1), (e.Read = 2), (e.Write = 3)
        })(G || (G = {})),
        (function(e) {
          function t(e, t) {
            var n = { range: e }
            return oe.number(t) && (n.kind = t), n
          }
          e.create = t
        })(V || (V = {})),
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
        })(K || (K = {})),
        (function(e) {
          e.Deprecated = 1
        })(J || (J = {})),
        (function(e) {
          function t(e, t, n, i, r) {
            var a = { name: e, kind: t, location: { uri: i, range: n } }
            return r && (a.containerName = r), a
          }
          e.create = t
        })(Y || (Y = {})),
        (function(e) {
          function t(e, t, n, i, r, a) {
            var o = { name: e, detail: t, kind: n, range: i, selectionRange: r }
            return void 0 !== a && (o.children = a), o
          }
          function n(e) {
            var t = e
            return (
              t &&
              oe.string(t.name) &&
              oe.number(t.kind) &&
              r.is(t.range) &&
              r.is(t.selectionRange) &&
              (void 0 === t.detail || oe.string(t.detail)) &&
              (void 0 === t.deprecated || oe.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children)) &&
              (void 0 === t.tags || Array.isArray(t.tags))
            )
          }
          ;(e.create = t), (e.is = n)
        })(X || (X = {})),
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
        })($ || ($ = {})),
        (function(e) {
          function t(e, t) {
            var n = { diagnostics: e }
            return void 0 !== t && null !== t && (n.only = t), n
          }
          function n(e) {
            var t = e
            return (
              oe.defined(t) &&
              oe.typedArray(t.diagnostics, g.is) &&
              (void 0 === t.only || oe.typedArray(t.only, oe.string))
            )
          }
          ;(e.create = t), (e.is = n)
        })(Q || (Q = {})),
        (function(e) {
          function t(e, t, n) {
            var i = { title: e }
            return b.is(t) ? (i.command = t) : (i.edit = t), void 0 !== n && (i.kind = n), i
          }
          function n(e) {
            var t = e
            return (
              t &&
              oe.string(t.title) &&
              (void 0 === t.diagnostics || oe.typedArray(t.diagnostics, g.is)) &&
              (void 0 === t.kind || oe.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || b.is(t.command)) &&
              (void 0 === t.isPreferred || oe.boolean(t.isPreferred)) &&
              (void 0 === t.edit || k.is(t.edit))
            )
          }
          ;(e.create = t), (e.is = n)
        })(Z || (Z = {})),
        (function(e) {
          function t(e, t) {
            var n = { range: e }
            return oe.defined(t) && (n.data = t), n
          }
          function n(e) {
            var t = e
            return oe.defined(t) && r.is(t.range) && (oe.undefined(t.command) || b.is(t.command))
          }
          ;(e.create = t), (e.is = n)
        })(ee || (ee = {})),
        (function(e) {
          function t(e, t) {
            return { tabSize: e, insertSpaces: t }
          }
          function n(e) {
            var t = e
            return oe.defined(t) && oe.number(t.tabSize) && oe.boolean(t.insertSpaces)
          }
          ;(e.create = t), (e.is = n)
        })(te || (te = {})),
        (function(e) {
          function t(e, t, n) {
            return { range: e, target: t, data: n }
          }
          function n(e) {
            var t = e
            return oe.defined(t) && r.is(t.range) && (oe.undefined(t.target) || oe.string(t.target))
          }
          ;(e.create = t), (e.is = n)
        })(ne || (ne = {})),
        (function(e) {
          function t(e, t) {
            return { range: e, parent: t }
          }
          function n(t) {
            var n = t
            return void 0 !== n && r.is(n.range) && (void 0 === n.parent || e.is(n.parent))
          }
          ;(e.create = t), (e.is = n)
        })(ie || (ie = {}))
      var ae
      ;(function(e) {
        function t(e, t, n, i) {
          return new se(e, t, n, i)
        }
        function n(e) {
          var t = e
          return !!(
            oe.defined(t) &&
            oe.string(t.uri) &&
            (oe.undefined(t.languageId) || oe.string(t.languageId)) &&
            oe.number(t.lineCount) &&
            oe.func(t.getText) &&
            oe.func(t.positionAt) &&
            oe.func(t.offsetAt)
          )
        }
        function i(e, t) {
          for (
            var n = e.getText(),
              i = r(t, function(e, t) {
                var n = e.range.start.line - t.range.start.line
                return 0 === n ? e.range.start.character - t.range.start.character : n
              }),
              a = n.length,
              o = i.length - 1;
            o >= 0;
            o--
          ) {
            var s = i[o],
              l = e.offsetAt(s.range.start),
              c = e.offsetAt(s.range.end)
            if (!(c <= a)) throw new Error('Overlapping edit')
            ;(n = n.substring(0, l) + s.newText + n.substring(c, n.length)), (a = l)
          }
          return n
        }
        function r(e, t) {
          if (e.length <= 1) return e
          var n = (e.length / 2) | 0,
            i = e.slice(0, n),
            a = e.slice(n)
          r(i, t), r(a, t)
          var o = 0,
            s = 0,
            l = 0
          while (o < i.length && s < a.length) {
            var c = t(i[o], a[s])
            e[l++] = c <= 0 ? i[o++] : a[s++]
          }
          while (o < i.length) e[l++] = i[o++]
          while (s < a.length) e[l++] = a[s++]
          return e
        }
        ;(e.create = t), (e.is = n), (e.applyEdits = i)
      })(ae || (ae = {}))
      var oe,
        se = (function() {
          function e(e, t, n, i) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = i),
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
                for (var e = [], t = this._content, n = !0, i = 0; i < t.length; i++) {
                  n && (e.push(i), (n = !1))
                  var r = t.charAt(i)
                  ;(n = '\r' === r || '\n' === r), '\r' === r && i + 1 < t.length && '\n' === t.charAt(i + 1) && i++
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
              if (0 === r) return i.create(0, e)
              while (n < r) {
                var a = Math.floor((n + r) / 2)
                t[a] > e ? (r = a) : (n = a + 1)
              }
              var o = n - 1
              return i.create(o, e - t[o])
            }),
            (e.prototype.offsetAt = function(e) {
              var t = this.getLineOffsets()
              if (e.line >= t.length) return this._content.length
              if (e.line < 0) return 0
              var n = t[e.line],
                i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
              return Math.max(Math.min(n + e.character, i), n)
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
        function i(e) {
          return 'undefined' === typeof e
        }
        function r(e) {
          return !0 === e || !1 === e
        }
        function a(e) {
          return '[object String]' === t.call(e)
        }
        function o(e) {
          return '[object Number]' === t.call(e)
        }
        function s(e) {
          return '[object Function]' === t.call(e)
        }
        function l(e) {
          return null !== e && 'object' === typeof e
        }
        function c(e, t) {
          return Array.isArray(e) && e.every(t)
        }
        ;(e.defined = n),
          (e.undefined = i),
          (e.boolean = r),
          (e.string = a),
          (e.number = o),
          (e.func = s),
          (e.objectLiteral = l),
          (e.typedArray = c)
      })(oe || (oe = {}))
      var le,
        ce,
        he,
        de,
        ue,
        pe = (function() {
          function e(e, t, n, i) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = i),
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
              for (var i = 0, r = t; i < r.length; i++) {
                var a = r[i]
                if (e.isIncremental(a)) {
                  var o = ge(a.range),
                    s = this.offsetAt(o.start),
                    l = this.offsetAt(o.end)
                  this._content =
                    this._content.substring(0, s) + a.text + this._content.substring(l, this._content.length)
                  var c = Math.max(o.start.line, 0),
                    h = Math.max(o.end.line, 0),
                    d = this._lineOffsets,
                    u = fe(a.text, !1, s)
                  if (h - c === u.length) for (var p = 0, m = u.length; p < m; p++) d[p + c + 1] = u[p]
                  else
                    u.length < 1e4
                      ? d.splice.apply(d, [c + 1, h - c].concat(u))
                      : (this._lineOffsets = d = d.slice(0, c + 1).concat(u, d.slice(h + 1)))
                  var f = a.text.length - (l - s)
                  if (0 !== f) for (p = c + 1 + u.length, m = d.length; p < m; p++) d[p] = d[p] + f
                } else {
                  if (!e.isFull(a)) throw new Error('Unknown change event received')
                  ;(this._content = a.text), (this._lineOffsets = void 0)
                }
              }
              this._version = n
            }),
            (e.prototype.getLineOffsets = function() {
              return void 0 === this._lineOffsets && (this._lineOffsets = fe(this._content, !0)), this._lineOffsets
            }),
            (e.prototype.positionAt = function(e) {
              e = Math.max(Math.min(e, this._content.length), 0)
              var t = this.getLineOffsets(),
                n = 0,
                i = t.length
              if (0 === i) return { line: 0, character: e }
              while (n < i) {
                var r = Math.floor((n + i) / 2)
                t[r] > e ? (i = r) : (n = r + 1)
              }
              var a = n - 1
              return { line: a, character: e - t[a] }
            }),
            (e.prototype.offsetAt = function(e) {
              var t = this.getLineOffsets()
              if (e.line >= t.length) return this._content.length
              if (e.line < 0) return 0
              var n = t[e.line],
                i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
              return Math.max(Math.min(n + e.character, i), n)
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
      function me(e, t) {
        if (e.length <= 1) return e
        var n = (e.length / 2) | 0,
          i = e.slice(0, n),
          r = e.slice(n)
        me(i, t), me(r, t)
        var a = 0,
          o = 0,
          s = 0
        while (a < i.length && o < r.length) {
          var l = t(i[a], r[o])
          e[s++] = l <= 0 ? i[a++] : r[o++]
        }
        while (a < i.length) e[s++] = i[a++]
        while (o < r.length) e[s++] = r[o++]
        return e
      }
      function fe(e, t, n) {
        void 0 === n && (n = 0)
        for (var i = t ? [n] : [], r = 0; r < e.length; r++) {
          var a = e.charCodeAt(r)
          ;(13 !== a && 10 !== a) ||
            (13 === a && r + 1 < e.length && 10 === e.charCodeAt(r + 1) && r++, i.push(n + r + 1))
        }
        return i
      }
      function ge(e) {
        var t = e.start,
          n = e.end
        return t.line > n.line || (t.line === n.line && t.character > n.character) ? { start: n, end: t } : e
      }
      function be(e) {
        var t = ge(e.range)
        return t !== e.range ? { newText: e.newText, range: t } : e
      }
      ;(function(e) {
        function t(e, t, n, i) {
          return new pe(e, t, n, i)
        }
        function n(e, t, n) {
          if (e instanceof pe) return e.update(t, n), e
          throw new Error('TextDocument.update: document must be created by TextDocument.create')
        }
        function i(e, t) {
          for (
            var n = e.getText(),
              i = me(t.map(be), function(e, t) {
                var n = e.range.start.line - t.range.start.line
                return 0 === n ? e.range.start.character - t.range.start.character : n
              }),
              r = 0,
              a = [],
              o = 0,
              s = i;
            o < s.length;
            o++
          ) {
            var l = s[o],
              c = e.offsetAt(l.range.start)
            if (c < r) throw new Error('Overlapping edit')
            c > r && a.push(n.substring(r, c)), l.newText.length && a.push(l.newText), (r = e.offsetAt(l.range.end))
          }
          return a.push(n.substr(r)), a.join('')
        }
        ;(e.create = t), (e.update = n), (e.applyEdits = i)
      })(le || (le = {})),
        (function(e) {
          ;(e[(e['StartCommentTag'] = 0)] = 'StartCommentTag'),
            (e[(e['Comment'] = 1)] = 'Comment'),
            (e[(e['EndCommentTag'] = 2)] = 'EndCommentTag'),
            (e[(e['StartTagOpen'] = 3)] = 'StartTagOpen'),
            (e[(e['StartTagClose'] = 4)] = 'StartTagClose'),
            (e[(e['StartTagSelfClose'] = 5)] = 'StartTagSelfClose'),
            (e[(e['StartTag'] = 6)] = 'StartTag'),
            (e[(e['EndTagOpen'] = 7)] = 'EndTagOpen'),
            (e[(e['EndTagClose'] = 8)] = 'EndTagClose'),
            (e[(e['EndTag'] = 9)] = 'EndTag'),
            (e[(e['DelimiterAssign'] = 10)] = 'DelimiterAssign'),
            (e[(e['AttributeName'] = 11)] = 'AttributeName'),
            (e[(e['AttributeValue'] = 12)] = 'AttributeValue'),
            (e[(e['StartDoctypeTag'] = 13)] = 'StartDoctypeTag'),
            (e[(e['Doctype'] = 14)] = 'Doctype'),
            (e[(e['EndDoctypeTag'] = 15)] = 'EndDoctypeTag'),
            (e[(e['Content'] = 16)] = 'Content'),
            (e[(e['Whitespace'] = 17)] = 'Whitespace'),
            (e[(e['Unknown'] = 18)] = 'Unknown'),
            (e[(e['Script'] = 19)] = 'Script'),
            (e[(e['Styles'] = 20)] = 'Styles'),
            (e[(e['EOS'] = 21)] = 'EOS')
        })(ce || (ce = {})),
        (function(e) {
          ;(e[(e['WithinContent'] = 0)] = 'WithinContent'),
            (e[(e['AfterOpeningStartTag'] = 1)] = 'AfterOpeningStartTag'),
            (e[(e['AfterOpeningEndTag'] = 2)] = 'AfterOpeningEndTag'),
            (e[(e['WithinDoctype'] = 3)] = 'WithinDoctype'),
            (e[(e['WithinTag'] = 4)] = 'WithinTag'),
            (e[(e['WithinEndTag'] = 5)] = 'WithinEndTag'),
            (e[(e['WithinComment'] = 6)] = 'WithinComment'),
            (e[(e['WithinScriptContent'] = 7)] = 'WithinScriptContent'),
            (e[(e['WithinStyleContent'] = 8)] = 'WithinStyleContent'),
            (e[(e['AfterAttributeName'] = 9)] = 'AfterAttributeName'),
            (e[(e['BeforeAttributeValue'] = 10)] = 'BeforeAttributeValue')
        })(he || (he = {})),
        (function(e) {
          e.LATEST = {
            textDocument: {
              completion: { completionItem: { documentationFormat: [H.Markdown, H.PlainText] } },
              hover: { contentFormat: [H.Markdown, H.PlainText] },
            },
          }
        })(de || (de = {})),
        (function(e) {
          ;(e[(e['Unknown'] = 0)] = 'Unknown'),
            (e[(e['File'] = 1)] = 'File'),
            (e[(e['Directory'] = 2)] = 'Directory'),
            (e[(e['SymbolicLink'] = 64)] = 'SymbolicLink')
        })(ue || (ue = {}))
      var _e = A(),
        we = (function() {
          function e(e, t) {
            ;(this.source = e), (this.len = e.length), (this.position = t)
          }
          return (
            (e.prototype.eos = function() {
              return this.len <= this.position
            }),
            (e.prototype.getSource = function() {
              return this.source
            }),
            (e.prototype.pos = function() {
              return this.position
            }),
            (e.prototype.goBackTo = function(e) {
              this.position = e
            }),
            (e.prototype.goBack = function(e) {
              this.position -= e
            }),
            (e.prototype.advance = function(e) {
              this.position += e
            }),
            (e.prototype.goToEnd = function() {
              this.position = this.source.length
            }),
            (e.prototype.nextChar = function() {
              return this.source.charCodeAt(this.position++) || 0
            }),
            (e.prototype.peekChar = function(e) {
              return void 0 === e && (e = 0), this.source.charCodeAt(this.position + e) || 0
            }),
            (e.prototype.advanceIfChar = function(e) {
              return e === this.source.charCodeAt(this.position) && (this.position++, !0)
            }),
            (e.prototype.advanceIfChars = function(e) {
              var t
              if (this.position + e.length > this.source.length) return !1
              for (t = 0; t < e.length; t++) if (this.source.charCodeAt(this.position + t) !== e[t]) return !1
              return this.advance(t), !0
            }),
            (e.prototype.advanceIfRegExp = function(e) {
              var t = this.source.substr(this.position),
                n = t.match(e)
              return n ? ((this.position = this.position + n.index + n[0].length), n[0]) : ''
            }),
            (e.prototype.advanceUntilRegExp = function(e) {
              var t = this.source.substr(this.position),
                n = t.match(e)
              return n ? ((this.position = this.position + n.index), n[0]) : (this.goToEnd(), '')
            }),
            (e.prototype.advanceUntilChar = function(e) {
              while (this.position < this.source.length) {
                if (this.source.charCodeAt(this.position) === e) return !0
                this.advance(1)
              }
              return !1
            }),
            (e.prototype.advanceUntilChars = function(e) {
              while (this.position + e.length <= this.source.length) {
                for (var t = 0; t < e.length && this.source.charCodeAt(this.position + t) === e[t]; t++);
                if (t === e.length) return !0
                this.advance(1)
              }
              return this.goToEnd(), !1
            }),
            (e.prototype.skipWhitespace = function() {
              var e = this.advanceWhileChar(function(e) {
                return e === ze || e === Ie || e === Ee || e === Re || e === Ae
              })
              return e > 0
            }),
            (e.prototype.advanceWhileChar = function(e) {
              var t = this.position
              while (this.position < this.len && e(this.source.charCodeAt(this.position))) this.position++
              return this.position - t
            }),
            e
          )
        })(),
        ve = '!'.charCodeAt(0),
        ye = '-'.charCodeAt(0),
        Te = '<'.charCodeAt(0),
        ke = '>'.charCodeAt(0),
        Se = '/'.charCodeAt(0),
        xe = '='.charCodeAt(0),
        Me = '"'.charCodeAt(0),
        Le = "'".charCodeAt(0),
        Ee = '\n'.charCodeAt(0),
        Ae = '\r'.charCodeAt(0),
        Re = '\f'.charCodeAt(0),
        ze = ' '.charCodeAt(0),
        Ie = '\t'.charCodeAt(0),
        He = { 'text/x-handlebars-template': !0 }
      function Ce(e, t, n, i) {
        void 0 === t && (t = 0), void 0 === n && (n = he.WithinContent), void 0 === i && (i = !1)
        var r,
          a,
          o,
          s,
          l,
          c = new we(e, t),
          h = n,
          d = 0,
          u = ce.Unknown
        function p() {
          return c.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase()
        }
        function m() {
          return c.advanceIfRegExp(/^[^\s"'></=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase()
        }
        function f(e, t, n) {
          return (u = t), (d = e), (r = n), t
        }
        function g() {
          var e = c.pos(),
            t = h,
            n = b()
          return n === ce.EOS || e !== c.pos() || (i && (n === ce.StartTagClose || n === ce.EndTagClose))
            ? n
            : (console.log('Scanner.scan has not advanced at offset ' + e + ', state before: ' + t + ' after: ' + h),
              c.advance(1),
              f(e, ce.Unknown))
        }
        function b() {
          var e,
            t = c.pos()
          if (c.eos()) return f(t, ce.EOS)
          switch (h) {
            case he.WithinComment:
              return c.advanceIfChars([ye, ye, ke])
                ? ((h = he.WithinContent), f(t, ce.EndCommentTag))
                : (c.advanceUntilChars([ye, ye, ke]), f(t, ce.Comment))
            case he.WithinDoctype:
              return c.advanceIfChar(ke)
                ? ((h = he.WithinContent), f(t, ce.EndDoctypeTag))
                : (c.advanceUntilChar(ke), f(t, ce.Doctype))
            case he.WithinContent:
              if (c.advanceIfChar(Te)) {
                if (!c.eos() && c.peekChar() === ve) {
                  if (c.advanceIfChars([ve, ye, ye])) return (h = he.WithinComment), f(t, ce.StartCommentTag)
                  if (c.advanceIfRegExp(/^!doctype/i)) return (h = he.WithinDoctype), f(t, ce.StartDoctypeTag)
                }
                return c.advanceIfChar(Se)
                  ? ((h = he.AfterOpeningEndTag), f(t, ce.EndTagOpen))
                  : ((h = he.AfterOpeningStartTag), f(t, ce.StartTagOpen))
              }
              return c.advanceUntilChar(Te), f(t, ce.Content)
            case he.AfterOpeningEndTag:
              var n = p()
              return n.length > 0
                ? ((h = he.WithinEndTag), f(t, ce.EndTag))
                : c.skipWhitespace()
                ? f(
                    t,
                    ce.Whitespace,
                    _e('error.unexpectedWhitespace', 'Tag name must directly follow the open bracket.'),
                  )
                : ((h = he.WithinEndTag),
                  c.advanceUntilChar(ke),
                  t < c.pos() ? f(t, ce.Unknown, _e('error.endTagNameExpected', 'End tag name expected.')) : b())
            case he.WithinEndTag:
              if (c.skipWhitespace()) return f(t, ce.Whitespace)
              if (c.advanceIfChar(ke)) return (h = he.WithinContent), f(t, ce.EndTagClose)
              if (i && c.peekChar() === Te)
                return (
                  (h = he.WithinContent),
                  f(t, ce.EndTagClose, _e('error.closingBracketMissing', 'Closing bracket missing.'))
                )
              e = _e('error.closingBracketExpected', 'Closing bracket expected.')
              break
            case he.AfterOpeningStartTag:
              return (
                (o = p()),
                (l = void 0),
                (s = void 0),
                o.length > 0
                  ? ((a = !1), (h = he.WithinTag), f(t, ce.StartTag))
                  : c.skipWhitespace()
                  ? f(
                      t,
                      ce.Whitespace,
                      _e('error.unexpectedWhitespace', 'Tag name must directly follow the open bracket.'),
                    )
                  : ((h = he.WithinTag),
                    c.advanceUntilChar(ke),
                    t < c.pos() ? f(t, ce.Unknown, _e('error.startTagNameExpected', 'Start tag name expected.')) : b())
              )
            case he.WithinTag:
              return c.skipWhitespace()
                ? ((a = !0), f(t, ce.Whitespace))
                : a && ((s = m()), s.length > 0)
                ? ((h = he.AfterAttributeName), (a = !1), f(t, ce.AttributeName))
                : c.advanceIfChars([Se, ke])
                ? ((h = he.WithinContent), f(t, ce.StartTagSelfClose))
                : c.advanceIfChar(ke)
                ? ((h =
                    'script' === o
                      ? l && He[l]
                        ? he.WithinContent
                        : he.WithinScriptContent
                      : 'style' === o
                      ? he.WithinStyleContent
                      : he.WithinContent),
                  f(t, ce.StartTagClose))
                : i && c.peekChar() === Te
                ? ((h = he.WithinContent),
                  f(t, ce.StartTagClose, _e('error.closingBracketMissing', 'Closing bracket missing.')))
                : (c.advance(1), f(t, ce.Unknown, _e('error.unexpectedCharacterInTag', 'Unexpected character in tag.')))
            case he.AfterAttributeName:
              return c.skipWhitespace()
                ? ((a = !0), f(t, ce.Whitespace))
                : c.advanceIfChar(xe)
                ? ((h = he.BeforeAttributeValue), f(t, ce.DelimiterAssign))
                : ((h = he.WithinTag), b())
            case he.BeforeAttributeValue:
              if (c.skipWhitespace()) return f(t, ce.Whitespace)
              var r = c.advanceIfRegExp(/^[^\s"'`=<>]+/)
              if (r.length > 0)
                return (
                  c.peekChar() === ke && c.peekChar(-1) === Se && (c.goBack(1), (r = r.substr(0, r.length - 1))),
                  'type' === s && (l = r),
                  (h = he.WithinTag),
                  (a = !1),
                  f(t, ce.AttributeValue)
                )
              var d = c.peekChar()
              return d === Le || d === Me
                ? (c.advance(1),
                  c.advanceUntilChar(d) && c.advance(1),
                  'type' === s && (l = c.getSource().substring(t + 1, c.pos() - 1)),
                  (h = he.WithinTag),
                  (a = !1),
                  f(t, ce.AttributeValue))
                : ((h = he.WithinTag), (a = !1), b())
            case he.WithinScriptContent:
              var u = 1
              while (!c.eos()) {
                var g = c.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i)
                if (0 === g.length) return c.goToEnd(), f(t, ce.Script)
                if ('\x3c!--' === g) 1 === u && (u = 2)
                else if ('--\x3e' === g) u = 1
                else if ('/' !== g[1]) 2 === u && (u = 3)
                else {
                  if (3 !== u) {
                    c.goBack(g.length)
                    break
                  }
                  u = 2
                }
              }
              return (h = he.WithinContent), t < c.pos() ? f(t, ce.Script) : b()
            case he.WithinStyleContent:
              return c.advanceUntilRegExp(/<\/style/i), (h = he.WithinContent), t < c.pos() ? f(t, ce.Styles) : b()
          }
          return c.advance(1), (h = he.WithinContent), f(t, ce.Unknown, e)
        }
        return {
          scan: g,
          getTokenType: function() {
            return u
          },
          getTokenOffset: function() {
            return d
          },
          getTokenLength: function() {
            return c.pos() - d
          },
          getTokenEnd: function() {
            return c.pos()
          },
          getTokenText: function() {
            return c.getSource().substring(d, c.pos())
          },
          getScannerState: function() {
            return h
          },
          getTokenError: function() {
            return r
          },
        }
      }
      function Ue(e, t) {
        var n = 0,
          i = e.length
        if (0 === i) return 0
        while (n < i) {
          var r = Math.floor((n + i) / 2)
          t(e[r]) ? (i = r) : (n = r + 1)
        }
        return n
      }
      function We(e, t, n) {
        var i = 0,
          r = e.length - 1
        while (i <= r) {
          var a = ((i + r) / 2) | 0,
            o = n(e[a], t)
          if (o < 0) i = a + 1
          else {
            if (!(o > 0)) return a
            r = a - 1
          }
        }
        return -(i + 1)
      }
      var De = [
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'menuitem',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ]
      function Pe(e) {
        return (
          !!e &&
          We(De, e.toLowerCase(), function(e, t) {
            return e.localeCompare(t)
          }) >= 0
        )
      }
      ;(function() {
        function e(e, t, n, i) {
          ;(this.start = e), (this.end = t), (this.children = n), (this.parent = i), (this.closed = !1)
        }
        Object.defineProperty(e.prototype, 'attributeNames', {
          get: function() {
            return this.attributes ? Object.keys(this.attributes) : []
          },
          enumerable: !1,
          configurable: !0,
        }),
          (e.prototype.isSameTag = function(e) {
            return void 0 === this.tag
              ? void 0 === e
              : void 0 !== e && this.tag.length === e.length && this.tag.toLowerCase() === e
          }),
          Object.defineProperty(e.prototype, 'firstChild', {
            get: function() {
              return this.children[0]
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'lastChild', {
            get: function() {
              return this.children.length ? this.children[this.children.length - 1] : void 0
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.findNodeBefore = function(e) {
            var t =
              Ue(this.children, function(t) {
                return e <= t.start
              }) - 1
            if (t >= 0) {
              var n = this.children[t]
              if (e > n.start) {
                if (e < n.end) return n.findNodeBefore(e)
                var i = n.lastChild
                return i && i.end === n.end ? n.findNodeBefore(e) : n
              }
            }
            return this
          }),
          (e.prototype.findNodeAt = function(e) {
            var t =
              Ue(this.children, function(t) {
                return e <= t.start
              }) - 1
            if (t >= 0) {
              var n = this.children[t]
              if (e > n.start && e <= n.end) return n.findNodeAt(e)
            }
            return this
          })
      })()
      var Oe = {
        'Aacute;': '\xc1',
        Aacute: '\xc1',
        'aacute;': '\xe1',
        aacute: '\xe1',
        'Abreve;': '\u0102',
        'abreve;': '\u0103',
        'ac;': '\u223e',
        'acd;': '\u223f',
        'acE;': '\u223e\u0333',
        'Acirc;': '\xc2',
        Acirc: '\xc2',
        'acirc;': '\xe2',
        acirc: '\xe2',
        'acute;': '\xb4',
        acute: '\xb4',
        'Acy;': '\u0410',
        'acy;': '\u0430',
        'AElig;': '\xc6',
        AElig: '\xc6',
        'aelig;': '\xe6',
        aelig: '\xe6',
        'af;': '\u2061',
        'Afr;': '\ud835\udd04',
        'afr;': '\ud835\udd1e',
        'Agrave;': '\xc0',
        Agrave: '\xc0',
        'agrave;': '\xe0',
        agrave: '\xe0',
        'alefsym;': '\u2135',
        'aleph;': '\u2135',
        'Alpha;': '\u0391',
        'alpha;': '\u03b1',
        'Amacr;': '\u0100',
        'amacr;': '\u0101',
        'amalg;': '\u2a3f',
        'AMP;': '&',
        AMP: '&',
        'amp;': '&',
        amp: '&',
        'And;': '\u2a53',
        'and;': '\u2227',
        'andand;': '\u2a55',
        'andd;': '\u2a5c',
        'andslope;': '\u2a58',
        'andv;': '\u2a5a',
        'ang;': '\u2220',
        'ange;': '\u29a4',
        'angle;': '\u2220',
        'angmsd;': '\u2221',
        'angmsdaa;': '\u29a8',
        'angmsdab;': '\u29a9',
        'angmsdac;': '\u29aa',
        'angmsdad;': '\u29ab',
        'angmsdae;': '\u29ac',
        'angmsdaf;': '\u29ad',
        'angmsdag;': '\u29ae',
        'angmsdah;': '\u29af',
        'angrt;': '\u221f',
        'angrtvb;': '\u22be',
        'angrtvbd;': '\u299d',
        'angsph;': '\u2222',
        'angst;': '\xc5',
        'angzarr;': '\u237c',
        'Aogon;': '\u0104',
        'aogon;': '\u0105',
        'Aopf;': '\ud835\udd38',
        'aopf;': '\ud835\udd52',
        'ap;': '\u2248',
        'apacir;': '\u2a6f',
        'apE;': '\u2a70',
        'ape;': '\u224a',
        'apid;': '\u224b',
        'apos;': "'",
        'ApplyFunction;': '\u2061',
        'approx;': '\u2248',
        'approxeq;': '\u224a',
        'Aring;': '\xc5',
        Aring: '\xc5',
        'aring;': '\xe5',
        aring: '\xe5',
        'Ascr;': '\ud835\udc9c',
        'ascr;': '\ud835\udcb6',
        'Assign;': '\u2254',
        'ast;': '*',
        'asymp;': '\u2248',
        'asympeq;': '\u224d',
        'Atilde;': '\xc3',
        Atilde: '\xc3',
        'atilde;': '\xe3',
        atilde: '\xe3',
        'Auml;': '\xc4',
        Auml: '\xc4',
        'auml;': '\xe4',
        auml: '\xe4',
        'awconint;': '\u2233',
        'awint;': '\u2a11',
        'backcong;': '\u224c',
        'backepsilon;': '\u03f6',
        'backprime;': '\u2035',
        'backsim;': '\u223d',
        'backsimeq;': '\u22cd',
        'Backslash;': '\u2216',
        'Barv;': '\u2ae7',
        'barvee;': '\u22bd',
        'Barwed;': '\u2306',
        'barwed;': '\u2305',
        'barwedge;': '\u2305',
        'bbrk;': '\u23b5',
        'bbrktbrk;': '\u23b6',
        'bcong;': '\u224c',
        'Bcy;': '\u0411',
        'bcy;': '\u0431',
        'bdquo;': '\u201e',
        'becaus;': '\u2235',
        'Because;': '\u2235',
        'because;': '\u2235',
        'bemptyv;': '\u29b0',
        'bepsi;': '\u03f6',
        'bernou;': '\u212c',
        'Bernoullis;': '\u212c',
        'Beta;': '\u0392',
        'beta;': '\u03b2',
        'beth;': '\u2136',
        'between;': '\u226c',
        'Bfr;': '\ud835\udd05',
        'bfr;': '\ud835\udd1f',
        'bigcap;': '\u22c2',
        'bigcirc;': '\u25ef',
        'bigcup;': '\u22c3',
        'bigodot;': '\u2a00',
        'bigoplus;': '\u2a01',
        'bigotimes;': '\u2a02',
        'bigsqcup;': '\u2a06',
        'bigstar;': '\u2605',
        'bigtriangledown;': '\u25bd',
        'bigtriangleup;': '\u25b3',
        'biguplus;': '\u2a04',
        'bigvee;': '\u22c1',
        'bigwedge;': '\u22c0',
        'bkarow;': '\u290d',
        'blacklozenge;': '\u29eb',
        'blacksquare;': '\u25aa',
        'blacktriangle;': '\u25b4',
        'blacktriangledown;': '\u25be',
        'blacktriangleleft;': '\u25c2',
        'blacktriangleright;': '\u25b8',
        'blank;': '\u2423',
        'blk12;': '\u2592',
        'blk14;': '\u2591',
        'blk34;': '\u2593',
        'block;': '\u2588',
        'bne;': '=\u20e5',
        'bnequiv;': '\u2261\u20e5',
        'bNot;': '\u2aed',
        'bnot;': '\u2310',
        'Bopf;': '\ud835\udd39',
        'bopf;': '\ud835\udd53',
        'bot;': '\u22a5',
        'bottom;': '\u22a5',
        'bowtie;': '\u22c8',
        'boxbox;': '\u29c9',
        'boxDL;': '\u2557',
        'boxDl;': '\u2556',
        'boxdL;': '\u2555',
        'boxdl;': '\u2510',
        'boxDR;': '\u2554',
        'boxDr;': '\u2553',
        'boxdR;': '\u2552',
        'boxdr;': '\u250c',
        'boxH;': '\u2550',
        'boxh;': '\u2500',
        'boxHD;': '\u2566',
        'boxHd;': '\u2564',
        'boxhD;': '\u2565',
        'boxhd;': '\u252c',
        'boxHU;': '\u2569',
        'boxHu;': '\u2567',
        'boxhU;': '\u2568',
        'boxhu;': '\u2534',
        'boxminus;': '\u229f',
        'boxplus;': '\u229e',
        'boxtimes;': '\u22a0',
        'boxUL;': '\u255d',
        'boxUl;': '\u255c',
        'boxuL;': '\u255b',
        'boxul;': '\u2518',
        'boxUR;': '\u255a',
        'boxUr;': '\u2559',
        'boxuR;': '\u2558',
        'boxur;': '\u2514',
        'boxV;': '\u2551',
        'boxv;': '\u2502',
        'boxVH;': '\u256c',
        'boxVh;': '\u256b',
        'boxvH;': '\u256a',
        'boxvh;': '\u253c',
        'boxVL;': '\u2563',
        'boxVl;': '\u2562',
        'boxvL;': '\u2561',
        'boxvl;': '\u2524',
        'boxVR;': '\u2560',
        'boxVr;': '\u255f',
        'boxvR;': '\u255e',
        'boxvr;': '\u251c',
        'bprime;': '\u2035',
        'Breve;': '\u02d8',
        'breve;': '\u02d8',
        'brvbar;': '\xa6',
        brvbar: '\xa6',
        'Bscr;': '\u212c',
        'bscr;': '\ud835\udcb7',
        'bsemi;': '\u204f',
        'bsim;': '\u223d',
        'bsime;': '\u22cd',
        'bsol;': '\\',
        'bsolb;': '\u29c5',
        'bsolhsub;': '\u27c8',
        'bull;': '\u2022',
        'bullet;': '\u2022',
        'bump;': '\u224e',
        'bumpE;': '\u2aae',
        'bumpe;': '\u224f',
        'Bumpeq;': '\u224e',
        'bumpeq;': '\u224f',
        'Cacute;': '\u0106',
        'cacute;': '\u0107',
        'Cap;': '\u22d2',
        'cap;': '\u2229',
        'capand;': '\u2a44',
        'capbrcup;': '\u2a49',
        'capcap;': '\u2a4b',
        'capcup;': '\u2a47',
        'capdot;': '\u2a40',
        'CapitalDifferentialD;': '\u2145',
        'caps;': '\u2229\ufe00',
        'caret;': '\u2041',
        'caron;': '\u02c7',
        'Cayleys;': '\u212d',
        'ccaps;': '\u2a4d',
        'Ccaron;': '\u010c',
        'ccaron;': '\u010d',
        'Ccedil;': '\xc7',
        Ccedil: '\xc7',
        'ccedil;': '\xe7',
        ccedil: '\xe7',
        'Ccirc;': '\u0108',
        'ccirc;': '\u0109',
        'Cconint;': '\u2230',
        'ccups;': '\u2a4c',
        'ccupssm;': '\u2a50',
        'Cdot;': '\u010a',
        'cdot;': '\u010b',
        'cedil;': '\xb8',
        cedil: '\xb8',
        'Cedilla;': '\xb8',
        'cemptyv;': '\u29b2',
        'cent;': '\xa2',
        cent: '\xa2',
        'CenterDot;': '\xb7',
        'centerdot;': '\xb7',
        'Cfr;': '\u212d',
        'cfr;': '\ud835\udd20',
        'CHcy;': '\u0427',
        'chcy;': '\u0447',
        'check;': '\u2713',
        'checkmark;': '\u2713',
        'Chi;': '\u03a7',
        'chi;': '\u03c7',
        'cir;': '\u25cb',
        'circ;': '\u02c6',
        'circeq;': '\u2257',
        'circlearrowleft;': '\u21ba',
        'circlearrowright;': '\u21bb',
        'circledast;': '\u229b',
        'circledcirc;': '\u229a',
        'circleddash;': '\u229d',
        'CircleDot;': '\u2299',
        'circledR;': '\xae',
        'circledS;': '\u24c8',
        'CircleMinus;': '\u2296',
        'CirclePlus;': '\u2295',
        'CircleTimes;': '\u2297',
        'cirE;': '\u29c3',
        'cire;': '\u2257',
        'cirfnint;': '\u2a10',
        'cirmid;': '\u2aef',
        'cirscir;': '\u29c2',
        'ClockwiseContourIntegral;': '\u2232',
        'CloseCurlyDoubleQuote;': '\u201d',
        'CloseCurlyQuote;': '\u2019',
        'clubs;': '\u2663',
        'clubsuit;': '\u2663',
        'Colon;': '\u2237',
        'colon;': ':',
        'Colone;': '\u2a74',
        'colone;': '\u2254',
        'coloneq;': '\u2254',
        'comma;': ',',
        'commat;': '@',
        'comp;': '\u2201',
        'compfn;': '\u2218',
        'complement;': '\u2201',
        'complexes;': '\u2102',
        'cong;': '\u2245',
        'congdot;': '\u2a6d',
        'Congruent;': '\u2261',
        'Conint;': '\u222f',
        'conint;': '\u222e',
        'ContourIntegral;': '\u222e',
        'Copf;': '\u2102',
        'copf;': '\ud835\udd54',
        'coprod;': '\u2210',
        'Coproduct;': '\u2210',
        'COPY;': '\xa9',
        COPY: '\xa9',
        'copy;': '\xa9',
        copy: '\xa9',
        'copysr;': '\u2117',
        'CounterClockwiseContourIntegral;': '\u2233',
        'crarr;': '\u21b5',
        'Cross;': '\u2a2f',
        'cross;': '\u2717',
        'Cscr;': '\ud835\udc9e',
        'cscr;': '\ud835\udcb8',
        'csub;': '\u2acf',
        'csube;': '\u2ad1',
        'csup;': '\u2ad0',
        'csupe;': '\u2ad2',
        'ctdot;': '\u22ef',
        'cudarrl;': '\u2938',
        'cudarrr;': '\u2935',
        'cuepr;': '\u22de',
        'cuesc;': '\u22df',
        'cularr;': '\u21b6',
        'cularrp;': '\u293d',
        'Cup;': '\u22d3',
        'cup;': '\u222a',
        'cupbrcap;': '\u2a48',
        'CupCap;': '\u224d',
        'cupcap;': '\u2a46',
        'cupcup;': '\u2a4a',
        'cupdot;': '\u228d',
        'cupor;': '\u2a45',
        'cups;': '\u222a\ufe00',
        'curarr;': '\u21b7',
        'curarrm;': '\u293c',
        'curlyeqprec;': '\u22de',
        'curlyeqsucc;': '\u22df',
        'curlyvee;': '\u22ce',
        'curlywedge;': '\u22cf',
        'curren;': '\xa4',
        curren: '\xa4',
        'curvearrowleft;': '\u21b6',
        'curvearrowright;': '\u21b7',
        'cuvee;': '\u22ce',
        'cuwed;': '\u22cf',
        'cwconint;': '\u2232',
        'cwint;': '\u2231',
        'cylcty;': '\u232d',
        'Dagger;': '\u2021',
        'dagger;': '\u2020',
        'daleth;': '\u2138',
        'Darr;': '\u21a1',
        'dArr;': '\u21d3',
        'darr;': '\u2193',
        'dash;': '\u2010',
        'Dashv;': '\u2ae4',
        'dashv;': '\u22a3',
        'dbkarow;': '\u290f',
        'dblac;': '\u02dd',
        'Dcaron;': '\u010e',
        'dcaron;': '\u010f',
        'Dcy;': '\u0414',
        'dcy;': '\u0434',
        'DD;': '\u2145',
        'dd;': '\u2146',
        'ddagger;': '\u2021',
        'ddarr;': '\u21ca',
        'DDotrahd;': '\u2911',
        'ddotseq;': '\u2a77',
        'deg;': '\xb0',
        deg: '\xb0',
        'Del;': '\u2207',
        'Delta;': '\u0394',
        'delta;': '\u03b4',
        'demptyv;': '\u29b1',
        'dfisht;': '\u297f',
        'Dfr;': '\ud835\udd07',
        'dfr;': '\ud835\udd21',
        'dHar;': '\u2965',
        'dharl;': '\u21c3',
        'dharr;': '\u21c2',
        'DiacriticalAcute;': '\xb4',
        'DiacriticalDot;': '\u02d9',
        'DiacriticalDoubleAcute;': '\u02dd',
        'DiacriticalGrave;': '`',
        'DiacriticalTilde;': '\u02dc',
        'diam;': '\u22c4',
        'Diamond;': '\u22c4',
        'diamond;': '\u22c4',
        'diamondsuit;': '\u2666',
        'diams;': '\u2666',
        'die;': '\xa8',
        'DifferentialD;': '\u2146',
        'digamma;': '\u03dd',
        'disin;': '\u22f2',
        'div;': '\xf7',
        'divide;': '\xf7',
        divide: '\xf7',
        'divideontimes;': '\u22c7',
        'divonx;': '\u22c7',
        'DJcy;': '\u0402',
        'djcy;': '\u0452',
        'dlcorn;': '\u231e',
        'dlcrop;': '\u230d',
        'dollar;': '$',
        'Dopf;': '\ud835\udd3b',
        'dopf;': '\ud835\udd55',
        'Dot;': '\xa8',
        'dot;': '\u02d9',
        'DotDot;': '\u20dc',
        'doteq;': '\u2250',
        'doteqdot;': '\u2251',
        'DotEqual;': '\u2250',
        'dotminus;': '\u2238',
        'dotplus;': '\u2214',
        'dotsquare;': '\u22a1',
        'doublebarwedge;': '\u2306',
        'DoubleContourIntegral;': '\u222f',
        'DoubleDot;': '\xa8',
        'DoubleDownArrow;': '\u21d3',
        'DoubleLeftArrow;': '\u21d0',
        'DoubleLeftRightArrow;': '\u21d4',
        'DoubleLeftTee;': '\u2ae4',
        'DoubleLongLeftArrow;': '\u27f8',
        'DoubleLongLeftRightArrow;': '\u27fa',
        'DoubleLongRightArrow;': '\u27f9',
        'DoubleRightArrow;': '\u21d2',
        'DoubleRightTee;': '\u22a8',
        'DoubleUpArrow;': '\u21d1',
        'DoubleUpDownArrow;': '\u21d5',
        'DoubleVerticalBar;': '\u2225',
        'DownArrow;': '\u2193',
        'Downarrow;': '\u21d3',
        'downarrow;': '\u2193',
        'DownArrowBar;': '\u2913',
        'DownArrowUpArrow;': '\u21f5',
        'DownBreve;': '\u0311',
        'downdownarrows;': '\u21ca',
        'downharpoonleft;': '\u21c3',
        'downharpoonright;': '\u21c2',
        'DownLeftRightVector;': '\u2950',
        'DownLeftTeeVector;': '\u295e',
        'DownLeftVector;': '\u21bd',
        'DownLeftVectorBar;': '\u2956',
        'DownRightTeeVector;': '\u295f',
        'DownRightVector;': '\u21c1',
        'DownRightVectorBar;': '\u2957',
        'DownTee;': '\u22a4',
        'DownTeeArrow;': '\u21a7',
        'drbkarow;': '\u2910',
        'drcorn;': '\u231f',
        'drcrop;': '\u230c',
        'Dscr;': '\ud835\udc9f',
        'dscr;': '\ud835\udcb9',
        'DScy;': '\u0405',
        'dscy;': '\u0455',
        'dsol;': '\u29f6',
        'Dstrok;': '\u0110',
        'dstrok;': '\u0111',
        'dtdot;': '\u22f1',
        'dtri;': '\u25bf',
        'dtrif;': '\u25be',
        'duarr;': '\u21f5',
        'duhar;': '\u296f',
        'dwangle;': '\u29a6',
        'DZcy;': '\u040f',
        'dzcy;': '\u045f',
        'dzigrarr;': '\u27ff',
        'Eacute;': '\xc9',
        Eacute: '\xc9',
        'eacute;': '\xe9',
        eacute: '\xe9',
        'easter;': '\u2a6e',
        'Ecaron;': '\u011a',
        'ecaron;': '\u011b',
        'ecir;': '\u2256',
        'Ecirc;': '\xca',
        Ecirc: '\xca',
        'ecirc;': '\xea',
        ecirc: '\xea',
        'ecolon;': '\u2255',
        'Ecy;': '\u042d',
        'ecy;': '\u044d',
        'eDDot;': '\u2a77',
        'Edot;': '\u0116',
        'eDot;': '\u2251',
        'edot;': '\u0117',
        'ee;': '\u2147',
        'efDot;': '\u2252',
        'Efr;': '\ud835\udd08',
        'efr;': '\ud835\udd22',
        'eg;': '\u2a9a',
        'Egrave;': '\xc8',
        Egrave: '\xc8',
        'egrave;': '\xe8',
        egrave: '\xe8',
        'egs;': '\u2a96',
        'egsdot;': '\u2a98',
        'el;': '\u2a99',
        'Element;': '\u2208',
        'elinters;': '\u23e7',
        'ell;': '\u2113',
        'els;': '\u2a95',
        'elsdot;': '\u2a97',
        'Emacr;': '\u0112',
        'emacr;': '\u0113',
        'empty;': '\u2205',
        'emptyset;': '\u2205',
        'EmptySmallSquare;': '\u25fb',
        'emptyv;': '\u2205',
        'EmptyVerySmallSquare;': '\u25ab',
        'emsp;': '\u2003',
        'emsp13;': '\u2004',
        'emsp14;': '\u2005',
        'ENG;': '\u014a',
        'eng;': '\u014b',
        'ensp;': '\u2002',
        'Eogon;': '\u0118',
        'eogon;': '\u0119',
        'Eopf;': '\ud835\udd3c',
        'eopf;': '\ud835\udd56',
        'epar;': '\u22d5',
        'eparsl;': '\u29e3',
        'eplus;': '\u2a71',
        'epsi;': '\u03b5',
        'Epsilon;': '\u0395',
        'epsilon;': '\u03b5',
        'epsiv;': '\u03f5',
        'eqcirc;': '\u2256',
        'eqcolon;': '\u2255',
        'eqsim;': '\u2242',
        'eqslantgtr;': '\u2a96',
        'eqslantless;': '\u2a95',
        'Equal;': '\u2a75',
        'equals;': '=',
        'EqualTilde;': '\u2242',
        'equest;': '\u225f',
        'Equilibrium;': '\u21cc',
        'equiv;': '\u2261',
        'equivDD;': '\u2a78',
        'eqvparsl;': '\u29e5',
        'erarr;': '\u2971',
        'erDot;': '\u2253',
        'Escr;': '\u2130',
        'escr;': '\u212f',
        'esdot;': '\u2250',
        'Esim;': '\u2a73',
        'esim;': '\u2242',
        'Eta;': '\u0397',
        'eta;': '\u03b7',
        'ETH;': '\xd0',
        ETH: '\xd0',
        'eth;': '\xf0',
        eth: '\xf0',
        'Euml;': '\xcb',
        Euml: '\xcb',
        'euml;': '\xeb',
        euml: '\xeb',
        'euro;': '\u20ac',
        'excl;': '!',
        'exist;': '\u2203',
        'Exists;': '\u2203',
        'expectation;': '\u2130',
        'ExponentialE;': '\u2147',
        'exponentiale;': '\u2147',
        'fallingdotseq;': '\u2252',
        'Fcy;': '\u0424',
        'fcy;': '\u0444',
        'female;': '\u2640',
        'ffilig;': '\ufb03',
        'fflig;': '\ufb00',
        'ffllig;': '\ufb04',
        'Ffr;': '\ud835\udd09',
        'ffr;': '\ud835\udd23',
        'filig;': '\ufb01',
        'FilledSmallSquare;': '\u25fc',
        'FilledVerySmallSquare;': '\u25aa',
        'fjlig;': 'fj',
        'flat;': '\u266d',
        'fllig;': '\ufb02',
        'fltns;': '\u25b1',
        'fnof;': '\u0192',
        'Fopf;': '\ud835\udd3d',
        'fopf;': '\ud835\udd57',
        'ForAll;': '\u2200',
        'forall;': '\u2200',
        'fork;': '\u22d4',
        'forkv;': '\u2ad9',
        'Fouriertrf;': '\u2131',
        'fpartint;': '\u2a0d',
        'frac12;': '\xbd',
        frac12: '\xbd',
        'frac13;': '\u2153',
        'frac14;': '\xbc',
        frac14: '\xbc',
        'frac15;': '\u2155',
        'frac16;': '\u2159',
        'frac18;': '\u215b',
        'frac23;': '\u2154',
        'frac25;': '\u2156',
        'frac34;': '\xbe',
        frac34: '\xbe',
        'frac35;': '\u2157',
        'frac38;': '\u215c',
        'frac45;': '\u2158',
        'frac56;': '\u215a',
        'frac58;': '\u215d',
        'frac78;': '\u215e',
        'frasl;': '\u2044',
        'frown;': '\u2322',
        'Fscr;': '\u2131',
        'fscr;': '\ud835\udcbb',
        'gacute;': '\u01f5',
        'Gamma;': '\u0393',
        'gamma;': '\u03b3',
        'Gammad;': '\u03dc',
        'gammad;': '\u03dd',
        'gap;': '\u2a86',
        'Gbreve;': '\u011e',
        'gbreve;': '\u011f',
        'Gcedil;': '\u0122',
        'Gcirc;': '\u011c',
        'gcirc;': '\u011d',
        'Gcy;': '\u0413',
        'gcy;': '\u0433',
        'Gdot;': '\u0120',
        'gdot;': '\u0121',
        'gE;': '\u2267',
        'ge;': '\u2265',
        'gEl;': '\u2a8c',
        'gel;': '\u22db',
        'geq;': '\u2265',
        'geqq;': '\u2267',
        'geqslant;': '\u2a7e',
        'ges;': '\u2a7e',
        'gescc;': '\u2aa9',
        'gesdot;': '\u2a80',
        'gesdoto;': '\u2a82',
        'gesdotol;': '\u2a84',
        'gesl;': '\u22db\ufe00',
        'gesles;': '\u2a94',
        'Gfr;': '\ud835\udd0a',
        'gfr;': '\ud835\udd24',
        'Gg;': '\u22d9',
        'gg;': '\u226b',
        'ggg;': '\u22d9',
        'gimel;': '\u2137',
        'GJcy;': '\u0403',
        'gjcy;': '\u0453',
        'gl;': '\u2277',
        'gla;': '\u2aa5',
        'glE;': '\u2a92',
        'glj;': '\u2aa4',
        'gnap;': '\u2a8a',
        'gnapprox;': '\u2a8a',
        'gnE;': '\u2269',
        'gne;': '\u2a88',
        'gneq;': '\u2a88',
        'gneqq;': '\u2269',
        'gnsim;': '\u22e7',
        'Gopf;': '\ud835\udd3e',
        'gopf;': '\ud835\udd58',
        'grave;': '`',
        'GreaterEqual;': '\u2265',
        'GreaterEqualLess;': '\u22db',
        'GreaterFullEqual;': '\u2267',
        'GreaterGreater;': '\u2aa2',
        'GreaterLess;': '\u2277',
        'GreaterSlantEqual;': '\u2a7e',
        'GreaterTilde;': '\u2273',
        'Gscr;': '\ud835\udca2',
        'gscr;': '\u210a',
        'gsim;': '\u2273',
        'gsime;': '\u2a8e',
        'gsiml;': '\u2a90',
        'GT;': '>',
        GT: '>',
        'Gt;': '\u226b',
        'gt;': '>',
        gt: '>',
        'gtcc;': '\u2aa7',
        'gtcir;': '\u2a7a',
        'gtdot;': '\u22d7',
        'gtlPar;': '\u2995',
        'gtquest;': '\u2a7c',
        'gtrapprox;': '\u2a86',
        'gtrarr;': '\u2978',
        'gtrdot;': '\u22d7',
        'gtreqless;': '\u22db',
        'gtreqqless;': '\u2a8c',
        'gtrless;': '\u2277',
        'gtrsim;': '\u2273',
        'gvertneqq;': '\u2269\ufe00',
        'gvnE;': '\u2269\ufe00',
        'Hacek;': '\u02c7',
        'hairsp;': '\u200a',
        'half;': '\xbd',
        'hamilt;': '\u210b',
        'HARDcy;': '\u042a',
        'hardcy;': '\u044a',
        'hArr;': '\u21d4',
        'harr;': '\u2194',
        'harrcir;': '\u2948',
        'harrw;': '\u21ad',
        'Hat;': '^',
        'hbar;': '\u210f',
        'Hcirc;': '\u0124',
        'hcirc;': '\u0125',
        'hearts;': '\u2665',
        'heartsuit;': '\u2665',
        'hellip;': '\u2026',
        'hercon;': '\u22b9',
        'Hfr;': '\u210c',
        'hfr;': '\ud835\udd25',
        'HilbertSpace;': '\u210b',
        'hksearow;': '\u2925',
        'hkswarow;': '\u2926',
        'hoarr;': '\u21ff',
        'homtht;': '\u223b',
        'hookleftarrow;': '\u21a9',
        'hookrightarrow;': '\u21aa',
        'Hopf;': '\u210d',
        'hopf;': '\ud835\udd59',
        'horbar;': '\u2015',
        'HorizontalLine;': '\u2500',
        'Hscr;': '\u210b',
        'hscr;': '\ud835\udcbd',
        'hslash;': '\u210f',
        'Hstrok;': '\u0126',
        'hstrok;': '\u0127',
        'HumpDownHump;': '\u224e',
        'HumpEqual;': '\u224f',
        'hybull;': '\u2043',
        'hyphen;': '\u2010',
        'Iacute;': '\xcd',
        Iacute: '\xcd',
        'iacute;': '\xed',
        iacute: '\xed',
        'ic;': '\u2063',
        'Icirc;': '\xce',
        Icirc: '\xce',
        'icirc;': '\xee',
        icirc: '\xee',
        'Icy;': '\u0418',
        'icy;': '\u0438',
        'Idot;': '\u0130',
        'IEcy;': '\u0415',
        'iecy;': '\u0435',
        'iexcl;': '\xa1',
        iexcl: '\xa1',
        'iff;': '\u21d4',
        'Ifr;': '\u2111',
        'ifr;': '\ud835\udd26',
        'Igrave;': '\xcc',
        Igrave: '\xcc',
        'igrave;': '\xec',
        igrave: '\xec',
        'ii;': '\u2148',
        'iiiint;': '\u2a0c',
        'iiint;': '\u222d',
        'iinfin;': '\u29dc',
        'iiota;': '\u2129',
        'IJlig;': '\u0132',
        'ijlig;': '\u0133',
        'Im;': '\u2111',
        'Imacr;': '\u012a',
        'imacr;': '\u012b',
        'image;': '\u2111',
        'ImaginaryI;': '\u2148',
        'imagline;': '\u2110',
        'imagpart;': '\u2111',
        'imath;': '\u0131',
        'imof;': '\u22b7',
        'imped;': '\u01b5',
        'Implies;': '\u21d2',
        'in;': '\u2208',
        'incare;': '\u2105',
        'infin;': '\u221e',
        'infintie;': '\u29dd',
        'inodot;': '\u0131',
        'Int;': '\u222c',
        'int;': '\u222b',
        'intcal;': '\u22ba',
        'integers;': '\u2124',
        'Integral;': '\u222b',
        'intercal;': '\u22ba',
        'Intersection;': '\u22c2',
        'intlarhk;': '\u2a17',
        'intprod;': '\u2a3c',
        'InvisibleComma;': '\u2063',
        'InvisibleTimes;': '\u2062',
        'IOcy;': '\u0401',
        'iocy;': '\u0451',
        'Iogon;': '\u012e',
        'iogon;': '\u012f',
        'Iopf;': '\ud835\udd40',
        'iopf;': '\ud835\udd5a',
        'Iota;': '\u0399',
        'iota;': '\u03b9',
        'iprod;': '\u2a3c',
        'iquest;': '\xbf',
        iquest: '\xbf',
        'Iscr;': '\u2110',
        'iscr;': '\ud835\udcbe',
        'isin;': '\u2208',
        'isindot;': '\u22f5',
        'isinE;': '\u22f9',
        'isins;': '\u22f4',
        'isinsv;': '\u22f3',
        'isinv;': '\u2208',
        'it;': '\u2062',
        'Itilde;': '\u0128',
        'itilde;': '\u0129',
        'Iukcy;': '\u0406',
        'iukcy;': '\u0456',
        'Iuml;': '\xcf',
        Iuml: '\xcf',
        'iuml;': '\xef',
        iuml: '\xef',
        'Jcirc;': '\u0134',
        'jcirc;': '\u0135',
        'Jcy;': '\u0419',
        'jcy;': '\u0439',
        'Jfr;': '\ud835\udd0d',
        'jfr;': '\ud835\udd27',
        'jmath;': '\u0237',
        'Jopf;': '\ud835\udd41',
        'jopf;': '\ud835\udd5b',
        'Jscr;': '\ud835\udca5',
        'jscr;': '\ud835\udcbf',
        'Jsercy;': '\u0408',
        'jsercy;': '\u0458',
        'Jukcy;': '\u0404',
        'jukcy;': '\u0454',
        'Kappa;': '\u039a',
        'kappa;': '\u03ba',
        'kappav;': '\u03f0',
        'Kcedil;': '\u0136',
        'kcedil;': '\u0137',
        'Kcy;': '\u041a',
        'kcy;': '\u043a',
        'Kfr;': '\ud835\udd0e',
        'kfr;': '\ud835\udd28',
        'kgreen;': '\u0138',
        'KHcy;': '\u0425',
        'khcy;': '\u0445',
        'KJcy;': '\u040c',
        'kjcy;': '\u045c',
        'Kopf;': '\ud835\udd42',
        'kopf;': '\ud835\udd5c',
        'Kscr;': '\ud835\udca6',
        'kscr;': '\ud835\udcc0',
        'lAarr;': '\u21da',
        'Lacute;': '\u0139',
        'lacute;': '\u013a',
        'laemptyv;': '\u29b4',
        'lagran;': '\u2112',
        'Lambda;': '\u039b',
        'lambda;': '\u03bb',
        'Lang;': '\u27ea',
        'lang;': '\u27e8',
        'langd;': '\u2991',
        'langle;': '\u27e8',
        'lap;': '\u2a85',
        'Laplacetrf;': '\u2112',
        'laquo;': '\xab',
        laquo: '\xab',
        'Larr;': '\u219e',
        'lArr;': '\u21d0',
        'larr;': '\u2190',
        'larrb;': '\u21e4',
        'larrbfs;': '\u291f',
        'larrfs;': '\u291d',
        'larrhk;': '\u21a9',
        'larrlp;': '\u21ab',
        'larrpl;': '\u2939',
        'larrsim;': '\u2973',
        'larrtl;': '\u21a2',
        'lat;': '\u2aab',
        'lAtail;': '\u291b',
        'latail;': '\u2919',
        'late;': '\u2aad',
        'lates;': '\u2aad\ufe00',
        'lBarr;': '\u290e',
        'lbarr;': '\u290c',
        'lbbrk;': '\u2772',
        'lbrace;': '{',
        'lbrack;': '[',
        'lbrke;': '\u298b',
        'lbrksld;': '\u298f',
        'lbrkslu;': '\u298d',
        'Lcaron;': '\u013d',
        'lcaron;': '\u013e',
        'Lcedil;': '\u013b',
        'lcedil;': '\u013c',
        'lceil;': '\u2308',
        'lcub;': '{',
        'Lcy;': '\u041b',
        'lcy;': '\u043b',
        'ldca;': '\u2936',
        'ldquo;': '\u201c',
        'ldquor;': '\u201e',
        'ldrdhar;': '\u2967',
        'ldrushar;': '\u294b',
        'ldsh;': '\u21b2',
        'lE;': '\u2266',
        'le;': '\u2264',
        'LeftAngleBracket;': '\u27e8',
        'LeftArrow;': '\u2190',
        'Leftarrow;': '\u21d0',
        'leftarrow;': '\u2190',
        'LeftArrowBar;': '\u21e4',
        'LeftArrowRightArrow;': '\u21c6',
        'leftarrowtail;': '\u21a2',
        'LeftCeiling;': '\u2308',
        'LeftDoubleBracket;': '\u27e6',
        'LeftDownTeeVector;': '\u2961',
        'LeftDownVector;': '\u21c3',
        'LeftDownVectorBar;': '\u2959',
        'LeftFloor;': '\u230a',
        'leftharpoondown;': '\u21bd',
        'leftharpoonup;': '\u21bc',
        'leftleftarrows;': '\u21c7',
        'LeftRightArrow;': '\u2194',
        'Leftrightarrow;': '\u21d4',
        'leftrightarrow;': '\u2194',
        'leftrightarrows;': '\u21c6',
        'leftrightharpoons;': '\u21cb',
        'leftrightsquigarrow;': '\u21ad',
        'LeftRightVector;': '\u294e',
        'LeftTee;': '\u22a3',
        'LeftTeeArrow;': '\u21a4',
        'LeftTeeVector;': '\u295a',
        'leftthreetimes;': '\u22cb',
        'LeftTriangle;': '\u22b2',
        'LeftTriangleBar;': '\u29cf',
        'LeftTriangleEqual;': '\u22b4',
        'LeftUpDownVector;': '\u2951',
        'LeftUpTeeVector;': '\u2960',
        'LeftUpVector;': '\u21bf',
        'LeftUpVectorBar;': '\u2958',
        'LeftVector;': '\u21bc',
        'LeftVectorBar;': '\u2952',
        'lEg;': '\u2a8b',
        'leg;': '\u22da',
        'leq;': '\u2264',
        'leqq;': '\u2266',
        'leqslant;': '\u2a7d',
        'les;': '\u2a7d',
        'lescc;': '\u2aa8',
        'lesdot;': '\u2a7f',
        'lesdoto;': '\u2a81',
        'lesdotor;': '\u2a83',
        'lesg;': '\u22da\ufe00',
        'lesges;': '\u2a93',
        'lessapprox;': '\u2a85',
        'lessdot;': '\u22d6',
        'lesseqgtr;': '\u22da',
        'lesseqqgtr;': '\u2a8b',
        'LessEqualGreater;': '\u22da',
        'LessFullEqual;': '\u2266',
        'LessGreater;': '\u2276',
        'lessgtr;': '\u2276',
        'LessLess;': '\u2aa1',
        'lesssim;': '\u2272',
        'LessSlantEqual;': '\u2a7d',
        'LessTilde;': '\u2272',
        'lfisht;': '\u297c',
        'lfloor;': '\u230a',
        'Lfr;': '\ud835\udd0f',
        'lfr;': '\ud835\udd29',
        'lg;': '\u2276',
        'lgE;': '\u2a91',
        'lHar;': '\u2962',
        'lhard;': '\u21bd',
        'lharu;': '\u21bc',
        'lharul;': '\u296a',
        'lhblk;': '\u2584',
        'LJcy;': '\u0409',
        'ljcy;': '\u0459',
        'Ll;': '\u22d8',
        'll;': '\u226a',
        'llarr;': '\u21c7',
        'llcorner;': '\u231e',
        'Lleftarrow;': '\u21da',
        'llhard;': '\u296b',
        'lltri;': '\u25fa',
        'Lmidot;': '\u013f',
        'lmidot;': '\u0140',
        'lmoust;': '\u23b0',
        'lmoustache;': '\u23b0',
        'lnap;': '\u2a89',
        'lnapprox;': '\u2a89',
        'lnE;': '\u2268',
        'lne;': '\u2a87',
        'lneq;': '\u2a87',
        'lneqq;': '\u2268',
        'lnsim;': '\u22e6',
        'loang;': '\u27ec',
        'loarr;': '\u21fd',
        'lobrk;': '\u27e6',
        'LongLeftArrow;': '\u27f5',
        'Longleftarrow;': '\u27f8',
        'longleftarrow;': '\u27f5',
        'LongLeftRightArrow;': '\u27f7',
        'Longleftrightarrow;': '\u27fa',
        'longleftrightarrow;': '\u27f7',
        'longmapsto;': '\u27fc',
        'LongRightArrow;': '\u27f6',
        'Longrightarrow;': '\u27f9',
        'longrightarrow;': '\u27f6',
        'looparrowleft;': '\u21ab',
        'looparrowright;': '\u21ac',
        'lopar;': '\u2985',
        'Lopf;': '\ud835\udd43',
        'lopf;': '\ud835\udd5d',
        'loplus;': '\u2a2d',
        'lotimes;': '\u2a34',
        'lowast;': '\u2217',
        'lowbar;': '_',
        'LowerLeftArrow;': '\u2199',
        'LowerRightArrow;': '\u2198',
        'loz;': '\u25ca',
        'lozenge;': '\u25ca',
        'lozf;': '\u29eb',
        'lpar;': '(',
        'lparlt;': '\u2993',
        'lrarr;': '\u21c6',
        'lrcorner;': '\u231f',
        'lrhar;': '\u21cb',
        'lrhard;': '\u296d',
        'lrm;': '\u200e',
        'lrtri;': '\u22bf',
        'lsaquo;': '\u2039',
        'Lscr;': '\u2112',
        'lscr;': '\ud835\udcc1',
        'Lsh;': '\u21b0',
        'lsh;': '\u21b0',
        'lsim;': '\u2272',
        'lsime;': '\u2a8d',
        'lsimg;': '\u2a8f',
        'lsqb;': '[',
        'lsquo;': '\u2018',
        'lsquor;': '\u201a',
        'Lstrok;': '\u0141',
        'lstrok;': '\u0142',
        'LT;': '<',
        LT: '<',
        'Lt;': '\u226a',
        'lt;': '<',
        lt: '<',
        'ltcc;': '\u2aa6',
        'ltcir;': '\u2a79',
        'ltdot;': '\u22d6',
        'lthree;': '\u22cb',
        'ltimes;': '\u22c9',
        'ltlarr;': '\u2976',
        'ltquest;': '\u2a7b',
        'ltri;': '\u25c3',
        'ltrie;': '\u22b4',
        'ltrif;': '\u25c2',
        'ltrPar;': '\u2996',
        'lurdshar;': '\u294a',
        'luruhar;': '\u2966',
        'lvertneqq;': '\u2268\ufe00',
        'lvnE;': '\u2268\ufe00',
        'macr;': '\xaf',
        macr: '\xaf',
        'male;': '\u2642',
        'malt;': '\u2720',
        'maltese;': '\u2720',
        'Map;': '\u2905',
        'map;': '\u21a6',
        'mapsto;': '\u21a6',
        'mapstodown;': '\u21a7',
        'mapstoleft;': '\u21a4',
        'mapstoup;': '\u21a5',
        'marker;': '\u25ae',
        'mcomma;': '\u2a29',
        'Mcy;': '\u041c',
        'mcy;': '\u043c',
        'mdash;': '\u2014',
        'mDDot;': '\u223a',
        'measuredangle;': '\u2221',
        'MediumSpace;': '\u205f',
        'Mellintrf;': '\u2133',
        'Mfr;': '\ud835\udd10',
        'mfr;': '\ud835\udd2a',
        'mho;': '\u2127',
        'micro;': '\xb5',
        micro: '\xb5',
        'mid;': '\u2223',
        'midast;': '*',
        'midcir;': '\u2af0',
        'middot;': '\xb7',
        middot: '\xb7',
        'minus;': '\u2212',
        'minusb;': '\u229f',
        'minusd;': '\u2238',
        'minusdu;': '\u2a2a',
        'MinusPlus;': '\u2213',
        'mlcp;': '\u2adb',
        'mldr;': '\u2026',
        'mnplus;': '\u2213',
        'models;': '\u22a7',
        'Mopf;': '\ud835\udd44',
        'mopf;': '\ud835\udd5e',
        'mp;': '\u2213',
        'Mscr;': '\u2133',
        'mscr;': '\ud835\udcc2',
        'mstpos;': '\u223e',
        'Mu;': '\u039c',
        'mu;': '\u03bc',
        'multimap;': '\u22b8',
        'mumap;': '\u22b8',
        'nabla;': '\u2207',
        'Nacute;': '\u0143',
        'nacute;': '\u0144',
        'nang;': '\u2220\u20d2',
        'nap;': '\u2249',
        'napE;': '\u2a70\u0338',
        'napid;': '\u224b\u0338',
        'napos;': '\u0149',
        'napprox;': '\u2249',
        'natur;': '\u266e',
        'natural;': '\u266e',
        'naturals;': '\u2115',
        'nbsp;': '\xa0',
        nbsp: '\xa0',
        'nbump;': '\u224e\u0338',
        'nbumpe;': '\u224f\u0338',
        'ncap;': '\u2a43',
        'Ncaron;': '\u0147',
        'ncaron;': '\u0148',
        'Ncedil;': '\u0145',
        'ncedil;': '\u0146',
        'ncong;': '\u2247',
        'ncongdot;': '\u2a6d\u0338',
        'ncup;': '\u2a42',
        'Ncy;': '\u041d',
        'ncy;': '\u043d',
        'ndash;': '\u2013',
        'ne;': '\u2260',
        'nearhk;': '\u2924',
        'neArr;': '\u21d7',
        'nearr;': '\u2197',
        'nearrow;': '\u2197',
        'nedot;': '\u2250\u0338',
        'NegativeMediumSpace;': '\u200b',
        'NegativeThickSpace;': '\u200b',
        'NegativeThinSpace;': '\u200b',
        'NegativeVeryThinSpace;': '\u200b',
        'nequiv;': '\u2262',
        'nesear;': '\u2928',
        'nesim;': '\u2242\u0338',
        'NestedGreaterGreater;': '\u226b',
        'NestedLessLess;': '\u226a',
        'NewLine;': '\n',
        'nexist;': '\u2204',
        'nexists;': '\u2204',
        'Nfr;': '\ud835\udd11',
        'nfr;': '\ud835\udd2b',
        'ngE;': '\u2267\u0338',
        'nge;': '\u2271',
        'ngeq;': '\u2271',
        'ngeqq;': '\u2267\u0338',
        'ngeqslant;': '\u2a7e\u0338',
        'nges;': '\u2a7e\u0338',
        'nGg;': '\u22d9\u0338',
        'ngsim;': '\u2275',
        'nGt;': '\u226b\u20d2',
        'ngt;': '\u226f',
        'ngtr;': '\u226f',
        'nGtv;': '\u226b\u0338',
        'nhArr;': '\u21ce',
        'nharr;': '\u21ae',
        'nhpar;': '\u2af2',
        'ni;': '\u220b',
        'nis;': '\u22fc',
        'nisd;': '\u22fa',
        'niv;': '\u220b',
        'NJcy;': '\u040a',
        'njcy;': '\u045a',
        'nlArr;': '\u21cd',
        'nlarr;': '\u219a',
        'nldr;': '\u2025',
        'nlE;': '\u2266\u0338',
        'nle;': '\u2270',
        'nLeftarrow;': '\u21cd',
        'nleftarrow;': '\u219a',
        'nLeftrightarrow;': '\u21ce',
        'nleftrightarrow;': '\u21ae',
        'nleq;': '\u2270',
        'nleqq;': '\u2266\u0338',
        'nleqslant;': '\u2a7d\u0338',
        'nles;': '\u2a7d\u0338',
        'nless;': '\u226e',
        'nLl;': '\u22d8\u0338',
        'nlsim;': '\u2274',
        'nLt;': '\u226a\u20d2',
        'nlt;': '\u226e',
        'nltri;': '\u22ea',
        'nltrie;': '\u22ec',
        'nLtv;': '\u226a\u0338',
        'nmid;': '\u2224',
        'NoBreak;': '\u2060',
        'NonBreakingSpace;': '\xa0',
        'Nopf;': '\u2115',
        'nopf;': '\ud835\udd5f',
        'Not;': '\u2aec',
        'not;': '\xac',
        not: '\xac',
        'NotCongruent;': '\u2262',
        'NotCupCap;': '\u226d',
        'NotDoubleVerticalBar;': '\u2226',
        'NotElement;': '\u2209',
        'NotEqual;': '\u2260',
        'NotEqualTilde;': '\u2242\u0338',
        'NotExists;': '\u2204',
        'NotGreater;': '\u226f',
        'NotGreaterEqual;': '\u2271',
        'NotGreaterFullEqual;': '\u2267\u0338',
        'NotGreaterGreater;': '\u226b\u0338',
        'NotGreaterLess;': '\u2279',
        'NotGreaterSlantEqual;': '\u2a7e\u0338',
        'NotGreaterTilde;': '\u2275',
        'NotHumpDownHump;': '\u224e\u0338',
        'NotHumpEqual;': '\u224f\u0338',
        'notin;': '\u2209',
        'notindot;': '\u22f5\u0338',
        'notinE;': '\u22f9\u0338',
        'notinva;': '\u2209',
        'notinvb;': '\u22f7',
        'notinvc;': '\u22f6',
        'NotLeftTriangle;': '\u22ea',
        'NotLeftTriangleBar;': '\u29cf\u0338',
        'NotLeftTriangleEqual;': '\u22ec',
        'NotLess;': '\u226e',
        'NotLessEqual;': '\u2270',
        'NotLessGreater;': '\u2278',
        'NotLessLess;': '\u226a\u0338',
        'NotLessSlantEqual;': '\u2a7d\u0338',
        'NotLessTilde;': '\u2274',
        'NotNestedGreaterGreater;': '\u2aa2\u0338',
        'NotNestedLessLess;': '\u2aa1\u0338',
        'notni;': '\u220c',
        'notniva;': '\u220c',
        'notnivb;': '\u22fe',
        'notnivc;': '\u22fd',
        'NotPrecedes;': '\u2280',
        'NotPrecedesEqual;': '\u2aaf\u0338',
        'NotPrecedesSlantEqual;': '\u22e0',
        'NotReverseElement;': '\u220c',
        'NotRightTriangle;': '\u22eb',
        'NotRightTriangleBar;': '\u29d0\u0338',
        'NotRightTriangleEqual;': '\u22ed',
        'NotSquareSubset;': '\u228f\u0338',
        'NotSquareSubsetEqual;': '\u22e2',
        'NotSquareSuperset;': '\u2290\u0338',
        'NotSquareSupersetEqual;': '\u22e3',
        'NotSubset;': '\u2282\u20d2',
        'NotSubsetEqual;': '\u2288',
        'NotSucceeds;': '\u2281',
        'NotSucceedsEqual;': '\u2ab0\u0338',
        'NotSucceedsSlantEqual;': '\u22e1',
        'NotSucceedsTilde;': '\u227f\u0338',
        'NotSuperset;': '\u2283\u20d2',
        'NotSupersetEqual;': '\u2289',
        'NotTilde;': '\u2241',
        'NotTildeEqual;': '\u2244',
        'NotTildeFullEqual;': '\u2247',
        'NotTildeTilde;': '\u2249',
        'NotVerticalBar;': '\u2224',
        'npar;': '\u2226',
        'nparallel;': '\u2226',
        'nparsl;': '\u2afd\u20e5',
        'npart;': '\u2202\u0338',
        'npolint;': '\u2a14',
        'npr;': '\u2280',
        'nprcue;': '\u22e0',
        'npre;': '\u2aaf\u0338',
        'nprec;': '\u2280',
        'npreceq;': '\u2aaf\u0338',
        'nrArr;': '\u21cf',
        'nrarr;': '\u219b',
        'nrarrc;': '\u2933\u0338',
        'nrarrw;': '\u219d\u0338',
        'nRightarrow;': '\u21cf',
        'nrightarrow;': '\u219b',
        'nrtri;': '\u22eb',
        'nrtrie;': '\u22ed',
        'nsc;': '\u2281',
        'nsccue;': '\u22e1',
        'nsce;': '\u2ab0\u0338',
        'Nscr;': '\ud835\udca9',
        'nscr;': '\ud835\udcc3',
        'nshortmid;': '\u2224',
        'nshortparallel;': '\u2226',
        'nsim;': '\u2241',
        'nsime;': '\u2244',
        'nsimeq;': '\u2244',
        'nsmid;': '\u2224',
        'nspar;': '\u2226',
        'nsqsube;': '\u22e2',
        'nsqsupe;': '\u22e3',
        'nsub;': '\u2284',
        'nsubE;': '\u2ac5\u0338',
        'nsube;': '\u2288',
        'nsubset;': '\u2282\u20d2',
        'nsubseteq;': '\u2288',
        'nsubseteqq;': '\u2ac5\u0338',
        'nsucc;': '\u2281',
        'nsucceq;': '\u2ab0\u0338',
        'nsup;': '\u2285',
        'nsupE;': '\u2ac6\u0338',
        'nsupe;': '\u2289',
        'nsupset;': '\u2283\u20d2',
        'nsupseteq;': '\u2289',
        'nsupseteqq;': '\u2ac6\u0338',
        'ntgl;': '\u2279',
        'Ntilde;': '\xd1',
        Ntilde: '\xd1',
        'ntilde;': '\xf1',
        ntilde: '\xf1',
        'ntlg;': '\u2278',
        'ntriangleleft;': '\u22ea',
        'ntrianglelefteq;': '\u22ec',
        'ntriangleright;': '\u22eb',
        'ntrianglerighteq;': '\u22ed',
        'Nu;': '\u039d',
        'nu;': '\u03bd',
        'num;': '#',
        'numero;': '\u2116',
        'numsp;': '\u2007',
        'nvap;': '\u224d\u20d2',
        'nVDash;': '\u22af',
        'nVdash;': '\u22ae',
        'nvDash;': '\u22ad',
        'nvdash;': '\u22ac',
        'nvge;': '\u2265\u20d2',
        'nvgt;': '>\u20d2',
        'nvHarr;': '\u2904',
        'nvinfin;': '\u29de',
        'nvlArr;': '\u2902',
        'nvle;': '\u2264\u20d2',
        'nvlt;': '<\u20d2',
        'nvltrie;': '\u22b4\u20d2',
        'nvrArr;': '\u2903',
        'nvrtrie;': '\u22b5\u20d2',
        'nvsim;': '\u223c\u20d2',
        'nwarhk;': '\u2923',
        'nwArr;': '\u21d6',
        'nwarr;': '\u2196',
        'nwarrow;': '\u2196',
        'nwnear;': '\u2927',
        'Oacute;': '\xd3',
        Oacute: '\xd3',
        'oacute;': '\xf3',
        oacute: '\xf3',
        'oast;': '\u229b',
        'ocir;': '\u229a',
        'Ocirc;': '\xd4',
        Ocirc: '\xd4',
        'ocirc;': '\xf4',
        ocirc: '\xf4',
        'Ocy;': '\u041e',
        'ocy;': '\u043e',
        'odash;': '\u229d',
        'Odblac;': '\u0150',
        'odblac;': '\u0151',
        'odiv;': '\u2a38',
        'odot;': '\u2299',
        'odsold;': '\u29bc',
        'OElig;': '\u0152',
        'oelig;': '\u0153',
        'ofcir;': '\u29bf',
        'Ofr;': '\ud835\udd12',
        'ofr;': '\ud835\udd2c',
        'ogon;': '\u02db',
        'Ograve;': '\xd2',
        Ograve: '\xd2',
        'ograve;': '\xf2',
        ograve: '\xf2',
        'ogt;': '\u29c1',
        'ohbar;': '\u29b5',
        'ohm;': '\u03a9',
        'oint;': '\u222e',
        'olarr;': '\u21ba',
        'olcir;': '\u29be',
        'olcross;': '\u29bb',
        'oline;': '\u203e',
        'olt;': '\u29c0',
        'Omacr;': '\u014c',
        'omacr;': '\u014d',
        'Omega;': '\u03a9',
        'omega;': '\u03c9',
        'Omicron;': '\u039f',
        'omicron;': '\u03bf',
        'omid;': '\u29b6',
        'ominus;': '\u2296',
        'Oopf;': '\ud835\udd46',
        'oopf;': '\ud835\udd60',
        'opar;': '\u29b7',
        'OpenCurlyDoubleQuote;': '\u201c',
        'OpenCurlyQuote;': '\u2018',
        'operp;': '\u29b9',
        'oplus;': '\u2295',
        'Or;': '\u2a54',
        'or;': '\u2228',
        'orarr;': '\u21bb',
        'ord;': '\u2a5d',
        'order;': '\u2134',
        'orderof;': '\u2134',
        'ordf;': '\xaa',
        ordf: '\xaa',
        'ordm;': '\xba',
        ordm: '\xba',
        'origof;': '\u22b6',
        'oror;': '\u2a56',
        'orslope;': '\u2a57',
        'orv;': '\u2a5b',
        'oS;': '\u24c8',
        'Oscr;': '\ud835\udcaa',
        'oscr;': '\u2134',
        'Oslash;': '\xd8',
        Oslash: '\xd8',
        'oslash;': '\xf8',
        oslash: '\xf8',
        'osol;': '\u2298',
        'Otilde;': '\xd5',
        Otilde: '\xd5',
        'otilde;': '\xf5',
        otilde: '\xf5',
        'Otimes;': '\u2a37',
        'otimes;': '\u2297',
        'otimesas;': '\u2a36',
        'Ouml;': '\xd6',
        Ouml: '\xd6',
        'ouml;': '\xf6',
        ouml: '\xf6',
        'ovbar;': '\u233d',
        'OverBar;': '\u203e',
        'OverBrace;': '\u23de',
        'OverBracket;': '\u23b4',
        'OverParenthesis;': '\u23dc',
        'par;': '\u2225',
        'para;': '\xb6',
        para: '\xb6',
        'parallel;': '\u2225',
        'parsim;': '\u2af3',
        'parsl;': '\u2afd',
        'part;': '\u2202',
        'PartialD;': '\u2202',
        'Pcy;': '\u041f',
        'pcy;': '\u043f',
        'percnt;': '%',
        'period;': '.',
        'permil;': '\u2030',
        'perp;': '\u22a5',
        'pertenk;': '\u2031',
        'Pfr;': '\ud835\udd13',
        'pfr;': '\ud835\udd2d',
        'Phi;': '\u03a6',
        'phi;': '\u03c6',
        'phiv;': '\u03d5',
        'phmmat;': '\u2133',
        'phone;': '\u260e',
        'Pi;': '\u03a0',
        'pi;': '\u03c0',
        'pitchfork;': '\u22d4',
        'piv;': '\u03d6',
        'planck;': '\u210f',
        'planckh;': '\u210e',
        'plankv;': '\u210f',
        'plus;': '+',
        'plusacir;': '\u2a23',
        'plusb;': '\u229e',
        'pluscir;': '\u2a22',
        'plusdo;': '\u2214',
        'plusdu;': '\u2a25',
        'pluse;': '\u2a72',
        'PlusMinus;': '\xb1',
        'plusmn;': '\xb1',
        plusmn: '\xb1',
        'plussim;': '\u2a26',
        'plustwo;': '\u2a27',
        'pm;': '\xb1',
        'Poincareplane;': '\u210c',
        'pointint;': '\u2a15',
        'Popf;': '\u2119',
        'popf;': '\ud835\udd61',
        'pound;': '\xa3',
        pound: '\xa3',
        'Pr;': '\u2abb',
        'pr;': '\u227a',
        'prap;': '\u2ab7',
        'prcue;': '\u227c',
        'prE;': '\u2ab3',
        'pre;': '\u2aaf',
        'prec;': '\u227a',
        'precapprox;': '\u2ab7',
        'preccurlyeq;': '\u227c',
        'Precedes;': '\u227a',
        'PrecedesEqual;': '\u2aaf',
        'PrecedesSlantEqual;': '\u227c',
        'PrecedesTilde;': '\u227e',
        'preceq;': '\u2aaf',
        'precnapprox;': '\u2ab9',
        'precneqq;': '\u2ab5',
        'precnsim;': '\u22e8',
        'precsim;': '\u227e',
        'Prime;': '\u2033',
        'prime;': '\u2032',
        'primes;': '\u2119',
        'prnap;': '\u2ab9',
        'prnE;': '\u2ab5',
        'prnsim;': '\u22e8',
        'prod;': '\u220f',
        'Product;': '\u220f',
        'profalar;': '\u232e',
        'profline;': '\u2312',
        'profsurf;': '\u2313',
        'prop;': '\u221d',
        'Proportion;': '\u2237',
        'Proportional;': '\u221d',
        'propto;': '\u221d',
        'prsim;': '\u227e',
        'prurel;': '\u22b0',
        'Pscr;': '\ud835\udcab',
        'pscr;': '\ud835\udcc5',
        'Psi;': '\u03a8',
        'psi;': '\u03c8',
        'puncsp;': '\u2008',
        'Qfr;': '\ud835\udd14',
        'qfr;': '\ud835\udd2e',
        'qint;': '\u2a0c',
        'Qopf;': '\u211a',
        'qopf;': '\ud835\udd62',
        'qprime;': '\u2057',
        'Qscr;': '\ud835\udcac',
        'qscr;': '\ud835\udcc6',
        'quaternions;': '\u210d',
        'quatint;': '\u2a16',
        'quest;': '?',
        'questeq;': '\u225f',
        'QUOT;': '"',
        QUOT: '"',
        'quot;': '"',
        quot: '"',
        'rAarr;': '\u21db',
        'race;': '\u223d\u0331',
        'Racute;': '\u0154',
        'racute;': '\u0155',
        'radic;': '\u221a',
        'raemptyv;': '\u29b3',
        'Rang;': '\u27eb',
        'rang;': '\u27e9',
        'rangd;': '\u2992',
        'range;': '\u29a5',
        'rangle;': '\u27e9',
        'raquo;': '\xbb',
        raquo: '\xbb',
        'Rarr;': '\u21a0',
        'rArr;': '\u21d2',
        'rarr;': '\u2192',
        'rarrap;': '\u2975',
        'rarrb;': '\u21e5',
        'rarrbfs;': '\u2920',
        'rarrc;': '\u2933',
        'rarrfs;': '\u291e',
        'rarrhk;': '\u21aa',
        'rarrlp;': '\u21ac',
        'rarrpl;': '\u2945',
        'rarrsim;': '\u2974',
        'Rarrtl;': '\u2916',
        'rarrtl;': '\u21a3',
        'rarrw;': '\u219d',
        'rAtail;': '\u291c',
        'ratail;': '\u291a',
        'ratio;': '\u2236',
        'rationals;': '\u211a',
        'RBarr;': '\u2910',
        'rBarr;': '\u290f',
        'rbarr;': '\u290d',
        'rbbrk;': '\u2773',
        'rbrace;': '}',
        'rbrack;': ']',
        'rbrke;': '\u298c',
        'rbrksld;': '\u298e',
        'rbrkslu;': '\u2990',
        'Rcaron;': '\u0158',
        'rcaron;': '\u0159',
        'Rcedil;': '\u0156',
        'rcedil;': '\u0157',
        'rceil;': '\u2309',
        'rcub;': '}',
        'Rcy;': '\u0420',
        'rcy;': '\u0440',
        'rdca;': '\u2937',
        'rdldhar;': '\u2969',
        'rdquo;': '\u201d',
        'rdquor;': '\u201d',
        'rdsh;': '\u21b3',
        'Re;': '\u211c',
        'real;': '\u211c',
        'realine;': '\u211b',
        'realpart;': '\u211c',
        'reals;': '\u211d',
        'rect;': '\u25ad',
        'REG;': '\xae',
        REG: '\xae',
        'reg;': '\xae',
        reg: '\xae',
        'ReverseElement;': '\u220b',
        'ReverseEquilibrium;': '\u21cb',
        'ReverseUpEquilibrium;': '\u296f',
        'rfisht;': '\u297d',
        'rfloor;': '\u230b',
        'Rfr;': '\u211c',
        'rfr;': '\ud835\udd2f',
        'rHar;': '\u2964',
        'rhard;': '\u21c1',
        'rharu;': '\u21c0',
        'rharul;': '\u296c',
        'Rho;': '\u03a1',
        'rho;': '\u03c1',
        'rhov;': '\u03f1',
        'RightAngleBracket;': '\u27e9',
        'RightArrow;': '\u2192',
        'Rightarrow;': '\u21d2',
        'rightarrow;': '\u2192',
        'RightArrowBar;': '\u21e5',
        'RightArrowLeftArrow;': '\u21c4',
        'rightarrowtail;': '\u21a3',
        'RightCeiling;': '\u2309',
        'RightDoubleBracket;': '\u27e7',
        'RightDownTeeVector;': '\u295d',
        'RightDownVector;': '\u21c2',
        'RightDownVectorBar;': '\u2955',
        'RightFloor;': '\u230b',
        'rightharpoondown;': '\u21c1',
        'rightharpoonup;': '\u21c0',
        'rightleftarrows;': '\u21c4',
        'rightleftharpoons;': '\u21cc',
        'rightrightarrows;': '\u21c9',
        'rightsquigarrow;': '\u219d',
        'RightTee;': '\u22a2',
        'RightTeeArrow;': '\u21a6',
        'RightTeeVector;': '\u295b',
        'rightthreetimes;': '\u22cc',
        'RightTriangle;': '\u22b3',
        'RightTriangleBar;': '\u29d0',
        'RightTriangleEqual;': '\u22b5',
        'RightUpDownVector;': '\u294f',
        'RightUpTeeVector;': '\u295c',
        'RightUpVector;': '\u21be',
        'RightUpVectorBar;': '\u2954',
        'RightVector;': '\u21c0',
        'RightVectorBar;': '\u2953',
        'ring;': '\u02da',
        'risingdotseq;': '\u2253',
        'rlarr;': '\u21c4',
        'rlhar;': '\u21cc',
        'rlm;': '\u200f',
        'rmoust;': '\u23b1',
        'rmoustache;': '\u23b1',
        'rnmid;': '\u2aee',
        'roang;': '\u27ed',
        'roarr;': '\u21fe',
        'robrk;': '\u27e7',
        'ropar;': '\u2986',
        'Ropf;': '\u211d',
        'ropf;': '\ud835\udd63',
        'roplus;': '\u2a2e',
        'rotimes;': '\u2a35',
        'RoundImplies;': '\u2970',
        'rpar;': ')',
        'rpargt;': '\u2994',
        'rppolint;': '\u2a12',
        'rrarr;': '\u21c9',
        'Rrightarrow;': '\u21db',
        'rsaquo;': '\u203a',
        'Rscr;': '\u211b',
        'rscr;': '\ud835\udcc7',
        'Rsh;': '\u21b1',
        'rsh;': '\u21b1',
        'rsqb;': ']',
        'rsquo;': '\u2019',
        'rsquor;': '\u2019',
        'rthree;': '\u22cc',
        'rtimes;': '\u22ca',
        'rtri;': '\u25b9',
        'rtrie;': '\u22b5',
        'rtrif;': '\u25b8',
        'rtriltri;': '\u29ce',
        'RuleDelayed;': '\u29f4',
        'ruluhar;': '\u2968',
        'rx;': '\u211e',
        'Sacute;': '\u015a',
        'sacute;': '\u015b',
        'sbquo;': '\u201a',
        'Sc;': '\u2abc',
        'sc;': '\u227b',
        'scap;': '\u2ab8',
        'Scaron;': '\u0160',
        'scaron;': '\u0161',
        'sccue;': '\u227d',
        'scE;': '\u2ab4',
        'sce;': '\u2ab0',
        'Scedil;': '\u015e',
        'scedil;': '\u015f',
        'Scirc;': '\u015c',
        'scirc;': '\u015d',
        'scnap;': '\u2aba',
        'scnE;': '\u2ab6',
        'scnsim;': '\u22e9',
        'scpolint;': '\u2a13',
        'scsim;': '\u227f',
        'Scy;': '\u0421',
        'scy;': '\u0441',
        'sdot;': '\u22c5',
        'sdotb;': '\u22a1',
        'sdote;': '\u2a66',
        'searhk;': '\u2925',
        'seArr;': '\u21d8',
        'searr;': '\u2198',
        'searrow;': '\u2198',
        'sect;': '\xa7',
        sect: '\xa7',
        'semi;': ';',
        'seswar;': '\u2929',
        'setminus;': '\u2216',
        'setmn;': '\u2216',
        'sext;': '\u2736',
        'Sfr;': '\ud835\udd16',
        'sfr;': '\ud835\udd30',
        'sfrown;': '\u2322',
        'sharp;': '\u266f',
        'SHCHcy;': '\u0429',
        'shchcy;': '\u0449',
        'SHcy;': '\u0428',
        'shcy;': '\u0448',
        'ShortDownArrow;': '\u2193',
        'ShortLeftArrow;': '\u2190',
        'shortmid;': '\u2223',
        'shortparallel;': '\u2225',
        'ShortRightArrow;': '\u2192',
        'ShortUpArrow;': '\u2191',
        'shy;': '\xad',
        shy: '\xad',
        'Sigma;': '\u03a3',
        'sigma;': '\u03c3',
        'sigmaf;': '\u03c2',
        'sigmav;': '\u03c2',
        'sim;': '\u223c',
        'simdot;': '\u2a6a',
        'sime;': '\u2243',
        'simeq;': '\u2243',
        'simg;': '\u2a9e',
        'simgE;': '\u2aa0',
        'siml;': '\u2a9d',
        'simlE;': '\u2a9f',
        'simne;': '\u2246',
        'simplus;': '\u2a24',
        'simrarr;': '\u2972',
        'slarr;': '\u2190',
        'SmallCircle;': '\u2218',
        'smallsetminus;': '\u2216',
        'smashp;': '\u2a33',
        'smeparsl;': '\u29e4',
        'smid;': '\u2223',
        'smile;': '\u2323',
        'smt;': '\u2aaa',
        'smte;': '\u2aac',
        'smtes;': '\u2aac\ufe00',
        'SOFTcy;': '\u042c',
        'softcy;': '\u044c',
        'sol;': '/',
        'solb;': '\u29c4',
        'solbar;': '\u233f',
        'Sopf;': '\ud835\udd4a',
        'sopf;': '\ud835\udd64',
        'spades;': '\u2660',
        'spadesuit;': '\u2660',
        'spar;': '\u2225',
        'sqcap;': '\u2293',
        'sqcaps;': '\u2293\ufe00',
        'sqcup;': '\u2294',
        'sqcups;': '\u2294\ufe00',
        'Sqrt;': '\u221a',
        'sqsub;': '\u228f',
        'sqsube;': '\u2291',
        'sqsubset;': '\u228f',
        'sqsubseteq;': '\u2291',
        'sqsup;': '\u2290',
        'sqsupe;': '\u2292',
        'sqsupset;': '\u2290',
        'sqsupseteq;': '\u2292',
        'squ;': '\u25a1',
        'Square;': '\u25a1',
        'square;': '\u25a1',
        'SquareIntersection;': '\u2293',
        'SquareSubset;': '\u228f',
        'SquareSubsetEqual;': '\u2291',
        'SquareSuperset;': '\u2290',
        'SquareSupersetEqual;': '\u2292',
        'SquareUnion;': '\u2294',
        'squarf;': '\u25aa',
        'squf;': '\u25aa',
        'srarr;': '\u2192',
        'Sscr;': '\ud835\udcae',
        'sscr;': '\ud835\udcc8',
        'ssetmn;': '\u2216',
        'ssmile;': '\u2323',
        'sstarf;': '\u22c6',
        'Star;': '\u22c6',
        'star;': '\u2606',
        'starf;': '\u2605',
        'straightepsilon;': '\u03f5',
        'straightphi;': '\u03d5',
        'strns;': '\xaf',
        'Sub;': '\u22d0',
        'sub;': '\u2282',
        'subdot;': '\u2abd',
        'subE;': '\u2ac5',
        'sube;': '\u2286',
        'subedot;': '\u2ac3',
        'submult;': '\u2ac1',
        'subnE;': '\u2acb',
        'subne;': '\u228a',
        'subplus;': '\u2abf',
        'subrarr;': '\u2979',
        'Subset;': '\u22d0',
        'subset;': '\u2282',
        'subseteq;': '\u2286',
        'subseteqq;': '\u2ac5',
        'SubsetEqual;': '\u2286',
        'subsetneq;': '\u228a',
        'subsetneqq;': '\u2acb',
        'subsim;': '\u2ac7',
        'subsub;': '\u2ad5',
        'subsup;': '\u2ad3',
        'succ;': '\u227b',
        'succapprox;': '\u2ab8',
        'succcurlyeq;': '\u227d',
        'Succeeds;': '\u227b',
        'SucceedsEqual;': '\u2ab0',
        'SucceedsSlantEqual;': '\u227d',
        'SucceedsTilde;': '\u227f',
        'succeq;': '\u2ab0',
        'succnapprox;': '\u2aba',
        'succneqq;': '\u2ab6',
        'succnsim;': '\u22e9',
        'succsim;': '\u227f',
        'SuchThat;': '\u220b',
        'Sum;': '\u2211',
        'sum;': '\u2211',
        'sung;': '\u266a',
        'Sup;': '\u22d1',
        'sup;': '\u2283',
        'sup1;': '\xb9',
        sup1: '\xb9',
        'sup2;': '\xb2',
        sup2: '\xb2',
        'sup3;': '\xb3',
        sup3: '\xb3',
        'supdot;': '\u2abe',
        'supdsub;': '\u2ad8',
        'supE;': '\u2ac6',
        'supe;': '\u2287',
        'supedot;': '\u2ac4',
        'Superset;': '\u2283',
        'SupersetEqual;': '\u2287',
        'suphsol;': '\u27c9',
        'suphsub;': '\u2ad7',
        'suplarr;': '\u297b',
        'supmult;': '\u2ac2',
        'supnE;': '\u2acc',
        'supne;': '\u228b',
        'supplus;': '\u2ac0',
        'Supset;': '\u22d1',
        'supset;': '\u2283',
        'supseteq;': '\u2287',
        'supseteqq;': '\u2ac6',
        'supsetneq;': '\u228b',
        'supsetneqq;': '\u2acc',
        'supsim;': '\u2ac8',
        'supsub;': '\u2ad4',
        'supsup;': '\u2ad6',
        'swarhk;': '\u2926',
        'swArr;': '\u21d9',
        'swarr;': '\u2199',
        'swarrow;': '\u2199',
        'swnwar;': '\u292a',
        'szlig;': '\xdf',
        szlig: '\xdf',
        'Tab;': '\t',
        'target;': '\u2316',
        'Tau;': '\u03a4',
        'tau;': '\u03c4',
        'tbrk;': '\u23b4',
        'Tcaron;': '\u0164',
        'tcaron;': '\u0165',
        'Tcedil;': '\u0162',
        'tcedil;': '\u0163',
        'Tcy;': '\u0422',
        'tcy;': '\u0442',
        'tdot;': '\u20db',
        'telrec;': '\u2315',
        'Tfr;': '\ud835\udd17',
        'tfr;': '\ud835\udd31',
        'there4;': '\u2234',
        'Therefore;': '\u2234',
        'therefore;': '\u2234',
        'Theta;': '\u0398',
        'theta;': '\u03b8',
        'thetasym;': '\u03d1',
        'thetav;': '\u03d1',
        'thickapprox;': '\u2248',
        'thicksim;': '\u223c',
        'ThickSpace;': '\u205f\u200a',
        'thinsp;': '\u2009',
        'ThinSpace;': '\u2009',
        'thkap;': '\u2248',
        'thksim;': '\u223c',
        'THORN;': '\xde',
        THORN: '\xde',
        'thorn;': '\xfe',
        thorn: '\xfe',
        'Tilde;': '\u223c',
        'tilde;': '\u02dc',
        'TildeEqual;': '\u2243',
        'TildeFullEqual;': '\u2245',
        'TildeTilde;': '\u2248',
        'times;': '\xd7',
        times: '\xd7',
        'timesb;': '\u22a0',
        'timesbar;': '\u2a31',
        'timesd;': '\u2a30',
        'tint;': '\u222d',
        'toea;': '\u2928',
        'top;': '\u22a4',
        'topbot;': '\u2336',
        'topcir;': '\u2af1',
        'Topf;': '\ud835\udd4b',
        'topf;': '\ud835\udd65',
        'topfork;': '\u2ada',
        'tosa;': '\u2929',
        'tprime;': '\u2034',
        'TRADE;': '\u2122',
        'trade;': '\u2122',
        'triangle;': '\u25b5',
        'triangledown;': '\u25bf',
        'triangleleft;': '\u25c3',
        'trianglelefteq;': '\u22b4',
        'triangleq;': '\u225c',
        'triangleright;': '\u25b9',
        'trianglerighteq;': '\u22b5',
        'tridot;': '\u25ec',
        'trie;': '\u225c',
        'triminus;': '\u2a3a',
        'TripleDot;': '\u20db',
        'triplus;': '\u2a39',
        'trisb;': '\u29cd',
        'tritime;': '\u2a3b',
        'trpezium;': '\u23e2',
        'Tscr;': '\ud835\udcaf',
        'tscr;': '\ud835\udcc9',
        'TScy;': '\u0426',
        'tscy;': '\u0446',
        'TSHcy;': '\u040b',
        'tshcy;': '\u045b',
        'Tstrok;': '\u0166',
        'tstrok;': '\u0167',
        'twixt;': '\u226c',
        'twoheadleftarrow;': '\u219e',
        'twoheadrightarrow;': '\u21a0',
        'Uacute;': '\xda',
        Uacute: '\xda',
        'uacute;': '\xfa',
        uacute: '\xfa',
        'Uarr;': '\u219f',
        'uArr;': '\u21d1',
        'uarr;': '\u2191',
        'Uarrocir;': '\u2949',
        'Ubrcy;': '\u040e',
        'ubrcy;': '\u045e',
        'Ubreve;': '\u016c',
        'ubreve;': '\u016d',
        'Ucirc;': '\xdb',
        Ucirc: '\xdb',
        'ucirc;': '\xfb',
        ucirc: '\xfb',
        'Ucy;': '\u0423',
        'ucy;': '\u0443',
        'udarr;': '\u21c5',
        'Udblac;': '\u0170',
        'udblac;': '\u0171',
        'udhar;': '\u296e',
        'ufisht;': '\u297e',
        'Ufr;': '\ud835\udd18',
        'ufr;': '\ud835\udd32',
        'Ugrave;': '\xd9',
        Ugrave: '\xd9',
        'ugrave;': '\xf9',
        ugrave: '\xf9',
        'uHar;': '\u2963',
        'uharl;': '\u21bf',
        'uharr;': '\u21be',
        'uhblk;': '\u2580',
        'ulcorn;': '\u231c',
        'ulcorner;': '\u231c',
        'ulcrop;': '\u230f',
        'ultri;': '\u25f8',
        'Umacr;': '\u016a',
        'umacr;': '\u016b',
        'uml;': '\xa8',
        uml: '\xa8',
        'UnderBar;': '_',
        'UnderBrace;': '\u23df',
        'UnderBracket;': '\u23b5',
        'UnderParenthesis;': '\u23dd',
        'Union;': '\u22c3',
        'UnionPlus;': '\u228e',
        'Uogon;': '\u0172',
        'uogon;': '\u0173',
        'Uopf;': '\ud835\udd4c',
        'uopf;': '\ud835\udd66',
        'UpArrow;': '\u2191',
        'Uparrow;': '\u21d1',
        'uparrow;': '\u2191',
        'UpArrowBar;': '\u2912',
        'UpArrowDownArrow;': '\u21c5',
        'UpDownArrow;': '\u2195',
        'Updownarrow;': '\u21d5',
        'updownarrow;': '\u2195',
        'UpEquilibrium;': '\u296e',
        'upharpoonleft;': '\u21bf',
        'upharpoonright;': '\u21be',
        'uplus;': '\u228e',
        'UpperLeftArrow;': '\u2196',
        'UpperRightArrow;': '\u2197',
        'Upsi;': '\u03d2',
        'upsi;': '\u03c5',
        'upsih;': '\u03d2',
        'Upsilon;': '\u03a5',
        'upsilon;': '\u03c5',
        'UpTee;': '\u22a5',
        'UpTeeArrow;': '\u21a5',
        'upuparrows;': '\u21c8',
        'urcorn;': '\u231d',
        'urcorner;': '\u231d',
        'urcrop;': '\u230e',
        'Uring;': '\u016e',
        'uring;': '\u016f',
        'urtri;': '\u25f9',
        'Uscr;': '\ud835\udcb0',
        'uscr;': '\ud835\udcca',
        'utdot;': '\u22f0',
        'Utilde;': '\u0168',
        'utilde;': '\u0169',
        'utri;': '\u25b5',
        'utrif;': '\u25b4',
        'uuarr;': '\u21c8',
        'Uuml;': '\xdc',
        Uuml: '\xdc',
        'uuml;': '\xfc',
        uuml: '\xfc',
        'uwangle;': '\u29a7',
        'vangrt;': '\u299c',
        'varepsilon;': '\u03f5',
        'varkappa;': '\u03f0',
        'varnothing;': '\u2205',
        'varphi;': '\u03d5',
        'varpi;': '\u03d6',
        'varpropto;': '\u221d',
        'vArr;': '\u21d5',
        'varr;': '\u2195',
        'varrho;': '\u03f1',
        'varsigma;': '\u03c2',
        'varsubsetneq;': '\u228a\ufe00',
        'varsubsetneqq;': '\u2acb\ufe00',
        'varsupsetneq;': '\u228b\ufe00',
        'varsupsetneqq;': '\u2acc\ufe00',
        'vartheta;': '\u03d1',
        'vartriangleleft;': '\u22b2',
        'vartriangleright;': '\u22b3',
        'Vbar;': '\u2aeb',
        'vBar;': '\u2ae8',
        'vBarv;': '\u2ae9',
        'Vcy;': '\u0412',
        'vcy;': '\u0432',
        'VDash;': '\u22ab',
        'Vdash;': '\u22a9',
        'vDash;': '\u22a8',
        'vdash;': '\u22a2',
        'Vdashl;': '\u2ae6',
        'Vee;': '\u22c1',
        'vee;': '\u2228',
        'veebar;': '\u22bb',
        'veeeq;': '\u225a',
        'vellip;': '\u22ee',
        'Verbar;': '\u2016',
        'verbar;': '|',
        'Vert;': '\u2016',
        'vert;': '|',
        'VerticalBar;': '\u2223',
        'VerticalLine;': '|',
        'VerticalSeparator;': '\u2758',
        'VerticalTilde;': '\u2240',
        'VeryThinSpace;': '\u200a',
        'Vfr;': '\ud835\udd19',
        'vfr;': '\ud835\udd33',
        'vltri;': '\u22b2',
        'vnsub;': '\u2282\u20d2',
        'vnsup;': '\u2283\u20d2',
        'Vopf;': '\ud835\udd4d',
        'vopf;': '\ud835\udd67',
        'vprop;': '\u221d',
        'vrtri;': '\u22b3',
        'Vscr;': '\ud835\udcb1',
        'vscr;': '\ud835\udccb',
        'vsubnE;': '\u2acb\ufe00',
        'vsubne;': '\u228a\ufe00',
        'vsupnE;': '\u2acc\ufe00',
        'vsupne;': '\u228b\ufe00',
        'Vvdash;': '\u22aa',
        'vzigzag;': '\u299a',
        'Wcirc;': '\u0174',
        'wcirc;': '\u0175',
        'wedbar;': '\u2a5f',
        'Wedge;': '\u22c0',
        'wedge;': '\u2227',
        'wedgeq;': '\u2259',
        'weierp;': '\u2118',
        'Wfr;': '\ud835\udd1a',
        'wfr;': '\ud835\udd34',
        'Wopf;': '\ud835\udd4e',
        'wopf;': '\ud835\udd68',
        'wp;': '\u2118',
        'wr;': '\u2240',
        'wreath;': '\u2240',
        'Wscr;': '\ud835\udcb2',
        'wscr;': '\ud835\udccc',
        'xcap;': '\u22c2',
        'xcirc;': '\u25ef',
        'xcup;': '\u22c3',
        'xdtri;': '\u25bd',
        'Xfr;': '\ud835\udd1b',
        'xfr;': '\ud835\udd35',
        'xhArr;': '\u27fa',
        'xharr;': '\u27f7',
        'Xi;': '\u039e',
        'xi;': '\u03be',
        'xlArr;': '\u27f8',
        'xlarr;': '\u27f5',
        'xmap;': '\u27fc',
        'xnis;': '\u22fb',
        'xodot;': '\u2a00',
        'Xopf;': '\ud835\udd4f',
        'xopf;': '\ud835\udd69',
        'xoplus;': '\u2a01',
        'xotime;': '\u2a02',
        'xrArr;': '\u27f9',
        'xrarr;': '\u27f6',
        'Xscr;': '\ud835\udcb3',
        'xscr;': '\ud835\udccd',
        'xsqcup;': '\u2a06',
        'xuplus;': '\u2a04',
        'xutri;': '\u25b3',
        'xvee;': '\u22c1',
        'xwedge;': '\u22c0',
        'Yacute;': '\xdd',
        Yacute: '\xdd',
        'yacute;': '\xfd',
        yacute: '\xfd',
        'YAcy;': '\u042f',
        'yacy;': '\u044f',
        'Ycirc;': '\u0176',
        'ycirc;': '\u0177',
        'Ycy;': '\u042b',
        'ycy;': '\u044b',
        'yen;': '\xa5',
        yen: '\xa5',
        'Yfr;': '\ud835\udd1c',
        'yfr;': '\ud835\udd36',
        'YIcy;': '\u0407',
        'yicy;': '\u0457',
        'Yopf;': '\ud835\udd50',
        'yopf;': '\ud835\udd6a',
        'Yscr;': '\ud835\udcb4',
        'yscr;': '\ud835\udcce',
        'YUcy;': '\u042e',
        'yucy;': '\u044e',
        'Yuml;': '\u0178',
        'yuml;': '\xff',
        yuml: '\xff',
        'Zacute;': '\u0179',
        'zacute;': '\u017a',
        'Zcaron;': '\u017d',
        'zcaron;': '\u017e',
        'Zcy;': '\u0417',
        'zcy;': '\u0437',
        'Zdot;': '\u017b',
        'zdot;': '\u017c',
        'zeetrf;': '\u2128',
        'ZeroWidthSpace;': '\u200b',
        'Zeta;': '\u0396',
        'zeta;': '\u03b6',
        'Zfr;': '\u2128',
        'zfr;': '\ud835\udd37',
        'ZHcy;': '\u0416',
        'zhcy;': '\u0436',
        'zigrarr;': '\u21dd',
        'Zopf;': '\u2124',
        'zopf;': '\ud835\udd6b',
        'Zscr;': '\ud835\udcb5',
        'zscr;': '\ud835\udccf',
        'zwj;': '\u200d',
        'zwnj;': '\u200c',
      }
      function qe(e, t) {
        if (e.length < t.length) return !1
        for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1
        return !0
      }
      function Ne(e, t) {
        var n = e.length - t.length
        return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t
      }
      var Fe = 'a'.charCodeAt(0),
        je = 'z'.charCodeAt(0),
        Be = 'A'.charCodeAt(0),
        Ge = 'Z'.charCodeAt(0),
        Ve = '0'.charCodeAt(0),
        Ke = '9'.charCodeAt(0)
      function Je(e, t) {
        var n = e.charCodeAt(t)
        return (Fe <= n && n <= je) || (Be <= n && n <= Ge) || (Ve <= n && n <= Ke)
      }
      function Ye(e) {
        return 'undefined' !== typeof e
      }
      function Xe(e) {
        if (e) return 'string' === typeof e ? { kind: 'markdown', value: e } : { kind: 'markdown', value: e.value }
      }
      var $e = (function() {
        function e(e, t) {
          var n = this
          ;(this.id = e),
            (this._tags = []),
            (this._tagMap = {}),
            (this._valueSetMap = {}),
            (this._tags = t.tags || []),
            (this._globalAttributes = t.globalAttributes || []),
            this._tags.forEach(function(e) {
              n._tagMap[e.name.toLowerCase()] = e
            }),
            t.valueSets &&
              t.valueSets.forEach(function(e) {
                n._valueSetMap[e.name] = e.values
              })
        }
        return (
          (e.prototype.isApplicable = function() {
            return !0
          }),
          (e.prototype.getId = function() {
            return this.id
          }),
          (e.prototype.provideTags = function() {
            return this._tags
          }),
          (e.prototype.provideAttributes = function(e) {
            var t = [],
              n = function(e) {
                t.push(e)
              },
              i = this._tagMap[e.toLowerCase()]
            return i && i.attributes.forEach(n), this._globalAttributes.forEach(n), t
          }),
          (e.prototype.provideValues = function(e, t) {
            var n = this,
              i = []
            t = t.toLowerCase()
            var r = function(e) {
                e.forEach(function(e) {
                  e.name.toLowerCase() === t &&
                    (e.values &&
                      e.values.forEach(function(e) {
                        i.push(e)
                      }),
                    e.valueSet &&
                      n._valueSetMap[e.valueSet] &&
                      n._valueSetMap[e.valueSet].forEach(function(e) {
                        i.push(e)
                      }))
                })
              },
              a = this._tagMap[e.toLowerCase()]
            return a ? (r(a.attributes), r(this._globalAttributes), i) : []
          }),
          e
        )
      })()
      function Qe(e, t) {
        var n = { kind: t ? 'markdown' : 'plaintext', value: '' }
        if (e.description) {
          var i = Xe(e.description)
          i && (n.value += i.value)
        }
        if (
          (e.references &&
            e.references.length > 0 &&
            ((n.value += '\n\n'),
            (n.value += t
              ? e.references
                  .map(function(e) {
                    return '[' + e.name + '](' + e.url + ')'
                  })
                  .join(' | ')
              : e.references
                  .map(function(e) {
                    return e.name + ': ' + e.url
                  })
                  .join('\n'))),
          '' !== n.value)
        )
          return n
      }
      var Ze = function(e, t, n, i) {
          function r(e) {
            return e instanceof n
              ? e
              : new n(function(t) {
                  t(e)
                })
          }
          return new (n || (n = Promise))(function(n, a) {
            function o(e) {
              try {
                l(i.next(e))
              } catch (t) {
                a(t)
              }
            }
            function s(e) {
              try {
                l(i['throw'](e))
              } catch (t) {
                a(t)
              }
            }
            function l(e) {
              e.done ? n(e.value) : r(e.value).then(o, s)
            }
            l((i = i.apply(e, t || [])).next())
          })
        },
        et = function(e, t) {
          var n,
            i,
            r,
            a,
            o = {
              label: 0,
              sent: function() {
                if (1 & r[0]) throw r[1]
                return r[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (a = { next: s(0), throw: s(1), return: s(2) }),
            'function' === typeof Symbol &&
              (a[Symbol.iterator] = function() {
                return this
              }),
            a
          )
          function s(e) {
            return function(t) {
              return l([e, t])
            }
          }
          function l(a) {
            if (n) throw new TypeError('Generator is already executing.')
            while (o)
              try {
                if (
                  ((n = 1),
                  i &&
                    (r = 2 & a[0] ? i['return'] : a[0] ? i['throw'] || ((r = i['return']) && r.call(i), 0) : i.next) &&
                    !(r = r.call(i, a[1])).done)
                )
                  return r
                switch (((i = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                  case 0:
                  case 1:
                    r = a
                    break
                  case 4:
                    return o.label++, { value: a[1], done: !1 }
                  case 5:
                    o.label++, (i = a[1]), (a = [0])
                    continue
                  case 7:
                    ;(a = o.ops.pop()), o.trys.pop()
                    continue
                  default:
                    if (((r = o.trys), !(r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0]))) {
                      o = 0
                      continue
                    }
                    if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                      o.label = a[1]
                      break
                    }
                    if (6 === a[0] && o.label < r[1]) {
                      ;(o.label = r[1]), (r = a)
                      break
                    }
                    if (r && o.label < r[2]) {
                      ;(o.label = r[2]), o.ops.push(a)
                      break
                    }
                    r[2] && o.ops.pop(), o.trys.pop()
                    continue
                }
                a = t.call(e, o)
              } catch (s) {
                ;(a = [6, s]), (i = 0)
              } finally {
                n = r = 0
              }
            if (5 & a[0]) throw a[1]
            return { value: a[0] ? a[1] : void 0, done: !0 }
          }
        },
        tt = (function() {
          function e(e) {
            ;(this.readDirectory = e), (this.atributeCompletions = [])
          }
          return (
            (e.prototype.onHtmlAttributeValue = function(e) {
              at(e.tag, e.attribute) && this.atributeCompletions.push(e)
            }),
            (e.prototype.computeCompletions = function(e, t) {
              return Ze(this, void 0, void 0, function() {
                var n, i, r, a, o, s, l, c, h, d
                return et(this, function(u) {
                  switch (u.label) {
                    case 0:
                      ;(n = { items: [], isIncomplete: !1 }), (i = 0), (r = this.atributeCompletions), (u.label = 1)
                    case 1:
                      return i < r.length
                        ? ((a = r[i]),
                          (o = it(e.getText(a.range))),
                          rt(o) ? ('.' !== o && '..' !== o ? [3, 2] : ((n.isIncomplete = !0), [3, 4])) : [3, 4])
                        : [3, 5]
                    case 2:
                      return (s = ot(a.value, o, a.range)), [4, this.providePathSuggestions(a.value, s, e, t)]
                    case 3:
                      for (l = u.sent(), c = 0, h = l; c < h.length; c++) (d = h[c]), n.items.push(d)
                      u.label = 4
                    case 4:
                      return i++, [3, 1]
                    case 5:
                      return [2, n]
                  }
                })
              })
            }),
            (e.prototype.providePathSuggestions = function(e, t, n, i) {
              return Ze(this, void 0, void 0, function() {
                var r, a, o, s, l, c, h, d, u
                return et(this, function(p) {
                  switch (p.label) {
                    case 0:
                      if (((r = e.substring(0, e.lastIndexOf('/') + 1)), (a = i.resolveReference(r || '.', n.uri)), !a))
                        return [3, 4]
                      p.label = 1
                    case 1:
                      return p.trys.push([1, 3, , 4]), (o = []), [4, this.readDirectory(a)]
                    case 2:
                      for (s = p.sent(), l = 0, c = s; l < c.length; l++)
                        (h = c[l]),
                          (d = h[0]),
                          (u = h[1]),
                          d.charCodeAt(0) !== nt && o.push(st(d, u === ue.Directory, t))
                      return [2, o]
                    case 3:
                      return p.sent(), [3, 4]
                    case 4:
                      return [2, []]
                  }
                })
              })
            }),
            e
          )
        })(),
        nt = '.'.charCodeAt(0)
      function it(e) {
        return qe(e, "'") || qe(e, '"') ? e.slice(1, -1) : e
      }
      function rt(e) {
        return !(qe(e, 'http') || qe(e, 'https') || qe(e, '//'))
      }
      function at(e, t) {
        var n = ht[e]
        return !!n && ('string' === typeof n ? n === t : -1 !== n.indexOf(t))
      }
      function ot(e, t, n) {
        var i,
          a = e.lastIndexOf('/')
        if (-1 === a) i = ct(n, 1, -1)
        else {
          var o = t.slice(a + 1),
            s = lt(n.end, -1 - o.length),
            l = o.indexOf(' '),
            c = void 0
          ;(c = -1 !== l ? lt(s, l) : lt(n.end, -1)), (i = r.create(s, c))
        }
        return i
      }
      function st(e, t, n) {
        return t
          ? ((e += '/'),
            {
              label: e,
              kind: U.Folder,
              textEdit: _.replace(n, e),
              command: { title: 'Suggest', command: 'editor.action.triggerSuggest' },
            })
          : { label: e, kind: U.File, textEdit: _.replace(n, e) }
      }
      function lt(e, t) {
        return i.create(e.line, e.character + t)
      }
      function ct(e, t, n) {
        var i = lt(e.start, t),
          a = lt(e.end, n)
        return r.create(i, a)
      }
      var ht = {
          a: 'href',
          area: 'href',
          body: 'background',
          del: 'cite',
          form: 'action',
          frame: ['src', 'longdesc'],
          img: ['src', 'longdesc'],
          ins: 'cite',
          link: 'href',
          object: 'data',
          q: 'cite',
          script: 'src',
          audio: 'src',
          button: 'formaction',
          command: 'icon',
          embed: 'src',
          html: 'manifest',
          input: ['src', 'formaction'],
          source: 'src',
          track: 'src',
          video: ['src', 'poster'],
        },
        dt = function(e, t, n, i) {
          function r(e) {
            return e instanceof n
              ? e
              : new n(function(t) {
                  t(e)
                })
          }
          return new (n || (n = Promise))(function(n, a) {
            function o(e) {
              try {
                l(i.next(e))
              } catch (t) {
                a(t)
              }
            }
            function s(e) {
              try {
                l(i['throw'](e))
              } catch (t) {
                a(t)
              }
            }
            function l(e) {
              e.done ? n(e.value) : r(e.value).then(o, s)
            }
            l((i = i.apply(e, t || [])).next())
          })
        },
        ut = function(e, t) {
          var n,
            i,
            r,
            a,
            o = {
              label: 0,
              sent: function() {
                if (1 & r[0]) throw r[1]
                return r[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (a = { next: s(0), throw: s(1), return: s(2) }),
            'function' === typeof Symbol &&
              (a[Symbol.iterator] = function() {
                return this
              }),
            a
          )
          function s(e) {
            return function(t) {
              return l([e, t])
            }
          }
          function l(a) {
            if (n) throw new TypeError('Generator is already executing.')
            while (o)
              try {
                if (
                  ((n = 1),
                  i &&
                    (r = 2 & a[0] ? i['return'] : a[0] ? i['throw'] || ((r = i['return']) && r.call(i), 0) : i.next) &&
                    !(r = r.call(i, a[1])).done)
                )
                  return r
                switch (((i = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                  case 0:
                  case 1:
                    r = a
                    break
                  case 4:
                    return o.label++, { value: a[1], done: !1 }
                  case 5:
                    o.label++, (i = a[1]), (a = [0])
                    continue
                  case 7:
                    ;(a = o.ops.pop()), o.trys.pop()
                    continue
                  default:
                    if (((r = o.trys), !(r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0]))) {
                      o = 0
                      continue
                    }
                    if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                      o.label = a[1]
                      break
                    }
                    if (6 === a[0] && o.label < r[1]) {
                      ;(o.label = r[1]), (r = a)
                      break
                    }
                    if (r && o.label < r[2]) {
                      ;(o.label = r[2]), o.ops.push(a)
                      break
                    }
                    r[2] && o.ops.pop(), o.trys.pop()
                    continue
                }
                a = t.call(e, o)
              } catch (s) {
                ;(a = [6, s]), (i = 0)
              } finally {
                n = r = 0
              }
            if (5 & a[0]) throw a[1]
            return { value: a[0] ? a[1] : void 0, done: !0 }
          }
        },
        pt = A()
      ;(function() {
        function e(e, t) {
          ;(this.lsOptions = e), (this.dataManager = t), (this.completionParticipants = [])
        }
        ;(e.prototype.setCompletionParticipants = function(e) {
          this.completionParticipants = e || []
        }),
          (e.prototype.doComplete2 = function(e, t, n, i, r) {
            return dt(this, void 0, void 0, function() {
              var a, o, s, l
              return ut(this, function(c) {
                switch (c.label) {
                  case 0:
                    if (!this.lsOptions.fileSystemProvider || !this.lsOptions.fileSystemProvider.readDirectory)
                      return [2, this.doComplete(e, t, n, r)]
                    ;(a = new tt(this.lsOptions.fileSystemProvider.readDirectory)),
                      (o = this.completionParticipants),
                      (this.completionParticipants = [a].concat(o)),
                      (s = this.doComplete(e, t, n, r)),
                      (c.label = 1)
                  case 1:
                    return c.trys.push([1, , 3, 4]), [4, a.computeCompletions(e, i)]
                  case 2:
                    return (
                      (l = c.sent()),
                      [2, { isIncomplete: s.isIncomplete || l.isIncomplete, items: l.items.concat(s.items) }]
                    )
                  case 3:
                    return (this.completionParticipants = o), [7]
                  case 4:
                    return [2]
                }
              })
            })
          }),
          (e.prototype.doComplete = function(e, t, n, i) {
            var r = this._doComplete(e, t, n, i)
            return this.convertCompletionList(r)
          }),
          (e.prototype._doComplete = function(e, t, n, a) {
            var o = { isIncomplete: !1, items: [] },
              s = this.completionParticipants,
              l = this.dataManager.getDataProviders().filter(function(t) {
                return t.isApplicable(e.languageId) && (!a || !1 !== a[t.getId()])
              }),
              c = this.doesSupportMarkdown(),
              h = e.getText(),
              d = e.offsetAt(t),
              u = n.findNodeBefore(d)
            if (!u) return o
            var p,
              m = Ce(h, u.start),
              f = ''
            function g(t, n) {
              return void 0 === n && (n = d), t > d && (t = d), { start: e.positionAt(t), end: e.positionAt(n) }
            }
            function b(e, t) {
              var n = g(e, t)
              return (
                l.forEach(function(e) {
                  e.provideTags().forEach(function(e) {
                    o.items.push({
                      label: e.name,
                      kind: U.Property,
                      documentation: Qe(e, c),
                      textEdit: _.replace(n, e.name),
                      insertTextFormat: W.PlainText,
                    })
                  })
                }),
                o
              )
            }
            function w(e) {
              var t = e
              while (t > 0) {
                var n = h.charAt(t - 1)
                if ('\n\r'.indexOf(n) >= 0) return h.substring(t, e)
                if (!ft(n)) return null
                t--
              }
              return h.substring(0, e)
            }
            function v(e, t, n) {
              void 0 === n && (n = d)
              var i = g(e, n),
                r = gt(h, n, he.WithinEndTag, ce.EndTagClose) ? '' : '>',
                a = u
              t && (a = a.parent)
              while (a) {
                var s = a.tag
                if (s && (!a.closed || (a.endTagStart && a.endTagStart > d))) {
                  var p = {
                      label: '/' + s,
                      kind: U.Property,
                      filterText: '/' + s,
                      textEdit: _.replace(i, '/' + s + r),
                      insertTextFormat: W.PlainText,
                    },
                    m = w(a.start),
                    f = w(e - 1)
                  if (null !== m && null !== f && m !== f) {
                    var b = m + '</' + s + r
                    ;(p.textEdit = _.replace(g(e - 1 - f.length), b)), (p.filterText = f + '</' + s)
                  }
                  return o.items.push(p), o
                }
                a = a.parent
              }
              return (
                t ||
                  l.forEach(function(e) {
                    e.provideTags().forEach(function(e) {
                      o.items.push({
                        label: '/' + e.name,
                        kind: U.Property,
                        documentation: Qe(e, c),
                        filterText: '/' + e + r,
                        textEdit: _.replace(i, '/' + e + r),
                        insertTextFormat: W.PlainText,
                      })
                    })
                  }),
                o
              )
            }
            function y(t, n) {
              if (a && a.hideAutoCompleteProposals) return o
              if (!Pe(n)) {
                var i = e.positionAt(t)
                o.items.push({
                  label: '</' + n + '>',
                  kind: U.Property,
                  filterText: '</' + n + '>',
                  textEdit: _.insert(i, '$0</' + n + '>'),
                  insertTextFormat: W.Snippet,
                })
              }
              return o
            }
            function T(e, t) {
              return b(e, t), v(e, !0, t), o
            }
            function k(e, t) {
              void 0 === t && (t = d)
              var n = d
              while (n < t && '<' !== h[n]) n++
              var i = g(e, n),
                r = gt(h, t, he.AfterAttributeName, ce.DelimiterAssign) ? '' : '="$1"',
                a = Object.create(null)
              return (
                l.forEach(function(e) {
                  e.provideAttributes(f).forEach(function(e) {
                    if (!a[e.name]) {
                      a[e.name] = !0
                      var t,
                        n = e.name
                      'v' !== e.valueSet &&
                        r.length &&
                        ((n += r),
                        (e.valueSet || 'style' === e.name) &&
                          (t = { title: 'Suggest', command: 'editor.action.triggerSuggest' })),
                        o.items.push({
                          label: e.name,
                          kind: 'handler' === e.valueSet ? U.Function : U.Value,
                          documentation: Qe(e, c),
                          textEdit: _.replace(i, n),
                          insertTextFormat: W.Snippet,
                          command: t,
                        })
                    }
                  })
                }),
                S(i, a),
                o
              )
            }
            function S(e, t) {
              var i = 'data-',
                r = {}
              function a(e) {
                e.attributeNames.forEach(function(e) {
                  !qe(e, i) || r[e] || t[e] || (r[e] = e + '="$1"')
                }),
                  e.children.forEach(function(e) {
                    return a(e)
                  })
              }
              ;(r[i] = i + '$1="$2"'),
                n &&
                  n.roots.forEach(function(e) {
                    return a(e)
                  }),
                Object.keys(r).forEach(function(t) {
                  return o.items.push({
                    label: t,
                    kind: U.Value,
                    textEdit: _.replace(e, r[t]),
                    insertTextFormat: W.Snippet,
                  })
                })
            }
            function x(n, i) {
              var r, a, u
              if ((void 0 === i && (i = d), d > n && d <= i && mt(h[n]))) {
                var m = n + 1,
                  b = i
                i > n && h[i - 1] === h[n] && b--
                var w = bt(h, d, m),
                  v = _t(h, d, b)
                ;(r = g(w, v)), (u = d >= m && d <= b ? h.substring(m, d) : ''), (a = !1)
              } else (r = g(n, i)), (u = h.substring(n, d)), (a = !0)
              if (s.length > 0)
                for (var y = f.toLowerCase(), T = p.toLowerCase(), k = g(n, i), S = 0, x = s; S < x.length; S++) {
                  var M = x[S]
                  M.onHtmlAttributeValue &&
                    M.onHtmlAttributeValue({ document: e, position: t, tag: y, attribute: T, value: u, range: k })
                }
              return (
                l.forEach(function(e) {
                  e.provideValues(f, p).forEach(function(e) {
                    var t = a ? '"' + e.name + '"' : e.name
                    o.items.push({
                      label: e.name,
                      filterText: t,
                      kind: U.Unit,
                      documentation: Qe(e, c),
                      textEdit: _.replace(r, t),
                      insertTextFormat: W.PlainText,
                    })
                  })
                }),
                E(),
                o
              )
            }
            function M(e) {
              return d === m.getTokenEnd() && ((R = m.scan()), R === e && m.getTokenOffset() === d)
                ? m.getTokenEnd()
                : d
            }
            function L() {
              for (var n = 0, i = s; n < i.length; n++) {
                var r = i[n]
                r.onHtmlContent && r.onHtmlContent({ document: e, position: t })
              }
              return E()
            }
            function E() {
              var e = d - 1,
                n = t.character
              while (e >= 0 && Je(h, e)) e--, n--
              if (e >= 0 && '&' === h[e]) {
                var a = r.create(i.create(t.line, n - 1), t)
                for (var s in Oe)
                  if (Ne(s, ';')) {
                    var l = '&' + s
                    o.items.push({
                      label: l,
                      kind: U.Keyword,
                      documentation: pt('entity.propose', "Character entity representing '" + Oe[s] + "'"),
                      textEdit: _.replace(a, l),
                      insertTextFormat: W.PlainText,
                    })
                  }
              }
              return o
            }
            function A(e, t) {
              var n = g(e, t)
              o.items.push({
                label: '!DOCTYPE',
                kind: U.Property,
                documentation: 'A preamble for an HTML document.',
                textEdit: _.replace(n, '!DOCTYPE html>'),
                insertTextFormat: W.PlainText,
              })
            }
            var R = m.scan()
            while (R !== ce.EOS && m.getTokenOffset() <= d) {
              switch (R) {
                case ce.StartTagOpen:
                  if (m.getTokenEnd() === d) {
                    var z = M(ce.StartTag)
                    return 0 === t.line && A(d, z), T(d, z)
                  }
                  break
                case ce.StartTag:
                  if (m.getTokenOffset() <= d && d <= m.getTokenEnd()) return b(m.getTokenOffset(), m.getTokenEnd())
                  f = m.getTokenText()
                  break
                case ce.AttributeName:
                  if (m.getTokenOffset() <= d && d <= m.getTokenEnd()) return k(m.getTokenOffset(), m.getTokenEnd())
                  p = m.getTokenText()
                  break
                case ce.DelimiterAssign:
                  if (m.getTokenEnd() === d) {
                    z = M(ce.AttributeValue)
                    return x(d, z)
                  }
                  break
                case ce.AttributeValue:
                  if (m.getTokenOffset() <= d && d <= m.getTokenEnd()) return x(m.getTokenOffset(), m.getTokenEnd())
                  break
                case ce.Whitespace:
                  if (d <= m.getTokenEnd())
                    switch (m.getScannerState()) {
                      case he.AfterOpeningStartTag:
                        var I = m.getTokenOffset(),
                          H = M(ce.StartTag)
                        return T(I, H)
                      case he.WithinTag:
                      case he.AfterAttributeName:
                        return k(m.getTokenEnd())
                      case he.BeforeAttributeValue:
                        return x(m.getTokenEnd())
                      case he.AfterOpeningEndTag:
                        return v(m.getTokenOffset() - 1, !1)
                      case he.WithinContent:
                        return L()
                    }
                  break
                case ce.EndTagOpen:
                  if (d <= m.getTokenEnd()) {
                    var C = m.getTokenOffset() + 1,
                      D = M(ce.EndTag)
                    return v(C, !1, D)
                  }
                  break
                case ce.EndTag:
                  if (d <= m.getTokenEnd()) {
                    var P = m.getTokenOffset() - 1
                    while (P >= 0) {
                      var O = h.charAt(P)
                      if ('/' === O) return v(P, !1, m.getTokenEnd())
                      if (!ft(O)) break
                      P--
                    }
                  }
                  break
                case ce.StartTagClose:
                  if (d <= m.getTokenEnd() && f) return y(m.getTokenEnd(), f)
                  break
                case ce.Content:
                  if (d <= m.getTokenEnd()) return L()
                  break
                default:
                  if (d <= m.getTokenEnd()) return o
                  break
              }
              R = m.scan()
            }
            return o
          }),
          (e.prototype.doTagComplete = function(e, t, n) {
            var i = e.offsetAt(t)
            if (i <= 0) return null
            var r = e.getText().charAt(i - 1)
            if ('>' === r) {
              var a = n.findNodeBefore(i)
              if (a && a.tag && !Pe(a.tag) && a.start < i && (!a.endTagStart || a.endTagStart > i)) {
                var o = Ce(e.getText(), a.start),
                  s = o.scan()
                while (s !== ce.EOS && o.getTokenEnd() <= i) {
                  if (s === ce.StartTagClose && o.getTokenEnd() === i) return '$0</' + a.tag + '>'
                  s = o.scan()
                }
              }
            } else if ('/' === r) {
              a = n.findNodeBefore(i)
              while (a && a.closed) a = a.parent
              if (a && a.tag) {
                ;(o = Ce(e.getText(), a.start)), (s = o.scan())
                while (s !== ce.EOS && o.getTokenEnd() <= i) {
                  if (s === ce.EndTagOpen && o.getTokenEnd() === i) return a.tag + '>'
                  s = o.scan()
                }
              }
            }
            return null
          }),
          (e.prototype.convertCompletionList = function(e) {
            return (
              this.doesSupportMarkdown() ||
                e.items.forEach(function(e) {
                  e.documentation &&
                    'string' !== typeof e.documentation &&
                    (e.documentation = { kind: 'plaintext', value: e.documentation.value })
                }),
              e
            )
          }),
          (e.prototype.doesSupportMarkdown = function() {
            var e, t, n
            if (!Ye(this.supportsMarkdown)) {
              if (!Ye(this.lsOptions.clientCapabilities)) return (this.supportsMarkdown = !0), this.supportsMarkdown
              var i =
                null ===
                  (n =
                    null ===
                      (t =
                        null === (e = this.lsOptions.clientCapabilities.textDocument) || void 0 === e
                          ? void 0
                          : e.completion) || void 0 === t
                      ? void 0
                      : t.completionItem) || void 0 === n
                  ? void 0
                  : n.documentationFormat
              this.supportsMarkdown = Array.isArray(i) && -1 !== i.indexOf(H.Markdown)
            }
            return this.supportsMarkdown
          })
      })()
      function mt(e) {
        return /^["']*$/.test(e)
      }
      function ft(e) {
        return /^\s*$/.test(e)
      }
      function gt(e, t, n, i) {
        var r = Ce(e, t, n),
          a = r.scan()
        while (a === ce.Whitespace) a = r.scan()
        return a === i
      }
      function bt(e, t, n) {
        while (t > n && !ft(e[t - 1])) t--
        return t
      }
      function _t(e, t, n) {
        while (t < n && !ft(e[t])) t++
        return t
      }
      ;(function() {
        function e(e, t) {
          ;(this.lsOptions = e), (this.dataManager = t)
        }
        ;(e.prototype.doHover = function(e, t, n) {
          var i = this.convertContents.bind(this),
            r = this.doesSupportMarkdown(),
            a = e.offsetAt(t),
            o = n.findNodeAt(a)
          if (!o || !o.tag) return null
          var s = this.dataManager.getDataProviders().filter(function(t) {
            return t.isApplicable(e.languageId)
          })
          function l(e, t, n) {
            for (
              var a = function(n) {
                  var a = null
                  if (
                    (n.provideTags().forEach(function(n) {
                      if (n.name.toLowerCase() === e.toLowerCase()) {
                        var i = Qe(n, r)
                        i || (i = { kind: r ? 'markdown' : 'plaintext', value: '' }), (a = { contents: i, range: t })
                      }
                    }),
                    a)
                  )
                    return (a.contents = i(a.contents)), { value: a }
                },
                o = 0,
                l = s;
              o < l.length;
              o++
            ) {
              var c = l[o],
                h = a(c)
              if ('object' === typeof h) return h.value
            }
            return null
          }
          function c(e, t, n) {
            for (
              var a = function(a) {
                  var o = null
                  if (
                    (a.provideAttributes(e).forEach(function(e) {
                      if (t === e.name && e.description) {
                        var i = Qe(e, r)
                        o = i ? { contents: i, range: n } : null
                      }
                    }),
                    o)
                  )
                    return (o.contents = i(o.contents)), { value: o }
                },
                o = 0,
                l = s;
              o < l.length;
              o++
            ) {
              var c = l[o],
                h = a(c)
              if ('object' === typeof h) return h.value
            }
            return null
          }
          function h(e, t, n, a) {
            for (
              var o = function(o) {
                  var s = null
                  if (
                    (o.provideValues(e, t).forEach(function(e) {
                      if (n === e.name && e.description) {
                        var t = Qe(e, r)
                        s = t ? { contents: t, range: a } : null
                      }
                    }),
                    s)
                  )
                    return (s.contents = i(s.contents)), { value: s }
                },
                l = 0,
                c = s;
              l < c.length;
              l++
            ) {
              var h = c[l],
                d = o(h)
              if ('object' === typeof d) return d.value
            }
            return null
          }
          function d(t, n) {
            var i = Ce(e.getText(), n),
              r = i.scan()
            while (r !== ce.EOS && (i.getTokenEnd() < a || (i.getTokenEnd() === a && r !== t))) r = i.scan()
            return r === t && a <= i.getTokenEnd()
              ? { start: e.positionAt(i.getTokenOffset()), end: e.positionAt(i.getTokenEnd()) }
              : null
          }
          if (o.endTagStart && a >= o.endTagStart) {
            var u = d(ce.EndTag, o.endTagStart)
            return u ? l(o.tag, u, !1) : null
          }
          var p = d(ce.StartTag, o.start)
          if (p) return l(o.tag, p, !0)
          var m = d(ce.AttributeName, o.start)
          if (m) {
            var f = o.tag,
              g = e.getText(m)
            return c(f, g, m)
          }
          function b(t, n) {
            var i = Ce(e.getText(), t),
              r = i.scan(),
              a = void 0
            while (r !== ce.EOS && i.getTokenEnd() <= n)
              (r = i.scan()), r === ce.AttributeName && (a = i.getTokenText())
            return a
          }
          var _ = d(ce.AttributeValue, o.start)
          if (_) {
            f = o.tag
            var w = wt(e.getText(_)),
              v = b(o.start, e.offsetAt(_.start))
            if (v) return h(f, v, w, _)
          }
          return null
        }),
          (e.prototype.convertContents = function(e) {
            if (!this.doesSupportMarkdown()) {
              if ('string' === typeof e) return e
              if ('kind' in e) return { kind: 'plaintext', value: e.value }
              if (!Array.isArray(e)) return e.value
              e.map(function(e) {
                return 'string' === typeof e ? e : e.value
              })
            }
            return e
          }),
          (e.prototype.doesSupportMarkdown = function() {
            var e, t, n
            if (!Ye(this.supportsMarkdown)) {
              if (!Ye(this.lsOptions.clientCapabilities)) return (this.supportsMarkdown = !0), this.supportsMarkdown
              var i =
                null ===
                  (n =
                    null ===
                      (t =
                        null === (e = this.lsOptions.clientCapabilities) || void 0 === e ? void 0 : e.textDocument) ||
                    void 0 === t
                      ? void 0
                      : t.hover) || void 0 === n
                  ? void 0
                  : n.contentFormat
              this.supportsMarkdown = Array.isArray(i) && -1 !== i.indexOf(H.Markdown)
            }
            return this.supportsMarkdown
          })
      })()
      function wt(e) {
        return e.length <= 1
          ? e.replace(/['"]/, '')
          : (("'" !== e[0] && '"' !== e[0]) || (e = e.slice(1)),
            ("'" !== e[e.length - 1] && '"' !== e[e.length - 1]) || (e = e.slice(0, -1)),
            e)
      }
      ;(function(e) {
        var t = {}
        function n(i) {
          if (t[i]) return t[i].exports
          var r = (t[i] = { i: i, l: !1, exports: {} })
          return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
        }
        ;(n.m = e),
          (n.c = t),
          (n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i })
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
            var i = Object.create(null)
            if (
              (n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e)
            )
              for (var r in e)
                n.d(
                  i,
                  r,
                  function(t) {
                    return e[t]
                  }.bind(null, r),
                )
            return i
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
          (n.p = ''),
          n((n.s = 15))
      })([
        ,
        ,
        function(e, t, n) {
          function i(e) {
            ;(this.__parent = e),
              (this.__character_count = 0),
              (this.__indent_count = -1),
              (this.__alignment_count = 0),
              (this.__wrap_point_index = 0),
              (this.__wrap_point_character_count = 0),
              (this.__wrap_point_indent_count = -1),
              (this.__wrap_point_alignment_count = 0),
              (this.__items = [])
          }
          function r(e, t) {
            ;(this.__cache = ['']),
              (this.__indent_size = e.indent_size),
              (this.__indent_string = e.indent_char),
              e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)),
              (t = t || ''),
              e.indent_level > 0 && (t = new Array(e.indent_level + 1).join(this.__indent_string)),
              (this.__base_string = t),
              (this.__base_string_length = t.length)
          }
          function a(e, t) {
            ;(this.__indent_cache = new r(e, t)),
              (this.raw = !1),
              (this._end_with_newline = e.end_with_newline),
              (this.indent_size = e.indent_size),
              (this.wrap_line_length = e.wrap_line_length),
              (this.indent_empty_lines = e.indent_empty_lines),
              (this.__lines = []),
              (this.previous_line = null),
              (this.current_line = null),
              (this.next_line = new i(this)),
              (this.space_before_token = !1),
              (this.non_breaking_space = !1),
              (this.previous_token_wrapped = !1),
              this.__add_outputline()
          }
          ;(i.prototype.clone_empty = function() {
            var e = new i(this.__parent)
            return e.set_indent(this.__indent_count, this.__alignment_count), e
          }),
            (i.prototype.item = function(e) {
              return e < 0 ? this.__items[this.__items.length + e] : this.__items[e]
            }),
            (i.prototype.has_match = function(e) {
              for (var t = this.__items.length - 1; t >= 0; t--) if (this.__items[t].match(e)) return !0
              return !1
            }),
            (i.prototype.set_indent = function(e, t) {
              this.is_empty() &&
                ((this.__indent_count = e || 0),
                (this.__alignment_count = t || 0),
                (this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count)))
            }),
            (i.prototype._set_wrap_point = function() {
              this.__parent.wrap_line_length &&
                ((this.__wrap_point_index = this.__items.length),
                (this.__wrap_point_character_count = this.__character_count),
                (this.__wrap_point_indent_count = this.__parent.next_line.__indent_count),
                (this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count))
            }),
            (i.prototype._should_wrap = function() {
              return (
                this.__wrap_point_index &&
                this.__character_count > this.__parent.wrap_line_length &&
                this.__wrap_point_character_count > this.__parent.next_line.__character_count
              )
            }),
            (i.prototype._allow_wrap = function() {
              if (this._should_wrap()) {
                this.__parent.add_new_line()
                var e = this.__parent.current_line
                return (
                  e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count),
                  (e.__items = this.__items.slice(this.__wrap_point_index)),
                  (this.__items = this.__items.slice(0, this.__wrap_point_index)),
                  (e.__character_count += this.__character_count - this.__wrap_point_character_count),
                  (this.__character_count = this.__wrap_point_character_count),
                  ' ' === e.__items[0] && (e.__items.splice(0, 1), (e.__character_count -= 1)),
                  !0
                )
              }
              return !1
            }),
            (i.prototype.is_empty = function() {
              return 0 === this.__items.length
            }),
            (i.prototype.last = function() {
              return this.is_empty() ? null : this.__items[this.__items.length - 1]
            }),
            (i.prototype.push = function(e) {
              this.__items.push(e)
              var t = e.lastIndexOf('\n')
              ;-1 !== t ? (this.__character_count = e.length - t) : (this.__character_count += e.length)
            }),
            (i.prototype.pop = function() {
              var e = null
              return this.is_empty() || ((e = this.__items.pop()), (this.__character_count -= e.length)), e
            }),
            (i.prototype._remove_indent = function() {
              this.__indent_count > 0 &&
                ((this.__indent_count -= 1), (this.__character_count -= this.__parent.indent_size))
            }),
            (i.prototype._remove_wrap_indent = function() {
              this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1)
            }),
            (i.prototype.trim = function() {
              while (' ' === this.last()) this.__items.pop(), (this.__character_count -= 1)
            }),
            (i.prototype.toString = function() {
              var e = ''
              return (
                this.is_empty()
                  ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count))
                  : ((e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count)),
                    (e += this.__items.join(''))),
                e
              )
            }),
            (r.prototype.get_indent_size = function(e, t) {
              var n = this.__base_string_length
              return (t = t || 0), e < 0 && (n = 0), (n += e * this.__indent_size), (n += t), n
            }),
            (r.prototype.get_indent_string = function(e, t) {
              var n = this.__base_string
              return (
                (t = t || 0),
                e < 0 && ((e = 0), (n = '')),
                (t += e * this.__indent_size),
                this.__ensure_cache(t),
                (n += this.__cache[t]),
                n
              )
            }),
            (r.prototype.__ensure_cache = function(e) {
              while (e >= this.__cache.length) this.__add_column()
            }),
            (r.prototype.__add_column = function() {
              var e = this.__cache.length,
                t = 0,
                n = ''
              this.__indent_size &&
                e >= this.__indent_size &&
                ((t = Math.floor(e / this.__indent_size)),
                (e -= t * this.__indent_size),
                (n = new Array(t + 1).join(this.__indent_string))),
                e && (n += new Array(e + 1).join(' ')),
                this.__cache.push(n)
            }),
            (a.prototype.__add_outputline = function() {
              ;(this.previous_line = this.current_line),
                (this.current_line = this.next_line.clone_empty()),
                this.__lines.push(this.current_line)
            }),
            (a.prototype.get_line_number = function() {
              return this.__lines.length
            }),
            (a.prototype.get_indent_string = function(e, t) {
              return this.__indent_cache.get_indent_string(e, t)
            }),
            (a.prototype.get_indent_size = function(e, t) {
              return this.__indent_cache.get_indent_size(e, t)
            }),
            (a.prototype.is_empty = function() {
              return !this.previous_line && this.current_line.is_empty()
            }),
            (a.prototype.add_new_line = function(e) {
              return (
                !(this.is_empty() || (!e && this.just_added_newline())) && (this.raw || this.__add_outputline(), !0)
              )
            }),
            (a.prototype.get_code = function(e) {
              this.trim(!0)
              var t = this.current_line.pop()
              t && ('\n' === t[t.length - 1] && (t = t.replace(/\n+$/g, '')), this.current_line.push(t)),
                this._end_with_newline && this.__add_outputline()
              var n = this.__lines.join('\n')
              return '\n' !== e && (n = n.replace(/[\n]/g, e)), n
            }),
            (a.prototype.set_wrap_point = function() {
              this.current_line._set_wrap_point()
            }),
            (a.prototype.set_indent = function(e, t) {
              return (
                (e = e || 0),
                (t = t || 0),
                this.next_line.set_indent(e, t),
                this.__lines.length > 1
                  ? (this.current_line.set_indent(e, t), !0)
                  : (this.current_line.set_indent(), !1)
              )
            }),
            (a.prototype.add_raw_token = function(e) {
              for (var t = 0; t < e.newlines; t++) this.__add_outputline()
              this.current_line.set_indent(-1),
                this.current_line.push(e.whitespace_before),
                this.current_line.push(e.text),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = !1)
            }),
            (a.prototype.add_token = function(e) {
              this.__add_space_before_token(),
                this.current_line.push(e),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = this.current_line._allow_wrap())
            }),
            (a.prototype.__add_space_before_token = function() {
              this.space_before_token &&
                !this.just_added_newline() &&
                (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(' '))
            }),
            (a.prototype.remove_indent = function(e) {
              var t = this.__lines.length
              while (e < t) this.__lines[e]._remove_indent(), e++
              this.current_line._remove_wrap_indent()
            }),
            (a.prototype.trim = function(e) {
              ;(e = void 0 !== e && e), this.current_line.trim()
              while (e && this.__lines.length > 1 && this.current_line.is_empty())
                this.__lines.pop(),
                  (this.current_line = this.__lines[this.__lines.length - 1]),
                  this.current_line.trim()
              this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
            }),
            (a.prototype.just_added_newline = function() {
              return this.current_line.is_empty()
            }),
            (a.prototype.just_added_blankline = function() {
              return this.is_empty() || (this.current_line.is_empty() && this.previous_line.is_empty())
            }),
            (a.prototype.ensure_empty_line_above = function(e, t) {
              var n = this.__lines.length - 2
              while (n >= 0) {
                var r = this.__lines[n]
                if (r.is_empty()) break
                if (0 !== r.item(0).indexOf(e) && r.item(-1) !== t) {
                  this.__lines.splice(n + 1, 0, new i(this)),
                    (this.previous_line = this.__lines[this.__lines.length - 2])
                  break
                }
                n--
              }
            }),
            (e.exports.Output = a)
        },
        ,
        ,
        ,
        function(e, t, n) {
          function i(e, t) {
            ;(this.raw_options = r(e, t)),
              (this.disabled = this._get_boolean('disabled')),
              (this.eol = this._get_characters('eol', 'auto')),
              (this.end_with_newline = this._get_boolean('end_with_newline')),
              (this.indent_size = this._get_number('indent_size', 4)),
              (this.indent_char = this._get_characters('indent_char', ' ')),
              (this.indent_level = this._get_number('indent_level')),
              (this.preserve_newlines = this._get_boolean('preserve_newlines', !0)),
              (this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786)),
              this.preserve_newlines || (this.max_preserve_newlines = 0),
              (this.indent_with_tabs = this._get_boolean('indent_with_tabs', '\t' === this.indent_char)),
              this.indent_with_tabs && ((this.indent_char = '\t'), 1 === this.indent_size && (this.indent_size = 4)),
              (this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'))),
              (this.indent_empty_lines = this._get_boolean('indent_empty_lines')),
              (this.templating = this._get_selection_list(
                'templating',
                ['auto', 'none', 'django', 'erb', 'handlebars', 'php'],
                ['auto'],
              ))
          }
          function r(e, t) {
            var n,
              i = {}
            for (n in ((e = a(e)), e)) n !== t && (i[n] = e[n])
            if (t && e[t]) for (n in e[t]) i[n] = e[t][n]
            return i
          }
          function a(e) {
            var t,
              n = {}
            for (t in e) {
              var i = t.replace(/-/g, '_')
              n[i] = e[t]
            }
            return n
          }
          ;(i.prototype._get_array = function(e, t) {
            var n = this.raw_options[e],
              i = t || []
            return (
              'object' === typeof n
                ? null !== n && 'function' === typeof n.concat && (i = n.concat())
                : 'string' === typeof n && (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
              i
            )
          }),
            (i.prototype._get_boolean = function(e, t) {
              var n = this.raw_options[e],
                i = void 0 === n ? !!t : !!n
              return i
            }),
            (i.prototype._get_characters = function(e, t) {
              var n = this.raw_options[e],
                i = t || ''
              return (
                'string' === typeof n &&
                  (i = n
                    .replace(/\\r/, '\r')
                    .replace(/\\n/, '\n')
                    .replace(/\\t/, '\t')),
                i
              )
            }),
            (i.prototype._get_number = function(e, t) {
              var n = this.raw_options[e]
              ;(t = parseInt(t, 10)), isNaN(t) && (t = 0)
              var i = parseInt(n, 10)
              return isNaN(i) && (i = t), i
            }),
            (i.prototype._get_selection = function(e, t, n) {
              var i = this._get_selection_list(e, t, n)
              if (1 !== i.length)
                throw new Error(
                  "Invalid Option Value: The option '" +
                    e +
                    "' can only be one of the following values:\n" +
                    t +
                    "\nYou passed in: '" +
                    this.raw_options[e] +
                    "'",
                )
              return i[0]
            }),
            (i.prototype._get_selection_list = function(e, t, n) {
              if (!t || 0 === t.length) throw new Error('Selection list cannot be empty.')
              if (((n = n || [t[0]]), !this._is_valid_selection(n, t))) throw new Error('Invalid Default Value!')
              var i = this._get_array(e, n)
              if (!this._is_valid_selection(i, t))
                throw new Error(
                  "Invalid Option Value: The option '" +
                    e +
                    "' can contain only the following values:\n" +
                    t +
                    "\nYou passed in: '" +
                    this.raw_options[e] +
                    "'",
                )
              return i
            }),
            (i.prototype._is_valid_selection = function(e, t) {
              return (
                e.length &&
                t.length &&
                !e.some(function(e) {
                  return -1 === t.indexOf(e)
                })
              )
            }),
            (e.exports.Options = i),
            (e.exports.normalizeOpts = a),
            (e.exports.mergeOpts = r)
        },
        ,
        function(e, t, n) {
          var i = RegExp.prototype.hasOwnProperty('sticky')
          function r(e) {
            ;(this.__input = e || ''), (this.__input_length = this.__input.length), (this.__position = 0)
          }
          ;(r.prototype.restart = function() {
            this.__position = 0
          }),
            (r.prototype.back = function() {
              this.__position > 0 && (this.__position -= 1)
            }),
            (r.prototype.hasNext = function() {
              return this.__position < this.__input_length
            }),
            (r.prototype.next = function() {
              var e = null
              return this.hasNext() && ((e = this.__input.charAt(this.__position)), (this.__position += 1)), e
            }),
            (r.prototype.peek = function(e) {
              var t = null
              return (
                (e = e || 0),
                (e += this.__position),
                e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)),
                t
              )
            }),
            (r.prototype.__match = function(e, t) {
              e.lastIndex = t
              var n = e.exec(this.__input)
              return !n || (i && e.sticky) || (n.index !== t && (n = null)), n
            }),
            (r.prototype.test = function(e, t) {
              return (t = t || 0), (t += this.__position), t >= 0 && t < this.__input_length && !!this.__match(e, t)
            }),
            (r.prototype.testChar = function(e, t) {
              var n = this.peek(t)
              return (e.lastIndex = 0), null !== n && e.test(n)
            }),
            (r.prototype.match = function(e) {
              var t = this.__match(e, this.__position)
              return t ? (this.__position += t[0].length) : (t = null), t
            }),
            (r.prototype.read = function(e, t, n) {
              var i,
                r = ''
              return e && ((i = this.match(e)), i && (r += i[0])), !t || (!i && e) || (r += this.readUntil(t, n)), r
            }),
            (r.prototype.readUntil = function(e, t) {
              var n = '',
                i = this.__position
              e.lastIndex = this.__position
              var r = e.exec(this.__input)
              return (
                r ? ((i = r.index), t && (i += r[0].length)) : (i = this.__input_length),
                (n = this.__input.substring(this.__position, i)),
                (this.__position = i),
                n
              )
            }),
            (r.prototype.readUntilAfter = function(e) {
              return this.readUntil(e, !0)
            }),
            (r.prototype.get_regexp = function(e, t) {
              var n = null,
                r = 'g'
              return (
                t && i && (r = 'y'),
                'string' === typeof e && '' !== e ? (n = new RegExp(e, r)) : e && (n = new RegExp(e.source, r)),
                n
              )
            }),
            (r.prototype.get_literal_regexp = function(e) {
              return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
            }),
            (r.prototype.peekUntilAfter = function(e) {
              var t = this.__position,
                n = this.readUntilAfter(e)
              return (this.__position = t), n
            }),
            (r.prototype.lookBack = function(e) {
              var t = this.__position - 1
              return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e
            }),
            (e.exports.InputScanner = r)
        },
        ,
        ,
        ,
        ,
        function(e, t, n) {
          function i(e, t) {
            ;(e = 'string' === typeof e ? e : e.source),
              (t = 'string' === typeof t ? t : t.source),
              (this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, 'g')),
              (this.__directive_pattern = / (\w+)[:](\w+)/g),
              (this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, 'g'))
          }
          ;(i.prototype.get_directives = function(e) {
            if (!e.match(this.__directives_block_pattern)) return null
            var t = {}
            this.__directive_pattern.lastIndex = 0
            var n = this.__directive_pattern.exec(e)
            while (n) (t[n[1]] = n[2]), (n = this.__directive_pattern.exec(e))
            return t
          }),
            (i.prototype.readIgnored = function(e) {
              return e.readUntilAfter(this.__directives_end_ignore_pattern)
            }),
            (e.exports.Directives = i)
        },
        ,
        function(e, t, n) {
          var i = n(16).Beautifier,
            r = n(17).Options
          function a(e, t) {
            var n = new i(e, t)
            return n.beautify()
          }
          ;(e.exports = a),
            (e.exports.defaultOptions = function() {
              return new r()
            })
        },
        function(e, t, n) {
          var i = n(17).Options,
            r = n(2).Output,
            a = n(8).InputScanner,
            o = n(13).Directives,
            s = new o(/\/\*/, /\*\//),
            l = /\r\n|[\r\n]/,
            c = /\r\n|[\r\n]/g,
            h = /\s/,
            d = /(?:\s|\n)+/g,
            u = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
            p = /\/\/(?:[^\n\r\u2028\u2029]*)/g
          function m(e, t) {
            ;(this._source_text = e || ''),
              (this._options = new i(t)),
              (this._ch = null),
              (this._input = null),
              (this.NESTED_AT_RULE = {
                '@page': !0,
                '@font-face': !0,
                '@keyframes': !0,
                '@media': !0,
                '@supports': !0,
                '@document': !0,
              }),
              (this.CONDITIONAL_GROUP_RULE = { '@media': !0, '@supports': !0, '@document': !0 })
          }
          ;(m.prototype.eatString = function(e) {
            var t = ''
            this._ch = this._input.next()
            while (this._ch) {
              if (((t += this._ch), '\\' === this._ch)) t += this._input.next()
              else if (-1 !== e.indexOf(this._ch) || '\n' === this._ch) break
              this._ch = this._input.next()
            }
            return t
          }),
            (m.prototype.eatWhitespace = function(e) {
              var t = h.test(this._input.peek()),
                n = !0
              while (h.test(this._input.peek()))
                (this._ch = this._input.next()),
                  e &&
                    '\n' === this._ch &&
                    (this._options.preserve_newlines || n) &&
                    ((n = !1), this._output.add_new_line(!0))
              return t
            }),
            (m.prototype.foundNestedPseudoClass = function() {
              var e = 0,
                t = 1,
                n = this._input.peek(t)
              while (n) {
                if ('{' === n) return !0
                if ('(' === n) e += 1
                else if (')' === n) {
                  if (0 === e) return !1
                  e -= 1
                } else if (';' === n || '}' === n) return !1
                t++, (n = this._input.peek(t))
              }
              return !1
            }),
            (m.prototype.print_string = function(e) {
              this._output.set_indent(this._indentLevel),
                (this._output.non_breaking_space = !0),
                this._output.add_token(e)
            }),
            (m.prototype.preserveSingleSpace = function(e) {
              e && (this._output.space_before_token = !0)
            }),
            (m.prototype.indent = function() {
              this._indentLevel++
            }),
            (m.prototype.outdent = function() {
              this._indentLevel > 0 && this._indentLevel--
            }),
            (m.prototype.beautify = function() {
              if (this._options.disabled) return this._source_text
              var e = this._source_text,
                t = this._options.eol
              'auto' === t && ((t = '\n'), e && l.test(e || '') && (t = e.match(l)[0])), (e = e.replace(c, '\n'))
              var n = e.match(/^[\t ]*/)[0]
              ;(this._output = new r(this._options, n)),
                (this._input = new a(e)),
                (this._indentLevel = 0),
                (this._nestedLevel = 0),
                (this._ch = null)
              var i,
                o,
                m,
                f = 0,
                g = !1,
                b = !1,
                _ = !1,
                w = !1,
                v = !1,
                y = this._ch
              while (1) {
                if (
                  ((i = this._input.read(d)),
                  (o = '' !== i),
                  (m = y),
                  (this._ch = this._input.next()),
                  '\\' === this._ch && this._input.hasNext() && (this._ch += this._input.next()),
                  (y = this._ch),
                  !this._ch)
                )
                  break
                if ('/' === this._ch && '*' === this._input.peek()) {
                  this._output.add_new_line(), this._input.back()
                  var T = this._input.read(u),
                    k = s.get_directives(T)
                  k && 'start' === k.ignore && (T += s.readIgnored(this._input)),
                    this.print_string(T),
                    this.eatWhitespace(!0),
                    this._output.add_new_line()
                } else if ('/' === this._ch && '/' === this._input.peek())
                  (this._output.space_before_token = !0),
                    this._input.back(),
                    this.print_string(this._input.read(p)),
                    this.eatWhitespace(!0)
                else if ('@' === this._ch)
                  if ((this.preserveSingleSpace(o), '{' === this._input.peek()))
                    this.print_string(this._ch + this.eatString('}'))
                  else {
                    this.print_string(this._ch)
                    var S = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
                    S.match(/[ :]$/) &&
                      ((S = this.eatString(': ').replace(/\s$/, '')),
                      this.print_string(S),
                      (this._output.space_before_token = !0)),
                      (S = S.replace(/\s$/, '')),
                      'extend' === S ? (w = !0) : 'import' === S && (v = !0),
                      S in this.NESTED_AT_RULE
                        ? ((this._nestedLevel += 1), S in this.CONDITIONAL_GROUP_RULE && (_ = !0))
                        : g || 0 !== f || -1 === S.indexOf(':') || ((b = !0), this.indent())
                  }
                else
                  '#' === this._ch && '{' === this._input.peek()
                    ? (this.preserveSingleSpace(o), this.print_string(this._ch + this.eatString('}')))
                    : '{' === this._ch
                    ? (b && ((b = !1), this.outdent()),
                      this.indent(),
                      (this._output.space_before_token = !0),
                      this.print_string(this._ch),
                      _
                        ? ((_ = !1), (g = this._indentLevel > this._nestedLevel))
                        : (g = this._indentLevel >= this._nestedLevel),
                      this._options.newline_between_rules &&
                        g &&
                        this._output.previous_line &&
                        '{' !== this._output.previous_line.item(-1) &&
                        this._output.ensure_empty_line_above('/', ','),
                      this.eatWhitespace(!0),
                      this._output.add_new_line())
                    : '}' === this._ch
                    ? (this.outdent(),
                      this._output.add_new_line(),
                      '{' === m && this._output.trim(!0),
                      (v = !1),
                      (w = !1),
                      b && (this.outdent(), (b = !1)),
                      this.print_string(this._ch),
                      (g = !1),
                      this._nestedLevel && this._nestedLevel--,
                      this.eatWhitespace(!0),
                      this._output.add_new_line(),
                      this._options.newline_between_rules &&
                        !this._output.just_added_blankline() &&
                        '}' !== this._input.peek() &&
                        this._output.add_new_line(!0))
                    : ':' === this._ch
                    ? (!g && !_) ||
                      this._input.lookBack('&') ||
                      this.foundNestedPseudoClass() ||
                      this._input.lookBack('(') ||
                      w ||
                      0 !== f
                      ? (this._input.lookBack(' ') && (this._output.space_before_token = !0),
                        ':' === this._input.peek()
                          ? ((this._ch = this._input.next()), this.print_string('::'))
                          : this.print_string(':'))
                      : (this.print_string(':'),
                        b || ((b = !0), (this._output.space_before_token = !0), this.eatWhitespace(!0), this.indent()))
                    : '"' === this._ch || "'" === this._ch
                    ? (this.preserveSingleSpace(o),
                      this.print_string(this._ch + this.eatString(this._ch)),
                      this.eatWhitespace(!0))
                    : ';' === this._ch
                    ? 0 === f
                      ? (b && (this.outdent(), (b = !1)),
                        (w = !1),
                        (v = !1),
                        this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        '/' !== this._input.peek() && this._output.add_new_line())
                      : (this.print_string(this._ch), this.eatWhitespace(!0), (this._output.space_before_token = !0))
                    : '(' === this._ch
                    ? this._input.lookBack('url')
                      ? (this.print_string(this._ch),
                        this.eatWhitespace(),
                        f++,
                        this.indent(),
                        (this._ch = this._input.next()),
                        ')' === this._ch || '"' === this._ch || "'" === this._ch
                          ? this._input.back()
                          : this._ch && (this.print_string(this._ch + this.eatString(')')), f && (f--, this.outdent())))
                      : (this.preserveSingleSpace(o),
                        this.print_string(this._ch),
                        this.eatWhitespace(),
                        f++,
                        this.indent())
                    : ')' === this._ch
                    ? (f && (f--, this.outdent()), this.print_string(this._ch))
                    : ',' === this._ch
                    ? (this.print_string(this._ch),
                      this.eatWhitespace(!0),
                      !this._options.selector_separator_newline || b || 0 !== f || v
                        ? (this._output.space_before_token = !0)
                        : this._output.add_new_line())
                    : ('>' !== this._ch && '+' !== this._ch && '~' !== this._ch) || b || 0 !== f
                    ? ']' === this._ch
                      ? this.print_string(this._ch)
                      : '[' === this._ch
                      ? (this.preserveSingleSpace(o), this.print_string(this._ch))
                      : '=' === this._ch
                      ? (this.eatWhitespace(), this.print_string('='), h.test(this._ch) && (this._ch = ''))
                      : '!' !== this._ch || this._input.lookBack('\\')
                      ? (this.preserveSingleSpace(o), this.print_string(this._ch))
                      : (this.print_string(' '), this.print_string(this._ch))
                    : this._options.space_around_combinator
                    ? ((this._output.space_before_token = !0),
                      this.print_string(this._ch),
                      (this._output.space_before_token = !0))
                    : (this.print_string(this._ch),
                      this.eatWhitespace(),
                      this._ch && h.test(this._ch) && (this._ch = ''))
              }
              var x = this._output.get_code(t)
              return x
            }),
            (e.exports.Beautifier = m)
        },
        function(e, t, n) {
          var i = n(6).Options
          function r(e) {
            i.call(this, e, 'css'),
              (this.selector_separator_newline = this._get_boolean('selector_separator_newline', !0)),
              (this.newline_between_rules = this._get_boolean('newline_between_rules', !0))
            var t = this._get_boolean('space_around_selector_separator')
            this.space_around_combinator = this._get_boolean('space_around_combinator') || t
          }
          ;(r.prototype = new i()), (e.exports.Options = r)
        },
      ]),
        (function(e) {
          var t = {}
          function n(i) {
            if (t[i]) return t[i].exports
            var r = (t[i] = { i: i, l: !1, exports: {} })
            return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
          }
          ;(n.m = e),
            (n.c = t),
            (n.d = function(e, t, i) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i })
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
              var i = Object.create(null)
              if (
                (n.r(i),
                Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var r in e)
                  n.d(
                    i,
                    r,
                    function(t) {
                      return e[t]
                    }.bind(null, r),
                  )
              return i
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
            (n.p = ''),
            n((n.s = 18))
        })([
          ,
          ,
          function(e, t, n) {
            function i(e) {
              ;(this.__parent = e),
                (this.__character_count = 0),
                (this.__indent_count = -1),
                (this.__alignment_count = 0),
                (this.__wrap_point_index = 0),
                (this.__wrap_point_character_count = 0),
                (this.__wrap_point_indent_count = -1),
                (this.__wrap_point_alignment_count = 0),
                (this.__items = [])
            }
            function r(e, t) {
              ;(this.__cache = ['']),
                (this.__indent_size = e.indent_size),
                (this.__indent_string = e.indent_char),
                e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)),
                (t = t || ''),
                e.indent_level > 0 && (t = new Array(e.indent_level + 1).join(this.__indent_string)),
                (this.__base_string = t),
                (this.__base_string_length = t.length)
            }
            function a(e, t) {
              ;(this.__indent_cache = new r(e, t)),
                (this.raw = !1),
                (this._end_with_newline = e.end_with_newline),
                (this.indent_size = e.indent_size),
                (this.wrap_line_length = e.wrap_line_length),
                (this.indent_empty_lines = e.indent_empty_lines),
                (this.__lines = []),
                (this.previous_line = null),
                (this.current_line = null),
                (this.next_line = new i(this)),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = !1),
                this.__add_outputline()
            }
            ;(i.prototype.clone_empty = function() {
              var e = new i(this.__parent)
              return e.set_indent(this.__indent_count, this.__alignment_count), e
            }),
              (i.prototype.item = function(e) {
                return e < 0 ? this.__items[this.__items.length + e] : this.__items[e]
              }),
              (i.prototype.has_match = function(e) {
                for (var t = this.__items.length - 1; t >= 0; t--) if (this.__items[t].match(e)) return !0
                return !1
              }),
              (i.prototype.set_indent = function(e, t) {
                this.is_empty() &&
                  ((this.__indent_count = e || 0),
                  (this.__alignment_count = t || 0),
                  (this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count)))
              }),
              (i.prototype._set_wrap_point = function() {
                this.__parent.wrap_line_length &&
                  ((this.__wrap_point_index = this.__items.length),
                  (this.__wrap_point_character_count = this.__character_count),
                  (this.__wrap_point_indent_count = this.__parent.next_line.__indent_count),
                  (this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count))
              }),
              (i.prototype._should_wrap = function() {
                return (
                  this.__wrap_point_index &&
                  this.__character_count > this.__parent.wrap_line_length &&
                  this.__wrap_point_character_count > this.__parent.next_line.__character_count
                )
              }),
              (i.prototype._allow_wrap = function() {
                if (this._should_wrap()) {
                  this.__parent.add_new_line()
                  var e = this.__parent.current_line
                  return (
                    e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count),
                    (e.__items = this.__items.slice(this.__wrap_point_index)),
                    (this.__items = this.__items.slice(0, this.__wrap_point_index)),
                    (e.__character_count += this.__character_count - this.__wrap_point_character_count),
                    (this.__character_count = this.__wrap_point_character_count),
                    ' ' === e.__items[0] && (e.__items.splice(0, 1), (e.__character_count -= 1)),
                    !0
                  )
                }
                return !1
              }),
              (i.prototype.is_empty = function() {
                return 0 === this.__items.length
              }),
              (i.prototype.last = function() {
                return this.is_empty() ? null : this.__items[this.__items.length - 1]
              }),
              (i.prototype.push = function(e) {
                this.__items.push(e)
                var t = e.lastIndexOf('\n')
                ;-1 !== t ? (this.__character_count = e.length - t) : (this.__character_count += e.length)
              }),
              (i.prototype.pop = function() {
                var e = null
                return this.is_empty() || ((e = this.__items.pop()), (this.__character_count -= e.length)), e
              }),
              (i.prototype._remove_indent = function() {
                this.__indent_count > 0 &&
                  ((this.__indent_count -= 1), (this.__character_count -= this.__parent.indent_size))
              }),
              (i.prototype._remove_wrap_indent = function() {
                this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1)
              }),
              (i.prototype.trim = function() {
                while (' ' === this.last()) this.__items.pop(), (this.__character_count -= 1)
              }),
              (i.prototype.toString = function() {
                var e = ''
                return (
                  this.is_empty()
                    ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count))
                    : ((e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count)),
                      (e += this.__items.join(''))),
                  e
                )
              }),
              (r.prototype.get_indent_size = function(e, t) {
                var n = this.__base_string_length
                return (t = t || 0), e < 0 && (n = 0), (n += e * this.__indent_size), (n += t), n
              }),
              (r.prototype.get_indent_string = function(e, t) {
                var n = this.__base_string
                return (
                  (t = t || 0),
                  e < 0 && ((e = 0), (n = '')),
                  (t += e * this.__indent_size),
                  this.__ensure_cache(t),
                  (n += this.__cache[t]),
                  n
                )
              }),
              (r.prototype.__ensure_cache = function(e) {
                while (e >= this.__cache.length) this.__add_column()
              }),
              (r.prototype.__add_column = function() {
                var e = this.__cache.length,
                  t = 0,
                  n = ''
                this.__indent_size &&
                  e >= this.__indent_size &&
                  ((t = Math.floor(e / this.__indent_size)),
                  (e -= t * this.__indent_size),
                  (n = new Array(t + 1).join(this.__indent_string))),
                  e && (n += new Array(e + 1).join(' ')),
                  this.__cache.push(n)
              }),
              (a.prototype.__add_outputline = function() {
                ;(this.previous_line = this.current_line),
                  (this.current_line = this.next_line.clone_empty()),
                  this.__lines.push(this.current_line)
              }),
              (a.prototype.get_line_number = function() {
                return this.__lines.length
              }),
              (a.prototype.get_indent_string = function(e, t) {
                return this.__indent_cache.get_indent_string(e, t)
              }),
              (a.prototype.get_indent_size = function(e, t) {
                return this.__indent_cache.get_indent_size(e, t)
              }),
              (a.prototype.is_empty = function() {
                return !this.previous_line && this.current_line.is_empty()
              }),
              (a.prototype.add_new_line = function(e) {
                return (
                  !(this.is_empty() || (!e && this.just_added_newline())) && (this.raw || this.__add_outputline(), !0)
                )
              }),
              (a.prototype.get_code = function(e) {
                this.trim(!0)
                var t = this.current_line.pop()
                t && ('\n' === t[t.length - 1] && (t = t.replace(/\n+$/g, '')), this.current_line.push(t)),
                  this._end_with_newline && this.__add_outputline()
                var n = this.__lines.join('\n')
                return '\n' !== e && (n = n.replace(/[\n]/g, e)), n
              }),
              (a.prototype.set_wrap_point = function() {
                this.current_line._set_wrap_point()
              }),
              (a.prototype.set_indent = function(e, t) {
                return (
                  (e = e || 0),
                  (t = t || 0),
                  this.next_line.set_indent(e, t),
                  this.__lines.length > 1
                    ? (this.current_line.set_indent(e, t), !0)
                    : (this.current_line.set_indent(), !1)
                )
              }),
              (a.prototype.add_raw_token = function(e) {
                for (var t = 0; t < e.newlines; t++) this.__add_outputline()
                this.current_line.set_indent(-1),
                  this.current_line.push(e.whitespace_before),
                  this.current_line.push(e.text),
                  (this.space_before_token = !1),
                  (this.non_breaking_space = !1),
                  (this.previous_token_wrapped = !1)
              }),
              (a.prototype.add_token = function(e) {
                this.__add_space_before_token(),
                  this.current_line.push(e),
                  (this.space_before_token = !1),
                  (this.non_breaking_space = !1),
                  (this.previous_token_wrapped = this.current_line._allow_wrap())
              }),
              (a.prototype.__add_space_before_token = function() {
                this.space_before_token &&
                  !this.just_added_newline() &&
                  (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(' '))
              }),
              (a.prototype.remove_indent = function(e) {
                var t = this.__lines.length
                while (e < t) this.__lines[e]._remove_indent(), e++
                this.current_line._remove_wrap_indent()
              }),
              (a.prototype.trim = function(e) {
                ;(e = void 0 !== e && e), this.current_line.trim()
                while (e && this.__lines.length > 1 && this.current_line.is_empty())
                  this.__lines.pop(),
                    (this.current_line = this.__lines[this.__lines.length - 1]),
                    this.current_line.trim()
                this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
              }),
              (a.prototype.just_added_newline = function() {
                return this.current_line.is_empty()
              }),
              (a.prototype.just_added_blankline = function() {
                return this.is_empty() || (this.current_line.is_empty() && this.previous_line.is_empty())
              }),
              (a.prototype.ensure_empty_line_above = function(e, t) {
                var n = this.__lines.length - 2
                while (n >= 0) {
                  var r = this.__lines[n]
                  if (r.is_empty()) break
                  if (0 !== r.item(0).indexOf(e) && r.item(-1) !== t) {
                    this.__lines.splice(n + 1, 0, new i(this)),
                      (this.previous_line = this.__lines[this.__lines.length - 2])
                    break
                  }
                  n--
                }
              }),
              (e.exports.Output = a)
          },
          function(e, t, n) {
            function i(e, t, n, i) {
              ;(this.type = e),
                (this.text = t),
                (this.comments_before = null),
                (this.newlines = n || 0),
                (this.whitespace_before = i || ''),
                (this.parent = null),
                (this.next = null),
                (this.previous = null),
                (this.opened = null),
                (this.closed = null),
                (this.directives = null)
            }
            e.exports.Token = i
          },
          ,
          ,
          function(e, t, n) {
            function i(e, t) {
              ;(this.raw_options = r(e, t)),
                (this.disabled = this._get_boolean('disabled')),
                (this.eol = this._get_characters('eol', 'auto')),
                (this.end_with_newline = this._get_boolean('end_with_newline')),
                (this.indent_size = this._get_number('indent_size', 4)),
                (this.indent_char = this._get_characters('indent_char', ' ')),
                (this.indent_level = this._get_number('indent_level')),
                (this.preserve_newlines = this._get_boolean('preserve_newlines', !0)),
                (this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786)),
                this.preserve_newlines || (this.max_preserve_newlines = 0),
                (this.indent_with_tabs = this._get_boolean('indent_with_tabs', '\t' === this.indent_char)),
                this.indent_with_tabs && ((this.indent_char = '\t'), 1 === this.indent_size && (this.indent_size = 4)),
                (this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'))),
                (this.indent_empty_lines = this._get_boolean('indent_empty_lines')),
                (this.templating = this._get_selection_list(
                  'templating',
                  ['auto', 'none', 'django', 'erb', 'handlebars', 'php'],
                  ['auto'],
                ))
            }
            function r(e, t) {
              var n,
                i = {}
              for (n in ((e = a(e)), e)) n !== t && (i[n] = e[n])
              if (t && e[t]) for (n in e[t]) i[n] = e[t][n]
              return i
            }
            function a(e) {
              var t,
                n = {}
              for (t in e) {
                var i = t.replace(/-/g, '_')
                n[i] = e[t]
              }
              return n
            }
            ;(i.prototype._get_array = function(e, t) {
              var n = this.raw_options[e],
                i = t || []
              return (
                'object' === typeof n
                  ? null !== n && 'function' === typeof n.concat && (i = n.concat())
                  : 'string' === typeof n && (i = n.split(/[^a-zA-Z0-9_\/\-]+/)),
                i
              )
            }),
              (i.prototype._get_boolean = function(e, t) {
                var n = this.raw_options[e],
                  i = void 0 === n ? !!t : !!n
                return i
              }),
              (i.prototype._get_characters = function(e, t) {
                var n = this.raw_options[e],
                  i = t || ''
                return (
                  'string' === typeof n &&
                    (i = n
                      .replace(/\\r/, '\r')
                      .replace(/\\n/, '\n')
                      .replace(/\\t/, '\t')),
                  i
                )
              }),
              (i.prototype._get_number = function(e, t) {
                var n = this.raw_options[e]
                ;(t = parseInt(t, 10)), isNaN(t) && (t = 0)
                var i = parseInt(n, 10)
                return isNaN(i) && (i = t), i
              }),
              (i.prototype._get_selection = function(e, t, n) {
                var i = this._get_selection_list(e, t, n)
                if (1 !== i.length)
                  throw new Error(
                    "Invalid Option Value: The option '" +
                      e +
                      "' can only be one of the following values:\n" +
                      t +
                      "\nYou passed in: '" +
                      this.raw_options[e] +
                      "'",
                  )
                return i[0]
              }),
              (i.prototype._get_selection_list = function(e, t, n) {
                if (!t || 0 === t.length) throw new Error('Selection list cannot be empty.')
                if (((n = n || [t[0]]), !this._is_valid_selection(n, t))) throw new Error('Invalid Default Value!')
                var i = this._get_array(e, n)
                if (!this._is_valid_selection(i, t))
                  throw new Error(
                    "Invalid Option Value: The option '" +
                      e +
                      "' can contain only the following values:\n" +
                      t +
                      "\nYou passed in: '" +
                      this.raw_options[e] +
                      "'",
                  )
                return i
              }),
              (i.prototype._is_valid_selection = function(e, t) {
                return (
                  e.length &&
                  t.length &&
                  !e.some(function(e) {
                    return -1 === t.indexOf(e)
                  })
                )
              }),
              (e.exports.Options = i),
              (e.exports.normalizeOpts = a),
              (e.exports.mergeOpts = r)
          },
          ,
          function(e, t, n) {
            var i = RegExp.prototype.hasOwnProperty('sticky')
            function r(e) {
              ;(this.__input = e || ''), (this.__input_length = this.__input.length), (this.__position = 0)
            }
            ;(r.prototype.restart = function() {
              this.__position = 0
            }),
              (r.prototype.back = function() {
                this.__position > 0 && (this.__position -= 1)
              }),
              (r.prototype.hasNext = function() {
                return this.__position < this.__input_length
              }),
              (r.prototype.next = function() {
                var e = null
                return this.hasNext() && ((e = this.__input.charAt(this.__position)), (this.__position += 1)), e
              }),
              (r.prototype.peek = function(e) {
                var t = null
                return (
                  (e = e || 0),
                  (e += this.__position),
                  e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)),
                  t
                )
              }),
              (r.prototype.__match = function(e, t) {
                e.lastIndex = t
                var n = e.exec(this.__input)
                return !n || (i && e.sticky) || (n.index !== t && (n = null)), n
              }),
              (r.prototype.test = function(e, t) {
                return (t = t || 0), (t += this.__position), t >= 0 && t < this.__input_length && !!this.__match(e, t)
              }),
              (r.prototype.testChar = function(e, t) {
                var n = this.peek(t)
                return (e.lastIndex = 0), null !== n && e.test(n)
              }),
              (r.prototype.match = function(e) {
                var t = this.__match(e, this.__position)
                return t ? (this.__position += t[0].length) : (t = null), t
              }),
              (r.prototype.read = function(e, t, n) {
                var i,
                  r = ''
                return e && ((i = this.match(e)), i && (r += i[0])), !t || (!i && e) || (r += this.readUntil(t, n)), r
              }),
              (r.prototype.readUntil = function(e, t) {
                var n = '',
                  i = this.__position
                e.lastIndex = this.__position
                var r = e.exec(this.__input)
                return (
                  r ? ((i = r.index), t && (i += r[0].length)) : (i = this.__input_length),
                  (n = this.__input.substring(this.__position, i)),
                  (this.__position = i),
                  n
                )
              }),
              (r.prototype.readUntilAfter = function(e) {
                return this.readUntil(e, !0)
              }),
              (r.prototype.get_regexp = function(e, t) {
                var n = null,
                  r = 'g'
                return (
                  t && i && (r = 'y'),
                  'string' === typeof e && '' !== e ? (n = new RegExp(e, r)) : e && (n = new RegExp(e.source, r)),
                  n
                )
              }),
              (r.prototype.get_literal_regexp = function(e) {
                return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
              }),
              (r.prototype.peekUntilAfter = function(e) {
                var t = this.__position,
                  n = this.readUntilAfter(e)
                return (this.__position = t), n
              }),
              (r.prototype.lookBack = function(e) {
                var t = this.__position - 1
                return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e
              }),
              (e.exports.InputScanner = r)
          },
          function(e, t, n) {
            var i = n(8).InputScanner,
              r = n(3).Token,
              a = n(10).TokenStream,
              o = n(11).WhitespacePattern,
              s = { START: 'TK_START', RAW: 'TK_RAW', EOF: 'TK_EOF' },
              l = function(e, t) {
                ;(this._input = new i(e)),
                  (this._options = t || {}),
                  (this.__tokens = null),
                  (this._patterns = {}),
                  (this._patterns.whitespace = new o(this._input))
              }
            ;(l.prototype.tokenize = function() {
              var e
              this._input.restart(), (this.__tokens = new a()), this._reset()
              var t = new r(s.START, ''),
                n = null,
                i = [],
                o = new a()
              while (t.type !== s.EOF) {
                e = this._get_next_token(t, n)
                while (this._is_comment(e)) o.add(e), (e = this._get_next_token(t, n))
                o.isEmpty() || ((e.comments_before = o), (o = new a())),
                  (e.parent = n),
                  this._is_opening(e)
                    ? (i.push(n), (n = e))
                    : n && this._is_closing(e, n) && ((e.opened = n), (n.closed = e), (n = i.pop()), (e.parent = n)),
                  (e.previous = t),
                  (t.next = e),
                  this.__tokens.add(e),
                  (t = e)
              }
              return this.__tokens
            }),
              (l.prototype._is_first_token = function() {
                return this.__tokens.isEmpty()
              }),
              (l.prototype._reset = function() {}),
              (l.prototype._get_next_token = function(e, t) {
                this._readWhitespace()
                var n = this._input.read(/.+/g)
                return n ? this._create_token(s.RAW, n) : this._create_token(s.EOF, '')
              }),
              (l.prototype._is_comment = function(e) {
                return !1
              }),
              (l.prototype._is_opening = function(e) {
                return !1
              }),
              (l.prototype._is_closing = function(e, t) {
                return !1
              }),
              (l.prototype._create_token = function(e, t) {
                var n = new r(
                  e,
                  t,
                  this._patterns.whitespace.newline_count,
                  this._patterns.whitespace.whitespace_before_token,
                )
                return n
              }),
              (l.prototype._readWhitespace = function() {
                return this._patterns.whitespace.read()
              }),
              (e.exports.Tokenizer = l),
              (e.exports.TOKEN = s)
          },
          function(e, t, n) {
            function i(e) {
              ;(this.__tokens = []),
                (this.__tokens_length = this.__tokens.length),
                (this.__position = 0),
                (this.__parent_token = e)
            }
            ;(i.prototype.restart = function() {
              this.__position = 0
            }),
              (i.prototype.isEmpty = function() {
                return 0 === this.__tokens_length
              }),
              (i.prototype.hasNext = function() {
                return this.__position < this.__tokens_length
              }),
              (i.prototype.next = function() {
                var e = null
                return this.hasNext() && ((e = this.__tokens[this.__position]), (this.__position += 1)), e
              }),
              (i.prototype.peek = function(e) {
                var t = null
                return (
                  (e = e || 0), (e += this.__position), e >= 0 && e < this.__tokens_length && (t = this.__tokens[e]), t
                )
              }),
              (i.prototype.add = function(e) {
                this.__parent_token && (e.parent = this.__parent_token),
                  this.__tokens.push(e),
                  (this.__tokens_length += 1)
              }),
              (e.exports.TokenStream = i)
          },
          function(e, t, n) {
            var i = n(12).Pattern
            function r(e, t) {
              i.call(this, e, t),
                t
                  ? (this._line_regexp = this._input.get_regexp(t._line_regexp))
                  : this.__set_whitespace_patterns('', ''),
                (this.newline_count = 0),
                (this.whitespace_before_token = '')
            }
            ;(r.prototype = new i()),
              (r.prototype.__set_whitespace_patterns = function(e, t) {
                ;(e += '\\t '),
                  (t += '\\n\\r'),
                  (this._match_pattern = this._input.get_regexp('[' + e + t + ']+', !0)),
                  (this._newline_regexp = this._input.get_regexp('\\r\\n|[' + t + ']'))
              }),
              (r.prototype.read = function() {
                ;(this.newline_count = 0), (this.whitespace_before_token = '')
                var e = this._input.read(this._match_pattern)
                if (' ' === e) this.whitespace_before_token = ' '
                else if (e) {
                  var t = this.__split(this._newline_regexp, e)
                  ;(this.newline_count = t.length - 1), (this.whitespace_before_token = t[this.newline_count])
                }
                return e
              }),
              (r.prototype.matching = function(e, t) {
                var n = this._create()
                return n.__set_whitespace_patterns(e, t), n._update(), n
              }),
              (r.prototype._create = function() {
                return new r(this._input, this)
              }),
              (r.prototype.__split = function(e, t) {
                e.lastIndex = 0
                var n = 0,
                  i = [],
                  r = e.exec(t)
                while (r) i.push(t.substring(n, r.index)), (n = r.index + r[0].length), (r = e.exec(t))
                return n < t.length ? i.push(t.substring(n, t.length)) : i.push(''), i
              }),
              (e.exports.WhitespacePattern = r)
          },
          function(e, t, n) {
            function i(e, t) {
              ;(this._input = e),
                (this._starting_pattern = null),
                (this._match_pattern = null),
                (this._until_pattern = null),
                (this._until_after = !1),
                t &&
                  ((this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0)),
                  (this._match_pattern = this._input.get_regexp(t._match_pattern, !0)),
                  (this._until_pattern = this._input.get_regexp(t._until_pattern)),
                  (this._until_after = t._until_after))
            }
            ;(i.prototype.read = function() {
              var e = this._input.read(this._starting_pattern)
              return (
                (this._starting_pattern && !e) ||
                  (e += this._input.read(this._match_pattern, this._until_pattern, this._until_after)),
                e
              )
            }),
              (i.prototype.read_match = function() {
                return this._input.match(this._match_pattern)
              }),
              (i.prototype.until_after = function(e) {
                var t = this._create()
                return (t._until_after = !0), (t._until_pattern = this._input.get_regexp(e)), t._update(), t
              }),
              (i.prototype.until = function(e) {
                var t = this._create()
                return (t._until_after = !1), (t._until_pattern = this._input.get_regexp(e)), t._update(), t
              }),
              (i.prototype.starting_with = function(e) {
                var t = this._create()
                return (t._starting_pattern = this._input.get_regexp(e, !0)), t._update(), t
              }),
              (i.prototype.matching = function(e) {
                var t = this._create()
                return (t._match_pattern = this._input.get_regexp(e, !0)), t._update(), t
              }),
              (i.prototype._create = function() {
                return new i(this._input, this)
              }),
              (i.prototype._update = function() {}),
              (e.exports.Pattern = i)
          },
          function(e, t, n) {
            function i(e, t) {
              ;(e = 'string' === typeof e ? e : e.source),
                (t = 'string' === typeof t ? t : t.source),
                (this.__directives_block_pattern = new RegExp(e + / beautify( \w+[:]\w+)+ /.source + t, 'g')),
                (this.__directive_pattern = / (\w+)[:](\w+)/g),
                (this.__directives_end_ignore_pattern = new RegExp(e + /\sbeautify\signore:end\s/.source + t, 'g'))
            }
            ;(i.prototype.get_directives = function(e) {
              if (!e.match(this.__directives_block_pattern)) return null
              var t = {}
              this.__directive_pattern.lastIndex = 0
              var n = this.__directive_pattern.exec(e)
              while (n) (t[n[1]] = n[2]), (n = this.__directive_pattern.exec(e))
              return t
            }),
              (i.prototype.readIgnored = function(e) {
                return e.readUntilAfter(this.__directives_end_ignore_pattern)
              }),
              (e.exports.Directives = i)
          },
          function(e, t, n) {
            var i = n(12).Pattern,
              r = { django: !1, erb: !1, handlebars: !1, php: !1 }
            function a(e, t) {
              i.call(this, e, t),
                (this.__template_pattern = null),
                (this._disabled = Object.assign({}, r)),
                (this._excluded = Object.assign({}, r)),
                t &&
                  ((this.__template_pattern = this._input.get_regexp(t.__template_pattern)),
                  (this._excluded = Object.assign(this._excluded, t._excluded)),
                  (this._disabled = Object.assign(this._disabled, t._disabled)))
              var n = new i(e)
              this.__patterns = {
                handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
                handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
                handlebars: n.starting_with(/{{/).until_after(/}}/),
                php: n.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
                erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
                django: n.starting_with(/{%/).until_after(/%}/),
                django_value: n.starting_with(/{{/).until_after(/}}/),
                django_comment: n.starting_with(/{#/).until_after(/#}/),
              }
            }
            ;(a.prototype = new i()),
              (a.prototype._create = function() {
                return new a(this._input, this)
              }),
              (a.prototype._update = function() {
                this.__set_templated_pattern()
              }),
              (a.prototype.disable = function(e) {
                var t = this._create()
                return (t._disabled[e] = !0), t._update(), t
              }),
              (a.prototype.read_options = function(e) {
                var t = this._create()
                for (var n in r) t._disabled[n] = -1 === e.templating.indexOf(n)
                return t._update(), t
              }),
              (a.prototype.exclude = function(e) {
                var t = this._create()
                return (t._excluded[e] = !0), t._update(), t
              }),
              (a.prototype.read = function() {
                var e = ''
                e = this._match_pattern
                  ? this._input.read(this._starting_pattern)
                  : this._input.read(this._starting_pattern, this.__template_pattern)
                var t = this._read_template()
                while (t)
                  this._match_pattern
                    ? (t += this._input.read(this._match_pattern))
                    : (t += this._input.readUntil(this.__template_pattern)),
                    (e += t),
                    (t = this._read_template())
                return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e
              }),
              (a.prototype.__set_templated_pattern = function() {
                var e = []
                this._disabled.php || e.push(this.__patterns.php._starting_pattern.source),
                  this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source),
                  this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source),
                  this._disabled.django ||
                    (e.push(this.__patterns.django._starting_pattern.source),
                    e.push(this.__patterns.django_value._starting_pattern.source),
                    e.push(this.__patterns.django_comment._starting_pattern.source)),
                  this._until_pattern && e.push(this._until_pattern.source),
                  (this.__template_pattern = this._input.get_regexp('(?:' + e.join('|') + ')'))
              }),
              (a.prototype._read_template = function() {
                var e = '',
                  t = this._input.peek()
                if ('<' === t) {
                  var n = this._input.peek(1)
                  this._disabled.php || this._excluded.php || '?' !== n || (e = e || this.__patterns.php.read()),
                    this._disabled.erb || this._excluded.erb || '%' !== n || (e = e || this.__patterns.erb.read())
                } else
                  '{' === t &&
                    (this._disabled.handlebars ||
                      this._excluded.handlebars ||
                      ((e = e || this.__patterns.handlebars_comment.read()),
                      (e = e || this.__patterns.handlebars_unescaped.read()),
                      (e = e || this.__patterns.handlebars.read())),
                    this._disabled.django ||
                      (this._excluded.django ||
                        this._excluded.handlebars ||
                        (e = e || this.__patterns.django_value.read()),
                      this._excluded.django ||
                        ((e = e || this.__patterns.django_comment.read()), (e = e || this.__patterns.django.read()))))
                return e
              }),
              (e.exports.TemplatablePattern = a)
          },
          ,
          ,
          ,
          function(e, t, n) {
            var i = n(19).Beautifier,
              r = n(20).Options
            function a(e, t, n, r) {
              var a = new i(e, t, n, r)
              return a.beautify()
            }
            ;(e.exports = a),
              (e.exports.defaultOptions = function() {
                return new r()
              })
          },
          function(e, t, n) {
            var i = n(20).Options,
              r = n(2).Output,
              a = n(21).Tokenizer,
              o = n(21).TOKEN,
              s = /\r\n|[\r\n]/,
              l = /\r\n|[\r\n]/g,
              c = function(e, t) {
                ;(this.indent_level = 0),
                  (this.alignment_size = 0),
                  (this.max_preserve_newlines = e.max_preserve_newlines),
                  (this.preserve_newlines = e.preserve_newlines),
                  (this._output = new r(e, t))
              }
            ;(c.prototype.current_line_has_match = function(e) {
              return this._output.current_line.has_match(e)
            }),
              (c.prototype.set_space_before_token = function(e, t) {
                ;(this._output.space_before_token = e), (this._output.non_breaking_space = t)
              }),
              (c.prototype.set_wrap_point = function() {
                this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point()
              }),
              (c.prototype.add_raw_token = function(e) {
                this._output.add_raw_token(e)
              }),
              (c.prototype.print_preserved_newlines = function(e) {
                var t = 0
                e.type !== o.TEXT && e.previous.type !== o.TEXT && (t = e.newlines ? 1 : 0),
                  this.preserve_newlines &&
                    (t = e.newlines < this.max_preserve_newlines + 1 ? e.newlines : this.max_preserve_newlines + 1)
                for (var n = 0; n < t; n++) this.print_newline(n > 0)
                return 0 !== t
              }),
              (c.prototype.traverse_whitespace = function(e) {
                return (
                  !(!e.whitespace_before && !e.newlines) &&
                  (this.print_preserved_newlines(e) || (this._output.space_before_token = !0), !0)
                )
              }),
              (c.prototype.previous_token_wrapped = function() {
                return this._output.previous_token_wrapped
              }),
              (c.prototype.print_newline = function(e) {
                this._output.add_new_line(e)
              }),
              (c.prototype.print_token = function(e) {
                e.text &&
                  (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(e.text))
              }),
              (c.prototype.indent = function() {
                this.indent_level++
              }),
              (c.prototype.get_full_indent = function(e) {
                return (e = this.indent_level + (e || 0)), e < 1 ? '' : this._output.get_indent_string(e)
              })
            var h = function(e) {
                var t = null,
                  n = e.next
                while (n.type !== o.EOF && e.closed !== n) {
                  if (n.type === o.ATTRIBUTE && 'type' === n.text) {
                    n.next &&
                      n.next.type === o.EQUALS &&
                      n.next.next &&
                      n.next.next.type === o.VALUE &&
                      (t = n.next.next.text)
                    break
                  }
                  n = n.next
                }
                return t
              },
              d = function(e, t) {
                var n = null,
                  i = null
                return t.closed
                  ? ('script' === e ? (n = 'text/javascript') : 'style' === e && (n = 'text/css'),
                    (n = h(t) || n),
                    n.search('text/css') > -1
                      ? (i = 'css')
                      : n.search(
                          /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/,
                        ) > -1
                      ? (i = 'javascript')
                      : n.search(/(text|application|dojo)\/(x-)?(html)/) > -1
                      ? (i = 'html')
                      : n.search(/test\/null/) > -1 && (i = 'null'),
                    i)
                  : null
              }
            function u(e, t) {
              return -1 !== t.indexOf(e)
            }
            function p(e, t, n) {
              ;(this.parent = e || null),
                (this.tag = t ? t.tag_name : ''),
                (this.indent_level = n || 0),
                (this.parser_token = t || null)
            }
            function m(e) {
              ;(this._printer = e), (this._current_frame = null)
            }
            function f(e, t, n, r) {
              ;(this._source_text = e || ''),
                (t = t || {}),
                (this._js_beautify = n),
                (this._css_beautify = r),
                (this._tag_stack = null)
              var a = new i(t, 'html')
              ;(this._options = a),
                (this._is_wrap_attributes_force = 'force' === this._options.wrap_attributes.substr(0, 'force'.length)),
                (this._is_wrap_attributes_force_expand_multiline =
                  'force-expand-multiline' === this._options.wrap_attributes),
                (this._is_wrap_attributes_force_aligned = 'force-aligned' === this._options.wrap_attributes),
                (this._is_wrap_attributes_aligned_multiple = 'aligned-multiple' === this._options.wrap_attributes),
                (this._is_wrap_attributes_preserve =
                  'preserve' === this._options.wrap_attributes.substr(0, 'preserve'.length)),
                (this._is_wrap_attributes_preserve_aligned = 'preserve-aligned' === this._options.wrap_attributes)
            }
            ;(m.prototype.get_parser_token = function() {
              return this._current_frame ? this._current_frame.parser_token : null
            }),
              (m.prototype.record_tag = function(e) {
                var t = new p(this._current_frame, e, this._printer.indent_level)
                this._current_frame = t
              }),
              (m.prototype._try_pop_frame = function(e) {
                var t = null
                return (
                  e &&
                    ((t = e.parser_token),
                    (this._printer.indent_level = e.indent_level),
                    (this._current_frame = e.parent)),
                  t
                )
              }),
              (m.prototype._get_frame = function(e, t) {
                var n = this._current_frame
                while (n) {
                  if (-1 !== e.indexOf(n.tag)) break
                  if (t && -1 !== t.indexOf(n.tag)) {
                    n = null
                    break
                  }
                  n = n.parent
                }
                return n
              }),
              (m.prototype.try_pop = function(e, t) {
                var n = this._get_frame([e], t)
                return this._try_pop_frame(n)
              }),
              (m.prototype.indent_to_tag = function(e) {
                var t = this._get_frame(e)
                t && (this._printer.indent_level = t.indent_level)
              }),
              (f.prototype.beautify = function() {
                if (this._options.disabled) return this._source_text
                var e = this._source_text,
                  t = this._options.eol
                'auto' === this._options.eol && ((t = '\n'), e && s.test(e) && (t = e.match(s)[0])),
                  (e = e.replace(l, '\n'))
                var n = e.match(/^[\t ]*/)[0],
                  i = { text: '', type: '' },
                  r = new g(),
                  h = new c(this._options, n),
                  d = new a(e, this._options).tokenize()
                this._tag_stack = new m(h)
                var u = null,
                  p = d.next()
                while (p.type !== o.EOF)
                  p.type === o.TAG_OPEN || p.type === o.COMMENT
                    ? ((u = this._handle_tag_open(h, p, r, i)), (r = u))
                    : p.type === o.ATTRIBUTE ||
                      p.type === o.EQUALS ||
                      p.type === o.VALUE ||
                      (p.type === o.TEXT && !r.tag_complete)
                    ? (u = this._handle_inside_tag(h, p, r, d))
                    : p.type === o.TAG_CLOSE
                    ? (u = this._handle_tag_close(h, p, r))
                    : p.type === o.TEXT
                    ? (u = this._handle_text(h, p, r))
                    : h.add_raw_token(p),
                    (i = u),
                    (p = d.next())
                var f = h._output.get_code(t)
                return f
              }),
              (f.prototype._handle_tag_close = function(e, t, n) {
                var i = { text: t.text, type: t.type }
                return (
                  (e.alignment_size = 0),
                  (n.tag_complete = !0),
                  e.set_space_before_token(t.newlines || '' !== t.whitespace_before, !0),
                  n.is_unformatted
                    ? e.add_raw_token(t)
                    : ('<' === n.tag_start_char &&
                        (e.set_space_before_token('/' === t.text[0], !0),
                        this._is_wrap_attributes_force_expand_multiline && n.has_wrapped_attrs && e.print_newline(!1)),
                      e.print_token(t)),
                  !n.indent_content ||
                    n.is_unformatted ||
                    n.is_content_unformatted ||
                    (e.indent(), (n.indent_content = !1)),
                  n.is_inline_element || n.is_unformatted || n.is_content_unformatted || e.set_wrap_point(),
                  i
                )
              }),
              (f.prototype._handle_inside_tag = function(e, t, n, i) {
                var r = n.has_wrapped_attrs,
                  a = { text: t.text, type: t.type }
                if ((e.set_space_before_token(t.newlines || '' !== t.whitespace_before, !0), n.is_unformatted))
                  e.add_raw_token(t)
                else if ('{' === n.tag_start_char && t.type === o.TEXT)
                  e.print_preserved_newlines(t) ? ((t.newlines = 0), e.add_raw_token(t)) : e.print_token(t)
                else {
                  if (
                    (t.type === o.ATTRIBUTE
                      ? (e.set_space_before_token(!0), (n.attr_count += 1))
                      : (t.type === o.EQUALS || (t.type === o.VALUE && t.previous.type === o.EQUALS)) &&
                        e.set_space_before_token(!1),
                    t.type === o.ATTRIBUTE &&
                      '<' === n.tag_start_char &&
                      ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) &&
                        (e.traverse_whitespace(t), (r = r || 0 !== t.newlines)),
                      this._is_wrap_attributes_force))
                  ) {
                    var s = n.attr_count > 1
                    if (this._is_wrap_attributes_force_expand_multiline && 1 === n.attr_count) {
                      var l,
                        c = !0,
                        h = 0
                      do {
                        if (((l = i.peek(h)), l.type === o.ATTRIBUTE)) {
                          c = !1
                          break
                        }
                        h += 1
                      } while (h < 4 && l.type !== o.EOF && l.type !== o.TAG_CLOSE)
                      s = !c
                    }
                    s && (e.print_newline(!1), (r = !0))
                  }
                  e.print_token(t), (r = r || e.previous_token_wrapped()), (n.has_wrapped_attrs = r)
                }
                return a
              }),
              (f.prototype._handle_text = function(e, t, n) {
                var i = { text: t.text, type: 'TK_CONTENT' }
                return (
                  n.custom_beautifier_name
                    ? this._print_custom_beatifier_text(e, t, n)
                    : n.is_unformatted || n.is_content_unformatted
                    ? e.add_raw_token(t)
                    : (e.traverse_whitespace(t), e.print_token(t)),
                  i
                )
              }),
              (f.prototype._print_custom_beatifier_text = function(e, t, n) {
                var i = this
                if ('' !== t.text) {
                  var r,
                    a = t.text,
                    o = 1,
                    s = '',
                    l = ''
                  'javascript' === n.custom_beautifier_name && 'function' === typeof this._js_beautify
                    ? (r = this._js_beautify)
                    : 'css' === n.custom_beautifier_name && 'function' === typeof this._css_beautify
                    ? (r = this._css_beautify)
                    : 'html' === n.custom_beautifier_name &&
                      (r = function(e, t) {
                        var n = new f(e, t, i._js_beautify, i._css_beautify)
                        return n.beautify()
                      }),
                    'keep' === this._options.indent_scripts
                      ? (o = 0)
                      : 'separate' === this._options.indent_scripts && (o = -e.indent_level)
                  var c = e.get_full_indent(o)
                  if (
                    ((a = a.replace(/\n[ \t]*$/, '')),
                    'html' !== n.custom_beautifier_name && '<' === a[0] && a.match(/^(<!--|<!\[CDATA\[)/))
                  ) {
                    var h = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(a)
                    if (!h) return void e.add_raw_token(t)
                    ;(s = c + h[1] + '\n'),
                      (a = h[4]),
                      h[5] && (l = c + h[5]),
                      (a = a.replace(/\n[ \t]*$/, '')),
                      (h[2] || -1 !== h[3].indexOf('\n')) &&
                        ((h = h[3].match(/[ \t]+$/)), h && (t.whitespace_before = h[0]))
                  }
                  if (a)
                    if (r) {
                      var d = function() {
                        this.eol = '\n'
                      }
                      d.prototype = this._options.raw_options
                      var u = new d()
                      a = r(c + a, u)
                    } else {
                      var p = t.whitespace_before
                      p && (a = a.replace(new RegExp('\n(' + p + ')?', 'g'), '\n')),
                        (a = c + a.replace(/\n/g, '\n' + c))
                    }
                  s && (a = a ? s + a + '\n' + l : s + l),
                    e.print_newline(!1),
                    a &&
                      ((t.text = a),
                      (t.whitespace_before = ''),
                      (t.newlines = 0),
                      e.add_raw_token(t),
                      e.print_newline(!0))
                }
              }),
              (f.prototype._handle_tag_open = function(e, t, n, i) {
                var r = this._get_tag_open_token(t)
                return (
                  (n.is_unformatted || n.is_content_unformatted) && t.type === o.TAG_OPEN && 0 === t.text.indexOf('</')
                    ? (e.add_raw_token(t), (r.start_tag_token = this._tag_stack.try_pop(r.tag_name)))
                    : (e.traverse_whitespace(t),
                      this._set_tag_position(e, t, r, n, i),
                      r.is_inline_element || e.set_wrap_point(),
                      e.print_token(t)),
                  (this._is_wrap_attributes_force_aligned ||
                    this._is_wrap_attributes_aligned_multiple ||
                    this._is_wrap_attributes_preserve_aligned) &&
                    (r.alignment_size = t.text.length + 1),
                  r.tag_complete || r.is_unformatted || (e.alignment_size = r.alignment_size),
                  r
                )
              })
            var g = function(e, t) {
              var n
              ;((this.parent = e || null),
              (this.text = ''),
              (this.type = 'TK_TAG_OPEN'),
              (this.tag_name = ''),
              (this.is_inline_element = !1),
              (this.is_unformatted = !1),
              (this.is_content_unformatted = !1),
              (this.is_empty_element = !1),
              (this.is_start_tag = !1),
              (this.is_end_tag = !1),
              (this.indent_content = !1),
              (this.multiline_content = !1),
              (this.custom_beautifier_name = null),
              (this.start_tag_token = null),
              (this.attr_count = 0),
              (this.has_wrapped_attrs = !1),
              (this.alignment_size = 0),
              (this.tag_complete = !1),
              (this.tag_start_char = ''),
              (this.tag_check = ''),
              t)
                ? ((this.tag_start_char = t.text[0]),
                  (this.text = t.text),
                  '<' === this.tag_start_char
                    ? ((n = t.text.match(/^<([^\s>]*)/)), (this.tag_check = n ? n[1] : ''))
                    : ((n = t.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/)),
                      (this.tag_check = n ? n[1] : ''),
                      '{{#>' === t.text && '>' === this.tag_check && null !== t.next && (this.tag_check = t.next.text)),
                  (this.tag_check = this.tag_check.toLowerCase()),
                  t.type === o.COMMENT && (this.tag_complete = !0),
                  (this.is_start_tag = '/' !== this.tag_check.charAt(0)),
                  (this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1)),
                  (this.is_end_tag = !this.is_start_tag || (t.closed && '/>' === t.closed.text)),
                  (this.is_end_tag =
                    this.is_end_tag ||
                    ('{' === this.tag_start_char && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(2))))))
                : (this.tag_complete = !0)
            }
            ;(f.prototype._get_tag_open_token = function(e) {
              var t = new g(this._tag_stack.get_parser_token(), e)
              return (
                (t.alignment_size = this._options.wrap_attributes_indent_size),
                (t.is_end_tag = t.is_end_tag || u(t.tag_check, this._options.void_elements)),
                (t.is_empty_element = t.tag_complete || (t.is_start_tag && t.is_end_tag)),
                (t.is_unformatted = !t.tag_complete && u(t.tag_check, this._options.unformatted)),
                (t.is_content_unformatted = !t.is_empty_element && u(t.tag_check, this._options.content_unformatted)),
                (t.is_inline_element = u(t.tag_name, this._options.inline) || '{' === t.tag_start_char),
                t
              )
            }),
              (f.prototype._set_tag_position = function(e, t, n, i, r) {
                if (
                  (n.is_empty_element ||
                    (n.is_end_tag
                      ? (n.start_tag_token = this._tag_stack.try_pop(n.tag_name))
                      : (this._do_optional_end_element(n) &&
                          (n.is_inline_element || (n.parent && (n.parent.multiline_content = !0), e.print_newline(!1))),
                        this._tag_stack.record_tag(n),
                        ('script' !== n.tag_name && 'style' !== n.tag_name) ||
                          n.is_unformatted ||
                          n.is_content_unformatted ||
                          (n.custom_beautifier_name = d(n.tag_check, t)))),
                  u(n.tag_check, this._options.extra_liners) &&
                    (e.print_newline(!1), e._output.just_added_blankline() || e.print_newline(!0)),
                  n.is_empty_element)
                ) {
                  if ('{' === n.tag_start_char && 'else' === n.tag_check) {
                    this._tag_stack.indent_to_tag(['if', 'unless', 'each']), (n.indent_content = !0)
                    var a = e.current_line_has_match(/{{#if/)
                    a || e.print_newline(!1)
                  }
                  ;('!--' === n.tag_name && r.type === o.TAG_CLOSE && i.is_end_tag && -1 === n.text.indexOf('\n')) ||
                    n.is_inline_element ||
                    n.is_unformatted ||
                    e.print_newline(!1)
                } else
                  n.is_unformatted || n.is_content_unformatted
                    ? n.is_inline_element || n.is_unformatted || e.print_newline(!1)
                    : n.is_end_tag
                    ? ((n.start_tag_token && n.start_tag_token.multiline_content) ||
                        !(
                          n.is_inline_element ||
                          i.is_inline_element ||
                          (r.type === o.TAG_CLOSE && n.start_tag_token === i) ||
                          'TK_CONTENT' === r.type
                        )) &&
                      e.print_newline(!1)
                    : ((n.indent_content = !n.custom_beautifier_name),
                      '<' === n.tag_start_char &&
                        ('html' === n.tag_name
                          ? (n.indent_content = this._options.indent_inner_html)
                          : 'head' === n.tag_name
                          ? (n.indent_content = this._options.indent_head_inner_html)
                          : 'body' === n.tag_name && (n.indent_content = this._options.indent_body_inner_html)),
                      n.is_inline_element ||
                        'TK_CONTENT' === r.type ||
                        (n.parent && (n.parent.multiline_content = !0), e.print_newline(!1)))
              })
            var b = [
                'address',
                'article',
                'aside',
                'blockquote',
                'details',
                'div',
                'dl',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'header',
                'hr',
                'main',
                'nav',
                'ol',
                'p',
                'pre',
                'section',
                'table',
                'ul',
              ],
              _ = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video']
            ;(f.prototype._do_optional_end_element = function(e) {
              var t = null
              if (!e.is_empty_element && e.is_start_tag && e.parent) {
                if ('body' === e.tag_name) t = t || this._tag_stack.try_pop('head')
                else if ('li' === e.tag_name) t = t || this._tag_stack.try_pop('li', ['ol', 'ul'])
                else if ('dd' === e.tag_name || 'dt' === e.tag_name)
                  (t = t || this._tag_stack.try_pop('dt', ['dl'])), (t = t || this._tag_stack.try_pop('dd', ['dl']))
                else if ('p' === e.parent.tag_name && -1 !== b.indexOf(e.tag_name)) {
                  var n = e.parent.parent
                  ;(n && -1 !== _.indexOf(n.tag_name)) || (t = t || this._tag_stack.try_pop('p'))
                } else
                  'rp' === e.tag_name || 'rt' === e.tag_name
                    ? ((t = t || this._tag_stack.try_pop('rt', ['ruby', 'rtc'])),
                      (t = t || this._tag_stack.try_pop('rp', ['ruby', 'rtc'])))
                    : 'optgroup' === e.tag_name
                    ? (t = t || this._tag_stack.try_pop('optgroup', ['select']))
                    : 'option' === e.tag_name
                    ? (t = t || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']))
                    : 'colgroup' === e.tag_name
                    ? (t = t || this._tag_stack.try_pop('caption', ['table']))
                    : 'thead' === e.tag_name
                    ? ((t = t || this._tag_stack.try_pop('caption', ['table'])),
                      (t = t || this._tag_stack.try_pop('colgroup', ['table'])))
                    : 'tbody' === e.tag_name || 'tfoot' === e.tag_name
                    ? ((t = t || this._tag_stack.try_pop('caption', ['table'])),
                      (t = t || this._tag_stack.try_pop('colgroup', ['table'])),
                      (t = t || this._tag_stack.try_pop('thead', ['table'])),
                      (t = t || this._tag_stack.try_pop('tbody', ['table'])))
                    : 'tr' === e.tag_name
                    ? ((t = t || this._tag_stack.try_pop('caption', ['table'])),
                      (t = t || this._tag_stack.try_pop('colgroup', ['table'])),
                      (t = t || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot'])))
                    : ('th' !== e.tag_name && 'td' !== e.tag_name) ||
                      ((t = t || this._tag_stack.try_pop('td', ['table', 'thead', 'tbody', 'tfoot', 'tr'])),
                      (t = t || this._tag_stack.try_pop('th', ['table', 'thead', 'tbody', 'tfoot', 'tr'])))
                return (e.parent = this._tag_stack.get_parser_token()), t
              }
            }),
              (e.exports.Beautifier = f)
          },
          function(e, t, n) {
            var i = n(6).Options
            function r(e) {
              i.call(this, e, 'html'),
                1 === this.templating.length &&
                  'auto' === this.templating[0] &&
                  (this.templating = ['django', 'erb', 'handlebars', 'php']),
                (this.indent_inner_html = this._get_boolean('indent_inner_html')),
                (this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', !0)),
                (this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', !0)),
                (this.indent_handlebars = this._get_boolean('indent_handlebars', !0)),
                (this.wrap_attributes = this._get_selection('wrap_attributes', [
                  'auto',
                  'force',
                  'force-aligned',
                  'force-expand-multiline',
                  'aligned-multiple',
                  'preserve',
                  'preserve-aligned',
                ])),
                (this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size)),
                (this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html'])),
                (this.inline = this._get_array('inline', [
                  'a',
                  'abbr',
                  'area',
                  'audio',
                  'b',
                  'bdi',
                  'bdo',
                  'br',
                  'button',
                  'canvas',
                  'cite',
                  'code',
                  'data',
                  'datalist',
                  'del',
                  'dfn',
                  'em',
                  'embed',
                  'i',
                  'iframe',
                  'img',
                  'input',
                  'ins',
                  'kbd',
                  'keygen',
                  'label',
                  'map',
                  'mark',
                  'math',
                  'meter',
                  'noscript',
                  'object',
                  'output',
                  'progress',
                  'q',
                  'ruby',
                  's',
                  'samp',
                  'select',
                  'small',
                  'span',
                  'strong',
                  'sub',
                  'sup',
                  'svg',
                  'template',
                  'textarea',
                  'time',
                  'u',
                  'var',
                  'video',
                  'wbr',
                  'text',
                  'acronym',
                  'big',
                  'strike',
                  'tt',
                ])),
                (this.void_elements = this._get_array('void_elements', [
                  'area',
                  'base',
                  'br',
                  'col',
                  'embed',
                  'hr',
                  'img',
                  'input',
                  'keygen',
                  'link',
                  'menuitem',
                  'meta',
                  'param',
                  'source',
                  'track',
                  'wbr',
                  '!doctype',
                  '?xml',
                  'basefont',
                  'isindex',
                ])),
                (this.unformatted = this._get_array('unformatted', [])),
                (this.content_unformatted = this._get_array('content_unformatted', ['pre', 'textarea'])),
                (this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter')),
                (this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']))
            }
            ;(r.prototype = new i()), (e.exports.Options = r)
          },
          function(e, t, n) {
            var i = n(9).Tokenizer,
              r = n(9).TOKEN,
              a = n(13).Directives,
              o = n(14).TemplatablePattern,
              s = n(12).Pattern,
              l = {
                TAG_OPEN: 'TK_TAG_OPEN',
                TAG_CLOSE: 'TK_TAG_CLOSE',
                ATTRIBUTE: 'TK_ATTRIBUTE',
                EQUALS: 'TK_EQUALS',
                VALUE: 'TK_VALUE',
                COMMENT: 'TK_COMMENT',
                TEXT: 'TK_TEXT',
                UNKNOWN: 'TK_UNKNOWN',
                START: r.START,
                RAW: r.RAW,
                EOF: r.EOF,
              },
              c = new a(/<\!--/, /-->/),
              h = function(e, t) {
                i.call(this, e, t), (this._current_tag_name = '')
                var n = new o(this._input).read_options(this._options),
                  r = new s(this._input)
                if (
                  ((this.__patterns = {
                    word: n.until(/[\n\r\t <]/),
                    single_quote: n.until_after(/'/),
                    double_quote: n.until_after(/"/),
                    attribute: n.until(/[\n\r\t =>]|\/>/),
                    element_name: n.until(/[\n\r\t >\/]/),
                    handlebars_comment: r.starting_with(/{{!--/).until_after(/--}}/),
                    handlebars: r.starting_with(/{{/).until_after(/}}/),
                    handlebars_open: r.until(/[\n\r\t }]/),
                    handlebars_raw_close: r.until(/}}/),
                    comment: r.starting_with(/<!--/).until_after(/-->/),
                    cdata: r.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
                    conditional_comment: r.starting_with(/<!\[/).until_after(/]>/),
                    processing: r.starting_with(/<\?/).until_after(/\?>/),
                  }),
                  this._options.indent_handlebars &&
                    (this.__patterns.word = this.__patterns.word.exclude('handlebars')),
                  (this._unformatted_content_delimiter = null),
                  this._options.unformatted_content_delimiter)
                ) {
                  var a = this._input.get_literal_regexp(this._options.unformatted_content_delimiter)
                  this.__patterns.unformatted_content_delimiter = r.matching(a).until_after(a)
                }
              }
            ;(h.prototype = new i()),
              (h.prototype._is_comment = function(e) {
                return !1
              }),
              (h.prototype._is_opening = function(e) {
                return e.type === l.TAG_OPEN
              }),
              (h.prototype._is_closing = function(e, t) {
                return (
                  e.type === l.TAG_CLOSE &&
                  t &&
                  ((('>' === e.text || '/>' === e.text) && '<' === t.text[0]) ||
                    ('}}' === e.text && '{' === t.text[0] && '{' === t.text[1]))
                )
              }),
              (h.prototype._reset = function() {
                this._current_tag_name = ''
              }),
              (h.prototype._get_next_token = function(e, t) {
                var n = null
                this._readWhitespace()
                var i = this._input.peek()
                return null === i
                  ? this._create_token(l.EOF, '')
                  : ((n = n || this._read_open_handlebars(i, t)),
                    (n = n || this._read_attribute(i, e, t)),
                    (n = n || this._read_raw_content(i, e, t)),
                    (n = n || this._read_close(i, t)),
                    (n = n || this._read_content_word(i)),
                    (n = n || this._read_comment_or_cdata(i)),
                    (n = n || this._read_processing(i)),
                    (n = n || this._read_open(i, t)),
                    (n = n || this._create_token(l.UNKNOWN, this._input.next())),
                    n)
              }),
              (h.prototype._read_comment_or_cdata = function(e) {
                var t = null,
                  n = null,
                  i = null
                if ('<' === e) {
                  var r = this._input.peek(1)
                  '!' === r &&
                    ((n = this.__patterns.comment.read()),
                    n
                      ? ((i = c.get_directives(n)), i && 'start' === i.ignore && (n += c.readIgnored(this._input)))
                      : (n = this.__patterns.cdata.read())),
                    n && ((t = this._create_token(l.COMMENT, n)), (t.directives = i))
                }
                return t
              }),
              (h.prototype._read_processing = function(e) {
                var t = null,
                  n = null,
                  i = null
                if ('<' === e) {
                  var r = this._input.peek(1)
                  ;('!' !== r && '?' !== r) ||
                    ((n = this.__patterns.conditional_comment.read()), (n = n || this.__patterns.processing.read())),
                    n && ((t = this._create_token(l.COMMENT, n)), (t.directives = i))
                }
                return t
              }),
              (h.prototype._read_open = function(e, t) {
                var n = null,
                  i = null
                return (
                  t ||
                    ('<' === e &&
                      ((n = this._input.next()),
                      '/' === this._input.peek() && (n += this._input.next()),
                      (n += this.__patterns.element_name.read()),
                      (i = this._create_token(l.TAG_OPEN, n)))),
                  i
                )
              }),
              (h.prototype._read_open_handlebars = function(e, t) {
                var n = null,
                  i = null
                return (
                  t ||
                    (this._options.indent_handlebars &&
                      '{' === e &&
                      '{' === this._input.peek(1) &&
                      ('!' === this._input.peek(2)
                        ? ((n = this.__patterns.handlebars_comment.read()),
                          (n = n || this.__patterns.handlebars.read()),
                          (i = this._create_token(l.COMMENT, n)))
                        : ((n = this.__patterns.handlebars_open.read()), (i = this._create_token(l.TAG_OPEN, n))))),
                  i
                )
              }),
              (h.prototype._read_close = function(e, t) {
                var n = null,
                  i = null
                return (
                  t &&
                    ('<' === t.text[0] && ('>' === e || ('/' === e && '>' === this._input.peek(1)))
                      ? ((n = this._input.next()),
                        '/' === e && (n += this._input.next()),
                        (i = this._create_token(l.TAG_CLOSE, n)))
                      : '{' === t.text[0] &&
                        '}' === e &&
                        '}' === this._input.peek(1) &&
                        (this._input.next(), this._input.next(), (i = this._create_token(l.TAG_CLOSE, '}}')))),
                  i
                )
              }),
              (h.prototype._read_attribute = function(e, t, n) {
                var i = null,
                  r = ''
                if (n && '<' === n.text[0])
                  if ('=' === e) i = this._create_token(l.EQUALS, this._input.next())
                  else if ('"' === e || "'" === e) {
                    var a = this._input.next()
                    ;(a += '"' === e ? this.__patterns.double_quote.read() : this.__patterns.single_quote.read()),
                      (i = this._create_token(l.VALUE, a))
                  } else
                    (r = this.__patterns.attribute.read()),
                      r &&
                        (i = t.type === l.EQUALS ? this._create_token(l.VALUE, r) : this._create_token(l.ATTRIBUTE, r))
                return i
              }),
              (h.prototype._is_content_unformatted = function(e) {
                return (
                  -1 === this._options.void_elements.indexOf(e) &&
                  (-1 !== this._options.content_unformatted.indexOf(e) || -1 !== this._options.unformatted.indexOf(e))
                )
              }),
              (h.prototype._read_raw_content = function(e, t, n) {
                var i = ''
                if (n && '{' === n.text[0]) i = this.__patterns.handlebars_raw_close.read()
                else if (t.type === l.TAG_CLOSE && '<' === t.opened.text[0]) {
                  var r = t.opened.text.substr(1).toLowerCase()
                  if ('script' === r || 'style' === r) {
                    var a = this._read_comment_or_cdata(e)
                    if (a) return (a.type = l.TEXT), a
                    i = this._input.readUntil(new RegExp('</' + r + '[\\n\\r\\t ]*?>', 'ig'))
                  } else
                    this._is_content_unformatted(r) &&
                      (i = this._input.readUntil(new RegExp('</' + r + '[\\n\\r\\t ]*?>', 'ig')))
                }
                return i ? this._create_token(l.TEXT, i) : null
              }),
              (h.prototype._read_content_word = function(e) {
                var t = ''
                if (
                  (this._options.unformatted_content_delimiter &&
                    e === this._options.unformatted_content_delimiter[0] &&
                    (t = this.__patterns.unformatted_content_delimiter.read()),
                  t || (t = this.__patterns.word.read()),
                  t)
                )
                  return this._create_token(l.TEXT, t)
              }),
              (e.exports.Tokenizer = h),
              (e.exports.TOKEN = l)
          },
        ])
      n('54FV')
      var vt = {
        version: 1.1,
        tags: [
          {
            name: 'html',
            description: { kind: 'markdown', value: 'The html element represents the root of an HTML document.' },
            attributes: [
              {
                name: 'manifest',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies the URI of a resource manifest indicating resources that should be cached locally. See [Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) for details.',
                },
              },
              {
                name: 'version',
                description:
                  'Specifies the version of the HTML [Document Type Definition](https://developer.mozilla.org/en-US/docs/Glossary/DTD "Document Type Definition: In HTML, the doctype is the required "<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called \u201cquirks mode\u201d when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.") that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.',
              },
              {
                name: 'xmlns',
                description:
                  'Specifies the XML Namespace of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML parsers, and optional in text/html documents.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/html' }],
          },
          {
            name: 'head',
            description: {
              kind: 'markdown',
              value: 'The head element represents a collection of metadata for the Document.',
            },
            attributes: [
              { name: 'profile', description: 'The URIs of one or more metadata profiles, separated by white space.' },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/head' }],
          },
          {
            name: 'title',
            description: {
              kind: 'markdown',
              value:
                "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/title' }],
          },
          {
            name: 'base',
            description: {
              kind: 'markdown',
              value:
                'The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.',
            },
            attributes: [
              {
                name: 'href',
                description: {
                  kind: 'markdown',
                  value:
                    'The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URLs are allowed.',
                },
              },
              {
                name: 'target',
                description: {
                  kind: 'markdown',
                  value:
                    'A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a name of, or keyword for, a _browsing context_ (for example: tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the result into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the result into a new unnamed browsing context.\n*   `_parent`: Load the result into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n\nIf this attribute is specified, this element must come before any other elements with attributes whose values are URLs.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/base' }],
          },
          {
            name: 'link',
            description: {
              kind: 'markdown',
              value: 'The link element allows authors to link their document to other resources.',
            },
            attributes: [
              {
                name: 'href',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies the [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL "URL: Uniform Resource Locator (URL) is a text string specifying where a resource can be found on the Internet.") of the linked resource. A URL can be absolute or relative.',
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'This enumerated attribute indicates whether [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") must be used when fetching the resource. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\n`anonymous`\n\nA cross-origin request (i.e. with an [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.") HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header) the image will be tainted and its usage restricted.\n\n`use-credentials`\n\nA cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials "The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request\'s credentials mode (Request.credentials) is "include".") HTTP header), the resource will be _tainted_ and its usage restricted.\n\nIf the attribute is not present, the resource is fetched without a [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.',
                },
              },
              {
                name: 'rel',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).',
                },
              },
              {
                name: 'media',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets \u2014 it allows the user agent to pick the best adapted one for the device it runs on.\n\n**Notes:**\n\n*   In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](https://developer.mozilla.org/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries), which are a superset of the allowed values of HTML 4.\n*   Browsers not supporting [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.",
                },
              },
              {
                name: 'hreflang',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Use this attribute only if the [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute is present.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice. It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.',
                },
              },
              {
                name: 'sizes',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:\n\n*   `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.\n*   a white-space separated list of sizes, each in the format `_<width in pixels>_x_<height in pixels>_` or `_<width in pixels>_X_<height in pixels>_`. Each of these sizes must be contained in the resource.\n\n**Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-sizes) contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous; you should definitely use it.",
                },
              },
              {
                name: 'as',
                description:
                  'This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element. It specifies the type of content being loaded by the `<link>`, which is necessary for content prioritization, request matching, application of correct [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and setting of correct [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept "The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending on\xa0the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image,\xa0video or a script.") request header.',
              },
              {
                name: 'importance',
                description:
                  'Indicates the relative importance of the resource. Priority hints are delegated using the values:',
              },
              {
                name: 'importance',
                description:
                  '**`auto`**: Indicates\xa0**no\xa0preference**. The browser may use its own heuristics to decide the priority of the resource.\n\n**`high`**: Indicates to the\xa0browser\xa0that the resource is of\xa0**high** priority.\n\n**`low`**:\xa0Indicates to the\xa0browser\xa0that the resource is of\xa0**low** priority.\n\n**Note:** The `importance` attribute may only be used for the `<link>` element if `rel="preload"` or `rel="prefetch"` is present.',
              },
              {
                name: 'integrity',
                description:
                  'Contains inline metadata \u2014 a base64-encoded cryptographic hash of the resource (file) you\u2019re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).',
              },
              {
                name: 'referrerpolicy',
                description:
                  'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer` means that the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` means that no [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u2019s default behavior, if no policy is otherwise specified.\n*   `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.\n*   `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer\'s path.\n*   `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
              },
              {
                name: 'title',
                description:
                  'The `title` attribute has special semantics on the `<link>` element. When used on a `<link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](https://developer.mozilla.org/en-US/docs/Correctly_Using_Titles_With_External_Stylesheets).',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/link' }],
          },
          {
            name: 'meta',
            description: {
              kind: 'markdown',
              value:
                'The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.',
            },
            attributes: [
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop), [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) is also set.\n\nThis metadata name is associated with the value contained by the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute. The possible values for the name attribute are:\n\n*   `application-name` which defines the name of the application running in the web page.\n    \n    **Note:**\n    \n    *   Browsers may use this to identify the application. It is different from the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title "The HTML Title element (<title>) defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab.") element, which usually contain the application name, but may also contain information like the document name or a status.\n    *   Simple web pages shouldn\'t define an application-name.\n    \n*   `author` which defines the name of the document\'s author.\n*   `description` which contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.\n*   `generator` which contains the identifier of the software that generated the page.\n*   `keywords` which contains words relevant to the page\'s content separated by commas.\n*   `referrer` which controls the [`Referer` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) attached to requests sent from the document:\n    \n    Values for the `content` attribute of `<meta name="referrer">`\n    \n    `no-referrer`\n    \n    Do not send a HTTP `Referrer` header.\n    \n    `origin`\n    \n    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document.\n    \n    `no-referrer-when-downgrade`\n    \n    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as a referrer to URLs as secure as the current page, (https\u2192https), but does not send a referrer to less secure URLs (https\u2192http). This is the default behaviour.\n    \n    `origin-when-cross-origin`\n    \n    Send the full URL (stripped of parameters) for same-origin requests, but only send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) for other cases.\n    \n    `same-origin`\n    \n    A referrer will be sent for [same-site origins](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), but cross-origin requests will contain no referrer information.\n    \n    `strict-origin`\n    \n    Only send the origin of the document as the referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but don\'t send it to a less secure destination (HTTPS->HTTP).\n    \n    `strict-origin-when-cross-origin`\n    \n    Send a full URL when performing a same-origin request, only send the origin of the document to a-priori as-much-secure destination (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).\n    \n    `unsafe-URL`\n    \n    Send the full URL (stripped of parameters) for same-origin or cross-origin requests.\n    \n    **Notes:**\n    \n    *   Some browsers support the deprecated values of `always`, `default`, and `never` for referrer.\n    *   Dynamically inserting `<meta name="referrer">` (with [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) makes the referrer behaviour unpredictable.\n    *   When several conflicting policies are defined, the no-referrer policy is applied.\n    \n\nThis attribute may also have a value taken from the extended list defined on [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Although none have been formally accepted yet, a few commonly used names are:\n\n*   `creator` which defines the name of the creator of the document, such as an organization or institution. If there are more than one, several [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") elements should be used.\n*   `googlebot`, a synonym of `robots`, is only followed by Googlebot (the indexing crawler for Google).\n*   `publisher` which defines the name of the document\'s publisher.\n*   `robots` which defines the behaviour that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:\n    \n    Values for the content of `<meta name="robots">`\n    \n    Value\n    \n    Description\n    \n    Used by\n    \n    `index`\n    \n    Allows the robot to index the page (default).\n    \n    All\n    \n    `noindex`\n    \n    Requests the robot to not index the page.\n    \n    All\n    \n    `follow`\n    \n    Allows the robot to follow the links on the page (default).\n    \n    All\n    \n    `nofollow`\n    \n    Requests the robot to not follow the links on the page.\n    \n    All\n    \n    `none`\n    \n    Equivalent to `noindex, nofollow`\n    \n    [Google](https://support.google.com/webmasters/answer/79812)\n    \n    `noodp`\n    \n    Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results.\n    \n    [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `noarchive`\n    \n    Requests the search engine not to cache the page content.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `nosnippet`\n    \n    Prevents displaying any description of the page in search engine results.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `noimageindex`\n    \n    Requests this page not to appear as the referring page of an indexed image.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)\n    \n    `nocache`\n    \n    Synonym of `noarchive`.\n    \n    [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    **Notes:**\n    \n    *   Only cooperative robots follow these rules. Do not expect to prevent e-mail harvesters with them.\n    *   The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _[robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/robots.txt "robots.txt: Robots.txt is a file which is usually placed in the root of any website. It decides whether\xa0crawlers are permitted or forbidden access to the web site.")_ file.\n    *   If you want to remove a page, `noindex` will work, but only after the robot visits the page again. Ensure that the `robots.txt` file is not preventing revisits.\n    *   Some values are mutually exclusive, like `index` and `noindex`, or `follow` and `nofollow`. In these cases the robot\'s behaviour is undefined and may vary between them.\n    *   Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header `X-Robots-Tag`; this allows non-HTML documents like images to use these rules.\n    \n*   `slurp`, is a synonym of `robots`, but only for Slurp - the crawler for Yahoo Search.\n*   `viewport`, which gives hints about the size of the initial size of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport "viewport: A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you\'re viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view."). Used by mobile devices only.\n    \n    Values for the content of `<meta name="viewport">`\n    \n    Value\n    \n    Possible subvalues\n    \n    Description\n    \n    `width`\n    \n    A positive integer number, or the text `device-width`\n    \n    Defines the pixel width of the viewport that you want the web site to be rendered at.\n    \n    `height`\n    \n    A positive integer, or the text `device-height`\n    \n    Defines the height of the viewport. Not used by any browser.\n    \n    `initial-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size.\n    \n    `maximum-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the maximum amount to zoom in. It must be greater or equal to the `minimum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.\n    \n    `minimum-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the minimum zoom level. It must be smaller or equal to the `maximum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.\n    \n    `user-scalable`\n    \n    `yes` or `no`\n    \n    If set to `no`, the user is not able to zoom in the webpage. The default is `yes`. Browser settings can ignore this rule, and iOS10+ ignores it by default.\n    \n    Specification\n    \n    Status\n    \n    Comment\n    \n    [CSS Device Adaptation  \n    The definition of \'<meta name="viewport">\' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)\n    \n    Working Draft\n    \n    Non-normatively describes the Viewport META element\n    \n    See also: [`@viewport`](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport "The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It\'s primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).")\n    \n    **Notes:**\n    \n    *   Though unstandardized, this declaration is respected by most mobile browsers due to de-facto dominance.\n    *   The default values may vary between devices and browsers.\n    *   To learn about this declaration in Firefox for Mobile, see [this article](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag "Mobile/Viewport meta tag").',
                },
              },
              {
                name: 'http-equiv',
                description: {
                  kind: 'markdown',
                  value:
                    'Defines a pragma directive. The attribute is named `**http-equiv**(alent)` because all the allowed values are names of particular HTTP headers:\n\n*   `"content-language"`  \n    Defines the default language of the page. It can be overridden by the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any element.\n    \n    **Warning:** Do not use this value, as it is obsolete. Prefer the `lang` attribute on the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.") element.\n    \n*   `"content-security-policy"`  \n    Allows page authors to define a [content policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.\n*   `"content-type"`  \n    Defines the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the document, followed by its character encoding. It follows the same syntax as the HTTP `content-type` entity-header field, but as it is inside a HTML page, most values other than `text/html` are impossible. Therefore the valid syntax for its `content` is the string \'`text/html`\' followed by a character set with the following syntax: \'`; charset=_IANAcharset_`\', where `IANAcharset` is the _preferred MIME name_ for a character set as [defined by the IANA.](https://www.iana.org/assignments/character-sets)\n    \n    **Warning:** Do not use this value, as it is obsolete. Use the [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute on the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element.\n    \n    **Note:** As [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") can\'t change documents\' types in XHTML or HTML5\'s XHTML serialization, never set the MIME type to an XHTML MIME type with `<meta>`.\n    \n*   `"refresh"`  \n    This instruction specifies:\n    *   The number of seconds until the page should be reloaded - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer.\n    *   The number of seconds until the page should redirect to another - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer followed by the string \'`;url=`\', and a valid URL.\n*   `"set-cookie"`  \n    Defines a [cookie](https://developer.mozilla.org/en-US/docs/cookie) for the page. Its content must follow the syntax defined in the [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).\n    \n    **Warning:** Do not use this instruction, as it is obsolete. Use the HTTP header [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) instead.',
                },
              },
              {
                name: 'content',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute contains the value for the [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name) attribute, depending on which is used.',
                },
              },
              {
                name: 'charset',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute declares the page\'s character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn\'t request a specific encoding, it suggests:\n\n*   Authors are encouraged to use [`UTF-8`](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8).\n*   Authors should not use ASCII-incompatible encodings to avoid security risk: browsers not supporting them may interpret harmful content as HTML. This happens with the `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, the ISO-2022 family and the EBCDIC family.\n\n**Note:** ASCII-incompatible encodings are those that don\'t map the 8-bit code points `0x20` to `0x7E` to the `0x0020` to `0x007E` Unicode code points)\n\n*   Authors **must not** use `CESU-8`, `UTF-7`, `BOCU-1` and/or `SCSU` as [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks with these encodings have been demonstrated.\n*   Authors should not use `UTF-32` because not all HTML5 encoding algorithms can distinguish it from `UTF-16`.\n\n**Notes:**\n\n*   The declared character encoding must match the one the page was saved with to avoid garbled characters and security holes.\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element declaring the encoding must be inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head "The HTML <head> element provides general information (metadata) about the document, including its title and links to its\xa0scripts and style sheets.") element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.\n*   This [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element is only one part of the [algorithm to determine a page\'s character set](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm "Algorithm charset page"). The [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and any [Byte-Order Marks](https://developer.mozilla.org/en-US/docs/Glossary/Byte-Order_Mark "The definition of that term (Byte-Order Marks) has not been written yet; please consider contributing it!") override this element.\n*   It is strongly recommended to define the character encoding. If a page\'s encoding is undefined, cross-scripting techniques are possible, such as the [`UTF-7` fallback cross-scripting technique](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element with a `charset` attribute is a synonym for the pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=_IANAcharset_">`, where _`IANAcharset`_ contains the value of the equivalent [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute. This syntax is still allowed, although no longer recommended.',
                },
              },
              {
                name: 'scheme',
                description:
                  'This attribute defines the scheme in which metadata is described. A scheme is a context leading to the correct interpretations of the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) value, like a format.\n\n**Warning:** Do not use this value, as it is obsolete. There is no replacement as there was no real usage for it.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/meta' }],
          },
          {
            name: 'style',
            description: {
              kind: 'markdown',
              value:
                'The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.',
            },
            attributes: [
              {
                name: 'media',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines which media the style should be applied to. Its value is a [media query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries), which defaults to `all` if the attribute is missing.',
                },
              },
              {
                name: 'nonce',
                description: {
                  kind: 'markdown',
                  value:
                    'A cryptographic nonce (number used once) used to whitelist inline styles in a [style-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource\u2019s policy is otherwise trivial.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to `text/css` if it is not specified \u2014 there is very little reason to include this in modern web documents.',
                },
              },
              { name: 'scoped', valueSet: 'v' },
              {
                name: 'title',
                description:
                  'This attribute specifies [alternative style sheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets) sets.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/style' }],
          },
          {
            name: 'body',
            description: { kind: 'markdown', value: 'The body element represents the content of the document.' },
            attributes: [
              {
                name: 'onafterprint',
                description: { kind: 'markdown', value: 'Function to call after the user has printed the document.' },
              },
              {
                name: 'onbeforeprint',
                description: {
                  kind: 'markdown',
                  value: 'Function to call when the user requests printing of the document.',
                },
              },
              {
                name: 'onbeforeunload',
                description: { kind: 'markdown', value: 'Function to call when the document is about to be unloaded.' },
              },
              {
                name: 'onhashchange',
                description: {
                  kind: 'markdown',
                  value:
                    "Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.",
                },
              },
              {
                name: 'onlanguagechange',
                description: { kind: 'markdown', value: 'Function to call when the preferred languages changed.' },
              },
              {
                name: 'onmessage',
                description: { kind: 'markdown', value: 'Function to call when the document has received a message.' },
              },
              {
                name: 'onoffline',
                description: { kind: 'markdown', value: 'Function to call when network communication has failed.' },
              },
              {
                name: 'ononline',
                description: {
                  kind: 'markdown',
                  value: 'Function to call when network communication has been restored.',
                },
              },
              { name: 'onpagehide' },
              { name: 'onpageshow' },
              {
                name: 'onpopstate',
                description: {
                  kind: 'markdown',
                  value: 'Function to call when the user has navigated session history.',
                },
              },
              {
                name: 'onstorage',
                description: { kind: 'markdown', value: 'Function to call when the storage area has changed.' },
              },
              {
                name: 'onunload',
                description: { kind: 'markdown', value: 'Function to call when the document is going away.' },
              },
              {
                name: 'alink',
                description:
                  'Color of text for hyperlinks when selected. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active "The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.") pseudo-class instead._',
              },
              {
                name: 'background',
                description:
                  'URI of a image to use as a background. _This method is non-conforming, use CSS [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") property on the element instead._',
              },
              {
                name: 'bgcolor',
                description:
                  'Background color for the document. _This method is non-conforming, use CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property on the element instead._',
              },
              {
                name: 'bottommargin',
                description:
                  'The margin of the bottom of the body. _This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'leftmargin',
                description:
                  'The margin of the left of the body. _This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'link',
                description:
                  'Color of text for unvisited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.") pseudo-class instead._',
              },
              { name: 'onblur', description: 'Function to call when the document loses focus.' },
              { name: 'onerror', description: 'Function to call when the document fails to load properly.' },
              { name: 'onfocus', description: 'Function to call when the document receives focus.' },
              { name: 'onload', description: 'Function to call when the document has finished loading.' },
              {
                name: 'onredo',
                description: 'Function to call when the user has moved forward in undo transaction history.',
              },
              { name: 'onresize', description: 'Function to call when the document has been resized.' },
              {
                name: 'onundo',
                description: 'Function to call when the user has moved backward in undo transaction history.',
              },
              {
                name: 'rightmargin',
                description:
                  'The margin of the right of the body. _This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'text',
                description:
                  'Foreground color of text. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property on the element instead._',
              },
              {
                name: 'topmargin',
                description:
                  'The margin of the top of the body. _This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
              },
              {
                name: 'vlink',
                description:
                  'Color of text for visited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.") pseudo-class instead._',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/body' }],
          },
          {
            name: 'article',
            description: {
              kind: 'markdown',
              value:
                'The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1\u2013h6 element) as a child of the article element.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/article' }],
          },
          {
            name: 'section',
            description: {
              kind: 'markdown',
              value:
                'The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/section' }],
          },
          {
            name: 'nav',
            description: {
              kind: 'markdown',
              value:
                'The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/nav' }],
          },
          {
            name: 'aside',
            description: {
              kind: 'markdown',
              value:
                'The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/aside' }],
          },
          {
            name: 'h1',
            description: { kind: 'markdown', value: 'The h1 element represents a section heading.' },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements' },
            ],
          },
          {
            name: 'h2',
            description: { kind: 'markdown', value: 'The h2 element represents a section heading.' },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements' },
            ],
          },
          {
            name: 'h3',
            description: { kind: 'markdown', value: 'The h3 element represents a section heading.' },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements' },
            ],
          },
          {
            name: 'h4',
            description: { kind: 'markdown', value: 'The h4 element represents a section heading.' },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements' },
            ],
          },
          {
            name: 'h5',
            description: { kind: 'markdown', value: 'The h5 element represents a section heading.' },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements' },
            ],
          },
          {
            name: 'h6',
            description: { kind: 'markdown', value: 'The h6 element represents a section heading.' },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements' },
            ],
          },
          {
            name: 'header',
            description: {
              kind: 'markdown',
              value:
                'The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/header' }],
          },
          {
            name: 'footer',
            description: {
              kind: 'markdown',
              value:
                'The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/footer' }],
          },
          {
            name: 'address',
            description: {
              kind: 'markdown',
              value:
                'The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/address' }],
          },
          {
            name: 'p',
            description: { kind: 'markdown', value: 'The p element represents a paragraph.' },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/p' }],
          },
          {
            name: 'hr',
            description: {
              kind: 'markdown',
              value:
                'The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'Sets the alignment of the rule on the page. If no value is specified, the default value is `left`.',
              },
              { name: 'color', description: 'Sets the color of the rule through color name or hexadecimal value.' },
              { name: 'noshade', description: 'Sets the rule to have no shading.' },
              { name: 'size', description: 'Sets the height, in pixels, of the rule.' },
              {
                name: 'width',
                description: 'Sets the length of the rule on the page through a pixel or percentage value.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/hr' }],
          },
          {
            name: 'pre',
            description: {
              kind: 'markdown',
              value:
                'The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.',
            },
            attributes: [
              {
                name: 'cols',
                description:
                  'Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attr-width). To achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.',
              },
              {
                name: 'width',
                description:
                  'Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.',
              },
              {
                name: 'wrap',
                description:
                  'Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.") instead.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/pre' }],
          },
          {
            name: 'blockquote',
            description: {
              kind: 'markdown',
              value:
                'The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.',
            },
            attributes: [
              {
                name: 'cite',
                description: {
                  kind: 'markdown',
                  value:
                    'A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.',
                },
              },
            ],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/blockquote' },
            ],
          },
          {
            name: 'ol',
            description: {
              kind: 'markdown',
              value:
                'The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.',
            },
            attributes: [
              {
                name: 'reversed',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value: 'This Boolean attribute specifies that the items of the list are specified in reversed order.',
                },
              },
              {
                name: 'start',
                description: {
                  kind: 'markdown',
                  value:
                    'This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use `<ol start="3">`.\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.',
                },
              },
              {
                name: 'type',
                valueSet: 'lt',
                description: {
                  kind: 'markdown',
                  value:
                    "Indicates the numbering type:\n\n*   `'a'` indicates lowercase letters,\n*   `'A'` indicates uppercase letters,\n*   `'i'` indicates lowercase Roman numerals,\n*   `'I'` indicates uppercase Roman numerals,\n*   and `'1'` indicates numbers (default).\n\nThe type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li \"The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.\") element.\n\n**Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\nUnless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type \"The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\") property should be used instead.",
                },
              },
              {
                name: 'compact',
                description:
                  'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Warning:** Do not use this attribute, as it has been deprecated: the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give an effect similar to the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.") can be used with a value of `80%`.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ol' }],
          },
          {
            name: 'ul',
            description: {
              kind: 'markdown',
              value:
                'The ul element represents a list of items, where the order of the items is not important \u2014 that is, where changing the order would not materially change the meaning of the document.',
            },
            attributes: [
              {
                name: 'compact',
                description:
                  'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Usage note:\xa0**Do not use this attribute, as it has been deprecated: the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give a similar effect as the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [line-height](https://developer.mozilla.org/en-US/docs/CSS/line-height) can be used with a value of `80%`.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ul' }],
          },
          {
            name: 'li',
            description: {
              kind: 'markdown',
              value:
                "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.",
            },
            attributes: [
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'This integer attribute indicates the current ordinal value of the list item as defined by the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")) or for menus ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")).\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\n**Note:** Prior to Gecko\xa09.0, negative values were incorrectly converted to 0. Starting in Gecko\xa09.0 all integer values are correctly parsed.',
                },
              },
              {
                name: 'type',
                description:
                  'This character attribute indicates the numbering type:\n\n*   `a`: lowercase letters\n*   `A`: uppercase letters\n*   `i`: lowercase Roman numerals\n*   `I`: uppercase Roman numerals\n*   `1`: numbers\n\nThis type overrides the one used by its parent [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element, if any.\n\n**Usage note:** This attribute has been deprecated: use the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property instead.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/li' }],
          },
          {
            name: 'dl',
            description: {
              kind: 'markdown',
              value:
                'The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dl' }],
          },
          {
            name: 'dt',
            description: {
              kind: 'markdown',
              value:
                'The dt element represents the term, or name, part of a term-description group in a description list (dl element).',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dt' }],
          },
          {
            name: 'dd',
            description: {
              kind: 'markdown',
              value:
                'The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).',
            },
            attributes: [
              {
                name: 'nowrap',
                description:
                  'If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dd' }],
          },
          {
            name: 'figure',
            description: {
              kind: 'markdown',
              value:
                'The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/figure' }],
          },
          {
            name: 'figcaption',
            description: {
              kind: 'markdown',
              value:
                "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.",
            },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/figcaption' },
            ],
          },
          {
            name: 'main',
            description: {
              kind: 'markdown',
              value:
                'The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/main' }],
          },
          {
            name: 'div',
            description: {
              kind: 'markdown',
              value:
                'The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/div' }],
          },
          {
            name: 'a',
            description: {
              kind: 'markdown',
              value:
                'If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.',
            },
            attributes: [
              {
                name: 'href',
                description: {
                  kind: 'markdown',
                  value: 'Contains a URL or a URL fragment that the hyperlink points to.',
                },
              },
              {
                name: 'target',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies where to display the linked URL. It is a name of, or keyword for, a _browsing context_: a tab, window, or `<iframe>`. The following keywords have special meanings:\n\n*   `_self`: Load the URL into the same browsing context as the current one. This is the default behavior.\n*   `_blank`: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.\n*   `_parent`: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as `_self`.\n*   `_top`: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as `_self`.\n\n**Note:** When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener` API.\n\n**Note:** Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page\'s performance may suffer. To avoid this use `rel="noopener"`.',
                },
              },
              {
                name: 'download',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though `/` and `\\` are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.\n\n**Notes:**\n\n*   This attribute only works for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).\n*   Although HTTP(s) URLs need to be in the same-origin, [`blob:` URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL) and [`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are allowed so that content generated by JavaScript, such as pictures created in an image-editor Web app, can be downloaded.\n*   If the HTTP header [`Content-Disposition:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) gives a different filename than this attribute, the HTTP header takes priority over this attribute.\n*   If `Content-Disposition:` is set to `inline`, Firefox prioritizes `Content-Disposition`, like the filename case, while Chrome prioritizes the `download` attribute.',
                },
              },
              {
                name: 'ping',
                description: {
                  kind: 'markdown',
                  value:
                    'Contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.") requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.',
                },
              },
              {
                name: 'rel',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).',
                },
              },
              {
                name: 'hreflang',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt "Tags for Identifying Languages").',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'Specifies the media type in the form of a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type "MIME type: A\xa0MIME type\xa0(now properly called "media type", but\xa0also sometimes "content type") is a string sent along\xa0with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled\xa0audio/ogg, or an image file\xa0image/png).") for the linked URL. It is purely advisory, with no built-in functionality.',
                },
              },
              {
                name: 'referrerpolicy',
                description:
                  "Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when fetching the URL:\n\n*   `'no-referrer'` means the `Referer:` header will not be sent.\n*   `'no-referrer-when-downgrade'` means no `Referer:` header will be sent when navigating to an origin without HTTPS. This is the default behavior.\n*   `'origin'` means the referrer will be the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the page, not including information after the domain.\n*   `'origin-when-cross-origin'` meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.\n*   `'strict-origin-when-cross-origin'`\n*   `'unsafe-url'` means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones.",
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/a' }],
          },
          {
            name: 'em',
            description: { kind: 'markdown', value: 'The em element represents stress emphasis of its contents.' },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/em' }],
          },
          {
            name: 'strong',
            description: {
              kind: 'markdown',
              value: 'The strong element represents strong importance, seriousness, or urgency for its contents.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/strong' }],
          },
          {
            name: 'small',
            description: { kind: 'markdown', value: 'The small element represents side comments such as small print.' },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/small' }],
          },
          {
            name: 's',
            description: {
              kind: 'markdown',
              value: 'The s element represents contents that are no longer accurate or no longer relevant.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/s' }],
          },
          {
            name: 'cite',
            description: {
              kind: 'markdown',
              value:
                'The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/cite' }],
          },
          {
            name: 'q',
            description: {
              kind: 'markdown',
              value: 'The q element represents some phrasing content quoted from another source.',
            },
            attributes: [
              {
                name: 'cite',
                description: {
                  kind: 'markdown',
                  value:
                    'The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/q' }],
          },
          {
            name: 'dfn',
            description: {
              kind: 'markdown',
              value:
                'The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dfn' }],
          },
          {
            name: 'abbr',
            description: {
              kind: 'markdown',
              value:
                'The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/abbr' }],
          },
          {
            name: 'ruby',
            description: {
              kind: 'markdown',
              value:
                'The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ruby' }],
          },
          {
            name: 'rb',
            description: {
              kind: 'markdown',
              value:
                "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rb' }],
          },
          {
            name: 'rt',
            description: {
              kind: 'markdown',
              value:
                "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rt' }],
          },
          {
            name: 'rp',
            description: {
              kind: 'markdown',
              value:
                "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rp' }],
          },
          {
            name: 'time',
            description: {
              kind: 'markdown',
              value:
                'The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.',
            },
            attributes: [
              {
                name: 'datetime',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the time and/or date of the element and must be in one of the formats described below.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/time' }],
          },
          {
            name: 'code',
            description: {
              kind: 'markdown',
              value:
                'The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/code' }],
          },
          {
            name: 'var',
            description: {
              kind: 'markdown',
              value:
                'The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/var' }],
          },
          {
            name: 'samp',
            description: {
              kind: 'markdown',
              value: 'The samp element represents sample or quoted output from another program or computing system.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/samp' }],
          },
          {
            name: 'kbd',
            description: {
              kind: 'markdown',
              value:
                'The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/kbd' }],
          },
          {
            name: 'sub',
            description: { kind: 'markdown', value: 'The sub element represents a subscript.' },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/sub' }],
          },
          {
            name: 'sup',
            description: { kind: 'markdown', value: 'The sup element represents a superscript.' },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/sup' }],
          },
          {
            name: 'i',
            description: {
              kind: 'markdown',
              value:
                'The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/i' }],
          },
          {
            name: 'b',
            description: {
              kind: 'markdown',
              value:
                'The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/b' }],
          },
          {
            name: 'u',
            description: {
              kind: 'markdown',
              value:
                'The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/u' }],
          },
          {
            name: 'mark',
            description: {
              kind: 'markdown',
              value:
                "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/mark' }],
          },
          {
            name: 'bdi',
            description: {
              kind: 'markdown',
              value:
                'The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/bdi' }],
          },
          {
            name: 'bdo',
            description: {
              kind: 'markdown',
              value:
                'The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]',
            },
            attributes: [
              {
                name: 'dir',
                description:
                  "The direction in which text should be rendered in this element's contents. Possible values are:\n\n*   `ltr`: Indicates that the text should go in a left-to-right direction.\n*   `rtl`: Indicates that the text should go in a right-to-left direction.",
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/bdo' }],
          },
          {
            name: 'span',
            description: {
              kind: 'markdown',
              value:
                "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/span' }],
          },
          {
            name: 'br',
            description: { kind: 'markdown', value: 'The br element represents a line break.' },
            attributes: [{ name: 'clear', description: 'Indicates where to begin the next line after the break.' }],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/br' }],
          },
          {
            name: 'wbr',
            description: { kind: 'markdown', value: 'The wbr element represents a line break opportunity.' },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/wbr' }],
          },
          {
            name: 'ins',
            description: { kind: 'markdown', value: 'The ins element represents an addition to the document.' },
            attributes: [
              {
                name: 'cite',
                description:
                  'This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.',
              },
              {
                name: 'datetime',
                description:
                  'This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ins' }],
          },
          {
            name: 'del',
            description: { kind: 'markdown', value: 'The del element represents a removal from the document.' },
            attributes: [
              {
                name: 'cite',
                description: {
                  kind: 'markdown',
                  value: 'A URI for a resource that explains the change (for example, meeting minutes).',
                },
              },
              {
                name: 'datetime',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/del' }],
          },
          {
            name: 'picture',
            description: {
              kind: 'markdown',
              value:
                'The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.',
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/picture' }],
          },
          {
            name: 'img',
            description: { kind: 'markdown', value: 'An img element represents an image.' },
            attributes: [
              {
                name: 'alt',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute defines an alternative text description of the image.\n\n**Note:** Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with visual impairments), if the user chooses not to display images, or if the browser cannot display the image because it is invalid or an [unsupported type](#Supported_image_formats). In these cases, the browser may replace the image with the text defined in this element\'s `alt` attribute. You should, for these reasons and others, provide a useful value for `alt` whenever possible.\n\n**Note:** Omitting this attribute altogether indicates that the image is a key part of the content, and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (decorative), and that non-visual browsers may omit it from rendering.',
                },
              },
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    "The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x` unless an image with this pixel density descriptor is already defined in `srcset,` or unless `srcset` contains '`w`' descriptors.",
                },
              },
              {
                name: 'srcset',
                description: {
                  kind: 'markdown',
                  value:
                    "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:\n\n1.  a URL to an image,\n2.  optionally, whitespace followed by one of:\n    *   A width descriptor, or a positive integer directly followed by '`w`'. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.\n    *   A pixel density descriptor, which is a positive floating point number directly followed by '`x`'.\n\nIf no descriptor is specified, the source is assigned the default descriptor: `1x`.\n\nIt is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with '`2x`') are also invalid.\n\nThe user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example.",
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being "[tainted](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)." The allowed values are:',
                },
              },
              {
                name: 'usemap',
                description: {
                  kind: 'markdown',
                  value:
                    'The partial URL (starting with \'#\') of an [image map](https://developer.mozilla.org/en-US/docs/HTML/Element/map) associated with the element.\n\n**Note:** You cannot use this attribute if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") element.',
                },
              },
              {
                name: 'ismap',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.\n\n**Note:** This attribute is allowed only if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") element with a valid [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.',
                },
              },
              {
                name: 'width',
                description: { kind: 'markdown', value: 'The intrinsic width of the image in pixels.' },
              },
              {
                name: 'height',
                description: { kind: 'markdown', value: 'The intrinsic height of the image in pixels.' },
              },
              {
                name: 'decoding',
                description: 'Provides an image decoding hint to the browser. The allowed values are:',
              },
              {
                name: 'decoding',
                description:
                  '`sync`\n\nDecode the image synchronously for atomic presentation with other content.\n\n`async`\n\nDecode the image asynchronously to reduce delay in presenting other content.\n\n`auto`\n\nDefault mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.',
              },
              {
                name: 'importance',
                description:
                  'Indicates the relative importance of the resource. Priority hints are delegated using the values:',
              },
              {
                name: 'importance',
                description:
                  '`auto`: Indicates\xa0**no\xa0preference**. The browser may use its own heuristics to decide the priority of the image.\n\n`high`: Indicates to the\xa0browser\xa0that the image is of\xa0**high** priority.\n\n`low`:\xa0Indicates to the\xa0browser\xa0that the image is of\xa0**low** priority.',
              },
              {
                name: 'intrinsicsize',
                description:
                  'This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it\u2019s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)',
              },
              {
                name: 'referrerpolicy',
                description:
                  'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u2019s default behavior if no policy is otherwise specified.\n*   `origin:` The `Referer` header will include the page of origin\'s scheme, the host, and the port.\n*   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer\'s full path.\n*   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
              },
              {
                name: 'sizes',
                description:
                  "A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:\n\n1.  a media condition. This must be omitted for the last item.\n2.  a source size value.\n\nSource size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width ('`w`') descriptors. The selected source size affects the intrinsic size of the image (the image\u2019s display size if no CSS styling is applied). If the `srcset` attribute is absent, or contains no values with a width (`w`) descriptor, then the `sizes` attribute has no effect.",
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/img' }],
          },
          {
            name: 'iframe',
            description: { kind: 'markdown', value: 'The iframe element represents a nested browsing context.' },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Inherited_origins). Also note that programatically removing an `<iframe>`\'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute "The Element method removeAttribute() removes the attribute with the specified name from the element.")) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.',
                },
              },
              {
                name: 'srcdoc',
                description: {
                  kind: 'markdown',
                  value:
                    'Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL."), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.") elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open "The\xa0Window interface\'s open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn\'t exist, then a new window is opened and the specified resource is loaded into its browsing context.") method.',
                },
              },
              {
                name: 'sandbox',
                valueSet: 'sb',
                description: {
                  kind: 'markdown',
                  value:
                    'Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:\n\n*   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.\n*   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).\n*   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).\n*   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock).\n*   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.\n*   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.\n*   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).\n*   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy "same-origin policy: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.").\n*   `allow-scripts`: Lets the resource run scripts (but not create popup windows).\n*   `allow-storage-access-by-user-activation` : Lets the resource request access to the parent\'s storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).\n*   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).\n*   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.\n\n**Notes about sandboxing:**\n\n*   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute \u2014 making it no more secure than not using the `sandbox` attribute at all.\n*   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` \u2014 such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.\n*   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.',
                },
              },
              { name: 'seamless', valueSet: 'v' },
              {
                name: 'allowfullscreen',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.") method.',
                },
              },
              {
                name: 'width',
                description: { kind: 'markdown', value: 'The width of the frame in CSS pixels. Default is `300`.' },
              },
              {
                name: 'height',
                description: { kind: 'markdown', value: 'The height of the frame in CSS pixels. Default is `150`.' },
              },
              {
                name: 'allow',
                description:
                  'Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`.',
              },
              {
                name: 'allowpaymentrequest',
                description:
                  'Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).',
              },
              {
                name: 'allowpaymentrequest',
                description: 'This attribute is considered a legacy attribute and redefined as `allow="payment"`.',
              },
              {
                name: 'csp',
                description:
                  'A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp "The csp property of the HTMLIFrameElement interface specifies the Content Security Policy that an embedded document must agree to enforce upon itself.") for details.',
              },
              {
                name: 'importance',
                description:
                  "The download priority of the resource in the `<iframe>`'s `src` attribute. Allowed values:\n\n`auto` (default)\n\nNo preference. The browser uses its own heuristics to decide the priority of the resource.\n\n`high`\n\nThe resource should be downloaded before other lower-priority page resources.\n\n`low`\n\nThe resource should be downloaded after other higher-priority page resources.",
              },
              {
                name: 'referrerpolicy',
                description:
                  'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame\'s resource:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\'t send it to a less secure destination (HTTPS\u2192HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/iframe' }],
          },
          {
            name: 'embed',
            description: {
              kind: 'markdown',
              value:
                'The embed element provides an integration point for an external (typically non-HTML) application or interactive content.',
            },
            attributes: [
              { name: 'src', description: { kind: 'markdown', value: 'The URL\xa0of the resource being embedded.' } },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value: 'The MIME\xa0type to use to select the plug-in to instantiate.',
                },
              },
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value:
                    'The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value:
                    'The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/embed' }],
          },
          {
            name: 'object',
            description: {
              kind: 'markdown',
              value:
                'The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.',
            },
            attributes: [
              {
                name: 'data',
                description: {
                  kind: 'markdown',
                  value:
                    'The address of the resource as a valid URL. At least one of **data** and **type** must be defined.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'The [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource specified by **data**. At least one of **data** and **type** must be defined.',
                },
              },
              {
                name: 'typemustmatch',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates if the **type** attribute and the actual [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource must match to be used.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value: 'The name of valid browsing context (HTML5), or the name of the control (HTML 4).',
                },
              },
              {
                name: 'usemap',
                description: {
                  kind: 'markdown',
                  value:
                    'A hash-name reference to a [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map "The HTML <map> element is used with <area> elements to define an image map (a clickable link area).") element; that is a \'#\' followed by the value of a [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attr-name) of a map element.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document.',
                },
              },
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value:
                    'The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value:
                    'The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))',
                },
              },
              {
                name: 'archive',
                description: 'A space-separated list of URIs for archives of resources for the object.',
              },
              { name: 'border', description: 'The width of a border around the control, in pixels.' },
              {
                name: 'classid',
                description:
                  "The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute.",
              },
              {
                name: 'codebase',
                description:
                  'The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document.',
              },
              { name: 'codetype', description: 'The content type of the data specified by **classid**.' },
              {
                name: 'declare',
                description:
                  'The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the <object> element completely each that that the resource is reused.',
              },
              {
                name: 'standby',
                description: "A message that the browser can show while loading the object's implementation and data.",
              },
              {
                name: 'tabindex',
                description: 'The position of the element in the tabbing navigation order for the current document.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/object' }],
          },
          {
            name: 'param',
            description: {
              kind: 'markdown',
              value:
                'The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.',
            },
            attributes: [
              { name: 'name', description: { kind: 'markdown', value: 'Name of the parameter.' } },
              { name: 'value', description: { kind: 'markdown', value: 'Specifies the value of the parameter.' } },
              {
                name: 'type',
                description:
                  'Only used if the `valuetype` is set to "ref". Specifies the MIME type of values found at the URI specified by value.',
              },
              {
                name: 'valuetype',
                description:
                  'Specifies the type of the `value` attribute. Possible values are:\n\n*   data: Default value. The value is passed to the object\'s implementation as a string.\n*   ref: The value is a URI to a resource where run-time values are stored.\n*   object: An ID of another [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.") in the same document.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/param' }],
          },
          {
            name: 'video',
            description: {
              kind: 'markdown',
              value: 'A video element is used for playing videos or movies, and audio files with captions.',
            },
            attributes: [
              { name: 'src' },
              { name: 'crossorigin', valueSet: 'xo' },
              { name: 'poster' },
              { name: 'preload', valueSet: 'pl' },
              {
                name: 'autoplay',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.',
                },
              },
              { name: 'mediagroup' },
              { name: 'loop', valueSet: 'v' },
              { name: 'muted', valueSet: 'v' },
              { name: 'controls', valueSet: 'v' },
              { name: 'width' },
              { name: 'height' },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/video' }],
          },
          {
            name: 'audio',
            description: { kind: 'markdown', value: 'An audio element represents a sound or audio stream.' },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'The URL of the audio to embed. This is subject to [HTTP access controls](https://developer.mozilla.org/en-US/docs/HTTP_access_control). This is optional; you may instead use the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element within the audio block to specify the audio to embed.',
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\nanonymous\n\nSends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.\n\nuse-credentials\n\nSends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.\n\nWhen not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.',
                },
              },
              {
                name: 'preload',
                valueSet: 'pl',
                description: {
                  kind: 'markdown',
                  value:
                    "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:\n\n*   `none`: Indicates that the audio should not be preloaded.\n*   `metadata`: Indicates that only audio metadata (e.g. length) is fetched.\n*   `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.\n*   _empty string_: A synonym of the `auto` value.\n\nIf not set, `preload`'s default value is browser-defined (i.e. each browser may have its own default value). The spec advises it to be set to `metadata`.\n\n**Usage notes:**\n\n*   The `autoplay` attribute has precedence over\xa0`preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.\n*   The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.",
                },
              },
              {
                name: 'autoplay',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute:\xa0if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.\n\n**Note**: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.',
                },
              },
              { name: 'mediagroup' },
              {
                name: 'loop',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute:\xa0if specified, the audio player will\xa0automatically seek back to the start\xa0upon reaching the end of the audio.',
                },
              },
              {
                name: 'muted',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`.',
                },
              },
              {
                name: 'controls',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/audio' }],
          },
          {
            name: 'source',
            description: {
              kind: 'markdown',
              value:
                'The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'Required for [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:\xa0the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document."), address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](https://tools.ietf.org/html/rfc4281) for information about how to specify codecs.',
                },
              },
              {
                name: 'sizes',
                description:
                  'Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset) to use.  \nThe `sizes` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
              {
                name: 'srcset',
                description:
                  'A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:\n\n1.  one URL to an image,\n2.  a width descriptor, that is a positive integer directly followed by `\'w\'`. The default value, if missing, is the infinity.\n3.  a pixel density descriptor, that is a positive floating number directly followed by `\'x\'`. The default value, if missing, is `1x`.\n\nEach string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.  \nThe browser chooses the most adequate image to display at a given point of time.  \nThe `srcset` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
              {
                name: 'media',
                description:
                  '[Media query](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) of the resource\'s intended media; this should be used only in a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/source' }],
          },
          {
            name: 'track',
            description: {
              kind: 'markdown',
              value:
                'The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.',
            },
            attributes: [
              {
                name: 'default',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element.",
                },
              },
              {
                name: 'kind',
                valueSet: 'tk',
                description: {
                  kind: 'markdown',
                  value:
                    "How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.)\xa0The following keywords are allowed:\n\n*   `subtitles`\n    *   Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.\n    *   Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.\n*   `captions`\n    *   Closed captions provide a transcription and possibly a translation of audio.\n    *   It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).\n    *   Suitable for users who are deaf or when the sound is muted.\n*   `descriptions`\n    *   Textual description of the video content.\n    *   Suitable for users who are blind or where the video cannot be seen.\n*   `chapters`\n    *   Chapter titles are intended to be used when the user is navigating the media resource.\n*   `metadata`\n    *   Tracks used by scripts. Not visible to the user.",
                },
              },
              {
                name: 'label',
                description: {
                  kind: 'markdown',
                  value:
                    'A user-readable title of the text track which is used by the browser when listing available text tracks.',
                },
              },
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document \u2014 unless the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:\xa0the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document.") parent element of the `track` element has a [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute.',
                },
              },
              {
                name: 'srclang',
                description: {
                  kind: 'markdown',
                  value:
                    'Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to\xa0`subtitles,` then `srclang` must be defined.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/track' }],
          },
          {
            name: 'map',
            description: {
              kind: 'markdown',
              value:
                'The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.',
            },
            attributes: [
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/map' }],
          },
          {
            name: 'area',
            description: {
              kind: 'markdown',
              value:
                'The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.',
            },
            attributes: [
              { name: 'alt' },
              { name: 'coords' },
              { name: 'shape', valueSet: 'sh' },
              { name: 'href' },
              { name: 'target' },
              { name: 'download' },
              { name: 'ping' },
              { name: 'rel' },
              { name: 'hreflang' },
              { name: 'type' },
              {
                name: 'accesskey',
                description:
                  'Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/area' }],
          },
          {
            name: 'table',
            description: {
              kind: 'markdown',
              value: 'The table element represents data with more than one dimension, in the form of a table.',
            },
            attributes: [
              { name: 'border' },
              {
                name: 'align',
                description:
                  'This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:\n\n*   left: the table is displayed on the left side of the document;\n*   center: the table is displayed in the center of the document;\n*   right: the table is displayed on the right side of the document.\n\n**Usage Note**\n\n*   **Do not use this attribute**, as it has been deprecated. The [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data \u2014 that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). Set [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") and [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") to `auto` or [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.") to `0 auto` to achieve an effect that is similar to the align attribute.\n*   Prior to Firefox 4, Firefox also supported the `middle`, `absmiddle`, and `abscenter` values as synonyms of `center`, in quirks mode only.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/table' }],
          },
          {
            name: 'caption',
            description: {
              kind: 'markdown',
              value:
                'The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:\n\n`left`\n\nThe caption is displayed to the left of the table.\n\n`top`\n\nThe caption is displayed above the table.\n\n`right`\n\nThe caption is displayed to the right of the table.\n\n`bottom`\n\nThe caption is displayed below the table.\n\n**Usage note:** Do not use this attribute, as it has been deprecated. The [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption "The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.") element should be styled using the [CSS](https://developer.mozilla.org/en-US/docs/CSS) properties [`caption-side`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side "The caption-side CSS property puts the content of a table\'s <caption> on the specified side. The values are relative to the writing-mode of the table.") and [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.").',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/caption' }],
          },
          {
            name: 'colgroup',
            description: {
              kind: 'markdown',
              value:
                'The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.',
            },
            attributes: [
              { name: 'span' },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed. The descendant [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") elements may override this value using their own [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-align) attribute.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property can be used.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/colgroup' },
            ],
          },
          {
            name: 'col',
            description: {
              kind: 'markdown',
              value:
                'If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.',
            },
            attributes: [
              { name: 'span' },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, its value is inherited from the [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-align) of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element this `<col>` element belongs too. If there are none, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/col' }],
          },
          {
            name: 'tbody',
            description: {
              kind: 'markdown',
              value:
                'The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes.\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tbody' }],
          },
          {
            name: 'thead',
            description: {
              kind: 'markdown',
              value:
                'The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/thead' }],
          },
          {
            name: 'tfoot',
            description: {
              kind: 'markdown',
              value:
                'The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.',
            },
            attributes: [
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tfoot' }],
          },
          {
            name: 'tr',
            description: { kind: 'markdown', value: 'The tr element represents a row of cells in a table.' },
            attributes: [
              {
                name: 'align',
                description:
                  'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") which specifies how the cell\'s context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:\n\n`left`\n\nAlign the content of each cell at its left edge.\n\n`center`\n\nCenter the contents of each cell between their left and right edges.\n\n`right`\n\nAlign the content of each cell at its right edge.\n\n`justify`\n\nWiden whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).\n\n`char`\n\nAlign each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.\n\nIf no value is expressly set for `align`, the parent node\'s value is inherited.\n\nInstead of using the obsolete `align` attribute, you should instead use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to establish `left`, `center`, `right`, or `justify` alignment for the row\'s cells. To apply character-based alignment, set the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the alignment character (such as `"."` or `","`).',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tr' }],
          },
          {
            name: 'td',
            description: { kind: 'markdown', value: 'The td element represents a data cell in a table.' },
            attributes: [
              { name: 'colspan' },
              { name: 'rowspan' },
              { name: 'headers' },
              {
                name: 'abbr',
                description:
                  "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.",
              },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char). Unimplemented in CSS3.',
              },
              {
                name: 'axis',
                description:
                  'This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.',
              },
              {
                name: 'bgcolor',
                description:
                  'This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by \'#\'. This attribute may be used with one of sixteen predefined color strings:\n\n\xa0\n\n`black` = "#000000"\n\n\xa0\n\n`green` = "#008000"\n\n\xa0\n\n`silver` = "#C0C0C0"\n\n\xa0\n\n`lime` = "#00FF00"\n\n\xa0\n\n`gray` = "#808080"\n\n\xa0\n\n`olive` = "#808000"\n\n\xa0\n\n`white` = "#FFFFFF"\n\n\xa0\n\n`yellow` = "#FFFF00"\n\n\xa0\n\n`maroon` = "#800000"\n\n\xa0\n\n`navy` = "#000080"\n\n\xa0\n\n`red` = "#FF0000"\n\n\xa0\n\n`blue` = "#0000FF"\n\n\xa0\n\n`purple` = "#800080"\n\n\xa0\n\n`teal` = "#008080"\n\n\xa0\n\n`fuchsia` = "#FF00FF"\n\n\xa0\n\n`aqua` = "#00FFFF"\n\n**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/CSS) instead.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/td' }],
          },
          {
            name: 'th',
            description: { kind: 'markdown', value: 'The th element represents a header cell in a table.' },
            attributes: [
              { name: 'colspan' },
              { name: 'rowspan' },
              { name: 'headers' },
              { name: 'scope', valueSet: 's' },
              { name: 'sorted' },
              {
                name: 'abbr',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.",
                },
              },
              {
                name: 'align',
                description:
                  'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-charoff) attributes.\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char). Unimplemented in CSS3.',
              },
              {
                name: 'axis',
                description:
                  'This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard: use the [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attribute instead.',
              },
              {
                name: 'bgcolor',
                description:
                  'This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by \'#\'. This attribute may be used with one of sixteen predefined color strings:\n\n\xa0\n\n`black` = "#000000"\n\n\xa0\n\n`green` = "#008000"\n\n\xa0\n\n`silver` = "#C0C0C0"\n\n\xa0\n\n`lime` = "#00FF00"\n\n\xa0\n\n`gray` = "#808080"\n\n\xa0\n\n`olive` = "#808000"\n\n\xa0\n\n`white` = "#FFFFFF"\n\n\xa0\n\n`yellow` = "#FFFF00"\n\n\xa0\n\n`maroon` = "#800000"\n\n\xa0\n\n`navy` = "#000080"\n\n\xa0\n\n`red` = "#FF0000"\n\n\xa0\n\n`blue` = "#0000FF"\n\n\xa0\n\n`purple` = "#800080"\n\n\xa0\n\n`teal` = "#008080"\n\n\xa0\n\n`fuchsia` = "#FF00FF"\n\n\xa0\n\n`aqua` = "#00FFFF"\n\n**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) instead.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/th' }],
          },
          {
            name: 'form',
            description: {
              kind: 'markdown',
              value:
                'The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.',
            },
            attributes: [
              {
                name: 'accept-charset',
                description: {
                  kind: 'markdown',
                  value:
                    'A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"`, indicates the same encoding as that of the document containing the form element.  \nIn previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.',
                },
              },
              {
                name: 'action',
                description: {
                  kind: 'markdown',
                  value:
                    'The URI of a program that processes the form information. This value can be overridden by a [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'autocomplete',
                valueSet: 'o',
                description: {
                  kind: 'markdown',
                  value:
                    "Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:\n\n*   `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.\n*   `on`: The browser can automatically complete values based on values that the user has previously entered in the form.\n\nFor most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+) setting the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields (username and password), if the user permits the storage the browser will autofill the login the next time the user visits the page. See [The autocomplete attribute and login fields](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).",
                },
              },
              {
                name: 'enctype',
                valueSet: 'et',
                description: {
                  kind: 'markdown',
                  value:
                    'When the value of the `method` attribute is `post`, enctype is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: The value used for an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the `type` attribute set to "file".\n*   `text/plain`: (HTML5)\n\nThis value can be overridden by a [`formenctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'method',
                valueSet: 'm',
                description: {
                  kind: 'markdown',
                  value:
                    'The [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method that the browser uses to submit the form. Possible values are:\n\n*   `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; form data are included in the body of the form and sent to the server.\n*   `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a \'?\' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n*   `dialog`: Use when the form is inside a\xa0[`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.") element to close the dialog when submitted.\n\nThis value can be overridden by a [`formmethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the form. In HTML 4, its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5.',
                },
              },
              {
                name: 'novalidate',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element belonging to the form.',
                },
              },
              {
                name: 'target',
                description: {
                  kind: 'markdown',
                  value:
                    'A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.\n*   `_parent`: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n*   _iframename_: The response is displayed in a named [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.").\n\nHTML5: This value can be overridden by a [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
                },
              },
              {
                name: 'accept',
                description:
                  'A comma-separated list of content types that the server accepts.\n\n**Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) attribute of the specific [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
              },
              {
                name: 'autocapitalize',
                description:
                  'This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the `autocapitalize` attribute is specified on an individual form control descendant, it trumps the form-wide `autocapitalize` setting. The non-deprecated values are available in iOS 5 and later. The default value is `sentences`. Possible values are:\n\n*   `none`: Completely disables automatic capitalization\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/form' }],
          },
          {
            name: 'label',
            description: {
              kind: 'markdown',
              value:
                "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.",
            },
            attributes: [
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element with which the label is associated (its _form owner_). If specified, the value of the attribute is the `id` of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. This lets you place label elements anywhere within a document, not just as descendants of their form elements.',
                },
              },
              {
                name: 'for',
                description: {
                  kind: 'markdown',
                  value:
                    'The [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Form_labelable) form-related element in the same document as the `<label>` element. The first element in the document with an `id` matching the value of the `for` attribute is the _labeled control_ for this label element, if it is a labelable element. If it is\xa0not labelable then the `for` attribute has no effect. If there are other elements which also match the `id` value, later in the document, they are not considered.\n\n**Note**: A `<label>` element can have both a `for` attribute and a contained control element, as long as the `for` attribute points to the contained control element.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/label' }],
          },
          {
            name: 'input',
            description: {
              kind: 'markdown',
              value:
                'The input element represents a typed data field, usually with a form control to allow the user to edit the data.',
            },
            attributes: [
              { name: 'accept' },
              { name: 'alt' },
              { name: 'autocomplete', valueSet: 'inputautocomplete' },
              { name: 'autofocus', valueSet: 'v' },
              { name: 'checked', valueSet: 'v' },
              { name: 'dirname' },
              { name: 'disabled', valueSet: 'v' },
              { name: 'form' },
              { name: 'formaction' },
              { name: 'formenctype', valueSet: 'et' },
              { name: 'formmethod', valueSet: 'fm' },
              { name: 'formnovalidate', valueSet: 'v' },
              { name: 'formtarget' },
              { name: 'height' },
              { name: 'inputmode', valueSet: 'im' },
              { name: 'list' },
              { name: 'max' },
              { name: 'maxlength' },
              { name: 'min' },
              { name: 'minlength' },
              { name: 'multiple', valueSet: 'v' },
              { name: 'name' },
              { name: 'pattern' },
              { name: 'placeholder' },
              { name: 'readonly', valueSet: 'v' },
              { name: 'required', valueSet: 'v' },
              { name: 'size' },
              { name: 'src' },
              { name: 'step' },
              { name: 'type', valueSet: 't' },
              { name: 'value' },
              { name: 'width' },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/input' }],
          },
          {
            name: 'button',
            description: { kind: 'markdown', value: 'The button element represents a button labeled by its contents.' },
            attributes: [
              {
                name: 'autofocus',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.',
                },
              },
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element with the **disabled** attribute set, then the button is enabled.\n\nFirefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Use the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autocomplete) attribute to control this feature.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element, if one exists. This attribute enables you to associate `<button>` elements to [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements anywhere within a document, not just as descendants of [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements.',
                },
              },
              {
                name: 'formaction',
                description: {
                  kind: 'markdown',
                  value:
                    "The URI of a program that processes the information submitted by the button. If specified, it overrides the [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action) attribute of the button's form owner.",
                },
              },
              {
                name: 'formenctype',
                valueSet: 'et',
                description: {
                  kind: 'markdown',
                  value:
                    'If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: Use this value if you are using an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute set to `file`.\n*   `text/plain`\n\nIf this attribute is specified, it overrides the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) attribute of the button\'s form owner.',
                },
              },
              {
                name: 'formmethod',
                valueSet: 'fm',
                description: {
                  kind: 'markdown',
                  value:
                    "If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:\n\n*   `post`: The data from the form are included in the body of the form and sent to the server.\n*   `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n\nIf specified, this attribute overrides the [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) attribute of the button's form owner.",
                },
              },
              {
                name: 'formnovalidate',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) attribute of the button's form owner.",
                },
              },
              {
                name: 'formtarget',
                description: {
                  kind: 'markdown',
                  value:
                    "If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) attribute of the button's form owner. The following keywords have special meanings:\n\n*   `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed browsing context.\n*   `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.",
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value: 'The name of the button, which is submitted with the form data.',
                },
              },
              {
                name: 'type',
                valueSet: 'bt',
                description: {
                  kind: 'markdown',
                  value:
                    "The type of the button. Possible values are:\n\n*   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.\n*   `reset`: The button resets all the controls to their initial values.\n*   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.",
                },
              },
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted.',
                },
              },
              {
                name: 'autocomplete',
                description:
                  'The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug\xa0654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn\'t return after refreshing the page").',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/button' }],
          },
          {
            name: 'select',
            description: {
              kind: 'markdown',
              value: 'The select element represents a control for selecting amongst a set of options.',
            },
            attributes: [
              {
                name: 'autocomplete',
                valueSet: 'inputautocomplete',
                description: {
                  kind: 'markdown',
                  value:
                    'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent\'s](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent\'s: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.',
                },
              },
              {
                name: 'autofocus',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute.',
                },
              },
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `fieldset`; if there is no containing element with the `disabled` attribute set, then the control is enabled.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute lets you specify the form element to\xa0which\xa0the select element is associated\xa0(that is, its "form owner"). If this attribute is specified, its value must be the same as the `id` of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements.',
                },
              },
              {
                name: 'multiple',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.',
                },
              },
              {
                name: 'name',
                description: { kind: 'markdown', value: 'This attribute is used to specify the name of the control.' },
              },
              {
                name: 'required',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'A Boolean attribute indicating that an option with a non-empty string value must be selected.',
                },
              },
              {
                name: 'size',
                description: {
                  kind: 'markdown',
                  value:
                    'If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.\n\n**Note:** According to the HTML5 specification, the default value for size should be 1; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/select' }],
          },
          {
            name: 'datalist',
            description: {
              kind: 'markdown',
              value:
                'The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.',
            },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/datalist' },
            ],
          },
          {
            name: 'optgroup',
            description: {
              kind: 'markdown',
              value: 'The optgroup element represents a group of option elements with a common label.',
            },
            attributes: [
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.",
                },
              },
              {
                name: 'label',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.',
                },
              },
            ],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/optgroup' },
            ],
          },
          {
            name: 'option',
            description: {
              kind: 'markdown',
              value:
                'The option element represents an option in a select element or as part of a list of suggestions in a datalist element.',
            },
            attributes: [
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won\'t receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup "The HTML <optgroup> element creates a grouping of options within a <select> element.") element.',
                },
              },
              {
                name: 'label',
                description: {
                  kind: 'markdown',
                  value:
                    "This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content.",
                },
              },
              {
                name: 'selected',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.',
                },
              },
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'The content of this attribute represents the value to be submitted with the form, should this option be selected.\xa0If this attribute is omitted, the value is taken from the text content of the option element.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/option' }],
          },
          {
            name: 'textarea',
            description: {
              kind: 'markdown',
              value:
                "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.",
            },
            attributes: [
              {
                name: 'autocomplete',
                valueSet: 'inputautocomplete',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:\n\n*   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.\n*   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.\n\nIf the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element\'s form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.").',
                },
              },
              {
                name: 'autofocus',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.',
                },
              },
              {
                name: 'cols',
                description: {
                  kind: 'markdown',
                  value:
                    'The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`.',
                },
              },
              { name: 'dirname' },
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element when the `disabled` attribute is set, the control is enabled.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.',
                },
              },
              { name: 'inputmode', valueSet: 'im' },
              {
                name: 'maxlength',
                description: {
                  kind: 'markdown',
                  value:
                    "The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.",
                },
              },
              {
                name: 'minlength',
                description: {
                  kind: 'markdown',
                  value: 'The minimum number of characters (unicode code points) required that the user should enter.',
                },
              },
              { name: 'name', description: { kind: 'markdown', value: 'The name of the control.' } },
              {
                name: 'placeholder',
                description: {
                  kind: 'markdown',
                  value:
                    'A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.\n\n**Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.") element tied to the input. See [Labels and placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") in [<input>: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") for a full explanation.',
                },
              },
              {
                name: 'readonly',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.',
                },
              },
              {
                name: 'required',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value: 'This attribute specifies that the user must fill in a value before submitting a form.',
                },
              },
              {
                name: 'rows',
                description: { kind: 'markdown', value: 'The number of visible text lines for the control.' },
              },
              {
                name: 'wrap',
                valueSet: 'w',
                description: {
                  kind: 'markdown',
                  value:
                    'Indicates how the control wraps text. Possible values are:\n\n*   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.\n*   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.\n*   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.\n\nIf this attribute is not specified, `soft` is its default value.',
                },
              },
              {
                name: 'autocapitalize',
                description:
                  'This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:\n\n*   `none`: Completely disables automatic capitalization.\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5.',
              },
              {
                name: 'spellcheck',
                description:
                  "Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. the value can be:\n\n*   `true`: Indicates that the element needs to have its spelling and grammar checked.\n*   `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.\n*   `false` : Indicates that the element should not be spell checked.",
              },
            ],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/textarea' },
            ],
          },
          {
            name: 'output',
            description: {
              kind: 'markdown',
              value:
                'The output element represents the result of a calculation performed by the application, or the result of a user action.',
            },
            attributes: [
              {
                name: 'for',
                description: {
                  kind: 'markdown',
                  value:
                    'A space-separated list of other elements\u2019 [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation.',
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'The [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that this element is associated with (its "form owner"). The value of the attribute must be an `id` of a form element in the same document. If this attribute is not specified, the output element must be a descendant of a form element. This attribute enables you to place output elements anywhere within a document, not just as descendants of their form elements.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name of the element, exposed in the [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.") API.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/output' }],
          },
          {
            name: 'progress',
            description: {
              kind: 'markdown',
              value:
                'The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.',
            },
            attributes: [
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.',
                },
              },
              {
                name: 'max',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1.',
                },
              },
            ],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/progress' },
            ],
          },
          {
            name: 'meter',
            description: {
              kind: 'markdown',
              value:
                'The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.',
            },
            attributes: [
              {
                name: 'value',
                description: {
                  kind: 'markdown',
                  value:
                    "The current numeric value. This must be between the minimum and maximum values (`min` attribute and `max` attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the `min` attribute and `max` attribute, the value is equal to the nearest end of the range.\n\n**Usage note:** Unless the `value` attribute is between `0` and `1` (inclusive), the `min` and `max` attributes should define the range so that the `value` attribute's value is within it.",
                },
              },
              {
                name: 'min',
                description: {
                  kind: 'markdown',
                  value:
                    'The lower numeric bound of the measured range. This must be less than the maximum value (`max` attribute), if specified. If unspecified, the minimum value is 0.',
                },
              },
              {
                name: 'max',
                description: {
                  kind: 'markdown',
                  value:
                    'The upper numeric bound of the measured range. This must be greater than the minimum value (`min` attribute), if specified. If unspecified, the maximum value is 1.',
                },
              },
              {
                name: 'low',
                description: {
                  kind: 'markdown',
                  value:
                    'The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (`min` attribute), and it also must be less than the high value and maximum value (`high` attribute and `max` attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the `low` value is equal to the minimum value.',
                },
              },
              {
                name: 'high',
                description: {
                  kind: 'markdown',
                  value:
                    'The lower numeric bound of the high end of the measured range. This must be less than the maximum value (`max` attribute), and it also must be greater than the low value and minimum value (`low` attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the `high` value is equal to the maximum value.',
                },
              },
              {
                name: 'optimum',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the optimal numeric value. It must be within the range (as defined by the `min` attribute and `max` attribute). When used with the `low` attribute and `high` attribute, it gives an indication where along the range is considered preferable. For example, if it is between the `min` attribute and the `low` attribute, then the lower range is considered preferred.',
                },
              },
              {
                name: 'form',
                description:
                  'This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of `type` _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/meter' }],
          },
          {
            name: 'fieldset',
            description: {
              kind: 'markdown',
              value: 'The fieldset element represents a set of form controls optionally grouped under a common name.',
            },
            attributes: [
              {
                name: 'disabled',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    "If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the `<form>`. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend \"The HTML <legend> element represents a caption for the content of its parent <fieldset>.\") element won't be disabled.",
                },
              },
              {
                name: 'form',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute takes the value of the `id` attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element you want the `<fieldset>` to be part of, even if it is not inside the form.',
                },
              },
              {
                name: 'name',
                description: {
                  kind: 'markdown',
                  value:
                    'The name associated with the group.\n\n**Note**: The caption for the fieldset is given by the first [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element nested inside it.',
                },
              },
            ],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/fieldset' },
            ],
          },
          {
            name: 'legend',
            description: {
              kind: 'markdown',
              value:
                "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/legend' }],
          },
          {
            name: 'details',
            description: {
              kind: 'markdown',
              value:
                'The details element represents a disclosure widget from which the user can obtain additional information or controls.',
            },
            attributes: [
              {
                name: 'open',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute indicates whether or not the details \u2014 that is, the contents of the `<details>` element \u2014 are currently visible. The default, `false`, means the details are not visible.',
                },
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/details' }],
          },
          {
            name: 'summary',
            description: {
              kind: 'markdown',
              value:
                "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.",
            },
            attributes: [],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/summary' }],
          },
          {
            name: 'dialog',
            description: {
              kind: 'markdown',
              value:
                'The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.',
            },
            attributes: [
              {
                name: 'open',
                description:
                  "Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user.",
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dialog' }],
          },
          {
            name: 'script',
            description: {
              kind: 'markdown',
              value:
                'The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.',
            },
            attributes: [
              {
                name: 'src',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.\n\nIf a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags.',
                },
              },
              {
                name: 'type',
                description: {
                  kind: 'markdown',
                  value:
                    'This attribute indicates the type of script represented. The value of this attribute will be in one of the following categories:\n\n*   **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).\n*   **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.\n*   **Any other value:** The embedded content is treated as a data block which won\'t be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.\n\n**Note:** in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute \u2014 for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see [bug\xa01428745](https://bugzilla.mozilla.org/show_bug.cgi?id=1428745 "FIXED: Remove support for version parameter from script loader")).',
                },
              },
              { name: 'charset' },
              {
                name: 'async',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This is a Boolean attribute indicating that the browser should, if possible, load the script asynchronously.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts). If it is included in this case it will have no effect.\n\nBrowsers usually assume the worst case scenario and load scripts synchronously, (i.e. `async="false"`) during HTML parsing.\n\nDynamically inserted scripts (using [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn\'t recognized.")) load asynchronously by default, so to turn on synchronous loading (i.e. scripts load in the order they were inserted) set `async="false"`.\n\nSee [Browser compatibility](#Browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts).',
                },
              },
              {
                name: 'defer',
                valueSet: 'v',
                description: {
                  kind: 'markdown',
                  value:
                    'This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "/en-US/docs/Web/Events/DOMContentLoaded").\n\nScripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.\n\nTo achieve a similar effect for dynamically inserted scripts use `async="false"` instead. Scripts with the `defer` attribute will execute in the order in which they appear in the document.',
                },
              },
              {
                name: 'crossorigin',
                valueSet: 'xo',
                description: {
                  kind: 'markdown',
                  value:
                    'Normal `script` elements pass minimal information to the [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events.") for scripts which do not pass the standard [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for a more descriptive explanation of its valid arguments.',
                },
              },
              {
                name: 'nonce',
                description: {
                  kind: 'markdown',
                  value:
                    "A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.",
                },
              },
              {
                name: 'integrity',
                description:
                  'This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).',
              },
              {
                name: 'nomodule',
                description:
                  'This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) \u2014 in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.',
              },
              {
                name: 'referrerpolicy',
                description:
                  'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS\u2192HTTPS), but don\'t send it to a less secure destination (e.g. HTTPS\u2192HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS\u2192HTTPS), and send no header to a less secure destination (e.g. HTTPS\u2192HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.\n\n**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available,\xa0the empty string is treated as being equivalent to `no-referrer-when-downgrade`.',
              },
              {
                name: 'text',
                description:
                  'Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.',
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/script' }],
          },
          {
            name: 'noscript',
            description: {
              kind: 'markdown',
              value:
                "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.",
            },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/noscript' },
            ],
          },
          {
            name: 'template',
            description: {
              kind: 'markdown',
              value:
                'The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.',
            },
            attributes: [],
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/template' },
            ],
          },
          {
            name: 'canvas',
            description: {
              kind: 'markdown',
              value:
                'The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.',
            },
            attributes: [
              {
                name: 'width',
                description: {
                  kind: 'markdown',
                  value: 'The width of the coordinate space in CSS pixels. Defaults to 300.',
                },
              },
              {
                name: 'height',
                description: {
                  kind: 'markdown',
                  value: 'The height of the coordinate space in CSS pixels. Defaults to 150.',
                },
              },
              {
                name: 'moz-opaque',
                description:
                  "Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized [`canvas.getContext('2d', { alpha: false })`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext \"The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.\") instead.",
              },
            ],
            references: [{ name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Element/canvas' }],
          },
        ],
        globalAttributes: [
          {
            name: 'accesskey',
            description: {
              kind: 'markdown',
              value:
                'Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey' },
            ],
          },
          {
            name: 'autocapitalize',
            description: {
              kind: 'markdown',
              value:
                'Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:\n\n*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)\n*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase\n*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase\n*   `characters`, all letters should default to uppercase',
            },
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize',
              },
            ],
          },
          {
            name: 'class',
            description: {
              kind: 'markdown',
              value:
                'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class' },
            ],
          },
          {
            name: 'contenteditable',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:\n\n*   `true` or the _empty string_, which indicates that the element must be editable;\n*   `false`, which indicates that the element must not be editable.',
            },
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable',
              },
            ],
          },
          {
            name: 'contextmenu',
            description: {
              kind: 'markdown',
              value:
                'The `[**id**](#attr-id)` of a [`<menu>`](/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.',
            },
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu',
              },
            ],
          },
          {
            name: 'dir',
            description: {
              kind: 'markdown',
              value:
                "An enumerated attribute indicating the directionality of the element's text. It can have the following values:\n\n*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);\n*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);\n*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.",
            },
            valueSet: 'd',
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir' },
            ],
          },
          {
            name: 'draggable',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/en-us/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `true`, which indicates that the element may be dragged\n*   `false`, which indicates that the element may not be dragged.',
            },
            valueSet: 'b',
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable' },
            ],
          },
          {
            name: 'dropzone',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](/en-US/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `copy`, which indicates that dropping will create a copy of the element that was dragged\n*   `move`, which indicates that the element that was dragged will be moved to this new location.\n*   `link`, will create a link to the dragged data.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dropzone' },
            ],
          },
          {
            name: 'exportparts',
            description: {
              kind: 'markdown',
              value: 'Used to transitively export shadow parts from a nested shadow tree into a containing light tree.',
            },
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts',
              },
            ],
          },
          {
            name: 'hidden',
            description: {
              kind: 'markdown',
              value:
                "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.",
            },
            valueSet: 'v',
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden' },
            ],
          },
          {
            name: 'id',
            description: {
              kind: 'markdown',
              value:
                'Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id' },
            ],
          },
          {
            name: 'inputmode',
            description: {
              kind: 'markdown',
              value:
                'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode' },
            ],
          },
          {
            name: 'is',
            description: {
              kind: 'markdown',
              value:
                'Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) for more details).',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is' },
            ],
          },
          {
            name: 'itemid',
            description: { kind: 'markdown', value: 'The unique, global identifier of an item.' },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid' },
            ],
          },
          {
            name: 'itemprop',
            description: {
              kind: 'markdown',
              value:
                'Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop' },
            ],
          },
          {
            name: 'itemref',
            description: {
              kind: 'markdown',
              value:
                'Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref' },
            ],
          },
          {
            name: 'itemscope',
            description: {
              kind: 'markdown',
              value:
                '`itemscope` (usually) works along with `[itemtype](/en-US/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.',
            },
            valueSet: 'v',
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope' },
            ],
          },
          {
            name: 'itemtype',
            description: {
              kind: 'markdown',
              value:
                'Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](/en-US/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype' },
            ],
          },
          {
            name: 'lang',
            description: {
              kind: 'markdown',
              value:
                'Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one \u201clanguage tag\u201d (made of hyphen-separated \u201clanguage subtags\u201d) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang' },
            ],
          },
          {
            name: 'part',
            description: {
              kind: 'markdown',
              value:
                'A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](/en-US/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part' },
            ],
          },
          { name: 'role', valueSet: 'roles' },
          {
            name: 'slot',
            description: {
              kind: 'markdown',
              value:
                'Assigns a slot in a [shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](/en-US/docs/Web/HTML/Element/slot "The HTML <slot> element\u2014part of the Web Components technology suite\u2014is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.") element whose `[name](/en-US/docs/Web/HTML/Element/slot#attr-name)` attribute\'s value matches that `slot` attribute\'s value.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot' },
            ],
          },
          {
            name: 'spellcheck',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\n\n*   `true`, which indicates that the element should be, if possible, checked for spelling errors;\n*   `false`, which indicates that the element should not be checked for spelling errors.',
            },
            valueSet: 'b',
            references: [
              {
                name: 'MDN Reference',
                url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck',
              },
            ],
          },
          {
            name: 'style',
            description: {
              kind: 'markdown',
              value:
                'Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](/en-US/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style' },
            ],
          },
          {
            name: 'tabindex',
            description: {
              kind: 'markdown',
              value:
                'An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:\n\n*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;\n*   `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;\n*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex' },
            ],
          },
          {
            name: 'title',
            description: {
              kind: 'markdown',
              value:
                'Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.',
            },
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title' },
            ],
          },
          {
            name: 'translate',
            description: {
              kind: 'markdown',
              value:
                'An enumerated attribute that is used to specify whether an element\'s attribute values and the values of its [`Text`](/en-US/docs/Web/API/Text "The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element\'s text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\n\n*   empty string and `yes`, which indicates that the element will be translated.\n*   `no`, which indicates that the element will not be translated.',
            },
            valueSet: 'y',
            references: [
              { name: 'MDN Reference', url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate' },
            ],
          },
          { name: 'onabort', description: { kind: 'markdown', value: 'The loading of a resource has been aborted.' } },
          { name: 'onblur', description: { kind: 'markdown', value: 'An element has lost focus (does not bubble).' } },
          {
            name: 'oncanplay',
            description: {
              kind: 'markdown',
              value:
                'The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.',
            },
          },
          {
            name: 'oncanplaythrough',
            description: {
              kind: 'markdown',
              value:
                'The user agent can play the media up to its end without having to stop for further buffering of content.',
            },
          },
          {
            name: 'onchange',
            description: {
              kind: 'markdown',
              value:
                "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.",
            },
          },
          {
            name: 'onclick',
            description: {
              kind: 'markdown',
              value: 'A pointing device button has been pressed and released on an element.',
            },
          },
          {
            name: 'oncontextmenu',
            description: {
              kind: 'markdown',
              value: 'The right button of the mouse is clicked (before the context menu is displayed).',
            },
          },
          {
            name: 'ondblclick',
            description: { kind: 'markdown', value: 'A pointing device button is clicked twice on an element.' },
          },
          {
            name: 'ondrag',
            description: { kind: 'markdown', value: 'An element or text selection is being dragged (every 350ms).' },
          },
          {
            name: 'ondragend',
            description: {
              kind: 'markdown',
              value: 'A drag operation is being ended (by releasing a mouse button or hitting the escape key).',
            },
          },
          {
            name: 'ondragenter',
            description: { kind: 'markdown', value: 'A dragged element or text selection enters a valid drop target.' },
          },
          {
            name: 'ondragleave',
            description: { kind: 'markdown', value: 'A dragged element or text selection leaves a valid drop target.' },
          },
          {
            name: 'ondragover',
            description: {
              kind: 'markdown',
              value: 'An element or text selection is being dragged over a valid drop target (every 350ms).',
            },
          },
          {
            name: 'ondragstart',
            description: { kind: 'markdown', value: 'The user starts dragging an element or text selection.' },
          },
          { name: 'ondrop', description: { kind: 'markdown', value: 'An element is dropped on a valid drop target.' } },
          {
            name: 'ondurationchange',
            description: { kind: 'markdown', value: 'The duration attribute has been updated.' },
          },
          {
            name: 'onemptied',
            description: {
              kind: 'markdown',
              value:
                'The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.',
            },
          },
          {
            name: 'onended',
            description: { kind: 'markdown', value: 'Playback has stopped because the end of the media was reached.' },
          },
          { name: 'onerror', description: { kind: 'markdown', value: 'A resource failed to load.' } },
          {
            name: 'onfocus',
            description: { kind: 'markdown', value: 'An element has received focus (does not bubble).' },
          },
          { name: 'onformchange' },
          { name: 'onforminput' },
          {
            name: 'oninput',
            description: {
              kind: 'markdown',
              value:
                'The value of an element changes or the content of an element with the attribute contenteditable is modified.',
            },
          },
          {
            name: 'oninvalid',
            description: {
              kind: 'markdown',
              value: "A submittable element has been checked and doesn't satisfy its constraints.",
            },
          },
          { name: 'onkeydown', description: { kind: 'markdown', value: 'A key is pressed down.' } },
          {
            name: 'onkeypress',
            description: {
              kind: 'markdown',
              value: 'A key is pressed down and that key normally produces a character value (use input instead).',
            },
          },
          { name: 'onkeyup', description: { kind: 'markdown', value: 'A key is released.' } },
          {
            name: 'onload',
            description: { kind: 'markdown', value: 'A resource and its dependent resources have finished loading.' },
          },
          {
            name: 'onloadeddata',
            description: { kind: 'markdown', value: 'The first frame of the media has finished loading.' },
          },
          { name: 'onloadedmetadata', description: { kind: 'markdown', value: 'The metadata has been loaded.' } },
          { name: 'onloadstart', description: { kind: 'markdown', value: 'Progress has begun.' } },
          {
            name: 'onmousedown',
            description: {
              kind: 'markdown',
              value: 'A pointing device button (usually a mouse) is pressed on an element.',
            },
          },
          {
            name: 'onmousemove',
            description: { kind: 'markdown', value: 'A pointing device is moved over an element.' },
          },
          {
            name: 'onmouseout',
            description: {
              kind: 'markdown',
              value:
                'A pointing device is moved off the element that has the listener attached or off one of its children.',
            },
          },
          {
            name: 'onmouseover',
            description: {
              kind: 'markdown',
              value:
                'A pointing device is moved onto the element that has the listener attached or onto one of its children.',
            },
          },
          {
            name: 'onmouseup',
            description: { kind: 'markdown', value: 'A pointing device button is released over an element.' },
          },
          { name: 'onmousewheel' },
          { name: 'onpause', description: { kind: 'markdown', value: 'Playback has been paused.' } },
          { name: 'onplay', description: { kind: 'markdown', value: 'Playback has begun.' } },
          {
            name: 'onplaying',
            description: {
              kind: 'markdown',
              value: 'Playback is ready to start after having been paused or delayed due to lack of data.',
            },
          },
          { name: 'onprogress', description: { kind: 'markdown', value: 'In progress.' } },
          { name: 'onratechange', description: { kind: 'markdown', value: 'The playback rate has changed.' } },
          { name: 'onreset', description: { kind: 'markdown', value: 'A form is reset.' } },
          { name: 'onresize', description: { kind: 'markdown', value: 'The document view has been resized.' } },
          {
            name: 'onreadystatechange',
            description: { kind: 'markdown', value: 'The readyState attribute of a document has changed.' },
          },
          {
            name: 'onscroll',
            description: { kind: 'markdown', value: 'The document view or an element has been scrolled.' },
          },
          { name: 'onseeked', description: { kind: 'markdown', value: 'A seek operation completed.' } },
          { name: 'onseeking', description: { kind: 'markdown', value: 'A seek operation began.' } },
          { name: 'onselect', description: { kind: 'markdown', value: 'Some text is being selected.' } },
          {
            name: 'onshow',
            description: {
              kind: 'markdown',
              value: 'A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute',
            },
          },
          {
            name: 'onstalled',
            description: {
              kind: 'markdown',
              value: 'The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.',
            },
          },
          { name: 'onsubmit', description: { kind: 'markdown', value: 'A form is submitted.' } },
          { name: 'onsuspend', description: { kind: 'markdown', value: 'Media data loading has been suspended.' } },
          {
            name: 'ontimeupdate',
            description: {
              kind: 'markdown',
              value: 'The time indicated by the currentTime attribute has been updated.',
            },
          },
          { name: 'onvolumechange', description: { kind: 'markdown', value: 'The volume has changed.' } },
          {
            name: 'onwaiting',
            description: { kind: 'markdown', value: 'Playback has stopped because of a temporary lack of data.' },
          },
          {
            name: 'aria-activedescendant',
            references: [
              { name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant' },
            ],
            description: {
              kind: 'markdown',
              value:
                'Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application).',
            },
          },
          {
            name: 'aria-atomic',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-atomic' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute.',
            },
          },
          {
            name: 'aria-autocomplete',
            valueSet: 'autocomplete',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete' }],
            description: {
              kind: 'markdown',
              value:
                "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.",
            },
          },
          {
            name: 'aria-busy',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-busy' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user.',
            },
          },
          {
            name: 'aria-checked',
            valueSet: 'tristate',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-checked' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).',
            },
          },
          {
            name: 'aria-colcount',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colcount' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex).',
            },
          },
          {
            name: 'aria-colindex',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colindex' }],
            description: {
              kind: 'markdown',
              value:
                "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).",
            },
          },
          {
            name: 'aria-colspan',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colspan' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).',
            },
          },
          {
            name: 'aria-controls',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-controls' }],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns).',
            },
          },
          {
            name: 'aria-current',
            valueSet: 'current',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-current' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements.',
            },
          },
          {
            name: 'aria-describedat',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-describedat' }],
          },
          {
            name: 'aria-describedby',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-describedby' }],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).',
            },
          },
          {
            name: 'aria-disabled',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-disabled' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly).',
            },
          },
          {
            name: 'aria-dropeffect',
            valueSet: 'dropeffect',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect' }],
            description: {
              kind: 'markdown',
              value:
                '\\[Deprecated in ARIA 1.1\\] Indicates what functions can be performed when a dragged object is released on the drop target.',
            },
          },
          {
            name: 'aria-errormessage',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage' }],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
            },
          },
          {
            name: 'aria-expanded',
            valueSet: 'u',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-expanded' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
            },
          },
          {
            name: 'aria-flowto',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-flowto' }],
            description: {
              kind: 'markdown',
              value:
                "Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.",
            },
          },
          {
            name: 'aria-grabbed',
            valueSet: 'u',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed' }],
            description: {
              kind: 'markdown',
              value:
                '\\[Deprecated in ARIA 1.1\\] Indicates an element\'s "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.',
            },
          },
          {
            name: 'aria-haspopup',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).',
            },
          },
          {
            name: 'aria-hidden',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-hidden' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).',
            },
          },
          {
            name: 'aria-invalid',
            valueSet: 'invalid',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-invalid' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage).',
            },
          },
          {
            name: 'aria-kbdshortcuts',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-kbdshortcuts' }],
          },
          {
            name: 'aria-label',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-label' }],
            description: {
              kind: 'markdown',
              value:
                'Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).',
            },
          },
          {
            name: 'aria-labelledby',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby' }],
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
            },
          },
          {
            name: 'aria-level',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-level' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure.',
            },
          },
          {
            name: 'aria-live',
            valueSet: 'live',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-live' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region).',
            },
          },
          {
            name: 'aria-modal',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-modal' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed.',
            },
          },
          {
            name: 'aria-multiline',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-multiline' }],
            description: {
              kind: 'markdown',
              value: 'Indicates whether a text box accepts multiple lines of input or only a single line.',
            },
          },
          {
            name: 'aria-multiselectable',
            valueSet: 'b',
            references: [
              { name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable' },
            ],
            description: {
              kind: 'markdown',
              value: 'Indicates that the user may select more than one item from the current selectable descendants.',
            },
          },
          {
            name: 'aria-orientation',
            valueSet: 'orientation',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-orientation' }],
            description: {
              kind: 'markdown',
              value: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
            },
          },
          {
            name: 'aria-owns',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-owns' }],
            description: {
              kind: 'markdown',
              value:
                'Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls).',
            },
          },
          {
            name: 'aria-placeholder',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder' }],
            description: {
              kind: 'markdown',
              value:
                'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.',
            },
          },
          {
            name: 'aria-posinset',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-posinset' }],
            description: {
              kind: 'markdown',
              value:
                "Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize).",
            },
          },
          {
            name: 'aria-pressed',
            valueSet: 'tristate',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-pressed' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).',
            },
          },
          {
            name: 'aria-readonly',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-readonly' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).',
            },
          },
          {
            name: 'aria-relevant',
            valueSet: 'relevant',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-relevant' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic).',
            },
          },
          {
            name: 'aria-required',
            valueSet: 'b',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-required' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted.',
            },
          },
          {
            name: 'aria-roledescription',
            references: [
              { name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription' },
            ],
            description: {
              kind: 'markdown',
              value:
                'Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).',
            },
          },
          {
            name: 'aria-rowcount',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex).',
            },
          },
          {
            name: 'aria-rowindex',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex' }],
            description: {
              kind: 'markdown',
              value:
                "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).",
            },
          },
          {
            name: 'aria-rowspan',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).',
            },
          },
          {
            name: 'aria-selected',
            valueSet: 'u',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-selected' }],
            description: {
              kind: 'markdown',
              value:
                'Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).',
            },
          },
          {
            name: 'aria-setsize',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-setsize' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset).',
            },
          },
          {
            name: 'aria-sort',
            valueSet: 'sort',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-sort' }],
            description: {
              kind: 'markdown',
              value: 'Indicates if items in a table or grid are sorted in ascending or descending order.',
            },
          },
          {
            name: 'aria-valuemax',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
            },
          },
          {
            name: 'aria-valuemin',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
            },
          },
          {
            name: 'aria-valuenow',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext).',
            },
          },
          {
            name: 'aria-valuetext',
            references: [{ name: 'WAI-ARIA Reference', url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext' }],
            description: {
              kind: 'markdown',
              value:
                'Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
            },
          },
          {
            name: 'aria-details',
            description: {
              kind: 'markdown',
              value:
                'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
            },
          },
          {
            name: 'aria-keyshortcuts',
            description: {
              kind: 'markdown',
              value:
                'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
            },
          },
        ],
        valueSets: [
          { name: 'b', values: [{ name: 'true' }, { name: 'false' }] },
          { name: 'u', values: [{ name: 'true' }, { name: 'false' }, { name: 'undefined' }] },
          { name: 'o', values: [{ name: 'on' }, { name: 'off' }] },
          { name: 'y', values: [{ name: 'yes' }, { name: 'no' }] },
          { name: 'w', values: [{ name: 'soft' }, { name: 'hard' }] },
          { name: 'd', values: [{ name: 'ltr' }, { name: 'rtl' }, { name: 'auto' }] },
          {
            name: 'm',
            values: [
              {
                name: 'GET',
                description: {
                  kind: 'markdown',
                  value:
                    "Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.",
                },
              },
              {
                name: 'POST',
                description: {
                  kind: 'markdown',
                  value:
                    'Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data are included in the body of the form and sent to the server.',
                },
              },
              {
                name: 'dialog',
                description: {
                  kind: 'markdown',
                  value:
                    'Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element to close the dialog when submitted.',
                },
              },
            ],
          },
          { name: 'fm', values: [{ name: 'GET' }, { name: 'POST' }] },
          { name: 's', values: [{ name: 'row' }, { name: 'col' }, { name: 'rowgroup' }, { name: 'colgroup' }] },
          {
            name: 't',
            values: [
              { name: 'hidden' },
              { name: 'text' },
              { name: 'search' },
              { name: 'tel' },
              { name: 'url' },
              { name: 'email' },
              { name: 'password' },
              { name: 'datetime' },
              { name: 'date' },
              { name: 'month' },
              { name: 'week' },
              { name: 'time' },
              { name: 'datetime-local' },
              { name: 'number' },
              { name: 'range' },
              { name: 'color' },
              { name: 'checkbox' },
              { name: 'radio' },
              { name: 'file' },
              { name: 'submit' },
              { name: 'image' },
              { name: 'reset' },
              { name: 'button' },
            ],
          },
          {
            name: 'im',
            values: [
              { name: 'verbatim' },
              { name: 'latin' },
              { name: 'latin-name' },
              { name: 'latin-prose' },
              { name: 'full-width-latin' },
              { name: 'kana' },
              { name: 'kana-name' },
              { name: 'katakana' },
              { name: 'numeric' },
              { name: 'tel' },
              { name: 'email' },
              { name: 'url' },
            ],
          },
          { name: 'bt', values: [{ name: 'button' }, { name: 'submit' }, { name: 'reset' }, { name: 'menu' }] },
          { name: 'lt', values: [{ name: '1' }, { name: 'a' }, { name: 'A' }, { name: 'i' }, { name: 'I' }] },
          { name: 'mt', values: [{ name: 'context' }, { name: 'toolbar' }] },
          { name: 'mit', values: [{ name: 'command' }, { name: 'checkbox' }, { name: 'radio' }] },
          {
            name: 'et',
            values: [
              { name: 'application/x-www-form-urlencoded' },
              { name: 'multipart/form-data' },
              { name: 'text/plain' },
            ],
          },
          {
            name: 'tk',
            values: [
              { name: 'subtitles' },
              { name: 'captions' },
              { name: 'descriptions' },
              { name: 'chapters' },
              { name: 'metadata' },
            ],
          },
          { name: 'pl', values: [{ name: 'none' }, { name: 'metadata' }, { name: 'auto' }] },
          { name: 'sh', values: [{ name: 'circle' }, { name: 'default' }, { name: 'poly' }, { name: 'rect' }] },
          { name: 'xo', values: [{ name: 'anonymous' }, { name: 'use-credentials' }] },
          {
            name: 'sb',
            values: [
              { name: 'allow-forms' },
              { name: 'allow-modals' },
              { name: 'allow-pointer-lock' },
              { name: 'allow-popups' },
              { name: 'allow-popups-to-escape-sandbox' },
              { name: 'allow-same-origin' },
              { name: 'allow-scripts' },
              { name: 'allow-top-navigation' },
            ],
          },
          { name: 'tristate', values: [{ name: 'true' }, { name: 'false' }, { name: 'mixed' }, { name: 'undefined' }] },
          {
            name: 'inputautocomplete',
            values: [
              { name: 'additional-name' },
              { name: 'address-level1' },
              { name: 'address-level2' },
              { name: 'address-level3' },
              { name: 'address-level4' },
              { name: 'address-line1' },
              { name: 'address-line2' },
              { name: 'address-line3' },
              { name: 'bday' },
              { name: 'bday-year' },
              { name: 'bday-day' },
              { name: 'bday-month' },
              { name: 'billing' },
              { name: 'cc-additional-name' },
              { name: 'cc-csc' },
              { name: 'cc-exp' },
              { name: 'cc-exp-month' },
              { name: 'cc-exp-year' },
              { name: 'cc-family-name' },
              { name: 'cc-given-name' },
              { name: 'cc-name' },
              { name: 'cc-number' },
              { name: 'cc-type' },
              { name: 'country' },
              { name: 'country-name' },
              { name: 'current-password' },
              { name: 'email' },
              { name: 'family-name' },
              { name: 'fax' },
              { name: 'given-name' },
              { name: 'home' },
              { name: 'honorific-prefix' },
              { name: 'honorific-suffix' },
              { name: 'impp' },
              { name: 'language' },
              { name: 'mobile' },
              { name: 'name' },
              { name: 'new-password' },
              { name: 'nickname' },
              { name: 'organization' },
              { name: 'organization-title' },
              { name: 'pager' },
              { name: 'photo' },
              { name: 'postal-code' },
              { name: 'sex' },
              { name: 'shipping' },
              { name: 'street-address' },
              { name: 'tel-area-code' },
              { name: 'tel' },
              { name: 'tel-country-code' },
              { name: 'tel-extension' },
              { name: 'tel-local' },
              { name: 'tel-local-prefix' },
              { name: 'tel-local-suffix' },
              { name: 'tel-national' },
              { name: 'transaction-amount' },
              { name: 'transaction-currency' },
              { name: 'url' },
              { name: 'username' },
              { name: 'work' },
            ],
          },
          { name: 'autocomplete', values: [{ name: 'inline' }, { name: 'list' }, { name: 'both' }, { name: 'none' }] },
          {
            name: 'current',
            values: [
              { name: 'page' },
              { name: 'step' },
              { name: 'location' },
              { name: 'date' },
              { name: 'time' },
              { name: 'true' },
              { name: 'false' },
            ],
          },
          {
            name: 'dropeffect',
            values: [
              { name: 'copy' },
              { name: 'move' },
              { name: 'link' },
              { name: 'execute' },
              { name: 'popup' },
              { name: 'none' },
            ],
          },
          { name: 'invalid', values: [{ name: 'grammar' }, { name: 'false' }, { name: 'spelling' }, { name: 'true' }] },
          { name: 'live', values: [{ name: 'off' }, { name: 'polite' }, { name: 'assertive' }] },
          { name: 'orientation', values: [{ name: 'vertical' }, { name: 'horizontal' }, { name: 'undefined' }] },
          {
            name: 'relevant',
            values: [
              { name: 'additions' },
              { name: 'removals' },
              { name: 'text' },
              { name: 'all' },
              { name: 'additions text' },
            ],
          },
          {
            name: 'sort',
            values: [{ name: 'ascending' }, { name: 'descending' }, { name: 'none' }, { name: 'other' }],
          },
          {
            name: 'roles',
            values: [
              { name: 'alert' },
              { name: 'alertdialog' },
              { name: 'button' },
              { name: 'checkbox' },
              { name: 'dialog' },
              { name: 'gridcell' },
              { name: 'link' },
              { name: 'log' },
              { name: 'marquee' },
              { name: 'menuitem' },
              { name: 'menuitemcheckbox' },
              { name: 'menuitemradio' },
              { name: 'option' },
              { name: 'progressbar' },
              { name: 'radio' },
              { name: 'scrollbar' },
              { name: 'searchbox' },
              { name: 'slider' },
              { name: 'spinbutton' },
              { name: 'status' },
              { name: 'switch' },
              { name: 'tab' },
              { name: 'tabpanel' },
              { name: 'textbox' },
              { name: 'timer' },
              { name: 'tooltip' },
              { name: 'treeitem' },
              { name: 'combobox' },
              { name: 'grid' },
              { name: 'listbox' },
              { name: 'menu' },
              { name: 'menubar' },
              { name: 'radiogroup' },
              { name: 'tablist' },
              { name: 'tree' },
              { name: 'treegrid' },
              { name: 'application' },
              { name: 'article' },
              { name: 'cell' },
              { name: 'columnheader' },
              { name: 'definition' },
              { name: 'directory' },
              { name: 'document' },
              { name: 'feed' },
              { name: 'figure' },
              { name: 'group' },
              { name: 'heading' },
              { name: 'img' },
              { name: 'list' },
              { name: 'listitem' },
              { name: 'math' },
              { name: 'none' },
              { name: 'note' },
              { name: 'presentation' },
              { name: 'region' },
              { name: 'row' },
              { name: 'rowgroup' },
              { name: 'rowheader' },
              { name: 'separator' },
              { name: 'table' },
              { name: 'term' },
              { name: 'text' },
              { name: 'toolbar' },
              { name: 'banner' },
              { name: 'complementary' },
              { name: 'contentinfo' },
              { name: 'form' },
              { name: 'main' },
              { name: 'navigation' },
              { name: 'region' },
              { name: 'search' },
              { name: 'doc-abstract' },
              { name: 'doc-acknowledgments' },
              { name: 'doc-afterword' },
              { name: 'doc-appendix' },
              { name: 'doc-backlink' },
              { name: 'doc-biblioentry' },
              { name: 'doc-bibliography' },
              { name: 'doc-biblioref' },
              { name: 'doc-chapter' },
              { name: 'doc-colophon' },
              { name: 'doc-conclusion' },
              { name: 'doc-cover' },
              { name: 'doc-credit' },
              { name: 'doc-credits' },
              { name: 'doc-dedication' },
              { name: 'doc-endnote' },
              { name: 'doc-endnotes' },
              { name: 'doc-epigraph' },
              { name: 'doc-epilogue' },
              { name: 'doc-errata' },
              { name: 'doc-example' },
              { name: 'doc-footnote' },
              { name: 'doc-foreword' },
              { name: 'doc-glossary' },
              { name: 'doc-glossref' },
              { name: 'doc-index' },
              { name: 'doc-introduction' },
              { name: 'doc-noteref' },
              { name: 'doc-notice' },
              { name: 'doc-pagebreak' },
              { name: 'doc-pagelist' },
              { name: 'doc-part' },
              { name: 'doc-preface' },
              { name: 'doc-prologue' },
              { name: 'doc-pullquote' },
              { name: 'doc-qna' },
              { name: 'doc-subtitle' },
              { name: 'doc-tip' },
              { name: 'doc-toc' },
            ],
          },
          {
            name: 'metanames',
            values: [
              { name: 'application-name' },
              { name: 'author' },
              { name: 'description' },
              { name: 'format-detection' },
              { name: 'generator' },
              { name: 'keywords' },
              { name: 'publisher' },
              { name: 'referrer' },
              { name: 'robots' },
              { name: 'theme-color' },
              { name: 'viewport' },
            ],
          },
        ],
      }
      ;(function() {
        function e(e) {
          ;(this.dataProviders = []),
            this.setDataProviders(!1 !== e.useDefaultDataProvider, e.customDataProviders || [])
        }
        ;(e.prototype.setDataProviders = function(e, t) {
          var n
          ;(this.dataProviders = []),
            e && this.dataProviders.push(new $e('html5', vt)),
            (n = this.dataProviders).push.apply(n, t)
        }),
          (e.prototype.getDataProviders = function() {
            return this.dataProviders
          })
      })()
      var yt = (function() {
        function e(e, t, n) {
          var i = this
          ;(this._languageId = e), (this._worker = t), (this._disposables = []), (this._listener = Object.create(null))
          var r = function(e) {
              var t,
                n = e.getModeId()
              n === i._languageId &&
                ((i._listener[e.uri.toString()] = e.onDidChangeContent(function() {
                  clearTimeout(t),
                    (t = setTimeout(function() {
                      return i._doValidate(e.uri, n)
                    }, 500))
                })),
                i._doValidate(e.uri, n))
            },
            a = function(e) {
              S['editor'].setModelMarkers(e, i._languageId, [])
              var t = e.uri.toString(),
                n = i._listener[t]
              n && (n.dispose(), delete i._listener[t])
            }
          this._disposables.push(S['editor'].onDidCreateModel(r)),
            this._disposables.push(
              S['editor'].onWillDisposeModel(function(e) {
                a(e)
              }),
            ),
            this._disposables.push(
              S['editor'].onDidChangeModelLanguage(function(e) {
                a(e.model), r(e.model)
              }),
            ),
            this._disposables.push(
              n.onDidChange(function(e) {
                S['editor'].getModels().forEach(function(e) {
                  e.getModeId() === i._languageId && (a(e), r(e))
                })
              }),
            ),
            this._disposables.push({
              dispose: function() {
                for (var e in i._listener) i._listener[e].dispose()
              },
            }),
            S['editor'].getModels().forEach(r)
        }
        return (
          (e.prototype.dispose = function() {
            this._disposables.forEach(function(e) {
              return e && e.dispose()
            }),
              (this._disposables = [])
          }),
          (e.prototype._doValidate = function(e, t) {
            this._worker(e)
              .then(function(n) {
                return n.doValidation(e.toString()).then(function(n) {
                  var i = n.map(function(t) {
                    return kt(e, t)
                  })
                  S['editor'].setModelMarkers(S['editor'].getModel(e), t, i)
                })
              })
              .then(void 0, function(e) {
                console.error(e)
              })
          }),
          e
        )
      })()
      function Tt(e) {
        switch (e) {
          case p.Error:
            return S['MarkerSeverity'].Error
          case p.Warning:
            return S['MarkerSeverity'].Warning
          case p.Information:
            return S['MarkerSeverity'].Info
          case p.Hint:
            return S['MarkerSeverity'].Hint
          default:
            return S['MarkerSeverity'].Info
        }
      }
      function kt(e, t) {
        var n = 'number' === typeof t.code ? String(t.code) : t.code
        return {
          severity: Tt(t.severity),
          startLineNumber: t.range.start.line + 1,
          startColumn: t.range.start.character + 1,
          endLineNumber: t.range.end.line + 1,
          endColumn: t.range.end.character + 1,
          message: t.message,
          code: n,
          source: t.source,
        }
      }
      function St(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 }
      }
      function xt(e) {
        if (e) return { start: St(e.getStartPosition()), end: St(e.getEndPosition()) }
      }
      function Mt(e) {
        if (e) return new S['Range'](e.start.line + 1, e.start.character + 1, e.end.line + 1, e.end.character + 1)
      }
      function Lt(e) {
        return 'undefined' !== typeof e.insert && 'undefined' !== typeof e.replace
      }
      function Et(e) {
        var t = S['languages'].CompletionItemKind
        switch (e) {
          case U.Text:
            return t.Text
          case U.Method:
            return t.Method
          case U.Function:
            return t.Function
          case U.Constructor:
            return t.Constructor
          case U.Field:
            return t.Field
          case U.Variable:
            return t.Variable
          case U.Class:
            return t.Class
          case U.Interface:
            return t.Interface
          case U.Module:
            return t.Module
          case U.Property:
            return t.Property
          case U.Unit:
            return t.Unit
          case U.Value:
            return t.Value
          case U.Enum:
            return t.Enum
          case U.Keyword:
            return t.Keyword
          case U.Snippet:
            return t.Snippet
          case U.Color:
            return t.Color
          case U.File:
            return t.File
          case U.Reference:
            return t.Reference
        }
        return t.Property
      }
      function At(e) {
        if (e) return { range: Mt(e.range), text: e.newText }
      }
      var Rt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          Object.defineProperty(e.prototype, 'triggerCharacters', {
            get: function() {
              return ['.', ':', '<', '"', '=', '/']
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function(e, t, n, i) {
            var r = e.uri
            return this._worker(r)
              .then(function(e) {
                return e.doComplete(r.toString(), St(t))
              })
              .then(function(n) {
                if (n) {
                  var i = e.getWordUntilPosition(t),
                    r = new S['Range'](t.lineNumber, i.startColumn, t.lineNumber, i.endColumn),
                    a = n.items.map(function(e) {
                      var t = {
                        label: e.label,
                        insertText: e.insertText || e.label,
                        sortText: e.sortText,
                        filterText: e.filterText,
                        documentation: e.documentation,
                        detail: e.detail,
                        range: r,
                        kind: Et(e.kind),
                      }
                      return (
                        e.textEdit &&
                          (Lt(e.textEdit)
                            ? (t.range = { insert: Mt(e.textEdit.insert), replace: Mt(e.textEdit.replace) })
                            : (t.range = Mt(e.textEdit.range)),
                          (t.insertText = e.textEdit.newText)),
                        e.additionalTextEdits && (t.additionalTextEdits = e.additionalTextEdits.map(At)),
                        e.insertTextFormat === W.Snippet &&
                          (t.insertTextRules = S['languages'].CompletionItemInsertTextRule.InsertAsSnippet),
                        t
                      )
                    })
                  return { isIncomplete: n.isIncomplete, suggestions: a }
                }
              })
          }),
          e
        )
      })()
      function zt(e) {
        return e && 'object' === typeof e && 'string' === typeof e.kind
      }
      function It(e) {
        return 'string' === typeof e
          ? { value: e }
          : zt(e)
          ? 'plaintext' === e.kind
            ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&') }
            : { value: e.value }
          : { value: '```' + e.language + '\n' + e.value + '\n```\n' }
      }
      function Ht(e) {
        if (e) return Array.isArray(e) ? e.map(It) : [It(e)]
      }
      var Ct = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideHover = function(e, t, n) {
            var i = e.uri
            return this._worker(i)
              .then(function(e) {
                return e.doHover(i.toString(), St(t))
              })
              .then(function(e) {
                if (e) return { range: Mt(e.range), contents: Ht(e.contents) }
              })
          }),
          e
        )
      })()
      function Ut(e) {
        var t = S['languages'].DocumentHighlightKind
        switch (e) {
          case G.Read:
            return t.Read
          case G.Write:
            return t.Write
          case G.Text:
            return t.Text
        }
        return t.Text
      }
      var Wt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideDocumentHighlights = function(e, t, n) {
            var i = e.uri
            return this._worker(i)
              .then(function(e) {
                return e.findDocumentHighlights(i.toString(), St(t))
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return { range: Mt(e.range), kind: Ut(e.kind) }
                  })
              })
          }),
          e
        )
      })()
      function Dt(e) {
        var t = S['languages'].SymbolKind
        switch (e) {
          case K.File:
            return t.Array
          case K.Module:
            return t.Module
          case K.Namespace:
            return t.Namespace
          case K.Package:
            return t.Package
          case K.Class:
            return t.Class
          case K.Method:
            return t.Method
          case K.Property:
            return t.Property
          case K.Field:
            return t.Field
          case K.Constructor:
            return t.Constructor
          case K.Enum:
            return t.Enum
          case K.Interface:
            return t.Interface
          case K.Function:
            return t.Function
          case K.Variable:
            return t.Variable
          case K.Constant:
            return t.Constant
          case K.String:
            return t.String
          case K.Number:
            return t.Number
          case K.Boolean:
            return t.Boolean
          case K.Array:
            return t.Array
        }
        return t.Function
      }
      var Pt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentSymbols = function(e, t) {
              var n = e.uri
              return this._worker(n)
                .then(function(e) {
                  return e.findDocumentSymbols(n.toString())
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      return {
                        name: e.name,
                        detail: '',
                        containerName: e.containerName,
                        kind: Dt(e.kind),
                        tags: [],
                        range: Mt(e.location.range),
                        selectionRange: Mt(e.location.range),
                      }
                    })
                })
            }),
            e
          )
        })(),
        Ot = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideLinks = function(e, t) {
              var n = e.uri
              return this._worker(n)
                .then(function(e) {
                  return e.findDocumentLinks(n.toString())
                })
                .then(function(e) {
                  if (e)
                    return {
                      links: e.map(function(e) {
                        return { range: Mt(e.range), url: e.target }
                      }),
                    }
                })
            }),
            e
          )
        })()
      function qt(e) {
        return { tabSize: e.tabSize, insertSpaces: e.insertSpaces }
      }
      var Nt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentFormattingEdits = function(e, t, n) {
              var i = e.uri
              return this._worker(i).then(function(e) {
                return e.format(i.toString(), null, qt(t)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(At)
                })
              })
            }),
            e
          )
        })(),
        Ft = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideDocumentRangeFormattingEdits = function(e, t, n, i) {
              var r = e.uri
              return this._worker(r).then(function(e) {
                return e.format(r.toString(), xt(t), qt(n)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(At)
                })
              })
            }),
            e
          )
        })(),
        jt = (function() {
          function e(e) {
            this._worker = e
          }
          return (
            (e.prototype.provideRenameEdits = function(e, t, n, i) {
              var r = e.uri
              return this._worker(r)
                .then(function(e) {
                  return e.doRename(r.toString(), St(t), n)
                })
                .then(function(e) {
                  return Bt(e)
                })
            }),
            e
          )
        })()
      function Bt(e) {
        if (e && e.changes) {
          var t = []
          for (var n in e.changes)
            for (var i = S['Uri'].parse(n), r = 0, a = e.changes[n]; r < a.length; r++) {
              var o = a[r]
              t.push({ resource: i, edit: { range: Mt(o.range), text: o.newText } })
            }
          return { edits: t }
        }
      }
      var Gt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideFoldingRanges = function(e, t, n) {
            var i = e.uri
            return this._worker(i)
              .then(function(e) {
                return e.getFoldingRanges(i.toString(), t)
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    var t = { start: e.startLine + 1, end: e.endLine + 1 }
                    return 'undefined' !== typeof e.kind && (t.kind = Vt(e.kind)), t
                  })
              })
          }),
          e
        )
      })()
      function Vt(e) {
        switch (e) {
          case h.Comment:
            return S['languages'].FoldingRangeKind.Comment
          case h.Imports:
            return S['languages'].FoldingRangeKind.Imports
          case h.Region:
            return S['languages'].FoldingRangeKind.Region
        }
      }
      var Kt = (function() {
        function e(e) {
          this._worker = e
        }
        return (
          (e.prototype.provideSelectionRanges = function(e, t, n) {
            var i = e.uri
            return this._worker(i)
              .then(function(e) {
                return e.getSelectionRanges(i.toString(), t.map(St))
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    var t = []
                    while (e) t.push({ range: Mt(e.range) }), (e = e.parent)
                    return t
                  })
              })
          }),
          e
        )
      })()
      function Jt(e) {
        var t = new M(e),
          n = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
            return t.getLanguageServiceWorker.apply(t, e)
          },
          i = e.languageId
        S['languages'].registerCompletionItemProvider(i, new Rt(n)),
          S['languages'].registerHoverProvider(i, new Ct(n)),
          S['languages'].registerDocumentHighlightProvider(i, new Wt(n)),
          S['languages'].registerLinkProvider(i, new Ot(n)),
          S['languages'].registerFoldingRangeProvider(i, new Gt(n)),
          S['languages'].registerDocumentSymbolProvider(i, new Pt(n)),
          S['languages'].registerSelectionRangeProvider(i, new Kt(n)),
          S['languages'].registerRenameProvider(i, new jt(n)),
          'html' === i &&
            (S['languages'].registerDocumentFormattingEditProvider(i, new Nt(n)),
            S['languages'].registerDocumentRangeFormattingEditProvider(i, new Ft(n)),
            new yt(i, n, e))
      }
      function Yt(e) {
        var t = [],
          n = [],
          i = new M(e)
        t.push(i)
        var r = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return i.getLanguageServiceWorker.apply(i, e)
        }
        function a() {
          var t = e.languageId,
            i = e.modeConfiguration
          $t(n),
            i.completionItems && n.push(S['languages'].registerCompletionItemProvider(t, new Rt(r))),
            i.hovers && n.push(S['languages'].registerHoverProvider(t, new Ct(r))),
            i.documentHighlights && n.push(S['languages'].registerDocumentHighlightProvider(t, new Wt(r))),
            i.links && n.push(S['languages'].registerLinkProvider(t, new Ot(r))),
            i.documentSymbols && n.push(S['languages'].registerDocumentSymbolProvider(t, new Pt(r))),
            i.rename && n.push(S['languages'].registerRenameProvider(t, new jt(r))),
            i.foldingRanges && n.push(S['languages'].registerFoldingRangeProvider(t, new Gt(r))),
            i.selectionRanges && n.push(S['languages'].registerSelectionRangeProvider(t, new Kt(r))),
            i.documentFormattingEdits && n.push(S['languages'].registerDocumentFormattingEditProvider(t, new Nt(r))),
            i.documentRangeFormattingEdits &&
              n.push(S['languages'].registerDocumentRangeFormattingEditProvider(t, new Ft(r))),
            i.diagnostics && n.push(new yt(t, r, e))
        }
        return a(), t.push(Xt(n)), Xt(t)
      }
      function Xt(e) {
        return {
          dispose: function() {
            return $t(e)
          },
        }
      }
      function $t(e) {
        while (e.length) e.pop().dispose()
      }
    },
  },
])
