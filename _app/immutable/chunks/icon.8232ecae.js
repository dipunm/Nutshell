function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$7 = (e2) => (n2) => "function" == typeof n2 ? ((e3, n3) => (customElements.define(e3, n3), n3))(e2, n2) : ((e3, n3) => {
  const { kind: t2, elements: s3 } = n3;
  return { kind: t2, elements: s3, finisher(n4) {
    customElements.define(e3, n4);
  } };
})(e2, n2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$5 = (i3, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
  n2.createProperty(e2.key, i3);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i3);
} }, e$6 = (i3, e2, n2) => {
  e2.constructor.createProperty(n2, i3);
};
function n$6(n2) {
  return (t2, o3) => void 0 !== o3 ? e$6(n2, t2, o3) : i$5(n2, t2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$3(t2) {
  return n$6({ ...t2, state: true });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$5 = ({ finisher: e2, descriptor: t2 }) => (o3, n2) => {
  var r2;
  if (void 0 === n2) {
    const n3 = null !== (r2 = o3.originalKey) && void 0 !== r2 ? r2 : o3.key, i3 = null != t2 ? { kind: "method", placement: "prototype", key: n3, descriptor: t2(o3.key) } : { ...o3, key: n3 };
    return null != e2 && (i3.finisher = function(t3) {
      e2(t3, n3);
    }), i3;
  }
  {
    const r3 = o3.constructor;
    void 0 !== t2 && Object.defineProperty(o3, n2, t2(n2)), null == e2 || e2(r3, n2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$4(i3, n2) {
  return o$5({ descriptor: (o3) => {
    const t2 = { get() {
      var o4, n3;
      return null !== (n3 = null === (o4 = this.renderRoot) || void 0 === o4 ? void 0 : o4.querySelector(i3)) && void 0 !== n3 ? n3 : null;
    }, enumerable: true, configurable: true };
    if (n2) {
      const n3 = "symbol" == typeof o3 ? Symbol() : "__" + o3;
      t2.get = function() {
        var o4, t3;
        return void 0 === this[n3] && (this[n3] = null !== (t3 = null === (o4 = this.renderRoot) || void 0 === o4 ? void 0 : o4.querySelector(i3)) && void 0 !== t3 ? t3 : null), this[n3];
      };
    }
    return t2;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n$5;
const e$5 = null != (null === (n$5 = window.HTMLSlotElement) || void 0 === n$5 ? void 0 : n$5.prototype.assignedElements) ? (o3, n2) => o3.assignedElements(n2) : (o3, n2) => o3.assignedNodes(n2).filter((o4) => o4.nodeType === Node.ELEMENT_NODE);
function l$4(n2) {
  const { slot: l2, selector: t2 } = null != n2 ? n2 : {};
  return o$5({ descriptor: (o3) => ({ get() {
    var o4;
    const r2 = "slot" + (l2 ? `[name=${l2}]` : ":not([name])"), i3 = null === (o4 = this.renderRoot) || void 0 === o4 ? void 0 : o4.querySelector(r2), s3 = null != i3 ? e$5(i3, n2) : [];
    return t2 ? s3.filter((o5) => o5.matches(t2)) : s3;
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = window, e$4 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$4 = Symbol(), n$4 = /* @__PURE__ */ new WeakMap();
let o$4 = class o {
  constructor(t2, e2, n2) {
    if (this._$cssResult$ = true, n2 !== s$4)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s3 = this.t;
    if (e$4 && void 0 === t2) {
      const e2 = void 0 !== s3 && 1 === s3.length;
      e2 && (t2 = n$4.get(s3)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$4.set(s3, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new o$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$4), i$3 = (t2, ...e2) => {
  const n2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s3, n3) => e3 + ((t3) => {
    if (true === t3._$cssResult$)
      return t3.cssText;
    if ("number" == typeof t3)
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s3) + t2[n3 + 1], t2[0]);
  return new o$4(n2, t2, s$4);
}, S$1 = (s3, n2) => {
  e$4 ? s3.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2) => {
    const n3 = document.createElement("style"), o3 = t$2.litNonce;
    void 0 !== o3 && n3.setAttribute("nonce", o3), n3.textContent = e2.cssText, s3.appendChild(n3);
  });
}, c$1 = e$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s3 of t3.cssRules)
    e2 += s3.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$3;
const e$3 = window, r$1 = e$3.trustedTypes, h$1 = r$1 ? r$1.emptyScript : "", o$3 = e$3.reactiveElementPolyfillSupport, n$3 = { toAttribute(t2, i3) {
  switch (i3) {
    case Boolean:
      t2 = t2 ? h$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i3) {
  let s3 = t2;
  switch (i3) {
    case Boolean:
      s3 = null !== t2;
      break;
    case Number:
      s3 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s3 = JSON.parse(t2);
      } catch (t3) {
        s3 = null;
      }
  }
  return s3;
} }, a$2 = (t2, i3) => i3 !== t2 && (i3 == i3 || t2 == t2), l$3 = { attribute: true, type: String, converter: n$3, reflect: false, hasChanged: a$2 }, d$1 = "finalized";
let u$1 = class u extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t2) {
    var i3;
    this.finalize(), (null !== (i3 = this.h) && void 0 !== i3 ? i3 : this.h = []).push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i3, s3) => {
      const e2 = this._$Ep(s3, i3);
      void 0 !== e2 && (this._$Ev.set(e2, s3), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i3 = l$3) {
    if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t2, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s3 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s3, i3);
      void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i3, s3) {
    return { get() {
      return this[i3];
    }, set(e2) {
      const r2 = this[t2];
      this[i3] = e2, this.requestUpdate(t2, r2, s3);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$3;
  }
  static finalize() {
    if (this.hasOwnProperty(d$1))
      return false;
    this[d$1] = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i3 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s3 of i3)
        this.createProperty(s3, t3[s3]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i3) {
    const s3 = [];
    if (Array.isArray(i3)) {
      const e2 = new Set(i3.flat(1 / 0).reverse());
      for (const i4 of e2)
        s3.unshift(c$1(i4));
    } else
      void 0 !== i3 && s3.push(c$1(i3));
    return s3;
  }
  static _$Ep(t2, i3) {
    const s3 = i3.attribute;
    return false === s3 ? void 0 : "string" == typeof s3 ? s3 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  _$Eu() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i3, s3;
    (null !== (i3 = this._$ES) && void 0 !== i3 ? i3 : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s3 = t2.hostConnected) || void 0 === s3 || s3.call(t2));
  }
  removeController(t2) {
    var i3;
    null === (i3 = this._$ES) || void 0 === i3 || i3.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i3) => {
      this.hasOwnProperty(i3) && (this._$Ei.set(i3, this[i3]), delete this[i3]);
    });
  }
  createRenderRoot() {
    var t2;
    const s3 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(s3, this.constructor.elementStyles), s3;
  }
  connectedCallback() {
    var t2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostConnected) || void 0 === i3 ? void 0 : i3.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostDisconnected) || void 0 === i3 ? void 0 : i3.call(t3);
    });
  }
  attributeChangedCallback(t2, i3, s3) {
    this._$AK(t2, s3);
  }
  _$EO(t2, i3, s3 = l$3) {
    var e2;
    const r2 = this.constructor._$Ep(t2, s3);
    if (void 0 !== r2 && true === s3.reflect) {
      const h2 = (void 0 !== (null === (e2 = s3.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s3.converter : n$3).toAttribute(i3, s3.type);
      this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
    }
  }
  _$AK(t2, i3) {
    var s3;
    const e2 = this.constructor, r2 = e2._$Ev.get(t2);
    if (void 0 !== r2 && this._$El !== r2) {
      const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s3 = t3.converter) || void 0 === s3 ? void 0 : s3.fromAttribute) ? t3.converter : n$3;
      this._$El = r2, this[r2] = h2.fromAttribute(i3, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i3, s3) {
    let e2 = true;
    void 0 !== t2 && (((s3 = s3 || this.constructor.getPropertyOptions(t2)).hasChanged || a$2)(this[t2], i3) ? (this._$AL.has(t2) || this._$AL.set(t2, i3), true === s3.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s3))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i4) => this[i4] = t3), this._$Ei = void 0);
    let i3 = false;
    const s3 = this._$AL;
    try {
      i3 = this.shouldUpdate(s3), i3 ? (this.willUpdate(s3), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i4;
        return null === (i4 = t3.hostUpdate) || void 0 === i4 ? void 0 : i4.call(t3);
      }), this.update(s3)) : this._$Ek();
    } catch (t3) {
      throw i3 = false, this._$Ek(), t3;
    }
    i3 && this._$AE(s3);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i3;
    null === (i3 = this._$ES) || void 0 === i3 || i3.forEach((t3) => {
      var i4;
      return null === (i4 = t3.hostUpdated) || void 0 === i4 ? void 0 : i4.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    void 0 !== this._$EC && (this._$EC.forEach((t3, i3) => this._$EO(i3, this[i3], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
u$1[d$1] = true, u$1.elementProperties = /* @__PURE__ */ new Map(), u$1.elementStyles = [], u$1.shadowRootOptions = { mode: "open" }, null == o$3 || o$3({ ReactiveElement: u$1 }), (null !== (s$3 = e$3.reactiveElementVersions) && void 0 !== s$3 ? s$3 : e$3.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;
const i$2 = window, s$2 = i$2.trustedTypes, e$2 = s$2 ? s$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$2 = "$lit$", n$2 = `lit$${(Math.random() + "").slice(9)}$`, l$2 = "?" + n$2, h = `<${l$2}>`, r = document, u2 = () => r.createComment(""), d = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, c = Array.isArray, v = (t2) => c(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), a$1 = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t2) => (i3, ...s3) => ({ _$litType$: t2, strings: i3, values: s3 }), x = w(1), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = /* @__PURE__ */ new WeakMap(), C = r.createTreeWalker(r, 129, null, false);
function P(t2, i3) {
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e$2 ? e$2.createHTML(i3) : i3;
}
const V = (t2, i3) => {
  const s3 = t2.length - 1, e2 = [];
  let l2, r2 = 2 === i3 ? "<svg>" : "", u3 = f;
  for (let i4 = 0; i4 < s3; i4++) {
    const s4 = t2[i4];
    let d2, c2, v2 = -1, a2 = 0;
    for (; a2 < s4.length && (u3.lastIndex = a2, c2 = u3.exec(s4), null !== c2); )
      a2 = u3.lastIndex, u3 === f ? "!--" === c2[1] ? u3 = _ : void 0 !== c2[1] ? u3 = m : void 0 !== c2[2] ? (y.test(c2[2]) && (l2 = RegExp("</" + c2[2], "g")), u3 = p) : void 0 !== c2[3] && (u3 = p) : u3 === p ? ">" === c2[0] ? (u3 = null != l2 ? l2 : f, v2 = -1) : void 0 === c2[1] ? v2 = -2 : (v2 = u3.lastIndex - c2[2].length, d2 = c2[1], u3 = void 0 === c2[3] ? p : '"' === c2[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l2 = void 0);
    const w2 = u3 === p && t2[i4 + 1].startsWith("/>") ? " " : "";
    r2 += u3 === f ? s4 + h : v2 >= 0 ? (e2.push(d2), s4.slice(0, v2) + o$2 + s4.slice(v2) + n$2 + w2) : s4 + n$2 + (-2 === v2 ? (e2.push(void 0), i4) : w2);
  }
  return [P(t2, r2 + (t2[s3] || "<?>") + (2 === i3 ? "</svg>" : "")), e2];
};
class N {
  constructor({ strings: t2, _$litType$: i3 }, e2) {
    let h2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const c2 = t2.length - 1, v2 = this.parts, [a2, f2] = V(t2, i3);
    if (this.el = N.createElement(a2, e2), C.currentNode = this.el.content, 2 === i3) {
      const t3 = this.el.content, i4 = t3.firstChild;
      i4.remove(), t3.append(...i4.childNodes);
    }
    for (; null !== (h2 = C.nextNode()) && v2.length < c2; ) {
      if (1 === h2.nodeType) {
        if (h2.hasAttributes()) {
          const t3 = [];
          for (const i4 of h2.getAttributeNames())
            if (i4.endsWith(o$2) || i4.startsWith(n$2)) {
              const s3 = f2[d2++];
              if (t3.push(i4), void 0 !== s3) {
                const t4 = h2.getAttribute(s3.toLowerCase() + o$2).split(n$2), i5 = /([.?@])?(.*)/.exec(s3);
                v2.push({ type: 1, index: r2, name: i5[2], strings: t4, ctor: "." === i5[1] ? H : "?" === i5[1] ? L : "@" === i5[1] ? z : k });
              } else
                v2.push({ type: 6, index: r2 });
            }
          for (const i4 of t3)
            h2.removeAttribute(i4);
        }
        if (y.test(h2.tagName)) {
          const t3 = h2.textContent.split(n$2), i4 = t3.length - 1;
          if (i4 > 0) {
            h2.textContent = s$2 ? s$2.emptyScript : "";
            for (let s3 = 0; s3 < i4; s3++)
              h2.append(t3[s3], u2()), C.nextNode(), v2.push({ type: 2, index: ++r2 });
            h2.append(t3[i4], u2());
          }
        }
      } else if (8 === h2.nodeType)
        if (h2.data === l$2)
          v2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = h2.data.indexOf(n$2, t3 + 1)); )
            v2.push({ type: 7, index: r2 }), t3 += n$2.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i3) {
    const s3 = r.createElement("template");
    return s3.innerHTML = t2, s3;
  }
}
function S(t2, i3, s3 = t2, e2) {
  var o3, n2, l2, h2;
  if (i3 === T)
    return i3;
  let r2 = void 0 !== e2 ? null === (o3 = s3._$Co) || void 0 === o3 ? void 0 : o3[e2] : s3._$Cl;
  const u3 = d(i3) ? void 0 : i3._$litDirective$;
  return (null == r2 ? void 0 : r2.constructor) !== u3 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === u3 ? r2 = void 0 : (r2 = new u3(t2), r2._$AT(t2, s3, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s3)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s3._$Cl = r2), void 0 !== r2 && (i3 = S(t2, r2._$AS(t2, i3.values), r2, e2)), i3;
}
class M {
  constructor(t2, i3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var i3;
    const { el: { content: s3 }, parts: e2 } = this._$AD, o3 = (null !== (i3 = null == t2 ? void 0 : t2.creationScope) && void 0 !== i3 ? i3 : r).importNode(s3, true);
    C.currentNode = o3;
    let n2 = C.nextNode(), l2 = 0, h2 = 0, u3 = e2[0];
    for (; void 0 !== u3; ) {
      if (l2 === u3.index) {
        let i4;
        2 === u3.type ? i4 = new R(n2, n2.nextSibling, this, t2) : 1 === u3.type ? i4 = new u3.ctor(n2, u3.name, u3.strings, this, t2) : 6 === u3.type && (i4 = new Z(n2, this, t2)), this._$AV.push(i4), u3 = e2[++h2];
      }
      l2 !== (null == u3 ? void 0 : u3.index) && (n2 = C.nextNode(), l2++);
    }
    return C.currentNode = r, o3;
  }
  v(t2) {
    let i3 = 0;
    for (const s3 of this._$AV)
      void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t2, s3, i3), i3 += s3.strings.length - 2) : s3._$AI(t2[i3])), i3++;
  }
}
class R {
  constructor(t2, i3, s3, e2) {
    var o3;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s3, this.options = e2, this._$Cp = null === (o3 = null == e2 ? void 0 : e2.isConnected) || void 0 === o3 || o3;
  }
  get _$AU() {
    var t2, i3;
    return null !== (i3 = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i3 ? i3 : this._$Cp;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === (null == t2 ? void 0 : t2.nodeType) && (t2 = i3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i3 = this) {
    t2 = S(this, t2, i3), d(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.g(t2) : void 0 !== t2.nodeType ? this.$(t2) : v(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    var i3;
    const { values: s3, _$litType$: e2 } = t2, o3 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = N.createElement(P(e2.h, e2.h[0]), this.options)), e2);
    if ((null === (i3 = this._$AH) || void 0 === i3 ? void 0 : i3._$AD) === o3)
      this._$AH.v(s3);
    else {
      const t3 = new M(o3, this), i4 = t3.u(this.options);
      t3.v(s3), this.$(i4), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i3 = E.get(t2.strings);
    return void 0 === i3 && E.set(t2.strings, i3 = new N(t2)), i3;
  }
  T(t2) {
    c(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s3, e2 = 0;
    for (const o3 of t2)
      e2 === i3.length ? i3.push(s3 = new R(this.k(u2()), this.k(u2()), this, this.options)) : s3 = i3[e2], s3._$AI(o3), e2++;
    e2 < i3.length && (this._$AR(s3 && s3._$AB.nextSibling, e2), i3.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i3) {
    var s3;
    for (null === (s3 = this._$AP) || void 0 === s3 || s3.call(this, false, true, i3); t2 && t2 !== this._$AB; ) {
      const i4 = t2.nextSibling;
      t2.remove(), t2 = i4;
    }
  }
  setConnected(t2) {
    var i3;
    void 0 === this._$AM && (this._$Cp = t2, null === (i3 = this._$AP) || void 0 === i3 || i3.call(this, t2));
  }
}
class k {
  constructor(t2, i3, s3, e2, o3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e2, this.options = o3, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i3 = this, s3, e2) {
    const o3 = this.strings;
    let n2 = false;
    if (void 0 === o3)
      t2 = S(this, t2, i3, 0), n2 = !d(t2) || t2 !== this._$AH && t2 !== T, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o3[0], l2 = 0; l2 < o3.length - 1; l2++)
        h2 = S(this, e3[s3 + l2], i3, l2), h2 === T && (h2 = this._$AH[l2]), n2 || (n2 = !d(h2) || h2 !== this._$AH[l2]), h2 === A ? t2 = A : t2 !== A && (t2 += (null != h2 ? h2 : "") + o3[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
const I = s$2 ? s$2.emptyScript : "";
class L extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
}
class z extends k {
  constructor(t2, i3, s3, e2, o3) {
    super(t2, i3, s3, e2, o3), this.type = 5;
  }
  _$AI(t2, i3 = this) {
    var s3;
    if ((t2 = null !== (s3 = S(this, t2, i3, 0)) && void 0 !== s3 ? s3 : A) === T)
      return;
    const e2 = this._$AH, o3 = t2 === A && e2 !== A || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== A && (e2 === A || o3);
    o3 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i3, s3;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s3 = null === (i3 = this.options) || void 0 === i3 ? void 0 : i3.host) && void 0 !== s3 ? s3 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i3, s3) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
}
const B = i$2.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t$1 = i$2.litHtmlVersions) && void 0 !== t$1 ? t$1 : i$2.litHtmlVersions = []).push("2.8.0");
const D = (t2, i3, s3) => {
  var e2, o3;
  const n2 = null !== (e2 = null == s3 ? void 0 : s3.renderBefore) && void 0 !== e2 ? e2 : i3;
  let l2 = n2._$litPart$;
  if (void 0 === l2) {
    const t3 = null !== (o3 = null == s3 ? void 0 : s3.renderBefore) && void 0 !== o3 ? o3 : null;
    n2._$litPart$ = l2 = new R(i3.insertBefore(u2(), t3), t3, void 0, null != s3 ? s3 : {});
  }
  return l2._$AI(t2), l2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1, o$1;
let s$1 = class s extends u$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i3 = super.createRenderRoot();
    return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i3.firstChild), i3;
  }
  update(t2) {
    const i3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(i3, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
  }
  render() {
    return T;
  }
};
s$1.finalized = true, s$1._$litElement$ = true, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, { LitElement: s$1 });
const n$1 = globalThis.litElementPolyfillSupport;
null == n$1 || n$1({ LitElement: s$1 });
(null !== (o$1 = globalThis.litElementVersions) && void 0 !== o$1 ? o$1 : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
let i$1 = class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i3) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i3;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o2 = e$1(class extends i$1 {
  constructor(t$12) {
    var i3;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || (null === (i3 = t$12.strings) || void 0 === i3 ? void 0 : i3.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i3) => t2[i3]).join(" ") + " ";
  }
  update(i3, [s3]) {
    var r2, o3;
    if (void 0 === this.it) {
      this.it = /* @__PURE__ */ new Set(), void 0 !== i3.strings && (this.nt = new Set(i3.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in s3)
        s3[t2] && !(null === (r2 = this.nt) || void 0 === r2 ? void 0 : r2.has(t2)) && this.it.add(t2);
      return this.render(s3);
    }
    const e2 = i3.element.classList;
    this.it.forEach((t2) => {
      t2 in s3 || (e2.remove(t2), this.it.delete(t2));
    });
    for (const t2 in s3) {
      const i4 = !!s3[t2];
      i4 === this.it.has(t2) || (null === (o3 = this.nt) || void 0 === o3 ? void 0 : o3.has(t2)) || (i4 ? (e2.add(t2), this.it.add(t2)) : (e2.remove(t2), this.it.delete(t2)));
    }
    return T;
  }
});
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ATTACHABLE_CONTROLLER = Symbol("attachableController");
let FOR_ATTRIBUTE_OBSERVER;
{
  FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
    var _a2;
    for (const record of records) {
      (_a2 = record.target[ATTACHABLE_CONTROLLER]) == null ? void 0 : _a2.hostConnected();
    }
  });
}
class AttachableController {
  get htmlFor() {
    return this.host.getAttribute("for");
  }
  set htmlFor(htmlFor) {
    if (htmlFor === null) {
      this.host.removeAttribute("for");
    } else {
      this.host.setAttribute("for", htmlFor);
    }
  }
  get control() {
    if (this.host.hasAttribute("for")) {
      if (!this.htmlFor || !this.host.isConnected) {
        return null;
      }
      return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
    }
    return this.currentControl || this.host.parentElement;
  }
  set control(control) {
    if (control) {
      this.attach(control);
    } else {
      this.detach();
    }
  }
  /**
   * Creates a new controller for an `Attachable` element.
   *
   * @param host The `Attachable` element.
   * @param onControlChange A callback with two parameters for the previous and
   *     next control. An `Attachable` element may perform setup or teardown
   *     logic whenever the control changes.
   */
  constructor(host, onControlChange) {
    this.host = host;
    this.onControlChange = onControlChange;
    this.currentControl = null;
    host.addController(this);
    host[ATTACHABLE_CONTROLLER] = this;
    FOR_ATTRIBUTE_OBSERVER == null ? void 0 : FOR_ATTRIBUTE_OBSERVER.observe(host, { attributeFilter: ["for"] });
  }
  attach(control) {
    if (control === this.currentControl) {
      return;
    }
    this.setCurrentControl(control);
    this.host.removeAttribute("for");
  }
  detach() {
    this.setCurrentControl(null);
    this.host.setAttribute("for", "");
  }
  /** @private */
  hostConnected() {
    this.setCurrentControl(this.control);
  }
  /** @private */
  hostDisconnected() {
    this.setCurrentControl(null);
  }
  setCurrentControl(control) {
    this.onControlChange(this.currentControl, control);
    this.currentControl = control;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const EASING = {
  STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
  STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
  STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
  EMPHASIZED: "cubic-bezier(.3,0,0,1)",
  EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
  EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
};
function createAnimationSignal() {
  let animationAbortController = null;
  return {
    start() {
      animationAbortController == null ? void 0 : animationAbortController.abort();
      animationAbortController = new AbortController();
      return animationAbortController.signal;
    },
    finish() {
      animationAbortController = null;
    }
  };
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = "::after";
const ANIMATION_FILL = "forwards";
var State;
(function(State2) {
  State2[State2["INACTIVE"] = 0] = "INACTIVE";
  State2[State2["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
  State2[State2["HOLDING"] = 2] = "HOLDING";
  State2[State2["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
const EVENTS$1 = [
  "click",
  "contextmenu",
  "pointercancel",
  "pointerdown",
  "pointerenter",
  "pointerleave",
  "pointerup"
];
const TOUCH_DELAY_MS = 150;
class Ripple extends s$1 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.hovered = false;
    this.pressed = false;
    this.rippleSize = "";
    this.rippleScale = "";
    this.initialSize = 0;
    this.state = State.INACTIVE;
    this.checkBoundsAfterContextMenu = false;
    this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(htmlFor) {
    this.attachableController.htmlFor = htmlFor;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(control) {
    this.attachableController.control = control;
  }
  attach(control) {
    this.attachableController.attach(control);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-hidden", "true");
  }
  render() {
    const classes = {
      "hovered": this.hovered,
      "pressed": this.pressed
    };
    return x`<div class="surface ${o2(classes)}"></div>`;
  }
  update(changedProps) {
    if (changedProps.has("disabled") && this.disabled) {
      this.hovered = false;
      this.pressed = false;
    }
    super.update(changedProps);
  }
  /**
   * TODO(b/269799771): make private
   * @private only public for slider
   */
  handlePointerenter(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.hovered = true;
  }
  /**
   * TODO(b/269799771): make private
   * @private only public for slider
   */
  handlePointerleave(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.hovered = false;
    if (this.state !== State.INACTIVE) {
      this.endPressAnimation();
    }
  }
  handlePointerup(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    if (this.state === State.HOLDING) {
      this.state = State.WAITING_FOR_CLICK;
      return;
    }
    if (this.state === State.TOUCH_DELAY) {
      this.state = State.WAITING_FOR_CLICK;
      this.startPressAnimation(this.rippleStartEvent);
      return;
    }
  }
  async handlePointerdown(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.rippleStartEvent = event;
    if (!this.isTouch(event)) {
      this.state = State.WAITING_FOR_CLICK;
      this.startPressAnimation(event);
      return;
    }
    if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
      return;
    }
    this.checkBoundsAfterContextMenu = false;
    this.state = State.TOUCH_DELAY;
    await new Promise((resolve) => {
      setTimeout(resolve, TOUCH_DELAY_MS);
    });
    if (this.state !== State.TOUCH_DELAY) {
      return;
    }
    this.state = State.HOLDING;
    this.startPressAnimation(event);
  }
  handleClick() {
    if (this.disabled) {
      return;
    }
    if (this.state === State.WAITING_FOR_CLICK) {
      this.endPressAnimation();
      return;
    }
    if (this.state === State.INACTIVE) {
      this.startPressAnimation();
      this.endPressAnimation();
    }
  }
  handlePointercancel(event) {
    if (!this.shouldReactToEvent(event)) {
      return;
    }
    this.endPressAnimation();
  }
  handleContextmenu() {
    if (this.disabled) {
      return;
    }
    this.checkBoundsAfterContextMenu = true;
    this.endPressAnimation();
  }
  determineRippleSize() {
    const { height, width } = this.getBoundingClientRect();
    const maxDim = Math.max(height, width);
    const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
    const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
    const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
    const maxRadius = hypotenuse + PADDING;
    this.initialSize = initialSize;
    this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
    this.rippleSize = `${initialSize}px`;
  }
  getNormalizedPointerEventCoords(pointerEvent) {
    const { scrollX, scrollY } = window;
    const { left, top } = this.getBoundingClientRect();
    const documentX = scrollX + left;
    const documentY = scrollY + top;
    const { pageX, pageY } = pointerEvent;
    return { x: pageX - documentX, y: pageY - documentY };
  }
  getTranslationCoordinates(positionEvent) {
    const { height, width } = this.getBoundingClientRect();
    const endPoint = {
      x: (width - this.initialSize) / 2,
      y: (height - this.initialSize) / 2
    };
    let startPoint;
    if (positionEvent instanceof PointerEvent) {
      startPoint = this.getNormalizedPointerEventCoords(positionEvent);
    } else {
      startPoint = {
        x: width / 2,
        y: height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    return { startPoint, endPoint };
  }
  startPressAnimation(positionEvent) {
    var _a2;
    if (!this.mdRoot) {
      return;
    }
    this.pressed = true;
    (_a2 = this.growAnimation) == null ? void 0 : _a2.cancel();
    this.determineRippleSize();
    const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
    const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
    const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    this.growAnimation = this.mdRoot.animate({
      top: [0, 0],
      left: [0, 0],
      height: [this.rippleSize, this.rippleSize],
      width: [this.rippleSize, this.rippleSize],
      transform: [
        `translate(${translateStart}) scale(1)`,
        `translate(${translateEnd}) scale(${this.rippleScale})`
      ]
    }, {
      pseudoElement: PRESS_PSEUDO,
      duration: PRESS_GROW_MS,
      easing: EASING.STANDARD,
      fill: ANIMATION_FILL
    });
  }
  async endPressAnimation() {
    this.state = State.INACTIVE;
    const animation = this.growAnimation;
    const pressAnimationPlayState = (animation == null ? void 0 : animation.currentTime) ?? Infinity;
    if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
      this.pressed = false;
      return;
    }
    await new Promise((resolve) => {
      setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
    });
    if (this.growAnimation !== animation) {
      return;
    }
    this.pressed = false;
  }
  /**
   * Returns `true` if
   *  - the ripple element is enabled
   *  - the pointer is primary for the input type
   *  - the pointer is the pointer that started the interaction, or will start
   * the interaction
   *  - the pointer is a touch, or the pointer state has the primary button
   * held, or the pointer is hovering
   */
  shouldReactToEvent(event) {
    if (this.disabled || !event.isPrimary) {
      return false;
    }
    if (this.rippleStartEvent && this.rippleStartEvent.pointerId !== event.pointerId) {
      return false;
    }
    if (event.type === "pointerenter" || event.type === "pointerleave") {
      return !this.isTouch(event);
    }
    const isPrimaryButton = event.buttons === 1;
    return this.isTouch(event) || isPrimaryButton;
  }
  /**
   * Check if the event is within the bounds of the element.
   *
   * This is only needed for the "stuck" contextmenu longpress on Chrome.
   */
  inBounds({ x: x2, y: y2 }) {
    const { top, left, bottom, right } = this.getBoundingClientRect();
    return x2 >= left && x2 <= right && y2 >= top && y2 <= bottom;
  }
  isTouch({ pointerType }) {
    return pointerType === "touch";
  }
  /** @private */
  async handleEvent(event) {
    switch (event.type) {
      case "click":
        this.handleClick();
        break;
      case "contextmenu":
        this.handleContextmenu();
        break;
      case "pointercancel":
        this.handlePointercancel(event);
        break;
      case "pointerdown":
        await this.handlePointerdown(event);
        break;
      case "pointerenter":
        this.handlePointerenter(event);
        break;
      case "pointerleave":
        this.handlePointerleave(event);
        break;
      case "pointerup":
        this.handlePointerup(event);
        break;
    }
  }
  onControlChange(prev, next) {
    for (const event of EVENTS$1) {
      prev == null ? void 0 : prev.removeEventListener(event, this);
      next == null ? void 0 : next.addEventListener(event, this);
    }
  }
}
__decorate([
  n$6({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate([
  t$3()
], Ripple.prototype, "hovered", void 0);
__decorate([
  t$3()
], Ripple.prototype, "pressed", void 0);
__decorate([
  i$4(".surface")
], Ripple.prototype, "mdRoot", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$4 = i$3`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdRipple = class MdRipple2 extends Ripple {
};
MdRipple.styles = [styles$4];
MdRipple = __decorate([
  e$7("md-ripple")
], MdRipple);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ARIA_PROPERTIES = [
  "ariaAtomic",
  "ariaAutoComplete",
  "ariaBusy",
  "ariaChecked",
  "ariaColCount",
  "ariaColIndex",
  "ariaColSpan",
  "ariaCurrent",
  "ariaDisabled",
  "ariaExpanded",
  "ariaHasPopup",
  "ariaHidden",
  "ariaInvalid",
  "ariaKeyShortcuts",
  "ariaLabel",
  "ariaLevel",
  "ariaLive",
  "ariaModal",
  "ariaMultiLine",
  "ariaMultiSelectable",
  "ariaOrientation",
  "ariaPlaceholder",
  "ariaPosInSet",
  "ariaPressed",
  "ariaReadOnly",
  "ariaRequired",
  "ariaRoleDescription",
  "ariaRowCount",
  "ariaRowIndex",
  "ariaRowSpan",
  "ariaSelected",
  "ariaSetSize",
  "ariaSort",
  "ariaValueMax",
  "ariaValueMin",
  "ariaValueNow",
  "ariaValueText"
];
ARIA_PROPERTIES.map(ariaPropertyToAttribute);
function ariaPropertyToAttribute(property) {
  return property.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
}
function setupHostAria(ctor, { focusable } = {}) {
  if (focusable !== false) {
    ctor.addInitializer((host) => {
      host.addController({
        hostConnected() {
          if (host.hasAttribute("tabindex")) {
            return;
          }
          host.tabIndex = 0;
        }
      });
    });
  }
  if ("role" in Element.prototype) {
    return;
  }
  for (const ariaProperty of ARIA_PROPERTIES) {
    ctor.createProperty(ariaProperty, {
      attribute: ariaPropertyToAttribute(ariaProperty),
      reflect: true
    });
  }
  ctor.createProperty("role", { reflect: true });
}
function polyfillElementInternalsAria(host, internals2) {
  if (checkIfElementInternalsSupportsAria(internals2)) {
    return internals2;
  }
  if (!("role" in host)) {
    throw new Error("Missing setupHostAria()");
  }
  let firstConnectedCallbacks = [];
  let hasBeenConnected = false;
  for (const ariaProperty of ARIA_PROPERTIES) {
    let internalAriaValue = null;
    Object.defineProperty(internals2, ariaProperty, {
      enumerable: true,
      configurable: true,
      get() {
        return internalAriaValue;
      },
      set(value) {
        const setValue = () => {
          internalAriaValue = value;
          if (!hasBeenConnected) {
            firstConnectedCallbacks.push({ property: ariaProperty, callback: setValue });
            return;
          }
          host[ariaProperty] = value;
        };
        setValue();
      }
    });
  }
  let internalRoleValue = null;
  Object.defineProperty(internals2, "role", {
    enumerable: true,
    configurable: true,
    get() {
      return internalRoleValue;
    },
    set(value) {
      const setRole = () => {
        internalRoleValue = value;
        if (!hasBeenConnected) {
          firstConnectedCallbacks.push({
            property: "role",
            callback: setRole
          });
          return;
        }
        if (value === null) {
          host.removeAttribute("role");
        } else {
          host.setAttribute("role", value);
        }
      };
      setRole();
    }
  });
  host.addController({
    hostConnected() {
      if (hasBeenConnected) {
        return;
      }
      hasBeenConnected = true;
      const propertiesSetByUser = /* @__PURE__ */ new Set();
      for (const { property } of firstConnectedCallbacks) {
        const wasSetByUser = host.getAttribute(ariaPropertyToAttribute(property)) !== null || // Dynamic lookup rather than hardcoding all properties.
        // tslint:disable-next-line:no-dict-access-on-struct-type
        host[property] !== void 0;
        if (wasSetByUser) {
          propertiesSetByUser.add(property);
        }
      }
      for (const { property, callback } of firstConnectedCallbacks) {
        if (propertiesSetByUser.has(property)) {
          continue;
        }
        callback();
      }
      firstConnectedCallbacks = [];
    }
  });
  return internals2;
}
function checkIfElementInternalsSupportsAria(internals2) {
  return "role" in internals2;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const EVENTS = ["focusin", "focusout", "pointerdown"];
class FocusRing extends s$1 {
  constructor() {
    super(...arguments);
    this.visible = false;
    this.inward = false;
    this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(htmlFor) {
    this.attachableController.htmlFor = htmlFor;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(control) {
    this.attachableController.control = control;
  }
  attach(control) {
    this.attachableController.attach(control);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-hidden", "true");
  }
  /** @private */
  handleEvent(event) {
    var _a2;
    if (event[HANDLED_BY_FOCUS_RING]) {
      return;
    }
    switch (event.type) {
      default:
        return;
      case "focusin":
        this.visible = ((_a2 = this.control) == null ? void 0 : _a2.matches(":focus-visible")) ?? false;
        break;
      case "focusout":
      case "pointerdown":
        this.visible = false;
        break;
    }
    event[HANDLED_BY_FOCUS_RING] = true;
  }
  onControlChange(prev, next) {
    for (const event of EVENTS) {
      prev == null ? void 0 : prev.removeEventListener(event, this);
      next == null ? void 0 : next.addEventListener(event, this);
    }
  }
  update(changed) {
    if (changed.has("visible")) {
      this.dispatchEvent(new Event("visibility-changed"));
    }
    super.update(changed);
  }
}
__decorate([
  n$6({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", void 0);
__decorate([
  n$6({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", void 0);
const HANDLED_BY_FOCUS_RING = Symbol("handledByFocusRing");
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$3 = i$3`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdFocusRing = class MdFocusRing2 extends FocusRing {
};
MdFocusRing.styles = [styles$3];
MdFocusRing = __decorate([
  e$7("md-focus-ring")
], MdFocusRing);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = Symbol.for(""), l = (t2) => {
  if ((null == t2 ? void 0 : t2.r) === e)
    return null == t2 ? void 0 : t2._$litStatic$;
}, i2 = (t2, ...r2) => ({ _$litStatic$: r2.reduce((r3, e2, l2) => r3 + ((t3) => {
  if (void 0 !== t3._$litStatic$)
    return t3._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t3}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(e2) + t2[l2 + 1], t2[0]), r: e }), s2 = /* @__PURE__ */ new Map(), a = (t2) => (r2, ...e2) => {
  const o3 = e2.length;
  let i3, a2;
  const n2 = [], u3 = [];
  let c2, $2 = 0, f2 = false;
  for (; $2 < o3; ) {
    for (c2 = r2[$2]; $2 < o3 && void 0 !== (a2 = e2[$2], i3 = l(a2)); )
      c2 += i3 + r2[++$2], f2 = true;
    $2 !== o3 && u3.push(a2), n2.push(c2), $2++;
  }
  if ($2 === o3 && n2.push(r2[o3]), f2) {
    const t3 = n2.join("$$lit$$");
    void 0 === (r2 = s2.get(t3)) && (n2.raw = n2, s2.set(t3, r2 = n2)), e2 = u3;
  }
  return t2(r2, ...e2);
}, n = a(x);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function requestUpdateOnAriaChange(ctor) {
  for (const ariaProperty of ARIA_PROPERTIES) {
    ctor.createProperty(ariaProperty, {
      attribute: ariaPropertyToAttribute(ariaProperty),
      reflect: true
    });
  }
  ctor.addInitializer((element) => {
    const controller = {
      hostConnected() {
        element.setAttribute("role", "presentation");
      }
    };
    element.addController(controller);
  });
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const internals = Symbol("internals");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function setupFormSubmitter(ctor) {
  ctor.addInitializer((instance) => {
    const submitter = instance;
    submitter.addEventListener("click", async (event) => {
      const { type, [internals]: elementInternals } = submitter;
      const { form } = elementInternals;
      if (!form || type === "button") {
        return;
      }
      await new Promise((resolve) => {
        resolve();
      });
      if (event.defaultPrevented) {
        return;
      }
      if (type === "reset") {
        form.reset();
        return;
      }
      form.addEventListener("submit", (submitEvent) => {
        Object.defineProperty(submitEvent, "submitter", {
          configurable: true,
          enumerable: true,
          get: () => submitter
        });
      }, { capture: true, once: true });
      elementInternals.setFormValue(submitter.value);
      form.requestSubmit();
    });
  });
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function isRtl(el, shouldCheck = true) {
  return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
class IconButton extends s$1 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.flipIconInRtl = false;
    this.href = "";
    this.target = "";
    this.ariaLabelSelected = "";
    this.toggle = false;
    this.selected = false;
    this.type = "submit";
    this.value = "";
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    this[_a] = this.attachInternals();
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[internals].form;
  }
  /**
   * The labels this element is associated with.
   */
  get labels() {
    return this[internals].labels;
  }
  /**
   * Link buttons cannot be disabled.
   */
  willUpdate() {
    if (this.href) {
      this.disabled = false;
    }
  }
  render() {
    const tag = this.href ? i2`div` : i2`button`;
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
    const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
    const ariaPressedValue = !this.toggle ? A : this.selected;
    let ariaLabelValue = A;
    if (!this.href) {
      ariaLabelValue = hasToggledAriaLabel && this.selected ? this.ariaLabelSelected : ariaLabel;
    }
    return n`<${tag}
        class="icon-button ${o2(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
  }
  renderLink() {
    const { ariaLabel } = this;
    return x`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"
      ></a>
    `;
  }
  getRenderClasses() {
    return {
      "flip-icon": this.flipIcon,
      "selected": this.toggle && this.selected
    };
  }
  renderIcon() {
    return x`<span class="icon"><slot></slot></span>`;
  }
  renderSelectedIcon() {
    return x`<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`;
  }
  renderTouchTarget() {
    return x`<span class="touch"></span>`;
  }
  renderFocusRing() {
    return x`<md-focus-ring part="focus-ring" for=${this.href ? "link" : "button"}></md-focus-ring>`;
  }
  renderRipple() {
    return x`<md-ripple
      for=${this.href ? "link" : A}
      ?disabled="${!this.href && this.disabled}"
    ></md-ripple>`;
  }
  connectedCallback() {
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    super.connectedCallback();
  }
  async handleClick(event) {
    await 0;
    if (!this.toggle || this.disabled || event.defaultPrevented) {
      return;
    }
    this.selected = !this.selected;
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
}
_a = internals;
(() => {
  requestUpdateOnAriaChange(IconButton);
  setupFormSubmitter(IconButton);
})();
IconButton.formAssociated = true;
IconButton.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  n$6({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", void 0);
__decorate([
  n$6({ type: Boolean, attribute: "flip-icon-in-rtl" })
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
  n$6()
], IconButton.prototype, "href", void 0);
__decorate([
  n$6()
], IconButton.prototype, "target", void 0);
__decorate([
  n$6({ attribute: "aria-label-selected" })
], IconButton.prototype, "ariaLabelSelected", void 0);
__decorate([
  n$6({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
  n$6({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
  n$6()
], IconButton.prototype, "type", void 0);
__decorate([
  n$6()
], IconButton.prototype, "value", void 0);
__decorate([
  t$3()
], IconButton.prototype, "flipIcon", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = i$3`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i$3`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdIconButton = class MdIconButton2 extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      "standard": true
    };
  }
};
MdIconButton.styles = [styles$2, styles$1];
MdIconButton = __decorate([
  e$7("md-icon-button")
], MdIconButton);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Icon extends s$1 {
  render() {
    return x`<slot></slot>`;
  }
  connectedCallback() {
    super.connectedCallback();
    const ariaHidden = this.getAttribute("aria-hidden");
    if (ariaHidden === "false") {
      this.removeAttribute("aria-hidden");
      return;
    }
    this.setAttribute("aria-hidden", "true");
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i$3`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdIcon = class MdIcon2 extends Icon {
};
MdIcon.styles = [styles];
MdIcon = __decorate([
  e$7("md-icon")
], MdIcon);
export {
  A,
  D,
  EASING as E,
  IconButton as I,
  T,
  __decorate as _,
  setupHostAria as a,
  i$4 as b,
  o2 as c,
  styles$2 as d,
  e$7 as e,
  e$1 as f,
  i$1 as g,
  t as h,
  i$3 as i,
  n as j,
  i2 as k,
  l$4 as l,
  createAnimationSignal as m,
  n$6 as n,
  o$5 as o,
  polyfillElementInternalsAria as p,
  setupFormSubmitter as q,
  requestUpdateOnAriaChange as r,
  s$1 as s,
  t$3 as t,
  internals as u,
  x
};
