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
function m() {}
function I(e) {
  return e();
}
function j() {
  return Object.create(null);
}
function w(e) {
  e.forEach(I);
}
function S(e) {
  return typeof e == "function";
}
function M(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function _(e, t) {
  e.appendChild(t);
}
function B(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function h(e) {
  return document.createElement(e);
}
function G(e) {
  return document.createTextNode(e);
}
function J() {
  return G(" ");
}
function g(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Q(e) {
  return Array.from(e.childNodes);
}
function q(e, t, n, i) {
  n === null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, n, i ? "important" : "");
}
let O;
function y(e) {
  O = e;
}
const p = [],
  z = [],
  $ = [],
  C = [],
  R = Promise.resolve();
let b = !1;
function V() {
  b || ((b = !0), R.then(T));
}
function E(e) {
  $.push(e);
}
const x = new Set();
let d = 0;
function T() {
  if (d !== 0) return;
  const e = O;
  do {
    try {
      for (; d < p.length; ) {
        const t = p[d];
        d++, y(t), W(t.$$);
      }
    } catch (t) {
      throw ((p.length = 0), (d = 0), t);
    }
    for (y(null), p.length = 0, d = 0; z.length; ) z.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const n = $[t];
      x.has(n) || (x.add(n), n());
    }
    $.length = 0;
  } while (p.length);
  for (; C.length; ) C.pop()();
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
function k(e, t) {
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
function D(e, t, n, i) {
  const { fragment: r, after_update: s } = e.$$;
  r && r.m(t, n),
    i ||
      E(() => {
        const l = e.$$.on_mount.map(I).filter(S);
        e.$$.on_destroy ? e.$$.on_destroy.push(...l) : w(l),
          (e.$$.on_mount = []);
      }),
    s.forEach(E);
}
function F(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (w(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ee(e, t) {
  e.$$.dirty[0] === -1 && (p.push(e), V(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function H(e, t, n, i, r, s, l, f = [-1]) {
  const u = O;
  y(e);
  const o = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: m,
    not_equal: r,
    bound: j(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    callbacks: j(),
    dirty: f,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  l && l(o.root);
  let a = !1;
  if (
    ((o.ctx = n
      ? n(e, t.props || {}, (c, A, ...N) => {
          const P = N.length ? N[0] : A;
          return (
            o.ctx &&
              r(o.ctx[c], (o.ctx[c] = P)) &&
              (!o.skip_bound && o.bound[c] && o.bound[c](P), a && ee(e, c)),
            A
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
      const c = Q(t.target);
      o.fragment && o.fragment.l(c), c.forEach(L);
    } else o.fragment && o.fragment.c();
    t.intro && k(e.$$.fragment), D(e, t.target, t.anchor, t.customElement), T();
  }
  y(u);
}
class K {
  $destroy() {
    F(this, 1), (this.$destroy = m);
  }
  $on(t, n) {
    if (!S(n)) return m;
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
      !U(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
function te(e) {
  let t;
  return {
    c() {
      (t = h("main")),
        (t.innerHTML =
          '<div class="full svelte-vlbq6e" style="width: 40vw; display:grid;"><img src="./logoreal.png" alt="logo" style="width: 40vw;"/></div>');
    },
    m(n, i) {
      B(n, t, i);
    },
    p: m,
    i: m,
    o: m,
    d(n) {
      n && L(t);
    },
  };
}
class ne extends K {
  constructor(t) {
    super(), H(this, t, null, te, M, {});
  }
}
function re(e) {
  let t, n, i, r, s, l, f, u;
  return (
    (r = new ne({})),
    {
      c() {
        (t = h("main")),
          (n = h("div")),
          (i = h("div")),
          Z(r.$$.fragment),
          (s = J()),
          (l = h("div")),
          (f = h("div")),
          g(f, "class", "sqwrap svelte-ua7ztl"),
          q(f, "width", e[0] + "vw"),
          g(l, "class", "square svelte-ua7ztl"),
          g(i, "class", "overlay svelte-ua7ztl"),
          g(n, "class", "full"),
          g(t, "class", "svelte-ua7ztl");
      },
      m(o, a) {
        B(o, t, a),
          _(t, n),
          _(n, i),
          D(r, i, null),
          _(i, s),
          _(i, l),
          _(l, f),
          (u = !0);
      },
      p(o, [a]) {
        (!u || a & 1) && q(f, "width", o[0] + "vw");
      },
      i(o) {
        u || (k(r.$$.fragment, o), (u = !0));
      },
      o(o) {
        Y(r.$$.fragment, o), (u = !1);
      },
      d(o) {
        o && L(t), F(r);
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
class oe extends K {
  constructor(t) {
    super(), H(this, t, ie, re, M, {});
  }
}
new oe({ target: document.getElementById("app") });
