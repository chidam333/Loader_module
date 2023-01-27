(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function p() {}
function q(e) {
  return e();
}
function P() {
  return Object.create(null);
}
function w(e) {
  e.forEach(q);
}
function C(e) {
  return typeof e == "function";
}
function M(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function G(e) {
  return Object.keys(e).length === 0;
}
function _(e, t) {
  e.appendChild(t);
}
function k(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function m(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createTextNode(e);
}
function Q() {
  return J(" ");
}
function g(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function R(e) {
  return Array.from(e.childNodes);
}
function j(e, t, n, i) {
  n === null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, n, i ? "important" : "");
}
let A;
function y(e) {
  A = e;
}
const h = [],
  I = [],
  $ = [],
  S = [],
  U = Promise.resolve();
let b = !1;
function V() {
  b || ((b = !0), U.then(B));
}
function E(e) {
  $.push(e);
}
const x = new Set();
let d = 0;
function B() {
  if (d !== 0) return;
  const e = A;
  do {
    try {
      for (; d < h.length; ) {
        const t = h[d];
        d++, y(t), W(t.$$);
      }
    } catch (t) {
      throw ((h.length = 0), (d = 0), t);
    }
    for (y(null), h.length = 0, d = 0; I.length; ) I.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const n = $[t];
      x.has(n) || (x.add(n), n());
    }
    $.length = 0;
  } while (h.length);
  for (; S.length; ) S.pop()();
  (b = !1), x.clear(), y(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), w(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(E);
  }
}
const v = new Set();
let X;
function T(e, t) {
  e && e.i && (v.delete(e), e.i(t));
}
function Y(e, t, n, i) {
  if (e && e.o) {
    if (v.has(e)) return;
    v.add(e),
      X.c.push(() => {
        v.delete(e), i && (n && e.d(1), i());
      }),
      e.o(t);
  } else i && i();
}
function Z(e) {
  e && e.c();
}
function F(e, t, n, i) {
  const { fragment: r, after_update: s } = e.$$;
  r && r.m(t, n),
    i ||
      E(() => {
        const l = e.$$.on_mount.map(q).filter(C);
        e.$$.on_destroy ? e.$$.on_destroy.push(...l) : w(l),
          (e.$$.on_mount = []);
      }),
    s.forEach(E);
}
function H(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (w(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ee(e, t) {
  e.$$.dirty[0] === -1 && (h.push(e), V(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function K(e, t, n, i, r, s, l, f = [-1]) {
  const c = A;
  y(e);
  const o = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: p,
    not_equal: r,
    bound: P(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    callbacks: P(),
    dirty: f,
    skip_bound: !1,
    root: t.target || c.$$.root,
  });
  l && l(o.root);
  let a = !1;
  if (
    ((o.ctx = n
      ? n(e, t.props || {}, (u, N, ...O) => {
          const z = O.length ? O[0] : N;
          return (
            o.ctx &&
              r(o.ctx[u], (o.ctx[u] = z)) &&
              (!o.skip_bound && o.bound[u] && o.bound[u](z), a && ee(e, u)),
            N
          );
        })
      : []),
    o.update(),
    (a = !0),
    w(o.before_update),
    (o.fragment = i ? i(o.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const u = R(t.target);
      o.fragment && o.fragment.l(u), u.forEach(L);
    } else o.fragment && o.fragment.c();
    t.intro && T(e.$$.fragment), F(e, t.target, t.anchor, t.customElement), B();
  }
  y(c);
}
class D {
  $destroy() {
    H(this, 1), (this.$destroy = p);
  }
  $on(t, n) {
    if (!C(n)) return p;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !G(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
function te(e) {
  let t;
  return {
    c() {
      (t = m("main")),
        (t.innerHTML =
          '<div class="full svelte-l71khp" style="width: 40vw; display:grid;"><img src="./logoreal.png" alt="logo" style="width: 15vw;"/></div>');
    },
    m(n, i) {
      k(n, t, i);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && L(t);
    },
  };
}
class ne extends D {
  constructor(t) {
    super(), K(this, t, null, te, M, {});
  }
}
function re(e) {
  let t, n, i, r, s, l, f, c;
  return (
    (r = new ne({})),
    {
      c() {
        (t = m("main")),
          (n = m("div")),
          (i = m("div")),
          Z(r.$$.fragment),
          (s = Q()),
          (l = m("div")),
          (f = m("div")),
          g(f, "class", "sqwrap svelte-rimrlz"),
          j(f, "width", e[0] + "vw"),
          g(l, "class", "square svelte-rimrlz"),
          g(i, "class", "overlay svelte-rimrlz"),
          g(n, "class", "full svelte-rimrlz"),
          g(t, "class", "svelte-rimrlz");
      },
      m(o, a) {
        k(o, t, a),
          _(t, n),
          _(n, i),
          F(r, i, null),
          _(i, s),
          _(i, l),
          _(l, f),
          (c = !0);
      },
      p(o, [a]) {
        (!c || a & 1) && j(f, "width", o[0] + "vw");
      },
      i(o) {
        c || (T(r.$$.fragment, o), (c = !0));
      },
      o(o) {
        Y(r.$$.fragment, o), (c = !1);
      },
      d(o) {
        o && L(t), H(r);
      },
    }
  );
}
function ie(e, t, n) {
  let i = 0,
    r = setInterval(() => {
      i >= 40 && clearInterval(r), n(0, (i += 0.1));
    }, 1);
  return [i];
}
class oe extends D {
  constructor(t) {
    super(), K(this, t, ie, re, M, {});
  }
}
new oe({ target: document.getElementById("app") });
