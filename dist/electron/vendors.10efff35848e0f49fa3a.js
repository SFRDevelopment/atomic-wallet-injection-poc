(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [256, 32],
  {
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    2847: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Writer = e.Reader = e.Coder = void 0),
        (e.checkResultErrors = u));
      var i = r(2776),
        n = r(2829),
        o = r(2808),
        s = r(2773),
        a = r(3052);
      const h = new s.Logger(a.version);
      function u(t) {
        const e = [],
          r = function (t, i) {
            if (Array.isArray(i))
              for (let o in i) {
                const s = t.slice();
                s.push(o);
                try {
                  r(s, i[o]);
                } catch (n) {
                  e.push({ path: s, error: n });
                }
              }
          };
        return (r([], t), e);
      }
      class Coder {
        constructor(t, e, r, i) {
          ((this.name = t),
            (this.type = e),
            (this.localName = r),
            (this.dynamic = i));
        }
        _throwError(t, e) {
          h.throwArgumentError(t, this.localName, e);
        }
      }
      e.Coder = Coder;
      class Writer {
        constructor(t) {
          ((0, o.defineReadOnly)(this, "wordSize", t || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(t)));
        }
        get data() {
          return (0, i.hexConcat)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(t) {
          return (this._data.push(t), (this._dataLength += t.length), t.length);
        }
        appendWriter(t) {
          return this._writeData((0, i.concat)(t._data));
        }
        writeBytes(t) {
          let e = (0, i.arrayify)(t);
          const r = e.length % this.wordSize;
          return (
            r && (e = (0, i.concat)([e, this._padding.slice(r)])),
            this._writeData(e)
          );
        }
        _getValue(t) {
          let e = (0, i.arrayify)(n.BigNumber.from(t));
          return (
            e.length > this.wordSize &&
              h.throwError(
                "value out-of-bounds",
                s.Logger.errors.BUFFER_OVERRUN,
                { length: this.wordSize, offset: e.length },
              ),
            e.length % this.wordSize &&
              (e = (0, i.concat)([
                this._padding.slice(e.length % this.wordSize),
                e,
              ])),
            e
          );
        }
        writeValue(t) {
          return this._writeData(this._getValue(t));
        }
        writeUpdatableValue() {
          const t = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (e) => {
              this._data[t] = this._getValue(e);
            }
          );
        }
      }
      e.Writer = Writer;
      class Reader {
        constructor(t, e, r, n) {
          ((0, o.defineReadOnly)(this, "_data", (0, i.arrayify)(t)),
            (0, o.defineReadOnly)(this, "wordSize", e || 32),
            (0, o.defineReadOnly)(this, "_coerceFunc", r),
            (0, o.defineReadOnly)(this, "allowLoose", n),
            (this._offset = 0));
        }
        get data() {
          return (0, i.hexlify)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(t, e) {
          let r = t.match("^u?int([0-9]+)$");
          return (r && parseInt(r[1]) <= 48 && (e = e.toNumber()), e);
        }
        coerce(t, e) {
          return this._coerceFunc
            ? this._coerceFunc(t, e)
            : Reader.coerce(t, e);
        }
        _peekBytes(t, e, r) {
          let i = Math.ceil(e / this.wordSize) * this.wordSize;
          return (
            this._offset + i > this._data.length &&
              (this.allowLoose && r && this._offset + e <= this._data.length
                ? (i = e)
                : h.throwError(
                    "data out-of-bounds",
                    s.Logger.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + i },
                  )),
            this._data.slice(this._offset, this._offset + i)
          );
        }
        subReader(t) {
          return new Reader(
            this._data.slice(this._offset + t),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose,
          );
        }
        readBytes(t, e) {
          let r = this._peekBytes(0, t, !!e);
          return ((this._offset += r.length), r.slice(0, t));
        }
        readValue() {
          return n.BigNumber.from(this.readBytes(this.wordSize));
        }
      }
      e.Reader = Reader;
    },
    3052: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "abi/5.8.0";
    },
    3053: function (t, e) {},
    3283: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ParamType =
          e.FunctionFragment =
          e.Fragment =
          e.FormatTypes =
          e.EventFragment =
          e.ErrorFragment =
          e.ConstructorFragment =
            void 0));
      var i = r(2829),
        n = r(2808),
        o = r(2773),
        s = r(3052);
      const a = new o.Logger(s.version),
        h = {};
      let u = { calldata: !0, memory: !0, storage: !0 },
        l = { calldata: !0, memory: !0 };
      function m(t, e) {
        if ("bytes" === t || "string" === t) {
          if (u[e]) return !0;
        } else if ("address" === t) {
          if ("payable" === e) return !0;
        } else if ((t.indexOf("[") >= 0 || "tuple" === t) && l[e]) return !0;
        return (
          (u[e] || "payable" === e) &&
            a.throwArgumentError("invalid modifier", "name", e),
          !1
        );
      }
      function c(t, e) {
        let r = t;
        function i(e) {
          a.throwArgumentError(
            "unexpected character at position " + e,
            "param",
            t,
          );
        }
        function n(t) {
          let r = { type: "", name: "", parent: t, state: { allowType: !0 } };
          return (e && (r.indexed = !1), r);
        }
        t = t.replace(/\s/g, " ");
        let o = { type: "", name: "", state: { allowType: !0 } },
          s = o;
        for (let a = 0; a < t.length; a++) {
          let r = t[a];
          switch (r) {
            case "(":
              (s.state.allowType && "" === s.type
                ? (s.type = "tuple")
                : s.state.allowParams || i(a),
                (s.state.allowType = !1),
                (s.type = b(s.type)),
                (s.components = [n(s)]),
                (s = s.components[0]));
              break;
            case ")":
              (delete s.state,
                "indexed" === s.name &&
                  (e || i(a), (s.indexed = !0), (s.name = "")),
                m(s.type, s.name) && (s.name = ""),
                (s.type = b(s.type)));
              let t = s;
              ((s = s.parent),
                s || i(a),
                delete t.parent,
                (s.state.allowParams = !1),
                (s.state.allowName = !0),
                (s.state.allowArray = !0));
              break;
            case ",":
              (delete s.state,
                "indexed" === s.name &&
                  (e || i(a), (s.indexed = !0), (s.name = "")),
                m(s.type, s.name) && (s.name = ""),
                (s.type = b(s.type)));
              let o = n(s.parent);
              (s.parent.components.push(o), delete s.parent, (s = o));
              break;
            case " ":
              (s.state.allowType &&
                "" !== s.type &&
                ((s.type = b(s.type)),
                delete s.state.allowType,
                (s.state.allowName = !0),
                (s.state.allowParams = !0)),
                s.state.allowName &&
                  "" !== s.name &&
                  ("indexed" === s.name
                    ? (e || i(a),
                      s.indexed && i(a),
                      (s.indexed = !0),
                      (s.name = ""))
                    : m(s.type, s.name)
                      ? (s.name = "")
                      : (s.state.allowName = !1)));
              break;
            case "[":
              (s.state.allowArray || i(a),
                (s.type += r),
                (s.state.allowArray = !1),
                (s.state.allowName = !1),
                (s.state.readArray = !0));
              break;
            case "]":
              (s.state.readArray || i(a),
                (s.type += r),
                (s.state.readArray = !1),
                (s.state.allowArray = !0),
                (s.state.allowName = !0));
              break;
            default:
              s.state.allowType
                ? ((s.type += r),
                  (s.state.allowParams = !0),
                  (s.state.allowArray = !0))
                : s.state.allowName
                  ? ((s.name += r), delete s.state.allowArray)
                  : s.state.readArray
                    ? (s.type += r)
                    : i(a);
          }
        }
        return (
          s.parent && a.throwArgumentError("unexpected eof", "param", t),
          delete o.state,
          "indexed" === s.name
            ? (e || i(r.length - 7),
              s.indexed && i(r.length - 7),
              (s.indexed = !0),
              (s.name = ""))
            : m(s.type, s.name) && (s.name = ""),
          (o.type = b(o.type)),
          o
        );
      }
      function d(t, e) {
        for (let r in e) (0, n.defineReadOnly)(t, r, e[r]);
      }
      const f = (e.FormatTypes = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        })),
        p = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class ParamType {
        constructor(t, e) {
          (t !== h &&
            a.throwError(
              "use fromString",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new ParamType()" },
            ),
            d(this, e));
          let r = this.type.match(p);
          (d(
            this,
            r
              ? {
                  arrayLength: parseInt(r[2] || "-1"),
                  arrayChildren: ParamType.fromObject({
                    type: r[1],
                    components: this.components,
                  }),
                  baseType: "array",
                }
              : {
                  arrayLength: null,
                  arrayChildren: null,
                  baseType: null != this.components ? "tuple" : this.type,
                },
          ),
            (this._isParamType = !0),
            Object.freeze(this));
        }
        format(t) {
          if (
            (t || (t = f.sighash),
            f[t] || a.throwArgumentError("invalid format type", "format", t),
            t === f.json)
          ) {
            let e = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" === typeof this.indexed && (e.indexed = this.indexed),
              this.components &&
                (e.components = this.components.map((e) =>
                  JSON.parse(e.format(t)),
                )),
              JSON.stringify(e)
            );
          }
          let e = "";
          return (
            "array" === this.baseType
              ? ((e += this.arrayChildren.format(t)),
                (e +=
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]"))
              : "tuple" === this.baseType
                ? (t !== f.sighash && (e += this.type),
                  (e +=
                    "(" +
                    this.components
                      .map((e) => e.format(t))
                      .join(t === f.full ? ", " : ",") +
                    ")"))
                : (e += this.type),
            t !== f.sighash &&
              (!0 === this.indexed && (e += " indexed"),
              t === f.full && this.name && (e += " " + this.name)),
            e
          );
        }
        static from(t, e) {
          return "string" === typeof t
            ? ParamType.fromString(t, e)
            : ParamType.fromObject(t);
        }
        static fromObject(t) {
          return ParamType.isParamType(t)
            ? t
            : new ParamType(h, {
                name: t.name || null,
                type: b(t.type),
                indexed: null == t.indexed ? null : !!t.indexed,
                components: t.components
                  ? t.components.map(ParamType.fromObject)
                  : null,
              });
        }
        static fromString(t, e) {
          function r(t) {
            return ParamType.fromObject({
              name: t.name,
              type: t.type,
              indexed: t.indexed,
              components: t.components,
            });
          }
          return r(c(t, !!e));
        }
        static isParamType(t) {
          return !(null == t || !t._isParamType);
        }
      }
      function g(t, e) {
        return F(t).map((t) => ParamType.fromString(t, e));
      }
      e.ParamType = ParamType;
      class Fragment {
        constructor(t, e) {
          (t !== h &&
            a.throwError(
              "use a static from method",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" },
            ),
            d(this, e),
            (this._isFragment = !0),
            Object.freeze(this));
        }
        static from(t) {
          return Fragment.isFragment(t)
            ? t
            : "string" === typeof t
              ? Fragment.fromString(t)
              : Fragment.fromObject(t);
        }
        static fromObject(t) {
          if (Fragment.isFragment(t)) return t;
          switch (t.type) {
            case "function":
              return FunctionFragment.fromObject(t);
            case "event":
              return EventFragment.fromObject(t);
            case "constructor":
              return ConstructorFragment.fromObject(t);
            case "error":
              return ErrorFragment.fromObject(t);
            case "fallback":
            case "receive":
              return null;
          }
          return a.throwArgumentError("invalid fragment object", "value", t);
        }
        static fromString(t) {
          return (
            (t = t.replace(/\s/g, " ")),
            (t = t
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")),
            (t = t.trim()),
            "event" === t.split(" ")[0]
              ? EventFragment.fromString(t.substring(5).trim())
              : "function" === t.split(" ")[0]
                ? FunctionFragment.fromString(t.substring(8).trim())
                : "constructor" === t.split("(")[0].trim()
                  ? ConstructorFragment.fromString(t.trim())
                  : "error" === t.split(" ")[0]
                    ? ErrorFragment.fromString(t.substring(5).trim())
                    : a.throwArgumentError("unsupported fragment", "value", t)
          );
        }
        static isFragment(t) {
          return !(!t || !t._isFragment);
        }
      }
      e.Fragment = Fragment;
      class EventFragment extends Fragment {
        format(t) {
          if (
            (t || (t = f.sighash),
            f[t] || a.throwArgumentError("invalid format type", "format", t),
            t === f.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = "";
          return (
            t !== f.sighash && (e += "event "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(t))
                .join(t === f.full ? ", " : ",") +
              ") "),
            t !== f.sighash && this.anonymous && (e += "anonymous "),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t
            ? EventFragment.fromString(t)
            : EventFragment.fromObject(t);
        }
        static fromObject(t) {
          if (EventFragment.isEventFragment(t)) return t;
          "event" !== t.type &&
            a.throwArgumentError("invalid event object", "value", t);
          const e = {
            name: E(t.name),
            anonymous: t.anonymous,
            inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
            type: "event",
          };
          return new EventFragment(h, e);
        }
        static fromString(t) {
          let e = t.match(A);
          e || a.throwArgumentError("invalid event string", "value", t);
          let r = !1;
          return (
            e[3].split(" ").forEach((t) => {
              switch (t.trim()) {
                case "anonymous":
                  r = !0;
                  break;
                case "":
                  break;
                default:
                  a.warn("unknown modifier: " + t);
              }
            }),
            EventFragment.fromObject({
              name: e[1].trim(),
              anonymous: r,
              inputs: g(e[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(t) {
          return t && t._isFragment && "event" === t.type;
        }
      }
      function y(t, e) {
        e.gas = null;
        let r = t.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              a.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                t,
              ),
            r[1].match(/^[0-9]+$/) ||
              a.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                t,
              ),
            (e.gas = i.BigNumber.from(r[1])),
            r[0])
          : t;
      }
      function v(t, e) {
        ((e.constant = !1),
          (e.payable = !1),
          (e.stateMutability = "nonpayable"),
          t.split(" ").forEach((t) => {
            switch (t.trim()) {
              case "constant":
                e.constant = !0;
                break;
              case "payable":
                ((e.payable = !0), (e.stateMutability = "payable"));
                break;
              case "nonpayable":
                ((e.payable = !1), (e.stateMutability = "nonpayable"));
                break;
              case "pure":
                ((e.constant = !0), (e.stateMutability = "pure"));
                break;
              case "view":
                ((e.constant = !0), (e.stateMutability = "view"));
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + t);
            }
          }));
      }
      function w(t) {
        let e = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != t.stateMutability
            ? ((e.stateMutability = t.stateMutability),
              (e.constant =
                "view" === e.stateMutability || "pure" === e.stateMutability),
              null != t.constant &&
                !!t.constant !== e.constant &&
                a.throwArgumentError(
                  "cannot have constant function with mutability " +
                    e.stateMutability,
                  "value",
                  t,
                ),
              (e.payable = "payable" === e.stateMutability),
              null != t.payable &&
                !!t.payable !== e.payable &&
                a.throwArgumentError(
                  "cannot have payable function with mutability " +
                    e.stateMutability,
                  "value",
                  t,
                ))
            : null != t.payable
              ? ((e.payable = !!t.payable),
                null != t.constant ||
                  e.payable ||
                  "constructor" === t.type ||
                  a.throwArgumentError(
                    "unable to determine stateMutability",
                    "value",
                    t,
                  ),
                (e.constant = !!t.constant),
                e.constant
                  ? (e.stateMutability = "view")
                  : (e.stateMutability = e.payable ? "payable" : "nonpayable"),
                e.payable &&
                  e.constant &&
                  a.throwArgumentError(
                    "cannot have constant payable function",
                    "value",
                    t,
                  ))
              : null != t.constant
                ? ((e.constant = !!t.constant),
                  (e.payable = !e.constant),
                  (e.stateMutability = e.constant ? "view" : "payable"))
                : "constructor" !== t.type &&
                  a.throwArgumentError(
                    "unable to determine stateMutability",
                    "value",
                    t,
                  ),
          e
        );
      }
      e.EventFragment = EventFragment;
      class ConstructorFragment extends Fragment {
        format(t) {
          if (
            (t || (t = f.sighash),
            f[t] || a.throwArgumentError("invalid format type", "format", t),
            t === f.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          t === f.sighash &&
            a.throwError(
              "cannot format a constructor for sighash",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" },
            );
          let e =
            "constructor(" +
            this.inputs
              .map((e) => e.format(t))
              .join(t === f.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (e += this.stateMutability + " "),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t
            ? ConstructorFragment.fromString(t)
            : ConstructorFragment.fromObject(t);
        }
        static fromObject(t) {
          if (ConstructorFragment.isConstructorFragment(t)) return t;
          "constructor" !== t.type &&
            a.throwArgumentError("invalid constructor object", "value", t);
          let e = w(t);
          e.constant &&
            a.throwArgumentError("constructor cannot be constant", "value", t);
          const r = {
            name: null,
            type: t.type,
            inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: t.gas ? i.BigNumber.from(t.gas) : null,
          };
          return new ConstructorFragment(h, r);
        }
        static fromString(t) {
          let e = { type: "constructor" };
          t = y(t, e);
          let r = t.match(A);
          return (
            (r && "constructor" === r[1].trim()) ||
              a.throwArgumentError("invalid constructor string", "value", t),
            (e.inputs = g(r[2].trim(), !1)),
            v(r[3].trim(), e),
            ConstructorFragment.fromObject(e)
          );
        }
        static isConstructorFragment(t) {
          return t && t._isFragment && "constructor" === t.type;
        }
      }
      e.ConstructorFragment = ConstructorFragment;
      class FunctionFragment extends ConstructorFragment {
        format(t) {
          if (
            (t || (t = f.sighash),
            f[t] || a.throwArgumentError("invalid format type", "format", t),
            t === f.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = "";
          return (
            t !== f.sighash && (e += "function "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(t))
                .join(t === f.full ? ", " : ",") +
              ") "),
            t !== f.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (e += this.stateMutability + " ")
                : this.constant && (e += "view "),
              this.outputs &&
                this.outputs.length &&
                (e +=
                  "returns (" +
                  this.outputs.map((e) => e.format(t)).join(", ") +
                  ") "),
              null != this.gas && (e += "@" + this.gas.toString() + " ")),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t
            ? FunctionFragment.fromString(t)
            : FunctionFragment.fromObject(t);
        }
        static fromObject(t) {
          if (FunctionFragment.isFunctionFragment(t)) return t;
          "function" !== t.type &&
            a.throwArgumentError("invalid function object", "value", t);
          let e = w(t);
          const r = {
            type: t.type,
            name: E(t.name),
            constant: e.constant,
            inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
            outputs: t.outputs ? t.outputs.map(ParamType.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: t.gas ? i.BigNumber.from(t.gas) : null,
          };
          return new FunctionFragment(h, r);
        }
        static fromString(t) {
          let e = { type: "function" };
          t = y(t, e);
          let r = t.split(" returns ");
          r.length > 2 &&
            a.throwArgumentError("invalid function string", "value", t);
          let i = r[0].match(A);
          if (
            (i ||
              a.throwArgumentError("invalid function signature", "value", t),
            (e.name = i[1].trim()),
            e.name && E(e.name),
            (e.inputs = g(i[2], !1)),
            v(i[3].trim(), e),
            r.length > 1)
          ) {
            let i = r[1].match(A);
            (("" == i[1].trim() && "" == i[3].trim()) ||
              a.throwArgumentError("unexpected tokens", "value", t),
              (e.outputs = g(i[2], !1)));
          } else e.outputs = [];
          return FunctionFragment.fromObject(e);
        }
        static isFunctionFragment(t) {
          return t && t._isFragment && "function" === t.type;
        }
      }
      function M(t) {
        const e = t.format();
        return (
          ("Error(string)" !== e && "Panic(uint256)" !== e) ||
            a.throwArgumentError(
              `cannot specify user defined ${e} error`,
              "fragment",
              t,
            ),
          t
        );
      }
      e.FunctionFragment = FunctionFragment;
      class ErrorFragment extends Fragment {
        format(t) {
          if (
            (t || (t = f.sighash),
            f[t] || a.throwArgumentError("invalid format type", "format", t),
            t === f.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = "";
          return (
            t !== f.sighash && (e += "error "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(t))
                .join(t === f.full ? ", " : ",") +
              ") "),
            e.trim()
          );
        }
        static from(t) {
          return "string" === typeof t
            ? ErrorFragment.fromString(t)
            : ErrorFragment.fromObject(t);
        }
        static fromObject(t) {
          if (ErrorFragment.isErrorFragment(t)) return t;
          "error" !== t.type &&
            a.throwArgumentError("invalid error object", "value", t);
          const e = {
            type: t.type,
            name: E(t.name),
            inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
          };
          return M(new ErrorFragment(h, e));
        }
        static fromString(t) {
          let e = { type: "error" },
            r = t.match(A);
          return (
            r || a.throwArgumentError("invalid error signature", "value", t),
            (e.name = r[1].trim()),
            e.name && E(e.name),
            (e.inputs = g(r[2], !1)),
            M(ErrorFragment.fromObject(e))
          );
        }
        static isErrorFragment(t) {
          return t && t._isFragment && "error" === t.type;
        }
      }
      function b(t) {
        return (
          t.match(/^uint($|[^1-9])/)
            ? (t = "uint256" + t.substring(4))
            : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)),
          t
        );
      }
      e.ErrorFragment = ErrorFragment;
      const _ = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function E(t) {
        return (
          (t && t.match(_)) ||
            a.throwArgumentError(`invalid identifier "${t}"`, "value", t),
          t
        );
      }
      const A = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
      function F(t) {
        t = t.trim();
        let e = [],
          r = "",
          i = 0;
        for (let n = 0; n < t.length; n++) {
          let o = t[n];
          "," === o && 0 === i
            ? (e.push(r), (r = ""))
            : ((r += o),
              "(" === o
                ? i++
                : ")" === o &&
                  (i--,
                  -1 === i &&
                    a.throwArgumentError(
                      "unbalanced parenthesis",
                      "value",
                      t,
                    )));
        }
        return (r && e.push(r), e);
      }
    },
    3546: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.defaultAbiCoder = e.AbiCoder = void 0));
      var i = r(2776),
        n = r(2808),
        o = r(2773),
        s = r(3052),
        a = r(2847),
        h = r(4264),
        u = r(3547),
        l = r(4266),
        m = r(3548),
        c = r(4267),
        d = r(4268),
        f = r(4269),
        p = r(4270),
        g = r(4271),
        y = r(3283);
      const v = new o.Logger(s.version),
        w = new RegExp(/^bytes([0-9]*)$/),
        M = new RegExp(/^(u?int)([0-9]*)$/);
      class AbiCoder {
        constructor(t) {
          (0, n.defineReadOnly)(this, "coerceFunc", t || null);
        }
        _getCoder(t) {
          switch (t.baseType) {
            case "address":
              return new h.AddressCoder(t.name);
            case "bool":
              return new l.BooleanCoder(t.name);
            case "string":
              return new p.StringCoder(t.name);
            case "bytes":
              return new m.BytesCoder(t.name);
            case "array":
              return new u.ArrayCoder(
                this._getCoder(t.arrayChildren),
                t.arrayLength,
                t.name,
              );
            case "tuple":
              return new g.TupleCoder(
                (t.components || []).map((t) => this._getCoder(t)),
                t.name,
              );
            case "":
              return new d.NullCoder(t.name);
          }
          let e = t.type.match(M);
          if (e) {
            let r = parseInt(e[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 !== 0) &&
                v.throwArgumentError(
                  "invalid " + e[1] + " bit length",
                  "param",
                  t,
                ),
              new f.NumberCoder(r / 8, "int" === e[1], t.name)
            );
          }
          if (((e = t.type.match(w)), e)) {
            let r = parseInt(e[1]);
            return (
              (0 === r || r > 32) &&
                v.throwArgumentError("invalid bytes length", "param", t),
              new c.FixedBytesCoder(r, t.name)
            );
          }
          return v.throwArgumentError("invalid type", "type", t.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(t, e) {
          return new a.Reader(t, this._getWordSize(), this.coerceFunc, e);
        }
        _getWriter() {
          return new a.Writer(this._getWordSize());
        }
        getDefaultValue(t) {
          const e = t.map((t) => this._getCoder(y.ParamType.from(t))),
            r = new g.TupleCoder(e, "_");
          return r.defaultValue();
        }
        encode(t, e) {
          t.length !== e.length &&
            v.throwError(
              "types/values length mismatch",
              o.Logger.errors.INVALID_ARGUMENT,
              {
                count: { types: t.length, values: e.length },
                value: { types: t, values: e },
              },
            );
          const r = t.map((t) => this._getCoder(y.ParamType.from(t))),
            i = new g.TupleCoder(r, "_"),
            n = this._getWriter();
          return (i.encode(n, e), n.data);
        }
        decode(t, e, r) {
          const n = t.map((t) => this._getCoder(y.ParamType.from(t))),
            o = new g.TupleCoder(n, "_");
          return o.decode(this._getReader((0, i.arrayify)(e), r));
        }
      }
      e.AbiCoder = AbiCoder;
      e.defaultAbiCoder = new AbiCoder();
    },
    3547: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ArrayCoder = void 0),
        (e.pack = h),
        (e.unpack = u));
      var i = r(2773),
        n = r(3052),
        o = r(2847),
        s = r(4265);
      const a = new i.Logger(n.version);
      function h(t, e, r) {
        let n = null;
        if (Array.isArray(r)) n = r;
        else if (r && "object" === typeof r) {
          let t = {};
          n = e.map((e) => {
            const n = e.localName;
            return (
              n ||
                a.throwError(
                  "cannot encode object for signature with missing names",
                  i.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: e, value: r },
                ),
              t[n] &&
                a.throwError(
                  "cannot encode object for signature with duplicate names",
                  i.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: e, value: r },
                ),
              (t[n] = !0),
              r[n]
            );
          });
        } else a.throwArgumentError("invalid tuple value", "tuple", r);
        e.length !== n.length &&
          a.throwArgumentError("types/value length mismatch", "tuple", r);
        let s = new o.Writer(t.wordSize),
          h = new o.Writer(t.wordSize),
          u = [];
        (e.forEach((t, e) => {
          let r = n[e];
          if (t.dynamic) {
            let e = h.length;
            t.encode(h, r);
            let i = s.writeUpdatableValue();
            u.push((t) => {
              i(t + e);
            });
          } else t.encode(s, r);
        }),
          u.forEach((t) => {
            t(s.length);
          }));
        let l = t.appendWriter(s);
        return ((l += t.appendWriter(h)), l);
      }
      function u(t, e) {
        let r = [],
          n = t.subReader(0);
        e.forEach((e) => {
          let o = null;
          if (e.dynamic) {
            let r = t.readValue(),
              a = n.subReader(r.toNumber());
            try {
              o = e.decode(a);
            } catch (s) {
              if (s.code === i.Logger.errors.BUFFER_OVERRUN) throw s;
              ((o = s),
                (o.baseType = e.name),
                (o.name = e.localName),
                (o.type = e.type));
            }
          } else
            try {
              o = e.decode(t);
            } catch (s) {
              if (s.code === i.Logger.errors.BUFFER_OVERRUN) throw s;
              ((o = s),
                (o.baseType = e.name),
                (o.name = e.localName),
                (o.type = e.type));
            }
          void 0 != o && r.push(o);
        });
        const o = e.reduce((t, e) => {
          const r = e.localName;
          return (r && (t[r] || (t[r] = 0), t[r]++), t);
        }, {});
        e.forEach((t, e) => {
          let i = t.localName;
          if (!i || 1 !== o[i]) return;
          if (("length" === i && (i = "_length"), null != r[i])) return;
          const n = r[e];
          n instanceof Error
            ? Object.defineProperty(r, i, {
                enumerable: !0,
                get: () => {
                  throw n;
                },
              })
            : (r[i] = n);
        });
        for (let i = 0; i < r.length; i++) {
          const t = r[i];
          t instanceof Error &&
            Object.defineProperty(r, i, {
              enumerable: !0,
              get: () => {
                throw t;
              },
            });
        }
        return Object.freeze(r);
      }
      class ArrayCoder extends o.Coder {
        constructor(t, e, r) {
          const i = t.type + "[" + (e >= 0 ? e : "") + "]",
            n = -1 === e || t.dynamic;
          (super("array", i, r, n), (this.coder = t), (this.length = e));
        }
        defaultValue() {
          const t = this.coder.defaultValue(),
            e = [];
          for (let r = 0; r < this.length; r++) e.push(t);
          return e;
        }
        encode(t, e) {
          Array.isArray(e) || this._throwError("expected array value", e);
          let r = this.length;
          (-1 === r && ((r = e.length), t.writeValue(e.length)),
            a.checkArgumentCount(
              e.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : ""),
            ));
          let i = [];
          for (let n = 0; n < e.length; n++) i.push(this.coder);
          return h(t, i, e);
        }
        decode(t) {
          let e = this.length;
          -1 === e &&
            ((e = t.readValue().toNumber()),
            32 * e > t._data.length &&
              a.throwError(
                "insufficient data length",
                i.Logger.errors.BUFFER_OVERRUN,
                { length: t._data.length, count: e },
              ));
          let r = [];
          for (let i = 0; i < e; i++) r.push(new s.AnonymousCoder(this.coder));
          return t.coerce(this.name, u(t, r));
        }
      }
      e.ArrayCoder = ArrayCoder;
    },
    3548: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DynamicBytesCoder = e.BytesCoder = void 0));
      var i = r(2776),
        n = r(2847);
      class DynamicBytesCoder extends n.Coder {
        constructor(t, e) {
          super(t, t, e, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(t, e) {
          e = (0, i.arrayify)(e);
          let r = t.writeValue(e.length);
          return ((r += t.writeBytes(e)), r);
        }
        decode(t) {
          return t.readBytes(t.readValue().toNumber(), !0);
        }
      }
      e.DynamicBytesCoder = DynamicBytesCoder;
      class BytesCoder extends DynamicBytesCoder {
        constructor(t) {
          super("bytes", t);
        }
        decode(t) {
          return t.coerce(this.name, (0, i.hexlify)(super.decode(t)));
        }
      }
      e.BytesCoder = BytesCoder;
    },
    3645: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AbiCoder", {
          enumerable: !0,
          get: function () {
            return n.AbiCoder;
          },
        }),
        Object.defineProperty(e, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return i.ConstructorFragment;
          },
        }),
        Object.defineProperty(e, "ErrorFragment", {
          enumerable: !0,
          get: function () {
            return i.ErrorFragment;
          },
        }),
        Object.defineProperty(e, "EventFragment", {
          enumerable: !0,
          get: function () {
            return i.EventFragment;
          },
        }),
        Object.defineProperty(e, "FormatTypes", {
          enumerable: !0,
          get: function () {
            return i.FormatTypes;
          },
        }),
        Object.defineProperty(e, "Fragment", {
          enumerable: !0,
          get: function () {
            return i.Fragment;
          },
        }),
        Object.defineProperty(e, "FunctionFragment", {
          enumerable: !0,
          get: function () {
            return i.FunctionFragment;
          },
        }),
        Object.defineProperty(e, "Indexed", {
          enumerable: !0,
          get: function () {
            return o.Indexed;
          },
        }),
        Object.defineProperty(e, "Interface", {
          enumerable: !0,
          get: function () {
            return o.Interface;
          },
        }),
        Object.defineProperty(e, "LogDescription", {
          enumerable: !0,
          get: function () {
            return o.LogDescription;
          },
        }),
        Object.defineProperty(e, "ParamType", {
          enumerable: !0,
          get: function () {
            return i.ParamType;
          },
        }),
        Object.defineProperty(e, "TransactionDescription", {
          enumerable: !0,
          get: function () {
            return o.TransactionDescription;
          },
        }),
        Object.defineProperty(e, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return o.checkResultErrors;
          },
        }),
        Object.defineProperty(e, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return n.defaultAbiCoder;
          },
        }));
      var i = r(3283),
        n = r(3546),
        o = r(4272);
    },
    4264: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AddressCoder = void 0));
      var i = r(2976),
        n = r(2776),
        o = r(2847);
      class AddressCoder extends o.Coder {
        constructor(t) {
          super("address", "address", t, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(t, e) {
          try {
            e = (0, i.getAddress)(e);
          } catch (r) {
            this._throwError(r.message, e);
          }
          return t.writeValue(e);
        }
        decode(t) {
          return (0, i.getAddress)(
            (0, n.hexZeroPad)(t.readValue().toHexString(), 20),
          );
        }
      }
      e.AddressCoder = AddressCoder;
    },
    4265: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AnonymousCoder = void 0));
      var i = r(2847);
      class AnonymousCoder extends i.Coder {
        constructor(t) {
          (super(t.name, t.type, void 0, t.dynamic), (this.coder = t));
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(t, e) {
          return this.coder.encode(t, e);
        }
        decode(t) {
          return this.coder.decode(t);
        }
      }
      e.AnonymousCoder = AnonymousCoder;
    },
    4266: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BooleanCoder = void 0));
      var i = r(2847);
      class BooleanCoder extends i.Coder {
        constructor(t) {
          super("bool", "bool", t, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(t, e) {
          return t.writeValue(e ? 1 : 0);
        }
        decode(t) {
          return t.coerce(this.type, !t.readValue().isZero());
        }
      }
      e.BooleanCoder = BooleanCoder;
    },
    4267: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FixedBytesCoder = void 0));
      var i = r(2776),
        n = r(2847);
      class FixedBytesCoder extends n.Coder {
        constructor(t, e) {
          let r = "bytes" + String(t);
          (super(r, r, e, !1), (this.size = t));
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size,
          );
        }
        encode(t, e) {
          let r = (0, i.arrayify)(e);
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", e),
            t.writeBytes(r)
          );
        }
        decode(t) {
          return t.coerce(this.name, (0, i.hexlify)(t.readBytes(this.size)));
        }
      }
      e.FixedBytesCoder = FixedBytesCoder;
    },
    4268: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NullCoder = void 0));
      var i = r(2847);
      class NullCoder extends i.Coder {
        constructor(t) {
          super("null", "", t, !1);
        }
        defaultValue() {
          return null;
        }
        encode(t, e) {
          return (
            null != e && this._throwError("not null", e),
            t.writeBytes([])
          );
        }
        decode(t) {
          return (t.readBytes(0), t.coerce(this.name, null));
        }
      }
      e.NullCoder = NullCoder;
    },
    4269: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NumberCoder = void 0));
      var i = r(2829),
        n = r(3272),
        o = r(2847);
      class NumberCoder extends o.Coder {
        constructor(t, e, r) {
          const i = (e ? "int" : "uint") + 8 * t;
          (super(i, i, r, !1), (this.size = t), (this.signed = e));
        }
        defaultValue() {
          return 0;
        }
        encode(t, e) {
          let r = i.BigNumber.from(e),
            o = n.MaxUint256.mask(8 * t.wordSize);
          if (this.signed) {
            let t = o.mask(8 * this.size - 1);
            (r.gt(t) || r.lt(t.add(n.One).mul(n.NegativeOne))) &&
              this._throwError("value out-of-bounds", e);
          } else
            (r.lt(n.Zero) || r.gt(o.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", e);
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)),
            t.writeValue(r)
          );
        }
        decode(t) {
          let e = t.readValue().mask(8 * this.size);
          return (
            this.signed && (e = e.fromTwos(8 * this.size)),
            t.coerce(this.name, e)
          );
        }
      }
      e.NumberCoder = NumberCoder;
    },
    4270: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StringCoder = void 0));
      var i = r(3016),
        n = r(3548);
      class StringCoder extends n.DynamicBytesCoder {
        constructor(t) {
          super("string", t);
        }
        defaultValue() {
          return "";
        }
        encode(t, e) {
          return super.encode(t, (0, i.toUtf8Bytes)(e));
        }
        decode(t) {
          return (0, i.toUtf8String)(super.decode(t));
        }
      }
      e.StringCoder = StringCoder;
    },
    4271: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TupleCoder = void 0));
      var i = r(2847),
        n = r(3547);
      class TupleCoder extends i.Coder {
        constructor(t, e) {
          let r = !1;
          const i = [];
          t.forEach((t) => {
            (t.dynamic && (r = !0), i.push(t.type));
          });
          const n = "tuple(" + i.join(",") + ")";
          (super("tuple", n, e, r), (this.coders = t));
        }
        defaultValue() {
          const t = [];
          this.coders.forEach((e) => {
            t.push(e.defaultValue());
          });
          const e = this.coders.reduce((t, e) => {
            const r = e.localName;
            return (r && (t[r] || (t[r] = 0), t[r]++), t);
          }, {});
          return (
            this.coders.forEach((r, i) => {
              let n = r.localName;
              n &&
                1 === e[n] &&
                ("length" === n && (n = "_length"),
                null == t[n] && (t[n] = t[i]));
            }),
            Object.freeze(t)
          );
        }
        encode(t, e) {
          return (0, n.pack)(t, this.coders, e);
        }
        decode(t) {
          return t.coerce(this.name, (0, n.unpack)(t, this.coders));
        }
      }
      e.TupleCoder = TupleCoder;
    },
    4272: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TransactionDescription =
          e.LogDescription =
          e.Interface =
          e.Indexed =
          e.ErrorDescription =
            void 0),
        Object.defineProperty(e, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return l.checkResultErrors;
          },
        }));
      var i = r(2976),
        n = r(2829),
        o = r(2776),
        s = r(3274),
        a = r(3049),
        h = r(2808),
        u = r(3546),
        l = r(2847),
        m = r(3283),
        c = r(2773),
        d = r(3052);
      const f = new c.Logger(d.version);
      class LogDescription extends h.Description {}
      e.LogDescription = LogDescription;
      class TransactionDescription extends h.Description {}
      e.TransactionDescription = TransactionDescription;
      class ErrorDescription extends h.Description {}
      e.ErrorDescription = ErrorDescription;
      class Indexed extends h.Description {
        static isIndexed(t) {
          return !(!t || !t._isIndexed);
        }
      }
      e.Indexed = Indexed;
      const p = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function g(t, e) {
        const r = new Error(
          "deferred error during ABI decoding triggered accessing " + t,
        );
        return ((r.error = e), r);
      }
      class Interface {
        constructor(t) {
          let e = [];
          ((e = "string" === typeof t ? JSON.parse(t) : t),
            (0, h.defineReadOnly)(
              this,
              "fragments",
              e.map((t) => m.Fragment.from(t)).filter((t) => null != t),
            ),
            (0, h.defineReadOnly)(
              this,
              "_abiCoder",
              (0, h.getStatic)(new.target, "getAbiCoder")(),
            ),
            (0, h.defineReadOnly)(this, "functions", {}),
            (0, h.defineReadOnly)(this, "errors", {}),
            (0, h.defineReadOnly)(this, "events", {}),
            (0, h.defineReadOnly)(this, "structs", {}),
            this.fragments.forEach((t) => {
              let e = null;
              switch (t.type) {
                case "constructor":
                  return this.deploy
                    ? void f.warn("duplicate definition - constructor")
                    : void (0, h.defineReadOnly)(this, "deploy", t);
                case "function":
                  e = this.functions;
                  break;
                case "event":
                  e = this.events;
                  break;
                case "error":
                  e = this.errors;
                  break;
                default:
                  return;
              }
              let r = t.format();
              e[r] ? f.warn("duplicate definition - " + r) : (e[r] = t);
            }),
            this.deploy ||
              (0, h.defineReadOnly)(
                this,
                "deploy",
                m.ConstructorFragment.from({
                  payable: !1,
                  type: "constructor",
                }),
              ),
            (0, h.defineReadOnly)(this, "_isInterface", !0));
        }
        format(t) {
          (t || (t = m.FormatTypes.full),
            t === m.FormatTypes.sighash &&
              f.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                t,
              ));
          const e = this.fragments.map((e) => e.format(t));
          return t === m.FormatTypes.json
            ? JSON.stringify(e.map((t) => JSON.parse(t)))
            : e;
        }
        static getAbiCoder() {
          return u.defaultAbiCoder;
        }
        static getAddress(t) {
          return (0, i.getAddress)(t);
        }
        static getSighash(t) {
          return (0, o.hexDataSlice)((0, s.id)(t.format()), 0, 4);
        }
        static getEventTopic(t) {
          return (0, s.id)(t.format());
        }
        getFunction(t) {
          if ((0, o.isHexString)(t)) {
            for (const e in this.functions)
              if (t === this.getSighash(e)) return this.functions[e];
            f.throwArgumentError("no matching function", "sighash", t);
          }
          if (-1 === t.indexOf("(")) {
            const e = t.trim(),
              r = Object.keys(this.functions).filter(
                (t) => t.split("(")[0] === e,
              );
            return (
              0 === r.length
                ? f.throwArgumentError("no matching function", "name", e)
                : r.length > 1 &&
                  f.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    e,
                  ),
              this.functions[r[0]]
            );
          }
          const e = this.functions[m.FunctionFragment.fromString(t).format()];
          return (
            e || f.throwArgumentError("no matching function", "signature", t),
            e
          );
        }
        getEvent(t) {
          if ((0, o.isHexString)(t)) {
            const e = t.toLowerCase();
            for (const t in this.events)
              if (e === this.getEventTopic(t)) return this.events[t];
            f.throwArgumentError("no matching event", "topichash", e);
          }
          if (-1 === t.indexOf("(")) {
            const e = t.trim(),
              r = Object.keys(this.events).filter((t) => t.split("(")[0] === e);
            return (
              0 === r.length
                ? f.throwArgumentError("no matching event", "name", e)
                : r.length > 1 &&
                  f.throwArgumentError("multiple matching events", "name", e),
              this.events[r[0]]
            );
          }
          const e = this.events[m.EventFragment.fromString(t).format()];
          return (
            e || f.throwArgumentError("no matching event", "signature", t),
            e
          );
        }
        getError(t) {
          if ((0, o.isHexString)(t)) {
            const e = (0, h.getStatic)(this.constructor, "getSighash");
            for (const r in this.errors) {
              const i = this.errors[r];
              if (t === e(i)) return this.errors[r];
            }
            f.throwArgumentError("no matching error", "sighash", t);
          }
          if (-1 === t.indexOf("(")) {
            const e = t.trim(),
              r = Object.keys(this.errors).filter((t) => t.split("(")[0] === e);
            return (
              0 === r.length
                ? f.throwArgumentError("no matching error", "name", e)
                : r.length > 1 &&
                  f.throwArgumentError("multiple matching errors", "name", e),
              this.errors[r[0]]
            );
          }
          const e = this.errors[m.FunctionFragment.fromString(t).format()];
          return (
            e || f.throwArgumentError("no matching error", "signature", t),
            e
          );
        }
        getSighash(t) {
          if ("string" === typeof t)
            try {
              t = this.getFunction(t);
            } catch (e) {
              try {
                t = this.getError(t);
              } catch (r) {
                throw e;
              }
            }
          return (0, h.getStatic)(this.constructor, "getSighash")(t);
        }
        getEventTopic(t) {
          return (
            "string" === typeof t && (t = this.getEvent(t)),
            (0, h.getStatic)(this.constructor, "getEventTopic")(t)
          );
        }
        _decodeParams(t, e) {
          return this._abiCoder.decode(t, e);
        }
        _encodeParams(t, e) {
          return this._abiCoder.encode(t, e);
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || []);
        }
        decodeErrorResult(t, e) {
          "string" === typeof t && (t = this.getError(t));
          const r = (0, o.arrayify)(e);
          return (
            (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(t) &&
              f.throwArgumentError(
                `data signature does not match error ${t.name}.`,
                "data",
                (0, o.hexlify)(r),
              ),
            this._decodeParams(t.inputs, r.slice(4))
          );
        }
        encodeErrorResult(t, e) {
          return (
            "string" === typeof t && (t = this.getError(t)),
            (0, o.hexlify)(
              (0, o.concat)([
                this.getSighash(t),
                this._encodeParams(t.inputs, e || []),
              ]),
            )
          );
        }
        decodeFunctionData(t, e) {
          "string" === typeof t && (t = this.getFunction(t));
          const r = (0, o.arrayify)(e);
          return (
            (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(t) &&
              f.throwArgumentError(
                `data signature does not match function ${t.name}.`,
                "data",
                (0, o.hexlify)(r),
              ),
            this._decodeParams(t.inputs, r.slice(4))
          );
        }
        encodeFunctionData(t, e) {
          return (
            "string" === typeof t && (t = this.getFunction(t)),
            (0, o.hexlify)(
              (0, o.concat)([
                this.getSighash(t),
                this._encodeParams(t.inputs, e || []),
              ]),
            )
          );
        }
        decodeFunctionResult(t, e) {
          "string" === typeof t && (t = this.getFunction(t));
          let r = (0, o.arrayify)(e),
            i = null,
            n = "",
            s = null,
            a = null,
            h = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(t.outputs, r);
              } catch (u) {}
              break;
            case 4: {
              const t = (0, o.hexlify)(r.slice(0, 4)),
                e = p[t];
              if (e)
                ((s = this._abiCoder.decode(e.inputs, r.slice(4))),
                  (a = e.name),
                  (h = e.signature),
                  e.reason && (i = s[0]),
                  "Error" === a
                    ? (n =
                        "; VM Exception while processing transaction: reverted with reason string " +
                        JSON.stringify(s[0]))
                    : "Panic" === a &&
                      (n =
                        "; VM Exception while processing transaction: reverted with panic code " +
                        s[0]));
              else
                try {
                  const e = this.getError(t);
                  ((s = this._abiCoder.decode(e.inputs, r.slice(4))),
                    (a = e.name),
                    (h = e.format()));
                } catch (u) {}
              break;
            }
          }
          return f.throwError(
            "call revert exception" + n,
            c.Logger.errors.CALL_EXCEPTION,
            {
              method: t.format(),
              data: (0, o.hexlify)(e),
              errorArgs: s,
              errorName: a,
              errorSignature: h,
              reason: i,
            },
          );
        }
        encodeFunctionResult(t, e) {
          return (
            "string" === typeof t && (t = this.getFunction(t)),
            (0, o.hexlify)(this._abiCoder.encode(t.outputs, e || []))
          );
        }
        encodeFilterTopics(t, e) {
          ("string" === typeof t && (t = this.getEvent(t)),
            e.length > t.inputs.length &&
              f.throwError(
                "too many arguments for " + t.format(),
                c.Logger.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: e },
              ));
          let r = [];
          t.anonymous || r.push(this.getEventTopic(t));
          const i = (t, e) =>
            "string" === t.type
              ? (0, s.id)(e)
              : "bytes" === t.type
                ? (0, a.keccak256)((0, o.hexlify)(e))
                : ("bool" === t.type &&
                    "boolean" === typeof e &&
                    (e = e ? "0x01" : "0x00"),
                  t.type.match(/^u?int/) &&
                    (e = n.BigNumber.from(e).toHexString()),
                  "address" === t.type &&
                    this._abiCoder.encode(["address"], [e]),
                  (0, o.hexZeroPad)((0, o.hexlify)(e), 32));
          e.forEach((e, n) => {
            let o = t.inputs[n];
            o.indexed
              ? null == e
                ? r.push(null)
                : "array" === o.baseType || "tuple" === o.baseType
                  ? f.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + o.name,
                      e,
                    )
                  : Array.isArray(e)
                    ? r.push(e.map((t) => i(o, t)))
                    : r.push(i(o, e))
              : null != e &&
                f.throwArgumentError(
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + o.name,
                  e,
                );
          });
          while (r.length && null === r[r.length - 1]) r.pop();
          return r;
        }
        encodeEventLog(t, e) {
          "string" === typeof t && (t = this.getEvent(t));
          const r = [],
            i = [],
            n = [];
          return (
            t.anonymous || r.push(this.getEventTopic(t)),
            e.length !== t.inputs.length &&
              f.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                e,
              ),
            t.inputs.forEach((t, o) => {
              const h = e[o];
              if (t.indexed)
                if ("string" === t.type) r.push((0, s.id)(h));
                else if ("bytes" === t.type) r.push((0, a.keccak256)(h));
                else {
                  if ("tuple" === t.baseType || "array" === t.baseType)
                    throw new Error("not implemented");
                  r.push(this._abiCoder.encode([t.type], [h]));
                }
              else (i.push(t), n.push(h));
            }),
            { data: this._abiCoder.encode(i, n), topics: r }
          );
        }
        decodeEventLog(t, e, r) {
          if (
            ("string" === typeof t && (t = this.getEvent(t)),
            null != r && !t.anonymous)
          ) {
            let e = this.getEventTopic(t);
            (((0, o.isHexString)(r[0], 32) && r[0].toLowerCase() === e) ||
              f.throwError(
                "fragment/topic mismatch",
                c.Logger.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: e, value: r[0] },
              ),
              (r = r.slice(1)));
          }
          let i = [],
            n = [],
            s = [];
          t.inputs.forEach((t, e) => {
            t.indexed
              ? "string" === t.type ||
                "bytes" === t.type ||
                "tuple" === t.baseType ||
                "array" === t.baseType
                ? (i.push(
                    m.ParamType.fromObject({ type: "bytes32", name: t.name }),
                  ),
                  s.push(!0))
                : (i.push(t), s.push(!1))
              : (n.push(t), s.push(!1));
          });
          let a = null != r ? this._abiCoder.decode(i, (0, o.concat)(r)) : null,
            h = this._abiCoder.decode(n, e, !0),
            u = [],
            l = 0,
            d = 0;
          t.inputs.forEach((t, e) => {
            if (t.indexed)
              if (null == a) u[e] = new Indexed({ _isIndexed: !0, hash: null });
              else if (s[e])
                u[e] = new Indexed({ _isIndexed: !0, hash: a[d++] });
              else
                try {
                  u[e] = a[d++];
                } catch (r) {
                  u[e] = r;
                }
            else
              try {
                u[e] = h[l++];
              } catch (r) {
                u[e] = r;
              }
            if (t.name && null == u[t.name]) {
              const r = u[e];
              r instanceof Error
                ? Object.defineProperty(u, t.name, {
                    enumerable: !0,
                    get: () => {
                      throw g("property " + JSON.stringify(t.name), r);
                    },
                  })
                : (u[t.name] = r);
            }
          });
          for (let o = 0; o < u.length; o++) {
            const t = u[o];
            t instanceof Error &&
              Object.defineProperty(u, o, {
                enumerable: !0,
                get: () => {
                  throw g("index " + o, t);
                },
              });
          }
          return Object.freeze(u);
        }
        parseTransaction(t) {
          let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
          return e
            ? new TransactionDescription({
                args: this._abiCoder.decode(
                  e.inputs,
                  "0x" + t.data.substring(10),
                ),
                functionFragment: e,
                name: e.name,
                signature: e.format(),
                sighash: this.getSighash(e),
                value: n.BigNumber.from(t.value || "0"),
              })
            : null;
        }
        parseLog(t) {
          let e = this.getEvent(t.topics[0]);
          return !e || e.anonymous
            ? null
            : new LogDescription({
                eventFragment: e,
                name: e.name,
                signature: e.format(),
                topic: this.getEventTopic(e),
                args: this.decodeEventLog(e, t.data, t.topics),
              });
        }
        parseError(t) {
          const e = (0, o.hexlify)(t);
          let r = this.getError(e.substring(0, 10).toLowerCase());
          return r
            ? new ErrorDescription({
                args: this._abiCoder.decode(r.inputs, "0x" + e.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null;
        }
        static isInterface(t) {
          return !(!t || !t._isInterface);
        }
      }
      e.Interface = Interface;
    },
    4999: function (t, e) {},
    7855: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function i(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(7856).Buffer;
          } catch (T) {}
          function a(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function h(t, e, r) {
            var i = a(t, r);
            return (r - 1 >= e && (i |= a(t, r - 1) << 4), i);
          }
          function u(t, e, r, n) {
            for (
              var o = 0, s = 0, a = Math.min(t.length, r), h = e;
              h < a;
              h++
            ) {
              var u = t.charCodeAt(h) - 48;
              ((o *= n),
                (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
                i(u >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, r) {
              if ("number" === typeof t) return this._initNumber(t, e, r);
              if ("object" === typeof t) return this._initArray(t, e, r);
              ("hex" === e && (e = 16),
                i(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === e
                    ? this._parseHex(t, n, r)
                    : (this._parseBase(t, e, n),
                      "le" === r && this._initArray(this.toArray(), e, r))));
            }),
            (o.prototype._initNumber = function (t, e, r) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (i(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                a = 0;
              if ("be" === r)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), o++));
              else if ("le" === r)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, r) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === r)
                for (i = t.length - 1; i >= e; i -= 2)
                  ((n = h(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var a = t.length - e;
                for (i = a % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                  ((n = h(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              (i--, (n = (n / e) | 0));
              for (
                var o = t.length - r,
                  s = o % i,
                  a = Math.min(o, o - s) + r,
                  h = 0,
                  l = r;
                l < a;
                l += i
              )
                ((h = u(t, l, l + i, e)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var m = 1;
                for (h = u(t, l, t.length, e), l = 0; l < s; l++) m *= e;
                (this.imuln(m),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = m;
            } catch (T) {
              o.prototype.inspect = m;
            }
          else o.prototype.inspect = m;
          function m() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var c = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            f = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  h = (16777215 & ((a << n) | o)).toString(16);
                ((o = (a >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? c[6 - h.length] + h + r
                      : h + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var u = d[t],
                l = f[t];
              r = "";
              var m = this.clone();
              m.negative = 0;
              while (!m.isZero()) {
                var p = m.modrn(l).toString(t);
                ((m = m.idivn(l)),
                  (r = m.isZero() ? p + r : c[u - p.length] + p + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            i(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      i(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var p = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function g(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] >>> n) & 1;
            }
            return e;
          }
          function y(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              a = 67108863 & s,
              h = (s / 67108864) | 0;
            r.words[0] = a;
            for (var u = 1; u < i; u++) {
              for (
                var l = h >>> 26,
                  m = 67108863 & h,
                  c = Math.min(u, e.length - 1),
                  d = Math.max(0, u - t.length + 1);
                d <= c;
                d++
              ) {
                var f = (u - d) | 0;
                ((n = 0 | t.words[f]),
                  (o = 0 | e.words[d]),
                  (s = n * o + m),
                  (l += (s / 67108864) | 0),
                  (m = 67108863 & s));
              }
              ((r.words[u] = 0 | m), (h = 0 | l));
            }
            return (0 !== h ? (r.words[u] = 0 | h) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = p(t, o),
              a = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + a](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < t.length && (t[r++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (r < t.length) {
                t[r++] = i;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (t[r--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (r >= 0) {
                t[r--] = i;
                while (r >= 0) t[r--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                0 === (127 & e) && ((r += 7), (e >>>= 7)),
                0 === (15 & e) && ((r += 4), (e >>>= 4)),
                0 === (3 & e) && ((r += 2), (e >>>= 2)),
                0 === (1 & e) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = e.words[i] ^ r.words[i];
              if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              i("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (i = t))
                : ((r = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && o < r.length; o++)
                ((e = (0 | r.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((e = (0 | r.words[s]) - (0 | i.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== o && s < r.length; s++)
                ((e = (0 | r.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === o && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var v = function (t, e, r) {
            var i,
              n,
              o,
              s = t.words,
              a = e.words,
              h = r.words,
              u = 0,
              l = 0 | s[0],
              m = 8191 & l,
              c = l >>> 13,
              d = 0 | s[1],
              f = 8191 & d,
              p = d >>> 13,
              g = 0 | s[2],
              y = 8191 & g,
              v = g >>> 13,
              w = 0 | s[3],
              M = 8191 & w,
              b = w >>> 13,
              _ = 0 | s[4],
              E = 8191 & _,
              A = _ >>> 13,
              F = 0 | s[5],
              x = 8191 & F,
              C = F >>> 13,
              O = 0 | s[6],
              S = 8191 & O,
              T = O >>> 13,
              j = 0 | s[7],
              N = 8191 & j,
              P = j >>> 13,
              k = 0 | s[8],
              R = 8191 & k,
              B = k >>> 13,
              L = 0 | s[9],
              I = 8191 & L,
              z = L >>> 13,
              D = 0 | a[0],
              V = 8191 & D,
              U = D >>> 13,
              Z = 0 | a[1],
              q = 8191 & Z,
              J = Z >>> 13,
              W = 0 | a[2],
              $ = 8191 & W,
              H = W >>> 13,
              G = 0 | a[3],
              K = 8191 & G,
              X = G >>> 13,
              Q = 0 | a[4],
              Y = 8191 & Q,
              tt = Q >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | a[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              at = 0 | a[7],
              ht = 8191 & at,
              ut = at >>> 13,
              lt = 0 | a[8],
              mt = 8191 & lt,
              ct = lt >>> 13,
              dt = 0 | a[9],
              ft = 8191 & dt,
              pt = dt >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(m, V)),
              (n = Math.imul(m, U)),
              (n = (n + Math.imul(c, V)) | 0),
              (o = Math.imul(c, U)));
            var gt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(f, V)),
              (n = Math.imul(f, U)),
              (n = (n + Math.imul(p, V)) | 0),
              (o = Math.imul(p, U)),
              (i = (i + Math.imul(m, q)) | 0),
              (n = (n + Math.imul(m, J)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (o = (o + Math.imul(c, J)) | 0));
            var yt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(y, V)),
              (n = Math.imul(y, U)),
              (n = (n + Math.imul(v, V)) | 0),
              (o = Math.imul(v, U)),
              (i = (i + Math.imul(f, q)) | 0),
              (n = (n + Math.imul(f, J)) | 0),
              (n = (n + Math.imul(p, q)) | 0),
              (o = (o + Math.imul(p, J)) | 0),
              (i = (i + Math.imul(m, $)) | 0),
              (n = (n + Math.imul(m, H)) | 0),
              (n = (n + Math.imul(c, $)) | 0),
              (o = (o + Math.imul(c, H)) | 0));
            var vt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(M, V)),
              (n = Math.imul(M, U)),
              (n = (n + Math.imul(b, V)) | 0),
              (o = Math.imul(b, U)),
              (i = (i + Math.imul(y, q)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (n = (n + Math.imul(v, q)) | 0),
              (o = (o + Math.imul(v, J)) | 0),
              (i = (i + Math.imul(f, $)) | 0),
              (n = (n + Math.imul(f, H)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (o = (o + Math.imul(p, H)) | 0),
              (i = (i + Math.imul(m, K)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (n = (n + Math.imul(c, K)) | 0),
              (o = (o + Math.imul(c, X)) | 0));
            var wt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(E, V)),
              (n = Math.imul(E, U)),
              (n = (n + Math.imul(A, V)) | 0),
              (o = Math.imul(A, U)),
              (i = (i + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(b, q)) | 0),
              (o = (o + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(y, $)) | 0),
              (n = (n + Math.imul(y, H)) | 0),
              (n = (n + Math.imul(v, $)) | 0),
              (o = (o + Math.imul(v, H)) | 0),
              (i = (i + Math.imul(f, K)) | 0),
              (n = (n + Math.imul(f, X)) | 0),
              (n = (n + Math.imul(p, K)) | 0),
              (o = (o + Math.imul(p, X)) | 0),
              (i = (i + Math.imul(m, Y)) | 0),
              (n = (n + Math.imul(m, tt)) | 0),
              (n = (n + Math.imul(c, Y)) | 0),
              (o = (o + Math.imul(c, tt)) | 0));
            var Mt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(x, V)),
              (n = Math.imul(x, U)),
              (n = (n + Math.imul(C, V)) | 0),
              (o = Math.imul(C, U)),
              (i = (i + Math.imul(E, q)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (n = (n + Math.imul(A, q)) | 0),
              (o = (o + Math.imul(A, J)) | 0),
              (i = (i + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (o = (o + Math.imul(b, H)) | 0),
              (i = (i + Math.imul(y, K)) | 0),
              (n = (n + Math.imul(y, X)) | 0),
              (n = (n + Math.imul(v, K)) | 0),
              (o = (o + Math.imul(v, X)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (o = (o + Math.imul(p, tt)) | 0),
              (i = (i + Math.imul(m, rt)) | 0),
              (n = (n + Math.imul(m, it)) | 0),
              (n = (n + Math.imul(c, rt)) | 0),
              (o = (o + Math.imul(c, it)) | 0));
            var bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(S, V)),
              (n = Math.imul(S, U)),
              (n = (n + Math.imul(T, V)) | 0),
              (o = Math.imul(T, U)),
              (i = (i + Math.imul(x, q)) | 0),
              (n = (n + Math.imul(x, J)) | 0),
              (n = (n + Math.imul(C, q)) | 0),
              (o = (o + Math.imul(C, J)) | 0),
              (i = (i + Math.imul(E, $)) | 0),
              (n = (n + Math.imul(E, H)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (o = (o + Math.imul(A, H)) | 0),
              (i = (i + Math.imul(M, K)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(b, K)) | 0),
              (o = (o + Math.imul(b, X)) | 0),
              (i = (i + Math.imul(y, Y)) | 0),
              (n = (n + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(v, Y)) | 0),
              (o = (o + Math.imul(v, tt)) | 0),
              (i = (i + Math.imul(f, rt)) | 0),
              (n = (n + Math.imul(f, it)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (o = (o + Math.imul(p, it)) | 0),
              (i = (i + Math.imul(m, ot)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (n = (n + Math.imul(c, ot)) | 0),
              (o = (o + Math.imul(c, st)) | 0));
            var _t = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(N, V)),
              (n = Math.imul(N, U)),
              (n = (n + Math.imul(P, V)) | 0),
              (o = Math.imul(P, U)),
              (i = (i + Math.imul(S, q)) | 0),
              (n = (n + Math.imul(S, J)) | 0),
              (n = (n + Math.imul(T, q)) | 0),
              (o = (o + Math.imul(T, J)) | 0),
              (i = (i + Math.imul(x, $)) | 0),
              (n = (n + Math.imul(x, H)) | 0),
              (n = (n + Math.imul(C, $)) | 0),
              (o = (o + Math.imul(C, H)) | 0),
              (i = (i + Math.imul(E, K)) | 0),
              (n = (n + Math.imul(E, X)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, X)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (n = (n + Math.imul(y, it)) | 0),
              (n = (n + Math.imul(v, rt)) | 0),
              (o = (o + Math.imul(v, it)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (n = (n + Math.imul(f, st)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (o = (o + Math.imul(p, st)) | 0),
              (i = (i + Math.imul(m, ht)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (n = (n + Math.imul(c, ht)) | 0),
              (o = (o + Math.imul(c, ut)) | 0));
            var Et = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(R, V)),
              (n = Math.imul(R, U)),
              (n = (n + Math.imul(B, V)) | 0),
              (o = Math.imul(B, U)),
              (i = (i + Math.imul(N, q)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(P, q)) | 0),
              (o = (o + Math.imul(P, J)) | 0),
              (i = (i + Math.imul(S, $)) | 0),
              (n = (n + Math.imul(S, H)) | 0),
              (n = (n + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, H)) | 0),
              (i = (i + Math.imul(x, K)) | 0),
              (n = (n + Math.imul(x, X)) | 0),
              (n = (n + Math.imul(C, K)) | 0),
              (o = (o + Math.imul(C, X)) | 0),
              (i = (i + Math.imul(E, Y)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(y, ot)) | 0),
              (n = (n + Math.imul(y, st)) | 0),
              (n = (n + Math.imul(v, ot)) | 0),
              (o = (o + Math.imul(v, st)) | 0),
              (i = (i + Math.imul(f, ht)) | 0),
              (n = (n + Math.imul(f, ut)) | 0),
              (n = (n + Math.imul(p, ht)) | 0),
              (o = (o + Math.imul(p, ut)) | 0),
              (i = (i + Math.imul(m, mt)) | 0),
              (n = (n + Math.imul(m, ct)) | 0),
              (n = (n + Math.imul(c, mt)) | 0),
              (o = (o + Math.imul(c, ct)) | 0));
            var At = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(I, V)),
              (n = Math.imul(I, U)),
              (n = (n + Math.imul(z, V)) | 0),
              (o = Math.imul(z, U)),
              (i = (i + Math.imul(R, q)) | 0),
              (n = (n + Math.imul(R, J)) | 0),
              (n = (n + Math.imul(B, q)) | 0),
              (o = (o + Math.imul(B, J)) | 0),
              (i = (i + Math.imul(N, $)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(P, $)) | 0),
              (o = (o + Math.imul(P, H)) | 0),
              (i = (i + Math.imul(S, K)) | 0),
              (n = (n + Math.imul(S, X)) | 0),
              (n = (n + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, X)) | 0),
              (i = (i + Math.imul(x, Y)) | 0),
              (n = (n + Math.imul(x, tt)) | 0),
              (n = (n + Math.imul(C, Y)) | 0),
              (o = (o + Math.imul(C, tt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(A, rt)) | 0),
              (o = (o + Math.imul(A, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (i = (i + Math.imul(y, ht)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (n = (n + Math.imul(v, ht)) | 0),
              (o = (o + Math.imul(v, ut)) | 0),
              (i = (i + Math.imul(f, mt)) | 0),
              (n = (n + Math.imul(f, ct)) | 0),
              (n = (n + Math.imul(p, mt)) | 0),
              (o = (o + Math.imul(p, ct)) | 0),
              (i = (i + Math.imul(m, ft)) | 0),
              (n = (n + Math.imul(m, pt)) | 0),
              (n = (n + Math.imul(c, ft)) | 0),
              (o = (o + Math.imul(c, pt)) | 0));
            var Ft = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (i = Math.imul(I, q)),
              (n = Math.imul(I, J)),
              (n = (n + Math.imul(z, q)) | 0),
              (o = Math.imul(z, J)),
              (i = (i + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(R, H)) | 0),
              (n = (n + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, H)) | 0),
              (i = (i + Math.imul(N, K)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (n = (n + Math.imul(P, K)) | 0),
              (o = (o + Math.imul(P, X)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (n = (n + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (i = (i + Math.imul(x, rt)) | 0),
              (n = (n + Math.imul(x, it)) | 0),
              (n = (n + Math.imul(C, rt)) | 0),
              (o = (o + Math.imul(C, it)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (i = (i + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(b, ht)) | 0),
              (o = (o + Math.imul(b, ut)) | 0),
              (i = (i + Math.imul(y, mt)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (o = (o + Math.imul(v, ct)) | 0),
              (i = (i + Math.imul(f, ft)) | 0),
              (n = (n + Math.imul(f, pt)) | 0),
              (n = (n + Math.imul(p, ft)) | 0),
              (o = (o + Math.imul(p, pt)) | 0));
            var xt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(I, $)),
              (n = Math.imul(I, H)),
              (n = (n + Math.imul(z, $)) | 0),
              (o = Math.imul(z, H)),
              (i = (i + Math.imul(R, K)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, X)) | 0),
              (i = (i + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (n = (n + Math.imul(S, it)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(T, it)) | 0),
              (i = (i + Math.imul(x, ot)) | 0),
              (n = (n + Math.imul(x, st)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (o = (o + Math.imul(C, st)) | 0),
              (i = (i + Math.imul(E, ht)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (n = (n + Math.imul(A, ht)) | 0),
              (o = (o + Math.imul(A, ut)) | 0),
              (i = (i + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(b, mt)) | 0),
              (o = (o + Math.imul(b, ct)) | 0),
              (i = (i + Math.imul(y, ft)) | 0),
              (n = (n + Math.imul(y, pt)) | 0),
              (n = (n + Math.imul(v, ft)) | 0),
              (o = (o + Math.imul(v, pt)) | 0));
            var Ct = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (i = Math.imul(I, K)),
              (n = Math.imul(I, X)),
              (n = (n + Math.imul(z, K)) | 0),
              (o = Math.imul(z, X)),
              (i = (i + Math.imul(R, Y)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(B, Y)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (i = (i + Math.imul(N, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (o = (o + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(S, ot)) | 0),
              (n = (n + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (i = (i + Math.imul(x, ht)) | 0),
              (n = (n + Math.imul(x, ut)) | 0),
              (n = (n + Math.imul(C, ht)) | 0),
              (o = (o + Math.imul(C, ut)) | 0),
              (i = (i + Math.imul(E, mt)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (o = (o + Math.imul(A, ct)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, pt)) | 0),
              (n = (n + Math.imul(b, ft)) | 0),
              (o = (o + Math.imul(b, pt)) | 0));
            var Ot = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(I, Y)),
              (n = Math.imul(I, tt)),
              (n = (n + Math.imul(z, Y)) | 0),
              (o = Math.imul(z, tt)),
              (i = (i + Math.imul(R, rt)) | 0),
              (n = (n + Math.imul(R, it)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (o = (o + Math.imul(B, it)) | 0),
              (i = (i + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (i = (i + Math.imul(S, ht)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (n = (n + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, ut)) | 0),
              (i = (i + Math.imul(x, mt)) | 0),
              (n = (n + Math.imul(x, ct)) | 0),
              (n = (n + Math.imul(C, mt)) | 0),
              (o = (o + Math.imul(C, ct)) | 0),
              (i = (i + Math.imul(E, ft)) | 0),
              (n = (n + Math.imul(E, pt)) | 0),
              (n = (n + Math.imul(A, ft)) | 0),
              (o = (o + Math.imul(A, pt)) | 0));
            var St = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(I, rt)),
              (n = Math.imul(I, it)),
              (n = (n + Math.imul(z, rt)) | 0),
              (o = Math.imul(z, it)),
              (i = (i + Math.imul(R, ot)) | 0),
              (n = (n + Math.imul(R, st)) | 0),
              (n = (n + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (i = (i + Math.imul(N, ht)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(P, ht)) | 0),
              (o = (o + Math.imul(P, ut)) | 0),
              (i = (i + Math.imul(S, mt)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(T, mt)) | 0),
              (o = (o + Math.imul(T, ct)) | 0),
              (i = (i + Math.imul(x, ft)) | 0),
              (n = (n + Math.imul(x, pt)) | 0),
              (n = (n + Math.imul(C, ft)) | 0),
              (o = (o + Math.imul(C, pt)) | 0));
            var Tt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (i = Math.imul(I, ot)),
              (n = Math.imul(I, st)),
              (n = (n + Math.imul(z, ot)) | 0),
              (o = Math.imul(z, st)),
              (i = (i + Math.imul(R, ht)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (n = (n + Math.imul(B, ht)) | 0),
              (o = (o + Math.imul(B, ut)) | 0),
              (i = (i + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (i = (i + Math.imul(S, ft)) | 0),
              (n = (n + Math.imul(S, pt)) | 0),
              (n = (n + Math.imul(T, ft)) | 0),
              (o = (o + Math.imul(T, pt)) | 0));
            var jt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (jt >>> 26)) | 0),
              (jt &= 67108863),
              (i = Math.imul(I, ht)),
              (n = Math.imul(I, ut)),
              (n = (n + Math.imul(z, ht)) | 0),
              (o = Math.imul(z, ut)),
              (i = (i + Math.imul(R, mt)) | 0),
              (n = (n + Math.imul(R, ct)) | 0),
              (n = (n + Math.imul(B, mt)) | 0),
              (o = (o + Math.imul(B, ct)) | 0),
              (i = (i + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, pt)) | 0),
              (n = (n + Math.imul(P, ft)) | 0),
              (o = (o + Math.imul(P, pt)) | 0));
            var Nt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(I, mt)),
              (n = Math.imul(I, ct)),
              (n = (n + Math.imul(z, mt)) | 0),
              (o = Math.imul(z, ct)),
              (i = (i + Math.imul(R, ft)) | 0),
              (n = (n + Math.imul(R, pt)) | 0),
              (n = (n + Math.imul(B, ft)) | 0),
              (o = (o + Math.imul(B, pt)) | 0));
            var Pt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(I, ft)),
              (n = Math.imul(I, pt)),
              (n = (n + Math.imul(z, ft)) | 0),
              (o = Math.imul(z, pt)));
            var kt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (u = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (h[0] = gt),
              (h[1] = yt),
              (h[2] = vt),
              (h[3] = wt),
              (h[4] = Mt),
              (h[5] = bt),
              (h[6] = _t),
              (h[7] = Et),
              (h[8] = At),
              (h[9] = Ft),
              (h[10] = xt),
              (h[11] = Ct),
              (h[12] = Ot),
              (h[13] = St),
              (h[14] = Tt),
              (h[15] = jt),
              (h[16] = Nt),
              (h[17] = Pt),
              (h[18] = kt),
              0 !== u && ((h[19] = u), r.length++),
              r
            );
          };
          function w(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var a = 67108863 & i,
                  h = Math.min(o, e.length - 1),
                  u = Math.max(0, o - t.length + 1);
                u <= h;
                u++
              ) {
                var l = o - u,
                  m = 0 | t.words[l],
                  c = 0 | e.words[u],
                  d = m * c,
                  f = 67108863 & d;
                ((s = (s + ((d / 67108864) | 0)) | 0),
                  (f = (f + a) | 0),
                  (a = 67108863 & f),
                  (s = (s + (f >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = a), (i = s), (s = n));
            }
            return (0 !== i ? (r.words[o] = i) : r.length--, r._strip());
          }
          function M(t, e, r) {
            return w(t, e, r);
          }
          function b(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (v = y),
            (o.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? v(this, t, e)
                    : i < 63
                      ? y(this, t, e)
                      : i < 1024
                        ? w(this, t, e)
                        : M(this, t, e)),
                r
              );
            }),
            (b.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (b.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (b.prototype.permute = function (t, e, r, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
            }),
            (b.prototype.transform = function (t, e, r, i, n, o) {
              this.permute(o, t, e, r, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var a = s << 1,
                    h = Math.cos((2 * Math.PI) / a),
                    u = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < n;
                  l += a
                )
                  for (var m = h, c = u, d = 0; d < s; d++) {
                    var f = r[l + d],
                      p = i[l + d],
                      g = r[l + d + s],
                      y = i[l + d + s],
                      v = m * g - c * y;
                    ((y = m * y + c * g),
                      (g = v),
                      (r[l + d] = f + g),
                      (i[l + d] = p + y),
                      (r[l + d + s] = f - g),
                      (i[l + d + s] = p - y),
                      d !== a &&
                        ((v = h * m - u * c), (c = h * c + u * m), (m = v)));
                  }
            }),
            (b.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (b.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[r - i - 1]),
                    (t[r - i - 1] = n),
                    (n = e[i]),
                    (e[i] = -e[r - i - 1]),
                    (e[r - i - 1] = -n));
                }
            }),
            (b.prototype.normalize13b = function (t, e) {
              for (var r = 0, i = 0; i < e / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / e) +
                  Math.round(t[2 * i] / e) +
                  r;
                ((t[i] = 67108863 & n),
                  (r = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (b.prototype.convert13b = function (t, e, r, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) r[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (b.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (b.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                a = new Array(i),
                h = new Array(i),
                u = new Array(i),
                l = new Array(i),
                m = new Array(i),
                c = r.words;
              ((c.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, u, i),
                this.transform(s, o, a, h, i, n),
                this.transform(u, o, l, m, i, n));
              for (var d = 0; d < i; d++) {
                var f = a[d] * l[d] - h[d] * m[d];
                ((h[d] = a[d] * m[d] + h[d] * l[d]), (a[d] = f));
              }
              return (
                this.conjugate(a, h, i),
                this.transform(a, h, c, o, i, n),
                this.conjugate(c, o, i),
                this.normalize13b(c, i),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                M(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var r = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[n] = r), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = g(t);
              if (0 === e.length) return new o(1);
              for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                if (0 !== e[i]) break;
              if (++i < e.length)
                for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                  0 !== e[i] && (r = r.mul(n));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                n = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    h = ((0 | this.words[e]) - a) << r;
                  ((this.words[e] = h | s), (s = a >>> (26 - r)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                h = r;
              if (((n -= s), (n = Math.max(0, n)), h)) {
                for (var u = 0; u < s; u++) h.words[u] = this.words[u];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (u = this.length - 1; u >= 0 && (0 !== l || u >= n); u--) {
                var m = 0 | this.words[u];
                ((this.words[u] = (l << (26 - o)) | (m >>> o)), (l = m & a));
              }
              return (
                h && 0 !== l && (h.words[h.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, r) {
              return (i(0 === this.negative), this.iushrn(t, e, r));
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var n = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= n;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                i("number" === typeof t),
                i(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
              if ((i("number" === typeof t), i(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, r) {
              var n,
                o,
                s = t.length + r;
              this._expand(s);
              var a = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + r]) + a;
                var h = (0 | t.words[n]) * e;
                ((o -= 67108863 & h),
                  (a = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & o));
              }
              for (; n < this.length - r; n++)
                ((o = (0 | this.words[n + r]) + a),
                  (a = o >> 26),
                  (this.words[n + r] = 67108863 & o));
              if (0 === a) return this._strip();
              for (i(-1 === a), a = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + a),
                  (a = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                a = this._countBits(s);
              ((r = 26 - a),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (s = 0 | n.words[n.length - 1])));
              var h,
                u = i.length - n.length;
              if ("mod" !== e) {
                ((h = new o(null)),
                  (h.length = u + 1),
                  (h.words = new Array(h.length)));
                for (var l = 0; l < h.length; l++) h.words[l] = 0;
              }
              var m = i.clone()._ishlnsubmul(n, 1, u);
              0 === m.negative && ((i = m), h && (h.words[u] = 1));
              for (var c = u - 1; c >= 0; c--) {
                var d =
                  67108864 * (0 | i.words[n.length + c]) +
                  (0 | i.words[n.length + c - 1]);
                ((d = Math.min((d / s) | 0, 67108863)),
                  i._ishlnsubmul(n, d, c));
                while (0 !== i.negative)
                  (d--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, c),
                    i.isZero() || (i.negative ^= 1));
                h && (h.words[c] = d);
              }
              return (
                h && h._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: h || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((a = this.neg().divmod(t, e)),
                      "mod" !== e && (n = a.div.neg()),
                      "div" !== e &&
                        ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((a = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = a.div.neg()),
                        { div: n, mod: a.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((a = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = a.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: a.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, s, a;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = r.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (
                var r = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (r * n + (0 | this.words[o])) % t;
              return e ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (var r = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * r;
                ((this.words[n] = (o / t) | 0), (r = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new o(1),
                s = new o(0),
                a = new o(0),
                h = new o(1),
                u = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++u);
              var l = r.clone(),
                m = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, d = 1;
                  0 === (e.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(m)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var f = 0, p = 1;
                  0 === (r.words[0] & p) && f < 26;
                  ++f, p <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0)
                    ((a.isOdd() || h.isOdd()) && (a.iadd(l), h.isub(m)),
                      a.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(a), s.isub(h))
                  : (r.isub(e), a.isub(n), h.isub(s));
              }
              return { a: a, b: h, gcd: r.iushln(u) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                a = new o(0),
                h = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var u = 0, l = 1;
                  0 === (e.words[0] & l) && u < 26;
                  ++u, l <<= 1
                );
                if (u > 0) {
                  e.iushrn(u);
                  while (u-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var m = 0, c = 1;
                  0 === (r.words[0] & c) && m < 26;
                  ++m, c <<= 1
                );
                if (m > 0) {
                  r.iushrn(m);
                  while (m-- > 0) (a.isOdd() && a.iadd(h), a.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : a),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var i = 0; e.isEven() && r.isEven(); i++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                  var o = e;
                  ((e = r), (r = o));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(i);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              i("number" === typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var o = n, s = r; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s];
                ((a += o),
                  (o = a >>> 26),
                  (a &= 67108863),
                  (this.words[s] = a));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                  n = 0 | t.words[r];
                if (i !== n) {
                  i < n ? (e = -1) : i > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new O(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                i(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (o.prototype.forceRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                i(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function E(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function A() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function F() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function x() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function C() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function O(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function S(t) {
            (O.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((E.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (E.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var i = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              );
            }),
            (E.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (E.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(A, E),
            (A.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (A.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                ((e += 977 * i),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * i + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(F, E),
            n(x, E),
            n(C, E),
            (C.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var e;
              if ("k256" === t) e = new A();
              else if ("p224" === t) e = new F();
              else if ("p192" === t) e = new x();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new C();
              }
              return ((_[t] = e), e);
            }),
            (O.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (O.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (O.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (O.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (O.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (O.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (O.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (O.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (O.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (O.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (O.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (O.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (O.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (O.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((i(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var a = new o(1).toRed(this),
                h = a.redNeg(),
                u = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, u).cmp(h)) l.redIAdd(h);
              var m = this.pow(l, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                d = this.pow(t, n),
                f = s;
              while (0 !== d.cmp(a)) {
                for (var p = d, g = 0; 0 !== p.cmp(a); g++) p = p.redSqr();
                i(g < f);
                var y = this.pow(m, new o(1).iushln(f - g - 1));
                ((c = c.redMul(y)),
                  (m = y.redSqr()),
                  (d = d.redMul(m)),
                  (f = g));
              }
              return c;
            }),
            (O.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (O.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                a = 0,
                h = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], m = u - 1; m >= 0; m--) {
                  var c = (l >> m) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== a
                      ? ((a <<= 1),
                        (a |= c),
                        h++,
                        (h === r || (0 === n && 0 === m)) &&
                          ((s = this.mul(s, i[a])), (h = 0), (a = 0)))
                      : (h = 0));
                }
                u = 26;
              }
              return s;
            }),
            (O.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (O.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new S(t);
            }),
            n(S, O),
            (S.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (S.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (S.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (S.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (S.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    7856: function (t, e) {},
  },
]);
