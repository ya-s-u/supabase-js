!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.supabase = t())
    : (e.supabase = t())
})(self, () =>
  (() => {
    'use strict'
    var e = {
        235: (e, t, s) => {
          s.r(t),
            s.d(t, {
              AuthAdminApi: () => ie,
              AuthApiError: () => k,
              AuthClient: () => ne,
              AuthError: () => w,
              AuthImplicitGrantRedirectError: () => $,
              AuthInvalidCredentialsError: () => A,
              AuthInvalidTokenResponseError: () => P,
              AuthPKCEGrantCodeExchangeError: () => R,
              AuthRetryableFetchError: () => C,
              AuthSessionMissingError: () => O,
              AuthUnknownError: () => S,
              AuthWeakPasswordError: () => L,
              CustomAuthError: () => E,
              GoTrueAdminApi: () => K,
              GoTrueClient: () => re,
              NavigatorLockAcquireTimeoutError: () => X,
              isAuthApiError: () => T,
              isAuthError: () => b,
              isAuthImplicitGrantRedirectError: () => x,
              isAuthRetryableFetchError: () => I,
              isAuthSessionMissingError: () => j,
              isAuthWeakPasswordError: () => U,
              lockInternals: () => Y,
              navigatorLock: () => Z,
            })
          const r = '2.67.3',
            i = { 'X-Client-Info': `gotrue-js/${r}` },
            n = 'X-Supabase-Api-Version',
            o = {
              '2024-01-01': { timestamp: Date.parse('2024-01-01T00:00:00.0Z'), name: '2024-01-01' },
            },
            a = () => 'undefined' != typeof window && 'undefined' != typeof document,
            c = { tested: !1, writable: !1 },
            l = () => {
              if (!a()) return !1
              try {
                if ('object' != typeof globalThis.localStorage) return !1
              } catch (e) {
                return !1
              }
              if (c.tested) return c.writable
              const e = `lswt-${Math.random()}${Math.random()}`
              try {
                globalThis.localStorage.setItem(e, e),
                  globalThis.localStorage.removeItem(e),
                  (c.tested = !0),
                  (c.writable = !0)
              } catch (e) {
                ;(c.tested = !0), (c.writable = !1)
              }
              return c.writable
            },
            h = (e) => {
              let t
              return (
                (t =
                  e ||
                  ('undefined' == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(s.bind(s, 907))
                          .then(({ default: t }) => t(...e))
                    : fetch)),
                (...e) => t(...e)
              )
            },
            u = (e) =>
              'object' == typeof e &&
              null !== e &&
              'status' in e &&
              'ok' in e &&
              'json' in e &&
              'function' == typeof e.json,
            d = async (e, t, s) => {
              await e.setItem(t, JSON.stringify(s))
            },
            f = async (e, t) => {
              const s = await e.getItem(t)
              if (!s) return null
              try {
                return JSON.parse(s)
              } catch (e) {
                return s
              }
            },
            p = async (e, t) => {
              await e.removeItem(t)
            }
          class g {
            constructor() {
              this.promise = new g.promiseConstructor((e, t) => {
                ;(this.resolve = e), (this.reject = t)
              })
            }
          }
          function v(e) {
            const t = e.split('.')
            if (3 !== t.length) throw new Error('JWT is not valid: not a JWT structure')
            if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1]))
              throw new Error('JWT is not valid: payload is not in base64url format')
            const s = t[1]
            return JSON.parse(
              (function (e) {
                const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                let s,
                  r,
                  i,
                  n,
                  o,
                  a,
                  c,
                  l = '',
                  h = 0
                for (e = e.replace('-', '+').replace('_', '/'); h < e.length; )
                  (n = t.indexOf(e.charAt(h++))),
                    (o = t.indexOf(e.charAt(h++))),
                    (a = t.indexOf(e.charAt(h++))),
                    (c = t.indexOf(e.charAt(h++))),
                    (s = (n << 2) | (o >> 4)),
                    (r = ((15 & o) << 4) | (a >> 2)),
                    (i = ((3 & a) << 6) | c),
                    (l += String.fromCharCode(s)),
                    64 != a && 0 != r && (l += String.fromCharCode(r)),
                    64 != c && 0 != i && (l += String.fromCharCode(i))
                return l
              })(s)
            )
          }
          function y(e) {
            return ('0' + e.toString(16)).substr(-2)
          }
          async function m(e, t, s = !1) {
            const r = (function () {
              const e = new Uint32Array(56)
              if ('undefined' == typeof crypto) {
                const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
                  t = e.length
                let s = ''
                for (let r = 0; r < 56; r++) s += e.charAt(Math.floor(Math.random() * t))
                return s
              }
              return crypto.getRandomValues(e), Array.from(e, y).join('')
            })()
            let i = r
            s && (i += '/PASSWORD_RECOVERY'), await d(e, `${t}-code-verifier`, i)
            const n = await (async function (e) {
              if (
                'undefined' == typeof crypto ||
                void 0 === crypto.subtle ||
                'undefined' == typeof TextEncoder
              )
                return (
                  console.warn(
                    'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
                  ),
                  e
                )
              const t = await (async function (e) {
                const t = new TextEncoder().encode(e),
                  s = await crypto.subtle.digest('SHA-256', t),
                  r = new Uint8Array(s)
                return Array.from(r)
                  .map((e) => String.fromCharCode(e))
                  .join('')
              })(e)
              return btoa(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
            })(r)
            return [n, r === n ? 'plain' : 's256']
          }
          g.promiseConstructor = Promise
          const _ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i
          class w extends Error {
            constructor(e, t, s) {
              super(e),
                (this.__isAuthError = !0),
                (this.name = 'AuthError'),
                (this.status = t),
                (this.code = s)
            }
          }
          function b(e) {
            return 'object' == typeof e && null !== e && '__isAuthError' in e
          }
          class k extends w {
            constructor(e, t, s) {
              super(e, t, s), (this.name = 'AuthApiError'), (this.status = t), (this.code = s)
            }
          }
          function T(e) {
            return b(e) && 'AuthApiError' === e.name
          }
          class S extends w {
            constructor(e, t) {
              super(e), (this.name = 'AuthUnknownError'), (this.originalError = t)
            }
          }
          class E extends w {
            constructor(e, t, s, r) {
              super(e, s, r), (this.name = t), (this.status = s)
            }
          }
          class O extends E {
            constructor() {
              super('Auth session missing!', 'AuthSessionMissingError', 400, void 0)
            }
          }
          function j(e) {
            return b(e) && 'AuthSessionMissingError' === e.name
          }
          class P extends E {
            constructor() {
              super('Auth session or user missing', 'AuthInvalidTokenResponseError', 500, void 0)
            }
          }
          class A extends E {
            constructor(e) {
              super(e, 'AuthInvalidCredentialsError', 400, void 0)
            }
          }
          class $ extends E {
            constructor(e, t = null) {
              super(e, 'AuthImplicitGrantRedirectError', 500, void 0),
                (this.details = null),
                (this.details = t)
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details,
              }
            }
          }
          function x(e) {
            return b(e) && 'AuthImplicitGrantRedirectError' === e.name
          }
          class R extends E {
            constructor(e, t = null) {
              super(e, 'AuthPKCEGrantCodeExchangeError', 500, void 0),
                (this.details = null),
                (this.details = t)
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details,
              }
            }
          }
          class C extends E {
            constructor(e, t) {
              super(e, 'AuthRetryableFetchError', t, void 0)
            }
          }
          function I(e) {
            return b(e) && 'AuthRetryableFetchError' === e.name
          }
          class L extends E {
            constructor(e, t, s) {
              super(e, 'AuthWeakPasswordError', t, 'weak_password'), (this.reasons = s)
            }
          }
          function U(e) {
            return b(e) && 'AuthWeakPasswordError' === e.name
          }
          const D = (e) =>
              e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
            N = [502, 503, 504]
          async function F(e) {
            var t
            if (!u(e)) throw new C(D(e), 0)
            if (N.includes(e.status)) throw new C(D(e), e.status)
            let s, r
            try {
              s = await e.json()
            } catch (e) {
              throw new S(D(e), e)
            }
            const i = (function (e) {
              const t = e.headers.get(n)
              if (!t) return null
              if (!t.match(_)) return null
              try {
                return new Date(`${t}T00:00:00.0Z`)
              } catch (e) {
                return null
              }
            })(e)
            if (
              (i &&
              i.getTime() >= o['2024-01-01'].timestamp &&
              'object' == typeof s &&
              s &&
              'string' == typeof s.code
                ? (r = s.code)
                : 'object' == typeof s &&
                  s &&
                  'string' == typeof s.error_code &&
                  (r = s.error_code),
              r)
            ) {
              if ('weak_password' === r)
                throw new L(
                  D(s),
                  e.status,
                  (null === (t = s.weak_password) || void 0 === t ? void 0 : t.reasons) || []
                )
              if ('session_not_found' === r) throw new O()
            } else if (
              'object' == typeof s &&
              s &&
              'object' == typeof s.weak_password &&
              s.weak_password &&
              Array.isArray(s.weak_password.reasons) &&
              s.weak_password.reasons.length &&
              s.weak_password.reasons.reduce((e, t) => e && 'string' == typeof t, !0)
            )
              throw new L(D(s), e.status, s.weak_password.reasons)
            throw new k(D(s), e.status || 500, r)
          }
          async function M(e, t, s, r) {
            var i
            const a = Object.assign({}, null == r ? void 0 : r.headers)
            a[n] || (a[n] = o['2024-01-01'].name),
              (null == r ? void 0 : r.jwt) && (a.Authorization = `Bearer ${r.jwt}`)
            const c = null !== (i = null == r ? void 0 : r.query) && void 0 !== i ? i : {}
            ;(null == r ? void 0 : r.redirectTo) && (c.redirect_to = r.redirectTo)
            const l = Object.keys(c).length ? '?' + new URLSearchParams(c).toString() : '',
              h = await (async function (e, t, s, r, i, n) {
                const o = ((e, t, s, r) => {
                  const i = { method: e, headers: (null == t ? void 0 : t.headers) || {} }
                  return 'GET' === e
                    ? i
                    : ((i.headers = Object.assign(
                        { 'Content-Type': 'application/json;charset=UTF-8' },
                        null == t ? void 0 : t.headers
                      )),
                      (i.body = JSON.stringify(r)),
                      Object.assign(Object.assign({}, i), s))
                })(t, r, {}, n)
                let a
                try {
                  a = await e(s, Object.assign({}, o))
                } catch (e) {
                  throw (console.error(e), new C(D(e), 0))
                }
                if ((a.ok || (await F(a)), null == r ? void 0 : r.noResolveJson)) return a
                try {
                  return await a.json()
                } catch (e) {
                  await F(e)
                }
              })(
                e,
                t,
                s + l,
                { headers: a, noResolveJson: null == r ? void 0 : r.noResolveJson },
                0,
                null == r ? void 0 : r.body
              )
            return (null == r ? void 0 : r.xform)
              ? null == r
                ? void 0
                : r.xform(h)
              : { data: Object.assign({}, h), error: null }
          }
          function B(e) {
            var t
            let s = null
            var r
            return (
              (function (e) {
                return e.access_token && e.refresh_token && e.expires_in
              })(e) &&
                ((s = Object.assign({}, e)),
                e.expires_at ||
                  (s.expires_at = ((r = e.expires_in), Math.round(Date.now() / 1e3) + r))),
              {
                data: { session: s, user: null !== (t = e.user) && void 0 !== t ? t : e },
                error: null,
              }
            )
          }
          function q(e) {
            const t = B(e)
            return (
              !t.error &&
                e.weak_password &&
                'object' == typeof e.weak_password &&
                Array.isArray(e.weak_password.reasons) &&
                e.weak_password.reasons.length &&
                e.weak_password.message &&
                'string' == typeof e.weak_password.message &&
                e.weak_password.reasons.reduce((e, t) => e && 'string' == typeof t, !0) &&
                (t.data.weak_password = e.weak_password),
              t
            )
          }
          function J(e) {
            var t
            return { data: { user: null !== (t = e.user) && void 0 !== t ? t : e }, error: null }
          }
          function z(e) {
            return { data: e, error: null }
          }
          function H(e) {
            const {
                action_link: t,
                email_otp: s,
                hashed_token: r,
                redirect_to: i,
                verification_type: n,
              } = e,
              o = (function (e, t) {
                var s = {}
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r])
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                  var i = 0
                  for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    t.indexOf(r[i]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                      (s[r[i]] = e[r[i]])
                }
                return s
              })(e, [
                'action_link',
                'email_otp',
                'hashed_token',
                'redirect_to',
                'verification_type',
              ])
            return {
              data: {
                properties: {
                  action_link: t,
                  email_otp: s,
                  hashed_token: r,
                  redirect_to: i,
                  verification_type: n,
                },
                user: Object.assign({}, o),
              },
              error: null,
            }
          }
          function G(e) {
            return e
          }
          class K {
            constructor({ url: e = '', headers: t = {}, fetch: s }) {
              ;(this.url = e),
                (this.headers = t),
                (this.fetch = h(s)),
                (this.mfa = {
                  listFactors: this._listFactors.bind(this),
                  deleteFactor: this._deleteFactor.bind(this),
                })
            }
            async signOut(e, t = 'global') {
              try {
                return (
                  await M(this.fetch, 'POST', `${this.url}/logout?scope=${t}`, {
                    headers: this.headers,
                    jwt: e,
                    noResolveJson: !0,
                  }),
                  { data: null, error: null }
                )
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async inviteUserByEmail(e, t = {}) {
              try {
                return await M(this.fetch, 'POST', `${this.url}/invite`, {
                  body: { email: e, data: t.data },
                  headers: this.headers,
                  redirectTo: t.redirectTo,
                  xform: J,
                })
              } catch (e) {
                if (b(e)) return { data: { user: null }, error: e }
                throw e
              }
            }
            async generateLink(e) {
              try {
                const { options: t } = e,
                  s = (function (e, t) {
                    var s = {}
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        t.indexOf(r) < 0 &&
                        (s[r] = e[r])
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                      var i = 0
                      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                        t.indexOf(r[i]) < 0 &&
                          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                          (s[r[i]] = e[r[i]])
                    }
                    return s
                  })(e, ['options']),
                  r = Object.assign(Object.assign({}, s), t)
                return (
                  'newEmail' in s &&
                    ((r.new_email = null == s ? void 0 : s.newEmail), delete r.newEmail),
                  await M(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
                    body: r,
                    headers: this.headers,
                    xform: H,
                    redirectTo: null == t ? void 0 : t.redirectTo,
                  })
                )
              } catch (e) {
                if (b(e)) return { data: { properties: null, user: null }, error: e }
                throw e
              }
            }
            async createUser(e) {
              try {
                return await M(this.fetch, 'POST', `${this.url}/admin/users`, {
                  body: e,
                  headers: this.headers,
                  xform: J,
                })
              } catch (e) {
                if (b(e)) return { data: { user: null }, error: e }
                throw e
              }
            }
            async listUsers(e) {
              var t, s, r, i, n, o, a
              try {
                const c = { nextPage: null, lastPage: 0, total: 0 },
                  l = await M(this.fetch, 'GET', `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                      page:
                        null !==
                          (s =
                            null === (t = null == e ? void 0 : e.page) || void 0 === t
                              ? void 0
                              : t.toString()) && void 0 !== s
                          ? s
                          : '',
                      per_page:
                        null !==
                          (i =
                            null === (r = null == e ? void 0 : e.perPage) || void 0 === r
                              ? void 0
                              : r.toString()) && void 0 !== i
                          ? i
                          : '',
                    },
                    xform: G,
                  })
                if (l.error) throw l.error
                const h = await l.json(),
                  u = null !== (n = l.headers.get('x-total-count')) && void 0 !== n ? n : 0,
                  d =
                    null !==
                      (a =
                        null === (o = l.headers.get('link')) || void 0 === o
                          ? void 0
                          : o.split(',')) && void 0 !== a
                      ? a
                      : []
                return (
                  d.length > 0 &&
                    (d.forEach((e) => {
                      const t = parseInt(e.split(';')[0].split('=')[1].substring(0, 1)),
                        s = JSON.parse(e.split(';')[1].split('=')[1])
                      c[`${s}Page`] = t
                    }),
                    (c.total = parseInt(u))),
                  { data: Object.assign(Object.assign({}, h), c), error: null }
                )
              } catch (e) {
                if (b(e)) return { data: { users: [] }, error: e }
                throw e
              }
            }
            async getUserById(e) {
              try {
                return await M(this.fetch, 'GET', `${this.url}/admin/users/${e}`, {
                  headers: this.headers,
                  xform: J,
                })
              } catch (e) {
                if (b(e)) return { data: { user: null }, error: e }
                throw e
              }
            }
            async updateUserById(e, t) {
              try {
                return await M(this.fetch, 'PUT', `${this.url}/admin/users/${e}`, {
                  body: t,
                  headers: this.headers,
                  xform: J,
                })
              } catch (e) {
                if (b(e)) return { data: { user: null }, error: e }
                throw e
              }
            }
            async deleteUser(e, t = !1) {
              try {
                return await M(this.fetch, 'DELETE', `${this.url}/admin/users/${e}`, {
                  headers: this.headers,
                  body: { should_soft_delete: t },
                  xform: J,
                })
              } catch (e) {
                if (b(e)) return { data: { user: null }, error: e }
                throw e
              }
            }
            async _listFactors(e) {
              try {
                const { data: t, error: s } = await M(
                  this.fetch,
                  'GET',
                  `${this.url}/admin/users/${e.userId}/factors`,
                  { headers: this.headers, xform: (e) => ({ data: { factors: e }, error: null }) }
                )
                return { data: t, error: s }
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async _deleteFactor(e) {
              try {
                return {
                  data: await M(
                    this.fetch,
                    'DELETE',
                    `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                    { headers: this.headers }
                  ),
                  error: null,
                }
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
          }
          const W = {
            getItem: (e) => (l() ? globalThis.localStorage.getItem(e) : null),
            setItem: (e, t) => {
              l() && globalThis.localStorage.setItem(e, t)
            },
            removeItem: (e) => {
              l() && globalThis.localStorage.removeItem(e)
            },
          }
          function V(e = {}) {
            return {
              getItem: (t) => e[t] || null,
              setItem: (t, s) => {
                e[t] = s
              },
              removeItem: (t) => {
                delete e[t]
              },
            }
          }
          const Y = {
            debug: !!(
              globalThis &&
              l() &&
              globalThis.localStorage &&
              'true' === globalThis.localStorage.getItem('supabase.gotrue-js.locks.debug')
            ),
          }
          class Q extends Error {
            constructor(e) {
              super(e), (this.isAcquireTimeout = !0)
            }
          }
          class X extends Q {}
          async function Z(e, t, s) {
            Y.debug && console.log('@supabase/gotrue-js: navigatorLock: acquire lock', e, t)
            const r = new globalThis.AbortController()
            return (
              t > 0 &&
                setTimeout(() => {
                  r.abort(),
                    Y.debug &&
                      console.log('@supabase/gotrue-js: navigatorLock acquire timed out', e)
                }, t),
              await Promise.resolve().then(() =>
                globalThis.navigator.locks.request(
                  e,
                  0 === t
                    ? { mode: 'exclusive', ifAvailable: !0 }
                    : { mode: 'exclusive', signal: r.signal },
                  async (r) => {
                    if (!r) {
                      if (0 === t)
                        throw (
                          (Y.debug &&
                            console.log(
                              '@supabase/gotrue-js: navigatorLock: not immediately available',
                              e
                            ),
                          new X(
                            `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                          ))
                        )
                      if (Y.debug)
                        try {
                          const e = await globalThis.navigator.locks.query()
                          console.log(
                            '@supabase/gotrue-js: Navigator LockManager state',
                            JSON.stringify(e, null, '  ')
                          )
                        } catch (e) {
                          console.warn(
                            '@supabase/gotrue-js: Error when querying Navigator LockManager state',
                            e
                          )
                        }
                      return (
                        console.warn(
                          '@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request'
                        ),
                        await s()
                      )
                    }
                    Y.debug &&
                      console.log('@supabase/gotrue-js: navigatorLock: acquired', e, r.name)
                    try {
                      return await s()
                    } finally {
                      Y.debug &&
                        console.log('@supabase/gotrue-js: navigatorLock: released', e, r.name)
                    }
                  }
                )
              )
            )
          }
          !(function () {
            if ('object' != typeof globalThis)
              try {
                Object.defineProperty(Object.prototype, '__magic__', {
                  get: function () {
                    return this
                  },
                  configurable: !0,
                }),
                  (__magic__.globalThis = __magic__),
                  delete Object.prototype.__magic__
              } catch (e) {
                'undefined' != typeof self && (self.globalThis = self)
              }
          })()
          const ee = {
              url: 'http://localhost:9999',
              storageKey: 'supabase.auth.token',
              autoRefreshToken: !0,
              persistSession: !0,
              detectSessionInUrl: !0,
              headers: i,
              flowType: 'implicit',
              debug: !1,
              hasCustomAuthorizationHeader: !1,
            },
            te = 3e4
          async function se(e, t, s) {
            return await s()
          }
          class re {
            constructor(e) {
              var t, s
              ;(this.memoryStorage = null),
                (this.stateChangeEmitters = new Map()),
                (this.autoRefreshTicker = null),
                (this.visibilityChangedCallback = null),
                (this.refreshingDeferred = null),
                (this.initializePromise = null),
                (this.detectSessionInUrl = !0),
                (this.hasCustomAuthorizationHeader = !1),
                (this.suppressGetSessionWarning = !1),
                (this.lockAcquired = !1),
                (this.pendingInLock = []),
                (this.broadcastChannel = null),
                (this.logger = console.log),
                (this.instanceID = re.nextInstanceID),
                (re.nextInstanceID += 1),
                this.instanceID > 0 &&
                  a() &&
                  console.warn(
                    'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
                  )
              const r = Object.assign(Object.assign({}, ee), e)
              if (
                ((this.logDebugMessages = !!r.debug),
                'function' == typeof r.debug && (this.logger = r.debug),
                (this.persistSession = r.persistSession),
                (this.storageKey = r.storageKey),
                (this.autoRefreshToken = r.autoRefreshToken),
                (this.admin = new K({ url: r.url, headers: r.headers, fetch: r.fetch })),
                (this.url = r.url),
                (this.headers = r.headers),
                (this.fetch = h(r.fetch)),
                (this.lock = r.lock || se),
                (this.detectSessionInUrl = r.detectSessionInUrl),
                (this.flowType = r.flowType),
                (this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader),
                r.lock
                  ? (this.lock = r.lock)
                  : a() &&
                    (null ===
                      (t =
                        null === globalThis || void 0 === globalThis
                          ? void 0
                          : globalThis.navigator) || void 0 === t
                      ? void 0
                      : t.locks)
                  ? (this.lock = Z)
                  : (this.lock = se),
                (this.mfa = {
                  verify: this._verify.bind(this),
                  enroll: this._enroll.bind(this),
                  unenroll: this._unenroll.bind(this),
                  challenge: this._challenge.bind(this),
                  listFactors: this._listFactors.bind(this),
                  challengeAndVerify: this._challengeAndVerify.bind(this),
                  getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
                }),
                this.persistSession
                  ? r.storage
                    ? (this.storage = r.storage)
                    : l()
                    ? (this.storage = W)
                    : ((this.memoryStorage = {}), (this.storage = V(this.memoryStorage)))
                  : ((this.memoryStorage = {}), (this.storage = V(this.memoryStorage))),
                a() && globalThis.BroadcastChannel && this.persistSession && this.storageKey)
              ) {
                try {
                  this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                } catch (e) {
                  console.error(
                    'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
                    e
                  )
                }
                null === (s = this.broadcastChannel) ||
                  void 0 === s ||
                  s.addEventListener('message', async (e) => {
                    this._debug('received broadcast notification from other tab or client', e),
                      await this._notifyAllSubscribers(e.data.event, e.data.session, !1)
                  })
              }
              this.initialize()
            }
            _debug(...e) {
              return (
                this.logDebugMessages &&
                  this.logger(
                    `GoTrueClient@${this.instanceID} (${r}) ${new Date().toISOString()}`,
                    ...e
                  ),
                this
              )
            }
            async initialize() {
              return (
                this.initializePromise ||
                  (this.initializePromise = (async () =>
                    await this._acquireLock(-1, async () => await this._initialize()))()),
                await this.initializePromise
              )
            }
            async _initialize() {
              var e
              try {
                const t = (function (e) {
                  const t = {},
                    s = new URL(e)
                  if (s.hash && '#' === s.hash[0])
                    try {
                      new URLSearchParams(s.hash.substring(1)).forEach((e, s) => {
                        t[s] = e
                      })
                    } catch (e) {}
                  return (
                    s.searchParams.forEach((e, s) => {
                      t[s] = e
                    }),
                    t
                  )
                })(window.location.href)
                let s = 'none'
                if (
                  (this._isImplicitGrantCallback(t)
                    ? (s = 'implicit')
                    : (await this._isPKCECallback(t)) && (s = 'pkce'),
                  a() && this.detectSessionInUrl && 'none' !== s)
                ) {
                  const { data: r, error: i } = await this._getSessionFromURL(t, s)
                  if (i) {
                    if (
                      (this._debug('#_initialize()', 'error detecting session from URL', i), x(i))
                    ) {
                      const t = null === (e = i.details) || void 0 === e ? void 0 : e.code
                      if (
                        'identity_already_exists' === t ||
                        'identity_not_found' === t ||
                        'single_identity_not_deletable' === t
                      )
                        return { error: i }
                    }
                    return await this._removeSession(), { error: i }
                  }
                  const { session: n, redirectType: o } = r
                  return (
                    this._debug('#_initialize()', 'detected session in URL', n, 'redirect type', o),
                    await this._saveSession(n),
                    setTimeout(async () => {
                      'recovery' === o
                        ? await this._notifyAllSubscribers('PASSWORD_RECOVERY', n)
                        : await this._notifyAllSubscribers('SIGNED_IN', n)
                    }, 0),
                    { error: null }
                  )
                }
                return await this._recoverAndRefresh(), { error: null }
              } catch (e) {
                return b(e)
                  ? { error: e }
                  : { error: new S('Unexpected error during initialization', e) }
              } finally {
                await this._handleVisibilityChange(), this._debug('#_initialize()', 'end')
              }
            }
            async signInAnonymously(e) {
              var t, s, r
              try {
                const i = await M(this.fetch, 'POST', `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                      data:
                        null !==
                          (s =
                            null === (t = null == e ? void 0 : e.options) || void 0 === t
                              ? void 0
                              : t.data) && void 0 !== s
                          ? s
                          : {},
                      gotrue_meta_security: {
                        captcha_token:
                          null === (r = null == e ? void 0 : e.options) || void 0 === r
                            ? void 0
                            : r.captchaToken,
                      },
                    },
                    xform: B,
                  }),
                  { data: n, error: o } = i
                if (o || !n) return { data: { user: null, session: null }, error: o }
                const a = n.session,
                  c = n.user
                return (
                  n.session &&
                    (await this._saveSession(n.session),
                    await this._notifyAllSubscribers('SIGNED_IN', a)),
                  { data: { user: c, session: a }, error: null }
                )
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async signUp(e) {
              var t, s, r
              try {
                let i
                if ('email' in e) {
                  const { email: s, password: r, options: n } = e
                  let o = null,
                    a = null
                  'pkce' === this.flowType && ([o, a] = await m(this.storage, this.storageKey)),
                    (i = await M(this.fetch, 'POST', `${this.url}/signup`, {
                      headers: this.headers,
                      redirectTo: null == n ? void 0 : n.emailRedirectTo,
                      body: {
                        email: s,
                        password: r,
                        data: null !== (t = null == n ? void 0 : n.data) && void 0 !== t ? t : {},
                        gotrue_meta_security: {
                          captcha_token: null == n ? void 0 : n.captchaToken,
                        },
                        code_challenge: o,
                        code_challenge_method: a,
                      },
                      xform: B,
                    }))
                } else {
                  if (!('phone' in e))
                    throw new A('You must provide either an email or phone number and a password')
                  {
                    const { phone: t, password: n, options: o } = e
                    i = await M(this.fetch, 'POST', `${this.url}/signup`, {
                      headers: this.headers,
                      body: {
                        phone: t,
                        password: n,
                        data: null !== (s = null == o ? void 0 : o.data) && void 0 !== s ? s : {},
                        channel:
                          null !== (r = null == o ? void 0 : o.channel) && void 0 !== r ? r : 'sms',
                        gotrue_meta_security: {
                          captcha_token: null == o ? void 0 : o.captchaToken,
                        },
                      },
                      xform: B,
                    })
                  }
                }
                const { data: n, error: o } = i
                if (o || !n) return { data: { user: null, session: null }, error: o }
                const a = n.session,
                  c = n.user
                return (
                  n.session &&
                    (await this._saveSession(n.session),
                    await this._notifyAllSubscribers('SIGNED_IN', a)),
                  { data: { user: c, session: a }, error: null }
                )
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async signInWithPassword(e) {
              try {
                let t
                if ('email' in e) {
                  const { email: s, password: r, options: i } = e
                  t = await M(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                      email: s,
                      password: r,
                      gotrue_meta_security: { captcha_token: null == i ? void 0 : i.captchaToken },
                    },
                    xform: q,
                  })
                } else {
                  if (!('phone' in e))
                    throw new A('You must provide either an email or phone number and a password')
                  {
                    const { phone: s, password: r, options: i } = e
                    t = await M(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
                      headers: this.headers,
                      body: {
                        phone: s,
                        password: r,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                      xform: q,
                    })
                  }
                }
                const { data: s, error: r } = t
                return r
                  ? { data: { user: null, session: null }, error: r }
                  : s && s.session && s.user
                  ? (s.session &&
                      (await this._saveSession(s.session),
                      await this._notifyAllSubscribers('SIGNED_IN', s.session)),
                    {
                      data: Object.assign(
                        { user: s.user, session: s.session },
                        s.weak_password ? { weakPassword: s.weak_password } : null
                      ),
                      error: r,
                    })
                  : { data: { user: null, session: null }, error: new P() }
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async signInWithOAuth(e) {
              var t, s, r, i
              return await this._handleProviderSignIn(e.provider, {
                redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                scopes: null === (s = e.options) || void 0 === s ? void 0 : s.scopes,
                queryParams: null === (r = e.options) || void 0 === r ? void 0 : r.queryParams,
                skipBrowserRedirect:
                  null === (i = e.options) || void 0 === i ? void 0 : i.skipBrowserRedirect,
              })
            }
            async exchangeCodeForSession(e) {
              return (
                await this.initializePromise,
                this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
              )
            }
            async _exchangeCodeForSession(e) {
              const t = await f(this.storage, `${this.storageKey}-code-verifier`),
                [s, r] = (null != t ? t : '').split('/')
              try {
                const { data: t, error: i } = await M(
                  this.fetch,
                  'POST',
                  `${this.url}/token?grant_type=pkce`,
                  { headers: this.headers, body: { auth_code: e, code_verifier: s }, xform: B }
                )
                if ((await p(this.storage, `${this.storageKey}-code-verifier`), i)) throw i
                return t && t.session && t.user
                  ? (t.session &&
                      (await this._saveSession(t.session),
                      await this._notifyAllSubscribers('SIGNED_IN', t.session)),
                    {
                      data: Object.assign(Object.assign({}, t), {
                        redirectType: null != r ? r : null,
                      }),
                      error: i,
                    })
                  : { data: { user: null, session: null, redirectType: null }, error: new P() }
              } catch (e) {
                if (b(e))
                  return { data: { user: null, session: null, redirectType: null }, error: e }
                throw e
              }
            }
            async signInWithIdToken(e) {
              try {
                const { options: t, provider: s, token: r, access_token: i, nonce: n } = e,
                  o = await M(this.fetch, 'POST', `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    body: {
                      provider: s,
                      id_token: r,
                      access_token: i,
                      nonce: n,
                      gotrue_meta_security: { captcha_token: null == t ? void 0 : t.captchaToken },
                    },
                    xform: B,
                  }),
                  { data: a, error: c } = o
                return c
                  ? { data: { user: null, session: null }, error: c }
                  : a && a.session && a.user
                  ? (a.session &&
                      (await this._saveSession(a.session),
                      await this._notifyAllSubscribers('SIGNED_IN', a.session)),
                    { data: a, error: c })
                  : { data: { user: null, session: null }, error: new P() }
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async signInWithOtp(e) {
              var t, s, r, i, n
              try {
                if ('email' in e) {
                  const { email: r, options: i } = e
                  let n = null,
                    o = null
                  'pkce' === this.flowType && ([n, o] = await m(this.storage, this.storageKey))
                  const { error: a } = await M(this.fetch, 'POST', `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                      email: r,
                      data: null !== (t = null == i ? void 0 : i.data) && void 0 !== t ? t : {},
                      create_user:
                        null === (s = null == i ? void 0 : i.shouldCreateUser) || void 0 === s || s,
                      gotrue_meta_security: { captcha_token: null == i ? void 0 : i.captchaToken },
                      code_challenge: n,
                      code_challenge_method: o,
                    },
                    redirectTo: null == i ? void 0 : i.emailRedirectTo,
                  })
                  return { data: { user: null, session: null }, error: a }
                }
                if ('phone' in e) {
                  const { phone: t, options: s } = e,
                    { data: o, error: a } = await M(this.fetch, 'POST', `${this.url}/otp`, {
                      headers: this.headers,
                      body: {
                        phone: t,
                        data: null !== (r = null == s ? void 0 : s.data) && void 0 !== r ? r : {},
                        create_user:
                          null === (i = null == s ? void 0 : s.shouldCreateUser) ||
                          void 0 === i ||
                          i,
                        gotrue_meta_security: {
                          captcha_token: null == s ? void 0 : s.captchaToken,
                        },
                        channel:
                          null !== (n = null == s ? void 0 : s.channel) && void 0 !== n ? n : 'sms',
                      },
                    })
                  return {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == o ? void 0 : o.message_id,
                    },
                    error: a,
                  }
                }
                throw new A('You must provide either an email or phone number.')
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async verifyOtp(e) {
              var t, s
              try {
                let r, i
                'options' in e &&
                  ((r = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo),
                  (i = null === (s = e.options) || void 0 === s ? void 0 : s.captchaToken))
                const { data: n, error: o } = await M(this.fetch, 'POST', `${this.url}/verify`, {
                  headers: this.headers,
                  body: Object.assign(Object.assign({}, e), {
                    gotrue_meta_security: { captcha_token: i },
                  }),
                  redirectTo: r,
                  xform: B,
                })
                if (o) throw o
                if (!n) throw new Error('An error occurred on token verification.')
                const a = n.session,
                  c = n.user
                return (
                  (null == a ? void 0 : a.access_token) &&
                    (await this._saveSession(a),
                    await this._notifyAllSubscribers(
                      'recovery' == e.type ? 'PASSWORD_RECOVERY' : 'SIGNED_IN',
                      a
                    )),
                  { data: { user: c, session: a }, error: null }
                )
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async signInWithSSO(e) {
              var t, s, r
              try {
                let i = null,
                  n = null
                return (
                  'pkce' === this.flowType && ([i, n] = await m(this.storage, this.storageKey)),
                  await M(this.fetch, 'POST', `${this.url}/sso`, {
                    body: Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              'providerId' in e ? { provider_id: e.providerId } : null
                            ),
                            'domain' in e ? { domain: e.domain } : null
                          ),
                          {
                            redirect_to:
                              null !==
                                (s =
                                  null === (t = e.options) || void 0 === t
                                    ? void 0
                                    : t.redirectTo) && void 0 !== s
                                ? s
                                : void 0,
                          }
                        ),
                        (
                          null === (r = null == e ? void 0 : e.options) || void 0 === r
                            ? void 0
                            : r.captchaToken
                        )
                          ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } }
                          : null
                      ),
                      { skip_http_redirect: !0, code_challenge: i, code_challenge_method: n }
                    ),
                    headers: this.headers,
                    xform: z,
                  })
                )
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async reauthenticate() {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._reauthenticate())
              )
            }
            async _reauthenticate() {
              try {
                return await this._useSession(async (e) => {
                  const {
                    data: { session: t },
                    error: s,
                  } = e
                  if (s) throw s
                  if (!t) throw new O()
                  const { error: r } = await M(this.fetch, 'GET', `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: t.access_token,
                  })
                  return { data: { user: null, session: null }, error: r }
                })
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async resend(e) {
              try {
                const t = `${this.url}/resend`
                if ('email' in e) {
                  const { email: s, type: r, options: i } = e,
                    { error: n } = await M(this.fetch, 'POST', t, {
                      headers: this.headers,
                      body: {
                        email: s,
                        type: r,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                      redirectTo: null == i ? void 0 : i.emailRedirectTo,
                    })
                  return { data: { user: null, session: null }, error: n }
                }
                if ('phone' in e) {
                  const { phone: s, type: r, options: i } = e,
                    { data: n, error: o } = await M(this.fetch, 'POST', t, {
                      headers: this.headers,
                      body: {
                        phone: s,
                        type: r,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                    })
                  return {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == n ? void 0 : n.message_id,
                    },
                    error: o,
                  }
                }
                throw new A('You must provide either an email or phone number and a type')
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async getSession() {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => this._useSession(async (e) => e))
              )
            }
            async _acquireLock(e, t) {
              this._debug('#_acquireLock', 'begin', e)
              try {
                if (this.lockAcquired) {
                  const e = this.pendingInLock.length
                      ? this.pendingInLock[this.pendingInLock.length - 1]
                      : Promise.resolve(),
                    s = (async () => (await e, await t()))()
                  return (
                    this.pendingInLock.push(
                      (async () => {
                        try {
                          await s
                        } catch (e) {}
                      })()
                    ),
                    s
                  )
                }
                return await this.lock(`lock:${this.storageKey}`, e, async () => {
                  this._debug('#_acquireLock', 'lock acquired for storage key', this.storageKey)
                  try {
                    this.lockAcquired = !0
                    const e = t()
                    for (
                      this.pendingInLock.push(
                        (async () => {
                          try {
                            await e
                          } catch (e) {}
                        })()
                      ),
                        await e;
                      this.pendingInLock.length;

                    ) {
                      const e = [...this.pendingInLock]
                      await Promise.all(e), this.pendingInLock.splice(0, e.length)
                    }
                    return await e
                  } finally {
                    this._debug('#_acquireLock', 'lock released for storage key', this.storageKey),
                      (this.lockAcquired = !1)
                  }
                })
              } finally {
                this._debug('#_acquireLock', 'end')
              }
            }
            async _useSession(e) {
              this._debug('#_useSession', 'begin')
              try {
                const t = await this.__loadSession()
                return await e(t)
              } finally {
                this._debug('#_useSession', 'end')
              }
            }
            async __loadSession() {
              this._debug('#__loadSession()', 'begin'),
                this.lockAcquired ||
                  this._debug(
                    '#__loadSession()',
                    'used outside of an acquired lock!',
                    new Error().stack
                  )
              try {
                let e = null
                const t = await f(this.storage, this.storageKey)
                if (
                  (this._debug('#getSession()', 'session from storage', t),
                  null !== t &&
                    (this._isValidSession(t)
                      ? (e = t)
                      : (this._debug('#getSession()', 'session from storage is not valid'),
                        await this._removeSession())),
                  !e)
                )
                  return { data: { session: null }, error: null }
                const s = !!e.expires_at && e.expires_at <= Date.now() / 1e3
                if (
                  (this._debug(
                    '#__loadSession()',
                    `session has${s ? '' : ' not'} expired`,
                    'expires_at',
                    e.expires_at
                  ),
                  !s)
                ) {
                  if (this.storage.isServer) {
                    let t = this.suppressGetSessionWarning
                    e = new Proxy(e, {
                      get: (e, s, r) => (
                        t ||
                          'user' !== s ||
                          (console.warn(
                            'Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.'
                          ),
                          (t = !0),
                          (this.suppressGetSessionWarning = !0)),
                        Reflect.get(e, s, r)
                      ),
                    })
                  }
                  return { data: { session: e }, error: null }
                }
                const { session: r, error: i } = await this._callRefreshToken(e.refresh_token)
                return i
                  ? { data: { session: null }, error: i }
                  : { data: { session: r }, error: null }
              } finally {
                this._debug('#__loadSession()', 'end')
              }
            }
            async getUser(e) {
              return e
                ? await this._getUser(e)
                : (await this.initializePromise,
                  await this._acquireLock(-1, async () => await this._getUser()))
            }
            async _getUser(e) {
              try {
                return e
                  ? await M(this.fetch, 'GET', `${this.url}/user`, {
                      headers: this.headers,
                      jwt: e,
                      xform: J,
                    })
                  : await this._useSession(async (e) => {
                      var t, s, r
                      const { data: i, error: n } = e
                      if (n) throw n
                      return (null === (t = i.session) || void 0 === t ? void 0 : t.access_token) ||
                        this.hasCustomAuthorizationHeader
                        ? await M(this.fetch, 'GET', `${this.url}/user`, {
                            headers: this.headers,
                            jwt:
                              null !==
                                (r =
                                  null === (s = i.session) || void 0 === s
                                    ? void 0
                                    : s.access_token) && void 0 !== r
                                ? r
                                : void 0,
                            xform: J,
                          })
                        : { data: { user: null }, error: new O() }
                    })
              } catch (e) {
                if (b(e))
                  return (
                    j(e) &&
                      (await this._removeSession(),
                      await p(this.storage, `${this.storageKey}-code-verifier`)),
                    { data: { user: null }, error: e }
                  )
                throw e
              }
            }
            async updateUser(e, t = {}) {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._updateUser(e, t))
              )
            }
            async _updateUser(e, t = {}) {
              try {
                return await this._useSession(async (s) => {
                  const { data: r, error: i } = s
                  if (i) throw i
                  if (!r.session) throw new O()
                  const n = r.session
                  let o = null,
                    a = null
                  'pkce' === this.flowType &&
                    null != e.email &&
                    ([o, a] = await m(this.storage, this.storageKey))
                  const { data: c, error: l } = await M(this.fetch, 'PUT', `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: null == t ? void 0 : t.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), {
                      code_challenge: o,
                      code_challenge_method: a,
                    }),
                    jwt: n.access_token,
                    xform: J,
                  })
                  if (l) throw l
                  return (
                    (n.user = c.user),
                    await this._saveSession(n),
                    await this._notifyAllSubscribers('USER_UPDATED', n),
                    { data: { user: n.user }, error: null }
                  )
                })
              } catch (e) {
                if (b(e)) return { data: { user: null }, error: e }
                throw e
              }
            }
            _decodeJWT(e) {
              return v(e)
            }
            async setSession(e) {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._setSession(e))
              )
            }
            async _setSession(e) {
              try {
                if (!e.access_token || !e.refresh_token) throw new O()
                const t = Date.now() / 1e3
                let s = t,
                  r = !0,
                  i = null
                const n = v(e.access_token)
                if ((n.exp && ((s = n.exp), (r = s <= t)), r)) {
                  const { session: t, error: s } = await this._callRefreshToken(e.refresh_token)
                  if (s) return { data: { user: null, session: null }, error: s }
                  if (!t) return { data: { user: null, session: null }, error: null }
                  i = t
                } else {
                  const { data: r, error: n } = await this._getUser(e.access_token)
                  if (n) throw n
                  ;(i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: r.user,
                    token_type: 'bearer',
                    expires_in: s - t,
                    expires_at: s,
                  }),
                    await this._saveSession(i),
                    await this._notifyAllSubscribers('SIGNED_IN', i)
                }
                return { data: { user: i.user, session: i }, error: null }
              } catch (e) {
                if (b(e)) return { data: { session: null, user: null }, error: e }
                throw e
              }
            }
            async refreshSession(e) {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._refreshSession(e))
              )
            }
            async _refreshSession(e) {
              try {
                return await this._useSession(async (t) => {
                  var s
                  if (!e) {
                    const { data: r, error: i } = t
                    if (i) throw i
                    e = null !== (s = r.session) && void 0 !== s ? s : void 0
                  }
                  if (!(null == e ? void 0 : e.refresh_token)) throw new O()
                  const { session: r, error: i } = await this._callRefreshToken(e.refresh_token)
                  return i
                    ? { data: { user: null, session: null }, error: i }
                    : r
                    ? { data: { user: r.user, session: r }, error: null }
                    : { data: { user: null, session: null }, error: null }
                })
              } catch (e) {
                if (b(e)) return { data: { user: null, session: null }, error: e }
                throw e
              }
            }
            async _getSessionFromURL(e, t) {
              try {
                if (!a()) throw new $('No browser detected.')
                if (e.error || e.error_description || e.error_code)
                  throw new $(
                    e.error_description || 'Error in URL with unspecified error_description',
                    {
                      error: e.error || 'unspecified_error',
                      code: e.error_code || 'unspecified_code',
                    }
                  )
                switch (t) {
                  case 'implicit':
                    if ('pkce' === this.flowType) throw new R('Not a valid PKCE flow url.')
                    break
                  case 'pkce':
                    if ('implicit' === this.flowType)
                      throw new $('Not a valid implicit grant flow url.')
                }
                if ('pkce' === t) {
                  if ((this._debug('#_initialize()', 'begin', 'is PKCE flow', !0), !e.code))
                    throw new R('No code detected.')
                  const { data: t, error: s } = await this._exchangeCodeForSession(e.code)
                  if (s) throw s
                  const r = new URL(window.location.href)
                  return (
                    r.searchParams.delete('code'),
                    window.history.replaceState(window.history.state, '', r.toString()),
                    { data: { session: t.session, redirectType: null }, error: null }
                  )
                }
                const {
                  provider_token: s,
                  provider_refresh_token: r,
                  access_token: i,
                  refresh_token: n,
                  expires_in: o,
                  expires_at: c,
                  token_type: l,
                } = e
                if (!(i && o && n && l)) throw new $('No session defined in URL')
                const h = Math.round(Date.now() / 1e3),
                  u = parseInt(o)
                let d = h + u
                c && (d = parseInt(c))
                const f = d - h
                1e3 * f <= te &&
                  console.warn(
                    `@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`
                  )
                const p = d - u
                h - p >= 120
                  ? console.warn(
                      '@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale',
                      p,
                      d,
                      h
                    )
                  : h - p < 0 &&
                    console.warn(
                      '@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew',
                      p,
                      d,
                      h
                    )
                const { data: g, error: v } = await this._getUser(i)
                if (v) throw v
                const y = {
                  provider_token: s,
                  provider_refresh_token: r,
                  access_token: i,
                  expires_in: u,
                  expires_at: d,
                  refresh_token: n,
                  token_type: l,
                  user: g.user,
                }
                return (
                  (window.location.hash = ''),
                  this._debug('#_getSessionFromURL()', 'clearing window.location.hash'),
                  { data: { session: y, redirectType: e.type }, error: null }
                )
              } catch (e) {
                if (b(e)) return { data: { session: null, redirectType: null }, error: e }
                throw e
              }
            }
            _isImplicitGrantCallback(e) {
              return Boolean(e.access_token || e.error_description)
            }
            async _isPKCECallback(e) {
              const t = await f(this.storage, `${this.storageKey}-code-verifier`)
              return !(!e.code || !t)
            }
            async signOut(e = { scope: 'global' }) {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._signOut(e))
              )
            }
            async _signOut({ scope: e } = { scope: 'global' }) {
              return await this._useSession(async (t) => {
                var s
                const { data: r, error: i } = t
                if (i) return { error: i }
                const n = null === (s = r.session) || void 0 === s ? void 0 : s.access_token
                if (n) {
                  const { error: t } = await this.admin.signOut(n, e)
                  if (t && (!T(t) || (404 !== t.status && 401 !== t.status && 403 !== t.status)))
                    return { error: t }
                }
                return (
                  'others' !== e &&
                    (await this._removeSession(),
                    await p(this.storage, `${this.storageKey}-code-verifier`)),
                  { error: null }
                )
              })
            }
            onAuthStateChange(e) {
              const t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                  const t = (16 * Math.random()) | 0
                  return ('x' == e ? t : (3 & t) | 8).toString(16)
                }),
                s = {
                  id: t,
                  callback: e,
                  unsubscribe: () => {
                    this._debug('#unsubscribe()', 'state change callback with id removed', t),
                      this.stateChangeEmitters.delete(t)
                  },
                }
              return (
                this._debug('#onAuthStateChange()', 'registered callback with id', t),
                this.stateChangeEmitters.set(t, s),
                (async () => {
                  await this.initializePromise,
                    await this._acquireLock(-1, async () => {
                      this._emitInitialSession(t)
                    })
                })(),
                { data: { subscription: s } }
              )
            }
            async _emitInitialSession(e) {
              return await this._useSession(async (t) => {
                var s, r
                try {
                  const {
                    data: { session: r },
                    error: i,
                  } = t
                  if (i) throw i
                  await (null === (s = this.stateChangeEmitters.get(e)) || void 0 === s
                    ? void 0
                    : s.callback('INITIAL_SESSION', r)),
                    this._debug('INITIAL_SESSION', 'callback id', e, 'session', r)
                } catch (t) {
                  await (null === (r = this.stateChangeEmitters.get(e)) || void 0 === r
                    ? void 0
                    : r.callback('INITIAL_SESSION', null)),
                    this._debug('INITIAL_SESSION', 'callback id', e, 'error', t),
                    console.error(t)
                }
              })
            }
            async resetPasswordForEmail(e, t = {}) {
              let s = null,
                r = null
              'pkce' === this.flowType && ([s, r] = await m(this.storage, this.storageKey, !0))
              try {
                return await M(this.fetch, 'POST', `${this.url}/recover`, {
                  body: {
                    email: e,
                    code_challenge: s,
                    code_challenge_method: r,
                    gotrue_meta_security: { captcha_token: t.captchaToken },
                  },
                  headers: this.headers,
                  redirectTo: t.redirectTo,
                })
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async getUserIdentities() {
              var e
              try {
                const { data: t, error: s } = await this.getUser()
                if (s) throw s
                return {
                  data: { identities: null !== (e = t.user.identities) && void 0 !== e ? e : [] },
                  error: null,
                }
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async linkIdentity(e) {
              var t
              try {
                const { data: s, error: r } = await this._useSession(async (t) => {
                  var s, r, i, n, o
                  const { data: a, error: c } = t
                  if (c) throw c
                  const l = await this._getUrlForProvider(
                    `${this.url}/user/identities/authorize`,
                    e.provider,
                    {
                      redirectTo: null === (s = e.options) || void 0 === s ? void 0 : s.redirectTo,
                      scopes: null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                      queryParams:
                        null === (i = e.options) || void 0 === i ? void 0 : i.queryParams,
                      skipBrowserRedirect: !0,
                    }
                  )
                  return await M(this.fetch, 'GET', l, {
                    headers: this.headers,
                    jwt:
                      null !==
                        (o = null === (n = a.session) || void 0 === n ? void 0 : n.access_token) &&
                      void 0 !== o
                        ? o
                        : void 0,
                  })
                })
                if (r) throw r
                return (
                  a() &&
                    !(null === (t = e.options) || void 0 === t ? void 0 : t.skipBrowserRedirect) &&
                    window.location.assign(null == s ? void 0 : s.url),
                  { data: { provider: e.provider, url: null == s ? void 0 : s.url }, error: null }
                )
              } catch (t) {
                if (b(t)) return { data: { provider: e.provider, url: null }, error: t }
                throw t
              }
            }
            async unlinkIdentity(e) {
              try {
                return await this._useSession(async (t) => {
                  var s, r
                  const { data: i, error: n } = t
                  if (n) throw n
                  return await M(
                    this.fetch,
                    'DELETE',
                    `${this.url}/user/identities/${e.identity_id}`,
                    {
                      headers: this.headers,
                      jwt:
                        null !==
                          (r =
                            null === (s = i.session) || void 0 === s ? void 0 : s.access_token) &&
                        void 0 !== r
                          ? r
                          : void 0,
                    }
                  )
                })
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async _refreshAccessToken(e) {
              const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`
              this._debug(t, 'begin')
              try {
                const i = Date.now()
                return await ((s = async (s) => (
                  s > 0 &&
                    (await (async function (e) {
                      return await new Promise((t) => {
                        setTimeout(() => t(null), e)
                      })
                    })(200 * Math.pow(2, s - 1))),
                  this._debug(t, 'refreshing attempt', s),
                  await M(this.fetch, 'POST', `${this.url}/token?grant_type=refresh_token`, {
                    body: { refresh_token: e },
                    headers: this.headers,
                    xform: B,
                  })
                )),
                (r = (e, t) => {
                  const s = 200 * Math.pow(2, e)
                  return t && I(t) && Date.now() + s - i < te
                }),
                new Promise((e, t) => {
                  ;(async () => {
                    for (let i = 0; i < 1 / 0; i++)
                      try {
                        const t = await s(i)
                        if (!r(i, null)) return void e(t)
                      } catch (e) {
                        if (!r(i, e)) return void t(e)
                      }
                  })()
                }))
              } catch (e) {
                if ((this._debug(t, 'error', e), b(e)))
                  return { data: { session: null, user: null }, error: e }
                throw e
              } finally {
                this._debug(t, 'end')
              }
              var s, r
            }
            _isValidSession(e) {
              return (
                'object' == typeof e &&
                null !== e &&
                'access_token' in e &&
                'refresh_token' in e &&
                'expires_at' in e
              )
            }
            async _handleProviderSignIn(e, t) {
              const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
                redirectTo: t.redirectTo,
                scopes: t.scopes,
                queryParams: t.queryParams,
              })
              return (
                this._debug('#_handleProviderSignIn()', 'provider', e, 'options', t, 'url', s),
                a() && !t.skipBrowserRedirect && window.location.assign(s),
                { data: { provider: e, url: s }, error: null }
              )
            }
            async _recoverAndRefresh() {
              var e
              const t = '#_recoverAndRefresh()'
              this._debug(t, 'begin')
              try {
                const s = await f(this.storage, this.storageKey)
                if ((this._debug(t, 'session from storage', s), !this._isValidSession(s)))
                  return (
                    this._debug(t, 'session is not valid'),
                    void (null !== s && (await this._removeSession()))
                  )
                const r = Math.round(Date.now() / 1e3),
                  i = (null !== (e = s.expires_at) && void 0 !== e ? e : 1 / 0) < r + 10
                if (
                  (this._debug(t, `session has${i ? '' : ' not'} expired with margin of 10s`), i)
                ) {
                  if (this.autoRefreshToken && s.refresh_token) {
                    const { error: e } = await this._callRefreshToken(s.refresh_token)
                    e &&
                      (console.error(e),
                      I(e) ||
                        (this._debug(
                          t,
                          'refresh failed with a non-retryable error, removing the session',
                          e
                        ),
                        await this._removeSession()))
                  }
                } else await this._notifyAllSubscribers('SIGNED_IN', s)
              } catch (e) {
                return this._debug(t, 'error', e), void console.error(e)
              } finally {
                this._debug(t, 'end')
              }
            }
            async _callRefreshToken(e) {
              var t, s
              if (!e) throw new O()
              if (this.refreshingDeferred) return this.refreshingDeferred.promise
              const r = `#_callRefreshToken(${e.substring(0, 5)}...)`
              this._debug(r, 'begin')
              try {
                this.refreshingDeferred = new g()
                const { data: t, error: s } = await this._refreshAccessToken(e)
                if (s) throw s
                if (!t.session) throw new O()
                await this._saveSession(t.session),
                  await this._notifyAllSubscribers('TOKEN_REFRESHED', t.session)
                const r = { session: t.session, error: null }
                return this.refreshingDeferred.resolve(r), r
              } catch (e) {
                if ((this._debug(r, 'error', e), b(e))) {
                  const s = { session: null, error: e }
                  return (
                    I(e) || (await this._removeSession()),
                    null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(s),
                    s
                  )
                }
                throw (null === (s = this.refreshingDeferred) || void 0 === s || s.reject(e), e)
              } finally {
                ;(this.refreshingDeferred = null), this._debug(r, 'end')
              }
            }
            async _notifyAllSubscribers(e, t, s = !0) {
              const r = `#_notifyAllSubscribers(${e})`
              this._debug(r, 'begin', t, `broadcast = ${s}`)
              try {
                this.broadcastChannel &&
                  s &&
                  this.broadcastChannel.postMessage({ event: e, session: t })
                const r = [],
                  i = Array.from(this.stateChangeEmitters.values()).map(async (s) => {
                    try {
                      await s.callback(e, t)
                    } catch (e) {
                      r.push(e)
                    }
                  })
                if ((await Promise.all(i), r.length > 0)) {
                  for (let e = 0; e < r.length; e += 1) console.error(r[e])
                  throw r[0]
                }
              } finally {
                this._debug(r, 'end')
              }
            }
            async _saveSession(e) {
              this._debug('#_saveSession()', e),
                (this.suppressGetSessionWarning = !0),
                await d(this.storage, this.storageKey, e)
            }
            async _removeSession() {
              this._debug('#_removeSession()'),
                await p(this.storage, this.storageKey),
                await this._notifyAllSubscribers('SIGNED_OUT', null)
            }
            _removeVisibilityChangedCallback() {
              this._debug('#_removeVisibilityChangedCallback()')
              const e = this.visibilityChangedCallback
              this.visibilityChangedCallback = null
              try {
                e &&
                  a() &&
                  (null === window || void 0 === window ? void 0 : window.removeEventListener) &&
                  window.removeEventListener('visibilitychange', e)
              } catch (e) {
                console.error('removing visibilitychange callback failed', e)
              }
            }
            async _startAutoRefresh() {
              await this._stopAutoRefresh(), this._debug('#_startAutoRefresh()')
              const e = setInterval(() => this._autoRefreshTokenTick(), te)
              ;(this.autoRefreshTicker = e),
                e && 'object' == typeof e && 'function' == typeof e.unref
                  ? e.unref()
                  : 'undefined' != typeof Deno &&
                    'function' == typeof Deno.unrefTimer &&
                    Deno.unrefTimer(e),
                setTimeout(async () => {
                  await this.initializePromise, await this._autoRefreshTokenTick()
                }, 0)
            }
            async _stopAutoRefresh() {
              this._debug('#_stopAutoRefresh()')
              const e = this.autoRefreshTicker
              ;(this.autoRefreshTicker = null), e && clearInterval(e)
            }
            async startAutoRefresh() {
              this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
            }
            async stopAutoRefresh() {
              this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
            }
            async _autoRefreshTokenTick() {
              this._debug('#_autoRefreshTokenTick()', 'begin')
              try {
                await this._acquireLock(0, async () => {
                  try {
                    const e = Date.now()
                    try {
                      return await this._useSession(async (t) => {
                        const {
                          data: { session: s },
                        } = t
                        if (!s || !s.refresh_token || !s.expires_at)
                          return void this._debug('#_autoRefreshTokenTick()', 'no session')
                        const r = Math.floor((1e3 * s.expires_at - e) / te)
                        this._debug(
                          '#_autoRefreshTokenTick()',
                          `access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                        ),
                          r <= 3 && (await this._callRefreshToken(s.refresh_token))
                      })
                    } catch (e) {
                      console.error(
                        'Auto refresh tick failed with error. This is likely a transient error.',
                        e
                      )
                    }
                  } finally {
                    this._debug('#_autoRefreshTokenTick()', 'end')
                  }
                })
              } catch (e) {
                if (!(e.isAcquireTimeout || e instanceof Q)) throw e
                this._debug('auto refresh token tick lock not available')
              }
            }
            async _handleVisibilityChange() {
              if (
                (this._debug('#_handleVisibilityChange()'),
                !a() || !(null === window || void 0 === window ? void 0 : window.addEventListener))
              )
                return this.autoRefreshToken && this.startAutoRefresh(), !1
              try {
                ;(this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1)),
                  null === window ||
                    void 0 === window ||
                    window.addEventListener('visibilitychange', this.visibilityChangedCallback),
                  await this._onVisibilityChanged(!0)
              } catch (e) {
                console.error('_handleVisibilityChange', e)
              }
            }
            async _onVisibilityChanged(e) {
              const t = `#_onVisibilityChanged(${e})`
              this._debug(t, 'visibilityState', document.visibilityState),
                'visible' === document.visibilityState
                  ? (this.autoRefreshToken && this._startAutoRefresh(),
                    e ||
                      (await this.initializePromise,
                      await this._acquireLock(-1, async () => {
                        'visible' === document.visibilityState
                          ? await this._recoverAndRefresh()
                          : this._debug(
                              t,
                              'acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting'
                            )
                      })))
                  : 'hidden' === document.visibilityState &&
                    this.autoRefreshToken &&
                    this._stopAutoRefresh()
            }
            async _getUrlForProvider(e, t, s) {
              const r = [`provider=${encodeURIComponent(t)}`]
              if (
                ((null == s ? void 0 : s.redirectTo) &&
                  r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
                (null == s ? void 0 : s.scopes) && r.push(`scopes=${encodeURIComponent(s.scopes)}`),
                'pkce' === this.flowType)
              ) {
                const [e, t] = await m(this.storage, this.storageKey),
                  s = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(e)}`,
                    code_challenge_method: `${encodeURIComponent(t)}`,
                  })
                r.push(s.toString())
              }
              if (null == s ? void 0 : s.queryParams) {
                const e = new URLSearchParams(s.queryParams)
                r.push(e.toString())
              }
              return (
                (null == s ? void 0 : s.skipBrowserRedirect) &&
                  r.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
                `${e}?${r.join('&')}`
              )
            }
            async _unenroll(e) {
              try {
                return await this._useSession(async (t) => {
                  var s
                  const { data: r, error: i } = t
                  return i
                    ? { data: null, error: i }
                    : await M(this.fetch, 'DELETE', `${this.url}/factors/${e.factorId}`, {
                        headers: this.headers,
                        jwt:
                          null === (s = null == r ? void 0 : r.session) || void 0 === s
                            ? void 0
                            : s.access_token,
                      })
                })
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async _enroll(e) {
              try {
                return await this._useSession(async (t) => {
                  var s, r
                  const { data: i, error: n } = t
                  if (n) return { data: null, error: n }
                  const o = Object.assign(
                      { friendly_name: e.friendlyName, factor_type: e.factorType },
                      'phone' === e.factorType ? { phone: e.phone } : { issuer: e.issuer }
                    ),
                    { data: a, error: c } = await M(this.fetch, 'POST', `${this.url}/factors`, {
                      body: o,
                      headers: this.headers,
                      jwt:
                        null === (s = null == i ? void 0 : i.session) || void 0 === s
                          ? void 0
                          : s.access_token,
                    })
                  return c
                    ? { data: null, error: c }
                    : ('totp' === e.factorType &&
                        (null === (r = null == a ? void 0 : a.totp) || void 0 === r
                          ? void 0
                          : r.qr_code) &&
                        (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                      { data: a, error: null })
                })
              } catch (e) {
                if (b(e)) return { data: null, error: e }
                throw e
              }
            }
            async _verify(e) {
              return this._acquireLock(-1, async () => {
                try {
                  return await this._useSession(async (t) => {
                    var s
                    const { data: r, error: i } = t
                    if (i) return { data: null, error: i }
                    const { data: n, error: o } = await M(
                      this.fetch,
                      'POST',
                      `${this.url}/factors/${e.factorId}/verify`,
                      {
                        body: { code: e.code, challenge_id: e.challengeId },
                        headers: this.headers,
                        jwt:
                          null === (s = null == r ? void 0 : r.session) || void 0 === s
                            ? void 0
                            : s.access_token,
                      }
                    )
                    return o
                      ? { data: null, error: o }
                      : (await this._saveSession(
                          Object.assign(
                            { expires_at: Math.round(Date.now() / 1e3) + n.expires_in },
                            n
                          )
                        ),
                        await this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', n),
                        { data: n, error: o })
                  })
                } catch (e) {
                  if (b(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            async _challenge(e) {
              return this._acquireLock(-1, async () => {
                try {
                  return await this._useSession(async (t) => {
                    var s
                    const { data: r, error: i } = t
                    return i
                      ? { data: null, error: i }
                      : await M(this.fetch, 'POST', `${this.url}/factors/${e.factorId}/challenge`, {
                          body: { channel: e.channel },
                          headers: this.headers,
                          jwt:
                            null === (s = null == r ? void 0 : r.session) || void 0 === s
                              ? void 0
                              : s.access_token,
                        })
                  })
                } catch (e) {
                  if (b(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            async _challengeAndVerify(e) {
              const { data: t, error: s } = await this._challenge({ factorId: e.factorId })
              return s
                ? { data: null, error: s }
                : await this._verify({ factorId: e.factorId, challengeId: t.id, code: e.code })
            }
            async _listFactors() {
              const {
                data: { user: e },
                error: t,
              } = await this.getUser()
              if (t) return { data: null, error: t }
              const s = (null == e ? void 0 : e.factors) || [],
                r = s.filter((e) => 'totp' === e.factor_type && 'verified' === e.status),
                i = s.filter((e) => 'phone' === e.factor_type && 'verified' === e.status)
              return { data: { all: s, totp: r, phone: i }, error: null }
            }
            async _getAuthenticatorAssuranceLevel() {
              return this._acquireLock(
                -1,
                async () =>
                  await this._useSession(async (e) => {
                    var t, s
                    const {
                      data: { session: r },
                      error: i,
                    } = e
                    if (i) return { data: null, error: i }
                    if (!r)
                      return {
                        data: {
                          currentLevel: null,
                          nextLevel: null,
                          currentAuthenticationMethods: [],
                        },
                        error: null,
                      }
                    const n = this._decodeJWT(r.access_token)
                    let o = null
                    n.aal && (o = n.aal)
                    let a = o
                    return (
                      (null !==
                        (s =
                          null === (t = r.user.factors) || void 0 === t
                            ? void 0
                            : t.filter((e) => 'verified' === e.status)) && void 0 !== s
                        ? s
                        : []
                      ).length > 0 && (a = 'aal2'),
                      {
                        data: {
                          currentLevel: o,
                          nextLevel: a,
                          currentAuthenticationMethods: n.amr || [],
                        },
                        error: null,
                      }
                    )
                  })
              )
            }
          }
          re.nextInstanceID = 0
          const ie = K,
            ne = re
        },
        227: (e, t, s) => {
          s.r(t),
            s.d(t, {
              FunctionRegion: () => a,
              FunctionsClient: () => c,
              FunctionsError: () => r,
              FunctionsFetchError: () => i,
              FunctionsHttpError: () => o,
              FunctionsRelayError: () => n,
            })
          class r extends Error {
            constructor(e, t = 'FunctionsError', s) {
              super(e), (this.name = t), (this.context = s)
            }
          }
          class i extends r {
            constructor(e) {
              super('Failed to send a request to the Edge Function', 'FunctionsFetchError', e)
            }
          }
          class n extends r {
            constructor(e) {
              super('Relay Error invoking the Edge Function', 'FunctionsRelayError', e)
            }
          }
          class o extends r {
            constructor(e) {
              super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', e)
            }
          }
          var a
          !(function (e) {
            ;(e.Any = 'any'),
              (e.ApNortheast1 = 'ap-northeast-1'),
              (e.ApNortheast2 = 'ap-northeast-2'),
              (e.ApSouth1 = 'ap-south-1'),
              (e.ApSoutheast1 = 'ap-southeast-1'),
              (e.ApSoutheast2 = 'ap-southeast-2'),
              (e.CaCentral1 = 'ca-central-1'),
              (e.EuCentral1 = 'eu-central-1'),
              (e.EuWest1 = 'eu-west-1'),
              (e.EuWest2 = 'eu-west-2'),
              (e.EuWest3 = 'eu-west-3'),
              (e.SaEast1 = 'sa-east-1'),
              (e.UsEast1 = 'us-east-1'),
              (e.UsWest1 = 'us-west-1'),
              (e.UsWest2 = 'us-west-2')
          })(a || (a = {}))
          class c {
            constructor(e, { headers: t = {}, customFetch: r, region: i = a.Any } = {}) {
              ;(this.url = e),
                (this.headers = t),
                (this.region = i),
                (this.fetch = ((e) => {
                  let t
                  return (
                    (t =
                      e ||
                      ('undefined' == typeof fetch
                        ? (...e) =>
                            Promise.resolve()
                              .then(s.bind(s, 907))
                              .then(({ default: t }) => t(...e))
                        : fetch)),
                    (...e) => t(...e)
                  )
                })(r))
            }
            setAuth(e) {
              this.headers.Authorization = `Bearer ${e}`
            }
            invoke(e, t = {}) {
              var s, r, a, c, l
              return (
                (r = this),
                (a = void 0),
                (l = function* () {
                  try {
                    const { headers: r, method: a, body: c } = t
                    let l,
                      h = {},
                      { region: u } = t
                    u || (u = this.region),
                      u && 'any' !== u && (h['x-region'] = u),
                      c &&
                        ((r && !Object.prototype.hasOwnProperty.call(r, 'Content-Type')) || !r) &&
                        (('undefined' != typeof Blob && c instanceof Blob) ||
                        c instanceof ArrayBuffer
                          ? ((h['Content-Type'] = 'application/octet-stream'), (l = c))
                          : 'string' == typeof c
                          ? ((h['Content-Type'] = 'text/plain'), (l = c))
                          : 'undefined' != typeof FormData && c instanceof FormData
                          ? (l = c)
                          : ((h['Content-Type'] = 'application/json'), (l = JSON.stringify(c))))
                    const d = yield this.fetch(`${this.url}/${e}`, {
                        method: a || 'POST',
                        headers: Object.assign(
                          Object.assign(Object.assign({}, h), this.headers),
                          r
                        ),
                        body: l,
                      }).catch((e) => {
                        throw new i(e)
                      }),
                      f = d.headers.get('x-relay-error')
                    if (f && 'true' === f) throw new n(d)
                    if (!d.ok) throw new o(d)
                    let p,
                      g = (
                        null !== (s = d.headers.get('Content-Type')) && void 0 !== s
                          ? s
                          : 'text/plain'
                      )
                        .split(';')[0]
                        .trim()
                    return (
                      (p =
                        'application/json' === g
                          ? yield d.json()
                          : 'application/octet-stream' === g
                          ? yield d.blob()
                          : 'text/event-stream' === g
                          ? d
                          : 'multipart/form-data' === g
                          ? yield d.formData()
                          : yield d.text()),
                      { data: p, error: null }
                    )
                  } catch (e) {
                    return { data: null, error: e }
                  }
                }),
                new ((c = void 0) || (c = Promise))(function (e, t) {
                  function s(e) {
                    try {
                      n(l.next(e))
                    } catch (e) {
                      t(e)
                    }
                  }
                  function i(e) {
                    try {
                      n(l.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  }
                  function n(t) {
                    var r
                    t.done
                      ? e(t.value)
                      : ((r = t.value),
                        r instanceof c
                          ? r
                          : new c(function (e) {
                              e(r)
                            })).then(s, i)
                  }
                  n((l = l.apply(r, a || [])).next())
                })
              )
            }
          }
        },
        907: (e, t, s) => {
          s.r(t),
            s.d(t, {
              Headers: () => o,
              Request: () => a,
              Response: () => c,
              default: () => n,
              fetch: () => i,
            })
          var r = (function () {
            if ('undefined' != typeof self) return self
            if ('undefined' != typeof window) return window
            if (void 0 !== s.g) return s.g
            throw new Error('unable to locate global object')
          })()
          const i = r.fetch,
            n = r.fetch.bind(r),
            o = r.Headers,
            a = r.Request,
            c = r.Response
        },
        660: function (e, t, s) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const i = r(s(907)),
            n = r(s(818))
          t.default = class {
            constructor(e) {
              ;(this.shouldThrowOnError = !1),
                (this.method = e.method),
                (this.url = e.url),
                (this.headers = e.headers),
                (this.schema = e.schema),
                (this.body = e.body),
                (this.shouldThrowOnError = e.shouldThrowOnError),
                (this.signal = e.signal),
                (this.isMaybeSingle = e.isMaybeSingle),
                e.fetch
                  ? (this.fetch = e.fetch)
                  : 'undefined' == typeof fetch
                  ? (this.fetch = i.default)
                  : (this.fetch = fetch)
            }
            throwOnError() {
              return (this.shouldThrowOnError = !0), this
            }
            setHeader(e, t) {
              return (this.headers = Object.assign({}, this.headers)), (this.headers[e] = t), this
            }
            then(e, t) {
              void 0 === this.schema ||
                (['GET', 'HEAD'].includes(this.method)
                  ? (this.headers['Accept-Profile'] = this.schema)
                  : (this.headers['Content-Profile'] = this.schema)),
                'GET' !== this.method &&
                  'HEAD' !== this.method &&
                  (this.headers['Content-Type'] = 'application/json')
              let s = (0, this.fetch)(this.url.toString(), {
                method: this.method,
                headers: this.headers,
                body: JSON.stringify(this.body),
                signal: this.signal,
              }).then(async (e) => {
                var t, s, r
                let i = null,
                  o = null,
                  a = null,
                  c = e.status,
                  l = e.statusText
                if (e.ok) {
                  if ('HEAD' !== this.method) {
                    const t = await e.text()
                    '' === t ||
                      (o =
                        'text/csv' === this.headers.Accept ||
                        (this.headers.Accept &&
                          this.headers.Accept.includes('application/vnd.pgrst.plan+text'))
                          ? t
                          : JSON.parse(t))
                  }
                  const r =
                      null === (t = this.headers.Prefer) || void 0 === t
                        ? void 0
                        : t.match(/count=(exact|planned|estimated)/),
                    n =
                      null === (s = e.headers.get('content-range')) || void 0 === s
                        ? void 0
                        : s.split('/')
                  r && n && n.length > 1 && (a = parseInt(n[1])),
                    this.isMaybeSingle &&
                      'GET' === this.method &&
                      Array.isArray(o) &&
                      (o.length > 1
                        ? ((i = {
                            code: 'PGRST116',
                            details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned',
                          }),
                          (o = null),
                          (a = null),
                          (c = 406),
                          (l = 'Not Acceptable'))
                        : (o = 1 === o.length ? o[0] : null))
                } else {
                  const t = await e.text()
                  try {
                    ;(i = JSON.parse(t)),
                      Array.isArray(i) &&
                        404 === e.status &&
                        ((o = []), (i = null), (c = 200), (l = 'OK'))
                  } catch (s) {
                    404 === e.status && '' === t
                      ? ((c = 204), (l = 'No Content'))
                      : (i = { message: t })
                  }
                  if (
                    (i &&
                      this.isMaybeSingle &&
                      (null === (r = null == i ? void 0 : i.details) || void 0 === r
                        ? void 0
                        : r.includes('0 rows')) &&
                      ((i = null), (c = 200), (l = 'OK')),
                    i && this.shouldThrowOnError)
                  )
                    throw new n.default(i)
                }
                return { error: i, data: o, count: a, status: c, statusText: l }
              })
              return (
                this.shouldThrowOnError ||
                  (s = s.catch((e) => {
                    var t, s, r
                    return {
                      error: {
                        message: `${
                          null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                            ? t
                            : 'FetchError'
                        }: ${null == e ? void 0 : e.message}`,
                        details: `${
                          null !== (s = null == e ? void 0 : e.stack) && void 0 !== s ? s : ''
                        }`,
                        hint: '',
                        code: `${
                          null !== (r = null == e ? void 0 : e.code) && void 0 !== r ? r : ''
                        }`,
                      },
                      data: null,
                      count: null,
                      status: 0,
                      statusText: '',
                    }
                  })),
                s.then(e, t)
              )
            }
          }
        },
        961: function (e, t, s) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const i = r(s(45)),
            n = r(s(825)),
            o = s(530)
          class a {
            constructor(e, { headers: t = {}, schema: s, fetch: r } = {}) {
              ;(this.url = e),
                (this.headers = Object.assign(Object.assign({}, o.DEFAULT_HEADERS), t)),
                (this.schemaName = s),
                (this.fetch = r)
            }
            from(e) {
              const t = new URL(`${this.url}/${e}`)
              return new i.default(t, {
                headers: Object.assign({}, this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
              })
            }
            schema(e) {
              return new a(this.url, { headers: this.headers, schema: e, fetch: this.fetch })
            }
            rpc(e, t = {}, { head: s = !1, get: r = !1, count: i } = {}) {
              let o
              const a = new URL(`${this.url}/rpc/${e}`)
              let c
              s || r
                ? ((o = s ? 'HEAD' : 'GET'),
                  Object.entries(t)
                    .filter(([e, t]) => void 0 !== t)
                    .map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(',')}}` : `${t}`])
                    .forEach(([e, t]) => {
                      a.searchParams.append(e, t)
                    }))
                : ((o = 'POST'), (c = t))
              const l = Object.assign({}, this.headers)
              return (
                i && (l.Prefer = `count=${i}`),
                new n.default({
                  method: o,
                  url: a,
                  headers: l,
                  schema: this.schemaName,
                  body: c,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              )
            }
          }
          t.default = a
        },
        818: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 })
          class s extends Error {
            constructor(e) {
              super(e.message),
                (this.name = 'PostgrestError'),
                (this.details = e.details),
                (this.hint = e.hint),
                (this.code = e.code)
            }
          }
          t.default = s
        },
        825: function (e, t, s) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const i = r(s(261))
          class n extends i.default {
            eq(e, t) {
              return this.url.searchParams.append(e, `eq.${t}`), this
            }
            neq(e, t) {
              return this.url.searchParams.append(e, `neq.${t}`), this
            }
            gt(e, t) {
              return this.url.searchParams.append(e, `gt.${t}`), this
            }
            gte(e, t) {
              return this.url.searchParams.append(e, `gte.${t}`), this
            }
            lt(e, t) {
              return this.url.searchParams.append(e, `lt.${t}`), this
            }
            lte(e, t) {
              return this.url.searchParams.append(e, `lte.${t}`), this
            }
            like(e, t) {
              return this.url.searchParams.append(e, `like.${t}`), this
            }
            likeAllOf(e, t) {
              return this.url.searchParams.append(e, `like(all).{${t.join(',')}}`), this
            }
            likeAnyOf(e, t) {
              return this.url.searchParams.append(e, `like(any).{${t.join(',')}}`), this
            }
            ilike(e, t) {
              return this.url.searchParams.append(e, `ilike.${t}`), this
            }
            ilikeAllOf(e, t) {
              return this.url.searchParams.append(e, `ilike(all).{${t.join(',')}}`), this
            }
            ilikeAnyOf(e, t) {
              return this.url.searchParams.append(e, `ilike(any).{${t.join(',')}}`), this
            }
            is(e, t) {
              return this.url.searchParams.append(e, `is.${t}`), this
            }
            in(e, t) {
              const s = Array.from(new Set(t))
                .map((e) =>
                  'string' == typeof e && new RegExp('[,()]').test(e) ? `"${e}"` : `${e}`
                )
                .join(',')
              return this.url.searchParams.append(e, `in.(${s})`), this
            }
            contains(e, t) {
              return (
                'string' == typeof t
                  ? this.url.searchParams.append(e, `cs.${t}`)
                  : Array.isArray(t)
                  ? this.url.searchParams.append(e, `cs.{${t.join(',')}}`)
                  : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
                this
              )
            }
            containedBy(e, t) {
              return (
                'string' == typeof t
                  ? this.url.searchParams.append(e, `cd.${t}`)
                  : Array.isArray(t)
                  ? this.url.searchParams.append(e, `cd.{${t.join(',')}}`)
                  : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
                this
              )
            }
            rangeGt(e, t) {
              return this.url.searchParams.append(e, `sr.${t}`), this
            }
            rangeGte(e, t) {
              return this.url.searchParams.append(e, `nxl.${t}`), this
            }
            rangeLt(e, t) {
              return this.url.searchParams.append(e, `sl.${t}`), this
            }
            rangeLte(e, t) {
              return this.url.searchParams.append(e, `nxr.${t}`), this
            }
            rangeAdjacent(e, t) {
              return this.url.searchParams.append(e, `adj.${t}`), this
            }
            overlaps(e, t) {
              return (
                'string' == typeof t
                  ? this.url.searchParams.append(e, `ov.${t}`)
                  : this.url.searchParams.append(e, `ov.{${t.join(',')}}`),
                this
              )
            }
            textSearch(e, t, { config: s, type: r } = {}) {
              let i = ''
              'plain' === r
                ? (i = 'pl')
                : 'phrase' === r
                ? (i = 'ph')
                : 'websearch' === r && (i = 'w')
              const n = void 0 === s ? '' : `(${s})`
              return this.url.searchParams.append(e, `${i}fts${n}.${t}`), this
            }
            match(e) {
              return (
                Object.entries(e).forEach(([e, t]) => {
                  this.url.searchParams.append(e, `eq.${t}`)
                }),
                this
              )
            }
            not(e, t, s) {
              return this.url.searchParams.append(e, `not.${t}.${s}`), this
            }
            or(e, { foreignTable: t, referencedTable: s = t } = {}) {
              const r = s ? `${s}.or` : 'or'
              return this.url.searchParams.append(r, `(${e})`), this
            }
            filter(e, t, s) {
              return this.url.searchParams.append(e, `${t}.${s}`), this
            }
          }
          t.default = n
        },
        45: function (e, t, s) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const i = r(s(825))
          t.default = class {
            constructor(e, { headers: t = {}, schema: s, fetch: r }) {
              ;(this.url = e), (this.headers = t), (this.schema = s), (this.fetch = r)
            }
            select(e, { head: t = !1, count: s } = {}) {
              const r = t ? 'HEAD' : 'GET'
              let n = !1
              const o = (null != e ? e : '*')
                .split('')
                .map((e) => (/\s/.test(e) && !n ? '' : ('"' === e && (n = !n), e)))
                .join('')
              return (
                this.url.searchParams.set('select', o),
                s && (this.headers.Prefer = `count=${s}`),
                new i.default({
                  method: r,
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              )
            }
            insert(e, { count: t, defaultToNull: s = !0 } = {}) {
              const r = []
              if (
                (this.headers.Prefer && r.push(this.headers.Prefer),
                t && r.push(`count=${t}`),
                s || r.push('missing=default'),
                (this.headers.Prefer = r.join(',')),
                Array.isArray(e))
              ) {
                const t = e.reduce((e, t) => e.concat(Object.keys(t)), [])
                if (t.length > 0) {
                  const e = [...new Set(t)].map((e) => `"${e}"`)
                  this.url.searchParams.set('columns', e.join(','))
                }
              }
              return new i.default({
                method: 'POST',
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1,
              })
            }
            upsert(
              e,
              { onConflict: t, ignoreDuplicates: s = !1, count: r, defaultToNull: n = !0 } = {}
            ) {
              const o = [`resolution=${s ? 'ignore' : 'merge'}-duplicates`]
              if (
                (void 0 !== t && this.url.searchParams.set('on_conflict', t),
                this.headers.Prefer && o.push(this.headers.Prefer),
                r && o.push(`count=${r}`),
                n || o.push('missing=default'),
                (this.headers.Prefer = o.join(',')),
                Array.isArray(e))
              ) {
                const t = e.reduce((e, t) => e.concat(Object.keys(t)), [])
                if (t.length > 0) {
                  const e = [...new Set(t)].map((e) => `"${e}"`)
                  this.url.searchParams.set('columns', e.join(','))
                }
              }
              return new i.default({
                method: 'POST',
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1,
              })
            }
            update(e, { count: t } = {}) {
              const s = []
              return (
                this.headers.Prefer && s.push(this.headers.Prefer),
                t && s.push(`count=${t}`),
                (this.headers.Prefer = s.join(',')),
                new i.default({
                  method: 'PATCH',
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  body: e,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              )
            }
            delete({ count: e } = {}) {
              const t = []
              return (
                e && t.push(`count=${e}`),
                this.headers.Prefer && t.unshift(this.headers.Prefer),
                (this.headers.Prefer = t.join(',')),
                new i.default({
                  method: 'DELETE',
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              )
            }
          }
        },
        261: function (e, t, s) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const i = r(s(660))
          class n extends i.default {
            select(e) {
              let t = !1
              const s = (null != e ? e : '*')
                .split('')
                .map((e) => (/\s/.test(e) && !t ? '' : ('"' === e && (t = !t), e)))
                .join('')
              return (
                this.url.searchParams.set('select', s),
                this.headers.Prefer && (this.headers.Prefer += ','),
                (this.headers.Prefer += 'return=representation'),
                this
              )
            }
            order(
              e,
              { ascending: t = !0, nullsFirst: s, foreignTable: r, referencedTable: i = r } = {}
            ) {
              const n = i ? `${i}.order` : 'order',
                o = this.url.searchParams.get(n)
              return (
                this.url.searchParams.set(
                  n,
                  `${o ? `${o},` : ''}${e}.${t ? 'asc' : 'desc'}${
                    void 0 === s ? '' : s ? '.nullsfirst' : '.nullslast'
                  }`
                ),
                this
              )
            }
            limit(e, { foreignTable: t, referencedTable: s = t } = {}) {
              const r = void 0 === s ? 'limit' : `${s}.limit`
              return this.url.searchParams.set(r, `${e}`), this
            }
            range(e, t, { foreignTable: s, referencedTable: r = s } = {}) {
              const i = void 0 === r ? 'offset' : `${r}.offset`,
                n = void 0 === r ? 'limit' : `${r}.limit`
              return (
                this.url.searchParams.set(i, `${e}`),
                this.url.searchParams.set(n, '' + (t - e + 1)),
                this
              )
            }
            abortSignal(e) {
              return (this.signal = e), this
            }
            single() {
              return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this
            }
            maybeSingle() {
              return (
                'GET' === this.method
                  ? (this.headers.Accept = 'application/json')
                  : (this.headers.Accept = 'application/vnd.pgrst.object+json'),
                (this.isMaybeSingle = !0),
                this
              )
            }
            csv() {
              return (this.headers.Accept = 'text/csv'), this
            }
            geojson() {
              return (this.headers.Accept = 'application/geo+json'), this
            }
            explain({
              analyze: e = !1,
              verbose: t = !1,
              settings: s = !1,
              buffers: r = !1,
              wal: i = !1,
              format: n = 'text',
            } = {}) {
              var o
              const a = [
                  e ? 'analyze' : null,
                  t ? 'verbose' : null,
                  s ? 'settings' : null,
                  r ? 'buffers' : null,
                  i ? 'wal' : null,
                ]
                  .filter(Boolean)
                  .join('|'),
                c = null !== (o = this.headers.Accept) && void 0 !== o ? o : 'application/json'
              return (
                (this.headers.Accept = `application/vnd.pgrst.plan+${n}; for="${c}"; options=${a};`),
                this
              )
            }
            rollback() {
              var e
              return (
                (null !== (e = this.headers.Prefer) && void 0 !== e ? e : '').trim().length > 0
                  ? (this.headers.Prefer += ',tx=rollback')
                  : (this.headers.Prefer = 'tx=rollback'),
                this
              )
            }
            returns() {
              return this
            }
          }
          t.default = n
        },
        530: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.DEFAULT_HEADERS = void 0)
          const r = s(519)
          t.DEFAULT_HEADERS = { 'X-Client-Info': `postgrest-js/${r.version}` }
        },
        279: function (e, t, s) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.PostgrestError =
              t.PostgrestBuilder =
              t.PostgrestTransformBuilder =
              t.PostgrestFilterBuilder =
              t.PostgrestQueryBuilder =
              t.PostgrestClient =
                void 0)
          const i = r(s(961))
          t.PostgrestClient = i.default
          const n = r(s(45))
          t.PostgrestQueryBuilder = n.default
          const o = r(s(825))
          t.PostgrestFilterBuilder = o.default
          const a = r(s(261))
          t.PostgrestTransformBuilder = a.default
          const c = r(s(660))
          t.PostgrestBuilder = c.default
          const l = r(s(818))
          ;(t.PostgrestError = l.default),
            (t.default = {
              PostgrestClient: i.default,
              PostgrestQueryBuilder: n.default,
              PostgrestFilterBuilder: o.default,
              PostgrestTransformBuilder: a.default,
              PostgrestBuilder: c.default,
              PostgrestError: l.default,
            })
        },
        519: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.version = void 0),
            (t.version = '0.0.0-automated')
        },
        932: (e, t, s) => {
          s.r(t),
            s.d(t, {
              REALTIME_CHANNEL_STATES: () => P,
              REALTIME_LISTEN_TYPES: () => E,
              REALTIME_POSTGRES_CHANGES_LISTEN_EVENT: () => S,
              REALTIME_PRESENCE_LISTEN_EVENTS: () => T,
              REALTIME_SUBSCRIBE_STATES: () => O,
              RealtimeChannel: () => A,
              RealtimeClient: () => R,
              RealtimePresence: () => j,
            })
          const r = { 'X-Client-Info': 'realtime-js/0.0.0-automated' }
          var i, n, o, a, c, l
          !(function (e) {
            ;(e[(e.connecting = 0)] = 'connecting'),
              (e[(e.open = 1)] = 'open'),
              (e[(e.closing = 2)] = 'closing'),
              (e[(e.closed = 3)] = 'closed')
          })(i || (i = {})),
            (function (e) {
              ;(e.closed = 'closed'),
                (e.errored = 'errored'),
                (e.joined = 'joined'),
                (e.joining = 'joining'),
                (e.leaving = 'leaving')
            })(n || (n = {})),
            (function (e) {
              ;(e.close = 'phx_close'),
                (e.error = 'phx_error'),
                (e.join = 'phx_join'),
                (e.reply = 'phx_reply'),
                (e.leave = 'phx_leave'),
                (e.access_token = 'access_token')
            })(o || (o = {})),
            (function (e) {
              e.websocket = 'websocket'
            })(a || (a = {})),
            (function (e) {
              ;(e.Connecting = 'connecting'),
                (e.Open = 'open'),
                (e.Closing = 'closing'),
                (e.Closed = 'closed')
            })(c || (c = {}))
          class h {
            constructor() {
              this.HEADER_LENGTH = 1
            }
            decode(e, t) {
              return e.constructor === ArrayBuffer
                ? t(this._binaryDecode(e))
                : t('string' == typeof e ? JSON.parse(e) : {})
            }
            _binaryDecode(e) {
              const t = new DataView(e),
                s = new TextDecoder()
              return this._decodeBroadcast(e, t, s)
            }
            _decodeBroadcast(e, t, s) {
              const r = t.getUint8(1),
                i = t.getUint8(2)
              let n = this.HEADER_LENGTH + 2
              const o = s.decode(e.slice(n, n + r))
              n += r
              const a = s.decode(e.slice(n, n + i))
              return (
                (n += i),
                {
                  ref: null,
                  topic: o,
                  event: a,
                  payload: JSON.parse(s.decode(e.slice(n, e.byteLength))),
                }
              )
            }
          }
          class u {
            constructor(e, t) {
              ;(this.callback = e),
                (this.timerCalc = t),
                (this.timer = void 0),
                (this.tries = 0),
                (this.callback = e),
                (this.timerCalc = t)
            }
            reset() {
              ;(this.tries = 0), clearTimeout(this.timer)
            }
            scheduleTimeout() {
              clearTimeout(this.timer),
                (this.timer = setTimeout(() => {
                  ;(this.tries = this.tries + 1), this.callback()
                }, this.timerCalc(this.tries + 1)))
            }
          }
          !(function (e) {
            ;(e.abstime = 'abstime'),
              (e.bool = 'bool'),
              (e.date = 'date'),
              (e.daterange = 'daterange'),
              (e.float4 = 'float4'),
              (e.float8 = 'float8'),
              (e.int2 = 'int2'),
              (e.int4 = 'int4'),
              (e.int4range = 'int4range'),
              (e.int8 = 'int8'),
              (e.int8range = 'int8range'),
              (e.json = 'json'),
              (e.jsonb = 'jsonb'),
              (e.money = 'money'),
              (e.numeric = 'numeric'),
              (e.oid = 'oid'),
              (e.reltime = 'reltime'),
              (e.text = 'text'),
              (e.time = 'time'),
              (e.timestamp = 'timestamp'),
              (e.timestamptz = 'timestamptz'),
              (e.timetz = 'timetz'),
              (e.tsrange = 'tsrange'),
              (e.tstzrange = 'tstzrange')
          })(l || (l = {}))
          const d = (e, t, s = {}) => {
              var r
              const i = null !== (r = s.skipTypes) && void 0 !== r ? r : []
              return Object.keys(t).reduce((s, r) => ((s[r] = f(r, e, t, i)), s), {})
            },
            f = (e, t, s, r) => {
              const i = t.find((t) => t.name === e),
                n = null == i ? void 0 : i.type,
                o = s[e]
              return n && !r.includes(n) ? p(n, o) : g(o)
            },
            p = (e, t) => {
              if ('_' === e.charAt(0)) {
                const s = e.slice(1, e.length)
                return _(t, s)
              }
              switch (e) {
                case l.bool:
                  return v(t)
                case l.float4:
                case l.float8:
                case l.int2:
                case l.int4:
                case l.int8:
                case l.numeric:
                case l.oid:
                  return y(t)
                case l.json:
                case l.jsonb:
                  return m(t)
                case l.timestamp:
                  return w(t)
                case l.abstime:
                case l.date:
                case l.daterange:
                case l.int4range:
                case l.int8range:
                case l.money:
                case l.reltime:
                case l.text:
                case l.time:
                case l.timestamptz:
                case l.timetz:
                case l.tsrange:
                case l.tstzrange:
                default:
                  return g(t)
              }
            },
            g = (e) => e,
            v = (e) => {
              switch (e) {
                case 't':
                  return !0
                case 'f':
                  return !1
                default:
                  return e
              }
            },
            y = (e) => {
              if ('string' == typeof e) {
                const t = parseFloat(e)
                if (!Number.isNaN(t)) return t
              }
              return e
            },
            m = (e) => {
              if ('string' == typeof e)
                try {
                  return JSON.parse(e)
                } catch (t) {
                  return console.log(`JSON parse error: ${t}`), e
                }
              return e
            },
            _ = (e, t) => {
              if ('string' != typeof e) return e
              const s = e.length - 1,
                r = e[s]
              if ('{' === e[0] && '}' === r) {
                let r
                const i = e.slice(1, s)
                try {
                  r = JSON.parse('[' + i + ']')
                } catch (e) {
                  r = i ? i.split(',') : []
                }
                return r.map((e) => p(t, e))
              }
              return e
            },
            w = (e) => ('string' == typeof e ? e.replace(' ', 'T') : e),
            b = (e) => {
              let t = e
              return (
                (t = t.replace(/^ws/i, 'http')),
                (t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '')),
                t.replace(/\/+$/, '')
              )
            }
          class k {
            constructor(e, t, s = {}, r = 1e4) {
              ;(this.channel = e),
                (this.event = t),
                (this.payload = s),
                (this.timeout = r),
                (this.sent = !1),
                (this.timeoutTimer = void 0),
                (this.ref = ''),
                (this.receivedResp = null),
                (this.recHooks = []),
                (this.refEvent = null)
            }
            resend(e) {
              ;(this.timeout = e),
                this._cancelRefEvent(),
                (this.ref = ''),
                (this.refEvent = null),
                (this.receivedResp = null),
                (this.sent = !1),
                this.send()
            }
            send() {
              this._hasReceived('timeout') ||
                (this.startTimeout(),
                (this.sent = !0),
                this.channel.socket.push({
                  topic: this.channel.topic,
                  event: this.event,
                  payload: this.payload,
                  ref: this.ref,
                  join_ref: this.channel._joinRef(),
                }))
            }
            updatePayload(e) {
              this.payload = Object.assign(Object.assign({}, this.payload), e)
            }
            receive(e, t) {
              var s
              return (
                this._hasReceived(e) &&
                  t(null === (s = this.receivedResp) || void 0 === s ? void 0 : s.response),
                this.recHooks.push({ status: e, callback: t }),
                this
              )
            }
            startTimeout() {
              this.timeoutTimer ||
                ((this.ref = this.channel.socket._makeRef()),
                (this.refEvent = this.channel._replyEventName(this.ref)),
                this.channel._on(this.refEvent, {}, (e) => {
                  this._cancelRefEvent(),
                    this._cancelTimeout(),
                    (this.receivedResp = e),
                    this._matchReceive(e)
                }),
                (this.timeoutTimer = setTimeout(() => {
                  this.trigger('timeout', {})
                }, this.timeout)))
            }
            trigger(e, t) {
              this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t })
            }
            destroy() {
              this._cancelRefEvent(), this._cancelTimeout()
            }
            _cancelRefEvent() {
              this.refEvent && this.channel._off(this.refEvent, {})
            }
            _cancelTimeout() {
              clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0)
            }
            _matchReceive({ status: e, response: t }) {
              this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t))
            }
            _hasReceived(e) {
              return this.receivedResp && this.receivedResp.status === e
            }
          }
          var T, S, E, O
          !(function (e) {
            ;(e.SYNC = 'sync'), (e.JOIN = 'join'), (e.LEAVE = 'leave')
          })(T || (T = {}))
          class j {
            constructor(e, t) {
              ;(this.channel = e),
                (this.state = {}),
                (this.pendingDiffs = []),
                (this.joinRef = null),
                (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} })
              const s = (null == t ? void 0 : t.events) || {
                state: 'presence_state',
                diff: 'presence_diff',
              }
              this.channel._on(s.state, {}, (e) => {
                const { onJoin: t, onLeave: s, onSync: r } = this.caller
                ;(this.joinRef = this.channel._joinRef()),
                  (this.state = j.syncState(this.state, e, t, s)),
                  this.pendingDiffs.forEach((e) => {
                    this.state = j.syncDiff(this.state, e, t, s)
                  }),
                  (this.pendingDiffs = []),
                  r()
              }),
                this.channel._on(s.diff, {}, (e) => {
                  const { onJoin: t, onLeave: s, onSync: r } = this.caller
                  this.inPendingSyncState()
                    ? this.pendingDiffs.push(e)
                    : ((this.state = j.syncDiff(this.state, e, t, s)), r())
                }),
                this.onJoin((e, t, s) => {
                  this.channel._trigger('presence', {
                    event: 'join',
                    key: e,
                    currentPresences: t,
                    newPresences: s,
                  })
                }),
                this.onLeave((e, t, s) => {
                  this.channel._trigger('presence', {
                    event: 'leave',
                    key: e,
                    currentPresences: t,
                    leftPresences: s,
                  })
                }),
                this.onSync(() => {
                  this.channel._trigger('presence', { event: 'sync' })
                })
            }
            static syncState(e, t, s, r) {
              const i = this.cloneDeep(e),
                n = this.transformState(t),
                o = {},
                a = {}
              return (
                this.map(i, (e, t) => {
                  n[e] || (a[e] = t)
                }),
                this.map(n, (e, t) => {
                  const s = i[e]
                  if (s) {
                    const r = t.map((e) => e.presence_ref),
                      i = s.map((e) => e.presence_ref),
                      n = t.filter((e) => i.indexOf(e.presence_ref) < 0),
                      c = s.filter((e) => r.indexOf(e.presence_ref) < 0)
                    n.length > 0 && (o[e] = n), c.length > 0 && (a[e] = c)
                  } else o[e] = t
                }),
                this.syncDiff(i, { joins: o, leaves: a }, s, r)
              )
            }
            static syncDiff(e, t, s, r) {
              const { joins: i, leaves: n } = {
                joins: this.transformState(t.joins),
                leaves: this.transformState(t.leaves),
              }
              return (
                s || (s = () => {}),
                r || (r = () => {}),
                this.map(i, (t, r) => {
                  var i
                  const n = null !== (i = e[t]) && void 0 !== i ? i : []
                  if (((e[t] = this.cloneDeep(r)), n.length > 0)) {
                    const s = e[t].map((e) => e.presence_ref),
                      r = n.filter((e) => s.indexOf(e.presence_ref) < 0)
                    e[t].unshift(...r)
                  }
                  s(t, n, r)
                }),
                this.map(n, (t, s) => {
                  let i = e[t]
                  if (!i) return
                  const n = s.map((e) => e.presence_ref)
                  ;(i = i.filter((e) => n.indexOf(e.presence_ref) < 0)),
                    (e[t] = i),
                    r(t, i, s),
                    0 === i.length && delete e[t]
                }),
                e
              )
            }
            static map(e, t) {
              return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]))
            }
            static transformState(e) {
              return (
                (e = this.cloneDeep(e)),
                Object.getOwnPropertyNames(e).reduce((t, s) => {
                  const r = e[s]
                  return (
                    (t[s] =
                      'metas' in r
                        ? r.metas.map(
                            (e) => (
                              (e.presence_ref = e.phx_ref),
                              delete e.phx_ref,
                              delete e.phx_ref_prev,
                              e
                            )
                          )
                        : r),
                    t
                  )
                }, {})
              )
            }
            static cloneDeep(e) {
              return JSON.parse(JSON.stringify(e))
            }
            onJoin(e) {
              this.caller.onJoin = e
            }
            onLeave(e) {
              this.caller.onLeave = e
            }
            onSync(e) {
              this.caller.onSync = e
            }
            inPendingSyncState() {
              return !this.joinRef || this.joinRef !== this.channel._joinRef()
            }
          }
          !(function (e) {
            ;(e.ALL = '*'), (e.INSERT = 'INSERT'), (e.UPDATE = 'UPDATE'), (e.DELETE = 'DELETE')
          })(S || (S = {})),
            (function (e) {
              ;(e.BROADCAST = 'broadcast'),
                (e.PRESENCE = 'presence'),
                (e.POSTGRES_CHANGES = 'postgres_changes'),
                (e.SYSTEM = 'system')
            })(E || (E = {})),
            (function (e) {
              ;(e.SUBSCRIBED = 'SUBSCRIBED'),
                (e.TIMED_OUT = 'TIMED_OUT'),
                (e.CLOSED = 'CLOSED'),
                (e.CHANNEL_ERROR = 'CHANNEL_ERROR')
            })(O || (O = {}))
          const P = n
          class A {
            constructor(e, t = { config: {} }, s) {
              ;(this.topic = e),
                (this.params = t),
                (this.socket = s),
                (this.bindings = {}),
                (this.state = n.closed),
                (this.joinedOnce = !1),
                (this.pushBuffer = []),
                (this.subTopic = e.replace(/^realtime:/i, '')),
                (this.params.config = Object.assign(
                  { broadcast: { ack: !1, self: !1 }, presence: { key: '' }, private: !1 },
                  t.config
                )),
                (this.timeout = this.socket.timeout),
                (this.joinPush = new k(this, o.join, this.params, this.timeout)),
                (this.rejoinTimer = new u(
                  () => this._rejoinUntilConnected(),
                  this.socket.reconnectAfterMs
                )),
                this.joinPush.receive('ok', () => {
                  ;(this.state = n.joined),
                    this.rejoinTimer.reset(),
                    this.pushBuffer.forEach((e) => e.send()),
                    (this.pushBuffer = [])
                }),
                this._onClose(() => {
                  this.rejoinTimer.reset(),
                    this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`),
                    (this.state = n.closed),
                    this.socket._remove(this)
                }),
                this._onError((e) => {
                  this._isLeaving() ||
                    this._isClosed() ||
                    (this.socket.log('channel', `error ${this.topic}`, e),
                    (this.state = n.errored),
                    this.rejoinTimer.scheduleTimeout())
                }),
                this.joinPush.receive('timeout', () => {
                  this._isJoining() &&
                    (this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout),
                    (this.state = n.errored),
                    this.rejoinTimer.scheduleTimeout())
                }),
                this._on(o.reply, {}, (e, t) => {
                  this._trigger(this._replyEventName(t), e)
                }),
                (this.presence = new j(this)),
                (this.broadcastEndpointURL = b(this.socket.endPoint) + '/api/broadcast'),
                (this.private = this.params.config.private || !1)
            }
            subscribe(e, t = this.timeout) {
              var s, r
              if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
                throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"
              {
                const {
                  config: { broadcast: i, presence: n, private: o },
                } = this.params
                this._onError((t) => (null == e ? void 0 : e(O.CHANNEL_ERROR, t))),
                  this._onClose(() => (null == e ? void 0 : e(O.CLOSED)))
                const a = {},
                  c = {
                    broadcast: i,
                    presence: n,
                    postgres_changes:
                      null !==
                        (r =
                          null === (s = this.bindings.postgres_changes) || void 0 === s
                            ? void 0
                            : s.map((e) => e.filter)) && void 0 !== r
                        ? r
                        : [],
                    private: o,
                  }
                this.socket.accessTokenValue && (a.access_token = this.socket.accessTokenValue),
                  this.updateJoinPayload(Object.assign({ config: c }, a)),
                  (this.joinedOnce = !0),
                  this._rejoin(t),
                  this.joinPush
                    .receive('ok', async ({ postgres_changes: t }) => {
                      var s
                      if ((this.socket.setAuth(), void 0 !== t)) {
                        const r = this.bindings.postgres_changes,
                          i = null !== (s = null == r ? void 0 : r.length) && void 0 !== s ? s : 0,
                          n = []
                        for (let s = 0; s < i; s++) {
                          const i = r[s],
                            {
                              filter: { event: o, schema: a, table: c, filter: l },
                            } = i,
                            h = t && t[s]
                          if (
                            !h ||
                            h.event !== o ||
                            h.schema !== a ||
                            h.table !== c ||
                            h.filter !== l
                          )
                            return (
                              this.unsubscribe(),
                              void (
                                null == e ||
                                e(
                                  O.CHANNEL_ERROR,
                                  new Error(
                                    'mismatch between server and client bindings for postgres changes'
                                  )
                                )
                              )
                            )
                          n.push(Object.assign(Object.assign({}, i), { id: h.id }))
                        }
                        return (this.bindings.postgres_changes = n), void (e && e(O.SUBSCRIBED))
                      }
                      null == e || e(O.SUBSCRIBED)
                    })
                    .receive('error', (t) => {
                      null == e ||
                        e(
                          O.CHANNEL_ERROR,
                          new Error(JSON.stringify(Object.values(t).join(', ') || 'error'))
                        )
                    })
                    .receive('timeout', () => {
                      null == e || e(O.TIMED_OUT)
                    })
              }
              return this
            }
            presenceState() {
              return this.presence.state
            }
            async track(e, t = {}) {
              return await this.send(
                { type: 'presence', event: 'track', payload: e },
                t.timeout || this.timeout
              )
            }
            async untrack(e = {}) {
              return await this.send({ type: 'presence', event: 'untrack' }, e)
            }
            on(e, t, s) {
              return this._on(e, t, s)
            }
            async send(e, t = {}) {
              var s, r
              if (this._canPush() || 'broadcast' !== e.type)
                return new Promise((s) => {
                  var r, i, n
                  const o = this._push(e.type, e, t.timeout || this.timeout)
                  'broadcast' !== e.type ||
                    (null ===
                      (n =
                        null ===
                          (i = null === (r = this.params) || void 0 === r ? void 0 : r.config) ||
                        void 0 === i
                          ? void 0
                          : i.broadcast) || void 0 === n
                      ? void 0
                      : n.ack) ||
                    s('ok'),
                    o.receive('ok', () => s('ok')),
                    o.receive('error', () => s('error')),
                    o.receive('timeout', () => s('timed out'))
                })
              {
                const { event: i, payload: n } = e,
                  o = {
                    method: 'POST',
                    headers: {
                      Authorization: this.socket.accessTokenValue
                        ? `Bearer ${this.socket.accessTokenValue}`
                        : '',
                      apikey: this.socket.apiKey ? this.socket.apiKey : '',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      messages: [
                        { topic: this.subTopic, event: i, payload: n, private: this.private },
                      ],
                    }),
                  }
                try {
                  const e = await this._fetchWithTimeout(
                    this.broadcastEndpointURL,
                    o,
                    null !== (s = t.timeout) && void 0 !== s ? s : this.timeout
                  )
                  return (
                    await (null === (r = e.body) || void 0 === r ? void 0 : r.cancel()),
                    e.ok ? 'ok' : 'error'
                  )
                } catch (e) {
                  return 'AbortError' === e.name ? 'timed out' : 'error'
                }
              }
            }
            updateJoinPayload(e) {
              this.joinPush.updatePayload(e)
            }
            unsubscribe(e = this.timeout) {
              this.state = n.leaving
              const t = () => {
                this.socket.log('channel', `leave ${this.topic}`),
                  this._trigger(o.close, 'leave', this._joinRef())
              }
              return (
                this.rejoinTimer.reset(),
                this.joinPush.destroy(),
                new Promise((s) => {
                  const r = new k(this, o.leave, {}, e)
                  r
                    .receive('ok', () => {
                      t(), s('ok')
                    })
                    .receive('timeout', () => {
                      t(), s('timed out')
                    })
                    .receive('error', () => {
                      s('error')
                    }),
                    r.send(),
                    this._canPush() || r.trigger('ok', {})
                })
              )
            }
            async _fetchWithTimeout(e, t, s) {
              const r = new AbortController(),
                i = setTimeout(() => r.abort(), s),
                n = await this.socket.fetch(
                  e,
                  Object.assign(Object.assign({}, t), { signal: r.signal })
                )
              return clearTimeout(i), n
            }
            _push(e, t, s = this.timeout) {
              if (!this.joinedOnce)
                throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
              let r = new k(this, e, t, s)
              return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r
            }
            _onMessage(e, t, s) {
              return t
            }
            _isMember(e) {
              return this.topic === e
            }
            _joinRef() {
              return this.joinPush.ref
            }
            _trigger(e, t, s) {
              var r, i
              const n = e.toLocaleLowerCase(),
                { close: a, error: c, leave: l, join: h } = o
              if (s && [a, c, l, h].indexOf(n) >= 0 && s !== this._joinRef()) return
              let u = this._onMessage(n, t, s)
              if (t && !u)
                throw 'channel onMessage callbacks must return the payload, modified or unmodified'
              ;['insert', 'update', 'delete'].includes(n)
                ? null === (r = this.bindings.postgres_changes) ||
                  void 0 === r ||
                  r
                    .filter((e) => {
                      var t, s, r
                      return (
                        '*' === (null === (t = e.filter) || void 0 === t ? void 0 : t.event) ||
                        (null ===
                          (r = null === (s = e.filter) || void 0 === s ? void 0 : s.event) ||
                        void 0 === r
                          ? void 0
                          : r.toLocaleLowerCase()) === n
                      )
                    })
                    .map((e) => e.callback(u, s))
                : null === (i = this.bindings[n]) ||
                  void 0 === i ||
                  i
                    .filter((e) => {
                      var s, r, i, o, a, c
                      if (['broadcast', 'presence', 'postgres_changes'].includes(n)) {
                        if ('id' in e) {
                          const n = e.id,
                            o = null === (s = e.filter) || void 0 === s ? void 0 : s.event
                          return (
                            n &&
                            (null === (r = t.ids) || void 0 === r ? void 0 : r.includes(n)) &&
                            ('*' === o ||
                              (null == o ? void 0 : o.toLocaleLowerCase()) ===
                                (null === (i = t.data) || void 0 === i
                                  ? void 0
                                  : i.type.toLocaleLowerCase()))
                          )
                        }
                        {
                          const s =
                            null ===
                              (a =
                                null === (o = null == e ? void 0 : e.filter) || void 0 === o
                                  ? void 0
                                  : o.event) || void 0 === a
                              ? void 0
                              : a.toLocaleLowerCase()
                          return (
                            '*' === s ||
                            s ===
                              (null === (c = null == t ? void 0 : t.event) || void 0 === c
                                ? void 0
                                : c.toLocaleLowerCase())
                          )
                        }
                      }
                      return e.type.toLocaleLowerCase() === n
                    })
                    .map((e) => {
                      if ('object' == typeof u && 'ids' in u) {
                        const e = u.data,
                          { schema: t, table: s, commit_timestamp: r, type: i, errors: n } = e,
                          o = {
                            schema: t,
                            table: s,
                            commit_timestamp: r,
                            eventType: i,
                            new: {},
                            old: {},
                            errors: n,
                          }
                        u = Object.assign(Object.assign({}, o), this._getPayloadRecords(e))
                      }
                      e.callback(u, s)
                    })
            }
            _isClosed() {
              return this.state === n.closed
            }
            _isJoined() {
              return this.state === n.joined
            }
            _isJoining() {
              return this.state === n.joining
            }
            _isLeaving() {
              return this.state === n.leaving
            }
            _replyEventName(e) {
              return `chan_reply_${e}`
            }
            _on(e, t, s) {
              const r = e.toLocaleLowerCase(),
                i = { type: r, filter: t, callback: s }
              return this.bindings[r] ? this.bindings[r].push(i) : (this.bindings[r] = [i]), this
            }
            _off(e, t) {
              const s = e.toLocaleLowerCase()
              return (
                (this.bindings[s] = this.bindings[s].filter((e) => {
                  var r
                  return !(
                    (null === (r = e.type) || void 0 === r ? void 0 : r.toLocaleLowerCase()) ===
                      s && A.isEqual(e.filter, t)
                  )
                })),
                this
              )
            }
            static isEqual(e, t) {
              if (Object.keys(e).length !== Object.keys(t).length) return !1
              for (const s in e) if (e[s] !== t[s]) return !1
              return !0
            }
            _rejoinUntilConnected() {
              this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
            }
            _onClose(e) {
              this._on(o.close, {}, e)
            }
            _onError(e) {
              this._on(o.error, {}, (t) => e(t))
            }
            _canPush() {
              return this.socket.isConnected() && this._isJoined()
            }
            _rejoin(e = this.timeout) {
              this._isLeaving() ||
                (this.socket._leaveOpenTopic(this.topic),
                (this.state = n.joining),
                this.joinPush.resend(e))
            }
            _getPayloadRecords(e) {
              const t = { new: {}, old: {} }
              return (
                ('INSERT' !== e.type && 'UPDATE' !== e.type) || (t.new = d(e.columns, e.record)),
                ('UPDATE' !== e.type && 'DELETE' !== e.type) ||
                  (t.old = d(e.columns, e.old_record)),
                t
              )
            }
          }
          const $ = () => {},
            x = 'undefined' != typeof WebSocket
          class R {
            constructor(e, t) {
              var i
              ;(this.accessTokenValue = null),
                (this.apiKey = null),
                (this.channels = []),
                (this.endPoint = ''),
                (this.httpEndpoint = ''),
                (this.headers = r),
                (this.params = {}),
                (this.timeout = 1e4),
                (this.heartbeatIntervalMs = 3e4),
                (this.heartbeatTimer = void 0),
                (this.pendingHeartbeatRef = null),
                (this.ref = 0),
                (this.logger = $),
                (this.conn = null),
                (this.sendBuffer = []),
                (this.serializer = new h()),
                (this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
                (this.accessToken = null),
                (this._resolveFetch = (e) => {
                  let t
                  return (
                    (t =
                      e ||
                      ('undefined' == typeof fetch
                        ? (...e) =>
                            Promise.resolve()
                              .then(s.bind(s, 907))
                              .then(({ default: t }) => t(...e))
                        : fetch)),
                    (...e) => t(...e)
                  )
                }),
                (this.endPoint = `${e}/${a.websocket}`),
                (this.httpEndpoint = b(e)),
                (null == t ? void 0 : t.transport)
                  ? (this.transport = t.transport)
                  : (this.transport = null),
                (null == t ? void 0 : t.params) && (this.params = t.params),
                (null == t ? void 0 : t.headers) &&
                  (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
                (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
                (null == t ? void 0 : t.logger) && (this.logger = t.logger),
                (null == t ? void 0 : t.heartbeatIntervalMs) &&
                  (this.heartbeatIntervalMs = t.heartbeatIntervalMs)
              const n =
                null === (i = null == t ? void 0 : t.params) || void 0 === i ? void 0 : i.apikey
              if (
                (n && ((this.accessTokenValue = n), (this.apiKey = n)),
                (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
                  ? t.reconnectAfterMs
                  : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
                (this.encode = (null == t ? void 0 : t.encode)
                  ? t.encode
                  : (e, t) => t(JSON.stringify(e))),
                (this.decode = (null == t ? void 0 : t.decode)
                  ? t.decode
                  : this.serializer.decode.bind(this.serializer)),
                (this.reconnectTimer = new u(async () => {
                  this.disconnect(), this.connect()
                }, this.reconnectAfterMs)),
                (this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch)),
                null == t ? void 0 : t.worker)
              ) {
                if ('undefined' != typeof window && !window.Worker)
                  throw new Error('Web Worker is not supported')
                ;(this.worker = (null == t ? void 0 : t.worker) || !1),
                  (this.workerUrl = null == t ? void 0 : t.workerUrl)
              }
              this.accessToken = (null == t ? void 0 : t.accessToken) || null
            }
            connect() {
              if (!this.conn)
                return this.transport
                  ? ((this.conn = new this.transport(this.endpointURL(), void 0, {
                      headers: this.headers,
                    })),
                    void this.setupConnection())
                  : x
                  ? ((this.conn = new WebSocket(this.endpointURL())), void this.setupConnection())
                  : void (this.conn = new C(this.endpointURL(), void 0, {
                      close: () => {
                        this.conn = null
                      },
                    }))
            }
            endpointURL() {
              return this._appendParams(
                this.endPoint,
                Object.assign({}, this.params, { vsn: '1.0.0' })
              )
            }
            disconnect(e, t) {
              this.conn &&
                ((this.conn.onclose = function () {}),
                e ? this.conn.close(e, null != t ? t : '') : this.conn.close(),
                (this.conn = null),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.reset())
            }
            getChannels() {
              return this.channels
            }
            async removeChannel(e) {
              const t = await e.unsubscribe()
              return 0 === this.channels.length && this.disconnect(), t
            }
            async removeAllChannels() {
              const e = await Promise.all(this.channels.map((e) => e.unsubscribe()))
              return this.disconnect(), e
            }
            log(e, t, s) {
              this.logger(e, t, s)
            }
            connectionState() {
              switch (this.conn && this.conn.readyState) {
                case i.connecting:
                  return c.Connecting
                case i.open:
                  return c.Open
                case i.closing:
                  return c.Closing
                default:
                  return c.Closed
              }
            }
            isConnected() {
              return this.connectionState() === c.Open
            }
            channel(e, t = { config: {} }) {
              const s = new A(`realtime:${e}`, t, this)
              return this.channels.push(s), s
            }
            push(e) {
              const { topic: t, event: s, payload: r, ref: i } = e,
                n = () => {
                  this.encode(e, (e) => {
                    var t
                    null === (t = this.conn) || void 0 === t || t.send(e)
                  })
                }
              this.log('push', `${t} ${s} (${i})`, r),
                this.isConnected() ? n() : this.sendBuffer.push(n)
            }
            async setAuth(e = null) {
              let t = e || (this.accessToken && (await this.accessToken())) || this.accessTokenValue
              if (t) {
                let e = null
                try {
                  e = JSON.parse(atob(t.split('.')[1]))
                } catch (e) {}
                if (e && e.exp && !(Math.floor(Date.now() / 1e3) - e.exp < 0))
                  return (
                    this.log(
                      'auth',
                      `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e.exp}`
                    ),
                    Promise.reject(
                      `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e.exp}`
                    )
                  )
                ;(this.accessTokenValue = t),
                  this.channels.forEach((e) => {
                    t && e.updateJoinPayload({ access_token: t }),
                      e.joinedOnce && e._isJoined() && e._push(o.access_token, { access_token: t })
                  })
              }
            }
            async sendHeartbeat() {
              var e
              if (this.isConnected()) {
                if (this.pendingHeartbeatRef)
                  return (
                    (this.pendingHeartbeatRef = null),
                    this.log(
                      'transport',
                      'heartbeat timeout. Attempting to re-establish connection'
                    ),
                    void (
                      null === (e = this.conn) ||
                      void 0 === e ||
                      e.close(1e3, 'hearbeat timeout')
                    )
                  )
                ;(this.pendingHeartbeatRef = this._makeRef()),
                  this.push({
                    topic: 'phoenix',
                    event: 'heartbeat',
                    payload: {},
                    ref: this.pendingHeartbeatRef,
                  }),
                  this.setAuth()
              }
            }
            flushSendBuffer() {
              this.isConnected() &&
                this.sendBuffer.length > 0 &&
                (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []))
            }
            _makeRef() {
              let e = this.ref + 1
              return e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
            }
            _leaveOpenTopic(e) {
              let t = this.channels.find((t) => t.topic === e && (t._isJoined() || t._isJoining()))
              t && (this.log('transport', `leaving duplicate topic "${e}"`), t.unsubscribe())
            }
            _remove(e) {
              this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef())
            }
            setupConnection() {
              this.conn &&
                ((this.conn.binaryType = 'arraybuffer'),
                (this.conn.onopen = () => this._onConnOpen()),
                (this.conn.onerror = (e) => this._onConnError(e)),
                (this.conn.onmessage = (e) => this._onConnMessage(e)),
                (this.conn.onclose = (e) => this._onConnClose(e)))
            }
            _onConnMessage(e) {
              this.decode(e.data, (e) => {
                let { topic: t, event: s, payload: r, ref: i } = e
                i && i === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null),
                  this.log(
                    'receive',
                    `${r.status || ''} ${t} ${s} ${(i && '(' + i + ')') || ''}`,
                    r
                  ),
                  this.channels.filter((e) => e._isMember(t)).forEach((e) => e._trigger(s, r, i)),
                  this.stateChangeCallbacks.message.forEach((t) => t(e))
              })
            }
            async _onConnOpen() {
              if (
                (this.log('transport', `connected to ${this.endpointURL()}`),
                this.flushSendBuffer(),
                this.reconnectTimer.reset(),
                this.worker)
              ) {
                this.workerUrl
                  ? this.log('worker', `starting worker for from ${this.workerUrl}`)
                  : this.log('worker', 'starting default worker')
                const e = this._workerObjectUrl(this.workerUrl)
                ;(this.workerRef = new Worker(e)),
                  (this.workerRef.onerror = (e) => {
                    this.log('worker', 'worker error', e.message), this.workerRef.terminate()
                  }),
                  (this.workerRef.onmessage = (e) => {
                    'keepAlive' === e.data.event && this.sendHeartbeat()
                  }),
                  this.workerRef.postMessage({ event: 'start', interval: this.heartbeatIntervalMs })
              } else
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                  (this.heartbeatTimer = setInterval(
                    () => this.sendHeartbeat(),
                    this.heartbeatIntervalMs
                  ))
              this.stateChangeCallbacks.open.forEach((e) => e())
            }
            _onConnClose(e) {
              this.log('transport', 'close', e),
                this._triggerChanError(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.scheduleTimeout(),
                this.stateChangeCallbacks.close.forEach((t) => t(e))
            }
            _onConnError(e) {
              this.log('transport', e.message),
                this._triggerChanError(),
                this.stateChangeCallbacks.error.forEach((t) => t(e))
            }
            _triggerChanError() {
              this.channels.forEach((e) => e._trigger(o.error))
            }
            _appendParams(e, t) {
              if (0 === Object.keys(t).length) return e
              const s = e.match(/\?/) ? '&' : '?'
              return `${e}${s}${new URLSearchParams(t)}`
            }
            _workerObjectUrl(e) {
              let t
              if (e) t = e
              else {
                const e = new Blob(
                  [
                    '\n  addEventListener("message", (e) => {\n    if (e.data.event === "start") {\n      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);\n    }\n  });',
                  ],
                  { type: 'application/javascript' }
                )
                t = URL.createObjectURL(e)
              }
              return t
            }
          }
          class C {
            constructor(e, t, s) {
              ;(this.binaryType = 'arraybuffer'),
                (this.onclose = () => {}),
                (this.onerror = () => {}),
                (this.onmessage = () => {}),
                (this.onopen = () => {}),
                (this.readyState = i.connecting),
                (this.send = () => {}),
                (this.url = null),
                (this.url = e),
                (this.close = s.close)
            }
          }
        },
        623: (e, t, s) => {
          s.r(t),
            s.d(t, {
              StorageApiError: () => n,
              StorageClient: () => S,
              StorageError: () => r,
              StorageUnknownError: () => o,
              isStorageError: () => i,
            })
          class r extends Error {
            constructor(e) {
              super(e), (this.__isStorageError = !0), (this.name = 'StorageError')
            }
          }
          function i(e) {
            return 'object' == typeof e && null !== e && '__isStorageError' in e
          }
          class n extends r {
            constructor(e, t) {
              super(e), (this.name = 'StorageApiError'), (this.status = t)
            }
            toJSON() {
              return { name: this.name, message: this.message, status: this.status }
            }
          }
          class o extends r {
            constructor(e, t) {
              super(e), (this.name = 'StorageUnknownError'), (this.originalError = t)
            }
          }
          const a = (e) => {
              let t
              return (
                (t =
                  e ||
                  ('undefined' == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(s.bind(s, 907))
                          .then(({ default: t }) => t(...e))
                    : fetch)),
                (...e) => t(...e)
              )
            },
            c = (e) => {
              if (Array.isArray(e)) return e.map((e) => c(e))
              if ('function' == typeof e || e !== Object(e)) return e
              const t = {}
              return (
                Object.entries(e).forEach(([e, s]) => {
                  const r = e.replace(/([-_][a-z])/gi, (e) => e.toUpperCase().replace(/[-_]/g, ''))
                  t[r] = c(s)
                }),
                t
              )
            }
          var l = function (e, t, s, r) {
            return new (s || (s = Promise))(function (i, n) {
              function o(e) {
                try {
                  c(r.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function a(e) {
                try {
                  c(r.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof s
                      ? t
                      : new s(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((r = r.apply(e, t || [])).next())
            })
          }
          const h = (e) =>
              e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
            u = (e, t, r) =>
              l(void 0, void 0, void 0, function* () {
                const i = yield ((a = void 0),
                (c = void 0),
                (l = void 0),
                (u = function* () {
                  return 'undefined' == typeof Response
                    ? (yield Promise.resolve().then(s.bind(s, 907))).Response
                    : Response
                }),
                new (l || (l = Promise))(function (e, t) {
                  function s(e) {
                    try {
                      i(u.next(e))
                    } catch (e) {
                      t(e)
                    }
                  }
                  function r(e) {
                    try {
                      i(u.throw(e))
                    } catch (e) {
                      t(e)
                    }
                  }
                  function i(t) {
                    var i
                    t.done
                      ? e(t.value)
                      : ((i = t.value),
                        i instanceof l
                          ? i
                          : new l(function (e) {
                              e(i)
                            })).then(s, r)
                  }
                  i((u = u.apply(a, c || [])).next())
                }))
                var a, c, l, u
                e instanceof i && !(null == r ? void 0 : r.noResolveJson)
                  ? e
                      .json()
                      .then((s) => {
                        t(new n(h(s), e.status || 500))
                      })
                      .catch((e) => {
                        t(new o(h(e), e))
                      })
                  : t(new o(h(e), e))
              }),
            d = (e, t, s, r) => {
              const i = { method: e, headers: (null == t ? void 0 : t.headers) || {} }
              return 'GET' === e
                ? i
                : ((i.headers = Object.assign(
                    { 'Content-Type': 'application/json' },
                    null == t ? void 0 : t.headers
                  )),
                  r && (i.body = JSON.stringify(r)),
                  Object.assign(Object.assign({}, i), s))
            }
          function f(e, t, s, r, i, n) {
            return l(this, void 0, void 0, function* () {
              return new Promise((o, a) => {
                e(s, d(t, r, i, n))
                  .then((e) => {
                    if (!e.ok) throw e
                    return (null == r ? void 0 : r.noResolveJson) ? e : e.json()
                  })
                  .then((e) => o(e))
                  .catch((e) => u(e, a, r))
              })
            })
          }
          function p(e, t, s, r) {
            return l(this, void 0, void 0, function* () {
              return f(e, 'GET', t, s, r)
            })
          }
          function g(e, t, s, r, i) {
            return l(this, void 0, void 0, function* () {
              return f(e, 'POST', t, r, i, s)
            })
          }
          function v(e, t, s, r, i) {
            return l(this, void 0, void 0, function* () {
              return f(e, 'DELETE', t, r, i, s)
            })
          }
          var y = function (e, t, s, r) {
            return new (s || (s = Promise))(function (i, n) {
              function o(e) {
                try {
                  c(r.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function a(e) {
                try {
                  c(r.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof s
                      ? t
                      : new s(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((r = r.apply(e, t || [])).next())
            })
          }
          const m = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
            _ = { cacheControl: '3600', contentType: 'text/plain;charset=UTF-8', upsert: !1 }
          class w {
            constructor(e, t = {}, s, r) {
              ;(this.url = e), (this.headers = t), (this.bucketId = s), (this.fetch = a(r))
            }
            uploadOrUpdate(e, t, s, r) {
              return y(this, void 0, void 0, function* () {
                try {
                  let i
                  const n = Object.assign(Object.assign({}, _), r)
                  let o = Object.assign(
                    Object.assign({}, this.headers),
                    'POST' === e && { 'x-upsert': String(n.upsert) }
                  )
                  const a = n.metadata
                  'undefined' != typeof Blob && s instanceof Blob
                    ? ((i = new FormData()),
                      i.append('cacheControl', n.cacheControl),
                      a && i.append('metadata', this.encodeMetadata(a)),
                      i.append('', s))
                    : 'undefined' != typeof FormData && s instanceof FormData
                    ? ((i = s),
                      i.append('cacheControl', n.cacheControl),
                      a && i.append('metadata', this.encodeMetadata(a)))
                    : ((i = s),
                      (o['cache-control'] = `max-age=${n.cacheControl}`),
                      (o['content-type'] = n.contentType),
                      a && (o['x-metadata'] = this.toBase64(this.encodeMetadata(a)))),
                    (null == r ? void 0 : r.headers) &&
                      (o = Object.assign(Object.assign({}, o), r.headers))
                  const c = this._removeEmptyFolders(t),
                    l = this._getFinalPath(c),
                    h = yield this.fetch(
                      `${this.url}/object/${l}`,
                      Object.assign(
                        { method: e, body: i, headers: o },
                        (null == n ? void 0 : n.duplex) ? { duplex: n.duplex } : {}
                      )
                    ),
                    u = yield h.json()
                  return h.ok
                    ? { data: { path: c, id: u.Id, fullPath: u.Key }, error: null }
                    : { data: null, error: u }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            upload(e, t, s) {
              return y(this, void 0, void 0, function* () {
                return this.uploadOrUpdate('POST', e, t, s)
              })
            }
            uploadToSignedUrl(e, t, s, r) {
              return y(this, void 0, void 0, function* () {
                const n = this._removeEmptyFolders(e),
                  o = this._getFinalPath(n),
                  a = new URL(this.url + `/object/upload/sign/${o}`)
                a.searchParams.set('token', t)
                try {
                  let e
                  const t = Object.assign({ upsert: _.upsert }, r),
                    i = Object.assign(Object.assign({}, this.headers), {
                      'x-upsert': String(t.upsert),
                    })
                  'undefined' != typeof Blob && s instanceof Blob
                    ? ((e = new FormData()),
                      e.append('cacheControl', t.cacheControl),
                      e.append('', s))
                    : 'undefined' != typeof FormData && s instanceof FormData
                    ? ((e = s), e.append('cacheControl', t.cacheControl))
                    : ((e = s),
                      (i['cache-control'] = `max-age=${t.cacheControl}`),
                      (i['content-type'] = t.contentType))
                  const o = yield this.fetch(a.toString(), { method: 'PUT', body: e, headers: i }),
                    c = yield o.json()
                  return o.ok
                    ? { data: { path: n, fullPath: c.Key }, error: null }
                    : { data: null, error: c }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            createSignedUploadUrl(e, t) {
              return y(this, void 0, void 0, function* () {
                try {
                  let s = this._getFinalPath(e)
                  const i = Object.assign({}, this.headers)
                  ;(null == t ? void 0 : t.upsert) && (i['x-upsert'] = 'true')
                  const n = yield g(
                      this.fetch,
                      `${this.url}/object/upload/sign/${s}`,
                      {},
                      { headers: i }
                    ),
                    o = new URL(this.url + n.url),
                    a = o.searchParams.get('token')
                  if (!a) throw new r('No token returned by API')
                  return { data: { signedUrl: o.toString(), path: e, token: a }, error: null }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            update(e, t, s) {
              return y(this, void 0, void 0, function* () {
                return this.uploadOrUpdate('PUT', e, t, s)
              })
            }
            move(e, t, s) {
              return y(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield g(
                      this.fetch,
                      `${this.url}/object/move`,
                      {
                        bucketId: this.bucketId,
                        sourceKey: e,
                        destinationKey: t,
                        destinationBucket: null == s ? void 0 : s.destinationBucket,
                      },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            copy(e, t, s) {
              return y(this, void 0, void 0, function* () {
                try {
                  return {
                    data: {
                      path: (yield g(
                        this.fetch,
                        `${this.url}/object/copy`,
                        {
                          bucketId: this.bucketId,
                          sourceKey: e,
                          destinationKey: t,
                          destinationBucket: null == s ? void 0 : s.destinationBucket,
                        },
                        { headers: this.headers }
                      )).Key,
                    },
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            createSignedUrl(e, t, s) {
              return y(this, void 0, void 0, function* () {
                try {
                  let r = this._getFinalPath(e),
                    i = yield g(
                      this.fetch,
                      `${this.url}/object/sign/${r}`,
                      Object.assign(
                        { expiresIn: t },
                        (null == s ? void 0 : s.transform) ? { transform: s.transform } : {}
                      ),
                      { headers: this.headers }
                    )
                  const n = (null == s ? void 0 : s.download)
                    ? `&download=${!0 === s.download ? '' : s.download}`
                    : ''
                  return (
                    (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${n}`) }),
                    { data: i, error: null }
                  )
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            createSignedUrls(e, t, s) {
              return y(this, void 0, void 0, function* () {
                try {
                  const r = yield g(
                      this.fetch,
                      `${this.url}/object/sign/${this.bucketId}`,
                      { expiresIn: t, paths: e },
                      { headers: this.headers }
                    ),
                    i = (null == s ? void 0 : s.download)
                      ? `&download=${!0 === s.download ? '' : s.download}`
                      : ''
                  return {
                    data: r.map((e) =>
                      Object.assign(Object.assign({}, e), {
                        signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${i}`) : null,
                      })
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            download(e, t) {
              return y(this, void 0, void 0, function* () {
                const s =
                    void 0 !== (null == t ? void 0 : t.transform)
                      ? 'render/image/authenticated'
                      : 'object',
                  r = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {}),
                  n = r ? `?${r}` : ''
                try {
                  const t = this._getFinalPath(e),
                    r = yield p(this.fetch, `${this.url}/${s}/${t}${n}`, {
                      headers: this.headers,
                      noResolveJson: !0,
                    })
                  return { data: yield r.blob(), error: null }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            info(e) {
              return y(this, void 0, void 0, function* () {
                const t = this._getFinalPath(e)
                try {
                  const e = yield p(this.fetch, `${this.url}/object/info/${t}`, {
                    headers: this.headers,
                  })
                  return { data: c(e), error: null }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            exists(e) {
              return y(this, void 0, void 0, function* () {
                const t = this._getFinalPath(e)
                try {
                  return (
                    yield (function (e, t, s) {
                      return l(this, void 0, void 0, function* () {
                        return f(
                          e,
                          'HEAD',
                          t,
                          Object.assign(Object.assign({}, s), { noResolveJson: !0 }),
                          undefined
                        )
                      })
                    })(this.fetch, `${this.url}/object/${t}`, { headers: this.headers }),
                    { data: !0, error: null }
                  )
                } catch (e) {
                  if (i(e) && e instanceof o) {
                    const t = e.originalError
                    if ([400, 404].includes(null == t ? void 0 : t.status))
                      return { data: !1, error: e }
                  }
                  throw e
                }
              })
            }
            getPublicUrl(e, t) {
              const s = this._getFinalPath(e),
                r = [],
                i = (null == t ? void 0 : t.download)
                  ? `download=${!0 === t.download ? '' : t.download}`
                  : ''
              '' !== i && r.push(i)
              const n = void 0 !== (null == t ? void 0 : t.transform) ? 'render/image' : 'object',
                o = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {})
              '' !== o && r.push(o)
              let a = r.join('&')
              return (
                '' !== a && (a = `?${a}`),
                { data: { publicUrl: encodeURI(`${this.url}/${n}/public/${s}${a}`) } }
              )
            }
            remove(e) {
              return y(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield v(
                      this.fetch,
                      `${this.url}/object/${this.bucketId}`,
                      { prefixes: e },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            list(e, t, s) {
              return y(this, void 0, void 0, function* () {
                try {
                  const r = Object.assign(Object.assign(Object.assign({}, m), t), {
                    prefix: e || '',
                  })
                  return {
                    data: yield g(
                      this.fetch,
                      `${this.url}/object/list/${this.bucketId}`,
                      r,
                      { headers: this.headers },
                      s
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            encodeMetadata(e) {
              return JSON.stringify(e)
            }
            toBase64(e) {
              return 'undefined' != typeof Buffer ? Buffer.from(e).toString('base64') : btoa(e)
            }
            _getFinalPath(e) {
              return `${this.bucketId}/${e}`
            }
            _removeEmptyFolders(e) {
              return e.replace(/^\/|\/$/g, '').replace(/\/+/g, '/')
            }
            transformOptsToQueryString(e) {
              const t = []
              return (
                e.width && t.push(`width=${e.width}`),
                e.height && t.push(`height=${e.height}`),
                e.resize && t.push(`resize=${e.resize}`),
                e.format && t.push(`format=${e.format}`),
                e.quality && t.push(`quality=${e.quality}`),
                t.join('&')
              )
            }
          }
          const b = { 'X-Client-Info': 'storage-js/2.7.1' }
          var k = function (e, t, s, r) {
            return new (s || (s = Promise))(function (i, n) {
              function o(e) {
                try {
                  c(r.next(e))
                } catch (e) {
                  n(e)
                }
              }
              function a(e) {
                try {
                  c(r.throw(e))
                } catch (e) {
                  n(e)
                }
              }
              function c(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof s
                      ? t
                      : new s(function (e) {
                          e(t)
                        })).then(o, a)
              }
              c((r = r.apply(e, t || [])).next())
            })
          }
          class T {
            constructor(e, t = {}, s) {
              ;(this.url = e),
                (this.headers = Object.assign(Object.assign({}, b), t)),
                (this.fetch = a(s))
            }
            listBuckets() {
              return k(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield p(this.fetch, `${this.url}/bucket`, { headers: this.headers }),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            getBucket(e) {
              return k(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield p(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            createBucket(e, t = { public: !1 }) {
              return k(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield g(
                      this.fetch,
                      `${this.url}/bucket`,
                      {
                        id: e,
                        name: e,
                        public: t.public,
                        file_size_limit: t.fileSizeLimit,
                        allowed_mime_types: t.allowedMimeTypes,
                      },
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            updateBucket(e, t) {
              return k(this, void 0, void 0, function* () {
                try {
                  const s = yield (function (e, t, s, r) {
                    return l(this, void 0, void 0, function* () {
                      return f(e, 'PUT', t, r, undefined, s)
                    })
                  })(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    {
                      id: e,
                      name: e,
                      public: t.public,
                      file_size_limit: t.fileSizeLimit,
                      allowed_mime_types: t.allowedMimeTypes,
                    },
                    { headers: this.headers }
                  )
                  return { data: s, error: null }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            emptyBucket(e) {
              return k(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield g(
                      this.fetch,
                      `${this.url}/bucket/${e}/empty`,
                      {},
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
            deleteBucket(e) {
              return k(this, void 0, void 0, function* () {
                try {
                  return {
                    data: yield v(
                      this.fetch,
                      `${this.url}/bucket/${e}`,
                      {},
                      { headers: this.headers }
                    ),
                    error: null,
                  }
                } catch (e) {
                  if (i(e)) return { data: null, error: e }
                  throw e
                }
              })
            }
          }
          class S extends T {
            constructor(e, t = {}, s) {
              super(e, t, s)
            }
            from(e) {
              return new w(this.url, this.headers, e, this.fetch)
            }
          }
        },
        787: function (e, t, s) {
          var r =
            (this && this.__awaiter) ||
            function (e, t, s, r) {
              return new (s || (s = Promise))(function (i, n) {
                function o(e) {
                  try {
                    c(r.next(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof s
                        ? t
                        : new s(function (e) {
                            e(t)
                          })).then(o, a)
                }
                c((r = r.apply(e, t || [])).next())
              })
            }
          Object.defineProperty(t, '__esModule', { value: !0 })
          const i = s(227),
            n = s(279),
            o = s(932),
            a = s(623),
            c = s(985),
            l = s(720),
            h = s(793),
            u = s(689)
          t.default = class {
            constructor(e, t, s) {
              var r, i, o
              if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
                throw new Error('supabaseUrl is required.')
              if (!t) throw new Error('supabaseKey is required.')
              const a = (0, h.stripTrailingSlash)(e)
              ;(this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, 'ws')),
                (this.authUrl = `${a}/auth/v1`),
                (this.storageUrl = `${a}/storage/v1`),
                (this.functionsUrl = `${a}/functions/v1`)
              const u = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
                d = {
                  db: c.DEFAULT_DB_OPTIONS,
                  realtime: c.DEFAULT_REALTIME_OPTIONS,
                  auth: Object.assign(Object.assign({}, c.DEFAULT_AUTH_OPTIONS), { storageKey: u }),
                  global: c.DEFAULT_GLOBAL_OPTIONS,
                },
                f = (0, h.applySettingDefaults)(null != s ? s : {}, d)
              ;(this.storageKey = null !== (r = f.auth.storageKey) && void 0 !== r ? r : ''),
                (this.headers = null !== (i = f.global.headers) && void 0 !== i ? i : {}),
                f.accessToken
                  ? ((this.accessToken = f.accessToken),
                    (this.auth = new Proxy(
                      {},
                      {
                        get: (e, t) => {
                          throw new Error(
                            `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                              t
                            )} is not possible`
                          )
                        },
                      }
                    )))
                  : (this.auth = this._initSupabaseAuthClient(
                      null !== (o = f.auth) && void 0 !== o ? o : {},
                      this.headers,
                      f.global.fetch
                    )),
                (this.fetch = (0, l.fetchWithAuth)(
                  t,
                  this._getAccessToken.bind(this),
                  f.global.fetch
                )),
                (this.realtime = this._initRealtimeClient(
                  Object.assign(
                    { headers: this.headers, accessToken: this._getAccessToken.bind(this) },
                    f.realtime
                  )
                )),
                (this.rest = new n.PostgrestClient(`${a}/rest/v1`, {
                  headers: this.headers,
                  schema: f.db.schema,
                  fetch: this.fetch,
                })),
                f.accessToken || this._listenForAuthEvents()
            }
            get functions() {
              return new i.FunctionsClient(this.functionsUrl, {
                headers: this.headers,
                customFetch: this.fetch,
              })
            }
            get storage() {
              return new a.StorageClient(this.storageUrl, this.headers, this.fetch)
            }
            from(e) {
              return this.rest.from(e)
            }
            schema(e) {
              return this.rest.schema(e)
            }
            rpc(e, t = {}, s = {}) {
              return this.rest.rpc(e, t, s)
            }
            channel(e, t = { config: {} }) {
              return this.realtime.channel(e, t)
            }
            getChannels() {
              return this.realtime.getChannels()
            }
            removeChannel(e) {
              return this.realtime.removeChannel(e)
            }
            removeAllChannels() {
              return this.realtime.removeAllChannels()
            }
            _getAccessToken() {
              var e, t
              return r(this, void 0, void 0, function* () {
                if (this.accessToken) return yield this.accessToken()
                const { data: s } = yield this.auth.getSession()
                return null !==
                  (t = null === (e = s.session) || void 0 === e ? void 0 : e.access_token) &&
                  void 0 !== t
                  ? t
                  : null
              })
            }
            _initSupabaseAuthClient(
              {
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: s,
                storage: r,
                storageKey: i,
                flowType: n,
                lock: o,
                debug: a,
              },
              c,
              l
            ) {
              var h
              const d = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`,
              }
              return new u.SupabaseAuthClient({
                url: this.authUrl,
                headers: Object.assign(Object.assign({}, d), c),
                storageKey: i,
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: s,
                storage: r,
                flowType: n,
                lock: o,
                debug: a,
                fetch: l,
                hasCustomAuthorizationHeader:
                  null !== (h = 'Authorization' in this.headers) && void 0 !== h && h,
              })
            }
            _initRealtimeClient(e) {
              return new o.RealtimeClient(
                this.realtimeUrl,
                Object.assign(Object.assign({}, e), {
                  params: Object.assign(
                    { apikey: this.supabaseKey },
                    null == e ? void 0 : e.params
                  ),
                })
              )
            }
            _listenForAuthEvents() {
              return this.auth.onAuthStateChange((e, t) => {
                this._handleTokenChanged(e, 'CLIENT', null == t ? void 0 : t.access_token)
              })
            }
            _handleTokenChanged(e, t, s) {
              ;('TOKEN_REFRESHED' !== e && 'SIGNED_IN' !== e) || this.changedAccessToken === s
                ? 'SIGNED_OUT' === e &&
                  (this.realtime.setAuth(),
                  'STORAGE' == t && this.auth.signOut(),
                  (this.changedAccessToken = void 0))
                : (this.changedAccessToken = s)
            }
          }
        },
        440: function (e, t, s) {
          var r =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, s, r) {
                    void 0 === r && (r = s)
                    var i = Object.getOwnPropertyDescriptor(t, s)
                    ;(i && !('get' in i ? !t.__esModule : i.writable || i.configurable)) ||
                      (i = {
                        enumerable: !0,
                        get: function () {
                          return t[s]
                        },
                      }),
                      Object.defineProperty(e, r, i)
                  }
                : function (e, t, s, r) {
                    void 0 === r && (r = s), (e[r] = t[s])
                  }),
            i =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var s in e)
                  'default' === s || Object.prototype.hasOwnProperty.call(t, s) || r(t, e, s)
              },
            n =
              (this && this.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e }
              }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.createClient =
              t.SupabaseClient =
              t.FunctionRegion =
              t.FunctionsError =
              t.FunctionsRelayError =
              t.FunctionsFetchError =
              t.FunctionsHttpError =
              t.PostgrestError =
                void 0)
          const o = n(s(787))
          i(s(235), t)
          var a = s(279)
          Object.defineProperty(t, 'PostgrestError', {
            enumerable: !0,
            get: function () {
              return a.PostgrestError
            },
          })
          var c = s(227)
          Object.defineProperty(t, 'FunctionsHttpError', {
            enumerable: !0,
            get: function () {
              return c.FunctionsHttpError
            },
          }),
            Object.defineProperty(t, 'FunctionsFetchError', {
              enumerable: !0,
              get: function () {
                return c.FunctionsFetchError
              },
            }),
            Object.defineProperty(t, 'FunctionsRelayError', {
              enumerable: !0,
              get: function () {
                return c.FunctionsRelayError
              },
            }),
            Object.defineProperty(t, 'FunctionsError', {
              enumerable: !0,
              get: function () {
                return c.FunctionsError
              },
            }),
            Object.defineProperty(t, 'FunctionRegion', {
              enumerable: !0,
              get: function () {
                return c.FunctionRegion
              },
            }),
            i(s(932), t)
          var l = s(787)
          Object.defineProperty(t, 'SupabaseClient', {
            enumerable: !0,
            get: function () {
              return n(l).default
            },
          }),
            (t.createClient = (e, t, s) => new o.default(e, t, s))
        },
        689: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.SupabaseAuthClient = void 0)
          const r = s(235)
          class i extends r.AuthClient {
            constructor(e) {
              super(e)
            }
          }
          t.SupabaseAuthClient = i
        },
        985: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.DEFAULT_REALTIME_OPTIONS =
              t.DEFAULT_AUTH_OPTIONS =
              t.DEFAULT_DB_OPTIONS =
              t.DEFAULT_GLOBAL_OPTIONS =
              t.DEFAULT_HEADERS =
                void 0)
          const r = s(560)
          let i = ''
          ;(i =
            'undefined' != typeof Deno
              ? 'deno'
              : 'undefined' != typeof document
              ? 'web'
              : 'undefined' != typeof navigator && 'ReactNative' === navigator.product
              ? 'react-native'
              : 'node'),
            (t.DEFAULT_HEADERS = { 'X-Client-Info': `supabase-js-${i}/${r.version}` }),
            (t.DEFAULT_GLOBAL_OPTIONS = { headers: t.DEFAULT_HEADERS }),
            (t.DEFAULT_DB_OPTIONS = { schema: 'public' }),
            (t.DEFAULT_AUTH_OPTIONS = {
              autoRefreshToken: !0,
              persistSession: !0,
              detectSessionInUrl: !0,
              flowType: 'implicit',
            }),
            (t.DEFAULT_REALTIME_OPTIONS = {})
        },
        720: function (e, t, s) {
          var r =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, s, r) {
                    void 0 === r && (r = s)
                    var i = Object.getOwnPropertyDescriptor(t, s)
                    ;(i && !('get' in i ? !t.__esModule : i.writable || i.configurable)) ||
                      (i = {
                        enumerable: !0,
                        get: function () {
                          return t[s]
                        },
                      }),
                      Object.defineProperty(e, r, i)
                  }
                : function (e, t, s, r) {
                    void 0 === r && (r = s), (e[r] = t[s])
                  }),
            i =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (e, t) {
                    Object.defineProperty(e, 'default', { enumerable: !0, value: t })
                  }
                : function (e, t) {
                    e.default = t
                  }),
            n =
              (this && this.__importStar) ||
              function (e) {
                if (e && e.__esModule) return e
                var t = {}
                if (null != e)
                  for (var s in e)
                    'default' !== s && Object.prototype.hasOwnProperty.call(e, s) && r(t, e, s)
                return i(t, e), t
              },
            o =
              (this && this.__awaiter) ||
              function (e, t, s, r) {
                return new (s || (s = Promise))(function (i, n) {
                  function o(e) {
                    try {
                      c(r.next(e))
                    } catch (e) {
                      n(e)
                    }
                  }
                  function a(e) {
                    try {
                      c(r.throw(e))
                    } catch (e) {
                      n(e)
                    }
                  }
                  function c(e) {
                    var t
                    e.done
                      ? i(e.value)
                      : ((t = e.value),
                        t instanceof s
                          ? t
                          : new s(function (e) {
                              e(t)
                            })).then(o, a)
                  }
                  c((r = r.apply(e, t || [])).next())
                })
              }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.fetchWithAuth = t.resolveHeadersConstructor = t.resolveFetch = void 0)
          const a = n(s(907))
          ;(t.resolveFetch = (e) => {
            let t
            return (t = e || ('undefined' == typeof fetch ? a.default : fetch)), (...e) => t(...e)
          }),
            (t.resolveHeadersConstructor = () =>
              'undefined' == typeof Headers ? a.Headers : Headers),
            (t.fetchWithAuth = (e, s, r) => {
              const i = (0, t.resolveFetch)(r),
                n = (0, t.resolveHeadersConstructor)()
              return (t, r) =>
                o(void 0, void 0, void 0, function* () {
                  var o
                  const a = null !== (o = yield s()) && void 0 !== o ? o : e
                  let c = new n(null == r ? void 0 : r.headers)
                  return (
                    c.has('apikey') || c.set('apikey', e),
                    c.has('Authorization') || c.set('Authorization', `Bearer ${a}`),
                    i(t, Object.assign(Object.assign({}, r), { headers: c }))
                  )
                })
            })
        },
        793: function (e, t) {
          var s =
            (this && this.__awaiter) ||
            function (e, t, s, r) {
              return new (s || (s = Promise))(function (i, n) {
                function o(e) {
                  try {
                    c(r.next(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e))
                  } catch (e) {
                    n(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof s
                        ? t
                        : new s(function (e) {
                            e(t)
                          })).then(o, a)
                }
                c((r = r.apply(e, t || [])).next())
              })
            }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.applySettingDefaults = t.isBrowser = t.stripTrailingSlash = t.uuid = void 0),
            (t.uuid = function () {
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                var t = (16 * Math.random()) | 0
                return ('x' == e ? t : (3 & t) | 8).toString(16)
              })
            }),
            (t.stripTrailingSlash = function (e) {
              return e.replace(/\/$/, '')
            }),
            (t.isBrowser = () => 'undefined' != typeof window),
            (t.applySettingDefaults = function (e, t) {
              const { db: r, auth: i, realtime: n, global: o } = e,
                { db: a, auth: c, realtime: l, global: h } = t,
                u = {
                  db: Object.assign(Object.assign({}, a), r),
                  auth: Object.assign(Object.assign({}, c), i),
                  realtime: Object.assign(Object.assign({}, l), n),
                  global: Object.assign(Object.assign({}, h), o),
                  accessToken: () =>
                    s(this, void 0, void 0, function* () {
                      return ''
                    }),
                }
              return e.accessToken ? (u.accessToken = e.accessToken) : delete u.accessToken, u
            })
        },
        560: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.version = void 0),
            (t.version = '0.0.0-automated')
        },
      },
      t = {}
    function s(r) {
      var i = t[r]
      if (void 0 !== i) return i.exports
      var n = (t[r] = { exports: {} })
      return e[r].call(n.exports, n, n.exports, s), n.exports
    }
    return (
      (s.d = (e, t) => {
        for (var r in t)
          s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
      }),
      (s.g = (function () {
        if ('object' == typeof globalThis) return globalThis
        try {
          return this || new Function('return this')()
        } catch (e) {
          if ('object' == typeof window) return window
        }
      })()),
      (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (s.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      s(440)
    )
  })()
)
