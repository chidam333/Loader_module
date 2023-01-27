(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const l of o)
        if (l.type === "childList")
          for (const f of l.addedNodes)
            f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const l = {};
      return (
        o.integrity && (l.integrity = o.integrity),
        o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials"
          ? (l.credentials = "include")
          : o.crossorigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
        l
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const l = n(o);
      fetch(o.href, l);
    }
  })();
  function L() {}
  function G(e) {
    return e();
  }
  function F() {
    return Object.create(null);
  }
  function M(e) {
    e.forEach(G);
  }
  function J(e) {
    return typeof e == "function";
  }
  function Q(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function ee(e) {
    return Object.keys(e).length === 0;
  }
  function d(e, t) {
    e.appendChild(t);
  }
  function R(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function B(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function w(e) {
    return document.createElement(e);
  }
  function $(e) {
    return document.createTextNode(e);
  }
  function K() {
    return $(" ");
  }
  function N(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function te(e) {
    return Array.from(e.childNodes);
  }
  function O(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  function h(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }
  let H;
  function E(e) {
    H = e;
  }
  const b = [],
    z = [],
    x = [],
    D = [],
    ne = Promise.resolve();
  let I = !1;
  function re() {
    I || ((I = !0), ne.then(U));
  }
  function P(e) {
    x.push(e);
  }
  const C = new Set();
  let v = 0;
  function U() {
    if (v !== 0) return;
    const e = H;
    do {
      try {
        for (; v < b.length; ) {
          const t = b[v];
          v++, E(t), oe(t.$$);
        }
      } catch (t) {
        throw ((b.length = 0), (v = 0), t);
      }
      for (E(null), b.length = 0, v = 0; z.length; ) z.pop()();
      for (let t = 0; t < x.length; t += 1) {
        const n = x[t];
        C.has(n) || (C.add(n), n());
      }
      x.length = 0;
    } while (b.length);
    for (; D.length; ) D.pop()();
    (I = !1), C.clear(), E(e);
  }
  function oe(e) {
    if (e.fragment !== null) {
      e.update(), M(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(P);
    }
  }
  const j = new Set();
  let ie;
  function V(e, t) {
    e && e.i && (j.delete(e), e.i(t));
  }
  function se(e, t, n, r) {
    if (e && e.o) {
      if (j.has(e)) return;
      j.add(e),
        ie.c.push(() => {
          j.delete(e), r && (n && e.d(1), r());
        }),
        e.o(t);
    } else r && r();
  }
  function le(e) {
    e && e.c();
  }
  function W(e, t, n, r) {
    const { fragment: o, after_update: l } = e.$$;
    o && o.m(t, n),
      r ||
        P(() => {
          const f = e.$$.on_mount.map(G).filter(J);
          e.$$.on_destroy ? e.$$.on_destroy.push(...f) : M(f),
            (e.$$.on_mount = []);
        }),
      l.forEach(P);
  }
  function X(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (M(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function ue(e, t) {
    e.$$.dirty[0] === -1 && (b.push(e), re(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function Y(e, t, n, r, o, l, f, k = [-1]) {
    const i = H;
    E(e);
    const s = (e.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: L,
      not_equal: o,
      bound: F(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (i ? i.$$.context : [])),
      callbacks: F(),
      dirty: k,
      skip_bound: !1,
      root: t.target || i.$$.root,
    });
    f && f(s.root);
    let m = !1;
    if (
      ((s.ctx = n
        ? n(e, t.props || {}, (c, _, ...y) => {
            const g = y.length ? y[0] : _;
            return (
              s.ctx &&
                o(s.ctx[c], (s.ctx[c] = g)) &&
                (!s.skip_bound && s.bound[c] && s.bound[c](g), m && ue(e, c)),
              _
            );
          })
        : []),
      s.update(),
      (m = !0),
      M(s.before_update),
      (s.fragment = r ? r(s.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const c = te(t.target);
        s.fragment && s.fragment.l(c), c.forEach(B);
      } else s.fragment && s.fragment.c();
      t.intro && V(e.$$.fragment), W(e, t.target, t.anchor, t.customElement), U();
    }
    E(i);
  }
  class Z {
    $destroy() {
      X(this, 1), (this.$destroy = L);
    }
    $on(t, n) {
      if (!J(n)) return L;
      const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        r.push(n),
        () => {
          const o = r.indexOf(n);
          o !== -1 && r.splice(o, 1);
        }
      );
    }
    $set(t) {
      this.$$set &&
        !ee(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function fe(e) {
    let t;
    return {
      c() {
        (t = w("main")),
          (t.innerHTML =
            '<img src="../logo.png" alt="logo" style="width: 20vw;"/>');
      },
      m(n, r) {
        R(n, t, r);
      },
      p: L,
      i: L,
      o: L,
      d(n) {
        n && B(t);
      },
    };
  }
  class ce extends Z {
    constructor(t) {
      super(), Y(this, t, null, fe, Q, {});
    }
  }
  function ae(e) {
    let t,
      n,
      r,
      o,
      l,
      f,
      k,
      i,
      s,
      m = e[0] == 1 ? "." : "",
      c,
      _ = e[0] == 2 ? ".." : "",
      y,
      g = e[0] == 3 ? "..." : "",
      S,
      A = e[0] == 4 ? "...." : "",
      T,
      q,
      a;
    return (
      (o = new ce({})),
      {
        c() {
          (t = w("main")),
            (n = w("div")),
            (r = w("div")),
            le(o.$$.fragment),
            (l = K()),
            (f = w("div")),
            (f.innerHTML = '<div class="round svelte-1bpesyk"></div>'),
            (k = K()),
            (i = w("div")),
            (s = $("<wait")),
            (c = $(m)),
            (y = $(_)),
            (S = $(g)),
            (T = $(A)),
            (q = $("/>")),
            N(f, "class", "round-wrap svelte-1bpesyk"),
            N(i, "class", "wait svelte-1bpesyk"),
            h(i, "one", e[0] == 1),
            h(i, "two", e[0] == 2),
            h(i, "three", e[0] == 3),
            h(i, "four", e[0] == 4),
            N(r, "class", "overlay svelte-1bpesyk"),
            N(n, "class", "full svelte-1bpesyk");
        },
        m(u, p) {
          R(u, t, p),
            d(t, n),
            d(n, r),
            W(o, r, null),
            d(r, l),
            d(r, f),
            d(r, k),
            d(r, i),
            d(i, s),
            d(i, c),
            d(i, y),
            d(i, S),
            d(i, T),
            d(i, q),
            (a = !0);
        },
        p(u, [p]) {
          (!a || p & 1) && m !== (m = u[0] == 1 ? "." : "") && O(c, m),
            (!a || p & 1) && _ !== (_ = u[0] == 2 ? ".." : "") && O(y, _),
            (!a || p & 1) && g !== (g = u[0] == 3 ? "..." : "") && O(S, g),
            (!a || p & 1) && A !== (A = u[0] == 4 ? "...." : "") && O(T, A),
            (!a || p & 1) && h(i, "one", u[0] == 1),
            (!a || p & 1) && h(i, "two", u[0] == 2),
            (!a || p & 1) && h(i, "three", u[0] == 3),
            (!a || p & 1) && h(i, "four", u[0] == 4);
        },
        i(u) {
          a || (V(o.$$.fragment, u), (a = !0));
        },
        o(u) {
          se(o.$$.fragment, u), (a = !1);
        },
        d(u) {
          u && B(t), X(o);
        },
      }
    );
  }
  function de(e, t, n) {
    let r = 1;
    return (
      setInterval(() => {
        n(0, (r = r < 4 ? r + 1 : 1));
      }, 600),
      [r]
    );
  }
  class pe extends Z {
    constructor(t) {
      super(), Y(this, t, de, ae, Q, {});
    }
  }
  new pe({ target: document.getElementById("app") });