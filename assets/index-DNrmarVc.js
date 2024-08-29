function Vx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Za =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pv = { exports: {} },
  ql = {},
  _v = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ea = Symbol.for("react.element"),
  Nx = Symbol.for("react.portal"),
  Wx = Symbol.for("react.fragment"),
  Hx = Symbol.for("react.strict_mode"),
  qx = Symbol.for("react.profiler"),
  Ux = Symbol.for("react.provider"),
  Gx = Symbol.for("react.context"),
  Kx = Symbol.for("react.forward_ref"),
  Yx = Symbol.for("react.suspense"),
  Jx = Symbol.for("react.memo"),
  Qx = Symbol.for("react.lazy"),
  Np = Symbol.iterator;
function Xx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Np && e[Np]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ev = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Av = Object.assign,
  Rv = {};
function Qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rv),
    (this.updater = n || Ev);
}
Qo.prototype.isReactComponent = {};
Qo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $v() {}
$v.prototype = Qo.prototype;
function Pf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rv),
    (this.updater = n || Ev);
}
var _f = (Pf.prototype = new $v());
_f.constructor = Pf;
Av(_f, Qo.prototype);
_f.isPureReactComponent = !0;
var Wp = Array.isArray,
  Mv = Object.prototype.hasOwnProperty,
  Ef = { current: null },
  zv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mv.call(t, r) && !zv.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Ea,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Ef.current,
  };
}
function Zx(e, t) {
  return {
    $$typeof: Ea,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Af(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ea;
}
function ek(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Hp = /\/+/g;
function Ku(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ek("" + e.key)
    : t.toString(36);
}
function Rs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ea:
          case Nx:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Ku(a, 0) : r),
      Wp(o)
        ? ((n = ""),
          e != null && (n = e.replace(Hp, "$&/") + "/"),
          Rs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Af(o) &&
            (o = Zx(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Hp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Wp(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Ku(i, s);
      a += Rs(i, t, n, l, o);
    }
  else if (((l = Xx(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ku(i, s++)), (a += Rs(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function es(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Rs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function tk(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null },
  $s = { transition: null },
  nk = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: $s,
    ReactCurrentOwner: Ef,
  };
function jv() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: es,
  forEach: function (e, t, n) {
    es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Af(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
N.Component = Qo;
N.Fragment = Wx;
N.Profiler = qx;
N.PureComponent = Pf;
N.StrictMode = Hx;
N.Suspense = Yx;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nk;
N.act = jv;
N.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Av({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ef.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Mv.call(t, l) &&
        !zv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ea, type: e.type, key: o, ref: i, props: r, _owner: a };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ux, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = Dv;
N.createFactory = function (e) {
  var t = Dv.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: Kx, render: e };
};
N.isValidElement = Af;
N.lazy = function (e) {
  return { $$typeof: Qx, _payload: { _status: -1, _result: e }, _init: tk };
};
N.memo = function (e, t) {
  return { $$typeof: Jx, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = $s.transition;
  $s.transition = {};
  try {
    e();
  } finally {
    $s.transition = t;
  }
};
N.unstable_act = jv;
N.useCallback = function (e, t) {
  return it.current.useCallback(e, t);
};
N.useContext = function (e) {
  return it.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return it.current.useEffect(e, t);
};
N.useId = function () {
  return it.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return it.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
  return it.current.useReducer(e, t, n);
};
N.useRef = function (e) {
  return it.current.useRef(e);
};
N.useState = function (e) {
  return it.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
  return it.current.useTransition();
};
N.version = "18.3.1";
_v.exports = N;
var T = _v.exports;
const an = Tf(T),
  qp = Vx({ __proto__: null, default: an }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rk = T,
  ok = Symbol.for("react.element"),
  ik = Symbol.for("react.fragment"),
  ak = Object.prototype.hasOwnProperty,
  sk = rk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lk = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) ak.call(t, r) && !lk.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ok,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: sk.current,
  };
}
ql.Fragment = ik;
ql.jsx = Lv;
ql.jsxs = Lv;
Pv.exports = ql;
var C = Pv.exports,
  Fv = { exports: {} },
  Ct = {},
  Bv = { exports: {} },
  Iv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, V) {
    var O = M.length;
    M.push(V);
    e: for (; 0 < O; ) {
      var ae = (O - 1) >>> 1,
        ye = M[ae];
      if (0 < o(ye, V)) (M[ae] = V), (M[O] = ye), (O = ae);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var V = M[0],
      O = M.pop();
    if (O !== V) {
      M[0] = O;
      e: for (var ae = 0, ye = M.length, U = ye >>> 1; ae < U; ) {
        var mt = 2 * (ae + 1) - 1,
          In = M[mt],
          He = mt + 1,
          hn = M[He];
        if (0 > o(In, O))
          He < ye && 0 > o(hn, In)
            ? ((M[ae] = hn), (M[He] = O), (ae = He))
            : ((M[ae] = In), (M[mt] = O), (ae = mt));
        else if (He < ye && 0 > o(hn, O)) (M[ae] = hn), (M[He] = O), (ae = He);
        else break e;
      }
    }
    return V;
  }
  function o(M, V) {
    var O = M.sortIndex - V.sortIndex;
    return O !== 0 ? O : M.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    y = !1,
    S = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= M)
        r(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = n(u);
    }
  }
  function k(M) {
    if (((S = !1), m(M), !y))
      if (n(l) !== null) (y = !0), ke(P);
      else {
        var V = n(u);
        V !== null && Ot(k, V.startTime - M);
      }
  }
  function P(M, V) {
    (y = !1), S && ((S = !1), p(R), (R = -1)), (g = !0);
    var O = f;
    try {
      for (
        m(V), d = n(l);
        d !== null && (!(d.expirationTime > V) || (M && !ee()));

      ) {
        var ae = d.callback;
        if (typeof ae == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ye = ae(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof ye == "function" ? (d.callback = ye) : d === n(l) && r(l),
            m(V);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var U = !0;
      else {
        var mt = n(u);
        mt !== null && Ot(k, mt.startTime - V), (U = !1);
      }
      return U;
    } finally {
      (d = null), (f = O), (g = !1);
    }
  }
  var A = !1,
    E = null,
    R = -1,
    L = 5,
    j = -1;
  function ee() {
    return !(e.unstable_now() - j < L);
  }
  function Ze() {
    if (E !== null) {
      var M = e.unstable_now();
      j = M;
      var V = !0;
      try {
        V = E(!0, M);
      } finally {
        V ? et() : ((A = !1), (E = null));
      }
    } else A = !1;
  }
  var et;
  if (typeof h == "function")
    et = function () {
      h(Ze);
    };
  else if (typeof MessageChannel < "u") {
    var _t = new MessageChannel(),
      ve = _t.port2;
    (_t.port1.onmessage = Ze),
      (et = function () {
        ve.postMessage(null);
      });
  } else
    et = function () {
      b(Ze, 0);
    };
  function ke(M) {
    (E = M), A || ((A = !0), et());
  }
  function Ot(M, V) {
    R = b(function () {
      M(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ke(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var O = f;
      f = V;
      try {
        return M();
      } finally {
        f = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var O = f;
      f = M;
      try {
        return V();
      } finally {
        f = O;
      }
    }),
    (e.unstable_scheduleCallback = function (M, V, O) {
      var ae = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? ae + O : ae))
          : (O = ae),
        M)
      ) {
        case 1:
          var ye = -1;
          break;
        case 2:
          ye = 250;
          break;
        case 5:
          ye = 1073741823;
          break;
        case 4:
          ye = 1e4;
          break;
        default:
          ye = 5e3;
      }
      return (
        (ye = O + ye),
        (M = {
          id: c++,
          callback: V,
          priorityLevel: M,
          startTime: O,
          expirationTime: ye,
          sortIndex: -1,
        }),
        O > ae
          ? ((M.sortIndex = O),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (S ? (p(R), (R = -1)) : (S = !0), Ot(k, O - ae)))
          : ((M.sortIndex = ye), t(l, M), y || g || ((y = !0), ke(P))),
        M
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (M) {
      var V = f;
      return function () {
        var O = f;
        f = V;
        try {
          return M.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(Iv);
Bv.exports = Iv;
var uk = Bv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ck = T,
  xt = uk;
function $(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ov = new Set(),
  Qi = {};
function Ur(e, t) {
  Bo(e, t), Bo(e + "Capture", t);
}
function Bo(e, t) {
  for (Qi[e] = t, e = 0; e < t.length; e++) Ov.add(t[e]);
}
var $n = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xc = Object.prototype.hasOwnProperty,
  dk =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Up = {},
  Gp = {};
function fk(e) {
  return Xc.call(Gp, e)
    ? !0
    : Xc.call(Up, e)
    ? !1
    : dk.test(e)
    ? (Gp[e] = !0)
    : ((Up[e] = !0), !1);
}
function hk(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pk(e, t, n, r) {
  if (t === null || typeof t > "u" || hk(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function at(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new at(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new at(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new at(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new at(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new at(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rf = /[\-:]([a-z])/g;
function $f(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rf, $f);
    Ne[t] = new at(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rf, $f);
    Ne[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rf, $f);
  Ne[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new at(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mf(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pk(t, n, o, r) && (n = null),
    r || o === null
      ? fk(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fn = ck.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for("react.element"),
  to = Symbol.for("react.portal"),
  no = Symbol.for("react.fragment"),
  zf = Symbol.for("react.strict_mode"),
  Zc = Symbol.for("react.profiler"),
  Vv = Symbol.for("react.provider"),
  Nv = Symbol.for("react.context"),
  Df = Symbol.for("react.forward_ref"),
  ed = Symbol.for("react.suspense"),
  td = Symbol.for("react.suspense_list"),
  jf = Symbol.for("react.memo"),
  Un = Symbol.for("react.lazy"),
  Wv = Symbol.for("react.offscreen"),
  Kp = Symbol.iterator;
function ai(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Kp && e[Kp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  Yu;
function Si(e) {
  if (Yu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yu = (t && t[1]) || "";
    }
  return (
    `
` +
    Yu +
    e
  );
}
var Ju = !1;
function Qu(e, t) {
  if (!e || Ju) return "";
  Ju = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Ju = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Si(e) : "";
}
function mk(e) {
  switch (e.tag) {
    case 5:
      return Si(e.type);
    case 16:
      return Si("Lazy");
    case 13:
      return Si("Suspense");
    case 19:
      return Si("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qu(e.type, !1)), e;
    case 11:
      return (e = Qu(e.type.render, !1)), e;
    case 1:
      return (e = Qu(e.type, !0)), e;
    default:
      return "";
  }
}
function nd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case no:
      return "Fragment";
    case to:
      return "Portal";
    case Zc:
      return "Profiler";
    case zf:
      return "StrictMode";
    case ed:
      return "Suspense";
    case td:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nv:
        return (e.displayName || "Context") + ".Consumer";
      case Vv:
        return (e._context.displayName || "Context") + ".Provider";
      case Df:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jf:
        return (
          (t = e.displayName || null), t !== null ? t : nd(e.type) || "Memo"
        );
      case Un:
        (t = e._payload), (e = e._init);
        try {
          return nd(e(t));
        } catch {}
    }
  return null;
}
function gk(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return nd(t);
    case 8:
      return t === zf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ur(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vk(e) {
  var t = Hv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ns(e) {
  e._valueTracker || (e._valueTracker = vk(e));
}
function qv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function rd(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ur(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Uv(e, t) {
  (t = t.checked), t != null && Mf(e, "checked", t, !1);
}
function od(e, t) {
  Uv(e, t);
  var n = ur(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? id(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && id(e, t.type, ur(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function id(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bi = Array.isArray;
function To(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ur(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ad(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (bi(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ur(n) };
}
function Gv(e, t) {
  var n = ur(t.value),
    r = ur(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Xp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Kv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var rs,
  Yv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        rs = rs || document.createElement("div"),
          rs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = rs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $i = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yk = ["Webkit", "ms", "Moz", "O"];
Object.keys($i).forEach(function (e) {
  yk.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e]);
  });
});
function Jv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($i.hasOwnProperty(e) && $i[e])
    ? ("" + t).trim()
    : t + "px";
}
function Qv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Jv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Sk = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ld(e, t) {
  if (t) {
    if (Sk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function ud(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var cd = null;
function Lf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var dd = null,
  Po = null,
  _o = null;
function Zp(e) {
  if ((e = $a(e))) {
    if (typeof dd != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = Jl(t)), dd(e.stateNode, e.type, t));
  }
}
function Xv(e) {
  Po ? (_o ? _o.push(e) : (_o = [e])) : (Po = e);
}
function Zv() {
  if (Po) {
    var e = Po,
      t = _o;
    if (((_o = Po = null), Zp(e), t)) for (e = 0; e < t.length; e++) Zp(t[e]);
  }
}
function ey(e, t) {
  return e(t);
}
function ty() {}
var Xu = !1;
function ny(e, t, n) {
  if (Xu) return e(t, n);
  Xu = !0;
  try {
    return ey(e, t, n);
  } finally {
    (Xu = !1), (Po !== null || _o !== null) && (ty(), Zv());
  }
}
function Zi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var fd = !1;
if ($n)
  try {
    var si = {};
    Object.defineProperty(si, "passive", {
      get: function () {
        fd = !0;
      },
    }),
      window.addEventListener("test", si, si),
      window.removeEventListener("test", si, si);
  } catch {
    fd = !1;
  }
function bk(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Mi = !1,
  il = null,
  al = !1,
  hd = null,
  wk = {
    onError: function (e) {
      (Mi = !0), (il = e);
    },
  };
function xk(e, t, n, r, o, i, a, s, l) {
  (Mi = !1), (il = null), bk.apply(wk, arguments);
}
function kk(e, t, n, r, o, i, a, s, l) {
  if ((xk.apply(this, arguments), Mi)) {
    if (Mi) {
      var u = il;
      (Mi = !1), (il = null);
    } else throw Error($(198));
    al || ((al = !0), (hd = u));
  }
}
function Gr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ry(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function em(e) {
  if (Gr(e) !== e) throw Error($(188));
}
function Ck(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gr(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return em(o), e;
        if (i === r) return em(o), t;
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function oy(e) {
  return (e = Ck(e)), e !== null ? iy(e) : null;
}
function iy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = iy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ay = xt.unstable_scheduleCallback,
  tm = xt.unstable_cancelCallback,
  Tk = xt.unstable_shouldYield,
  Pk = xt.unstable_requestPaint,
  Pe = xt.unstable_now,
  _k = xt.unstable_getCurrentPriorityLevel,
  Ff = xt.unstable_ImmediatePriority,
  sy = xt.unstable_UserBlockingPriority,
  sl = xt.unstable_NormalPriority,
  Ek = xt.unstable_LowPriority,
  ly = xt.unstable_IdlePriority,
  Ul = null,
  sn = null;
function Ak(e) {
  if (sn && typeof sn.onCommitFiberRoot == "function")
    try {
      sn.onCommitFiberRoot(Ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Kt = Math.clz32 ? Math.clz32 : Mk,
  Rk = Math.log,
  $k = Math.LN2;
function Mk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rk(e) / $k) | 0)) | 0;
}
var os = 64,
  is = 4194304;
function wi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = wi(s)) : ((i &= a), i !== 0 && (r = wi(i)));
  } else (a = n & ~o), a !== 0 ? (r = wi(a)) : i !== 0 && (r = wi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function zk(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Dk(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Kt(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = zk(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function pd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uy() {
  var e = os;
  return (os <<= 1), !(os & 4194240) && (os = 64), e;
}
function Zu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Aa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Kt(t)),
    (e[t] = n);
}
function jk(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Kt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Bf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Kt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var te = 0;
function cy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dy,
  If,
  fy,
  hy,
  py,
  md = !1,
  as = [],
  tr = null,
  nr = null,
  rr = null,
  ea = new Map(),
  ta = new Map(),
  Yn = [],
  Lk =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function nm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tr = null;
      break;
    case "dragenter":
    case "dragleave":
      nr = null;
      break;
    case "mouseover":
    case "mouseout":
      rr = null;
      break;
    case "pointerover":
    case "pointerout":
      ea.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ta.delete(t.pointerId);
  }
}
function li(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = $a(t)), t !== null && If(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Fk(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (tr = li(tr, e, t, n, r, o)), !0;
    case "dragenter":
      return (nr = li(nr, e, t, n, r, o)), !0;
    case "mouseover":
      return (rr = li(rr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ea.set(i, li(ea.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ta.set(i, li(ta.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function my(e) {
  var t = Ar(e.target);
  if (t !== null) {
    var n = Gr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ry(n)), t !== null)) {
          (e.blockedOn = t),
            py(e.priority, function () {
              fy(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ms(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (cd = r), n.target.dispatchEvent(r), (cd = null);
    } else return (t = $a(n)), t !== null && If(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function rm(e, t, n) {
  Ms(e) && n.delete(t);
}
function Bk() {
  (md = !1),
    tr !== null && Ms(tr) && (tr = null),
    nr !== null && Ms(nr) && (nr = null),
    rr !== null && Ms(rr) && (rr = null),
    ea.forEach(rm),
    ta.forEach(rm);
}
function ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    md ||
      ((md = !0),
      xt.unstable_scheduleCallback(xt.unstable_NormalPriority, Bk)));
}
function na(e) {
  function t(o) {
    return ui(o, e);
  }
  if (0 < as.length) {
    ui(as[0], e);
    for (var n = 1; n < as.length; n++) {
      var r = as[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tr !== null && ui(tr, e),
      nr !== null && ui(nr, e),
      rr !== null && ui(rr, e),
      ea.forEach(t),
      ta.forEach(t),
      n = 0;
    n < Yn.length;
    n++
  )
    (r = Yn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); )
    my(n), n.blockedOn === null && Yn.shift();
}
var Eo = Fn.ReactCurrentBatchConfig,
  ul = !0;
function Ik(e, t, n, r) {
  var o = te,
    i = Eo.transition;
  Eo.transition = null;
  try {
    (te = 1), Of(e, t, n, r);
  } finally {
    (te = o), (Eo.transition = i);
  }
}
function Ok(e, t, n, r) {
  var o = te,
    i = Eo.transition;
  Eo.transition = null;
  try {
    (te = 4), Of(e, t, n, r);
  } finally {
    (te = o), (Eo.transition = i);
  }
}
function Of(e, t, n, r) {
  if (ul) {
    var o = gd(e, t, n, r);
    if (o === null) uc(e, t, r, cl, n), nm(e, r);
    else if (Fk(o, e, t, n, r)) r.stopPropagation();
    else if ((nm(e, r), t & 4 && -1 < Lk.indexOf(e))) {
      for (; o !== null; ) {
        var i = $a(o);
        if (
          (i !== null && dy(i),
          (i = gd(e, t, n, r)),
          i === null && uc(e, t, r, cl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else uc(e, t, r, null, n);
  }
}
var cl = null;
function gd(e, t, n, r) {
  if (((cl = null), (e = Lf(r)), (e = Ar(e)), e !== null))
    if (((t = Gr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ry(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (cl = e), null;
}
function gy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_k()) {
        case Ff:
          return 1;
        case sy:
          return 4;
        case sl:
        case Ek:
          return 16;
        case ly:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xn = null,
  Vf = null,
  zs = null;
function vy() {
  if (zs) return zs;
  var e,
    t = Vf,
    n = t.length,
    r,
    o = "value" in Xn ? Xn.value : Xn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (zs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ds(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ss() {
  return !0;
}
function om() {
  return !1;
}
function Tt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ss
        : om),
      (this.isPropagationStopped = om),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ss));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ss));
      },
      persist: function () {},
      isPersistent: ss,
    }),
    t
  );
}
var Xo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nf = Tt(Xo),
  Ra = xe({}, Xo, { view: 0, detail: 0 }),
  Vk = Tt(Ra),
  ec,
  tc,
  ci,
  Gl = xe({}, Ra, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Wf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ci &&
            (ci && e.type === "mousemove"
              ? ((ec = e.screenX - ci.screenX), (tc = e.screenY - ci.screenY))
              : (tc = ec = 0),
            (ci = e)),
          ec);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : tc;
    },
  }),
  im = Tt(Gl),
  Nk = xe({}, Gl, { dataTransfer: 0 }),
  Wk = Tt(Nk),
  Hk = xe({}, Ra, { relatedTarget: 0 }),
  nc = Tt(Hk),
  qk = xe({}, Xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uk = Tt(qk),
  Gk = xe({}, Xo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kk = Tt(Gk),
  Yk = xe({}, Xo, { data: 0 }),
  am = Tt(Yk),
  Jk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qk = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Xk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zk(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xk[e]) ? !!t[e] : !1;
}
function Wf() {
  return Zk;
}
var e2 = xe({}, Ra, {
    key: function (e) {
      if (e.key) {
        var t = Jk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ds(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qk[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wf,
    charCode: function (e) {
      return e.type === "keypress" ? Ds(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ds(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  t2 = Tt(e2),
  n2 = xe({}, Gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sm = Tt(n2),
  r2 = xe({}, Ra, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wf,
  }),
  o2 = Tt(r2),
  i2 = xe({}, Xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  a2 = Tt(i2),
  s2 = xe({}, Gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  l2 = Tt(s2),
  u2 = [9, 13, 27, 32],
  Hf = $n && "CompositionEvent" in window,
  zi = null;
$n && "documentMode" in document && (zi = document.documentMode);
var c2 = $n && "TextEvent" in window && !zi,
  yy = $n && (!Hf || (zi && 8 < zi && 11 >= zi)),
  lm = " ",
  um = !1;
function Sy(e, t) {
  switch (e) {
    case "keyup":
      return u2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function by(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ro = !1;
function d2(e, t) {
  switch (e) {
    case "compositionend":
      return by(t);
    case "keypress":
      return t.which !== 32 ? null : ((um = !0), lm);
    case "textInput":
      return (e = t.data), e === lm && um ? null : e;
    default:
      return null;
  }
}
function f2(e, t) {
  if (ro)
    return e === "compositionend" || (!Hf && Sy(e, t))
      ? ((e = vy()), (zs = Vf = Xn = null), (ro = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var h2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function cm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!h2[e.type] : t === "textarea";
}
function wy(e, t, n, r) {
  Xv(r),
    (t = dl(t, "onChange")),
    0 < t.length &&
      ((n = new Nf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Di = null,
  ra = null;
function p2(e) {
  My(e, 0);
}
function Kl(e) {
  var t = ao(e);
  if (qv(t)) return e;
}
function m2(e, t) {
  if (e === "change") return t;
}
var xy = !1;
if ($n) {
  var rc;
  if ($n) {
    var oc = "oninput" in document;
    if (!oc) {
      var dm = document.createElement("div");
      dm.setAttribute("oninput", "return;"),
        (oc = typeof dm.oninput == "function");
    }
    rc = oc;
  } else rc = !1;
  xy = rc && (!document.documentMode || 9 < document.documentMode);
}
function fm() {
  Di && (Di.detachEvent("onpropertychange", ky), (ra = Di = null));
}
function ky(e) {
  if (e.propertyName === "value" && Kl(ra)) {
    var t = [];
    wy(t, ra, e, Lf(e)), ny(p2, t);
  }
}
function g2(e, t, n) {
  e === "focusin"
    ? (fm(), (Di = t), (ra = n), Di.attachEvent("onpropertychange", ky))
    : e === "focusout" && fm();
}
function v2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Kl(ra);
}
function y2(e, t) {
  if (e === "click") return Kl(t);
}
function S2(e, t) {
  if (e === "input" || e === "change") return Kl(t);
}
function b2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Jt = typeof Object.is == "function" ? Object.is : b2;
function oa(e, t) {
  if (Jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xc.call(t, o) || !Jt(e[o], t[o])) return !1;
  }
  return !0;
}
function hm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pm(e, t) {
  var n = hm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hm(n);
  }
}
function Cy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ty() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function qf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function w2(e) {
  var t = Ty(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = pm(n, i));
        var a = pm(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var x2 = $n && "documentMode" in document && 11 >= document.documentMode,
  oo = null,
  vd = null,
  ji = null,
  yd = !1;
function mm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yd ||
    oo == null ||
    oo !== ol(r) ||
    ((r = oo),
    "selectionStart" in r && qf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ji && oa(ji, r)) ||
      ((ji = r),
      (r = dl(vd, "onSelect")),
      0 < r.length &&
        ((t = new Nf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = oo))));
}
function ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var io = {
    animationend: ls("Animation", "AnimationEnd"),
    animationiteration: ls("Animation", "AnimationIteration"),
    animationstart: ls("Animation", "AnimationStart"),
    transitionend: ls("Transition", "TransitionEnd"),
  },
  ic = {},
  Py = {};
$n &&
  ((Py = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete io.animationend.animation,
    delete io.animationiteration.animation,
    delete io.animationstart.animation),
  "TransitionEvent" in window || delete io.transitionend.transition);
function Yl(e) {
  if (ic[e]) return ic[e];
  if (!io[e]) return e;
  var t = io[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Py) return (ic[e] = t[n]);
  return e;
}
var _y = Yl("animationend"),
  Ey = Yl("animationiteration"),
  Ay = Yl("animationstart"),
  Ry = Yl("transitionend"),
  $y = new Map(),
  gm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pr(e, t) {
  $y.set(e, t), Ur(t, [e]);
}
for (var ac = 0; ac < gm.length; ac++) {
  var sc = gm[ac],
    k2 = sc.toLowerCase(),
    C2 = sc[0].toUpperCase() + sc.slice(1);
  pr(k2, "on" + C2);
}
pr(_y, "onAnimationEnd");
pr(Ey, "onAnimationIteration");
pr(Ay, "onAnimationStart");
pr("dblclick", "onDoubleClick");
pr("focusin", "onFocus");
pr("focusout", "onBlur");
pr(Ry, "onTransitionEnd");
Bo("onMouseEnter", ["mouseout", "mouseover"]);
Bo("onMouseLeave", ["mouseout", "mouseover"]);
Bo("onPointerEnter", ["pointerout", "pointerover"]);
Bo("onPointerLeave", ["pointerout", "pointerover"]);
Ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  T2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));
function vm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kk(r, t, void 0, e), (e.currentTarget = null);
}
function My(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          vm(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          vm(o, s, u), (i = l);
        }
    }
  }
  if (al) throw ((e = hd), (al = !1), (hd = null), e);
}
function ue(e, t) {
  var n = t[kd];
  n === void 0 && (n = t[kd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zy(t, e, 2, !1), n.add(r));
}
function lc(e, t, n) {
  var r = 0;
  t && (r |= 4), zy(n, e, r, t);
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function ia(e) {
  if (!e[us]) {
    (e[us] = !0),
      Ov.forEach(function (n) {
        n !== "selectionchange" && (T2.has(n) || lc(n, !1, e), lc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[us] || ((t[us] = !0), lc("selectionchange", !1, t));
  }
}
function zy(e, t, n, r) {
  switch (gy(t)) {
    case 1:
      var o = Ik;
      break;
    case 4:
      o = Ok;
      break;
    default:
      o = Of;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !fd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function uc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Ar(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ny(function () {
    var u = i,
      c = Lf(n),
      d = [];
    e: {
      var f = $y.get(e);
      if (f !== void 0) {
        var g = Nf,
          y = e;
        switch (e) {
          case "keypress":
            if (Ds(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = t2;
            break;
          case "focusin":
            (y = "focus"), (g = nc);
            break;
          case "focusout":
            (y = "blur"), (g = nc);
            break;
          case "beforeblur":
          case "afterblur":
            g = nc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = im;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Wk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = o2;
            break;
          case _y:
          case Ey:
          case Ay:
            g = Uk;
            break;
          case Ry:
            g = a2;
            break;
          case "scroll":
            g = Vk;
            break;
          case "wheel":
            g = l2;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Kk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = sm;
        }
        var S = (t & 4) !== 0,
          b = !S && e === "scroll",
          p = S ? (f !== null ? f + "Capture" : null) : f;
        S = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              p !== null && ((k = Zi(h, p)), k != null && S.push(aa(h, k, m)))),
            b)
          )
            break;
          h = h.return;
        }
        0 < S.length &&
          ((f = new g(f, y, null, n, c)), d.push({ event: f, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== cd &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ar(y) || y[Mn]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Ar(y) : null),
              y !== null &&
                ((b = Gr(y)), y !== b || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((S = im),
            (k = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = sm),
              (k = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (b = g == null ? f : ao(g)),
            (m = y == null ? f : ao(y)),
            (f = new S(k, h + "leave", g, n, c)),
            (f.target = b),
            (f.relatedTarget = m),
            (k = null),
            Ar(c) === u &&
              ((S = new S(p, h + "enter", y, n, c)),
              (S.target = m),
              (S.relatedTarget = b),
              (k = S)),
            (b = k),
            g && y)
          )
            t: {
              for (S = g, p = y, h = 0, m = S; m; m = Xr(m)) h++;
              for (m = 0, k = p; k; k = Xr(k)) m++;
              for (; 0 < h - m; ) (S = Xr(S)), h--;
              for (; 0 < m - h; ) (p = Xr(p)), m--;
              for (; h--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = Xr(S)), (p = Xr(p));
              }
              S = null;
            }
          else S = null;
          g !== null && ym(d, f, g, S, !1),
            y !== null && b !== null && ym(d, b, y, S, !0);
        }
      }
      e: {
        if (
          ((f = u ? ao(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var P = m2;
        else if (cm(f))
          if (xy) P = S2;
          else {
            P = v2;
            var A = g2;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = y2);
        if (P && (P = P(e, u))) {
          wy(d, P, n, c);
          break e;
        }
        A && A(e, f, u),
          e === "focusout" &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === "number" &&
            id(f, "number", f.value);
      }
      switch (((A = u ? ao(u) : window), e)) {
        case "focusin":
          (cm(A) || A.contentEditable === "true") &&
            ((oo = A), (vd = u), (ji = null));
          break;
        case "focusout":
          ji = vd = oo = null;
          break;
        case "mousedown":
          yd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yd = !1), mm(d, n, c);
          break;
        case "selectionchange":
          if (x2) break;
        case "keydown":
        case "keyup":
          mm(d, n, c);
      }
      var E;
      if (Hf)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        ro
          ? Sy(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (yy &&
          n.locale !== "ko" &&
          (ro || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && ro && (E = vy())
            : ((Xn = c),
              (Vf = "value" in Xn ? Xn.value : Xn.textContent),
              (ro = !0))),
        (A = dl(u, R)),
        0 < A.length &&
          ((R = new am(R, e, null, n, c)),
          d.push({ event: R, listeners: A }),
          E ? (R.data = E) : ((E = by(n)), E !== null && (R.data = E)))),
        (E = c2 ? d2(e, n) : f2(e, n)) &&
          ((u = dl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new am("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    My(d, t);
  });
}
function aa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zi(e, n)),
      i != null && r.unshift(aa(e, i, o)),
      (i = Zi(e, t)),
      i != null && r.push(aa(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Xr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ym(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Zi(n, i)), l != null && a.unshift(aa(n, l, s)))
        : o || ((l = Zi(n, i)), l != null && a.push(aa(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var P2 = /\r\n?/g,
  _2 = /\u0000|\uFFFD/g;
function Sm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      P2,
      `
`
    )
    .replace(_2, "");
}
function cs(e, t, n) {
  if (((t = Sm(t)), Sm(e) !== t && n)) throw Error($(425));
}
function fl() {}
var Sd = null,
  bd = null;
function wd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xd = typeof setTimeout == "function" ? setTimeout : void 0,
  E2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bm = typeof Promise == "function" ? Promise : void 0,
  A2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bm < "u"
      ? function (e) {
          return bm.resolve(null).then(e).catch(R2);
        }
      : xd;
function R2(e) {
  setTimeout(function () {
    throw e;
  });
}
function cc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), na(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  na(t);
}
function or(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Zo = Math.random().toString(36).slice(2),
  on = "__reactFiber$" + Zo,
  sa = "__reactProps$" + Zo,
  Mn = "__reactContainer$" + Zo,
  kd = "__reactEvents$" + Zo,
  $2 = "__reactListeners$" + Zo,
  M2 = "__reactHandles$" + Zo;
function Ar(e) {
  var t = e[on];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mn] || n[on])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wm(e); e !== null; ) {
          if ((n = e[on])) return n;
          e = wm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function $a(e) {
  return (
    (e = e[on] || e[Mn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ao(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Jl(e) {
  return e[sa] || null;
}
var Cd = [],
  so = -1;
function mr(e) {
  return { current: e };
}
function fe(e) {
  0 > so || ((e.current = Cd[so]), (Cd[so] = null), so--);
}
function se(e, t) {
  so++, (Cd[so] = e.current), (e.current = t);
}
var cr = {},
  Xe = mr(cr),
  ct = mr(!1),
  Or = cr;
function Io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function dt(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  fe(ct), fe(Xe);
}
function xm(e, t, n) {
  if (Xe.current !== cr) throw Error($(168));
  se(Xe, t), se(ct, n);
}
function Dy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, gk(e) || "Unknown", o));
  return xe({}, n, r);
}
function pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cr),
    (Or = Xe.current),
    se(Xe, e),
    se(ct, ct.current),
    !0
  );
}
function km(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = Dy(e, t, Or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(ct),
      fe(Xe),
      se(Xe, e))
    : fe(ct),
    se(ct, n);
}
var vn = null,
  Ql = !1,
  dc = !1;
function jy(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function z2(e) {
  (Ql = !0), jy(e);
}
function gr() {
  if (!dc && vn !== null) {
    dc = !0;
    var e = 0,
      t = te;
    try {
      var n = vn;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (vn = null), (Ql = !1);
    } catch (o) {
      throw (vn !== null && (vn = vn.slice(e + 1)), ay(Ff, gr), o);
    } finally {
      (te = t), (dc = !1);
    }
  }
  return null;
}
var lo = [],
  uo = 0,
  ml = null,
  gl = 0,
  zt = [],
  Dt = 0,
  Vr = null,
  bn = 1,
  wn = "";
function kr(e, t) {
  (lo[uo++] = gl), (lo[uo++] = ml), (ml = e), (gl = t);
}
function Ly(e, t, n) {
  (zt[Dt++] = bn), (zt[Dt++] = wn), (zt[Dt++] = Vr), (Vr = e);
  var r = bn;
  e = wn;
  var o = 32 - Kt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Kt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (bn = (1 << (32 - Kt(t) + o)) | (n << o) | r),
      (wn = i + e);
  } else (bn = (1 << i) | (n << o) | r), (wn = e);
}
function Uf(e) {
  e.return !== null && (kr(e, 1), Ly(e, 1, 0));
}
function Gf(e) {
  for (; e === ml; )
    (ml = lo[--uo]), (lo[uo] = null), (gl = lo[--uo]), (lo[uo] = null);
  for (; e === Vr; )
    (Vr = zt[--Dt]),
      (zt[Dt] = null),
      (wn = zt[--Dt]),
      (zt[Dt] = null),
      (bn = zt[--Dt]),
      (zt[Dt] = null);
}
var St = null,
  yt = null,
  ge = !1,
  Ut = null;
function Fy(e, t) {
  var n = jt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (St = e), (yt = or(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (St = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vr !== null ? { id: bn, overflow: wn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = jt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (St = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Td(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pd(e) {
  if (ge) {
    var t = yt;
    if (t) {
      var n = t;
      if (!Cm(e, t)) {
        if (Td(e)) throw Error($(418));
        t = or(n.nextSibling);
        var r = St;
        t && Cm(e, t)
          ? Fy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (St = e));
      }
    } else {
      if (Td(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (St = e);
    }
  }
}
function Tm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  St = e;
}
function ds(e) {
  if (e !== St) return !1;
  if (!ge) return Tm(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wd(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (Td(e)) throw (By(), Error($(418)));
    for (; t; ) Fy(e, t), (t = or(t.nextSibling));
  }
  if ((Tm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yt = or(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = St ? or(e.stateNode.nextSibling) : null;
  return !0;
}
function By() {
  for (var e = yt; e; ) e = or(e.nextSibling);
}
function Oo() {
  (yt = St = null), (ge = !1);
}
function Kf(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
var D2 = Fn.ReactCurrentBatchConfig;
function di(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Pm(e) {
  var t = e._init;
  return t(e._payload);
}
function Iy(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = lr(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, h, m, k) {
    return h === null || h.tag !== 6
      ? ((h = yc(m, p.mode, k)), (h.return = p), h)
      : ((h = o(h, m)), (h.return = p), h);
  }
  function l(p, h, m, k) {
    var P = m.type;
    return P === no
      ? c(p, h, m.props.children, k, m.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Un &&
            Pm(P) === h.type))
      ? ((k = o(h, m.props)), (k.ref = di(p, h, m)), (k.return = p), k)
      : ((k = Vs(m.type, m.key, m.props, null, p.mode, k)),
        (k.ref = di(p, h, m)),
        (k.return = p),
        k);
  }
  function u(p, h, m, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Sc(m, p.mode, k)), (h.return = p), h)
      : ((h = o(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, k, P) {
    return h === null || h.tag !== 7
      ? ((h = jr(m, p.mode, k, P)), (h.return = p), h)
      : ((h = o(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = yc("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ts:
          return (
            (m = Vs(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = di(p, null, h)),
            (m.return = p),
            m
          );
        case to:
          return (h = Sc(h, p.mode, m)), (h.return = p), h;
        case Un:
          var k = h._init;
          return d(p, k(h._payload), m);
      }
      if (bi(h) || ai(h))
        return (h = jr(h, p.mode, m, null)), (h.return = p), h;
      fs(p, h);
    }
    return null;
  }
  function f(p, h, m, k) {
    var P = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : s(p, h, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ts:
          return m.key === P ? l(p, h, m, k) : null;
        case to:
          return m.key === P ? u(p, h, m, k) : null;
        case Un:
          return (P = m._init), f(p, h, P(m._payload), k);
      }
      if (bi(m) || ai(m)) return P !== null ? null : c(p, h, m, k, null);
      fs(p, m);
    }
    return null;
  }
  function g(p, h, m, k, P) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (p = p.get(m) || null), s(h, p, "" + k, P);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ts:
          return (p = p.get(k.key === null ? m : k.key) || null), l(h, p, k, P);
        case to:
          return (p = p.get(k.key === null ? m : k.key) || null), u(h, p, k, P);
        case Un:
          var A = k._init;
          return g(p, h, m, A(k._payload), P);
      }
      if (bi(k) || ai(k)) return (p = p.get(m) || null), c(h, p, k, P, null);
      fs(h, k);
    }
    return null;
  }
  function y(p, h, m, k) {
    for (
      var P = null, A = null, E = h, R = (h = 0), L = null;
      E !== null && R < m.length;
      R++
    ) {
      E.index > R ? ((L = E), (E = null)) : (L = E.sibling);
      var j = f(p, E, m[R], k);
      if (j === null) {
        E === null && (E = L);
        break;
      }
      e && E && j.alternate === null && t(p, E),
        (h = i(j, h, R)),
        A === null ? (P = j) : (A.sibling = j),
        (A = j),
        (E = L);
    }
    if (R === m.length) return n(p, E), ge && kr(p, R), P;
    if (E === null) {
      for (; R < m.length; R++)
        (E = d(p, m[R], k)),
          E !== null &&
            ((h = i(E, h, R)), A === null ? (P = E) : (A.sibling = E), (A = E));
      return ge && kr(p, R), P;
    }
    for (E = r(p, E); R < m.length; R++)
      (L = g(E, p, R, m[R], k)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? R : L.key),
          (h = i(L, h, R)),
          A === null ? (P = L) : (A.sibling = L),
          (A = L));
    return (
      e &&
        E.forEach(function (ee) {
          return t(p, ee);
        }),
      ge && kr(p, R),
      P
    );
  }
  function S(p, h, m, k) {
    var P = ai(m);
    if (typeof P != "function") throw Error($(150));
    if (((m = P.call(m)), m == null)) throw Error($(151));
    for (
      var A = (P = null), E = h, R = (h = 0), L = null, j = m.next();
      E !== null && !j.done;
      R++, j = m.next()
    ) {
      E.index > R ? ((L = E), (E = null)) : (L = E.sibling);
      var ee = f(p, E, j.value, k);
      if (ee === null) {
        E === null && (E = L);
        break;
      }
      e && E && ee.alternate === null && t(p, E),
        (h = i(ee, h, R)),
        A === null ? (P = ee) : (A.sibling = ee),
        (A = ee),
        (E = L);
    }
    if (j.done) return n(p, E), ge && kr(p, R), P;
    if (E === null) {
      for (; !j.done; R++, j = m.next())
        (j = d(p, j.value, k)),
          j !== null &&
            ((h = i(j, h, R)), A === null ? (P = j) : (A.sibling = j), (A = j));
      return ge && kr(p, R), P;
    }
    for (E = r(p, E); !j.done; R++, j = m.next())
      (j = g(E, p, R, j.value, k)),
        j !== null &&
          (e && j.alternate !== null && E.delete(j.key === null ? R : j.key),
          (h = i(j, h, R)),
          A === null ? (P = j) : (A.sibling = j),
          (A = j));
    return (
      e &&
        E.forEach(function (Ze) {
          return t(p, Ze);
        }),
      ge && kr(p, R),
      P
    );
  }
  function b(p, h, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === no &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ts:
          e: {
            for (var P = m.key, A = h; A !== null; ) {
              if (A.key === P) {
                if (((P = m.type), P === no)) {
                  if (A.tag === 7) {
                    n(p, A.sibling),
                      (h = o(A, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  A.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Un &&
                    Pm(P) === A.type)
                ) {
                  n(p, A.sibling),
                    (h = o(A, m.props)),
                    (h.ref = di(p, A, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, A);
                break;
              } else t(p, A);
              A = A.sibling;
            }
            m.type === no
              ? ((h = jr(m.props.children, p.mode, k, m.key)),
                (h.return = p),
                (p = h))
              : ((k = Vs(m.type, m.key, m.props, null, p.mode, k)),
                (k.ref = di(p, h, m)),
                (k.return = p),
                (p = k));
          }
          return a(p);
        case to:
          e: {
            for (A = m.key; h !== null; ) {
              if (h.key === A)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Sc(m, p.mode, k)), (h.return = p), (p = h);
          }
          return a(p);
        case Un:
          return (A = m._init), b(p, h, A(m._payload), k);
      }
      if (bi(m)) return y(p, h, m, k);
      if (ai(m)) return S(p, h, m, k);
      fs(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = yc(m, p.mode, k)), (h.return = p), (p = h)),
        a(p))
      : n(p, h);
  }
  return b;
}
var Vo = Iy(!0),
  Oy = Iy(!1),
  vl = mr(null),
  yl = null,
  co = null,
  Yf = null;
function Jf() {
  Yf = co = yl = null;
}
function Qf(e) {
  var t = vl.current;
  fe(vl), (e._currentValue = t);
}
function _d(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ao(e, t) {
  (yl = e),
    (Yf = co = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if (Yf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), co === null)) {
      if (yl === null) throw Error($(308));
      (co = e), (yl.dependencies = { lanes: 0, firstContext: e });
    } else co = co.next = e;
  return t;
}
var Rr = null;
function Xf(e) {
  Rr === null ? (Rr = [e]) : Rr.push(e);
}
function Vy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Xf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zn(e, r)
  );
}
function zn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Gn = !1;
function Zf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ny(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ir(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Xf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zn(e, n)
  );
}
function js(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bf(e, n);
  }
}
function _m(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Sl(e, t, n, r) {
  var o = e.updateQueue;
  Gn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        g = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            S = s;
          switch (((f = t), (g = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == "function")) {
                d = y.call(g, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (f = typeof y == "function" ? y.call(g, d, f) : y),
                f == null)
              )
                break e;
              d = xe({}, d, f);
              break e;
            case 2:
              Gn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = d)) : (c = c.next = g),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Wr |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Em(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error($(191, o));
        o.call(r);
      }
    }
}
var Ma = {},
  ln = mr(Ma),
  la = mr(Ma),
  ua = mr(Ma);
function $r(e) {
  if (e === Ma) throw Error($(174));
  return e;
}
function eh(e, t) {
  switch ((se(ua, t), se(la, e), se(ln, Ma), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = sd(t, e));
  }
  fe(ln), se(ln, t);
}
function No() {
  fe(ln), fe(la), fe(ua);
}
function Wy(e) {
  $r(ua.current);
  var t = $r(ln.current),
    n = sd(t, e.type);
  t !== n && (se(la, e), se(ln, n));
}
function th(e) {
  la.current === e && (fe(ln), fe(la));
}
var Se = mr(0);
function bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fc = [];
function nh() {
  for (var e = 0; e < fc.length; e++)
    fc[e]._workInProgressVersionPrimary = null;
  fc.length = 0;
}
var Ls = Fn.ReactCurrentDispatcher,
  hc = Fn.ReactCurrentBatchConfig,
  Nr = 0,
  we = null,
  Re = null,
  ze = null,
  wl = !1,
  Li = !1,
  ca = 0,
  j2 = 0;
function qe() {
  throw Error($(321));
}
function rh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Jt(e[n], t[n])) return !1;
  return !0;
}
function oh(e, t, n, r, o, i) {
  if (
    ((Nr = i),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ls.current = e === null || e.memoizedState === null ? I2 : O2),
    (e = n(r, o)),
    Li)
  ) {
    i = 0;
    do {
      if (((Li = !1), (ca = 0), 25 <= i)) throw Error($(301));
      (i += 1),
        (ze = Re = null),
        (t.updateQueue = null),
        (Ls.current = V2),
        (e = n(r, o));
    } while (Li);
  }
  if (
    ((Ls.current = xl),
    (t = Re !== null && Re.next !== null),
    (Nr = 0),
    (ze = Re = we = null),
    (wl = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function ih() {
  var e = ca !== 0;
  return (ca = 0), e;
}
function en() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (we.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function It() {
  if (Re === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = ze === null ? we.memoizedState : ze.next;
  if (t !== null) (ze = t), (Re = e);
  else {
    if (e === null) throw Error($(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      ze === null ? (we.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function da(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pc(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Nr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (we.lanes |= c),
          (Wr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      Jt(r, t.memoizedState) || (ut = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (we.lanes |= i), (Wr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mc(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Jt(i, t.memoizedState) || (ut = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Hy() {}
function qy(e, t) {
  var n = we,
    r = It(),
    o = t(),
    i = !Jt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ut = !0)),
    (r = r.queue),
    ah(Ky.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fa(9, Gy.bind(null, n, r, o, t), void 0, null),
      De === null)
    )
      throw Error($(349));
    Nr & 30 || Uy(n, t, o);
  }
  return o;
}
function Uy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yy(t) && Jy(e);
}
function Ky(e, t, n) {
  return n(function () {
    Yy(t) && Jy(e);
  });
}
function Yy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jt(e, n);
  } catch {
    return !0;
  }
}
function Jy(e) {
  var t = zn(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function Am(e) {
  var t = en();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: da,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = B2.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function fa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qy() {
  return It().memoizedState;
}
function Fs(e, t, n, r) {
  var o = en();
  (we.flags |= e),
    (o.memoizedState = fa(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xl(e, t, n, r) {
  var o = It();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var a = Re.memoizedState;
    if (((i = a.destroy), r !== null && rh(r, a.deps))) {
      o.memoizedState = fa(t, n, i, r);
      return;
    }
  }
  (we.flags |= e), (o.memoizedState = fa(1 | t, n, i, r));
}
function Rm(e, t) {
  return Fs(8390656, 8, e, t);
}
function ah(e, t) {
  return Xl(2048, 8, e, t);
}
function Xy(e, t) {
  return Xl(4, 2, e, t);
}
function Zy(e, t) {
  return Xl(4, 4, e, t);
}
function e1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function t1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xl(4, 4, e1.bind(null, t, e), n)
  );
}
function sh() {}
function n1(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function r1(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function o1(e, t, n) {
  return Nr & 21
    ? (Jt(n, t) || ((n = uy()), (we.lanes |= n), (Wr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function L2(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hc.transition;
  hc.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (hc.transition = r);
  }
}
function i1() {
  return It().memoizedState;
}
function F2(e, t, n) {
  var r = sr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    a1(e))
  )
    s1(t, n);
  else if (((n = Vy(e, t, n, r)), n !== null)) {
    var o = rt();
    Yt(n, e, r, o), l1(n, t, r);
  }
}
function B2(e, t, n) {
  var r = sr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (a1(e)) s1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Jt(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Xf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vy(e, t, o, r)),
      n !== null && ((o = rt()), Yt(n, e, r, o), l1(n, t, r));
  }
}
function a1(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function s1(e, t) {
  Li = wl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function l1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bf(e, n);
  }
}
var xl = {
    readContext: Bt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  I2 = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (en().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: Rm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fs(4194308, 4, e1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = en();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = en();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = F2.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = en();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Am,
    useDebugValue: sh,
    useDeferredValue: function (e) {
      return (en().memoizedState = e);
    },
    useTransition: function () {
      var e = Am(!1),
        t = e[0];
      return (e = L2.bind(null, e[1])), (en().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        o = en();
      if (ge) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error($(349));
        Nr & 30 || Uy(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Rm(Ky.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fa(9, Gy.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = en(),
        t = De.identifierPrefix;
      if (ge) {
        var n = wn,
          r = bn;
        (n = (r & ~(1 << (32 - Kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ca++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = j2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  O2 = {
    readContext: Bt,
    useCallback: n1,
    useContext: Bt,
    useEffect: ah,
    useImperativeHandle: t1,
    useInsertionEffect: Xy,
    useLayoutEffect: Zy,
    useMemo: r1,
    useReducer: pc,
    useRef: Qy,
    useState: function () {
      return pc(da);
    },
    useDebugValue: sh,
    useDeferredValue: function (e) {
      var t = It();
      return o1(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = pc(da)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Hy,
    useSyncExternalStore: qy,
    useId: i1,
    unstable_isNewReconciler: !1,
  },
  V2 = {
    readContext: Bt,
    useCallback: n1,
    useContext: Bt,
    useEffect: ah,
    useImperativeHandle: t1,
    useInsertionEffect: Xy,
    useLayoutEffect: Zy,
    useMemo: r1,
    useReducer: mc,
    useRef: Qy,
    useState: function () {
      return mc(da);
    },
    useDebugValue: sh,
    useDeferredValue: function (e) {
      var t = It();
      return Re === null ? (t.memoizedState = e) : o1(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = mc(da)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Hy,
    useSyncExternalStore: qy,
    useId: i1,
    unstable_isNewReconciler: !1,
  };
function Ht(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ed(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      o = sr(e),
      i = Cn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ir(e, i, o)),
      t !== null && (Yt(t, e, o, r), js(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      o = sr(e),
      i = Cn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ir(e, i, o)),
      t !== null && (Yt(t, e, o, r), js(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = rt(),
      r = sr(e),
      o = Cn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ir(e, o, r)),
      t !== null && (Yt(t, e, r, n), js(t, e, r));
  },
};
function $m(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !oa(n, r) || !oa(o, i)
      : !0
  );
}
function u1(e, t, n) {
  var r = !1,
    o = cr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Bt(i))
      : ((o = dt(t) ? Or : Xe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Io(e, o) : cr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Mm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function Ad(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Zf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Bt(i))
    : ((i = dt(t) ? Or : Xe.current), (o.context = Io(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ed(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Zl.enqueueReplaceState(o, o.state, null),
      Sl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mk(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var N2 = typeof WeakMap == "function" ? WeakMap : Map;
function c1(e, t, n) {
  (n = Cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Cl || ((Cl = !0), (Od = r)), Rd(e, t);
    }),
    n
  );
}
function d1(e, t, n) {
  (n = Cn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Rd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Rd(e, t),
          typeof r != "function" &&
            (ar === null ? (ar = new Set([this])) : ar.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function zm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new N2();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = nC.bind(null, e, t, n)), t.then(e, e));
}
function Dm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Cn(-1, 1)), (t.tag = 2), ir(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var W2 = Fn.ReactCurrentOwner,
  ut = !1;
function tt(e, t, n, r) {
  t.child = e === null ? Oy(t, null, n, r) : Vo(t, e.child, n, r);
}
function Lm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ao(t, o),
    (r = oh(e, t, n, r, i, o)),
    (n = ih()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dn(e, t, o))
      : (ge && n && Uf(t), (t.flags |= 1), tt(e, t, r, o), t.child)
  );
}
function Fm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !mh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), f1(e, t, i, r, o))
      : ((e = Vs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oa), n(a, r) && e.ref === t.ref)
    )
      return Dn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = lr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function f1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (oa(i, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ut = !0);
      else return (t.lanes = e.lanes), Dn(e, t, o);
  }
  return $d(e, t, n, r, o);
}
function h1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(ho, vt),
        (vt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(ho, vt),
          (vt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(ho, vt),
        (vt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(ho, vt),
      (vt |= r);
  return tt(e, t, o, n), t.child;
}
function p1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $d(e, t, n, r, o) {
  var i = dt(n) ? Or : Xe.current;
  return (
    (i = Io(t, i)),
    Ao(t, o),
    (n = oh(e, t, n, r, i, o)),
    (r = ih()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dn(e, t, o))
      : (ge && r && Uf(t), (t.flags |= 1), tt(e, t, n, o), t.child)
  );
}
function Bm(e, t, n, r, o) {
  if (dt(n)) {
    var i = !0;
    pl(t);
  } else i = !1;
  if ((Ao(t, o), t.stateNode === null))
    Bs(e, t), u1(t, n, r), Ad(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Bt(u))
      : ((u = dt(n) ? Or : Xe.current), (u = Io(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && Mm(t, a, r, u)),
      (Gn = !1);
    var f = t.memoizedState;
    (a.state = f),
      Sl(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || ct.current || Gn
        ? (typeof c == "function" && (Ed(t, n, c, r), (l = t.memoizedState)),
          (s = Gn || $m(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ny(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ht(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Bt(l))
        : ((l = dt(n) ? Or : Xe.current), (l = Io(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && Mm(t, a, r, l)),
      (Gn = !1),
      (f = t.memoizedState),
      (a.state = f),
      Sl(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || ct.current || Gn
      ? (typeof g == "function" && (Ed(t, n, g, r), (y = t.memoizedState)),
        (u = Gn || $m(t, n, u, r, f, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Md(e, t, n, r, i, o);
}
function Md(e, t, n, r, o, i) {
  p1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && km(t, n, !1), Dn(e, t, i);
  (r = t.stateNode), (W2.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Vo(t, e.child, null, i)), (t.child = Vo(t, null, s, i)))
      : tt(e, t, s, i),
    (t.memoizedState = r.state),
    o && km(t, n, !0),
    t.child
  );
}
function m1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xm(e, t.context, !1),
    eh(e, t.containerInfo);
}
function Im(e, t, n, r, o) {
  return Oo(), Kf(o), (t.flags |= 256), tt(e, t, n, r), t.child;
}
var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function g1(e, t, n) {
  var r = t.pendingProps,
    o = Se.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    se(Se, o & 1),
    e === null)
  )
    return (
      Pd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = nu(a, r, 0, null)),
              (e = jr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Dd(n)),
              (t.memoizedState = zd),
              e)
            : lh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return H2(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = lr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = lr(s, i)) : ((i = jr(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Dd(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = lr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function lh(e, t) {
  return (
    (t = nu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hs(e, t, n, r) {
  return (
    r !== null && Kf(r),
    Vo(t, e.child, null, n),
    (e = lh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function H2(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gc(Error($(422)))), hs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = nu({ mode: "visible", children: r.children }, o, 0, null)),
        (i = jr(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Vo(t, e.child, null, a),
        (t.child.memoizedState = Dd(a)),
        (t.memoizedState = zd),
        i);
  if (!(t.mode & 1)) return hs(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error($(419))), (r = gc(i, r, void 0)), hs(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), ut || s)) {
    if (((r = De), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), zn(e, o), Yt(r, e, o, -1));
    }
    return ph(), (r = gc(Error($(421)))), hs(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (yt = or(o.nextSibling)),
      (St = t),
      (ge = !0),
      (Ut = null),
      e !== null &&
        ((zt[Dt++] = bn),
        (zt[Dt++] = wn),
        (zt[Dt++] = Vr),
        (bn = e.id),
        (wn = e.overflow),
        (Vr = t)),
      (t = lh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Om(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _d(e.return, t, n);
}
function vc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function v1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((tt(e, t, r.children, n), (r = Se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Om(e, n, t);
        else if (e.tag === 19) Om(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(Se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && bl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          vc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && bl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        vc(t, !0, n, null, i);
        break;
      case "together":
        vc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = lr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function q2(e, t, n) {
  switch (t.tag) {
    case 3:
      m1(t), Oo();
      break;
    case 5:
      Wy(t);
      break;
    case 1:
      dt(t.type) && pl(t);
      break;
    case 4:
      eh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      se(vl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(Se, Se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? g1(e, t, n)
          : (se(Se, Se.current & 1),
            (e = Dn(e, t, n)),
            e !== null ? e.sibling : null);
      se(Se, Se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return v1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        se(Se, Se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), h1(e, t, n);
  }
  return Dn(e, t, n);
}
var y1, jd, S1, b1;
y1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jd = function () {};
S1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), $r(ln.current);
    var i = null;
    switch (n) {
      case "input":
        (o = rd(e, o)), (r = rd(e, r)), (i = []);
        break;
      case "select":
        (o = xe({}, o, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ad(e, o)), (r = ad(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fl);
    }
    ld(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ue("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
b1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fi(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function U2(e, t, n) {
  var r = t.pendingProps;
  switch ((Gf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(t), null;
    case 1:
      return dt(t.type) && hl(), Ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        No(),
        fe(ct),
        fe(Xe),
        nh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ut !== null && (Wd(Ut), (Ut = null)))),
        jd(e, t),
        Ue(t),
        null
      );
    case 5:
      th(t);
      var o = $r(ua.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        S1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Ue(t), null;
        }
        if (((e = $r(ln.current)), ds(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[on] = t), (r[sa] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < xi.length; o++) ue(xi[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              Yp(r, i), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              Qp(r, i), ue("invalid", r);
          }
          ld(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Qi.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              ns(r), Jp(r, i, !0);
              break;
            case "textarea":
              ns(r), Xp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = fl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Kv(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[on] = t),
            (e[sa] = r),
            y1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = ud(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < xi.length; o++) ue(xi[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (o = r);
                break;
              case "details":
                ue("toggle", e), (o = r);
                break;
              case "input":
                Yp(e, r), (o = rd(e, r)), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = xe({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                Qp(e, r), (o = ad(e, r)), ue("invalid", e);
                break;
              default:
                o = r;
            }
            ld(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? Qv(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Yv(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Xi(e, l)
                    : typeof l == "number" && Xi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ue("scroll", e)
                      : l != null && Mf(e, i, l, a));
              }
            switch (n) {
              case "input":
                ns(e), Jp(e, r, !1);
                break;
              case "textarea":
                ns(e), Xp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ur(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? To(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      To(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) b1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = $r(ua.current)), $r(ln.current), ds(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[on] = t),
            (i = r.nodeValue !== n) && ((e = St), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[on] = t),
            (t.stateNode = r);
      }
      return Ue(t), null;
    case 13:
      if (
        (fe(Se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && yt !== null && t.mode & 1 && !(t.flags & 128))
          By(), Oo(), (t.flags |= 98560), (i = !1);
        else if (((i = ds(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error($(317));
            i[on] = t;
          } else
            Oo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ue(t), (i = !1);
        } else Ut !== null && (Wd(Ut), (Ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Se.current & 1 ? $e === 0 && ($e = 3) : ph())),
          t.updateQueue !== null && (t.flags |= 4),
          Ue(t),
          null);
    case 4:
      return (
        No(), jd(e, t), e === null && ia(t.stateNode.containerInfo), Ue(t), null
      );
    case 10:
      return Qf(t.type._context), Ue(t), null;
    case 17:
      return dt(t.type) && hl(), Ue(t), null;
    case 19:
      if ((fe(Se), (i = t.memoizedState), i === null)) return Ue(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) fi(i, !1);
        else {
          if ($e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = bl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    fi(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(Se, (Se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Pe() > Ho &&
            ((t.flags |= 128), (r = !0), fi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !ge)
            )
              return Ue(t), null;
          } else
            2 * Pe() - i.renderingStartTime > Ho &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Pe()),
          (t.sibling = null),
          (n = Se.current),
          se(Se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ue(t), null);
    case 22:
    case 23:
      return (
        hh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? vt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function G2(e, t) {
  switch ((Gf(t), t.tag)) {
    case 1:
      return (
        dt(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        No(),
        fe(ct),
        fe(Xe),
        nh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return th(t), null;
    case 13:
      if (
        (fe(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        Oo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(Se), null;
    case 4:
      return No(), null;
    case 10:
      return Qf(t.type._context), null;
    case 22:
    case 23:
      return hh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ps = !1,
  Ye = !1,
  K2 = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function fo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function Ld(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var Vm = !1;
function Y2(e, t) {
  if (((Sd = ul), (e = Ty()), qf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bd = { focusedElem: e, selectionRange: n }, ul = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var S = y.memoizedProps,
                    b = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ht(t.type, S),
                      b
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (k) {
          Ce(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (y = Vm), (Vm = !1), y;
}
function Fi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ld(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function eu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function w1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), w1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[on], delete t[sa], delete t[kd], delete t[$2], delete t[M2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function x1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || x1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bd(e, t, n), e = e.sibling; e !== null; ) Bd(e, t, n), (e = e.sibling);
}
function Id(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Id(e, t, n), e = e.sibling; e !== null; ) Id(e, t, n), (e = e.sibling);
}
var Be = null,
  qt = !1;
function Vn(e, t, n) {
  for (n = n.child; n !== null; ) k1(e, t, n), (n = n.sibling);
}
function k1(e, t, n) {
  if (sn && typeof sn.onCommitFiberUnmount == "function")
    try {
      sn.onCommitFiberUnmount(Ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ye || fo(n, t);
    case 6:
      var r = Be,
        o = qt;
      (Be = null),
        Vn(e, t, n),
        (Be = r),
        (qt = o),
        Be !== null &&
          (qt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (qt
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? cc(e.parentNode, n)
              : e.nodeType === 1 && cc(e, n),
            na(e))
          : cc(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (o = qt),
        (Be = n.stateNode.containerInfo),
        (qt = !0),
        Vn(e, t, n),
        (Be = r),
        (qt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Ld(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Vn(e, t, n);
      break;
    case 1:
      if (
        !Ye &&
        (fo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ce(n, t, s);
        }
      Vn(e, t, n);
      break;
    case 21:
      Vn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ye = (r = Ye) || n.memoizedState !== null), Vn(e, t, n), (Ye = r))
        : Vn(e, t, n);
      break;
    default:
      Vn(e, t, n);
  }
}
function Wm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new K2()),
      t.forEach(function (r) {
        var o = oC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Be = s.stateNode), (qt = !1);
              break e;
            case 3:
              (Be = s.stateNode.containerInfo), (qt = !0);
              break e;
            case 4:
              (Be = s.stateNode.containerInfo), (qt = !0);
              break e;
          }
          s = s.return;
        }
        if (Be === null) throw Error($(160));
        k1(i, a, o), (Be = null), (qt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ce(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) C1(t, e), (t = t.sibling);
}
function C1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nt(t, e), Xt(e), r & 4)) {
        try {
          Fi(3, e, e.return), eu(3, e);
        } catch (S) {
          Ce(e, e.return, S);
        }
        try {
          Fi(5, e, e.return);
        } catch (S) {
          Ce(e, e.return, S);
        }
      }
      break;
    case 1:
      Nt(t, e), Xt(e), r & 512 && n !== null && fo(n, n.return);
      break;
    case 5:
      if (
        (Nt(t, e),
        Xt(e),
        r & 512 && n !== null && fo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xi(o, "");
        } catch (S) {
          Ce(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Uv(o, i),
              ud(s, a);
            var u = ud(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? Qv(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Yv(o, d)
                : c === "children"
                ? Xi(o, d)
                : Mf(o, c, d, u);
            }
            switch (s) {
              case "input":
                od(o, i);
                break;
              case "textarea":
                Gv(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? To(o, !!i.multiple, g, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? To(o, !!i.multiple, i.defaultValue, !0)
                      : To(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[sa] = i;
          } catch (S) {
            Ce(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Nt(t, e), Xt(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (S) {
          Ce(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Nt(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          na(t.containerInfo);
        } catch (S) {
          Ce(e, e.return, S);
        }
      break;
    case 4:
      Nt(t, e), Xt(e);
      break;
    case 13:
      Nt(t, e),
        Xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (dh = Pe())),
        r & 4 && Wm(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ye = (u = Ye) || c), Nt(t, e), (Ye = u)) : Nt(t, e),
        Xt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((f = z), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fi(4, f, f.return);
                  break;
                case 1:
                  fo(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      Ce(r, n, S);
                    }
                  }
                  break;
                case 5:
                  fo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    qm(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (z = g)) : qm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Jv("display", a)));
              } catch (S) {
                Ce(e, e.return, S);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (S) {
                Ce(e, e.return, S);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Nt(t, e), Xt(e), r & 4 && Wm(e);
      break;
    case 21:
      break;
    default:
      Nt(t, e), Xt(e);
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (x1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xi(o, ""), (r.flags &= -33));
          var i = Nm(e);
          Id(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Nm(e);
          Bd(e, s, a);
          break;
        default:
          throw Error($(161));
      }
    } catch (l) {
      Ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function J2(e, t, n) {
  (z = e), T1(e);
}
function T1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ps;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Ye;
        s = ps;
        var u = Ye;
        if (((ps = a), (Ye = l) && !u))
          for (z = o; z !== null; )
            (a = z),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Um(o)
                : l !== null
                ? ((l.return = a), (z = l))
                : Um(o);
        for (; i !== null; ) (z = i), T1(i), (i = i.sibling);
        (z = o), (ps = s), (Ye = u);
      }
      Hm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : Hm(e);
  }
}
function Hm(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || eu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Em(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Em(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && na(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        Ye || (t.flags & 512 && Fd(t));
      } catch (f) {
        Ce(t, t.return, f);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function qm(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Um(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            eu(4, t);
          } catch (l) {
            Ce(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ce(t, o, l);
            }
          }
          var i = t.return;
          try {
            Fd(t);
          } catch (l) {
            Ce(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Fd(t);
          } catch (l) {
            Ce(t, a, l);
          }
      }
    } catch (l) {
      Ce(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (z = s);
      break;
    }
    z = t.return;
  }
}
var Q2 = Math.ceil,
  kl = Fn.ReactCurrentDispatcher,
  uh = Fn.ReactCurrentOwner,
  Ft = Fn.ReactCurrentBatchConfig,
  G = 0,
  De = null,
  Ae = null,
  Ve = 0,
  vt = 0,
  ho = mr(0),
  $e = 0,
  ha = null,
  Wr = 0,
  tu = 0,
  ch = 0,
  Bi = null,
  st = null,
  dh = 0,
  Ho = 1 / 0,
  gn = null,
  Cl = !1,
  Od = null,
  ar = null,
  ms = !1,
  Zn = null,
  Tl = 0,
  Ii = 0,
  Vd = null,
  Is = -1,
  Os = 0;
function rt() {
  return G & 6 ? Pe() : Is !== -1 ? Is : (Is = Pe());
}
function sr(e) {
  return e.mode & 1
    ? G & 2 && Ve !== 0
      ? Ve & -Ve
      : D2.transition !== null
      ? (Os === 0 && (Os = uy()), Os)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gy(e.type))),
        e)
    : 1;
}
function Yt(e, t, n, r) {
  if (50 < Ii) throw ((Ii = 0), (Vd = null), Error($(185)));
  Aa(e, n, r),
    (!(G & 2) || e !== De) &&
      (e === De && (!(G & 2) && (tu |= n), $e === 4 && Jn(e, Ve)),
      ft(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Ho = Pe() + 500), Ql && gr()));
}
function ft(e, t) {
  var n = e.callbackNode;
  Dk(e, t);
  var r = ll(e, e === De ? Ve : 0);
  if (r === 0)
    n !== null && tm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tm(n), t === 1))
      e.tag === 0 ? z2(Gm.bind(null, e)) : jy(Gm.bind(null, e)),
        A2(function () {
          !(G & 6) && gr();
        }),
        (n = null);
    else {
      switch (cy(r)) {
        case 1:
          n = Ff;
          break;
        case 4:
          n = sy;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = ly;
          break;
        default:
          n = sl;
      }
      n = z1(n, P1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function P1(e, t) {
  if (((Is = -1), (Os = 0), G & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (Ro() && e.callbackNode !== n) return null;
  var r = ll(e, e === De ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var i = E1();
    (De !== e || Ve !== t) && ((gn = null), (Ho = Pe() + 500), Dr(e, t));
    do
      try {
        eC();
        break;
      } catch (s) {
        _1(e, s);
      }
    while (!0);
    Jf(),
      (kl.current = i),
      (G = o),
      Ae !== null ? (t = 0) : ((De = null), (Ve = 0), (t = $e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = pd(e)), o !== 0 && ((r = o), (t = Nd(e, o)))), t === 1)
    )
      throw ((n = ha), Dr(e, 0), Jn(e, r), ft(e, Pe()), n);
    if (t === 6) Jn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !X2(o) &&
          ((t = Pl(e, r)),
          t === 2 && ((i = pd(e)), i !== 0 && ((r = i), (t = Nd(e, i)))),
          t === 1))
      )
        throw ((n = ha), Dr(e, 0), Jn(e, r), ft(e, Pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Cr(e, st, gn);
          break;
        case 3:
          if (
            (Jn(e, r), (r & 130023424) === r && ((t = dh + 500 - Pe()), 10 < t))
          ) {
            if (ll(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              rt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = xd(Cr.bind(null, e, st, gn), t);
            break;
          }
          Cr(e, st, gn);
          break;
        case 4:
          if ((Jn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Kt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Q2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xd(Cr.bind(null, e, st, gn), r);
            break;
          }
          Cr(e, st, gn);
          break;
        case 5:
          Cr(e, st, gn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return ft(e, Pe()), e.callbackNode === n ? P1.bind(null, e) : null;
}
function Nd(e, t) {
  var n = Bi;
  return (
    e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256),
    (e = Pl(e, t)),
    e !== 2 && ((t = st), (st = n), t !== null && Wd(t)),
    e
  );
}
function Wd(e) {
  st === null ? (st = e) : st.push.apply(st, e);
}
function X2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Jt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jn(e, t) {
  for (
    t &= ~ch,
      t &= ~tu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Gm(e) {
  if (G & 6) throw Error($(327));
  Ro();
  var t = ll(e, 0);
  if (!(t & 1)) return ft(e, Pe()), null;
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pd(e);
    r !== 0 && ((t = r), (n = Nd(e, r)));
  }
  if (n === 1) throw ((n = ha), Dr(e, 0), Jn(e, t), ft(e, Pe()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cr(e, st, gn),
    ft(e, Pe()),
    null
  );
}
function fh(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Ho = Pe() + 500), Ql && gr());
  }
}
function Hr(e) {
  Zn !== null && Zn.tag === 0 && !(G & 6) && Ro();
  var t = G;
  G |= 1;
  var n = Ft.transition,
    r = te;
  try {
    if (((Ft.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (Ft.transition = n), (G = t), !(G & 6) && gr();
  }
}
function hh() {
  (vt = ho.current), fe(ho);
}
function Dr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), E2(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((Gf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          No(), fe(ct), fe(Xe), nh();
          break;
        case 5:
          th(r);
          break;
        case 4:
          No();
          break;
        case 13:
          fe(Se);
          break;
        case 19:
          fe(Se);
          break;
        case 10:
          Qf(r.type._context);
          break;
        case 22:
        case 23:
          hh();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Ae = e = lr(e.current, null)),
    (Ve = vt = t),
    ($e = 0),
    (ha = null),
    (ch = tu = Wr = 0),
    (st = Bi = null),
    Rr !== null)
  ) {
    for (t = 0; t < Rr.length; t++)
      if (((n = Rr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Rr = null;
  }
  return e;
}
function _1(e, t) {
  do {
    var n = Ae;
    try {
      if ((Jf(), (Ls.current = xl), wl)) {
        for (var r = we.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        wl = !1;
      }
      if (
        ((Nr = 0),
        (ze = Re = we = null),
        (Li = !1),
        (ca = 0),
        (uh.current = null),
        n === null || n.return === null)
      ) {
        ($e = 1), (ha = t), (Ae = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = Ve),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Dm(a);
          if (g !== null) {
            (g.flags &= -257),
              jm(g, a, s, i, t),
              g.mode & 1 && zm(i, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(l), (t.updateQueue = S);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              zm(i, u, t), ph();
              break e;
            }
            l = Error($(426));
          }
        } else if (ge && s.mode & 1) {
          var b = Dm(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              jm(b, a, s, i, t),
              Kf(Wo(l, s));
            break e;
          }
        }
        (i = l = Wo(l, s)),
          $e !== 4 && ($e = 2),
          Bi === null ? (Bi = [i]) : Bi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = c1(i, l, t);
              _m(i, p);
              break e;
            case 1:
              s = l;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (ar === null || !ar.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = d1(i, s, t);
                _m(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      R1(n);
    } catch (P) {
      (t = P), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function E1() {
  var e = kl.current;
  return (kl.current = xl), e === null ? xl : e;
}
function ph() {
  ($e === 0 || $e === 3 || $e === 2) && ($e = 4),
    De === null || (!(Wr & 268435455) && !(tu & 268435455)) || Jn(De, Ve);
}
function Pl(e, t) {
  var n = G;
  G |= 2;
  var r = E1();
  (De !== e || Ve !== t) && ((gn = null), Dr(e, t));
  do
    try {
      Z2();
      break;
    } catch (o) {
      _1(e, o);
    }
  while (!0);
  if ((Jf(), (G = n), (kl.current = r), Ae !== null)) throw Error($(261));
  return (De = null), (Ve = 0), $e;
}
function Z2() {
  for (; Ae !== null; ) A1(Ae);
}
function eC() {
  for (; Ae !== null && !Tk(); ) A1(Ae);
}
function A1(e) {
  var t = M1(e.alternate, e, vt);
  (e.memoizedProps = e.pendingProps),
    t === null ? R1(e) : (Ae = t),
    (uh.current = null);
}
function R1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = G2(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        ($e = 6), (Ae = null);
        return;
      }
    } else if (((n = U2(n, t, vt)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  $e === 0 && ($e = 5);
}
function Cr(e, t, n) {
  var r = te,
    o = Ft.transition;
  try {
    (Ft.transition = null), (te = 1), tC(e, t, n, r);
  } finally {
    (Ft.transition = o), (te = r);
  }
  return null;
}
function tC(e, t, n, r) {
  do Ro();
  while (Zn !== null);
  if (G & 6) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (jk(e, i),
    e === De && ((Ae = De = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ms ||
      ((ms = !0),
      z1(sl, function () {
        return Ro(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ft.transition), (Ft.transition = null);
    var a = te;
    te = 1;
    var s = G;
    (G |= 4),
      (uh.current = null),
      Y2(e, n),
      C1(n, e),
      w2(bd),
      (ul = !!Sd),
      (bd = Sd = null),
      (e.current = n),
      J2(n),
      Pk(),
      (G = s),
      (te = a),
      (Ft.transition = i);
  } else e.current = n;
  if (
    (ms && ((ms = !1), (Zn = e), (Tl = o)),
    (i = e.pendingLanes),
    i === 0 && (ar = null),
    Ak(n.stateNode),
    ft(e, Pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Cl) throw ((Cl = !1), (e = Od), (Od = null), e);
  return (
    Tl & 1 && e.tag !== 0 && Ro(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vd ? Ii++ : ((Ii = 0), (Vd = e))) : (Ii = 0),
    gr(),
    null
  );
}
function Ro() {
  if (Zn !== null) {
    var e = cy(Tl),
      t = Ft.transition,
      n = te;
    try {
      if (((Ft.transition = null), (te = 16 > e ? 16 : e), Zn === null))
        var r = !1;
      else {
        if (((e = Zn), (Zn = null), (Tl = 0), G & 6)) throw Error($(331));
        var o = G;
        for (G |= 4, z = e.current; z !== null; ) {
          var i = z,
            a = i.child;
          if (z.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (z = d);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var f = c.sibling,
                        g = c.return;
                      if ((w1(c), c === u)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (z = f);
                        break;
                      }
                      z = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var b = S.sibling;
                    (S.sibling = null), (S = b);
                  } while (S !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (z = a);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fi(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (z = p);
                break e;
              }
              z = i.return;
            }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          a = z;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (z = m);
          else
            e: for (a = h; z !== null; ) {
              if (((s = z), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      eu(9, s);
                  }
                } catch (P) {
                  Ce(s, s.return, P);
                }
              if (s === a) {
                z = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (z = k);
                break e;
              }
              z = s.return;
            }
        }
        if (
          ((G = o), gr(), sn && typeof sn.onPostCommitFiberRoot == "function")
        )
          try {
            sn.onPostCommitFiberRoot(Ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (Ft.transition = t);
    }
  }
  return !1;
}
function Km(e, t, n) {
  (t = Wo(n, t)),
    (t = c1(e, t, 1)),
    (e = ir(e, t, 1)),
    (t = rt()),
    e !== null && (Aa(e, 1, t), ft(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) Km(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Km(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ar === null || !ar.has(r)))
        ) {
          (e = Wo(n, e)),
            (e = d1(t, e, 1)),
            (t = ir(t, e, 1)),
            (e = rt()),
            t !== null && (Aa(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function nC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ve & n) === n &&
      ($e === 4 || ($e === 3 && (Ve & 130023424) === Ve && 500 > Pe() - dh)
        ? Dr(e, 0)
        : (ch |= n)),
    ft(e, t);
}
function $1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = is), (is <<= 1), !(is & 130023424) && (is = 4194304))
      : (t = 1));
  var n = rt();
  (e = zn(e, t)), e !== null && (Aa(e, t, n), ft(e, n));
}
function rC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $1(e, n);
}
function oC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), $1(e, n);
}
var M1;
M1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), q2(e, t, n);
      ut = !!(e.flags & 131072);
    }
  else (ut = !1), ge && t.flags & 1048576 && Ly(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bs(e, t), (e = t.pendingProps);
      var o = Io(t, Xe.current);
      Ao(t, n), (o = oh(null, t, r, e, o, n));
      var i = ih();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            dt(r) ? ((i = !0), pl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Zf(t),
            (o.updater = Zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ad(t, r, e, n),
            (t = Md(null, t, r, !0, i, n)))
          : ((t.tag = 0), ge && i && Uf(t), tt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = aC(r)),
          (e = Ht(r, e)),
          o)
        ) {
          case 0:
            t = $d(null, t, r, e, n);
            break e;
          case 1:
            t = Bm(null, t, r, e, n);
            break e;
          case 11:
            t = Lm(null, t, r, e, n);
            break e;
          case 14:
            t = Fm(null, t, r, Ht(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        $d(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Bm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((m1(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ny(e, t),
          Sl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wo(Error($(423)), t)), (t = Im(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Wo(Error($(424)), t)), (t = Im(e, t, r, n, o));
            break e;
          } else
            for (
              yt = or(t.stateNode.containerInfo.firstChild),
                St = t,
                ge = !0,
                Ut = null,
                n = Oy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Oo(), r === o)) {
            t = Dn(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wy(t),
        e === null && Pd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        wd(r, o) ? (a = null) : i !== null && wd(r, i) && (t.flags |= 32),
        p1(e, t),
        tt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Pd(t), null;
    case 13:
      return g1(e, t, n);
    case 4:
      return (
        eh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vo(t, null, r, n)) : tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Lm(e, t, r, o, n)
      );
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          se(vl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Jt(i.value, a)) {
            if (i.children === o.children && !ct.current) {
              t = Dn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Cn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      _d(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error($(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  _d(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        tt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ao(t, n),
        (o = Bt(o)),
        (r = r(o)),
        (t.flags |= 1),
        tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ht(r, t.pendingProps)),
        (o = Ht(r.type, o)),
        Fm(e, t, r, o, n)
      );
    case 15:
      return f1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Bs(e, t),
        (t.tag = 1),
        dt(r) ? ((e = !0), pl(t)) : (e = !1),
        Ao(t, n),
        u1(t, r, o),
        Ad(t, r, o, n),
        Md(null, t, r, !0, e, n)
      );
    case 19:
      return v1(e, t, n);
    case 22:
      return h1(e, t, n);
  }
  throw Error($(156, t.tag));
};
function z1(e, t) {
  return ay(e, t);
}
function iC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function jt(e, t, n, r) {
  return new iC(e, t, n, r);
}
function mh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function aC(e) {
  if (typeof e == "function") return mh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Df)) return 11;
    if (e === jf) return 14;
  }
  return 2;
}
function lr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = jt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vs(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) mh(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case no:
        return jr(n.children, o, i, t);
      case zf:
        (a = 8), (o |= 8);
        break;
      case Zc:
        return (
          (e = jt(12, n, t, o | 2)), (e.elementType = Zc), (e.lanes = i), e
        );
      case ed:
        return (e = jt(13, n, t, o)), (e.elementType = ed), (e.lanes = i), e;
      case td:
        return (e = jt(19, n, t, o)), (e.elementType = td), (e.lanes = i), e;
      case Wv:
        return nu(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vv:
              a = 10;
              break e;
            case Nv:
              a = 9;
              break e;
            case Df:
              a = 11;
              break e;
            case jf:
              a = 14;
              break e;
            case Un:
              (a = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = jt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function jr(e, t, n, r) {
  return (e = jt(7, e, r, t)), (e.lanes = n), e;
}
function nu(e, t, n, r) {
  return (
    (e = jt(22, e, r, t)),
    (e.elementType = Wv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yc(e, t, n) {
  return (e = jt(6, e, null, t)), (e.lanes = n), e;
}
function Sc(e, t, n) {
  return (
    (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sC(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zu(0)),
    (this.expirationTimes = Zu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function gh(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new sC(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = jt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zf(i),
    e
  );
}
function lC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: to,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function D1(e) {
  if (!e) return cr;
  e = e._reactInternals;
  e: {
    if (Gr(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return Dy(e, n, t);
  }
  return t;
}
function j1(e, t, n, r, o, i, a, s, l) {
  return (
    (e = gh(n, r, !0, e, o, i, a, s, l)),
    (e.context = D1(null)),
    (n = e.current),
    (r = rt()),
    (o = sr(n)),
    (i = Cn(r, o)),
    (i.callback = t ?? null),
    ir(n, i, o),
    (e.current.lanes = o),
    Aa(e, o, r),
    ft(e, r),
    e
  );
}
function ru(e, t, n, r) {
  var o = t.current,
    i = rt(),
    a = sr(o);
  return (
    (n = D1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Cn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ir(o, t, a)),
    e !== null && (Yt(e, o, a, i), js(e, o, a)),
    a
  );
}
function _l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ym(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function vh(e, t) {
  Ym(e, t), (e = e.alternate) && Ym(e, t);
}
function uC() {
  return null;
}
var L1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function yh(e) {
  this._internalRoot = e;
}
ou.prototype.render = yh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  ru(e, t, null, null);
};
ou.prototype.unmount = yh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hr(function () {
      ru(null, e, null, null);
    }),
      (t[Mn] = null);
  }
};
function ou(e) {
  this._internalRoot = e;
}
ou.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++);
    Yn.splice(n, 0, e), n === 0 && my(e);
  }
};
function Sh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function iu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jm() {}
function cC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = _l(a);
        i.call(u);
      };
    }
    var a = j1(t, r, e, 0, null, !1, !1, "", Jm);
    return (
      (e._reactRootContainer = a),
      (e[Mn] = a.current),
      ia(e.nodeType === 8 ? e.parentNode : e),
      Hr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = _l(l);
      s.call(u);
    };
  }
  var l = gh(e, 0, !1, null, null, !1, !1, "", Jm);
  return (
    (e._reactRootContainer = l),
    (e[Mn] = l.current),
    ia(e.nodeType === 8 ? e.parentNode : e),
    Hr(function () {
      ru(t, l, n, r);
    }),
    l
  );
}
function au(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = _l(a);
        s.call(l);
      };
    }
    ru(t, a, e, o);
  } else a = cC(n, t, e, o, r);
  return _l(a);
}
dy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wi(t.pendingLanes);
        n !== 0 &&
          (Bf(t, n | 1), ft(t, Pe()), !(G & 6) && ((Ho = Pe() + 500), gr()));
      }
      break;
    case 13:
      Hr(function () {
        var r = zn(e, 1);
        if (r !== null) {
          var o = rt();
          Yt(r, e, 1, o);
        }
      }),
        vh(e, 1);
  }
};
If = function (e) {
  if (e.tag === 13) {
    var t = zn(e, 134217728);
    if (t !== null) {
      var n = rt();
      Yt(t, e, 134217728, n);
    }
    vh(e, 134217728);
  }
};
fy = function (e) {
  if (e.tag === 13) {
    var t = sr(e),
      n = zn(e, t);
    if (n !== null) {
      var r = rt();
      Yt(n, e, t, r);
    }
    vh(e, t);
  }
};
hy = function () {
  return te;
};
py = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
dd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((od(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jl(r);
            if (!o) throw Error($(90));
            qv(r), od(r, o);
          }
        }
      }
      break;
    case "textarea":
      Gv(e, n);
      break;
    case "select":
      (t = n.value), t != null && To(e, !!n.multiple, t, !1);
  }
};
ey = fh;
ty = Hr;
var dC = { usingClientEntryPoint: !1, Events: [$a, ao, Jl, Xv, Zv, fh] },
  hi = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  fC = {
    bundleType: hi.bundleType,
    version: hi.version,
    rendererPackageName: hi.rendererPackageName,
    rendererConfig: hi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = oy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hi.findFiberByHostInstance || uC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gs.isDisabled && gs.supportsFiber)
    try {
      (Ul = gs.inject(fC)), (sn = gs);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dC;
Ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sh(t)) throw Error($(200));
  return lC(e, t, null, n);
};
Ct.createRoot = function (e, t) {
  if (!Sh(e)) throw Error($(299));
  var n = !1,
    r = "",
    o = L1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gh(e, 1, !1, null, null, n, !1, r, o)),
    (e[Mn] = t.current),
    ia(e.nodeType === 8 ? e.parentNode : e),
    new yh(t)
  );
};
Ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error($(188))
      : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = oy(t)), (e = e === null ? null : e.stateNode), e;
};
Ct.flushSync = function (e) {
  return Hr(e);
};
Ct.hydrate = function (e, t, n) {
  if (!iu(t)) throw Error($(200));
  return au(null, e, t, !0, n);
};
Ct.hydrateRoot = function (e, t, n) {
  if (!Sh(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = L1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = j1(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Mn] = t.current),
    ia(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ou(t);
};
Ct.render = function (e, t, n) {
  if (!iu(t)) throw Error($(200));
  return au(null, e, t, !1, n);
};
Ct.unmountComponentAtNode = function (e) {
  if (!iu(e)) throw Error($(40));
  return e._reactRootContainer
    ? (Hr(function () {
        au(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mn] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = fh;
Ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!iu(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return au(e, t, n, !1, r);
};
Ct.version = "18.3.1-next-f1338f8080-20240426";
function F1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F1);
    } catch (e) {
      console.error(e);
    }
}
F1(), (Fv.exports = Ct);
var bh = Fv.exports,
  B1,
  Qm = bh;
(B1 = Qm.createRoot), Qm.hydrateRoot;
var hC = !1;
function pC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function mC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var gC = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !hC : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(mC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = pC(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ge = "-ms-",
  El = "-moz-",
  J = "-webkit-",
  I1 = "comm",
  wh = "rule",
  xh = "decl",
  vC = "@import",
  O1 = "@keyframes",
  yC = "@layer",
  SC = Math.abs,
  su = String.fromCharCode,
  bC = Object.assign;
function wC(e, t) {
  return Oe(e, 0) ^ 45
    ? (((((((t << 2) ^ Oe(e, 0)) << 2) ^ Oe(e, 1)) << 2) ^ Oe(e, 2)) << 2) ^
        Oe(e, 3)
    : 0;
}
function V1(e) {
  return e.trim();
}
function xC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function Hd(e, t) {
  return e.indexOf(t);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function pa(e, t, n) {
  return e.slice(t, n);
}
function nn(e) {
  return e.length;
}
function kh(e) {
  return e.length;
}
function vs(e, t) {
  return t.push(e), e;
}
function kC(e, t) {
  return e.map(t).join("");
}
var lu = 1,
  qo = 1,
  N1 = 0,
  pt = 0,
  Ee = 0,
  ei = "";
function uu(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: lu,
    column: qo,
    length: a,
    return: "",
  };
}
function pi(e, t) {
  return bC(uu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function CC() {
  return Ee;
}
function TC() {
  return (
    (Ee = pt > 0 ? Oe(ei, --pt) : 0), qo--, Ee === 10 && ((qo = 1), lu--), Ee
  );
}
function bt() {
  return (
    (Ee = pt < N1 ? Oe(ei, pt++) : 0), qo++, Ee === 10 && ((qo = 1), lu++), Ee
  );
}
function un() {
  return Oe(ei, pt);
}
function Ns() {
  return pt;
}
function za(e, t) {
  return pa(ei, e, t);
}
function ma(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function W1(e) {
  return (lu = qo = 1), (N1 = nn((ei = e))), (pt = 0), [];
}
function H1(e) {
  return (ei = ""), e;
}
function Ws(e) {
  return V1(za(pt - 1, qd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function PC(e) {
  for (; (Ee = un()) && Ee < 33; ) bt();
  return ma(e) > 2 || ma(Ee) > 3 ? "" : " ";
}
function _C(e, t) {
  for (
    ;
    --t &&
    bt() &&
    !(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));

  );
  return za(e, Ns() + (t < 6 && un() == 32 && bt() == 32));
}
function qd(e) {
  for (; bt(); )
    switch (Ee) {
      case e:
        return pt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qd(Ee);
        break;
      case 40:
        e === 41 && qd(e);
        break;
      case 92:
        bt();
        break;
    }
  return pt;
}
function EC(e, t) {
  for (; bt() && e + Ee !== 57; ) if (e + Ee === 84 && un() === 47) break;
  return "/*" + za(t, pt - 1) + "*" + su(e === 47 ? e : bt());
}
function AC(e) {
  for (; !ma(un()); ) bt();
  return za(e, pt);
}
function RC(e) {
  return H1(Hs("", null, null, null, [""], (e = W1(e)), 0, [0], e));
}
function Hs(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      g = 0,
      y = 0,
      S = 1,
      b = 1,
      p = 1,
      h = 0,
      m = "",
      k = o,
      P = i,
      A = r,
      E = m;
    b;

  )
    switch (((y = h), (h = bt()))) {
      case 40:
        if (y != 108 && Oe(E, d - 1) == 58) {
          Hd((E += Q(Ws(h), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Ws(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += PC(y);
        break;
      case 92:
        E += _C(Ns() - 1, 7);
        continue;
      case 47:
        switch (un()) {
          case 42:
          case 47:
            vs($C(EC(bt(), Ns()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * S:
        s[u++] = nn(E) * p;
      case 125 * S:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            p == -1 && (E = Q(E, /\f/g, "")),
              g > 0 &&
                nn(E) - d &&
                vs(
                  g > 32
                    ? Zm(E + ";", r, n, d - 1)
                    : Zm(Q(E, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (vs((A = Xm(E, t, n, u, c, o, s, m, (k = []), (P = []), d)), i),
              h === 123)
            )
              if (c === 0) Hs(E, t, A, A, k, i, d, s, P);
              else
                switch (f === 99 && Oe(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hs(
                      e,
                      A,
                      A,
                      r && vs(Xm(e, A, A, 0, 0, o, s, m, o, (k = []), d), P),
                      o,
                      P,
                      d,
                      s,
                      r ? k : P
                    );
                    break;
                  default:
                    Hs(E, A, A, A, [""], P, 0, s, P);
                }
        }
        (u = c = g = 0), (S = p = 1), (m = E = ""), (d = a);
        break;
      case 58:
        (d = 1 + nn(E)), (g = y);
      default:
        if (S < 1) {
          if (h == 123) --S;
          else if (h == 125 && S++ == 0 && TC() == 125) continue;
        }
        switch (((E += su(h)), h * S)) {
          case 38:
            p = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (s[u++] = (nn(E) - 1) * p), (p = 1);
            break;
          case 64:
            un() === 45 && (E += Ws(bt())),
              (f = un()),
              (c = d = nn((m = E += AC(Ns())))),
              h++;
            break;
          case 45:
            y === 45 && nn(E) == 2 && (S = 0);
        }
    }
  return i;
}
function Xm(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], g = kh(f), y = 0, S = 0, b = 0;
    y < r;
    ++y
  )
    for (var p = 0, h = pa(e, d + 1, (d = SC((S = a[y])))), m = e; p < g; ++p)
      (m = V1(S > 0 ? f[p] + " " + h : Q(h, /&\f/g, f[p]))) && (l[b++] = m);
  return uu(e, t, n, o === 0 ? wh : s, l, u, c);
}
function $C(e, t, n) {
  return uu(e, t, n, I1, su(CC()), pa(e, 2, -2), 0);
}
function Zm(e, t, n, r) {
  return uu(e, t, n, xh, pa(e, 0, r), pa(e, r + 1, -1), r);
}
function $o(e, t) {
  for (var n = "", r = kh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function MC(e, t, n, r) {
  switch (e.type) {
    case yC:
      if (e.children.length) break;
    case vC:
    case xh:
      return (e.return = e.return || e.value);
    case I1:
      return "";
    case O1:
      return (e.return = e.value + "{" + $o(e.children, r) + "}");
    case wh:
      e.value = e.props.join(",");
  }
  return nn((n = $o(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function zC(e) {
  var t = kh(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function DC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var eg = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function q1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var jC = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = un()), o === 38 && i === 12 && (n[r] = 1), !ma(i);

    )
      bt();
    return za(t, pt);
  },
  LC = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ma(o)) {
        case 0:
          o === 38 && un() === 12 && (n[r] = 1), (t[r] += jC(pt - 1, n, r));
          break;
        case 2:
          t[r] += Ws(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = un() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += su(o);
      }
    while ((o = bt()));
    return t;
  },
  FC = function (t, n) {
    return H1(LC(W1(t), n));
  },
  tg = new WeakMap(),
  BC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !tg.get(r)) &&
        !o
      ) {
        tg.set(t, !0);
        for (
          var i = [], a = FC(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  IC = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function U1(e, t) {
  switch (wC(e, t)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + El + e + Ge + e + e;
    case 6828:
    case 4268:
      return J + e + Ge + e + e;
    case 6165:
      return J + e + Ge + "flex-" + e + e;
    case 5187:
      return (
        J + e + Q(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + Ge + "flex-$1$2") + e
      );
    case 5443:
      return J + e + Ge + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        J +
        e +
        Ge +
        "flex-line-pack" +
        Q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return J + e + Ge + Q(e, "shrink", "negative") + e;
    case 5292:
      return J + e + Ge + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        J +
        "box-" +
        Q(e, "-grow", "") +
        J +
        e +
        Ge +
        Q(e, "grow", "positive") +
        e
      );
    case 4554:
      return J + Q(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return (
        Q(Q(Q(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + Ge + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        J +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (nn(e) - 1 - t > 6)
        switch (Oe(e, t + 1)) {
          case 109:
            if (Oe(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  J +
                  "$2-$3$1" +
                  El +
                  (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Hd(e, "stretch")
              ? U1(Q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Oe(e, t + 1) !== 115) break;
    case 6444:
      switch (Oe(e, nn(e) - 3 - (~Hd(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + J) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                J +
                (Oe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                J +
                "$2$3$1" +
                Ge +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return J + e + Ge + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + Ge + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + Ge + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + Ge + e + e;
  }
  return e;
}
var OC = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case xh:
          t.return = U1(t.value, t.length);
          break;
        case O1:
          return $o([pi(t, { value: Q(t.value, "@", "@" + J) })], o);
        case wh:
          if (t.length)
            return kC(t.props, function (i) {
              switch (xC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return $o(
                    [pi(t, { props: [Q(i, /:(read-\w+)/, ":" + El + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return $o(
                    [
                      pi(t, {
                        props: [Q(i, /:(plac\w+)/, ":" + J + "input-$1")],
                      }),
                      pi(t, { props: [Q(i, /:(plac\w+)/, ":" + El + "$1")] }),
                      pi(t, { props: [Q(i, /:(plac\w+)/, Ge + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  VC = [OC],
  NC = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (S) {
        var b = S.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(S), S.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || VC,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (S) {
          for (
            var b = S.getAttribute("data-emotion").split(" "), p = 1;
            p < b.length;
            p++
          )
            i[b[p]] = !0;
          s.push(S);
        }
      );
    var l,
      u = [BC, IC];
    {
      var c,
        d = [
          MC,
          DC(function (S) {
            c.insert(S);
          }),
        ],
        f = zC(u.concat(o, d)),
        g = function (b) {
          return $o(RC(b), f);
        };
      l = function (b, p, h, m) {
        (c = h),
          g(b ? b + "{" + p.styles + "}" : p.styles),
          m && (y.inserted[p.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new gC({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(s), y;
  };
function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Al.apply(null, arguments)
  );
}
var G1 = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var je = typeof Symbol == "function" && Symbol.for,
  Ch = je ? Symbol.for("react.element") : 60103,
  Th = je ? Symbol.for("react.portal") : 60106,
  cu = je ? Symbol.for("react.fragment") : 60107,
  du = je ? Symbol.for("react.strict_mode") : 60108,
  fu = je ? Symbol.for("react.profiler") : 60114,
  hu = je ? Symbol.for("react.provider") : 60109,
  pu = je ? Symbol.for("react.context") : 60110,
  Ph = je ? Symbol.for("react.async_mode") : 60111,
  mu = je ? Symbol.for("react.concurrent_mode") : 60111,
  gu = je ? Symbol.for("react.forward_ref") : 60112,
  vu = je ? Symbol.for("react.suspense") : 60113,
  WC = je ? Symbol.for("react.suspense_list") : 60120,
  yu = je ? Symbol.for("react.memo") : 60115,
  Su = je ? Symbol.for("react.lazy") : 60116,
  HC = je ? Symbol.for("react.block") : 60121,
  qC = je ? Symbol.for("react.fundamental") : 60117,
  UC = je ? Symbol.for("react.responder") : 60118,
  GC = je ? Symbol.for("react.scope") : 60119;
function Pt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ch:
        switch (((e = e.type), e)) {
          case Ph:
          case mu:
          case cu:
          case fu:
          case du:
          case vu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case pu:
              case gu:
              case Su:
              case yu:
              case hu:
                return e;
              default:
                return t;
            }
        }
      case Th:
        return t;
    }
  }
}
function K1(e) {
  return Pt(e) === mu;
}
ne.AsyncMode = Ph;
ne.ConcurrentMode = mu;
ne.ContextConsumer = pu;
ne.ContextProvider = hu;
ne.Element = Ch;
ne.ForwardRef = gu;
ne.Fragment = cu;
ne.Lazy = Su;
ne.Memo = yu;
ne.Portal = Th;
ne.Profiler = fu;
ne.StrictMode = du;
ne.Suspense = vu;
ne.isAsyncMode = function (e) {
  return K1(e) || Pt(e) === Ph;
};
ne.isConcurrentMode = K1;
ne.isContextConsumer = function (e) {
  return Pt(e) === pu;
};
ne.isContextProvider = function (e) {
  return Pt(e) === hu;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ch;
};
ne.isForwardRef = function (e) {
  return Pt(e) === gu;
};
ne.isFragment = function (e) {
  return Pt(e) === cu;
};
ne.isLazy = function (e) {
  return Pt(e) === Su;
};
ne.isMemo = function (e) {
  return Pt(e) === yu;
};
ne.isPortal = function (e) {
  return Pt(e) === Th;
};
ne.isProfiler = function (e) {
  return Pt(e) === fu;
};
ne.isStrictMode = function (e) {
  return Pt(e) === du;
};
ne.isSuspense = function (e) {
  return Pt(e) === vu;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === cu ||
    e === mu ||
    e === fu ||
    e === du ||
    e === vu ||
    e === WC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Su ||
        e.$$typeof === yu ||
        e.$$typeof === hu ||
        e.$$typeof === pu ||
        e.$$typeof === gu ||
        e.$$typeof === qC ||
        e.$$typeof === UC ||
        e.$$typeof === GC ||
        e.$$typeof === HC))
  );
};
ne.typeOf = Pt;
G1.exports = ne;
var KC = G1.exports,
  Y1 = KC,
  YC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  JC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  J1 = {};
J1[Y1.ForwardRef] = YC;
J1[Y1.Memo] = JC;
var QC = !0;
function XC(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Q1 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || QC === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  X1 = function (t, n, r) {
    Q1(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function ZC(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var eT = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  tT = !1,
  nT = /[A-Z]|^ms/g,
  rT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Z1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ng = function (t) {
    return t != null && typeof t != "boolean";
  },
  bc = q1(function (e) {
    return Z1(e) ? e : e.replace(nT, "-$&").toLowerCase();
  }),
  rg = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(rT, function (r, o, i) {
            return (rn = { name: o, styles: i, next: rn }), o;
          });
    }
    return eT[t] !== 1 && !Z1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  oT =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ga(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return (rn = { name: o.name, styles: o.styles, next: rn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            (rn = { name: a.name, styles: a.styles, next: rn }), (a = a.next);
        var s = i.styles + ";";
        return s;
      }
      return iT(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = rn,
          u = n(e);
        return (rn = l), ga(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function iT(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ga(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : ng(s) && (r += bc(i) + ":" + rg(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && tT) throw new Error(oT);
        if (
          Array.isArray(a) &&
          typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        )
          for (var l = 0; l < a.length; l++)
            ng(a[l]) && (r += bc(i) + ":" + rg(i, a[l]) + ";");
        else {
          var u = ga(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += bc(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var og = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  rn;
function _h(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  rn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += ga(n, t, i));
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((o += ga(n, t, e[s])), r)) {
      var l = i;
      o += l[s];
    }
  og.lastIndex = 0;
  for (var u = "", c; (c = og.exec(o)) !== null; ) u += "-" + c[1];
  var d = ZC(o) + u;
  return { name: d, styles: o, next: rn };
}
var aT = function (t) {
    return t();
  },
  eS = qp.useInsertionEffect ? qp.useInsertionEffect : !1,
  sT = eS || aT,
  ig = eS || T.useLayoutEffect,
  tS = T.createContext(typeof HTMLElement < "u" ? NC({ key: "css" }) : null);
tS.Provider;
var nS = function (t) {
    return T.forwardRef(function (n, r) {
      var o = T.useContext(tS);
      return t(n, o, r);
    });
  },
  va = T.createContext({}),
  lT = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return Al({}, t, n);
  },
  uT = eg(function (e) {
    return eg(function (t) {
      return lT(e, t);
    });
  }),
  cT = function (t) {
    var n = T.useContext(va);
    return (
      t.theme !== n && (n = uT(n)(t.theme)),
      T.createElement(va.Provider, { value: n }, t.children)
    );
  },
  bu = nS(function (e, t) {
    var n = e.styles,
      r = _h([n], void 0, T.useContext(va)),
      o = T.useRef();
    return (
      ig(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      ig(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && X1(t, r.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", r, a, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function dT() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _h(t);
}
var Da = function () {
    var t = dT.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  rS = String.raw,
  oS = rS`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  fT = () => C.jsx(bu, { styles: oS }),
  hT = ({ scope: e = "" }) =>
    C.jsx(bu, {
      styles: rS`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${oS}
    `,
    });
function pT(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Bn(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = T.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = T.useContext(s);
    if (!c && n) {
      const d = new Error(i ?? pT(r, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [mT, gT] = Bn({ strict: !1, name: "PortalManagerContext" });
function iS(e) {
  const { children: t, zIndex: n } = e;
  return C.jsx(mT, { value: { zIndex: n }, children: t });
}
iS.displayName = "PortalManager";
var ya =
    globalThis != null && globalThis.document ? T.useLayoutEffect : T.useEffect,
  [aS, vT] = Bn({ strict: !1, name: "PortalContext" }),
  Eh = "chakra-portal",
  yT = ".chakra-portal",
  ST = (e) =>
    C.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  bT = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = T.useState(null),
      i = T.useRef(null),
      [, a] = T.useState({});
    T.useEffect(() => a({}), []);
    const s = vT(),
      l = gT();
    ya(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = Eh),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? C.jsx(ST, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? bh.createPortal(C.jsx(aS, { value: i.current, children: u }), i.current)
      : C.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  wT = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      a = T.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = Eh), l;
      }, [o]),
      [, s] = T.useState({});
    return (
      ya(() => s({}), []),
      ya(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? bh.createPortal(C.jsx(aS, { value: r ? a : null, children: t }), a)
        : null
    );
  };
function wu(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? C.jsx(wT, { containerRef: n, ...r }) : C.jsx(bT, { ...r });
}
wu.className = Eh;
wu.selector = yT;
wu.displayName = "Portal";
function sS() {
  const e = T.useContext(va);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Ah = T.createContext({});
Ah.displayName = "ColorModeContext";
function xu() {
  const e = T.useContext(Ah);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var ys = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function xT(e = {}) {
  const { preventTransition: t = !0 } = e,
    n = {
      setDataset: (r) => {
        const o = t ? n.preventTransition() : void 0;
        (document.documentElement.dataset.theme = r),
          (document.documentElement.style.colorScheme = r),
          o == null || o();
      },
      setClassName(r) {
        document.body.classList.add(r ? ys.dark : ys.light),
          document.body.classList.remove(r ? ys.light : ys.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(r) {
        var o;
        return ((o = n.query().matches) != null ? o : r === "dark")
          ? "dark"
          : "light";
      },
      addListener(r) {
        const o = n.query(),
          i = (a) => {
            r(a.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(i)
            : o.addEventListener("change", i),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(i)
              : o.removeEventListener("change", i);
          }
        );
      },
      preventTransition() {
        const r = document.createElement("style");
        return (
          r.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(r),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(r);
                });
              });
          }
        );
      },
    };
  return n;
}
var kT = "chakra-ui-color-mode";
function CT(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var TT = CT(kT),
  ag = () => {};
function sg(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function lS(e) {
  const {
      value: t,
      children: n,
      options: {
        useSystemColorMode: r,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: a = TT,
    } = e,
    s = o === "dark" ? "dark" : "light",
    [l, u] = T.useState(() => sg(a, s)),
    [c, d] = T.useState(() => sg(a)),
    {
      getSystemTheme: f,
      setClassName: g,
      setDataset: y,
      addListener: S,
    } = T.useMemo(() => xT({ preventTransition: i }), [i]),
    b = o === "system" && !l ? c : l,
    p = T.useCallback(
      (k) => {
        const P = k === "system" ? f() : k;
        u(P), g(P === "dark"), y(P), a.set(P);
      },
      [a, f, g, y]
    );
  ya(() => {
    o === "system" && d(f());
  }, []),
    T.useEffect(() => {
      const k = a.get();
      if (k) {
        p(k);
        return;
      }
      if (o === "system") {
        p("system");
        return;
      }
      p(s);
    }, [a, s, o, p]);
  const h = T.useCallback(() => {
    p(b === "dark" ? "light" : "dark");
  }, [b, p]);
  T.useEffect(() => {
    if (r) return S(p);
  }, [r, S, p]);
  const m = T.useMemo(
    () => ({
      colorMode: t ?? b,
      toggleColorMode: t ? ag : h,
      setColorMode: t ? ag : p,
      forced: t !== void 0,
    }),
    [b, h, p, t]
  );
  return C.jsx(Ah.Provider, { value: m, children: n });
}
lS.displayName = "ColorModeProvider";
var PT = new Set(["dark", "light", "system"]);
function _T(e) {
  let t = e;
  return PT.has(t) || (t = "light"), t;
}
function ET(e = {}) {
  const {
      initialColorMode: t = "light",
      type: n = "localStorage",
      storageKey: r = "chakra-ui-color-mode",
    } = e,
    o = _T(t),
    i = n === "cookie",
    a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,
    s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function AT(e = {}) {
  const { nonce: t } = e;
  return C.jsx("script", {
    id: "chakra-script",
    nonce: t,
    dangerouslySetInnerHTML: { __html: ET(e) },
  });
}
function RT() {
  const e = xu(),
    t = sS();
  return { ...e, theme: t };
}
function $T(e, t, n) {
  var r, o;
  if (t == null) return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null
      ? void 0
      : l.value;
  };
  return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n;
}
function MT(e, t, n) {
  const r = Array.isArray(t) ? t : [t],
    o = Array.isArray(n) ? n : [n];
  return (i) => {
    const a = o.filter(Boolean),
      s = r.map((l, u) => {
        var c;
        const d = `${e}.${l}`;
        return $T(i, d, (c = a[u]) != null ? c : l);
      });
    return Array.isArray(t) ? s : s[0];
  };
}
var We = (...e) => e.filter(Boolean).join(" ");
function ht(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function er(e, ...t) {
  return zT(e) ? e(...t) : e;
}
var zT = (e) => typeof e == "function",
  de = (e) => (e ? "" : void 0),
  Mo = (e) => (e ? !0 : void 0);
function Rt(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function DT(...e) {
  return function (n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Rl = { exports: {} };
Rl.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    g = "[object Function]",
    y = "[object GeneratorFunction]",
    S = "[object Map]",
    b = "[object Number]",
    p = "[object Null]",
    h = "[object Object]",
    m = "[object Proxy]",
    k = "[object RegExp]",
    P = "[object Set]",
    A = "[object String]",
    E = "[object Undefined]",
    R = "[object WeakMap]",
    L = "[object ArrayBuffer]",
    j = "[object DataView]",
    ee = "[object Float32Array]",
    Ze = "[object Float64Array]",
    et = "[object Int8Array]",
    _t = "[object Int16Array]",
    ve = "[object Int32Array]",
    ke = "[object Uint8Array]",
    Ot = "[object Uint8ClampedArray]",
    M = "[object Uint16Array]",
    V = "[object Uint32Array]",
    O = /[\\^$.*+?()[\]{}|]/g,
    ae = /^\[object .+?Constructor\]$/,
    ye = /^(?:0|[1-9]\d*)$/,
    U = {};
  (U[ee] = U[Ze] = U[et] = U[_t] = U[ve] = U[ke] = U[Ot] = U[M] = U[V] = !0),
    (U[s] =
      U[l] =
      U[L] =
      U[c] =
      U[j] =
      U[d] =
      U[f] =
      U[g] =
      U[S] =
      U[b] =
      U[h] =
      U[k] =
      U[P] =
      U[A] =
      U[R] =
        !1);
  var mt = typeof Za == "object" && Za && Za.Object === Object && Za,
    In = typeof self == "object" && self && self.Object === Object && self,
    He = mt || In || Function("return this")(),
    hn = t && !t.nodeType && t,
    Yr = hn && !0 && e && !e.nodeType && e,
    Lu = Yr && Yr.exports === hn,
    Wa = Lu && mt.process,
    re = (function () {
      try {
        var v = Yr && Yr.require && Yr.require("util").types;
        return v || (Wa && Wa.binding && Wa.binding("util"));
      } catch {}
    })(),
    Qt = re && re.isTypedArray;
  function Ha(v, x, _) {
    switch (_.length) {
      case 0:
        return v.call(x);
      case 1:
        return v.call(x, _[0]);
      case 2:
        return v.call(x, _[0], _[1]);
      case 3:
        return v.call(x, _[0], _[1], _[2]);
    }
    return v.apply(x, _);
  }
  function Aw(v, x) {
    for (var _ = -1, D = Array(v); ++_ < v; ) D[_] = x(_);
    return D;
  }
  function Rw(v) {
    return function (x) {
      return v(x);
    };
  }
  function $w(v, x) {
    return v == null ? void 0 : v[x];
  }
  function Mw(v, x) {
    return function (_) {
      return v(x(_));
    };
  }
  var zw = Array.prototype,
    Dw = Function.prototype,
    qa = Object.prototype,
    Fu = He["__core-js_shared__"],
    Ua = Dw.toString,
    On = qa.hasOwnProperty,
    Cp = (function () {
      var v = /[^.]+$/.exec((Fu && Fu.keys && Fu.keys.IE_PROTO) || "");
      return v ? "Symbol(src)_1." + v : "";
    })(),
    Tp = qa.toString,
    jw = Ua.call(Object),
    Lw = RegExp(
      "^" +
        Ua.call(On)
          .replace(O, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ga = Lu ? He.Buffer : void 0,
    Pp = He.Symbol,
    _p = He.Uint8Array;
  Ga && Ga.allocUnsafe;
  var Ep = Mw(Object.getPrototypeOf, Object),
    Ap = Object.create,
    Fw = qa.propertyIsEnumerable,
    Bw = zw.splice,
    Sr = Pp ? Pp.toStringTag : void 0,
    Ka = (function () {
      try {
        var v = Ou(Object, "defineProperty");
        return v({}, "", {}), v;
      } catch {}
    })(),
    Iw = Ga ? Ga.isBuffer : void 0,
    Rp = Math.max,
    Ow = Date.now,
    $p = Ou(He, "Map"),
    ri = Ou(Object, "create"),
    Vw = (function () {
      function v() {}
      return function (x) {
        if (!wr(x)) return {};
        if (Ap) return Ap(x);
        v.prototype = x;
        var _ = new v();
        return (v.prototype = void 0), _;
      };
    })();
  function br(v) {
    var x = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++x < _; ) {
      var D = v[x];
      this.set(D[0], D[1]);
    }
  }
  function Nw() {
    (this.__data__ = ri ? ri(null) : {}), (this.size = 0);
  }
  function Ww(v) {
    var x = this.has(v) && delete this.__data__[v];
    return (this.size -= x ? 1 : 0), x;
  }
  function Hw(v) {
    var x = this.__data__;
    if (ri) {
      var _ = x[v];
      return _ === r ? void 0 : _;
    }
    return On.call(x, v) ? x[v] : void 0;
  }
  function qw(v) {
    var x = this.__data__;
    return ri ? x[v] !== void 0 : On.call(x, v);
  }
  function Uw(v, x) {
    var _ = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (_[v] = ri && x === void 0 ? r : x),
      this
    );
  }
  (br.prototype.clear = Nw),
    (br.prototype.delete = Ww),
    (br.prototype.get = Hw),
    (br.prototype.has = qw),
    (br.prototype.set = Uw);
  function pn(v) {
    var x = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++x < _; ) {
      var D = v[x];
      this.set(D[0], D[1]);
    }
  }
  function Gw() {
    (this.__data__ = []), (this.size = 0);
  }
  function Kw(v) {
    var x = this.__data__,
      _ = Ya(x, v);
    if (_ < 0) return !1;
    var D = x.length - 1;
    return _ == D ? x.pop() : Bw.call(x, _, 1), --this.size, !0;
  }
  function Yw(v) {
    var x = this.__data__,
      _ = Ya(x, v);
    return _ < 0 ? void 0 : x[_][1];
  }
  function Jw(v) {
    return Ya(this.__data__, v) > -1;
  }
  function Qw(v, x) {
    var _ = this.__data__,
      D = Ya(_, v);
    return D < 0 ? (++this.size, _.push([v, x])) : (_[D][1] = x), this;
  }
  (pn.prototype.clear = Gw),
    (pn.prototype.delete = Kw),
    (pn.prototype.get = Yw),
    (pn.prototype.has = Jw),
    (pn.prototype.set = Qw);
  function Jr(v) {
    var x = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++x < _; ) {
      var D = v[x];
      this.set(D[0], D[1]);
    }
  }
  function Xw() {
    (this.size = 0),
      (this.__data__ = {
        hash: new br(),
        map: new ($p || pn)(),
        string: new br(),
      });
  }
  function Zw(v) {
    var x = Qa(this, v).delete(v);
    return (this.size -= x ? 1 : 0), x;
  }
  function ex(v) {
    return Qa(this, v).get(v);
  }
  function tx(v) {
    return Qa(this, v).has(v);
  }
  function nx(v, x) {
    var _ = Qa(this, v),
      D = _.size;
    return _.set(v, x), (this.size += _.size == D ? 0 : 1), this;
  }
  (Jr.prototype.clear = Xw),
    (Jr.prototype.delete = Zw),
    (Jr.prototype.get = ex),
    (Jr.prototype.has = tx),
    (Jr.prototype.set = nx);
  function Qr(v) {
    var x = (this.__data__ = new pn(v));
    this.size = x.size;
  }
  function rx() {
    (this.__data__ = new pn()), (this.size = 0);
  }
  function ox(v) {
    var x = this.__data__,
      _ = x.delete(v);
    return (this.size = x.size), _;
  }
  function ix(v) {
    return this.__data__.get(v);
  }
  function ax(v) {
    return this.__data__.has(v);
  }
  function sx(v, x) {
    var _ = this.__data__;
    if (_ instanceof pn) {
      var D = _.__data__;
      if (!$p || D.length < n - 1)
        return D.push([v, x]), (this.size = ++_.size), this;
      _ = this.__data__ = new Jr(D);
    }
    return _.set(v, x), (this.size = _.size), this;
  }
  (Qr.prototype.clear = rx),
    (Qr.prototype.delete = ox),
    (Qr.prototype.get = ix),
    (Qr.prototype.has = ax),
    (Qr.prototype.set = sx);
  function lx(v, x) {
    var _ = Wu(v),
      D = !_ && Nu(v),
      q = !_ && !D && Lp(v),
      ie = !_ && !D && !q && Bp(v),
      pe = _ || D || q || ie,
      K = pe ? Aw(v.length, String) : [],
      me = K.length;
    for (var Vt in v)
      (pe &&
        (Vt == "length" ||
          (q && (Vt == "offset" || Vt == "parent")) ||
          (ie &&
            (Vt == "buffer" || Vt == "byteLength" || Vt == "byteOffset")) ||
          Dp(Vt, me))) ||
        K.push(Vt);
    return K;
  }
  function Bu(v, x, _) {
    ((_ !== void 0 && !Xa(v[x], _)) || (_ === void 0 && !(x in v))) &&
      Iu(v, x, _);
  }
  function ux(v, x, _) {
    var D = v[x];
    (!(On.call(v, x) && Xa(D, _)) || (_ === void 0 && !(x in v))) &&
      Iu(v, x, _);
  }
  function Ya(v, x) {
    for (var _ = v.length; _--; ) if (Xa(v[_][0], x)) return _;
    return -1;
  }
  function Iu(v, x, _) {
    x == "__proto__" && Ka
      ? Ka(v, x, { configurable: !0, enumerable: !0, value: _, writable: !0 })
      : (v[x] = _);
  }
  var cx = kx();
  function Ja(v) {
    return v == null
      ? v === void 0
        ? E
        : p
      : Sr && Sr in Object(v)
      ? Cx(v)
      : Rx(v);
  }
  function Mp(v) {
    return oi(v) && Ja(v) == s;
  }
  function dx(v) {
    if (!wr(v) || Ex(v)) return !1;
    var x = qu(v) ? Lw : ae;
    return x.test(Dx(v));
  }
  function fx(v) {
    return oi(v) && Fp(v.length) && !!U[Ja(v)];
  }
  function hx(v) {
    if (!wr(v)) return Ax(v);
    var x = jp(v),
      _ = [];
    for (var D in v) (D == "constructor" && (x || !On.call(v, D))) || _.push(D);
    return _;
  }
  function zp(v, x, _, D, q) {
    v !== x &&
      cx(
        x,
        function (ie, pe) {
          if ((q || (q = new Qr()), wr(ie))) px(v, x, pe, _, zp, D, q);
          else {
            var K = D ? D(Vu(v, pe), ie, pe + "", v, x, q) : void 0;
            K === void 0 && (K = ie), Bu(v, pe, K);
          }
        },
        Ip
      );
  }
  function px(v, x, _, D, q, ie, pe) {
    var K = Vu(v, _),
      me = Vu(x, _),
      Vt = pe.get(me);
    if (Vt) {
      Bu(v, _, Vt);
      return;
    }
    var gt = ie ? ie(K, me, _ + "", v, x, pe) : void 0,
      ii = gt === void 0;
    if (ii) {
      var Uu = Wu(me),
        Gu = !Uu && Lp(me),
        Vp = !Uu && !Gu && Bp(me);
      (gt = me),
        Uu || Gu || Vp
          ? Wu(K)
            ? (gt = K)
            : jx(K)
            ? (gt = bx(K))
            : Gu
            ? ((ii = !1), (gt = vx(me)))
            : Vp
            ? ((ii = !1), (gt = Sx(me)))
            : (gt = [])
          : Lx(me) || Nu(me)
          ? ((gt = K),
            Nu(K) ? (gt = Fx(K)) : (!wr(K) || qu(K)) && (gt = Tx(me)))
          : (ii = !1);
    }
    ii && (pe.set(me, gt), q(gt, me, D, ie, pe), pe.delete(me)), Bu(v, _, gt);
  }
  function mx(v, x) {
    return Mx($x(v, x, Op), v + "");
  }
  var gx = Ka
    ? function (v, x) {
        return Ka(v, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ix(x),
          writable: !0,
        });
      }
    : Op;
  function vx(v, x) {
    return v.slice();
  }
  function yx(v) {
    var x = new v.constructor(v.byteLength);
    return new _p(x).set(new _p(v)), x;
  }
  function Sx(v, x) {
    var _ = yx(v.buffer);
    return new v.constructor(_, v.byteOffset, v.length);
  }
  function bx(v, x) {
    var _ = -1,
      D = v.length;
    for (x || (x = Array(D)); ++_ < D; ) x[_] = v[_];
    return x;
  }
  function wx(v, x, _, D) {
    var q = !_;
    _ || (_ = {});
    for (var ie = -1, pe = x.length; ++ie < pe; ) {
      var K = x[ie],
        me = void 0;
      me === void 0 && (me = v[K]), q ? Iu(_, K, me) : ux(_, K, me);
    }
    return _;
  }
  function xx(v) {
    return mx(function (x, _) {
      var D = -1,
        q = _.length,
        ie = q > 1 ? _[q - 1] : void 0,
        pe = q > 2 ? _[2] : void 0;
      for (
        ie = v.length > 3 && typeof ie == "function" ? (q--, ie) : void 0,
          pe && Px(_[0], _[1], pe) && ((ie = q < 3 ? void 0 : ie), (q = 1)),
          x = Object(x);
        ++D < q;

      ) {
        var K = _[D];
        K && v(x, K, D, ie);
      }
      return x;
    });
  }
  function kx(v) {
    return function (x, _, D) {
      for (var q = -1, ie = Object(x), pe = D(x), K = pe.length; K--; ) {
        var me = pe[++q];
        if (_(ie[me], me, ie) === !1) break;
      }
      return x;
    };
  }
  function Qa(v, x) {
    var _ = v.__data__;
    return _x(x) ? _[typeof x == "string" ? "string" : "hash"] : _.map;
  }
  function Ou(v, x) {
    var _ = $w(v, x);
    return dx(_) ? _ : void 0;
  }
  function Cx(v) {
    var x = On.call(v, Sr),
      _ = v[Sr];
    try {
      v[Sr] = void 0;
      var D = !0;
    } catch {}
    var q = Tp.call(v);
    return D && (x ? (v[Sr] = _) : delete v[Sr]), q;
  }
  function Tx(v) {
    return typeof v.constructor == "function" && !jp(v) ? Vw(Ep(v)) : {};
  }
  function Dp(v, x) {
    var _ = typeof v;
    return (
      (x = x ?? a),
      !!x &&
        (_ == "number" || (_ != "symbol" && ye.test(v))) &&
        v > -1 &&
        v % 1 == 0 &&
        v < x
    );
  }
  function Px(v, x, _) {
    if (!wr(_)) return !1;
    var D = typeof x;
    return (D == "number" ? Hu(_) && Dp(x, _.length) : D == "string" && x in _)
      ? Xa(_[x], v)
      : !1;
  }
  function _x(v) {
    var x = typeof v;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean"
      ? v !== "__proto__"
      : v === null;
  }
  function Ex(v) {
    return !!Cp && Cp in v;
  }
  function jp(v) {
    var x = v && v.constructor,
      _ = (typeof x == "function" && x.prototype) || qa;
    return v === _;
  }
  function Ax(v) {
    var x = [];
    if (v != null) for (var _ in Object(v)) x.push(_);
    return x;
  }
  function Rx(v) {
    return Tp.call(v);
  }
  function $x(v, x, _) {
    return (
      (x = Rp(x === void 0 ? v.length - 1 : x, 0)),
      function () {
        for (
          var D = arguments, q = -1, ie = Rp(D.length - x, 0), pe = Array(ie);
          ++q < ie;

        )
          pe[q] = D[x + q];
        q = -1;
        for (var K = Array(x + 1); ++q < x; ) K[q] = D[q];
        return (K[x] = _(pe)), Ha(v, this, K);
      }
    );
  }
  function Vu(v, x) {
    if (!(x === "constructor" && typeof v[x] == "function") && x != "__proto__")
      return v[x];
  }
  var Mx = zx(gx);
  function zx(v) {
    var x = 0,
      _ = 0;
    return function () {
      var D = Ow(),
        q = i - (D - _);
      if (((_ = D), q > 0)) {
        if (++x >= o) return arguments[0];
      } else x = 0;
      return v.apply(void 0, arguments);
    };
  }
  function Dx(v) {
    if (v != null) {
      try {
        return Ua.call(v);
      } catch {}
      try {
        return v + "";
      } catch {}
    }
    return "";
  }
  function Xa(v, x) {
    return v === x || (v !== v && x !== x);
  }
  var Nu = Mp(
      (function () {
        return arguments;
      })()
    )
      ? Mp
      : function (v) {
          return oi(v) && On.call(v, "callee") && !Fw.call(v, "callee");
        },
    Wu = Array.isArray;
  function Hu(v) {
    return v != null && Fp(v.length) && !qu(v);
  }
  function jx(v) {
    return oi(v) && Hu(v);
  }
  var Lp = Iw || Ox;
  function qu(v) {
    if (!wr(v)) return !1;
    var x = Ja(v);
    return x == g || x == y || x == u || x == m;
  }
  function Fp(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= a;
  }
  function wr(v) {
    var x = typeof v;
    return v != null && (x == "object" || x == "function");
  }
  function oi(v) {
    return v != null && typeof v == "object";
  }
  function Lx(v) {
    if (!oi(v) || Ja(v) != h) return !1;
    var x = Ep(v);
    if (x === null) return !0;
    var _ = On.call(x, "constructor") && x.constructor;
    return typeof _ == "function" && _ instanceof _ && Ua.call(_) == jw;
  }
  var Bp = Qt ? Rw(Qt) : fx;
  function Fx(v) {
    return wx(v, Ip(v));
  }
  function Ip(v) {
    return Hu(v) ? lx(v) : hx(v);
  }
  var Bx = xx(function (v, x, _, D) {
    zp(v, x, _, D);
  });
  function Ix(v) {
    return function () {
      return v;
    };
  }
  function Op(v) {
    return v;
  }
  function Ox() {
    return !1;
  }
  e.exports = Bx;
})(Rl, Rl.exports);
var jT = Rl.exports;
const Lt = Tf(jT);
var LT = (e) => /!(important)?$/.test(e),
  lg = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  FT = (e, t) => (n) => {
    const r = String(t),
      o = LT(r),
      i = lg(r),
      a = e ? `${e}.${i}` : i;
    let s = ht(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = lg(s)), o ? `${s} !important` : s;
  };
function Rh(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = FT(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Ss =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Et(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = Rh({ scale: e, transform: t })), r;
  };
}
var BT =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function IT(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: BT(t),
    transform: n ? Rh({ scale: n, compose: r }) : r,
  };
}
var uS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function OT() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...uS,
  ].join(" ");
}
function VT() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...uS,
  ].join(" ");
}
var NT = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  WT = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function HT(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var qT = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Ud = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  UT = new Set(Object.values(Ud)),
  Gd = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  GT = (e) => e.trim();
function KT(e, t) {
  if (e == null || Gd.has(e)) return e;
  if (!(Kd(e) || Gd.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(GT).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in Ud ? Ud[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (UT.has(f)) return f;
    const g = f.indexOf(" "),
      [y, S] = g !== -1 ? [f.substr(0, g), f.substr(g + 1)] : [f],
      b = Kd(S) ? S : S && S.split(" "),
      p = `colors.${y}`,
      h = p in t.__cssMap ? t.__cssMap[p].varRef : y;
    return b ? [h, ...(Array.isArray(b) ? b : [b])].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Kd = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  YT = (e, t) => KT(e, t ?? {});
function JT(e) {
  return /^var\(--.+\)$/.test(e);
}
var QT = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  Zt = (e) => (t) => `${e}(${t})`,
  H = {
    filter(e) {
      return e !== "auto" ? e : NT;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : WT;
    },
    ring(e) {
      return HT(H.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? OT() : e === "auto-gpu" ? VT() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = QT(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (JT(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: YT,
    blur: Zt("blur"),
    opacity: Zt("opacity"),
    brightness: Zt("brightness"),
    contrast: Zt("contrast"),
    dropShadow: Zt("drop-shadow"),
    grayscale: Zt("grayscale"),
    hueRotate: (e) => Zt("hue-rotate")(H.degree(e)),
    invert: Zt("invert"),
    saturate: Zt("saturate"),
    sepia: Zt("sepia"),
    bgImage(e) {
      return e == null || Kd(e) || Gd.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = qT[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  w = {
    borderWidths: Et("borderWidths"),
    borderStyles: Et("borderStyles"),
    colors: Et("colors"),
    borders: Et("borders"),
    gradients: Et("gradients", H.gradient),
    radii: Et("radii", H.px),
    space: Et("space", Ss(H.vh, H.px)),
    spaceT: Et("space", Ss(H.vh, H.px)),
    degreeT(e) {
      return { property: e, transform: H.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Rh({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Et("sizes", Ss(H.vh, H.px)),
    sizesT: Et("sizes", Ss(H.vh, H.fraction)),
    shadows: Et("shadows"),
    logical: IT,
    blur: Et("blur", H.blur),
  },
  qs = {
    background: w.colors("background"),
    backgroundColor: w.colors("backgroundColor"),
    backgroundImage: w.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: H.bgClip },
    bgSize: w.prop("backgroundSize"),
    bgPosition: w.prop("backgroundPosition"),
    bg: w.colors("background"),
    bgColor: w.colors("backgroundColor"),
    bgPos: w.prop("backgroundPosition"),
    bgRepeat: w.prop("backgroundRepeat"),
    bgAttachment: w.prop("backgroundAttachment"),
    bgGradient: w.gradients("backgroundImage"),
    bgClip: { transform: H.bgClip },
  };
Object.assign(qs, { bgImage: qs.backgroundImage, bgImg: qs.backgroundImage });
var Y = {
  border: w.borders("border"),
  borderWidth: w.borderWidths("borderWidth"),
  borderStyle: w.borderStyles("borderStyle"),
  borderColor: w.colors("borderColor"),
  borderRadius: w.radii("borderRadius"),
  borderTop: w.borders("borderTop"),
  borderBlockStart: w.borders("borderBlockStart"),
  borderTopLeftRadius: w.radii("borderTopLeftRadius"),
  borderStartStartRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: w.radii("borderTopRightRadius"),
  borderStartEndRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: w.borders("borderRight"),
  borderInlineEnd: w.borders("borderInlineEnd"),
  borderBottom: w.borders("borderBottom"),
  borderBlockEnd: w.borders("borderBlockEnd"),
  borderBottomLeftRadius: w.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: w.radii("borderBottomRightRadius"),
  borderLeft: w.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: w.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: w.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: w.borders(["borderLeft", "borderRight"]),
  borderInline: w.borders("borderInline"),
  borderY: w.borders(["borderTop", "borderBottom"]),
  borderBlock: w.borders("borderBlock"),
  borderTopWidth: w.borderWidths("borderTopWidth"),
  borderBlockStartWidth: w.borderWidths("borderBlockStartWidth"),
  borderTopColor: w.colors("borderTopColor"),
  borderBlockStartColor: w.colors("borderBlockStartColor"),
  borderTopStyle: w.borderStyles("borderTopStyle"),
  borderBlockStartStyle: w.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: w.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: w.borderWidths("borderBlockEndWidth"),
  borderBottomColor: w.colors("borderBottomColor"),
  borderBlockEndColor: w.colors("borderBlockEndColor"),
  borderBottomStyle: w.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: w.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: w.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: w.borderWidths("borderInlineStartWidth"),
  borderLeftColor: w.colors("borderLeftColor"),
  borderInlineStartColor: w.colors("borderInlineStartColor"),
  borderLeftStyle: w.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: w.borderStyles("borderInlineStartStyle"),
  borderRightWidth: w.borderWidths("borderRightWidth"),
  borderInlineEndWidth: w.borderWidths("borderInlineEndWidth"),
  borderRightColor: w.colors("borderRightColor"),
  borderInlineEndColor: w.colors("borderInlineEndColor"),
  borderRightStyle: w.borderStyles("borderRightStyle"),
  borderInlineEndStyle: w.borderStyles("borderInlineEndStyle"),
  borderTopRadius: w.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: w.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: w.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: w.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(Y, {
  rounded: Y.borderRadius,
  roundedTop: Y.borderTopRadius,
  roundedTopLeft: Y.borderTopLeftRadius,
  roundedTopRight: Y.borderTopRightRadius,
  roundedTopStart: Y.borderStartStartRadius,
  roundedTopEnd: Y.borderStartEndRadius,
  roundedBottom: Y.borderBottomRadius,
  roundedBottomLeft: Y.borderBottomLeftRadius,
  roundedBottomRight: Y.borderBottomRightRadius,
  roundedBottomStart: Y.borderEndStartRadius,
  roundedBottomEnd: Y.borderEndEndRadius,
  roundedLeft: Y.borderLeftRadius,
  roundedRight: Y.borderRightRadius,
  roundedStart: Y.borderInlineStartRadius,
  roundedEnd: Y.borderInlineEndRadius,
  borderStart: Y.borderInlineStart,
  borderEnd: Y.borderInlineEnd,
  borderTopStartRadius: Y.borderStartStartRadius,
  borderTopEndRadius: Y.borderStartEndRadius,
  borderBottomStartRadius: Y.borderEndStartRadius,
  borderBottomEndRadius: Y.borderEndEndRadius,
  borderStartRadius: Y.borderInlineStartRadius,
  borderEndRadius: Y.borderInlineEndRadius,
  borderStartWidth: Y.borderInlineStartWidth,
  borderEndWidth: Y.borderInlineEndWidth,
  borderStartColor: Y.borderInlineStartColor,
  borderEndColor: Y.borderInlineEndColor,
  borderStartStyle: Y.borderInlineStartStyle,
  borderEndStyle: Y.borderInlineEndStyle,
});
var XT = {
    color: w.colors("color"),
    textColor: w.colors("color"),
    fill: w.colors("fill"),
    stroke: w.colors("stroke"),
  },
  Yd = {
    boxShadow: w.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: w.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: w.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Yd, { shadow: Yd.boxShadow });
var ZT = {
    filter: { transform: H.filter },
    blur: w.blur("--chakra-blur"),
    brightness: w.propT("--chakra-brightness", H.brightness),
    contrast: w.propT("--chakra-contrast", H.contrast),
    hueRotate: w.propT("--chakra-hue-rotate", H.hueRotate),
    invert: w.propT("--chakra-invert", H.invert),
    saturate: w.propT("--chakra-saturate", H.saturate),
    dropShadow: w.propT("--chakra-drop-shadow", H.dropShadow),
    backdropFilter: { transform: H.backdropFilter },
    backdropBlur: w.blur("--chakra-backdrop-blur"),
    backdropBrightness: w.propT("--chakra-backdrop-brightness", H.brightness),
    backdropContrast: w.propT("--chakra-backdrop-contrast", H.contrast),
    backdropHueRotate: w.propT("--chakra-backdrop-hue-rotate", H.hueRotate),
    backdropInvert: w.propT("--chakra-backdrop-invert", H.invert),
    backdropSaturate: w.propT("--chakra-backdrop-saturate", H.saturate),
  },
  $l = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: H.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: w.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: w.space("gap"),
    rowGap: w.space("rowGap"),
    columnGap: w.space("columnGap"),
  };
Object.assign($l, { flexDir: $l.flexDirection });
var cS = {
    gridGap: w.space("gridGap"),
    gridColumnGap: w.space("gridColumnGap"),
    gridRowGap: w.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  eP = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: H.outline },
    outlineOffset: !0,
    outlineColor: w.colors("outlineColor"),
  },
  $t = {
    width: w.sizesT("width"),
    inlineSize: w.sizesT("inlineSize"),
    height: w.sizes("height"),
    blockSize: w.sizes("blockSize"),
    boxSize: w.sizes(["width", "height"]),
    minWidth: w.sizes("minWidth"),
    minInlineSize: w.sizes("minInlineSize"),
    minHeight: w.sizes("minHeight"),
    minBlockSize: w.sizes("minBlockSize"),
    maxWidth: w.sizes("maxWidth"),
    maxInlineSize: w.sizes("maxInlineSize"),
    maxHeight: w.sizes("maxHeight"),
    maxBlockSize: w.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: w.propT("float", H.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign($t, {
  w: $t.width,
  h: $t.height,
  minW: $t.minWidth,
  maxW: $t.maxWidth,
  minH: $t.minHeight,
  maxH: $t.maxHeight,
  overscroll: $t.overscrollBehavior,
  overscrollX: $t.overscrollBehaviorX,
  overscrollY: $t.overscrollBehaviorY,
});
var tP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: w.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: w.prop("listStyleImage"),
};
function nP(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var rP = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  oP = rP(nP),
  iP = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  aP = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  wc = (e, t, n) => {
    const r = {},
      o = oP(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  sP = {
    srOnly: {
      transform(e) {
        return e === !0 ? iP : e === "focusable" ? aP : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => wc(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => wc(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => wc(t, e, n) },
  },
  Oi = {
    position: !0,
    pos: w.prop("position"),
    zIndex: w.prop("zIndex", "zIndices"),
    inset: w.spaceT("inset"),
    insetX: w.spaceT(["left", "right"]),
    insetInline: w.spaceT("insetInline"),
    insetY: w.spaceT(["top", "bottom"]),
    insetBlock: w.spaceT("insetBlock"),
    top: w.spaceT("top"),
    insetBlockStart: w.spaceT("insetBlockStart"),
    bottom: w.spaceT("bottom"),
    insetBlockEnd: w.spaceT("insetBlockEnd"),
    left: w.spaceT("left"),
    insetInlineStart: w.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: w.spaceT("right"),
    insetInlineEnd: w.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Oi, {
  insetStart: Oi.insetInlineStart,
  insetEnd: Oi.insetInlineEnd,
});
var lP = {
    ring: { transform: H.ring },
    ringColor: w.colors("--chakra-ring-color"),
    ringOffset: w.prop("--chakra-ring-offset-width"),
    ringOffsetColor: w.colors("--chakra-ring-offset-color"),
    ringInset: w.prop("--chakra-ring-inset"),
  },
  ce = {
    margin: w.spaceT("margin"),
    marginTop: w.spaceT("marginTop"),
    marginBlockStart: w.spaceT("marginBlockStart"),
    marginRight: w.spaceT("marginRight"),
    marginInlineEnd: w.spaceT("marginInlineEnd"),
    marginBottom: w.spaceT("marginBottom"),
    marginBlockEnd: w.spaceT("marginBlockEnd"),
    marginLeft: w.spaceT("marginLeft"),
    marginInlineStart: w.spaceT("marginInlineStart"),
    marginX: w.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: w.spaceT("marginInline"),
    marginY: w.spaceT(["marginTop", "marginBottom"]),
    marginBlock: w.spaceT("marginBlock"),
    padding: w.space("padding"),
    paddingTop: w.space("paddingTop"),
    paddingBlockStart: w.space("paddingBlockStart"),
    paddingRight: w.space("paddingRight"),
    paddingBottom: w.space("paddingBottom"),
    paddingBlockEnd: w.space("paddingBlockEnd"),
    paddingLeft: w.space("paddingLeft"),
    paddingInlineStart: w.space("paddingInlineStart"),
    paddingInlineEnd: w.space("paddingInlineEnd"),
    paddingX: w.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: w.space("paddingInline"),
    paddingY: w.space(["paddingTop", "paddingBottom"]),
    paddingBlock: w.space("paddingBlock"),
  };
Object.assign(ce, {
  m: ce.margin,
  mt: ce.marginTop,
  mr: ce.marginRight,
  me: ce.marginInlineEnd,
  marginEnd: ce.marginInlineEnd,
  mb: ce.marginBottom,
  ml: ce.marginLeft,
  ms: ce.marginInlineStart,
  marginStart: ce.marginInlineStart,
  mx: ce.marginX,
  my: ce.marginY,
  p: ce.padding,
  pt: ce.paddingTop,
  py: ce.paddingY,
  px: ce.paddingX,
  pb: ce.paddingBottom,
  pl: ce.paddingLeft,
  ps: ce.paddingInlineStart,
  paddingStart: ce.paddingInlineStart,
  pr: ce.paddingRight,
  pe: ce.paddingInlineEnd,
  paddingEnd: ce.paddingInlineEnd,
});
var uP = {
    textDecorationColor: w.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: w.shadows("textShadow"),
  },
  cP = {
    clipPath: !0,
    transform: w.propT("transform", H.transform),
    transformOrigin: !0,
    translateX: w.spaceT("--chakra-translate-x"),
    translateY: w.spaceT("--chakra-translate-y"),
    skewX: w.degreeT("--chakra-skew-x"),
    skewY: w.degreeT("--chakra-skew-y"),
    scaleX: w.prop("--chakra-scale-x"),
    scaleY: w.prop("--chakra-scale-y"),
    scale: w.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: w.degreeT("--chakra-rotate"),
  },
  dP = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: w.prop("transitionDuration", "transition.duration"),
    transitionProperty: w.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: w.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  fP = {
    fontFamily: w.prop("fontFamily", "fonts"),
    fontSize: w.prop("fontSize", "fontSizes", H.px),
    fontWeight: w.prop("fontWeight", "fontWeights"),
    lineHeight: w.prop("lineHeight", "lineHeights"),
    letterSpacing: w.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  hP = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: w.spaceT("scrollMargin"),
    scrollMarginTop: w.spaceT("scrollMarginTop"),
    scrollMarginBottom: w.spaceT("scrollMarginBottom"),
    scrollMarginLeft: w.spaceT("scrollMarginLeft"),
    scrollMarginRight: w.spaceT("scrollMarginRight"),
    scrollMarginX: w.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: w.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: w.spaceT("scrollPadding"),
    scrollPaddingTop: w.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: w.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: w.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: w.spaceT("scrollPaddingRight"),
    scrollPaddingX: w.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: w.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function dS(e) {
  return ht(e) && e.reference ? e.reference : String(e);
}
var ku = (e, ...t) => t.map(dS).join(` ${e} `).replace(/calc/g, ""),
  ug = (...e) => `calc(${ku("+", ...e)})`,
  cg = (...e) => `calc(${ku("-", ...e)})`,
  Jd = (...e) => `calc(${ku("*", ...e)})`,
  dg = (...e) => `calc(${ku("/", ...e)})`,
  fg = (e) => {
    const t = dS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Jd(t, -1);
  },
  _r = Object.assign(
    (e) => ({
      add: (...t) => _r(ug(e, ...t)),
      subtract: (...t) => _r(cg(e, ...t)),
      multiply: (...t) => _r(Jd(e, ...t)),
      divide: (...t) => _r(dg(e, ...t)),
      negate: () => _r(fg(e)),
      toString: () => e.toString(),
    }),
    { add: ug, subtract: cg, multiply: Jd, divide: dg, negate: fg }
  );
function pP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function mP(e) {
  const t = pP(e.toString());
  return vP(gP(t));
}
function gP(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function vP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function yP(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function SP(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function bP(e, t = "") {
  return mP(`--${yP(e, t)}`);
}
function B(e, t, n) {
  const r = bP(e, n);
  return { variable: r, reference: SP(r, t) };
}
function wP(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = B(`${e}-${o}`, i);
      continue;
    }
    n[r] = B(`${e}-${r}`);
  }
  return n;
}
function xP(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function kP(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Qd(e) {
  if (e == null) return e;
  const { unitless: t } = kP(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var fS = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  $h = (e) => Object.fromEntries(Object.entries(e).sort(fS));
function hg(e) {
  const t = $h(e);
  return Object.assign(Object.values(t), t);
}
function CP(e) {
  const t = Object.keys($h(e));
  return new Set(t);
}
function pg(e) {
  var t;
  if (!e) return e;
  e = (t = Qd(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number"
    ? `${e + n}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function ki(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${Qd(e)})`),
    t && n.push("and", `(max-width: ${Qd(t)})`),
    n.join(" ")
  );
}
function TP(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = hg(e),
    r = Object.entries(e)
      .sort(fS)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? pg(d) : void 0),
          {
            _minW: pg(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: ki(null, d),
            minWQuery: ki(s),
            minMaxQuery: ki(s, d),
          }
        );
      }),
    o = CP(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: $h(e),
    asArray: hg(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [null, ...n.map((a) => ki(a)).slice(1)],
    toArrayValue(a) {
      if (!ht(a)) throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; xP(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var Le = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Nn = (e) => hS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  mn = (e) => hS((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  hS = (e, ...t) => t.map(e).join(", "),
  Cu = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Nn(Le.hover),
    _peerHover: mn(Le.hover),
    _groupFocus: Nn(Le.focus),
    _peerFocus: mn(Le.focus),
    _groupFocusVisible: Nn(Le.focusVisible),
    _peerFocusVisible: mn(Le.focusVisible),
    _groupActive: Nn(Le.active),
    _peerActive: mn(Le.active),
    _groupDisabled: Nn(Le.disabled),
    _peerDisabled: mn(Le.disabled),
    _groupInvalid: Nn(Le.invalid),
    _peerInvalid: mn(Le.invalid),
    _groupChecked: Nn(Le.checked),
    _peerChecked: mn(Le.checked),
    _groupFocusWithin: Nn(Le.focusWithin),
    _peerFocusWithin: mn(Le.focusWithin),
    _peerPlaceholderShown: mn(Le.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  pS = Object.keys(Cu);
function mg(e, t) {
  return B(String(e).replace(/\./g, "-"), void 0, t);
}
function PP(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = mg(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."),
          [g, ...y] = f,
          S = `${g}.-${y.join(".")}`,
          b = _r.negate(s),
          p = _r.negate(u);
        r[S] = { value: b, var: l, varRef: p };
      }
      (n[l] = s), (r[o] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const y = [String(o).split(".")[0], f].join(".");
        if (!e[y]) return f;
        const { reference: b } = mg(y, t == null ? void 0 : t.cssVarPrefix);
        return b;
      },
      d = ht(s) ? s : { default: s };
    (n = Lt(
      n,
      Object.entries(d).reduce((f, [g, y]) => {
        var S, b;
        if (!y) return f;
        const p = c(`${y}`);
        if (g === "default") return (f[l] = p), f;
        const h = (b = (S = Cu) == null ? void 0 : S[g]) != null ? b : g;
        return (f[h] = { [l]: p }), f;
      }, {})
    )),
      (r[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: n, cssMap: r };
}
function _P(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function EP(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function AP(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function gg(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (AP(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c,
          g = [...s, f];
        if (r != null && r(a, g)) return t(a, s);
        u[f] = i(d, g);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var RP = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function $P(e) {
  return EP(e, RP);
}
function MP(e) {
  return e.semanticTokens;
}
function zP(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var DP = (e) => pS.includes(e) || e === "default";
function jP({ tokens: e, semanticTokens: t }) {
  const n = {};
  return (
    gg(e, (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
    }),
    gg(
      t,
      (r, o) => {
        r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
      },
      { stop: (r) => Object.keys(r).every(DP) }
    ),
    n
  );
}
function LP(e) {
  var t;
  const n = zP(e),
    r = $P(n),
    o = MP(n),
    i = jP({ tokens: r, semanticTokens: o }),
    a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = PP(i, { cssVarPrefix: a });
  return (
    Object.assign(n, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: TP(n.breakpoints),
    }),
    n
  );
}
var Mh = Lt(
    {},
    qs,
    Y,
    XT,
    $l,
    $t,
    ZT,
    lP,
    eP,
    cS,
    sP,
    Oi,
    Yd,
    ce,
    hP,
    fP,
    uP,
    cP,
    tP,
    dP
  ),
  FP = Object.assign({}, ce, $t, $l, cS, Oi),
  BP = Object.keys(FP),
  IP = [...Object.keys(Mh), ...pS],
  OP = { ...Mh, ...Cu },
  VP = (e) => e in OP,
  NP = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = er(e[a], t);
      if (s == null) continue;
      if (((s = ht(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function WP(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function HP(e) {
  return /^var\(--.+\)$/.test(e);
}
var qP = (e, t) => e.startsWith("--") && typeof t == "string" && !HP(t),
  UP = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = WP(t);
    return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t;
  };
function GP(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = er(i, r),
        d = NP(c)(r);
      let f = {};
      for (let g in d) {
        const y = d[g];
        let S = er(y, r);
        g in n && (g = n[g]), qP(g, S) && (S = UP(r, S));
        let b = t[g];
        if ((b === !0 && (b = { property: g }), ht(S))) {
          (f[g] = (s = f[g]) != null ? s : {}), (f[g] = Lt({}, f[g], o(S, !0)));
          continue;
        }
        let p =
          (u =
            (l = b == null ? void 0 : b.transform) == null
              ? void 0
              : l.call(b, S, r, c)) != null
            ? u
            : S;
        p = b != null && b.processResult ? o(p, !0) : p;
        const h = er(b == null ? void 0 : b.property, r);
        if (!a && b != null && b.static) {
          const m = er(b.static, r);
          f = Lt({}, f, m);
        }
        if (h && Array.isArray(h)) {
          for (const m of h) f[m] = p;
          continue;
        }
        if (h) {
          h === "&" && ht(p) ? (f = Lt({}, f, p)) : (f[h] = p);
          continue;
        }
        if (ht(p)) {
          f = Lt({}, f, p);
          continue;
        }
        f[g] = p;
      }
      return f;
    };
  return o;
}
var mS = (e) => (t) => GP({ theme: t, pseudos: Cu, configs: Mh })(e);
function le(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function KP(e, t) {
  if (Array.isArray(e)) return e;
  if (ht(e)) return t(e);
  if (e != null) return [e];
}
function YP(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function JP(e) {
  const t = e.__breakpoints;
  return function (r, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = KP(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      g = !!r.parts;
    for (let y = 0; y < d; y++) {
      const S = t.details[y],
        b = t.details[YP(c, y)],
        p = ki(S.minW, b == null ? void 0 : b._minW),
        h = er((s = r[o]) == null ? void 0 : s[c[y]], a);
      if (h) {
        if (g) {
          (l = r.parts) == null ||
            l.forEach((m) => {
              Lt(u, { [m]: f ? h[m] : { [p]: h[m] } });
            });
          continue;
        }
        if (!g) {
          f ? Lt(u, h) : (u[p] = h);
          continue;
        }
        u[p] = h;
      }
    }
    return u;
  };
}
function QP(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      a = JP(i);
    return Lt(
      {},
      er((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function fn(e) {
  return _P(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var XP = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];
function ZP(e) {
  return ht(e)
    ? XP.every((t) => Object.prototype.hasOwnProperty.call(e, t))
    : !1;
}
var e_ = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  t_ = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  n_ = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  r_ = { property: e_, easing: t_, duration: n_ },
  o_ = r_,
  i_ = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  a_ = i_,
  s_ = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  l_ = s_,
  u_ = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  c_ = u_,
  d_ = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  f_ = d_,
  h_ = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  p_ = h_,
  m_ = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  g_ = m_,
  v_ = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  y_ = v_,
  S_ = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  gS = S_,
  vS = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  b_ = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  w_ = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  x_ = { ...vS, ...b_, container: w_ },
  yS = x_,
  k_ = {
    breakpoints: c_,
    zIndices: a_,
    radii: p_,
    blur: y_,
    colors: f_,
    ...gS,
    sizes: yS,
    shadows: g_,
    space: vS,
    borders: l_,
    transition: o_,
  },
  { defineMultiStyleConfig: C_, definePartsStyle: Ci } = le([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  yn = B("stepper-indicator-size"),
  po = B("stepper-icon-size"),
  mo = B("stepper-title-font-size"),
  Ti = B("stepper-description-font-size"),
  mi = B("stepper-accent-color"),
  T_ = Ci(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [mi.variable]: `colors.${e}.500`,
      _dark: { [mi.variable]: `colors.${e}.200` },
    },
    title: { fontSize: mo.reference, fontWeight: "medium" },
    description: { fontSize: Ti.reference, color: "chakra-subtle-text" },
    number: { fontSize: mo.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: po.reference, height: po.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: yn.reference,
      height: yn.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: mi.reference,
      },
      "&[data-status=complete]": {
        bg: mi.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: mi.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${yn.reference} - 8px)`,
        top: `calc(${yn.reference} + 4px)`,
        insetStart: `calc(${yn.reference} / 2 - 1px)`,
      },
    },
  })),
  P_ = C_({
    baseStyle: T_,
    sizes: {
      xs: Ci({
        stepper: {
          [yn.variable]: "sizes.4",
          [po.variable]: "sizes.3",
          [mo.variable]: "fontSizes.xs",
          [Ti.variable]: "fontSizes.xs",
        },
      }),
      sm: Ci({
        stepper: {
          [yn.variable]: "sizes.6",
          [po.variable]: "sizes.4",
          [mo.variable]: "fontSizes.sm",
          [Ti.variable]: "fontSizes.xs",
        },
      }),
      md: Ci({
        stepper: {
          [yn.variable]: "sizes.8",
          [po.variable]: "sizes.5",
          [mo.variable]: "fontSizes.md",
          [Ti.variable]: "fontSizes.sm",
        },
      }),
      lg: Ci({
        stepper: {
          [yn.variable]: "sizes.10",
          [po.variable]: "sizes.6",
          [mo.variable]: "fontSizes.lg",
          [Ti.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function Z(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return Z(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return Z(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const g = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: g, selector: `.${g}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var __ = Z("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  E_ = Z("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  A_ = Z("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  R_ = Z("breadcrumb").parts("link", "item", "container").extend("separator");
Z("button").parts();
var $_ = Z("checkbox").parts("control", "icon", "container").extend("label");
Z("progress").parts("track", "filledTrack").extend("label");
var M_ = Z("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  z_ = Z("editable").parts("preview", "input", "textarea"),
  D_ = Z("form").parts("container", "requiredIndicator", "helperText"),
  j_ = Z("formError").parts("text", "icon"),
  L_ = Z("input").parts("addon", "field", "element", "group"),
  F_ = Z("list").parts("container", "item", "icon"),
  B_ = Z("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  I_ = Z("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  O_ = Z("numberinput").parts("root", "field", "stepperGroup", "stepper");
Z("pininput").parts("field");
var V_ = Z("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  N_ = Z("progress").parts("label", "filledTrack", "track"),
  W_ = Z("radio").parts("container", "control", "label"),
  H_ = Z("select").parts("field", "icon"),
  q_ = Z("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  U_ = Z("stat").parts("container", "label", "helpText", "number", "icon"),
  G_ = Z("switch").parts("container", "track", "thumb", "label"),
  K_ = Z("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  Y_ = Z("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  J_ = Z("tag").parts("container", "label", "closeButton"),
  Q_ = Z("card").parts("container", "header", "body", "footer");
Z("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Mr(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class X_ extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Pi = X_;
function zh(e) {
  if (typeof e != "string") throw new Pi(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = a5.test(e) ? t5(e) : e;
  const n = n5.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(Sa(s, 2), 16)),
      parseInt(Sa(a[3] || "f", 2), 16) / 255,
    ];
  }
  const r = r5.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || "ff", 16) / 255,
    ];
  }
  const o = o5.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || "1"),
    ];
  }
  const i = i5.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Mr(0, 100, s) !== s) throw new Pi(e);
    if (Mr(0, 100, l) !== l) throw new Pi(e);
    return [...s5(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Pi(e);
}
function Z_(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const vg = (e) => parseInt(e.replace(/_/g, ""), 36),
  e5 =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const n = vg(t.substring(0, 3)),
          r = vg(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - r.length; i++) o += "0";
        return (e[n] = `${o}${r}`), e;
      }, {});
function t5(e) {
  const t = e.toLowerCase().trim(),
    n = e5[Z_(t)];
  if (!n) throw new Pi(e);
  return `#${n}`;
}
const Sa = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  n5 = new RegExp(`^#${Sa("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  r5 = new RegExp(`^#${Sa("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  o5 = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Sa(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  i5 =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  a5 = /^[a-z]+$/i,
  yg = (e) => Math.round(e * 255),
  s5 = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(yg);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a));
    const c = r - i / 2,
      d = s + c,
      f = l + c,
      g = u + c;
    return [d, f, g].map(yg);
  };
function l5(e, t, n, r) {
  return `rgba(${Mr(0, 255, e).toFixed()}, ${Mr(0, 255, t).toFixed()}, ${Mr(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(Mr(0, 1, r).toFixed(3))})`;
}
function u5(e, t) {
  const [n, r, o, i] = zh(e);
  return l5(n, r, o, i - t);
}
function c5(e) {
  const [t, n, r, o] = zh(e);
  let i = (a) => {
    const s = Mr(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function d5(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var f5 = (e) => Object.keys(e).length === 0,
  nt = (e, t, n) => {
    const r = d5(e, `colors.${t}`, t);
    try {
      return c5(r), r;
    } catch {
      return n ?? "#000000";
    }
  },
  h5 = (e) => {
    const [t, n, r] = zh(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  p5 = (e) => (t) => {
    const n = nt(t, e);
    return h5(n) < 128 ? "dark" : "light";
  },
  m5 = (e) => (t) => p5(e)(t) === "dark",
  Uo = (e, t) => (n) => {
    const r = nt(n, e);
    return u5(r, 1 - t);
  };
function Sg(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var g5 = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function v5(e) {
  const t = g5();
  return !e || f5(e)
    ? t
    : e.string && e.colors
    ? S5(e.string, e.colors)
    : e.string && !e.colors
    ? y5(e.string)
    : e.colors && !e.string
    ? b5(e.colors)
    : t;
}
function y5(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function S5(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function b5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function F(e, t) {
  return (n) => (n.colorMode === "dark" ? t : e);
}
function Dh(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === "vertical" ? n : r) : {};
}
function SS(e) {
  return ht(e) && e.reference ? e.reference : String(e);
}
var Tu = (e, ...t) => t.map(SS).join(` ${e} `).replace(/calc/g, ""),
  bg = (...e) => `calc(${Tu("+", ...e)})`,
  wg = (...e) => `calc(${Tu("-", ...e)})`,
  Xd = (...e) => `calc(${Tu("*", ...e)})`,
  xg = (...e) => `calc(${Tu("/", ...e)})`,
  kg = (e) => {
    const t = SS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Xd(t, -1);
  },
  Sn = Object.assign(
    (e) => ({
      add: (...t) => Sn(bg(e, ...t)),
      subtract: (...t) => Sn(wg(e, ...t)),
      multiply: (...t) => Sn(Xd(e, ...t)),
      divide: (...t) => Sn(xg(e, ...t)),
      negate: () => Sn(kg(e)),
      toString: () => e.toString(),
    }),
    { add: bg, subtract: wg, multiply: Xd, divide: xg, negate: kg }
  );
function w5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function x5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function bS(e) {
  const t = x5(e.toString());
  return t.includes("\\.") ? e : w5(e) ? t.replace(".", "\\.") : e;
}
function k5(e, t = "") {
  return [t, bS(e)].filter(Boolean).join("-");
}
function C5(e, t) {
  return `var(${bS(e)}${t ? `, ${t}` : ""})`;
}
function T5(e, t = "") {
  return `--${k5(e, t)}`;
}
function Me(e, t) {
  const n = T5(e, void 0);
  return { variable: n, reference: C5(n, P5(void 0)) };
}
function P5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: _5, definePartsStyle: Us } = le(G_.keys),
  Vi = Me("switch-track-width"),
  Lr = Me("switch-track-height"),
  xc = Me("switch-track-diff"),
  E5 = Sn.subtract(Vi, Lr),
  Zd = Me("switch-thumb-x"),
  gi = Me("switch-bg"),
  A5 = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [Vi.reference],
      height: [Lr.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [gi.variable]: "colors.gray.300",
      _dark: { [gi.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [gi.variable]: `colors.${t}.500`,
        _dark: { [gi.variable]: `colors.${t}.200` },
      },
      bg: gi.reference,
    };
  },
  R5 = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Lr.reference],
    height: [Lr.reference],
    _checked: { transform: `translateX(${Zd.reference})` },
  },
  $5 = Us((e) => ({
    container: {
      [xc.variable]: E5,
      [Zd.variable]: xc.reference,
      _rtl: { [Zd.variable]: Sn(xc).negate().toString() },
    },
    track: A5(e),
    thumb: R5,
  })),
  M5 = {
    sm: Us({
      container: { [Vi.variable]: "1.375rem", [Lr.variable]: "sizes.3" },
    }),
    md: Us({
      container: { [Vi.variable]: "1.875rem", [Lr.variable]: "sizes.4" },
    }),
    lg: Us({
      container: { [Vi.variable]: "2.875rem", [Lr.variable]: "sizes.6" },
    }),
  },
  z5 = _5({
    baseStyle: $5,
    sizes: M5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: D5, definePartsStyle: zo } = le(K_.keys),
  j5 = zo({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  Ml = { "&[data-is-numeric=true]": { textAlign: "end" } },
  L5 = zo((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: F("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...Ml,
      },
      td: {
        borderBottom: "1px",
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...Ml,
      },
      caption: { color: F("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  F5 = zo((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: F("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...Ml,
      },
      td: {
        borderBottom: "1px",
        borderColor: F(`${t}.100`, `${t}.700`)(e),
        ...Ml,
      },
      caption: { color: F("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: F(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: F(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  B5 = { simple: L5, striped: F5, unstyled: {} },
  I5 = {
    sm: zo({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: zo({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: zo({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  O5 = D5({
    baseStyle: j5,
    variants: B5,
    sizes: I5,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  lt = B("tabs-color"),
  Gt = B("tabs-bg"),
  bs = B("tabs-border-color"),
  { defineMultiStyleConfig: V5, definePartsStyle: cn } = le(Y_.keys),
  N5 = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  W5 = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  H5 = (e) => {
    const { align: t = "start", orientation: n } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: n === "vertical" ? "column" : "row",
    };
  },
  q5 = { p: 4 },
  U5 = cn((e) => ({ root: N5(e), tab: W5(e), tablist: H5(e), tabpanel: q5 })),
  G5 = {
    sm: cn({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: cn({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: cn({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  K5 = cn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === "vertical",
      o = r ? "borderStart" : "borderBottom",
      i = r ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [lt.variable]: `colors.${t}.600`,
          _dark: { [lt.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Gt.variable]: "colors.gray.200",
          _dark: { [Gt.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: lt.reference,
        bg: Gt.reference,
      },
    };
  }),
  Y5 = cn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [bs.variable]: "transparent",
        _selected: {
          [lt.variable]: `colors.${t}.600`,
          [bs.variable]: "colors.white",
          _dark: {
            [lt.variable]: `colors.${t}.300`,
            [bs.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: bs.reference,
        },
        color: lt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  J5 = cn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Gt.variable]: "colors.gray.50",
        _dark: { [Gt.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Gt.variable]: "colors.white",
          [lt.variable]: `colors.${t}.600`,
          _dark: {
            [Gt.variable]: "colors.gray.800",
            [lt.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: lt.reference,
        bg: Gt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  Q5 = cn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: nt(n, `${t}.700`), bg: nt(n, `${t}.100`) },
      },
    };
  }),
  X5 = cn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [lt.variable]: "colors.gray.600",
        _dark: { [lt.variable]: "inherit" },
        _selected: {
          [lt.variable]: "colors.white",
          [Gt.variable]: `colors.${t}.600`,
          _dark: {
            [lt.variable]: "colors.gray.800",
            [Gt.variable]: `colors.${t}.300`,
          },
        },
        color: lt.reference,
        bg: Gt.reference,
      },
    };
  }),
  Z5 = cn({}),
  e3 = {
    line: K5,
    enclosed: Y5,
    "enclosed-colored": J5,
    "soft-rounded": Q5,
    "solid-rounded": X5,
    unstyled: Z5,
  },
  t3 = V5({
    baseStyle: U5,
    sizes: G5,
    variants: e3,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  _e = wP("badge", ["bg", "color", "shadow"]),
  n3 = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: _e.bg.reference,
    color: _e.color.reference,
    boxShadow: _e.shadow.reference,
  },
  r3 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Uo(`${t}.500`, 0.6)(n);
    return {
      [_e.bg.variable]: `colors.${t}.500`,
      [_e.color.variable]: "colors.white",
      _dark: {
        [_e.bg.variable]: r,
        [_e.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  o3 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Uo(`${t}.200`, 0.16)(n);
    return {
      [_e.bg.variable]: `colors.${t}.100`,
      [_e.color.variable]: `colors.${t}.800`,
      _dark: { [_e.bg.variable]: r, [_e.color.variable]: `colors.${t}.200` },
    };
  },
  i3 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Uo(`${t}.200`, 0.8)(n);
    return {
      [_e.color.variable]: `colors.${t}.500`,
      _dark: { [_e.color.variable]: r },
      [_e.shadow.variable]: `inset 0 0 0px 1px ${_e.color.reference}`,
    };
  },
  a3 = { solid: r3, subtle: o3, outline: i3 },
  Ni = {
    baseStyle: n3,
    variants: a3,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: s3, definePartsStyle: Fr } = le(J_.keys),
  Cg = B("tag-bg"),
  Tg = B("tag-color"),
  kc = B("tag-shadow"),
  Gs = B("tag-min-height"),
  Ks = B("tag-min-width"),
  Ys = B("tag-font-size"),
  Js = B("tag-padding-inline"),
  l3 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [Tg.variable]: _e.color.reference,
    [Cg.variable]: _e.bg.reference,
    [kc.variable]: _e.shadow.reference,
    color: Tg.reference,
    bg: Cg.reference,
    boxShadow: kc.reference,
    borderRadius: "md",
    minH: Gs.reference,
    minW: Ks.reference,
    fontSize: Ys.reference,
    px: Js.reference,
    _focusVisible: { [kc.variable]: "shadows.outline" },
  },
  u3 = { lineHeight: 1.2, overflow: "visible" },
  c3 = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  d3 = Fr({ container: l3, label: u3, closeButton: c3 }),
  f3 = {
    sm: Fr({
      container: {
        [Gs.variable]: "sizes.5",
        [Ks.variable]: "sizes.5",
        [Ys.variable]: "fontSizes.xs",
        [Js.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: Fr({
      container: {
        [Gs.variable]: "sizes.6",
        [Ks.variable]: "sizes.6",
        [Ys.variable]: "fontSizes.sm",
        [Js.variable]: "space.2",
      },
    }),
    lg: Fr({
      container: {
        [Gs.variable]: "sizes.8",
        [Ks.variable]: "sizes.8",
        [Ys.variable]: "fontSizes.md",
        [Js.variable]: "space.3",
      },
    }),
  },
  h3 = {
    subtle: Fr((e) => {
      var t;
      return { container: (t = Ni.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Fr((e) => {
      var t;
      return { container: (t = Ni.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Fr((e) => {
      var t;
      return { container: (t = Ni.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  p3 = s3({
    variants: h3,
    baseStyle: d3,
    sizes: f3,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: xn, defineMultiStyleConfig: m3 } = le(L_.keys),
  go = B("input-height"),
  vo = B("input-font-size"),
  yo = B("input-padding"),
  So = B("input-border-radius"),
  g3 = xn({
    addon: {
      height: go.reference,
      fontSize: vo.reference,
      px: yo.reference,
      borderRadius: So.reference,
    },
    field: {
      width: "100%",
      height: go.reference,
      fontSize: vo.reference,
      px: yo.reference,
      borderRadius: So.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Wn = {
    lg: {
      [vo.variable]: "fontSizes.lg",
      [yo.variable]: "space.4",
      [So.variable]: "radii.md",
      [go.variable]: "sizes.12",
    },
    md: {
      [vo.variable]: "fontSizes.md",
      [yo.variable]: "space.4",
      [So.variable]: "radii.md",
      [go.variable]: "sizes.10",
    },
    sm: {
      [vo.variable]: "fontSizes.sm",
      [yo.variable]: "space.3",
      [So.variable]: "radii.sm",
      [go.variable]: "sizes.8",
    },
    xs: {
      [vo.variable]: "fontSizes.xs",
      [yo.variable]: "space.2",
      [So.variable]: "radii.sm",
      [go.variable]: "sizes.6",
    },
  },
  v3 = {
    lg: xn({ field: Wn.lg, group: Wn.lg }),
    md: xn({ field: Wn.md, group: Wn.md }),
    sm: xn({ field: Wn.sm, group: Wn.sm }),
    xs: xn({ field: Wn.xs, group: Wn.xs }),
  };
function jh(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || F("blue.500", "blue.300")(e),
    errorBorderColor: n || F("red.500", "red.300")(e),
  };
}
var y3 = xn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = jh(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: F("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: nt(t, r), boxShadow: `0 0 0 1px ${nt(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: nt(t, n),
          boxShadow: `0 0 0 1px ${nt(t, n)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: F("inherit", "whiteAlpha.50")(e),
        bg: F("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  S3 = xn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = jh(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: F("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: F("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: nt(t, r) },
        _focusVisible: { bg: "transparent", borderColor: nt(t, n) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: F("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  b3 = xn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = jh(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: nt(t, r),
          boxShadow: `0px 1px 0px 0px ${nt(t, r)}`,
        },
        _focusVisible: {
          borderColor: nt(t, n),
          boxShadow: `0px 1px 0px 0px ${nt(t, n)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  w3 = xn({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  x3 = { outline: y3, filled: S3, flushed: b3, unstyled: w3 },
  X = m3({
    baseStyle: g3,
    sizes: v3,
    variants: x3,
    defaultProps: { size: "md", variant: "outline" },
  }),
  Pg,
  k3 = {
    ...((Pg = X.baseStyle) == null ? void 0 : Pg.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  _g,
  Eg,
  C3 = {
    outline: (e) => {
      var t, n;
      return (n = (t = X.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, n;
      return (n = (t = X.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? n
        : {};
    },
    filled: (e) => {
      var t, n;
      return (n = (t = X.variants) == null ? void 0 : t.filled(e).field) != null
        ? n
        : {};
    },
    unstyled:
      (Eg = (_g = X.variants) == null ? void 0 : _g.unstyled.field) != null
        ? Eg
        : {},
  },
  Ag,
  Rg,
  $g,
  Mg,
  zg,
  Dg,
  jg,
  Lg,
  T3 = {
    xs: (Rg = (Ag = X.sizes) == null ? void 0 : Ag.xs.field) != null ? Rg : {},
    sm: (Mg = ($g = X.sizes) == null ? void 0 : $g.sm.field) != null ? Mg : {},
    md: (Dg = (zg = X.sizes) == null ? void 0 : zg.md.field) != null ? Dg : {},
    lg: (Lg = (jg = X.sizes) == null ? void 0 : jg.lg.field) != null ? Lg : {},
  },
  P3 = {
    baseStyle: k3,
    sizes: T3,
    variants: C3,
    defaultProps: { size: "md", variant: "outline" },
  },
  ws = Me("tooltip-bg"),
  Cc = Me("tooltip-fg"),
  _3 = Me("popper-arrow-bg"),
  E3 = {
    bg: ws.reference,
    color: Cc.reference,
    [ws.variable]: "colors.gray.700",
    [Cc.variable]: "colors.whiteAlpha.900",
    _dark: {
      [ws.variable]: "colors.gray.300",
      [Cc.variable]: "colors.gray.900",
    },
    [_3.variable]: ws.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  A3 = { baseStyle: E3 },
  { defineMultiStyleConfig: R3, definePartsStyle: _i } = le(N_.keys),
  $3 = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = F(Sg(), Sg("1rem", "rgba(0,0,0,0.1)"))(e),
      a = F(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${nt(n, a)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: s } : { bgColor: a }) };
  },
  M3 = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  z3 = (e) => ({ bg: F("gray.100", "whiteAlpha.300")(e) }),
  D3 = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...$3(e),
  }),
  j3 = _i((e) => ({ label: M3, filledTrack: D3(e), track: z3(e) })),
  L3 = {
    xs: _i({ track: { h: "1" } }),
    sm: _i({ track: { h: "2" } }),
    md: _i({ track: { h: "3" } }),
    lg: _i({ track: { h: "4" } }),
  },
  F3 = R3({
    sizes: L3,
    baseStyle: j3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  B3 = (e) => typeof e == "function";
function ot(e, ...t) {
  return B3(e) ? e(...t) : e;
}
var { definePartsStyle: Qs, defineMultiStyleConfig: I3 } = le($_.keys),
  Wi = B("checkbox-size"),
  O3 = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Wi.reference,
      h: Wi.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: F(`${t}.500`, `${t}.200`)(e),
        borderColor: F(`${t}.500`, `${t}.200`)(e),
        color: F("white", "gray.900")(e),
        _hover: {
          bg: F(`${t}.600`, `${t}.300`)(e),
          borderColor: F(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: F("gray.200", "transparent")(e),
          bg: F("gray.200", "whiteAlpha.300")(e),
          color: F("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: F(`${t}.500`, `${t}.200`)(e),
        borderColor: F(`${t}.500`, `${t}.200`)(e),
        color: F("white", "gray.900")(e),
      },
      _disabled: {
        bg: F("gray.100", "whiteAlpha.100")(e),
        borderColor: F("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: F("red.500", "red.300")(e) },
    };
  },
  V3 = { _disabled: { cursor: "not-allowed" } },
  N3 = { userSelect: "none", _disabled: { opacity: 0.4 } },
  W3 = { transitionProperty: "transform", transitionDuration: "normal" },
  H3 = Qs((e) => ({ icon: W3, container: V3, control: ot(O3, e), label: N3 })),
  q3 = {
    sm: Qs({
      control: { [Wi.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Qs({
      control: { [Wi.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Qs({
      control: { [Wi.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  zl = I3({
    baseStyle: H3,
    sizes: q3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: U3, definePartsStyle: Xs } = le(W_.keys),
  G3 = (e) => {
    var t;
    const n = (t = ot(zl.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...n,
      borderRadius: "full",
      _checked: {
        ...(n == null ? void 0 : n._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  K3 = Xs((e) => {
    var t, n, r, o;
    return {
      label: (n = (t = zl).baseStyle) == null ? void 0 : n.call(t, e).label,
      container:
        (o = (r = zl).baseStyle) == null ? void 0 : o.call(r, e).container,
      control: G3(e),
    };
  }),
  Y3 = {
    md: Xs({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Xs({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Xs({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  J3 = U3({
    baseStyle: K3,
    sizes: Y3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: Q3, definePartsStyle: X3 } = le(H_.keys),
  xs = B("select-bg"),
  Fg,
  Z3 = {
    ...((Fg = X.baseStyle) == null ? void 0 : Fg.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: xs.reference,
    [xs.variable]: "colors.white",
    _dark: { [xs.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: xs.reference },
  },
  e4 = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  t4 = X3({ field: Z3, icon: e4 }),
  ks = { paddingInlineEnd: "8" },
  Bg,
  Ig,
  Og,
  Vg,
  Ng,
  Wg,
  Hg,
  qg,
  n4 = {
    lg: {
      ...((Bg = X.sizes) == null ? void 0 : Bg.lg),
      field: { ...((Ig = X.sizes) == null ? void 0 : Ig.lg.field), ...ks },
    },
    md: {
      ...((Og = X.sizes) == null ? void 0 : Og.md),
      field: { ...((Vg = X.sizes) == null ? void 0 : Vg.md.field), ...ks },
    },
    sm: {
      ...((Ng = X.sizes) == null ? void 0 : Ng.sm),
      field: { ...((Wg = X.sizes) == null ? void 0 : Wg.sm.field), ...ks },
    },
    xs: {
      ...((Hg = X.sizes) == null ? void 0 : Hg.xs),
      field: { ...((qg = X.sizes) == null ? void 0 : qg.xs.field), ...ks },
      icon: { insetEnd: "1" },
    },
  },
  r4 = Q3({
    baseStyle: t4,
    sizes: n4,
    variants: X.variants,
    defaultProps: X.defaultProps,
  }),
  Tc = B("skeleton-start-color"),
  Pc = B("skeleton-end-color"),
  o4 = {
    [Tc.variable]: "colors.gray.100",
    [Pc.variable]: "colors.gray.400",
    _dark: {
      [Tc.variable]: "colors.gray.800",
      [Pc.variable]: "colors.gray.600",
    },
    background: Tc.reference,
    borderColor: Pc.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  i4 = { baseStyle: o4 },
  _c = B("skip-link-bg"),
  a4 = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [_c.variable]: "colors.white",
      _dark: { [_c.variable]: "colors.gray.700" },
      bg: _c.reference,
    },
  },
  s4 = { baseStyle: a4 },
  { defineMultiStyleConfig: l4, definePartsStyle: Pu } = le(q_.keys),
  ba = B("slider-thumb-size"),
  wa = B("slider-track-size"),
  Qn = B("slider-bg"),
  u4 = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...Dh({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  c4 = (e) => ({
    ...Dh({
      orientation: e.orientation,
      horizontal: { h: wa.reference },
      vertical: { w: wa.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [Qn.variable]: "colors.gray.200",
    _dark: { [Qn.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [Qn.variable]: "colors.gray.300",
      _dark: { [Qn.variable]: "colors.whiteAlpha.300" },
    },
    bg: Qn.reference,
  }),
  d4 = (e) => {
    const { orientation: t } = e;
    return {
      ...Dh({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: ba.reference,
      h: ba.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  f4 = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [Qn.variable]: `colors.${t}.500`,
      _dark: { [Qn.variable]: `colors.${t}.200` },
      bg: Qn.reference,
    };
  },
  h4 = Pu((e) => ({
    container: u4(e),
    track: c4(e),
    thumb: d4(e),
    filledTrack: f4(e),
  })),
  p4 = Pu({
    container: { [ba.variable]: "sizes.4", [wa.variable]: "sizes.1" },
  }),
  m4 = Pu({
    container: { [ba.variable]: "sizes.3.5", [wa.variable]: "sizes.1" },
  }),
  g4 = Pu({
    container: { [ba.variable]: "sizes.2.5", [wa.variable]: "sizes.0.5" },
  }),
  v4 = { lg: p4, md: m4, sm: g4 },
  y4 = l4({
    baseStyle: h4,
    sizes: v4,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Er = Me("spinner-size"),
  S4 = { width: [Er.reference], height: [Er.reference] },
  b4 = {
    xs: { [Er.variable]: "sizes.3" },
    sm: { [Er.variable]: "sizes.4" },
    md: { [Er.variable]: "sizes.6" },
    lg: { [Er.variable]: "sizes.8" },
    xl: { [Er.variable]: "sizes.12" },
  },
  w4 = { baseStyle: S4, sizes: b4, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: x4, definePartsStyle: wS } = le(U_.keys),
  k4 = { fontWeight: "medium" },
  C4 = { opacity: 0.8, marginBottom: "2" },
  T4 = { verticalAlign: "baseline", fontWeight: "semibold" },
  P4 = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  _4 = wS({ container: {}, label: k4, helpText: C4, number: T4, icon: P4 }),
  E4 = {
    md: wS({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  A4 = x4({ baseStyle: _4, sizes: E4, defaultProps: { size: "md" } }),
  Ec = B("kbd-bg"),
  R4 = {
    [Ec.variable]: "colors.gray.100",
    _dark: { [Ec.variable]: "colors.whiteAlpha.100" },
    bg: Ec.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  $4 = { baseStyle: R4 },
  M4 = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  z4 = { baseStyle: M4 },
  { defineMultiStyleConfig: D4, definePartsStyle: j4 } = le(F_.keys),
  L4 = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  F4 = j4({ icon: L4 }),
  B4 = D4({ baseStyle: F4 }),
  { defineMultiStyleConfig: I4, definePartsStyle: O4 } = le(B_.keys),
  tn = B("menu-bg"),
  Ac = B("menu-shadow"),
  V4 = {
    [tn.variable]: "#fff",
    [Ac.variable]: "shadows.sm",
    _dark: {
      [tn.variable]: "colors.gray.700",
      [Ac.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: tn.reference,
    boxShadow: Ac.reference,
  },
  N4 = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [tn.variable]: "colors.gray.100",
      _dark: { [tn.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [tn.variable]: "colors.gray.200",
      _dark: { [tn.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [tn.variable]: "colors.gray.100",
      _dark: { [tn.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: tn.reference,
  },
  W4 = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  H4 = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  q4 = { opacity: 0.6 },
  U4 = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  G4 = { transitionProperty: "common", transitionDuration: "normal" },
  K4 = O4({
    button: G4,
    list: V4,
    item: N4,
    groupTitle: W4,
    icon: H4,
    command: q4,
    divider: U4,
  }),
  Y4 = I4({ baseStyle: K4 }),
  { defineMultiStyleConfig: J4, definePartsStyle: ef } = le(I_.keys),
  Rc = B("modal-bg"),
  $c = B("modal-shadow"),
  Q4 = { bg: "blackAlpha.600", zIndex: "modal" },
  X4 = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  Z4 = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [Rc.variable]: "colors.white",
      [$c.variable]: "shadows.lg",
      _dark: {
        [Rc.variable]: "colors.gray.700",
        [$c.variable]: "shadows.dark-lg",
      },
      bg: Rc.reference,
      boxShadow: $c.reference,
    };
  },
  eE = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  tE = { position: "absolute", top: "2", insetEnd: "3" },
  nE = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  rE = { px: "6", py: "4" },
  oE = ef((e) => ({
    overlay: Q4,
    dialogContainer: ot(X4, e),
    dialog: ot(Z4, e),
    header: eE,
    closeButton: tE,
    body: ot(nE, e),
    footer: rE,
  }));
function Wt(e) {
  return ef(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var iE = {
    xs: Wt("xs"),
    sm: Wt("sm"),
    md: Wt("md"),
    lg: Wt("lg"),
    xl: Wt("xl"),
    "2xl": Wt("2xl"),
    "3xl": Wt("3xl"),
    "4xl": Wt("4xl"),
    "5xl": Wt("5xl"),
    "6xl": Wt("6xl"),
    full: Wt("full"),
  },
  aE = J4({ baseStyle: oE, sizes: iE, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: sE, definePartsStyle: xS } = le(O_.keys),
  Lh = Me("number-input-stepper-width"),
  kS = Me("number-input-input-padding"),
  lE = Sn(Lh).add("0.5rem").toString(),
  Mc = Me("number-input-bg"),
  zc = Me("number-input-color"),
  Dc = Me("number-input-border-color"),
  uE = { [Lh.variable]: "sizes.6", [kS.variable]: lE },
  cE = (e) => {
    var t, n;
    return (n = (t = ot(X.baseStyle, e)) == null ? void 0 : t.field) != null
      ? n
      : {};
  },
  dE = { width: Lh.reference },
  fE = {
    borderStart: "1px solid",
    borderStartColor: Dc.reference,
    color: zc.reference,
    bg: Mc.reference,
    [zc.variable]: "colors.chakra-body-text",
    [Dc.variable]: "colors.chakra-border-color",
    _dark: {
      [zc.variable]: "colors.whiteAlpha.800",
      [Dc.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [Mc.variable]: "colors.gray.200",
      _dark: { [Mc.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  hE = xS((e) => {
    var t;
    return {
      root: uE,
      field: (t = ot(cE, e)) != null ? t : {},
      stepperGroup: dE,
      stepper: fE,
    };
  });
function Cs(e) {
  var t, n, r;
  const o = (t = X.sizes) == null ? void 0 : t[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md",
    s = gS.fontSizes[a];
  return xS({
    field: { ...o.field, paddingInlineEnd: kS.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Sn(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var pE = { xs: Cs("xs"), sm: Cs("sm"), md: Cs("md"), lg: Cs("lg") },
  mE = sE({
    baseStyle: hE,
    sizes: pE,
    variants: X.variants,
    defaultProps: X.defaultProps,
  }),
  Ug,
  gE = {
    ...((Ug = X.baseStyle) == null ? void 0 : Ug.field),
    textAlign: "center",
  },
  vE = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Gg,
  Kg,
  yE = {
    outline: (e) => {
      var t, n, r;
      return (r =
        (n = ot((t = X.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, n, r;
      return (r =
        (n = ot((t = X.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    filled: (e) => {
      var t, n, r;
      return (r =
        (n = ot((t = X.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    unstyled:
      (Kg = (Gg = X.variants) == null ? void 0 : Gg.unstyled.field) != null
        ? Kg
        : {},
  },
  SE = { baseStyle: gE, sizes: vE, variants: yE, defaultProps: X.defaultProps },
  { defineMultiStyleConfig: bE, definePartsStyle: wE } = le(V_.keys),
  Ts = Me("popper-bg"),
  xE = Me("popper-arrow-bg"),
  Yg = Me("popper-arrow-shadow-color"),
  kE = { zIndex: 10 },
  CE = {
    [Ts.variable]: "colors.white",
    bg: Ts.reference,
    [xE.variable]: Ts.reference,
    [Yg.variable]: "colors.gray.200",
    _dark: {
      [Ts.variable]: "colors.gray.700",
      [Yg.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  TE = { px: 3, py: 2, borderBottomWidth: "1px" },
  PE = { px: 3, py: 2 },
  _E = { px: 3, py: 2, borderTopWidth: "1px" },
  EE = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  AE = wE({
    popper: kE,
    content: CE,
    header: TE,
    body: PE,
    footer: _E,
    closeButton: EE,
  }),
  RE = bE({ baseStyle: AE }),
  { definePartsStyle: tf, defineMultiStyleConfig: $E } = le(M_.keys),
  jc = B("drawer-bg"),
  Lc = B("drawer-box-shadow");
function Zr(e) {
  return tf(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var ME = { bg: "blackAlpha.600", zIndex: "modal" },
  zE = { display: "flex", zIndex: "modal", justifyContent: "center" },
  DE = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [jc.variable]: "colors.white",
      [Lc.variable]: "shadows.lg",
      _dark: {
        [jc.variable]: "colors.gray.700",
        [Lc.variable]: "shadows.dark-lg",
      },
      bg: jc.reference,
      boxShadow: Lc.reference,
    };
  },
  jE = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  LE = { position: "absolute", top: "2", insetEnd: "3" },
  FE = { px: "6", py: "2", flex: "1", overflow: "auto" },
  BE = { px: "6", py: "4" },
  IE = tf((e) => ({
    overlay: ME,
    dialogContainer: zE,
    dialog: ot(DE, e),
    header: jE,
    closeButton: LE,
    body: FE,
    footer: BE,
  })),
  OE = {
    xs: Zr("xs"),
    sm: Zr("md"),
    md: Zr("lg"),
    lg: Zr("2xl"),
    xl: Zr("4xl"),
    full: Zr("full"),
  },
  VE = $E({ baseStyle: IE, sizes: OE, defaultProps: { size: "xs" } }),
  { definePartsStyle: NE, defineMultiStyleConfig: WE } = le(z_.keys),
  HE = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  qE = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  UE = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  GE = NE({ preview: HE, input: qE, textarea: UE }),
  KE = WE({ baseStyle: GE }),
  { definePartsStyle: YE, defineMultiStyleConfig: JE } = le(D_.keys),
  Do = B("form-control-color"),
  QE = {
    marginStart: "1",
    [Do.variable]: "colors.red.500",
    _dark: { [Do.variable]: "colors.red.300" },
    color: Do.reference,
  },
  XE = {
    mt: "2",
    [Do.variable]: "colors.gray.600",
    _dark: { [Do.variable]: "colors.whiteAlpha.600" },
    color: Do.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  ZE = YE({
    container: { width: "100%", position: "relative" },
    requiredIndicator: QE,
    helperText: XE,
  }),
  eA = JE({ baseStyle: ZE }),
  { definePartsStyle: tA, defineMultiStyleConfig: nA } = le(j_.keys),
  jo = B("form-error-color"),
  rA = {
    [jo.variable]: "colors.red.500",
    _dark: { [jo.variable]: "colors.red.300" },
    color: jo.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  oA = {
    marginEnd: "0.5em",
    [jo.variable]: "colors.red.500",
    _dark: { [jo.variable]: "colors.red.300" },
    color: jo.reference,
  },
  iA = tA({ text: rA, icon: oA }),
  aA = nA({ baseStyle: iA }),
  sA = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  lA = { baseStyle: sA },
  uA = { fontFamily: "heading", fontWeight: "bold" },
  cA = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  dA = { baseStyle: uA, sizes: cA, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: fA, definePartsStyle: hA } = le(R_.keys),
  Fc = B("breadcrumb-link-decor"),
  pA = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Fc.reference,
    [Fc.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Fc.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  mA = hA({ link: pA }),
  gA = fA({ baseStyle: mA }),
  vA = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  CS = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === "gray")
      return {
        color: F("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: F("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: F("gray.200", "whiteAlpha.300")(e) },
      };
    const r = Uo(`${t}.200`, 0.12)(n),
      o = Uo(`${t}.200`, 0.24)(n);
    return {
      color: F(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: F(`${t}.50`, r)(e) },
      _active: { bg: F(`${t}.100`, o)(e) },
    };
  },
  yA = (e) => {
    const { colorScheme: t } = e,
      n = F("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? n : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...ot(CS, e),
    };
  },
  SA = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  bA = (e) => {
    var t;
    const { colorScheme: n } = e;
    if (n === "gray") {
      const l = F("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: F("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: F("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: F("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${n}.500`,
        color: o = "white",
        hoverBg: i = `${n}.600`,
        activeBg: a = `${n}.700`,
      } = (t = SA[n]) != null ? t : {},
      s = F(r, `${n}.200`)(e);
    return {
      bg: s,
      color: F(o, "gray.800")(e),
      _hover: { bg: F(i, `${n}.300`)(e), _disabled: { bg: s } },
      _active: { bg: F(a, `${n}.400`)(e) },
    };
  },
  wA = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: F(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: F(`${t}.700`, `${t}.500`)(e) },
    };
  },
  xA = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  kA = { ghost: CS, outline: yA, solid: bA, link: wA, unstyled: xA },
  CA = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  TA = {
    baseStyle: vA,
    variants: kA,
    sizes: CA,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: Br, defineMultiStyleConfig: PA } = le(Q_.keys),
  Dl = B("card-bg"),
  Tn = B("card-padding"),
  TS = B("card-shadow"),
  Zs = B("card-radius"),
  PS = B("card-border-width", "0"),
  _S = B("card-border-color"),
  _A = Br({
    container: {
      [Dl.variable]: "colors.chakra-body-bg",
      backgroundColor: Dl.reference,
      boxShadow: TS.reference,
      borderRadius: Zs.reference,
      color: "chakra-body-text",
      borderWidth: PS.reference,
      borderColor: _S.reference,
    },
    body: { padding: Tn.reference, flex: "1 1 0%" },
    header: { padding: Tn.reference },
    footer: { padding: Tn.reference },
  }),
  EA = {
    sm: Br({
      container: { [Zs.variable]: "radii.base", [Tn.variable]: "space.3" },
    }),
    md: Br({
      container: { [Zs.variable]: "radii.md", [Tn.variable]: "space.5" },
    }),
    lg: Br({
      container: { [Zs.variable]: "radii.xl", [Tn.variable]: "space.7" },
    }),
  },
  AA = {
    elevated: Br({
      container: {
        [TS.variable]: "shadows.base",
        _dark: { [Dl.variable]: "colors.gray.700" },
      },
    }),
    outline: Br({
      container: {
        [PS.variable]: "1px",
        [_S.variable]: "colors.chakra-border-color",
      },
    }),
    filled: Br({ container: { [Dl.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [Tn.variable]: 0 },
      header: { [Tn.variable]: 0 },
      footer: { [Tn.variable]: 0 },
    },
  },
  RA = PA({
    baseStyle: _A,
    variants: AA,
    sizes: EA,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  Hi = Me("close-button-size"),
  vi = Me("close-button-bg"),
  $A = {
    w: [Hi.reference],
    h: [Hi.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [vi.variable]: "colors.blackAlpha.100",
      _dark: { [vi.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [vi.variable]: "colors.blackAlpha.200",
      _dark: { [vi.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: vi.reference,
  },
  MA = {
    lg: { [Hi.variable]: "sizes.10", fontSize: "md" },
    md: { [Hi.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Hi.variable]: "sizes.6", fontSize: "2xs" },
  },
  zA = { baseStyle: $A, sizes: MA, defaultProps: { size: "md" } },
  { variants: DA, defaultProps: jA } = Ni,
  LA = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: _e.bg.reference,
    color: _e.color.reference,
    boxShadow: _e.shadow.reference,
  },
  FA = { baseStyle: LA, variants: DA, defaultProps: jA },
  BA = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  IA = { baseStyle: BA },
  OA = { opacity: 0.6, borderColor: "inherit" },
  VA = { borderStyle: "solid" },
  NA = { borderStyle: "dashed" },
  WA = { solid: VA, dashed: NA },
  HA = { baseStyle: OA, variants: WA, defaultProps: { variant: "solid" } },
  { definePartsStyle: qA, defineMultiStyleConfig: UA } = le(__.keys),
  GA = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  KA = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  YA = { pt: "2", px: "4", pb: "5" },
  JA = { fontSize: "1.25em" },
  QA = qA({ container: GA, button: KA, panel: YA, icon: JA }),
  XA = UA({ baseStyle: QA }),
  { definePartsStyle: ja, defineMultiStyleConfig: ZA } = le(E_.keys),
  wt = B("alert-fg"),
  jn = B("alert-bg"),
  eR = ja({
    container: { bg: jn.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: wt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: wt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function Fh(e) {
  const { theme: t, colorScheme: n } = e,
    r = Uo(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
var tR = ja((e) => {
    const { colorScheme: t } = e,
      n = Fh(e);
    return {
      container: {
        [wt.variable]: `colors.${t}.600`,
        [jn.variable]: n.light,
        _dark: { [wt.variable]: `colors.${t}.200`, [jn.variable]: n.dark },
      },
    };
  }),
  nR = ja((e) => {
    const { colorScheme: t } = e,
      n = Fh(e);
    return {
      container: {
        [wt.variable]: `colors.${t}.600`,
        [jn.variable]: n.light,
        _dark: { [wt.variable]: `colors.${t}.200`, [jn.variable]: n.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: wt.reference,
      },
    };
  }),
  rR = ja((e) => {
    const { colorScheme: t } = e,
      n = Fh(e);
    return {
      container: {
        [wt.variable]: `colors.${t}.600`,
        [jn.variable]: n.light,
        _dark: { [wt.variable]: `colors.${t}.200`, [jn.variable]: n.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: wt.reference,
      },
    };
  }),
  oR = ja((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [wt.variable]: "colors.white",
        [jn.variable]: `colors.${t}.600`,
        _dark: {
          [wt.variable]: "colors.gray.900",
          [jn.variable]: `colors.${t}.200`,
        },
        color: wt.reference,
      },
    };
  }),
  iR = { subtle: tR, "left-accent": nR, "top-accent": rR, solid: oR },
  aR = ZA({
    baseStyle: eR,
    variants: iR,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: ES, defineMultiStyleConfig: sR } = le(A_.keys),
  Lo = B("avatar-border-color"),
  qi = B("avatar-bg"),
  xa = B("avatar-font-size"),
  Go = B("avatar-size"),
  lR = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: Lo.reference,
    [Lo.variable]: "white",
    _dark: { [Lo.variable]: "colors.gray.800" },
  },
  uR = {
    bg: qi.reference,
    fontSize: xa.reference,
    width: Go.reference,
    height: Go.reference,
    lineHeight: "1",
    [qi.variable]: "colors.gray.200",
    _dark: { [qi.variable]: "colors.whiteAlpha.400" },
  },
  cR = (e) => {
    const { name: t, theme: n } = e,
      r = t ? v5({ string: t }) : "colors.gray.400",
      o = m5(r)(n);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: qi.reference,
        fontSize: xa.reference,
        color: i,
        borderColor: Lo.reference,
        verticalAlign: "top",
        width: Go.reference,
        height: Go.reference,
        "&:not([data-loaded])": { [qi.variable]: r },
        [Lo.variable]: "colors.white",
        _dark: { [Lo.variable]: "colors.gray.800" },
      }
    );
  },
  dR = { fontSize: xa.reference, lineHeight: "1" },
  fR = ES((e) => ({
    badge: ot(lR, e),
    excessLabel: ot(uR, e),
    container: ot(cR, e),
    label: dR,
  }));
function Hn(e) {
  const t = e !== "100%" ? yS[e] : void 0;
  return ES({
    container: {
      [Go.variable]: t ?? e,
      [xa.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Go.variable]: t ?? e,
      [xa.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var hR = {
    "2xs": Hn(4),
    xs: Hn(6),
    sm: Hn(8),
    md: Hn(12),
    lg: Hn(16),
    xl: Hn(24),
    "2xl": Hn(32),
    full: Hn("100%"),
  },
  pR = sR({ baseStyle: fR, sizes: hR, defaultProps: { size: "md" } }),
  mR = {
    Accordion: XA,
    Alert: aR,
    Avatar: pR,
    Badge: Ni,
    Breadcrumb: gA,
    Button: TA,
    Checkbox: zl,
    CloseButton: zA,
    Code: FA,
    Container: IA,
    Divider: HA,
    Drawer: VE,
    Editable: KE,
    Form: eA,
    FormError: aA,
    FormLabel: lA,
    Heading: dA,
    Input: X,
    Kbd: $4,
    Link: z4,
    List: B4,
    Menu: Y4,
    Modal: aE,
    NumberInput: mE,
    PinInput: SE,
    Popover: RE,
    Progress: F3,
    Radio: J3,
    Select: r4,
    Skeleton: i4,
    SkipLink: s4,
    Slider: y4,
    Spinner: w4,
    Stat: A4,
    Switch: z5,
    Table: O5,
    Tabs: t3,
    Tag: p3,
    Textarea: P3,
    Tooltip: A3,
    Card: RA,
    Stepper: P_,
  },
  gR = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  vR = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  yR = "ltr",
  SR = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  AS = {
    semanticTokens: gR,
    direction: yR,
    ...k_,
    components: mR,
    styles: vR,
    config: SR,
  };
function Ei(e) {
  return typeof e == "function";
}
function bR(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var wR = (e) =>
    function (...n) {
      let r = [...n],
        o = n[n.length - 1];
      return (
        ZP(o) && r.length > 1 ? (r = r.slice(0, r.length - 1)) : (o = e),
        bR(...r.map((i) => (a) => Ei(i) ? i(a) : kR(a, i)))(o)
      );
    },
  xR = wR(AS);
function kR(...e) {
  return Lt({}, ...e, RS);
}
function RS(e, t, n, r) {
  if ((Ei(e) || Ei(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = Ei(e) ? e(...o) : e,
        a = Ei(t) ? t(...o) : t;
      return Lt({}, i, a, RS);
    };
}
function CR(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function TR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var PR = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  $S = PR(TR);
function MS(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var zS = (e) => MS(e, (t) => t != null);
function _R(e) {
  return typeof e == "function";
}
function DS(e, ...t) {
  return _R(e) ? e(...t) : e;
}
var ER = typeof Element < "u",
  AR = typeof Map == "function",
  RR = typeof Set == "function",
  $R = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function el(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!el(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (AR && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!el(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (RR && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if ($R && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (ER && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !el(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var MR = function (t, n) {
  try {
    return el(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const zR = Tf(MR);
function jS(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: a } = RT(),
    s = e ? $S(i, `components.${e}`) : void 0,
    l = r || s,
    u = Lt(
      { theme: i, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      zS(CR(o, ["children"]))
    ),
    c = T.useRef({});
  if (l) {
    const f = QP(l)(u);
    zR(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Kr(e, t = {}) {
  return jS(e, t);
}
function _u(e, t = {}) {
  return jS(e, t);
}
var DR = new Set([
    ...IP,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  jR = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function LR(e) {
  return jR.has(e) || !DR.has(e);
}
function FR(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
function BR(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var IR =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  OR = q1(function (e) {
    return (
      IR.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  VR = OR,
  NR = function (t) {
    return t !== "theme";
  },
  Jg = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? VR : NR;
  },
  Qg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  WR = !1,
  HR = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Q1(n, r, o),
      sT(function () {
        return X1(n, r, o);
      }),
      null
    );
  },
  qR = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = Qg(t, n, r),
      l = s || Jg(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, g = 1; g < f; g++) d.push(c[g], c[0][g]);
      }
      var y = nS(function (S, b, p) {
        var h = (u && S.as) || o,
          m = "",
          k = [],
          P = S;
        if (S.theme == null) {
          P = {};
          for (var A in S) P[A] = S[A];
          P.theme = T.useContext(va);
        }
        typeof S.className == "string"
          ? (m = XC(b.registered, k, S.className))
          : S.className != null && (m = S.className + " ");
        var E = _h(d.concat(k), b.registered, P);
        (m += b.key + "-" + E.name), a !== void 0 && (m += " " + a);
        var R = u && s === void 0 ? Jg(h) : l,
          L = {};
        for (var j in S) (u && j === "as") || (R(j) && (L[j] = S[j]));
        return (
          (L.className = m),
          p && (L.ref = p),
          T.createElement(
            T.Fragment,
            null,
            T.createElement(HR, {
              cache: b,
              serialized: E,
              isStringTag: typeof h == "string",
            }),
            T.createElement(h, L)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = d),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, "toString", {
          value: function () {
            return a === void 0 && WR ? "NO_COMPONENT_SELECTOR" : "." + a;
          },
        }),
        (y.withComponent = function (S, b) {
          return e(S, Al({}, n, b, { shouldForwardProp: Qg(y, b, !0) })).apply(
            void 0,
            d
          );
        }),
        y
      );
    };
  },
  UR = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  jl = qR.bind();
UR.forEach(function (e) {
  jl[e] = jl(e);
});
var Xg,
  GR = (Xg = jl.default) != null ? Xg : jl,
  KR =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...a } = t,
        s = MS(a, (d, f) => VP(f)),
        l = DS(e, t),
        u = FR({}, o, l, zS(s), i),
        c = mS(u)(t.theme);
      return r ? [c, r] : c;
    };
function Bc(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = LR);
  const o = KR({ baseStyle: n }),
    i = GR(e, r)(o);
  return an.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = xu();
    return an.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function YR() {
  const e = new Map();
  return new Proxy(Bc, {
    apply(t, n, r) {
      return Bc(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, Bc(n)), e.get(n);
    },
  });
}
var W = YR();
function he(e) {
  return T.forwardRef(e);
}
function JR(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    o = T.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = T.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw (
        ((l.name = "ContextError"),
        (a = Error.captureStackTrace) == null || a.call(Error, l, i),
        l)
      );
    }
    return s;
  }
  return [o.Provider, i, o];
}
function QR(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = T.useMemo(() => LP(n), [n]);
  return C.jsxs(cT, { theme: o, children: [C.jsx(XR, { root: t }), r] });
}
function XR({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return C.jsx(bu, { styles: (n) => ({ [t]: n.__cssVars }) });
}
JR({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function ZR() {
  const { colorMode: e } = xu();
  return C.jsx(bu, {
    styles: (t) => {
      const n = $S(t, "styles.global"),
        r = DS(n, { theme: t, colorMode: e });
      return r ? mS(r)(t) : void 0;
    },
  });
}
var LS = T.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
LS.displayName = "EnvironmentContext";
function FS(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = T.useRef(null),
    i = T.useMemo(
      () =>
        n || {
          getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [n]
    ),
    a = !r || !n;
  return C.jsxs(LS.Provider, {
    value: i,
    children: [
      t,
      a && C.jsx("span", { id: "__chakra_env", hidden: !0, ref: o }),
    ],
  });
}
FS.displayName = "EnvironmentProvider";
var e$ = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: r,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = C.jsx(FS, { environment: s, disabled: u, children: t });
    return C.jsx(QR, {
      theme: a,
      cssVarsRoot: l,
      children: C.jsxs(lS, {
        colorModeManager: n,
        options: a.config,
        children: [
          i ? C.jsx(hT, { scope: o }) : C.jsx(fT, {}),
          !c && C.jsx(ZR, {}),
          r ? C.jsx(iS, { zIndex: r, children: d }) : d,
        ],
      }),
    });
  },
  t$ = (e, t) => e.find((n) => n.id === t);
function Zg(e, t) {
  const n = BS(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function BS(e, t) {
  for (const [n, r] of Object.entries(e)) if (t$(r, t)) return n;
}
function n$(e) {
  const t = e.includes("right"),
    n = e.includes("left");
  let r = "center";
  return (
    t && (r = "flex-end"),
    n && (r = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: r }
  );
}
function r$(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
    r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a,
  };
}
function o$(e, t = []) {
  const n = T.useRef(e);
  return (
    T.useEffect(() => {
      n.current = e;
    }),
    T.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function i$(e, t) {
  const n = o$(e);
  T.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
function e0(e, t) {
  const n = T.useRef(!1),
    r = T.useRef(!1);
  T.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    T.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const Bh = T.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Eu = T.createContext({}),
  La = T.createContext(null),
  Ih = typeof window < "u",
  IS = Ih ? T.useLayoutEffect : T.useEffect,
  OS = T.createContext({ strict: !1 }),
  Au = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  a$ = "framerAppearId",
  VS = "data-" + Au(a$),
  s$ = { skipAnimations: !1, useManualTiming: !1 };
function l$(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(u) {
    i.has(u) && (l.schedule(u), e()), u(a);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const g = d && r ? t : n;
      return c && i.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((a = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(s),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const Ps = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  u$ = 40;
function NS(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    a = Ps.reduce((p, h) => ((p[h] = l$(i)), p), {}),
    {
      read: s,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = a,
    g = () => {
      const p = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(p - o.timestamp, u$), 1)),
        (o.timestamp = p),
        (o.isProcessing = !0),
        s.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    y = () => {
      (n = !0), (r = !0), o.isProcessing || e(g);
    };
  return {
    schedule: Ps.reduce((p, h) => {
      const m = a[h];
      return (p[h] = (k, P = !1, A = !1) => (n || y(), m.schedule(k, P, A))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ps.length; h++) a[Ps[h]].cancel(p);
    },
    state: o,
    steps: a,
  };
}
const { schedule: Oh, cancel: NL } = NS(queueMicrotask, !1);
function bo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const WS = T.createContext({});
let t0 = !1;
function c$(e, t, n, r, o) {
  var i;
  const { visualElement: a } = T.useContext(Eu),
    s = T.useContext(OS),
    l = T.useContext(La),
    u = T.useContext(Bh).reducedMotion,
    c = T.useRef();
  (r = r || s.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const d = c.current,
    f = T.useContext(WS);
  d &&
    !d.projection &&
    o &&
    (d.type === "html" || d.type === "svg") &&
    f$(c.current, n, o, f),
    T.useInsertionEffect(() => {
      d && d.update(n, l);
    });
  const g = n[VS],
    y = T.useRef(
      !!g &&
        !window.MotionHandoffIsComplete &&
        ((i = window.MotionHasOptimisedAnimation) === null || i === void 0
          ? void 0
          : i.call(window, g))
    );
  return (
    IS(() => {
      d &&
        (d.updateFeatures(),
        Oh.render(d.render),
        y.current && d.animationState && d.animationState.animateChanges());
    }),
    T.useEffect(() => {
      d &&
        (!y.current && d.animationState && d.animationState.animateChanges(),
        (y.current = !1),
        t0 || ((t0 = !0), queueMicrotask(d$)));
    }),
    d
  );
}
function d$() {
  window.MotionHandoffIsComplete = !0;
}
function f$(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: a,
    dragConstraints: s,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : HS(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!a || (s && bo(s)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function HS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : HS(e.parent);
}
function h$(e, t, n) {
  return T.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : bo(n) && (n.current = r));
    },
    [t]
  );
}
function ka(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ca(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Nh = ["initial", ...Vh];
function Ru(e) {
  return Ca(e.animate) || Nh.some((t) => ka(e[t]));
}
function qS(e) {
  return !!(Ru(e) || e.variants);
}
function p$(e, t) {
  if (Ru(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ka(n) ? n : void 0,
      animate: ka(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function m$(e) {
  const { initial: t, animate: n } = p$(e, T.useContext(Eu));
  return T.useMemo(() => ({ initial: t, animate: n }), [n0(t), n0(n)]);
}
function n0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const r0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ko = {};
for (const e in r0) Ko[e] = { isEnabled: (t) => r0[e].some((n) => !!t[n]) };
function g$(e) {
  for (const t in e) Ko[t] = { ...Ko[t], ...e[t] };
}
const Wh = T.createContext({}),
  v$ = Symbol.for("motionComponentSymbol"),
  Qe = (e) => e;
let nf = Qe;
function y$({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && g$(e);
  function i(s, l) {
    let u;
    const c = { ...T.useContext(Bh), ...s, layoutId: S$(s) },
      { isStatic: d } = c,
      f = m$(s),
      g = r(s, d);
    if (!d && Ih) {
      b$();
      const y = w$(c);
      (u = y.MeasureLayout),
        (f.visualElement = c$(o, g, c, t, y.ProjectionNode));
    }
    return C.jsxs(Eu.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? C.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(o, s, h$(g, f.visualElement, l), g, d, f.visualElement),
      ],
    });
  }
  const a = T.forwardRef(i);
  return (a[v$] = o), a;
}
function S$({ layoutId: e }) {
  const t = T.useContext(Wh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function b$(e, t) {
  T.useContext(OS).strict;
}
function w$(e) {
  const { drag: t, layout: n } = Ko;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function x$(e) {
  function t(r, o = {}) {
    return y$(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const k$ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Hh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(k$.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Ll = {};
function C$(e) {
  Object.assign(Ll, e);
}
const Fa = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vr = new Set(Fa);
function US(e, { layout: t, layoutId: n }) {
  return (
    vr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ll[e] || e === "opacity"))
  );
}
const Je = (e) => !!(e && e.getVelocity),
  GS = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  dr = (e, t, n) => (n > t ? t : n < e ? e : n),
  ti = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ui = { ...ti, transform: (e) => dr(0, 1, e) },
  _s = { ...ti, default: 1 },
  Gi = (e) => Math.round(e * 1e5) / 1e5,
  qh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  T$ =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  P$ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ba(e) {
  return typeof e == "string";
}
function _$(e) {
  return e == null;
}
const Ia = (e) => ({
    test: (t) => Ba(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  qn = Ia("deg"),
  dn = Ia("%"),
  I = Ia("px"),
  E$ = Ia("vh"),
  A$ = Ia("vw"),
  o0 = {
    ...dn,
    parse: (e) => dn.parse(e) / 100,
    transform: (e) => dn.transform(e * 100),
  },
  i0 = { ...ti, transform: Math.round },
  Uh = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    size: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    rotate: qn,
    rotateX: qn,
    rotateY: qn,
    rotateZ: qn,
    scale: _s,
    scaleX: _s,
    scaleY: _s,
    scaleZ: _s,
    skew: qn,
    skewX: qn,
    skewY: qn,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: Ui,
    originX: o0,
    originY: o0,
    originZ: I,
    zIndex: i0,
    backgroundPositionX: I,
    backgroundPositionY: I,
    fillOpacity: Ui,
    strokeOpacity: Ui,
    numOctaves: i0,
  },
  R$ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  $$ = Fa.length;
function M$(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < $$; i++) {
    const a = Fa[i],
      s = e[a];
    if (s === void 0) continue;
    let l = !0;
    if (
      (typeof s == "number"
        ? (l = s === (a.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(s) === 0),
      !l || n)
    ) {
      const u = GS(s, Uh[a]);
      if (!l) {
        o = !1;
        const c = R$[a] || a;
        r += `${c}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
const KS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  YS = KS("--"),
  z$ = KS("var(--"),
  Gh = (e) => (z$(e) ? D$.test(e.split("/*")[0].trim()) : !1),
  D$ =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Kh(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1,
    s = !1;
  for (const l in t) {
    const u = t[l];
    if (vr.has(l)) {
      a = !0;
      continue;
    } else if (YS(l)) {
      o[l] = u;
      continue;
    } else {
      const c = GS(u, Uh[l]);
      l.startsWith("origin") ? ((s = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = M$(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    s)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Yh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function JS(e, t, n) {
  for (const r in t) !Je(t[r]) && !US(r, n) && (e[r] = t[r]);
}
function j$({ transformTemplate: e }, t) {
  return T.useMemo(() => {
    const n = Yh();
    return Kh(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function L$(e, t) {
  const n = e.style || {},
    r = {};
  return JS(r, n, e), Object.assign(r, j$(e, t)), r;
}
function F$(e, t) {
  const n = {},
    r = L$(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const B$ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Fl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    B$.has(e)
  );
}
let QS = (e) => !Fl(e);
function I$(e) {
  e && (QS = (t) => (t.startsWith("on") ? !Fl(t) : e(t)));
}
try {
  I$(require("@emotion/is-prop-valid").default);
} catch {}
function O$(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((QS(o) ||
        (n === !0 && Fl(o)) ||
        (!t && !Fl(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function a0(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function V$(e, t, n) {
  const r = a0(t, e.x, e.width),
    o = a0(n, e.y, e.height);
  return `${r} ${o}`;
}
const N$ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  W$ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function H$(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? N$ : W$;
  e[i.offset] = I.transform(-r);
  const a = I.transform(t),
    s = I.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Jh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((Kh(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: g, dimensions: y } = e;
  f.transform && (y && (g.transform = f.transform), delete f.transform),
    y &&
      (o !== void 0 || i !== void 0 || g.transform) &&
      (g.transformOrigin = V$(
        y,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    a !== void 0 && H$(f, a, s, l, !1);
}
const XS = () => ({ ...Yh(), attrs: {} }),
  Qh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function q$(e, t, n, r) {
  const o = T.useMemo(() => {
    const i = XS();
    return (
      Jh(i, t, Qh(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    JS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function U$(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Hh(n) ? q$ : F$)(r, i, a, n),
      u = O$(r, typeof n == "string", e),
      c = n !== T.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = T.useMemo(() => (Je(d) ? d.get() : d), [d]);
    return T.createElement(n, { ...c, children: f });
  };
}
function ZS(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const eb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function tb(e, t, n, r) {
  ZS(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(eb.has(o) ? o : Au(o), t.attrs[o]);
}
function Xh(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const a in o)
    (Je(o[a]) ||
      (t.style && Je(t.style[a])) ||
      US(a, e) ||
      ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[a] = o[a]);
  return (
    n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i
  );
}
function nb(e, t, n) {
  const r = Xh(e, t, n);
  for (const o in e)
    if (Je(e[o]) || Je(t[o])) {
      const i =
        Fa.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function s0(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Zh(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = s0(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = s0(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function ep(e) {
  const t = T.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const rf = (e) => Array.isArray(e),
  G$ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  K$ = (e) => (rf(e) ? e[e.length - 1] || 0 : e);
function tl(e) {
  const t = Je(e) ? e.get() : e;
  return G$(t) ? t.toValue() : t;
}
const rb = new Set(["opacity", "clipPath", "filter", "transform"]);
function ob(e) {
  if (vr.has(e)) return "transform";
  if (rb.has(e)) return Au(e);
}
function $u(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Mu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Y$(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  o,
  i,
  a,
  s
) {
  const l = { latestValues: Q$(o, i, a, s ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const ib = (e) => (t, n) => {
  const r = T.useContext(Eu),
    o = T.useContext(La),
    i = () => Y$(e, t, r, o, n);
  return n ? i() : ep(i);
};
function J$(e, t) {
  const n = ob(t);
  n && $u(e, n);
}
function l0(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = Zh(e, r[o]);
    if (i) {
      const { transitionEnd: a, transition: s, ...l } = i;
      n(l, a);
    }
  }
}
function Q$(e, t, n, r, o) {
  var i;
  const a = {},
    s = [],
    l =
      r &&
      ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) ===
        void 0,
    u = o(e, {});
  for (const b in u) a[b] = tl(u[b]);
  let { initial: c, animate: d } = e;
  const f = Ru(e),
    g = qS(e);
  t &&
    g &&
    !f &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const S = y ? d : c;
  return (
    S &&
      typeof S != "boolean" &&
      !Ca(S) &&
      l0(e, S, (b, p) => {
        for (const h in b) {
          let m = b[h];
          if (Array.isArray(m)) {
            const k = y ? m.length - 1 : 0;
            m = m[k];
          }
          m !== null && (a[h] = m);
        }
        for (const h in p) a[h] = p[h];
      }),
    l &&
      (d &&
        c !== !1 &&
        !Ca(d) &&
        l0(e, d, (b) => {
          for (const p in b) J$(s, p);
        }),
      s.length && (a.willChange = s.join(","))),
    a
  );
}
const {
    schedule: oe,
    cancel: Ln,
    state: Ie,
    steps: Ic,
  } = NS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Qe, !0),
  X$ = {
    useVisualState: ib({
      scrapeMotionValuesFromProps: nb,
      createRenderState: XS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        oe.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          oe.render(() => {
            Jh(n, r, Qh(t.tagName), e.transformTemplate), tb(t, n);
          });
      },
    }),
  },
  Z$ = {
    useVisualState: ib({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Xh,
      createRenderState: Yh,
    }),
  };
function eM(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Hh(e) ? X$ : Z$),
    preloadedFeatures: n,
    useRender: U$(t),
    createVisualElement: r,
    Component: e,
  };
}
function kn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ab = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function zu(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const tM = (e) => (t) => ab(t) && e(t, zu(t));
function Pn(e, t, n, r) {
  return kn(e, t, tM(n), r);
}
const nM = (e, t) => (n) => t(e(n)),
  _n = (...e) => e.reduce(nM);
function sb(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const u0 = sb("dragHorizontal"),
  c0 = sb("dragVertical");
function lb(e) {
  let t = !1;
  if (e === "y") t = c0();
  else if (e === "x") t = u0();
  else {
    const n = u0(),
      r = c0();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function ub() {
  const e = lb(!0);
  return e ? (e(), !1) : !0;
}
class yr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function d0(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, a) => {
      if (i.pointerType === "touch" || ub()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = s[r];
      l && oe.postRender(() => l(i, a));
    };
  return Pn(e.current, n, o, { passive: !e.getProps()[r] });
}
class rM extends yr {
  mount() {
    this.unmount = _n(d0(this.node, !0), d0(this.node, !1));
  }
  unmount() {}
}
class oM extends yr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = _n(
      kn(this.node.current, "focus", () => this.onFocus()),
      kn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const cb = (e, t) => (t ? (e === t ? !0 : cb(e, t.parentElement)) : !1);
function Oc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, zu(n));
}
class iM extends yr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Qe),
      (this.removeEndListeners = Qe),
      (this.removeAccessibleListeners = Qe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Pn(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !cb(this.node.current, s.target) ? c : u;
              f && oe.update(() => f(s, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = Pn(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = _n(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Oc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && oe.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = kn(this.node.current, "keyup", a)),
              Oc("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = kn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Oc("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = kn(this.node.current, "blur", r);
        this.removeAccessibleListeners = _n(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && oe.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !ub()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && oe.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Pn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = kn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = _n(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const of = new WeakMap(),
  Vc = new WeakMap(),
  aM = (e) => {
    const t = of.get(e.target);
    t && t(e);
  },
  sM = (e) => {
    e.forEach(aM);
  };
function lM({ root: e, ...t }) {
  const n = e || document;
  Vc.has(n) || Vc.set(n, {});
  const r = Vc.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(sM, { root: e, ...t })), r[o];
}
function uM(e, t, n) {
  const r = lM(t);
  return (
    of.set(e, n),
    r.observe(e),
    () => {
      of.delete(e), r.unobserve(e);
    }
  );
}
const cM = { some: 0, all: 1 };
class dM extends yr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : cM[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return uM(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(fM(t, n)) && this.startObserver();
  }
  unmount() {}
}
function fM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const hM = {
  inView: { Feature: dM },
  tap: { Feature: iM },
  focus: { Feature: oM },
  hover: { Feature: rM },
};
function db(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Du(e, t, n) {
  const r = e.getProps();
  return Zh(r, t, n !== void 0 ? n : r.custom, e);
}
const En = (e) => e * 1e3,
  An = (e) => e / 1e3,
  pM = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  mM = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  gM = { type: "keyframes", duration: 0.8 },
  vM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  yM = (e, { keyframes: t }) =>
    t.length > 2
      ? gM
      : vr.has(e)
      ? e.startsWith("scale")
        ? mM(t[1])
        : pM
      : vM;
function SM({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function tp(e, t) {
  return e[t] || e.default || e;
}
const bM = (e) => e !== null;
function ju(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(bM),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const fb = (e) => /^0[^.\s]+$/u.test(e);
function wM(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || fb(e)
    : !0;
}
const hb = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  xM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function kM(e) {
  const t = xM.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function pb(e, t, n = 1) {
  const [r, o] = kM(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return hb(a) ? parseFloat(a) : a;
  }
  return Gh(o) ? pb(o, t, n + 1) : o;
}
const CM = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  f0 = (e) => e === ti || e === I,
  h0 = (e, t) => parseFloat(e.split(", ")[t]),
  p0 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return h0(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? h0(i[1], e) : 0;
      }
    },
  TM = new Set(["x", "y", "z"]),
  PM = Fa.filter((e) => !TM.has(e));
function _M(e) {
  const t = [];
  return (
    PM.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Yo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: p0(4, 13),
  y: p0(5, 14),
};
Yo.translateX = Yo.x;
Yo.translateY = Yo.y;
const mb = (e) => (t) => t.test(e),
  EM = { test: (e) => e === "auto", parse: (e) => e },
  gb = [ti, I, dn, qn, A$, E$, EM],
  m0 = (e) => gb.find(mb(e)),
  Ir = new Set();
let af = !1,
  sf = !1;
function vb() {
  if (sf) {
    const e = Array.from(Ir).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = _M(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, a]) => {
            var s;
            (s = r.getValue(i)) === null || s === void 0 || s.set(a);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (sf = !1), (af = !1), Ir.forEach((e) => e.complete()), Ir.clear();
}
function yb() {
  Ir.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (sf = !0);
  });
}
function AM() {
  yb(), vb();
}
class np {
  constructor(t, n, r, o, i, a = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = a);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Ir.add(this),
          af || ((af = !0), oe.read(yb), oe.resolveKeyframes(vb)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const a = o == null ? void 0 : o.get(),
            s = t[t.length - 1];
          if (a !== void 0) t[0] = a;
          else if (r && n) {
            const l = r.readValue(n, s);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = s), o && a === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Ir.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Ir.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const rp = (e, t) => (n) =>
    !!(
      (Ba(n) && P$.test(n) && n.startsWith(e)) ||
      (t && !_$(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Sb = (e, t, n) => (r) => {
    if (!Ba(r)) return r;
    const [o, i, a, s] = r.match(qh);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  RM = (e) => dr(0, 255, e),
  Nc = { ...ti, transform: (e) => Math.round(RM(e)) },
  zr = {
    test: rp("rgb", "red"),
    parse: Sb("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Nc.transform(e) +
      ", " +
      Nc.transform(t) +
      ", " +
      Nc.transform(n) +
      ", " +
      Gi(Ui.transform(r)) +
      ")",
  };
function $M(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const lf = { test: rp("#"), parse: $M, transform: zr.transform },
  wo = {
    test: rp("hsl", "hue"),
    parse: Sb("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      dn.transform(Gi(t)) +
      ", " +
      dn.transform(Gi(n)) +
      ", " +
      Gi(Ui.transform(r)) +
      ")",
  },
  Ke = {
    test: (e) => zr.test(e) || lf.test(e) || wo.test(e),
    parse: (e) =>
      zr.test(e) ? zr.parse(e) : wo.test(e) ? wo.parse(e) : lf.parse(e),
    transform: (e) =>
      Ba(e) ? e : e.hasOwnProperty("red") ? zr.transform(e) : wo.transform(e),
  };
function MM(e) {
  var t, n;
  return (
    isNaN(e) &&
    Ba(e) &&
    (((t = e.match(qh)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(T$)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const bb = "number",
  wb = "color",
  zM = "var",
  DM = "var(",
  g0 = "${}",
  jM =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ta(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const s = t
    .replace(
      jM,
      (l) => (
        Ke.test(l)
          ? (r.color.push(i), o.push(wb), n.push(Ke.parse(l)))
          : l.startsWith(DM)
          ? (r.var.push(i), o.push(zM), n.push(l))
          : (r.number.push(i), o.push(bb), n.push(parseFloat(l))),
        ++i,
        g0
      )
    )
    .split(g0);
  return { values: n, split: s, indexes: r, types: o };
}
function xb(e) {
  return Ta(e).values;
}
function kb(e) {
  const { split: t, types: n } = Ta(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (((i += t[a]), o[a] !== void 0)) {
        const s = n[a];
        s === bb
          ? (i += Gi(o[a]))
          : s === wb
          ? (i += Ke.transform(o[a]))
          : (i += o[a]);
      }
    return i;
  };
}
const LM = (e) => (typeof e == "number" ? 0 : e);
function FM(e) {
  const t = xb(e);
  return kb(e)(t.map(LM));
}
const fr = {
    test: MM,
    parse: xb,
    createTransformer: kb,
    getAnimatableNone: FM,
  },
  BM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function IM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(qh) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = BM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const OM = /\b([a-z-]*)\(.*?\)/gu,
  uf = {
    ...fr,
    getAnimatableNone: (e) => {
      const t = e.match(OM);
      return t ? t.map(IM).join(" ") : e;
    },
  },
  VM = {
    ...Uh,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: uf,
    WebkitFilter: uf,
  },
  op = (e) => VM[e];
function Cb(e, t) {
  let n = op(e);
  return (
    n !== uf && (n = fr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const NM = new Set(["auto", "none", "0"]);
function WM(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !NM.has(i) && Ta(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = Cb(n, o);
}
class Tb extends np {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Gh(u))) {
        const c = pb(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !CM.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      a = m0(o),
      s = m0(i);
    if (a !== s)
      if (f0(a) && f0(s))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) wM(t[o]) && r.push(o);
    r.length && WM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Yo[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const a = o.length - 1,
      s = o[a];
    (o[a] = Yo[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Pb(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let nl;
function HM() {
  nl = void 0;
}
const Rn = {
    now: () => (
      nl === void 0 &&
        Rn.set(
          Ie.isProcessing || s$.useManualTiming
            ? Ie.timestamp
            : performance.now()
        ),
      nl
    ),
    set: (e) => {
      (nl = e), queueMicrotask(HM);
    },
  },
  v0 = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (fr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function qM(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function UM(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    a = v0(o, t),
    s = v0(i, t);
  return !a || !s ? !1 : qM(e) || (n === "spring" && r);
}
const GM = 40;
class _b {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: a = "loop",
    ...s
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Rn.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: a,
        ...s,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > GM
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && AM(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Rn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: a,
      onComplete: s,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !UM(t, r, o, i))
      if (a) this.options.duration = 0;
      else {
        l == null || l(ju(t, this.options, n)),
          s == null || s(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Eb(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const KM = 5;
function Ab(e, t, n) {
  const r = Math.max(t - KM, 0);
  return Eb(n - e(r), t - r);
}
const Wc = 0.001,
  YM = 0.01,
  JM = 10,
  QM = 0.05,
  XM = 1;
function ZM({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    a = 1 - t;
  (a = dr(QM, XM, a)),
    (e = dr(YM, JM, An(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            g = cf(u, a),
            y = Math.exp(-d);
          return Wc - (f / g) * y;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            g = Math.pow(a, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            S = cf(Math.pow(u, 2), a);
          return ((-o(u) + Wc > 0 ? -1 : 1) * ((f - g) * y)) / S;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Wc + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = tz(o, i, s);
  if (((e = En(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ez = 12;
function tz(e, t, n) {
  let r = n;
  for (let o = 1; o < ez; o++) r = r - e(r) / t(r);
  return r;
}
function cf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const nz = ["duration", "bounce"],
  rz = ["stiffness", "damping", "mass"];
function y0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function oz(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!y0(e, rz) && y0(e, nz)) {
    const n = ZM(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Rb({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = oz({ ...r, velocity: -An(r.velocity || 0) }),
    g = d || 0,
    y = l / (2 * Math.sqrt(s * u)),
    S = i - o,
    b = An(Math.sqrt(s / u)),
    p = Math.abs(S) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const m = cf(b, y);
    h = (k) => {
      const P = Math.exp(-y * b * k);
      return (
        i - P * (((g + y * b * S) / m) * Math.sin(m * k) + S * Math.cos(m * k))
      );
    };
  } else if (y === 1) h = (m) => i - Math.exp(-b * m) * (S + (g + b * S) * m);
  else {
    const m = b * Math.sqrt(y * y - 1);
    h = (k) => {
      const P = Math.exp(-y * b * k),
        A = Math.min(m * k, 300);
      return (
        i - (P * ((g + y * b * S) * Math.sinh(A) + m * S * Math.cosh(A))) / m
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (m) => {
      const k = h(m);
      if (f) a.done = m >= c;
      else {
        let P = 0;
        y < 1 && (P = m === 0 ? En(g) : Ab(h, m, k));
        const A = Math.abs(P) <= n,
          E = Math.abs(i - k) <= t;
        a.done = A && E;
      }
      return (a.value = a.done ? i : k), a;
    },
  };
}
function S0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    g = (R) => (s !== void 0 && R < s) || (l !== void 0 && R > l),
    y = (R) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - R) < Math.abs(l - R)
        ? s
        : l;
  let S = n * t;
  const b = d + S,
    p = a === void 0 ? b : a(b);
  p !== b && (S = p - d);
  const h = (R) => -S * Math.exp(-R / r),
    m = (R) => p + h(R),
    k = (R) => {
      const L = h(R),
        j = m(R);
      (f.done = Math.abs(L) <= u), (f.value = f.done ? p : j);
    };
  let P, A;
  const E = (R) => {
    g(f.value) &&
      ((P = R),
      (A = Rb({
        keyframes: [f.value, y(f.value)],
        velocity: Ab(m, R, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let L = !1;
        return (
          !A && P === void 0 && ((L = !0), k(R), E(R)),
          P !== void 0 && R >= P ? A.next(R - P) : (!L && k(R), f)
        );
      },
    }
  );
}
const $b = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  iz = 1e-7,
  az = 12;
function sz(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = $b(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > iz && ++s < az);
  return a;
}
function Oa(e, t, n, r) {
  if (e === t && n === r) return Qe;
  const o = (i) => sz(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : $b(o(i), t, r));
}
const lz = Oa(0.42, 0, 1, 1),
  uz = Oa(0, 0, 0.58, 1),
  Mb = Oa(0.42, 0, 0.58, 1),
  cz = (e) => Array.isArray(e) && typeof e[0] != "number",
  zb = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Db = (e) => (t) => 1 - e(1 - t),
  ip = (e) => 1 - Math.sin(Math.acos(e)),
  jb = Db(ip),
  dz = zb(ip),
  Lb = Oa(0.33, 1.53, 0.69, 0.99),
  ap = Db(Lb),
  fz = zb(ap),
  hz = (e) =>
    (e *= 2) < 1 ? 0.5 * ap(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  b0 = {
    linear: Qe,
    easeIn: lz,
    easeInOut: Mb,
    easeOut: uz,
    circIn: ip,
    circInOut: dz,
    circOut: jb,
    backIn: ap,
    backInOut: fz,
    backOut: Lb,
    anticipate: hz,
  },
  w0 = (e) => {
    if (Array.isArray(e)) {
      nf(e.length === 4);
      const [t, n, r, o] = e;
      return Oa(t, n, r, o);
    } else if (typeof e == "string") return nf(b0[e] !== void 0), b0[e];
    return e;
  },
  Pa = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  be = (e, t, n) => e + (t - e) * n;
function Hc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function pz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = Hc(l, s, e + 1 / 3)), (i = Hc(l, s, e)), (a = Hc(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
function Bl(e, t) {
  return (n) => (n > 0 ? t : e);
}
const qc = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  mz = [lf, zr, wo],
  gz = (e) => mz.find((t) => t.test(e));
function x0(e) {
  const t = gz(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === wo && (n = pz(n)), n;
}
const k0 = (e, t) => {
    const n = x0(e),
      r = x0(t);
    if (!n || !r) return Bl(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = qc(n.red, r.red, i)),
      (o.green = qc(n.green, r.green, i)),
      (o.blue = qc(n.blue, r.blue, i)),
      (o.alpha = be(n.alpha, r.alpha, i)),
      zr.transform(o)
    );
  },
  df = new Set(["none", "hidden"]);
function vz(e, t) {
  return df.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function yz(e, t) {
  return (n) => be(e, t, n);
}
function sp(e) {
  return typeof e == "number"
    ? yz
    : typeof e == "string"
    ? Gh(e)
      ? Bl
      : Ke.test(e)
      ? k0
      : wz
    : Array.isArray(e)
    ? Fb
    : typeof e == "object"
    ? Ke.test(e)
      ? k0
      : Sz
    : Bl;
}
function Fb(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, a) => sp(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++) n[a] = o[a](i);
    return n;
  };
}
function Sz(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = sp(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function bz(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i],
      s = e.indexes[a][o[a]],
      l = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[a]++;
  }
  return r;
}
const wz = (e, t) => {
  const n = fr.createTransformer(t),
    r = Ta(e),
    o = Ta(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (df.has(e) && !o.values.length) || (df.has(t) && !r.values.length)
      ? vz(e, t)
      : _n(Fb(bz(r, o), o.values), n)
    : Bl(e, t);
};
function Bb(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? be(e, t, n)
    : sp(e)(e, t);
}
function xz(e, t, n) {
  const r = [],
    o = n || Bb,
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Qe : t;
      s = _n(l, s);
    }
    r.push(s);
  }
  return r;
}
function kz(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((nf(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = xz(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Pa(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(dr(e[0], e[i - 1], u)) : l;
}
function Cz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Pa(0, t, r);
    e.push(be(n, 1, o));
  }
}
function Tz(e) {
  const t = [0];
  return Cz(t, e.length - 1), t;
}
function Pz(e, t) {
  return e.map((n) => n * t);
}
function _z(e, t) {
  return e.map(() => t || Mb).splice(0, e.length - 1);
}
function Il({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = cz(r) ? r.map(w0) : w0(r),
    i = { done: !1, value: t[0] },
    a = Pz(n && n.length === t.length ? n : Tz(t), e),
    s = kz(a, t, { ease: Array.isArray(o) ? o : _z(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
const C0 = 2e4;
function Ez(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < C0; ) (t += n), (r = e.next(t));
  return t >= C0 ? 1 / 0 : t;
}
const Az = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => oe.update(t, !0),
      stop: () => Ln(t),
      now: () => (Ie.isProcessing ? Ie.timestamp : Rn.now()),
    };
  },
  Rz = { decay: S0, inertia: S0, tween: Il, keyframes: Il, spring: Rb },
  $z = (e) => e / 100;
class lp extends _b {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      a = (o == null ? void 0 : o.KeyframeResolver) || np,
      s = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new a(i, s, n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: a = 0,
      } = this.options,
      s = Rz[n] || Il;
    let l, u;
    s !== Il &&
      typeof t[0] != "number" &&
      ((l = _n($z, Bb(t[0], t[1]))), (t = [0, 100]));
    const c = s({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = s({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
      c.calculatedDuration === null && (c.calculatedDuration = Ez(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      g = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: a,
      mapPercentToKeyframes: s,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: g,
      repeatType: y,
      repeatDelay: S,
      onUpdate: b,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      k = i;
    if (g) {
      const R = Math.min(this.currentTime, c) / d;
      let L = Math.floor(R),
        j = R % 1;
      !j && R >= 1 && (j = 1),
        j === 1 && L--,
        (L = Math.min(L, g + 1)),
        !!(L % 2) &&
          (y === "reverse"
            ? ((j = 1 - j), S && (j -= S / d))
            : y === "mirror" && (k = a)),
        (m = dr(0, 1, j) * d);
    }
    const P = h ? { done: !1, value: l[0] } : k.next(m);
    s && (P.value = s(P.value));
    let { done: A } = P;
    !h &&
      u !== null &&
      (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && A));
    return (
      E && o !== void 0 && (P.value = ju(l, this.options, o)),
      b && b(P.value),
      E && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? An(t.calculatedDuration) : 0;
  }
  get time() {
    return An(this.currentTime);
  }
  set time(t) {
    (t = En(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = An(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Az, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Ib = (e) => Array.isArray(e) && typeof e[0] == "number";
function Ob(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in up) ||
    Ib(e) ||
    (Array.isArray(e) && e.every(Ob))
  );
}
const Ai = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  up = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ai([0, 0.65, 0.55, 1]),
    circOut: Ai([0.55, 0, 1, 0.45]),
    backIn: Ai([0.31, 0.01, 0.66, -0.59]),
    backOut: Ai([0.33, 1.53, 0.69, 0.99]),
  };
function Mz(e) {
  return Vb(e) || up.easeOut;
}
function Vb(e) {
  if (e) return Ib(e) ? Ai(e) : Array.isArray(e) ? e.map(Mz) : up[e];
}
function zz(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Vb(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
const Dz = Pb(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ol = 10,
  jz = 2e4;
function Lz(e) {
  return e.type === "spring" || !Ob(e.ease);
}
function Fz(e, t) {
  const n = new lp({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < jz; ) (r = n.sample(i)), o.push(r.value), (i += Ol);
  return { times: void 0, keyframes: o, duration: i - Ol, ease: "linear" };
}
class T0 extends _b {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new Tb(
      i,
      (a, s) => this.onKeyframesResolved(a, s),
      n,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: a,
      type: s,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (Lz(this.options)) {
      const {
          onComplete: f,
          onUpdate: g,
          motionValue: y,
          element: S,
          ...b
        } = this.options,
        p = Fz(t, b);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = p.duration),
        (i = p.times),
        (a = p.ease),
        (s = "keyframes");
    }
    const d = zz(l.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: a,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(ju(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: s, ease: a, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return An(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return An(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = En(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Qe;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Qe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: a,
      times: s,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...g
        } = this.options,
        y = new lp({
          ...g,
          keyframes: r,
          duration: o,
          type: i,
          ease: a,
          times: s,
          isGenerator: !0,
        }),
        S = En(this.time);
      u.setWithVelocity(y.sample(S - Ol).value, y.sample(S).value, Ol);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: a,
      type: s,
    } = t;
    return (
      Dz() &&
      r &&
      rb.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      a !== 0 &&
      s !== "inertia"
    );
  }
}
function Bz(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t,
      a = (o === null ? 0 : o.value) / 100;
    n !== a && e(a), (n = a);
  };
  return oe.update(r, !0), () => Ln(r);
}
const Iz = Pb(() => window.ScrollTimeline !== void 0);
class Oz {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (Iz() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          Bz((o) => {
            r.time = r.duration * o;
          }, t)
        );
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const cp =
  (e, t, n, r = {}, o, i, a) =>
  (s) => {
    const l = tp(r, e) || {},
      u = l.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - En(u);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -c,
      onUpdate: (g) => {
        t.set(g), l.onUpdate && l.onUpdate(g);
      },
      onComplete: () => {
        s(), l.onComplete && l.onComplete(), a && a();
      },
      onStop: a,
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    SM(l) || (d = { ...d, ...yM(e, d) }),
      d.duration && (d.duration = En(d.duration)),
      d.repeatDelay && (d.repeatDelay = En(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const g = ju(d.keyframes, l);
      if (g !== void 0)
        return (
          oe.update(() => {
            d.onUpdate(g), d.onComplete();
          }),
          new Oz([])
        );
    }
    return !i && T0.supports(d) ? new T0(d) : new lp(d);
  };
class dp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return $u(this.subscriptions, t), () => Mu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const P0 = 30,
  Vz = (e) => !isNaN(parseFloat(e));
class Nb {
  constructor(t, n = {}) {
    (this.version = "11.3.30"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Rn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Rn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Vz(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new dp());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            oe.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Rn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > P0
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, P0);
    return Eb(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _a(e, t) {
  return new Nb(e, t);
}
function Nz(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _a(n));
}
function Wz(e, t) {
  const n = Du(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = K$(i[a]);
    Nz(e, a, s);
  }
}
function Wb(e) {
  return e.getProps()[VS];
}
class Hz extends Nb {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = ob(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o) return;
      o = !0;
      const i = this.counts.get(n) - 1;
      this.counts.set(n, i), i === 0 && (Mu(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function qz(e) {
  return !!(Je(e) && e.add);
}
function ff(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new Hz("auto")), e.addValue("willChange", r)),
    qz(r))
  )
    return r.add(t);
}
function Uz({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Hb(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...l } = t;
  r && (a = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      g = l[d];
    if (g === void 0 || (c && Uz(c, d))) continue;
    const y = { delay: n, ...tp(a || {}, d) };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const p = Wb(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, d, oe);
        h !== null && ((y.startTime = h), (S = !0));
      }
    }
    f.start(
      cp(
        d,
        f,
        g,
        e.shouldReduceMotion && vr.has(d) ? { type: !1 } : y,
        e,
        S,
        ff(e, d)
      )
    );
    const b = f.animation;
    b && u.push(b);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        oe.update(() => {
          s && Wz(e, s);
        });
      }),
    u
  );
}
function hf(e, t, n = {}) {
  var r;
  const o = Du(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = o ? () => Promise.all(Hb(e, o, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return Gz(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [a, s] : [s, a];
    return u().then(() => c());
  } else return Promise.all([a(), s(n.delay)]);
}
function Gz(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Kz)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            hf(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function Kz(e, t) {
  return e.sortNodePosition(t);
}
function Yz(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => hf(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = hf(e, t, n);
  else {
    const o = typeof t == "function" ? Du(e, t, n.custom) : t;
    r = Promise.all(Hb(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Jz = [...Vh].reverse(),
  Qz = Vh.length;
function Xz(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Yz(e, n, r)));
}
function Zz(e) {
  let t = Xz(e),
    n = _0(),
    r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Du(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: g, transitionEnd: y, ...S } = f;
      u = { ...u, ...S, ...y };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function a(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let g = {},
      y = 1 / 0;
    for (let b = 0; b < Qz; b++) {
      const p = Jz[b],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        k = ka(m),
        P = p === l ? h.isActive : null;
      P === !1 && (y = b);
      let A = m === c[p] && m !== u[p] && k;
      if (
        (A && r && e.manuallyAnimateOnMount && (A = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && P === null) ||
          (!m && !h.prevProp) ||
          Ca(m) ||
          typeof m == "boolean")
      )
        continue;
      let R =
          e6(h.prevProp, m) ||
          (p === l && h.isActive && !A && k) ||
          (b > y && k),
        L = !1;
      const j = Array.isArray(m) ? m : [m];
      let ee = j.reduce(o(p), {});
      P === !1 && (ee = {});
      const { prevResolvedValues: Ze = {} } = h,
        et = { ...Ze, ...ee },
        _t = (ve) => {
          (R = !0),
            f.has(ve) && ((L = !0), f.delete(ve)),
            (h.needsAnimating[ve] = !0);
          const ke = e.getValue(ve);
          ke && (ke.liveStyle = !1);
        };
      for (const ve in et) {
        const ke = ee[ve],
          Ot = Ze[ve];
        if (g.hasOwnProperty(ve)) continue;
        let M = !1;
        rf(ke) && rf(Ot) ? (M = !db(ke, Ot)) : (M = ke !== Ot),
          M
            ? ke != null
              ? _t(ve)
              : f.add(ve)
            : ke !== void 0 && f.has(ve)
            ? _t(ve)
            : (h.protectedKeys[ve] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = ee),
        h.isActive && (g = { ...g, ...ee }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!A || L) &&
          d.push(...j.map((ve) => ({ animation: ve, options: { type: p } })));
    }
    if (f.size) {
      const b = {};
      f.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (b[p] = h ?? null);
      }),
        d.push({ animation: b });
    }
    let S = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (r = !1),
      S ? t(d) : Promise.resolve()
    );
  }
  function s(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var g;
        return (g = f.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = a(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = _0()), (r = !0);
    },
  };
}
function e6(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !db(t, e) : !1;
}
function xr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function _0() {
  return {
    animate: xr(!0),
    whileInView: xr(),
    whileHover: xr(),
    whileTap: xr(),
    whileDrag: xr(),
    whileFocus: xr(),
    exit: xr(),
  };
}
class t6 extends yr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Zz(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ca(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let n6 = 0;
class r6 extends yr {
  constructor() {
    super(...arguments), (this.id = n6++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const o6 = { animation: { Feature: t6 }, exit: { Feature: r6 } },
  E0 = (e, t) => Math.abs(e - t);
function i6(e, t) {
  const n = E0(e.x, t.x),
    r = E0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class qb {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Gc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = i6(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !g) return;
        const { point: y } = d,
          { timestamp: S } = Ie;
        this.history.push({ ...y, timestamp: S });
        const { onStart: b, onMove: p } = this.handlers;
        f ||
          (b && b(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Uc(f, this.transformPagePoint)),
          oe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: S } = this.handlers;
        if (
          (this.dragSnapToOrigin && S && S(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const b = Gc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Uc(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(d, b), y && y(d, b);
      }),
      !ab(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const a = zu(t),
      s = Uc(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = Ie;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Gc(s, this.history)),
      (this.removeListeners = _n(
        Pn(this.contextWindow, "pointermove", this.handlePointerMove),
        Pn(this.contextWindow, "pointerup", this.handlePointerUp),
        Pn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ln(this.updatePoint);
  }
}
function Uc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function A0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gc({ point: e }, t) {
  return {
    point: e,
    delta: A0(e, Ub(t)),
    offset: A0(e, a6(t)),
    velocity: s6(t, 0.1),
  };
}
function a6(e) {
  return e[0];
}
function Ub(e) {
  return e[e.length - 1];
}
function s6(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Ub(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > En(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = An(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
const Gb = 1e-4,
  l6 = 1 - Gb,
  u6 = 1 + Gb,
  Kb = 0.01,
  c6 = 0 - Kb,
  d6 = 0 + Kb;
function kt(e) {
  return e.max - e.min;
}
function f6(e, t, n) {
  return Math.abs(e - t) <= n;
}
function R0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = be(t.min, t.max, e.origin)),
    (e.scale = kt(n) / kt(t)),
    (e.translate = be(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= l6 && e.scale <= u6) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= c6 && e.translate <= d6) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Ki(e, t, n, r) {
  R0(e.x, t.x, n.x, r ? r.originX : void 0),
    R0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + kt(t));
}
function h6(e, t, n) {
  $0(e.x, t.x, n.x), $0(e.y, t.y, n.y);
}
function M0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + kt(t));
}
function Yi(e, t, n) {
  M0(e.x, t.x, n.x), M0(e.y, t.y, n.y);
}
function p6(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? be(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? be(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function z0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function m6(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: z0(e.x, n, o), y: z0(e.y, t, r) };
}
function D0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function g6(e, t) {
  return { x: D0(e.x, t.x), y: D0(e.y, t.y) };
}
function v6(e, t) {
  let n = 0.5;
  const r = kt(e),
    o = kt(t);
  return (
    o > r
      ? (n = Pa(t.min, t.max - r, e.min))
      : r > o && (n = Pa(e.min, e.max - o, t.min)),
    dr(0, 1, n)
  );
}
function y6(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const pf = 0.35;
function S6(e = pf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = pf),
    { x: j0(e, "left", "right"), y: j0(e, "top", "bottom") }
  );
}
function j0(e, t, n) {
  return { min: L0(e, t), max: L0(e, n) };
}
function L0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const F0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  xo = () => ({ x: F0(), y: F0() }),
  B0 = () => ({ min: 0, max: 0 }),
  Te = () => ({ x: B0(), y: B0() });
function Mt(e) {
  return [e("x"), e("y")];
}
function Yb({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function b6({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function w6(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Kc(e) {
  return e === void 0 || e === 1;
}
function mf({ scale: e, scaleX: t, scaleY: n }) {
  return !Kc(e) || !Kc(t) || !Kc(n);
}
function Tr(e) {
  return (
    mf(e) ||
    Jb(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Jb(e) {
  return I0(e.x) || I0(e.y);
}
function I0(e) {
  return e && e !== "0%";
}
function Vl(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function O0(e, t, n, r, o) {
  return o !== void 0 && (e = Vl(e, o, r)), Vl(e, n, r) + t;
}
function gf(e, t = 0, n = 1, r, o) {
  (e.min = O0(e.min, t, n, r, o)), (e.max = O0(e.max, t, n, r, o));
}
function Qb(e, { x: t, y: n }) {
  gf(e.x, t.translate, t.scale, t.originPoint),
    gf(e.y, n.translate, n.scale, n.originPoint);
}
const V0 = 0.999999999999,
  N0 = 1.0000000000001;
function x6(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Co(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Qb(e, a)),
      r && Tr(i.latestValues) && Co(e, i.latestValues));
  }
  t.x < N0 && t.x > V0 && (t.x = 1), t.y < N0 && t.y > V0 && (t.y = 1);
}
function ko(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function W0(e, t, n, r, o = 0.5) {
  const i = be(e.min, e.max, o);
  gf(e, t, n, i, r);
}
function Co(e, t) {
  W0(e.x, t.x, t.scaleX, t.scale, t.originX),
    W0(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Xb(e, t) {
  return Yb(w6(e.getBoundingClientRect(), t));
}
function k6(e, t, n) {
  const r = Xb(e, n),
    { scroll: o } = t;
  return o && (ko(r.x, o.offset.x), ko(r.y, o.offset.y)), r;
}
const Zb = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  C6 = new WeakMap();
class T6 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(zu(c, "page").point);
      },
      i = (c, d) => {
        var f;
        const { drag: g, dragPropagation: y, onDragStart: S } = this.getProps();
        if (
          g &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = lb(g)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Mt((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (dn.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const k = m.layout.layoutBox[p];
                k && (h = kt(k) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          S && oe.postRender(() => S(c, d)),
          (f = this.removeWillChange) === null || f === void 0 || f.call(this),
          (this.removeWillChange = ff(this.visualElement, "transform"));
        const { animationState: b } = this.visualElement;
        b && b.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: S,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: b } = d;
        if (g && this.currentDirection === null) {
          (this.currentDirection = P6(b)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, b),
          this.updateAxis("y", d.point, b),
          this.visualElement.render(),
          S && S(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        Mt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new qb(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Zb(this.visualElement),
      }
    );
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const o = this.isDragging;
    if ((this.cancel(), !o)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: a } = this.getProps();
    a && oe.postRender(() => a(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Es(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = p6(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && bo(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = m6(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = S6(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Mt((a) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(a) &&
            (this.constraints[a] = y6(o.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !bo(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = k6(r, o.root, this.visualElement.getTransformPagePoint());
    let a = g6(o.layout.layoutBox, i);
    if (n) {
      const s = n(b6(a));
      (this.hasMutatedConstraints = !!s), s && (a = Yb(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = Mt((c) => {
        if (!Es(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          g = o ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(
      cp(t, r, 0, n, this.visualElement, !1, ff(this.visualElement, t))
    );
  }
  stopAnimation() {
    Mt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Mt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Mt((n) => {
      const { drag: r } = this.getProps();
      if (!Es(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - be(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!bo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Mt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s && this.constraints !== !1) {
        const l = s.get();
        o[a] = v6({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Mt((a) => {
        if (!Es(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(be(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    C6.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Pn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        bo(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      oe.read(r);
    const a = kn(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Mt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = pf,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function Es(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function P6(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class _6 extends yr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Qe),
      (this.removeListeners = Qe),
      (this.controls = new T6(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Qe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const H0 = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class E6 extends yr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Qe);
  }
  onPointerDown(t) {
    this.session = new qb(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Zb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: H0(t),
      onStart: H0(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && oe.postRender(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Pn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function A6() {
  const e = T.useContext(La);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = T.useId();
  T.useEffect(() => r(o), []);
  const i = T.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
function R6() {
  return $6(T.useContext(La));
}
function $6(e) {
  return e === null ? !0 : e.isPresent;
}
const rl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function q0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const yi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = q0(e, t.target.x),
        r = q0(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  M6 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = fr.parse(e);
      if (o.length > 5) return r;
      const i = fr.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = be(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class z6 extends T.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    C$(D6),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (rl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              oe.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Oh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ew(e) {
  const [t, n] = A6(),
    r = T.useContext(Wh);
  return C.jsx(z6, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: T.useContext(WS),
    isPresent: t,
    safeToRemove: n,
  });
}
const D6 = {
    borderRadius: {
      ...yi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: yi,
    borderTopRightRadius: yi,
    borderBottomLeftRadius: yi,
    borderBottomRightRadius: yi,
    boxShadow: M6,
  },
  tw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  j6 = tw.length,
  U0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  G0 = (e) => typeof e == "number" || I.test(e);
function L6(e, t, n, r, o, i) {
  o
    ? ((e.opacity = be(0, n.opacity !== void 0 ? n.opacity : 1, F6(r))),
      (e.opacityExit = be(t.opacity !== void 0 ? t.opacity : 1, 0, B6(r))))
    : i &&
      (e.opacity = be(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < j6; a++) {
    const s = `border${tw[a]}Radius`;
    let l = K0(t, s),
      u = K0(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || G0(l) === G0(u)
        ? ((e[s] = Math.max(be(U0(l), U0(u), r), 0)),
          (dn.test(u) || dn.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = be(t.rotate || 0, n.rotate || 0, r));
}
function K0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const F6 = nw(0, 0.5, jb),
  B6 = nw(0.5, 0.95, Qe);
function nw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Pa(e, t, r)));
}
function Y0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function At(e, t) {
  Y0(e.x, t.x), Y0(e.y, t.y);
}
function J0(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Q0(e, t, n, r, o) {
  return (
    (e -= t), (e = Vl(e, 1 / n, r)), o !== void 0 && (e = Vl(e, 1 / o, r)), e
  );
}
function I6(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (dn.test(t) &&
      ((t = parseFloat(t)), (t = be(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = be(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = Q0(e.min, t, n, s, o)),
    (e.max = Q0(e.max, t, n, s, o));
}
function X0(e, t, [n, r, o], i, a) {
  I6(e, t[n], t[r], t[o], t.scale, i, a);
}
const O6 = ["x", "scaleX", "originX"],
  V6 = ["y", "scaleY", "originY"];
function Z0(e, t, n, r) {
  X0(e.x, t, O6, n ? n.x : void 0, r ? r.x : void 0),
    X0(e.y, t, V6, n ? n.y : void 0, r ? r.y : void 0);
}
function ev(e) {
  return e.translate === 0 && e.scale === 1;
}
function rw(e) {
  return ev(e.x) && ev(e.y);
}
function tv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function N6(e, t) {
  return tv(e.x, t.x) && tv(e.y, t.y);
}
function nv(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function ow(e, t) {
  return nv(e.x, t.x) && nv(e.y, t.y);
}
function rv(e) {
  return kt(e.x) / kt(e.y);
}
function ov(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class W6 {
  constructor() {
    this.members = [];
  }
  add(t) {
    $u(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Mu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function H6(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    a = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const q6 = (e, t) => e.depth - t.depth;
class U6 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    $u(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Mu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(q6),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function G6(e, t) {
  const n = Rn.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Ln(r), e(i - t));
    };
  return oe.read(r, !0), () => Ln(r);
}
function K6(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Y6(e, t, n) {
  const r = Je(e) ? e : _a(e);
  return r.start(cp("", r, t, n)), r.animation;
}
const Pr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ri = typeof window < "u" && window.MotionDebug !== void 0,
  Yc = ["", "X", "Y", "Z"],
  J6 = { visibility: "hidden" },
  iv = 1e3;
let Q6 = 0;
function Jc(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function iw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Wb(t);
  window.MotionHasOptimisedTransformAnimation(n) &&
    window.MotionCancelOptimisedTransform(n);
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && iw(r);
}
function aw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = Q6++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ri &&
              (Pr.totalNodes =
                Pr.resolvedTargetDeltas =
                Pr.recalculatedProjection =
                  0),
            this.nodes.forEach(eD),
            this.nodes.forEach(iD),
            this.nodes.forEach(aD),
            this.nodes.forEach(tD),
            Ri && window.MotionDebug.record(Pr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new U6());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new dp()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = K6(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = G6(f, 250)),
            rl.hasAnimatedSinceResize &&
              ((rl.hasAnimatedSinceResize = !1), this.nodes.forEach(sv));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const S =
                  this.options.transition || c.getDefaultTransition() || dD,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !ow(this.targetLayout, y) || g,
                m = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const k = { ...tp(S, "layout"), onPlay: b, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                f || sv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ln(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(sD),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedTransform &&
          !this.hasCheckedOptimisedAppear &&
          iw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(av);
        return;
      }
      this.isUpdating || this.nodes.forEach(rD),
        (this.isUpdating = !1),
        this.nodes.forEach(oD),
        this.nodes.forEach(X6),
        this.nodes.forEach(Z6),
        this.clearAllSnapshots();
      const s = Rn.now();
      (Ie.delta = dr(0, 1e3 / 60, s - Ie.timestamp)),
        (Ie.timestamp = s),
        (Ie.isProcessing = !0),
        Ic.update.process(Ie),
        Ic.preRender.process(Ie),
        Ic.render.process(Ie),
        (Ie.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Oh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(nD), this.sharedNodes.forEach(lD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === a &&
          (s = !1),
        s)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const a =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        s = this.projectionDelta && !rw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || Tr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        fD(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var a;
      const { visualElement: s } = this.options;
      if (!s) return Te();
      const l = s.measureViewportBox();
      if (
        !(
          ((a = this.scroll) === null || a === void 0 ? void 0 : a.wasRoot) ||
          this.path.some(hD)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ko(l.x, c.offset.x), ko(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(a) {
      var s;
      const l = Te();
      if (
        (At(l, a), !((s = this.scroll) === null || s === void 0) && s.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && At(l, a), ko(l.x, d.offset.x), ko(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(a, s = !1) {
      const l = Te();
      At(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Co(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Tr(c.latestValues) && Co(l, c.latestValues);
      }
      return Tr(this.latestValues) && Co(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Te();
      At(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Tr(u.latestValues)) continue;
        mf(u.latestValues) && u.updateSnapshot();
        const c = Te(),
          d = u.measurePageBox();
        At(c, d),
          Z0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Tr(this.latestValues) && Z0(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ie.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Te()),
              (this.relativeTargetOrigin = Te()),
              Yi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              At(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Te()), (this.targetWithTransforms = Te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                h6(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : At(this.target, this.layout.layoutBox),
                Qb(this.target, this.targetDelta))
              : At(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Te()),
                (this.relativeTargetOrigin = Te()),
                Yi(this.relativeTargetOrigin, this.target, g.target),
                At(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ri && Pr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          mf(this.parent.latestValues) ||
          Jb(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ie.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      At(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        g = this.treeScale.y;
      x6(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Te()));
      const { target: y } = s;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (J0(this.prevProjectionDelta.x, this.projectionDelta.x),
          J0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ki(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== g ||
          !ov(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ov(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Ri && Pr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var s;
      if (
        ((s = this.options.visualElement) === null ||
          s === void 0 ||
          s.scheduleRender(),
        a)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = xo()),
        (this.projectionDelta = xo()),
        (this.projectionDeltaWithTransform = xo());
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = xo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = Te(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        S = g !== y,
        b = this.getStack(),
        p = !b || b.members.length <= 1,
        h = !!(S && !p && this.options.crossfade === !0 && !this.path.some(cD));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (k) => {
        const P = k / 1e3;
        lv(d.x, a.x, P),
          lv(d.y, a.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Yi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            uD(this.relativeTarget, this.relativeTargetOrigin, f, P),
            m && N6(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = Te()),
            At(m, this.relativeTarget)),
          S &&
            ((this.animationValues = c), L6(c, u, this.latestValues, P, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ln(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = oe.update(() => {
          (rl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Y6(0, iv, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(iv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          sw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Te();
          const d = kt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = kt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        At(s, l),
          Co(s, c),
          Ki(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new W6()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (s = !0),
        !s)
      )
        return;
      const u = {};
      l.z && Jc("z", a, u, this.animationValues);
      for (let c = 0; c < Yc.length; c++)
        Jc(`rotate${Yc[c]}`, a, u, this.animationValues),
          Jc(`skew${Yc[c]}`, a, u, this.animationValues);
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return J6;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = tl(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const S = {};
        return (
          this.options.layoutId &&
            ((S.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (S.pointerEvents = tl(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Tr(this.latestValues) &&
            ((S.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          S
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = H6(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const S in Ll) {
        if (f[S] === void 0) continue;
        const { correct: b, applyTo: p } = Ll[S],
          h = u.transform === "none" ? f[S] : b(f[S], d);
        if (p) {
          const m = p.length;
          for (let k = 0; k < m; k++) u[p[k]] = h;
        } else u[S] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? tl(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(av),
        this.root.sharedNodes.clear();
    }
  };
}
function X6(e) {
  e.updateLayout();
}
function Z6(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === "size"
      ? Mt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            g = kt(f);
          (f.min = r[d].min), (f.max = f.min + g);
        })
      : sw(i, n.layoutBox, r) &&
        Mt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            g = kt(r[d]);
          (f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + g));
        });
    const s = xo();
    Ki(s, r, n.layoutBox);
    const l = xo();
    a ? Ki(l, e.applyTransform(o, !0), n.measuredBox) : Ki(l, r, n.layoutBox);
    const u = !rw(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const y = Te();
          Yi(y, n.layoutBox, f.layoutBox);
          const S = Te();
          Yi(S, r, g.layoutBox),
            ow(y, S) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = S),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function eD(e) {
  Ri && Pr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function nD(e) {
  e.clearSnapshot();
}
function av(e) {
  e.clearMeasurements();
}
function rD(e) {
  e.isLayoutDirty = !1;
}
function oD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function sv(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function iD(e) {
  e.resolveTargetDelta();
}
function aD(e) {
  e.calcProjection();
}
function sD(e) {
  e.resetSkewAndRotation();
}
function lD(e) {
  e.removeLeadSnapshot();
}
function lv(e, t, n) {
  (e.translate = be(t.translate, 0, n)),
    (e.scale = be(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function uv(e, t, n, r) {
  (e.min = be(t.min, n.min, r)), (e.max = be(t.max, n.max, r));
}
function uD(e, t, n, r) {
  uv(e.x, t.x, n.x, r), uv(e.y, t.y, n.y, r);
}
function cD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const dD = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  cv = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  dv = cv("applewebkit/") && !cv("chrome/") ? Math.round : Qe;
function fv(e) {
  (e.min = dv(e.min)), (e.max = dv(e.max));
}
function fD(e) {
  fv(e.x), fv(e.y);
}
function sw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !f6(rv(t), rv(n), 0.2))
  );
}
function hD(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const pD = aw({
    attachResizeListener: (e, t) => kn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Qc = { current: void 0 },
  lw = aw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Qc.current) {
        const e = new pD({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Qc.current = e);
      }
      return Qc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  mD = {
    pan: { Feature: E6 },
    drag: { Feature: _6, ProjectionNode: lw, MeasureLayout: ew },
  },
  vf = { current: null },
  uw = { current: !1 };
function gD() {
  if (((uw.current = !0), !!Ih))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (vf.current = e.matches);
      e.addListener(t), t();
    } else vf.current = !1;
}
function vD(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Je(o)) e.addValue(r, o);
    else if (Je(i)) e.addValue(r, _a(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, _a(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const hv = new WeakMap(),
  yD = [...gb, Ke, fr],
  SD = (e) => yD.find(mb(e)),
  pv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  bD = Nh.length;
class wD {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: a,
    },
    s = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = np),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), oe.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = a;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Ru(n)),
      (this.isVariantNode = qS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const g = d[f];
      l[f] !== void 0 && Je(g) && g.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      hv.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      uw.current || gD(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : vf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    hv.delete(this.current),
      this.projection && this.projection.unmount(),
      Ln(this.notifyUpdate),
      Ln(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = vr.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && oe.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ko) {
      const n = Ko[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < pv.length; r++) {
      const o = pv[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    (this.prevMotionValues = vD(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < bD; r++) {
      const o = Nh[r],
        i = this.props[o];
      (ka(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = _a(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (hb(o) || fb(o))
          ? (o = parseFloat(o))
          : !SD(o) && fr.test(n) && (o = Cb(t, n)),
        this.setBaseTarget(t, Je(o) ? o.get() : o)),
      Je(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const a = Zh(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      a && (o = a[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Je(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new dp()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class cw extends wD {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Tb);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function xD(e) {
  return window.getComputedStyle(e);
}
class kD extends cw {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = ZS);
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = op(n);
      return (r && r.default) || 0;
    } else {
      const r = xD(t),
        o = (YS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Xb(t, n);
  }
  build(t, n, r) {
    Kh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Xh(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Je(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class CD extends cw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Te);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = op(n);
      return (r && r.default) || 0;
    }
    return (n = eb.has(n) ? n : Au(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return nb(t, n, r);
  }
  build(t, n, r) {
    Jh(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    tb(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Qh(t.tagName)), super.mount(t);
  }
}
const TD = (e, t) =>
    Hh(e) ? new CD(t) : new kD(t, { allowProjection: e !== T.Fragment }),
  PD = { layout: { ProjectionNode: lw, MeasureLayout: ew } },
  _D = { ...o6, ...hM, ...mD, ...PD },
  ED = x$((e, t) => eM(e, t, _D, TD));
class AD extends T.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function RD({ children: e, isPresent: t }) {
  const n = T.useId(),
    r = T.useRef(null),
    o = T.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = T.useContext(Bh);
  return (
    T.useInsertionEffect(() => {
      const { width: a, height: s, top: l, left: u } = o.current;
      if (t || !r.current || !a || !s) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    C.jsx(AD, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: T.cloneElement(e, { ref: r }),
    })
  );
}
const $D = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = ep(MD),
    l = T.useId(),
    u = T.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? [Math.random()] : [n]
    );
  return (
    T.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    T.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = C.jsx(RD, { isPresent: n, children: e })),
    C.jsx(La.Provider, { value: u, children: e })
  );
};
function MD() {
  return new Map();
}
const As = (e) => e.key || "";
function mv(e) {
  const t = [];
  return (
    T.Children.forEach(e, (n) => {
      T.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const zD = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: o,
  presenceAffectsLayout: i = !0,
  mode: a = "sync",
}) => {
  const s = T.useMemo(() => mv(e), [e]),
    l = s.map(As),
    u = T.useRef(!0),
    c = T.useRef(s),
    d = ep(() => new Map()),
    [f, g] = T.useState(s),
    [y, S] = T.useState(s);
  IS(() => {
    (u.current = !1), (c.current = s);
    for (let h = 0; h < y.length; h++) {
      const m = As(y[h]);
      l.includes(m) ? d.delete(m) : d.get(m) !== !0 && d.set(m, !1);
    }
  }, [y, l.length, l.join("-")]);
  const b = [];
  if (s !== f) {
    let h = [...s];
    for (let m = 0; m < y.length; m++) {
      const k = y[m],
        P = As(k);
      l.includes(P) || (h.splice(m, 0, k), b.push(k));
    }
    a === "wait" && b.length && (h = b), S(mv(h)), g(s);
    return;
  }
  const { forceRender: p } = T.useContext(Wh);
  return C.jsx(C.Fragment, {
    children: y.map((h) => {
      const m = As(h),
        k = s === y || l.includes(m),
        P = () => {
          if (d.has(m)) d.set(m, !0);
          else return;
          let A = !0;
          d.forEach((E) => {
            E || (A = !1);
          }),
            A && (p == null || p(), S(c.current), o && o());
        };
      return C.jsx(
        $D,
        {
          isPresent: k,
          initial: !u.current || r ? void 0 : !1,
          custom: k ? void 0 : n,
          presenceAffectsLayout: i,
          mode: a,
          onExitComplete: k ? void 0 : P,
          children: h,
        },
        m
      );
    }),
  });
};
var DD = {
    initial: (e) => {
      const { position: t } = e,
        n = ["top", "bottom"].includes(t) ? "y" : "x";
      let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  dw = T.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = DD,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = T.useState(s),
      g = R6();
    e0(() => {
      g || r == null || r();
    }, [g]),
      e0(() => {
        f(s);
      }, [s]);
    const y = () => f(null),
      S = () => f(s),
      b = () => {
        g && o();
      };
    T.useEffect(() => {
      g && i && o();
    }, [g, i, o]),
      i$(b, d);
    const p = T.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = T.useMemo(() => n$(a), [a]);
    return C.jsx(ED.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: S,
      custom: { position: a },
      style: h,
      children: C.jsx(W.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: p,
        children: er(n, { id: t, onClose: b }),
      }),
    });
  });
dw.displayName = "ToastComponent";
var gv = {
    path: C.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        C.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        C.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        C.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Va = he((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = We("chakra-icon", s),
      d = Kr("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      g = { ref: t, focusable: i, className: c, __css: f },
      y = r ?? gv.viewBox;
    if (n && typeof n != "string") return C.jsx(W.svg, { as: n, ...g, ...u });
    const S = a ?? gv.path;
    return C.jsx(W.svg, {
      verticalAlign: "middle",
      viewBox: y,
      ...g,
      ...u,
      children: S,
    });
  });
Va.displayName = "Icon";
function jD(e) {
  return C.jsx(Va, {
    viewBox: "0 0 24 24",
    ...e,
    children: C.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function LD(e) {
  return C.jsx(Va, {
    viewBox: "0 0 24 24",
    ...e,
    children: C.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function vv(e) {
  return C.jsx(Va, {
    viewBox: "0 0 24 24",
    ...e,
    children: C.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var FD = Da({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  fp = he((e, t) => {
    const n = Kr("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = fn(e),
      u = We("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${FD} ${i} linear infinite`,
        ...n,
      };
    return C.jsx(W.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && C.jsx(W.span, { srOnly: !0, children: r }),
    });
  });
fp.displayName = "Spinner";
var [BD, hp] = Bn({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [ID, pp] = Bn({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  fw = {
    info: { icon: LD, colorScheme: "blue" },
    warning: { icon: vv, colorScheme: "orange" },
    success: { icon: jD, colorScheme: "green" },
    error: { icon: vv, colorScheme: "red" },
    loading: { icon: fp, colorScheme: "blue" },
  };
function OD(e) {
  return fw[e].colorScheme;
}
function VD(e) {
  return fw[e].icon;
}
var hw = he(function (t, n) {
  const r = pp(),
    { status: o } = hp(),
    i = { display: "inline", ...r.description };
  return C.jsx(W.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: We("chakra-alert__desc", t.className),
    __css: i,
  });
});
hw.displayName = "AlertDescription";
function mp(e) {
  const { status: t } = hp(),
    n = VD(t),
    r = pp(),
    o = t === "loading" ? r.spinner : r.icon;
  return C.jsx(W.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: We("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || C.jsx(n, { h: "100%", w: "100%" }),
  });
}
mp.displayName = "AlertIcon";
var pw = he(function (t, n) {
  const r = pp(),
    { status: o } = hp();
  return C.jsx(W.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: We("chakra-alert__title", t.className),
    __css: r.title,
  });
});
pw.displayName = "AlertTitle";
var gp = he(function (t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = fn(t),
    s = (r = t.colorScheme) != null ? r : OD(o),
    l = _u("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return C.jsx(BD, {
    value: { status: o },
    children: C.jsx(ID, {
      value: l,
      children: C.jsx(W.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: n,
        ...a,
        className: We("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
gp.displayName = "Alert";
function ND(e) {
  return C.jsx(Va, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: C.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var mw = he(function (t, n) {
  const r = Kr("CloseButton", t),
    { children: o, isDisabled: i, __css: a, ...s } = fn(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return C.jsx(W.button, {
    type: "button",
    "aria-label": "Close",
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...a },
    ...s,
    children: o || C.jsx(ND, { width: "1em", height: "1em" }),
  });
});
mw.displayName = "CloseButton";
var WD = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Ji = HD(WD);
function HD(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
    },
    notify: (o, i) => {
      const a = qD(o, i),
        { position: s, id: l } = a;
      return (
        r((u) => {
          var c, d;
          const g = s.includes("top")
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: g };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((a) => {
          const s = { ...a },
            { position: l, index: u } = Zg(s, o);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: GD(i) }), s
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const a = BS(i, o);
        return a
          ? {
              ...i,
              [a]: i[a].map((s) =>
                s.id == o ? { ...s, requestClose: !0 } : s
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!Zg(Ji.getState(), o).position,
  };
}
var yv = 0;
function qD(e, t = {}) {
  var n, r;
  yv += 1;
  const o = (n = t.id) != null ? n : yv,
    i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ji.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var UD = (e) => {
  const {
      status: t,
      variant: n = "solid",
      id: r,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return C.jsxs(gp, {
    addRole: !1,
    status: t,
    variant: n,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      C.jsx(mp, { children: u }),
      C.jsxs(W.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && C.jsx(pw, { id: c == null ? void 0 : c.title, children: o }),
          s &&
            C.jsx(hw, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: s,
            }),
        ],
      }),
      i &&
        C.jsx(mw, {
          size: "sm",
          onClick: a,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function GD(e = {}) {
  const { render: t, toastComponent: n = UD } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : C.jsx(n, { ...o, ...e });
}
var [KD, HL] = Bn({ name: "ToastOptionsContext", strict: !1 }),
  YD = (e) => {
    const t = T.useSyncExternalStore(Ji.subscribe, Ji.getState, Ji.getState),
      { motionVariants: n, component: r = dw, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return C.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${s}`,
            id: `chakra-toast-manager-${s}`,
            style: r$(s),
            children: C.jsx(zD, {
              initial: !1,
              children: l.map((u) =>
                C.jsx(r, { motionVariants: n, ...u }, u.id)
              ),
            }),
          },
          s
        );
      });
    return C.jsx(wu, { ...o, children: a });
  },
  JD = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return C.jsxs(e$, {
        theme: r,
        ...i,
        children: [
          C.jsx(KD, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n,
          }),
          C.jsx(YD, { ...o }),
        ],
      });
    },
  QD = JD(AS);
function XD(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Nl(...e) {
  return (t) => {
    e.forEach((n) => {
      XD(n, t);
    });
  };
}
function ZD(...e) {
  return T.useMemo(() => Nl(...e), e);
}
var yf = he(function (t, n) {
  const { htmlWidth: r, htmlHeight: o, alt: i, ...a } = t;
  return C.jsx("img", { width: r, height: o, ref: n, alt: i, ...a });
});
yf.displayName = "NativeImage";
function ej(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = T.useState("pending");
  T.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = T.useRef(),
    f = T.useCallback(() => {
      if (!n) return;
      g();
      const y = new Image();
      (y.src = n),
        a && (y.crossOrigin = a),
        r && (y.srcset = r),
        s && (y.sizes = s),
        t && (y.loading = t),
        (y.onload = (S) => {
          g(), c("loaded"), o == null || o(S);
        }),
        (y.onerror = (S) => {
          g(), c("failed"), i == null || i(S);
        }),
        (d.current = y);
    }, [n, a, r, s, o, i, t]),
    g = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    ya(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            g();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var tj = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function nj(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var vp = he(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: g,
      ...y
    } = t,
    S = r !== void 0 || o !== void 0,
    b = u != null || c || !S,
    p = ej({ ...t, crossOrigin: d, ignoreFallback: b }),
    h = tj(p, f),
    m = {
      ref: n,
      objectFit: l,
      objectPosition: s,
      ...(b ? y : nj(y, ["onError", "onLoad"])),
    };
  return h
    ? o ||
        C.jsx(W.img, {
          as: yf,
          className: "chakra-image__placeholder",
          src: r,
          ...m,
        })
    : C.jsx(W.img, {
        as: yf,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: g,
        className: "chakra-image",
        ...m,
      });
});
vp.displayName = "Image";
function rj(e) {
  return T.Children.toArray(e).filter((t) => T.isValidElement(t));
}
var [qL, oj] = Bn({ strict: !1, name: "ButtonGroupContext" });
function ij(e) {
  const [t, n] = T.useState(!e);
  return {
    ref: T.useCallback((i) => {
      i && n(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function Sf(e) {
  const { children: t, className: n, ...r } = e,
    o = T.isValidElement(t)
      ? T.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = We("chakra-button__icon", n);
  return C.jsx(W.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
Sf.displayName = "ButtonIcon";
function bf(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: o = C.jsx(fp, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = We("chakra-button__spinner", i),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = T.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, r]
    );
  return C.jsx(W.div, { className: l, ...s, __css: c, children: o });
}
bf.displayName = "ButtonSpinner";
var Kn = he((e, t) => {
  const n = oj(),
    r = Kr("Button", { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: g,
      spinnerPlacement: y = "start",
      className: S,
      as: b,
      ...p
    } = fn(e),
    h = T.useMemo(() => {
      const A = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: A }),
      };
    }, [r, n]),
    { ref: m, type: k } = ij(b),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return C.jsxs(W.button, {
    ref: ZD(t, m),
    as: b,
    type: f ?? k,
    "data-active": de(a),
    "data-loading": de(i),
    __css: h,
    className: We("chakra-button", S),
    ...p,
    disabled: o || i,
    children: [
      i &&
        y === "start" &&
        C.jsx(bf, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: g,
        }),
      i
        ? c || C.jsx(W.span, { opacity: 0, children: C.jsx(Sv, { ...P }) })
        : C.jsx(Sv, { ...P }),
      i &&
        y === "end" &&
        C.jsx(bf, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: g,
        }),
    ],
  });
});
Kn.displayName = "Button";
function Sv(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return C.jsxs(C.Fragment, {
    children: [
      t && C.jsx(Sf, { marginEnd: o, children: t }),
      r,
      n && C.jsx(Sf, { marginStart: o, children: n }),
    ],
  });
}
var gw = he((e, t) => {
  const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e,
    s = n || r,
    l = T.isValidElement(s)
      ? T.cloneElement(s, { "aria-hidden": !0, focusable: !1 })
      : null;
  return C.jsx(Kn, {
    padding: "0",
    borderRadius: o ? "full" : void 0,
    ref: t,
    "aria-label": i,
    ...a,
    children: l,
  });
});
gw.displayName = "IconButton";
var [aj, sj] = Bn({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [lj, yp] = Bn({ strict: !1, name: "FormControlContext" });
function uj(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...a
    } = e,
    s = T.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, g] = T.useState(!1),
    [y, S] = T.useState(!1),
    [b, p] = T.useState(!1),
    h = T.useCallback(
      (E = {}, R = null) => ({
        id: d,
        ...E,
        ref: Nl(R, (L) => {
          L && S(!0);
        }),
      }),
      [d]
    ),
    m = T.useCallback(
      (E = {}, R = null) => ({
        ...E,
        ref: R,
        "data-focus": de(b),
        "data-disabled": de(o),
        "data-invalid": de(r),
        "data-readonly": de(i),
        id: E.id !== void 0 ? E.id : u,
        htmlFor: E.htmlFor !== void 0 ? E.htmlFor : l,
      }),
      [l, o, b, r, i, u]
    ),
    k = T.useCallback(
      (E = {}, R = null) => ({
        id: c,
        ...E,
        ref: Nl(R, (L) => {
          L && g(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = T.useCallback(
      (E = {}, R = null) => ({
        ...E,
        ...a,
        ref: R,
        role: "group",
        "data-focus": de(b),
        "data-disabled": de(o),
        "data-invalid": de(r),
        "data-readonly": de(i),
      }),
      [a, o, b, r, i]
    ),
    A = T.useCallback(
      (E = {}, R = null) => ({
        ...E,
        ref: R,
        role: "presentation",
        "aria-hidden": !0,
        children: E.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!b,
    onFocus: () => p(!0),
    onBlur: () => p(!1),
    hasFeedbackText: f,
    setHasFeedbackText: g,
    hasHelpText: y,
    setHasHelpText: S,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: k,
    getRootProps: P,
    getLabelProps: m,
    getRequiredIndicatorProps: A,
  };
}
var cj = he(function (t, n) {
  const r = _u("Form", t),
    o = fn(t),
    { getRootProps: i, htmlProps: a, ...s } = uj(o),
    l = We("chakra-form-control", t.className);
  return C.jsx(lj, {
    value: s,
    children: C.jsx(aj, {
      value: r,
      children: C.jsx(W.div, { ...i({}, n), className: l, __css: r.container }),
    }),
  });
});
cj.displayName = "FormControl";
var dj = he(function (t, n) {
  const r = yp(),
    o = sj(),
    i = We("chakra-form__helper-text", t.className);
  return C.jsx(W.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
dj.displayName = "FormHelperText";
function fj(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = hj(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Mo(n),
    "aria-required": Mo(o),
    "aria-readonly": Mo(r),
  };
}
function hj(e) {
  var t, n, r;
  const o = yp(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: g,
      onBlur: y,
      ...S
    } = e,
    b = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o != null &&
      o.hasFeedbackText &&
      o != null &&
      o.isInvalid &&
      b.push(o.feedbackId),
    o != null && o.hasHelpText && b.push(o.helpTextId),
    {
      ...S,
      "aria-describedby": b.join(" ") || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: Rt(o == null ? void 0 : o.onFocus, g),
      onBlur: Rt(o == null ? void 0 : o.onBlur, y),
    }
  );
}
var pj = () => typeof document < "u",
  bv = !1,
  Na = null,
  qr = !1,
  wf = !1,
  xf = new Set();
function Sp(e, t) {
  xf.forEach((n) => n(e, t));
}
var mj =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function gj(e) {
  return !(
    e.metaKey ||
    (!mj && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function wv(e) {
  (qr = !0), gj(e) && ((Na = "keyboard"), Sp("keyboard", e));
}
function eo(e) {
  if (((Na = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    qr = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(":focus-visible");
    } catch {}
    if (n) return;
    Sp("pointer", e);
  }
}
function vj(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function yj(e) {
  vj(e) && ((qr = !0), (Na = "virtual"));
}
function Sj(e) {
  e.target === window ||
    e.target === document ||
    (!qr && !wf && ((Na = "virtual"), Sp("virtual", e)), (qr = !1), (wf = !1));
}
function bj() {
  (qr = !1), (wf = !0);
}
function xv() {
  return Na !== "pointer";
}
function wj() {
  if (!pj() || bv) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (qr = !0), e.apply(this, n);
  }),
    document.addEventListener("keydown", wv, !0),
    document.addEventListener("keyup", wv, !0),
    document.addEventListener("click", yj, !0),
    window.addEventListener("focus", Sj, !0),
    window.addEventListener("blur", bj, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", eo, !0),
        document.addEventListener("pointermove", eo, !0),
        document.addEventListener("pointerup", eo, !0))
      : (document.addEventListener("mousedown", eo, !0),
        document.addEventListener("mousemove", eo, !0),
        document.addEventListener("mouseup", eo, !0)),
    (bv = !0);
}
function xj(e) {
  wj(), e(xv());
  const t = () => e(xv());
  return (
    xf.add(t),
    () => {
      xf.delete(t);
    }
  );
}
var bp = he(function (t, n) {
  const { htmlSize: r, ...o } = t,
    i = _u("Input", o),
    a = fn(o),
    s = fj(a),
    l = We("chakra-input", t.className);
  return C.jsx(W.input, {
    size: r,
    ...s,
    __css: i.field,
    ref: n,
    className: l,
  });
});
bp.displayName = "Input";
bp.id = "Input";
var kf = he(function (t, n) {
  const r = Kr("Link", t),
    { className: o, isExternal: i, ...a } = fn(t);
  return C.jsx(W.a, {
    target: i ? "_blank" : void 0,
    rel: i ? "noopener" : void 0,
    ref: n,
    className: We("chakra-link", o),
    ...a,
    __css: r,
  });
});
kf.displayName = "Link";
var vw = he(function (t, n) {
  const {
      templateAreas: r,
      gap: o,
      rowGap: i,
      columnGap: a,
      column: s,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: g,
      ...y
    } = t,
    S = {
      display: "grid",
      gridTemplateAreas: r,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: a,
      gridAutoColumns: f,
      gridColumn: s,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: g,
    };
  return C.jsx(W.div, { ref: n, __css: S, ...y });
});
vw.displayName = "Grid";
function wp(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : ht(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
var yw = he(function (t, n) {
  const {
      columns: r,
      spacingX: o,
      spacingY: i,
      spacing: a,
      minChildWidth: s,
      ...l
    } = t,
    u = sS(),
    c = s ? Cj(s, u) : Tj(r);
  return C.jsx(vw, {
    ref: n,
    gap: a,
    columnGap: o,
    rowGap: i,
    templateColumns: c,
    ...l,
  });
});
yw.displayName = "SimpleGrid";
function kj(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function Cj(e, t) {
  return wp(e, (n) => {
    const r = MT("sizes", n, kj(n))(t);
    return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function Tj(e) {
  return wp(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
var Jo = he(function (t, n) {
  const r = Kr("Text", t),
    { className: o, align: i, decoration: a, casing: s, ...l } = fn(t),
    u = BR({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return C.jsx(W.p, {
    ref: n,
    className: We("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
Jo.displayName = "Text";
var Sw = (e) =>
  C.jsx(W.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
Sw.displayName = "StackItem";
function Pj(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": wp(n, (o) => r[o]) };
}
var xp = he((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: o,
      justify: i,
      spacing: a = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    g = n ? "row" : r ?? "column",
    y = T.useMemo(() => Pj({ spacing: a, direction: g }), [a, g]),
    S = !!u,
    b = !d && !S,
    p = T.useMemo(() => {
      const m = rj(l);
      return b
        ? m
        : m.map((k, P) => {
            const A = typeof k.key < "u" ? k.key : P,
              E = P + 1 === m.length,
              L = d ? C.jsx(Sw, { children: k }, A) : k;
            if (!S) return L;
            const j = T.cloneElement(u, { __css: y }),
              ee = E ? null : j;
            return C.jsxs(T.Fragment, { children: [L, ee] }, A);
          });
    }, [u, y, S, b, d, l]),
    h = We("chakra-stack", c);
  return C.jsx(W.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: g,
    flexWrap: s,
    gap: S ? void 0 : a,
    className: h,
    ...f,
    children: p,
  });
});
xp.displayName = "Stack";
var kp = he(function (t, n) {
  const r = Kr("Heading", t),
    { className: o, ...i } = fn(t);
  return C.jsx(W.h2, {
    ref: n,
    className: We("chakra-heading", t.className),
    ...i,
    __css: r,
  });
});
kp.displayName = "Heading";
var hr = W("div");
hr.displayName = "Box";
var bw = he(function (t, n) {
  const { size: r, centerContent: o = !0, ...i } = t,
    a = o
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return C.jsx(hr, {
    ref: n,
    boxSize: r,
    __css: { ...a, flexShrink: 0, flexGrow: 0 },
    ...i,
  });
});
bw.displayName = "Square";
var _j = he(function (t, n) {
  const { size: r, ...o } = t;
  return C.jsx(bw, { size: r, ref: n, borderRadius: "9999px", ...o });
});
_j.displayName = "Circle";
var Fo = he(function (t, n) {
  const {
      direction: r,
      align: o,
      justify: i,
      wrap: a,
      basis: s,
      grow: l,
      shrink: u,
      ...c
    } = t,
    d = {
      display: "flex",
      flexDirection: r,
      alignItems: o,
      justifyContent: i,
      flexWrap: a,
      flexBasis: s,
      flexGrow: l,
      flexShrink: u,
    };
  return C.jsx(W.div, { ref: n, __css: d, ...c });
});
Fo.displayName = "Flex";
var ww = W("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
});
ww.displayName = "CircularProgressLabel";
var Cf = (e) =>
  C.jsx(W.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...e });
Cf.displayName = "Circle";
function Ej(e, t, n) {
  return ((e - t) * 100) / (n - t);
}
var Aj = Da({
    "0%": { strokeDasharray: "1, 400", strokeDashoffset: "0" },
    "50%": { strokeDasharray: "400, 400", strokeDashoffset: "-100" },
    "100%": { strokeDasharray: "400, 400", strokeDashoffset: "-260" },
  }),
  Rj = Da({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  });
Da({ "0%": { left: "-40%" }, "100%": { left: "100%" } });
Da({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" },
});
function $j(e) {
  const {
      value: t = 0,
      min: n,
      max: r,
      valueText: o,
      getValueText: i,
      isIndeterminate: a,
      role: s = "progressbar",
    } = e,
    l = Ej(t, n, r);
  return {
    bind: {
      "data-indeterminate": a ? "" : void 0,
      "aria-valuemax": r,
      "aria-valuemin": n,
      "aria-valuenow": a ? void 0 : t,
      "aria-valuetext": (() => {
        if (t != null) return typeof i == "function" ? i(t, l) : o;
      })(),
      role: s,
    },
    percent: l,
    value: t,
  };
}
var xw = (e) => {
  const { size: t, isIndeterminate: n, ...r } = e;
  return C.jsx(W.svg, {
    viewBox: "0 0 100 100",
    __css: {
      width: t,
      height: t,
      animation: n ? `${Rj} 2s linear infinite` : void 0,
    },
    ...r,
  });
};
xw.displayName = "Shape";
var kw = he((e, t) => {
  var n;
  const {
      size: r = "48px",
      max: o = 100,
      min: i = 0,
      valueText: a,
      getValueText: s,
      value: l,
      capIsRound: u,
      children: c,
      thickness: d = "10px",
      color: f = "#0078d4",
      trackColor: g = "#edebe9",
      isIndeterminate: y,
      ...S
    } = e,
    b = $j({
      min: i,
      max: o,
      value: l,
      valueText: a,
      getValueText: s,
      isIndeterminate: y,
    }),
    p = y ? void 0 : ((n = b.percent) != null ? n : 0) * 2.64,
    h = p == null ? void 0 : `${p} ${264 - p}`,
    m = y
      ? { css: { animation: `${Aj} 1.5s linear infinite` } }
      : {
          strokeDashoffset: 66,
          strokeDasharray: h,
          transitionProperty: "stroke-dasharray, stroke",
          transitionDuration: "0.6s",
          transitionTimingFunction: "ease",
        },
    k = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: r,
    };
  return C.jsxs(W.div, {
    ref: t,
    className: "chakra-progress",
    ...b.bind,
    ...S,
    __css: k,
    children: [
      C.jsxs(xw, {
        size: r,
        isIndeterminate: y,
        children: [
          C.jsx(Cf, {
            stroke: g,
            strokeWidth: d,
            className: "chakra-progress__track",
          }),
          C.jsx(Cf, {
            stroke: f,
            strokeWidth: d,
            className: "chakra-progress__indicator",
            strokeLinecap: u ? "round" : void 0,
            opacity: b.value === 0 && !y ? 0 : void 0,
            ...m,
          }),
        ],
      }),
      c,
    ],
  });
});
kw.displayName = "CircularProgress";
function Mj(e) {
  return e && ht(e) && ht(e.target);
}
function zj(e = {}) {
  const {
      onChange: t,
      value: n,
      defaultValue: r,
      name: o,
      isDisabled: i,
      isFocusable: a,
      isNative: s,
      ...l
    } = e,
    [u, c] = T.useState(r || ""),
    d = typeof n < "u",
    f = d ? n : u,
    g = T.useRef(null),
    y = T.useCallback(() => {
      const P = g.current;
      if (!P) return;
      let A = "input:not(:disabled):checked";
      const E = P.querySelector(A);
      if (E) {
        E.focus();
        return;
      }
      A = "input:not(:disabled)";
      const R = P.querySelector(A);
      R == null || R.focus();
    }, []),
    b = `radio-${T.useId()}`,
    p = o || b,
    h = T.useCallback(
      (P) => {
        const A = Mj(P) ? P.target.value : P;
        d || c(A), t == null || t(String(A));
      },
      [t, d]
    ),
    m = T.useCallback(
      (P = {}, A = null) => ({ ...P, ref: Nl(A, g), role: "radiogroup" }),
      []
    ),
    k = T.useCallback(
      (P = {}, A = null) => ({
        ...P,
        ref: A,
        name: p,
        [s ? "checked" : "isChecked"]: f != null ? P.value === f : void 0,
        onChange(R) {
          h(R);
        },
        "data-radiogroup": !0,
      }),
      [s, p, h, f]
    );
  return {
    getRootProps: m,
    getRadioProps: k,
    name: p,
    ref: g,
    focus: y,
    setValue: c,
    value: f,
    onChange: h,
    isDisabled: i,
    isFocusable: a,
    htmlProps: l,
  };
}
var [Dj, Cw] = Bn({ name: "RadioGroupContext", strict: !1 }),
  Tw = he((e, t) => {
    const {
        colorScheme: n,
        size: r,
        variant: o,
        children: i,
        className: a,
        isDisabled: s,
        isFocusable: l,
        ...u
      } = e,
      { value: c, onChange: d, getRootProps: f, name: g, htmlProps: y } = zj(u),
      S = T.useMemo(
        () => ({
          name: g,
          size: r,
          onChange: d,
          colorScheme: n,
          value: c,
          variant: o,
          isDisabled: s,
          isFocusable: l,
        }),
        [g, r, d, n, c, o, s, l]
      );
    return C.jsx(Dj, {
      value: S,
      children: C.jsx(W.div, {
        ...f(y, t),
        className: We("chakra-radio-group", a),
        children: i,
      }),
    });
  });
Tw.displayName = "RadioGroup";
var jj = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute",
};
function Lj(e = {}) {
  const {
      defaultChecked: t,
      isChecked: n,
      isFocusable: r,
      isDisabled: o,
      isReadOnly: i,
      isRequired: a,
      onChange: s,
      isInvalid: l,
      name: u,
      value: c,
      id: d,
      "data-radiogroup": f,
      "aria-describedby": g,
      ...y
    } = e,
    S = `radio-${T.useId()}`,
    b = yp(),
    h = !!Cw() || !!f;
  let k = !!b && !h ? b.id : S;
  k = d ?? k;
  const P = o ?? (b == null ? void 0 : b.isDisabled),
    A = i ?? (b == null ? void 0 : b.isReadOnly),
    E = a ?? (b == null ? void 0 : b.isRequired),
    R = l ?? (b == null ? void 0 : b.isInvalid),
    [L, j] = T.useState(!1),
    [ee, Ze] = T.useState(!1),
    [et, _t] = T.useState(!1),
    [ve, ke] = T.useState(!1),
    [Ot, M] = T.useState(!!t),
    V = typeof n < "u",
    O = V ? n : Ot;
  T.useEffect(() => xj(j), []);
  const ae = T.useCallback(
      (re) => {
        if (A || P) {
          re.preventDefault();
          return;
        }
        V || M(re.target.checked), s == null || s(re);
      },
      [V, P, A, s]
    ),
    ye = T.useCallback(
      (re) => {
        re.key === " " && ke(!0);
      },
      [ke]
    ),
    U = T.useCallback(
      (re) => {
        re.key === " " && ke(!1);
      },
      [ke]
    ),
    mt = T.useCallback(
      (re = {}, Qt = null) => ({
        ...re,
        ref: Qt,
        "data-active": de(ve),
        "data-hover": de(et),
        "data-disabled": de(P),
        "data-invalid": de(R),
        "data-checked": de(O),
        "data-focus": de(ee),
        "data-focus-visible": de(ee && L),
        "data-readonly": de(A),
        "aria-hidden": !0,
        onMouseDown: Rt(re.onMouseDown, () => ke(!0)),
        onMouseUp: Rt(re.onMouseUp, () => ke(!1)),
        onMouseEnter: Rt(re.onMouseEnter, () => _t(!0)),
        onMouseLeave: Rt(re.onMouseLeave, () => _t(!1)),
      }),
      [ve, et, P, R, O, ee, A, L]
    ),
    { onFocus: In, onBlur: He } = b ?? {},
    hn = T.useCallback(
      (re = {}, Qt = null) => {
        const Ha = P && !r;
        return {
          ...re,
          id: k,
          ref: Qt,
          type: "radio",
          name: u,
          value: c,
          onChange: Rt(re.onChange, ae),
          onBlur: Rt(He, re.onBlur, () => Ze(!1)),
          onFocus: Rt(In, re.onFocus, () => Ze(!0)),
          onKeyDown: Rt(re.onKeyDown, ye),
          onKeyUp: Rt(re.onKeyUp, U),
          checked: O,
          disabled: Ha,
          readOnly: A,
          required: E,
          "aria-invalid": Mo(R),
          "aria-disabled": Mo(Ha),
          "aria-required": Mo(E),
          "data-readonly": de(A),
          "aria-describedby": g,
          style: jj,
        };
      },
      [P, r, k, u, c, ae, He, In, ye, U, O, A, E, R, g]
    );
  return {
    state: {
      isInvalid: R,
      isFocused: ee,
      isChecked: O,
      isActive: ve,
      isHovered: et,
      isDisabled: P,
      isReadOnly: A,
      isRequired: E,
    },
    getCheckboxProps: mt,
    getRadioProps: mt,
    getInputProps: hn,
    getLabelProps: (re = {}, Qt = null) => ({
      ...re,
      ref: Qt,
      onMouseDown: Rt(re.onMouseDown, Fj),
      "data-disabled": de(P),
      "data-checked": de(O),
      "data-invalid": de(R),
    }),
    getRootProps: (re, Qt = null) => ({
      ...re,
      ref: Qt,
      "data-disabled": de(P),
      "data-checked": de(O),
      "data-invalid": de(R),
    }),
    htmlProps: y,
  };
}
function Fj(e) {
  e.preventDefault(), e.stopPropagation();
}
function Bj(e, t) {
  const n = {},
    r = {};
  for (const [o, i] of Object.entries(e))
    t.includes(o) ? (n[o] = i) : (r[o] = i);
  return [n, r];
}
var Pw = he((e, t) => {
  var n;
  const r = Cw(),
    { onChange: o, value: i } = e,
    a = _u("Radio", { ...r, ...e }),
    s = fn(e),
    {
      spacing: l = "0.5rem",
      children: u,
      isDisabled: c = r == null ? void 0 : r.isDisabled,
      isFocusable: d = r == null ? void 0 : r.isFocusable,
      inputProps: f,
      ...g
    } = s;
  let y = e.isChecked;
  (r == null ? void 0 : r.value) != null && i != null && (y = r.value === i);
  let S = o;
  r != null && r.onChange && i != null && (S = DT(r.onChange, o));
  const b =
      (n = e == null ? void 0 : e.name) != null
        ? n
        : r == null
        ? void 0
        : r.name,
    {
      getInputProps: p,
      getCheckboxProps: h,
      getLabelProps: m,
      getRootProps: k,
      htmlProps: P,
    } = Lj({
      ...g,
      isChecked: y,
      isFocusable: d,
      isDisabled: c,
      onChange: S,
      name: b,
    }),
    [A, E] = Bj(P, BP),
    R = h(E),
    L = p(f, t),
    j = m(),
    ee = Object.assign({}, A, k()),
    Ze = {
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "top",
      cursor: "pointer",
      position: "relative",
      ...a.container,
    },
    et = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      ...a.control,
    },
    _t = { userSelect: "none", marginStart: l, ...a.label };
  return C.jsxs(W.label, {
    className: "chakra-radio",
    ...ee,
    __css: Ze,
    children: [
      C.jsx("input", { className: "chakra-radio__input", ...L }),
      C.jsx(W.span, { className: "chakra-radio__control", ...R, __css: et }),
      u &&
        C.jsx(W.span, {
          className: "chakra-radio__label",
          ...j,
          __css: _t,
          children: u,
        }),
    ],
  });
});
Pw.displayName = "Radio";
const Ij = ({ movie: e, onSelect: t }) =>
    C.jsxs(hr, {
      maxW: "200px",
      borderWidth: "1px",
      borderRadius: "lg",
      overflow: "hidden",
      onClick: t,
      cursor: "pointer",
      _hover: { transform: "scale(1.05)", transition: "0.2s" },
      children: [
        C.jsx(vp, { src: e.imageUrl, alt: e.title }),
        C.jsx(hr, {
          p: "4",
          children: C.jsx(xp, {
            align: "center",
            children: C.jsx(Jo, {
              fontSize: "lg",
              fontWeight: "bold",
              children: e.title,
            }),
          }),
        }),
      ],
    }),
  Oj = "./stranger-things-_uimUwos.webp",
  Vj = "./the-dark-knight-B946aXL6.jpg",
  Nj = "./friends-BtMqUfFb.jpg",
  Wj = "./got-DA3QrwRg.jpg",
  Hj = "./himym-CtwUKnWm.jpg",
  qj = "./tbbt-C6ciWuzA.jpg",
  Uj = "./bb-BhXQacbH.jpg",
  Gj = "./pnr-B7EVtLDb.jpg",
  Kj = "./rickmorty-BmJtIP1Z.jpg",
  Yj = "./seinfeld-BsdifJxQ.jpg",
  Jj = "./theoffice-BaI_X4Hq.jpg",
  Qj = "./dots-RY9W4TCu.jpg",
  Xj = "./alchemy-CggwCeqb.jpg",
  Zj = "./kingtheland-OoFIj5mz.jpg",
  eL = "./squid-DPpNwmc1.jpg",
  tL = "./goblin-wqiA5uE_.jpg",
  nL = "./oknotok-BwYLBcil.jpg",
  rL = "./vincenzo-CtcqjVIJ.jpg",
  oL = "./businessproposal-Di-fc8o8.jpg",
  Fe = {
    bb: Uj,
    "stranger-things": Oj,
    "the-dark-knight": Vj,
    friends: Nj,
    got: Wj,
    himym: Hj,
    tbbt: qj,
    pnr: Gj,
    rickmorty: Kj,
    seinfeld: Yj,
    theoffice: Jj,
    dots: Qj,
    alchemy: Xj,
    kingtheland: Zj,
    squid: eL,
    goblin: tL,
    oknotok: nL,
    vincenzo: rL,
    businessproposal: oL,
  },
  iL = [
    {
      question: "What is Walter White's alias?",
      options: ["Heisenberg", "Gus", "Saul", "Hank"],
      answer: "Heisenberg",
    },
    {
      question: "Who was Walter White’s first partner in the meth business?",
      options: [
        "Jesse Pinkman",
        "Gus Fring",
        "Mike Ehrmantraut",
        "Tuco Salamanca",
      ],
      answer: "Jesse Pinkman",
    },
    {
      question: "What type of car does Walter White primarily drive?",
      options: [
        "Pontiac Aztek",
        "Dodge Charger",
        "Chevrolet Monte Carlo",
        "Toyota Tercel",
      ],
      answer: "Pontiac Aztek",
    },
    {
      question: "What is the name of Saul Goodman's bodyguard?",
      options: ["Huell", "Kuby", "Mike", "Todd"],
      answer: "Huell",
    },
    {
      question: "What does the acronym 'ABQ' stand for in the show?",
      options: [
        "Albuquerque",
        "American BBQ",
        "Alaska Business Quarter",
        "Arizona Bank",
      ],
      answer: "Albuquerque",
    },
    {
      question: "Who is the owner of Los Pollos Hermanos?",
      options: [
        "Gus Fring",
        "Tuco Salamanca",
        "Lydia Rodarte-Quayle",
        "Hector Salamanca",
      ],
      answer: "Gus Fring",
    },
    {
      question:
        "What is the name of the DEA agent who is Walter White's brother-in-law?",
      options: [
        "Hank Schrader",
        "Steve Gomez",
        "Mike Ehrmantraut",
        "Gale Boetticher",
      ],
      answer: "Hank Schrader",
    },
    {
      question:
        "What is the blue meth's purity percentage that Walter White produces?",
      options: ["99.1%", "95%", "90%", "80%"],
      answer: "99.1%",
    },
    {
      question: "Who kills Gale Boetticher?",
      options: ["Jesse Pinkman", "Walter White", "Gus Fring", "Hank Schrader"],
      answer: "Jesse Pinkman",
    },
    {
      question: "What is the name of the car wash that Walter White buys?",
      options: [
        "A1A Car Wash",
        "Sunshine Car Wash",
        "Crystal Clean Car Wash",
        "White's Car Wash",
      ],
      answer: "A1A Car Wash",
    },
    {
      question: "What object does Walter use to kill Krazy-8?",
      options: ["A bike lock", "A gun", "A knife", "Poison"],
      answer: "A bike lock",
    },
    {
      question:
        "What chemical element does Walter White use to start a fire in 'Crazy Handful of Nothin'?",
      options: ["Mercury", "Magnesium", "Phosphorus", "Lithium"],
      answer: "Phosphorus",
    },
  ],
  aL = [
    {
      question: "Who sits on the Iron Throne at the end of Game of Thrones?",
      options: [
        "Daenerys Targaryen",
        "Jon Snow",
        "Bran Stark",
        "Tyrion Lannister",
      ],
      answer: "Bran Stark",
    },
    {
      question: "What is the name of Arya Stark's sword?",
      options: ["Needle", "Oathkeeper", "Longclaw", "Ice"],
      answer: "Needle",
    },
    {
      question: "Who kills the Night King?",
      options: ["Jon Snow", "Bran Stark", "Arya Stark", "Daenerys Targaryen"],
      answer: "Arya Stark",
    },
    {
      question: "What is the ancestral home of House Stark?",
      options: ["Winterfell", "King's Landing", "The Eyrie", "Casterly Rock"],
      answer: "Winterfell",
    },
    {
      question: "Who is known as the 'Mother of Dragons'?",
      options: [
        "Daenerys Targaryen",
        "Cersei Lannister",
        "Sansa Stark",
        "Melisandre",
      ],
      answer: "Daenerys Targaryen",
    },
    {
      question:
        "Which character is known for saying, 'You know nothing, Jon Snow'?",
      options: ["Ygritte", "Arya Stark", "Catelyn Stark", "Brienne of Tarth"],
      answer: "Ygritte",
    },
    {
      question: "What is the motto of House Lannister?",
      options: [
        "Hear Me Roar",
        "Winter is Coming",
        "Fire and Blood",
        "We Do Not Sow",
      ],
      answer: "Hear Me Roar",
    },
    {
      question: "Who is the eldest Stark child?",
      options: ["Robb Stark", "Jon Snow", "Sansa Stark", "Arya Stark"],
      answer: "Robb Stark",
    },
    {
      question: "Who kills King Joffrey?",
      options: [
        "Olenna Tyrell",
        "Tyrion Lannister",
        "Sansa Stark",
        "Jaime Lannister",
      ],
      answer: "Olenna Tyrell",
    },
    {
      question: "Which house's sigil is a direwolf?",
      options: [
        "House Stark",
        "House Lannister",
        "House Targaryen",
        "House Baratheon",
      ],
      answer: "House Stark",
    },
    {
      question: "What is the name of Jon Snow's direwolf?",
      options: ["Ghost", "Nymeria", "Summer", "Shaggydog"],
      answer: "Ghost",
    },
  ],
  sL = [
    {
      question:
        "What is the name of the bar where the group frequently hangs out?",
      options: [
        "MacLaren's Pub",
        "Puzzles",
        "Central Perk",
        "The Drunken Clam",
      ],
      answer: "MacLaren's Pub",
    },
    {
      question: "Who is known for saying, 'Suit up!'?",
      options: [
        "Barney Stinson",
        "Ted Mosby",
        "Marshall Eriksen",
        "Robin Scherbatsky",
      ],
      answer: "Barney Stinson",
    },
    {
      question: "What is the name of Ted's architecture firm?",
      options: [
        "Mosbius Designs",
        "GNB Architects",
        "Stinson Enterprises",
        "Mosby & Co.",
      ],
      answer: "Mosbius Designs",
    },
    {
      question: "Who does Barney marry?",
      options: ["Robin Scherbatsky", "Nora", "Quinn", "Patrice"],
      answer: "Robin Scherbatsky",
    },
    {
      question: "What instrument does Ted's future wife play?",
      options: ["Bass Guitar", "Violin", "Piano", "Trumpet"],
      answer: "Bass Guitar",
    },
    {
      question: "What is the name of the playbook Barney uses?",
      options: [
        "The Playbook",
        "The Bro Code",
        "The Legendary Book",
        "Suit Up Guide",
      ],
      answer: "The Playbook",
    },
    {
      question: "What is Robin's pop star alter ego's stage name?",
      options: [
        "Robin Sparkles",
        "Robin Daggers",
        "Jessica Glitter",
        "Tiffany",
      ],
      answer: "Robin Sparkles",
    },
    {
      question:
        "Which character is obsessed with finding the best burger in New York?",
      options: [
        "Marshall Eriksen",
        "Ted Mosby",
        "Barney Stinson",
        "Lily Aldrin",
      ],
      answer: "Marshall Eriksen",
    },
    {
      question: "Where did Ted meet the Mother?",
      options: [
        "At the Farhampton train station",
        "MacLaren's Pub",
        "In a class",
        "At a wedding",
      ],
      answer: "At the Farhampton train station",
    },
    {
      question: "What is the nickname given to Barney's brother James?",
      options: ["J-Dawg", "Jimmy the Stinson", "Swarlos", "Big Daddy James"],
      answer: "Swarlos",
    },
    {
      question: "What is the name of Lily and Marshall’s first child?",
      options: ["Marvin", "Daisy", "Penny", "Luke"],
      answer: "Marvin",
    },
  ],
  lL = [
    {
      question: "What is the name of Ross's first wife?",
      options: ["Carol", "Rachel", "Emily", "Susan"],
      answer: "Carol",
    },
    {
      question: "What is Chandler Bing's middle name?",
      options: ["Muriel", "Matthew", "Michael", "Marcel"],
      answer: "Muriel",
    },
    {
      question:
        "What is the name of the coffee shop where the friends frequently hang out?",
      options: ["Central Perk", "Monk's Café", "Java Joe's", "The Beanery"],
      answer: "Central Perk",
    },
    {
      question: "Which character famously said, 'We were on a break!'?",
      options: ["Ross", "Rachel", "Chandler", "Joey"],
      answer: "Ross",
    },
    {
      question: "What is the name of Joey's stuffed penguin?",
      options: ["Hugsy", "Waddle", "Flipper", "Snowball"],
      answer: "Hugsy",
    },
    {
      question: "What is the profession of Ross Geller?",
      options: ["Paleontologist", "Chef", "Actor", "Data Analyst"],
      answer: "Paleontologist",
    },
    {
      question: "Who was Monica’s first kiss?",
      options: ["Ross", "Chandler", "Joey", "Richard"],
      answer: "Ross",
    },
    {
      question: "What is the name of Phoebe’s most famous song?",
      options: [
        "Smelly Cat",
        "Sticky Shoes",
        "Terrible Mistress",
        "Little Black Curly Hair",
      ],
      answer: "Smelly Cat",
    },
    {
      question: "Which character has a twin sister named Ursula?",
      options: ["Phoebe", "Monica", "Rachel", "Janice"],
      answer: "Phoebe",
    },
    {
      question: "What is the name of the holiday armadillo?",
      options: ["Ross", "Chandler", "Joey", "Monica"],
      answer: "Ross",
    },
    {
      question: "What are the names of Monica and Chandler’s twins?",
      options: [
        "Erica and Jack",
        "Ben and Emma",
        "Frank Jr. Jr. and Leslie",
        "Michael and Amanda",
      ],
      answer: "Erica and Jack",
    },
  ],
  uL = [
    {
      question: "What is Sheldon's catchphrase?",
      options: ["Bazinga!", "Eureka!", "Gotcha!", "Boom!"],
      answer: "Bazinga!",
    },
    {
      question: "What is the name of Sheldon's roommate?",
      options: ["Leonard", "Raj", "Howard", "Stuart"],
      answer: "Leonard",
    },
    {
      question: "What is the name of the comic book store owner?",
      options: ["Stuart", "Barry", "Bert", "Wil"],
      answer: "Stuart",
    },
    {
      question: "Which character is an astronaut?",
      options: ["Howard", "Raj", "Leonard", "Sheldon"],
      answer: "Howard",
    },
    {
      question:
        "What is the name of Sheldon's girlfriend who later becomes his wife?",
      options: ["Amy", "Penny", "Bernadette", "Leslie"],
      answer: "Amy",
    },
    {
      question:
        "Which character has selective mutism and struggles to speak to women?",
      options: ["Raj", "Howard", "Leonard", "Sheldon"],
      answer: "Raj",
    },
    {
      question: "What is Sheldon's favorite number?",
      options: ["73", "42", "7", "21"],
      answer: "73",
    },
    {
      question: "What kind of engineer is Howard Wolowitz?",
      options: [
        "Aerospace Engineer",
        "Electrical Engineer",
        "Mechanical Engineer",
        "Chemical Engineer",
      ],
      answer: "Aerospace Engineer",
    },
    {
      question: "What is the name of Leonard's mother?",
      options: ["Beverly", "Mary", "Debbie", "Emily"],
      answer: "Beverly",
    },
    {
      question: "What song does Sheldon like to be sung when he’s sick?",
      options: [
        "Soft Kitty",
        "Twinkle Twinkle Little Star",
        "Rock-a-bye Baby",
        "Mary Had a Little Lamb",
      ],
      answer: "Soft Kitty",
    },
    {
      question: "Which character is known for their obsession with Star Wars?",
      options: ["Sheldon", "Leonard", "Howard", "Raj"],
      answer: "Sheldon",
    },
  ],
  cL = [
    {
      question:
        "What is the name of the town where 'Parks and Recreation' is set?",
      options: ["Pawnee", "Scranton", "Eagleton", "Dunder Mifflin"],
      answer: "Pawnee",
    },
    {
      question:
        "Who is the director of the Parks and Recreation Department at the start of the series?",
      options: ["Ron Swanson", "Leslie Knope", "Chris Traeger", "Ben Wyatt"],
      answer: "Ron Swanson",
    },
    {
      question: "What is Leslie Knope's favorite food?",
      options: ["Waffles", "Pancakes", "Burgers", "Pizza"],
      answer: "Waffles",
    },
    {
      question: "What is the name of Tom Haverford's business venture?",
      options: [
        "Rent-A-Swag",
        "Entertainment 720",
        "Snakehole Lounge",
        "Tom's Bistro",
      ],
      answer: "Rent-A-Swag",
    },
    {
      question: "Who does Leslie Knope marry?",
      options: ["Ben Wyatt", "Ron Swanson", "Tom Haverford", "Andy Dwyer"],
      answer: "Ben Wyatt",
    },
    {
      question:
        "Which character is known for their love of breakfast food and disdain for government?",
      options: ["Ron Swanson", "April Ludgate", "Andy Dwyer", "Tom Haverford"],
      answer: "Ron Swanson",
    },
    {
      question: "What is the name of Andy Dwyer’s band?",
      options: ["Mouse Rat", "Rat Mouse", "Scarecrow Boat", "Demon Llama"],
      answer: "Mouse Rat",
    },
    {
      question:
        "What holiday do Leslie and Ben invent to celebrate their friends?",
      options: [
        "Galentine's Day",
        "Treat Yo' Self Day",
        "Pawnee Appreciation Day",
        "Harvest Festival",
      ],
      answer: "Galentine's Day",
    },
    {
      question:
        "Which character is famous for the catchphrase 'Treat Yo' Self'?",
      options: [
        "Tom Haverford and Donna Meagle",
        "Leslie Knope and Ann Perkins",
        "Ron Swanson and April Ludgate",
        "Ben Wyatt and Chris Traeger",
      ],
      answer: "Tom Haverford and Donna Meagle",
    },
    {
      question: "Who becomes the mayor of Pawnee at the end of the series?",
      options: ["Garry Gergich", "Leslie Knope", "Ben Wyatt", "Tom Haverford"],
      answer: "Garry Gergich",
    },
    {
      question: "What was Ben Wyatt's nickname when he was a teen mayor?",
      options: ["Ice Town", "Little Mayor", "Ice King", "Mayor Benji"],
      answer: "Ice Town",
    },
  ],
  dL = [
    {
      question:
        "What is the name of the coffee shop where the main characters frequently hang out?",
      options: [
        "Monk's Café",
        "Central Perk",
        "Reggie's Diner",
        "Tom's Restaurant",
      ],
      answer: "Monk's Café",
    },
    {
      question:
        "What item of clothing does Jerry often wear that causes problems in the episode 'The Puffy Shirt'?",
      options: [
        "A puffy shirt",
        "A velvet suit",
        "A pirate hat",
        "A leather jacket",
      ],
      answer: "A puffy shirt",
    },
    {
      question: "What is Kramer's first name?",
      options: ["Cosmo", "George", "Newman", "Art"],
      answer: "Cosmo",
    },
    {
      question: "What is George Costanza's biggest fear?",
      options: ["Getting fired", "Clowns", "Commitment", "Flying"],
      answer: "Commitment",
    },
    {
      question:
        "Which character is known for the catchphrase, 'No soup for you!'?",
      options: ["The Soup Nazi", "Jerry", "George", "Newman"],
      answer: "The Soup Nazi",
    },
    {
      question:
        "What is the name of Elaine's on-and-off boss at the J. Peterman catalog?",
      options: ["J. Peterman", "Mr. Pitt", "Mr. Lippman", "Mr. Kruger"],
      answer: "J. Peterman",
    },
    {
      question: "What holiday does George’s father, Frank Costanza, invent?",
      options: ["Festivus", "Yada Yada Day", "The Human Fund", "Costanza Day"],
      answer: "Festivus",
    },
    {
      question:
        "What is the name of Jerry’s nemesis who lives in his building?",
      options: ["Newman", "Kramer", "Banya", "Peterman"],
      answer: "Newman",
    },
    {
      question:
        "What does Elaine famously say is her favorite part of a muffin?",
      options: ["The top", "The bottom", "The wrapper", "The whole thing"],
      answer: "The top",
    },
    {
      question:
        "What does Kramer try to create in his apartment, leading to major problems?",
      options: [
        "A hot tub",
        "A chicken coop",
        "A sushi restaurant",
        "A smoking lounge",
      ],
      answer: "A hot tub",
    },
    {
      question:
        "What is the name of the movie that Jerry and his friends can never seem to see?",
      options: [
        "Rochelle, Rochelle",
        "Prognosis Negative",
        "Death Blow",
        "CheckMate",
      ],
      answer: "Rochelle, Rochelle",
    },
  ],
  fL = [
    {
      question:
        "What is the name of the company where the main characters work?",
      options: [
        "Dunder Mifflin",
        "Wernham Hogg",
        "Scranton Paper",
        "Vance Refrigeration",
      ],
      answer: "Dunder Mifflin",
    },
    {
      question:
        "Who is the Regional Manager of the Scranton branch at the start of the series?",
      options: [
        "Michael Scott",
        "Jim Halpert",
        "Dwight Schrute",
        "Andy Bernard",
      ],
      answer: "Michael Scott",
    },
    {
      question: "What is the name of Michael Scott's movie?",
      options: [
        "Threat Level Midnight",
        "Lazy Scranton",
        "Scott's Tots",
        "Goldenface",
      ],
      answer: "Threat Level Midnight",
    },
    {
      question: "What is Dwight's cousin's name?",
      options: ["Mose", "Rolf", "Zeke", "Jeb"],
      answer: "Mose",
    },
    {
      question: "What is the name of Pam and Jim’s first child?",
      options: ["Cecelia", "Philip", "Astrid", "Angela"],
      answer: "Cecelia",
    },
    {
      question:
        "What is the title of the regional manager Michael Scott's self-help book?",
      options: [
        "Somehow I Manage",
        "The Best Boss",
        "World's Best Boss",
        "Management Tips",
      ],
      answer: "Somehow I Manage",
    },
    {
      question: "Who starts the fire in the office?",
      options: ["Ryan Howard", "Dwight Schrute", "Michael Scott", "Pam Beesly"],
      answer: "Ryan Howard",
    },
    {
      question:
        "What is the name of the annual awards ceremony hosted by Michael?",
      options: [
        "The Dundies",
        "The Scranties",
        "The Scotties",
        "The Dunder Awards",
      ],
      answer: "The Dundies",
    },
    {
      question: "What is Creed Bratton's job title?",
      options: ["Quality Assurance", "Salesman", "Receptionist", "Accountant"],
      answer: "Quality Assurance",
    },
    {
      question: "What does Jim put in Jell-O as a prank?",
      options: [
        "Dwight's stapler",
        "Michael's mug",
        "Creed's keys",
        "Pam's phone",
      ],
      answer: "Dwight's stapler",
    },
    {
      question: "What song does Michael and his nephews perform at the office?",
      options: [
        "Hey Mr. Scott",
        "Lazy Scranton",
        "The Office Theme",
        "Feliz Navidad",
      ],
      answer: "Lazy Scranton",
    },
  ],
  hL = [
    {
      question: "What is the name of Rick's portal gun invention?",
      options: [
        "Portal Gun",
        "Time Gun",
        "Dimension Blaster",
        "Wormhole Device",
      ],
      answer: "Portal Gun",
    },
    {
      question: "What is the name of Rick's catchphrase?",
      options: [
        "Wubba Lubba Dub Dub!",
        "Oh Geez!",
        "Pickle Rick!",
        "Get Schwifty!",
      ],
      answer: "Wubba Lubba Dub Dub!",
    },
    {
      question: "Which dimension is the main Rick and Morty from?",
      options: ["C-137", "J-19", "K-42", "Z-99"],
      answer: "C-137",
    },
    {
      question: "What is the name of Rick's daughter?",
      options: ["Beth", "Summer", "Jessica", "Tammy"],
      answer: "Beth",
    },
    {
      question: "Who is Morty's crush at school?",
      options: ["Jessica", "Summer", "Tammy", "Beth"],
      answer: "Jessica",
    },
    {
      question: "What does Rick turn himself into in a popular episode?",
      options: ["A pickle", "A robot", "A cat", "A cucumber"],
      answer: "A pickle",
    },
    {
      question: "What is the name of Morty's sister?",
      options: ["Summer", "Jessica", "Beth", "Tammy"],
      answer: "Summer",
    },
    {
      question: "Who is Birdperson's arch-enemy?",
      options: ["Phoenixperson", "Evil Morty", "Tammy", "Mr. Nimbus"],
      answer: "Phoenixperson",
    },
    {
      question: "What does Mr. Meeseeks help people do?",
      options: [
        "Solve problems",
        "Fix portals",
        "Rule dimensions",
        "Cook meals",
      ],
      answer: "Solve problems",
    },
    {
      question:
        "What is the name of the theme park inside a homeless man created by Rick?",
      options: ["Anatomy Park", "Funland", "Microverse", "Dino World"],
      answer: "Anatomy Park",
    },
    {
      question: "Who is the President of the Citadel of Ricks?",
      options: ["Evil Morty", "Rick C-137", "Rick Prime", "Birdperson"],
      answer: "Evil Morty",
    },
  ],
  pL = [
    {
      question:
        "What is the profession of Yoo Si-jin, the main male character?",
      options: ["Soldier", "Doctor", "Journalist", "Engineer"],
      answer: "Soldier",
    },
    {
      question:
        "What is the name of the special forces unit led by Yoo Si-jin?",
      options: ["Alpha Team", "Bravo Squad", "Delta Force", "Gamma Unit"],
      answer: "Alpha Team",
    },
    {
      question:
        "What is the name of the fictional country where much of the drama takes place?",
      options: ["Urk", "Iraq", "Malgoria", "Agriya"],
      answer: "Urk",
    },
    {
      question: "Who is Kang Mo-yeon?",
      options: ["A doctor", "A soldier", "A journalist", "A teacher"],
      answer: "A doctor",
    },
    {
      question:
        "What event brings Yoo Si-jin and Kang Mo-yeon back together after their initial separation?",
      options: [
        "A medical mission",
        "A charity event",
        "A peace summit",
        "A training exercise",
      ],
      answer: "A medical mission",
    },
    {
      question:
        "What natural disaster strikes the fictional country of Urk during the series?",
      options: ["Earthquake", "Flood", "Tsunami", "Hurricane"],
      answer: "Earthquake",
    },
    {
      question: "What is the name of the second lead couple in the drama?",
      options: [
        "Seo Dae-young and Yoon Myung-ju",
        "Yoo Si-jin and Kang Mo-yeon",
        "Kim Ji-hoon and Park Hye-soo",
        "Lee Chi-hoon and Ha Ja-ae",
      ],
      answer: "Seo Dae-young and Yoon Myung-ju",
    },
    {
      question: "Who is the commander of the medical team in Urk?",
      options: [
        "Doctor Song Sang-hyun",
        "Doctor Kang Mo-yeon",
        "Doctor Ha Ja-ae",
        "Doctor Lee Chi-hoon",
      ],
      answer: "Doctor Kang Mo-yeon",
    },
    {
      question: "What item does Yoo Si-jin use to propose to Kang Mo-yeon?",
      options: ["A diamond ring", "A necklace", "A scarf", "A watch"],
      answer: "A diamond ring",
    },
    {
      question:
        "What nickname does Yoo Si-jin frequently use for Kang Mo-yeon?",
      options: ["Beauty", "Doctor", "Ace", "Boss"],
      answer: "Beauty",
    },
    {
      question:
        "What promise does Yoo Si-jin make to Kang Mo-yeon at the end of the series?",
      options: [
        "To stay by her side",
        "To quit the military",
        "To move to Urk",
        "To start a family",
      ],
      answer: "To stay by her side",
    },
  ],
  mL = [
    {
      question: "What is the central theme of 'Alchemy of Souls'?",
      options: [
        "Alchemy and magic",
        "Time travel",
        "Political intrigue",
        "Romance and drama",
      ],
      answer: "Alchemy and magic",
    },
    {
      question: "Who is the main protagonist in the series?",
      options: ["Jang Uk", "Naksu", "Mu-deok", "Seo Yul"],
      answer: "Jang Uk",
    },
    {
      question: "What is Naksu’s main goal in the series?",
      options: [
        "Revenge",
        "Finding a lost artifact",
        "Restoring her powers",
        "Gaining political power",
      ],
      answer: "Restoring her powers",
    },
    {
      question:
        "Which character is a skilled mage and also the love interest of Jang Uk?",
      options: ["Mu-deok", "Naksu", "Seo Yul", "Park Dang-gu"],
      answer: "Mu-deok",
    },
    {
      question:
        "What is the name of the powerful magical item that plays a crucial role in the series?",
      options: [
        "The Soul Shard",
        "The Philosopher's Stone",
        "The Alchemist's Ring",
        "The Moonlight Pearl",
      ],
      answer: "The Moonlight Pearl",
    },
    {
      question:
        "Which character is known for his skills in martial arts and magic, and becomes a mentor to Jang Uk?",
      options: ["Seo Yul", "Park Dang-gu", "Heo Yeom", "Choi Jung-won"],
      answer: "Heo Yeom",
    },
    {
      question: "What does Jang Uk seek to achieve throughout the series?",
      options: [
        "Mastery of alchemy",
        "Vengeance against enemies",
        "Finding his true identity",
        "Restoring his family's honor",
      ],
      answer: "Restoring his family's honor",
    },
    {
      question:
        "Who is the leader of the rival faction that poses a significant threat to Jang Uk and his allies?",
      options: [
        "The Black Mage",
        "The Dark Sorcerer",
        "The Shadow King",
        "The Grand Alchemist",
      ],
      answer: "The Black Mage",
    },
    {
      question:
        "What magical ability does Mu-deok possess that is central to the plot?",
      options: [
        "Shape-shifting",
        "Teleportation",
        "Elemental control",
        "Soul swapping",
      ],
      answer: "Soul swapping",
    },
    {
      question: "What is the primary setting of 'Alchemy of Souls'?",
      options: [
        "A mystical kingdom",
        "A modern city",
        "An ancient temple",
        "A hidden village",
      ],
      answer: "A mystical kingdom",
    },
    {
      question:
        "Which character is known for their involvement in political machinations and hidden agendas?",
      options: ["Seo Yul", "Naksu", "Jang Uk", "The Royal Advisor"],
      answer: "The Royal Advisor",
    },
  ],
  gL = [
    {
      question: "What is the main setting of 'King the Land'?",
      options: [
        "A royal palace",
        "A modern city",
        "A historical kingdom",
        "A luxury resort",
      ],
      answer: "A luxury resort",
    },
    {
      question: "Who is the main male character in 'King the Land'?",
      options: ["Lee Seong-ju", "Choi Jae-hyun", "Jang Min-ho", "Kim Jin-woo"],
      answer: "Lee Seong-ju",
    },
    {
      question:
        "What is the profession of the main female character, who plays a significant role in the series?",
      options: ["Hotelier", "Chef", "Actress", "Businesswoman"],
      answer: "Hotelier",
    },
    {
      question:
        "Which character is known for their ambitious plans to improve the resort?",
      options: ["Lee Seong-ju", "Jang Min-ho", "Choi Jae-hyun", "Kim Jin-woo"],
      answer: "Lee Seong-ju",
    },
    {
      question:
        "What challenge does the main female character face at the beginning of the series?",
      options: [
        "Personal debt",
        "Family scandal",
        "Job insecurity",
        "Romantic entanglements",
      ],
      answer: "Job insecurity",
    },
    {
      question:
        "What is the name of the luxury resort featured prominently in the series?",
      options: [
        "King's Haven",
        "Royal Retreat",
        "King's Resort",
        "Palace Hotel",
      ],
      answer: "King's Resort",
    },
    {
      question: "Who is Lee Seong-ju's rival in the series?",
      options: ["Jang Min-ho", "Choi Jae-hyun", "Kim Jin-woo", "Park Hyun-sik"],
      answer: "Jang Min-ho",
    },
    {
      question: "What is the primary focus of the series' plot?",
      options: [
        "Corporate intrigue",
        "Family drama",
        "Romantic relationships",
        "Historical events",
      ],
      answer: "Corporate intrigue",
    },
    {
      question:
        "What personal quality is Lee Seong-ju known for in his approach to managing the resort?",
      options: ["Charisma", "Persistence", "Innovation", "Diplomacy"],
      answer: "Innovation",
    },
    {
      question:
        "Which character provides significant support to Lee Seong-ju throughout the series?",
      options: ["Choi Jae-hyun", "Jang Min-ho", "Kim Jin-woo", "Seo Ji-hye"],
      answer: "Choi Jae-hyun",
    },
  ],
  vL = [
    {
      question:
        "What is the main character's name in 'Goblin' who is also known as the Goblin?",
      options: ["Kim Shin", "Wang Yeo", "Lee Dong-wook", "Joo Seong-ha"],
      answer: "Kim Shin",
    },
    {
      question: "What is the curse that Kim Shin suffers from in the series?",
      options: ["Immortality", "Amnesia", "Poverty", "Isolation"],
      answer: "Immortality",
    },
    {
      question: "Who is the Goblin's bride, destined to end his immortality?",
      options: ["Ji Eun-tak", "Kim Go-eun", "Wang Yeo", "Yoo Deok-hwa"],
      answer: "Ji Eun-tak",
    },
    {
      question:
        "What is the name of the Grim Reaper in the series who is a key character?",
      options: ["Wang Yeo", "Kim Shin", "Deok-hwa", "The King"],
      answer: "Wang Yeo",
    },
    {
      question: "What is the profession of Ji Eun-tak?",
      options: ["High school student", "College student", "Teacher", "Singer"],
      answer: "High school student",
    },
    {
      question:
        "What significant event happens to Ji Eun-tak on her 19th birthday?",
      options: [
        "She meets the Goblin",
        "She finds a hidden treasure",
        "She moves to a new city",
        "She receives a magical power",
      ],
      answer: "She meets the Goblin",
    },
    {
      question:
        "Who is the Goblin's loyal servant and also a powerful figure in his own right?",
      options: ["Deok-hwa", "Grim Reaper", "Sunny", "The King"],
      answer: "Deok-hwa",
    },
    {
      question:
        "What is the name of the Goblin's love interest, who also happens to be a supernatural being?",
      options: ["Sunny", "Ji Eun-tak", "Wang Yeo", "The Queen"],
      answer: "Sunny",
    },
    {
      question: "What item is crucial to breaking the Goblin's curse?",
      options: [
        "A magical sword",
        "A special ring",
        "A book of spells",
        "A destined bride",
      ],
      answer: "A destined bride",
    },
    {
      question:
        "What does Wang Yeo (the Grim Reaper) struggle with throughout the series?",
      options: [
        "His lost memories",
        "His immortality",
        "His love for Sunny",
        "His role in the afterlife",
      ],
      answer: "His lost memories",
    },
  ],
  yL = [
    {
      question:
        "What is the profession of the main female character, Moon Gang-tae?",
      options: [
        "Children’s book author",
        "Psychiatric nurse",
        "Artist",
        "Teacher",
      ],
      answer: "Children’s book author",
    },
    {
      question:
        "What mental health condition does Moon Gang-tae's brother, Moon Sang-tae, have?",
      options: [
        "Autism Spectrum Disorder",
        "Depression",
        "Bipolar Disorder",
        "Anxiety Disorder",
      ],
      answer: "Autism Spectrum Disorder",
    },
    {
      question:
        "What is the name of the psychiatric hospital where much of the story takes place?",
      options: [
        "OK Psychiatric Hospital",
        "Healing Garden",
        "Happy Life Clinic",
        "Sunshine Mental Health Center",
      ],
      answer: "OK Psychiatric Hospital",
    },
    {
      question:
        "Who is the main male lead in the series, who is also a caregiver and works in the psychiatric hospital?",
      options: ["Moon Gang-tae", "Kim Soo-hyun", "Oh Ji-ho", "Lee Joon-gi"],
      answer: "Moon Gang-tae",
    },
    {
      question:
        "What is the name of the main female lead, who is also a famous writer with a troubled past?",
      options: ["Ko Moon-young", "Kim Ji-won", "Choi Ji-eun", "Yoon Ji-woo"],
      answer: "Ko Moon-young",
    },
    {
      question:
        "What traumatic event from her past significantly affects Ko Moon-young's behavior and relationships?",
      options: ["Abuse", "Neglect", "Family tragedy", "Bullying"],
      answer: "Family tragedy",
    },
    {
      question: "What is the title of Ko Moon-young’s bestselling book?",
      options: [
        "The Wonderful Wizard",
        "The King’s Ransom",
        "The Prisoner of Love",
        "The Kingdom of Dreams",
      ],
      answer: "The Kingdom of Dreams",
    },
    {
      question:
        "Who helps Ko Moon-young deal with her traumatic past and complex emotions?",
      options: ["Moon Gang-tae", "Moon Sang-tae", "Dr. Oh Jung-se", "Dr. Lee"],
      answer: "Moon Gang-tae",
    },
    {
      question:
        "What unique feature does the character Moon Sang-tae have that is central to his role in the story?",
      options: [
        "He is an illustrator",
        "He has a special talent",
        "He is a well-known actor",
        "He has a fear of butterflies",
      ],
      answer: "He has a fear of butterflies",
    },
    {
      question:
        "What is the central message of the series regarding mental health and healing?",
      options: [
        "Acceptance and understanding",
        "Isolation and self-reliance",
        "Overcoming trauma through success",
        "Avoiding professional help",
      ],
      answer: "Acceptance and understanding",
    },
  ],
  SL = [
    {
      question: "What is Vincenzo Cassano's profession?",
      options: ["Lawyer", "Doctor", "Architect", "Detective"],
      answer: "Lawyer",
    },
    {
      question:
        "In which country was Vincenzo Cassano raised before returning to Korea?",
      options: ["Italy", "United States", "Japan", "France"],
      answer: "Italy",
    },
    {
      question:
        "What is the name of the corrupt conglomerate that Vincenzo battles against?",
      options: [
        "The Babel Group",
        "The Han Corporation",
        "The Jang Group",
        "The Sun Group",
      ],
      answer: "The Babel Group",
    },
    {
      question:
        "Who is the main female lead who partners with Vincenzo in his legal battles?",
      options: [
        "Hong Cha-young",
        "Jang Joo-sung",
        "Kim Seok-joo",
        "Choi Myung-hee",
      ],
      answer: "Hong Cha-young",
    },
    {
      question:
        "What type of building is the main setting for much of the series?",
      options: [
        "A law firm",
        "A high-rise apartment",
        "A law office",
        "A rooftop garden",
      ],
      answer: "A high-rise apartment",
    },
    {
      question: "What is Vincenzo's main objective upon returning to Korea?",
      options: [
        "To recover stolen gold",
        "To find his lost family",
        "To seek revenge",
        "To start a new life",
      ],
      answer: "To recover stolen gold",
    },
    {
      question: "Who is the head of the Babel Group that Vincenzo targets?",
      options: [
        "Jang Joon-woo",
        "Jang Han-seok",
        "Jang Joo-sung",
        "Jang Seung-jae",
      ],
      answer: "Jang Han-seok",
    },
    {
      question:
        "What is the name of the building that Vincenzo uses as his base of operations?",
      options: [
        "Geumga Plaza",
        "Babel Tower",
        "Seonghyeon Plaza",
        "Crown Tower",
      ],
      answer: "Geumga Plaza",
    },
    {
      question:
        "Which character is known for their skills in handling internal affairs within the Babel Group?",
      options: [
        "Jang Han-seok",
        "Choi Myung-hee",
        "Jang Joon-woo",
        "Nam Joo-sung",
      ],
      answer: "Choi Myung-hee",
    },
    {
      question: "What unique method does Vincenzo use to achieve his goals?",
      options: [
        "Legal manipulation",
        "Physical combat",
        "Bribery",
        "Political influence",
      ],
      answer: "Legal manipulation",
    },
  ],
  bL = [
    {
      question: "What is the main premise of 'Squid Game'?",
      options: [
        "A deadly survival game",
        "A high-stakes poker game",
        "A reality TV competition",
        "A corporate takeover",
      ],
      answer: "A deadly survival game",
    },
    {
      question: "What is the name of the character who organizes the games?",
      options: ["The Front Man", "The Host", "The Master", "The Game Maker"],
      answer: "The Front Man",
    },
    {
      question: "Which game is played first in the series?",
      options: [
        "Red Light, Green Light",
        "Tug of War",
        "Marbles",
        "Squid Game",
      ],
      answer: "Red Light, Green Light",
    },
    {
      question:
        "What is the primary motivation for the characters to participate in the games?",
      options: [
        "Winning a large cash prize",
        "Gaining fame",
        "Avoiding criminal charges",
        "Seeking revenge",
      ],
      answer: "Winning a large cash prize",
    },
    {
      question: "Who is the main protagonist of the series?",
      options: [
        "Seong Gi-hun",
        "Cho Sang-woo",
        "Kang Sae-byeok",
        "Hwang Jun-ho",
      ],
      answer: "Seong Gi-hun",
    },
    {
      question:
        "What is the name of the character who is a North Korean defector and participates in the games?",
      options: ["Kang Sae-byeok", "Oh Il-nam", "Jang Deok-su", "Ji-yeong"],
      answer: "Kang Sae-byeok",
    },
    {
      question:
        "What game do players have to play in the second round of the competition?",
      options: ["Honeycomb", "Marbles", "Tug of War", "Glass Bridge"],
      answer: "Honeycomb",
    },
    {
      question: "What role does the character Oh Il-nam play in the series?",
      options: ["A player", "A game designer", "A guard", "A sponsor"],
      answer: "A player",
    },
    {
      question:
        "What is the name of the organization that runs the deadly games?",
      options: [
        "The Game Masters",
        "The Organizers",
        "The VIPs",
        "The Front Man",
      ],
      answer: "The VIPs",
    },
    {
      question: "How does Seong Gi-hun change by the end of the series?",
      options: [
        "He becomes a wealthy businessman",
        "He seeks revenge on the organizers",
        "He becomes a player in the games",
        "He becomes an advocate for the games' victims",
      ],
      answer: "He becomes an advocate for the games' victims",
    },
  ],
  wL = [
    {
      question: "What is the main setting of 'Business Proposal'?",
      options: [
        "A tech company",
        "A food and beverage company",
        "A finance firm",
        "A law office",
      ],
      answer: "A food and beverage company",
    },
    {
      question:
        "What is the name of the main female character who goes undercover to meet her company's CEO?",
      options: ["Shin Ha-ri", "Ahn Hyo-seop", "Kang Tae-moo", "Jung Jae-sang"],
      answer: "Shin Ha-ri",
    },
    {
      question: "Who is the CEO of the company where Shin Ha-ri works?",
      options: ["Kang Tae-moo", "Choi Seung-jae", "Lee Min-ho", "Park Ji-hoon"],
      answer: "Kang Tae-moo",
    },
    {
      question:
        "What is Shin Ha-ri's initial reason for going on a blind date with the CEO?",
      options: [
        "To fulfill a family obligation",
        "To secure a promotion",
        "To escape a matchmaking situation",
        "To investigate a business opportunity",
      ],
      answer: "To escape a matchmaking situation",
    },
    {
      question:
        "What is the primary plot twist in the series regarding Shin Ha-ri’s identity?",
      options: [
        "She is the CEO’s childhood friend",
        "She is the CEO’s business partner",
        "She is the CEO’s long-lost sister",
        "She is an undercover employee",
      ],
      answer: "She is an undercover employee",
    },
    {
      question: "What is Kang Tae-moo’s primary challenge in the series?",
      options: [
        "Dealing with a rival company",
        "Finding a suitable business partner",
        "Managing a family business",
        "Balancing work and personal life",
      ],
      answer: "Managing a family business",
    },
    {
      question: "Who helps Shin Ha-ri with her undercover mission?",
      options: ["Her best friend", "Her boss", "Her brother", "A colleague"],
      answer: "Her best friend",
    },
    {
      question:
        "What is the nature of the business proposal that becomes central to the plot?",
      options: [
        "A merger deal",
        "A new product launch",
        "A marketing campaign",
        "A strategic partnership",
      ],
      answer: "A strategic partnership",
    },
    {
      question:
        "How does the relationship between Shin Ha-ri and Kang Tae-moo evolve throughout the series?",
      options: [
        "From enemies to lovers",
        "From colleagues to partners",
        "From strangers to friends",
        "From rivals to allies",
      ],
      answer: "From strangers to lovers",
    },
    {
      question: "What is the name of the company that Shin Ha-ri works for?",
      options: [
        "Harima Food Co.",
        "Gourmet Solutions",
        "Cheongdam Foods",
        "Beverage Inc.",
      ],
      answer: "Harima Food Co.",
    },
    {
      question: "What role does the character Ahn Hyo-seop play in the series?",
      options: [
        "The CEO’s assistant",
        "The CEO’s rival",
        "Shin Ha-ri’s love interest",
        "The company’s PR manager",
      ],
      answer: "Shin Ha-ri’s love interest",
    },
  ],
  xL = [
    { id: 1, title: "Breaking Bad", imageUrl: Fe.bb, quizData: iL },
    { id: 2, title: "The Big Bang Theory", imageUrl: Fe.tbbt, quizData: uL },
    { id: 3, title: "Game of Thrones", imageUrl: Fe.got, quizData: aL },
    { id: 4, title: "Friends", imageUrl: Fe.friends, quizData: lL },
    { id: 5, title: "How I Met Your Mother", imageUrl: Fe.himym, quizData: sL },
    { id: 6, title: "Parks & Recreation", imageUrl: Fe.pnr, quizData: cL },
    { id: 7, title: "Rick & Morty", imageUrl: Fe.rickmorty, quizData: hL },
    { id: 8, title: "Seinfeld", imageUrl: Fe.seinfeld, quizData: dL },
    { id: 9, title: "The Office", imageUrl: Fe.theoffice, quizData: fL },
    {
      id: 10,
      title: "Descendants of the Sun",
      imageUrl: Fe.dots,
      quizData: pL,
    },
    { id: 11, title: "Alchemy of Souls", imageUrl: Fe.alchemy, quizData: mL },
    { id: 12, title: "King the Land", imageUrl: Fe.kingtheland, quizData: gL },
    { id: 13, title: "Squid Game", imageUrl: Fe.squid, quizData: bL },
    {
      id: 14,
      title: "Business Proposal",
      imageUrl: Fe.businessproposal,
      quizData: wL,
    },
    { id: 15, title: "Goblin", imageUrl: Fe.goblin, quizData: vL },
    {
      id: 16,
      title: "It's Okay to Not Be Okay",
      imageUrl: Fe.oknotok,
      quizData: yL,
    },
    { id: 17, title: "Vincenzo", imageUrl: Fe.vincenzo, quizData: SL },
  ],
  kL = ({ onSelect: e }) => {
    const [t, n] = T.useState(""),
      r = xL.filter((o) => o.title.toLowerCase().includes(t.toLowerCase()));
    return C.jsxs(hr, {
      children: [
        C.jsx(kp, {
          as: "h2",
          size: "md",
          mb: "6",
          textAlign: "center",
          children: "Select Your Favorite TV Show",
        }),
        C.jsx(bp, {
          placeholder: "Search for a TV show or movie...",
          mb: "6",
          value: t,
          onChange: (o) => n(o.target.value),
        }),
        C.jsx(yw, {
          columns: [1, 2, 3],
          spacing: "20px",
          children: r.map((o) =>
            C.jsx(Ij, { movie: o, onSelect: () => e(o) }, o.id)
          ),
        }),
      ],
    });
  };
var _w = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  kv = an.createContext && an.createContext(_w),
  CL = ["attr", "size", "title"];
function TL(e, t) {
  if (e == null) return {};
  var n = PL(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function PL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Wl() {
  return (
    (Wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wl.apply(this, arguments)
  );
}
function Cv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Hl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cv(Object(n), !0).forEach(function (r) {
          _L(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Cv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _L(e, t, n) {
  return (
    (t = EL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function EL(e) {
  var t = AL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AL(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ew(e) {
  return (
    e &&
    e.map((t, n) =>
      an.createElement(t.tag, Hl({ key: n }, t.attr), Ew(t.child))
    )
  );
}
function ni(e) {
  return (t) =>
    an.createElement(RL, Wl({ attr: Hl({}, e.attr) }, t), Ew(e.child));
}
function RL(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      a = TL(e, CL),
      s = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      an.createElement(
        "svg",
        Wl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: l,
            style: Hl(Hl({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && an.createElement("title", null, i),
        e.children
      )
    );
  };
  return kv !== void 0
    ? an.createElement(kv.Consumer, null, (n) => t(n))
    : t(_w);
}
function $L(e) {
  return ni({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function ML(e) {
  return ni({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function zL(e) {
  return ni({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
function DL(e) {
  return ni({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function jL(e) {
  return ni({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function LL(e) {
  return ni({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z",
        },
        child: [],
      },
    ],
  })(e);
}
const FL = ({
    movie: e,
    questions: t,
    selectedAnswer: n,
    onAnswer: r,
    onRestart: o,
    onBack: i,
  }) => {
    const [a, s] = T.useState(0),
      [l, u] = T.useState(0),
      [c, d] = T.useState(!1),
      [f, g] = T.useState(!1),
      [y, S] = T.useState(null),
      b = () => {
        n === t[a].answer ? (u(l + 1), S(!0)) : S(!1),
          g(!0),
          setTimeout(() => {
            g(!1);
            const k = a + 1;
            k < t.length ? (s(k), r("")) : d(!0);
          }, 1e3);
      },
      p = `I scored ${l} out of ${t.length} on the ${e.title} quiz! Try it out!`,
      h = window.location.href,
      m = (k) => {
        let P = "";
        switch (k) {
          case "twitter":
            P = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              p
            )}&url=${encodeURIComponent(h)}`;
            break;
          case "facebook":
            P = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              h
            )}`;
            break;
          case "whatsapp":
            P = `https://api.whatsapp.com/send?text=${encodeURIComponent(
              p + " " + h
            )}`;
            break;
          default:
            return;
        }
        window.open(P, "_blank");
      };
    return C.jsxs(hr, {
      children: [
        C.jsxs(kp, {
          as: "h2",
          size: "md",
          mb: "6",
          textAlign: "center",
          children: [e.title, " Quiz"],
        }),
        c
          ? C.jsxs(C.Fragment, {
              children: [
                C.jsxs(Jo, {
                  fontSize: "xl",
                  mb: "4",
                  children: ["You scored ", l, " out of ", t.length],
                }),
                C.jsxs(Fo, {
                  justifyContent: "center",
                  mb: "4",
                  gap: "4",
                  children: [
                    C.jsx(Kn, {
                      colorScheme: "teal",
                      onClick: o,
                      children: "Restart Quiz",
                    }),
                    C.jsx(Kn, {
                      leftIcon: C.jsx(zL, {}),
                      colorScheme: "twitter",
                      onClick: () => m("twitter"),
                      children: "Share",
                    }),
                    C.jsx(Kn, {
                      leftIcon: C.jsx($L, {}),
                      colorScheme: "facebook",
                      onClick: () => m("facebook"),
                      children: "Share",
                    }),
                    C.jsx(Kn, {
                      leftIcon: C.jsx(DL, {}),
                      colorScheme: "whatsapp",
                      onClick: () => m("whatsapp"),
                      children: "Share",
                    }),
                  ],
                }),
              ],
            })
          : C.jsxs(C.Fragment, {
              children: [
                C.jsx(Fo, {
                  justifyContent: "center",
                  mb: "6",
                  children: C.jsx(kw, {
                    value: ((a + 1) / t.length) * 100,
                    color: "teal.400",
                    size: "120px",
                    children: C.jsxs(ww, { children: [a + 1, "/", t.length] }),
                  }),
                }),
                t[a].image &&
                  C.jsx(vp, {
                    src: t[a].image,
                    alt: "Question Image",
                    mb: "4",
                    borderRadius: "md",
                  }),
                C.jsx(Jo, { fontSize: "lg", mb: "4", children: t[a].question }),
                f &&
                  C.jsxs(gp, {
                    status: y ? "success" : "error",
                    mb: "4",
                    children: [C.jsx(mp, {}), y ? "Correct!" : "Incorrect!"],
                  }),
                C.jsx(Tw, {
                  onChange: r,
                  value: n,
                  children: C.jsx(xp, {
                    direction: "column",
                    children: t[a].options.map((k, P) =>
                      C.jsx(Pw, { value: k, children: k }, P)
                    ),
                  }),
                }),
                C.jsxs(Fo, {
                  justifyContent: "space-between",
                  mt: "4",
                  children: [
                    C.jsx(Kn, {
                      colorScheme: "gray",
                      onClick: i,
                      children: "Back",
                    }),
                    C.jsx(Kn, {
                      colorScheme: "teal",
                      onClick: b,
                      isDisabled: !n,
                      children: a < t.length - 1 ? "Next" : "Submit",
                    }),
                  ],
                }),
              ],
            }),
      ],
    });
  },
  BL = () => {
    const { colorMode: e, toggleColorMode: t } = xu();
    return C.jsx(gw, {
      "aria-label": "Toggle dark mode",
      icon: e === "light" ? C.jsx(jL, {}) : C.jsx(LL, {}),
      onClick: t,
      variant: "ghost",
      position: "fixed",
      top: "1rem",
      right: "1rem",
    });
  },
  IL = () =>
    C.jsx(hr, {
      as: "footer",
      width: "100%",
      py: "4",
      mt: "8",
      borderTop: "1px",
      borderColor: "gray.200",
      children: C.jsxs(Fo, {
        justify: "center",
        align: "center",
        direction: "column",
        children: [
          C.jsxs(Jo, {
            fontSize: "sm",
            children: [
              "Made with ❤️ by",
              " ",
              C.jsx(kf, {
                href: "https://anshulgarg.in",
                isExternal: !0,
                children: "Anshul Garg",
              }),
            ],
          }),
          C.jsx(Jo, { fontSize: "sm", children: "All rights reserved © 2024" }),
          C.jsxs(Fo, {
            align: "center",
            mt: "2",
            children: [
              C.jsx(ML, { style: { marginRight: "8px" } }),
              C.jsx(kf, {
                href: "https://github.com/anshulg8",
                isExternal: !0,
                children: "View on GitHub",
              }),
            ],
          }),
        ],
      }),
    });
function OL() {
  const [e, t] = T.useState(null),
    [n, r] = T.useState(""),
    o = (s) => {
      t(s);
    },
    i = () => {
      t(null), r("");
    },
    a = () => {
      t(null), r("");
    };
  return C.jsxs(hr, {
    maxW: "800px",
    mx: "auto",
    mt: "50px",
    p: "6",
    borderWidth: "1px",
    borderRadius: "lg",
    children: [
      C.jsx(BL, {}),
      e
        ? C.jsx(FL, {
            movie: e,
            questions: e.quizData,
            selectedAnswer: n,
            onAnswer: r,
            onRestart: i,
            onBack: a,
          })
        : C.jsx(kL, { onSelect: o }),
      C.jsx(IL, {}),
    ],
  });
}
const VL = { initialColorMode: "light" },
  Tv = xR({ config: VL });
B1(document.getElementById("root")).render(
  C.jsx(T.StrictMode, {
    children: C.jsxs(QD, {
      theme: Tv,
      children: [
        C.jsx(AT, { initialColorMode: Tv.config.initialColorMode }),
        C.jsx(OL, {}),
      ],
    }),
  })
);
