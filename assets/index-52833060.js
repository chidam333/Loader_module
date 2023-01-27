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
  function C(e) {
    return e();
  }
  function j() {
    return Object.create(null);
  }
  function w(e) {
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
  function E(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function p(e) {
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
  function P(e, t, n, i) {
    n === null
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, i ? "important" : "");
  }
  let L;
  function g(e) {
    L = e;
  }
  const h = [],
    I = [],
    $ = [],
    S = [],
    U = Promise.resolve();
  let b = !1;
  function V() {
    b || ((b = !0), U.then(k));
  }
  function q(e) {
    $.push(e);
  }
  const x = new Set();
  let d = 0;
  function k() {
    if (d !== 0) return;
    const e = L;
    do {
      try {
        for (; d < h.length; ) {
          const t = h[d];
          d++, g(t), W(t.$$);
        }
      } catch (t) {
        throw ((h.length = 0), (d = 0), t);
      }
      for (g(null), h.length = 0, d = 0; I.length; ) I.pop()();
      for (let t = 0; t < $.length; t += 1) {
        const n = $[t];
        x.has(n) || (x.add(n), n());
      }
      $.length = 0;
    } while (h.length);
    for (; S.length; ) S.pop()();
    (b = !1), x.clear(), g(e);
  }
  function W(e) {
    if (e.fragment !== null) {
      e.update(), w(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(q);
    }
  }
  const v = new Set();
  let X;
  function F(e, t) {
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
  function H(e, t, n, i) {
    const { fragment: r, after_update: s } = e.$$;
    r && r.m(t, n),
      i ||
        q(() => {
          const l = e.$$.on_mount.map(C).filter(M);
          e.$$.on_destroy ? e.$$.on_destroy.push(...l) : w(l),
            (e.$$.on_mount = []);
        }),
      s.forEach(q);
  }
  function K(e, t) {
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
  function z(e, t, n, i, r, s, l, f = [-1]) {
    const u = L;
    g(e);
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
            const O = N.length ? N[0] : A;
            return (
              o.ctx &&
                r(o.ctx[c], (o.ctx[c] = O)) &&
                (!o.skip_bound && o.bound[c] && o.bound[c](O), a && ee(e, c)),
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
        const c = R(t.target);
        o.fragment && o.fragment.l(c), c.forEach(E);
      } else o.fragment && o.fragment.c();
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
        (t = p("main")),
          (t.innerHTML =
            '<div class="full svelte-1svnmmj" style="width: 40vw; display:grid;"><img src="./logo.png" alt="logo" style="width: 15vw;"/></div>');
      },
      m(n, i) {
        T(n, t, i);
      },
      p: m,
      i: m,
      o: m,
      d(n) {
        n && E(t);
      },
    };
  }
  class ne extends D {
    constructor(t) {
      super(), z(this, t, null, te, B, {});
    }
  }
  function re(e) {
    let t, n, i, r, s, l, f, u;
    return (
      (r = new ne({})),
      {
        c() {
          (t = p("main")),
            (n = p("div")),
            (i = p("div")),
            Z(r.$$.fragment),
            (s = Q()),
            (l = p("div")),
            (f = p("div")),
            y(f, "class", "sqwrap svelte-1qd3yq2"),
            P(f, "width", e[0] + "vw"),
            y(l, "class", "square svelte-1qd3yq2"),
            y(i, "class", "overlay svelte-1qd3yq2"),
            y(n, "class", "full svelte-1qd3yq2");
        },
        m(o, a) {
          T(o, t, a),
            _(t, n),
            _(n, i),
            H(r, i, null),
            _(i, s),
            _(i, l),
            _(l, f),
            (u = !0);
        },
        p(o, [a]) {
          (!u || a & 1) && P(f, "width", o[0] + "vw");
        },
        i(o) {
          u || (F(r.$$.fragment, o), (u = !0));
        },
        o(o) {
          Y(r.$$.fragment, o), (u = !1);
        },
        d(o) {
          o && E(t), K(r);
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
      super(), z(this, t, ie, re, B, {});
    }
  }
  new oe({ target: document.getElementById("app") });
  