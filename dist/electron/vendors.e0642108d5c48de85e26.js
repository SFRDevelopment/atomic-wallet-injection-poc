(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [309, 32],
  {
    10191: function (e, t, r) {
      "use strict";
      var n = (e.exports.Validator = r(10192));
      ((e.exports.ValidatorResult = r(4548).ValidatorResult),
        (e.exports.ValidationError = r(4548).ValidationError),
        (e.exports.SchemaError = r(4548).SchemaError),
        (e.exports.validate = function (e, t, r) {
          var i = new n();
          return i.validate(e, t, r);
        }));
    },
    10192: function (e, t, r) {
      "use strict";
      var n = r(231),
        i = r(10193),
        o = r(4548),
        s = o.ValidatorResult,
        a = o.SchemaError,
        u = o.SchemaContext,
        c = function e() {
          ((this.customFormats = Object.create(e.prototype.customFormats)),
            (this.schemas = {}),
            (this.unresolvedRefs = []),
            (this.types = Object.create(f)),
            (this.attributes = Object.create(i.validators)));
        };
      function p(e) {
        var t = "string" === typeof e ? e : e.$ref;
        return "string" == typeof t && t;
      }
      ((c.prototype.customFormats = {}),
        (c.prototype.schemas = null),
        (c.prototype.types = null),
        (c.prototype.attributes = null),
        (c.prototype.unresolvedRefs = null),
        (c.prototype.addSchema = function (e, t) {
          if (!e) return null;
          var r = t || e.id;
          return (
            this.addSubSchema(r, e),
            r && (this.schemas[r] = e),
            this.schemas[r]
          );
        }),
        (c.prototype.addSubSchema = function (e, t) {
          if (t && "object" == typeof t) {
            if (!t.$ref) {
              var r = t.id && n.resolve(e, t.id),
                i = r || e;
              if (r) {
                if (this.schemas[r]) {
                  if (!o.deepCompareStrict(this.schemas[r], t))
                    throw new Error(
                      "Schema <" +
                        t +
                        "> already exists with different definition",
                    );
                  return this.schemas[r];
                }
                this.schemas[r] = t;
                var s = r.replace(/^([^#]*)#$/, "$1");
                this.schemas[s] = t;
              }
              return (
                this.addSubSchemaArray(
                  i,
                  t.items instanceof Array ? t.items : [t.items],
                ),
                this.addSubSchemaArray(
                  i,
                  t.extends instanceof Array ? t.extends : [t.extends],
                ),
                this.addSubSchema(i, t.additionalItems),
                this.addSubSchemaObject(i, t.properties),
                this.addSubSchema(i, t.additionalProperties),
                this.addSubSchemaObject(i, t.definitions),
                this.addSubSchemaObject(i, t.patternProperties),
                this.addSubSchemaObject(i, t.dependencies),
                this.addSubSchemaArray(i, t.disallow),
                this.addSubSchemaArray(i, t.allOf),
                this.addSubSchemaArray(i, t.anyOf),
                this.addSubSchemaArray(i, t.oneOf),
                this.addSubSchema(i, t.not),
                this.schemas[r]
              );
            }
            var a = n.resolve(e, t.$ref);
            void 0 === this.schemas[a] &&
              ((this.schemas[a] = null), this.unresolvedRefs.push(a));
          }
        }),
        (c.prototype.addSubSchemaArray = function (e, t) {
          if (t instanceof Array)
            for (var r = 0; r < t.length; r++) this.addSubSchema(e, t[r]);
        }),
        (c.prototype.addSubSchemaObject = function (e, t) {
          if (t && "object" == typeof t)
            for (var r in t) this.addSubSchema(e, t[r]);
        }),
        (c.prototype.setSchemas = function (e) {
          this.schemas = e;
        }),
        (c.prototype.getSchema = function (e) {
          return this.schemas[e];
        }),
        (c.prototype.validate = function (e, t, r, i) {
          r || (r = {});
          var o = r.propertyName || "instance",
            s = n.resolve(r.base || "/", t.id || "");
          if (
            (i ||
              ((i = new u(t, r, o, s, Object.create(this.schemas))),
              i.schemas[s] || (i.schemas[s] = t)),
            t)
          ) {
            var c = this.validateSchema(e, t, r, i);
            if (!c) throw new Error("Result undefined");
            return c;
          }
          throw new a("no schema specified", t);
        }),
        (c.prototype.validateSchema = function (e, t, r, n) {
          var c,
            f = new s(e, t, r, n);
          if (!t) throw new Error("schema is undefined");
          if (t["extends"])
            if (t["extends"] instanceof Array) {
              var l = { schema: t, ctx: n };
              (t["extends"].forEach(this.schemaTraverser.bind(this, l)),
                (t = l.schema),
                (l.schema = null),
                (l.ctx = null),
                (l = null));
            } else t = o.deepMerge(t, this.superResolve(t["extends"], n));
          if ((c = p(t))) {
            var h = this.resolve(t, c, n),
              d = new u(
                h.subschema,
                r,
                n.propertyPath,
                h.switchSchema,
                n.schemas,
              );
            return this.validateSchema(e, h.subschema, r, d);
          }
          var m = (r && r.skipAttributes) || [];
          for (var v in t)
            if (!i.ignoreProperties[v] && m.indexOf(v) < 0) {
              var g = null,
                y = this.attributes[v];
              if (y) g = y.call(this, e, t, r, n);
              else if (!1 === r.allowUnknownAttributes)
                throw new a("Unsupported attribute: " + v, t);
              g && f.importErrors(g);
            }
          if ("function" == typeof r.rewrite) {
            var w = r.rewrite.call(this, e, t, r, n);
            f.instance = w;
          }
          return f;
        }),
        (c.prototype.schemaTraverser = function (e, t) {
          e.schema = o.deepMerge(e.schema, this.superResolve(t, e.ctx));
        }),
        (c.prototype.superResolve = function (e, t) {
          var r;
          return (r = p(e)) ? this.resolve(e, r, t).subschema : e;
        }),
        (c.prototype.resolve = function (e, t, r) {
          if (((t = r.resolve(t)), r.schemas[t]))
            return { subschema: r.schemas[t], switchSchema: t };
          var i = n.parse(t),
            s = i && i.hash,
            u = s && s.length && t.substr(0, t.length - s.length);
          if (!u || !r.schemas[u]) throw new a("no such schema <" + t + ">", e);
          var c = o.objectGetPath(r.schemas[u], s.substr(1));
          if (void 0 === c)
            throw new a("no such schema " + s + " located in <" + u + ">", e);
          return { subschema: c, switchSchema: t };
        }),
        (c.prototype.testType = function (e, t, r, n, i) {
          if ("function" == typeof this.types[i])
            return this.types[i].call(this, e);
          if (i && "object" == typeof i) {
            var o = this.validateSchema(e, i, r, n);
            return void 0 === o || !(o && o.errors.length);
          }
          return !0;
        }));
      var f = (c.prototype.types = {});
      ((f.string = function (e) {
        return "string" == typeof e;
      }),
        (f.number = function (e) {
          return "number" == typeof e && isFinite(e);
        }),
        (f.integer = function (e) {
          return "number" == typeof e && e % 1 === 0;
        }),
        (f.boolean = function (e) {
          return "boolean" == typeof e;
        }),
        (f.array = function (e) {
          return Array.isArray(e);
        }),
        (f["null"] = function (e) {
          return null === e;
        }),
        (f.date = function (e) {
          return e instanceof Date;
        }),
        (f.any = function (e) {
          return !0;
        }),
        (f.object = function (e) {
          return (
            e &&
            "object" === typeof e &&
            !(e instanceof Array) &&
            !(e instanceof Date)
          );
        }),
        (e.exports = c));
    },
    10193: function (e, t, r) {
      "use strict";
      var n = r(4548),
        i = n.ValidatorResult,
        o = n.SchemaError,
        s = {
          ignoreProperties: {
            id: !0,
            default: !0,
            description: !0,
            title: !0,
            exclusiveMinimum: !0,
            exclusiveMaximum: !0,
            additionalItems: !0,
            $schema: !0,
            $ref: !0,
            extends: !0,
          },
        },
        a = (s.validators = {});
      function u(e, t, r, n, i) {
        var o = this.validateSchema(e, i, t, r);
        return (!o.valid && n instanceof Function && n(o), o.valid);
      }
      function c(e, t, r, n, i, o) {
        if (!t.properties || void 0 === t.properties[i])
          if (!1 === t.additionalProperties)
            o.addError({
              name: "additionalProperties",
              argument: i,
              message:
                "additionalProperty " +
                JSON.stringify(i) +
                " exists in instance when not allowed",
            });
          else {
            var s = t.additionalProperties || {};
            "function" == typeof r.preValidateProperty &&
              r.preValidateProperty(e, i, s, r, n);
            var a = this.validateSchema(e[i], s, r, n.makeChild(s, i));
            (a.instance !== o.instance[i] && (o.instance[i] = a.instance),
              o.importErrors(a));
          }
      }
      ((a.type = function (e, t, r, n) {
        if (void 0 === e) return null;
        var o = new i(e, t, r, n),
          s = Array.isArray(t.type) ? t.type : [t.type];
        if (!s.some(this.testType.bind(this, e, t, r, n))) {
          var a = s.map(function (e) {
            return (e.id && "<" + e.id + ">") || e + "";
          });
          o.addError({
            name: "type",
            argument: a,
            message: "is not of a type(s) " + a,
          });
        }
        return o;
      }),
        (a.anyOf = function (e, t, r, n) {
          if (void 0 === e) return null;
          var s = new i(e, t, r, n),
            a = new i(e, t, r, n);
          if (!Array.isArray(t.anyOf)) throw new o("anyOf must be an array");
          if (
            !t.anyOf.some(
              u.bind(this, e, r, n, function (e) {
                a.importErrors(e);
              }),
            )
          ) {
            var c = t.anyOf.map(function (e, t) {
              return (
                (e.id && "<" + e.id + ">") ||
                (e.title && JSON.stringify(e.title)) ||
                (e["$ref"] && "<" + e["$ref"] + ">") ||
                "[subschema " + t + "]"
              );
            });
            (r.nestedErrors && s.importErrors(a),
              s.addError({
                name: "anyOf",
                argument: c,
                message: "is not any of " + c.join(","),
              }));
          }
          return s;
        }),
        (a.allOf = function (e, t, r, n) {
          if (void 0 === e) return null;
          if (!Array.isArray(t.allOf)) throw new o("allOf must be an array");
          var s = new i(e, t, r, n),
            a = this;
          return (
            t.allOf.forEach(function (t, i) {
              var o = a.validateSchema(e, t, r, n);
              if (!o.valid) {
                var u =
                  (t.id && "<" + t.id + ">") ||
                  (t.title && JSON.stringify(t.title)) ||
                  (t["$ref"] && "<" + t["$ref"] + ">") ||
                  "[subschema " + i + "]";
                (s.addError({
                  name: "allOf",
                  argument: { id: u, length: o.errors.length, valid: o },
                  message:
                    "does not match allOf schema " +
                    u +
                    " with " +
                    o.errors.length +
                    " error[s]:",
                }),
                  s.importErrors(o));
              }
            }),
            s
          );
        }),
        (a.oneOf = function (e, t, r, n) {
          if (void 0 === e) return null;
          if (!Array.isArray(t.oneOf)) throw new o("oneOf must be an array");
          var s = new i(e, t, r, n),
            a = new i(e, t, r, n),
            c = t.oneOf.filter(
              u.bind(this, e, r, n, function (e) {
                a.importErrors(e);
              }),
            ).length,
            p = t.oneOf.map(function (e, t) {
              return (
                (e.id && "<" + e.id + ">") ||
                (e.title && JSON.stringify(e.title)) ||
                (e["$ref"] && "<" + e["$ref"] + ">") ||
                "[subschema " + t + "]"
              );
            });
          return (
            1 !== c &&
              (r.nestedErrors && s.importErrors(a),
              s.addError({
                name: "oneOf",
                argument: p,
                message: "is not exactly one from " + p.join(","),
              })),
            s
          );
        }),
        (a.properties = function (e, t, r, n) {
          if (void 0 !== e && e instanceof Object) {
            var o = new i(e, t, r, n),
              s = t.properties || {};
            for (var a in s) {
              "function" == typeof r.preValidateProperty &&
                r.preValidateProperty(e, a, s[a], r, n);
              var u = e ? e[a] : void 0,
                c = this.validateSchema(u, s[a], r, n.makeChild(s[a], a));
              (c.instance !== o.instance[a] && (o.instance[a] = c.instance),
                o.importErrors(c));
            }
            return o;
          }
        }),
        (a.patternProperties = function (e, t, r, n) {
          if (void 0 !== e && this.types.object(e)) {
            var o = new i(e, t, r, n),
              s = t.patternProperties || {};
            for (var a in e) {
              var u = !0;
              for (var p in s) {
                var f = new RegExp(p);
                if (f.test(a)) {
                  ((u = !1),
                    "function" == typeof r.preValidateProperty &&
                      r.preValidateProperty(e, a, s[p], r, n));
                  var l = this.validateSchema(
                    e[a],
                    s[p],
                    r,
                    n.makeChild(s[p], a),
                  );
                  (l.instance !== o.instance[a] && (o.instance[a] = l.instance),
                    o.importErrors(l));
                }
              }
              u && c.call(this, e, t, r, n, a, o);
            }
            return o;
          }
        }),
        (a.additionalProperties = function (e, t, r, n) {
          if (void 0 !== e && this.types.object(e)) {
            if (t.patternProperties) return null;
            var o = new i(e, t, r, n);
            for (var s in e) c.call(this, e, t, r, n, s, o);
            return o;
          }
        }),
        (a.minProperties = function (e, t, r, n) {
          if (!e || "object" !== typeof e) return null;
          var o = new i(e, t, r, n),
            s = Object.keys(e);
          return (
            s.length >= t.minProperties ||
              o.addError({
                name: "minProperties",
                argument: t.minProperties,
                message:
                  "does not meet minimum property length of " + t.minProperties,
              }),
            o
          );
        }),
        (a.maxProperties = function (e, t, r, n) {
          if (!e || "object" !== typeof e) return null;
          var o = new i(e, t, r, n),
            s = Object.keys(e);
          return (
            s.length <= t.maxProperties ||
              o.addError({
                name: "maxProperties",
                argument: t.maxProperties,
                message:
                  "does not meet maximum property length of " + t.maxProperties,
              }),
            o
          );
        }),
        (a.items = function (e, t, r, n) {
          if (!Array.isArray(e)) return null;
          var o = this,
            s = new i(e, t, r, n);
          return void 0 !== e && t.items
            ? (e.every(function (e, i) {
                var a = Array.isArray(t.items)
                  ? t.items[i] || t.additionalItems
                  : t.items;
                if (void 0 === a) return !0;
                if (!1 === a)
                  return (
                    s.addError({
                      name: "items",
                      message: "additionalItems not permitted",
                    }),
                    !1
                  );
                var u = o.validateSchema(e, a, r, n.makeChild(a, i));
                return (
                  u.instance !== s.instance[i] && (s.instance[i] = u.instance),
                  s.importErrors(u),
                  !0
                );
              }),
              s)
            : s;
        }),
        (a.minimum = function (e, t, r, n) {
          if ("number" !== typeof e) return null;
          var o = new i(e, t, r, n),
            s = !0;
          return (
            (s =
              t.exclusiveMinimum && !0 === t.exclusiveMinimum
                ? e > t.minimum
                : e >= t.minimum),
            s ||
              o.addError({
                name: "minimum",
                argument: t.minimum,
                message: "must have a minimum value of " + t.minimum,
              }),
            o
          );
        }),
        (a.maximum = function (e, t, r, n) {
          if ("number" !== typeof e) return null;
          var o,
            s = new i(e, t, r, n);
          return (
            (o =
              t.exclusiveMaximum && !0 === t.exclusiveMaximum
                ? e < t.maximum
                : e <= t.maximum),
            o ||
              s.addError({
                name: "maximum",
                argument: t.maximum,
                message: "must have a maximum value of " + t.maximum,
              }),
            s
          );
        }));
      var p = function (e, t, r, s, a, u) {
        if ("number" !== typeof e) return null;
        var c = t[a];
        if (0 == c) throw new o(a + " cannot be zero");
        var p = new i(e, t, r, s),
          f = n.getDecimalPlaces(e),
          l = n.getDecimalPlaces(c),
          h = Math.max(f, l),
          d = Math.pow(10, h);
        return (
          Math.round(e * d) % Math.round(c * d) !== 0 &&
            p.addError({
              name: a,
              argument: c,
              message: u + JSON.stringify(c),
            }),
          p
        );
      };
      function f(e, t, r) {
        var i,
          o = r.length;
        for (i = t + 1, o; i < o; i++)
          if (n.deepCompareStrict(e, r[i])) return !1;
        return !0;
      }
      ((a.multipleOf = function (e, t, r, n) {
        return p(
          e,
          t,
          r,
          n,
          "multipleOf",
          "is not a multiple of (divisible by) ",
        );
      }),
        (a.divisibleBy = function (e, t, r, n) {
          return p(
            e,
            t,
            r,
            n,
            "divisibleBy",
            "is not divisible by (multiple of) ",
          );
        }),
        (a.required = function (e, t, r, n) {
          var o = new i(e, t, r, n);
          return (
            void 0 === e && !0 === t.required
              ? o.addError({ name: "required", message: "is required" })
              : e &&
                "object" === typeof e &&
                Array.isArray(t.required) &&
                t.required.forEach(function (t) {
                  void 0 === e[t] &&
                    o.addError({
                      name: "required",
                      argument: t,
                      message: "requires property " + JSON.stringify(t),
                    });
                }),
            o
          );
        }),
        (a.pattern = function (e, t, r, n) {
          if ("string" !== typeof e) return null;
          var o = new i(e, t, r, n);
          return (
            e.match(t.pattern) ||
              o.addError({
                name: "pattern",
                argument: t.pattern,
                message: "does not match pattern " + JSON.stringify(t.pattern),
              }),
            o
          );
        }),
        (a.format = function (e, t, r, o) {
          var s = new i(e, t, r, o);
          return (
            s.disableFormat ||
              n.isFormat(e, t.format, this) ||
              s.addError({
                name: "format",
                argument: t.format,
                message:
                  "does not conform to the " +
                  JSON.stringify(t.format) +
                  " format",
              }),
            s
          );
        }),
        (a.minLength = function (e, t, r, n) {
          if ("string" !== typeof e) return null;
          var o = new i(e, t, r, n);
          return (
            e.length >= t.minLength ||
              o.addError({
                name: "minLength",
                argument: t.minLength,
                message: "does not meet minimum length of " + t.minLength,
              }),
            o
          );
        }),
        (a.maxLength = function (e, t, r, n) {
          if ("string" !== typeof e) return null;
          var o = new i(e, t, r, n);
          return (
            e.length <= t.maxLength ||
              o.addError({
                name: "maxLength",
                argument: t.maxLength,
                message: "does not meet maximum length of " + t.maxLength,
              }),
            o
          );
        }),
        (a.minItems = function (e, t, r, n) {
          if (!Array.isArray(e)) return null;
          var o = new i(e, t, r, n);
          return (
            e.length >= t.minItems ||
              o.addError({
                name: "minItems",
                argument: t.minItems,
                message: "does not meet minimum length of " + t.minItems,
              }),
            o
          );
        }),
        (a.maxItems = function (e, t, r, n) {
          if (!Array.isArray(e)) return null;
          var o = new i(e, t, r, n);
          return (
            e.length <= t.maxItems ||
              o.addError({
                name: "maxItems",
                argument: t.maxItems,
                message: "does not meet maximum length of " + t.maxItems,
              }),
            o
          );
        }),
        (a.uniqueItems = function (e, t, r, o) {
          var s = new i(e, t, r, o);
          if (!Array.isArray(e)) return s;
          function a(e, t, r) {
            for (var i = t + 1; i < r.length; i++)
              if (n.deepCompareStrict(e, r[i])) return !1;
            return !0;
          }
          return (
            e.every(a) ||
              s.addError({
                name: "uniqueItems",
                message: "contains duplicate item",
              }),
            s
          );
        }),
        (a.uniqueItems = function (e, t, r, n) {
          if (!Array.isArray(e)) return null;
          var o = new i(e, t, r, n);
          return (
            e.every(f) ||
              o.addError({
                name: "uniqueItems",
                message: "contains duplicate item",
              }),
            o
          );
        }),
        (a.dependencies = function (e, t, r, n) {
          if (!e || "object" != typeof e) return null;
          var o = new i(e, t, r, n);
          for (var s in t.dependencies)
            if (void 0 !== e[s]) {
              var a = t.dependencies[s],
                u = n.makeChild(a, s);
              if (("string" == typeof a && (a = [a]), Array.isArray(a)))
                a.forEach(function (t) {
                  void 0 === e[t] &&
                    o.addError({
                      name: "dependencies",
                      argument: u.propertyPath,
                      message:
                        "property " +
                        t +
                        " not found, required by " +
                        u.propertyPath,
                    });
                });
              else {
                var c = this.validateSchema(e, a, r, u);
                (o.instance !== c.instance && (o.instance = c.instance),
                  c &&
                    c.errors.length &&
                    (o.addError({
                      name: "dependencies",
                      argument: u.propertyPath,
                      message:
                        "does not meet dependency required by " +
                        u.propertyPath,
                    }),
                    o.importErrors(c)));
              }
            }
          return o;
        }),
        (a["enum"] = function (e, t, r, s) {
          if (!Array.isArray(t["enum"]))
            throw new o("enum expects an array", t);
          if (void 0 === e) return null;
          var a = new i(e, t, r, s);
          return (
            t["enum"].some(n.deepCompareStrict.bind(null, e)) ||
              a.addError({
                name: "enum",
                argument: t["enum"],
                message: "is not one of enum values: " + t["enum"].join(","),
              }),
            a
          );
        }),
        (a["const"] = function (e, t, r, o) {
          var s = new i(e, t, r, o);
          return (
            n.deepCompareStrict(t["const"], e) ||
              s.addError({
                name: "const",
                argument: t["const"],
                message:
                  "does not exactly match expected constant: " + t["const"],
              }),
            s
          );
        }),
        (a.not = a.disallow =
          function (e, t, r, n) {
            var o = this;
            if (void 0 === e) return null;
            var s = new i(e, t, r, n),
              a = t.not || t.disallow;
            return a
              ? (Array.isArray(a) || (a = [a]),
                a.forEach(function (i) {
                  if (o.testType(e, t, r, n, i)) {
                    var a = (i && i.id && "<" + i.id + ">") || i;
                    s.addError({
                      name: "not",
                      argument: a,
                      message: "is of prohibited type " + a,
                    });
                  }
                }),
                s)
              : null;
          }),
        (e.exports = s));
    },
    10313: function (e, t) {},
    2798: function (e, t) {},
    2799: function (e, t) {},
    3902: function (e, t, r) {
      var n;
      (function (i) {
        "use strict";
        var o,
          s,
          a,
          u = 9e15,
          c = 1e9,
          p = "0123456789abcdef",
          f =
            "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
          l =
            "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
          h = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -u,
            maxE: u,
            crypto: !1,
          },
          d = !0,
          m = "[DecimalError] ",
          v = m + "Invalid argument: ",
          g = m + "Precision limit exceeded",
          y = m + "crypto unavailable",
          w = "[object Decimal]",
          b = Math.floor,
          E = Math.pow,
          N = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
          S = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
          x = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
          A = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          O = 1e7,
          M = 7,
          q = 9007199254740991,
          P = f.length - 1,
          Z = l.length - 1,
          I = { toStringTag: w };
        function F(e) {
          var t,
            r,
            n,
            i = e.length - 1,
            o = "",
            s = e[0];
          if (i > 0) {
            for (o += s, t = 1; t < i; t++)
              ((n = e[t] + ""), (r = M - n.length), r && (o += J(r)), (o += n));
            ((s = e[t]), (n = s + ""), (r = M - n.length), r && (o += J(r)));
          } else if (0 === s) return "0";
          for (; s % 10 === 0; ) s /= 10;
          return o + s;
        }
        function j(e, t, r) {
          if (e !== ~~e || e < t || e > r) throw Error(v + e);
        }
        function R(e, t, r, n) {
          var i, o, s, a;
          for (o = e[0]; o >= 10; o /= 10) --t;
          return (
            --t < 0
              ? ((t += M), (i = 0))
              : ((i = Math.ceil((t + 1) / M)), (t %= M)),
            (o = E(10, M - t)),
            (a = (e[i] % o) | 0),
            null == n
              ? t < 3
                ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                  (s =
                    (r < 4 && 99999 == a) ||
                    (r > 3 && 49999 == a) ||
                    5e4 == a ||
                    0 == a))
                : (s =
                    (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
                      ((e[i + 1] / o / 100) | 0) == E(10, t - 2) - 1) ||
                    ((a == o / 2 || 0 == a) && 0 == ((e[i + 1] / o / 100) | 0)))
              : t < 4
                ? (0 == t
                    ? (a = (a / 1e3) | 0)
                    : 1 == t
                      ? (a = (a / 100) | 0)
                      : 2 == t && (a = (a / 10) | 0),
                  (s =
                    ((n || r < 4) && 9999 == a) || (!n && r > 3 && 4999 == a)))
                : (s =
                    (((n || r < 4) && a + 1 == o) ||
                      (!n && r > 3 && a + 1 == o / 2)) &&
                    ((e[i + 1] / o / 1e3) | 0) == E(10, t - 3) - 1),
            s
          );
        }
        function k(e, t, r) {
          for (var n, i, o = [0], s = 0, a = e.length; s < a; ) {
            for (i = o.length; i--; ) o[i] *= t;
            for (o[0] += p.indexOf(e.charAt(s++)), n = 0; n < o.length; n++)
              o[n] > r - 1 &&
                (void 0 === o[n + 1] && (o[n + 1] = 0),
                (o[n + 1] += (o[n] / r) | 0),
                (o[n] %= r));
          }
          return o.reverse();
        }
        function $(e, t) {
          var r, n, i;
          if (t.isZero()) return t;
          ((n = t.d.length),
            n < 32
              ? ((r = Math.ceil(n / 3)), (i = (1 / te(4, r)).toString()))
              : ((r = 16), (i = "2.3283064365386962890625e-10")),
            (e.precision += r),
            (t = ee(e, 1, t.times(i), new e(1))));
          for (var o = r; o--; ) {
            var s = t.times(t);
            t = s.times(s).minus(s).times(8).plus(1);
          }
          return ((e.precision -= r), t);
        }
        ((I.absoluteValue = I.abs =
          function () {
            var e = new this.constructor(this);
            return (e.s < 0 && (e.s = 1), L(e));
          }),
          (I.ceil = function () {
            return L(new this.constructor(this), this.e + 1, 2);
          }),
          (I.clampedTo = I.clamp =
            function (e, t) {
              var r,
                n = this,
                i = n.constructor;
              if (((e = new i(e)), (t = new i(t)), !e.s || !t.s))
                return new i(NaN);
              if (e.gt(t)) throw Error(v + t);
              return ((r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n));
            }),
          (I.comparedTo = I.cmp =
            function (e) {
              var t,
                r,
                n,
                i,
                o = this,
                s = o.d,
                a = (e = new o.constructor(e)).d,
                u = o.s,
                c = e.s;
              if (!s || !a)
                return u && c
                  ? u !== c
                    ? u
                    : s === a
                      ? 0
                      : !s ^ (u < 0)
                        ? 1
                        : -1
                  : NaN;
              if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -c : 0;
              if (u !== c) return u;
              if (o.e !== e.e) return (o.e > e.e) ^ (u < 0) ? 1 : -1;
              for (
                n = s.length, i = a.length, t = 0, r = n < i ? n : i;
                t < r;
                ++t
              )
                if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1;
              return n === i ? 0 : (n > i) ^ (u < 0) ? 1 : -1;
            }),
          (I.cosine = I.cos =
            function () {
              var e,
                t,
                r = this,
                n = r.constructor;
              return r.d
                ? r.d[0]
                  ? ((e = n.precision),
                    (t = n.rounding),
                    (n.precision = e + Math.max(r.e, r.sd()) + M),
                    (n.rounding = 1),
                    (r = $(n, re(n, r))),
                    (n.precision = e),
                    (n.rounding = t),
                    L(2 == a || 3 == a ? r.neg() : r, e, t, !0))
                  : new n(1)
                : new n(NaN);
            }),
          (I.cubeRoot = I.cbrt =
            function () {
              var e,
                t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c,
                p = this,
                f = p.constructor;
              if (!p.isFinite() || p.isZero()) return new f(p);
              for (
                d = !1,
                  o = p.s * E(p.s * p, 1 / 3),
                  o && Math.abs(o) != 1 / 0
                    ? (n = new f(o.toString()))
                    : ((r = F(p.d)),
                      (e = p.e),
                      (o = (e - r.length + 1) % 3) &&
                        (r += 1 == o || -2 == o ? "0" : "00"),
                      (o = E(r, 1 / 3)),
                      (e = b((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                      o == 1 / 0
                        ? (r = "5e" + e)
                        : ((r = o.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + e)),
                      (n = new f(r)),
                      (n.s = p.s)),
                  s = (e = f.precision) + 3;
                ;
              )
                if (
                  ((a = n),
                  (u = a.times(a).times(a)),
                  (c = u.plus(p)),
                  (n = B(c.plus(p).times(a), c.plus(u), s + 2, 1)),
                  F(a.d).slice(0, s) === (r = F(n.d)).slice(0, s))
                ) {
                  if (
                    ((r = r.slice(s - 3, s + 1)),
                    "9999" != r && (i || "4999" != r))
                  ) {
                    (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                      (L(n, e + 1, 1), (t = !n.times(n).times(n).eq(p)));
                    break;
                  }
                  if (!i && (L(a, e + 1, 0), a.times(a).times(a).eq(p))) {
                    n = a;
                    break;
                  }
                  ((s += 4), (i = 1));
                }
              return ((d = !0), L(n, e, f.rounding, t));
            }),
          (I.decimalPlaces = I.dp =
            function () {
              var e,
                t = this.d,
                r = NaN;
              if (t) {
                if (
                  ((e = t.length - 1),
                  (r = (e - b(this.e / M)) * M),
                  (e = t[e]),
                  e)
                )
                  for (; e % 10 == 0; e /= 10) r--;
                r < 0 && (r = 0);
              }
              return r;
            }),
          (I.dividedBy = I.div =
            function (e) {
              return B(this, new this.constructor(e));
            }),
          (I.dividedToIntegerBy = I.divToInt =
            function (e) {
              var t = this,
                r = t.constructor;
              return L(B(t, new r(e), 0, 1, 1), r.precision, r.rounding);
            }),
          (I.equals = I.eq =
            function (e) {
              return 0 === this.cmp(e);
            }),
          (I.floor = function () {
            return L(new this.constructor(this), this.e + 1, 3);
          }),
          (I.greaterThan = I.gt =
            function (e) {
              return this.cmp(e) > 0;
            }),
          (I.greaterThanOrEqualTo = I.gte =
            function (e) {
              var t = this.cmp(e);
              return 1 == t || 0 === t;
            }),
          (I.hyperbolicCosine = I.cosh =
            function () {
              var e,
                t,
                r,
                n,
                i,
                o = this,
                s = o.constructor,
                a = new s(1);
              if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
              if (o.isZero()) return a;
              ((r = s.precision),
                (n = s.rounding),
                (s.precision = r + Math.max(o.e, o.sd()) + 4),
                (s.rounding = 1),
                (i = o.d.length),
                i < 32
                  ? ((e = Math.ceil(i / 3)), (t = (1 / te(4, e)).toString()))
                  : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (o = ee(s, 1, o.times(t), new s(1), !0)));
              for (var u, c = e, p = new s(8); c--; )
                ((u = o.times(o)), (o = a.minus(u.times(p.minus(u.times(p))))));
              return L(o, (s.precision = r), (s.rounding = n), !0);
            }),
          (I.hyperbolicSine = I.sinh =
            function () {
              var e,
                t,
                r,
                n,
                i = this,
                o = i.constructor;
              if (!i.isFinite() || i.isZero()) return new o(i);
              if (
                ((t = o.precision),
                (r = o.rounding),
                (o.precision = t + Math.max(i.e, i.sd()) + 4),
                (o.rounding = 1),
                (n = i.d.length),
                n < 3)
              )
                i = ee(o, 2, i, i, !0);
              else {
                ((e = 1.4 * Math.sqrt(n)),
                  (e = e > 16 ? 16 : 0 | e),
                  (i = i.times(1 / te(5, e))),
                  (i = ee(o, 2, i, i, !0)));
                for (var s, a = new o(5), u = new o(16), c = new o(20); e--; )
                  ((s = i.times(i)),
                    (i = i.times(a.plus(s.times(u.times(s).plus(c))))));
              }
              return ((o.precision = t), (o.rounding = r), L(i, t, r, !0));
            }),
          (I.hyperbolicTangent = I.tanh =
            function () {
              var e,
                t,
                r = this,
                n = r.constructor;
              return r.isFinite()
                ? r.isZero()
                  ? new n(r)
                  : ((e = n.precision),
                    (t = n.rounding),
                    (n.precision = e + 7),
                    (n.rounding = 1),
                    B(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
                : new n(r.s);
            }),
          (I.inverseCosine = I.acos =
            function () {
              var e = this,
                t = e.constructor,
                r = e.abs().cmp(1),
                n = t.precision,
                i = t.rounding;
              return -1 !== r
                ? 0 === r
                  ? e.isNeg()
                    ? z(t, n, i)
                    : new t(0)
                  : new t(NaN)
                : e.isZero()
                  ? z(t, n + 4, i).times(0.5)
                  : ((t.precision = n + 6),
                    (t.rounding = 1),
                    (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                    (t.precision = n),
                    (t.rounding = i),
                    e.times(2));
            }),
          (I.inverseHyperbolicCosine = I.acosh =
            function () {
              var e,
                t,
                r = this,
                n = r.constructor;
              return r.lte(1)
                ? new n(r.eq(1) ? 0 : NaN)
                : r.isFinite()
                  ? ((e = n.precision),
                    (t = n.rounding),
                    (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                    (n.rounding = 1),
                    (d = !1),
                    (r = r.times(r).minus(1).sqrt().plus(r)),
                    (d = !0),
                    (n.precision = e),
                    (n.rounding = t),
                    r.ln())
                  : new n(r);
            }),
          (I.inverseHyperbolicSine = I.asinh =
            function () {
              var e,
                t,
                r = this,
                n = r.constructor;
              return !r.isFinite() || r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                  (n.rounding = 1),
                  (d = !1),
                  (r = r.times(r).plus(1).sqrt().plus(r)),
                  (d = !0),
                  (n.precision = e),
                  (n.rounding = t),
                  r.ln());
            }),
          (I.inverseHyperbolicTangent = I.atanh =
            function () {
              var e,
                t,
                r,
                n,
                i = this,
                o = i.constructor;
              return i.isFinite()
                ? i.e >= 0
                  ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                  : ((e = o.precision),
                    (t = o.rounding),
                    (n = i.sd()),
                    Math.max(n, e) < 2 * -i.e - 1
                      ? L(new o(i), e, t, !0)
                      : ((o.precision = r = n - i.e),
                        (i = B(i.plus(1), new o(1).minus(i), r + e, 1)),
                        (o.precision = e + 4),
                        (o.rounding = 1),
                        (i = i.ln()),
                        (o.precision = e),
                        (o.rounding = t),
                        i.times(0.5)))
                : new o(NaN);
            }),
          (I.inverseSine = I.asin =
            function () {
              var e,
                t,
                r,
                n,
                i = this,
                o = i.constructor;
              return i.isZero()
                ? new o(i)
                : ((t = i.abs().cmp(1)),
                  (r = o.precision),
                  (n = o.rounding),
                  -1 !== t
                    ? 0 === t
                      ? ((e = z(o, r + 4, n).times(0.5)), (e.s = i.s), e)
                      : new o(NaN)
                    : ((o.precision = r + 6),
                      (o.rounding = 1),
                      (i = i
                        .div(new o(1).minus(i.times(i)).sqrt().plus(1))
                        .atan()),
                      (o.precision = r),
                      (o.rounding = n),
                      i.times(2)));
            }),
          (I.inverseTangent = I.atan =
            function () {
              var e,
                t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c = this,
                p = c.constructor,
                f = p.precision,
                l = p.rounding;
              if (c.isFinite()) {
                if (c.isZero()) return new p(c);
                if (c.abs().eq(1) && f + 4 <= Z)
                  return ((s = z(p, f + 4, l).times(0.25)), (s.s = c.s), s);
              } else {
                if (!c.s) return new p(NaN);
                if (f + 4 <= Z)
                  return ((s = z(p, f + 4, l).times(0.5)), (s.s = c.s), s);
              }
              for (
                p.precision = a = f + 10,
                  p.rounding = 1,
                  r = Math.min(28, (a / M + 2) | 0),
                  e = r;
                e;
                --e
              )
                c = c.div(c.times(c).plus(1).sqrt().plus(1));
              for (
                d = !1,
                  t = Math.ceil(a / M),
                  n = 1,
                  u = c.times(c),
                  s = new p(c),
                  i = c;
                -1 !== e;
              )
                if (
                  ((i = i.times(u)),
                  (o = s.minus(i.div((n += 2)))),
                  (i = i.times(u)),
                  (s = o.plus(i.div((n += 2)))),
                  void 0 !== s.d[t])
                )
                  for (e = t; s.d[e] === o.d[e] && e--; );
              return (
                r && (s = s.times(2 << (r - 1))),
                (d = !0),
                L(s, (p.precision = f), (p.rounding = l), !0)
              );
            }),
          (I.isFinite = function () {
            return !!this.d;
          }),
          (I.isInteger = I.isInt =
            function () {
              return !!this.d && b(this.e / M) > this.d.length - 2;
            }),
          (I.isNaN = function () {
            return !this.s;
          }),
          (I.isNegative = I.isNeg =
            function () {
              return this.s < 0;
            }),
          (I.isPositive = I.isPos =
            function () {
              return this.s > 0;
            }),
          (I.isZero = function () {
            return !!this.d && 0 === this.d[0];
          }),
          (I.lessThan = I.lt =
            function (e) {
              return this.cmp(e) < 0;
            }),
          (I.lessThanOrEqualTo = I.lte =
            function (e) {
              return this.cmp(e) < 1;
            }),
          (I.logarithm = I.log =
            function (e) {
              var t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c = this,
                p = c.constructor,
                f = p.precision,
                l = p.rounding,
                h = 5;
              if (null == e) ((e = new p(10)), (t = !0));
              else {
                if (
                  ((e = new p(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1))
                )
                  return new p(NaN);
                t = e.eq(10);
              }
              if (((r = c.d), c.s < 0 || !r || !r[0] || c.eq(1)))
                return new p(
                  r && !r[0] ? -1 / 0 : 1 != c.s ? NaN : r ? 0 : 1 / 0,
                );
              if (t)
                if (r.length > 1) o = !0;
                else {
                  for (i = r[0]; i % 10 === 0; ) i /= 10;
                  o = 1 !== i;
                }
              if (
                ((d = !1),
                (a = f + h),
                (s = W(c, a)),
                (n = t ? D(p, a + 10) : W(e, a)),
                (u = B(s, n, a, 1)),
                R(u.d, (i = f), l))
              )
                do {
                  if (
                    ((a += 10),
                    (s = W(c, a)),
                    (n = t ? D(p, a + 10) : W(e, a)),
                    (u = B(s, n, a, 1)),
                    !o)
                  ) {
                    +F(u.d).slice(i + 1, i + 15) + 1 == 1e14 &&
                      (u = L(u, f + 1, 0));
                    break;
                  }
                } while (R(u.d, (i += 10), l));
              return ((d = !0), L(u, f, l));
            }),
          (I.minus = I.sub =
            function (e) {
              var t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c,
                p,
                f,
                l,
                h = this,
                m = h.constructor;
              if (((e = new m(e)), !h.d || !e.d))
                return (
                  h.s && e.s
                    ? h.d
                      ? (e.s = -e.s)
                      : (e = new m(e.d || h.s !== e.s ? h : NaN))
                    : (e = new m(NaN)),
                  e
                );
              if (h.s != e.s) return ((e.s = -e.s), h.plus(e));
              if (
                ((c = h.d),
                (l = e.d),
                (a = m.precision),
                (u = m.rounding),
                !c[0] || !l[0])
              ) {
                if (l[0]) e.s = -e.s;
                else {
                  if (!c[0]) return new m(3 === u ? -0 : 0);
                  e = new m(h);
                }
                return d ? L(e, a, u) : e;
              }
              if (
                ((r = b(e.e / M)),
                (p = b(h.e / M)),
                (c = c.slice()),
                (o = p - r),
                o)
              ) {
                for (
                  f = o < 0,
                    f
                      ? ((t = c), (o = -o), (s = l.length))
                      : ((t = l), (r = p), (s = c.length)),
                    n = Math.max(Math.ceil(a / M), s) + 2,
                    o > n && ((o = n), (t.length = 1)),
                    t.reverse(),
                    n = o;
                  n--;
                )
                  t.push(0);
                t.reverse();
              } else {
                for (
                  n = c.length, s = l.length, f = n < s, f && (s = n), n = 0;
                  n < s;
                  n++
                )
                  if (c[n] != l[n]) {
                    f = c[n] < l[n];
                    break;
                  }
                o = 0;
              }
              for (
                f && ((t = c), (c = l), (l = t), (e.s = -e.s)),
                  s = c.length,
                  n = l.length - s;
                n > 0;
                --n
              )
                c[s++] = 0;
              for (n = l.length; n > o; ) {
                if (c[--n] < l[n]) {
                  for (i = n; i && 0 === c[--i]; ) c[i] = O - 1;
                  (--c[i], (c[n] += O));
                }
                c[n] -= l[n];
              }
              for (; 0 === c[--s]; ) c.pop();
              for (; 0 === c[0]; c.shift()) --r;
              return c[0]
                ? ((e.d = c), (e.e = C(c, r)), d ? L(e, a, u) : e)
                : new m(3 === u ? -0 : 0);
            }),
          (I.modulo = I.mod =
            function (e) {
              var t,
                r = this,
                n = r.constructor;
              return (
                (e = new n(e)),
                !r.d || !e.s || (e.d && !e.d[0])
                  ? new n(NaN)
                  : !e.d || (r.d && !r.d[0])
                    ? L(new n(r), n.precision, n.rounding)
                    : ((d = !1),
                      9 == n.modulo
                        ? ((t = B(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
                        : (t = B(r, e, 0, n.modulo, 1)),
                      (t = t.times(e)),
                      (d = !0),
                      r.minus(t))
              );
            }),
          (I.naturalExponential = I.exp =
            function () {
              return G(this);
            }),
          (I.naturalLogarithm = I.ln =
            function () {
              return W(this);
            }),
          (I.negated = I.neg =
            function () {
              var e = new this.constructor(this);
              return ((e.s = -e.s), L(e));
            }),
          (I.plus = I.add =
            function (e) {
              var t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c,
                p,
                f = this,
                l = f.constructor;
              if (((e = new l(e)), !f.d || !e.d))
                return (
                  f.s && e.s
                    ? f.d || (e = new l(e.d || f.s === e.s ? f : NaN))
                    : (e = new l(NaN)),
                  e
                );
              if (f.s != e.s) return ((e.s = -e.s), f.minus(e));
              if (
                ((c = f.d),
                (p = e.d),
                (a = l.precision),
                (u = l.rounding),
                !c[0] || !p[0])
              )
                return (p[0] || (e = new l(f)), d ? L(e, a, u) : e);
              if (
                ((o = b(f.e / M)),
                (n = b(e.e / M)),
                (c = c.slice()),
                (i = o - n),
                i)
              ) {
                for (
                  i < 0
                    ? ((r = c), (i = -i), (s = p.length))
                    : ((r = p), (n = o), (s = c.length)),
                    o = Math.ceil(a / M),
                    s = o > s ? o + 1 : s + 1,
                    i > s && ((i = s), (r.length = 1)),
                    r.reverse();
                  i--;
                )
                  r.push(0);
                r.reverse();
              }
              for (
                s = c.length,
                  i = p.length,
                  s - i < 0 && ((i = s), (r = p), (p = c), (c = r)),
                  t = 0;
                i;
              )
                ((t = ((c[--i] = c[i] + p[i] + t) / O) | 0), (c[i] %= O));
              for (t && (c.unshift(t), ++n), s = c.length; 0 == c[--s]; )
                c.pop();
              return ((e.d = c), (e.e = C(c, n)), d ? L(e, a, u) : e);
            }),
          (I.precision = I.sd =
            function (e) {
              var t,
                r = this;
              if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
                throw Error(v + e);
              return (
                r.d
                  ? ((t = U(r.d)), e && r.e + 1 > t && (t = r.e + 1))
                  : (t = NaN),
                t
              );
            }),
          (I.round = function () {
            var e = this,
              t = e.constructor;
            return L(new t(e), e.e + 1, t.rounding);
          }),
          (I.sine = I.sin =
            function () {
              var e,
                t,
                r = this,
                n = r.constructor;
              return r.isFinite()
                ? r.isZero()
                  ? new n(r)
                  : ((e = n.precision),
                    (t = n.rounding),
                    (n.precision = e + Math.max(r.e, r.sd()) + M),
                    (n.rounding = 1),
                    (r = Y(n, re(n, r))),
                    (n.precision = e),
                    (n.rounding = t),
                    L(a > 2 ? r.neg() : r, e, t, !0))
                : new n(NaN);
            }),
          (I.squareRoot = I.sqrt =
            function () {
              var e,
                t,
                r,
                n,
                i,
                o,
                s = this,
                a = s.d,
                u = s.e,
                c = s.s,
                p = s.constructor;
              if (1 !== c || !a || !a[0])
                return new p(
                  !c || (c < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0,
                );
              for (
                d = !1,
                  c = Math.sqrt(+s),
                  0 == c || c == 1 / 0
                    ? ((t = F(a)),
                      (t.length + u) % 2 == 0 && (t += "0"),
                      (c = Math.sqrt(t)),
                      (u = b((u + 1) / 2) - (u < 0 || u % 2)),
                      c == 1 / 0
                        ? (t = "5e" + u)
                        : ((t = c.toExponential()),
                          (t = t.slice(0, t.indexOf("e") + 1) + u)),
                      (n = new p(t)))
                    : (n = new p(c.toString())),
                  r = (u = p.precision) + 3;
                ;
              )
                if (
                  ((o = n),
                  (n = o.plus(B(s, o, r + 2, 1)).times(0.5)),
                  F(o.d).slice(0, r) === (t = F(n.d)).slice(0, r))
                ) {
                  if (
                    ((t = t.slice(r - 3, r + 1)),
                    "9999" != t && (i || "4999" != t))
                  ) {
                    (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                      (L(n, u + 1, 1), (e = !n.times(n).eq(s)));
                    break;
                  }
                  if (!i && (L(o, u + 1, 0), o.times(o).eq(s))) {
                    n = o;
                    break;
                  }
                  ((r += 4), (i = 1));
                }
              return ((d = !0), L(n, u, p.rounding, e));
            }),
          (I.tangent = I.tan =
            function () {
              var e,
                t,
                r = this,
                n = r.constructor;
              return r.isFinite()
                ? r.isZero()
                  ? new n(r)
                  : ((e = n.precision),
                    (t = n.rounding),
                    (n.precision = e + 10),
                    (n.rounding = 1),
                    (r = r.sin()),
                    (r.s = 1),
                    (r = B(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                    (n.precision = e),
                    (n.rounding = t),
                    L(2 == a || 4 == a ? r.neg() : r, e, t, !0))
                : new n(NaN);
            }),
          (I.times = I.mul =
            function (e) {
              var t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c,
                p = this,
                f = p.constructor,
                l = p.d,
                h = (e = new f(e)).d;
              if (((e.s *= p.s), !l || !l[0] || !h || !h[0]))
                return new f(
                  !e.s || (l && !l[0] && !h) || (h && !h[0] && !l)
                    ? NaN
                    : l && h
                      ? 0 * e.s
                      : e.s / 0,
                );
              for (
                r = b(p.e / M) + b(e.e / M),
                  u = l.length,
                  c = h.length,
                  u < c &&
                    ((o = l), (l = h), (h = o), (s = u), (u = c), (c = s)),
                  o = [],
                  s = u + c,
                  n = s;
                n--;
              )
                o.push(0);
              for (n = c; --n >= 0; ) {
                for (t = 0, i = u + n; i > n; )
                  ((a = o[i] + h[n] * l[i - n - 1] + t),
                    (o[i--] = (a % O) | 0),
                    (t = (a / O) | 0));
                o[i] = ((o[i] + t) % O) | 0;
              }
              for (; !o[--s]; ) o.pop();
              return (
                t ? ++r : o.shift(),
                (e.d = o),
                (e.e = C(o, r)),
                d ? L(e, f.precision, f.rounding) : e
              );
            }),
          (I.toBinary = function (e, t) {
            return ne(this, 2, e, t);
          }),
          (I.toDecimalPlaces = I.toDP =
            function (e, t) {
              var r = this,
                n = r.constructor;
              return (
                (r = new n(r)),
                void 0 === e
                  ? r
                  : (j(e, 0, c),
                    void 0 === t ? (t = n.rounding) : j(t, 0, 8),
                    L(r, e + r.e + 1, t))
              );
            }),
          (I.toExponential = function (e, t) {
            var r,
              n = this,
              i = n.constructor;
            return (
              void 0 === e
                ? (r = T(n, !0))
                : (j(e, 0, c),
                  void 0 === t ? (t = i.rounding) : j(t, 0, 8),
                  (n = L(new i(n), e + 1, t)),
                  (r = T(n, !0, e + 1))),
              n.isNeg() && !n.isZero() ? "-" + r : r
            );
          }),
          (I.toFixed = function (e, t) {
            var r,
              n,
              i = this,
              o = i.constructor;
            return (
              void 0 === e
                ? (r = T(i))
                : (j(e, 0, c),
                  void 0 === t ? (t = o.rounding) : j(t, 0, 8),
                  (n = L(new o(i), e + i.e + 1, t)),
                  (r = T(n, !1, e + n.e + 1))),
              i.isNeg() && !i.isZero() ? "-" + r : r
            );
          }),
          (I.toFraction = function (e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c,
              p,
              f,
              l,
              h = this,
              m = h.d,
              g = h.constructor;
            if (!m) return new g(h);
            if (
              ((c = r = new g(1)),
              (n = u = new g(0)),
              (t = new g(n)),
              (o = t.e = U(m) - h.e - 1),
              (s = o % M),
              (t.d[0] = E(10, s < 0 ? M + s : s)),
              null == e)
            )
              e = o > 0 ? t : c;
            else {
              if (((a = new g(e)), !a.isInt() || a.lt(c))) throw Error(v + a);
              e = a.gt(t) ? (o > 0 ? t : c) : a;
            }
            for (
              d = !1,
                a = new g(F(m)),
                p = g.precision,
                g.precision = o = m.length * M * 2;
              ;
            ) {
              if (
                ((f = B(a, t, 0, 1, 1)),
                (i = r.plus(f.times(n))),
                1 == i.cmp(e))
              )
                break;
              ((r = n),
                (n = i),
                (i = c),
                (c = u.plus(f.times(i))),
                (u = i),
                (i = t),
                (t = a.minus(f.times(i))),
                (a = i));
            }
            return (
              (i = B(e.minus(r), n, 0, 1, 1)),
              (u = u.plus(i.times(c))),
              (r = r.plus(i.times(n))),
              (u.s = c.s = h.s),
              (l =
                B(c, n, o, 1)
                  .minus(h)
                  .abs()
                  .cmp(B(u, r, o, 1).minus(h).abs()) < 1
                  ? [c, n]
                  : [u, r]),
              (g.precision = p),
              (d = !0),
              l
            );
          }),
          (I.toHexadecimal = I.toHex =
            function (e, t) {
              return ne(this, 16, e, t);
            }),
          (I.toNearest = function (e, t) {
            var r = this,
              n = r.constructor;
            if (((r = new n(r)), null == e)) {
              if (!r.d) return r;
              ((e = new n(1)), (t = n.rounding));
            } else {
              if (
                ((e = new n(e)),
                void 0 === t ? (t = n.rounding) : j(t, 0, 8),
                !r.d)
              )
                return e.s ? r : e;
              if (!e.d) return (e.s && (e.s = r.s), e);
            }
            return (
              e.d[0]
                ? ((d = !1), (r = B(r, e, 0, t, 1).times(e)), (d = !0), L(r))
                : ((e.s = r.s), (r = e)),
              r
            );
          }),
          (I.toNumber = function () {
            return +this;
          }),
          (I.toOctal = function (e, t) {
            return ne(this, 8, e, t);
          }),
          (I.toPower = I.pow =
            function (e) {
              var t,
                r,
                n,
                i,
                o,
                s,
                a = this,
                u = a.constructor,
                c = +(e = new u(e));
              if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(E(+a, c));
              if (((a = new u(a)), a.eq(1))) return a;
              if (((n = u.precision), (o = u.rounding), e.eq(1)))
                return L(a, n, o);
              if (
                ((t = b(e.e / M)),
                t >= e.d.length - 1 && (r = c < 0 ? -c : c) <= q)
              )
                return (
                  (i = V(u, a, r, n)),
                  e.s < 0 ? new u(1).div(i) : L(i, n, o)
                );
              if (((s = a.s), s < 0)) {
                if (t < e.d.length - 1) return new u(NaN);
                if (
                  (0 == (1 & e.d[t]) && (s = 1),
                  0 == a.e && 1 == a.d[0] && 1 == a.d.length)
                )
                  return ((a.s = s), a);
              }
              return (
                (r = E(+a, c)),
                (t =
                  0 != r && isFinite(r)
                    ? new u(r + "").e
                    : b(c * (Math.log("0." + F(a.d)) / Math.LN10 + a.e + 1))),
                t > u.maxE + 1 || t < u.minE - 1
                  ? new u(t > 0 ? s / 0 : 0)
                  : ((d = !1),
                    (u.rounding = a.s = 1),
                    (r = Math.min(12, (t + "").length)),
                    (i = G(e.times(W(a, n + r)), n)),
                    i.d &&
                      ((i = L(i, n + 5, 1)),
                      R(i.d, n, o) &&
                        ((t = n + 10),
                        (i = L(G(e.times(W(a, t + r)), t), t + 5, 1)),
                        +F(i.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                          (i = L(i, n + 1, 0)))),
                    (i.s = s),
                    (d = !0),
                    (u.rounding = o),
                    L(i, n, o))
              );
            }),
          (I.toPrecision = function (e, t) {
            var r,
              n = this,
              i = n.constructor;
            return (
              void 0 === e
                ? (r = T(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
                : (j(e, 1, c),
                  void 0 === t ? (t = i.rounding) : j(t, 0, 8),
                  (n = L(new i(n), e, t)),
                  (r = T(n, e <= n.e || n.e <= i.toExpNeg, e))),
              n.isNeg() && !n.isZero() ? "-" + r : r
            );
          }),
          (I.toSignificantDigits = I.toSD =
            function (e, t) {
              var r = this,
                n = r.constructor;
              return (
                void 0 === e
                  ? ((e = n.precision), (t = n.rounding))
                  : (j(e, 1, c), void 0 === t ? (t = n.rounding) : j(t, 0, 8)),
                L(new n(r), e, t)
              );
            }),
          (I.toString = function () {
            var e = this,
              t = e.constructor,
              r = T(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
            return e.isNeg() && !e.isZero() ? "-" + r : r;
          }),
          (I.truncated = I.trunc =
            function () {
              return L(new this.constructor(this), this.e + 1, 1);
            }),
          (I.valueOf = I.toJSON =
            function () {
              var e = this,
                t = e.constructor,
                r = T(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
              return e.isNeg() ? "-" + r : r;
            }));
        var B = (function () {
          function e(e, t, r) {
            var n,
              i = 0,
              o = e.length;
            for (e = e.slice(); o--; )
              ((n = e[o] * t + i), (e[o] = (n % r) | 0), (i = (n / r) | 0));
            return (i && e.unshift(i), e);
          }
          function t(e, t, r, n) {
            var i, o;
            if (r != n) o = r > n ? 1 : -1;
            else
              for (i = o = 0; i < r; i++)
                if (e[i] != t[i]) {
                  o = e[i] > t[i] ? 1 : -1;
                  break;
                }
            return o;
          }
          function r(e, t, r, n) {
            for (var i = 0; r--; )
              ((e[r] -= i),
                (i = e[r] < t[r] ? 1 : 0),
                (e[r] = i * n + e[r] - t[r]));
            for (; !e[0] && e.length > 1; ) e.shift();
          }
          return function (n, i, o, a, u, c) {
            var p,
              f,
              l,
              h,
              d,
              m,
              v,
              g,
              y,
              w,
              E,
              N,
              S,
              x,
              A,
              q,
              P,
              Z,
              I,
              F,
              j = n.constructor,
              R = n.s == i.s ? 1 : -1,
              k = n.d,
              $ = i.d;
            if (!k || !k[0] || !$ || !$[0])
              return new j(
                n.s && i.s && (k ? !$ || k[0] != $[0] : $)
                  ? (k && 0 == k[0]) || !$
                    ? 0 * R
                    : R / 0
                  : NaN,
              );
            for (
              c
                ? ((d = 1), (f = n.e - i.e))
                : ((c = O), (d = M), (f = b(n.e / d) - b(i.e / d))),
                I = $.length,
                P = k.length,
                y = new j(R),
                w = y.d = [],
                l = 0;
              $[l] == (k[l] || 0);
              l++
            );
            if (
              ($[l] > (k[l] || 0) && f--,
              null == o
                ? ((x = o = j.precision), (a = j.rounding))
                : (x = u ? o + (n.e - i.e) + 1 : o),
              x < 0)
            )
              (w.push(1), (m = !0));
            else {
              if (((x = (x / d + 2) | 0), (l = 0), 1 == I)) {
                for (h = 0, $ = $[0], x++; (l < P || h) && x--; l++)
                  ((A = h * c + (k[l] || 0)),
                    (w[l] = (A / $) | 0),
                    (h = (A % $) | 0));
                m = h || l < P;
              } else {
                for (
                  h = (c / ($[0] + 1)) | 0,
                    h > 1 &&
                      (($ = e($, h, c)),
                      (k = e(k, h, c)),
                      (I = $.length),
                      (P = k.length)),
                    q = I,
                    E = k.slice(0, I),
                    N = E.length;
                  N < I;
                )
                  E[N++] = 0;
                ((F = $.slice()),
                  F.unshift(0),
                  (Z = $[0]),
                  $[1] >= c / 2 && ++Z);
                do {
                  ((h = 0),
                    (p = t($, E, I, N)),
                    p < 0
                      ? ((S = E[0]),
                        I != N && (S = S * c + (E[1] || 0)),
                        (h = (S / Z) | 0),
                        h > 1
                          ? (h >= c && (h = c - 1),
                            (v = e($, h, c)),
                            (g = v.length),
                            (N = E.length),
                            (p = t(v, E, g, N)),
                            1 == p && (h--, r(v, I < g ? F : $, g, c)))
                          : (0 == h && (p = h = 1), (v = $.slice())),
                        (g = v.length),
                        g < N && v.unshift(0),
                        r(E, v, N, c),
                        -1 == p &&
                          ((N = E.length),
                          (p = t($, E, I, N)),
                          p < 1 && (h++, r(E, I < N ? F : $, N, c))),
                        (N = E.length))
                      : 0 === p && (h++, (E = [0])),
                    (w[l++] = h),
                    p && E[0] ? (E[N++] = k[q] || 0) : ((E = [k[q]]), (N = 1)));
                } while ((q++ < P || void 0 !== E[0]) && x--);
                m = void 0 !== E[0];
              }
              w[0] || w.shift();
            }
            if (1 == d) ((y.e = f), (s = m));
            else {
              for (l = 1, h = w[0]; h >= 10; h /= 10) l++;
              ((y.e = l + f * d - 1), L(y, u ? o + y.e + 1 : o, a, m));
            }
            return y;
          };
        })();
        function L(e, t, r, n) {
          var i,
            o,
            s,
            a,
            u,
            c,
            p,
            f,
            l,
            h = e.constructor;
          e: if (null != t) {
            if (((f = e.d), !f)) return e;
            for (i = 1, a = f[0]; a >= 10; a /= 10) i++;
            if (((o = t - i), o < 0))
              ((o += M),
                (s = t),
                (p = f[(l = 0)]),
                (u = ((p / E(10, i - s - 1)) % 10) | 0));
            else if (((l = Math.ceil((o + 1) / M)), (a = f.length), l >= a)) {
              if (!n) break e;
              for (; a++ <= l; ) f.push(0);
              ((p = u = 0), (i = 1), (o %= M), (s = o - M + 1));
            } else {
              for (p = a = f[l], i = 1; a >= 10; a /= 10) i++;
              ((o %= M),
                (s = o - M + i),
                (u = s < 0 ? 0 : ((p / E(10, i - s - 1)) % 10) | 0));
            }
            if (
              ((n =
                n ||
                t < 0 ||
                void 0 !== f[l + 1] ||
                (s < 0 ? p : p % E(10, i - s - 1))),
              (c =
                r < 4
                  ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == r ||
                        n ||
                        (6 == r &&
                          ((o > 0 ? (s > 0 ? p / E(10, i - s) : 0) : f[l - 1]) %
                            10) &
                            1) ||
                        r == (e.s < 0 ? 8 : 7)))),
              t < 1 || !f[0])
            )
              return (
                (f.length = 0),
                c
                  ? ((t -= e.e + 1),
                    (f[0] = E(10, (M - (t % M)) % M)),
                    (e.e = -t || 0))
                  : (f[0] = e.e = 0),
                e
              );
            if (
              (0 == o
                ? ((f.length = l), (a = 1), l--)
                : ((f.length = l + 1),
                  (a = E(10, M - o)),
                  (f[l] =
                    s > 0 ? (((p / E(10, i - s)) % E(10, s)) | 0) * a : 0)),
              c)
            )
              for (;;) {
                if (0 == l) {
                  for (o = 1, s = f[0]; s >= 10; s /= 10) o++;
                  for (s = f[0] += a, a = 1; s >= 10; s /= 10) a++;
                  o != a && (e.e++, f[0] == O && (f[0] = 1));
                  break;
                }
                if (((f[l] += a), f[l] != O)) break;
                ((f[l--] = 0), (a = 1));
              }
            for (o = f.length; 0 === f[--o]; ) f.pop();
          }
          return (
            d &&
              (e.e > h.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < h.minE && ((e.e = 0), (e.d = [0]))),
            e
          );
        }
        function T(e, t, r) {
          if (!e.isFinite()) return X(e);
          var n,
            i = e.e,
            o = F(e.d),
            s = o.length;
          return (
            t
              ? (r && (n = r - s) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + J(n))
                  : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
                (o = o + (e.e < 0 ? "e" : "e+") + e.e))
              : i < 0
                ? ((o = "0." + J(-i - 1) + o),
                  r && (n = r - s) > 0 && (o += J(n)))
                : i >= s
                  ? ((o += J(i + 1 - s)),
                    r && (n = r - i - 1) > 0 && (o = o + "." + J(n)))
                  : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
                    r &&
                      (n = r - s) > 0 &&
                      (i + 1 === s && (o += "."), (o += J(n)))),
            o
          );
        }
        function C(e, t) {
          var r = e[0];
          for (t *= M; r >= 10; r /= 10) t++;
          return t;
        }
        function D(e, t, r) {
          if (t > P) throw ((d = !0), r && (e.precision = r), Error(g));
          return L(new e(f), t, 1, !0);
        }
        function z(e, t, r) {
          if (t > Z) throw Error(g);
          return L(new e(l), t, r, !0);
        }
        function U(e) {
          var t = e.length - 1,
            r = t * M + 1;
          if (((t = e[t]), t)) {
            for (; t % 10 == 0; t /= 10) r--;
            for (t = e[0]; t >= 10; t /= 10) r++;
          }
          return r;
        }
        function J(e) {
          for (var t = ""; e--; ) t += "0";
          return t;
        }
        function V(e, t, r, n) {
          var i,
            o = new e(1),
            s = Math.ceil(n / M + 4);
          for (d = !1; ; ) {
            if (
              (r % 2 && ((o = o.times(t)), ie(o.d, s) && (i = !0)),
              (r = b(r / 2)),
              0 === r)
            ) {
              ((r = o.d.length - 1), i && 0 === o.d[r] && ++o.d[r]);
              break;
            }
            ((t = t.times(t)), ie(t.d, s));
          }
          return ((d = !0), o);
        }
        function _(e) {
          return 1 & e.d[e.d.length - 1];
        }
        function H(e, t, r) {
          for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
            if (((i = new e(t[s])), !i.s)) {
              o = i;
              break;
            }
            ((n = o.cmp(i)), (n === r || (0 === n && o.s === r)) && (o = i));
          }
          return o;
        }
        function G(e, t) {
          var r,
            n,
            i,
            o,
            s,
            a,
            u,
            c = 0,
            p = 0,
            f = 0,
            l = e.constructor,
            h = l.rounding,
            m = l.precision;
          if (!e.d || !e.d[0] || e.e > 17)
            return new l(
              e.d
                ? e.d[0]
                  ? e.s < 0
                    ? 0
                    : 1 / 0
                  : 1
                : e.s
                  ? e.s < 0
                    ? 0
                    : e
                  : NaN,
            );
          (null == t ? ((d = !1), (u = m)) : (u = t), (a = new l(0.03125)));
          while (e.e > -2) ((e = e.times(a)), (f += 5));
          for (
            n = ((Math.log(E(2, f)) / Math.LN10) * 2 + 5) | 0,
              u += n,
              r = o = s = new l(1),
              l.precision = u;
            ;
          ) {
            if (
              ((o = L(o.times(e), u, 1)),
              (r = r.times(++p)),
              (a = s.plus(B(o, r, u, 1))),
              F(a.d).slice(0, u) === F(s.d).slice(0, u))
            ) {
              i = f;
              while (i--) s = L(s.times(s), u, 1);
              if (null != t) return ((l.precision = m), s);
              if (!(c < 3 && R(s.d, u - n, h, c)))
                return L(s, (l.precision = m), h, (d = !0));
              ((l.precision = u += 10), (r = o = a = new l(1)), (p = 0), c++);
            }
            s = a;
          }
        }
        function W(e, t) {
          var r,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            p,
            f,
            l,
            h = 1,
            m = 10,
            v = e,
            g = v.d,
            y = v.constructor,
            w = y.rounding,
            b = y.precision;
          if (v.s < 0 || !g || !g[0] || (!v.e && 1 == g[0] && 1 == g.length))
            return new y(g && !g[0] ? -1 / 0 : 1 != v.s ? NaN : g ? 0 : v);
          if (
            (null == t ? ((d = !1), (p = b)) : (p = t),
            (y.precision = p += m),
            (r = F(g)),
            (n = r.charAt(0)),
            !(Math.abs((o = v.e)) < 15e14))
          )
            return (
              (c = D(y, p + 2, b).times(o + "")),
              (v = W(new y(n + "." + r.slice(1)), p - m).plus(c)),
              (y.precision = b),
              null == t ? L(v, b, w, (d = !0)) : v
            );
          while ((n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3))
            ((v = v.times(e)), (r = F(v.d)), (n = r.charAt(0)), h++);
          for (
            o = v.e,
              n > 1
                ? ((v = new y("0." + r)), o++)
                : (v = new y(n + "." + r.slice(1))),
              f = v,
              u = s = v = B(v.minus(1), v.plus(1), p, 1),
              l = L(v.times(v), p, 1),
              i = 3;
            ;
          ) {
            if (
              ((s = L(s.times(l), p, 1)),
              (c = u.plus(B(s, new y(i), p, 1))),
              F(c.d).slice(0, p) === F(u.d).slice(0, p))
            ) {
              if (
                ((u = u.times(2)),
                0 !== o && (u = u.plus(D(y, p + 2, b).times(o + ""))),
                (u = B(u, new y(h), p, 1)),
                null != t)
              )
                return ((y.precision = b), u);
              if (!R(u.d, p - m, w, a))
                return L(u, (y.precision = b), w, (d = !0));
              ((y.precision = p += m),
                (c = s = v = B(f.minus(1), f.plus(1), p, 1)),
                (l = L(v.times(v), p, 1)),
                (i = a = 1));
            }
            ((u = c), (i += 2));
          }
        }
        function X(e) {
          return String((e.s * e.s) / 0);
        }
        function K(e, t) {
          var r, n, i;
          for (
            (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
              (n = t.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +t.slice(n + 1)),
                  (t = t.substring(0, n)))
                : r < 0 && (r = t.length),
              n = 0;
            48 === t.charCodeAt(n);
            n++
          );
          for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
          if (((t = t.slice(n, i)), t)) {
            if (
              ((i -= n),
              (e.e = r = r - n - 1),
              (e.d = []),
              (n = (r + 1) % M),
              r < 0 && (n += M),
              n < i)
            ) {
              for (n && e.d.push(+t.slice(0, n)), i -= M; n < i; )
                e.d.push(+t.slice(n, (n += M)));
              ((t = t.slice(n)), (n = M - t.length));
            } else n -= i;
            for (; n--; ) t += "0";
            (e.d.push(+t),
              d &&
                (e.e > e.constructor.maxE
                  ? ((e.d = null), (e.e = NaN))
                  : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0]))));
          } else ((e.e = 0), (e.d = [0]));
          return e;
        }
        function Q(e, t) {
          var r, n, i, s, a, u, c, p, f;
          if (t.indexOf("_") > -1) {
            if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), A.test(t)))
              return K(e, t);
          } else if ("Infinity" === t || "NaN" === t)
            return (+t || (e.s = NaN), (e.e = NaN), (e.d = null), e);
          if (S.test(t)) ((r = 16), (t = t.toLowerCase()));
          else if (N.test(t)) r = 2;
          else {
            if (!x.test(t)) throw Error(v + t);
            r = 8;
          }
          for (
            s = t.search(/p/i),
              s > 0
                ? ((c = +t.slice(s + 1)), (t = t.substring(2, s)))
                : (t = t.slice(2)),
              s = t.indexOf("."),
              a = s >= 0,
              n = e.constructor,
              a &&
                ((t = t.replace(".", "")),
                (u = t.length),
                (s = u - s),
                (i = V(n, new n(r), s, 2 * s))),
              p = k(t, r, O),
              f = p.length - 1,
              s = f;
            0 === p[s];
            --s
          )
            p.pop();
          return s < 0
            ? new n(0 * e.s)
            : ((e.e = C(p, f)),
              (e.d = p),
              (d = !1),
              a && (e = B(e, i, 4 * u)),
              c && (e = e.times(Math.abs(c) < 54 ? E(2, c) : o.pow(2, c))),
              (d = !0),
              e);
        }
        function Y(e, t) {
          var r,
            n = t.d.length;
          if (n < 3) return t.isZero() ? t : ee(e, 2, t, t);
          ((r = 1.4 * Math.sqrt(n)),
            (r = r > 16 ? 16 : 0 | r),
            (t = t.times(1 / te(5, r))),
            (t = ee(e, 2, t, t)));
          for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
            ((i = t.times(t)),
              (t = t.times(o.plus(i.times(s.times(i).minus(a))))));
          return t;
        }
        function ee(e, t, r, n, i) {
          var o,
            s,
            a,
            u,
            c = e.precision,
            p = Math.ceil(c / M);
          for (d = !1, u = r.times(r), a = new e(n); ; ) {
            if (
              ((s = B(a.times(u), new e(t++ * t++), c, 1)),
              (a = i ? n.plus(s) : n.minus(s)),
              (n = B(s.times(u), new e(t++ * t++), c, 1)),
              (s = a.plus(n)),
              void 0 !== s.d[p])
            ) {
              for (o = p; s.d[o] === a.d[o] && o--; );
              if (-1 == o) break;
            }
            ((o = a), (a = n), (n = s), (s = o));
          }
          return ((d = !0), (s.d.length = p + 1), s);
        }
        function te(e, t) {
          var r = e;
          while (--t) r *= e;
          return r;
        }
        function re(e, t) {
          var r,
            n = t.s < 0,
            i = z(e, e.precision, 1),
            o = i.times(0.5);
          if (((t = t.abs()), t.lte(o))) return ((a = n ? 4 : 1), t);
          if (((r = t.divToInt(i)), r.isZero())) a = n ? 3 : 2;
          else {
            if (((t = t.minus(r.times(i))), t.lte(o)))
              return ((a = _(r) ? (n ? 2 : 3) : n ? 4 : 1), t);
            a = _(r) ? (n ? 1 : 4) : n ? 3 : 2;
          }
          return t.minus(i).abs();
        }
        function ne(e, t, r, n) {
          var i,
            o,
            a,
            u,
            f,
            l,
            h,
            d,
            m,
            v = e.constructor,
            g = void 0 !== r;
          if (
            (g
              ? (j(r, 1, c), void 0 === n ? (n = v.rounding) : j(n, 0, 8))
              : ((r = v.precision), (n = v.rounding)),
            e.isFinite())
          ) {
            for (
              h = T(e),
                a = h.indexOf("."),
                g
                  ? ((i = 2),
                    16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2))
                  : (i = t),
                a >= 0 &&
                  ((h = h.replace(".", "")),
                  (m = new v(1)),
                  (m.e = h.length - a),
                  (m.d = k(T(m), 10, i)),
                  (m.e = m.d.length)),
                d = k(h, 10, i),
                o = f = d.length;
              0 == d[--f];
            )
              d.pop();
            if (d[0]) {
              if (
                (a < 0
                  ? o--
                  : ((e = new v(e)),
                    (e.d = d),
                    (e.e = o),
                    (e = B(e, m, r, n, 0, i)),
                    (d = e.d),
                    (o = e.e),
                    (l = s)),
                (a = d[r]),
                (u = i / 2),
                (l = l || void 0 !== d[r + 1]),
                (l =
                  n < 4
                    ? (void 0 !== a || l) &&
                      (0 === n || n === (e.s < 0 ? 3 : 2))
                    : a > u ||
                      (a === u &&
                        (4 === n ||
                          l ||
                          (6 === n && 1 & d[r - 1]) ||
                          n === (e.s < 0 ? 8 : 7)))),
                (d.length = r),
                l)
              )
                for (; ++d[--r] > i - 1; )
                  ((d[r] = 0), r || (++o, d.unshift(1)));
              for (f = d.length; !d[f - 1]; --f);
              for (a = 0, h = ""; a < f; a++) h += p.charAt(d[a]);
              if (g) {
                if (f > 1)
                  if (16 == t || 8 == t) {
                    for (a = 16 == t ? 4 : 3, --f; f % a; f++) h += "0";
                    for (d = k(h, i, t), f = d.length; !d[f - 1]; --f);
                    for (a = 1, h = "1."; a < f; a++) h += p.charAt(d[a]);
                  } else h = h.charAt(0) + "." + h.slice(1);
                h = h + (o < 0 ? "p" : "p+") + o;
              } else if (o < 0) {
                for (; ++o; ) h = "0" + h;
                h = "0." + h;
              } else if (++o > f) for (o -= f; o--; ) h += "0";
              else o < f && (h = h.slice(0, o) + "." + h.slice(o));
            } else h = g ? "0p+0" : "0";
            h = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + h;
          } else h = X(e);
          return e.s < 0 ? "-" + h : h;
        }
        function ie(e, t) {
          if (e.length > t) return ((e.length = t), !0);
        }
        function oe(e) {
          return new this(e).abs();
        }
        function se(e) {
          return new this(e).acos();
        }
        function ae(e) {
          return new this(e).acosh();
        }
        function ue(e, t) {
          return new this(e).plus(t);
        }
        function ce(e) {
          return new this(e).asin();
        }
        function pe(e) {
          return new this(e).asinh();
        }
        function fe(e) {
          return new this(e).atan();
        }
        function le(e) {
          return new this(e).atanh();
        }
        function he(e, t) {
          ((e = new this(e)), (t = new this(t)));
          var r,
            n = this.precision,
            i = this.rounding,
            o = n + 4;
          return (
            e.s && t.s
              ? e.d || t.d
                ? !t.d || e.isZero()
                  ? ((r = t.s < 0 ? z(this, n, i) : new this(0)), (r.s = e.s))
                  : !e.d || t.isZero()
                    ? ((r = z(this, o, 1).times(0.5)), (r.s = e.s))
                    : t.s < 0
                      ? ((this.precision = o),
                        (this.rounding = 1),
                        (r = this.atan(B(e, t, o, 1))),
                        (t = z(this, o, 1)),
                        (this.precision = n),
                        (this.rounding = i),
                        (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                      : (r = this.atan(B(e, t, o, 1)))
                : ((r = z(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)),
                  (r.s = e.s))
              : (r = new this(NaN)),
            r
          );
        }
        function de(e) {
          return new this(e).cbrt();
        }
        function me(e) {
          return L((e = new this(e)), e.e + 1, 2);
        }
        function ve(e, t, r) {
          return new this(e).clamp(t, r);
        }
        function ge(e) {
          if (!e || "object" !== typeof e) throw Error(m + "Object expected");
          var t,
            r,
            n,
            i = !0 === e.defaults,
            o = [
              "precision",
              1,
              c,
              "rounding",
              0,
              8,
              "toExpNeg",
              -u,
              0,
              "toExpPos",
              0,
              u,
              "maxE",
              0,
              u,
              "minE",
              -u,
              0,
              "modulo",
              0,
              9,
            ];
          for (t = 0; t < o.length; t += 3)
            if (((r = o[t]), i && (this[r] = h[r]), void 0 !== (n = e[r]))) {
              if (!(b(n) === n && n >= o[t + 1] && n <= o[t + 2]))
                throw Error(v + r + ": " + n);
              this[r] = n;
            }
          if (((r = "crypto"), i && (this[r] = h[r]), void 0 !== (n = e[r]))) {
            if (!0 !== n && !1 !== n && 0 !== n && 1 !== n)
              throw Error(v + r + ": " + n);
            if (n) {
              if (
                "undefined" == typeof crypto ||
                !crypto ||
                (!crypto.getRandomValues && !crypto.randomBytes)
              )
                throw Error(y);
              this[r] = !0;
            } else this[r] = !1;
          }
          return this;
        }
        function ye(e) {
          return new this(e).cos();
        }
        function we(e) {
          return new this(e).cosh();
        }
        function be(e) {
          var t, r, n;
          function i(e) {
            var t,
              r,
              n,
              o = this;
            if (!(o instanceof i)) return new i(e);
            if (((o.constructor = i), Ae(e)))
              return (
                (o.s = e.s),
                void (d
                  ? !e.d || e.e > i.maxE
                    ? ((o.e = NaN), (o.d = null))
                    : e.e < i.minE
                      ? ((o.e = 0), (o.d = [0]))
                      : ((o.e = e.e), (o.d = e.d.slice()))
                  : ((o.e = e.e), (o.d = e.d ? e.d.slice() : e.d)))
              );
            if (((n = typeof e), "number" === n)) {
              if (0 === e)
                return (
                  (o.s = 1 / e < 0 ? -1 : 1),
                  (o.e = 0),
                  void (o.d = [0])
                );
              if (
                (e < 0 ? ((e = -e), (o.s = -1)) : (o.s = 1),
                e === ~~e && e < 1e7)
              ) {
                for (t = 0, r = e; r >= 10; r /= 10) t++;
                return void (d
                  ? t > i.maxE
                    ? ((o.e = NaN), (o.d = null))
                    : t < i.minE
                      ? ((o.e = 0), (o.d = [0]))
                      : ((o.e = t), (o.d = [e]))
                  : ((o.e = t), (o.d = [e])));
              }
              return 0 * e !== 0
                ? (e || (o.s = NaN), (o.e = NaN), void (o.d = null))
                : K(o, e.toString());
            }
            if ("string" === n)
              return (
                45 === (r = e.charCodeAt(0))
                  ? ((e = e.slice(1)), (o.s = -1))
                  : (43 === r && (e = e.slice(1)), (o.s = 1)),
                A.test(e) ? K(o, e) : Q(o, e)
              );
            if ("bigint" === n)
              return (
                e < 0 ? ((e = -e), (o.s = -1)) : (o.s = 1),
                K(o, e.toString())
              );
            throw Error(v + e);
          }
          if (
            ((i.prototype = I),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.EUCLID = 9),
            (i.config = i.set = ge),
            (i.clone = be),
            (i.isDecimal = Ae),
            (i.abs = oe),
            (i.acos = se),
            (i.acosh = ae),
            (i.add = ue),
            (i.asin = ce),
            (i.asinh = pe),
            (i.atan = fe),
            (i.atanh = le),
            (i.atan2 = he),
            (i.cbrt = de),
            (i.ceil = me),
            (i.clamp = ve),
            (i.cos = ye),
            (i.cosh = we),
            (i.div = Ee),
            (i.exp = Ne),
            (i.floor = Se),
            (i.hypot = xe),
            (i.ln = Oe),
            (i.log = Me),
            (i.log10 = Pe),
            (i.log2 = qe),
            (i.max = Ze),
            (i.min = Ie),
            (i.mod = Fe),
            (i.mul = je),
            (i.pow = Re),
            (i.random = ke),
            (i.round = $e),
            (i.sign = Be),
            (i.sin = Le),
            (i.sinh = Te),
            (i.sqrt = Ce),
            (i.sub = De),
            (i.sum = ze),
            (i.tan = Ue),
            (i.tanh = Je),
            (i.trunc = Ve),
            void 0 === e && (e = {}),
            e && !0 !== e.defaults)
          )
            for (
              n = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ],
                t = 0;
              t < n.length;
            )
              e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
          return (i.config(e), i);
        }
        function Ee(e, t) {
          return new this(e).div(t);
        }
        function Ne(e) {
          return new this(e).exp();
        }
        function Se(e) {
          return L((e = new this(e)), e.e + 1, 3);
        }
        function xe() {
          var e,
            t,
            r = new this(0);
          for (d = !1, e = 0; e < arguments.length; )
            if (((t = new this(arguments[e++])), t.d))
              r.d && (r = r.plus(t.times(t)));
            else {
              if (t.s) return ((d = !0), new this(1 / 0));
              r = t;
            }
          return ((d = !0), r.sqrt());
        }
        function Ae(e) {
          return e instanceof o || (e && e.toStringTag === w) || !1;
        }
        function Oe(e) {
          return new this(e).ln();
        }
        function Me(e, t) {
          return new this(e).log(t);
        }
        function qe(e) {
          return new this(e).log(2);
        }
        function Pe(e) {
          return new this(e).log(10);
        }
        function Ze() {
          return H(this, arguments, -1);
        }
        function Ie() {
          return H(this, arguments, 1);
        }
        function Fe(e, t) {
          return new this(e).mod(t);
        }
        function je(e, t) {
          return new this(e).mul(t);
        }
        function Re(e, t) {
          return new this(e).pow(t);
        }
        function ke(e) {
          var t,
            r,
            n,
            i,
            o = 0,
            s = new this(1),
            a = [];
          if (
            (void 0 === e ? (e = this.precision) : j(e, 1, c),
            (n = Math.ceil(e / M)),
            this.crypto)
          )
            if (crypto.getRandomValues)
              for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
                ((i = t[o]),
                  i >= 429e7
                    ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
                    : (a[o++] = i % 1e7));
            else {
              if (!crypto.randomBytes) throw Error(y);
              for (t = crypto.randomBytes((n *= 4)); o < n; )
                ((i =
                  t[o] +
                  (t[o + 1] << 8) +
                  (t[o + 2] << 16) +
                  ((127 & t[o + 3]) << 24)),
                  i >= 214e7
                    ? crypto.randomBytes(4).copy(t, o)
                    : (a.push(i % 1e7), (o += 4)));
              o = n / 4;
            }
          else for (; o < n; ) a[o++] = (1e7 * Math.random()) | 0;
          for (
            n = a[--o],
              e %= M,
              n && e && ((i = E(10, M - e)), (a[o] = ((n / i) | 0) * i));
            0 === a[o];
            o--
          )
            a.pop();
          if (o < 0) ((r = 0), (a = [0]));
          else {
            for (r = -1; 0 === a[0]; r -= M) a.shift();
            for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
            n < M && (r -= M - n);
          }
          return ((s.e = r), (s.d = a), s);
        }
        function $e(e) {
          return L((e = new this(e)), e.e + 1, this.rounding);
        }
        function Be(e) {
          return (
            (e = new this(e)),
            e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN
          );
        }
        function Le(e) {
          return new this(e).sin();
        }
        function Te(e) {
          return new this(e).sinh();
        }
        function Ce(e) {
          return new this(e).sqrt();
        }
        function De(e, t) {
          return new this(e).sub(t);
        }
        function ze() {
          var e = 0,
            t = arguments,
            r = new this(t[e]);
          for (d = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
          return ((d = !0), L(r, this.precision, this.rounding));
        }
        function Ue(e) {
          return new this(e).tan();
        }
        function Je(e) {
          return new this(e).tanh();
        }
        function Ve(e) {
          return L((e = new this(e)), e.e + 1, 1);
        }
        ((o = be(h)),
          (o.prototype.constructor = o),
          (o["default"] = o.Decimal = o),
          (f = new o(f)),
          (l = new o(l)),
          (n = function () {
            return o;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    3941: function (e, t, r) {
      (function (e) {
        var n,
          i = (function (e) {
            "use strict";
            var t = 1e7,
              r = 7,
              n = 9007199254740992,
              o = l(n),
              s = "0123456789abcdefghijklmnopqrstuvwxyz",
              a = "function" === typeof BigInt;
            function u(e, t, r, n) {
              return "undefined" === typeof e
                ? u[0]
                : "undefined" !== typeof t && (10 !== +t || r)
                  ? K(e, t, r, n)
                  : ie(e);
            }
            function BigInteger(e, t) {
              ((this.value = e), (this.sign = t), (this.isSmall = !1));
            }
            function c(e) {
              ((this.value = e), (this.sign = e < 0), (this.isSmall = !0));
            }
            function p(e) {
              this.value = e;
            }
            function f(e) {
              return -n < e && e < n;
            }
            function l(e) {
              return e < 1e7
                ? [e]
                : e < 1e14
                  ? [e % 1e7, Math.floor(e / 1e7)]
                  : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
            }
            function h(e) {
              d(e);
              var r = e.length;
              if (r < 4 && R(e, o) < 0)
                switch (r) {
                  case 0:
                    return 0;
                  case 1:
                    return e[0];
                  case 2:
                    return e[0] + e[1] * t;
                  default:
                    return e[0] + (e[1] + e[2] * t) * t;
                }
              return e;
            }
            function d(e) {
              var t = e.length;
              while (0 === e[--t]);
              e.length = t + 1;
            }
            function m(e) {
              var t = new Array(e),
                r = -1;
              while (++r < e) t[r] = 0;
              return t;
            }
            function v(e) {
              return e > 0 ? Math.floor(e) : Math.ceil(e);
            }
            function g(e, r) {
              var n,
                i,
                o = e.length,
                s = r.length,
                a = new Array(o),
                u = 0,
                c = t;
              for (i = 0; i < s; i++)
                ((n = e[i] + r[i] + u),
                  (u = n >= c ? 1 : 0),
                  (a[i] = n - u * c));
              while (i < o)
                ((n = e[i] + u), (u = n === c ? 1 : 0), (a[i++] = n - u * c));
              return (u > 0 && a.push(u), a);
            }
            function y(e, t) {
              return e.length >= t.length ? g(e, t) : g(t, e);
            }
            function w(e, r) {
              var n,
                i,
                o = e.length,
                s = new Array(o),
                a = t;
              for (i = 0; i < o; i++)
                ((n = e[i] - a + r),
                  (r = Math.floor(n / a)),
                  (s[i] = n - r * a),
                  (r += 1));
              while (r > 0) ((s[i++] = r % a), (r = Math.floor(r / a)));
              return s;
            }
            function b(e, r) {
              var n,
                i,
                o = e.length,
                s = r.length,
                a = new Array(o),
                u = 0,
                c = t;
              for (n = 0; n < s; n++)
                ((i = e[n] - u - r[n]),
                  i < 0 ? ((i += c), (u = 1)) : (u = 0),
                  (a[n] = i));
              for (n = s; n < o; n++) {
                if (((i = e[n] - u), !(i < 0))) {
                  a[n++] = i;
                  break;
                }
                ((i += c), (a[n] = i));
              }
              for (; n < o; n++) a[n] = e[n];
              return (d(a), a);
            }
            function E(e, t, r) {
              var n;
              return (
                R(e, t) >= 0 ? (n = b(e, t)) : ((n = b(t, e)), (r = !r)),
                (n = h(n)),
                "number" === typeof n
                  ? (r && (n = -n), new c(n))
                  : new BigInteger(n, r)
              );
            }
            function N(e, r, n) {
              var i,
                o,
                s = e.length,
                a = new Array(s),
                u = -r,
                p = t;
              for (i = 0; i < s; i++)
                ((o = e[i] + u),
                  (u = Math.floor(o / p)),
                  (o %= p),
                  (a[i] = o < 0 ? o + p : o));
              return (
                (a = h(a)),
                "number" === typeof a
                  ? (n && (a = -a), new c(a))
                  : new BigInteger(a, n)
              );
            }
            function S(e, r) {
              var n,
                i,
                o,
                s,
                a,
                u = e.length,
                c = r.length,
                p = u + c,
                f = m(p),
                l = t;
              for (o = 0; o < u; ++o) {
                s = e[o];
                for (var h = 0; h < c; ++h)
                  ((a = r[h]),
                    (n = s * a + f[o + h]),
                    (i = Math.floor(n / l)),
                    (f[o + h] = n - i * l),
                    (f[o + h + 1] += i));
              }
              return (d(f), f);
            }
            function x(e, r) {
              var n,
                i,
                o = e.length,
                s = new Array(o),
                a = t,
                u = 0;
              for (i = 0; i < o; i++)
                ((n = e[i] * r + u),
                  (u = Math.floor(n / a)),
                  (s[i] = n - u * a));
              while (u > 0) ((s[i++] = u % a), (u = Math.floor(u / a)));
              return s;
            }
            function A(e, t) {
              var r = [];
              while (t-- > 0) r.push(0);
              return r.concat(e);
            }
            function O(e, t) {
              var r = Math.max(e.length, t.length);
              if (r <= 30) return S(e, t);
              r = Math.ceil(r / 2);
              var n = e.slice(r),
                i = e.slice(0, r),
                o = t.slice(r),
                s = t.slice(0, r),
                a = O(i, s),
                u = O(n, o),
                c = O(y(i, n), y(s, o)),
                p = y(y(a, A(b(b(c, a), u), r)), A(u, 2 * r));
              return (d(p), p);
            }
            function M(e, t) {
              return -0.012 * e - 0.012 * t + 15e-6 * e * t > 0;
            }
            function q(e, r, n) {
              return new BigInteger(e < t ? x(r, e) : S(r, l(e)), n);
            }
            function P(e) {
              var r,
                n,
                i,
                o,
                s,
                a = e.length,
                u = m(a + a),
                c = t;
              for (i = 0; i < a; i++) {
                ((o = e[i]), (n = 0 - o * o));
                for (var p = i; p < a; p++)
                  ((s = e[p]),
                    (r = o * s * 2 + u[i + p] + n),
                    (n = Math.floor(r / c)),
                    (u[i + p] = r - n * c));
                u[i + a] = n;
              }
              return (d(u), u);
            }
            function Z(e, r) {
              var n,
                i,
                o,
                s,
                a,
                u,
                c,
                p = e.length,
                f = r.length,
                l = t,
                d = m(r.length),
                v = r[f - 1],
                g = Math.ceil(l / (2 * v)),
                y = x(e, g),
                w = x(r, g);
              for (
                y.length <= p && y.push(0), w.push(0), v = w[f - 1], i = p - f;
                i >= 0;
                i--
              ) {
                for (
                  n = l - 1,
                    y[i + f] !== v &&
                      (n = Math.floor((y[i + f] * l + y[i + f - 1]) / v)),
                    o = 0,
                    s = 0,
                    u = w.length,
                    a = 0;
                  a < u;
                  a++
                )
                  ((o += n * w[a]),
                    (c = Math.floor(o / l)),
                    (s += y[i + a] - (o - c * l)),
                    (o = c),
                    s < 0
                      ? ((y[i + a] = s + l), (s = -1))
                      : ((y[i + a] = s), (s = 0)));
                while (0 !== s) {
                  for (n -= 1, o = 0, a = 0; a < u; a++)
                    ((o += y[i + a] - l + w[a]),
                      o < 0
                        ? ((y[i + a] = o + l), (o = 0))
                        : ((y[i + a] = o), (o = 1)));
                  s += o;
                }
                d[i] = n;
              }
              return ((y = F(y, g)[0]), [h(d), h(y)]);
            }
            function I(e, r) {
              var n,
                i,
                o,
                s,
                a,
                u = e.length,
                c = r.length,
                p = [],
                f = [],
                l = t;
              while (u)
                if ((f.unshift(e[--u]), d(f), R(f, r) < 0)) p.push(0);
                else {
                  ((i = f.length),
                    (o = f[i - 1] * l + f[i - 2]),
                    (s = r[c - 1] * l + r[c - 2]),
                    i > c && (o = (o + 1) * l),
                    (n = Math.ceil(o / s)));
                  do {
                    if (((a = x(r, n)), R(a, f) <= 0)) break;
                    n--;
                  } while (n);
                  (p.push(n), (f = b(f, a)));
                }
              return (p.reverse(), [h(p), h(f)]);
            }
            function F(e, r) {
              var n,
                i,
                o,
                s,
                a = e.length,
                u = m(a),
                c = t;
              for (o = 0, n = a - 1; n >= 0; --n)
                ((s = o * c + e[n]),
                  (i = v(s / r)),
                  (o = s - i * r),
                  (u[n] = 0 | i));
              return [u, 0 | o];
            }
            function j(e, r) {
              var n,
                i = ie(r);
              if (a)
                return [new p(e.value / i.value), new p(e.value % i.value)];
              var o,
                s = e.value,
                f = i.value;
              if (0 === f) throw new Error("Cannot divide by zero");
              if (e.isSmall)
                return i.isSmall ? [new c(v(s / f)), new c(s % f)] : [u[0], e];
              if (i.isSmall) {
                if (1 === f) return [e, u[0]];
                if (-1 == f) return [e.negate(), u[0]];
                var d = Math.abs(f);
                if (d < t) {
                  ((n = F(s, d)), (o = h(n[0])));
                  var m = n[1];
                  return (
                    e.sign && (m = -m),
                    "number" === typeof o
                      ? (e.sign !== i.sign && (o = -o), [new c(o), new c(m)])
                      : [new BigInteger(o, e.sign !== i.sign), new c(m)]
                  );
                }
                f = l(d);
              }
              var g = R(s, f);
              if (-1 === g) return [u[0], e];
              if (0 === g) return [u[e.sign === i.sign ? 1 : -1], u[0]];
              ((n = s.length + f.length <= 200 ? Z(s, f) : I(s, f)),
                (o = n[0]));
              var y = e.sign !== i.sign,
                w = n[1],
                b = e.sign;
              return (
                "number" === typeof o
                  ? (y && (o = -o), (o = new c(o)))
                  : (o = new BigInteger(o, y)),
                "number" === typeof w
                  ? (b && (w = -w), (w = new c(w)))
                  : (w = new BigInteger(w, b)),
                [o, w]
              );
            }
            function R(e, t) {
              if (e.length !== t.length) return e.length > t.length ? 1 : -1;
              for (var r = e.length - 1; r >= 0; r--)
                if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
              return 0;
            }
            function k(e) {
              var t = e.abs();
              return (
                !t.isUnit() &&
                (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                  (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) &&
                    (!!t.lesser(49) || void 0)))
              );
            }
            function $(e, t) {
              var r,
                n,
                o,
                s = e.prev(),
                a = s,
                u = 0;
              while (a.isEven()) ((a = a.divide(2)), u++);
              e: for (n = 0; n < t.length; n++)
                if (
                  !e.lesser(t[n]) &&
                  ((o = i(t[n]).modPow(a, e)), !o.isUnit() && !o.equals(s))
                ) {
                  for (r = u - 1; 0 != r; r--) {
                    if (((o = o.square().mod(e)), o.isUnit())) return !1;
                    if (o.equals(s)) continue e;
                  }
                  return !1;
                }
              return !0;
            }
            ((BigInteger.prototype = Object.create(u.prototype)),
              (c.prototype = Object.create(u.prototype)),
              (p.prototype = Object.create(u.prototype)),
              (BigInteger.prototype.add = function (e) {
                var t = ie(e);
                if (this.sign !== t.sign) return this.subtract(t.negate());
                var r = this.value,
                  n = t.value;
                return t.isSmall
                  ? new BigInteger(w(r, Math.abs(n)), this.sign)
                  : new BigInteger(y(r, n), this.sign);
              }),
              (BigInteger.prototype.plus = BigInteger.prototype.add),
              (c.prototype.add = function (e) {
                var t = ie(e),
                  r = this.value;
                if (r < 0 !== t.sign) return this.subtract(t.negate());
                var n = t.value;
                if (t.isSmall) {
                  if (f(r + n)) return new c(r + n);
                  n = l(Math.abs(n));
                }
                return new BigInteger(w(n, Math.abs(r)), r < 0);
              }),
              (c.prototype.plus = c.prototype.add),
              (p.prototype.add = function (e) {
                return new p(this.value + ie(e).value);
              }),
              (p.prototype.plus = p.prototype.add),
              (BigInteger.prototype.subtract = function (e) {
                var t = ie(e);
                if (this.sign !== t.sign) return this.add(t.negate());
                var r = this.value,
                  n = t.value;
                return t.isSmall
                  ? N(r, Math.abs(n), this.sign)
                  : E(r, n, this.sign);
              }),
              (BigInteger.prototype.minus = BigInteger.prototype.subtract),
              (c.prototype.subtract = function (e) {
                var t = ie(e),
                  r = this.value;
                if (r < 0 !== t.sign) return this.add(t.negate());
                var n = t.value;
                return t.isSmall ? new c(r - n) : N(n, Math.abs(r), r >= 0);
              }),
              (c.prototype.minus = c.prototype.subtract),
              (p.prototype.subtract = function (e) {
                return new p(this.value - ie(e).value);
              }),
              (p.prototype.minus = p.prototype.subtract),
              (BigInteger.prototype.negate = function () {
                return new BigInteger(this.value, !this.sign);
              }),
              (c.prototype.negate = function () {
                var e = this.sign,
                  t = new c(-this.value);
                return ((t.sign = !e), t);
              }),
              (p.prototype.negate = function () {
                return new p(-this.value);
              }),
              (BigInteger.prototype.abs = function () {
                return new BigInteger(this.value, !1);
              }),
              (c.prototype.abs = function () {
                return new c(Math.abs(this.value));
              }),
              (p.prototype.abs = function () {
                return new p(this.value >= 0 ? this.value : -this.value);
              }),
              (BigInteger.prototype.multiply = function (e) {
                var r,
                  n = ie(e),
                  i = this.value,
                  o = n.value,
                  s = this.sign !== n.sign;
                if (n.isSmall) {
                  if (0 === o) return u[0];
                  if (1 === o) return this;
                  if (-1 === o) return this.negate();
                  if (((r = Math.abs(o)), r < t))
                    return new BigInteger(x(i, r), s);
                  o = l(r);
                }
                return M(i.length, o.length)
                  ? new BigInteger(O(i, o), s)
                  : new BigInteger(S(i, o), s);
              }),
              (BigInteger.prototype.times = BigInteger.prototype.multiply),
              (c.prototype._multiplyBySmall = function (e) {
                return f(e.value * this.value)
                  ? new c(e.value * this.value)
                  : q(
                      Math.abs(e.value),
                      l(Math.abs(this.value)),
                      this.sign !== e.sign,
                    );
              }),
              (BigInteger.prototype._multiplyBySmall = function (e) {
                return 0 === e.value
                  ? u[0]
                  : 1 === e.value
                    ? this
                    : -1 === e.value
                      ? this.negate()
                      : q(Math.abs(e.value), this.value, this.sign !== e.sign);
              }),
              (c.prototype.multiply = function (e) {
                return ie(e)._multiplyBySmall(this);
              }),
              (c.prototype.times = c.prototype.multiply),
              (p.prototype.multiply = function (e) {
                return new p(this.value * ie(e).value);
              }),
              (p.prototype.times = p.prototype.multiply),
              (BigInteger.prototype.square = function () {
                return new BigInteger(P(this.value), !1);
              }),
              (c.prototype.square = function () {
                var e = this.value * this.value;
                return f(e)
                  ? new c(e)
                  : new BigInteger(P(l(Math.abs(this.value))), !1);
              }),
              (p.prototype.square = function (e) {
                return new p(this.value * this.value);
              }),
              (BigInteger.prototype.divmod = function (e) {
                var t = j(this, e);
                return { quotient: t[0], remainder: t[1] };
              }),
              (p.prototype.divmod = c.prototype.divmod =
                BigInteger.prototype.divmod),
              (BigInteger.prototype.divide = function (e) {
                return j(this, e)[0];
              }),
              (p.prototype.over = p.prototype.divide =
                function (e) {
                  return new p(this.value / ie(e).value);
                }),
              (c.prototype.over =
                c.prototype.divide =
                BigInteger.prototype.over =
                  BigInteger.prototype.divide),
              (BigInteger.prototype.mod = function (e) {
                return j(this, e)[1];
              }),
              (p.prototype.mod = p.prototype.remainder =
                function (e) {
                  return new p(this.value % ie(e).value);
                }),
              (c.prototype.remainder =
                c.prototype.mod =
                BigInteger.prototype.remainder =
                  BigInteger.prototype.mod),
              (BigInteger.prototype.pow = function (e) {
                var t,
                  r,
                  n,
                  i = ie(e),
                  o = this.value,
                  s = i.value;
                if (0 === s) return u[1];
                if (0 === o) return u[0];
                if (1 === o) return u[1];
                if (-1 === o) return i.isEven() ? u[1] : u[-1];
                if (i.sign) return u[0];
                if (!i.isSmall)
                  throw new Error(
                    "The exponent " + i.toString() + " is too large.",
                  );
                if (this.isSmall && f((t = Math.pow(o, s)))) return new c(v(t));
                ((r = this), (n = u[1]));
                while (1) {
                  if ((!0 & s && ((n = n.times(r)), --s), 0 === s)) break;
                  ((s /= 2), (r = r.square()));
                }
                return n;
              }),
              (c.prototype.pow = BigInteger.prototype.pow),
              (p.prototype.pow = function (e) {
                var t = ie(e),
                  r = this.value,
                  n = t.value,
                  i = BigInt(0),
                  o = BigInt(1),
                  s = BigInt(2);
                if (n === i) return u[1];
                if (r === i) return u[0];
                if (r === o) return u[1];
                if (r === BigInt(-1)) return t.isEven() ? u[1] : u[-1];
                if (t.isNegative()) return new p(i);
                var a = this,
                  c = u[1];
                while (1) {
                  if (((n & o) === o && ((c = c.times(a)), --n), n === i))
                    break;
                  ((n /= s), (a = a.square()));
                }
                return c;
              }),
              (BigInteger.prototype.modPow = function (e, t) {
                if (((e = ie(e)), (t = ie(t)), t.isZero()))
                  throw new Error("Cannot take modPow with modulus 0");
                var r = u[1],
                  n = this.mod(t);
                e.isNegative() && ((e = e.multiply(u[-1])), (n = n.modInv(t)));
                while (e.isPositive()) {
                  if (n.isZero()) return u[0];
                  (e.isOdd() && (r = r.multiply(n).mod(t)),
                    (e = e.divide(2)),
                    (n = n.square().mod(t)));
                }
                return r;
              }),
              (p.prototype.modPow = c.prototype.modPow =
                BigInteger.prototype.modPow),
              (BigInteger.prototype.compareAbs = function (e) {
                var t = ie(e),
                  r = this.value,
                  n = t.value;
                return t.isSmall ? 1 : R(r, n);
              }),
              (c.prototype.compareAbs = function (e) {
                var t = ie(e),
                  r = Math.abs(this.value),
                  n = t.value;
                return t.isSmall
                  ? ((n = Math.abs(n)), r === n ? 0 : r > n ? 1 : -1)
                  : -1;
              }),
              (p.prototype.compareAbs = function (e) {
                var t = this.value,
                  r = ie(e).value;
                return (
                  (t = t >= 0 ? t : -t),
                  (r = r >= 0 ? r : -r),
                  t === r ? 0 : t > r ? 1 : -1
                );
              }),
              (BigInteger.prototype.compare = function (e) {
                if (e === 1 / 0) return -1;
                if (e === -1 / 0) return 1;
                var t = ie(e),
                  r = this.value,
                  n = t.value;
                return this.sign !== t.sign
                  ? t.sign
                    ? 1
                    : -1
                  : t.isSmall
                    ? this.sign
                      ? -1
                      : 1
                    : R(r, n) * (this.sign ? -1 : 1);
              }),
              (BigInteger.prototype.compareTo = BigInteger.prototype.compare),
              (c.prototype.compare = function (e) {
                if (e === 1 / 0) return -1;
                if (e === -1 / 0) return 1;
                var t = ie(e),
                  r = this.value,
                  n = t.value;
                return t.isSmall
                  ? r == n
                    ? 0
                    : r > n
                      ? 1
                      : -1
                  : r < 0 !== t.sign
                    ? r < 0
                      ? -1
                      : 1
                    : r < 0
                      ? 1
                      : -1;
              }),
              (c.prototype.compareTo = c.prototype.compare),
              (p.prototype.compare = function (e) {
                if (e === 1 / 0) return -1;
                if (e === -1 / 0) return 1;
                var t = this.value,
                  r = ie(e).value;
                return t === r ? 0 : t > r ? 1 : -1;
              }),
              (p.prototype.compareTo = p.prototype.compare),
              (BigInteger.prototype.equals = function (e) {
                return 0 === this.compare(e);
              }),
              (p.prototype.eq =
                p.prototype.equals =
                c.prototype.eq =
                c.prototype.equals =
                BigInteger.prototype.eq =
                  BigInteger.prototype.equals),
              (BigInteger.prototype.notEquals = function (e) {
                return 0 !== this.compare(e);
              }),
              (p.prototype.neq =
                p.prototype.notEquals =
                c.prototype.neq =
                c.prototype.notEquals =
                BigInteger.prototype.neq =
                  BigInteger.prototype.notEquals),
              (BigInteger.prototype.greater = function (e) {
                return this.compare(e) > 0;
              }),
              (p.prototype.gt =
                p.prototype.greater =
                c.prototype.gt =
                c.prototype.greater =
                BigInteger.prototype.gt =
                  BigInteger.prototype.greater),
              (BigInteger.prototype.lesser = function (e) {
                return this.compare(e) < 0;
              }),
              (p.prototype.lt =
                p.prototype.lesser =
                c.prototype.lt =
                c.prototype.lesser =
                BigInteger.prototype.lt =
                  BigInteger.prototype.lesser),
              (BigInteger.prototype.greaterOrEquals = function (e) {
                return this.compare(e) >= 0;
              }),
              (p.prototype.geq =
                p.prototype.greaterOrEquals =
                c.prototype.geq =
                c.prototype.greaterOrEquals =
                BigInteger.prototype.geq =
                  BigInteger.prototype.greaterOrEquals),
              (BigInteger.prototype.lesserOrEquals = function (e) {
                return this.compare(e) <= 0;
              }),
              (p.prototype.leq =
                p.prototype.lesserOrEquals =
                c.prototype.leq =
                c.prototype.lesserOrEquals =
                BigInteger.prototype.leq =
                  BigInteger.prototype.lesserOrEquals),
              (BigInteger.prototype.isEven = function () {
                return 0 === (1 & this.value[0]);
              }),
              (c.prototype.isEven = function () {
                return 0 === (1 & this.value);
              }),
              (p.prototype.isEven = function () {
                return (this.value & BigInt(1)) === BigInt(0);
              }),
              (BigInteger.prototype.isOdd = function () {
                return 1 === (1 & this.value[0]);
              }),
              (c.prototype.isOdd = function () {
                return 1 === (1 & this.value);
              }),
              (p.prototype.isOdd = function () {
                return (this.value & BigInt(1)) === BigInt(1);
              }),
              (BigInteger.prototype.isPositive = function () {
                return !this.sign;
              }),
              (c.prototype.isPositive = function () {
                return this.value > 0;
              }),
              (p.prototype.isPositive = c.prototype.isPositive),
              (BigInteger.prototype.isNegative = function () {
                return this.sign;
              }),
              (c.prototype.isNegative = function () {
                return this.value < 0;
              }),
              (p.prototype.isNegative = c.prototype.isNegative),
              (BigInteger.prototype.isUnit = function () {
                return !1;
              }),
              (c.prototype.isUnit = function () {
                return 1 === Math.abs(this.value);
              }),
              (p.prototype.isUnit = function () {
                return this.abs().value === BigInt(1);
              }),
              (BigInteger.prototype.isZero = function () {
                return !1;
              }),
              (c.prototype.isZero = function () {
                return 0 === this.value;
              }),
              (p.prototype.isZero = function () {
                return this.value === BigInt(0);
              }),
              (BigInteger.prototype.isDivisibleBy = function (e) {
                var t = ie(e);
                return (
                  !t.isZero() &&
                  (!!t.isUnit() ||
                    (0 === t.compareAbs(2)
                      ? this.isEven()
                      : this.mod(t).isZero()))
                );
              }),
              (p.prototype.isDivisibleBy = c.prototype.isDivisibleBy =
                BigInteger.prototype.isDivisibleBy),
              (BigInteger.prototype.isPrime = function (t) {
                var r = k(this);
                if (r !== e) return r;
                var n = this.abs(),
                  o = n.bitLength();
                if (o <= 64)
                  return $(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                for (
                  var s = Math.log(2) * o.toJSNumber(),
                    a = Math.ceil(!0 === t ? 2 * Math.pow(s, 2) : s),
                    u = [],
                    c = 0;
                  c < a;
                  c++
                )
                  u.push(i(c + 2));
                return $(n, u);
              }),
              (p.prototype.isPrime = c.prototype.isPrime =
                BigInteger.prototype.isPrime),
              (BigInteger.prototype.isProbablePrime = function (t, r) {
                var n = k(this);
                if (n !== e) return n;
                for (
                  var o = this.abs(), s = t === e ? 5 : t, a = [], u = 0;
                  u < s;
                  u++
                )
                  a.push(i.randBetween(2, o.minus(2), r));
                return $(o, a);
              }),
              (p.prototype.isProbablePrime = c.prototype.isProbablePrime =
                BigInteger.prototype.isProbablePrime),
              (BigInteger.prototype.modInv = function (e) {
                var t,
                  r,
                  n,
                  o = i.zero,
                  s = i.one,
                  a = ie(e),
                  u = this.abs();
                while (!u.isZero())
                  ((t = a.divide(u)),
                    (r = o),
                    (n = a),
                    (o = s),
                    (a = u),
                    (s = r.subtract(t.multiply(s))),
                    (u = n.subtract(t.multiply(u))));
                if (!a.isUnit())
                  throw new Error(
                    this.toString() +
                      " and " +
                      e.toString() +
                      " are not co-prime",
                  );
                return (
                  -1 === o.compare(0) && (o = o.add(e)),
                  this.isNegative() ? o.negate() : o
                );
              }),
              (p.prototype.modInv = c.prototype.modInv =
                BigInteger.prototype.modInv),
              (BigInteger.prototype.next = function () {
                var e = this.value;
                return this.sign
                  ? N(e, 1, this.sign)
                  : new BigInteger(w(e, 1), this.sign);
              }),
              (c.prototype.next = function () {
                var e = this.value;
                return e + 1 < n ? new c(e + 1) : new BigInteger(o, !1);
              }),
              (p.prototype.next = function () {
                return new p(this.value + BigInt(1));
              }),
              (BigInteger.prototype.prev = function () {
                var e = this.value;
                return this.sign
                  ? new BigInteger(w(e, 1), !0)
                  : N(e, 1, this.sign);
              }),
              (c.prototype.prev = function () {
                var e = this.value;
                return e - 1 > -n ? new c(e - 1) : new BigInteger(o, !0);
              }),
              (p.prototype.prev = function () {
                return new p(this.value - BigInt(1));
              }));
            var B = [1];
            while (2 * B[B.length - 1] <= t) B.push(2 * B[B.length - 1]);
            var L = B.length,
              T = B[L - 1];
            function C(e) {
              return Math.abs(e) <= t;
            }
            function D(e, t, r) {
              t = ie(t);
              var n = e.isNegative(),
                o = t.isNegative(),
                s = n ? e.not() : e,
                a = o ? t.not() : t,
                u = 0,
                c = 0,
                p = null,
                f = null,
                l = [];
              while (!s.isZero() || !a.isZero())
                ((p = j(s, T)),
                  (u = p[1].toJSNumber()),
                  n && (u = T - 1 - u),
                  (f = j(a, T)),
                  (c = f[1].toJSNumber()),
                  o && (c = T - 1 - c),
                  (s = p[0]),
                  (a = f[0]),
                  l.push(r(u, c)));
              for (
                var h = 0 !== r(n ? 1 : 0, o ? 1 : 0) ? i(-1) : i(0),
                  d = l.length - 1;
                d >= 0;
                d -= 1
              )
                h = h.multiply(T).add(i(l[d]));
              return h;
            }
            ((BigInteger.prototype.shiftLeft = function (e) {
              var t = ie(e).toJSNumber();
              if (!C(t))
                throw new Error(String(t) + " is too large for shifting.");
              if (t < 0) return this.shiftRight(-t);
              var r = this;
              if (r.isZero()) return r;
              while (t >= L) ((r = r.multiply(T)), (t -= L - 1));
              return r.multiply(B[t]);
            }),
              (p.prototype.shiftLeft = c.prototype.shiftLeft =
                BigInteger.prototype.shiftLeft),
              (BigInteger.prototype.shiftRight = function (e) {
                var t,
                  r = ie(e).toJSNumber();
                if (!C(r))
                  throw new Error(String(r) + " is too large for shifting.");
                if (r < 0) return this.shiftLeft(-r);
                var n = this;
                while (r >= L) {
                  if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                  ((t = j(n, T)),
                    (n = t[1].isNegative() ? t[0].prev() : t[0]),
                    (r -= L - 1));
                }
                return (
                  (t = j(n, B[r])),
                  t[1].isNegative() ? t[0].prev() : t[0]
                );
              }),
              (p.prototype.shiftRight = c.prototype.shiftRight =
                BigInteger.prototype.shiftRight),
              (BigInteger.prototype.not = function () {
                return this.negate().prev();
              }),
              (p.prototype.not = c.prototype.not = BigInteger.prototype.not),
              (BigInteger.prototype.and = function (e) {
                return D(this, e, function (e, t) {
                  return e & t;
                });
              }),
              (p.prototype.and = c.prototype.and = BigInteger.prototype.and),
              (BigInteger.prototype.or = function (e) {
                return D(this, e, function (e, t) {
                  return e | t;
                });
              }),
              (p.prototype.or = c.prototype.or = BigInteger.prototype.or),
              (BigInteger.prototype.xor = function (e) {
                return D(this, e, function (e, t) {
                  return e ^ t;
                });
              }),
              (p.prototype.xor = c.prototype.xor = BigInteger.prototype.xor));
            var z = 1 << 30,
              U = ((t & -t) * (t & -t)) | z;
            function J(e) {
              var r = e.value,
                n =
                  "number" === typeof r
                    ? r | z
                    : "bigint" === typeof r
                      ? r | BigInt(z)
                      : (r[0] + r[1] * t) | U;
              return n & -n;
            }
            function V(e, t) {
              if (t.compareTo(e) <= 0) {
                var r = V(e, t.square(t)),
                  n = r.p,
                  o = r.e,
                  s = n.multiply(t);
                return s.compareTo(e) <= 0
                  ? { p: s, e: 2 * o + 1 }
                  : { p: n, e: 2 * o };
              }
              return { p: i(1), e: 0 };
            }
            function _(e, t) {
              return ((e = ie(e)), (t = ie(t)), e.greater(t) ? e : t);
            }
            function H(e, t) {
              return ((e = ie(e)), (t = ie(t)), e.lesser(t) ? e : t);
            }
            function G(e, t) {
              if (((e = ie(e).abs()), (t = ie(t).abs()), e.equals(t))) return e;
              if (e.isZero()) return t;
              if (t.isZero()) return e;
              var r,
                n,
                i = u[1];
              while (e.isEven() && t.isEven())
                ((r = H(J(e), J(t))),
                  (e = e.divide(r)),
                  (t = t.divide(r)),
                  (i = i.multiply(r)));
              while (e.isEven()) e = e.divide(J(e));
              do {
                while (t.isEven()) t = t.divide(J(t));
                (e.greater(t) && ((n = t), (t = e), (e = n)),
                  (t = t.subtract(e)));
              } while (!t.isZero());
              return i.isUnit() ? e : e.multiply(i);
            }
            function W(e, t) {
              return (
                (e = ie(e).abs()),
                (t = ie(t).abs()),
                e.divide(G(e, t)).multiply(t)
              );
            }
            function X(e, r, n) {
              ((e = ie(e)), (r = ie(r)));
              var i = n || Math.random,
                o = H(e, r),
                s = _(e, r),
                a = s.subtract(o).add(1);
              if (a.isSmall) return o.add(Math.floor(i() * a));
              for (
                var c = ee(a, t).value, p = [], f = !0, l = 0;
                l < c.length;
                l++
              ) {
                var h = f ? c[l] + (l + 1 < c.length ? c[l + 1] / t : 0) : t,
                  d = v(i() * h);
                (p.push(d), d < c[l] && (f = !1));
              }
              return o.add(u.fromArray(p, t, !1));
            }
            ((BigInteger.prototype.bitLength = function () {
              var e = this;
              return (
                e.compareTo(i(0)) < 0 && (e = e.negate().subtract(i(1))),
                0 === e.compareTo(i(0)) ? i(0) : i(V(e, i(2)).e).add(i(1))
              );
            }),
              (p.prototype.bitLength = c.prototype.bitLength =
                BigInteger.prototype.bitLength));
            var K = function (e, t, r, n) {
              ((r = r || s),
                (e = String(e)),
                n || ((e = e.toLowerCase()), (r = r.toLowerCase())));
              var i,
                o = e.length,
                a = Math.abs(t),
                u = {};
              for (i = 0; i < r.length; i++) u[r[i]] = i;
              for (i = 0; i < o; i++) {
                var c = e[i];
                if ("-" !== c && c in u && u[c] >= a) {
                  if ("1" === c && 1 === a) continue;
                  throw new Error(
                    c + " is not a valid digit in base " + t + ".",
                  );
                }
              }
              t = ie(t);
              var p = [],
                f = "-" === e[0];
              for (i = f ? 1 : 0; i < e.length; i++) {
                c = e[i];
                if (c in u) p.push(ie(u[c]));
                else {
                  if ("<" !== c)
                    throw new Error(c + " is not a valid character");
                  var l = i;
                  do {
                    i++;
                  } while (">" !== e[i] && i < e.length);
                  p.push(ie(e.slice(l + 1, i)));
                }
              }
              return Q(p, t, f);
            };
            function Q(e, t, r) {
              var n,
                i = u[0],
                o = u[1];
              for (n = e.length - 1; n >= 0; n--)
                ((i = i.add(e[n].times(o))), (o = o.times(t)));
              return r ? i.negate() : i;
            }
            function Y(e, t) {
              return ((t = t || s), e < t.length ? t[e] : "<" + e + ">");
            }
            function ee(e, t) {
              if (((t = i(t)), t.isZero())) {
                if (e.isZero()) return { value: [0], isNegative: !1 };
                throw new Error("Cannot convert nonzero numbers to base 0.");
              }
              if (t.equals(-1)) {
                if (e.isZero()) return { value: [0], isNegative: !1 };
                if (e.isNegative())
                  return {
                    value: [].concat.apply(
                      [],
                      Array.apply(null, Array(-e.toJSNumber())).map(
                        Array.prototype.valueOf,
                        [1, 0],
                      ),
                    ),
                    isNegative: !1,
                  };
                var r = Array.apply(null, Array(e.toJSNumber() - 1)).map(
                  Array.prototype.valueOf,
                  [0, 1],
                );
                return (
                  r.unshift([1]),
                  { value: [].concat.apply([], r), isNegative: !1 }
                );
              }
              var n = !1;
              if (
                (e.isNegative() && t.isPositive() && ((n = !0), (e = e.abs())),
                t.isUnit())
              )
                return e.isZero()
                  ? { value: [0], isNegative: !1 }
                  : {
                      value: Array.apply(null, Array(e.toJSNumber())).map(
                        Number.prototype.valueOf,
                        1,
                      ),
                      isNegative: n,
                    };
              var o,
                s = [],
                a = e;
              while (a.isNegative() || a.compareAbs(t) >= 0) {
                ((o = a.divmod(t)), (a = o.quotient));
                var u = o.remainder;
                (u.isNegative() && ((u = t.minus(u).abs()), (a = a.next())),
                  s.push(u.toJSNumber()));
              }
              return (
                s.push(a.toJSNumber()),
                { value: s.reverse(), isNegative: n }
              );
            }
            function te(e, t, r) {
              var n = ee(e, t);
              return (
                (n.isNegative ? "-" : "") +
                n.value
                  .map(function (e) {
                    return Y(e, r);
                  })
                  .join("")
              );
            }
            function re(e) {
              if (f(+e)) {
                var t = +e;
                if (t === v(t)) return a ? new p(BigInt(t)) : new c(t);
                throw new Error("Invalid integer: " + e);
              }
              var n = "-" === e[0];
              n && (e = e.slice(1));
              var i = e.split(/e/i);
              if (i.length > 2)
                throw new Error("Invalid integer: " + i.join("e"));
              if (2 === i.length) {
                var o = i[1];
                if (
                  ("+" === o[0] && (o = o.slice(1)),
                  (o = +o),
                  o !== v(o) || !f(o))
                )
                  throw new Error(
                    "Invalid integer: " + o + " is not a valid exponent.",
                  );
                var s = i[0],
                  u = s.indexOf(".");
                if (
                  (u >= 0 &&
                    ((o -= s.length - u - 1),
                    (s = s.slice(0, u) + s.slice(u + 1))),
                  o < 0)
                )
                  throw new Error(
                    "Cannot include negative exponent part for integers",
                  );
                ((s += new Array(o + 1).join("0")), (e = s));
              }
              var l = /^([0-9][0-9]*)$/.test(e);
              if (!l) throw new Error("Invalid integer: " + e);
              if (a) return new p(BigInt(n ? "-" + e : e));
              var h = [],
                m = e.length,
                g = r,
                y = m - g;
              while (m > 0)
                (h.push(+e.slice(y, m)), (y -= g), y < 0 && (y = 0), (m -= g));
              return (d(h), new BigInteger(h, n));
            }
            function ne(e) {
              if (a) return new p(BigInt(e));
              if (f(e)) {
                if (e !== v(e)) throw new Error(e + " is not an integer.");
                return new c(e);
              }
              return re(e.toString());
            }
            function ie(e) {
              return "number" === typeof e
                ? ne(e)
                : "string" === typeof e
                  ? re(e)
                  : "bigint" === typeof e
                    ? new p(e)
                    : e;
            }
            ((BigInteger.prototype.toArray = function (e) {
              return ee(this, e);
            }),
              (c.prototype.toArray = function (e) {
                return ee(this, e);
              }),
              (p.prototype.toArray = function (e) {
                return ee(this, e);
              }),
              (BigInteger.prototype.toString = function (t, r) {
                if ((t === e && (t = 10), 10 !== t || r)) return te(this, t, r);
                var n,
                  i = this.value,
                  o = i.length,
                  s = String(i[--o]),
                  a = "0000000";
                while (--o >= 0)
                  ((n = String(i[o])), (s += a.slice(n.length) + n));
                var u = this.sign ? "-" : "";
                return u + s;
              }),
              (c.prototype.toString = function (t, r) {
                return (
                  t === e && (t = 10),
                  10 != t || r ? te(this, t, r) : String(this.value)
                );
              }),
              (p.prototype.toString = c.prototype.toString),
              (p.prototype.toJSON =
                BigInteger.prototype.toJSON =
                c.prototype.toJSON =
                  function () {
                    return this.toString();
                  }),
              (BigInteger.prototype.valueOf = function () {
                return parseInt(this.toString(), 10);
              }),
              (BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf),
              (c.prototype.valueOf = function () {
                return this.value;
              }),
              (c.prototype.toJSNumber = c.prototype.valueOf),
              (p.prototype.valueOf = p.prototype.toJSNumber =
                function () {
                  return parseInt(this.toString(), 10);
                }));
            for (var oe = 0; oe < 1e3; oe++)
              ((u[oe] = ie(oe)), oe > 0 && (u[-oe] = ie(-oe)));
            return (
              (u.one = u[1]),
              (u.zero = u[0]),
              (u.minusOne = u[-1]),
              (u.max = _),
              (u.min = H),
              (u.gcd = G),
              (u.lcm = W),
              (u.isInstance = function (e) {
                return (
                  e instanceof BigInteger || e instanceof c || e instanceof p
                );
              }),
              (u.randBetween = X),
              (u.fromArray = function (e, t, r) {
                return Q(e.map(ie), ie(t || 10), r);
              }),
              u
            );
          })();
        (e.hasOwnProperty("exports") && (e.exports = i),
          (n = function () {
            return i;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      }).call(this, r(20)(e));
    },
    4548: function (e, t, r) {
      "use strict";
      var n = r(231),
        i = (t.ValidationError = function (e, t, r, n, i, o) {
          (n && (this.property = n),
            e && (this.message = e),
            r && (r.id ? (this.schema = r.id) : (this.schema = r)),
            t && (this.instance = t),
            (this.name = i),
            (this.argument = o),
            (this.stack = this.toString()));
        });
      i.prototype.toString = function () {
        return this.property + " " + this.message;
      };
      var o = (t.ValidatorResult = function (e, t, r, n) {
        ((this.instance = e),
          (this.schema = t),
          (this.propertyPath = n.propertyPath),
          (this.errors = []),
          (this.throwError = r && r.throwError),
          (this.disableFormat = r && !0 === r.disableFormat));
      });
      function s(e, t) {
        return t + ": " + e.toString() + "\n";
      }
      ((o.prototype.addError = function (e) {
        var t;
        if ("string" == typeof e)
          t = new i(e, this.instance, this.schema, this.propertyPath);
        else {
          if (!e) throw new Error("Missing error detail");
          if (!e.message) throw new Error("Missing error message");
          if (!e.name) throw new Error("Missing validator type");
          t = new i(
            e.message,
            this.instance,
            this.schema,
            this.propertyPath,
            e.name,
            e.argument,
          );
        }
        if (this.throwError) throw t;
        return (this.errors.push(t), t);
      }),
        (o.prototype.importErrors = function (e) {
          "string" == typeof e || (e && e.validatorType)
            ? this.addError(e)
            : e &&
              e.errors &&
              Array.prototype.push.apply(this.errors, e.errors);
        }),
        (o.prototype.toString = function (e) {
          return this.errors.map(s).join("");
        }),
        Object.defineProperty(o.prototype, "valid", {
          get: function () {
            return !this.errors.length;
          },
        }));
      var a = (t.SchemaError = function e(t, r) {
        ((this.message = t),
          (this.schema = r),
          Error.call(this, t),
          Error.captureStackTrace(this, e));
      });
      a.prototype = Object.create(Error.prototype, {
        constructor: { value: a, enumerable: !1 },
        name: { value: "SchemaError", enumerable: !1 },
      });
      var u = (t.SchemaContext = function (e, t, r, n, i) {
        ((this.schema = e),
          (this.options = t),
          (this.propertyPath = r),
          (this.base = n),
          (this.schemas = i));
      });
      ((u.prototype.resolve = function (e) {
        return n.resolve(this.base, e);
      }),
        (u.prototype.makeChild = function (e, t) {
          var r = void 0 === t ? this.propertyPath : this.propertyPath + p(t),
            i = n.resolve(this.base, e.id || ""),
            o = new u(e, this.options, r, i, Object.create(this.schemas));
          return (e.id && !o.schemas[i] && (o.schemas[i] = e), o);
        }));
      var c = (t.FORMAT_REGEXPS = {
        "date-time":
          /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
        date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
        time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
        email:
          /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
        "ip-address":
          /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
        uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
        color:
          /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
        hostname:
          /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
        "host-name":
          /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
        alpha: /^[a-zA-Z]+$/,
        alphanumeric: /^[a-zA-Z0-9]+$/,
        "utc-millisec": function (e) {
          return (
            "string" === typeof e &&
            parseFloat(e) === parseInt(e, 10) &&
            !isNaN(e)
          );
        },
        regex: function (e) {
          var t = !0;
          try {
            new RegExp(e);
          } catch (r) {
            t = !1;
          }
          return t;
        },
        style: /\s*(.+?):\s*([^;]+);?/g,
        phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
      });
      ((c.regexp = c.regex),
        (c.pattern = c.regex),
        (c.ipv4 = c["ip-address"]),
        (t.isFormat = function (e, t, r) {
          if ("string" === typeof e && void 0 !== c[t]) {
            if (c[t] instanceof RegExp) return c[t].test(e);
            if ("function" === typeof c[t]) return c[t](e);
          } else if (
            r &&
            r.customFormats &&
            "function" === typeof r.customFormats[t]
          )
            return r.customFormats[t](e);
          return !0;
        }));
      var p = (t.makeSuffix = function (e) {
        return (
          (e = e.toString()),
          e.match(/[.\s\[\]]/) || e.match(/^[\d]/)
            ? e.match(/^\d+$/)
              ? "[" + e + "]"
              : "[" + JSON.stringify(e) + "]"
            : "." + e
        );
      });
      function f(e, t, r, n) {
        "object" === typeof r
          ? (t[n] = d(e[n], r))
          : -1 === e.indexOf(r) && t.push(r);
      }
      function l(e, t, r) {
        t[r] = e[r];
      }
      function h(e, t, r, n) {
        "object" === typeof t[n] && t[n] && e[n]
          ? (r[n] = d(e[n], t[n]))
          : (r[n] = t[n]);
      }
      function d(e, t) {
        var r = Array.isArray(t),
          n = (r && []) || {};
        return (
          r
            ? ((e = e || []), (n = n.concat(e)), t.forEach(f.bind(null, e, n)))
            : (e &&
                "object" === typeof e &&
                Object.keys(e).forEach(l.bind(null, e, n)),
              Object.keys(t).forEach(h.bind(null, e, t, n))),
          n
        );
      }
      function m(e) {
        return "/" + encodeURIComponent(e).replace(/~/g, "%7E");
      }
      ((t.deepCompareStrict = function e(t, r) {
        if (typeof t !== typeof r) return !1;
        if (t instanceof Array)
          return (
            r instanceof Array &&
            t.length === r.length &&
            t.every(function (n, i) {
              return e(t[i], r[i]);
            })
          );
        if ("object" === typeof t) {
          if (!t || !r) return t === r;
          var n = Object.keys(t),
            i = Object.keys(r);
          return (
            n.length === i.length &&
            n.every(function (n) {
              return e(t[n], r[n]);
            })
          );
        }
        return t === r;
      }),
        (e.exports.deepMerge = d),
        (t.objectGetPath = function (e, t) {
          var r,
            n = t.split("/").slice(1);
          while ("string" == typeof (r = n.shift())) {
            var i = decodeURIComponent(
              r.replace(/~0/, "~").replace(/~1/g, "/"),
            );
            if (!(i in e)) return;
            e = e[i];
          }
          return e;
        }),
        (t.encodePath = function (e) {
          return e.map(m).join("");
        }),
        (t.getDecimalPlaces = function (e) {
          var t = 0;
          if (isNaN(e)) return t;
          "number" !== typeof e && (e = Number(e));
          var r = e.toString().split("e");
          if (2 === r.length) {
            if ("-" !== r[1][0]) return t;
            t = Number(r[1].slice(1));
          }
          var n = r[0].split(".");
          return (2 === n.length && (t += n[1].length), t);
        }));
    },
    5541: function (e, t) {},
  },
]);
