(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [111],
  {
    22: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = e[1] || "",
          r = e[3];
        if (!r) return n;
        if (t && "function" === typeof btoa) {
          var o = i(r),
            a = r.sources.map(function (e) {
              return "/*# sourceURL=" + r.sourceRoot + e + " */";
            });
          return [n].concat(a).concat([o]).join("\n");
        }
        return [n].join("\n");
      }
      function i(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
          n =
            "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
        return "/*# " + n + " */";
      }
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = r(t, e);
              return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" === typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
              var o = this[i][0];
              null != o && (r[o] = !0);
            }
            for (i = 0; i < e.length; i++) {
              var a = e[i];
              (null != a[0] && r[a[0]]) ||
                (n && !a[2]
                  ? (a[2] = n)
                  : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a));
            }
          }),
          t
        );
      };
    },
    246: function (e, t, n) {
      var r = n(428),
        i = n(974);
      function o(e, t) {
        var n = new i(t);
        return n.process(e);
      }
      for (var a in ((t = e.exports = o), (t.FilterCSS = i), r)) t[a] = r[a];
      "undefined" !== typeof window && (window.filterCSS = e.exports);
    },
    2650: function (e, t, n) {
      /*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */
      (function (t, n) {
        e.exports = n();
      })(0, function () {
        "use strict";
        const {
          entries: e,
          setPrototypeOf: t,
          isFrozen: n,
          getPrototypeOf: r,
          getOwnPropertyDescriptor: i,
        } = Object;
        let { freeze: o, seal: a, create: u } = Object,
          { apply: s, construct: c } =
            "undefined" !== typeof Reflect && Reflect;
        (s ||
          (s = function (e, t, n) {
            return e.apply(t, n);
          }),
          o ||
            (o = function (e) {
              return e;
            }),
          a ||
            (a = function (e) {
              return e;
            }),
          c ||
            (c = function (e, t) {
              return new e(...t);
            }));
        const l = _(Array.prototype.forEach),
          f = _(Array.prototype.pop),
          d = _(Array.prototype.push),
          h = _(String.prototype.toLowerCase),
          p = _(String.prototype.toString),
          m = _(String.prototype.match),
          y = _(String.prototype.replace),
          v = _(String.prototype.indexOf),
          g = _(String.prototype.trim),
          b = _(RegExp.prototype.test),
          w = x(TypeError);
        function _(e) {
          return function (t) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return s(e, t, r);
          };
        }
        function x(e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return c(e, n);
          };
        }
        function k(e, r, i) {
          var o;
          ((i = null !== (o = i) && void 0 !== o ? o : h), t && t(e, null));
          let a = r.length;
          while (a--) {
            let t = r[a];
            if ("string" === typeof t) {
              const e = i(t);
              e !== t && (n(r) || (r[a] = e), (t = e));
            }
            e[t] = !0;
          }
          return e;
        }
        function E(t) {
          const n = u(null);
          for (const [r, i] of e(t)) n[r] = i;
          return n;
        }
        function A(e, t) {
          while (null !== e) {
            const n = i(e, t);
            if (n) {
              if (n.get) return _(n.get);
              if ("function" === typeof n.value) return _(n.value);
            }
            e = r(e);
          }
          function n(e) {
            return (console.warn("fallback value for", e), null);
          }
          return n;
        }
        const T = o([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
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
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
          ]),
          O = o([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern",
          ]),
          S = o([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feDropShadow",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
          ]),
          P = o([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use",
          ]),
          C = o([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover",
            "mprescripts",
          ]),
          R = o([
            "maction",
            "maligngroup",
            "malignmark",
            "mlongdiv",
            "mscarries",
            "mscarry",
            "msgroup",
            "mstack",
            "msline",
            "msrow",
            "semantics",
            "annotation",
            "annotation-xml",
            "mprescripts",
            "none",
          ]),
          D = o(["#text"]),
          N = o([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "nonce",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "xmlns",
            "slot",
          ]),
          I = o([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "targetx",
            "targety",
            "transform",
            "transform-origin",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan",
          ]),
          K = o([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns",
          ]),
          j = o([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]),
          M = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          B = a(/<%[\w\W]*|[\w\W]*%>/gm),
          L = a(/\${[\w\W]*}/gm),
          q = a(/^data-[\-\w.\u00B7-\uFFFF]/),
          F = a(/^aria-[\-\w]+$/),
          U = a(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          z = a(/^(?:\w+script|data):/i),
          H = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          W = a(/^html$/i);
        var Y = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: M,
          ERB_EXPR: B,
          TMPLIT_EXPR: L,
          DATA_ATTR: q,
          ARIA_ATTR: F,
          IS_ALLOWED_URI: U,
          IS_SCRIPT_OR_DATA: z,
          ATTR_WHITESPACE: H,
          DOCTYPE_NAME: W,
        });
        const G = () => ("undefined" === typeof window ? null : window),
          V = function (e, t) {
            if ("object" !== typeof e || "function" !== typeof e.createPolicy)
              return null;
            let n = null;
            const r = "data-tt-policy-suffix";
            t && t.hasAttribute(r) && (n = t.getAttribute(r));
            const i = "dompurify" + (n ? "#" + n : "");
            try {
              return e.createPolicy(i, {
                createHTML(e) {
                  return e;
                },
                createScriptURL(e) {
                  return e;
                },
              });
            } catch (o) {
              return (
                console.warn(
                  "TrustedTypes policy " + i + " could not be created.",
                ),
                null
              );
            }
          };
        function $() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : G();
          const n = (e) => $(e);
          if (
            ((n.version = "3.0.3"),
            (n.removed = []),
            !t || !t.document || 9 !== t.document.nodeType)
          )
            return ((n.isSupported = !1), n);
          const r = t.document,
            i = r.currentScript;
          let { document: a } = t;
          const {
              DocumentFragment: u,
              HTMLTemplateElement: s,
              Node: c,
              Element: _,
              NodeFilter: x,
              NamedNodeMap: M = t.NamedNodeMap || t.MozNamedAttrMap,
              HTMLFormElement: B,
              DOMParser: L,
              trustedTypes: q,
            } = t,
            F = _.prototype,
            z = A(F, "cloneNode"),
            H = A(F, "nextSibling"),
            X = A(F, "childNodes"),
            Q = A(F, "parentNode");
          if ("function" === typeof s) {
            const e = a.createElement("template");
            e.content &&
              e.content.ownerDocument &&
              (a = e.content.ownerDocument);
          }
          let J,
            Z = "";
          const {
              implementation: ee,
              createNodeIterator: te,
              createDocumentFragment: ne,
              getElementsByTagName: re,
            } = a,
            { importNode: ie } = r;
          let oe = {};
          n.isSupported =
            "function" === typeof e &&
            "function" === typeof Q &&
            ee &&
            void 0 !== ee.createHTMLDocument;
          const {
            MUSTACHE_EXPR: ae,
            ERB_EXPR: ue,
            TMPLIT_EXPR: se,
            DATA_ATTR: ce,
            ARIA_ATTR: le,
            IS_SCRIPT_OR_DATA: fe,
            ATTR_WHITESPACE: de,
          } = Y;
          let { IS_ALLOWED_URI: he } = Y,
            pe = null;
          const me = k({}, [...T, ...O, ...S, ...C, ...D]);
          let ye = null;
          const ve = k({}, [...N, ...I, ...K, ...j]);
          let ge = Object.seal(
              Object.create(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              }),
            ),
            be = null,
            we = null,
            _e = !0,
            xe = !0,
            ke = !1,
            Ee = !0,
            Ae = !1,
            Te = !1,
            Oe = !1,
            Se = !1,
            Pe = !1,
            Ce = !1,
            Re = !1,
            De = !0,
            Ne = !1;
          const Ie = "user-content-";
          let Ke = !0,
            je = !1,
            Me = {},
            Be = null;
          const Le = k({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]);
          let qe = null;
          const Fe = k({}, [
            "audio",
            "video",
            "img",
            "source",
            "image",
            "track",
          ]);
          let Ue = null;
          const ze = k({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns",
            ]),
            He = "http://www.w3.org/1998/Math/MathML",
            We = "http://www.w3.org/2000/svg",
            Ye = "http://www.w3.org/1999/xhtml";
          let Ge = Ye,
            Ve = !1,
            $e = null;
          const Xe = k({}, [He, We, Ye], p);
          let Qe;
          const Je = ["application/xhtml+xml", "text/html"],
            Ze = "text/html";
          let et,
            tt = null;
          const nt = a.createElement("form"),
            rt = function (e) {
              return e instanceof RegExp || e instanceof Function;
            },
            it = function (e) {
              if (!tt || tt !== e) {
                if (
                  ((e && "object" === typeof e) || (e = {}),
                  (e = E(e)),
                  (Qe = Qe =
                    -1 === Je.indexOf(e.PARSER_MEDIA_TYPE)
                      ? Ze
                      : e.PARSER_MEDIA_TYPE),
                  (et = "application/xhtml+xml" === Qe ? p : h),
                  (pe = "ALLOWED_TAGS" in e ? k({}, e.ALLOWED_TAGS, et) : me),
                  (ye = "ALLOWED_ATTR" in e ? k({}, e.ALLOWED_ATTR, et) : ve),
                  ($e =
                    "ALLOWED_NAMESPACES" in e
                      ? k({}, e.ALLOWED_NAMESPACES, p)
                      : Xe),
                  (Ue =
                    "ADD_URI_SAFE_ATTR" in e
                      ? k(E(ze), e.ADD_URI_SAFE_ATTR, et)
                      : ze),
                  (qe =
                    "ADD_DATA_URI_TAGS" in e
                      ? k(E(Fe), e.ADD_DATA_URI_TAGS, et)
                      : Fe),
                  (Be =
                    "FORBID_CONTENTS" in e ? k({}, e.FORBID_CONTENTS, et) : Le),
                  (be = "FORBID_TAGS" in e ? k({}, e.FORBID_TAGS, et) : {}),
                  (we = "FORBID_ATTR" in e ? k({}, e.FORBID_ATTR, et) : {}),
                  (Me = "USE_PROFILES" in e && e.USE_PROFILES),
                  (_e = !1 !== e.ALLOW_ARIA_ATTR),
                  (xe = !1 !== e.ALLOW_DATA_ATTR),
                  (ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Ee = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                  (Ae = e.SAFE_FOR_TEMPLATES || !1),
                  (Te = e.WHOLE_DOCUMENT || !1),
                  (Pe = e.RETURN_DOM || !1),
                  (Ce = e.RETURN_DOM_FRAGMENT || !1),
                  (Re = e.RETURN_TRUSTED_TYPE || !1),
                  (Se = e.FORCE_BODY || !1),
                  (De = !1 !== e.SANITIZE_DOM),
                  (Ne = e.SANITIZE_NAMED_PROPS || !1),
                  (Ke = !1 !== e.KEEP_CONTENT),
                  (je = e.IN_PLACE || !1),
                  (he = e.ALLOWED_URI_REGEXP || U),
                  (Ge = e.NAMESPACE || Ye),
                  (ge = e.CUSTOM_ELEMENT_HANDLING || {}),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (ge.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (ge.attributeNameCheck =
                      e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    "boolean" ===
                      typeof e.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (ge.allowCustomizedBuiltInElements =
                      e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  Ae && (xe = !1),
                  Ce && (Pe = !0),
                  Me &&
                    ((pe = k({}, [...D])),
                    (ye = []),
                    !0 === Me.html && (k(pe, T), k(ye, N)),
                    !0 === Me.svg && (k(pe, O), k(ye, I), k(ye, j)),
                    !0 === Me.svgFilters && (k(pe, S), k(ye, I), k(ye, j)),
                    !0 === Me.mathMl && (k(pe, C), k(ye, K), k(ye, j))),
                  e.ADD_TAGS &&
                    (pe === me && (pe = E(pe)), k(pe, e.ADD_TAGS, et)),
                  e.ADD_ATTR &&
                    (ye === ve && (ye = E(ye)), k(ye, e.ADD_ATTR, et)),
                  e.ADD_URI_SAFE_ATTR && k(Ue, e.ADD_URI_SAFE_ATTR, et),
                  e.FORBID_CONTENTS &&
                    (Be === Le && (Be = E(Be)), k(Be, e.FORBID_CONTENTS, et)),
                  Ke && (pe["#text"] = !0),
                  Te && k(pe, ["html", "head", "body"]),
                  pe.table && (k(pe, ["tbody"]), delete be.tbody),
                  e.TRUSTED_TYPES_POLICY)
                ) {
                  if ("function" !== typeof e.TRUSTED_TYPES_POLICY.createHTML)
                    throw w(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
                    );
                  if (
                    "function" !== typeof e.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw w(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
                    );
                  ((J = e.TRUSTED_TYPES_POLICY), (Z = J.createHTML("")));
                } else
                  (void 0 === J && (J = V(q, i)),
                    null !== J &&
                      "string" === typeof Z &&
                      (Z = J.createHTML("")));
                (o && o(e), (tt = e));
              }
            },
            ot = k({}, ["mi", "mo", "mn", "ms", "mtext"]),
            at = k({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            ut = k({}, ["title", "style", "font", "a", "script"]),
            st = k({}, O);
          (k(st, S), k(st, P));
          const ct = k({}, C);
          k(ct, R);
          const lt = function (e) {
              let t = Q(e);
              (t && t.tagName) ||
                (t = { namespaceURI: Ge, tagName: "template" });
              const n = h(e.tagName),
                r = h(t.tagName);
              return (
                !!$e[e.namespaceURI] &&
                (e.namespaceURI === We
                  ? t.namespaceURI === Ye
                    ? "svg" === n
                    : t.namespaceURI === He
                      ? "svg" === n && ("annotation-xml" === r || ot[r])
                      : Boolean(st[n])
                  : e.namespaceURI === He
                    ? t.namespaceURI === Ye
                      ? "math" === n
                      : t.namespaceURI === We
                        ? "math" === n && at[r]
                        : Boolean(ct[n])
                    : e.namespaceURI === Ye
                      ? !(t.namespaceURI === We && !at[r]) &&
                        !(t.namespaceURI === He && !ot[r]) &&
                        !ct[n] &&
                        (ut[n] || !st[n])
                      : !(
                          "application/xhtml+xml" !== Qe || !$e[e.namespaceURI]
                        ))
              );
            },
            ft = function (e) {
              d(n.removed, { element: e });
              try {
                e.parentNode.removeChild(e);
              } catch (t) {
                e.remove();
              }
            },
            dt = function (e, t) {
              try {
                d(n.removed, { attribute: t.getAttributeNode(e), from: t });
              } catch (r) {
                d(n.removed, { attribute: null, from: t });
              }
              if ((t.removeAttribute(e), "is" === e && !ye[e]))
                if (Pe || Ce)
                  try {
                    ft(t);
                  } catch (r) {}
                else
                  try {
                    t.setAttribute(e, "");
                  } catch (r) {}
            },
            ht = function (e) {
              let t, n;
              if (Se) e = "<remove></remove>" + e;
              else {
                const t = m(e, /^[\r\n\t ]+/);
                n = t && t[0];
              }
              "application/xhtml+xml" === Qe &&
                Ge === Ye &&
                (e =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  e +
                  "</body></html>");
              const r = J ? J.createHTML(e) : e;
              if (Ge === Ye)
                try {
                  t = new L().parseFromString(r, Qe);
                } catch (o) {}
              if (!t || !t.documentElement) {
                t = ee.createDocument(Ge, "template", null);
                try {
                  t.documentElement.innerHTML = Ve ? Z : r;
                } catch (o) {}
              }
              const i = t.body || t.documentElement;
              return (
                e &&
                  n &&
                  i.insertBefore(a.createTextNode(n), i.childNodes[0] || null),
                Ge === Ye
                  ? re.call(t, Te ? "html" : "body")[0]
                  : Te
                    ? t.documentElement
                    : i
              );
            },
            pt = function (e) {
              return te.call(
                e.ownerDocument || e,
                e,
                x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT,
                null,
                !1,
              );
            },
            mt = function (e) {
              return (
                e instanceof B &&
                ("string" !== typeof e.nodeName ||
                  "string" !== typeof e.textContent ||
                  "function" !== typeof e.removeChild ||
                  !(e.attributes instanceof M) ||
                  "function" !== typeof e.removeAttribute ||
                  "function" !== typeof e.setAttribute ||
                  "string" !== typeof e.namespaceURI ||
                  "function" !== typeof e.insertBefore ||
                  "function" !== typeof e.hasChildNodes)
              );
            },
            yt = function (e) {
              return "object" === typeof c
                ? e instanceof c
                : e &&
                    "object" === typeof e &&
                    "number" === typeof e.nodeType &&
                    "string" === typeof e.nodeName;
            },
            vt = function (e, t, r) {
              oe[e] &&
                l(oe[e], (e) => {
                  e.call(n, t, r, tt);
                });
            },
            gt = function (e) {
              let t;
              if ((vt("beforeSanitizeElements", e, null), mt(e)))
                return (ft(e), !0);
              const r = et(e.nodeName);
              if (
                (vt("uponSanitizeElement", e, { tagName: r, allowedTags: pe }),
                e.hasChildNodes() &&
                  !yt(e.firstElementChild) &&
                  (!yt(e.content) || !yt(e.content.firstElementChild)) &&
                  b(/<[/\w]/g, e.innerHTML) &&
                  b(/<[/\w]/g, e.textContent))
              )
                return (ft(e), !0);
              if (!pe[r] || be[r]) {
                if (!be[r] && wt(r)) {
                  if (
                    ge.tagNameCheck instanceof RegExp &&
                    b(ge.tagNameCheck, r)
                  )
                    return !1;
                  if (ge.tagNameCheck instanceof Function && ge.tagNameCheck(r))
                    return !1;
                }
                if (Ke && !Be[r]) {
                  const t = Q(e) || e.parentNode,
                    n = X(e) || e.childNodes;
                  if (n && t) {
                    const r = n.length;
                    for (let i = r - 1; i >= 0; --i)
                      t.insertBefore(z(n[i], !0), H(e));
                  }
                }
                return (ft(e), !0);
              }
              return e instanceof _ && !lt(e)
                ? (ft(e), !0)
                : ("noscript" !== r && "noembed" !== r) ||
                    !b(/<\/no(script|embed)/i, e.innerHTML)
                  ? (Ae &&
                      3 === e.nodeType &&
                      ((t = e.textContent),
                      (t = y(t, ae, " ")),
                      (t = y(t, ue, " ")),
                      (t = y(t, se, " ")),
                      e.textContent !== t &&
                        (d(n.removed, { element: e.cloneNode() }),
                        (e.textContent = t))),
                    vt("afterSanitizeElements", e, null),
                    !1)
                  : (ft(e), !0);
            },
            bt = function (e, t, n) {
              if (De && ("id" === t || "name" === t) && (n in a || n in nt))
                return !1;
              if (xe && !we[t] && b(ce, t));
              else if (_e && b(le, t));
              else if (!ye[t] || we[t]) {
                if (
                  !(
                    (wt(e) &&
                      ((ge.tagNameCheck instanceof RegExp &&
                        b(ge.tagNameCheck, e)) ||
                        (ge.tagNameCheck instanceof Function &&
                          ge.tagNameCheck(e))) &&
                      ((ge.attributeNameCheck instanceof RegExp &&
                        b(ge.attributeNameCheck, t)) ||
                        (ge.attributeNameCheck instanceof Function &&
                          ge.attributeNameCheck(t)))) ||
                    ("is" === t &&
                      ge.allowCustomizedBuiltInElements &&
                      ((ge.tagNameCheck instanceof RegExp &&
                        b(ge.tagNameCheck, n)) ||
                        (ge.tagNameCheck instanceof Function &&
                          ge.tagNameCheck(n))))
                  )
                )
                  return !1;
              } else if (Ue[t]);
              else if (b(he, y(n, de, "")));
              else if (
                ("src" !== t && "xlink:href" !== t && "href" !== t) ||
                "script" === e ||
                0 !== v(n, "data:") ||
                !qe[e]
              ) {
                if (ke && !b(fe, y(n, de, "")));
                else if (n) return !1;
              } else;
              return !0;
            },
            wt = function (e) {
              return e.indexOf("-") > 0;
            },
            _t = function (e) {
              let t, r, i, o;
              vt("beforeSanitizeAttributes", e, null);
              const { attributes: a } = e;
              if (!a) return;
              const u = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: ye,
              };
              o = a.length;
              while (o--) {
                t = a[o];
                const { name: c, namespaceURI: l } = t;
                if (
                  ((r = "value" === c ? t.value : g(t.value)),
                  (i = et(c)),
                  (u.attrName = i),
                  (u.attrValue = r),
                  (u.keepAttr = !0),
                  (u.forceKeepAttr = void 0),
                  vt("uponSanitizeAttribute", e, u),
                  (r = u.attrValue),
                  u.forceKeepAttr)
                )
                  continue;
                if ((dt(c, e), !u.keepAttr)) continue;
                if (!Ee && b(/\/>/i, r)) {
                  dt(c, e);
                  continue;
                }
                Ae &&
                  ((r = y(r, ae, " ")),
                  (r = y(r, ue, " ")),
                  (r = y(r, se, " ")));
                const d = et(e.nodeName);
                if (bt(d, i, r)) {
                  if (
                    (!Ne ||
                      ("id" !== i && "name" !== i) ||
                      (dt(c, e), (r = Ie + r)),
                    J &&
                      "object" === typeof q &&
                      "function" === typeof q.getAttributeType)
                  )
                    if (l);
                    else
                      switch (q.getAttributeType(d, i)) {
                        case "TrustedHTML":
                          r = J.createHTML(r);
                          break;
                        case "TrustedScriptURL":
                          r = J.createScriptURL(r);
                          break;
                      }
                  try {
                    (l ? e.setAttributeNS(l, c, r) : e.setAttribute(c, r),
                      f(n.removed));
                  } catch (s) {}
                }
              }
              vt("afterSanitizeAttributes", e, null);
            },
            xt = function e(t) {
              let n;
              const r = pt(t);
              vt("beforeSanitizeShadowDOM", t, null);
              while ((n = r.nextNode()))
                (vt("uponSanitizeShadowNode", n, null),
                  gt(n) || (n.content instanceof u && e(n.content), _t(n)));
              vt("afterSanitizeShadowDOM", t, null);
            };
          return (
            (n.sanitize = function (e) {
              let t,
                i,
                o,
                a,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                ((Ve = !e),
                Ve && (e = "\x3c!--\x3e"),
                "string" !== typeof e && !yt(e))
              ) {
                if ("function" !== typeof e.toString)
                  throw w("toString is not a function");
                if (((e = e.toString()), "string" !== typeof e))
                  throw w("dirty is not a string, aborting");
              }
              if (!n.isSupported) return e;
              if (
                (Oe || it(s),
                (n.removed = []),
                "string" === typeof e && (je = !1),
                je)
              ) {
                if (e.nodeName) {
                  const t = et(e.nodeName);
                  if (!pe[t] || be[t])
                    throw w(
                      "root node is forbidden and cannot be sanitized in-place",
                    );
                }
              } else if (e instanceof c)
                ((t = ht("\x3c!----\x3e")),
                  (i = t.ownerDocument.importNode(e, !0)),
                  (1 === i.nodeType && "BODY" === i.nodeName) ||
                  "HTML" === i.nodeName
                    ? (t = i)
                    : t.appendChild(i));
              else {
                if (!Pe && !Ae && !Te && -1 === e.indexOf("<"))
                  return J && Re ? J.createHTML(e) : e;
                if (((t = ht(e)), !t)) return Pe ? null : Re ? Z : "";
              }
              t && Se && ft(t.firstChild);
              const l = pt(je ? e : t);
              while ((o = l.nextNode()))
                gt(o) || (o.content instanceof u && xt(o.content), _t(o));
              if (je) return e;
              if (Pe) {
                if (Ce) {
                  a = ne.call(t.ownerDocument);
                  while (t.firstChild) a.appendChild(t.firstChild);
                } else a = t;
                return (
                  (ye.shadowroot || ye.shadowrootmod) &&
                    (a = ie.call(r, a, !0)),
                  a
                );
              }
              let f = Te ? t.outerHTML : t.innerHTML;
              return (
                Te &&
                  pe["!doctype"] &&
                  t.ownerDocument &&
                  t.ownerDocument.doctype &&
                  t.ownerDocument.doctype.name &&
                  b(W, t.ownerDocument.doctype.name) &&
                  (f = "<!DOCTYPE " + t.ownerDocument.doctype.name + ">\n" + f),
                Ae &&
                  ((f = y(f, ae, " ")),
                  (f = y(f, ue, " ")),
                  (f = y(f, se, " "))),
                J && Re ? J.createHTML(f) : f
              );
            }),
            (n.setConfig = function (e) {
              (it(e), (Oe = !0));
            }),
            (n.clearConfig = function () {
              ((tt = null), (Oe = !1));
            }),
            (n.isValidAttribute = function (e, t, n) {
              tt || it({});
              const r = et(e),
                i = et(t);
              return bt(r, i, n);
            }),
            (n.addHook = function (e, t) {
              "function" === typeof t && ((oe[e] = oe[e] || []), d(oe[e], t));
            }),
            (n.removeHook = function (e) {
              if (oe[e]) return f(oe[e]);
            }),
            (n.removeHooks = function (e) {
              oe[e] && (oe[e] = []);
            }),
            (n.removeAllHooks = function () {
              oe = {};
            }),
            n
          );
        }
        var X = $();
        return X;
      });
    },
    385: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return "string" !== typeof e
          ? e
          : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
            /["'() \t\n]/.test(e) || t
              ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"'
              : e);
      };
    },
    426: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Dexie = void 0),
          (t.Entity = Dt),
          (t.RangeSet = t.PropModification = void 0),
          (t.add = li),
          (t.cmp = Nt),
          (t.default = void 0),
          (t.liveQuery = ii),
          (t.mergeRanges = lr),
          (t.rangesOverlap = fr),
          (t.remove = fi),
          (t.replacePrefix = di));
        var n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            n(e, t)
          );
        };
        function r(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null",
            );
          function r() {
            this.constructor = e;
          }
          (n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r())));
        }
        var i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            i.apply(this, arguments)
          );
        };
        function o(e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        }
        var a =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof self
                ? self
                : "undefined" !== typeof window
                  ? window
                  : e,
          u = Object.keys,
          s = Array.isArray;
        function c(e, t) {
          return (
            "object" !== typeof t ||
              u(t).forEach(function (n) {
                e[n] = t[n];
              }),
            e
          );
        }
        "undefined" === typeof Promise || a.Promise || (a.Promise = Promise);
        var l = Object.getPrototypeOf,
          f = {}.hasOwnProperty;
        function d(e, t) {
          return f.call(e, t);
        }
        function h(e, t) {
          ("function" === typeof t && (t = t(l(e))),
            ("undefined" === typeof Reflect ? u : Reflect.ownKeys)(t).forEach(
              function (n) {
                m(e, n, t[n]);
              },
            ));
        }
        var p = Object.defineProperty;
        function m(e, t, n, r) {
          p(
            e,
            t,
            c(
              n && d(n, "get") && "function" === typeof n.get
                ? { get: n.get, set: n.set, configurable: !0 }
                : { value: n, configurable: !0, writable: !0 },
              r,
            ),
          );
        }
        function y(e) {
          return {
            from: function (t) {
              return (
                (e.prototype = Object.create(t.prototype)),
                m(e.prototype, "constructor", e),
                { extend: h.bind(null, e.prototype) }
              );
            },
          };
        }
        var v = Object.getOwnPropertyDescriptor;
        function g(e, t) {
          var n,
            r = v(e, t);
          return r || ((n = l(e)) && g(n, t));
        }
        var b = [].slice;
        function w(e, t, n) {
          return b.call(e, t, n);
        }
        function _(e, t) {
          return t(e);
        }
        function x(e) {
          if (!e) throw new Error("Assertion Failed");
        }
        function k(e) {
          a.setImmediate ? setImmediate(e) : setTimeout(e, 0);
        }
        function E(e, t) {
          return e.reduce(function (e, n, r) {
            var i = t(n, r);
            return (i && (e[i[0]] = i[1]), e);
          }, {});
        }
        function A(e, t) {
          if ("string" === typeof t && d(e, t)) return e[t];
          if (!t) return e;
          if ("string" !== typeof t) {
            for (var n = [], r = 0, i = t.length; r < i; ++r) {
              var o = A(e, t[r]);
              n.push(o);
            }
            return n;
          }
          var a = t.indexOf(".");
          if (-1 !== a) {
            var u = e[t.substr(0, a)];
            return null == u ? void 0 : A(u, t.substr(a + 1));
          }
        }
        function T(e, t, n) {
          if (
            e &&
            void 0 !== t &&
            (!("isFrozen" in Object) || !Object.isFrozen(e))
          )
            if ("string" !== typeof t && "length" in t) {
              x("string" !== typeof n && "length" in n);
              for (var r = 0, i = t.length; r < i; ++r) T(e, t[r], n[r]);
            } else {
              var o = t.indexOf(".");
              if (-1 !== o) {
                var a = t.substr(0, o),
                  u = t.substr(o + 1);
                if ("" === u)
                  void 0 === n
                    ? s(e) && !isNaN(parseInt(a))
                      ? e.splice(a, 1)
                      : delete e[a]
                    : (e[a] = n);
                else {
                  var c = e[a];
                  ((c && d(e, a)) || (c = e[a] = {}), T(c, u, n));
                }
              } else
                void 0 === n
                  ? s(e) && !isNaN(parseInt(t))
                    ? e.splice(t, 1)
                    : delete e[t]
                  : (e[t] = n);
            }
        }
        function O(e, t) {
          "string" === typeof t
            ? T(e, t, void 0)
            : "length" in t &&
              [].map.call(t, function (t) {
                T(e, t, void 0);
              });
        }
        function S(e) {
          var t = {};
          for (var n in e) d(e, n) && (t[n] = e[n]);
          return t;
        }
        var P = [].concat;
        function C(e) {
          return P.apply([], e);
        }
        var R =
            "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
              .split(",")
              .concat(
                C(
                  [8, 16, 32, 64].map(function (e) {
                    return ["Int", "Uint", "Float"].map(function (t) {
                      return t + e + "Array";
                    });
                  }),
                ),
              )
              .filter(function (e) {
                return a[e];
              }),
          D = new Set(
            R.map(function (e) {
              return a[e];
            }),
          );
        function N(e) {
          var t = {};
          for (var n in e)
            if (d(e, n)) {
              var r = e[n];
              t[n] =
                !r || "object" !== typeof r || D.has(r.constructor) ? r : N(r);
            }
          return t;
        }
        function I(e) {
          for (var t in e) if (d(e, t)) return !1;
          return !0;
        }
        var K = null;
        function j(e) {
          K = new WeakMap();
          var t = M(e);
          return ((K = null), t);
        }
        function M(e) {
          if (!e || "object" !== typeof e) return e;
          var t = K.get(e);
          if (t) return t;
          if (s(e)) {
            ((t = []), K.set(e, t));
            for (var n = 0, r = e.length; n < r; ++n) t.push(M(e[n]));
          } else if (D.has(e.constructor)) t = e;
          else {
            var i = l(e);
            for (var o in ((t = i === Object.prototype ? {} : Object.create(i)),
            K.set(e, t),
            e))
              d(e, o) && (t[o] = M(e[o]));
          }
          return t;
        }
        var B = {}.toString;
        function L(e) {
          return B.call(e).slice(8, -1);
        }
        var q = "undefined" !== typeof Symbol ? Symbol.iterator : "@@iterator",
          F =
            "symbol" === typeof q
              ? function (e) {
                  var t;
                  return null != e && (t = e[q]) && t.apply(e);
                }
              : function () {
                  return null;
                };
        function U(e, t) {
          var n = e.indexOf(t);
          return (n >= 0 && e.splice(n, 1), n >= 0);
        }
        var z = {};
        function H(e) {
          var t, n, r, i;
          if (1 === arguments.length) {
            if (s(e)) return e.slice();
            if (this === z && "string" === typeof e) return [e];
            if ((i = F(e))) {
              n = [];
              while (((r = i.next()), !r.done)) n.push(r.value);
              return n;
            }
            if (null == e) return [e];
            if (((t = e.length), "number" === typeof t)) {
              n = new Array(t);
              while (t--) n[t] = e[t];
              return n;
            }
            return [e];
          }
          ((t = arguments.length), (n = new Array(t)));
          while (t--) n[t] = arguments[t];
          return n;
        }
        var W =
            "undefined" !== typeof Symbol
              ? function (e) {
                  return "AsyncFunction" === e[Symbol.toStringTag];
                }
              : function () {
                  return !1;
                },
          Y = [
            "Modify",
            "Bulk",
            "OpenFailed",
            "VersionChange",
            "Schema",
            "Upgrade",
            "InvalidTable",
            "MissingAPI",
            "NoSuchDatabase",
            "InvalidArgument",
            "SubTransaction",
            "Unsupported",
            "Internal",
            "DatabaseClosed",
            "PrematureCommit",
            "ForeignAwait",
          ],
          G = [
            "Unknown",
            "Constraint",
            "Data",
            "TransactionInactive",
            "ReadOnly",
            "Version",
            "NotFound",
            "InvalidState",
            "InvalidAccess",
            "Abort",
            "Timeout",
            "QuotaExceeded",
            "Syntax",
            "DataClone",
          ],
          V = Y.concat(G),
          $ = {
            VersionChanged:
              "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
            MissingAPI:
              "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb",
          };
        function X(e, t) {
          ((this.name = e), (this.message = t));
        }
        function Q(e, t) {
          return (
            e +
            ". Errors: " +
            Object.keys(t)
              .map(function (e) {
                return t[e].toString();
              })
              .filter(function (e, t, n) {
                return n.indexOf(e) === t;
              })
              .join("\n")
          );
        }
        function J(e, t, n, r) {
          ((this.failures = t),
            (this.failedKeys = r),
            (this.successCount = n),
            (this.message = Q(e, t)));
        }
        function Z(e, t) {
          ((this.name = "BulkError"),
            (this.failures = Object.keys(t).map(function (e) {
              return t[e];
            })),
            (this.failuresByPos = t),
            (this.message = Q(e, this.failures)));
        }
        (y(X)
          .from(Error)
          .extend({
            toString: function () {
              return this.name + ": " + this.message;
            },
          }),
          y(J).from(X),
          y(Z).from(X));
        var ee = V.reduce(function (e, t) {
            return ((e[t] = t + "Error"), e);
          }, {}),
          te = X,
          ne = V.reduce(function (e, t) {
            var n = t + "Error";
            function r(e, r) {
              ((this.name = n),
                e
                  ? "string" === typeof e
                    ? ((this.message = "".concat(e).concat(r ? "\n " + r : "")),
                      (this.inner = r || null))
                    : "object" === typeof e &&
                      ((this.message = ""
                        .concat(e.name, " ")
                        .concat(e.message)),
                      (this.inner = e))
                  : ((this.message = $[t] || n), (this.inner = null)));
            }
            return (y(r).from(te), (e[t] = r), e);
          }, {});
        ((ne.Syntax = SyntaxError),
          (ne.Type = TypeError),
          (ne.Range = RangeError));
        var re = G.reduce(function (e, t) {
          return ((e[t + "Error"] = ne[t]), e);
        }, {});
        function ie(e, t) {
          if (
            !e ||
            e instanceof X ||
            e instanceof TypeError ||
            e instanceof SyntaxError ||
            !e.name ||
            !re[e.name]
          )
            return e;
          var n = new re[e.name](t || e.message, e);
          return (
            "stack" in e &&
              m(n, "stack", {
                get: function () {
                  return this.inner.stack;
                },
              }),
            n
          );
        }
        var oe = V.reduce(function (e, t) {
          return (
            -1 === ["Syntax", "Type", "Range"].indexOf(t) &&
              (e[t + "Error"] = ne[t]),
            e
          );
        }, {});
        function ae() {}
        function ue(e) {
          return e;
        }
        function se(e, t) {
          return null == e || e === ue
            ? t
            : function (n) {
                return t(e(n));
              };
        }
        function ce(e, t) {
          return function () {
            (e.apply(this, arguments), t.apply(this, arguments));
          };
        }
        function le(e, t) {
          return e === ae
            ? t
            : function () {
                var n = e.apply(this, arguments);
                void 0 !== n && (arguments[0] = n);
                var r = this.onsuccess,
                  i = this.onerror;
                ((this.onsuccess = null), (this.onerror = null));
                var o = t.apply(this, arguments);
                return (
                  r &&
                    (this.onsuccess = this.onsuccess
                      ? ce(r, this.onsuccess)
                      : r),
                  i && (this.onerror = this.onerror ? ce(i, this.onerror) : i),
                  void 0 !== o ? o : n
                );
              };
        }
        function fe(e, t) {
          return e === ae
            ? t
            : function () {
                e.apply(this, arguments);
                var n = this.onsuccess,
                  r = this.onerror;
                ((this.onsuccess = this.onerror = null),
                  t.apply(this, arguments),
                  n &&
                    (this.onsuccess = this.onsuccess
                      ? ce(n, this.onsuccess)
                      : n),
                  r && (this.onerror = this.onerror ? ce(r, this.onerror) : r));
              };
        }
        function de(e, t) {
          return e === ae
            ? t
            : function (n) {
                var r = e.apply(this, arguments);
                c(n, r);
                var i = this.onsuccess,
                  o = this.onerror;
                ((this.onsuccess = null), (this.onerror = null));
                var a = t.apply(this, arguments);
                return (
                  i &&
                    (this.onsuccess = this.onsuccess
                      ? ce(i, this.onsuccess)
                      : i),
                  o && (this.onerror = this.onerror ? ce(o, this.onerror) : o),
                  void 0 === r ? (void 0 === a ? void 0 : a) : c(r, a)
                );
              };
        }
        function he(e, t) {
          return e === ae
            ? t
            : function () {
                return (
                  !1 !== t.apply(this, arguments) && e.apply(this, arguments)
                );
              };
        }
        function pe(e, t) {
          return e === ae
            ? t
            : function () {
                var n = e.apply(this, arguments);
                if (n && "function" === typeof n.then) {
                  var r = this,
                    i = arguments.length,
                    o = new Array(i);
                  while (i--) o[i] = arguments[i];
                  return n.then(function () {
                    return t.apply(r, o);
                  });
                }
                return t.apply(this, arguments);
              };
        }
        ((oe.ModifyError = J), (oe.DexieError = X), (oe.BulkError = Z));
        var me =
          "undefined" !== typeof location &&
          /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function ye(e, t) {
          me = e;
        }
        var ve = {},
          ge = 100,
          be =
            "undefined" === typeof Promise
              ? []
              : (function () {
                  var e = Promise.resolve();
                  if ("undefined" === typeof crypto || !crypto.subtle)
                    return [e, l(e), e];
                  var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
                  return [t, l(t), e];
                })(),
          we = be[0],
          _e = be[1],
          xe = be[2],
          ke = _e && _e.then,
          Ee = we && we.constructor,
          Ae = !!xe;
        function Te() {
          queueMicrotask(Ye);
        }
        var Oe = function (e, t) {
            (Ke.push([e, t]), Pe && (Te(), (Pe = !1)));
          },
          Se = !0,
          Pe = !0,
          Ce = [],
          Re = [],
          De = ue,
          Ne = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: ae,
            pgp: !1,
            env: {},
            finalize: ae,
          },
          Ie = Ne,
          Ke = [],
          je = 0,
          Me = [];
        function Be(e) {
          if ("object" !== typeof this)
            throw new TypeError("Promises must be constructed via new");
          ((this._listeners = []), (this._lib = !1));
          var t = (this._PSD = Ie);
          if ("function" !== typeof e) {
            if (e !== ve) throw new TypeError("Not a function");
            return (
              (this._state = arguments[1]),
              (this._value = arguments[2]),
              void (!1 === this._state && Ue(this, this._value))
            );
          }
          ((this._state = null), (this._value = null), ++t.ref, Fe(this, e));
        }
        var Le = {
          get: function () {
            var e = Ie,
              t = ot;
            function n(n, r) {
              var i = this,
                o = !e.global && (e !== Ie || t !== ot),
                a = o && !ct(),
                u = new Be(function (t, u) {
                  He(i, new qe(yt(n, e, o, a), yt(r, e, o, a), t, u, e));
                });
              return (
                this._consoleTask && (u._consoleTask = this._consoleTask),
                u
              );
            }
            return ((n.prototype = ve), n);
          },
          set: function (e) {
            m(
              this,
              "then",
              e && e.prototype === ve
                ? Le
                : {
                    get: function () {
                      return e;
                    },
                    set: Le.set,
                  },
            );
          },
        };
        function qe(e, t, n, r, i) {
          ((this.onFulfilled = "function" === typeof e ? e : null),
            (this.onRejected = "function" === typeof t ? t : null),
            (this.resolve = n),
            (this.reject = r),
            (this.psd = i));
        }
        function Fe(e, t) {
          try {
            t(
              function (t) {
                if (null === e._state) {
                  if (t === e)
                    throw new TypeError(
                      "A promise cannot be resolved with itself.",
                    );
                  var n = e._lib && Ge();
                  (t && "function" === typeof t.then
                    ? Fe(e, function (e, n) {
                        t instanceof Be ? t._then(e, n) : t.then(e, n);
                      })
                    : ((e._state = !0), (e._value = t), ze(e)),
                    n && Ve());
                }
              },
              Ue.bind(null, e),
            );
          } catch (n) {
            Ue(e, n);
          }
        }
        function Ue(e, t) {
          if ((Re.push(t), null === e._state)) {
            var n = e._lib && Ge();
            ((t = De(t)),
              (e._state = !1),
              (e._value = t),
              Qe(e),
              ze(e),
              n && Ve());
          }
        }
        function ze(e) {
          var t = e._listeners;
          e._listeners = [];
          for (var n = 0, r = t.length; n < r; ++n) He(e, t[n]);
          var i = e._PSD;
          (--i.ref || i.finalize(),
            0 === je &&
              (++je,
              Oe(function () {
                0 === --je && $e();
              }, [])));
        }
        function He(e, t) {
          if (null !== e._state) {
            var n = e._state ? t.onFulfilled : t.onRejected;
            if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
            (++t.psd.ref, ++je, Oe(We, [n, e, t]));
          } else e._listeners.push(t);
        }
        function We(e, t, n) {
          try {
            var r,
              i = t._value;
            (!t._state && Re.length && (Re = []),
              (r =
                me && t._consoleTask
                  ? t._consoleTask.run(function () {
                      return e(i);
                    })
                  : e(i)),
              t._state || -1 !== Re.indexOf(i) || Je(t),
              n.resolve(r));
          } catch (o) {
            n.reject(o);
          } finally {
            (0 === --je && $e(), --n.psd.ref || n.psd.finalize());
          }
        }
        function Ye() {
          mt(Ne, function () {
            Ge() && Ve();
          });
        }
        function Ge() {
          var e = Se;
          return ((Se = !1), (Pe = !1), e);
        }
        function Ve() {
          var e, t, n;
          do {
            while (Ke.length > 0)
              for (e = Ke, Ke = [], n = e.length, t = 0; t < n; ++t) {
                var r = e[t];
                r[0].apply(null, r[1]);
              }
          } while (Ke.length > 0);
          ((Se = !0), (Pe = !0));
        }
        function $e() {
          var e = Ce;
          ((Ce = []),
            e.forEach(function (e) {
              e._PSD.onunhandled.call(null, e._value, e);
            }));
          var t = Me.slice(0),
            n = t.length;
          while (n) t[--n]();
        }
        function Xe(e) {
          function t() {
            (e(), Me.splice(Me.indexOf(t), 1));
          }
          (Me.push(t),
            ++je,
            Oe(function () {
              0 === --je && $e();
            }, []));
        }
        function Qe(e) {
          Ce.some(function (t) {
            return t._value === e._value;
          }) || Ce.push(e);
        }
        function Je(e) {
          var t = Ce.length;
          while (t)
            if (Ce[--t]._value === e._value) return void Ce.splice(t, 1);
        }
        function Ze(e) {
          return new Be(ve, !1, e);
        }
        function et(e, t) {
          var n = Ie;
          return function () {
            var r = Ge(),
              i = Ie;
            try {
              return (ht(n, !0), e.apply(this, arguments));
            } catch (o) {
              t && t(o);
            } finally {
              (ht(i, !1), r && Ve());
            }
          };
        }
        (h(Be.prototype, {
          then: Le,
          _then: function (e, t) {
            He(this, new qe(null, null, e, t, Ie));
          },
          catch: function (e) {
            if (1 === arguments.length) return this.then(null, e);
            var t = arguments[0],
              n = arguments[1];
            return "function" === typeof t
              ? this.then(null, function (e) {
                  return e instanceof t ? n(e) : Ze(e);
                })
              : this.then(null, function (e) {
                  return e && e.name === t ? n(e) : Ze(e);
                });
          },
          finally: function (e) {
            return this.then(
              function (t) {
                return Be.resolve(e()).then(function () {
                  return t;
                });
              },
              function (t) {
                return Be.resolve(e()).then(function () {
                  return Ze(t);
                });
              },
            );
          },
          timeout: function (e, t) {
            var n = this;
            return e < 1 / 0
              ? new Be(function (r, i) {
                  var o = setTimeout(function () {
                    return i(new ne.Timeout(t));
                  }, e);
                  n.then(r, i).finally(clearTimeout.bind(null, o));
                })
              : this;
          },
        }),
          "undefined" !== typeof Symbol &&
            Symbol.toStringTag &&
            m(Be.prototype, Symbol.toStringTag, "Dexie.Promise"),
          (Ne.env = pt()),
          h(Be, {
            all: function () {
              var e = H.apply(null, arguments).map(lt);
              return new Be(function (t, n) {
                0 === e.length && t([]);
                var r = e.length;
                e.forEach(function (i, o) {
                  return Be.resolve(i).then(function (n) {
                    ((e[o] = n), --r || t(e));
                  }, n);
                });
              });
            },
            resolve: function (e) {
              if (e instanceof Be) return e;
              if (e && "function" === typeof e.then)
                return new Be(function (t, n) {
                  e.then(t, n);
                });
              var t = new Be(ve, !0, e);
              return t;
            },
            reject: Ze,
            race: function () {
              var e = H.apply(null, arguments).map(lt);
              return new Be(function (t, n) {
                e.map(function (e) {
                  return Be.resolve(e).then(t, n);
                });
              });
            },
            PSD: {
              get: function () {
                return Ie;
              },
              set: function (e) {
                return (Ie = e);
              },
            },
            totalEchoes: {
              get: function () {
                return ot;
              },
            },
            newPSD: ut,
            usePSD: mt,
            scheduler: {
              get: function () {
                return Oe;
              },
              set: function (e) {
                Oe = e;
              },
            },
            rejectionMapper: {
              get: function () {
                return De;
              },
              set: function (e) {
                De = e;
              },
            },
            follow: function (e, t) {
              return new Be(function (n, r) {
                return ut(
                  function (t, n) {
                    var r = Ie;
                    ((r.unhandleds = []),
                      (r.onunhandled = n),
                      (r.finalize = ce(function () {
                        var e = this;
                        Xe(function () {
                          0 === e.unhandleds.length ? t() : n(e.unhandleds[0]);
                        });
                      }, r.finalize)),
                      e());
                  },
                  t,
                  n,
                  r,
                );
              });
            },
          }),
          Ee &&
            (Ee.allSettled &&
              m(Be, "allSettled", function () {
                var e = H.apply(null, arguments).map(lt);
                return new Be(function (t) {
                  0 === e.length && t([]);
                  var n = e.length,
                    r = new Array(n);
                  e.forEach(function (e, i) {
                    return Be.resolve(e)
                      .then(
                        function (e) {
                          return (r[i] = { status: "fulfilled", value: e });
                        },
                        function (e) {
                          return (r[i] = { status: "rejected", reason: e });
                        },
                      )
                      .then(function () {
                        return --n || t(r);
                      });
                  });
                });
              }),
            Ee.any &&
              "undefined" !== typeof AggregateError &&
              m(Be, "any", function () {
                var e = H.apply(null, arguments).map(lt);
                return new Be(function (t, n) {
                  0 === e.length && n(new AggregateError([]));
                  var r = e.length,
                    i = new Array(r);
                  e.forEach(function (e, o) {
                    return Be.resolve(e).then(
                      function (e) {
                        return t(e);
                      },
                      function (e) {
                        ((i[o] = e), --r || n(new AggregateError(i)));
                      },
                    );
                  });
                });
              }),
            Ee.withResolvers && (Be.withResolvers = Ee.withResolvers)));
        var tt = { awaits: 0, echoes: 0, id: 0 },
          nt = 0,
          rt = [],
          it = 0,
          ot = 0,
          at = 0;
        function ut(e, t, n, r) {
          var i = Ie,
            o = Object.create(i);
          ((o.parent = i),
            (o.ref = 0),
            (o.global = !1),
            (o.id = ++at),
            Ne.env,
            (o.env = Ae
              ? {
                  Promise: Be,
                  PromiseProp: { value: Be, configurable: !0, writable: !0 },
                  all: Be.all,
                  race: Be.race,
                  allSettled: Be.allSettled,
                  any: Be.any,
                  resolve: Be.resolve,
                  reject: Be.reject,
                }
              : {}),
            t && c(o, t),
            ++i.ref,
            (o.finalize = function () {
              --this.parent.ref || this.parent.finalize();
            }));
          var a = mt(o, e, n, r);
          return (0 === o.ref && o.finalize(), a);
        }
        function st() {
          return (
            tt.id || (tt.id = ++nt),
            ++tt.awaits,
            (tt.echoes += ge),
            tt.id
          );
        }
        function ct() {
          return (
            !!tt.awaits &&
            (0 === --tt.awaits && (tt.id = 0), (tt.echoes = tt.awaits * ge), !0)
          );
        }
        function lt(e) {
          return tt.echoes && e && e.constructor === Ee
            ? (st(),
              e.then(
                function (e) {
                  return (ct(), e);
                },
                function (e) {
                  return (ct(), gt(e));
                },
              ))
            : e;
        }
        function ft(e) {
          (++ot,
            (tt.echoes && 0 !== --tt.echoes) ||
              (tt.echoes = tt.awaits = tt.id = 0),
            rt.push(Ie),
            ht(e, !0));
        }
        function dt() {
          var e = rt[rt.length - 1];
          (rt.pop(), ht(e, !1));
        }
        function ht(e, t) {
          var n = Ie;
          if (
            ((t
              ? !tt.echoes || (it++ && e === Ie)
              : !it || (--it && e === Ie)) ||
              queueMicrotask(t ? ft.bind(null, e) : dt),
            e !== Ie && ((Ie = e), n === Ne && (Ne.env = pt()), Ae))
          ) {
            var r = Ne.env.Promise,
              i = e.env;
            (n.global || e.global) &&
              (Object.defineProperty(a, "Promise", i.PromiseProp),
              (r.all = i.all),
              (r.race = i.race),
              (r.resolve = i.resolve),
              (r.reject = i.reject),
              i.allSettled && (r.allSettled = i.allSettled),
              i.any && (r.any = i.any));
          }
        }
        function pt() {
          var e = a.Promise;
          return Ae
            ? {
                Promise: e,
                PromiseProp: Object.getOwnPropertyDescriptor(a, "Promise"),
                all: e.all,
                race: e.race,
                allSettled: e.allSettled,
                any: e.any,
                resolve: e.resolve,
                reject: e.reject,
              }
            : {};
        }
        function mt(e, t, n, r, i) {
          var o = Ie;
          try {
            return (ht(e, !0), t(n, r, i));
          } finally {
            ht(o, !1);
          }
        }
        function yt(e, t, n, r) {
          return "function" !== typeof e
            ? e
            : function () {
                var i = Ie;
                (n && st(), ht(t, !0));
                try {
                  return e.apply(this, arguments);
                } finally {
                  (ht(i, !1), r && queueMicrotask(ct));
                }
              };
        }
        function vt(e) {
          Promise === Ee && 0 === tt.echoes
            ? 0 === it
              ? e()
              : enqueueNativeMicroTask(e)
            : setTimeout(e, 0);
        }
        -1 === ("" + ke).indexOf("[native code]") && (st = ct = ae);
        var gt = Be.reject;
        function bt(e, t, n, r) {
          if (e.idbdb && (e._state.openComplete || Ie.letThrough || e._vip)) {
            var i = e._createTransaction(t, n, e._dbSchema);
            try {
              (i.create(), (e._state.PR1398_maxLoop = 3));
            } catch (o) {
              return o.name === ee.InvalidState &&
                e.isOpen() &&
                --e._state.PR1398_maxLoop > 0
                ? (console.warn("Dexie: Need to reopen db"),
                  e.close({ disableAutoOpen: !1 }),
                  e.open().then(function () {
                    return bt(e, t, n, r);
                  }))
                : gt(o);
            }
            return i
              ._promise(t, function (e, t) {
                return ut(function () {
                  return ((Ie.trans = i), r(e, t, i));
                });
              })
              .then(function (e) {
                if ("readwrite" === t)
                  try {
                    i.idbtrans.commit();
                  } catch (Qn) {}
                return "readonly" === t
                  ? e
                  : i._completion.then(function () {
                      return e;
                    });
              });
          }
          if (e._state.openComplete)
            return gt(new ne.DatabaseClosed(e._state.dbOpenError));
          if (!e._state.isBeingOpened) {
            if (!e._state.autoOpen) return gt(new ne.DatabaseClosed());
            e.open().catch(ae);
          }
          return e._state.dbReadyPromise.then(function () {
            return bt(e, t, n, r);
          });
        }
        var wt = "4.0.11",
          _t = String.fromCharCode(65535),
          xt = -1 / 0,
          kt =
            "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
          Et = "String expected.",
          At = [],
          Tt = "__dbnames",
          Ot = "readonly",
          St = "readwrite";
        function Pt(e, t) {
          return e
            ? t
              ? function () {
                  return e.apply(this, arguments) && t.apply(this, arguments);
                }
              : e
            : t;
        }
        var Ct = {
          type: 3,
          lower: -1 / 0,
          lowerOpen: !1,
          upper: [[]],
          upperOpen: !1,
        };
        function Rt(e) {
          return "string" !== typeof e || /\./.test(e)
            ? function (e) {
                return e;
              }
            : function (t) {
                return (
                  void 0 === t[e] && e in t && ((t = j(t)), delete t[e]),
                  t
                );
              };
        }
        function Dt() {
          throw ne.Type();
        }
        function Nt(e, t) {
          try {
            var n = jt(e),
              r = jt(t);
            if (n !== r)
              return "Array" === n
                ? 1
                : "Array" === r
                  ? -1
                  : "binary" === n
                    ? 1
                    : "binary" === r
                      ? -1
                      : "string" === n
                        ? 1
                        : "string" === r
                          ? -1
                          : "Date" === n
                            ? 1
                            : "Date" !== r
                              ? NaN
                              : -1;
            switch (n) {
              case "number":
              case "Date":
              case "string":
                return e > t ? 1 : e < t ? -1 : 0;
              case "binary":
                return Kt(Mt(e), Mt(t));
              case "Array":
                return It(e, t);
            }
          } catch (Qn) {}
          return NaN;
        }
        function It(e, t) {
          for (
            var n = e.length, r = t.length, i = n < r ? n : r, o = 0;
            o < i;
            ++o
          ) {
            var a = Nt(e[o], t[o]);
            if (0 !== a) return a;
          }
          return n === r ? 0 : n < r ? -1 : 1;
        }
        function Kt(e, t) {
          for (
            var n = e.length, r = t.length, i = n < r ? n : r, o = 0;
            o < i;
            ++o
          )
            if (e[o] !== t[o]) return e[o] < t[o] ? -1 : 1;
          return n === r ? 0 : n < r ? -1 : 1;
        }
        function jt(e) {
          var t = typeof e;
          if ("object" !== t) return t;
          if (ArrayBuffer.isView(e)) return "binary";
          var n = L(e);
          return "ArrayBuffer" === n ? "binary" : n;
        }
        function Mt(e) {
          return e instanceof Uint8Array
            ? e
            : ArrayBuffer.isView(e)
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              : new Uint8Array(e);
        }
        var Bt = (function () {
          function e() {}
          return (
            (e.prototype._trans = function (e, t, n) {
              var r = this._tx || Ie.trans,
                i = this.name,
                o =
                  me &&
                  "undefined" !== typeof console &&
                  console.createTask &&
                  console.createTask(
                    "Dexie: "
                      .concat("readonly" === e ? "read" : "write", " ")
                      .concat(this.name),
                  );
              function a(e, n, r) {
                if (!r.schema[i])
                  throw new ne.NotFound(
                    "Table " + i + " not part of transaction",
                  );
                return t(r.idbtrans, r);
              }
              var u = Ge();
              try {
                var s =
                  r && r.db._novip === this.db._novip
                    ? r === Ie.trans
                      ? r._promise(e, a, n)
                      : ut(
                          function () {
                            return r._promise(e, a, n);
                          },
                          { trans: r, transless: Ie.transless || Ie },
                        )
                    : bt(this.db, e, [this.name], a);
                return (
                  o &&
                    ((s._consoleTask = o),
                    (s = s.catch(function (e) {
                      return (console.trace(e), gt(e));
                    }))),
                  s
                );
              } finally {
                u && Ve();
              }
            }),
            (e.prototype.get = function (e, t) {
              var n = this;
              return e && e.constructor === Object
                ? this.where(e).first(t)
                : null == e
                  ? gt(new ne.Type("Invalid argument to Table.get()"))
                  : this._trans("readonly", function (t) {
                      return n.core
                        .get({ trans: t, key: e })
                        .then(function (e) {
                          return n.hook.reading.fire(e);
                        });
                    }).then(t);
            }),
            (e.prototype.where = function (e) {
              if ("string" === typeof e)
                return new this.db.WhereClause(this, e);
              if (s(e))
                return new this.db.WhereClause(
                  this,
                  "[".concat(e.join("+"), "]"),
                );
              var t = u(e);
              if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
              var n = this.schema.indexes
                .concat(this.schema.primKey)
                .filter(function (e) {
                  if (
                    e.compound &&
                    t.every(function (t) {
                      return e.keyPath.indexOf(t) >= 0;
                    })
                  ) {
                    for (var n = 0; n < t.length; ++n)
                      if (-1 === t.indexOf(e.keyPath[n])) return !1;
                    return !0;
                  }
                  return !1;
                })
                .sort(function (e, t) {
                  return e.keyPath.length - t.keyPath.length;
                })[0];
              if (n && this.db._maxKey !== _t) {
                var r = n.keyPath.slice(0, t.length);
                return this.where(r).equals(
                  r.map(function (t) {
                    return e[t];
                  }),
                );
              }
              !n &&
                me &&
                console.warn(
                  "The query "
                    .concat(JSON.stringify(e), " on ")
                    .concat(this.name, " would benefit from a ") +
                    "compound index [".concat(t.join("+"), "]"),
                );
              var i = this.schema.idxByName;
              function o(e, t) {
                return 0 === Nt(e, t);
              }
              var a = t.reduce(
                  function (t, n) {
                    var r = t[0],
                      a = t[1],
                      u = i[n],
                      c = e[n];
                    return [
                      r || u,
                      r || !u
                        ? Pt(
                            a,
                            u && u.multi
                              ? function (e) {
                                  var t = A(e, n);
                                  return (
                                    s(t) &&
                                    t.some(function (e) {
                                      return o(c, e);
                                    })
                                  );
                                }
                              : function (e) {
                                  return o(c, A(e, n));
                                },
                          )
                        : a,
                    ];
                  },
                  [null, null],
                ),
                c = a[0],
                l = a[1];
              return c
                ? this.where(c.name).equals(e[c.keyPath]).filter(l)
                : n
                  ? this.filter(l)
                  : this.where(t).equals("");
            }),
            (e.prototype.filter = function (e) {
              return this.toCollection().and(e);
            }),
            (e.prototype.count = function (e) {
              return this.toCollection().count(e);
            }),
            (e.prototype.offset = function (e) {
              return this.toCollection().offset(e);
            }),
            (e.prototype.limit = function (e) {
              return this.toCollection().limit(e);
            }),
            (e.prototype.each = function (e) {
              return this.toCollection().each(e);
            }),
            (e.prototype.toArray = function (e) {
              return this.toCollection().toArray(e);
            }),
            (e.prototype.toCollection = function () {
              return new this.db.Collection(new this.db.WhereClause(this));
            }),
            (e.prototype.orderBy = function (e) {
              return new this.db.Collection(
                new this.db.WhereClause(
                  this,
                  s(e) ? "[".concat(e.join("+"), "]") : e,
                ),
              );
            }),
            (e.prototype.reverse = function () {
              return this.toCollection().reverse();
            }),
            (e.prototype.mapToClass = function (e) {
              var t = this,
                n = t.db,
                i = t.name;
              ((this.schema.mappedClass = e),
                e.prototype instanceof Dt &&
                  (e = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      r(t, e),
                      Object.defineProperty(t.prototype, "db", {
                        get: function () {
                          return n;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (t.prototype.table = function () {
                        return i;
                      }),
                      t
                    );
                  })(e)));
              for (var o = new Set(), a = e.prototype; a; a = l(a))
                Object.getOwnPropertyNames(a).forEach(function (e) {
                  return o.add(e);
                });
              var u = function (t) {
                if (!t) return t;
                var n = Object.create(e.prototype);
                for (var r in t)
                  if (!o.has(r))
                    try {
                      n[r] = t[r];
                    } catch (i) {}
                return n;
              };
              return (
                this.schema.readHook &&
                  this.hook.reading.unsubscribe(this.schema.readHook),
                (this.schema.readHook = u),
                this.hook("reading", u),
                e
              );
            }),
            (e.prototype.defineClass = function () {
              function e(e) {
                c(this, e);
              }
              return this.mapToClass(e);
            }),
            (e.prototype.add = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                i = r.auto,
                o = r.keyPath,
                a = e;
              return (
                o && i && (a = Rt(o)(e)),
                this._trans("readwrite", function (e) {
                  return n.core.mutate({
                    trans: e,
                    type: "add",
                    keys: null != t ? [t] : null,
                    values: [a],
                  });
                })
                  .then(function (e) {
                    return e.numFailures
                      ? Be.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (o)
                      try {
                        T(e, o, t);
                      } catch (n) {}
                    return t;
                  })
              );
            }),
            (e.prototype.update = function (e, t) {
              if ("object" !== typeof e || s(e))
                return this.where(":id").equals(e).modify(t);
              var n = A(e, this.schema.primKey.keyPath);
              return void 0 === n
                ? gt(
                    new ne.InvalidArgument(
                      "Given object does not contain its primary key",
                    ),
                  )
                : this.where(":id").equals(n).modify(t);
            }),
            (e.prototype.put = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                i = r.auto,
                o = r.keyPath,
                a = e;
              return (
                o && i && (a = Rt(o)(e)),
                this._trans("readwrite", function (e) {
                  return n.core.mutate({
                    trans: e,
                    type: "put",
                    values: [a],
                    keys: null != t ? [t] : null,
                  });
                })
                  .then(function (e) {
                    return e.numFailures
                      ? Be.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (o)
                      try {
                        T(e, o, t);
                      } catch (n) {}
                    return t;
                  })
              );
            }),
            (e.prototype.delete = function (e) {
              var t = this;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: [e] });
              }).then(function (e) {
                return e.numFailures ? Be.reject(e.failures[0]) : void 0;
              });
            }),
            (e.prototype.clear = function () {
              var e = this;
              return this._trans("readwrite", function (t) {
                return e.core.mutate({
                  trans: t,
                  type: "deleteRange",
                  range: Ct,
                });
              }).then(function (e) {
                return e.numFailures ? Be.reject(e.failures[0]) : void 0;
              });
            }),
            (e.prototype.bulkGet = function (e) {
              var t = this;
              return this._trans("readonly", function (n) {
                return t.core.getMany({ keys: e, trans: n }).then(function (e) {
                  return e.map(function (e) {
                    return t.hook.reading.fire(e);
                  });
                });
              });
            }),
            (e.prototype.bulkAdd = function (e, t, n) {
              var r = this,
                i = Array.isArray(t) ? t : void 0;
              n = n || (i ? void 0 : t);
              var o = n ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = r.schema.primKey,
                  a = n.auto,
                  u = n.keyPath;
                if (u && i)
                  throw new ne.InvalidArgument(
                    "bulkAdd(): keys argument invalid on tables with inbound keys",
                  );
                if (i && i.length !== e.length)
                  throw new ne.InvalidArgument(
                    "Arguments objects and keys must have the same length",
                  );
                var s = e.length,
                  c = u && a ? e.map(Rt(u)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "add",
                    keys: i,
                    values: c,
                    wantResults: o,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      i = e.lastResult,
                      a = e.failures,
                      u = o ? n : i;
                    if (0 === t) return u;
                    throw new Z(
                      ""
                        .concat(r.name, ".bulkAdd(): ")
                        .concat(t, " of ")
                        .concat(s, " operations failed"),
                      a,
                    );
                  });
              });
            }),
            (e.prototype.bulkPut = function (e, t, n) {
              var r = this,
                i = Array.isArray(t) ? t : void 0;
              n = n || (i ? void 0 : t);
              var o = n ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = r.schema.primKey,
                  a = n.auto,
                  u = n.keyPath;
                if (u && i)
                  throw new ne.InvalidArgument(
                    "bulkPut(): keys argument invalid on tables with inbound keys",
                  );
                if (i && i.length !== e.length)
                  throw new ne.InvalidArgument(
                    "Arguments objects and keys must have the same length",
                  );
                var s = e.length,
                  c = u && a ? e.map(Rt(u)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "put",
                    keys: i,
                    values: c,
                    wantResults: o,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      i = e.lastResult,
                      a = e.failures,
                      u = o ? n : i;
                    if (0 === t) return u;
                    throw new Z(
                      ""
                        .concat(r.name, ".bulkPut(): ")
                        .concat(t, " of ")
                        .concat(s, " operations failed"),
                      a,
                    );
                  });
              });
            }),
            (e.prototype.bulkUpdate = function (e) {
              var t = this,
                n = this.core,
                r = e.map(function (e) {
                  return e.key;
                }),
                i = e.map(function (e) {
                  return e.changes;
                }),
                o = [];
              return this._trans("readwrite", function (a) {
                return n
                  .getMany({ trans: a, keys: r, cache: "clone" })
                  .then(function (u) {
                    var s = [],
                      c = [];
                    e.forEach(function (e, n) {
                      var r = e.key,
                        i = e.changes,
                        a = u[n];
                      if (a) {
                        for (var l = 0, f = Object.keys(i); l < f.length; l++) {
                          var d = f[l],
                            h = i[d];
                          if (d === t.schema.primKey.keyPath) {
                            if (0 !== Nt(h, r))
                              throw new ne.Constraint(
                                "Cannot update primary key in bulkUpdate()",
                              );
                          } else T(a, d, h);
                        }
                        (o.push(n), s.push(r), c.push(a));
                      }
                    });
                    var l = s.length;
                    return n
                      .mutate({
                        trans: a,
                        type: "put",
                        keys: s,
                        values: c,
                        updates: { keys: r, changeSpecs: i },
                      })
                      .then(function (e) {
                        var n = e.numFailures,
                          r = e.failures;
                        if (0 === n) return l;
                        for (var i = 0, a = Object.keys(r); i < a.length; i++) {
                          var u = a[i],
                            s = o[Number(u)];
                          if (null != s) {
                            var c = r[u];
                            (delete r[u], (r[s] = c));
                          }
                        }
                        throw new Z(
                          ""
                            .concat(t.name, ".bulkUpdate(): ")
                            .concat(n, " of ")
                            .concat(l, " operations failed"),
                          r,
                        );
                      });
                  });
              });
            }),
            (e.prototype.bulkDelete = function (e) {
              var t = this,
                n = e.length;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: e });
              }).then(function (e) {
                var r = e.numFailures,
                  i = e.lastResult,
                  o = e.failures;
                if (0 === r) return i;
                throw new Z(
                  ""
                    .concat(t.name, ".bulkDelete(): ")
                    .concat(r, " of ")
                    .concat(n, " operations failed"),
                  o,
                );
              });
            }),
            e
          );
        })();
        function Lt(e) {
          var t = {},
            n = function (n, r) {
              if (r) {
                var i = arguments.length,
                  o = new Array(i - 1);
                while (--i) o[i - 1] = arguments[i];
                return (t[n].subscribe.apply(null, o), e);
              }
              if ("string" === typeof n) return t[n];
            };
          n.addEventType = o;
          for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
          return n;
          function o(e, r, i) {
            if ("object" === typeof e) return a(e);
            (r || (r = he), i || (i = ae));
            var o = {
              subscribers: [],
              fire: i,
              subscribe: function (e) {
                -1 === o.subscribers.indexOf(e) &&
                  (o.subscribers.push(e), (o.fire = r(o.fire, e)));
              },
              unsubscribe: function (e) {
                ((o.subscribers = o.subscribers.filter(function (t) {
                  return t !== e;
                })),
                  (o.fire = o.subscribers.reduce(r, i)));
              },
            };
            return ((t[e] = n[e] = o), o);
          }
          function a(e) {
            u(e).forEach(function (t) {
              var n = e[t];
              if (s(n)) o(t, e[t][0], e[t][1]);
              else {
                if ("asap" !== n)
                  throw new ne.InvalidArgument("Invalid event config");
                var r = o(t, ue, function () {
                  var e = arguments.length,
                    t = new Array(e);
                  while (e--) t[e] = arguments[e];
                  r.subscribers.forEach(function (e) {
                    k(function () {
                      e.apply(null, t);
                    });
                  });
                });
              }
            });
          }
        }
        function qt(e, t) {
          return (y(t).from({ prototype: e }), t);
        }
        function Ft(e) {
          return qt(Bt.prototype, function (t, n, r) {
            ((this.db = e),
              (this._tx = r),
              (this.name = t),
              (this.schema = n),
              (this.hook = e._allTables[t]
                ? e._allTables[t].hook
                : Lt(null, {
                    creating: [le, ae],
                    reading: [se, ue],
                    updating: [de, ae],
                    deleting: [fe, ae],
                  })));
          });
        }
        function Ut(e, t) {
          return (
            !(e.filter || e.algorithm || e.or) &&
            (t ? e.justLimit : !e.replayFilter)
          );
        }
        function zt(e, t) {
          e.filter = Pt(e.filter, t);
        }
        function Ht(e, t, n) {
          var r = e.replayFilter;
          ((e.replayFilter = r
            ? function () {
                return Pt(r(), t());
              }
            : t),
            (e.justLimit = n && !r));
        }
        function Wt(e, t) {
          e.isMatch = Pt(e.isMatch, t);
        }
        function Yt(e, t) {
          if (e.isPrimKey) return t.primaryKey;
          var n = t.getIndexByKeyPath(e.index);
          if (!n)
            throw new ne.Schema(
              "KeyPath " +
                e.index +
                " on object store " +
                t.name +
                " is not indexed",
            );
          return n;
        }
        function Gt(e, t, n) {
          var r = Yt(e, t.schema);
          return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: "prev" === e.dir,
            unique: !!e.unique,
            query: { index: r, range: e.range },
          });
        }
        function Vt(e, t, n, r) {
          var i = e.replayFilter ? Pt(e.filter, e.replayFilter()) : e.filter;
          if (e.or) {
            var o = {},
              a = function (e, n, r) {
                if (
                  !i ||
                  i(
                    n,
                    r,
                    function (e) {
                      return n.stop(e);
                    },
                    function (e) {
                      return n.fail(e);
                    },
                  )
                ) {
                  var a = n.primaryKey,
                    u = "" + a;
                  ("[object ArrayBuffer]" === u && (u = "" + new Uint8Array(a)),
                    d(o, u) || ((o[u] = !0), t(e, n, r)));
                }
              };
            return Promise.all([
              e.or._iterate(a, n),
              $t(Gt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper),
            ]);
          }
          return $t(
            Gt(e, r, n),
            Pt(e.algorithm, i),
            t,
            !e.keysOnly && e.valueMapper,
          );
        }
        function $t(e, t, n, r) {
          var i = r
              ? function (e, t, i) {
                  return n(r(e), t, i);
                }
              : n,
            o = et(i);
          return e.then(function (e) {
            if (e)
              return e.start(function () {
                var n = function () {
                  return e.continue();
                };
                ((t &&
                  !t(
                    e,
                    function (e) {
                      return (n = e);
                    },
                    function (t) {
                      (e.stop(t), (n = ae));
                    },
                    function (t) {
                      (e.fail(t), (n = ae));
                    },
                  )) ||
                  o(e.value, e, function (e) {
                    return (n = e);
                  }),
                  n());
              });
          });
        }
        var Xt = (t.PropModification = (function () {
            function e(e) {
              this["@@propmod"] = e;
            }
            return (
              (e.prototype.execute = function (e) {
                var t,
                  n = this["@@propmod"];
                if (void 0 !== n.add) {
                  var r = n.add;
                  if (s(r)) return o(o([], s(e) ? e : [], !0), r, !0).sort();
                  if ("number" === typeof r) return (Number(e) || 0) + r;
                  if ("bigint" === typeof r)
                    try {
                      return BigInt(e) + r;
                    } catch (u) {
                      return BigInt(0) + r;
                    }
                  throw new TypeError("Invalid term ".concat(r));
                }
                if (void 0 !== n.remove) {
                  var i = n.remove;
                  if (s(i))
                    return s(e)
                      ? e
                          .filter(function (e) {
                            return !i.includes(e);
                          })
                          .sort()
                      : [];
                  if ("number" === typeof i) return Number(e) - i;
                  if ("bigint" === typeof i)
                    try {
                      return BigInt(e) - i;
                    } catch (c) {
                      return BigInt(0) - i;
                    }
                  throw new TypeError("Invalid subtrahend ".concat(i));
                }
                var a =
                  null === (t = n.replacePrefix) || void 0 === t
                    ? void 0
                    : t[0];
                return a && "string" === typeof e && e.startsWith(a)
                  ? n.replacePrefix[1] + e.substring(a.length)
                  : e;
              }),
              e
            );
          })()),
          Qt = (function () {
            function e() {}
            return (
              (e.prototype._read = function (e, t) {
                var n = this._ctx;
                return n.error
                  ? n.table._trans(null, gt.bind(null, n.error))
                  : n.table._trans("readonly", e).then(t);
              }),
              (e.prototype._write = function (e) {
                var t = this._ctx;
                return t.error
                  ? t.table._trans(null, gt.bind(null, t.error))
                  : t.table._trans("readwrite", e, "locked");
              }),
              (e.prototype._addAlgorithm = function (e) {
                var t = this._ctx;
                t.algorithm = Pt(t.algorithm, e);
              }),
              (e.prototype._iterate = function (e, t) {
                return Vt(this._ctx, e, t, this._ctx.table.core);
              }),
              (e.prototype.clone = function (e) {
                var t = Object.create(this.constructor.prototype),
                  n = Object.create(this._ctx);
                return (e && c(n, e), (t._ctx = n), t);
              }),
              (e.prototype.raw = function () {
                return ((this._ctx.valueMapper = null), this);
              }),
              (e.prototype.each = function (e) {
                var t = this._ctx;
                return this._read(function (n) {
                  return Vt(t, e, n, t.table.core);
                });
              }),
              (e.prototype.count = function (e) {
                var t = this;
                return this._read(function (e) {
                  var n = t._ctx,
                    r = n.table.core;
                  if (Ut(n, !0))
                    return r
                      .count({
                        trans: e,
                        query: { index: Yt(n, r.schema), range: n.range },
                      })
                      .then(function (e) {
                        return Math.min(e, n.limit);
                      });
                  var i = 0;
                  return Vt(
                    n,
                    function () {
                      return (++i, !1);
                    },
                    e,
                    r,
                  ).then(function () {
                    return i;
                  });
                }).then(e);
              }),
              (e.prototype.sortBy = function (e, t) {
                var n = e.split(".").reverse(),
                  r = n[0],
                  i = n.length - 1;
                function o(e, t) {
                  return t ? o(e[n[t]], t - 1) : e[r];
                }
                var a = "next" === this._ctx.dir ? 1 : -1;
                function u(e, t) {
                  var n = o(e, i),
                    r = o(t, i);
                  return Nt(n, r) * a;
                }
                return this.toArray(function (e) {
                  return e.sort(u);
                }).then(t);
              }),
              (e.prototype.toArray = function (e) {
                var t = this;
                return this._read(function (e) {
                  var n = t._ctx;
                  if ("next" === n.dir && Ut(n, !0) && n.limit > 0) {
                    var r = n.valueMapper,
                      i = Yt(n, n.table.core.schema);
                    return n.table.core
                      .query({
                        trans: e,
                        limit: n.limit,
                        values: !0,
                        query: { index: i, range: n.range },
                      })
                      .then(function (e) {
                        var t = e.result;
                        return r ? t.map(r) : t;
                      });
                  }
                  var o = [];
                  return Vt(
                    n,
                    function (e) {
                      return o.push(e);
                    },
                    e,
                    n.table.core,
                  ).then(function () {
                    return o;
                  });
                }, e);
              }),
              (e.prototype.offset = function (e) {
                var t = this._ctx;
                return (
                  e <= 0 ||
                    ((t.offset += e),
                    Ut(t)
                      ? Ht(t, function () {
                          var t = e;
                          return function (e, n) {
                            return (
                              0 === t ||
                              (1 === t
                                ? (--t, !1)
                                : (n(function () {
                                    (e.advance(t), (t = 0));
                                  }),
                                  !1))
                            );
                          };
                        })
                      : Ht(t, function () {
                          var t = e;
                          return function () {
                            return --t < 0;
                          };
                        })),
                  this
                );
              }),
              (e.prototype.limit = function (e) {
                return (
                  (this._ctx.limit = Math.min(this._ctx.limit, e)),
                  Ht(
                    this._ctx,
                    function () {
                      var t = e;
                      return function (e, n, r) {
                        return (--t <= 0 && n(r), t >= 0);
                      };
                    },
                    !0,
                  ),
                  this
                );
              }),
              (e.prototype.until = function (e, t) {
                return (
                  zt(this._ctx, function (n, r, i) {
                    return !e(n.value) || (r(i), t);
                  }),
                  this
                );
              }),
              (e.prototype.first = function (e) {
                return this.limit(1)
                  .toArray(function (e) {
                    return e[0];
                  })
                  .then(e);
              }),
              (e.prototype.last = function (e) {
                return this.reverse().first(e);
              }),
              (e.prototype.filter = function (e) {
                return (
                  zt(this._ctx, function (t) {
                    return e(t.value);
                  }),
                  Wt(this._ctx, e),
                  this
                );
              }),
              (e.prototype.and = function (e) {
                return this.filter(e);
              }),
              (e.prototype.or = function (e) {
                return new this.db.WhereClause(this._ctx.table, e, this);
              }),
              (e.prototype.reverse = function () {
                return (
                  (this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev"),
                  this._ondirectionchange &&
                    this._ondirectionchange(this._ctx.dir),
                  this
                );
              }),
              (e.prototype.desc = function () {
                return this.reverse();
              }),
              (e.prototype.eachKey = function (e) {
                var t = this._ctx;
                return (
                  (t.keysOnly = !t.isMatch),
                  this.each(function (t, n) {
                    e(n.key, n);
                  })
                );
              }),
              (e.prototype.eachUniqueKey = function (e) {
                return ((this._ctx.unique = "unique"), this.eachKey(e));
              }),
              (e.prototype.eachPrimaryKey = function (e) {
                var t = this._ctx;
                return (
                  (t.keysOnly = !t.isMatch),
                  this.each(function (t, n) {
                    e(n.primaryKey, n);
                  })
                );
              }),
              (e.prototype.keys = function (e) {
                var t = this._ctx;
                t.keysOnly = !t.isMatch;
                var n = [];
                return this.each(function (e, t) {
                  n.push(t.key);
                })
                  .then(function () {
                    return n;
                  })
                  .then(e);
              }),
              (e.prototype.primaryKeys = function (e) {
                var t = this._ctx;
                if ("next" === t.dir && Ut(t, !0) && t.limit > 0)
                  return this._read(function (e) {
                    var n = Yt(t, t.table.core.schema);
                    return t.table.core.query({
                      trans: e,
                      values: !1,
                      limit: t.limit,
                      query: { index: n, range: t.range },
                    });
                  })
                    .then(function (e) {
                      var t = e.result;
                      return t;
                    })
                    .then(e);
                t.keysOnly = !t.isMatch;
                var n = [];
                return this.each(function (e, t) {
                  n.push(t.primaryKey);
                })
                  .then(function () {
                    return n;
                  })
                  .then(e);
              }),
              (e.prototype.uniqueKeys = function (e) {
                return ((this._ctx.unique = "unique"), this.keys(e));
              }),
              (e.prototype.firstKey = function (e) {
                return this.limit(1)
                  .keys(function (e) {
                    return e[0];
                  })
                  .then(e);
              }),
              (e.prototype.lastKey = function (e) {
                return this.reverse().firstKey(e);
              }),
              (e.prototype.distinct = function () {
                var e = this._ctx,
                  t = e.index && e.table.schema.idxByName[e.index];
                if (!t || !t.multi) return this;
                var n = {};
                return (
                  zt(this._ctx, function (e) {
                    var t = e.primaryKey.toString(),
                      r = d(n, t);
                    return ((n[t] = !0), !r);
                  }),
                  this
                );
              }),
              (e.prototype.modify = function (e) {
                var t = this,
                  n = this._ctx;
                return this._write(function (r) {
                  var i;
                  if ("function" === typeof e) i = e;
                  else {
                    var o = u(e),
                      a = o.length;
                    i = function (t) {
                      for (var n = !1, r = 0; r < a; ++r) {
                        var i = o[r],
                          u = e[i],
                          s = A(t, i);
                        u instanceof Xt
                          ? (T(t, i, u.execute(s)), (n = !0))
                          : s !== u && (T(t, i, u), (n = !0));
                      }
                      return n;
                    };
                  }
                  var s = n.table.core,
                    c = s.schema.primaryKey,
                    l = c.outbound,
                    f = c.extractKey,
                    d = 200,
                    h = t.db._options.modifyChunkSize;
                  h &&
                    (d = "object" == typeof h ? h[s.name] || h["*"] || 200 : h);
                  var p = [],
                    m = 0,
                    y = [],
                    v = function (e, t) {
                      var n = t.failures,
                        r = t.numFailures;
                      m += e - r;
                      for (var i = 0, o = u(n); i < o.length; i++) {
                        var a = o[i];
                        p.push(n[a]);
                      }
                    };
                  return t
                    .clone()
                    .primaryKeys()
                    .then(function (t) {
                      var o = Ut(n) &&
                          n.limit === 1 / 0 &&
                          ("function" !== typeof e || e === Jt) && {
                            index: n.index,
                            range: n.range,
                          },
                        a = function (n) {
                          var u = Math.min(d, t.length - n);
                          return s
                            .getMany({
                              trans: r,
                              keys: t.slice(n, n + u),
                              cache: "immutable",
                            })
                            .then(function (c) {
                              for (
                                var h = [],
                                  p = [],
                                  m = l ? [] : null,
                                  y = [],
                                  g = 0;
                                g < u;
                                ++g
                              ) {
                                var b = c[g],
                                  w = { value: j(b), primKey: t[n + g] };
                                !1 !== i.call(w, w.value, w) &&
                                  (null == w.value
                                    ? y.push(t[n + g])
                                    : l || 0 === Nt(f(b), f(w.value))
                                      ? (p.push(w.value), l && m.push(t[n + g]))
                                      : (y.push(t[n + g]), h.push(w.value)));
                              }
                              return Promise.resolve(
                                h.length > 0 &&
                                  s
                                    .mutate({
                                      trans: r,
                                      type: "add",
                                      values: h,
                                    })
                                    .then(function (e) {
                                      for (var t in e.failures)
                                        y.splice(parseInt(t), 1);
                                      v(h.length, e);
                                    }),
                              )
                                .then(function () {
                                  return (
                                    (p.length > 0 ||
                                      (o && "object" === typeof e)) &&
                                    s
                                      .mutate({
                                        trans: r,
                                        type: "put",
                                        keys: m,
                                        values: p,
                                        criteria: o,
                                        changeSpec:
                                          "function" !== typeof e && e,
                                        isAdditionalChunk: n > 0,
                                      })
                                      .then(function (e) {
                                        return v(p.length, e);
                                      })
                                  );
                                })
                                .then(function () {
                                  return (
                                    (y.length > 0 || (o && e === Jt)) &&
                                    s
                                      .mutate({
                                        trans: r,
                                        type: "delete",
                                        keys: y,
                                        criteria: o,
                                        isAdditionalChunk: n > 0,
                                      })
                                      .then(function (e) {
                                        return v(y.length, e);
                                      })
                                  );
                                })
                                .then(function () {
                                  return t.length > n + u && a(n + d);
                                });
                            });
                        };
                      return a(0).then(function () {
                        if (p.length > 0)
                          throw new J(
                            "Error modifying one or more objects",
                            p,
                            m,
                            y,
                          );
                        return t.length;
                      });
                    });
                });
              }),
              (e.prototype.delete = function () {
                var e = this._ctx,
                  t = e.range;
                return Ut(e) && (e.isPrimKey || 3 === t.type)
                  ? this._write(function (n) {
                      var r = e.table.core.schema.primaryKey,
                        i = t;
                      return e.table.core
                        .count({ trans: n, query: { index: r, range: i } })
                        .then(function (t) {
                          return e.table.core
                            .mutate({ trans: n, type: "deleteRange", range: i })
                            .then(function (e) {
                              var n = e.failures;
                              (e.lastResult, e.results);
                              var r = e.numFailures;
                              if (r)
                                throw new J(
                                  "Could not delete some values",
                                  Object.keys(n).map(function (e) {
                                    return n[e];
                                  }),
                                  t - r,
                                );
                              return t - r;
                            });
                        });
                    })
                  : this.modify(Jt);
              }),
              e
            );
          })(),
          Jt = function (e, t) {
            return (t.value = null);
          };
        function Zt(e) {
          return qt(Qt.prototype, function (t, n) {
            this.db = e;
            var r = Ct,
              i = null;
            if (n)
              try {
                r = n();
              } catch (s) {
                i = s;
              }
            var o = t._ctx,
              a = o.table,
              u = a.hook.reading.fire;
            this._ctx = {
              table: a,
              index: o.index,
              isPrimKey:
                !o.index ||
                (a.schema.primKey.keyPath && o.index === a.schema.primKey.name),
              range: r,
              keysOnly: !1,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: !0,
              isMatch: null,
              offset: 0,
              limit: 1 / 0,
              error: i,
              or: o.or,
              valueMapper: u !== ue ? u : null,
            };
          });
        }
        function en(e, t) {
          return e < t ? -1 : e === t ? 0 : 1;
        }
        function tn(e, t) {
          return e > t ? -1 : e === t ? 0 : 1;
        }
        function nn(e, t, n) {
          var r = e instanceof fn ? new e.Collection(e) : e;
          return ((r._ctx.error = n ? new n(t) : new TypeError(t)), r);
        }
        function rn(e) {
          return new e.Collection(e, function () {
            return ln("");
          }).limit(0);
        }
        function on(e) {
          return "next" === e
            ? function (e) {
                return e.toUpperCase();
              }
            : function (e) {
                return e.toLowerCase();
              };
        }
        function an(e) {
          return "next" === e
            ? function (e) {
                return e.toLowerCase();
              }
            : function (e) {
                return e.toUpperCase();
              };
        }
        function un(e, t, n, r, i, o) {
          for (
            var a = Math.min(e.length, r.length), u = -1, s = 0;
            s < a;
            ++s
          ) {
            var c = t[s];
            if (c !== r[s])
              return i(e[s], n[s]) < 0
                ? e.substr(0, s) + n[s] + n.substr(s + 1)
                : i(e[s], r[s]) < 0
                  ? e.substr(0, s) + r[s] + n.substr(s + 1)
                  : u >= 0
                    ? e.substr(0, u) + t[u] + n.substr(u + 1)
                    : null;
            i(e[s], c) < 0 && (u = s);
          }
          return a < r.length && "next" === o
            ? e + n.substr(e.length)
            : a < e.length && "prev" === o
              ? e.substr(0, n.length)
              : u < 0
                ? null
                : e.substr(0, u) + r[u] + n.substr(u + 1);
        }
        function sn(e, t, n, r) {
          var i,
            o,
            a,
            u,
            s,
            c,
            l,
            f = n.length;
          if (
            !n.every(function (e) {
              return "string" === typeof e;
            })
          )
            return nn(e, Et);
          function d(e) {
            ((i = on(e)), (o = an(e)), (a = "next" === e ? en : tn));
            var t = n
              .map(function (e) {
                return { lower: o(e), upper: i(e) };
              })
              .sort(function (e, t) {
                return a(e.lower, t.lower);
              });
            ((u = t.map(function (e) {
              return e.upper;
            })),
              (s = t.map(function (e) {
                return e.lower;
              })),
              (c = e),
              (l = "next" === e ? "" : r));
          }
          d("next");
          var h = new e.Collection(e, function () {
            return cn(u[0], s[f - 1] + r);
          });
          h._ondirectionchange = function (e) {
            d(e);
          };
          var p = 0;
          return (
            h._addAlgorithm(function (e, n, r) {
              var i = e.key;
              if ("string" !== typeof i) return !1;
              var d = o(i);
              if (t(d, s, p)) return !0;
              for (var h = null, m = p; m < f; ++m) {
                var y = un(i, d, u[m], s[m], a, c);
                null === y && null === h
                  ? (p = m + 1)
                  : (null === h || a(h, y) > 0) && (h = y);
              }
              return (
                n(
                  null !== h
                    ? function () {
                        e.continue(h + l);
                      }
                    : r,
                ),
                !1
              );
            }),
            h
          );
        }
        function cn(e, t, n, r) {
          return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
        }
        function ln(e) {
          return { type: 1, lower: e, upper: e };
        }
        var fn = (function () {
          function e() {}
          return (
            Object.defineProperty(e.prototype, "Collection", {
              get: function () {
                return this._ctx.table.db.Collection;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.between = function (e, t, n, r) {
              ((n = !1 !== n), (r = !0 === r));
              try {
                return this._cmp(e, t) > 0 ||
                  (0 === this._cmp(e, t) && (n || r) && (!n || !r))
                  ? rn(this)
                  : new this.Collection(this, function () {
                      return cn(e, t, !n, !r);
                    });
              } catch (i) {
                return nn(this, kt);
              }
            }),
            (e.prototype.equals = function (e) {
              return null == e
                ? nn(this, kt)
                : new this.Collection(this, function () {
                    return ln(e);
                  });
            }),
            (e.prototype.above = function (e) {
              return null == e
                ? nn(this, kt)
                : new this.Collection(this, function () {
                    return cn(e, void 0, !0);
                  });
            }),
            (e.prototype.aboveOrEqual = function (e) {
              return null == e
                ? nn(this, kt)
                : new this.Collection(this, function () {
                    return cn(e, void 0, !1);
                  });
            }),
            (e.prototype.below = function (e) {
              return null == e
                ? nn(this, kt)
                : new this.Collection(this, function () {
                    return cn(void 0, e, !1, !0);
                  });
            }),
            (e.prototype.belowOrEqual = function (e) {
              return null == e
                ? nn(this, kt)
                : new this.Collection(this, function () {
                    return cn(void 0, e);
                  });
            }),
            (e.prototype.startsWith = function (e) {
              return "string" !== typeof e
                ? nn(this, Et)
                : this.between(e, e + _t, !0, !0);
            }),
            (e.prototype.startsWithIgnoreCase = function (e) {
              return "" === e
                ? this.startsWith(e)
                : sn(
                    this,
                    function (e, t) {
                      return 0 === e.indexOf(t[0]);
                    },
                    [e],
                    _t,
                  );
            }),
            (e.prototype.equalsIgnoreCase = function (e) {
              return sn(
                this,
                function (e, t) {
                  return e === t[0];
                },
                [e],
                "",
              );
            }),
            (e.prototype.anyOfIgnoreCase = function () {
              var e = H.apply(z, arguments);
              return 0 === e.length
                ? rn(this)
                : sn(
                    this,
                    function (e, t) {
                      return -1 !== t.indexOf(e);
                    },
                    e,
                    "",
                  );
            }),
            (e.prototype.startsWithAnyOfIgnoreCase = function () {
              var e = H.apply(z, arguments);
              return 0 === e.length
                ? rn(this)
                : sn(
                    this,
                    function (e, t) {
                      return t.some(function (t) {
                        return 0 === e.indexOf(t);
                      });
                    },
                    e,
                    _t,
                  );
            }),
            (e.prototype.anyOf = function () {
              var e = this,
                t = H.apply(z, arguments),
                n = this._cmp;
              try {
                t.sort(n);
              } catch (o) {
                return nn(this, kt);
              }
              if (0 === t.length) return rn(this);
              var r = new this.Collection(this, function () {
                return cn(t[0], t[t.length - 1]);
              });
              r._ondirectionchange = function (r) {
                ((n = "next" === r ? e._ascending : e._descending), t.sort(n));
              };
              var i = 0;
              return (
                r._addAlgorithm(function (e, r, o) {
                  var a = e.key;
                  while (n(a, t[i]) > 0)
                    if ((++i, i === t.length)) return (r(o), !1);
                  return (
                    0 === n(a, t[i]) ||
                    (r(function () {
                      e.continue(t[i]);
                    }),
                    !1)
                  );
                }),
                r
              );
            }),
            (e.prototype.notEqual = function (e) {
              return this.inAnyRange(
                [
                  [xt, e],
                  [e, this.db._maxKey],
                ],
                { includeLowers: !1, includeUppers: !1 },
              );
            }),
            (e.prototype.noneOf = function () {
              var e = H.apply(z, arguments);
              if (0 === e.length) return new this.Collection(this);
              try {
                e.sort(this._ascending);
              } catch (n) {
                return nn(this, kt);
              }
              var t = e.reduce(function (e, t) {
                return e ? e.concat([[e[e.length - 1][1], t]]) : [[xt, t]];
              }, null);
              return (
                t.push([e[e.length - 1], this.db._maxKey]),
                this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 })
              );
            }),
            (e.prototype.inAnyRange = function (e, t) {
              var n = this,
                r = this._cmp,
                i = this._ascending,
                o = this._descending,
                a = this._min,
                u = this._max;
              if (0 === e.length) return rn(this);
              if (
                !e.every(function (e) {
                  return (
                    void 0 !== e[0] && void 0 !== e[1] && i(e[0], e[1]) <= 0
                  );
                })
              )
                return nn(
                  this,
                  "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                  ne.InvalidArgument,
                );
              var s = !t || !1 !== t.includeLowers,
                c = t && !0 === t.includeUppers;
              function l(e, t) {
                for (var n = 0, i = e.length; n < i; ++n) {
                  var o = e[n];
                  if (r(t[0], o[1]) < 0 && r(t[1], o[0]) > 0) {
                    ((o[0] = a(o[0], t[0])), (o[1] = u(o[1], t[1])));
                    break;
                  }
                }
                return (n === i && e.push(t), e);
              }
              var f,
                d = i;
              function h(e, t) {
                return d(e[0], t[0]);
              }
              try {
                ((f = e.reduce(l, [])), f.sort(h));
              } catch (w) {
                return nn(this, kt);
              }
              var p = 0,
                m = c
                  ? function (e) {
                      return i(e, f[p][1]) > 0;
                    }
                  : function (e) {
                      return i(e, f[p][1]) >= 0;
                    },
                y = s
                  ? function (e) {
                      return o(e, f[p][0]) > 0;
                    }
                  : function (e) {
                      return o(e, f[p][0]) >= 0;
                    };
              function v(e) {
                return !m(e) && !y(e);
              }
              var g = m,
                b = new this.Collection(this, function () {
                  return cn(f[0][0], f[f.length - 1][1], !s, !c);
                });
              return (
                (b._ondirectionchange = function (e) {
                  ("next" === e ? ((g = m), (d = i)) : ((g = y), (d = o)),
                    f.sort(h));
                }),
                b._addAlgorithm(function (e, t, r) {
                  var o = e.key;
                  while (g(o)) if ((++p, p === f.length)) return (t(r), !1);
                  return (
                    !!v(o) ||
                    (0 === n._cmp(o, f[p][1]) ||
                      0 === n._cmp(o, f[p][0]) ||
                      t(function () {
                        d === i ? e.continue(f[p][0]) : e.continue(f[p][1]);
                      }),
                    !1)
                  );
                }),
                b
              );
            }),
            (e.prototype.startsWithAnyOf = function () {
              var e = H.apply(z, arguments);
              return e.every(function (e) {
                return "string" === typeof e;
              })
                ? 0 === e.length
                  ? rn(this)
                  : this.inAnyRange(
                      e.map(function (e) {
                        return [e, e + _t];
                      }),
                    )
                : nn(this, "startsWithAnyOf() only works with strings");
            }),
            e
          );
        })();
        function dn(e) {
          return qt(fn.prototype, function (t, n, r) {
            if (
              ((this.db = e),
              (this._ctx = { table: t, index: ":id" === n ? null : n, or: r }),
              (this._cmp = this._ascending = Nt),
              (this._descending = function (e, t) {
                return Nt(t, e);
              }),
              (this._max = function (e, t) {
                return Nt(e, t) > 0 ? e : t;
              }),
              (this._min = function (e, t) {
                return Nt(e, t) < 0 ? e : t;
              }),
              (this._IDBKeyRange = e._deps.IDBKeyRange),
              !this._IDBKeyRange)
            )
              throw new ne.MissingAPI();
          });
        }
        function hn(e) {
          return et(function (t) {
            return (pn(t), e(t.target.error), !1);
          });
        }
        function pn(e) {
          (e.stopPropagation && e.stopPropagation(),
            e.preventDefault && e.preventDefault());
        }
        var mn = "storagemutated",
          yn = "x-storagemutated-1",
          vn = Lt(null, mn),
          gn = (function () {
            function e() {}
            return (
              (e.prototype._lock = function () {
                return (
                  x(!Ie.global),
                  ++this._reculock,
                  1 !== this._reculock || Ie.global || (Ie.lockOwnerFor = this),
                  this
                );
              }),
              (e.prototype._unlock = function () {
                if ((x(!Ie.global), 0 === --this._reculock)) {
                  Ie.global || (Ie.lockOwnerFor = null);
                  while (this._blockedFuncs.length > 0 && !this._locked()) {
                    var e = this._blockedFuncs.shift();
                    try {
                      mt(e[1], e[0]);
                    } catch (t) {}
                  }
                }
                return this;
              }),
              (e.prototype._locked = function () {
                return this._reculock && Ie.lockOwnerFor !== this;
              }),
              (e.prototype.create = function (e) {
                var t = this;
                if (!this.mode) return this;
                var n = this.db.idbdb,
                  r = this.db._state.dbOpenError;
                if ((x(!this.idbtrans), !e && !n))
                  switch (r && r.name) {
                    case "DatabaseClosedError":
                      throw new ne.DatabaseClosed(r);
                    case "MissingAPIError":
                      throw new ne.MissingAPI(r.message, r);
                    default:
                      throw new ne.OpenFailed(r);
                  }
                if (!this.active) throw new ne.TransactionInactive();
                return (
                  x(null === this._completion._state),
                  (e = this.idbtrans =
                    e ||
                    (this.db.core
                      ? this.db.core.transaction(this.storeNames, this.mode, {
                          durability: this.chromeTransactionDurability,
                        })
                      : n.transaction(this.storeNames, this.mode, {
                          durability: this.chromeTransactionDurability,
                        }))),
                  (e.onerror = et(function (n) {
                    (pn(n), t._reject(e.error));
                  })),
                  (e.onabort = et(function (n) {
                    (pn(n),
                      t.active && t._reject(new ne.Abort(e.error)),
                      (t.active = !1),
                      t.on("abort").fire(n));
                  })),
                  (e.oncomplete = et(function () {
                    ((t.active = !1),
                      t._resolve(),
                      "mutatedParts" in e &&
                        vn.storagemutated.fire(e["mutatedParts"]));
                  })),
                  this
                );
              }),
              (e.prototype._promise = function (e, t, n) {
                var r = this;
                if ("readwrite" === e && "readwrite" !== this.mode)
                  return gt(new ne.ReadOnly("Transaction is readonly"));
                if (!this.active) return gt(new ne.TransactionInactive());
                if (this._locked())
                  return new Be(function (i, o) {
                    r._blockedFuncs.push([
                      function () {
                        r._promise(e, t, n).then(i, o);
                      },
                      Ie,
                    ]);
                  });
                if (n)
                  return ut(function () {
                    var e = new Be(function (e, n) {
                      r._lock();
                      var i = t(e, n, r);
                      i && i.then && i.then(e, n);
                    });
                    return (
                      e.finally(function () {
                        return r._unlock();
                      }),
                      (e._lib = !0),
                      e
                    );
                  });
                var i = new Be(function (e, n) {
                  var i = t(e, n, r);
                  i && i.then && i.then(e, n);
                });
                return ((i._lib = !0), i);
              }),
              (e.prototype._root = function () {
                return this.parent ? this.parent._root() : this;
              }),
              (e.prototype.waitFor = function (e) {
                var t = this._root(),
                  n = Be.resolve(e);
                if (t._waitingFor)
                  t._waitingFor = t._waitingFor.then(function () {
                    return n;
                  });
                else {
                  ((t._waitingFor = n), (t._waitingQueue = []));
                  var r = t.idbtrans.objectStore(t.storeNames[0]);
                  (function e() {
                    ++t._spinCount;
                    while (t._waitingQueue.length) t._waitingQueue.shift()();
                    t._waitingFor && (r.get(-1 / 0).onsuccess = e);
                  })();
                }
                var i = t._waitingFor;
                return new Be(function (e, r) {
                  n.then(
                    function (n) {
                      return t._waitingQueue.push(et(e.bind(null, n)));
                    },
                    function (e) {
                      return t._waitingQueue.push(et(r.bind(null, e)));
                    },
                  ).finally(function () {
                    t._waitingFor === i && (t._waitingFor = null);
                  });
                });
              }),
              (e.prototype.abort = function () {
                this.active &&
                  ((this.active = !1),
                  this.idbtrans && this.idbtrans.abort(),
                  this._reject(new ne.Abort()));
              }),
              (e.prototype.table = function (e) {
                var t = this._memoizedTables || (this._memoizedTables = {});
                if (d(t, e)) return t[e];
                var n = this.schema[e];
                if (!n)
                  throw new ne.NotFound(
                    "Table " + e + " not part of transaction",
                  );
                var r = new this.db.Table(e, n, this);
                return ((r.core = this.db.core.table(e)), (t[e] = r), r);
              }),
              e
            );
          })();
        function bn(e) {
          return qt(gn.prototype, function (t, n, r, i, o) {
            var a = this;
            ((this.db = e),
              (this.mode = t),
              (this.storeNames = n),
              (this.schema = r),
              (this.chromeTransactionDurability = i),
              (this.idbtrans = null),
              (this.on = Lt(this, "complete", "error", "abort")),
              (this.parent = o || null),
              (this.active = !0),
              (this._reculock = 0),
              (this._blockedFuncs = []),
              (this._resolve = null),
              (this._reject = null),
              (this._waitingFor = null),
              (this._waitingQueue = null),
              (this._spinCount = 0),
              (this._completion = new Be(function (e, t) {
                ((a._resolve = e), (a._reject = t));
              })),
              this._completion.then(
                function () {
                  ((a.active = !1), a.on.complete.fire());
                },
                function (e) {
                  var t = a.active;
                  return (
                    (a.active = !1),
                    a.on.error.fire(e),
                    a.parent
                      ? a.parent._reject(e)
                      : t && a.idbtrans && a.idbtrans.abort(),
                    gt(e)
                  );
                },
              ));
          });
        }
        function wn(e, t, n, r, i, o, a) {
          return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: i,
            compound: o,
            src:
              (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + _n(t),
          };
        }
        function _n(e) {
          return "string" === typeof e
            ? e
            : e
              ? "[" + [].join.call(e, "+") + "]"
              : "";
        }
        function xn(e, t, n) {
          return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: E(n, function (e) {
              return [e.name, e];
            }),
          };
        }
        function kn(e) {
          return 1 === e.length ? e[0] : e;
        }
        var En = function (e) {
          try {
            return (
              e.only([[]]),
              (En = function () {
                return [[]];
              }),
              [[]]
            );
          } catch (t) {
            return (
              (En = function () {
                return _t;
              }),
              _t
            );
          }
        };
        function An(e) {
          return null == e
            ? function () {}
            : "string" === typeof e
              ? Tn(e)
              : function (t) {
                  return A(t, e);
                };
        }
        function Tn(e) {
          var t = e.split(".");
          return 1 === t.length
            ? function (t) {
                return t[e];
              }
            : function (t) {
                return A(t, e);
              };
        }
        function On(e) {
          return [].slice.call(e);
        }
        var Sn = 0;
        function Pn(e) {
          return null == e
            ? ":id"
            : "string" === typeof e
              ? e
              : "[".concat(e.join("+"), "]");
        }
        function Cn(e, t, n) {
          function r(e, t) {
            var n = On(e.objectStoreNames);
            return {
              schema: {
                name: e.name,
                tables: n
                  .map(function (e) {
                    return t.objectStore(e);
                  })
                  .map(function (e) {
                    var t = e.keyPath,
                      n = e.autoIncrement,
                      r = s(t),
                      i = null == t,
                      o = {},
                      a = {
                        name: e.name,
                        primaryKey: {
                          name: null,
                          isPrimaryKey: !0,
                          outbound: i,
                          compound: r,
                          keyPath: t,
                          autoIncrement: n,
                          unique: !0,
                          extractKey: An(t),
                        },
                        indexes: On(e.indexNames)
                          .map(function (t) {
                            return e.index(t);
                          })
                          .map(function (e) {
                            var t = e.name,
                              n = e.unique,
                              r = e.multiEntry,
                              i = e.keyPath,
                              a = s(i),
                              u = {
                                name: t,
                                compound: a,
                                keyPath: i,
                                unique: n,
                                multiEntry: r,
                                extractKey: An(i),
                              };
                            return ((o[Pn(i)] = u), u);
                          }),
                        getIndexByKeyPath: function (e) {
                          return o[Pn(e)];
                        },
                      };
                    return (
                      (o[":id"] = a.primaryKey),
                      null != t && (o[Pn(t)] = a.primaryKey),
                      a
                    );
                  }),
              },
              hasGetAll:
                n.length > 0 &&
                "getAll" in t.objectStore(n[0]) &&
                !(
                  "undefined" !== typeof navigator &&
                  /Safari/.test(navigator.userAgent) &&
                  !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                  [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
                ),
            };
          }
          function i(e) {
            if (3 === e.type) return null;
            if (4 === e.type)
              throw new Error("Cannot convert never type to IDBKeyRange");
            var n = e.lower,
              r = e.upper,
              i = e.lowerOpen,
              o = e.upperOpen,
              a =
                void 0 === n
                  ? void 0 === r
                    ? null
                    : t.upperBound(r, !!o)
                  : void 0 === r
                    ? t.lowerBound(n, !!i)
                    : t.bound(n, r, !!i, !!o);
            return a;
          }
          function o(e) {
            var t = e.name;
            function n(e) {
              var n = e.trans,
                r = e.type,
                o = e.keys,
                a = e.values,
                u = e.range;
              return new Promise(function (e, s) {
                e = et(e);
                var c = n.objectStore(t),
                  l = null == c.keyPath,
                  f = "put" === r || "add" === r;
                if (!f && "delete" !== r && "deleteRange" !== r)
                  throw new Error("Invalid operation type: " + r);
                var d,
                  h = (o || a || { length: 1 }).length;
                if (o && a && o.length !== a.length)
                  throw new Error(
                    "Given keys array must have same length as given values array.",
                  );
                if (0 === h)
                  return e({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: void 0,
                  });
                var p = [],
                  m = [],
                  y = 0,
                  v = function (e) {
                    (++y, pn(e));
                  };
                if ("deleteRange" === r) {
                  if (4 === u.type)
                    return e({
                      numFailures: y,
                      failures: m,
                      results: [],
                      lastResult: void 0,
                    });
                  3 === u.type
                    ? p.push((d = c.clear()))
                    : p.push((d = c.delete(i(u))));
                } else {
                  var g = f ? (l ? [a, o] : [a, null]) : [o, null],
                    b = g[0],
                    w = g[1];
                  if (f)
                    for (var _ = 0; _ < h; ++_)
                      (p.push(
                        (d =
                          w && void 0 !== w[_] ? c[r](b[_], w[_]) : c[r](b[_])),
                      ),
                        (d.onerror = v));
                  else
                    for (_ = 0; _ < h; ++_)
                      (p.push((d = c[r](b[_]))), (d.onerror = v));
                }
                var x = function (t) {
                  var n = t.target.result;
                  (p.forEach(function (e, t) {
                    return null != e.error && (m[t] = e.error);
                  }),
                    e({
                      numFailures: y,
                      failures: m,
                      results:
                        "delete" === r
                          ? o
                          : p.map(function (e) {
                              return e.result;
                            }),
                      lastResult: n,
                    }));
                };
                ((d.onerror = function (e) {
                  (v(e), x(e));
                }),
                  (d.onsuccess = x));
              });
            }
            function r(e) {
              var n = e.trans,
                r = e.values,
                o = e.query,
                a = e.reverse,
                u = e.unique;
              return new Promise(function (e, s) {
                e = et(e);
                var c = o.index,
                  l = o.range,
                  f = n.objectStore(t),
                  d = c.isPrimaryKey ? f : f.index(c.name),
                  h = a
                    ? u
                      ? "prevunique"
                      : "prev"
                    : u
                      ? "nextunique"
                      : "next",
                  p =
                    r || !("openKeyCursor" in d)
                      ? d.openCursor(i(l), h)
                      : d.openKeyCursor(i(l), h);
                ((p.onerror = hn(s)),
                  (p.onsuccess = et(function (t) {
                    var r = p.result;
                    if (r) {
                      ((r.___id = ++Sn), (r.done = !1));
                      var i = r.continue.bind(r),
                        o = r.continuePrimaryKey;
                      o && (o = o.bind(r));
                      var a = r.advance.bind(r),
                        u = function () {
                          throw new Error("Cursor not started");
                        },
                        c = function () {
                          throw new Error("Cursor not stopped");
                        };
                      ((r.trans = n),
                        (r.stop =
                          r.continue =
                          r.continuePrimaryKey =
                          r.advance =
                            u),
                        (r.fail = et(s)),
                        (r.next = function () {
                          var e = this,
                            t = 1;
                          return this.start(function () {
                            return t-- ? e.continue() : e.stop();
                          }).then(function () {
                            return e;
                          });
                        }),
                        (r.start = function (e) {
                          var t = new Promise(function (e, t) {
                              ((e = et(e)),
                                (p.onerror = hn(t)),
                                (r.fail = t),
                                (r.stop = function (t) {
                                  ((r.stop =
                                    r.continue =
                                    r.continuePrimaryKey =
                                    r.advance =
                                      c),
                                    e(t));
                                }));
                            }),
                            n = function () {
                              if (p.result)
                                try {
                                  e();
                                } catch (t) {
                                  r.fail(t);
                                }
                              else
                                ((r.done = !0),
                                  (r.start = function () {
                                    throw new Error("Cursor behind last entry");
                                  }),
                                  r.stop());
                            };
                          return (
                            (p.onsuccess = et(function (e) {
                              ((p.onsuccess = n), n());
                            })),
                            (r.continue = i),
                            (r.continuePrimaryKey = o),
                            (r.advance = a),
                            n(),
                            t
                          );
                        }),
                        e(r));
                    } else e(null);
                  }, s)));
              });
            }
            function o(e) {
              return function (n) {
                return new Promise(function (r, o) {
                  r = et(r);
                  var a = n.trans,
                    u = n.values,
                    s = n.limit,
                    c = n.query,
                    l = s === 1 / 0 ? void 0 : s,
                    f = c.index,
                    d = c.range,
                    h = a.objectStore(t),
                    p = f.isPrimaryKey ? h : h.index(f.name),
                    m = i(d);
                  if (0 === s) return r({ result: [] });
                  if (e) {
                    var y = u ? p.getAll(m, l) : p.getAllKeys(m, l);
                    ((y.onsuccess = function (e) {
                      return r({ result: e.target.result });
                    }),
                      (y.onerror = hn(o)));
                  } else {
                    var v = 0,
                      g =
                        u || !("openKeyCursor" in p)
                          ? p.openCursor(m)
                          : p.openKeyCursor(m),
                      b = [];
                    ((g.onsuccess = function (e) {
                      var t = g.result;
                      return t
                        ? (b.push(u ? t.value : t.primaryKey),
                          ++v === s ? r({ result: b }) : void t.continue())
                        : r({ result: b });
                    }),
                      (g.onerror = hn(o)));
                  }
                });
              };
            }
            return {
              name: t,
              schema: e,
              mutate: n,
              getMany: function (e) {
                var n = e.trans,
                  r = e.keys;
                return new Promise(function (e, i) {
                  e = et(e);
                  for (
                    var o,
                      a = n.objectStore(t),
                      u = r.length,
                      s = new Array(u),
                      c = 0,
                      l = 0,
                      f = function (t) {
                        var n = t.target;
                        ((s[n._pos] = n.result), ++l === c && e(s));
                      },
                      d = hn(i),
                      h = 0;
                    h < u;
                    ++h
                  ) {
                    var p = r[h];
                    null != p &&
                      ((o = a.get(r[h])),
                      (o._pos = h),
                      (o.onsuccess = f),
                      (o.onerror = d),
                      ++c);
                  }
                  0 === c && e(s);
                });
              },
              get: function (e) {
                var n = e.trans,
                  r = e.key;
                return new Promise(function (e, i) {
                  e = et(e);
                  var o = n.objectStore(t),
                    a = o.get(r);
                  ((a.onsuccess = function (t) {
                    return e(t.target.result);
                  }),
                    (a.onerror = hn(i)));
                });
              },
              query: o(c),
              openCursor: r,
              count: function (e) {
                var n = e.query,
                  r = e.trans,
                  o = n.index,
                  a = n.range;
                return new Promise(function (e, n) {
                  var u = r.objectStore(t),
                    s = o.isPrimaryKey ? u : u.index(o.name),
                    c = i(a),
                    l = c ? s.count(c) : s.count();
                  ((l.onsuccess = et(function (t) {
                    return e(t.target.result);
                  })),
                    (l.onerror = hn(n)));
                });
              },
            };
          }
          var a = r(e, n),
            u = a.schema,
            c = a.hasGetAll,
            l = u.tables.map(function (e) {
              return o(e);
            }),
            f = {};
          return (
            l.forEach(function (e) {
              return (f[e.name] = e);
            }),
            {
              stack: "dbcore",
              transaction: e.transaction.bind(e),
              table: function (e) {
                var t = f[e];
                if (!t) throw new Error("Table '".concat(e, "' not found"));
                return f[e];
              },
              MIN_KEY: -1 / 0,
              MAX_KEY: En(t),
              schema: u,
            }
          );
        }
        function Rn(e, t) {
          return t.reduce(function (e, t) {
            var n = t.create;
            return i(i({}, e), n(e));
          }, e);
        }
        function Dn(e, t, n, r) {
          var i = n.IDBKeyRange;
          n.indexedDB;
          var o = Rn(Cn(t, i, r), e.dbcore);
          return { dbcore: o };
        }
        function Nn(e, t) {
          var n = t.db,
            r = Dn(e._middlewares, n, e._deps, t);
          ((e.core = r.dbcore),
            e.tables.forEach(function (t) {
              var n = t.name;
              e.core.schema.tables.some(function (e) {
                return e.name === n;
              }) &&
                ((t.core = e.core.table(n)),
                e[n] instanceof e.Table && (e[n].core = t.core));
            }));
        }
        function In(e, t, n, r) {
          n.forEach(function (n) {
            var i = r[n];
            t.forEach(function (t) {
              var r = g(t, n);
              (!r || ("value" in r && void 0 === r.value)) &&
                (t === e.Transaction.prototype || t instanceof e.Transaction
                  ? m(t, n, {
                      get: function () {
                        return this.table(n);
                      },
                      set: function (e) {
                        p(this, n, {
                          value: e,
                          writable: !0,
                          configurable: !0,
                          enumerable: !0,
                        });
                      },
                    })
                  : (t[n] = new e.Table(n, i)));
            });
          });
        }
        function Kn(e, t) {
          t.forEach(function (t) {
            for (var n in t) t[n] instanceof e.Table && delete t[n];
          });
        }
        function jn(e, t) {
          return e._cfg.version - t._cfg.version;
        }
        function Mn(e, t, n, r) {
          var i = e._dbSchema;
          n.objectStoreNames.contains("$meta") &&
            !i.$meta &&
            ((i.$meta = xn("$meta", Xn("")[0], [])),
            e._storeNames.push("$meta"));
          var o = e._createTransaction("readwrite", e._storeNames, i);
          (o.create(n), o._completion.catch(r));
          var a = o._reject.bind(o),
            s = Ie.transless || Ie;
          ut(function () {
            if (((Ie.trans = o), (Ie.transless = s), 0 !== t))
              return (
                Nn(e, n),
                Ln(e, o, t)
                  .then(function (t) {
                    return qn(e, t, o, n);
                  })
                  .catch(a)
              );
            (u(i).forEach(function (e) {
              Un(n, e, i[e].primKey, i[e].indexes);
            }),
              Nn(e, n),
              Be.follow(function () {
                return e.on.populate.fire(o);
              }).catch(a));
          });
        }
        function Bn(e, t) {
          (zn(e._dbSchema, t),
            t.db.version % 10 !== 0 ||
              t.objectStoreNames.contains("$meta") ||
              t.db
                .createObjectStore("$meta")
                .add(Math.ceil(t.db.version / 10 - 1), "version"));
          var n = Yn(e, e.idbdb, t);
          $n(e, e._dbSchema, t);
          for (
            var r = Fn(n, e._dbSchema),
              i = function (e) {
                if (e.change.length || e.recreate)
                  return (
                    console.warn(
                      "Unable to patch indexes of table ".concat(
                        e.name,
                        " because it has changes on the type of index or primary key.",
                      ),
                    ),
                    { value: void 0 }
                  );
                var n = t.objectStore(e.name);
                e.add.forEach(function (t) {
                  (me &&
                    console.debug(
                      "Dexie upgrade patch: Creating missing index "
                        .concat(e.name, ".")
                        .concat(t.src),
                    ),
                    Wn(n, t));
                });
              },
              o = 0,
              a = r.change;
            o < a.length;
            o++
          ) {
            var u = a[o],
              s = i(u);
            if ("object" === typeof s) return s.value;
          }
        }
        function Ln(e, t, n) {
          return t.storeNames.includes("$meta")
            ? t
                .table("$meta")
                .get("version")
                .then(function (e) {
                  return null != e ? e : n;
                })
            : Be.resolve(n);
        }
        function qn(e, t, n, r) {
          var i = [],
            o = e._versions,
            a = (e._dbSchema = Yn(e, e.idbdb, r)),
            s = o.filter(function (e) {
              return e._cfg.version >= t;
            });
          if (0 === s.length) return Be.resolve();
          function c() {
            return i.length
              ? Be.resolve(i.shift()(n.idbtrans)).then(c)
              : Be.resolve();
          }
          return (
            s.forEach(function (o) {
              (i.push(function () {
                var i = a,
                  s = o._cfg.dbschema;
                ($n(e, i, r), $n(e, s, r), (a = e._dbSchema = s));
                var c = Fn(i, s);
                (c.add.forEach(function (e) {
                  Un(r, e[0], e[1].primKey, e[1].indexes);
                }),
                  c.change.forEach(function (e) {
                    if (e.recreate)
                      throw new ne.Upgrade(
                        "Not yet support for changing primary key",
                      );
                    var t = r.objectStore(e.name);
                    (e.add.forEach(function (e) {
                      return Wn(t, e);
                    }),
                      e.change.forEach(function (e) {
                        (t.deleteIndex(e.name), Wn(t, e));
                      }),
                      e.del.forEach(function (e) {
                        return t.deleteIndex(e);
                      }));
                  }));
                var l = o._cfg.contentUpgrade;
                if (l && o._cfg.version > t) {
                  (Nn(e, r), (n._memoizedTables = {}));
                  var f = S(s);
                  (c.del.forEach(function (e) {
                    f[e] = i[e];
                  }),
                    Kn(e, [e.Transaction.prototype]),
                    In(e, [e.Transaction.prototype], u(f), f),
                    (n.schema = f));
                  var d,
                    h = W(l);
                  h && st();
                  var p = Be.follow(function () {
                    if (((d = l(n)), d && h)) {
                      var e = ct.bind(null, null);
                      d.then(e, e);
                    }
                  });
                  return d && "function" === typeof d.then
                    ? Be.resolve(d)
                    : p.then(function () {
                        return d;
                      });
                }
              }),
                i.push(function (t) {
                  var r = o._cfg.dbschema;
                  (Hn(r, t),
                    Kn(e, [e.Transaction.prototype]),
                    In(
                      e,
                      [e.Transaction.prototype],
                      e._storeNames,
                      e._dbSchema,
                    ),
                    (n.schema = e._dbSchema));
                }),
                i.push(function (t) {
                  e.idbdb.objectStoreNames.contains("$meta") &&
                    (Math.ceil(e.idbdb.version / 10) === o._cfg.version
                      ? (e.idbdb.deleteObjectStore("$meta"),
                        delete e._dbSchema.$meta,
                        (e._storeNames = e._storeNames.filter(function (e) {
                          return "$meta" !== e;
                        })))
                      : t.objectStore("$meta").put(o._cfg.version, "version"));
                }));
            }),
            c().then(function () {
              zn(a, r);
            })
          );
        }
        function Fn(e, t) {
          var n,
            r = { del: [], add: [], change: [] };
          for (n in e) t[n] || r.del.push(n);
          for (n in t) {
            var i = e[n],
              o = t[n];
            if (i) {
              var a = {
                name: n,
                def: o,
                recreate: !1,
                del: [],
                add: [],
                change: [],
              };
              if (
                "" + (i.primKey.keyPath || "") !==
                  "" + (o.primKey.keyPath || "") ||
                i.primKey.auto !== o.primKey.auto
              )
                ((a.recreate = !0), r.change.push(a));
              else {
                var u = i.idxByName,
                  s = o.idxByName,
                  c = void 0;
                for (c in u) s[c] || a.del.push(c);
                for (c in s) {
                  var l = u[c],
                    f = s[c];
                  l ? l.src !== f.src && a.change.push(f) : a.add.push(f);
                }
                (a.del.length > 0 || a.add.length > 0 || a.change.length > 0) &&
                  r.change.push(a);
              }
            } else r.add.push([n, o]);
          }
          return r;
        }
        function Un(e, t, n, r) {
          var i = e.db.createObjectStore(
            t,
            n.keyPath
              ? { keyPath: n.keyPath, autoIncrement: n.auto }
              : { autoIncrement: n.auto },
          );
          return (
            r.forEach(function (e) {
              return Wn(i, e);
            }),
            i
          );
        }
        function zn(e, t) {
          u(e).forEach(function (n) {
            t.db.objectStoreNames.contains(n) ||
              (me && console.debug("Dexie: Creating missing table", n),
              Un(t, n, e[n].primKey, e[n].indexes));
          });
        }
        function Hn(e, t) {
          [].slice.call(t.db.objectStoreNames).forEach(function (n) {
            return null == e[n] && t.db.deleteObjectStore(n);
          });
        }
        function Wn(e, t) {
          e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi,
          });
        }
        function Yn(e, t, n) {
          var r = {},
            i = w(t.objectStoreNames, 0);
          return (
            i.forEach(function (e) {
              for (
                var t = n.objectStore(e),
                  i = t.keyPath,
                  o = wn(
                    _n(i),
                    i || "",
                    !0,
                    !1,
                    !!t.autoIncrement,
                    i && "string" !== typeof i,
                    !0,
                  ),
                  a = [],
                  u = 0;
                u < t.indexNames.length;
                ++u
              ) {
                var s = t.index(t.indexNames[u]);
                i = s.keyPath;
                var c = wn(
                  s.name,
                  i,
                  !!s.unique,
                  !!s.multiEntry,
                  !1,
                  i && "string" !== typeof i,
                  !1,
                );
                a.push(c);
              }
              r[e] = xn(e, o, a);
            }),
            r
          );
        }
        function Gn(e, t, n) {
          e.verno = t.version / 10;
          var r = (e._dbSchema = Yn(e, t, n));
          ((e._storeNames = w(t.objectStoreNames, 0)),
            In(e, [e._allTables], u(r), r));
        }
        function Vn(e, t) {
          var n = Yn(e, e.idbdb, t),
            r = Fn(n, e._dbSchema);
          return !(
            r.add.length ||
            r.change.some(function (e) {
              return e.add.length || e.change.length;
            })
          );
        }
        function $n(e, t, n) {
          for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
            var o = r[i],
              u = n.objectStore(o);
            e._hasGetAll = "getAll" in u;
            for (var s = 0; s < u.indexNames.length; ++s) {
              var c = u.indexNames[s],
                l = u.index(c).keyPath,
                f = "string" === typeof l ? l : "[" + w(l).join("+") + "]";
              if (t[o]) {
                var d = t[o].idxByName[f];
                d &&
                  ((d.name = c),
                  delete t[o].idxByName[f],
                  (t[o].idxByName[c] = d));
              }
            }
          }
          "undefined" !== typeof navigator &&
            /Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            a.WorkerGlobalScope &&
            a instanceof a.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
            (e._hasGetAll = !1);
        }
        function Xn(e) {
          return e.split(",").map(function (e, t) {
            e = e.trim();
            var n = e.replace(/([&*]|\+\+)/g, ""),
              r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
            return wn(
              n,
              r || null,
              /\&/.test(e),
              /\*/.test(e),
              /\+\+/.test(e),
              s(r),
              0 === t,
            );
          });
        }
        var Qn,
          Jn = (function () {
            function e() {}
            return (
              (e.prototype._parseStoresSpec = function (e, t) {
                u(e).forEach(function (n) {
                  if (null !== e[n]) {
                    var r = Xn(e[n]),
                      i = r.shift();
                    if (((i.unique = !0), i.multi))
                      throw new ne.Schema("Primary key cannot be multi-valued");
                    (r.forEach(function (e) {
                      if (e.auto)
                        throw new ne.Schema(
                          "Only primary key can be marked as autoIncrement (++)",
                        );
                      if (!e.keyPath)
                        throw new ne.Schema(
                          "Index must have a name and cannot be an empty string",
                        );
                    }),
                      (t[n] = xn(n, i, r)));
                  }
                });
              }),
              (e.prototype.stores = function (e) {
                var t = this.db;
                this._cfg.storesSource = this._cfg.storesSource
                  ? c(this._cfg.storesSource, e)
                  : e;
                var n = t._versions,
                  r = {},
                  i = {};
                return (
                  n.forEach(function (e) {
                    (c(r, e._cfg.storesSource),
                      (i = e._cfg.dbschema = {}),
                      e._parseStoresSpec(r, i));
                  }),
                  (t._dbSchema = i),
                  Kn(t, [t._allTables, t, t.Transaction.prototype]),
                  In(
                    t,
                    [
                      t._allTables,
                      t,
                      t.Transaction.prototype,
                      this._cfg.tables,
                    ],
                    u(i),
                    i,
                  ),
                  (t._storeNames = u(i)),
                  this
                );
              }),
              (e.prototype.upgrade = function (e) {
                return (
                  (this._cfg.contentUpgrade = pe(
                    this._cfg.contentUpgrade || ae,
                    e,
                  )),
                  this
                );
              }),
              e
            );
          })();
        function Zn(e) {
          return qt(Jn.prototype, function (t) {
            ((this.db = e),
              (this._cfg = {
                version: t,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null,
              }));
          });
        }
        function er(e, t) {
          var n = e["_dbNamesDB"];
          return (
            n ||
              ((n = e["_dbNamesDB"] =
                new ti(Tt, { addons: [], indexedDB: e, IDBKeyRange: t })),
              n.version(1).stores({ dbnames: "name" })),
            n.table("dbnames")
          );
        }
        function tr(e) {
          return e && "function" === typeof e.databases;
        }
        function nr(e) {
          var t = e.indexedDB,
            n = e.IDBKeyRange;
          return tr(t)
            ? Promise.resolve(t.databases()).then(function (e) {
                return e
                  .map(function (e) {
                    return e.name;
                  })
                  .filter(function (e) {
                    return e !== Tt;
                  });
              })
            : er(t, n).toCollection().primaryKeys();
        }
        function rr(e, t) {
          var n = e.indexedDB,
            r = e.IDBKeyRange;
          !tr(n) && t !== Tt && er(n, r).put({ name: t }).catch(ae);
        }
        function ir(e, t) {
          var n = e.indexedDB,
            r = e.IDBKeyRange;
          !tr(n) && t !== Tt && er(n, r).delete(t).catch(ae);
        }
        function or(e) {
          return ut(function () {
            return ((Ie.letThrough = !0), e());
          });
        }
        function ar() {
          var e,
            t =
              !navigator.userAgentData &&
              /Safari\//.test(navigator.userAgent) &&
              !/Chrom(e|ium)\//.test(navigator.userAgent);
          return t && indexedDB.databases
            ? new Promise(function (t) {
                var n = function () {
                  return indexedDB.databases().finally(t);
                };
                ((e = setInterval(n, 100)), n());
              }).finally(function () {
                return clearInterval(e);
              })
            : Promise.resolve();
        }
        function ur(e) {
          return !("from" in e);
        }
        var sr = function (e, t) {
          if (!this) {
            var n = new sr();
            return (e && "d" in e && c(n, e), n);
          }
          c(
            this,
            arguments.length
              ? { d: 1, from: e, to: arguments.length > 1 ? t : e }
              : { d: 0 },
          );
        };
        function cr(e, t, n) {
          var r = Nt(t, n);
          if (!isNaN(r)) {
            if (r > 0) throw RangeError();
            if (ur(e)) return c(e, { from: t, to: n, d: 1 });
            var i = e.l,
              o = e.r;
            if (Nt(n, e.from) < 0)
              return (
                i
                  ? cr(i, t, n)
                  : (e.l = { from: t, to: n, d: 1, l: null, r: null }),
                hr(e)
              );
            if (Nt(t, e.to) > 0)
              return (
                o
                  ? cr(o, t, n)
                  : (e.r = { from: t, to: n, d: 1, l: null, r: null }),
                hr(e)
              );
            (Nt(t, e.from) < 0 &&
              ((e.from = t), (e.l = null), (e.d = o ? o.d + 1 : 1)),
              Nt(n, e.to) > 0 &&
                ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1)));
            var a = !e.r;
            (i && !e.l && lr(e, i), o && a && lr(e, o));
          }
        }
        function lr(e, t) {
          function n(e, t) {
            var r = t.from,
              i = t.to,
              o = t.l,
              a = t.r;
            (cr(e, r, i), o && n(e, o), a && n(e, a));
          }
          ur(t) || n(e, t);
        }
        function fr(e, t) {
          var n = dr(t),
            r = n.next();
          if (r.done) return !1;
          var i = r.value,
            o = dr(e),
            a = o.next(i.from),
            u = a.value;
          while (!r.done && !a.done) {
            if (Nt(u.from, i.to) <= 0 && Nt(u.to, i.from) >= 0) return !0;
            Nt(i.from, u.from) < 0
              ? (i = (r = n.next(u.from)).value)
              : (u = (a = o.next(i.from)).value);
          }
          return !1;
        }
        function dr(e) {
          var t = ur(e) ? null : { s: 0, n: e };
          return {
            next: function (e) {
              var n = arguments.length > 0;
              while (t)
                switch (t.s) {
                  case 0:
                    if (((t.s = 1), n))
                      while (t.n.l && Nt(e, t.n.from) < 0)
                        t = { up: t, n: t.n.l, s: 1 };
                    else while (t.n.l) t = { up: t, n: t.n.l, s: 1 };
                  case 1:
                    if (((t.s = 2), !n || Nt(e, t.n.to) <= 0))
                      return { value: t.n, done: !1 };
                  case 2:
                    if (t.n.r) {
                      ((t.s = 3), (t = { up: t, n: t.n.r, s: 0 }));
                      continue;
                    }
                  case 3:
                    t = t.up;
                }
              return { done: !0 };
            },
          };
        }
        function hr(e) {
          var t,
            n,
            r =
              ((null === (t = e.r) || void 0 === t ? void 0 : t.d) || 0) -
              ((null === (n = e.l) || void 0 === n ? void 0 : n.d) || 0),
            o = r > 1 ? "r" : r < -1 ? "l" : "";
          if (o) {
            var a = "r" === o ? "l" : "r",
              u = i({}, e),
              s = e[o];
            ((e.from = s.from),
              (e.to = s.to),
              (e[o] = s[o]),
              (u[o] = s[a]),
              (e[a] = u),
              (u.d = pr(u)));
          }
          e.d = pr(e);
        }
        function pr(e) {
          var t = e.r,
            n = e.l;
          return (t ? (n ? Math.max(t.d, n.d) : t.d) : n ? n.d : 0) + 1;
        }
        function mr(e, t) {
          return (
            u(t).forEach(function (n) {
              e[n] ? lr(e[n], t[n]) : (e[n] = N(t[n]));
            }),
            e
          );
        }
        function yr(e, t) {
          return (
            e.all ||
            t.all ||
            Object.keys(e).some(function (n) {
              return t[n] && fr(t[n], e[n]);
            })
          );
        }
        ((t.RangeSet = sr),
          h(
            sr.prototype,
            ((Qn = {
              add: function (e) {
                return (lr(this, e), this);
              },
              addKey: function (e) {
                return (cr(this, e, e), this);
              },
              addKeys: function (e) {
                var t = this;
                return (
                  e.forEach(function (e) {
                    return cr(t, e, e);
                  }),
                  this
                );
              },
              hasKey: function (e) {
                var t = dr(this).next(e).value;
                return t && Nt(t.from, e) <= 0 && Nt(t.to, e) >= 0;
              },
            }),
            (Qn[q] = function () {
              return dr(this);
            }),
            Qn),
          ));
        var vr = {},
          gr = {},
          br = !1;
        function wr(e, t) {
          (mr(gr, e),
            br ||
              ((br = !0),
              setTimeout(function () {
                br = !1;
                var e = gr;
                ((gr = {}), _r(e, !1));
              }, 0)));
        }
        function _r(e, t) {
          void 0 === t && (t = !1);
          var n = new Set();
          if (e.all)
            for (var r = 0, i = Object.values(vr); r < i.length; r++) {
              var o = i[r];
              xr(o, e, n, t);
            }
          else
            for (var a in e) {
              var u = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
              if (u) {
                var s = u[1],
                  c = u[2];
                o = vr["idb://".concat(s, "/").concat(c)];
                o && xr(o, e, n, t);
              }
            }
          n.forEach(function (e) {
            return e();
          });
        }
        function xr(e, t, n, r) {
          for (
            var i = [], o = 0, a = Object.entries(e.queries.query);
            o < a.length;
            o++
          ) {
            for (
              var u = a[o], s = u[0], c = u[1], l = [], f = 0, d = c;
              f < d.length;
              f++
            ) {
              var h = d[f];
              yr(t, h.obsSet)
                ? h.subscribers.forEach(function (e) {
                    return n.add(e);
                  })
                : r && l.push(h);
            }
            r && i.push([s, l]);
          }
          if (r)
            for (var p = 0, m = i; p < m.length; p++) {
              var y = m[p];
              ((s = y[0]), (l = y[1]));
              e.queries.query[s] = l;
            }
        }
        function kr(e) {
          var t = e._state,
            n = e._deps.indexedDB;
          if (t.isBeingOpened || e.idbdb)
            return t.dbReadyPromise.then(function () {
              return t.dbOpenError ? gt(t.dbOpenError) : e;
            });
          ((t.isBeingOpened = !0),
            (t.dbOpenError = null),
            (t.openComplete = !1));
          var r = t.openCanceller,
            i = Math.round(10 * e.verno),
            o = !1;
          function a() {
            if (t.openCanceller !== r)
              throw new ne.DatabaseClosed("db.open() was cancelled");
          }
          var u = t.dbReadyResolve,
            s = null,
            c = !1,
            l = function () {
              return new Be(function (r, u) {
                if ((a(), !n)) throw new ne.MissingAPI();
                var f = e.name,
                  d = t.autoSchema || !i ? n.open(f) : n.open(f, i);
                if (!d) throw new ne.MissingAPI();
                ((d.onerror = hn(u)),
                  (d.onblocked = et(e._fireOnBlocked)),
                  (d.onupgradeneeded = et(function (r) {
                    if (
                      ((s = d.transaction),
                      t.autoSchema && !e._options.allowEmptyDB)
                    ) {
                      ((d.onerror = pn), s.abort(), d.result.close());
                      var i = n.deleteDatabase(f);
                      i.onsuccess = i.onerror = et(function () {
                        u(
                          new ne.NoSuchDatabase(
                            "Database ".concat(f, " doesnt exist"),
                          ),
                        );
                      });
                    } else {
                      s.onerror = hn(u);
                      var a = r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion;
                      ((c = a < 1),
                        (e.idbdb = d.result),
                        o && Bn(e, s),
                        Mn(e, a / 10, s, u));
                    }
                  }, u)),
                  (d.onsuccess = et(function () {
                    s = null;
                    var n = (e.idbdb = d.result),
                      a = w(n.objectStoreNames);
                    if (a.length > 0)
                      try {
                        var u = n.transaction(kn(a), "readonly");
                        if (t.autoSchema) Gn(e, n, u);
                        else if (($n(e, e._dbSchema, u), !Vn(e, u) && !o))
                          return (
                            console.warn(
                              "Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.",
                            ),
                            n.close(),
                            (i = n.version + 1),
                            (o = !0),
                            r(l())
                          );
                        Nn(e, u);
                      } catch (h) {}
                    (At.push(e),
                      (n.onversionchange = et(function (n) {
                        ((t.vcFired = !0), e.on("versionchange").fire(n));
                      })),
                      (n.onclose = et(function (t) {
                        e.on("close").fire(t);
                      })),
                      c && rr(e._deps, f),
                      r());
                  }, u)));
              }).catch(function (e) {
                switch (null === e || void 0 === e ? void 0 : e.name) {
                  case "UnknownError":
                    if (t.PR1398_maxLoop > 0)
                      return (
                        t.PR1398_maxLoop--,
                        console.warn(
                          "Dexie: Workaround for Chrome UnknownError on open()",
                        ),
                        l()
                      );
                    break;
                  case "VersionError":
                    if (i > 0) return ((i = 0), l());
                    break;
                }
                return Be.reject(e);
              });
            };
          return Be.race([
            r,
            ("undefined" === typeof navigator ? Be.resolve() : ar()).then(l),
          ])
            .then(function () {
              return (
                a(),
                (t.onReadyBeingFired = []),
                Be.resolve(
                  or(function () {
                    return e.on.ready.fire(e.vip);
                  }),
                ).then(function n() {
                  if (t.onReadyBeingFired.length > 0) {
                    var r = t.onReadyBeingFired.reduce(pe, ae);
                    return (
                      (t.onReadyBeingFired = []),
                      Be.resolve(
                        or(function () {
                          return r(e.vip);
                        }),
                      ).then(n)
                    );
                  }
                })
              );
            })
            .finally(function () {
              t.openCanceller === r &&
                ((t.onReadyBeingFired = null), (t.isBeingOpened = !1));
            })
            .catch(function (n) {
              t.dbOpenError = n;
              try {
                s && s.abort();
              } catch (Qn) {}
              return (r === t.openCanceller && e._close(), gt(n));
            })
            .finally(function () {
              ((t.openComplete = !0), u());
            })
            .then(function () {
              if (c) {
                var t = {};
                (e.tables.forEach(function (n) {
                  (n.schema.indexes.forEach(function (r) {
                    r.name &&
                      (t[
                        "idb://"
                          .concat(e.name, "/")
                          .concat(n.name, "/")
                          .concat(r.name)
                      ] = new sr(-1 / 0, [[[]]]));
                  }),
                    (t["idb://".concat(e.name, "/").concat(n.name, "/")] = t[
                      "idb://".concat(e.name, "/").concat(n.name, "/:dels")
                    ] =
                      new sr(-1 / 0, [[[]]])));
                }),
                  vn(mn).fire(t),
                  _r(t, !0));
              }
              return e;
            });
        }
        function Er(e) {
          var t = function (t) {
              return e.next(t);
            },
            n = function (t) {
              return e.throw(t);
            },
            r = o(t),
            i = o(n);
          function o(e) {
            return function (t) {
              var n = e(t),
                o = n.value;
              return n.done
                ? o
                : o && "function" === typeof o.then
                  ? o.then(r, i)
                  : s(o)
                    ? Promise.all(o).then(r, i)
                    : r(o);
            };
          }
          return o(t)();
        }
        function Ar(e, t, n) {
          var r = arguments.length;
          if (r < 2) throw new ne.InvalidArgument("Too few arguments");
          var i = new Array(r - 1);
          while (--r) i[r - 1] = arguments[r];
          n = i.pop();
          var o = C(i);
          return [e, o, n];
        }
        function Tr(e, t, n, r, i) {
          return Be.resolve().then(function () {
            var o = Ie.transless || Ie,
              a = e._createTransaction(t, n, e._dbSchema, r);
            a.explicit = !0;
            var u = { trans: a, transless: o };
            if (r) a.idbtrans = r.idbtrans;
            else
              try {
                (a.create(),
                  (a.idbtrans._explicit = !0),
                  (e._state.PR1398_maxLoop = 3));
              } catch (f) {
                return f.name === ee.InvalidState &&
                  e.isOpen() &&
                  --e._state.PR1398_maxLoop > 0
                  ? (console.warn("Dexie: Need to reopen db"),
                    e.close({ disableAutoOpen: !1 }),
                    e.open().then(function () {
                      return Tr(e, t, n, null, i);
                    }))
                  : gt(f);
              }
            var s,
              c = W(i);
            c && st();
            var l = Be.follow(function () {
              if (((s = i.call(a, a)), s))
                if (c) {
                  var e = ct.bind(null, null);
                  s.then(e, e);
                } else
                  "function" === typeof s.next &&
                    "function" === typeof s.throw &&
                    (s = Er(s));
            }, u);
            return (
              s && "function" === typeof s.then
                ? Be.resolve(s).then(function (e) {
                    return a.active
                      ? e
                      : gt(
                          new ne.PrematureCommit(
                            "Transaction committed too early. See http://bit.ly/2kdckMn",
                          ),
                        );
                  })
                : l.then(function () {
                    return s;
                  })
            )
              .then(function (e) {
                return (
                  r && a._resolve(),
                  a._completion.then(function () {
                    return e;
                  })
                );
              })
              .catch(function (e) {
                return (a._reject(e), gt(e));
              });
          });
        }
        function Or(e, t, n) {
          for (var r = s(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
          return r;
        }
        function Sr(e) {
          return i(i({}, e), {
            table: function (t) {
              var n = e.table(t),
                r = n.schema,
                o = {},
                a = [];
              function u(e, t, n) {
                var r = Pn(e),
                  s = (o[r] = o[r] || []),
                  c = null == e ? 0 : "string" === typeof e ? 1 : e.length,
                  l = t > 0,
                  f = i(i({}, n), {
                    name: l
                      ? "".concat(r, "(virtual-from:").concat(n.name, ")")
                      : n.name,
                    lowLevelIndex: n,
                    isVirtual: l,
                    keyTail: t,
                    keyLength: c,
                    extractKey: An(e),
                    unique: !l && n.unique,
                  });
                if ((s.push(f), f.isPrimaryKey || a.push(f), c > 1)) {
                  var d = 2 === c ? e[0] : e.slice(0, c - 1);
                  u(d, t + 1, n);
                }
                return (
                  s.sort(function (e, t) {
                    return e.keyTail - t.keyTail;
                  }),
                  f
                );
              }
              var s = u(r.primaryKey.keyPath, 0, r.primaryKey);
              o[":id"] = [s];
              for (var c = 0, l = r.indexes; c < l.length; c++) {
                var f = l[c];
                u(f.keyPath, 0, f);
              }
              function d(e) {
                var t = o[Pn(e)];
                return t && t[0];
              }
              function h(t, n) {
                return {
                  type: 1 === t.type ? 2 : t.type,
                  lower: Or(t.lower, t.lowerOpen ? e.MAX_KEY : e.MIN_KEY, n),
                  lowerOpen: !0,
                  upper: Or(t.upper, t.upperOpen ? e.MIN_KEY : e.MAX_KEY, n),
                  upperOpen: !0,
                };
              }
              function p(e) {
                var t = e.query.index;
                return t.isVirtual
                  ? i(i({}, e), {
                      query: {
                        index: t.lowLevelIndex,
                        range: h(e.query.range, t.keyTail),
                      },
                    })
                  : e;
              }
              var m = i(i({}, n), {
                schema: i(i({}, r), {
                  primaryKey: s,
                  indexes: a,
                  getIndexByKeyPath: d,
                }),
                count: function (e) {
                  return n.count(p(e));
                },
                query: function (e) {
                  return n.query(p(e));
                },
                openCursor: function (t) {
                  var r = t.query.index,
                    i = r.keyTail,
                    o = r.isVirtual,
                    a = r.keyLength;
                  if (!o) return n.openCursor(t);
                  function u(n) {
                    function r(r) {
                      null != r
                        ? n.continue(
                            Or(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i),
                          )
                        : t.unique
                          ? n.continue(
                              n.key
                                .slice(0, a)
                                .concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i),
                            )
                          : n.continue();
                    }
                    var o = Object.create(n, {
                      continue: { value: r },
                      continuePrimaryKey: {
                        value: function (t, r) {
                          n.continuePrimaryKey(Or(t, e.MAX_KEY, i), r);
                        },
                      },
                      primaryKey: {
                        get: function () {
                          return n.primaryKey;
                        },
                      },
                      key: {
                        get: function () {
                          var e = n.key;
                          return 1 === a ? e[0] : e.slice(0, a);
                        },
                      },
                      value: {
                        get: function () {
                          return n.value;
                        },
                      },
                    });
                    return o;
                  }
                  return n.openCursor(p(t)).then(function (e) {
                    return e && u(e);
                  });
                },
              });
              return m;
            },
          });
        }
        var Pr = {
          stack: "dbcore",
          name: "VirtualIndexMiddleware",
          level: 1,
          create: Sr,
        };
        function Cr(e, t, n, r) {
          return (
            (n = n || {}),
            (r = r || ""),
            u(e).forEach(function (i) {
              if (d(t, i)) {
                var o = e[i],
                  a = t[i];
                if ("object" === typeof o && "object" === typeof a && o && a) {
                  var u = L(o),
                    s = L(a);
                  u !== s
                    ? (n[r + i] = t[i])
                    : "Object" === u
                      ? Cr(o, a, n, r + i + ".")
                      : o !== a && (n[r + i] = t[i]);
                } else o !== a && (n[r + i] = t[i]);
              } else n[r + i] = void 0;
            }),
            u(t).forEach(function (i) {
              d(e, i) || (n[r + i] = t[i]);
            }),
            n
          );
        }
        function Rr(e, t) {
          return "delete" === t.type
            ? t.keys
            : t.keys || t.values.map(e.extractKey);
        }
        var Dr = {
          stack: "dbcore",
          name: "HooksMiddleware",
          level: 2,
          create: function (e) {
            return i(i({}, e), {
              table: function (t) {
                var n = e.table(t),
                  r = n.schema.primaryKey,
                  a = i(i({}, n), {
                    mutate: function (e) {
                      var a = Ie.trans,
                        u = a.table(t).hook,
                        s = u.deleting,
                        c = u.creating,
                        l = u.updating;
                      switch (e.type) {
                        case "add":
                          if (c.fire === ae) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return f(e);
                            },
                            !0,
                          );
                        case "put":
                          if (c.fire === ae && l.fire === ae) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return f(e);
                            },
                            !0,
                          );
                        case "delete":
                          if (s.fire === ae) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return f(e);
                            },
                            !0,
                          );
                        case "deleteRange":
                          if (s.fire === ae) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return h(e);
                            },
                            !0,
                          );
                      }
                      return n.mutate(e);
                      function f(e) {
                        var t = Ie.trans,
                          a = e.keys || Rr(r, e);
                        if (!a) throw new Error("Keys missing");
                        return (
                          (e =
                            "add" === e.type || "put" === e.type
                              ? i(i({}, e), { keys: a })
                              : i({}, e)),
                          "delete" !== e.type &&
                            (e.values = o([], e.values, !0)),
                          e.keys && (e.keys = o([], e.keys, !0)),
                          Nr(n, e, a).then(function (i) {
                            var o = a.map(function (n, o) {
                              var a = i[o],
                                u = { onerror: null, onsuccess: null };
                              if ("delete" === e.type) s.fire.call(u, n, a, t);
                              else if ("add" === e.type || void 0 === a) {
                                var f = c.fire.call(u, n, e.values[o], t);
                                null == n &&
                                  null != f &&
                                  ((n = f),
                                  (e.keys[o] = n),
                                  r.outbound || T(e.values[o], r.keyPath, n));
                              } else {
                                var h = Cr(a, e.values[o]),
                                  p = l.fire.call(u, h, n, a, t);
                                if (p) {
                                  var m = e.values[o];
                                  Object.keys(p).forEach(function (e) {
                                    d(m, e) ? (m[e] = p[e]) : T(m, e, p[e]);
                                  });
                                }
                              }
                              return u;
                            });
                            return n
                              .mutate(e)
                              .then(function (t) {
                                for (
                                  var n = t.failures,
                                    r = t.results,
                                    u = t.numFailures,
                                    s = t.lastResult,
                                    c = 0;
                                  c < a.length;
                                  ++c
                                ) {
                                  var l = r ? r[c] : a[c],
                                    f = o[c];
                                  null == l
                                    ? f.onerror && f.onerror(n[c])
                                    : f.onsuccess &&
                                      f.onsuccess(
                                        "put" === e.type && i[c]
                                          ? e.values[c]
                                          : l,
                                      );
                                }
                                return {
                                  failures: n,
                                  results: r,
                                  numFailures: u,
                                  lastResult: s,
                                };
                              })
                              .catch(function (e) {
                                return (
                                  o.forEach(function (t) {
                                    return t.onerror && t.onerror(e);
                                  }),
                                  Promise.reject(e)
                                );
                              });
                          })
                        );
                      }
                      function h(e) {
                        return p(e.trans, e.range, 1e4);
                      }
                      function p(e, t, o) {
                        return n
                          .query({
                            trans: e,
                            values: !1,
                            query: { index: r, range: t },
                            limit: o,
                          })
                          .then(function (n) {
                            var r = n.result;
                            return f({
                              type: "delete",
                              keys: r,
                              trans: e,
                            }).then(function (n) {
                              return n.numFailures > 0
                                ? Promise.reject(n.failures[0])
                                : r.length < o
                                  ? {
                                      failures: [],
                                      numFailures: 0,
                                      lastResult: void 0,
                                    }
                                  : p(
                                      e,
                                      i(i({}, t), {
                                        lower: r[r.length - 1],
                                        lowerOpen: !0,
                                      }),
                                      o,
                                    );
                            });
                          });
                      }
                    },
                  });
                return a;
              },
            });
          },
        };
        function Nr(e, t, n) {
          return "add" === t.type
            ? Promise.resolve([])
            : e.getMany({ trans: t.trans, keys: n, cache: "immutable" });
        }
        function Ir(e, t, n) {
          try {
            if (!t) return null;
            if (t.keys.length < e.length) return null;
            for (
              var r = [], i = 0, o = 0;
              i < t.keys.length && o < e.length;
              ++i
            )
              0 === Nt(t.keys[i], e[o]) &&
                (r.push(n ? j(t.values[i]) : t.values[i]), ++o);
            return r.length === e.length ? r : null;
          } catch (Qn) {
            return null;
          }
        }
        var Kr = {
          stack: "dbcore",
          level: -1,
          create: function (e) {
            return {
              table: function (t) {
                var n = e.table(t);
                return i(i({}, n), {
                  getMany: function (e) {
                    if (!e.cache) return n.getMany(e);
                    var t = Ir(e.keys, e.trans["_cache"], "clone" === e.cache);
                    return t
                      ? Be.resolve(t)
                      : n.getMany(e).then(function (t) {
                          return (
                            (e.trans["_cache"] = {
                              keys: e.keys,
                              values: "clone" === e.cache ? j(t) : t,
                            }),
                            t
                          );
                        });
                  },
                  mutate: function (e) {
                    return (
                      "add" !== e.type && (e.trans["_cache"] = null),
                      n.mutate(e)
                    );
                  },
                });
              },
            };
          },
        };
        function jr(e, t) {
          return (
            "readonly" === e.trans.mode &&
            !!e.subscr &&
            !e.trans.explicit &&
            "disabled" !== e.trans.db._options.cache &&
            !t.schema.primaryKey.outbound
          );
        }
        function Mr(e, t) {
          switch (e) {
            case "query":
              return t.values && !t.unique;
            case "get":
              return !1;
            case "getMany":
              return !1;
            case "count":
              return !1;
            case "openCursor":
              return !1;
          }
        }
        var Br = {
          stack: "dbcore",
          level: 0,
          name: "Observability",
          create: function (e) {
            var t = e.schema.name,
              n = new sr(e.MIN_KEY, e.MAX_KEY);
            return i(i({}, e), {
              transaction: function (t, n, r) {
                if (Ie.subscr && "readonly" !== n)
                  throw new ne.ReadOnly(
                    "Readwrite transaction in liveQuery context. Querier source: ".concat(
                      Ie.querier,
                    ),
                  );
                return e.transaction(t, n, r);
              },
              table: function (r) {
                var o = e.table(r),
                  a = o.schema,
                  c = a.primaryKey,
                  l = a.indexes,
                  f = c.extractKey,
                  d = c.outbound,
                  h =
                    c.autoIncrement &&
                    l.filter(function (e) {
                      return e.compound && e.keyPath.includes(c.keyPath);
                    }),
                  p = i(i({}, o), {
                    mutate: function (i) {
                      var u,
                        l,
                        f = i.trans,
                        d = i.mutatedParts || (i.mutatedParts = {}),
                        p = function (e) {
                          var n = "idb://"
                            .concat(t, "/")
                            .concat(r, "/")
                            .concat(e);
                          return d[n] || (d[n] = new sr());
                        },
                        m = p(""),
                        y = p(":dels"),
                        v = i.type,
                        g =
                          "deleteRange" === i.type
                            ? [i.range]
                            : "delete" === i.type
                              ? [i.keys]
                              : i.values.length < 50
                                ? [
                                    Rr(c, i).filter(function (e) {
                                      return e;
                                    }),
                                    i.values,
                                  ]
                                : [],
                        b = g[0],
                        w = g[1],
                        _ = i.trans["_cache"];
                      if (s(b)) {
                        m.addKeys(b);
                        var x =
                          "delete" === v || b.length === w.length
                            ? Ir(b, _)
                            : null;
                        (x || y.addKeys(b), (x || w) && Lr(p, a, x, w));
                      } else if (b) {
                        var k = {
                          from:
                            null !== (u = b.lower) && void 0 !== u
                              ? u
                              : e.MIN_KEY,
                          to:
                            null !== (l = b.upper) && void 0 !== l
                              ? l
                              : e.MAX_KEY,
                        };
                        (y.add(k), m.add(k));
                      } else
                        (m.add(n),
                          y.add(n),
                          a.indexes.forEach(function (e) {
                            return p(e.name).add(n);
                          }));
                      return o.mutate(i).then(function (e) {
                        return (
                          !b ||
                            ("add" !== i.type && "put" !== i.type) ||
                            (m.addKeys(e.results),
                            h &&
                              h.forEach(function (t) {
                                for (
                                  var n = i.values.map(function (e) {
                                      return t.extractKey(e);
                                    }),
                                    r = t.keyPath.findIndex(function (e) {
                                      return e === c.keyPath;
                                    }),
                                    o = 0,
                                    a = e.results.length;
                                  o < a;
                                  ++o
                                )
                                  n[o][r] = e.results[o];
                                p(t.name).addKeys(n);
                              })),
                          (f.mutatedParts = mr(f.mutatedParts || {}, d)),
                          e
                        );
                      });
                    },
                  }),
                  m = function (t) {
                    var n,
                      r,
                      i = t.query,
                      o = i.index,
                      a = i.range;
                    return [
                      o,
                      new sr(
                        null !== (n = a.lower) && void 0 !== n ? n : e.MIN_KEY,
                        null !== (r = a.upper) && void 0 !== r ? r : e.MAX_KEY,
                      ),
                    ];
                  },
                  y = {
                    get: function (e) {
                      return [c, new sr(e.key)];
                    },
                    getMany: function (e) {
                      return [c, new sr().addKeys(e.keys)];
                    },
                    count: m,
                    query: m,
                    openCursor: m,
                  };
                return (
                  u(y).forEach(function (e) {
                    p[e] = function (a) {
                      var u = Ie.subscr,
                        s = !!u,
                        c = jr(Ie, o) && Mr(e, a),
                        l = c ? (a.obsSet = {}) : u;
                      if (s) {
                        var h = function (e) {
                            var n = "idb://"
                              .concat(t, "/")
                              .concat(r, "/")
                              .concat(e);
                            return l[n] || (l[n] = new sr());
                          },
                          p = h(""),
                          m = h(":dels"),
                          v = y[e](a),
                          g = v[0],
                          b = v[1];
                        if (
                          ("query" === e && g.isPrimaryKey && !a.values
                            ? m.add(b)
                            : h(g.name || "").add(b),
                          !g.isPrimaryKey)
                        ) {
                          if ("count" !== e) {
                            var w =
                              "query" === e &&
                              d &&
                              a.values &&
                              o.query(i(i({}, a), { values: !1 }));
                            return o[e]
                              .apply(this, arguments)
                              .then(function (t) {
                                if ("query" === e) {
                                  if (d && a.values)
                                    return w.then(function (e) {
                                      var n = e.result;
                                      return (p.addKeys(n), t);
                                    });
                                  var n = a.values ? t.result.map(f) : t.result;
                                  a.values ? p.addKeys(n) : m.addKeys(n);
                                } else if ("openCursor" === e) {
                                  var r = t,
                                    i = a.values;
                                  return (
                                    r &&
                                    Object.create(r, {
                                      key: {
                                        get: function () {
                                          return (
                                            m.addKey(r.primaryKey),
                                            r.key
                                          );
                                        },
                                      },
                                      primaryKey: {
                                        get: function () {
                                          var e = r.primaryKey;
                                          return (m.addKey(e), e);
                                        },
                                      },
                                      value: {
                                        get: function () {
                                          return (
                                            i && p.addKey(r.primaryKey),
                                            r.value
                                          );
                                        },
                                      },
                                    })
                                  );
                                }
                                return t;
                              });
                          }
                          m.add(n);
                        }
                      }
                      return o[e].apply(this, arguments);
                    };
                  }),
                  p
                );
              },
            });
          },
        };
        function Lr(e, t, n, r) {
          function i(t) {
            var i = e(t.name || "");
            function o(e) {
              return null != e ? t.extractKey(e) : null;
            }
            var a = function (e) {
              return t.multiEntry && s(e)
                ? e.forEach(function (e) {
                    return i.addKey(e);
                  })
                : i.addKey(e);
            };
            (n || r).forEach(function (e, t) {
              var i = n && o(n[t]),
                u = r && o(r[t]);
              0 !== Nt(i, u) && (null != i && a(i), null != u && a(u));
            });
          }
          t.indexes.forEach(i);
        }
        function qr(e, t, n) {
          if (0 === n.numFailures) return t;
          if ("deleteRange" === t.type) return null;
          var r = t.keys
            ? t.keys.length
            : "values" in t && t.values
              ? t.values.length
              : 1;
          if (n.numFailures === r) return null;
          var o = i({}, t);
          return (
            s(o.keys) &&
              (o.keys = o.keys.filter(function (e, t) {
                return !(t in n.failures);
              })),
            "values" in o &&
              s(o.values) &&
              (o.values = o.values.filter(function (e, t) {
                return !(t in n.failures);
              })),
            o
          );
        }
        function Fr(e, t) {
          return (
            void 0 === t.lower ||
            (t.lowerOpen ? Nt(e, t.lower) > 0 : Nt(e, t.lower) >= 0)
          );
        }
        function Ur(e, t) {
          return (
            void 0 === t.upper ||
            (t.upperOpen ? Nt(e, t.upper) < 0 : Nt(e, t.upper) <= 0)
          );
        }
        function zr(e, t) {
          return Fr(e, t) && Ur(e, t);
        }
        function Hr(e, t, n, r, i, o) {
          if (!n || 0 === n.length) return e;
          var a = t.query.index,
            u = a.multiEntry,
            c = t.query.range,
            l = r.schema.primaryKey,
            f = l.extractKey,
            d = a.extractKey,
            h = (a.lowLevelIndex || a).extractKey,
            p = n.reduce(function (e, n) {
              var r = e,
                i = [];
              if ("add" === n.type || "put" === n.type)
                for (var o = new sr(), a = n.values.length - 1; a >= 0; --a) {
                  var l = n.values[a],
                    h = f(l);
                  if (!o.hasKey(h)) {
                    var p = d(l);
                    (u && s(p)
                      ? p.some(function (e) {
                          return zr(e, c);
                        })
                      : zr(p, c)) && (o.addKey(h), i.push(l));
                  }
                }
              switch (n.type) {
                case "add":
                  var m = new sr().addKeys(
                    t.values
                      ? e.map(function (e) {
                          return f(e);
                        })
                      : e,
                  );
                  r = e.concat(
                    t.values
                      ? i.filter(function (e) {
                          var t = f(e);
                          return !m.hasKey(t) && (m.addKey(t), !0);
                        })
                      : i
                          .map(function (e) {
                            return f(e);
                          })
                          .filter(function (e) {
                            return !m.hasKey(e) && (m.addKey(e), !0);
                          }),
                  );
                  break;
                case "put":
                  var y = new sr().addKeys(
                    n.values.map(function (e) {
                      return f(e);
                    }),
                  );
                  r = e
                    .filter(function (e) {
                      return !y.hasKey(t.values ? f(e) : e);
                    })
                    .concat(
                      t.values
                        ? i
                        : i.map(function (e) {
                            return f(e);
                          }),
                    );
                  break;
                case "delete":
                  var v = new sr().addKeys(n.keys);
                  r = e.filter(function (e) {
                    return !v.hasKey(t.values ? f(e) : e);
                  });
                  break;
                case "deleteRange":
                  var g = n.range;
                  r = e.filter(function (e) {
                    return !zr(f(e), g);
                  });
                  break;
              }
              return r;
            }, e);
          return p === e
            ? e
            : (p.sort(function (e, t) {
                return Nt(h(e), h(t)) || Nt(f(e), f(t));
              }),
              t.limit &&
                t.limit < 1 / 0 &&
                (p.length > t.limit
                  ? (p.length = t.limit)
                  : e.length === t.limit &&
                    p.length < t.limit &&
                    (i.dirty = !0)),
              o ? Object.freeze(p) : p);
        }
        function Wr(e, t) {
          return (
            0 === Nt(e.lower, t.lower) &&
            0 === Nt(e.upper, t.upper) &&
            !!e.lowerOpen === !!t.lowerOpen &&
            !!e.upperOpen === !!t.upperOpen
          );
        }
        function Yr(e, t, n, r) {
          if (void 0 === e) return void 0 !== t ? -1 : 0;
          if (void 0 === t) return 1;
          var i = Nt(e, t);
          if (0 === i) {
            if (n && r) return 0;
            if (n) return 1;
            if (r) return -1;
          }
          return i;
        }
        function Gr(e, t, n, r) {
          if (void 0 === e) return void 0 !== t ? 1 : 0;
          if (void 0 === t) return -1;
          var i = Nt(e, t);
          if (0 === i) {
            if (n && r) return 0;
            if (n) return -1;
            if (r) return 1;
          }
          return i;
        }
        function Vr(e, t) {
          return (
            Yr(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 &&
            Gr(e.upper, t.upper, e.upperOpen, t.upperOpen) >= 0
          );
        }
        function $r(e, t, n, r) {
          var i = vr["idb://".concat(e, "/").concat(t)];
          if (!i) return [];
          var o = i.queries[n];
          if (!o) return [null, !1, i, null];
          var a = r.query ? r.query.index.name : null,
            u = o[a || ""];
          if (!u) return [null, !1, i, null];
          switch (n) {
            case "query":
              var s = u.find(function (e) {
                return (
                  e.req.limit === r.limit &&
                  e.req.values === r.values &&
                  Wr(e.req.query.range, r.query.range)
                );
              });
              if (s) return [s, !0, i, u];
              var c = u.find(function (e) {
                var t = "limit" in e.req ? e.req.limit : 1 / 0;
                return (
                  t >= r.limit &&
                  (!r.values || e.req.values) &&
                  Vr(e.req.query.range, r.query.range)
                );
              });
              return [c, !1, i, u];
            case "count":
              var l = u.find(function (e) {
                return Wr(e.req.query.range, r.query.range);
              });
              return [l, !!l, i, u];
          }
        }
        function Xr(e, t, n, r) {
          (e.subscribers.add(n),
            r.addEventListener("abort", function () {
              (e.subscribers.delete(n), 0 === e.subscribers.size && Qr(e, t));
            }));
        }
        function Qr(e, t) {
          setTimeout(function () {
            0 === e.subscribers.size && U(t, e);
          }, 3e3);
        }
        var Jr = {
          stack: "dbcore",
          level: 0,
          name: "Cache",
          create: function (e) {
            var t = e.schema.name,
              n = i(i({}, e), {
                transaction: function (n, r, i) {
                  var o = e.transaction(n, r, i);
                  if ("readwrite" === r) {
                    var a = new AbortController(),
                      u = a.signal,
                      s = function (i) {
                        return function () {
                          if ((a.abort(), "readwrite" === r)) {
                            for (
                              var u = new Set(), s = 0, c = n;
                              s < c.length;
                              s++
                            ) {
                              var l = c[s],
                                f = vr["idb://".concat(t, "/").concat(l)];
                              if (f) {
                                var d = e.table(l),
                                  h = f.optimisticOps.filter(function (e) {
                                    return e.trans === o;
                                  });
                                if (o._explicit && i && o.mutatedParts)
                                  for (
                                    var p = 0,
                                      m = Object.values(f.queries.query);
                                    p < m.length;
                                    p++
                                  )
                                    for (
                                      var y = m[p], v = 0, g = y.slice();
                                      v < g.length;
                                      v++
                                    ) {
                                      var b = g[v];
                                      yr(b.obsSet, o.mutatedParts) &&
                                        (U(y, b),
                                        b.subscribers.forEach(function (e) {
                                          return u.add(e);
                                        }));
                                    }
                                else if (h.length > 0) {
                                  f.optimisticOps = f.optimisticOps.filter(
                                    function (e) {
                                      return e.trans !== o;
                                    },
                                  );
                                  for (
                                    var w = 0,
                                      _ = Object.values(f.queries.query);
                                    w < _.length;
                                    w++
                                  ) {
                                    y = _[w];
                                    for (
                                      var x = 0, k = y.slice();
                                      x < k.length;
                                      x++
                                    ) {
                                      b = k[x];
                                      if (null != b.res && o.mutatedParts)
                                        if (i && !b.dirty) {
                                          var E = Object.isFrozen(b.res),
                                            A = Hr(b.res, b.req, h, d, b, E);
                                          b.dirty
                                            ? (U(y, b),
                                              b.subscribers.forEach(
                                                function (e) {
                                                  return u.add(e);
                                                },
                                              ))
                                            : A !== b.res &&
                                              ((b.res = A),
                                              (b.promise = Be.resolve({
                                                result: A,
                                              })));
                                        } else
                                          (b.dirty && U(y, b),
                                            b.subscribers.forEach(function (e) {
                                              return u.add(e);
                                            }));
                                    }
                                  }
                                }
                              }
                            }
                            u.forEach(function (e) {
                              return e();
                            });
                          }
                        };
                      };
                    (o.addEventListener("abort", s(!1), { signal: u }),
                      o.addEventListener("error", s(!1), { signal: u }),
                      o.addEventListener("complete", s(!0), { signal: u }));
                  }
                  return o;
                },
                table: function (n) {
                  var r = e.table(n),
                    o = r.schema.primaryKey,
                    a = i(i({}, r), {
                      mutate: function (e) {
                        var a = Ie.trans;
                        if (
                          o.outbound ||
                          "disabled" === a.db._options.cache ||
                          a.explicit ||
                          "readwrite" !== a.idbtrans.mode
                        )
                          return r.mutate(e);
                        var u = vr["idb://".concat(t, "/").concat(n)];
                        if (!u) return r.mutate(e);
                        var s = r.mutate(e);
                        return (
                          ("add" !== e.type && "put" !== e.type) ||
                          !(
                            e.values.length >= 50 ||
                            Rr(o, e).some(function (e) {
                              return null == e;
                            })
                          )
                            ? (u.optimisticOps.push(e),
                              e.mutatedParts && wr(e.mutatedParts),
                              s.then(function (t) {
                                if (t.numFailures > 0) {
                                  U(u.optimisticOps, e);
                                  var n = qr(u, e, t);
                                  (n && u.optimisticOps.push(n),
                                    e.mutatedParts && wr(e.mutatedParts));
                                }
                              }),
                              s.catch(function () {
                                (U(u.optimisticOps, e),
                                  e.mutatedParts && wr(e.mutatedParts));
                              }))
                            : s.then(function (t) {
                                var n = i(i({}, e), {
                                    values: e.values.map(function (e, n) {
                                      var r;
                                      if (t.failures[n]) return e;
                                      var a = (
                                        null === (r = o.keyPath) || void 0 === r
                                          ? void 0
                                          : r.includes(".")
                                      )
                                        ? j(e)
                                        : i({}, e);
                                      return (T(a, o.keyPath, t.results[n]), a);
                                    }),
                                  }),
                                  r = qr(u, n, t);
                                (u.optimisticOps.push(r),
                                  queueMicrotask(function () {
                                    return e.mutatedParts && wr(e.mutatedParts);
                                  }));
                              }),
                          s
                        );
                      },
                      query: function (e) {
                        var i;
                        if (!jr(Ie, r) || !Mr("query", e)) return r.query(e);
                        var o =
                            "immutable" ===
                            (null === (i = Ie.trans) || void 0 === i
                              ? void 0
                              : i.db._options.cache),
                          a = Ie,
                          u = a.requery,
                          s = a.signal,
                          c = $r(t, n, "query", e),
                          l = c[0],
                          f = c[1],
                          d = c[2],
                          h = c[3];
                        if (l && f) l.obsSet = e.obsSet;
                        else {
                          var p = r
                            .query(e)
                            .then(function (e) {
                              var t = e.result;
                              if ((l && (l.res = t), o)) {
                                for (var n = 0, r = t.length; n < r; ++n)
                                  Object.freeze(t[n]);
                                Object.freeze(t);
                              } else e.result = j(t);
                              return e;
                            })
                            .catch(function (e) {
                              return (h && l && U(h, l), Promise.reject(e));
                            });
                          ((l = {
                            obsSet: e.obsSet,
                            promise: p,
                            subscribers: new Set(),
                            type: "query",
                            req: e,
                            dirty: !1,
                          }),
                            h
                              ? h.push(l)
                              : ((h = [l]),
                                d ||
                                  (d = vr["idb://".concat(t, "/").concat(n)] =
                                    {
                                      queries: { query: {}, count: {} },
                                      objs: new Map(),
                                      optimisticOps: [],
                                      unsignaledParts: {},
                                    }),
                                (d.queries.query[e.query.index.name || ""] =
                                  h)));
                        }
                        return (
                          Xr(l, h, u, s),
                          l.promise.then(function (t) {
                            return {
                              result: Hr(
                                t.result,
                                e,
                                null === d || void 0 === d
                                  ? void 0
                                  : d.optimisticOps,
                                r,
                                l,
                                o,
                              ),
                            };
                          })
                        );
                      },
                    });
                  return a;
                },
              });
            return n;
          },
        };
        function Zr(e, t) {
          return new Proxy(e, {
            get: function (e, n, r) {
              return "db" === n ? t : Reflect.get(e, n, r);
            },
          });
        }
        var ei,
          ti =
            (t.default =
            t.Dexie =
              (function () {
                function e(t, n) {
                  var r = this;
                  ((this._middlewares = {}), (this.verno = 0));
                  var o = e.dependencies;
                  ((this._options = n =
                    i(
                      {
                        addons: e.addons,
                        autoOpen: !0,
                        indexedDB: o.indexedDB,
                        IDBKeyRange: o.IDBKeyRange,
                        cache: "cloned",
                      },
                      n,
                    )),
                    (this._deps = {
                      indexedDB: n.indexedDB,
                      IDBKeyRange: n.IDBKeyRange,
                    }));
                  var a = n.addons;
                  ((this._dbSchema = {}),
                    (this._versions = []),
                    (this._storeNames = []),
                    (this._allTables = {}),
                    (this.idbdb = null),
                    (this._novip = this));
                  var u = {
                    dbOpenError: null,
                    isBeingOpened: !1,
                    onReadyBeingFired: null,
                    openComplete: !1,
                    dbReadyResolve: ae,
                    dbReadyPromise: null,
                    cancelOpen: ae,
                    openCanceller: null,
                    autoSchema: !0,
                    PR1398_maxLoop: 3,
                    autoOpen: n.autoOpen,
                  };
                  ((u.dbReadyPromise = new Be(function (e) {
                    u.dbReadyResolve = e;
                  })),
                    (u.openCanceller = new Be(function (e, t) {
                      u.cancelOpen = t;
                    })),
                    (this._state = u),
                    (this.name = t),
                    (this.on = Lt(
                      this,
                      "populate",
                      "blocked",
                      "versionchange",
                      "close",
                      { ready: [pe, ae] },
                    )),
                    (this.on.ready.subscribe = _(
                      this.on.ready.subscribe,
                      function (t) {
                        return function (n, i) {
                          e.vip(function () {
                            var e = r._state;
                            if (e.openComplete)
                              (e.dbOpenError || Be.resolve().then(n),
                                i && t(n));
                            else if (e.onReadyBeingFired)
                              (e.onReadyBeingFired.push(n), i && t(n));
                            else {
                              t(n);
                              var o = r;
                              i ||
                                t(function e() {
                                  (o.on.ready.unsubscribe(n),
                                    o.on.ready.unsubscribe(e));
                                });
                            }
                          });
                        };
                      },
                    )),
                    (this.Collection = Zt(this)),
                    (this.Table = Ft(this)),
                    (this.Transaction = bn(this)),
                    (this.Version = Zn(this)),
                    (this.WhereClause = dn(this)),
                    this.on("versionchange", function (e) {
                      (e.newVersion > 0
                        ? console.warn(
                            "Another connection wants to upgrade database '".concat(
                              r.name,
                              "'. Closing db now to resume the upgrade.",
                            ),
                          )
                        : console.warn(
                            "Another connection wants to delete database '".concat(
                              r.name,
                              "'. Closing db now to resume the delete request.",
                            ),
                          ),
                        r.close({ disableAutoOpen: !1 }));
                    }),
                    this.on("blocked", function (e) {
                      !e.newVersion || e.newVersion < e.oldVersion
                        ? console.warn(
                            "Dexie.delete('".concat(r.name, "') was blocked"),
                          )
                        : console.warn(
                            "Upgrade '"
                              .concat(
                                r.name,
                                "' blocked by other connection holding version ",
                              )
                              .concat(e.oldVersion / 10),
                          );
                    }),
                    (this._maxKey = En(n.IDBKeyRange)),
                    (this._createTransaction = function (e, t, n, i) {
                      return new r.Transaction(
                        e,
                        t,
                        n,
                        r._options.chromeTransactionDurability,
                        i,
                      );
                    }),
                    (this._fireOnBlocked = function (e) {
                      (r.on("blocked").fire(e),
                        At.filter(function (e) {
                          return (
                            e.name === r.name && e !== r && !e._state.vcFired
                          );
                        }).map(function (t) {
                          return t.on("versionchange").fire(e);
                        }));
                    }),
                    this.use(Kr),
                    this.use(Jr),
                    this.use(Br),
                    this.use(Pr),
                    this.use(Dr));
                  var s = new Proxy(this, {
                    get: function (e, t, n) {
                      if ("_vip" === t) return !0;
                      if ("table" === t)
                        return function (e) {
                          return Zr(r.table(e), s);
                        };
                      var i = Reflect.get(e, t, n);
                      return i instanceof Bt
                        ? Zr(i, s)
                        : "tables" === t
                          ? i.map(function (e) {
                              return Zr(e, s);
                            })
                          : "_createTransaction" === t
                            ? function () {
                                var e = i.apply(this, arguments);
                                return Zr(e, s);
                              }
                            : i;
                    },
                  });
                  ((this.vip = s),
                    a.forEach(function (e) {
                      return e(r);
                    }));
                }
                return (
                  (e.prototype.version = function (e) {
                    if (isNaN(e) || e < 0.1)
                      throw new ne.Type(
                        "Given version is not a positive number",
                      );
                    if (
                      ((e = Math.round(10 * e) / 10),
                      this.idbdb || this._state.isBeingOpened)
                    )
                      throw new ne.Schema(
                        "Cannot add version when database is open",
                      );
                    this.verno = Math.max(this.verno, e);
                    var t = this._versions,
                      n = t.filter(function (t) {
                        return t._cfg.version === e;
                      })[0];
                    return (
                      n ||
                      ((n = new this.Version(e)),
                      t.push(n),
                      t.sort(jn),
                      n.stores({}),
                      (this._state.autoSchema = !1),
                      n)
                    );
                  }),
                  (e.prototype._whenReady = function (e) {
                    var t = this;
                    return this.idbdb &&
                      (this._state.openComplete || Ie.letThrough || this._vip)
                      ? e()
                      : new Be(function (e, n) {
                          if (t._state.openComplete)
                            return n(
                              new ne.DatabaseClosed(t._state.dbOpenError),
                            );
                          if (!t._state.isBeingOpened) {
                            if (!t._state.autoOpen)
                              return void n(new ne.DatabaseClosed());
                            t.open().catch(ae);
                          }
                          t._state.dbReadyPromise.then(e, n);
                        }).then(e);
                  }),
                  (e.prototype.use = function (e) {
                    var t = e.stack,
                      n = e.create,
                      r = e.level,
                      i = e.name;
                    i && this.unuse({ stack: t, name: i });
                    var o = this._middlewares[t] || (this._middlewares[t] = []);
                    return (
                      o.push({
                        stack: t,
                        create: n,
                        level: null == r ? 10 : r,
                        name: i,
                      }),
                      o.sort(function (e, t) {
                        return e.level - t.level;
                      }),
                      this
                    );
                  }),
                  (e.prototype.unuse = function (e) {
                    var t = e.stack,
                      n = e.name,
                      r = e.create;
                    return (
                      t &&
                        this._middlewares[t] &&
                        (this._middlewares[t] = this._middlewares[t].filter(
                          function (e) {
                            return r ? e.create !== r : !!n && e.name !== n;
                          },
                        )),
                      this
                    );
                  }),
                  (e.prototype.open = function () {
                    var e = this;
                    return mt(Ne, function () {
                      return kr(e);
                    });
                  }),
                  (e.prototype._close = function () {
                    var e = this._state,
                      t = At.indexOf(this);
                    if ((t >= 0 && At.splice(t, 1), this.idbdb)) {
                      try {
                        this.idbdb.close();
                      } catch (n) {}
                      this.idbdb = null;
                    }
                    e.isBeingOpened ||
                      ((e.dbReadyPromise = new Be(function (t) {
                        e.dbReadyResolve = t;
                      })),
                      (e.openCanceller = new Be(function (t, n) {
                        e.cancelOpen = n;
                      })));
                  }),
                  (e.prototype.close = function (e) {
                    var t = void 0 === e ? { disableAutoOpen: !0 } : e,
                      n = t.disableAutoOpen,
                      r = this._state;
                    n
                      ? (r.isBeingOpened &&
                          r.cancelOpen(new ne.DatabaseClosed()),
                        this._close(),
                        (r.autoOpen = !1),
                        (r.dbOpenError = new ne.DatabaseClosed()))
                      : (this._close(),
                        (r.autoOpen =
                          this._options.autoOpen || r.isBeingOpened),
                        (r.openComplete = !1),
                        (r.dbOpenError = null));
                  }),
                  (e.prototype.delete = function (e) {
                    var t = this;
                    void 0 === e && (e = { disableAutoOpen: !0 });
                    var n =
                        arguments.length > 0 &&
                        "object" !== typeof arguments[0],
                      r = this._state;
                    return new Be(function (i, o) {
                      var a = function () {
                        t.close(e);
                        var n = t._deps.indexedDB.deleteDatabase(t.name);
                        ((n.onsuccess = et(function () {
                          (ir(t._deps, t.name), i());
                        })),
                          (n.onerror = hn(o)),
                          (n.onblocked = t._fireOnBlocked));
                      };
                      if (n)
                        throw new ne.InvalidArgument(
                          "Invalid closeOptions argument to db.delete()",
                        );
                      r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
                    });
                  }),
                  (e.prototype.backendDB = function () {
                    return this.idbdb;
                  }),
                  (e.prototype.isOpen = function () {
                    return null !== this.idbdb;
                  }),
                  (e.prototype.hasBeenClosed = function () {
                    var e = this._state.dbOpenError;
                    return e && "DatabaseClosed" === e.name;
                  }),
                  (e.prototype.hasFailed = function () {
                    return null !== this._state.dbOpenError;
                  }),
                  (e.prototype.dynamicallyOpened = function () {
                    return this._state.autoSchema;
                  }),
                  Object.defineProperty(e.prototype, "tables", {
                    get: function () {
                      var e = this;
                      return u(this._allTables).map(function (t) {
                        return e._allTables[t];
                      });
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.transaction = function () {
                    var e = Ar.apply(this, arguments);
                    return this._transaction.apply(this, e);
                  }),
                  (e.prototype._transaction = function (e, t, n) {
                    var r = this,
                      i = Ie.trans;
                    (i && i.db === this && -1 === e.indexOf("!")) || (i = null);
                    var o,
                      a,
                      u = -1 !== e.indexOf("?");
                    e = e.replace("!", "").replace("?", "");
                    try {
                      if (
                        ((a = t.map(function (e) {
                          var t = e instanceof r.Table ? e.name : e;
                          if ("string" !== typeof t)
                            throw new TypeError(
                              "Invalid table argument to Dexie.transaction(). Only Table or String are allowed",
                            );
                          return t;
                        })),
                        "r" == e || e === Ot)
                      )
                        o = Ot;
                      else {
                        if ("rw" != e && e != St)
                          throw new ne.InvalidArgument(
                            "Invalid transaction mode: " + e,
                          );
                        o = St;
                      }
                      if (i) {
                        if (i.mode === Ot && o === St) {
                          if (!u)
                            throw new ne.SubTransaction(
                              "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY",
                            );
                          i = null;
                        }
                        (i &&
                          a.forEach(function (e) {
                            if (i && -1 === i.storeNames.indexOf(e)) {
                              if (!u)
                                throw new ne.SubTransaction(
                                  "Table " +
                                    e +
                                    " not included in parent transaction.",
                                );
                              i = null;
                            }
                          }),
                          u && i && !i.active && (i = null));
                      }
                    } catch (c) {
                      return i
                        ? i._promise(null, function (e, t) {
                            t(c);
                          })
                        : gt(c);
                    }
                    var s = Tr.bind(null, this, o, a, i, n);
                    return i
                      ? i._promise(o, s, "lock")
                      : Ie.trans
                        ? mt(Ie.transless, function () {
                            return r._whenReady(s);
                          })
                        : this._whenReady(s);
                  }),
                  (e.prototype.table = function (e) {
                    if (!d(this._allTables, e))
                      throw new ne.InvalidTable(
                        "Table ".concat(e, " does not exist"),
                      );
                    return this._allTables[e];
                  }),
                  e
                );
              })()),
          ni =
            "undefined" !== typeof Symbol && "observable" in Symbol
              ? Symbol.observable
              : "@@observable",
          ri = (function () {
            function e(e) {
              this._subscribe = e;
            }
            return (
              (e.prototype.subscribe = function (e, t, n) {
                return this._subscribe(
                  e && "function" !== typeof e
                    ? e
                    : { next: e, error: t, complete: n },
                );
              }),
              (e.prototype[ni] = function () {
                return this;
              }),
              e
            );
          })();
        try {
          ei = {
            indexedDB:
              a.indexedDB ||
              a.mozIndexedDB ||
              a.webkitIndexedDB ||
              a.msIndexedDB,
            IDBKeyRange: a.IDBKeyRange || a.webkitIDBKeyRange,
          };
        } catch (hi) {
          ei = { indexedDB: null, IDBKeyRange: null };
        }
        function ii(e) {
          var t,
            n = !1,
            r = new ri(function (r) {
              var i = W(e);
              function o(t) {
                var n = Ge();
                try {
                  i && st();
                  var r = ut(e, t);
                  return (i && (r = r.finally(ct)), r);
                } finally {
                  n && Ve();
                }
              }
              var a,
                u = !1,
                s = {},
                c = {},
                l = {
                  get closed() {
                    return u;
                  },
                  unsubscribe: function () {
                    u ||
                      ((u = !0),
                      a && a.abort(),
                      f && vn.storagemutated.unsubscribe(p));
                  },
                };
              r.start && r.start(l);
              var f = !1,
                d = function () {
                  return vt(m);
                };
              function h() {
                return yr(c, s);
              }
              var p = function (e) {
                  (mr(s, e), h() && d());
                },
                m = function () {
                  if (!u && ei.indexedDB) {
                    s = {};
                    var i = {};
                    (a && a.abort(), (a = new AbortController()));
                    var l = {
                        subscr: i,
                        signal: a.signal,
                        requery: d,
                        querier: e,
                        trans: null,
                      },
                      h = o(l);
                    Promise.resolve(h).then(
                      function (e) {
                        ((n = !0),
                          (t = e),
                          u ||
                            l.signal.aborted ||
                            ((s = {}),
                            (c = i),
                            I(c) || f || (vn(mn, p), (f = !0)),
                            vt(function () {
                              return !u && r.next && r.next(e);
                            })));
                      },
                      function (e) {
                        ((n = !1),
                          ["DatabaseClosedError", "AbortError"].includes(
                            null === e || void 0 === e ? void 0 : e.name,
                          ) ||
                            u ||
                            vt(function () {
                              u || (r.error && r.error(e));
                            }));
                      },
                    );
                  }
                };
              return (setTimeout(d, 0), l);
            });
          return (
            (r.hasValue = function () {
              return n;
            }),
            (r.getValue = function () {
              return t;
            }),
            r
          );
        }
        var oi = ti;
        function ai(e) {
          var t = si;
          try {
            ((si = !0), vn.storagemutated.fire(e), _r(e, !0));
          } finally {
            si = t;
          }
        }
        (h(
          oi,
          i(i({}, oe), {
            delete: function (e) {
              var t = new oi(e, { addons: [] });
              return t.delete();
            },
            exists: function (e) {
              return new oi(e, { addons: [] })
                .open()
                .then(function (e) {
                  return (e.close(), !0);
                })
                .catch("NoSuchDatabaseError", function () {
                  return !1;
                });
            },
            getDatabaseNames: function (e) {
              try {
                return nr(oi.dependencies).then(e);
              } catch (Qn) {
                return gt(new ne.MissingAPI());
              }
            },
            defineClass: function () {
              function e(e) {
                c(this, e);
              }
              return e;
            },
            ignoreTransaction: function (e) {
              return Ie.trans ? mt(Ie.transless, e) : e();
            },
            vip: or,
            async: function (e) {
              return function () {
                try {
                  var t = Er(e.apply(this, arguments));
                  return t && "function" === typeof t.then ? t : Be.resolve(t);
                } catch (hi) {
                  return gt(hi);
                }
              };
            },
            spawn: function (e, t, n) {
              try {
                var r = Er(e.apply(n, t || []));
                return r && "function" === typeof r.then ? r : Be.resolve(r);
              } catch (hi) {
                return gt(hi);
              }
            },
            currentTransaction: {
              get: function () {
                return Ie.trans || null;
              },
            },
            waitFor: function (e, t) {
              var n = Be.resolve(
                "function" === typeof e ? oi.ignoreTransaction(e) : e,
              ).timeout(t || 6e4);
              return Ie.trans ? Ie.trans.waitFor(n) : n;
            },
            Promise: Be,
            debug: {
              get: function () {
                return me;
              },
              set: function (e) {
                ye(e);
              },
            },
            derive: y,
            extend: c,
            props: h,
            override: _,
            Events: Lt,
            on: vn,
            liveQuery: ii,
            extendObservabilitySet: mr,
            getByKeyPath: A,
            setByKeyPath: T,
            delByKeyPath: O,
            shallowClone: S,
            deepClone: j,
            getObjectDiff: Cr,
            cmp: Nt,
            asap: k,
            minKey: xt,
            addons: [],
            connections: At,
            errnames: ee,
            dependencies: ei,
            cache: vr,
            semVer: wt,
            version: wt
              .split(".")
              .map(function (e) {
                return parseInt(e);
              })
              .reduce(function (e, t, n) {
                return e + t / Math.pow(10, 2 * n);
              }),
          }),
        ),
          (oi.maxKey = En(oi.dependencies.IDBKeyRange)),
          "undefined" !== typeof dispatchEvent &&
            "undefined" !== typeof addEventListener &&
            (vn(mn, function (e) {
              var t;
              si ||
                ((t = new CustomEvent(yn, { detail: e })),
                (si = !0),
                dispatchEvent(t),
                (si = !1));
            }),
            addEventListener(yn, function (e) {
              var t = e.detail;
              si || ai(t);
            })));
        var ui,
          si = !1,
          ci = function () {};
        function li(e) {
          return new Xt({ add: e });
        }
        function fi(e) {
          return new Xt({ remove: e });
        }
        function di(e, t) {
          return new Xt({ replacePrefix: [e, t] });
        }
        ("undefined" !== typeof BroadcastChannel &&
          ((ci = function () {
            ((ui = new BroadcastChannel(yn)),
              (ui.onmessage = function (e) {
                return e.data && ai(e.data);
              }));
          }),
          ci(),
          "function" === typeof ui.unref && ui.unref(),
          vn(mn, function (e) {
            si || ui.postMessage(e);
          })),
          "undefined" !== typeof addEventListener &&
            (addEventListener("pagehide", function (e) {
              if (!ti.disableBfCache && e.persisted) {
                (me && console.debug("Dexie: handling persisted pagehide"),
                  null === ui || void 0 === ui || ui.close());
                for (var t = 0, n = At; t < n.length; t++) {
                  var r = n[t];
                  r.close({ disableAutoOpen: !1 });
                }
              }
            }),
            addEventListener("pageshow", function (e) {
              !ti.disableBfCache &&
                e.persisted &&
                (me && console.debug("Dexie: handling persisted pageshow"),
                ci(),
                ai({ all: new sr(-1 / 0, [[]]) }));
            })),
          (Be.rejectionMapper = ie),
          ye(me));
      }).call(this, n(13));
    },
    428: function (e, t) {
      function n() {
        var e = {
          "align-content": !1,
          "align-items": !1,
          "align-self": !1,
          "alignment-adjust": !1,
          "alignment-baseline": !1,
          all: !1,
          "anchor-point": !1,
          animation: !1,
          "animation-delay": !1,
          "animation-direction": !1,
          "animation-duration": !1,
          "animation-fill-mode": !1,
          "animation-iteration-count": !1,
          "animation-name": !1,
          "animation-play-state": !1,
          "animation-timing-function": !1,
          azimuth: !1,
          "backface-visibility": !1,
          background: !0,
          "background-attachment": !0,
          "background-clip": !0,
          "background-color": !0,
          "background-image": !0,
          "background-origin": !0,
          "background-position": !0,
          "background-repeat": !0,
          "background-size": !0,
          "baseline-shift": !1,
          binding: !1,
          bleed: !1,
          "bookmark-label": !1,
          "bookmark-level": !1,
          "bookmark-state": !1,
          border: !0,
          "border-bottom": !0,
          "border-bottom-color": !0,
          "border-bottom-left-radius": !0,
          "border-bottom-right-radius": !0,
          "border-bottom-style": !0,
          "border-bottom-width": !0,
          "border-collapse": !0,
          "border-color": !0,
          "border-image": !0,
          "border-image-outset": !0,
          "border-image-repeat": !0,
          "border-image-slice": !0,
          "border-image-source": !0,
          "border-image-width": !0,
          "border-left": !0,
          "border-left-color": !0,
          "border-left-style": !0,
          "border-left-width": !0,
          "border-radius": !0,
          "border-right": !0,
          "border-right-color": !0,
          "border-right-style": !0,
          "border-right-width": !0,
          "border-spacing": !0,
          "border-style": !0,
          "border-top": !0,
          "border-top-color": !0,
          "border-top-left-radius": !0,
          "border-top-right-radius": !0,
          "border-top-style": !0,
          "border-top-width": !0,
          "border-width": !0,
          bottom: !1,
          "box-decoration-break": !0,
          "box-shadow": !0,
          "box-sizing": !0,
          "box-snap": !0,
          "box-suppress": !0,
          "break-after": !0,
          "break-before": !0,
          "break-inside": !0,
          "caption-side": !1,
          chains: !1,
          clear: !0,
          clip: !1,
          "clip-path": !1,
          "clip-rule": !1,
          color: !0,
          "color-interpolation-filters": !0,
          "column-count": !1,
          "column-fill": !1,
          "column-gap": !1,
          "column-rule": !1,
          "column-rule-color": !1,
          "column-rule-style": !1,
          "column-rule-width": !1,
          "column-span": !1,
          "column-width": !1,
          columns: !1,
          contain: !1,
          content: !1,
          "counter-increment": !1,
          "counter-reset": !1,
          "counter-set": !1,
          crop: !1,
          cue: !1,
          "cue-after": !1,
          "cue-before": !1,
          cursor: !1,
          direction: !1,
          display: !0,
          "display-inside": !0,
          "display-list": !0,
          "display-outside": !0,
          "dominant-baseline": !1,
          elevation: !1,
          "empty-cells": !1,
          filter: !1,
          flex: !1,
          "flex-basis": !1,
          "flex-direction": !1,
          "flex-flow": !1,
          "flex-grow": !1,
          "flex-shrink": !1,
          "flex-wrap": !1,
          float: !1,
          "float-offset": !1,
          "flood-color": !1,
          "flood-opacity": !1,
          "flow-from": !1,
          "flow-into": !1,
          font: !0,
          "font-family": !0,
          "font-feature-settings": !0,
          "font-kerning": !0,
          "font-language-override": !0,
          "font-size": !0,
          "font-size-adjust": !0,
          "font-stretch": !0,
          "font-style": !0,
          "font-synthesis": !0,
          "font-variant": !0,
          "font-variant-alternates": !0,
          "font-variant-caps": !0,
          "font-variant-east-asian": !0,
          "font-variant-ligatures": !0,
          "font-variant-numeric": !0,
          "font-variant-position": !0,
          "font-weight": !0,
          grid: !1,
          "grid-area": !1,
          "grid-auto-columns": !1,
          "grid-auto-flow": !1,
          "grid-auto-rows": !1,
          "grid-column": !1,
          "grid-column-end": !1,
          "grid-column-start": !1,
          "grid-row": !1,
          "grid-row-end": !1,
          "grid-row-start": !1,
          "grid-template": !1,
          "grid-template-areas": !1,
          "grid-template-columns": !1,
          "grid-template-rows": !1,
          "hanging-punctuation": !1,
          height: !0,
          hyphens: !1,
          icon: !1,
          "image-orientation": !1,
          "image-resolution": !1,
          "ime-mode": !1,
          "initial-letters": !1,
          "inline-box-align": !1,
          "justify-content": !1,
          "justify-items": !1,
          "justify-self": !1,
          left: !1,
          "letter-spacing": !0,
          "lighting-color": !0,
          "line-box-contain": !1,
          "line-break": !1,
          "line-grid": !1,
          "line-height": !1,
          "line-snap": !1,
          "line-stacking": !1,
          "line-stacking-ruby": !1,
          "line-stacking-shift": !1,
          "line-stacking-strategy": !1,
          "list-style": !0,
          "list-style-image": !0,
          "list-style-position": !0,
          "list-style-type": !0,
          margin: !0,
          "margin-bottom": !0,
          "margin-left": !0,
          "margin-right": !0,
          "margin-top": !0,
          "marker-offset": !1,
          "marker-side": !1,
          marks: !1,
          mask: !1,
          "mask-box": !1,
          "mask-box-outset": !1,
          "mask-box-repeat": !1,
          "mask-box-slice": !1,
          "mask-box-source": !1,
          "mask-box-width": !1,
          "mask-clip": !1,
          "mask-image": !1,
          "mask-origin": !1,
          "mask-position": !1,
          "mask-repeat": !1,
          "mask-size": !1,
          "mask-source-type": !1,
          "mask-type": !1,
          "max-height": !0,
          "max-lines": !1,
          "max-width": !0,
          "min-height": !0,
          "min-width": !0,
          "move-to": !1,
          "nav-down": !1,
          "nav-index": !1,
          "nav-left": !1,
          "nav-right": !1,
          "nav-up": !1,
          "object-fit": !1,
          "object-position": !1,
          opacity: !1,
          order: !1,
          orphans: !1,
          outline: !1,
          "outline-color": !1,
          "outline-offset": !1,
          "outline-style": !1,
          "outline-width": !1,
          overflow: !1,
          "overflow-wrap": !1,
          "overflow-x": !1,
          "overflow-y": !1,
          padding: !0,
          "padding-bottom": !0,
          "padding-left": !0,
          "padding-right": !0,
          "padding-top": !0,
          page: !1,
          "page-break-after": !1,
          "page-break-before": !1,
          "page-break-inside": !1,
          "page-policy": !1,
          pause: !1,
          "pause-after": !1,
          "pause-before": !1,
          perspective: !1,
          "perspective-origin": !1,
          pitch: !1,
          "pitch-range": !1,
          "play-during": !1,
          position: !1,
          "presentation-level": !1,
          quotes: !1,
          "region-fragment": !1,
          resize: !1,
          rest: !1,
          "rest-after": !1,
          "rest-before": !1,
          richness: !1,
          right: !1,
          rotation: !1,
          "rotation-point": !1,
          "ruby-align": !1,
          "ruby-merge": !1,
          "ruby-position": !1,
          "shape-image-threshold": !1,
          "shape-outside": !1,
          "shape-margin": !1,
          size: !1,
          speak: !1,
          "speak-as": !1,
          "speak-header": !1,
          "speak-numeral": !1,
          "speak-punctuation": !1,
          "speech-rate": !1,
          stress: !1,
          "string-set": !1,
          "tab-size": !1,
          "table-layout": !1,
          "text-align": !0,
          "text-align-last": !0,
          "text-combine-upright": !0,
          "text-decoration": !0,
          "text-decoration-color": !0,
          "text-decoration-line": !0,
          "text-decoration-skip": !0,
          "text-decoration-style": !0,
          "text-emphasis": !0,
          "text-emphasis-color": !0,
          "text-emphasis-position": !0,
          "text-emphasis-style": !0,
          "text-height": !0,
          "text-indent": !0,
          "text-justify": !0,
          "text-orientation": !0,
          "text-overflow": !0,
          "text-shadow": !0,
          "text-space-collapse": !0,
          "text-transform": !0,
          "text-underline-position": !0,
          "text-wrap": !0,
          top: !1,
          transform: !1,
          "transform-origin": !1,
          "transform-style": !1,
          transition: !1,
          "transition-delay": !1,
          "transition-duration": !1,
          "transition-property": !1,
          "transition-timing-function": !1,
          "unicode-bidi": !1,
          "vertical-align": !1,
          visibility: !1,
          "voice-balance": !1,
          "voice-duration": !1,
          "voice-family": !1,
          "voice-pitch": !1,
          "voice-range": !1,
          "voice-rate": !1,
          "voice-stress": !1,
          "voice-volume": !1,
          volume: !1,
          "white-space": !1,
          widows: !1,
          width: !0,
          "will-change": !1,
          "word-break": !0,
          "word-spacing": !0,
          "word-wrap": !0,
          "wrap-flow": !1,
          "wrap-through": !1,
          "writing-mode": !1,
          "z-index": !1,
        };
        return e;
      }
      function r(e, t, n) {}
      function i(e, t, n) {}
      var o = /javascript\s*\:/gim;
      function a(e, t) {
        return o.test(t) ? "" : t;
      }
      ((t.whiteList = n()),
        (t.getDefaultWhiteList = n),
        (t.onAttr = r),
        (t.onIgnoreAttr = i),
        (t.safeAttrValue = a));
    },
    429: function (e, t) {
      e.exports = {
        indexOf: function (e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        forEach: function (e, t, n) {
          var r, i;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
        },
        trim: function (e) {
          return String.prototype.trim
            ? e.trim()
            : e.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function (e) {
          return String.prototype.trimRight
            ? e.trimRight()
            : e.replace(/(\s*$)/g, "");
        },
      };
    },
    974: function (e, t, n) {
      var r = n(428),
        i = n(975);
      n(429);
      function o(e) {
        return void 0 === e || null === e;
      }
      function a(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function u(e) {
        ((e = a(e || {})),
          (e.whiteList = e.whiteList || r.whiteList),
          (e.onAttr = e.onAttr || r.onAttr),
          (e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr),
          (e.safeAttrValue = e.safeAttrValue || r.safeAttrValue),
          (this.options = e));
      }
      ((u.prototype.process = function (e) {
        if (((e = e || ""), (e = e.toString()), !e)) return "";
        var t = this,
          n = t.options,
          r = n.whiteList,
          a = n.onAttr,
          u = n.onIgnoreAttr,
          s = n.safeAttrValue,
          c = i(e, function (e, t, n, i, c) {
            var l = r[n],
              f = !1;
            if (
              (!0 === l
                ? (f = l)
                : "function" === typeof l
                  ? (f = l(i))
                  : l instanceof RegExp && (f = l.test(i)),
              !0 !== f && (f = !1),
              (i = s(n, i)),
              i)
            ) {
              var d = { position: t, sourcePosition: e, source: c, isWhite: f };
              if (f) {
                var h = a(n, i, d);
                return o(h) ? n + ":" + i : h;
              }
              h = u(n, i, d);
              return o(h) ? void 0 : h;
            }
          });
        return c;
      }),
        (e.exports = u));
    },
    975: function (e, t, n) {
      var r = n(429);
      function i(e, t) {
        ((e = r.trimRight(e)), ";" !== e[e.length - 1] && (e += ";"));
        var n = e.length,
          i = !1,
          o = 0,
          a = 0,
          u = "";
        function s() {
          if (!i) {
            var n = r.trim(e.slice(o, a)),
              s = n.indexOf(":");
            if (-1 !== s) {
              var c = r.trim(n.slice(0, s)),
                l = r.trim(n.slice(s + 1));
              if (c) {
                var f = t(o, u.length, c, l, n);
                f && (u += f + "; ");
              }
            }
          }
          o = a + 1;
        }
        for (; a < n; a++) {
          var c = e[a];
          if ("/" === c && "*" === e[a + 1]) {
            var l = e.indexOf("*/", a + 2);
            if (-1 === l) break;
            ((a = l + 1), (o = a + 1), (i = !1));
          } else
            "(" === c
              ? (i = !0)
              : ")" === c
                ? (i = !1)
                : ";" === c
                  ? i || s()
                  : "\n" === c && s();
        }
        return r.trim(u);
      }
      e.exports = i;
    },
  },
]);
