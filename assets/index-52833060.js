(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
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
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function m() {}
function C(e) {
  return e();
}
function P() {
  return Object.create(null);
}
function x(e) {
  e.forEach(C);
}
function M(e) {
  return typeof e == "function";
}
function B(e, t) {
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
function T(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function h(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createTextNode(e);
}
function Q() {
  return J(" ");
}
function y(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function R(e) {
  return Array.from(e.childNodes);
}
function I(e, t, n, o) {
  n === null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, n, o ? "important" : "");
}
let A;
function g(e) {
  A = e;
}
const p = [],
  S = [],
  $ = [],
  q = [],
  U = Promise.resolve();
let b = !1;
function V() {
  b || ((b = !0), U.then(k));
}
function E(e) {
  $.push(e);
}
const w = new Set();
let d = 0;
function k() {
  if (d !== 0) return;
  const e = A;
  do {
    try {
      for (; d < p.length; ) {
        const t = p[d];
        d++, g(t), W(t.$$);
      }
    } catch (t) {
      throw ((p.length = 0), (d = 0), t);
    }
    for (g(null), p.length = 0, d = 0; S.length; ) S.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const n = $[t];
      w.has(n) || (w.add(n), n());
    }
    $.length = 0;
  } while (p.length);
  for (; q.length; ) q.pop()();
  (b = !1), w.clear(), g(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(E);
  }
}
const v = new Set();
let X;
function F(e, t) {
  e && e.i && (v.delete(e), e.i(t));
}
function Y(e, t, n, o) {
  if (e && e.o) {
    if (v.has(e)) return;
    v.add(e),
      X.c.push(() => {
        v.delete(e), o && (n && e.d(1), o());
      }),
      e.o(t);
  } else o && o();
}
function Z(e) {
  e && e.c();
}
function H(e, t, n, o) {
  const { fragment: r, after_update: s } = e.$$;
  r && r.m(t, n),
    o ||
      E(() => {
        const l = e.$$.on_mount.map(C).filter(M);
        e.$$.on_destroy ? e.$$.on_destroy.push(...l) : x(l),
          (e.$$.on_mount = []);
      }),
    s.forEach(E);
}
function K(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (x(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ee(e, t) {
  e.$$.dirty[0] === -1 && (p.push(e), V(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function z(e, t, n, o, r, s, l, f = [-1]) {
  const u = A;
  g(e);
  const i = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: m,
    not_equal: r,
    bound: P(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    callbacks: P(),
    dirty: f,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  l && l(i.root);
  let a = !1;
  if (
    ((i.ctx = n
      ? n(e, t.props || {}, (c, N, ...O) => {
          const j = O.length ? O[0] : N;
          return (
            i.ctx &&
              r(i.ctx[c], (i.ctx[c] = j)) &&
              (!i.skip_bound && i.bound[c] && i.bound[c](j), a && ee(e, c)),
            N
          );
        })
      : []),
    i.update(),
    (a = !0),
    x(i.before_update),
    (i.fragment = o ? o(i.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const c = R(t.target);
      i.fragment && i.fragment.l(c), c.forEach(L);
    } else i.fragment && i.fragment.c();
    t.intro && F(e.$$.fragment), H(e, t.target, t.anchor, t.customElement), k();
  }
  g(u);
}
class D {
  $destroy() {
    K(this, 1), (this.$destroy = m);
  }
  $on(t, n) {
    if (!M(n)) return m;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      o.push(n),
      () => {
        const r = o.indexOf(n);
        r !== -1 && o.splice(r, 1);
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
      (t = h("main")),
        (t.innerHTML =
          '<div class="full svelte-1svnmmj" style="width: 40vw; display:grid;"><img src="./logoreal.png" alt="logo" style="width: 40vw;"/></div>');
    },
    m(n, o) {
      T(n, t, o);
    },
    p: m,
    i: m,
    o: m,
    d(n) {
      n && L(t);
    },
  };
}
class ne extends D {
  constructor(t) {
    super(), z(this, t, null, te, B, {});
  }
}
function re(e) {
  let t, n, o, r, s, l, f, u;
  return (
    (r = new ne({})),
    {
      c() {
        (t = h("main")),
          (n = h("div")),
          (o = h("div")),
          Z(r.$$.fragment),
          (s = Q()),
          (l = h("div")),
          (f = h("div")),
          y(f, "class", "sqwrap svelte-1noxule"),
          I(f, "width", e[0] + "vw"),
          y(l, "class", "square svelte-1noxule"),
          y(o, "class", "overlay svelte-1noxule"),
          y(n, "class", "full svelte-1noxule");
      },
      m(i, a) {
        T(i, t, a),
          _(t, n),
          _(n, o),
          H(r, o, null),
          _(o, s),
          _(o, l),
          _(l, f),
          (u = !0);
      },
      p(i, [a]) {
        (!u || a & 1) && I(f, "width", i[0] + "vw");
      },
      i(i) {
        u || (F(r.$$.fragment, i), (u = !0));
      },
      o(i) {
        Y(r.$$.fragment, i), (u = !1);
      },
      d(i) {
        i && L(t), K(r);
      },
    }
  );
}
function oe(e, t, n) {
  let o = 0,
    r = setInterval(() => {
      o >= 40 && clearInterval(r), n(0, (o += 0.1));
    }, 1);
  return [o];
}
class ie extends D {
  constructor(t) {
    super(), z(this, t, oe, re, B, {});
  }
}
new ie({ target: document.getElementById("app") });
