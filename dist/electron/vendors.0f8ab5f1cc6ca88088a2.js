(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [269],
  {
    2863: function (e, t, r) {
      (function (t, n, a) {
        var i = r(2830),
          s = r(7845),
          o = (e.exports = i.util = i.util || {});
        function c(e) {
          if (8 !== e && 16 !== e && 24 !== e && 32 !== e)
            throw new Error("Only 8, 16, 24, or 32 bits supported: " + e);
        }
        function u(e) {
          if (((this.data = ""), (this.read = 0), "string" === typeof e))
            this.data = e;
          else if (o.isArrayBuffer(e) || o.isArrayBufferView(e))
            if ("undefined" !== typeof a && e instanceof a)
              this.data = e.toString("binary");
            else {
              var t = new Uint8Array(e);
              try {
                this.data = String.fromCharCode.apply(null, t);
              } catch (n) {
                for (var r = 0; r < t.length; ++r) this.putByte(t[r]);
              }
            }
          else
            (e instanceof u ||
              ("object" === typeof e &&
                "string" === typeof e.data &&
                "number" === typeof e.read)) &&
              ((this.data = e.data), (this.read = e.read));
          this._constructedStringLength = 0;
        }
        ((function () {
          if ("undefined" !== typeof t && t.nextTick && !t.browser)
            return (
              (o.nextTick = t.nextTick),
              void ("function" === typeof setImmediate
                ? (o.setImmediate = setImmediate)
                : (o.setImmediate = o.nextTick))
            );
          if ("function" === typeof setImmediate)
            return (
              (o.setImmediate = function () {
                return setImmediate.apply(void 0, arguments);
              }),
              void (o.nextTick = function (e) {
                return setImmediate(e);
              })
            );
          if (
            ((o.setImmediate = function (e) {
              setTimeout(e, 0);
            }),
            "undefined" !== typeof window &&
              "function" === typeof window.postMessage)
          ) {
            var e = "forge.setImmediate",
              r = [];
            function n(t) {
              if (t.source === window && t.data === e) {
                t.stopPropagation();
                var n = r.slice();
                ((r.length = 0),
                  n.forEach(function (e) {
                    e();
                  }));
              }
            }
            ((o.setImmediate = function (t) {
              (r.push(t), 1 === r.length && window.postMessage(e, "*"));
            }),
              window.addEventListener("message", n, !0));
          }
          if ("undefined" !== typeof MutationObserver) {
            var a = Date.now(),
              i = !0,
              s = document.createElement("div");
            r = [];
            new MutationObserver(function () {
              var e = r.slice();
              ((r.length = 0),
                e.forEach(function (e) {
                  e();
                }));
            }).observe(s, { attributes: !0 });
            var c = o.setImmediate;
            o.setImmediate = function (e) {
              Date.now() - a > 15
                ? ((a = Date.now()), c(e))
                : (r.push(e), 1 === r.length && s.setAttribute("a", (i = !i)));
            };
          }
          o.nextTick = o.setImmediate;
        })(),
          (o.isNodejs =
            "undefined" !== typeof t && t.versions && t.versions.node),
          (o.globalScope = (function () {
            return o.isNodejs ? n : "undefined" === typeof self ? window : self;
          })()),
          (o.isArray =
            Array.isArray ||
            function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }),
          (o.isArrayBuffer = function (e) {
            return (
              "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer
            );
          }),
          (o.isArrayBufferView = function (e) {
            return e && o.isArrayBuffer(e.buffer) && void 0 !== e.byteLength;
          }),
          (o.ByteBuffer = u),
          (o.ByteStringBuffer = u));
        var l = 4096;
        function f(e, t) {
          ((t = t || {}),
            (this.read = t.readOffset || 0),
            (this.growSize = t.growSize || 1024));
          var r = o.isArrayBuffer(e),
            n = o.isArrayBufferView(e);
          if (r || n)
            return (
              (this.data = r
                ? new DataView(e)
                : new DataView(e.buffer, e.byteOffset, e.byteLength)),
              void (this.write =
                "writeOffset" in t ? t.writeOffset : this.data.byteLength)
            );
          ((this.data = new DataView(new ArrayBuffer(0))),
            (this.write = 0),
            null !== e && void 0 !== e && this.putBytes(e),
            "writeOffset" in t && (this.write = t.writeOffset));
        }
        ((o.ByteStringBuffer.prototype._optimizeConstructedString = function (
          e,
        ) {
          ((this._constructedStringLength += e),
            this._constructedStringLength > l &&
              (this.data.substr(0, 1), (this._constructedStringLength = 0)));
        }),
          (o.ByteStringBuffer.prototype.length = function () {
            return this.data.length - this.read;
          }),
          (o.ByteStringBuffer.prototype.isEmpty = function () {
            return this.length() <= 0;
          }),
          (o.ByteStringBuffer.prototype.putByte = function (e) {
            return this.putBytes(String.fromCharCode(e));
          }),
          (o.ByteStringBuffer.prototype.fillWithByte = function (e, t) {
            e = String.fromCharCode(e);
            var r = this.data;
            while (t > 0) (1 & t && (r += e), (t >>>= 1), t > 0 && (e += e));
            return ((this.data = r), this._optimizeConstructedString(t), this);
          }),
          (o.ByteStringBuffer.prototype.putBytes = function (e) {
            return (
              (this.data += e),
              this._optimizeConstructedString(e.length),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.putString = function (e) {
            return this.putBytes(o.encodeUtf8(e));
          }),
          (o.ByteStringBuffer.prototype.putInt16 = function (e) {
            return this.putBytes(
              String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode(255 & e),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt24 = function (e) {
            return this.putBytes(
              String.fromCharCode((e >> 16) & 255) +
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode(255 & e),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt32 = function (e) {
            return this.putBytes(
              String.fromCharCode((e >> 24) & 255) +
                String.fromCharCode((e >> 16) & 255) +
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode(255 & e),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt16Le = function (e) {
            return this.putBytes(
              String.fromCharCode(255 & e) +
                String.fromCharCode((e >> 8) & 255),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt24Le = function (e) {
            return this.putBytes(
              String.fromCharCode(255 & e) +
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode((e >> 16) & 255),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt32Le = function (e) {
            return this.putBytes(
              String.fromCharCode(255 & e) +
                String.fromCharCode((e >> 8) & 255) +
                String.fromCharCode((e >> 16) & 255) +
                String.fromCharCode((e >> 24) & 255),
            );
          }),
          (o.ByteStringBuffer.prototype.putInt = function (e, t) {
            c(t);
            var r = "";
            do {
              ((t -= 8), (r += String.fromCharCode((e >> t) & 255)));
            } while (t > 0);
            return this.putBytes(r);
          }),
          (o.ByteStringBuffer.prototype.putSignedInt = function (e, t) {
            return (e < 0 && (e += 2 << (t - 1)), this.putInt(e, t));
          }),
          (o.ByteStringBuffer.prototype.putBuffer = function (e) {
            return this.putBytes(e.getBytes());
          }),
          (o.ByteStringBuffer.prototype.getByte = function () {
            return this.data.charCodeAt(this.read++);
          }),
          (o.ByteStringBuffer.prototype.getInt16 = function () {
            var e =
              (this.data.charCodeAt(this.read) << 8) ^
              this.data.charCodeAt(this.read + 1);
            return ((this.read += 2), e);
          }),
          (o.ByteStringBuffer.prototype.getInt24 = function () {
            var e =
              (this.data.charCodeAt(this.read) << 16) ^
              (this.data.charCodeAt(this.read + 1) << 8) ^
              this.data.charCodeAt(this.read + 2);
            return ((this.read += 3), e);
          }),
          (o.ByteStringBuffer.prototype.getInt32 = function () {
            var e =
              (this.data.charCodeAt(this.read) << 24) ^
              (this.data.charCodeAt(this.read + 1) << 16) ^
              (this.data.charCodeAt(this.read + 2) << 8) ^
              this.data.charCodeAt(this.read + 3);
            return ((this.read += 4), e);
          }),
          (o.ByteStringBuffer.prototype.getInt16Le = function () {
            var e =
              this.data.charCodeAt(this.read) ^
              (this.data.charCodeAt(this.read + 1) << 8);
            return ((this.read += 2), e);
          }),
          (o.ByteStringBuffer.prototype.getInt24Le = function () {
            var e =
              this.data.charCodeAt(this.read) ^
              (this.data.charCodeAt(this.read + 1) << 8) ^
              (this.data.charCodeAt(this.read + 2) << 16);
            return ((this.read += 3), e);
          }),
          (o.ByteStringBuffer.prototype.getInt32Le = function () {
            var e =
              this.data.charCodeAt(this.read) ^
              (this.data.charCodeAt(this.read + 1) << 8) ^
              (this.data.charCodeAt(this.read + 2) << 16) ^
              (this.data.charCodeAt(this.read + 3) << 24);
            return ((this.read += 4), e);
          }),
          (o.ByteStringBuffer.prototype.getInt = function (e) {
            c(e);
            var t = 0;
            do {
              ((t = (t << 8) + this.data.charCodeAt(this.read++)), (e -= 8));
            } while (e > 0);
            return t;
          }),
          (o.ByteStringBuffer.prototype.getSignedInt = function (e) {
            var t = this.getInt(e),
              r = 2 << (e - 2);
            return (t >= r && (t -= r << 1), t);
          }),
          (o.ByteStringBuffer.prototype.getBytes = function (e) {
            var t;
            return (
              e
                ? ((e = Math.min(this.length(), e)),
                  (t = this.data.slice(this.read, this.read + e)),
                  (this.read += e))
                : 0 === e
                  ? (t = "")
                  : ((t =
                      0 === this.read ? this.data : this.data.slice(this.read)),
                    this.clear()),
              t
            );
          }),
          (o.ByteStringBuffer.prototype.bytes = function (e) {
            return "undefined" === typeof e
              ? this.data.slice(this.read)
              : this.data.slice(this.read, this.read + e);
          }),
          (o.ByteStringBuffer.prototype.at = function (e) {
            return this.data.charCodeAt(this.read + e);
          }),
          (o.ByteStringBuffer.prototype.setAt = function (e, t) {
            return (
              (this.data =
                this.data.substr(0, this.read + e) +
                String.fromCharCode(t) +
                this.data.substr(this.read + e + 1)),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.last = function () {
            return this.data.charCodeAt(this.data.length - 1);
          }),
          (o.ByteStringBuffer.prototype.copy = function () {
            var e = o.createBuffer(this.data);
            return ((e.read = this.read), e);
          }),
          (o.ByteStringBuffer.prototype.compact = function () {
            return (
              this.read > 0 &&
                ((this.data = this.data.slice(this.read)), (this.read = 0)),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.clear = function () {
            return ((this.data = ""), (this.read = 0), this);
          }),
          (o.ByteStringBuffer.prototype.truncate = function (e) {
            var t = Math.max(0, this.length() - e);
            return (
              (this.data = this.data.substr(this.read, t)),
              (this.read = 0),
              this
            );
          }),
          (o.ByteStringBuffer.prototype.toHex = function () {
            for (var e = "", t = this.read; t < this.data.length; ++t) {
              var r = this.data.charCodeAt(t);
              (r < 16 && (e += "0"), (e += r.toString(16)));
            }
            return e;
          }),
          (o.ByteStringBuffer.prototype.toString = function () {
            return o.decodeUtf8(this.bytes());
          }),
          (o.DataBuffer = f),
          (o.DataBuffer.prototype.length = function () {
            return this.write - this.read;
          }),
          (o.DataBuffer.prototype.isEmpty = function () {
            return this.length() <= 0;
          }),
          (o.DataBuffer.prototype.accommodate = function (e, t) {
            if (this.length() >= e) return this;
            t = Math.max(t || this.growSize, e);
            var r = new Uint8Array(
                this.data.buffer,
                this.data.byteOffset,
                this.data.byteLength,
              ),
              n = new Uint8Array(this.length() + t);
            return (n.set(r), (this.data = new DataView(n.buffer)), this);
          }),
          (o.DataBuffer.prototype.putByte = function (e) {
            return (
              this.accommodate(1),
              this.data.setUint8(this.write++, e),
              this
            );
          }),
          (o.DataBuffer.prototype.fillWithByte = function (e, t) {
            this.accommodate(t);
            for (var r = 0; r < t; ++r) this.data.setUint8(e);
            return this;
          }),
          (o.DataBuffer.prototype.putBytes = function (e, t) {
            if (o.isArrayBufferView(e)) {
              var r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
                n = r.byteLength - r.byteOffset;
              this.accommodate(n);
              var a = new Uint8Array(this.data.buffer, this.write);
              return (a.set(r), (this.write += n), this);
            }
            if (o.isArrayBuffer(e)) {
              r = new Uint8Array(e);
              this.accommodate(r.byteLength);
              a = new Uint8Array(this.data.buffer);
              return (a.set(r, this.write), (this.write += r.byteLength), this);
            }
            if (
              e instanceof o.DataBuffer ||
              ("object" === typeof e &&
                "number" === typeof e.read &&
                "number" === typeof e.write &&
                o.isArrayBufferView(e.data))
            ) {
              r = new Uint8Array(e.data.byteLength, e.read, e.length());
              this.accommodate(r.byteLength);
              a = new Uint8Array(e.data.byteLength, this.write);
              return (a.set(r), (this.write += r.byteLength), this);
            }
            if (
              (e instanceof o.ByteStringBuffer &&
                ((e = e.data), (t = "binary")),
              (t = t || "binary"),
              "string" === typeof e)
            ) {
              var i;
              if ("hex" === t)
                return (
                  this.accommodate(Math.ceil(e.length / 2)),
                  (i = new Uint8Array(this.data.buffer, this.write)),
                  (this.write += o.binary.hex.decode(e, i, this.write)),
                  this
                );
              if ("base64" === t)
                return (
                  this.accommodate(3 * Math.ceil(e.length / 4)),
                  (i = new Uint8Array(this.data.buffer, this.write)),
                  (this.write += o.binary.base64.decode(e, i, this.write)),
                  this
                );
              if (
                ("utf8" === t && ((e = o.encodeUtf8(e)), (t = "binary")),
                "binary" === t || "raw" === t)
              )
                return (
                  this.accommodate(e.length),
                  (i = new Uint8Array(this.data.buffer, this.write)),
                  (this.write += o.binary.raw.decode(i)),
                  this
                );
              if ("utf16" === t)
                return (
                  this.accommodate(2 * e.length),
                  (i = new Uint16Array(this.data.buffer, this.write)),
                  (this.write += o.text.utf16.encode(i)),
                  this
                );
              throw new Error("Invalid encoding: " + t);
            }
            throw Error("Invalid parameter: " + e);
          }),
          (o.DataBuffer.prototype.putBuffer = function (e) {
            return (this.putBytes(e), e.clear(), this);
          }),
          (o.DataBuffer.prototype.putString = function (e) {
            return this.putBytes(e, "utf16");
          }),
          (o.DataBuffer.prototype.putInt16 = function (e) {
            return (
              this.accommodate(2),
              this.data.setInt16(this.write, e),
              (this.write += 2),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt24 = function (e) {
            return (
              this.accommodate(3),
              this.data.setInt16(this.write, (e >> 8) & 65535),
              this.data.setInt8(this.write, (e >> 16) & 255),
              (this.write += 3),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt32 = function (e) {
            return (
              this.accommodate(4),
              this.data.setInt32(this.write, e),
              (this.write += 4),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt16Le = function (e) {
            return (
              this.accommodate(2),
              this.data.setInt16(this.write, e, !0),
              (this.write += 2),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt24Le = function (e) {
            return (
              this.accommodate(3),
              this.data.setInt8(this.write, (e >> 16) & 255),
              this.data.setInt16(this.write, (e >> 8) & 65535, !0),
              (this.write += 3),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt32Le = function (e) {
            return (
              this.accommodate(4),
              this.data.setInt32(this.write, e, !0),
              (this.write += 4),
              this
            );
          }),
          (o.DataBuffer.prototype.putInt = function (e, t) {
            (c(t), this.accommodate(t / 8));
            do {
              ((t -= 8), this.data.setInt8(this.write++, (e >> t) & 255));
            } while (t > 0);
            return this;
          }),
          (o.DataBuffer.prototype.putSignedInt = function (e, t) {
            return (
              c(t),
              this.accommodate(t / 8),
              e < 0 && (e += 2 << (t - 1)),
              this.putInt(e, t)
            );
          }),
          (o.DataBuffer.prototype.getByte = function () {
            return this.data.getInt8(this.read++);
          }),
          (o.DataBuffer.prototype.getInt16 = function () {
            var e = this.data.getInt16(this.read);
            return ((this.read += 2), e);
          }),
          (o.DataBuffer.prototype.getInt24 = function () {
            var e =
              (this.data.getInt16(this.read) << 8) ^
              this.data.getInt8(this.read + 2);
            return ((this.read += 3), e);
          }),
          (o.DataBuffer.prototype.getInt32 = function () {
            var e = this.data.getInt32(this.read);
            return ((this.read += 4), e);
          }),
          (o.DataBuffer.prototype.getInt16Le = function () {
            var e = this.data.getInt16(this.read, !0);
            return ((this.read += 2), e);
          }),
          (o.DataBuffer.prototype.getInt24Le = function () {
            var e =
              this.data.getInt8(this.read) ^
              (this.data.getInt16(this.read + 1, !0) << 8);
            return ((this.read += 3), e);
          }),
          (o.DataBuffer.prototype.getInt32Le = function () {
            var e = this.data.getInt32(this.read, !0);
            return ((this.read += 4), e);
          }),
          (o.DataBuffer.prototype.getInt = function (e) {
            c(e);
            var t = 0;
            do {
              ((t = (t << 8) + this.data.getInt8(this.read++)), (e -= 8));
            } while (e > 0);
            return t;
          }),
          (o.DataBuffer.prototype.getSignedInt = function (e) {
            var t = this.getInt(e),
              r = 2 << (e - 2);
            return (t >= r && (t -= r << 1), t);
          }),
          (o.DataBuffer.prototype.getBytes = function (e) {
            var t;
            return (
              e
                ? ((e = Math.min(this.length(), e)),
                  (t = this.data.slice(this.read, this.read + e)),
                  (this.read += e))
                : 0 === e
                  ? (t = "")
                  : ((t =
                      0 === this.read ? this.data : this.data.slice(this.read)),
                    this.clear()),
              t
            );
          }),
          (o.DataBuffer.prototype.bytes = function (e) {
            return "undefined" === typeof e
              ? this.data.slice(this.read)
              : this.data.slice(this.read, this.read + e);
          }),
          (o.DataBuffer.prototype.at = function (e) {
            return this.data.getUint8(this.read + e);
          }),
          (o.DataBuffer.prototype.setAt = function (e, t) {
            return (this.data.setUint8(e, t), this);
          }),
          (o.DataBuffer.prototype.last = function () {
            return this.data.getUint8(this.write - 1);
          }),
          (o.DataBuffer.prototype.copy = function () {
            return new o.DataBuffer(this);
          }),
          (o.DataBuffer.prototype.compact = function () {
            if (this.read > 0) {
              var e = new Uint8Array(this.data.buffer, this.read),
                t = new Uint8Array(e.byteLength);
              (t.set(e),
                (this.data = new DataView(t)),
                (this.write -= this.read),
                (this.read = 0));
            }
            return this;
          }),
          (o.DataBuffer.prototype.clear = function () {
            return (
              (this.data = new DataView(new ArrayBuffer(0))),
              (this.read = this.write = 0),
              this
            );
          }),
          (o.DataBuffer.prototype.truncate = function (e) {
            return (
              (this.write = Math.max(0, this.length() - e)),
              (this.read = Math.min(this.read, this.write)),
              this
            );
          }),
          (o.DataBuffer.prototype.toHex = function () {
            for (var e = "", t = this.read; t < this.data.byteLength; ++t) {
              var r = this.data.getUint8(t);
              (r < 16 && (e += "0"), (e += r.toString(16)));
            }
            return e;
          }),
          (o.DataBuffer.prototype.toString = function (e) {
            var t = new Uint8Array(this.data, this.read, this.length());
            if (((e = e || "utf8"), "binary" === e || "raw" === e))
              return o.binary.raw.encode(t);
            if ("hex" === e) return o.binary.hex.encode(t);
            if ("base64" === e) return o.binary.base64.encode(t);
            if ("utf8" === e) return o.text.utf8.decode(t);
            if ("utf16" === e) return o.text.utf16.decode(t);
            throw new Error("Invalid encoding: " + e);
          }),
          (o.createBuffer = function (e, t) {
            return (
              (t = t || "raw"),
              void 0 !== e && "utf8" === t && (e = o.encodeUtf8(e)),
              new o.ByteBuffer(e)
            );
          }),
          (o.fillString = function (e, t) {
            var r = "";
            while (t > 0) (1 & t && (r += e), (t >>>= 1), t > 0 && (e += e));
            return r;
          }),
          (o.xorBytes = function (e, t, r) {
            for (var n = "", a = "", i = "", s = 0, o = 0; r > 0; --r, ++s)
              ((a = e.charCodeAt(s) ^ t.charCodeAt(s)),
                o >= 10 && ((n += i), (i = ""), (o = 0)),
                (i += String.fromCharCode(a)),
                ++o);
            return ((n += i), n);
          }),
          (o.hexToBytes = function (e) {
            var t = "",
              r = 0;
            for (
              !0 & e.length &&
              ((r = 1), (t += String.fromCharCode(parseInt(e[0], 16))));
              r < e.length;
              r += 2
            )
              t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
            return t;
          }),
          (o.bytesToHex = function (e) {
            return o.createBuffer(e).toHex();
          }),
          (o.int32ToBytes = function (e) {
            return (
              String.fromCharCode((e >> 24) & 255) +
              String.fromCharCode((e >> 16) & 255) +
              String.fromCharCode((e >> 8) & 255) +
              String.fromCharCode(255 & e)
            );
          }));
        var p =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          d = [
            62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1,
            -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
            -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
          ],
          h = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
        ((o.encode64 = function (e, t) {
          var r,
            n,
            a,
            i = "",
            s = "",
            o = 0;
          while (o < e.length)
            ((r = e.charCodeAt(o++)),
              (n = e.charCodeAt(o++)),
              (a = e.charCodeAt(o++)),
              (i += p.charAt(r >> 2)),
              (i += p.charAt(((3 & r) << 4) | (n >> 4))),
              isNaN(n)
                ? (i += "==")
                : ((i += p.charAt(((15 & n) << 2) | (a >> 6))),
                  (i += isNaN(a) ? "=" : p.charAt(63 & a))),
              t &&
                i.length > t &&
                ((s += i.substr(0, t) + "\r\n"), (i = i.substr(t))));
          return ((s += i), s);
        }),
          (o.decode64 = function (e) {
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var t,
              r,
              n,
              a,
              i = "",
              s = 0;
            while (s < e.length)
              ((t = d[e.charCodeAt(s++) - 43]),
                (r = d[e.charCodeAt(s++) - 43]),
                (n = d[e.charCodeAt(s++) - 43]),
                (a = d[e.charCodeAt(s++) - 43]),
                (i += String.fromCharCode((t << 2) | (r >> 4))),
                64 !== n &&
                  ((i += String.fromCharCode(((15 & r) << 4) | (n >> 2))),
                  64 !== a && (i += String.fromCharCode(((3 & n) << 6) | a))));
            return i;
          }),
          (o.encodeUtf8 = function (e) {
            return unescape(encodeURIComponent(e));
          }),
          (o.decodeUtf8 = function (e) {
            return decodeURIComponent(escape(e));
          }),
          (o.binary = {
            raw: {},
            hex: {},
            base64: {},
            base58: {},
            baseN: { encode: s.encode, decode: s.decode },
          }),
          (o.binary.raw.encode = function (e) {
            return String.fromCharCode.apply(null, e);
          }),
          (o.binary.raw.decode = function (e, t, r) {
            var n = t;
            (n || (n = new Uint8Array(e.length)), (r = r || 0));
            for (var a = r, i = 0; i < e.length; ++i) n[a++] = e.charCodeAt(i);
            return t ? a - r : n;
          }),
          (o.binary.hex.encode = o.bytesToHex),
          (o.binary.hex.decode = function (e, t, r) {
            var n = t;
            (n || (n = new Uint8Array(Math.ceil(e.length / 2))), (r = r || 0));
            var a = 0,
              i = r;
            for (
              1 & e.length && ((a = 1), (n[i++] = parseInt(e[0], 16)));
              a < e.length;
              a += 2
            )
              n[i++] = parseInt(e.substr(a, 2), 16);
            return t ? i - r : n;
          }),
          (o.binary.base64.encode = function (e, t) {
            var r,
              n,
              a,
              i = "",
              s = "",
              o = 0;
            while (o < e.byteLength)
              ((r = e[o++]),
                (n = e[o++]),
                (a = e[o++]),
                (i += p.charAt(r >> 2)),
                (i += p.charAt(((3 & r) << 4) | (n >> 4))),
                isNaN(n)
                  ? (i += "==")
                  : ((i += p.charAt(((15 & n) << 2) | (a >> 6))),
                    (i += isNaN(a) ? "=" : p.charAt(63 & a))),
                t &&
                  i.length > t &&
                  ((s += i.substr(0, t) + "\r\n"), (i = i.substr(t))));
            return ((s += i), s);
          }),
          (o.binary.base64.decode = function (e, t, r) {
            var n,
              a,
              i,
              s,
              o = t;
            (o || (o = new Uint8Array(3 * Math.ceil(e.length / 4))),
              (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "")),
              (r = r || 0));
            var c = 0,
              u = r;
            while (c < e.length)
              ((n = d[e.charCodeAt(c++) - 43]),
                (a = d[e.charCodeAt(c++) - 43]),
                (i = d[e.charCodeAt(c++) - 43]),
                (s = d[e.charCodeAt(c++) - 43]),
                (o[u++] = (n << 2) | (a >> 4)),
                64 !== i &&
                  ((o[u++] = ((15 & a) << 4) | (i >> 2)),
                  64 !== s && (o[u++] = ((3 & i) << 6) | s)));
            return t ? u - r : o.subarray(0, u);
          }),
          (o.binary.base58.encode = function (e, t) {
            return o.binary.baseN.encode(e, h, t);
          }),
          (o.binary.base58.decode = function (e, t) {
            return o.binary.baseN.decode(e, h, t);
          }),
          (o.text = { utf8: {}, utf16: {} }),
          (o.text.utf8.encode = function (e, t, r) {
            e = o.encodeUtf8(e);
            var n = t;
            (n || (n = new Uint8Array(e.length)), (r = r || 0));
            for (var a = r, i = 0; i < e.length; ++i) n[a++] = e.charCodeAt(i);
            return t ? a - r : n;
          }),
          (o.text.utf8.decode = function (e) {
            return o.decodeUtf8(String.fromCharCode.apply(null, e));
          }),
          (o.text.utf16.encode = function (e, t, r) {
            var n = t;
            n || (n = new Uint8Array(2 * e.length));
            var a = new Uint16Array(n.buffer);
            r = r || 0;
            for (var i = r, s = r, o = 0; o < e.length; ++o)
              ((a[s++] = e.charCodeAt(o)), (i += 2));
            return t ? i - r : n;
          }),
          (o.text.utf16.decode = function (e) {
            return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
          }),
          (o.deflate = function (e, t, r) {
            if (((t = o.decode64(e.deflate(o.encode64(t)).rval)), r)) {
              var n = 2,
                a = t.charCodeAt(1);
              (32 & a && (n = 6), (t = t.substring(n, t.length - 4)));
            }
            return t;
          }),
          (o.inflate = function (e, t, r) {
            var n = e.inflate(o.encode64(t)).rval;
            return null === n ? null : o.decode64(n);
          }));
        var y = function (e, t, r) {
            if (!e) throw new Error("WebStorage not available.");
            var n;
            if (
              (null === r
                ? (n = e.removeItem(t))
                : ((r = o.encode64(JSON.stringify(r))), (n = e.setItem(t, r))),
              "undefined" !== typeof n && !0 !== n.rval)
            ) {
              var a = new Error(n.error.message);
              throw ((a.id = n.error.id), (a.name = n.error.name), a);
            }
          },
          g = function (e, t) {
            if (!e) throw new Error("WebStorage not available.");
            var r = e.getItem(t);
            if (e.init)
              if (null === r.rval) {
                if (r.error) {
                  var n = new Error(r.error.message);
                  throw ((n.id = r.error.id), (n.name = r.error.name), n);
                }
                r = null;
              } else r = r.rval;
            return (null !== r && (r = JSON.parse(o.decode64(r))), r);
          },
          C = function (e, t, r, n) {
            var a = g(e, t);
            (null === a && (a = {}), (a[r] = n), y(e, t, a));
          },
          m = function (e, t, r) {
            var n = g(e, t);
            return (null !== n && (n = r in n ? n[r] : null), n);
          },
          v = function (e, t, r) {
            var n = g(e, t);
            if (null !== n && r in n) {
              delete n[r];
              var a = !0;
              for (var i in n) {
                a = !1;
                break;
              }
              (a && (n = null), y(e, t, n));
            }
          },
          E = function (e, t) {
            y(e, t, null);
          },
          S = function (e, t, r) {
            var n,
              a = null;
            "undefined" === typeof r && (r = ["web", "flash"]);
            var i = !1,
              s = null;
            for (var o in r) {
              n = r[o];
              try {
                if ("flash" === n || "both" === n) {
                  if (null === t[0])
                    throw new Error("Flash local storage not available.");
                  ((a = e.apply(this, t)), (i = "flash" === n));
                }
                ("web" !== n && "both" !== n) ||
                  ((t[0] = localStorage), (a = e.apply(this, t)), (i = !0));
              } catch (c) {
                s = c;
              }
              if (i) break;
            }
            if (!i) throw s;
            return a;
          };
        ((o.setItem = function (e, t, r, n, a) {
          S(C, arguments, a);
        }),
          (o.getItem = function (e, t, r, n) {
            return S(m, arguments, n);
          }),
          (o.removeItem = function (e, t, r, n) {
            S(v, arguments, n);
          }),
          (o.clearItems = function (e, t, r) {
            S(E, arguments, r);
          }),
          (o.isEmpty = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          }),
          (o.format = function (e) {
            var t,
              r,
              n = /%./g,
              a = 0,
              i = [],
              s = 0;
            while ((t = n.exec(e))) {
              ((r = e.substring(s, n.lastIndex - 2)),
                r.length > 0 && i.push(r),
                (s = n.lastIndex));
              var o = t[0][1];
              switch (o) {
                case "s":
                case "o":
                  a < arguments.length
                    ? i.push(arguments[1 + a++])
                    : i.push("<?>");
                  break;
                case "%":
                  i.push("%");
                  break;
                default:
                  i.push("<%" + o + "?>");
              }
            }
            return (i.push(e.substring(s)), i.join(""));
          }),
          (o.formatNumber = function (e, t, r, n) {
            var a = e,
              i = isNaN((t = Math.abs(t))) ? 2 : t,
              s = void 0 === r ? "," : r,
              o = void 0 === n ? "." : n,
              c = a < 0 ? "-" : "",
              u = parseInt((a = Math.abs(+a || 0).toFixed(i)), 10) + "",
              l = u.length > 3 ? u.length % 3 : 0;
            return (
              c +
              (l ? u.substr(0, l) + o : "") +
              u.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + o) +
              (i
                ? s +
                  Math.abs(a - u)
                    .toFixed(i)
                    .slice(2)
                : "")
            );
          }),
          (o.formatSize = function (e) {
            return (
              (e =
                e >= 1073741824
                  ? o.formatNumber(e / 1073741824, 2, ".", "") + " GiB"
                  : e >= 1048576
                    ? o.formatNumber(e / 1048576, 2, ".", "") + " MiB"
                    : e >= 1024
                      ? o.formatNumber(e / 1024, 0) + " KiB"
                      : o.formatNumber(e, 0) + " bytes"),
              e
            );
          }),
          (o.bytesFromIP = function (e) {
            return -1 !== e.indexOf(".")
              ? o.bytesFromIPv4(e)
              : -1 !== e.indexOf(":")
                ? o.bytesFromIPv6(e)
                : null;
          }),
          (o.bytesFromIPv4 = function (e) {
            if (((e = e.split(".")), 4 !== e.length)) return null;
            for (var t = o.createBuffer(), r = 0; r < e.length; ++r) {
              var n = parseInt(e[r], 10);
              if (isNaN(n)) return null;
              t.putByte(n);
            }
            return t.getBytes();
          }),
          (o.bytesFromIPv6 = function (e) {
            var t = 0;
            e = e.split(":").filter(function (e) {
              return (0 === e.length && ++t, !0);
            });
            for (
              var r = 2 * (8 - e.length + t), n = o.createBuffer(), a = 0;
              a < 8;
              ++a
            )
              if (e[a] && 0 !== e[a].length) {
                var i = o.hexToBytes(e[a]);
                (i.length < 2 && n.putByte(0), n.putBytes(i));
              } else (n.fillWithByte(0, r), (r = 0));
            return n.getBytes();
          }),
          (o.bytesToIP = function (e) {
            return 4 === e.length
              ? o.bytesToIPv4(e)
              : 16 === e.length
                ? o.bytesToIPv6(e)
                : null;
          }),
          (o.bytesToIPv4 = function (e) {
            if (4 !== e.length) return null;
            for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
            return t.join(".");
          }),
          (o.bytesToIPv6 = function (e) {
            if (16 !== e.length) return null;
            for (var t = [], r = [], n = 0, a = 0; a < e.length; a += 2) {
              var i = o.bytesToHex(e[a] + e[a + 1]);
              while ("0" === i[0] && "0" !== i) i = i.substr(1);
              if ("0" === i) {
                var s = r[r.length - 1],
                  c = t.length;
                s && c === s.end + 1
                  ? ((s.end = c),
                    s.end - s.start > r[n].end - r[n].start &&
                      (n = r.length - 1))
                  : r.push({ start: c, end: c });
              }
              t.push(i);
            }
            if (r.length > 0) {
              var u = r[n];
              u.end - u.start > 0 &&
                (t.splice(u.start, u.end - u.start + 1, ""),
                0 === u.start && t.unshift(""),
                7 === u.end && t.push(""));
            }
            return t.join(":");
          }),
          (o.estimateCores = function (e, t) {
            if (
              ("function" === typeof e && ((t = e), (e = {})),
              (e = e || {}),
              "cores" in o && !e.update)
            )
              return t(null, o.cores);
            if (
              "undefined" !== typeof navigator &&
              "hardwareConcurrency" in navigator &&
              navigator.hardwareConcurrency > 0
            )
              return (
                (o.cores = navigator.hardwareConcurrency),
                t(null, o.cores)
              );
            if ("undefined" === typeof Worker)
              return ((o.cores = 1), t(null, o.cores));
            if ("undefined" === typeof Blob)
              return ((o.cores = 2), t(null, o.cores));
            var r = URL.createObjectURL(
              new Blob(
                [
                  "(",
                  function () {
                    self.addEventListener("message", function (e) {
                      var t = Date.now(),
                        r = t + 4;
                      while (Date.now() < r);
                      self.postMessage({ st: t, et: r });
                    });
                  }.toString(),
                  ")()",
                ],
                { type: "application/javascript" },
              ),
            );
            function n(e, s, c) {
              if (0 === s) {
                var u = Math.floor(
                  e.reduce(function (e, t) {
                    return e + t;
                  }, 0) / e.length,
                );
                return (
                  (o.cores = Math.max(1, u)),
                  URL.revokeObjectURL(r),
                  t(null, o.cores)
                );
              }
              a(c, function (t, r) {
                (e.push(i(c, r)), n(e, s - 1, c));
              });
            }
            function a(e, t) {
              for (var n = [], a = [], i = 0; i < e; ++i) {
                var s = new Worker(r);
                (s.addEventListener("message", function (r) {
                  if ((a.push(r.data), a.length === e)) {
                    for (var i = 0; i < e; ++i) n[i].terminate();
                    t(null, a);
                  }
                }),
                  n.push(s));
              }
              for (i = 0; i < e; ++i) n[i].postMessage(i);
            }
            function i(e, t) {
              for (var r = [], n = 0; n < e; ++n)
                for (var a = t[n], i = (r[n] = []), s = 0; s < e; ++s)
                  if (n !== s) {
                    var o = t[s];
                    ((a.st > o.st && a.st < o.et) ||
                      (o.st > a.st && o.st < a.et)) &&
                      i.push(s);
                  }
              return r.reduce(function (e, t) {
                return Math.max(e, t.length);
              }, 0);
            }
            n([], 5, 16);
          }));
      }).call(this, r(18), r(13), r(2).Buffer);
    },
    3294: function (e, t, r) {
      var n = r(2830);
      (r(3659),
        r(6069),
        r(6070),
        r(2863),
        (function () {
          n.random && n.random.getBytes
            ? (e.exports = n.random)
            : (function (t) {
                var r = {},
                  a = new Array(4),
                  i = n.util.createBuffer();
                function s() {
                  var e = n.prng.create(r);
                  return (
                    (e.getBytes = function (t, r) {
                      return e.generate(t, r);
                    }),
                    (e.getBytesSync = function (t) {
                      return e.generate(t);
                    }),
                    e
                  );
                }
                ((r.formatKey = function (e) {
                  var t = n.util.createBuffer(e);
                  return (
                    (e = new Array(4)),
                    (e[0] = t.getInt32()),
                    (e[1] = t.getInt32()),
                    (e[2] = t.getInt32()),
                    (e[3] = t.getInt32()),
                    n.aes._expandKey(e, !1)
                  );
                }),
                  (r.formatSeed = function (e) {
                    var t = n.util.createBuffer(e);
                    return (
                      (e = new Array(4)),
                      (e[0] = t.getInt32()),
                      (e[1] = t.getInt32()),
                      (e[2] = t.getInt32()),
                      (e[3] = t.getInt32()),
                      e
                    );
                  }),
                  (r.cipher = function (e, t) {
                    return (
                      n.aes._updateBlock(e, t, a, !1),
                      i.putInt32(a[0]),
                      i.putInt32(a[1]),
                      i.putInt32(a[2]),
                      i.putInt32(a[3]),
                      i.getBytes()
                    );
                  }),
                  (r.increment = function (e) {
                    return (++e[3], e);
                  }),
                  (r.md = n.md.sha256));
                var o = s(),
                  c = null,
                  u = n.util.globalScope,
                  l = u.crypto || u.msCrypto;
                if (
                  (l &&
                    l.getRandomValues &&
                    (c = function (e) {
                      return l.getRandomValues(e);
                    }),
                  n.options.usePureJavaScript || (!n.util.isNodejs && !c))
                ) {
                  if (
                    ("undefined" === typeof window || window.document,
                    o.collectInt(+new Date(), 32),
                    "undefined" !== typeof navigator)
                  ) {
                    var f = "";
                    for (var p in navigator)
                      try {
                        "string" == typeof navigator[p] && (f += navigator[p]);
                      } catch (d) {}
                    (o.collect(f), (f = null));
                  }
                  t &&
                    (t().mousemove(function (e) {
                      (o.collectInt(e.clientX, 16),
                        o.collectInt(e.clientY, 16));
                    }),
                    t().keypress(function (e) {
                      o.collectInt(e.charCode, 8);
                    }));
                }
                if (n.random) for (var p in o) n.random[p] = o[p];
                else n.random = o;
                ((n.random.createInstance = s), (e.exports = n.random));
              })("undefined" !== typeof jQuery ? jQuery : null);
        })());
    },
    4291: function (e, t, r) {
      var n = r(2830);
      (r(3420), r(2863));
      var a = (e.exports = n.sha1 = n.sha1 || {});
      ((n.md.sha1 = n.md.algorithms.sha1 = a),
        (a.create = function () {
          s || o();
          var e = null,
            t = n.util.createBuffer(),
            r = new Array(80),
            a = {
              algorithm: "sha1",
              blockLength: 64,
              digestLength: 20,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                ((a.messageLength = 0),
                  (a.fullMessageLength = a.messageLength64 = []));
                for (var r = a.messageLengthSize / 4, i = 0; i < r; ++i)
                  a.fullMessageLength.push(0);
                return (
                  (t = n.util.createBuffer()),
                  (e = {
                    h0: 1732584193,
                    h1: 4023233417,
                    h2: 2562383102,
                    h3: 271733878,
                    h4: 3285377520,
                  }),
                  a
                );
              },
            };
          return (
            a.start(),
            (a.update = function (i, s) {
              "utf8" === s && (i = n.util.encodeUtf8(i));
              var o = i.length;
              ((a.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]));
              for (var u = a.fullMessageLength.length - 1; u >= 0; --u)
                ((a.fullMessageLength[u] += o[1]),
                  (o[1] = o[0] + ((a.fullMessageLength[u] / 4294967296) >>> 0)),
                  (a.fullMessageLength[u] = a.fullMessageLength[u] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0));
              return (
                t.putBytes(i),
                c(e, r, t),
                (t.read > 2048 || 0 === t.length()) && t.compact(),
                a
              );
            }),
            (a.digest = function () {
              var s = n.util.createBuffer();
              s.putBytes(t.bytes());
              var o,
                u,
                l =
                  a.fullMessageLength[a.fullMessageLength.length - 1] +
                  a.messageLengthSize,
                f = l & (a.blockLength - 1);
              s.putBytes(i.substr(0, a.blockLength - f));
              for (
                var p = 8 * a.fullMessageLength[0], d = 0;
                d < a.fullMessageLength.length - 1;
                ++d
              )
                ((o = 8 * a.fullMessageLength[d + 1]),
                  (u = (o / 4294967296) >>> 0),
                  (p += u),
                  s.putInt32(p >>> 0),
                  (p = o >>> 0));
              s.putInt32(p);
              var h = { h0: e.h0, h1: e.h1, h2: e.h2, h3: e.h3, h4: e.h4 };
              c(h, r, s);
              var y = n.util.createBuffer();
              return (
                y.putInt32(h.h0),
                y.putInt32(h.h1),
                y.putInt32(h.h2),
                y.putInt32(h.h3),
                y.putInt32(h.h4),
                y
              );
            }),
            a
          );
        }));
      var i = null,
        s = !1;
      function o() {
        ((i = String.fromCharCode(128)),
          (i += n.util.fillString(String.fromCharCode(0), 64)),
          (s = !0));
      }
      function c(e, t, r) {
        var n,
          a,
          i,
          s,
          o,
          c,
          u,
          l,
          f = r.length();
        while (f >= 64) {
          for (
            a = e.h0, i = e.h1, s = e.h2, o = e.h3, c = e.h4, l = 0;
            l < 16;
            ++l
          )
            ((n = r.getInt32()),
              (t[l] = n),
              (u = o ^ (i & (s ^ o))),
              (n = ((a << 5) | (a >>> 27)) + u + c + 1518500249 + n),
              (c = o),
              (o = s),
              (s = ((i << 30) | (i >>> 2)) >>> 0),
              (i = a),
              (a = n));
          for (; l < 20; ++l)
            ((n = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]),
              (n = (n << 1) | (n >>> 31)),
              (t[l] = n),
              (u = o ^ (i & (s ^ o))),
              (n = ((a << 5) | (a >>> 27)) + u + c + 1518500249 + n),
              (c = o),
              (o = s),
              (s = ((i << 30) | (i >>> 2)) >>> 0),
              (i = a),
              (a = n));
          for (; l < 32; ++l)
            ((n = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]),
              (n = (n << 1) | (n >>> 31)),
              (t[l] = n),
              (u = i ^ s ^ o),
              (n = ((a << 5) | (a >>> 27)) + u + c + 1859775393 + n),
              (c = o),
              (o = s),
              (s = ((i << 30) | (i >>> 2)) >>> 0),
              (i = a),
              (a = n));
          for (; l < 40; ++l)
            ((n = t[l - 6] ^ t[l - 16] ^ t[l - 28] ^ t[l - 32]),
              (n = (n << 2) | (n >>> 30)),
              (t[l] = n),
              (u = i ^ s ^ o),
              (n = ((a << 5) | (a >>> 27)) + u + c + 1859775393 + n),
              (c = o),
              (o = s),
              (s = ((i << 30) | (i >>> 2)) >>> 0),
              (i = a),
              (a = n));
          for (; l < 60; ++l)
            ((n = t[l - 6] ^ t[l - 16] ^ t[l - 28] ^ t[l - 32]),
              (n = (n << 2) | (n >>> 30)),
              (t[l] = n),
              (u = (i & s) | (o & (i ^ s))),
              (n = ((a << 5) | (a >>> 27)) + u + c + 2400959708 + n),
              (c = o),
              (o = s),
              (s = ((i << 30) | (i >>> 2)) >>> 0),
              (i = a),
              (a = n));
          for (; l < 80; ++l)
            ((n = t[l - 6] ^ t[l - 16] ^ t[l - 28] ^ t[l - 32]),
              (n = (n << 2) | (n >>> 30)),
              (t[l] = n),
              (u = i ^ s ^ o),
              (n = ((a << 5) | (a >>> 27)) + u + c + 3395469782 + n),
              (c = o),
              (o = s),
              (s = ((i << 30) | (i >>> 2)) >>> 0),
              (i = a),
              (a = n));
          ((e.h0 = (e.h0 + a) | 0),
            (e.h1 = (e.h1 + i) | 0),
            (e.h2 = (e.h2 + s) | 0),
            (e.h3 = (e.h3 + o) | 0),
            (e.h4 = (e.h4 + c) | 0),
            (f -= 64));
        }
      }
    },
    4668: function (e, t, r) {
      var n = r(2830);
      if (
        (r(3372),
        r(4669),
        r(3660),
        r(6072),
        r(6073),
        r(3294),
        r(2863),
        "undefined" === typeof BigInteger)
      )
        var BigInteger = n.jsbn.BigInteger;
      var a = n.util.isNodejs ? r(4999) : null,
        i = n.asn1,
        s = n.util;
      ((n.pki = n.pki || {}), (e.exports = n.pki.rsa = n.rsa = n.rsa || {}));
      var o = n.pki,
        c = [6, 4, 2, 4, 2, 4, 6, 2],
        u = {
          name: "PrivateKeyInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PrivateKeyInfo.version",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyVersion",
            },
            {
              name: "PrivateKeyInfo.privateKeyAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "privateKeyOid",
                },
              ],
            },
            {
              name: "PrivateKeyInfo",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OCTETSTRING,
              constructed: !1,
              capture: "privateKey",
            },
          ],
        },
        l = {
          name: "RSAPrivateKey",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RSAPrivateKey.version",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyVersion",
            },
            {
              name: "RSAPrivateKey.modulus",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyModulus",
            },
            {
              name: "RSAPrivateKey.publicExponent",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPublicExponent",
            },
            {
              name: "RSAPrivateKey.privateExponent",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrivateExponent",
            },
            {
              name: "RSAPrivateKey.prime1",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrime1",
            },
            {
              name: "RSAPrivateKey.prime2",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyPrime2",
            },
            {
              name: "RSAPrivateKey.exponent1",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyExponent1",
            },
            {
              name: "RSAPrivateKey.exponent2",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyExponent2",
            },
            {
              name: "RSAPrivateKey.coefficient",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "privateKeyCoefficient",
            },
          ],
        },
        f = {
          name: "RSAPublicKey",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RSAPublicKey.modulus",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "publicKeyModulus",
            },
            {
              name: "RSAPublicKey.exponent",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.INTEGER,
              constructed: !1,
              capture: "publicKeyExponent",
            },
          ],
        },
        p = (n.pki.rsa.publicKeyValidator = {
          name: "SubjectPublicKeyInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "subjectPublicKeyInfo",
          value: [
            {
              name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "AlgorithmIdentifier.algorithm",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "publicKeyOid",
                },
              ],
            },
            {
              name: "SubjectPublicKeyInfo.subjectPublicKey",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.BITSTRING,
              constructed: !1,
              value: [
                {
                  name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  captureAsn1: "rsaPublicKey",
                },
              ],
            },
          ],
        }),
        d = {
          name: "DigestInfo",
          tagClass: i.Class.UNIVERSAL,
          type: i.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "DigestInfo.DigestAlgorithm",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.OID,
                  constructed: !1,
                  capture: "algorithmIdentifier",
                },
                {
                  name: "DigestInfo.DigestAlgorithm.parameters",
                  tagClass: i.Class.UNIVERSAL,
                  type: i.Type.NULL,
                  capture: "parameters",
                  optional: !0,
                  constructed: !1,
                },
              ],
            },
            {
              name: "DigestInfo.digest",
              tagClass: i.Class.UNIVERSAL,
              type: i.Type.OCTETSTRING,
              constructed: !1,
              capture: "digest",
            },
          ],
        },
        h = function (e) {
          var t;
          if (!(e.algorithm in o.oids)) {
            var r = new Error("Unknown message digest algorithm.");
            throw ((r.algorithm = e.algorithm), r);
          }
          t = o.oids[e.algorithm];
          var n = i.oidToDer(t).getBytes(),
            a = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []),
            s = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
          (s.value.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, n)),
            s.value.push(i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")));
          var c = i.create(
            i.Class.UNIVERSAL,
            i.Type.OCTETSTRING,
            !1,
            e.digest().getBytes(),
          );
          return (a.value.push(s), a.value.push(c), i.toDer(a).getBytes());
        },
        y = function (e, t, r) {
          if (r) return e.modPow(t.e, t.n);
          if (!t.p || !t.q) return e.modPow(t.d, t.n);
          var a;
          (t.dP || (t.dP = t.d.mod(t.p.subtract(BigInteger.ONE))),
            t.dQ || (t.dQ = t.d.mod(t.q.subtract(BigInteger.ONE))),
            t.qInv || (t.qInv = t.q.modInverse(t.p)));
          do {
            a = new BigInteger(
              n.util.bytesToHex(n.random.getBytes(t.n.bitLength() / 8)),
              16,
            );
          } while (a.compareTo(t.n) >= 0 || !a.gcd(t.n).equals(BigInteger.ONE));
          e = e.multiply(a.modPow(t.e, t.n)).mod(t.n);
          var i = e.mod(t.p).modPow(t.dP, t.p),
            s = e.mod(t.q).modPow(t.dQ, t.q);
          while (i.compareTo(s) < 0) i = i.add(t.p);
          var o = i.subtract(s).multiply(t.qInv).mod(t.p).multiply(t.q).add(s);
          return ((o = o.multiply(a.modInverse(t.n)).mod(t.n)), o);
        };
      function g(e, t, r) {
        var a = n.util.createBuffer(),
          i = Math.ceil(t.n.bitLength() / 8);
        if (e.length > i - 11) {
          var s = new Error("Message is too long for PKCS#1 v1.5 padding.");
          throw ((s.length = e.length), (s.max = i - 11), s);
        }
        (a.putByte(0), a.putByte(r));
        var o,
          c = i - 3 - e.length;
        if (0 === r || 1 === r) {
          o = 0 === r ? 0 : 255;
          for (var u = 0; u < c; ++u) a.putByte(o);
        } else
          while (c > 0) {
            var l = 0,
              f = n.random.getBytes(c);
            for (u = 0; u < c; ++u)
              ((o = f.charCodeAt(u)), 0 === o ? ++l : a.putByte(o));
            c = l;
          }
        return (a.putByte(0), a.putBytes(e), a);
      }
      function C(e, t, r, a) {
        var i = Math.ceil(t.n.bitLength() / 8),
          s = n.util.createBuffer(e),
          o = s.getByte(),
          c = s.getByte();
        if (
          0 !== o ||
          (r && 0 !== c && 1 !== c) ||
          (!r && 2 != c) ||
          (r && 0 === c && "undefined" === typeof a)
        )
          throw new Error("Encryption block is invalid.");
        var u = 0;
        if (0 === c) {
          u = i - 3 - a;
          for (var l = 0; l < u; ++l)
            if (0 !== s.getByte())
              throw new Error("Encryption block is invalid.");
        } else if (1 === c) {
          u = 0;
          while (s.length() > 1) {
            if (255 !== s.getByte()) {
              --s.read;
              break;
            }
            ++u;
          }
        } else if (2 === c) {
          u = 0;
          while (s.length() > 1) {
            if (0 === s.getByte()) {
              --s.read;
              break;
            }
            ++u;
          }
        }
        var f = s.getByte();
        if (0 !== f || u !== i - 3 - s.length())
          throw new Error("Encryption block is invalid.");
        return s.getBytes();
      }
      function m(e, t, r) {
        ("function" === typeof t && ((r = t), (t = {})), (t = t || {}));
        var a = {
          algorithm: {
            name: t.algorithm || "PRIMEINC",
            options: {
              workers: t.workers || 2,
              workLoad: t.workLoad || 100,
              workerScript: t.workerScript,
            },
          },
        };
        function i() {
          s(e.pBits, function (t, n) {
            return t
              ? r(t)
              : ((e.p = n), null !== e.q ? c(t, e.q) : void s(e.qBits, c));
          });
        }
        function s(e, t) {
          n.prime.generateProbablePrime(e, a, t);
        }
        function c(t, n) {
          if (t) return r(t);
          if (((e.q = n), e.p.compareTo(e.q) < 0)) {
            var a = e.p;
            ((e.p = e.q), (e.q = a));
          }
          if (
            0 !==
            e.p.subtract(BigInteger.ONE).gcd(e.e).compareTo(BigInteger.ONE)
          )
            return ((e.p = null), void i());
          if (
            0 !==
            e.q.subtract(BigInteger.ONE).gcd(e.e).compareTo(BigInteger.ONE)
          )
            return ((e.q = null), void s(e.qBits, c));
          if (
            ((e.p1 = e.p.subtract(BigInteger.ONE)),
            (e.q1 = e.q.subtract(BigInteger.ONE)),
            (e.phi = e.p1.multiply(e.q1)),
            0 !== e.phi.gcd(e.e).compareTo(BigInteger.ONE))
          )
            return ((e.p = e.q = null), void i());
          if (((e.n = e.p.multiply(e.q)), e.n.bitLength() !== e.bits))
            return ((e.q = null), void s(e.qBits, c));
          var u = e.e.modInverse(e.phi);
          ((e.keys = {
            privateKey: o.rsa.setPrivateKey(
              e.n,
              e.e,
              u,
              e.p,
              e.q,
              u.mod(e.p1),
              u.mod(e.q1),
              e.q.modInverse(e.p),
            ),
            publicKey: o.rsa.setPublicKey(e.n, e.e),
          }),
            r(null, e.keys));
        }
        ("prng" in t && (a.prng = t.prng), i());
      }
      function v(e) {
        var t = e.toString(16);
        t[0] >= "8" && (t = "00" + t);
        var r = n.util.hexToBytes(t);
        return r.length > 1 &&
          ((0 === r.charCodeAt(0) && 0 === (128 & r.charCodeAt(1))) ||
            (255 === r.charCodeAt(0) && 128 === (128 & r.charCodeAt(1))))
          ? r.substr(1)
          : r;
      }
      function E(e) {
        return e <= 100
          ? 27
          : e <= 150
            ? 18
            : e <= 200
              ? 15
              : e <= 250
                ? 12
                : e <= 300
                  ? 9
                  : e <= 350
                    ? 8
                    : e <= 400
                      ? 7
                      : e <= 500
                        ? 6
                        : e <= 600
                          ? 5
                          : e <= 800
                            ? 4
                            : e <= 1250
                              ? 3
                              : 2;
      }
      function S(e) {
        return n.util.isNodejs && "function" === typeof a[e];
      }
      function I(e) {
        return (
          "undefined" !== typeof s.globalScope &&
          "object" === typeof s.globalScope.crypto &&
          "object" === typeof s.globalScope.crypto.subtle &&
          "function" === typeof s.globalScope.crypto.subtle[e]
        );
      }
      function A(e) {
        return (
          "undefined" !== typeof s.globalScope &&
          "object" === typeof s.globalScope.msCrypto &&
          "object" === typeof s.globalScope.msCrypto.subtle &&
          "function" === typeof s.globalScope.msCrypto.subtle[e]
        );
      }
      function T(e) {
        for (
          var t = n.util.hexToBytes(e.toString(16)),
            r = new Uint8Array(t.length),
            a = 0;
          a < t.length;
          ++a
        )
          r[a] = t.charCodeAt(a);
        return r;
      }
      ((o.rsa.encrypt = function (e, t, r) {
        var a,
          i = r,
          s = Math.ceil(t.n.bitLength() / 8);
        !1 !== r && !0 !== r
          ? ((i = 2 === r), (a = g(e, t, r)))
          : ((a = n.util.createBuffer()), a.putBytes(e));
        var o = new BigInteger(a.toHex(), 16),
          c = y(o, t, i),
          u = c.toString(16),
          l = n.util.createBuffer(),
          f = s - Math.ceil(u.length / 2);
        while (f > 0) (l.putByte(0), --f);
        return (l.putBytes(n.util.hexToBytes(u)), l.getBytes());
      }),
        (o.rsa.decrypt = function (e, t, r, a) {
          var i = Math.ceil(t.n.bitLength() / 8);
          if (e.length !== i) {
            var s = new Error("Encrypted message length is invalid.");
            throw ((s.length = e.length), (s.expected = i), s);
          }
          var o = new BigInteger(n.util.createBuffer(e).toHex(), 16);
          if (o.compareTo(t.n) >= 0)
            throw new Error("Encrypted message is invalid.");
          var c = y(o, t, r),
            u = c.toString(16),
            l = n.util.createBuffer(),
            f = i - Math.ceil(u.length / 2);
          while (f > 0) (l.putByte(0), --f);
          return (
            l.putBytes(n.util.hexToBytes(u)),
            !1 !== a ? C(l.getBytes(), t, r) : l.getBytes()
          );
        }),
        (o.rsa.createKeyPairGenerationState = function (e, t, r) {
          ("string" === typeof e && (e = parseInt(e, 10)),
            (e = e || 2048),
            (r = r || {}));
          var a,
            i = r.prng || n.random,
            s = {
              nextBytes: function (e) {
                for (var t = i.getBytesSync(e.length), r = 0; r < e.length; ++r)
                  e[r] = t.charCodeAt(r);
              },
            },
            o = r.algorithm || "PRIMEINC";
          if ("PRIMEINC" !== o)
            throw new Error("Invalid key generation algorithm: " + o);
          return (
            (a = {
              algorithm: o,
              state: 0,
              bits: e,
              rng: s,
              eInt: t || 65537,
              e: new BigInteger(null),
              p: null,
              q: null,
              qBits: e >> 1,
              pBits: e - (e >> 1),
              pqState: 0,
              num: null,
              keys: null,
            }),
            a.e.fromInt(a.eInt),
            a
          );
        }),
        (o.rsa.stepKeyPairGenerationState = function (e, t) {
          "algorithm" in e || (e.algorithm = "PRIMEINC");
          var r = new BigInteger(null);
          r.fromInt(30);
          var n,
            a = 0,
            i = function (e, t) {
              return e | t;
            },
            s = +new Date(),
            u = 0;
          while (null === e.keys && (t <= 0 || u < t)) {
            if (0 === e.state) {
              var l = null === e.p ? e.pBits : e.qBits,
                f = l - 1;
              0 === e.pqState
                ? ((e.num = new BigInteger(l, e.rng)),
                  e.num.testBit(f) ||
                    e.num.bitwiseTo(BigInteger.ONE.shiftLeft(f), i, e.num),
                  e.num.dAddOffset(31 - e.num.mod(r).byteValue(), 0),
                  (a = 0),
                  ++e.pqState)
                : 1 === e.pqState
                  ? e.num.bitLength() > l
                    ? (e.pqState = 0)
                    : e.num.isProbablePrime(E(e.num.bitLength()))
                      ? ++e.pqState
                      : e.num.dAddOffset(c[a++ % 8], 0)
                  : 2 === e.pqState
                    ? (e.pqState =
                        0 ===
                        e.num
                          .subtract(BigInteger.ONE)
                          .gcd(e.e)
                          .compareTo(BigInteger.ONE)
                          ? 3
                          : 0)
                    : 3 === e.pqState &&
                      ((e.pqState = 0),
                      null === e.p ? (e.p = e.num) : (e.q = e.num),
                      null !== e.p && null !== e.q && ++e.state,
                      (e.num = null));
            } else if (1 === e.state)
              (e.p.compareTo(e.q) < 0 &&
                ((e.num = e.p), (e.p = e.q), (e.q = e.num)),
                ++e.state);
            else if (2 === e.state)
              ((e.p1 = e.p.subtract(BigInteger.ONE)),
                (e.q1 = e.q.subtract(BigInteger.ONE)),
                (e.phi = e.p1.multiply(e.q1)),
                ++e.state);
            else if (3 === e.state)
              0 === e.phi.gcd(e.e).compareTo(BigInteger.ONE)
                ? ++e.state
                : ((e.p = null), (e.q = null), (e.state = 0));
            else if (4 === e.state)
              ((e.n = e.p.multiply(e.q)),
                e.n.bitLength() === e.bits
                  ? ++e.state
                  : ((e.q = null), (e.state = 0)));
            else if (5 === e.state) {
              var p = e.e.modInverse(e.phi);
              e.keys = {
                privateKey: o.rsa.setPrivateKey(
                  e.n,
                  e.e,
                  p,
                  e.p,
                  e.q,
                  p.mod(e.p1),
                  p.mod(e.q1),
                  e.q.modInverse(e.p),
                ),
                publicKey: o.rsa.setPublicKey(e.n, e.e),
              };
            }
            ((n = +new Date()), (u += n - s), (s = n));
          }
          return null !== e.keys;
        }),
        (o.rsa.generateKeyPair = function (e, t, r, c) {
          if (
            (1 === arguments.length
              ? "object" === typeof e
                ? ((r = e), (e = void 0))
                : "function" === typeof e && ((c = e), (e = void 0))
              : 2 === arguments.length
                ? "number" === typeof e
                  ? "function" === typeof t
                    ? ((c = t), (t = void 0))
                    : "number" !== typeof t && ((r = t), (t = void 0))
                  : ((r = e), (c = t), (e = void 0), (t = void 0))
                : 3 === arguments.length &&
                  ("number" === typeof t
                    ? "function" === typeof r && ((c = r), (r = void 0))
                    : ((c = r), (r = t), (t = void 0))),
            (r = r || {}),
            void 0 === e && (e = r.bits || 2048),
            void 0 === t && (t = r.e || 65537),
            !n.options.usePureJavaScript &&
              !r.prng &&
              e >= 256 &&
              e <= 16384 &&
              (65537 === t || 3 === t))
          )
            if (c) {
              if (S("generateKeyPair"))
                return a.generateKeyPair(
                  "rsa",
                  {
                    modulusLength: e,
                    publicExponent: t,
                    publicKeyEncoding: { type: "spki", format: "pem" },
                    privateKeyEncoding: { type: "pkcs8", format: "pem" },
                  },
                  function (e, t, r) {
                    if (e) return c(e);
                    c(null, {
                      privateKey: o.privateKeyFromPem(r),
                      publicKey: o.publicKeyFromPem(t),
                    });
                  },
                );
              if (I("generateKey") && I("exportKey"))
                return s.globalScope.crypto.subtle
                  .generateKey(
                    {
                      name: "RSASSA-PKCS1-v1_5",
                      modulusLength: e,
                      publicExponent: T(t),
                      hash: { name: "SHA-256" },
                    },
                    !0,
                    ["sign", "verify"],
                  )
                  .then(function (e) {
                    return s.globalScope.crypto.subtle.exportKey(
                      "pkcs8",
                      e.privateKey,
                    );
                  })
                  .then(void 0, function (e) {
                    c(e);
                  })
                  .then(function (e) {
                    if (e) {
                      var t = o.privateKeyFromAsn1(
                        i.fromDer(n.util.createBuffer(e)),
                      );
                      c(null, {
                        privateKey: t,
                        publicKey: o.setRsaPublicKey(t.n, t.e),
                      });
                    }
                  });
              if (A("generateKey") && A("exportKey")) {
                var u = s.globalScope.msCrypto.subtle.generateKey(
                  {
                    name: "RSASSA-PKCS1-v1_5",
                    modulusLength: e,
                    publicExponent: T(t),
                    hash: { name: "SHA-256" },
                  },
                  !0,
                  ["sign", "verify"],
                );
                return (
                  (u.oncomplete = function (e) {
                    var t = e.target.result,
                      r = s.globalScope.msCrypto.subtle.exportKey(
                        "pkcs8",
                        t.privateKey,
                      );
                    ((r.oncomplete = function (e) {
                      var t = e.target.result,
                        r = o.privateKeyFromAsn1(
                          i.fromDer(n.util.createBuffer(t)),
                        );
                      c(null, {
                        privateKey: r,
                        publicKey: o.setRsaPublicKey(r.n, r.e),
                      });
                    }),
                      (r.onerror = function (e) {
                        c(e);
                      }));
                  }),
                  void (u.onerror = function (e) {
                    c(e);
                  })
                );
              }
            } else if (S("generateKeyPairSync")) {
              var l = a.generateKeyPairSync("rsa", {
                modulusLength: e,
                publicExponent: t,
                publicKeyEncoding: { type: "spki", format: "pem" },
                privateKeyEncoding: { type: "pkcs8", format: "pem" },
              });
              return {
                privateKey: o.privateKeyFromPem(l.privateKey),
                publicKey: o.publicKeyFromPem(l.publicKey),
              };
            }
          var f = o.rsa.createKeyPairGenerationState(e, t, r);
          if (!c) return (o.rsa.stepKeyPairGenerationState(f, 0), f.keys);
          m(f, r, c);
        }),
        (o.setRsaPublicKey = o.rsa.setPublicKey =
          function (e, t) {
            var r = {
              n: e,
              e: t,
              encrypt: function (e, t, a) {
                if (
                  ("string" === typeof t
                    ? (t = t.toUpperCase())
                    : void 0 === t && (t = "RSAES-PKCS1-V1_5"),
                  "RSAES-PKCS1-V1_5" === t)
                )
                  t = {
                    encode: function (e, t, r) {
                      return g(e, t, 2).getBytes();
                    },
                  };
                else if ("RSA-OAEP" === t || "RSAES-OAEP" === t)
                  t = {
                    encode: function (e, t) {
                      return n.pkcs1.encode_rsa_oaep(t, e, a);
                    },
                  };
                else if (-1 !== ["RAW", "NONE", "NULL", null].indexOf(t))
                  t = {
                    encode: function (e) {
                      return e;
                    },
                  };
                else if ("string" === typeof t)
                  throw new Error(
                    'Unsupported encryption scheme: "' + t + '".',
                  );
                var i = t.encode(e, r, !0);
                return o.rsa.encrypt(i, r, !0);
              },
              verify: function (e, t, a, s) {
                ("string" === typeof a
                  ? (a = a.toUpperCase())
                  : void 0 === a && (a = "RSASSA-PKCS1-V1_5"),
                  void 0 === s && (s = { _parseAllDigestBytes: !0 }),
                  "_parseAllDigestBytes" in s || (s._parseAllDigestBytes = !0),
                  "RSASSA-PKCS1-V1_5" === a
                    ? (a = {
                        verify: function (e, t) {
                          t = C(t, r, !0);
                          var a = i.fromDer(t, {
                              parseAllBytes: s._parseAllDigestBytes,
                            }),
                            o = {},
                            c = [];
                          if (!i.validate(a, d, o, c)) {
                            var u = new Error(
                              "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.",
                            );
                            throw ((u.errors = c), u);
                          }
                          var l = i.derToOid(o.algorithmIdentifier);
                          if (
                            l !== n.oids.md2 &&
                            l !== n.oids.md5 &&
                            l !== n.oids.sha1 &&
                            l !== n.oids.sha224 &&
                            l !== n.oids.sha256 &&
                            l !== n.oids.sha384 &&
                            l !== n.oids.sha512 &&
                            l !== n.oids["sha512-224"] &&
                            l !== n.oids["sha512-256"]
                          ) {
                            u = new Error(
                              "Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.",
                            );
                            throw ((u.oid = l), u);
                          }
                          if (
                            (l === n.oids.md2 || l === n.oids.md5) &&
                            !("parameters" in o)
                          )
                            throw new Error(
                              "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.",
                            );
                          return e === o.digest;
                        },
                      })
                    : ("NONE" !== a && "NULL" !== a && null !== a) ||
                      (a = {
                        verify: function (e, t) {
                          return ((t = C(t, r, !0)), e === t);
                        },
                      }));
                var c = o.rsa.decrypt(t, r, !0, !1);
                return a.verify(e, c, r.n.bitLength());
              },
            };
            return r;
          }),
        (o.setRsaPrivateKey = o.rsa.setPrivateKey =
          function (e, t, r, a, i, s, c, u) {
            var l = {
              n: e,
              e: t,
              d: r,
              p: a,
              q: i,
              dP: s,
              dQ: c,
              qInv: u,
              decrypt: function (e, t, r) {
                "string" === typeof t
                  ? (t = t.toUpperCase())
                  : void 0 === t && (t = "RSAES-PKCS1-V1_5");
                var a = o.rsa.decrypt(e, l, !1, !1);
                if ("RSAES-PKCS1-V1_5" === t) t = { decode: C };
                else if ("RSA-OAEP" === t || "RSAES-OAEP" === t)
                  t = {
                    decode: function (e, t) {
                      return n.pkcs1.decode_rsa_oaep(t, e, r);
                    },
                  };
                else {
                  if (-1 === ["RAW", "NONE", "NULL", null].indexOf(t))
                    throw new Error(
                      'Unsupported encryption scheme: "' + t + '".',
                    );
                  t = {
                    decode: function (e) {
                      return e;
                    },
                  };
                }
                return t.decode(a, l, !1);
              },
              sign: function (e, t) {
                var r = !1;
                ("string" === typeof t && (t = t.toUpperCase()),
                  void 0 === t || "RSASSA-PKCS1-V1_5" === t
                    ? ((t = { encode: h }), (r = 1))
                    : ("NONE" !== t && "NULL" !== t && null !== t) ||
                      ((t = {
                        encode: function () {
                          return e;
                        },
                      }),
                      (r = 1)));
                var n = t.encode(e, l.n.bitLength());
                return o.rsa.encrypt(n, l, r);
              },
            };
            return l;
          }),
        (o.wrapRsaPrivateKey = function (e) {
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(
              i.Class.UNIVERSAL,
              i.Type.INTEGER,
              !1,
              i.integerToDer(0).getBytes(),
            ),
            i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.OID,
                !1,
                i.oidToDer(o.oids.rsaEncryption).getBytes(),
              ),
              i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, ""),
            ]),
            i.create(
              i.Class.UNIVERSAL,
              i.Type.OCTETSTRING,
              !1,
              i.toDer(e).getBytes(),
            ),
          ]);
        }),
        (o.privateKeyFromAsn1 = function (e) {
          var t,
            r,
            a,
            s,
            c,
            f,
            p,
            d,
            h = {},
            y = [];
          if (
            (i.validate(e, u, h, y) &&
              (e = i.fromDer(n.util.createBuffer(h.privateKey))),
            (h = {}),
            (y = []),
            !i.validate(e, l, h, y))
          ) {
            var g = new Error(
              "Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.",
            );
            throw ((g.errors = y), g);
          }
          return (
            (t = n.util.createBuffer(h.privateKeyModulus).toHex()),
            (r = n.util.createBuffer(h.privateKeyPublicExponent).toHex()),
            (a = n.util.createBuffer(h.privateKeyPrivateExponent).toHex()),
            (s = n.util.createBuffer(h.privateKeyPrime1).toHex()),
            (c = n.util.createBuffer(h.privateKeyPrime2).toHex()),
            (f = n.util.createBuffer(h.privateKeyExponent1).toHex()),
            (p = n.util.createBuffer(h.privateKeyExponent2).toHex()),
            (d = n.util.createBuffer(h.privateKeyCoefficient).toHex()),
            o.setRsaPrivateKey(
              new BigInteger(t, 16),
              new BigInteger(r, 16),
              new BigInteger(a, 16),
              new BigInteger(s, 16),
              new BigInteger(c, 16),
              new BigInteger(f, 16),
              new BigInteger(p, 16),
              new BigInteger(d, 16),
            )
          );
        }),
        (o.privateKeyToAsn1 = o.privateKeyToRSAPrivateKey =
          function (e) {
            return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(
                i.Class.UNIVERSAL,
                i.Type.INTEGER,
                !1,
                i.integerToDer(0).getBytes(),
              ),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.n)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.e)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.d)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.p)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.q)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.dP)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.dQ)),
              i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.qInv)),
            ]);
          }),
        (o.publicKeyFromAsn1 = function (e) {
          var t = {},
            r = [];
          if (i.validate(e, p, t, r)) {
            var a = i.derToOid(t.publicKeyOid);
            if (a !== o.oids.rsaEncryption) {
              var s = new Error("Cannot read public key. Unknown OID.");
              throw ((s.oid = a), s);
            }
            e = t.rsaPublicKey;
          }
          if (((r = []), !i.validate(e, f, t, r))) {
            s = new Error(
              "Cannot read public key. ASN.1 object does not contain an RSAPublicKey.",
            );
            throw ((s.errors = r), s);
          }
          var c = n.util.createBuffer(t.publicKeyModulus).toHex(),
            u = n.util.createBuffer(t.publicKeyExponent).toHex();
          return o.setRsaPublicKey(
            new BigInteger(c, 16),
            new BigInteger(u, 16),
          );
        }),
        (o.publicKeyToAsn1 = o.publicKeyToSubjectPublicKeyInfo =
          function (e) {
            return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
              i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
                i.create(
                  i.Class.UNIVERSAL,
                  i.Type.OID,
                  !1,
                  i.oidToDer(o.oids.rsaEncryption).getBytes(),
                ),
                i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, ""),
              ]),
              i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, [
                o.publicKeyToRSAPublicKey(e),
              ]),
            ]);
          }),
        (o.publicKeyToRSAPublicKey = function (e) {
          return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [
            i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.n)),
            i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, v(e.e)),
          ]);
        }));
    },
    5e3: function (e, t, r) {
      var n = r(2830);
      (r(3659),
        r(3372),
        r(4667),
        r(3420),
        r(7847),
        r(3660),
        r(3898),
        r(5001),
        r(4668),
        r(2863));
      var a = n.asn1,
        i = (e.exports = n.pki = n.pki || {}),
        s = i.oids,
        o = {};
      ((o["CN"] = s["commonName"]),
        (o["commonName"] = "CN"),
        (o["C"] = s["countryName"]),
        (o["countryName"] = "C"),
        (o["L"] = s["localityName"]),
        (o["localityName"] = "L"),
        (o["ST"] = s["stateOrProvinceName"]),
        (o["stateOrProvinceName"] = "ST"),
        (o["O"] = s["organizationName"]),
        (o["organizationName"] = "O"),
        (o["OU"] = s["organizationalUnitName"]),
        (o["organizationalUnitName"] = "OU"),
        (o["E"] = s["emailAddress"]),
        (o["emailAddress"] = "E"));
      var c = n.pki.rsa.publicKeyValidator,
        u = {
          name: "Certificate",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "Certificate.TBSCertificate",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "tbsCertificate",
              value: [
                {
                  name: "Certificate.TBSCertificate.version",
                  tagClass: a.Class.CONTEXT_SPECIFIC,
                  type: 0,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.version.integer",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.INTEGER,
                      constructed: !1,
                      capture: "certVersion",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.serialNumber",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.INTEGER,
                  constructed: !1,
                  capture: "certSerialNumber",
                },
                {
                  name: "Certificate.TBSCertificate.signature",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.signature.algorithm",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.OID,
                      constructed: !1,
                      capture: "certinfoSignatureOid",
                    },
                    {
                      name: "Certificate.TBSCertificate.signature.parameters",
                      tagClass: a.Class.UNIVERSAL,
                      optional: !0,
                      captureAsn1: "certinfoSignatureParams",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.issuer",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "certIssuer",
                },
                {
                  name: "Certificate.TBSCertificate.validity",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.UTCTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity1UTCTime",
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.GENERALIZEDTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity2GeneralizedTime",
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.UTCTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity3UTCTime",
                    },
                    {
                      name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.GENERALIZEDTIME,
                      constructed: !1,
                      optional: !0,
                      capture: "certValidity4GeneralizedTime",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.subject",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "certSubject",
                },
                c,
                {
                  name: "Certificate.TBSCertificate.issuerUniqueID",
                  tagClass: a.Class.CONTEXT_SPECIFIC,
                  type: 1,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.issuerUniqueID.id",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.BITSTRING,
                      constructed: !1,
                      captureBitStringValue: "certIssuerUniqueId",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.subjectUniqueID",
                  tagClass: a.Class.CONTEXT_SPECIFIC,
                  type: 2,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "Certificate.TBSCertificate.subjectUniqueID.id",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.BITSTRING,
                      constructed: !1,
                      captureBitStringValue: "certSubjectUniqueId",
                    },
                  ],
                },
                {
                  name: "Certificate.TBSCertificate.extensions",
                  tagClass: a.Class.CONTEXT_SPECIFIC,
                  type: 3,
                  constructed: !0,
                  captureAsn1: "certExtensions",
                  optional: !0,
                },
              ],
            },
            {
              name: "Certificate.signatureAlgorithm",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "Certificate.signatureAlgorithm.algorithm",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OID,
                  constructed: !1,
                  capture: "certSignatureOid",
                },
                {
                  name: "Certificate.TBSCertificate.signature.parameters",
                  tagClass: a.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "certSignatureParams",
                },
              ],
            },
            {
              name: "Certificate.signatureValue",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.BITSTRING,
              constructed: !1,
              captureBitStringValue: "certSignature",
            },
          ],
        },
        l = {
          name: "rsapss",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "rsapss.hashAlgorithm",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              value: [
                {
                  name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Class.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.OID,
                      constructed: !1,
                      capture: "hashOid",
                    },
                  ],
                },
              ],
            },
            {
              name: "rsapss.maskGenAlgorithm",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              type: 1,
              constructed: !0,
              value: [
                {
                  name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Class.SEQUENCE,
                  constructed: !0,
                  optional: !0,
                  value: [
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.OID,
                      constructed: !1,
                      capture: "maskGenOid",
                    },
                    {
                      name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.SEQUENCE,
                      constructed: !0,
                      value: [
                        {
                          name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                          tagClass: a.Class.UNIVERSAL,
                          type: a.Type.OID,
                          constructed: !1,
                          capture: "maskGenHashOid",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "rsapss.saltLength",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              type: 2,
              optional: !0,
              value: [
                {
                  name: "rsapss.saltLength.saltLength",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Class.INTEGER,
                  constructed: !1,
                  capture: "saltLength",
                },
              ],
            },
            {
              name: "rsapss.trailerField",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              type: 3,
              optional: !0,
              value: [
                {
                  name: "rsapss.trailer.trailer",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Class.INTEGER,
                  constructed: !1,
                  capture: "trailer",
                },
              ],
            },
          ],
        },
        f = {
          name: "CertificationRequestInfo",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "certificationRequestInfo",
          value: [
            {
              name: "CertificationRequestInfo.integer",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "certificationRequestInfoVersion",
            },
            {
              name: "CertificationRequestInfo.subject",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              captureAsn1: "certificationRequestInfoSubject",
            },
            c,
            {
              name: "CertificationRequestInfo.attributes",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              type: 0,
              constructed: !0,
              optional: !0,
              capture: "certificationRequestInfoAttributes",
              value: [
                {
                  name: "CertificationRequestInfo.attributes",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "CertificationRequestInfo.attributes.type",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.OID,
                      constructed: !1,
                    },
                    {
                      name: "CertificationRequestInfo.attributes.value",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.SET,
                      constructed: !0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        p = {
          name: "CertificationRequest",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          captureAsn1: "csr",
          value: [
            f,
            {
              name: "CertificationRequest.signatureAlgorithm",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "CertificationRequest.signatureAlgorithm.algorithm",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OID,
                  constructed: !1,
                  capture: "csrSignatureOid",
                },
                {
                  name: "CertificationRequest.signatureAlgorithm.parameters",
                  tagClass: a.Class.UNIVERSAL,
                  optional: !0,
                  captureAsn1: "csrSignatureParams",
                },
              ],
            },
            {
              name: "CertificationRequest.signature",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.BITSTRING,
              constructed: !1,
              captureBitStringValue: "csrSignature",
            },
          ],
        };
      function d(e, t) {
        "string" === typeof t && (t = { shortName: t });
        for (var r, n = null, a = 0; null === n && a < e.attributes.length; ++a)
          ((r = e.attributes[a]),
            ((t.type && t.type === r.type) ||
              (t.name && t.name === r.name) ||
              (t.shortName && t.shortName === r.shortName)) &&
              (n = r));
        return n;
      }
      ((i.RDNAttributesAsArray = function (e, t) {
        for (var r, n, i, c = [], u = 0; u < e.value.length; ++u) {
          r = e.value[u];
          for (var l = 0; l < r.value.length; ++l)
            ((i = {}),
              (n = r.value[l]),
              (i.type = a.derToOid(n.value[0].value)),
              (i.value = n.value[1].value),
              (i.valueTagClass = n.value[1].type),
              i.type in s &&
                ((i.name = s[i.type]),
                i.name in o && (i.shortName = o[i.name])),
              t && (t.update(i.type), t.update(i.value)),
              c.push(i));
        }
        return c;
      }),
        (i.CRIAttributesAsArray = function (e) {
          for (var t = [], r = 0; r < e.length; ++r)
            for (
              var n = e[r],
                c = a.derToOid(n.value[0].value),
                u = n.value[1].value,
                l = 0;
              l < u.length;
              ++l
            ) {
              var f = {};
              if (
                ((f.type = c),
                (f.value = u[l].value),
                (f.valueTagClass = u[l].type),
                f.type in s &&
                  ((f.name = s[f.type]),
                  f.name in o && (f.shortName = o[f.name])),
                f.type === s.extensionRequest)
              ) {
                f.extensions = [];
                for (var p = 0; p < f.value.length; ++p)
                  f.extensions.push(i.certificateExtensionFromAsn1(f.value[p]));
              }
              t.push(f);
            }
          return t;
        }));
      var h = function (e, t, r) {
          var n = {};
          if (e !== s["RSASSA-PSS"]) return n;
          r &&
            (n = {
              hash: { algorithmOid: s["sha1"] },
              mgf: {
                algorithmOid: s["mgf1"],
                hash: { algorithmOid: s["sha1"] },
              },
              saltLength: 20,
            });
          var i = {},
            o = [];
          if (!a.validate(t, l, i, o)) {
            var c = new Error("Cannot read RSASSA-PSS parameter block.");
            throw ((c.errors = o), c);
          }
          return (
            void 0 !== i.hashOid &&
              ((n.hash = n.hash || {}),
              (n.hash.algorithmOid = a.derToOid(i.hashOid))),
            void 0 !== i.maskGenOid &&
              ((n.mgf = n.mgf || {}),
              (n.mgf.algorithmOid = a.derToOid(i.maskGenOid)),
              (n.mgf.hash = n.mgf.hash || {}),
              (n.mgf.hash.algorithmOid = a.derToOid(i.maskGenHashOid))),
            void 0 !== i.saltLength &&
              (n.saltLength = i.saltLength.charCodeAt(0)),
            n
          );
        },
        y = function (e) {
          switch (s[e.signatureOid]) {
            case "sha1WithRSAEncryption":
            case "sha1WithRSASignature":
              return n.md.sha1.create();
            case "md5WithRSAEncryption":
              return n.md.md5.create();
            case "sha256WithRSAEncryption":
              return n.md.sha256.create();
            case "sha384WithRSAEncryption":
              return n.md.sha384.create();
            case "sha512WithRSAEncryption":
              return n.md.sha512.create();
            case "RSASSA-PSS":
              return n.md.sha256.create();
            default:
              var t = new Error(
                "Could not compute " +
                  e.type +
                  " digest. Unknown signature OID.",
              );
              throw ((t.signatureOid = e.signatureOid), t);
          }
        },
        g = function (e) {
          var t,
            r = e.certificate;
          switch (r.signatureOid) {
            case s.sha1WithRSAEncryption:
            case s.sha1WithRSASignature:
              break;
            case s["RSASSA-PSS"]:
              var a, i;
              if (
                ((a = s[r.signatureParameters.mgf.hash.algorithmOid]),
                void 0 === a || void 0 === n.md[a])
              ) {
                var o = new Error("Unsupported MGF hash function.");
                throw (
                  (o.oid = r.signatureParameters.mgf.hash.algorithmOid),
                  (o.name = a),
                  o
                );
              }
              if (
                ((i = s[r.signatureParameters.mgf.algorithmOid]),
                void 0 === i || void 0 === n.mgf[i])
              ) {
                o = new Error("Unsupported MGF function.");
                throw (
                  (o.oid = r.signatureParameters.mgf.algorithmOid),
                  (o.name = i),
                  o
                );
              }
              if (
                ((i = n.mgf[i].create(n.md[a].create())),
                (a = s[r.signatureParameters.hash.algorithmOid]),
                void 0 === a || void 0 === n.md[a])
              ) {
                o = new Error("Unsupported RSASSA-PSS hash function.");
                throw (
                  (o.oid = r.signatureParameters.hash.algorithmOid),
                  (o.name = a),
                  o
                );
              }
              t = n.pss.create(
                n.md[a].create(),
                i,
                r.signatureParameters.saltLength,
              );
              break;
          }
          return r.publicKey.verify(e.md.digest().getBytes(), e.signature, t);
        };
      function C(e) {
        for (
          var t,
            r,
            i = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []),
            s = e.attributes,
            o = 0;
          o < s.length;
          ++o
        ) {
          t = s[o];
          var c = t.value,
            u = a.Type.PRINTABLESTRING;
          ("valueTagClass" in t &&
            ((u = t.valueTagClass),
            u === a.Type.UTF8 && (c = n.util.encodeUtf8(c))),
            (r = a.create(a.Class.UNIVERSAL, a.Type.SET, !0, [
              a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OID,
                  !1,
                  a.oidToDer(t.type).getBytes(),
                ),
                a.create(a.Class.UNIVERSAL, u, !1, c),
              ]),
            ])),
            i.value.push(r));
        }
        return i;
      }
      function m(e) {
        for (var t, r = 0; r < e.length; ++r) {
          if (
            ((t = e[r]),
            "undefined" === typeof t.name &&
              (t.type && t.type in i.oids
                ? (t.name = i.oids[t.type])
                : t.shortName &&
                  t.shortName in o &&
                  (t.name = i.oids[o[t.shortName]])),
            "undefined" === typeof t.type)
          ) {
            if (!t.name || !(t.name in i.oids)) {
              var n = new Error("Attribute type not specified.");
              throw ((n.attribute = t), n);
            }
            t.type = i.oids[t.name];
          }
          if (
            ("undefined" === typeof t.shortName &&
              t.name &&
              t.name in o &&
              (t.shortName = o[t.name]),
            t.type === s.extensionRequest &&
              ((t.valueConstructed = !0),
              (t.valueTagClass = a.Type.SEQUENCE),
              !t.value && t.extensions))
          ) {
            t.value = [];
            for (var c = 0; c < t.extensions.length; ++c)
              t.value.push(i.certificateExtensionToAsn1(v(t.extensions[c])));
          }
          if ("undefined" === typeof t.value) {
            n = new Error("Attribute value not specified.");
            throw ((n.attribute = t), n);
          }
        }
      }
      function v(e, t) {
        if (
          ((t = t || {}),
          "undefined" === typeof e.name &&
            e.id &&
            e.id in i.oids &&
            (e.name = i.oids[e.id]),
          "undefined" === typeof e.id)
        ) {
          if (!e.name || !(e.name in i.oids)) {
            var r = new Error("Extension ID not specified.");
            throw ((r.extension = e), r);
          }
          e.id = i.oids[e.name];
        }
        if ("undefined" !== typeof e.value) return e;
        if ("keyUsage" === e.name) {
          var o = 0,
            c = 0,
            u = 0;
          (e.digitalSignature && ((c |= 128), (o = 7)),
            e.nonRepudiation && ((c |= 64), (o = 6)),
            e.keyEncipherment && ((c |= 32), (o = 5)),
            e.dataEncipherment && ((c |= 16), (o = 4)),
            e.keyAgreement && ((c |= 8), (o = 3)),
            e.keyCertSign && ((c |= 4), (o = 2)),
            e.cRLSign && ((c |= 2), (o = 1)),
            e.encipherOnly && ((c |= 1), (o = 0)),
            e.decipherOnly && ((u |= 128), (o = 7)));
          var l = String.fromCharCode(o);
          (0 !== u
            ? (l += String.fromCharCode(c) + String.fromCharCode(u))
            : 0 !== c && (l += String.fromCharCode(c)),
            (e.value = a.create(a.Class.UNIVERSAL, a.Type.BITSTRING, !1, l)));
        } else if ("basicConstraints" === e.name)
          ((e.value = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [])),
            e.cA &&
              e.value.value.push(
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.BOOLEAN,
                  !1,
                  String.fromCharCode(255),
                ),
              ),
            "pathLenConstraint" in e &&
              e.value.value.push(
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.INTEGER,
                  !1,
                  a.integerToDer(e.pathLenConstraint).getBytes(),
                ),
              ));
        else if ("extKeyUsage" === e.name) {
          e.value = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          var f = e.value.value;
          for (var p in e)
            !0 === e[p] &&
              (p in s
                ? f.push(
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.OID,
                      !1,
                      a.oidToDer(s[p]).getBytes(),
                    ),
                  )
                : -1 !== p.indexOf(".") &&
                  f.push(
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.OID,
                      !1,
                      a.oidToDer(p).getBytes(),
                    ),
                  ));
        } else if ("nsCertType" === e.name) {
          ((o = 0), (c = 0));
          (e.client && ((c |= 128), (o = 7)),
            e.server && ((c |= 64), (o = 6)),
            e.email && ((c |= 32), (o = 5)),
            e.objsign && ((c |= 16), (o = 4)),
            e.reserved && ((c |= 8), (o = 3)),
            e.sslCA && ((c |= 4), (o = 2)),
            e.emailCA && ((c |= 2), (o = 1)),
            e.objCA && ((c |= 1), (o = 0)));
          l = String.fromCharCode(o);
          (0 !== c && (l += String.fromCharCode(c)),
            (e.value = a.create(a.Class.UNIVERSAL, a.Type.BITSTRING, !1, l)));
        } else if ("subjectAltName" === e.name || "issuerAltName" === e.name) {
          e.value = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          for (var d = 0; d < e.altNames.length; ++d) {
            v = e.altNames[d];
            l = v.value;
            if (7 === v.type && v.ip) {
              if (((l = n.util.bytesFromIP(v.ip)), null === l)) {
                r = new Error(
                  'Extension "ip" value is not a valid IPv4 or IPv6 address.',
                );
                throw ((r.extension = e), r);
              }
            } else
              8 === v.type &&
                (l = v.oid ? a.oidToDer(a.oidToDer(v.oid)) : a.oidToDer(l));
            e.value.value.push(
              a.create(a.Class.CONTEXT_SPECIFIC, v.type, !1, l),
            );
          }
        } else if ("nsComment" === e.name && t.cert) {
          if (
            !/^[\x00-\x7F]*$/.test(e.comment) ||
            e.comment.length < 1 ||
            e.comment.length > 128
          )
            throw new Error('Invalid "nsComment" content.');
          e.value = a.create(
            a.Class.UNIVERSAL,
            a.Type.IA5STRING,
            !1,
            e.comment,
          );
        } else if ("subjectKeyIdentifier" === e.name && t.cert) {
          var h = t.cert.generateSubjectKeyIdentifier();
          ((e.subjectKeyIdentifier = h.toHex()),
            (e.value = a.create(
              a.Class.UNIVERSAL,
              a.Type.OCTETSTRING,
              !1,
              h.getBytes(),
            )));
        } else if ("authorityKeyIdentifier" === e.name && t.cert) {
          e.value = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          f = e.value.value;
          if (e.keyIdentifier) {
            var y =
              !0 === e.keyIdentifier
                ? t.cert.generateSubjectKeyIdentifier().getBytes()
                : e.keyIdentifier;
            f.push(a.create(a.Class.CONTEXT_SPECIFIC, 0, !1, y));
          }
          if (e.authorityCertIssuer) {
            var g = [
              a.create(a.Class.CONTEXT_SPECIFIC, 4, !0, [
                C(
                  !0 === e.authorityCertIssuer
                    ? t.cert.issuer
                    : e.authorityCertIssuer,
                ),
              ]),
            ];
            f.push(a.create(a.Class.CONTEXT_SPECIFIC, 1, !0, g));
          }
          if (e.serialNumber) {
            var m = n.util.hexToBytes(
              !0 === e.serialNumber ? t.cert.serialNumber : e.serialNumber,
            );
            f.push(a.create(a.Class.CONTEXT_SPECIFIC, 2, !1, m));
          }
        } else if ("cRLDistributionPoints" === e.name) {
          e.value = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          f = e.value.value;
          var v,
            E = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []),
            S = a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, []);
          for (d = 0; d < e.altNames.length; ++d) {
            v = e.altNames[d];
            l = v.value;
            if (7 === v.type && v.ip) {
              if (((l = n.util.bytesFromIP(v.ip)), null === l)) {
                r = new Error(
                  'Extension "ip" value is not a valid IPv4 or IPv6 address.',
                );
                throw ((r.extension = e), r);
              }
            } else
              8 === v.type &&
                (l = v.oid ? a.oidToDer(a.oidToDer(v.oid)) : a.oidToDer(l));
            S.value.push(a.create(a.Class.CONTEXT_SPECIFIC, v.type, !1, l));
          }
          (E.value.push(a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [S])),
            f.push(E));
        }
        if ("undefined" === typeof e.value) {
          r = new Error("Extension value not specified.");
          throw ((r.extension = e), r);
        }
        return e;
      }
      function E(e, t) {
        switch (e) {
          case s["RSASSA-PSS"]:
            var r = [];
            return (
              void 0 !== t.hash.algorithmOid &&
                r.push(
                  a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                    a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.OID,
                        !1,
                        a.oidToDer(t.hash.algorithmOid).getBytes(),
                      ),
                      a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
                    ]),
                  ]),
                ),
              void 0 !== t.mgf.algorithmOid &&
                r.push(
                  a.create(a.Class.CONTEXT_SPECIFIC, 1, !0, [
                    a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.OID,
                        !1,
                        a.oidToDer(t.mgf.algorithmOid).getBytes(),
                      ),
                      a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                        a.create(
                          a.Class.UNIVERSAL,
                          a.Type.OID,
                          !1,
                          a.oidToDer(t.mgf.hash.algorithmOid).getBytes(),
                        ),
                        a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
                      ]),
                    ]),
                  ]),
                ),
              void 0 !== t.saltLength &&
                r.push(
                  a.create(a.Class.CONTEXT_SPECIFIC, 2, !0, [
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.INTEGER,
                      !1,
                      a.integerToDer(t.saltLength).getBytes(),
                    ),
                  ]),
                ),
              a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, r)
            );
          default:
            return a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, "");
        }
      }
      function S(e) {
        var t = a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, []);
        if (0 === e.attributes.length) return t;
        for (var r = e.attributes, i = 0; i < r.length; ++i) {
          var s = r[i],
            o = s.value,
            c = a.Type.UTF8;
          ("valueTagClass" in s && (c = s.valueTagClass),
            c === a.Type.UTF8 && (o = n.util.encodeUtf8(o)));
          var u = !1;
          "valueConstructed" in s && (u = s.valueConstructed);
          var l = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.OID,
              !1,
              a.oidToDer(s.type).getBytes(),
            ),
            a.create(a.Class.UNIVERSAL, a.Type.SET, !0, [
              a.create(a.Class.UNIVERSAL, c, u, o),
            ]),
          ]);
          t.value.push(l);
        }
        return t;
      }
      ((i.certificateFromPem = function (e, t, r) {
        var s = n.pem.decode(e)[0];
        if (
          "CERTIFICATE" !== s.type &&
          "X509 CERTIFICATE" !== s.type &&
          "TRUSTED CERTIFICATE" !== s.type
        ) {
          var o = new Error(
            'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".',
          );
          throw ((o.headerType = s.type), o);
        }
        if (s.procType && "ENCRYPTED" === s.procType.type)
          throw new Error(
            "Could not convert certificate from PEM; PEM is encrypted.",
          );
        var c = a.fromDer(s.body, r);
        return i.certificateFromAsn1(c, t);
      }),
        (i.certificateToPem = function (e, t) {
          var r = {
            type: "CERTIFICATE",
            body: a.toDer(i.certificateToAsn1(e)).getBytes(),
          };
          return n.pem.encode(r, { maxline: t });
        }),
        (i.publicKeyFromPem = function (e) {
          var t = n.pem.decode(e)[0];
          if ("PUBLIC KEY" !== t.type && "RSA PUBLIC KEY" !== t.type) {
            var r = new Error(
              'Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".',
            );
            throw ((r.headerType = t.type), r);
          }
          if (t.procType && "ENCRYPTED" === t.procType.type)
            throw new Error(
              "Could not convert public key from PEM; PEM is encrypted.",
            );
          var s = a.fromDer(t.body);
          return i.publicKeyFromAsn1(s);
        }),
        (i.publicKeyToPem = function (e, t) {
          var r = {
            type: "PUBLIC KEY",
            body: a.toDer(i.publicKeyToAsn1(e)).getBytes(),
          };
          return n.pem.encode(r, { maxline: t });
        }),
        (i.publicKeyToRSAPublicKeyPem = function (e, t) {
          var r = {
            type: "RSA PUBLIC KEY",
            body: a.toDer(i.publicKeyToRSAPublicKey(e)).getBytes(),
          };
          return n.pem.encode(r, { maxline: t });
        }),
        (i.getPublicKeyFingerprint = function (e, t) {
          t = t || {};
          var r,
            s = t.md || n.md.sha1.create(),
            o = t.type || "RSAPublicKey";
          switch (o) {
            case "RSAPublicKey":
              r = a.toDer(i.publicKeyToRSAPublicKey(e)).getBytes();
              break;
            case "SubjectPublicKeyInfo":
              r = a.toDer(i.publicKeyToAsn1(e)).getBytes();
              break;
            default:
              throw new Error('Unknown fingerprint type "' + t.type + '".');
          }
          (s.start(), s.update(r));
          var c = s.digest();
          if ("hex" === t.encoding) {
            var u = c.toHex();
            return t.delimiter ? u.match(/.{2}/g).join(t.delimiter) : u;
          }
          if ("binary" === t.encoding) return c.getBytes();
          if (t.encoding)
            throw new Error('Unknown encoding "' + t.encoding + '".');
          return c;
        }),
        (i.certificationRequestFromPem = function (e, t, r) {
          var s = n.pem.decode(e)[0];
          if ("CERTIFICATE REQUEST" !== s.type) {
            var o = new Error(
              'Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".',
            );
            throw ((o.headerType = s.type), o);
          }
          if (s.procType && "ENCRYPTED" === s.procType.type)
            throw new Error(
              "Could not convert certification request from PEM; PEM is encrypted.",
            );
          var c = a.fromDer(s.body, r);
          return i.certificationRequestFromAsn1(c, t);
        }),
        (i.certificationRequestToPem = function (e, t) {
          var r = {
            type: "CERTIFICATE REQUEST",
            body: a.toDer(i.certificationRequestToAsn1(e)).getBytes(),
          };
          return n.pem.encode(r, { maxline: t });
        }),
        (i.createCertificate = function () {
          var e = {
            version: 2,
            serialNumber: "00",
            signatureOid: null,
            signature: null,
            siginfo: {},
          };
          return (
            (e.siginfo.algorithmOid = null),
            (e.validity = {}),
            (e.validity.notBefore = new Date()),
            (e.validity.notAfter = new Date()),
            (e.issuer = {}),
            (e.issuer.getField = function (t) {
              return d(e.issuer, t);
            }),
            (e.issuer.addField = function (t) {
              (m([t]), e.issuer.attributes.push(t));
            }),
            (e.issuer.attributes = []),
            (e.issuer.hash = null),
            (e.subject = {}),
            (e.subject.getField = function (t) {
              return d(e.subject, t);
            }),
            (e.subject.addField = function (t) {
              (m([t]), e.subject.attributes.push(t));
            }),
            (e.subject.attributes = []),
            (e.subject.hash = null),
            (e.extensions = []),
            (e.publicKey = null),
            (e.md = null),
            (e.setSubject = function (t, r) {
              (m(t),
                (e.subject.attributes = t),
                delete e.subject.uniqueId,
                r && (e.subject.uniqueId = r),
                (e.subject.hash = null));
            }),
            (e.setIssuer = function (t, r) {
              (m(t),
                (e.issuer.attributes = t),
                delete e.issuer.uniqueId,
                r && (e.issuer.uniqueId = r),
                (e.issuer.hash = null));
            }),
            (e.setExtensions = function (t) {
              for (var r = 0; r < t.length; ++r) v(t[r], { cert: e });
              e.extensions = t;
            }),
            (e.getExtension = function (t) {
              "string" === typeof t && (t = { name: t });
              for (
                var r, n = null, a = 0;
                null === n && a < e.extensions.length;
                ++a
              )
                ((r = e.extensions[a]),
                  ((t.id && r.id === t.id) || (t.name && r.name === t.name)) &&
                    (n = r));
              return n;
            }),
            (e.sign = function (t, r) {
              e.md = r || n.md.sha1.create();
              var o = s[e.md.algorithm + "WithRSAEncryption"];
              if (!o) {
                var c = new Error(
                  "Could not compute certificate digest. Unknown message digest algorithm OID.",
                );
                throw ((c.algorithm = e.md.algorithm), c);
              }
              ((e.signatureOid = e.siginfo.algorithmOid = o),
                (e.tbsCertificate = i.getTBSCertificate(e)));
              var u = a.toDer(e.tbsCertificate);
              (e.md.update(u.getBytes()), (e.signature = t.sign(e.md)));
            }),
            (e.verify = function (t) {
              var r = !1;
              if (!e.issued(t)) {
                var n = t.issuer,
                  s = e.subject,
                  o = new Error(
                    "The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.",
                  );
                throw (
                  (o.expectedIssuer = s.attributes),
                  (o.actualIssuer = n.attributes),
                  o
                );
              }
              var c = t.md;
              if (null === c) {
                c = y({ signatureOid: t.signatureOid, type: "certificate" });
                var u = t.tbsCertificate || i.getTBSCertificate(t),
                  l = a.toDer(u);
                c.update(l.getBytes());
              }
              return (
                null !== c &&
                  (r = g({ certificate: e, md: c, signature: t.signature })),
                r
              );
            }),
            (e.isIssuer = function (t) {
              var r = !1,
                n = e.issuer,
                a = t.subject;
              if (n.hash && a.hash) r = n.hash === a.hash;
              else if (n.attributes.length === a.attributes.length) {
                var i, s;
                r = !0;
                for (var o = 0; r && o < n.attributes.length; ++o)
                  ((i = n.attributes[o]),
                    (s = a.attributes[o]),
                    (i.type === s.type && i.value === s.value) || (r = !1));
              }
              return r;
            }),
            (e.issued = function (t) {
              return t.isIssuer(e);
            }),
            (e.generateSubjectKeyIdentifier = function () {
              return i.getPublicKeyFingerprint(e.publicKey, {
                type: "RSAPublicKey",
              });
            }),
            (e.verifySubjectKeyIdentifier = function () {
              for (
                var t = s["subjectKeyIdentifier"], r = 0;
                r < e.extensions.length;
                ++r
              ) {
                var a = e.extensions[r];
                if (a.id === t) {
                  var i = e.generateSubjectKeyIdentifier().getBytes();
                  return n.util.hexToBytes(a.subjectKeyIdentifier) === i;
                }
              }
              return !1;
            }),
            e
          );
        }),
        (i.certificateFromAsn1 = function (e, t) {
          var r = {},
            s = [];
          if (!a.validate(e, u, r, s)) {
            var o = new Error(
              "Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.",
            );
            throw ((o.errors = s), o);
          }
          var c = a.derToOid(r.publicKeyOid);
          if (c !== i.oids.rsaEncryption)
            throw new Error("Cannot read public key. OID is not RSA.");
          var l = i.createCertificate();
          l.version = r.certVersion ? r.certVersion.charCodeAt(0) : 0;
          var f = n.util.createBuffer(r.certSerialNumber);
          ((l.serialNumber = f.toHex()),
            (l.signatureOid = n.asn1.derToOid(r.certSignatureOid)),
            (l.signatureParameters = h(
              l.signatureOid,
              r.certSignatureParams,
              !0,
            )),
            (l.siginfo.algorithmOid = n.asn1.derToOid(r.certinfoSignatureOid)),
            (l.siginfo.parameters = h(
              l.siginfo.algorithmOid,
              r.certinfoSignatureParams,
              !1,
            )),
            (l.signature = r.certSignature));
          var p = [];
          if (
            (void 0 !== r.certValidity1UTCTime &&
              p.push(a.utcTimeToDate(r.certValidity1UTCTime)),
            void 0 !== r.certValidity2GeneralizedTime &&
              p.push(a.generalizedTimeToDate(r.certValidity2GeneralizedTime)),
            void 0 !== r.certValidity3UTCTime &&
              p.push(a.utcTimeToDate(r.certValidity3UTCTime)),
            void 0 !== r.certValidity4GeneralizedTime &&
              p.push(a.generalizedTimeToDate(r.certValidity4GeneralizedTime)),
            p.length > 2)
          )
            throw new Error(
              "Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.",
            );
          if (p.length < 2)
            throw new Error(
              "Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.",
            );
          if (
            ((l.validity.notBefore = p[0]),
            (l.validity.notAfter = p[1]),
            (l.tbsCertificate = r.tbsCertificate),
            t)
          ) {
            l.md = y({ signatureOid: l.signatureOid, type: "certificate" });
            var g = a.toDer(l.tbsCertificate);
            l.md.update(g.getBytes());
          }
          var C = n.md.sha1.create(),
            v = a.toDer(r.certIssuer);
          (C.update(v.getBytes()),
            (l.issuer.getField = function (e) {
              return d(l.issuer, e);
            }),
            (l.issuer.addField = function (e) {
              (m([e]), l.issuer.attributes.push(e));
            }),
            (l.issuer.attributes = i.RDNAttributesAsArray(r.certIssuer)),
            r.certIssuerUniqueId && (l.issuer.uniqueId = r.certIssuerUniqueId),
            (l.issuer.hash = C.digest().toHex()));
          var E = n.md.sha1.create(),
            S = a.toDer(r.certSubject);
          return (
            E.update(S.getBytes()),
            (l.subject.getField = function (e) {
              return d(l.subject, e);
            }),
            (l.subject.addField = function (e) {
              (m([e]), l.subject.attributes.push(e));
            }),
            (l.subject.attributes = i.RDNAttributesAsArray(r.certSubject)),
            r.certSubjectUniqueId &&
              (l.subject.uniqueId = r.certSubjectUniqueId),
            (l.subject.hash = E.digest().toHex()),
            r.certExtensions
              ? (l.extensions = i.certificateExtensionsFromAsn1(
                  r.certExtensions,
                ))
              : (l.extensions = []),
            (l.publicKey = i.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
            l
          );
        }),
        (i.certificateExtensionsFromAsn1 = function (e) {
          for (var t = [], r = 0; r < e.value.length; ++r)
            for (var n = e.value[r], a = 0; a < n.value.length; ++a)
              t.push(i.certificateExtensionFromAsn1(n.value[a]));
          return t;
        }),
        (i.certificateExtensionFromAsn1 = function (e) {
          var t = {};
          if (
            ((t.id = a.derToOid(e.value[0].value)),
            (t.critical = !1),
            e.value[1].type === a.Type.BOOLEAN
              ? ((t.critical = 0 !== e.value[1].value.charCodeAt(0)),
                (t.value = e.value[2].value))
              : (t.value = e.value[1].value),
            t.id in s)
          )
            if (((t.name = s[t.id]), "keyUsage" === t.name)) {
              var r = a.fromDer(t.value),
                i = 0,
                o = 0;
              (r.value.length > 1 &&
                ((i = r.value.charCodeAt(1)),
                (o = r.value.length > 2 ? r.value.charCodeAt(2) : 0)),
                (t.digitalSignature = 128 === (128 & i)),
                (t.nonRepudiation = 64 === (64 & i)),
                (t.keyEncipherment = 32 === (32 & i)),
                (t.dataEncipherment = 16 === (16 & i)),
                (t.keyAgreement = 8 === (8 & i)),
                (t.keyCertSign = 4 === (4 & i)),
                (t.cRLSign = 2 === (2 & i)),
                (t.encipherOnly = 1 === (1 & i)),
                (t.decipherOnly = 128 === (128 & o)));
            } else if ("basicConstraints" === t.name) {
              r = a.fromDer(t.value);
              r.value.length > 0 && r.value[0].type === a.Type.BOOLEAN
                ? (t.cA = 0 !== r.value[0].value.charCodeAt(0))
                : (t.cA = !1);
              var c = null;
              (r.value.length > 0 && r.value[0].type === a.Type.INTEGER
                ? (c = r.value[0].value)
                : r.value.length > 1 && (c = r.value[1].value),
                null !== c && (t.pathLenConstraint = a.derToInteger(c)));
            } else if ("extKeyUsage" === t.name) {
              r = a.fromDer(t.value);
              for (var u = 0; u < r.value.length; ++u) {
                var l = a.derToOid(r.value[u].value);
                l in s ? (t[s[l]] = !0) : (t[l] = !0);
              }
            } else if ("nsCertType" === t.name) {
              ((r = a.fromDer(t.value)), (i = 0));
              (r.value.length > 1 && (i = r.value.charCodeAt(1)),
                (t.client = 128 === (128 & i)),
                (t.server = 64 === (64 & i)),
                (t.email = 32 === (32 & i)),
                (t.objsign = 16 === (16 & i)),
                (t.reserved = 8 === (8 & i)),
                (t.sslCA = 4 === (4 & i)),
                (t.emailCA = 2 === (2 & i)),
                (t.objCA = 1 === (1 & i)));
            } else if (
              "subjectAltName" === t.name ||
              "issuerAltName" === t.name
            ) {
              var f;
              t.altNames = [];
              r = a.fromDer(t.value);
              for (var p = 0; p < r.value.length; ++p) {
                f = r.value[p];
                var d = { type: f.type, value: f.value };
                switch ((t.altNames.push(d), f.type)) {
                  case 1:
                  case 2:
                  case 6:
                    break;
                  case 7:
                    d.ip = n.util.bytesToIP(f.value);
                    break;
                  case 8:
                    d.oid = a.derToOid(f.value);
                    break;
                  default:
                }
              }
            } else if ("subjectKeyIdentifier" === t.name) {
              r = a.fromDer(t.value);
              t.subjectKeyIdentifier = n.util.bytesToHex(r.value);
            }
          return t;
        }),
        (i.certificationRequestFromAsn1 = function (e, t) {
          var r = {},
            s = [];
          if (!a.validate(e, p, r, s)) {
            var o = new Error(
              "Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.",
            );
            throw ((o.errors = s), o);
          }
          var c = a.derToOid(r.publicKeyOid);
          if (c !== i.oids.rsaEncryption)
            throw new Error("Cannot read public key. OID is not RSA.");
          var u = i.createCertificationRequest();
          if (
            ((u.version = r.csrVersion ? r.csrVersion.charCodeAt(0) : 0),
            (u.signatureOid = n.asn1.derToOid(r.csrSignatureOid)),
            (u.signatureParameters = h(
              u.signatureOid,
              r.csrSignatureParams,
              !0,
            )),
            (u.siginfo.algorithmOid = n.asn1.derToOid(r.csrSignatureOid)),
            (u.siginfo.parameters = h(
              u.siginfo.algorithmOid,
              r.csrSignatureParams,
              !1,
            )),
            (u.signature = r.csrSignature),
            (u.certificationRequestInfo = r.certificationRequestInfo),
            t)
          ) {
            u.md = y({
              signatureOid: u.signatureOid,
              type: "certification request",
            });
            var l = a.toDer(u.certificationRequestInfo);
            u.md.update(l.getBytes());
          }
          var f = n.md.sha1.create();
          return (
            (u.subject.getField = function (e) {
              return d(u.subject, e);
            }),
            (u.subject.addField = function (e) {
              (m([e]), u.subject.attributes.push(e));
            }),
            (u.subject.attributes = i.RDNAttributesAsArray(
              r.certificationRequestInfoSubject,
              f,
            )),
            (u.subject.hash = f.digest().toHex()),
            (u.publicKey = i.publicKeyFromAsn1(r.subjectPublicKeyInfo)),
            (u.getAttribute = function (e) {
              return d(u, e);
            }),
            (u.addAttribute = function (e) {
              (m([e]), u.attributes.push(e));
            }),
            (u.attributes = i.CRIAttributesAsArray(
              r.certificationRequestInfoAttributes || [],
            )),
            u
          );
        }),
        (i.createCertificationRequest = function () {
          var e = {
            version: 0,
            signatureOid: null,
            signature: null,
            siginfo: {},
          };
          return (
            (e.siginfo.algorithmOid = null),
            (e.subject = {}),
            (e.subject.getField = function (t) {
              return d(e.subject, t);
            }),
            (e.subject.addField = function (t) {
              (m([t]), e.subject.attributes.push(t));
            }),
            (e.subject.attributes = []),
            (e.subject.hash = null),
            (e.publicKey = null),
            (e.attributes = []),
            (e.getAttribute = function (t) {
              return d(e, t);
            }),
            (e.addAttribute = function (t) {
              (m([t]), e.attributes.push(t));
            }),
            (e.md = null),
            (e.setSubject = function (t) {
              (m(t), (e.subject.attributes = t), (e.subject.hash = null));
            }),
            (e.setAttributes = function (t) {
              (m(t), (e.attributes = t));
            }),
            (e.sign = function (t, r) {
              e.md = r || n.md.sha1.create();
              var o = s[e.md.algorithm + "WithRSAEncryption"];
              if (!o) {
                var c = new Error(
                  "Could not compute certification request digest. Unknown message digest algorithm OID.",
                );
                throw ((c.algorithm = e.md.algorithm), c);
              }
              ((e.signatureOid = e.siginfo.algorithmOid = o),
                (e.certificationRequestInfo =
                  i.getCertificationRequestInfo(e)));
              var u = a.toDer(e.certificationRequestInfo);
              (e.md.update(u.getBytes()), (e.signature = t.sign(e.md)));
            }),
            (e.verify = function () {
              var t = !1,
                r = e.md;
              if (null === r) {
                r = y({
                  signatureOid: e.signatureOid,
                  type: "certification request",
                });
                var n =
                    e.certificationRequestInfo ||
                    i.getCertificationRequestInfo(e),
                  s = a.toDer(n);
                r.update(s.getBytes());
              }
              return (
                null !== r &&
                  (t = g({ certificate: e, md: r, signature: e.signature })),
                t
              );
            }),
            e
          );
        }));
      var I = new Date("1950-01-01T00:00:00Z"),
        A = new Date("2050-01-01T00:00:00Z");
      function T(e) {
        return e >= I && e < A
          ? a.create(a.Class.UNIVERSAL, a.Type.UTCTIME, !1, a.dateToUtcTime(e))
          : a.create(
              a.Class.UNIVERSAL,
              a.Type.GENERALIZEDTIME,
              !1,
              a.dateToGeneralizedTime(e),
            );
      }
      ((i.getTBSCertificate = function (e) {
        var t = T(e.validity.notBefore),
          r = T(e.validity.notAfter),
          s = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.INTEGER,
                !1,
                a.integerToDer(e.version).getBytes(),
              ),
            ]),
            a.create(
              a.Class.UNIVERSAL,
              a.Type.INTEGER,
              !1,
              n.util.hexToBytes(e.serialNumber),
            ),
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(e.siginfo.algorithmOid).getBytes(),
              ),
              E(e.siginfo.algorithmOid, e.siginfo.parameters),
            ]),
            C(e.issuer),
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [t, r]),
            C(e.subject),
            i.publicKeyToAsn1(e.publicKey),
          ]);
        return (
          e.issuer.uniqueId &&
            s.value.push(
              a.create(a.Class.CONTEXT_SPECIFIC, 1, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.BITSTRING,
                  !1,
                  String.fromCharCode(0) + e.issuer.uniqueId,
                ),
              ]),
            ),
          e.subject.uniqueId &&
            s.value.push(
              a.create(a.Class.CONTEXT_SPECIFIC, 2, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.BITSTRING,
                  !1,
                  String.fromCharCode(0) + e.subject.uniqueId,
                ),
              ]),
            ),
          e.extensions.length > 0 &&
            s.value.push(i.certificateExtensionsToAsn1(e.extensions)),
          s
        );
      }),
        (i.getCertificationRequestInfo = function (e) {
          var t = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.INTEGER,
              !1,
              a.integerToDer(e.version).getBytes(),
            ),
            C(e.subject),
            i.publicKeyToAsn1(e.publicKey),
            S(e),
          ]);
          return t;
        }),
        (i.distinguishedNameToAsn1 = function (e) {
          return C(e);
        }),
        (i.certificateToAsn1 = function (e) {
          var t = e.tbsCertificate || i.getTBSCertificate(e);
          return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            t,
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(e.signatureOid).getBytes(),
              ),
              E(e.signatureOid, e.signatureParameters),
            ]),
            a.create(
              a.Class.UNIVERSAL,
              a.Type.BITSTRING,
              !1,
              String.fromCharCode(0) + e.signature,
            ),
          ]);
        }),
        (i.certificateExtensionsToAsn1 = function (e) {
          var t = a.create(a.Class.CONTEXT_SPECIFIC, 3, !0, []),
            r = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          t.value.push(r);
          for (var n = 0; n < e.length; ++n)
            r.value.push(i.certificateExtensionToAsn1(e[n]));
          return t;
        }),
        (i.certificateExtensionToAsn1 = function (e) {
          var t = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, []);
          (t.value.push(
            a.create(
              a.Class.UNIVERSAL,
              a.Type.OID,
              !1,
              a.oidToDer(e.id).getBytes(),
            ),
          ),
            e.critical &&
              t.value.push(
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.BOOLEAN,
                  !1,
                  String.fromCharCode(255),
                ),
              ));
          var r = e.value;
          return (
            "string" !== typeof e.value && (r = a.toDer(r).getBytes()),
            t.value.push(
              a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, r),
            ),
            t
          );
        }),
        (i.certificationRequestToAsn1 = function (e) {
          var t =
            e.certificationRequestInfo || i.getCertificationRequestInfo(e);
          return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            t,
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(e.signatureOid).getBytes(),
              ),
              E(e.signatureOid, e.signatureParameters),
            ]),
            a.create(
              a.Class.UNIVERSAL,
              a.Type.BITSTRING,
              !1,
              String.fromCharCode(0) + e.signature,
            ),
          ]);
        }),
        (i.createCaStore = function (e) {
          var t = { certs: {} };
          function r(e) {
            return (s(e), t.certs[e.hash] || null);
          }
          function s(e) {
            if (!e.hash) {
              var t = n.md.sha1.create();
              ((e.attributes = i.RDNAttributesAsArray(C(e), t)),
                (e.hash = t.digest().toHex()));
            }
          }
          if (
            ((t.getIssuer = function (e) {
              var t = r(e.issuer);
              return t;
            }),
            (t.addCertificate = function (e) {
              if (
                ("string" === typeof e && (e = n.pki.certificateFromPem(e)),
                s(e.subject),
                !t.hasCertificate(e))
              )
                if (e.subject.hash in t.certs) {
                  var r = t.certs[e.subject.hash];
                  (n.util.isArray(r) || (r = [r]),
                    r.push(e),
                    (t.certs[e.subject.hash] = r));
                } else t.certs[e.subject.hash] = e;
            }),
            (t.hasCertificate = function (e) {
              "string" === typeof e && (e = n.pki.certificateFromPem(e));
              var t = r(e.subject);
              if (!t) return !1;
              n.util.isArray(t) || (t = [t]);
              for (
                var s = a.toDer(i.certificateToAsn1(e)).getBytes(), o = 0;
                o < t.length;
                ++o
              ) {
                var c = a.toDer(i.certificateToAsn1(t[o])).getBytes();
                if (s === c) return !0;
              }
              return !1;
            }),
            (t.listAllCertificates = function () {
              var e = [];
              for (var r in t.certs)
                if (t.certs.hasOwnProperty(r)) {
                  var a = t.certs[r];
                  if (n.util.isArray(a))
                    for (var i = 0; i < a.length; ++i) e.push(a[i]);
                  else e.push(a);
                }
              return e;
            }),
            (t.removeCertificate = function (e) {
              var o;
              if (
                ("string" === typeof e && (e = n.pki.certificateFromPem(e)),
                s(e.subject),
                !t.hasCertificate(e))
              )
                return null;
              var c = r(e.subject);
              if (!n.util.isArray(c))
                return (
                  (o = t.certs[e.subject.hash]),
                  delete t.certs[e.subject.hash],
                  o
                );
              for (
                var u = a.toDer(i.certificateToAsn1(e)).getBytes(), l = 0;
                l < c.length;
                ++l
              ) {
                var f = a.toDer(i.certificateToAsn1(c[l])).getBytes();
                u === f && ((o = c[l]), c.splice(l, 1));
              }
              return (0 === c.length && delete t.certs[e.subject.hash], o);
            }),
            e)
          )
            for (var o = 0; o < e.length; ++o) {
              var c = e[o];
              t.addCertificate(c);
            }
          return t;
        }),
        (i.certificateError = {
          bad_certificate: "forge.pki.BadCertificate",
          unsupported_certificate: "forge.pki.UnsupportedCertificate",
          certificate_revoked: "forge.pki.CertificateRevoked",
          certificate_expired: "forge.pki.CertificateExpired",
          certificate_unknown: "forge.pki.CertificateUnknown",
          unknown_ca: "forge.pki.UnknownCertificateAuthority",
        }),
        (i.verifyCertificateChain = function (e, t, r) {
          ("function" === typeof r && (r = { verify: r }),
            (r = r || {}),
            (t = t.slice(0)));
          var a = t.slice(0),
            s = r.validityCheckDate;
          "undefined" === typeof s && (s = new Date());
          var o = !0,
            c = null,
            u = 0;
          do {
            var l = t.shift(),
              f = null,
              p = !1;
            if (
              (s &&
                (s < l.validity.notBefore || s > l.validity.notAfter) &&
                (c = {
                  message: "Certificate is not valid yet or has expired.",
                  error: i.certificateError.certificate_expired,
                  notBefore: l.validity.notBefore,
                  notAfter: l.validity.notAfter,
                  now: s,
                }),
              null === c)
            ) {
              if (
                ((f = t[0] || e.getIssuer(l)),
                null === f && l.isIssuer(l) && ((p = !0), (f = l)),
                f)
              ) {
                var d = f;
                n.util.isArray(d) || (d = [d]);
                var h = !1;
                while (!h && d.length > 0) {
                  f = d.shift();
                  try {
                    h = f.verify(l);
                  } catch (A) {}
                }
                h ||
                  (c = {
                    message: "Certificate signature is invalid.",
                    error: i.certificateError.bad_certificate,
                  });
              }
              null !== c ||
                (f && !p) ||
                e.hasCertificate(l) ||
                (c = {
                  message: "Certificate is not trusted.",
                  error: i.certificateError.unknown_ca,
                });
            }
            if (
              (null === c &&
                f &&
                !l.isIssuer(f) &&
                (c = {
                  message: "Certificate issuer is invalid.",
                  error: i.certificateError.bad_certificate,
                }),
              null === c)
            )
              for (
                var y = { keyUsage: !0, basicConstraints: !0 }, g = 0;
                null === c && g < l.extensions.length;
                ++g
              ) {
                var C = l.extensions[g];
                C.critical &&
                  !(C.name in y) &&
                  (c = {
                    message:
                      "Certificate has an unsupported critical extension.",
                    error: i.certificateError.unsupported_certificate,
                  });
              }
            if (null === c && (!o || (0 === t.length && (!f || p)))) {
              var m = l.getExtension("basicConstraints"),
                v = l.getExtension("keyUsage");
              if (
                (null !== v &&
                  ((v.keyCertSign && null !== m) ||
                    (c = {
                      message:
                        "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                      error: i.certificateError.bad_certificate,
                    })),
                null !== c ||
                  null === m ||
                  m.cA ||
                  (c = {
                    message:
                      "Certificate basicConstraints indicates the certificate is not a CA.",
                    error: i.certificateError.bad_certificate,
                  }),
                null === c && null !== v && "pathLenConstraint" in m)
              ) {
                var E = u - 1;
                E > m.pathLenConstraint &&
                  (c = {
                    message:
                      "Certificate basicConstraints pathLenConstraint violated.",
                    error: i.certificateError.bad_certificate,
                  });
              }
            }
            var S = null === c || c.error,
              I = r.verify ? r.verify(S, u, a) : S;
            if (!0 !== I)
              throw (
                !0 === S &&
                  (c = {
                    message: "The application rejected the certificate.",
                    error: i.certificateError.bad_certificate,
                  }),
                (I || 0 === I) &&
                  ("object" !== typeof I || n.util.isArray(I)
                    ? "string" === typeof I && (c.error = I)
                    : (I.message && (c.message = I.message),
                      I.error && (c.error = I.error))),
                c
              );
            ((c = null), (o = !1), ++u);
          } while (t.length > 0);
          return !0;
        }));
    },
    5001: function (e, t, r) {
      var n = r(2830);
      (r(3294), r(2863));
      var a = (e.exports = n.pss = n.pss || {});
      a.create = function (e) {
        3 === arguments.length &&
          (e = {
            md: arguments[0],
            mgf: arguments[1],
            saltLength: arguments[2],
          });
        var t,
          r = e.md,
          a = e.mgf,
          i = r.digestLength,
          s = e.salt || null;
        if (
          ("string" === typeof s && (s = n.util.createBuffer(s)),
          "saltLength" in e)
        )
          t = e.saltLength;
        else {
          if (null === s)
            throw new Error(
              "Salt length not specified or specific salt not given.",
            );
          t = s.length();
        }
        if (null !== s && s.length() !== t)
          throw new Error(
            "Given salt length does not match length of given salt.",
          );
        var o = e.prng || n.random,
          c = {
            encode: function (e, c) {
              var u,
                l,
                f = c - 1,
                p = Math.ceil(f / 8),
                d = e.digest().getBytes();
              if (p < i + t + 2)
                throw new Error("Message is too long to encrypt.");
              l = null === s ? o.getBytesSync(t) : s.bytes();
              var h = new n.util.ByteBuffer();
              (h.fillWithByte(0, 8),
                h.putBytes(d),
                h.putBytes(l),
                r.start(),
                r.update(h.getBytes()));
              var y = r.digest().getBytes(),
                g = new n.util.ByteBuffer();
              (g.fillWithByte(0, p - t - i - 2), g.putByte(1), g.putBytes(l));
              var C = g.getBytes(),
                m = p - i - 1,
                v = a.generate(y, m),
                E = "";
              for (u = 0; u < m; u++)
                E += String.fromCharCode(C.charCodeAt(u) ^ v.charCodeAt(u));
              var S = (65280 >> (8 * p - f)) & 255;
              return (
                (E = String.fromCharCode(E.charCodeAt(0) & ~S) + E.substr(1)),
                E + y + String.fromCharCode(188)
              );
            },
            verify: function (e, s, o) {
              var c,
                u = o - 1,
                l = Math.ceil(u / 8);
              if (((s = s.substr(-l)), l < i + t + 2))
                throw new Error(
                  "Inconsistent parameters to PSS signature verification.",
                );
              if (188 !== s.charCodeAt(l - 1))
                throw new Error("Encoded message does not end in 0xBC.");
              var f = l - i - 1,
                p = s.substr(0, f),
                d = s.substr(f, i),
                h = (65280 >> (8 * l - u)) & 255;
              if (0 !== (p.charCodeAt(0) & h))
                throw new Error("Bits beyond keysize not zero as expected.");
              var y = a.generate(d, f),
                g = "";
              for (c = 0; c < f; c++)
                g += String.fromCharCode(p.charCodeAt(c) ^ y.charCodeAt(c));
              g = String.fromCharCode(g.charCodeAt(0) & ~h) + g.substr(1);
              var C = l - i - t - 2;
              for (c = 0; c < C; c++)
                if (0 !== g.charCodeAt(c))
                  throw new Error("Leftmost octets not zero as expected");
              if (1 !== g.charCodeAt(C))
                throw new Error(
                  "Inconsistent PSS signature, 0x01 marker not found",
                );
              var m = g.substr(-t),
                v = new n.util.ByteBuffer();
              (v.fillWithByte(0, 8),
                v.putBytes(e),
                v.putBytes(m),
                r.start(),
                r.update(v.getBytes()));
              var E = r.digest().getBytes();
              return d === E;
            },
          };
        return c;
      };
    },
    6066: function (e, t, r) {
      var n = r(2830);
      (r(3372), r(4290), r(4997), r(3898), r(6067), r(3294), r(4291), r(2863));
      var a = function (e, t, r, a) {
          var i = n.util.createBuffer(),
            s = e.length >> 1,
            o = s + (1 & e.length),
            c = e.substr(0, o),
            u = e.substr(s, o),
            l = n.util.createBuffer(),
            f = n.hmac.create();
          r = t + r;
          var p = Math.ceil(a / 16),
            d = Math.ceil(a / 20);
          f.start("MD5", c);
          var h = n.util.createBuffer();
          l.putBytes(r);
          for (var y = 0; y < p; ++y)
            (f.start(null, null),
              f.update(l.getBytes()),
              l.putBuffer(f.digest()),
              f.start(null, null),
              f.update(l.bytes() + r),
              h.putBuffer(f.digest()));
          f.start("SHA1", u);
          var g = n.util.createBuffer();
          (l.clear(), l.putBytes(r));
          for (y = 0; y < d; ++y)
            (f.start(null, null),
              f.update(l.getBytes()),
              l.putBuffer(f.digest()),
              f.start(null, null),
              f.update(l.bytes() + r),
              g.putBuffer(f.digest()));
          return (
            i.putBytes(n.util.xorBytes(h.getBytes(), g.getBytes(), a)),
            i
          );
        },
        i = function (e, t, r) {
          var a = n.hmac.create();
          a.start("SHA1", e);
          var i = n.util.createBuffer();
          return (
            i.putInt32(t[0]),
            i.putInt32(t[1]),
            i.putByte(r.type),
            i.putByte(r.version.major),
            i.putByte(r.version.minor),
            i.putInt16(r.length),
            i.putBytes(r.fragment.bytes()),
            a.update(i.getBytes()),
            a.digest().getBytes()
          );
        },
        s = function (e, t, r) {
          var a = !1;
          try {
            var i = e.deflate(t.fragment.getBytes());
            ((t.fragment = n.util.createBuffer(i)),
              (t.length = i.length),
              (a = !0));
          } catch (s) {}
          return a;
        },
        o = function (e, t, r) {
          var a = !1;
          try {
            var i = e.inflate(t.fragment.getBytes());
            ((t.fragment = n.util.createBuffer(i)),
              (t.length = i.length),
              (a = !0));
          } catch (s) {}
          return a;
        },
        c = function (e, t) {
          var r = 0;
          switch (t) {
            case 1:
              r = e.getByte();
              break;
            case 2:
              r = e.getInt16();
              break;
            case 3:
              r = e.getInt24();
              break;
            case 4:
              r = e.getInt32();
              break;
          }
          return n.util.createBuffer(e.getBytes(r));
        },
        u = function (e, t, r) {
          (e.putInt(r.length(), t << 3), e.putBuffer(r));
        },
        l = {
          Versions: {
            TLS_1_0: { major: 3, minor: 1 },
            TLS_1_1: { major: 3, minor: 2 },
            TLS_1_2: { major: 3, minor: 3 },
          },
        };
      ((l.SupportedVersions = [l.Versions.TLS_1_1, l.Versions.TLS_1_0]),
        (l.Version = l.SupportedVersions[0]),
        (l.MaxFragment = 15360),
        (l.ConnectionEnd = { server: 0, client: 1 }),
        (l.PRFAlgorithm = { tls_prf_sha256: 0 }),
        (l.BulkCipherAlgorithm = { none: null, rc4: 0, des3: 1, aes: 2 }),
        (l.CipherType = { stream: 0, block: 1, aead: 2 }),
        (l.MACAlgorithm = {
          none: null,
          hmac_md5: 0,
          hmac_sha1: 1,
          hmac_sha256: 2,
          hmac_sha384: 3,
          hmac_sha512: 4,
        }),
        (l.CompressionMethod = { none: 0, deflate: 1 }),
        (l.ContentType = {
          change_cipher_spec: 20,
          alert: 21,
          handshake: 22,
          application_data: 23,
          heartbeat: 24,
        }),
        (l.HandshakeType = {
          hello_request: 0,
          client_hello: 1,
          server_hello: 2,
          certificate: 11,
          server_key_exchange: 12,
          certificate_request: 13,
          server_hello_done: 14,
          certificate_verify: 15,
          client_key_exchange: 16,
          finished: 20,
        }),
        (l.Alert = {}),
        (l.Alert.Level = { warning: 1, fatal: 2 }),
        (l.Alert.Description = {
          close_notify: 0,
          unexpected_message: 10,
          bad_record_mac: 20,
          decryption_failed: 21,
          record_overflow: 22,
          decompression_failure: 30,
          handshake_failure: 40,
          bad_certificate: 42,
          unsupported_certificate: 43,
          certificate_revoked: 44,
          certificate_expired: 45,
          certificate_unknown: 46,
          illegal_parameter: 47,
          unknown_ca: 48,
          access_denied: 49,
          decode_error: 50,
          decrypt_error: 51,
          export_restriction: 60,
          protocol_version: 70,
          insufficient_security: 71,
          internal_error: 80,
          user_canceled: 90,
          no_renegotiation: 100,
        }),
        (l.HeartbeatMessageType = {
          heartbeat_request: 1,
          heartbeat_response: 2,
        }),
        (l.CipherSuites = {}),
        (l.getCipherSuite = function (e) {
          var t = null;
          for (var r in l.CipherSuites) {
            var n = l.CipherSuites[r];
            if (n.id[0] === e.charCodeAt(0) && n.id[1] === e.charCodeAt(1)) {
              t = n;
              break;
            }
          }
          return t;
        }),
        (l.handleUnexpected = function (e, t) {
          var r = !e.open && e.entity === l.ConnectionEnd.client;
          r ||
            e.error(e, {
              message: "Unexpected message. Received TLS record out of order.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.unexpected_message,
              },
            });
        }),
        (l.handleHelloRequest = function (e, t, r) {
          (!e.handshaking &&
            e.handshakes > 0 &&
            (l.queue(
              e,
              l.createAlert(e, {
                level: l.Alert.Level.warning,
                description: l.Alert.Description.no_renegotiation,
              }),
            ),
            l.flush(e)),
            e.process());
        }),
        (l.parseHelloMessage = function (e, t, r) {
          var a = null,
            i = e.entity === l.ConnectionEnd.client;
          if (r < 38)
            e.error(e, {
              message: i
                ? "Invalid ServerHello message. Message too short."
                : "Invalid ClientHello message. Message too short.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.illegal_parameter,
              },
            });
          else {
            var s = t.fragment,
              o = s.length();
            if (
              ((a = {
                version: { major: s.getByte(), minor: s.getByte() },
                random: n.util.createBuffer(s.getBytes(32)),
                session_id: c(s, 1),
                extensions: [],
              }),
              i
                ? ((a.cipher_suite = s.getBytes(2)),
                  (a.compression_method = s.getByte()))
                : ((a.cipher_suites = c(s, 2)),
                  (a.compression_methods = c(s, 1))),
              (o = r - (o - s.length())),
              o > 0)
            ) {
              var u = c(s, 2);
              while (u.length() > 0)
                a.extensions.push({
                  type: [u.getByte(), u.getByte()],
                  data: c(u, 2),
                });
              if (!i)
                for (var f = 0; f < a.extensions.length; ++f) {
                  var p = a.extensions[f];
                  if (0 === p.type[0] && 0 === p.type[1]) {
                    var d = c(p.data, 2);
                    while (d.length() > 0) {
                      var h = d.getByte();
                      if (0 !== h) break;
                      e.session.extensions.server_name.serverNameList.push(
                        c(d, 2).getBytes(),
                      );
                    }
                  }
                }
            }
            if (
              e.session.version &&
              (a.version.major !== e.session.version.major ||
                a.version.minor !== e.session.version.minor)
            )
              return e.error(e, {
                message:
                  "TLS version change is disallowed during renegotiation.",
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.protocol_version,
                },
              });
            if (i) e.session.cipherSuite = l.getCipherSuite(a.cipher_suite);
            else {
              var y = n.util.createBuffer(a.cipher_suites.bytes());
              while (y.length() > 0)
                if (
                  ((e.session.cipherSuite = l.getCipherSuite(y.getBytes(2))),
                  null !== e.session.cipherSuite)
                )
                  break;
            }
            if (null === e.session.cipherSuite)
              return e.error(e, {
                message: "No cipher suites in common.",
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.handshake_failure,
                },
                cipherSuite: n.util.bytesToHex(a.cipher_suite),
              });
            e.session.compressionMethod = i
              ? a.compression_method
              : l.CompressionMethod.none;
          }
          return a;
        }),
        (l.createSecurityParameters = function (e, t) {
          var r = e.entity === l.ConnectionEnd.client,
            n = t.random.bytes(),
            a = r ? e.session.sp.client_random : n,
            i = r ? n : l.createRandom().getBytes();
          e.session.sp = {
            entity: e.entity,
            prf_algorithm: l.PRFAlgorithm.tls_prf_sha256,
            bulk_cipher_algorithm: null,
            cipher_type: null,
            enc_key_length: null,
            block_length: null,
            fixed_iv_length: null,
            record_iv_length: null,
            mac_algorithm: null,
            mac_length: null,
            mac_key_length: null,
            compression_algorithm: e.session.compressionMethod,
            pre_master_secret: null,
            master_secret: null,
            client_random: a,
            server_random: i,
          };
        }),
        (l.handleServerHello = function (e, t, r) {
          var n = l.parseHelloMessage(e, t, r);
          if (!e.fail) {
            if (!(n.version.minor <= e.version.minor))
              return e.error(e, {
                message: "Incompatible TLS version.",
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.protocol_version,
                },
              });
            ((e.version.minor = n.version.minor),
              (e.session.version = e.version));
            var a = n.session_id.bytes();
            (a.length > 0 && a === e.session.id
              ? ((e.expect = g),
                (e.session.resuming = !0),
                (e.session.sp.server_random = n.random.bytes()))
              : ((e.expect = p),
                (e.session.resuming = !1),
                l.createSecurityParameters(e, n)),
              (e.session.id = a),
              e.process());
          }
        }),
        (l.handleClientHello = function (e, t, r) {
          var a = l.parseHelloMessage(e, t, r);
          if (!e.fail) {
            var i = a.session_id.bytes(),
              s = null;
            if (
              (e.sessionCache &&
                ((s = e.sessionCache.getSession(i)),
                null === s
                  ? (i = "")
                  : (s.version.major !== a.version.major ||
                      s.version.minor > a.version.minor) &&
                    ((s = null), (i = ""))),
              0 === i.length && (i = n.random.getBytes(32)),
              (e.session.id = i),
              (e.session.clientHelloVersion = a.version),
              (e.session.sp = {}),
              s)
            )
              ((e.version = e.session.version = s.version),
                (e.session.sp = s.sp));
            else {
              for (var o, c = 1; c < l.SupportedVersions.length; ++c)
                if (((o = l.SupportedVersions[c]), o.minor <= a.version.minor))
                  break;
              ((e.version = { major: o.major, minor: o.minor }),
                (e.session.version = e.version));
            }
            (null !== s
              ? ((e.expect = T),
                (e.session.resuming = !0),
                (e.session.sp.client_random = a.random.bytes()))
              : ((e.expect = !1 !== e.verifyClient ? S : I),
                (e.session.resuming = !1),
                l.createSecurityParameters(e, a)),
              (e.open = !0),
              l.queue(
                e,
                l.createRecord(e, {
                  type: l.ContentType.handshake,
                  data: l.createServerHello(e),
                }),
              ),
              e.session.resuming
                ? (l.queue(
                    e,
                    l.createRecord(e, {
                      type: l.ContentType.change_cipher_spec,
                      data: l.createChangeCipherSpec(),
                    }),
                  ),
                  (e.state.pending = l.createConnectionState(e)),
                  (e.state.current.write = e.state.pending.write),
                  l.queue(
                    e,
                    l.createRecord(e, {
                      type: l.ContentType.handshake,
                      data: l.createFinished(e),
                    }),
                  ))
                : (l.queue(
                    e,
                    l.createRecord(e, {
                      type: l.ContentType.handshake,
                      data: l.createCertificate(e),
                    }),
                  ),
                  e.fail ||
                    (l.queue(
                      e,
                      l.createRecord(e, {
                        type: l.ContentType.handshake,
                        data: l.createServerKeyExchange(e),
                      }),
                    ),
                    !1 !== e.verifyClient &&
                      l.queue(
                        e,
                        l.createRecord(e, {
                          type: l.ContentType.handshake,
                          data: l.createCertificateRequest(e),
                        }),
                      ),
                    l.queue(
                      e,
                      l.createRecord(e, {
                        type: l.ContentType.handshake,
                        data: l.createServerHelloDone(e),
                      }),
                    ))),
              l.flush(e),
              e.process());
          }
        }),
        (l.handleCertificate = function (e, t, r) {
          if (r < 3)
            return e.error(e, {
              message: "Invalid Certificate message. Message too short.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.illegal_parameter,
              },
            });
          var a,
            i,
            s = t.fragment,
            o = { certificate_list: c(s, 3) },
            u = [];
          try {
            while (o.certificate_list.length() > 0)
              ((a = c(o.certificate_list, 3)),
                (i = n.asn1.fromDer(a)),
                (a = n.pki.certificateFromAsn1(i, !0)),
                u.push(a));
          } catch (p) {
            return e.error(e, {
              message: "Could not parse certificate list.",
              cause: p,
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.bad_certificate,
              },
            });
          }
          var f = e.entity === l.ConnectionEnd.client;
          ((!f && !0 !== e.verifyClient) || 0 !== u.length
            ? 0 === u.length
              ? (e.expect = f ? d : I)
              : (f
                  ? (e.session.serverCertificate = u[0])
                  : (e.session.clientCertificate = u[0]),
                l.verifyCertificateChain(e, u) && (e.expect = f ? d : I))
            : e.error(e, {
                message: f
                  ? "No server certificate provided."
                  : "No client certificate provided.",
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.illegal_parameter,
                },
              }),
            e.process());
        }),
        (l.handleServerKeyExchange = function (e, t, r) {
          if (r > 0)
            return e.error(e, {
              message: "Invalid key parameters. Only RSA is supported.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.unsupported_certificate,
              },
            });
          ((e.expect = h), e.process());
        }),
        (l.handleClientKeyExchange = function (e, t, r) {
          if (r < 48)
            return e.error(e, {
              message: "Invalid key parameters. Only RSA is supported.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.unsupported_certificate,
              },
            });
          var a = t.fragment,
            i = { enc_pre_master_secret: c(a, 2).getBytes() },
            s = null;
          if (e.getPrivateKey)
            try {
              ((s = e.getPrivateKey(e, e.session.serverCertificate)),
                (s = n.pki.privateKeyFromPem(s)));
            } catch (f) {
              e.error(e, {
                message: "Could not get private key.",
                cause: f,
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.internal_error,
                },
              });
            }
          if (null === s)
            return e.error(e, {
              message: "No private key set.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.internal_error,
              },
            });
          try {
            var o = e.session.sp;
            o.pre_master_secret = s.decrypt(i.enc_pre_master_secret);
            var u = e.session.clientHelloVersion;
            if (
              u.major !== o.pre_master_secret.charCodeAt(0) ||
              u.minor !== o.pre_master_secret.charCodeAt(1)
            )
              throw new Error("TLS version rollback attack detected.");
          } catch (f) {
            o.pre_master_secret = n.random.getBytes(48);
          }
          ((e.expect = T),
            null !== e.session.clientCertificate && (e.expect = A),
            e.process());
        }),
        (l.handleCertificateRequest = function (e, t, r) {
          if (r < 3)
            return e.error(e, {
              message: "Invalid CertificateRequest. Message too short.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.illegal_parameter,
              },
            });
          var n = t.fragment,
            a = {
              certificate_types: c(n, 1),
              certificate_authorities: c(n, 2),
            };
          ((e.session.certificateRequest = a), (e.expect = y), e.process());
        }),
        (l.handleCertificateVerify = function (e, t, r) {
          if (r < 2)
            return e.error(e, {
              message: "Invalid CertificateVerify. Message too short.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.illegal_parameter,
              },
            });
          var a = t.fragment;
          a.read -= 4;
          var i = a.bytes();
          a.read += 4;
          var s = { signature: c(a, 2).getBytes() },
            o = n.util.createBuffer();
          (o.putBuffer(e.session.md5.digest()),
            o.putBuffer(e.session.sha1.digest()),
            (o = o.getBytes()));
          try {
            var u = e.session.clientCertificate;
            if (!u.publicKey.verify(o, s.signature, "NONE"))
              throw new Error("CertificateVerify signature does not match.");
            (e.session.md5.update(i), e.session.sha1.update(i));
          } catch (f) {
            return e.error(e, {
              message: "Bad signature in CertificateVerify.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.handshake_failure,
              },
            });
          }
          ((e.expect = T), e.process());
        }),
        (l.handleServerHelloDone = function (e, t, r) {
          if (r > 0)
            return e.error(e, {
              message: "Invalid ServerHelloDone message. Invalid length.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.record_overflow,
              },
            });
          if (null === e.serverCertificate) {
            var a = {
                message: "No server certificate provided. Not enough security.",
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.insufficient_security,
                },
              },
              i = 0,
              s = e.verify(e, a.alert.description, i, []);
            if (!0 !== s)
              return (
                (s || 0 === s) &&
                  ("object" !== typeof s || n.util.isArray(s)
                    ? "number" === typeof s && (a.alert.description = s)
                    : (s.message && (a.message = s.message),
                      s.alert && (a.alert.description = s.alert))),
                e.error(e, a)
              );
          }
          (null !== e.session.certificateRequest &&
            ((t = l.createRecord(e, {
              type: l.ContentType.handshake,
              data: l.createCertificate(e),
            })),
            l.queue(e, t)),
            (t = l.createRecord(e, {
              type: l.ContentType.handshake,
              data: l.createClientKeyExchange(e),
            })),
            l.queue(e, t),
            (e.expect = v));
          var o = function (e, t) {
            (null !== e.session.certificateRequest &&
              null !== e.session.clientCertificate &&
              l.queue(
                e,
                l.createRecord(e, {
                  type: l.ContentType.handshake,
                  data: l.createCertificateVerify(e, t),
                }),
              ),
              l.queue(
                e,
                l.createRecord(e, {
                  type: l.ContentType.change_cipher_spec,
                  data: l.createChangeCipherSpec(),
                }),
              ),
              (e.state.pending = l.createConnectionState(e)),
              (e.state.current.write = e.state.pending.write),
              l.queue(
                e,
                l.createRecord(e, {
                  type: l.ContentType.handshake,
                  data: l.createFinished(e),
                }),
              ),
              (e.expect = g),
              l.flush(e),
              e.process());
          };
          if (
            null === e.session.certificateRequest ||
            null === e.session.clientCertificate
          )
            return o(e, null);
          l.getClientSignature(e, o);
        }),
        (l.handleChangeCipherSpec = function (e, t) {
          if (1 !== t.fragment.getByte())
            return e.error(e, {
              message: "Invalid ChangeCipherSpec message received.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.illegal_parameter,
              },
            });
          var r = e.entity === l.ConnectionEnd.client;
          (((e.session.resuming && r) || (!e.session.resuming && !r)) &&
            (e.state.pending = l.createConnectionState(e)),
            (e.state.current.read = e.state.pending.read),
            ((!e.session.resuming && r) || (e.session.resuming && !r)) &&
              (e.state.pending = null),
            (e.expect = r ? C : b),
            e.process());
        }),
        (l.handleFinished = function (e, t, r) {
          var i = t.fragment;
          i.read -= 4;
          var s = i.bytes();
          i.read += 4;
          var o = t.fragment.getBytes();
          ((i = n.util.createBuffer()),
            i.putBuffer(e.session.md5.digest()),
            i.putBuffer(e.session.sha1.digest()));
          var c = e.entity === l.ConnectionEnd.client,
            u = c ? "server finished" : "client finished",
            f = e.session.sp,
            p = 12,
            d = a;
          if (
            ((i = d(f.master_secret, u, i.getBytes(), p)), i.getBytes() !== o)
          )
            return e.error(e, {
              message: "Invalid verify_data in Finished message.",
              send: !0,
              alert: {
                level: l.Alert.Level.fatal,
                description: l.Alert.Description.decrypt_error,
              },
            });
          (e.session.md5.update(s),
            e.session.sha1.update(s),
            ((e.session.resuming && c) || (!e.session.resuming && !c)) &&
              (l.queue(
                e,
                l.createRecord(e, {
                  type: l.ContentType.change_cipher_spec,
                  data: l.createChangeCipherSpec(),
                }),
              ),
              (e.state.current.write = e.state.pending.write),
              (e.state.pending = null),
              l.queue(
                e,
                l.createRecord(e, {
                  type: l.ContentType.handshake,
                  data: l.createFinished(e),
                }),
              )),
            (e.expect = c ? m : B),
            (e.handshaking = !1),
            ++e.handshakes,
            (e.peerCertificate = c
              ? e.session.serverCertificate
              : e.session.clientCertificate),
            l.flush(e),
            (e.isConnected = !0),
            e.connected(e),
            e.process());
        }),
        (l.handleAlert = function (e, t) {
          var r,
            n = t.fragment,
            a = { level: n.getByte(), description: n.getByte() };
          switch (a.description) {
            case l.Alert.Description.close_notify:
              r = "Connection closed.";
              break;
            case l.Alert.Description.unexpected_message:
              r = "Unexpected message.";
              break;
            case l.Alert.Description.bad_record_mac:
              r = "Bad record MAC.";
              break;
            case l.Alert.Description.decryption_failed:
              r = "Decryption failed.";
              break;
            case l.Alert.Description.record_overflow:
              r = "Record overflow.";
              break;
            case l.Alert.Description.decompression_failure:
              r = "Decompression failed.";
              break;
            case l.Alert.Description.handshake_failure:
              r = "Handshake failure.";
              break;
            case l.Alert.Description.bad_certificate:
              r = "Bad certificate.";
              break;
            case l.Alert.Description.unsupported_certificate:
              r = "Unsupported certificate.";
              break;
            case l.Alert.Description.certificate_revoked:
              r = "Certificate revoked.";
              break;
            case l.Alert.Description.certificate_expired:
              r = "Certificate expired.";
              break;
            case l.Alert.Description.certificate_unknown:
              r = "Certificate unknown.";
              break;
            case l.Alert.Description.illegal_parameter:
              r = "Illegal parameter.";
              break;
            case l.Alert.Description.unknown_ca:
              r = "Unknown certificate authority.";
              break;
            case l.Alert.Description.access_denied:
              r = "Access denied.";
              break;
            case l.Alert.Description.decode_error:
              r = "Decode error.";
              break;
            case l.Alert.Description.decrypt_error:
              r = "Decrypt error.";
              break;
            case l.Alert.Description.export_restriction:
              r = "Export restriction.";
              break;
            case l.Alert.Description.protocol_version:
              r = "Unsupported protocol version.";
              break;
            case l.Alert.Description.insufficient_security:
              r = "Insufficient security.";
              break;
            case l.Alert.Description.internal_error:
              r = "Internal error.";
              break;
            case l.Alert.Description.user_canceled:
              r = "User canceled.";
              break;
            case l.Alert.Description.no_renegotiation:
              r = "Renegotiation not supported.";
              break;
            default:
              r = "Unknown error.";
              break;
          }
          if (a.description === l.Alert.Description.close_notify)
            return e.close();
          (e.error(e, {
            message: r,
            send: !1,
            origin: e.entity === l.ConnectionEnd.client ? "server" : "client",
            alert: a,
          }),
            e.process());
        }),
        (l.handleHandshake = function (e, t) {
          var r = t.fragment,
            a = r.getByte(),
            i = r.getInt24();
          if (i > r.length())
            return (
              (e.fragmented = t),
              (t.fragment = n.util.createBuffer()),
              (r.read -= 4),
              e.process()
            );
          ((e.fragmented = null), (r.read -= 4));
          var s = r.bytes(i + 4);
          ((r.read += 4),
            a in M[e.entity][e.expect]
              ? (e.entity !== l.ConnectionEnd.server ||
                  e.open ||
                  e.fail ||
                  ((e.handshaking = !0),
                  (e.session = {
                    version: null,
                    extensions: { server_name: { serverNameList: [] } },
                    cipherSuite: null,
                    compressionMethod: null,
                    serverCertificate: null,
                    clientCertificate: null,
                    md5: n.md.md5.create(),
                    sha1: n.md.sha1.create(),
                  })),
                a !== l.HandshakeType.hello_request &&
                  a !== l.HandshakeType.certificate_verify &&
                  a !== l.HandshakeType.finished &&
                  (e.session.md5.update(s), e.session.sha1.update(s)),
                M[e.entity][e.expect][a](e, t, i))
              : l.handleUnexpected(e, t));
        }),
        (l.handleApplicationData = function (e, t) {
          (e.data.putBuffer(t.fragment), e.dataReady(e), e.process());
        }),
        (l.handleHeartbeat = function (e, t) {
          var r = t.fragment,
            a = r.getByte(),
            i = r.getInt16(),
            s = r.getBytes(i);
          if (a === l.HeartbeatMessageType.heartbeat_request) {
            if (e.handshaking || i > s.length) return e.process();
            (l.queue(
              e,
              l.createRecord(e, {
                type: l.ContentType.heartbeat,
                data: l.createHeartbeat(
                  l.HeartbeatMessageType.heartbeat_response,
                  s,
                ),
              }),
            ),
              l.flush(e));
          } else if (a === l.HeartbeatMessageType.heartbeat_response) {
            if (s !== e.expectedHeartbeatPayload) return e.process();
            e.heartbeatReceived &&
              e.heartbeatReceived(e, n.util.createBuffer(s));
          }
          e.process();
        }));
      var f = 0,
        p = 1,
        d = 2,
        h = 3,
        y = 4,
        g = 5,
        C = 6,
        m = 7,
        v = 8,
        E = 0,
        S = 1,
        I = 2,
        A = 3,
        T = 4,
        b = 5,
        B = 6,
        N = l.handleUnexpected,
        R = l.handleChangeCipherSpec,
        L = l.handleAlert,
        w = l.handleHandshake,
        U = l.handleApplicationData,
        k = l.handleHeartbeat,
        D = [];
      ((D[l.ConnectionEnd.client] = [
        [N, L, w, N, k],
        [N, L, w, N, k],
        [N, L, w, N, k],
        [N, L, w, N, k],
        [N, L, w, N, k],
        [R, L, N, N, k],
        [N, L, w, N, k],
        [N, L, w, U, k],
        [N, L, w, N, k],
      ]),
        (D[l.ConnectionEnd.server] = [
          [N, L, w, N, k],
          [N, L, w, N, k],
          [N, L, w, N, k],
          [N, L, w, N, k],
          [R, L, N, N, k],
          [N, L, w, N, k],
          [N, L, w, U, k],
          [N, L, w, N, k],
        ]));
      var _ = l.handleHelloRequest,
        V = l.handleServerHello,
        P = l.handleCertificate,
        O = l.handleServerKeyExchange,
        K = l.handleCertificateRequest,
        x = l.handleServerHelloDone,
        F = l.handleFinished,
        M = [];
      M[l.ConnectionEnd.client] = [
        [N, N, V, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, P, O, K, x, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, N, O, K, x, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, N, N, K, x, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, N, N, N, x, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, F],
        [_, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [_, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      ];
      var q = l.handleClientHello,
        j = l.handleClientKeyExchange,
        G = l.handleCertificateVerify;
      ((M[l.ConnectionEnd.server] = [
        [N, q, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, P, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, j, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, G, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, F],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      ]),
        (l.generateKeys = function (e, t) {
          var r = a,
            n = t.client_random + t.server_random;
          (e.session.resuming ||
            ((t.master_secret = r(
              t.pre_master_secret,
              "master secret",
              n,
              48,
            ).bytes()),
            (t.pre_master_secret = null)),
            (n = t.server_random + t.client_random));
          var i = 2 * t.mac_key_length + 2 * t.enc_key_length,
            s =
              e.version.major === l.Versions.TLS_1_0.major &&
              e.version.minor === l.Versions.TLS_1_0.minor;
          s && (i += 2 * t.fixed_iv_length);
          var o = r(t.master_secret, "key expansion", n, i),
            c = {
              client_write_MAC_key: o.getBytes(t.mac_key_length),
              server_write_MAC_key: o.getBytes(t.mac_key_length),
              client_write_key: o.getBytes(t.enc_key_length),
              server_write_key: o.getBytes(t.enc_key_length),
            };
          return (
            s &&
              ((c.client_write_IV = o.getBytes(t.fixed_iv_length)),
              (c.server_write_IV = o.getBytes(t.fixed_iv_length))),
            c
          );
        }),
        (l.createConnectionState = function (e) {
          var t = e.entity === l.ConnectionEnd.client,
            r = function () {
              var e = {
                sequenceNumber: [0, 0],
                macKey: null,
                macLength: 0,
                macFunction: null,
                cipherState: null,
                cipherFunction: function (e) {
                  return !0;
                },
                compressionState: null,
                compressFunction: function (e) {
                  return !0;
                },
                updateSequenceNumber: function () {
                  4294967295 === e.sequenceNumber[1]
                    ? ((e.sequenceNumber[1] = 0), ++e.sequenceNumber[0])
                    : ++e.sequenceNumber[1];
                },
              };
              return e;
            },
            n = { read: r(), write: r() };
          if (
            ((n.read.update = function (e, t) {
              return (
                n.read.cipherFunction(t, n.read)
                  ? n.read.compressFunction(e, t, n.read) ||
                    e.error(e, {
                      message: "Could not decompress record.",
                      send: !0,
                      alert: {
                        level: l.Alert.Level.fatal,
                        description: l.Alert.Description.decompression_failure,
                      },
                    })
                  : e.error(e, {
                      message: "Could not decrypt record or bad MAC.",
                      send: !0,
                      alert: {
                        level: l.Alert.Level.fatal,
                        description: l.Alert.Description.bad_record_mac,
                      },
                    }),
                !e.fail
              );
            }),
            (n.write.update = function (e, t) {
              return (
                n.write.compressFunction(e, t, n.write)
                  ? n.write.cipherFunction(t, n.write) ||
                    e.error(e, {
                      message: "Could not encrypt record.",
                      send: !1,
                      alert: {
                        level: l.Alert.Level.fatal,
                        description: l.Alert.Description.internal_error,
                      },
                    })
                  : e.error(e, {
                      message: "Could not compress record.",
                      send: !1,
                      alert: {
                        level: l.Alert.Level.fatal,
                        description: l.Alert.Description.internal_error,
                      },
                    }),
                !e.fail
              );
            }),
            e.session)
          ) {
            var a = e.session.sp;
            switch (
              (e.session.cipherSuite.initSecurityParameters(a),
              (a.keys = l.generateKeys(e, a)),
              (n.read.macKey = t
                ? a.keys.server_write_MAC_key
                : a.keys.client_write_MAC_key),
              (n.write.macKey = t
                ? a.keys.client_write_MAC_key
                : a.keys.server_write_MAC_key),
              e.session.cipherSuite.initConnectionState(n, e, a),
              a.compression_algorithm)
            ) {
              case l.CompressionMethod.none:
                break;
              case l.CompressionMethod.deflate:
                ((n.read.compressFunction = o), (n.write.compressFunction = s));
                break;
              default:
                throw new Error("Unsupported compression algorithm.");
            }
          }
          return n;
        }),
        (l.createRandom = function () {
          var e = new Date(),
            t = +e + 6e4 * e.getTimezoneOffset(),
            r = n.util.createBuffer();
          return (r.putInt32(t), r.putBytes(n.random.getBytes(28)), r);
        }),
        (l.createRecord = function (e, t) {
          if (!t.data) return null;
          var r = {
            type: t.type,
            version: { major: e.version.major, minor: e.version.minor },
            length: t.data.length(),
            fragment: t.data,
          };
          return r;
        }),
        (l.createAlert = function (e, t) {
          var r = n.util.createBuffer();
          return (
            r.putByte(t.level),
            r.putByte(t.description),
            l.createRecord(e, { type: l.ContentType.alert, data: r })
          );
        }),
        (l.createClientHello = function (e) {
          e.session.clientHelloVersion = {
            major: e.version.major,
            minor: e.version.minor,
          };
          for (
            var t = n.util.createBuffer(), r = 0;
            r < e.cipherSuites.length;
            ++r
          ) {
            var a = e.cipherSuites[r];
            (t.putByte(a.id[0]), t.putByte(a.id[1]));
          }
          var i = t.length(),
            s = n.util.createBuffer();
          s.putByte(l.CompressionMethod.none);
          var o = s.length(),
            c = n.util.createBuffer();
          if (e.virtualHost) {
            var f = n.util.createBuffer();
            (f.putByte(0), f.putByte(0));
            var p = n.util.createBuffer();
            (p.putByte(0), u(p, 2, n.util.createBuffer(e.virtualHost)));
            var d = n.util.createBuffer();
            (u(d, 2, p), u(f, 2, d), c.putBuffer(f));
          }
          var h = c.length();
          h > 0 && (h += 2);
          var y = e.session.id,
            g = y.length + 1 + 2 + 4 + 28 + 2 + i + 1 + o + h,
            C = n.util.createBuffer();
          return (
            C.putByte(l.HandshakeType.client_hello),
            C.putInt24(g),
            C.putByte(e.version.major),
            C.putByte(e.version.minor),
            C.putBytes(e.session.sp.client_random),
            u(C, 1, n.util.createBuffer(y)),
            u(C, 2, t),
            u(C, 1, s),
            h > 0 && u(C, 2, c),
            C
          );
        }),
        (l.createServerHello = function (e) {
          var t = e.session.id,
            r = t.length + 1 + 2 + 4 + 28 + 2 + 1,
            a = n.util.createBuffer();
          return (
            a.putByte(l.HandshakeType.server_hello),
            a.putInt24(r),
            a.putByte(e.version.major),
            a.putByte(e.version.minor),
            a.putBytes(e.session.sp.server_random),
            u(a, 1, n.util.createBuffer(t)),
            a.putByte(e.session.cipherSuite.id[0]),
            a.putByte(e.session.cipherSuite.id[1]),
            a.putByte(e.session.compressionMethod),
            a
          );
        }),
        (l.createCertificate = function (e) {
          var t,
            r = e.entity === l.ConnectionEnd.client,
            a = null;
          e.getCertificate &&
            ((t = r
              ? e.session.certificateRequest
              : e.session.extensions.server_name.serverNameList),
            (a = e.getCertificate(e, t)));
          var i = n.util.createBuffer();
          if (null !== a)
            try {
              n.util.isArray(a) || (a = [a]);
              for (var s = null, o = 0; o < a.length; ++o) {
                var c = n.pem.decode(a[o])[0];
                if (
                  "CERTIFICATE" !== c.type &&
                  "X509 CERTIFICATE" !== c.type &&
                  "TRUSTED CERTIFICATE" !== c.type
                ) {
                  var f = new Error(
                    'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".',
                  );
                  throw ((f.headerType = c.type), f);
                }
                if (c.procType && "ENCRYPTED" === c.procType.type)
                  throw new Error(
                    "Could not convert certificate from PEM; PEM is encrypted.",
                  );
                var p = n.util.createBuffer(c.body);
                null === s && (s = n.asn1.fromDer(p.bytes(), !1));
                var d = n.util.createBuffer();
                (u(d, 3, p), i.putBuffer(d));
              }
              ((a = n.pki.certificateFromAsn1(s)),
                r
                  ? (e.session.clientCertificate = a)
                  : (e.session.serverCertificate = a));
            } catch (g) {
              return e.error(e, {
                message: "Could not send certificate list.",
                cause: g,
                send: !0,
                alert: {
                  level: l.Alert.Level.fatal,
                  description: l.Alert.Description.bad_certificate,
                },
              });
            }
          var h = 3 + i.length(),
            y = n.util.createBuffer();
          return (
            y.putByte(l.HandshakeType.certificate),
            y.putInt24(h),
            u(y, 3, i),
            y
          );
        }),
        (l.createClientKeyExchange = function (e) {
          var t = n.util.createBuffer();
          (t.putByte(e.session.clientHelloVersion.major),
            t.putByte(e.session.clientHelloVersion.minor),
            t.putBytes(n.random.getBytes(46)));
          var r = e.session.sp;
          r.pre_master_secret = t.getBytes();
          var a = e.session.serverCertificate.publicKey;
          t = a.encrypt(r.pre_master_secret);
          var i = t.length + 2,
            s = n.util.createBuffer();
          return (
            s.putByte(l.HandshakeType.client_key_exchange),
            s.putInt24(i),
            s.putInt16(t.length),
            s.putBytes(t),
            s
          );
        }),
        (l.createServerKeyExchange = function (e) {
          var t = 0,
            r = n.util.createBuffer();
          return (
            t > 0 &&
              (r.putByte(l.HandshakeType.server_key_exchange), r.putInt24(t)),
            r
          );
        }),
        (l.getClientSignature = function (e, t) {
          var r = n.util.createBuffer();
          (r.putBuffer(e.session.md5.digest()),
            r.putBuffer(e.session.sha1.digest()),
            (r = r.getBytes()),
            (e.getSignature =
              e.getSignature ||
              function (e, t, r) {
                var a = null;
                if (e.getPrivateKey)
                  try {
                    ((a = e.getPrivateKey(e, e.session.clientCertificate)),
                      (a = n.pki.privateKeyFromPem(a)));
                  } catch (i) {
                    e.error(e, {
                      message: "Could not get private key.",
                      cause: i,
                      send: !0,
                      alert: {
                        level: l.Alert.Level.fatal,
                        description: l.Alert.Description.internal_error,
                      },
                    });
                  }
                (null === a
                  ? e.error(e, {
                      message: "No private key set.",
                      send: !0,
                      alert: {
                        level: l.Alert.Level.fatal,
                        description: l.Alert.Description.internal_error,
                      },
                    })
                  : (t = a.sign(t, null)),
                  r(e, t));
              }),
            e.getSignature(e, r, t));
        }),
        (l.createCertificateVerify = function (e, t) {
          var r = t.length + 2,
            a = n.util.createBuffer();
          return (
            a.putByte(l.HandshakeType.certificate_verify),
            a.putInt24(r),
            a.putInt16(t.length),
            a.putBytes(t),
            a
          );
        }),
        (l.createCertificateRequest = function (e) {
          var t = n.util.createBuffer();
          t.putByte(1);
          var r = n.util.createBuffer();
          for (var a in e.caStore.certs) {
            var i = e.caStore.certs[a],
              s = n.pki.distinguishedNameToAsn1(i.subject),
              o = n.asn1.toDer(s);
            (r.putInt16(o.length()), r.putBuffer(o));
          }
          var c = 1 + t.length() + 2 + r.length(),
            f = n.util.createBuffer();
          return (
            f.putByte(l.HandshakeType.certificate_request),
            f.putInt24(c),
            u(f, 1, t),
            u(f, 2, r),
            f
          );
        }),
        (l.createServerHelloDone = function (e) {
          var t = n.util.createBuffer();
          return (
            t.putByte(l.HandshakeType.server_hello_done),
            t.putInt24(0),
            t
          );
        }),
        (l.createChangeCipherSpec = function () {
          var e = n.util.createBuffer();
          return (e.putByte(1), e);
        }),
        (l.createFinished = function (e) {
          var t = n.util.createBuffer();
          (t.putBuffer(e.session.md5.digest()),
            t.putBuffer(e.session.sha1.digest()));
          var r = e.entity === l.ConnectionEnd.client,
            i = e.session.sp,
            s = 12,
            o = a,
            c = r ? "client finished" : "server finished";
          t = o(i.master_secret, c, t.getBytes(), s);
          var u = n.util.createBuffer();
          return (
            u.putByte(l.HandshakeType.finished),
            u.putInt24(t.length()),
            u.putBuffer(t),
            u
          );
        }),
        (l.createHeartbeat = function (e, t, r) {
          "undefined" === typeof r && (r = t.length);
          var a = n.util.createBuffer();
          (a.putByte(e), a.putInt16(r), a.putBytes(t));
          var i = a.length(),
            s = Math.max(16, i - r - 3);
          return (a.putBytes(n.random.getBytes(s)), a);
        }),
        (l.queue = function (e, t) {
          if (
            t &&
            (0 !== t.fragment.length() ||
              (t.type !== l.ContentType.handshake &&
                t.type !== l.ContentType.alert &&
                t.type !== l.ContentType.change_cipher_spec))
          ) {
            if (t.type === l.ContentType.handshake) {
              var r = t.fragment.bytes();
              (e.session.md5.update(r), e.session.sha1.update(r), (r = null));
            }
            var a;
            if (t.fragment.length() <= l.MaxFragment) a = [t];
            else {
              a = [];
              var i = t.fragment.bytes();
              while (i.length > l.MaxFragment)
                (a.push(
                  l.createRecord(e, {
                    type: t.type,
                    data: n.util.createBuffer(i.slice(0, l.MaxFragment)),
                  }),
                ),
                  (i = i.slice(l.MaxFragment)));
              i.length > 0 &&
                a.push(
                  l.createRecord(e, {
                    type: t.type,
                    data: n.util.createBuffer(i),
                  }),
                );
            }
            for (var s = 0; s < a.length && !e.fail; ++s) {
              var o = a[s],
                c = e.state.current.write;
              c.update(e, o) && e.records.push(o);
            }
          }
        }),
        (l.flush = function (e) {
          for (var t = 0; t < e.records.length; ++t) {
            var r = e.records[t];
            (e.tlsData.putByte(r.type),
              e.tlsData.putByte(r.version.major),
              e.tlsData.putByte(r.version.minor),
              e.tlsData.putInt16(r.fragment.length()),
              e.tlsData.putBuffer(e.records[t].fragment));
          }
          return ((e.records = []), e.tlsDataReady(e));
        }));
      var Q = function (e) {
          switch (e) {
            case !0:
              return !0;
            case n.pki.certificateError.bad_certificate:
              return l.Alert.Description.bad_certificate;
            case n.pki.certificateError.unsupported_certificate:
              return l.Alert.Description.unsupported_certificate;
            case n.pki.certificateError.certificate_revoked:
              return l.Alert.Description.certificate_revoked;
            case n.pki.certificateError.certificate_expired:
              return l.Alert.Description.certificate_expired;
            case n.pki.certificateError.certificate_unknown:
              return l.Alert.Description.certificate_unknown;
            case n.pki.certificateError.unknown_ca:
              return l.Alert.Description.unknown_ca;
            default:
              return l.Alert.Description.bad_certificate;
          }
        },
        H = function (e) {
          switch (e) {
            case !0:
              return !0;
            case l.Alert.Description.bad_certificate:
              return n.pki.certificateError.bad_certificate;
            case l.Alert.Description.unsupported_certificate:
              return n.pki.certificateError.unsupported_certificate;
            case l.Alert.Description.certificate_revoked:
              return n.pki.certificateError.certificate_revoked;
            case l.Alert.Description.certificate_expired:
              return n.pki.certificateError.certificate_expired;
            case l.Alert.Description.certificate_unknown:
              return n.pki.certificateError.certificate_unknown;
            case l.Alert.Description.unknown_ca:
              return n.pki.certificateError.unknown_ca;
            default:
              return n.pki.certificateError.bad_certificate;
          }
        };
      for (var X in ((l.verifyCertificateChain = function (e, t) {
        try {
          var r = {};
          for (var a in e.verifyOptions) r[a] = e.verifyOptions[a];
          ((r.verify = function (t, r, a) {
            Q(t);
            var i = e.verify(e, t, r, a);
            if (!0 !== i) {
              if ("object" === typeof i && !n.util.isArray(i)) {
                var s = new Error("The application rejected the certificate.");
                throw (
                  (s.send = !0),
                  (s.alert = {
                    level: l.Alert.Level.fatal,
                    description: l.Alert.Description.bad_certificate,
                  }),
                  i.message && (s.message = i.message),
                  i.alert && (s.alert.description = i.alert),
                  s
                );
              }
              i !== t && (i = H(i));
            }
            return i;
          }),
            n.pki.verifyCertificateChain(e.caStore, t, r));
        } catch (s) {
          var i = s;
          (("object" !== typeof i || n.util.isArray(i)) &&
            (i = {
              send: !0,
              alert: { level: l.Alert.Level.fatal, description: Q(s) },
            }),
            "send" in i || (i.send = !0),
            "alert" in i ||
              (i.alert = {
                level: l.Alert.Level.fatal,
                description: Q(i.error),
              }),
            e.error(e, i));
        }
        return !e.fail;
      }),
      (l.createSessionCache = function (e, t) {
        var r = null;
        if (e && e.getSession && e.setSession && e.order) r = e;
        else {
          for (var a in ((r = {}),
          (r.cache = e || {}),
          (r.capacity = Math.max(t || 100, 1)),
          (r.order = []),
          e))
            r.order.length <= t ? r.order.push(a) : delete e[a];
          ((r.getSession = function (e) {
            var t = null,
              a = null;
            if (
              (e
                ? (a = n.util.bytesToHex(e))
                : r.order.length > 0 && (a = r.order[0]),
              null !== a && a in r.cache)
            )
              for (var i in ((t = r.cache[a]), delete r.cache[a], r.order))
                if (r.order[i] === a) {
                  r.order.splice(i, 1);
                  break;
                }
            return t;
          }),
            (r.setSession = function (e, t) {
              if (r.order.length === r.capacity) {
                var a = r.order.shift();
                delete r.cache[a];
              }
              a = n.util.bytesToHex(e);
              (r.order.push(a), (r.cache[a] = t));
            }));
        }
        return r;
      }),
      (l.createConnection = function (e) {
        var t = null;
        t = e.caStore
          ? n.util.isArray(e.caStore)
            ? n.pki.createCaStore(e.caStore)
            : e.caStore
          : n.pki.createCaStore();
        var r = e.cipherSuites || null;
        if (null === r)
          for (var a in ((r = []), l.CipherSuites)) r.push(l.CipherSuites[a]);
        var i = e.server ? l.ConnectionEnd.server : l.ConnectionEnd.client,
          s = e.sessionCache ? l.createSessionCache(e.sessionCache) : null,
          o = {
            version: { major: l.Version.major, minor: l.Version.minor },
            entity: i,
            sessionId: e.sessionId,
            caStore: t,
            sessionCache: s,
            cipherSuites: r,
            connected: e.connected,
            virtualHost: e.virtualHost || null,
            verifyClient: e.verifyClient || !1,
            verify:
              e.verify ||
              function (e, t, r, n) {
                return t;
              },
            verifyOptions: e.verifyOptions || {},
            getCertificate: e.getCertificate || null,
            getPrivateKey: e.getPrivateKey || null,
            getSignature: e.getSignature || null,
            input: n.util.createBuffer(),
            tlsData: n.util.createBuffer(),
            data: n.util.createBuffer(),
            tlsDataReady: e.tlsDataReady,
            dataReady: e.dataReady,
            heartbeatReceived: e.heartbeatReceived,
            closed: e.closed,
            error: function (t, r) {
              ((r.origin =
                r.origin ||
                (t.entity === l.ConnectionEnd.client ? "client" : "server")),
                r.send && (l.queue(t, l.createAlert(t, r.alert)), l.flush(t)));
              var n = !1 !== r.fatal;
              (n && (t.fail = !0), e.error(t, r), n && t.close(!1));
            },
            deflate: e.deflate || null,
            inflate: e.inflate || null,
            reset: function (e) {
              ((o.version = { major: l.Version.major, minor: l.Version.minor }),
                (o.record = null),
                (o.session = null),
                (o.peerCertificate = null),
                (o.state = { pending: null, current: null }),
                (o.expect = o.entity === l.ConnectionEnd.client ? f : E),
                (o.fragmented = null),
                (o.records = []),
                (o.open = !1),
                (o.handshakes = 0),
                (o.handshaking = !1),
                (o.isConnected = !1),
                (o.fail = !(e || "undefined" === typeof e)),
                o.input.clear(),
                o.tlsData.clear(),
                o.data.clear(),
                (o.state.current = l.createConnectionState(o)));
            },
          };
        o.reset();
        var c = function (e, t) {
            var r = t.type - l.ContentType.change_cipher_spec,
              n = D[e.entity][e.expect];
            r in n ? n[r](e, t) : l.handleUnexpected(e, t);
          },
          u = function (e) {
            var t = 0,
              r = e.input,
              a = r.length();
            if (a < 5) t = 5 - a;
            else {
              e.record = {
                type: r.getByte(),
                version: { major: r.getByte(), minor: r.getByte() },
                length: r.getInt16(),
                fragment: n.util.createBuffer(),
                ready: !1,
              };
              var i = e.record.version.major === e.version.major;
              (i &&
                e.session &&
                e.session.version &&
                (i = e.record.version.minor === e.version.minor),
                i ||
                  e.error(e, {
                    message: "Incompatible TLS version.",
                    send: !0,
                    alert: {
                      level: l.Alert.Level.fatal,
                      description: l.Alert.Description.protocol_version,
                    },
                  }));
            }
            return t;
          },
          p = function (e) {
            var t = 0,
              r = e.input,
              n = r.length();
            if (n < e.record.length) t = e.record.length - n;
            else {
              (e.record.fragment.putBytes(r.getBytes(e.record.length)),
                r.compact());
              var a = e.state.current.read;
              a.update(e, e.record) &&
                (null !== e.fragmented &&
                  (e.fragmented.type === e.record.type
                    ? (e.fragmented.fragment.putBuffer(e.record.fragment),
                      (e.record = e.fragmented))
                    : e.error(e, {
                        message: "Invalid fragmented record.",
                        send: !0,
                        alert: {
                          level: l.Alert.Level.fatal,
                          description: l.Alert.Description.unexpected_message,
                        },
                      })),
                (e.record.ready = !0));
            }
            return t;
          };
        return (
          (o.handshake = function (e) {
            if (o.entity !== l.ConnectionEnd.client)
              o.error(o, {
                message: "Cannot initiate handshake as a server.",
                fatal: !1,
              });
            else if (o.handshaking)
              o.error(o, {
                message: "Handshake already in progress.",
                fatal: !1,
              });
            else {
              (o.fail && !o.open && 0 === o.handshakes && (o.fail = !1),
                (o.handshaking = !0),
                (e = e || ""));
              var t = null;
              (e.length > 0 &&
                (o.sessionCache && (t = o.sessionCache.getSession(e)),
                null === t && (e = "")),
                0 === e.length &&
                  o.sessionCache &&
                  ((t = o.sessionCache.getSession()), null !== t && (e = t.id)),
                (o.session = {
                  id: e,
                  version: null,
                  cipherSuite: null,
                  compressionMethod: null,
                  serverCertificate: null,
                  certificateRequest: null,
                  clientCertificate: null,
                  sp: {},
                  md5: n.md.md5.create(),
                  sha1: n.md.sha1.create(),
                }),
                t && ((o.version = t.version), (o.session.sp = t.sp)),
                (o.session.sp.client_random = l.createRandom().getBytes()),
                (o.open = !0),
                l.queue(
                  o,
                  l.createRecord(o, {
                    type: l.ContentType.handshake,
                    data: l.createClientHello(o),
                  }),
                ),
                l.flush(o));
            }
          }),
          (o.process = function (e) {
            var t = 0;
            return (
              e && o.input.putBytes(e),
              o.fail ||
                (null !== o.record &&
                  o.record.ready &&
                  o.record.fragment.isEmpty() &&
                  (o.record = null),
                null === o.record && (t = u(o)),
                o.fail || null === o.record || o.record.ready || (t = p(o)),
                !o.fail &&
                  null !== o.record &&
                  o.record.ready &&
                  c(o, o.record)),
              t
            );
          }),
          (o.prepare = function (e) {
            return (
              l.queue(
                o,
                l.createRecord(o, {
                  type: l.ContentType.application_data,
                  data: n.util.createBuffer(e),
                }),
              ),
              l.flush(o)
            );
          }),
          (o.prepareHeartbeatRequest = function (e, t) {
            return (
              e instanceof n.util.ByteBuffer && (e = e.bytes()),
              "undefined" === typeof t && (t = e.length),
              (o.expectedHeartbeatPayload = e),
              l.queue(
                o,
                l.createRecord(o, {
                  type: l.ContentType.heartbeat,
                  data: l.createHeartbeat(
                    l.HeartbeatMessageType.heartbeat_request,
                    e,
                    t,
                  ),
                }),
              ),
              l.flush(o)
            );
          }),
          (o.close = function (e) {
            if (!o.fail && o.sessionCache && o.session) {
              var t = {
                id: o.session.id,
                version: o.session.version,
                sp: o.session.sp,
              };
              ((t.sp.keys = null), o.sessionCache.setSession(t.id, t));
            }
            (o.open &&
              ((o.open = !1),
              o.input.clear(),
              (o.isConnected || o.handshaking) &&
                ((o.isConnected = o.handshaking = !1),
                l.queue(
                  o,
                  l.createAlert(o, {
                    level: l.Alert.Level.warning,
                    description: l.Alert.Description.close_notify,
                  }),
                ),
                l.flush(o)),
              o.closed(o)),
              o.reset(e));
          }),
          o
        );
      }),
      (e.exports = n.tls = n.tls || {}),
      l))
        "function" !== typeof l[X] && (n.tls[X] = l[X]);
      ((n.tls.prf_tls1 = a),
        (n.tls.hmac_sha1 = i),
        (n.tls.createSessionCache = l.createSessionCache),
        (n.tls.createConnection = l.createConnection));
    },
    6067: function (e, t, r) {
      var n = r(2830);
      (r(3372),
        r(3660),
        r(6068),
        r(3898),
        r(4998),
        r(6074),
        r(5001),
        r(4668),
        r(2863),
        r(5e3));
      var a = n.asn1,
        i = (e.exports = n.pki = n.pki || {});
      ((i.pemToDer = function (e) {
        var t = n.pem.decode(e)[0];
        if (t.procType && "ENCRYPTED" === t.procType.type)
          throw new Error("Could not convert PEM to DER; PEM is encrypted.");
        return n.util.createBuffer(t.body);
      }),
        (i.privateKeyFromPem = function (e) {
          var t = n.pem.decode(e)[0];
          if ("PRIVATE KEY" !== t.type && "RSA PRIVATE KEY" !== t.type) {
            var r = new Error(
              'Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".',
            );
            throw ((r.headerType = t.type), r);
          }
          if (t.procType && "ENCRYPTED" === t.procType.type)
            throw new Error(
              "Could not convert private key from PEM; PEM is encrypted.",
            );
          var s = a.fromDer(t.body);
          return i.privateKeyFromAsn1(s);
        }),
        (i.privateKeyToPem = function (e, t) {
          var r = {
            type: "RSA PRIVATE KEY",
            body: a.toDer(i.privateKeyToAsn1(e)).getBytes(),
          };
          return n.pem.encode(r, { maxline: t });
        }),
        (i.privateKeyInfoToPem = function (e, t) {
          var r = { type: "PRIVATE KEY", body: a.toDer(e).getBytes() };
          return n.pem.encode(r, { maxline: t });
        }));
    },
    6069: function (e, t, r) {
      var n = r(2830);
      (r(3420), r(2863));
      var a = (e.exports = n.sha256 = n.sha256 || {});
      ((n.md.sha256 = n.md.algorithms.sha256 = a),
        (a.create = function () {
          s || c();
          var e = null,
            t = n.util.createBuffer(),
            r = new Array(64),
            a = {
              algorithm: "sha256",
              blockLength: 64,
              digestLength: 32,
              messageLength: 0,
              fullMessageLength: null,
              messageLengthSize: 8,
              start: function () {
                ((a.messageLength = 0),
                  (a.fullMessageLength = a.messageLength64 = []));
                for (var r = a.messageLengthSize / 4, i = 0; i < r; ++i)
                  a.fullMessageLength.push(0);
                return (
                  (t = n.util.createBuffer()),
                  (e = {
                    h0: 1779033703,
                    h1: 3144134277,
                    h2: 1013904242,
                    h3: 2773480762,
                    h4: 1359893119,
                    h5: 2600822924,
                    h6: 528734635,
                    h7: 1541459225,
                  }),
                  a
                );
              },
            };
          return (
            a.start(),
            (a.update = function (i, s) {
              "utf8" === s && (i = n.util.encodeUtf8(i));
              var o = i.length;
              ((a.messageLength += o), (o = [(o / 4294967296) >>> 0, o >>> 0]));
              for (var c = a.fullMessageLength.length - 1; c >= 0; --c)
                ((a.fullMessageLength[c] += o[1]),
                  (o[1] = o[0] + ((a.fullMessageLength[c] / 4294967296) >>> 0)),
                  (a.fullMessageLength[c] = a.fullMessageLength[c] >>> 0),
                  (o[0] = (o[1] / 4294967296) >>> 0));
              return (
                t.putBytes(i),
                u(e, r, t),
                (t.read > 2048 || 0 === t.length()) && t.compact(),
                a
              );
            }),
            (a.digest = function () {
              var s = n.util.createBuffer();
              s.putBytes(t.bytes());
              var o,
                c,
                l =
                  a.fullMessageLength[a.fullMessageLength.length - 1] +
                  a.messageLengthSize,
                f = l & (a.blockLength - 1);
              s.putBytes(i.substr(0, a.blockLength - f));
              for (
                var p = 8 * a.fullMessageLength[0], d = 0;
                d < a.fullMessageLength.length - 1;
                ++d
              )
                ((o = 8 * a.fullMessageLength[d + 1]),
                  (c = (o / 4294967296) >>> 0),
                  (p += c),
                  s.putInt32(p >>> 0),
                  (p = o >>> 0));
              s.putInt32(p);
              var h = {
                h0: e.h0,
                h1: e.h1,
                h2: e.h2,
                h3: e.h3,
                h4: e.h4,
                h5: e.h5,
                h6: e.h6,
                h7: e.h7,
              };
              u(h, r, s);
              var y = n.util.createBuffer();
              return (
                y.putInt32(h.h0),
                y.putInt32(h.h1),
                y.putInt32(h.h2),
                y.putInt32(h.h3),
                y.putInt32(h.h4),
                y.putInt32(h.h5),
                y.putInt32(h.h6),
                y.putInt32(h.h7),
                y
              );
            }),
            a
          );
        }));
      var i = null,
        s = !1,
        o = null;
      function c() {
        ((i = String.fromCharCode(128)),
          (i += n.util.fillString(String.fromCharCode(0), 64)),
          (o = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]),
          (s = !0));
      }
      function u(e, t, r) {
        var n,
          a,
          i,
          s,
          c,
          u,
          l,
          f,
          p,
          d,
          h,
          y,
          g,
          C,
          m,
          v = r.length();
        while (v >= 64) {
          for (l = 0; l < 16; ++l) t[l] = r.getInt32();
          for (; l < 64; ++l)
            ((n = t[l - 2]),
              (n =
                ((n >>> 17) | (n << 15)) ^
                ((n >>> 19) | (n << 13)) ^
                (n >>> 10)),
              (a = t[l - 15]),
              (a =
                ((a >>> 7) | (a << 25)) ^ ((a >>> 18) | (a << 14)) ^ (a >>> 3)),
              (t[l] = (n + t[l - 7] + a + t[l - 16]) | 0));
          for (
            f = e.h0,
              p = e.h1,
              d = e.h2,
              h = e.h3,
              y = e.h4,
              g = e.h5,
              C = e.h6,
              m = e.h7,
              l = 0;
            l < 64;
            ++l
          )
            ((s =
              ((y >>> 6) | (y << 26)) ^
              ((y >>> 11) | (y << 21)) ^
              ((y >>> 25) | (y << 7))),
              (c = C ^ (y & (g ^ C))),
              (i =
                ((f >>> 2) | (f << 30)) ^
                ((f >>> 13) | (f << 19)) ^
                ((f >>> 22) | (f << 10))),
              (u = (f & p) | (d & (f ^ p))),
              (n = m + s + c + o[l] + t[l]),
              (a = i + u),
              (m = C),
              (C = g),
              (g = y),
              (y = (h + n) >>> 0),
              (h = d),
              (d = p),
              (p = f),
              (f = (n + a) >>> 0));
          ((e.h0 = (e.h0 + f) | 0),
            (e.h1 = (e.h1 + p) | 0),
            (e.h2 = (e.h2 + d) | 0),
            (e.h3 = (e.h3 + h) | 0),
            (e.h4 = (e.h4 + y) | 0),
            (e.h5 = (e.h5 + g) | 0),
            (e.h6 = (e.h6 + C) | 0),
            (e.h7 = (e.h7 + m) | 0),
            (v -= 64));
        }
      }
    },
    6070: function (e, t, r) {
      (function (t) {
        var n = r(2830);
        r(2863);
        var a = null;
        !n.util.isNodejs ||
          n.options.usePureJavaScript ||
          t.versions["node-webkit"] ||
          (a = r(4999));
        var i = (e.exports = n.prng = n.prng || {});
        i.create = function (e) {
          for (
            var t = {
                plugin: e,
                key: null,
                seed: null,
                time: null,
                reseeds: 0,
                generated: 0,
                keyBytes: "",
              },
              r = e.md,
              i = new Array(32),
              s = 0;
            s < 32;
            ++s
          )
            i[s] = r.create();
          function o(e) {
            if (t.pools[0].messageLength >= 32) return (u(), e());
            var r = (32 - t.pools[0].messageLength) << 5;
            t.seedFile(r, function (r, n) {
              if (r) return e(r);
              (t.collect(n), u(), e());
            });
          }
          function c() {
            if (t.pools[0].messageLength >= 32) return u();
            var e = (32 - t.pools[0].messageLength) << 5;
            (t.collect(t.seedFileSync(e)), u());
          }
          function u() {
            t.reseeds = 4294967295 === t.reseeds ? 0 : t.reseeds + 1;
            var e = t.plugin.md.create();
            e.update(t.keyBytes);
            for (var r = 1, n = 0; n < 32; ++n)
              (t.reseeds % r === 0 &&
                (e.update(t.pools[n].digest().getBytes()), t.pools[n].start()),
                (r <<= 1));
            ((t.keyBytes = e.digest().getBytes()),
              e.start(),
              e.update(t.keyBytes));
            var a = e.digest().getBytes();
            ((t.key = t.plugin.formatKey(t.keyBytes)),
              (t.seed = t.plugin.formatSeed(a)),
              (t.generated = 0));
          }
          function l(e) {
            var t = null,
              r = n.util.globalScope,
              a = r.crypto || r.msCrypto;
            a &&
              a.getRandomValues &&
              (t = function (e) {
                return a.getRandomValues(e);
              });
            var i = n.util.createBuffer();
            if (t)
              while (i.length() < e) {
                var s = Math.max(1, Math.min(e - i.length(), 65536) / 4),
                  o = new Uint32Array(Math.floor(s));
                try {
                  t(o);
                  for (var c = 0; c < o.length; ++c) i.putInt32(o[c]);
                } catch (d) {
                  if (
                    !(
                      "undefined" !== typeof QuotaExceededError &&
                      d instanceof QuotaExceededError
                    )
                  )
                    throw d;
                }
              }
            if (i.length() < e) {
              var u,
                l,
                f,
                p = Math.floor(65536 * Math.random());
              while (i.length() < e) {
                ((l = 16807 * (65535 & p)),
                  (u = 16807 * (p >> 16)),
                  (l += (32767 & u) << 16),
                  (l += u >> 15),
                  (l = (2147483647 & l) + (l >> 31)),
                  (p = 4294967295 & l));
                for (c = 0; c < 3; ++c)
                  ((f = p >>> (c << 3)),
                    (f ^= Math.floor(256 * Math.random())),
                    i.putByte(255 & f));
              }
            }
            return i.getBytes(e);
          }
          return (
            (t.pools = i),
            (t.pool = 0),
            (t.generate = function (e, r) {
              if (!r) return t.generateSync(e);
              var a = t.plugin.cipher,
                i = t.plugin.increment,
                s = t.plugin.formatKey,
                c = t.plugin.formatSeed,
                u = n.util.createBuffer();
              function l(f) {
                if (f) return r(f);
                if (u.length() >= e) return r(null, u.getBytes(e));
                if ((t.generated > 1048575 && (t.key = null), null === t.key))
                  return n.util.nextTick(function () {
                    o(l);
                  });
                var p = a(t.key, t.seed);
                ((t.generated += p.length),
                  u.putBytes(p),
                  (t.key = s(a(t.key, i(t.seed)))),
                  (t.seed = c(a(t.key, t.seed))),
                  n.util.setImmediate(l));
              }
              ((t.key = null), l());
            }),
            (t.generateSync = function (e) {
              var r = t.plugin.cipher,
                a = t.plugin.increment,
                i = t.plugin.formatKey,
                s = t.plugin.formatSeed;
              t.key = null;
              var o = n.util.createBuffer();
              while (o.length() < e) {
                (t.generated > 1048575 && (t.key = null),
                  null === t.key && c());
                var u = r(t.key, t.seed);
                ((t.generated += u.length),
                  o.putBytes(u),
                  (t.key = i(r(t.key, a(t.seed)))),
                  (t.seed = s(r(t.key, t.seed))));
              }
              return o.getBytes(e);
            }),
            a
              ? ((t.seedFile = function (e, t) {
                  a.randomBytes(e, function (e, r) {
                    if (e) return t(e);
                    t(null, r.toString());
                  });
                }),
                (t.seedFileSync = function (e) {
                  return a.randomBytes(e).toString();
                }))
              : ((t.seedFile = function (e, t) {
                  try {
                    t(null, l(e));
                  } catch (r) {
                    t(r);
                  }
                }),
                (t.seedFileSync = l)),
            (t.collect = function (e) {
              for (var r = e.length, n = 0; n < r; ++n)
                (t.pools[t.pool].update(e.substr(n, 1)),
                  (t.pool = 31 === t.pool ? 0 : t.pool + 1));
            }),
            (t.collectInt = function (e, r) {
              for (var n = "", a = 0; a < r; a += 8)
                n += String.fromCharCode((e >> a) & 255);
              t.collect(n);
            }),
            (t.registerWorker = function (e) {
              if (e === self)
                t.seedFile = function (e, t) {
                  function r(e) {
                    var n = e.data;
                    n.forge &&
                      n.forge.prng &&
                      (self.removeEventListener("message", r),
                      t(n.forge.prng.err, n.forge.prng.bytes));
                  }
                  (self.addEventListener("message", r),
                    self.postMessage({ forge: { prng: { needed: e } } }));
                };
              else {
                var r = function (r) {
                  var n = r.data;
                  n.forge &&
                    n.forge.prng &&
                    t.seedFile(n.forge.prng.needed, function (t, r) {
                      e.postMessage({ forge: { prng: { err: t, bytes: r } } });
                    });
                };
                e.addEventListener("message", r);
              }
            }),
            t
          );
        };
      }).call(this, r(18));
    },
    6071: function (e, t, r) {
      var n = r(2830);
      r(2863);
      var a = [
          217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160,
          216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68,
          139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141,
          9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33,
          34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86,
          192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66,
          61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39,
          242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231,
          6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238,
          247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21,
          73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81,
          203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35,
          184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227,
          138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207,
          225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27,
          171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219,
          71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173,
        ],
        i = [1, 2, 3, 5],
        s = function (e, t) {
          return ((e << t) & 65535) | ((65535 & e) >> (16 - t));
        },
        o = function (e, t) {
          return ((65535 & e) >> t) | ((e << (16 - t)) & 65535);
        };
      ((e.exports = n.rc2 = n.rc2 || {}),
        (n.rc2.expandKey = function (e, t) {
          ("string" === typeof e && (e = n.util.createBuffer(e)),
            (t = t || 128));
          var r,
            i = e,
            s = e.length(),
            o = t,
            c = Math.ceil(o / 8),
            u = 255 >> (7 & o);
          for (r = s; r < 128; r++)
            i.putByte(a[(i.at(r - 1) + i.at(r - s)) & 255]);
          for (i.setAt(128 - c, a[i.at(128 - c) & u]), r = 127 - c; r >= 0; r--)
            i.setAt(r, a[i.at(r + 1) ^ i.at(r + c)]);
          return i;
        }));
      var c = function (e, t, r) {
        var a,
          c,
          u,
          l,
          f = !1,
          p = null,
          d = null,
          h = null,
          y = [];
        for (e = n.rc2.expandKey(e, t), u = 0; u < 64; u++)
          y.push(e.getInt16Le());
        r
          ? ((a = function (e) {
              for (u = 0; u < 4; u++)
                ((e[u] +=
                  y[l] +
                  (e[(u + 3) % 4] & e[(u + 2) % 4]) +
                  (~e[(u + 3) % 4] & e[(u + 1) % 4])),
                  (e[u] = s(e[u], i[u])),
                  l++);
            }),
            (c = function (e) {
              for (u = 0; u < 4; u++) e[u] += y[63 & e[(u + 3) % 4]];
            }))
          : ((a = function (e) {
              for (u = 3; u >= 0; u--)
                ((e[u] = o(e[u], i[u])),
                  (e[u] -=
                    y[l] +
                    (e[(u + 3) % 4] & e[(u + 2) % 4]) +
                    (~e[(u + 3) % 4] & e[(u + 1) % 4])),
                  l--);
            }),
            (c = function (e) {
              for (u = 3; u >= 0; u--) e[u] -= y[63 & e[(u + 3) % 4]];
            }));
        var g = function (e) {
            var t = [];
            for (u = 0; u < 4; u++) {
              var n = p.getInt16Le();
              (null !== h && (r ? (n ^= h.getInt16Le()) : h.putInt16Le(n)),
                t.push(65535 & n));
            }
            l = r ? 0 : 63;
            for (var a = 0; a < e.length; a++)
              for (var i = 0; i < e[a][0]; i++) e[a][1](t);
            for (u = 0; u < 4; u++)
              (null !== h &&
                (r ? h.putInt16Le(t[u]) : (t[u] ^= h.getInt16Le())),
                d.putInt16Le(t[u]));
          },
          C = null;
        return (
          (C = {
            start: function (e, t) {
              (e && "string" === typeof e && (e = n.util.createBuffer(e)),
                (f = !1),
                (p = n.util.createBuffer()),
                (d = t || new n.util.createBuffer()),
                (h = e),
                (C.output = d));
            },
            update: function (e) {
              f || p.putBuffer(e);
              while (p.length() >= 8)
                g([
                  [5, a],
                  [1, c],
                  [6, a],
                  [1, c],
                  [5, a],
                ]);
            },
            finish: function (e) {
              var t = !0;
              if (r)
                if (e) t = e(8, p, !r);
                else {
                  var n = 8 === p.length() ? 8 : 8 - p.length();
                  p.fillWithByte(n, n);
                }
              if (
                (t && ((f = !0), C.update()), !r && ((t = 0 === p.length()), t))
              )
                if (e) t = e(8, d, !r);
                else {
                  var a = d.length(),
                    i = d.at(a - 1);
                  i > a ? (t = !1) : d.truncate(i);
                }
              return t;
            },
          }),
          C
        );
      };
      ((n.rc2.startEncrypting = function (e, t, r) {
        var a = n.rc2.createEncryptionCipher(e, 128);
        return (a.start(t, r), a);
      }),
        (n.rc2.createEncryptionCipher = function (e, t) {
          return c(e, t, !0);
        }),
        (n.rc2.startDecrypting = function (e, t, r) {
          var a = n.rc2.createDecryptionCipher(e, 128);
          return (a.start(t, r), a);
        }),
        (n.rc2.createDecryptionCipher = function (e, t) {
          return c(e, t, !1);
        }));
    },
    6072: function (e, t, r) {
      var n = r(2830);
      (r(2863), r(3294), r(4291));
      var a = (e.exports = n.pkcs1 = n.pkcs1 || {});
      function i(e, t, r) {
        r || (r = n.md.sha1.create());
        for (var a = "", i = Math.ceil(t / r.digestLength), s = 0; s < i; ++s) {
          var o = String.fromCharCode(
            (s >> 24) & 255,
            (s >> 16) & 255,
            (s >> 8) & 255,
            255 & s,
          );
          (r.start(), r.update(e + o), (a += r.digest().getBytes()));
        }
        return a.substring(0, t);
      }
      ((a.encode_rsa_oaep = function (e, t, r) {
        var a, s, o, c;
        ("string" === typeof r
          ? ((a = r),
            (s = arguments[3] || void 0),
            (o = arguments[4] || void 0))
          : r &&
            ((a = r.label || void 0),
            (s = r.seed || void 0),
            (o = r.md || void 0),
            r.mgf1 && r.mgf1.md && (c = r.mgf1.md)),
          o ? o.start() : (o = n.md.sha1.create()),
          c || (c = o));
        var u = Math.ceil(e.n.bitLength() / 8),
          l = u - 2 * o.digestLength - 2;
        if (t.length > l) {
          var f = new Error("RSAES-OAEP input message length is too long.");
          throw ((f.length = t.length), (f.maxLength = l), f);
        }
        (a || (a = ""), o.update(a, "raw"));
        for (var p = o.digest(), d = "", h = l - t.length, y = 0; y < h; y++)
          d += "\0";
        var g = p.getBytes() + d + "" + t;
        if (s) {
          if (s.length !== o.digestLength) {
            f = new Error(
              "Invalid RSAES-OAEP seed. The seed length must match the digest length.",
            );
            throw (
              (f.seedLength = s.length),
              (f.digestLength = o.digestLength),
              f
            );
          }
        } else s = n.random.getBytes(o.digestLength);
        var C = i(s, u - o.digestLength - 1, c),
          m = n.util.xorBytes(g, C, g.length),
          v = i(m, o.digestLength, c),
          E = n.util.xorBytes(s, v, s.length);
        return "\0" + E + m;
      }),
        (a.decode_rsa_oaep = function (e, t, r) {
          var a, s, o;
          "string" === typeof r
            ? ((a = r), (s = arguments[3] || void 0))
            : r &&
              ((a = r.label || void 0),
              (s = r.md || void 0),
              r.mgf1 && r.mgf1.md && (o = r.mgf1.md));
          var c = Math.ceil(e.n.bitLength() / 8);
          if (t.length !== c) {
            var u = new Error("RSAES-OAEP encoded message length is invalid.");
            throw ((u.length = t.length), (u.expectedLength = c), u);
          }
          if (
            (void 0 === s ? (s = n.md.sha1.create()) : s.start(),
            o || (o = s),
            c < 2 * s.digestLength + 2)
          )
            throw new Error(
              "RSAES-OAEP key is too short for the hash function.",
            );
          (a || (a = ""), s.update(a, "raw"));
          for (
            var l = s.digest().getBytes(),
              f = t.charAt(0),
              p = t.substring(1, s.digestLength + 1),
              d = t.substring(1 + s.digestLength),
              h = i(d, s.digestLength, o),
              y = n.util.xorBytes(p, h, p.length),
              g = i(y, c - s.digestLength - 1, o),
              C = n.util.xorBytes(d, g, d.length),
              m = C.substring(0, s.digestLength),
              v = ((u = "\0" !== f), 0);
            v < s.digestLength;
            ++v
          )
            u |= l.charAt(v) !== m.charAt(v);
          for (
            var E = 1, S = s.digestLength, I = s.digestLength;
            I < C.length;
            I++
          ) {
            var A = C.charCodeAt(I),
              T = (1 & A) ^ 1,
              b = E ? 65534 : 0;
            ((u |= A & b), (E &= T), (S += E));
          }
          if (u || 1 !== C.charCodeAt(S))
            throw new Error("Invalid RSAES-OAEP padding.");
          return C.substring(S + 1);
        }));
    },
    6073: function (e, t, r) {
      var n = r(2830);
      (r(2863),
        r(4669),
        r(3294),
        (function () {
          if (n.prime) e.exports = n.prime;
          else {
            var t = (e.exports = n.prime = n.prime || {}),
              BigInteger = n.jsbn.BigInteger,
              r = [6, 4, 2, 4, 2, 4, 6, 2],
              a = new BigInteger(null);
            a.fromInt(30);
            var i = function (e, t) {
              return e | t;
            };
            t.generateProbablePrime = function (e, t, r) {
              ("function" === typeof t && ((r = t), (t = {})), (t = t || {}));
              var a = t.algorithm || "PRIMEINC";
              ("string" === typeof a && (a = { name: a }),
                (a.options = a.options || {}));
              var i = t.prng || n.random,
                o = {
                  nextBytes: function (e) {
                    for (
                      var t = i.getBytesSync(e.length), r = 0;
                      r < e.length;
                      ++r
                    )
                      e[r] = t.charCodeAt(r);
                  },
                };
              if ("PRIMEINC" === a.name) return s(e, o, a.options, r);
              throw new Error("Invalid prime generation algorithm: " + a.name);
            };
          }
          function s(e, t, r, n) {
            return "workers" in r ? u(e, t, r, n) : o(e, t, r, n);
          }
          function o(e, t, r, n) {
            var a = l(e, t),
              i = 0,
              s = f(a.bitLength());
            "millerRabinTests" in r && (s = r.millerRabinTests);
            var o = 10;
            ("maxBlockTime" in r && (o = r.maxBlockTime),
              c(a, e, t, i, s, o, n));
          }
          function c(e, t, a, i, s, o, u) {
            var f = +new Date();
            do {
              if ((e.bitLength() > t && (e = l(t, a)), e.isProbablePrime(s)))
                return u(null, e);
              e.dAddOffset(r[i++ % 8], 0);
            } while (o < 0 || +new Date() - f < o);
            n.util.setImmediate(function () {
              c(e, t, a, i, s, o, u);
            });
          }
          function u(e, t, r, a) {
            if ("undefined" === typeof Worker) return o(e, t, r, a);
            var i = l(e, t),
              s = r.workers,
              c = r.workLoad || 100,
              u = (30 * c) / 8,
              f = r.workerScript || "forge/prime.worker.js";
            if (-1 === s)
              return n.util.estimateCores(function (e, t) {
                (e && (t = 2), (s = t - 1), p());
              });
            function p() {
              s = Math.max(1, s);
              for (var r = [], n = 0; n < s; ++n) r[n] = new Worker(f);
              for (n = 0; n < s; ++n) r[n].addEventListener("message", p);
              var o = !1;
              function p(n) {
                if (!o) {
                  0;
                  var s = n.data;
                  if (s.found) {
                    for (var f = 0; f < r.length; ++f) r[f].terminate();
                    return ((o = !0), a(null, new BigInteger(s.prime, 16)));
                  }
                  i.bitLength() > e && (i = l(e, t));
                  var p = i.toString(16);
                  (n.target.postMessage({ hex: p, workLoad: c }),
                    i.dAddOffset(u, 0));
                }
              }
            }
            p();
          }
          function l(e, t) {
            var r = new BigInteger(e, t),
              n = e - 1;
            return (
              r.testBit(n) || r.bitwiseTo(BigInteger.ONE.shiftLeft(n), i, r),
              r.dAddOffset(31 - r.mod(a).byteValue(), 0),
              r
            );
          }
          function f(e) {
            return e <= 100
              ? 27
              : e <= 150
                ? 18
                : e <= 200
                  ? 15
                  : e <= 250
                    ? 12
                    : e <= 300
                      ? 9
                      : e <= 350
                        ? 8
                        : e <= 400
                          ? 7
                          : e <= 500
                            ? 6
                            : e <= 600
                              ? 5
                              : e <= 800
                                ? 4
                                : e <= 1250
                                  ? 3
                                  : 2;
          }
        })());
    },
    6074: function (e, t, r) {
      var n = r(2830);
      (r(3372),
        r(4290),
        r(3660),
        r(6075),
        r(6068),
        r(3294),
        r(4668),
        r(4291),
        r(2863),
        r(5e3));
      var a = n.asn1,
        i = n.pki,
        s = (e.exports = n.pkcs12 = n.pkcs12 || {}),
        o = {
          name: "ContentInfo",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "ContentInfo.contentType",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.OID,
              constructed: !1,
              capture: "contentType",
            },
            {
              name: "ContentInfo.content",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              captureAsn1: "content",
            },
          ],
        },
        c = {
          name: "PFX",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "PFX.version",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "version",
            },
            o,
            {
              name: "PFX.macData",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              optional: !0,
              captureAsn1: "mac",
              value: [
                {
                  name: "PFX.macData.mac",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  value: [
                    {
                      name: "PFX.macData.mac.digestAlgorithm",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.SEQUENCE,
                      constructed: !0,
                      value: [
                        {
                          name: "PFX.macData.mac.digestAlgorithm.algorithm",
                          tagClass: a.Class.UNIVERSAL,
                          type: a.Type.OID,
                          constructed: !1,
                          capture: "macAlgorithm",
                        },
                        {
                          name: "PFX.macData.mac.digestAlgorithm.parameters",
                          tagClass: a.Class.UNIVERSAL,
                          captureAsn1: "macAlgorithmParameters",
                        },
                      ],
                    },
                    {
                      name: "PFX.macData.mac.digest",
                      tagClass: a.Class.UNIVERSAL,
                      type: a.Type.OCTETSTRING,
                      constructed: !1,
                      capture: "macDigest",
                    },
                  ],
                },
                {
                  name: "PFX.macData.macSalt",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OCTETSTRING,
                  constructed: !1,
                  capture: "macSalt",
                },
                {
                  name: "PFX.macData.iterations",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.INTEGER,
                  constructed: !1,
                  optional: !0,
                  capture: "macIterations",
                },
              ],
            },
          ],
        },
        u = {
          name: "SafeBag",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "SafeBag.bagId",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.OID,
              constructed: !1,
              capture: "bagId",
            },
            {
              name: "SafeBag.bagValue",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              captureAsn1: "bagValue",
            },
            {
              name: "SafeBag.bagAttributes",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SET,
              constructed: !0,
              optional: !0,
              capture: "bagAttributes",
            },
          ],
        },
        l = {
          name: "Attribute",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "Attribute.attrId",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.OID,
              constructed: !1,
              capture: "oid",
            },
            {
              name: "Attribute.attrValues",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SET,
              constructed: !0,
              capture: "values",
            },
          ],
        },
        f = {
          name: "CertBag",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "CertBag.certId",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.OID,
              constructed: !1,
              capture: "certId",
            },
            {
              name: "CertBag.certValue",
              tagClass: a.Class.CONTEXT_SPECIFIC,
              constructed: !0,
              value: [
                {
                  name: "CertBag.certValue[0]",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Class.OCTETSTRING,
                  constructed: !1,
                  capture: "cert",
                },
              ],
            },
          ],
        };
      function p(e, t, r, n) {
        for (var a = [], i = 0; i < e.length; i++)
          for (var s = 0; s < e[i].safeBags.length; s++) {
            var o = e[i].safeBags[s];
            (void 0 !== n && o.type !== n) ||
              (null !== t
                ? void 0 !== o.attributes[t] &&
                  o.attributes[t].indexOf(r) >= 0 &&
                  a.push(o)
                : a.push(o));
          }
        return a;
      }
      function d(e) {
        if (e.composed || e.constructed) {
          for (var t = n.util.createBuffer(), r = 0; r < e.value.length; ++r)
            t.putBytes(e.value[r].value);
          ((e.composed = e.constructed = !1), (e.value = t.getBytes()));
        }
        return e;
      }
      function h(e, t, r, n) {
        if (
          ((t = a.fromDer(t, r)),
          t.tagClass !== a.Class.UNIVERSAL ||
            t.type !== a.Type.SEQUENCE ||
            !0 !== t.constructed)
        )
          throw new Error(
            "PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo",
          );
        for (var s = 0; s < t.value.length; s++) {
          var c = t.value[s],
            u = {},
            l = [];
          if (!a.validate(c, o, u, l)) {
            var f = new Error("Cannot read ContentInfo.");
            throw ((f.errors = l), f);
          }
          var p = { encrypted: !1 },
            h = null,
            C = u.content.value[0];
          switch (a.derToOid(u.contentType)) {
            case i.oids.data:
              if (
                C.tagClass !== a.Class.UNIVERSAL ||
                C.type !== a.Type.OCTETSTRING
              )
                throw new Error(
                  "PKCS#12 SafeContents Data is not an OCTET STRING.",
                );
              h = d(C).value;
              break;
            case i.oids.encryptedData:
              ((h = y(C, n)), (p.encrypted = !0));
              break;
            default:
              f = new Error("Unsupported PKCS#12 contentType.");
              throw ((f.contentType = a.derToOid(u.contentType)), f);
          }
          ((p.safeBags = g(h, r, n)), e.safeContents.push(p));
        }
      }
      function y(e, t) {
        var r = {},
          s = [];
        if (!a.validate(e, n.pkcs7.asn1.encryptedDataValidator, r, s)) {
          var o = new Error("Cannot read EncryptedContentInfo.");
          throw ((o.errors = s), o);
        }
        var c = a.derToOid(r.contentType);
        if (c !== i.oids.data) {
          o = new Error(
            "PKCS#12 EncryptedContentInfo ContentType is not Data.",
          );
          throw ((o.oid = c), o);
        }
        c = a.derToOid(r.encAlgorithm);
        var u = i.pbe.getCipher(c, r.encParameter, t),
          l = d(r.encryptedContentAsn1),
          f = n.util.createBuffer(l.value);
        if ((u.update(f), !u.finish()))
          throw new Error("Failed to decrypt PKCS#12 SafeContents.");
        return u.output.getBytes();
      }
      function g(e, t, r) {
        if (!t && 0 === e.length) return [];
        if (
          ((e = a.fromDer(e, t)),
          e.tagClass !== a.Class.UNIVERSAL ||
            e.type !== a.Type.SEQUENCE ||
            !0 !== e.constructed)
        )
          throw new Error(
            "PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.",
          );
        for (var n = [], s = 0; s < e.value.length; s++) {
          var o = e.value[s],
            c = {},
            l = [];
          if (!a.validate(o, u, c, l)) {
            var p = new Error("Cannot read SafeBag.");
            throw ((p.errors = l), p);
          }
          var d,
            h,
            y = { type: a.derToOid(c.bagId), attributes: C(c.bagAttributes) };
          n.push(y);
          var g = c.bagValue.value[0];
          switch (y.type) {
            case i.oids.pkcs8ShroudedKeyBag:
              if (((g = i.decryptPrivateKeyInfo(g, r)), null === g))
                throw new Error(
                  "Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?",
                );
            case i.oids.keyBag:
              try {
                y.key = i.privateKeyFromAsn1(g);
              } catch (m) {
                ((y.key = null), (y.asn1 = g));
              }
              continue;
            case i.oids.certBag:
              ((d = f),
                (h = function () {
                  if (a.derToOid(c.certId) !== i.oids.x509Certificate) {
                    var e = new Error(
                      "Unsupported certificate type, only X.509 supported.",
                    );
                    throw ((e.oid = a.derToOid(c.certId)), e);
                  }
                  var r = a.fromDer(c.cert, t);
                  try {
                    y.cert = i.certificateFromAsn1(r, !0);
                  } catch (m) {
                    ((y.cert = null), (y.asn1 = r));
                  }
                }));
              break;
            default:
              p = new Error("Unsupported PKCS#12 SafeBag type.");
              throw ((p.oid = y.type), p);
          }
          if (void 0 !== d && !a.validate(g, d, c, l)) {
            p = new Error("Cannot read PKCS#12 " + d.name);
            throw ((p.errors = l), p);
          }
          h();
        }
        return n;
      }
      function C(e) {
        var t = {};
        if (void 0 !== e)
          for (var r = 0; r < e.length; ++r) {
            var n = {},
              s = [];
            if (!a.validate(e[r], l, n, s)) {
              var o = new Error("Cannot read PKCS#12 BagAttribute.");
              throw ((o.errors = s), o);
            }
            var c = a.derToOid(n.oid);
            if (void 0 !== i.oids[c]) {
              t[i.oids[c]] = [];
              for (var u = 0; u < n.values.length; ++u)
                t[i.oids[c]].push(n.values[u].value);
            }
          }
        return t;
      }
      ((s.pkcs12FromAsn1 = function (e, t, r) {
        "string" === typeof t ? ((r = t), (t = !0)) : void 0 === t && (t = !0);
        var o = {},
          u = [];
        if (!a.validate(e, c, o, u)) {
          var l = new Error(
            "Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.",
          );
          throw ((l.errors = l), l);
        }
        var f = {
          version: o.version.charCodeAt(0),
          safeContents: [],
          getBags: function (e) {
            var t,
              r = {};
            return (
              "localKeyId" in e
                ? (t = e.localKeyId)
                : "localKeyIdHex" in e &&
                  (t = n.util.hexToBytes(e.localKeyIdHex)),
              void 0 === t &&
                !("friendlyName" in e) &&
                "bagType" in e &&
                (r[e.bagType] = p(f.safeContents, null, null, e.bagType)),
              void 0 !== t &&
                (r.localKeyId = p(f.safeContents, "localKeyId", t, e.bagType)),
              "friendlyName" in e &&
                (r.friendlyName = p(
                  f.safeContents,
                  "friendlyName",
                  e.friendlyName,
                  e.bagType,
                )),
              r
            );
          },
          getBagsByFriendlyName: function (e, t) {
            return p(f.safeContents, "friendlyName", e, t);
          },
          getBagsByLocalKeyId: function (e, t) {
            return p(f.safeContents, "localKeyId", e, t);
          },
        };
        if (3 !== o.version.charCodeAt(0)) {
          l = new Error("PKCS#12 PFX of version other than 3 not supported.");
          throw ((l.version = o.version.charCodeAt(0)), l);
        }
        if (a.derToOid(o.contentType) !== i.oids.data) {
          l = new Error(
            "Only PKCS#12 PFX in password integrity mode supported.",
          );
          throw ((l.oid = a.derToOid(o.contentType)), l);
        }
        var y = o.content.value[0];
        if (y.tagClass !== a.Class.UNIVERSAL || y.type !== a.Type.OCTETSTRING)
          throw new Error(
            "PKCS#12 authSafe content data is not an OCTET STRING.",
          );
        if (((y = d(y)), o.mac)) {
          var g = null,
            C = 0,
            m = a.derToOid(o.macAlgorithm);
          switch (m) {
            case i.oids.sha1:
              ((g = n.md.sha1.create()), (C = 20));
              break;
            case i.oids.sha256:
              ((g = n.md.sha256.create()), (C = 32));
              break;
            case i.oids.sha384:
              ((g = n.md.sha384.create()), (C = 48));
              break;
            case i.oids.sha512:
              ((g = n.md.sha512.create()), (C = 64));
              break;
            case i.oids.md5:
              ((g = n.md.md5.create()), (C = 16));
              break;
          }
          if (null === g)
            throw new Error("PKCS#12 uses unsupported MAC algorithm: " + m);
          var v = new n.util.ByteBuffer(o.macSalt),
            E =
              "macIterations" in o
                ? parseInt(n.util.bytesToHex(o.macIterations), 16)
                : 1,
            S = s.generateKey(r, v, 3, E, C, g),
            I = n.hmac.create();
          (I.start(g, S), I.update(y.value));
          var A = I.getMac();
          if (A.getBytes() !== o.macDigest)
            throw new Error(
              "PKCS#12 MAC could not be verified. Invalid password?",
            );
        }
        return (h(f, y.value, t, r), f);
      }),
        (s.toPkcs12Asn1 = function (e, t, r, o) {
          ((o = o || {}),
            (o.saltSize = o.saltSize || 8),
            (o.count = o.count || 2048),
            (o.algorithm = o.algorithm || o.encAlgorithm || "aes128"),
            "useMac" in o || (o.useMac = !0),
            "localKeyId" in o || (o.localKeyId = null),
            "generateLocalKeyId" in o || (o.generateLocalKeyId = !0));
          var c,
            u = o.localKeyId;
          if (null !== u) u = n.util.hexToBytes(u);
          else if (o.generateLocalKeyId)
            if (t) {
              var l = n.util.isArray(t) ? t[0] : t;
              "string" === typeof l && (l = i.certificateFromPem(l));
              var f = n.md.sha1.create();
              (f.update(a.toDer(i.certificateToAsn1(l)).getBytes()),
                (u = f.digest().getBytes()));
            } else u = n.random.getBytes(20);
          var p = [];
          (null !== u &&
            p.push(
              a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OID,
                  !1,
                  a.oidToDer(i.oids.localKeyId).getBytes(),
                ),
                a.create(a.Class.UNIVERSAL, a.Type.SET, !0, [
                  a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, u),
                ]),
              ]),
            ),
            "friendlyName" in o &&
              p.push(
                a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                  a.create(
                    a.Class.UNIVERSAL,
                    a.Type.OID,
                    !1,
                    a.oidToDer(i.oids.friendlyName).getBytes(),
                  ),
                  a.create(a.Class.UNIVERSAL, a.Type.SET, !0, [
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.BMPSTRING,
                      !1,
                      o.friendlyName,
                    ),
                  ]),
                ]),
              ),
            p.length > 0 &&
              (c = a.create(a.Class.UNIVERSAL, a.Type.SET, !0, p)));
          var d = [],
            h = [];
          null !== t && (h = n.util.isArray(t) ? t : [t]);
          for (var y = [], g = 0; g < h.length; ++g) {
            ((t = h[g]),
              "string" === typeof t && (t = i.certificateFromPem(t)));
            var C = 0 === g ? c : void 0,
              m = i.certificateToAsn1(t),
              v = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OID,
                  !1,
                  a.oidToDer(i.oids.certBag).getBytes(),
                ),
                a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                  a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.OID,
                      !1,
                      a.oidToDer(i.oids.x509Certificate).getBytes(),
                    ),
                    a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.OCTETSTRING,
                        !1,
                        a.toDer(m).getBytes(),
                      ),
                    ]),
                  ]),
                ]),
                C,
              ]);
            y.push(v);
          }
          if (y.length > 0) {
            var E = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, y),
              S = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OID,
                  !1,
                  a.oidToDer(i.oids.data).getBytes(),
                ),
                a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                  a.create(
                    a.Class.UNIVERSAL,
                    a.Type.OCTETSTRING,
                    !1,
                    a.toDer(E).getBytes(),
                  ),
                ]),
              ]);
            d.push(S);
          }
          var I = null;
          if (null !== e) {
            var A = i.wrapRsaPrivateKey(i.privateKeyToAsn1(e));
            I =
              null === r
                ? a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.OID,
                      !1,
                      a.oidToDer(i.oids.keyBag).getBytes(),
                    ),
                    a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [A]),
                    c,
                  ])
                : a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.OID,
                      !1,
                      a.oidToDer(i.oids.pkcs8ShroudedKeyBag).getBytes(),
                    ),
                    a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                      i.encryptPrivateKeyInfo(A, r, o),
                    ]),
                    c,
                  ]);
            var T = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [I]),
              b = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OID,
                  !1,
                  a.oidToDer(i.oids.data).getBytes(),
                ),
                a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                  a.create(
                    a.Class.UNIVERSAL,
                    a.Type.OCTETSTRING,
                    !1,
                    a.toDer(T).getBytes(),
                  ),
                ]),
              ]);
            d.push(b);
          }
          var B,
            N = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, d);
          if (o.useMac) {
            f = n.md.sha1.create();
            var R = new n.util.ByteBuffer(n.random.getBytes(o.saltSize)),
              L = o.count,
              w = ((e = s.generateKey(r, R, 3, L, 20)), n.hmac.create());
            (w.start(f, e), w.update(a.toDer(N).getBytes()));
            var U = w.getMac();
            B = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                  a.create(
                    a.Class.UNIVERSAL,
                    a.Type.OID,
                    !1,
                    a.oidToDer(i.oids.sha1).getBytes(),
                  ),
                  a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
                ]),
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OCTETSTRING,
                  !1,
                  U.getBytes(),
                ),
              ]),
              a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, R.getBytes()),
              a.create(
                a.Class.UNIVERSAL,
                a.Type.INTEGER,
                !1,
                a.integerToDer(L).getBytes(),
              ),
            ]);
          }
          return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.INTEGER,
              !1,
              a.integerToDer(3).getBytes(),
            ),
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(i.oids.data).getBytes(),
              ),
              a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OCTETSTRING,
                  !1,
                  a.toDer(N).getBytes(),
                ),
              ]),
            ]),
            B,
          ]);
        }),
        (s.generateKey = n.pbe.generatePkcs12Key));
    },
    6075: function (e, t, r) {
      var n = r(2830);
      (r(3372), r(2863));
      var a = n.asn1,
        i = (e.exports = n.pkcs7asn1 = n.pkcs7asn1 || {});
      ((n.pkcs7 = n.pkcs7 || {}), (n.pkcs7.asn1 = i));
      var s = {
        name: "ContentInfo",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "ContentInfo.ContentType",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.OID,
            constructed: !1,
            capture: "contentType",
          },
          {
            name: "ContentInfo.content",
            tagClass: a.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            captureAsn1: "content",
          },
        ],
      };
      i.contentInfoValidator = s;
      var o = {
        name: "EncryptedContentInfo",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EncryptedContentInfo.contentType",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.OID,
            constructed: !1,
            capture: "contentType",
          },
          {
            name: "EncryptedContentInfo.contentEncryptionAlgorithm",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",
                tagClass: a.Class.UNIVERSAL,
                type: a.Type.OID,
                constructed: !1,
                capture: "encAlgorithm",
              },
              {
                name: "EncryptedContentInfo.contentEncryptionAlgorithm.parameter",
                tagClass: a.Class.UNIVERSAL,
                captureAsn1: "encParameter",
              },
            ],
          },
          {
            name: "EncryptedContentInfo.encryptedContent",
            tagClass: a.Class.CONTEXT_SPECIFIC,
            type: 0,
            capture: "encryptedContent",
            captureAsn1: "encryptedContentAsn1",
          },
        ],
      };
      ((i.envelopedDataValidator = {
        name: "EnvelopedData",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "EnvelopedData.Version",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.INTEGER,
            constructed: !1,
            capture: "version",
          },
          {
            name: "EnvelopedData.RecipientInfos",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SET,
            constructed: !0,
            captureAsn1: "recipientInfos",
          },
        ].concat(o),
      }),
        (i.encryptedDataValidator = {
          name: "EncryptedData",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "EncryptedData.Version",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "version",
            },
          ].concat(o),
        }));
      var c = {
        name: "SignerInfo",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "SignerInfo.version",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.INTEGER,
            constructed: !1,
          },
          {
            name: "SignerInfo.issuerAndSerialNumber",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "SignerInfo.issuerAndSerialNumber.issuer",
                tagClass: a.Class.UNIVERSAL,
                type: a.Type.SEQUENCE,
                constructed: !0,
                captureAsn1: "issuer",
              },
              {
                name: "SignerInfo.issuerAndSerialNumber.serialNumber",
                tagClass: a.Class.UNIVERSAL,
                type: a.Type.INTEGER,
                constructed: !1,
                capture: "serial",
              },
            ],
          },
          {
            name: "SignerInfo.digestAlgorithm",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SEQUENCE,
            constructed: !0,
            value: [
              {
                name: "SignerInfo.digestAlgorithm.algorithm",
                tagClass: a.Class.UNIVERSAL,
                type: a.Type.OID,
                constructed: !1,
                capture: "digestAlgorithm",
              },
              {
                name: "SignerInfo.digestAlgorithm.parameter",
                tagClass: a.Class.UNIVERSAL,
                constructed: !1,
                captureAsn1: "digestParameter",
                optional: !0,
              },
            ],
          },
          {
            name: "SignerInfo.authenticatedAttributes",
            tagClass: a.Class.CONTEXT_SPECIFIC,
            type: 0,
            constructed: !0,
            optional: !0,
            capture: "authenticatedAttributes",
          },
          {
            name: "SignerInfo.digestEncryptionAlgorithm",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SEQUENCE,
            constructed: !0,
            capture: "signatureAlgorithm",
          },
          {
            name: "SignerInfo.encryptedDigest",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.OCTETSTRING,
            constructed: !1,
            capture: "signature",
          },
          {
            name: "SignerInfo.unauthenticatedAttributes",
            tagClass: a.Class.CONTEXT_SPECIFIC,
            type: 1,
            constructed: !0,
            optional: !0,
            capture: "unauthenticatedAttributes",
          },
        ],
      };
      ((i.signedDataValidator = {
        name: "SignedData",
        tagClass: a.Class.UNIVERSAL,
        type: a.Type.SEQUENCE,
        constructed: !0,
        value: [
          {
            name: "SignedData.Version",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.INTEGER,
            constructed: !1,
            capture: "version",
          },
          {
            name: "SignedData.DigestAlgorithms",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SET,
            constructed: !0,
            captureAsn1: "digestAlgorithms",
          },
          s,
          {
            name: "SignedData.Certificates",
            tagClass: a.Class.CONTEXT_SPECIFIC,
            type: 0,
            optional: !0,
            captureAsn1: "certificates",
          },
          {
            name: "SignedData.CertificateRevocationLists",
            tagClass: a.Class.CONTEXT_SPECIFIC,
            type: 1,
            optional: !0,
            captureAsn1: "crls",
          },
          {
            name: "SignedData.SignerInfos",
            tagClass: a.Class.UNIVERSAL,
            type: a.Type.SET,
            capture: "signerInfos",
            optional: !0,
            value: [c],
          },
        ],
      }),
        (i.recipientInfoValidator = {
          name: "RecipientInfo",
          tagClass: a.Class.UNIVERSAL,
          type: a.Type.SEQUENCE,
          constructed: !0,
          value: [
            {
              name: "RecipientInfo.version",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.INTEGER,
              constructed: !1,
              capture: "version",
            },
            {
              name: "RecipientInfo.issuerAndSerial",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "RecipientInfo.issuerAndSerial.issuer",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.SEQUENCE,
                  constructed: !0,
                  captureAsn1: "issuer",
                },
                {
                  name: "RecipientInfo.issuerAndSerial.serialNumber",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.INTEGER,
                  constructed: !1,
                  capture: "serial",
                },
              ],
            },
            {
              name: "RecipientInfo.keyEncryptionAlgorithm",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.SEQUENCE,
              constructed: !0,
              value: [
                {
                  name: "RecipientInfo.keyEncryptionAlgorithm.algorithm",
                  tagClass: a.Class.UNIVERSAL,
                  type: a.Type.OID,
                  constructed: !1,
                  capture: "encAlgorithm",
                },
                {
                  name: "RecipientInfo.keyEncryptionAlgorithm.parameter",
                  tagClass: a.Class.UNIVERSAL,
                  constructed: !1,
                  captureAsn1: "encParameter",
                  optional: !0,
                },
              ],
            },
            {
              name: "RecipientInfo.encryptedKey",
              tagClass: a.Class.UNIVERSAL,
              type: a.Type.OCTETSTRING,
              constructed: !1,
              capture: "encKey",
            },
          ],
        }));
    },
    6077: function (e, t, r) {
      var n = r(2830);
      (r(3420), r(2863));
      var a = (e.exports = n.sha512 = n.sha512 || {});
      n.md.sha512 = n.md.algorithms.sha512 = a;
      var i = (n.sha384 = n.sha512.sha384 = n.sha512.sha384 || {});
      ((i.create = function () {
        return a.create("SHA-384");
      }),
        (n.md.sha384 = n.md.algorithms.sha384 = i),
        (n.sha512.sha256 = n.sha512.sha256 || {
          create: function () {
            return a.create("SHA-512/256");
          },
        }),
        (n.md["sha512/256"] = n.md.algorithms["sha512/256"] = n.sha512.sha256),
        (n.sha512.sha224 = n.sha512.sha224 || {
          create: function () {
            return a.create("SHA-512/224");
          },
        }),
        (n.md["sha512/224"] = n.md.algorithms["sha512/224"] = n.sha512.sha224),
        (a.create = function (e) {
          if (
            (o || l(), "undefined" === typeof e && (e = "SHA-512"), !(e in u))
          )
            throw new Error("Invalid SHA-512 algorithm: " + e);
          for (
            var t = u[e],
              r = null,
              a = n.util.createBuffer(),
              i = new Array(80),
              c = 0;
            c < 80;
            ++c
          )
            i[c] = new Array(2);
          var p = 64;
          switch (e) {
            case "SHA-384":
              p = 48;
              break;
            case "SHA-512/256":
              p = 32;
              break;
            case "SHA-512/224":
              p = 28;
              break;
          }
          var d = {
            algorithm: e.replace("-", "").toLowerCase(),
            blockLength: 128,
            digestLength: p,
            messageLength: 0,
            fullMessageLength: null,
            messageLengthSize: 16,
            start: function () {
              ((d.messageLength = 0),
                (d.fullMessageLength = d.messageLength128 = []));
              for (var e = d.messageLengthSize / 4, i = 0; i < e; ++i)
                d.fullMessageLength.push(0);
              ((a = n.util.createBuffer()), (r = new Array(t.length)));
              for (i = 0; i < t.length; ++i) r[i] = t[i].slice(0);
              return d;
            },
          };
          return (
            d.start(),
            (d.update = function (e, t) {
              "utf8" === t && (e = n.util.encodeUtf8(e));
              var s = e.length;
              ((d.messageLength += s), (s = [(s / 4294967296) >>> 0, s >>> 0]));
              for (var o = d.fullMessageLength.length - 1; o >= 0; --o)
                ((d.fullMessageLength[o] += s[1]),
                  (s[1] = s[0] + ((d.fullMessageLength[o] / 4294967296) >>> 0)),
                  (d.fullMessageLength[o] = d.fullMessageLength[o] >>> 0),
                  (s[0] = (s[1] / 4294967296) >>> 0));
              return (
                a.putBytes(e),
                f(r, i, a),
                (a.read > 2048 || 0 === a.length()) && a.compact(),
                d
              );
            }),
            (d.digest = function () {
              var t = n.util.createBuffer();
              t.putBytes(a.bytes());
              var o,
                c,
                u =
                  d.fullMessageLength[d.fullMessageLength.length - 1] +
                  d.messageLengthSize,
                l = u & (d.blockLength - 1);
              t.putBytes(s.substr(0, d.blockLength - l));
              for (
                var p = 8 * d.fullMessageLength[0], h = 0;
                h < d.fullMessageLength.length - 1;
                ++h
              )
                ((o = 8 * d.fullMessageLength[h + 1]),
                  (c = (o / 4294967296) >>> 0),
                  (p += c),
                  t.putInt32(p >>> 0),
                  (p = o >>> 0));
              t.putInt32(p);
              var y = new Array(r.length);
              for (h = 0; h < r.length; ++h) y[h] = r[h].slice(0);
              f(y, i, t);
              var g,
                C = n.util.createBuffer();
              g =
                "SHA-512" === e
                  ? y.length
                  : "SHA-384" === e
                    ? y.length - 2
                    : y.length - 4;
              for (h = 0; h < g; ++h)
                (C.putInt32(y[h][0]),
                  (h === g - 1 && "SHA-512/224" === e) || C.putInt32(y[h][1]));
              return C;
            }),
            d
          );
        }));
      var s = null,
        o = !1,
        c = null,
        u = null;
      function l() {
        ((s = String.fromCharCode(128)),
          (s += n.util.fillString(String.fromCharCode(0), 128)),
          (c = [
            [1116352408, 3609767458],
            [1899447441, 602891725],
            [3049323471, 3964484399],
            [3921009573, 2173295548],
            [961987163, 4081628472],
            [1508970993, 3053834265],
            [2453635748, 2937671579],
            [2870763221, 3664609560],
            [3624381080, 2734883394],
            [310598401, 1164996542],
            [607225278, 1323610764],
            [1426881987, 3590304994],
            [1925078388, 4068182383],
            [2162078206, 991336113],
            [2614888103, 633803317],
            [3248222580, 3479774868],
            [3835390401, 2666613458],
            [4022224774, 944711139],
            [264347078, 2341262773],
            [604807628, 2007800933],
            [770255983, 1495990901],
            [1249150122, 1856431235],
            [1555081692, 3175218132],
            [1996064986, 2198950837],
            [2554220882, 3999719339],
            [2821834349, 766784016],
            [2952996808, 2566594879],
            [3210313671, 3203337956],
            [3336571891, 1034457026],
            [3584528711, 2466948901],
            [113926993, 3758326383],
            [338241895, 168717936],
            [666307205, 1188179964],
            [773529912, 1546045734],
            [1294757372, 1522805485],
            [1396182291, 2643833823],
            [1695183700, 2343527390],
            [1986661051, 1014477480],
            [2177026350, 1206759142],
            [2456956037, 344077627],
            [2730485921, 1290863460],
            [2820302411, 3158454273],
            [3259730800, 3505952657],
            [3345764771, 106217008],
            [3516065817, 3606008344],
            [3600352804, 1432725776],
            [4094571909, 1467031594],
            [275423344, 851169720],
            [430227734, 3100823752],
            [506948616, 1363258195],
            [659060556, 3750685593],
            [883997877, 3785050280],
            [958139571, 3318307427],
            [1322822218, 3812723403],
            [1537002063, 2003034995],
            [1747873779, 3602036899],
            [1955562222, 1575990012],
            [2024104815, 1125592928],
            [2227730452, 2716904306],
            [2361852424, 442776044],
            [2428436474, 593698344],
            [2756734187, 3733110249],
            [3204031479, 2999351573],
            [3329325298, 3815920427],
            [3391569614, 3928383900],
            [3515267271, 566280711],
            [3940187606, 3454069534],
            [4118630271, 4000239992],
            [116418474, 1914138554],
            [174292421, 2731055270],
            [289380356, 3203993006],
            [460393269, 320620315],
            [685471733, 587496836],
            [852142971, 1086792851],
            [1017036298, 365543100],
            [1126000580, 2618297676],
            [1288033470, 3409855158],
            [1501505948, 4234509866],
            [1607167915, 987167468],
            [1816402316, 1246189591],
          ]),
          (u = {}),
          (u["SHA-512"] = [
            [1779033703, 4089235720],
            [3144134277, 2227873595],
            [1013904242, 4271175723],
            [2773480762, 1595750129],
            [1359893119, 2917565137],
            [2600822924, 725511199],
            [528734635, 4215389547],
            [1541459225, 327033209],
          ]),
          (u["SHA-384"] = [
            [3418070365, 3238371032],
            [1654270250, 914150663],
            [2438529370, 812702999],
            [355462360, 4144912697],
            [1731405415, 4290775857],
            [2394180231, 1750603025],
            [3675008525, 1694076839],
            [1203062813, 3204075428],
          ]),
          (u["SHA-512/256"] = [
            [573645204, 4230739756],
            [2673172387, 3360449730],
            [596883563, 1867755857],
            [2520282905, 1497426621],
            [2519219938, 2827943907],
            [3193839141, 1401305490],
            [721525244, 746961066],
            [246885852, 2177182882],
          ]),
          (u["SHA-512/224"] = [
            [2352822216, 424955298],
            [1944164710, 2312950998],
            [502970286, 855612546],
            [1738396948, 1479516111],
            [258812777, 2077511080],
            [2011393907, 79989058],
            [1067287976, 1780299464],
            [286451373, 2446758561],
          ]),
          (o = !0));
      }
      function f(e, t, r) {
        var n,
          a,
          i,
          s,
          o,
          u,
          l,
          f,
          p,
          d,
          h,
          y,
          g,
          C,
          m,
          v,
          E,
          S,
          I,
          A,
          T,
          b,
          B,
          N,
          R,
          L,
          w,
          U,
          k,
          D,
          _,
          V,
          P,
          O,
          K,
          x = r.length();
        while (x >= 128) {
          for (k = 0; k < 16; ++k)
            ((t[k][0] = r.getInt32() >>> 0), (t[k][1] = r.getInt32() >>> 0));
          for (; k < 80; ++k)
            ((V = t[k - 2]),
              (D = V[0]),
              (_ = V[1]),
              (n =
                (((D >>> 19) | (_ << 13)) ^
                  ((_ >>> 29) | (D << 3)) ^
                  (D >>> 6)) >>>
                0),
              (a =
                (((D << 13) | (_ >>> 19)) ^
                  ((_ << 3) | (D >>> 29)) ^
                  ((D << 26) | (_ >>> 6))) >>>
                0),
              (O = t[k - 15]),
              (D = O[0]),
              (_ = O[1]),
              (i =
                (((D >>> 1) | (_ << 31)) ^
                  ((D >>> 8) | (_ << 24)) ^
                  (D >>> 7)) >>>
                0),
              (s =
                (((D << 31) | (_ >>> 1)) ^
                  ((D << 24) | (_ >>> 8)) ^
                  ((D << 25) | (_ >>> 7))) >>>
                0),
              (P = t[k - 7]),
              (K = t[k - 16]),
              (_ = a + P[1] + s + K[1]),
              (t[k][0] =
                (n + P[0] + i + K[0] + ((_ / 4294967296) >>> 0)) >>> 0),
              (t[k][1] = _ >>> 0));
          for (
            g = e[0][0],
              C = e[0][1],
              m = e[1][0],
              v = e[1][1],
              E = e[2][0],
              S = e[2][1],
              I = e[3][0],
              A = e[3][1],
              T = e[4][0],
              b = e[4][1],
              B = e[5][0],
              N = e[5][1],
              R = e[6][0],
              L = e[6][1],
              w = e[7][0],
              U = e[7][1],
              k = 0;
            k < 80;
            ++k
          )
            ((l =
              (((T >>> 14) | (b << 18)) ^
                ((T >>> 18) | (b << 14)) ^
                ((b >>> 9) | (T << 23))) >>>
              0),
              (f =
                (((T << 18) | (b >>> 14)) ^
                  ((T << 14) | (b >>> 18)) ^
                  ((b << 23) | (T >>> 9))) >>>
                0),
              (p = (R ^ (T & (B ^ R))) >>> 0),
              (d = (L ^ (b & (N ^ L))) >>> 0),
              (o =
                (((g >>> 28) | (C << 4)) ^
                  ((C >>> 2) | (g << 30)) ^
                  ((C >>> 7) | (g << 25))) >>>
                0),
              (u =
                (((g << 4) | (C >>> 28)) ^
                  ((C << 30) | (g >>> 2)) ^
                  ((C << 25) | (g >>> 7))) >>>
                0),
              (h = ((g & m) | (E & (g ^ m))) >>> 0),
              (y = ((C & v) | (S & (C ^ v))) >>> 0),
              (_ = U + f + d + c[k][1] + t[k][1]),
              (n =
                (w + l + p + c[k][0] + t[k][0] + ((_ / 4294967296) >>> 0)) >>>
                0),
              (a = _ >>> 0),
              (_ = u + y),
              (i = (o + h + ((_ / 4294967296) >>> 0)) >>> 0),
              (s = _ >>> 0),
              (w = R),
              (U = L),
              (R = B),
              (L = N),
              (B = T),
              (N = b),
              (_ = A + a),
              (T = (I + n + ((_ / 4294967296) >>> 0)) >>> 0),
              (b = _ >>> 0),
              (I = E),
              (A = S),
              (E = m),
              (S = v),
              (m = g),
              (v = C),
              (_ = a + s),
              (g = (n + i + ((_ / 4294967296) >>> 0)) >>> 0),
              (C = _ >>> 0));
          ((_ = e[0][1] + C),
            (e[0][0] = (e[0][0] + g + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[0][1] = _ >>> 0),
            (_ = e[1][1] + v),
            (e[1][0] = (e[1][0] + m + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[1][1] = _ >>> 0),
            (_ = e[2][1] + S),
            (e[2][0] = (e[2][0] + E + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[2][1] = _ >>> 0),
            (_ = e[3][1] + A),
            (e[3][0] = (e[3][0] + I + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[3][1] = _ >>> 0),
            (_ = e[4][1] + b),
            (e[4][0] = (e[4][0] + T + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[4][1] = _ >>> 0),
            (_ = e[5][1] + N),
            (e[5][0] = (e[5][0] + B + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[5][1] = _ >>> 0),
            (_ = e[6][1] + L),
            (e[6][0] = (e[6][0] + R + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[6][1] = _ >>> 0),
            (_ = e[7][1] + U),
            (e[7][0] = (e[7][0] + w + ((_ / 4294967296) >>> 0)) >>> 0),
            (e[7][1] = _ >>> 0),
            (x -= 128));
        }
      }
    },
    7853: function (e, t, r) {
      var n = r(2830);
      (r(3659),
        r(3372),
        r(4667),
        r(3660),
        r(3898),
        r(6075),
        r(3294),
        r(2863),
        r(5e3));
      var a = n.asn1,
        i = (e.exports = n.pkcs7 = n.pkcs7 || {});
      function s(e) {
        var t = {},
          r = [];
        if (!a.validate(e, i.asn1.recipientInfoValidator, t, r)) {
          var s = new Error(
            "Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.",
          );
          throw ((s.errors = r), s);
        }
        return {
          version: t.version.charCodeAt(0),
          issuer: n.pki.RDNAttributesAsArray(t.issuer),
          serialNumber: n.util.createBuffer(t.serial).toHex(),
          encryptedContent: {
            algorithm: a.derToOid(t.encAlgorithm),
            parameter: t.encParameter ? t.encParameter.value : void 0,
            content: t.encKey,
          },
        };
      }
      function o(e) {
        return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
          a.create(
            a.Class.UNIVERSAL,
            a.Type.INTEGER,
            !1,
            a.integerToDer(e.version).getBytes(),
          ),
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            n.pki.distinguishedNameToAsn1({ attributes: e.issuer }),
            a.create(
              a.Class.UNIVERSAL,
              a.Type.INTEGER,
              !1,
              n.util.hexToBytes(e.serialNumber),
            ),
          ]),
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.OID,
              !1,
              a.oidToDer(e.encryptedContent.algorithm).getBytes(),
            ),
            a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
          ]),
          a.create(
            a.Class.UNIVERSAL,
            a.Type.OCTETSTRING,
            !1,
            e.encryptedContent.content,
          ),
        ]);
      }
      function c(e) {
        for (var t = [], r = 0; r < e.length; ++r) t.push(s(e[r]));
        return t;
      }
      function u(e) {
        for (var t = [], r = 0; r < e.length; ++r) t.push(o(e[r]));
        return t;
      }
      function l(e) {
        var t = a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
          a.create(
            a.Class.UNIVERSAL,
            a.Type.INTEGER,
            !1,
            a.integerToDer(e.version).getBytes(),
          ),
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            n.pki.distinguishedNameToAsn1({ attributes: e.issuer }),
            a.create(
              a.Class.UNIVERSAL,
              a.Type.INTEGER,
              !1,
              n.util.hexToBytes(e.serialNumber),
            ),
          ]),
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.OID,
              !1,
              a.oidToDer(e.digestAlgorithm).getBytes(),
            ),
            a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
          ]),
        ]);
        if (
          (e.authenticatedAttributesAsn1 &&
            t.value.push(e.authenticatedAttributesAsn1),
          t.value.push(
            a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
              a.create(
                a.Class.UNIVERSAL,
                a.Type.OID,
                !1,
                a.oidToDer(e.signatureAlgorithm).getBytes(),
              ),
              a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
            ]),
          ),
          t.value.push(
            a.create(a.Class.UNIVERSAL, a.Type.OCTETSTRING, !1, e.signature),
          ),
          e.unauthenticatedAttributes.length > 0)
        ) {
          for (
            var r = a.create(a.Class.CONTEXT_SPECIFIC, 1, !0, []), i = 0;
            i < e.unauthenticatedAttributes.length;
            ++i
          ) {
            var s = e.unauthenticatedAttributes[i];
            r.values.push(p(s));
          }
          t.value.push(r);
        }
        return t;
      }
      function f(e) {
        for (var t = [], r = 0; r < e.length; ++r) t.push(l(e[r]));
        return t;
      }
      function p(e) {
        var t;
        if (e.type === n.pki.oids.contentType)
          t = a.create(
            a.Class.UNIVERSAL,
            a.Type.OID,
            !1,
            a.oidToDer(e.value).getBytes(),
          );
        else if (e.type === n.pki.oids.messageDigest)
          t = a.create(
            a.Class.UNIVERSAL,
            a.Type.OCTETSTRING,
            !1,
            e.value.bytes(),
          );
        else if (e.type === n.pki.oids.signingTime) {
          var r = new Date("1950-01-01T00:00:00Z"),
            i = new Date("2050-01-01T00:00:00Z"),
            s = e.value;
          if ("string" === typeof s) {
            var o = Date.parse(s);
            s = isNaN(o)
              ? 13 === s.length
                ? a.utcTimeToDate(s)
                : a.generalizedTimeToDate(s)
              : new Date(o);
          }
          t =
            s >= r && s < i
              ? a.create(
                  a.Class.UNIVERSAL,
                  a.Type.UTCTIME,
                  !1,
                  a.dateToUtcTime(s),
                )
              : a.create(
                  a.Class.UNIVERSAL,
                  a.Type.GENERALIZEDTIME,
                  !1,
                  a.dateToGeneralizedTime(s),
                );
        }
        return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
          a.create(
            a.Class.UNIVERSAL,
            a.Type.OID,
            !1,
            a.oidToDer(e.type).getBytes(),
          ),
          a.create(a.Class.UNIVERSAL, a.Type.SET, !0, [t]),
        ]);
      }
      function d(e) {
        return [
          a.create(
            a.Class.UNIVERSAL,
            a.Type.OID,
            !1,
            a.oidToDer(n.pki.oids.data).getBytes(),
          ),
          a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.OID,
              !1,
              a.oidToDer(e.algorithm).getBytes(),
            ),
            e.parameter
              ? a.create(
                  a.Class.UNIVERSAL,
                  a.Type.OCTETSTRING,
                  !1,
                  e.parameter.getBytes(),
                )
              : void 0,
          ]),
          a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
            a.create(
              a.Class.UNIVERSAL,
              a.Type.OCTETSTRING,
              !1,
              e.content.getBytes(),
            ),
          ]),
        ];
      }
      function h(e, t, r) {
        var i = {},
          s = [];
        if (!a.validate(t, r, i, s)) {
          var o = new Error(
            "Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.",
          );
          throw ((o.errors = o), o);
        }
        var c = a.derToOid(i.contentType);
        if (c !== n.pki.oids.data)
          throw new Error(
            "Unsupported PKCS#7 message. Only wrapped ContentType Data supported.",
          );
        if (i.encryptedContent) {
          var u = "";
          if (n.util.isArray(i.encryptedContent))
            for (var l = 0; l < i.encryptedContent.length; ++l) {
              if (i.encryptedContent[l].type !== a.Type.OCTETSTRING)
                throw new Error(
                  "Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.",
                );
              u += i.encryptedContent[l].value;
            }
          else u = i.encryptedContent;
          e.encryptedContent = {
            algorithm: a.derToOid(i.encAlgorithm),
            parameter: n.util.createBuffer(i.encParameter.value),
            content: n.util.createBuffer(u),
          };
        }
        if (i.content) {
          u = "";
          if (n.util.isArray(i.content))
            for (l = 0; l < i.content.length; ++l) {
              if (i.content[l].type !== a.Type.OCTETSTRING)
                throw new Error(
                  "Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.",
                );
              u += i.content[l].value;
            }
          else u = i.content;
          e.content = n.util.createBuffer(u);
        }
        return ((e.version = i.version.charCodeAt(0)), (e.rawCapture = i), i);
      }
      function y(e) {
        if (void 0 === e.encryptedContent.key)
          throw new Error("Symmetric key not available.");
        if (void 0 === e.content) {
          var t;
          switch (e.encryptedContent.algorithm) {
            case n.pki.oids["aes128-CBC"]:
            case n.pki.oids["aes192-CBC"]:
            case n.pki.oids["aes256-CBC"]:
              t = n.aes.createDecryptionCipher(e.encryptedContent.key);
              break;
            case n.pki.oids["desCBC"]:
            case n.pki.oids["des-EDE3-CBC"]:
              t = n.des.createDecryptionCipher(e.encryptedContent.key);
              break;
            default:
              throw new Error(
                "Unsupported symmetric cipher, OID " +
                  e.encryptedContent.algorithm,
              );
          }
          if (
            (t.start(e.encryptedContent.parameter),
            t.update(e.encryptedContent.content),
            !t.finish())
          )
            throw new Error("Symmetric decryption failed.");
          e.content = t.output;
        }
      }
      ((i.messageFromPem = function (e) {
        var t = n.pem.decode(e)[0];
        if ("PKCS7" !== t.type) {
          var r = new Error(
            'Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".',
          );
          throw ((r.headerType = t.type), r);
        }
        if (t.procType && "ENCRYPTED" === t.procType.type)
          throw new Error(
            "Could not convert PKCS#7 message from PEM; PEM is encrypted.",
          );
        var s = a.fromDer(t.body);
        return i.messageFromAsn1(s);
      }),
        (i.messageToPem = function (e, t) {
          var r = { type: "PKCS7", body: a.toDer(e.toAsn1()).getBytes() };
          return n.pem.encode(r, { maxline: t });
        }),
        (i.messageFromAsn1 = function (e) {
          var t = {},
            r = [];
          if (!a.validate(e, i.asn1.contentInfoValidator, t, r)) {
            var s = new Error(
              "Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.",
            );
            throw ((s.errors = r), s);
          }
          var o,
            c = a.derToOid(t.contentType);
          switch (c) {
            case n.pki.oids.envelopedData:
              o = i.createEnvelopedData();
              break;
            case n.pki.oids.encryptedData:
              o = i.createEncryptedData();
              break;
            case n.pki.oids.signedData:
              o = i.createSignedData();
              break;
            default:
              throw new Error(
                "Cannot read PKCS#7 message. ContentType with OID " +
                  c +
                  " is not (yet) supported.",
              );
          }
          return (o.fromAsn1(t.content.value[0]), o);
        }),
        (i.createSignedData = function () {
          var e = null;
          return (
            (e = {
              type: n.pki.oids.signedData,
              version: 1,
              certificates: [],
              crls: [],
              signers: [],
              digestAlgorithmIdentifiers: [],
              contentInfo: null,
              signerInfos: [],
              fromAsn1: function (t) {
                if (
                  (h(e, t, i.asn1.signedDataValidator),
                  (e.certificates = []),
                  (e.crls = []),
                  (e.digestAlgorithmIdentifiers = []),
                  (e.contentInfo = null),
                  (e.signerInfos = []),
                  e.rawCapture.certificates)
                )
                  for (
                    var r = e.rawCapture.certificates.value, a = 0;
                    a < r.length;
                    ++a
                  )
                    e.certificates.push(n.pki.certificateFromAsn1(r[a]));
              },
              toAsn1: function () {
                e.contentInfo || e.sign();
                for (var t = [], r = 0; r < e.certificates.length; ++r)
                  t.push(n.pki.certificateToAsn1(e.certificates[r]));
                var i = [],
                  s = a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                    a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.INTEGER,
                        !1,
                        a.integerToDer(e.version).getBytes(),
                      ),
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.SET,
                        !0,
                        e.digestAlgorithmIdentifiers,
                      ),
                      e.contentInfo,
                    ]),
                  ]);
                return (
                  t.length > 0 &&
                    s.value[0].value.push(
                      a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, t),
                    ),
                  i.length > 0 &&
                    s.value[0].value.push(
                      a.create(a.Class.CONTEXT_SPECIFIC, 1, !0, i),
                    ),
                  s.value[0].value.push(
                    a.create(a.Class.UNIVERSAL, a.Type.SET, !0, e.signerInfos),
                  ),
                  a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                    a.create(
                      a.Class.UNIVERSAL,
                      a.Type.OID,
                      !1,
                      a.oidToDer(e.type).getBytes(),
                    ),
                    s,
                  ])
                );
              },
              addSigner: function (t) {
                var r = t.issuer,
                  a = t.serialNumber;
                if (t.certificate) {
                  var i = t.certificate;
                  ("string" === typeof i && (i = n.pki.certificateFromPem(i)),
                    (r = i.issuer.attributes),
                    (a = i.serialNumber));
                }
                var s = t.key;
                if (!s)
                  throw new Error(
                    "Could not add PKCS#7 signer; no private key specified.",
                  );
                "string" === typeof s && (s = n.pki.privateKeyFromPem(s));
                var o = t.digestAlgorithm || n.pki.oids.sha1;
                switch (o) {
                  case n.pki.oids.sha1:
                  case n.pki.oids.sha256:
                  case n.pki.oids.sha384:
                  case n.pki.oids.sha512:
                  case n.pki.oids.md5:
                    break;
                  default:
                    throw new Error(
                      "Could not add PKCS#7 signer; unknown message digest algorithm: " +
                        o,
                    );
                }
                var c = t.authenticatedAttributes || [];
                if (c.length > 0) {
                  for (var u = !1, l = !1, f = 0; f < c.length; ++f) {
                    var p = c[f];
                    if (u || p.type !== n.pki.oids.contentType) {
                      if (l || p.type !== n.pki.oids.messageDigest);
                      else if (((l = !0), u)) break;
                    } else if (((u = !0), l)) break;
                  }
                  if (!u || !l)
                    throw new Error(
                      "Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.",
                    );
                }
                e.signers.push({
                  key: s,
                  version: 1,
                  issuer: r,
                  serialNumber: a,
                  digestAlgorithm: o,
                  signatureAlgorithm: n.pki.oids.rsaEncryption,
                  signature: null,
                  authenticatedAttributes: c,
                  unauthenticatedAttributes: [],
                });
              },
              sign: function (i) {
                var s;
                ((i = i || {}),
                "object" !== typeof e.content || null === e.contentInfo) &&
                  ((e.contentInfo = a.create(
                    a.Class.UNIVERSAL,
                    a.Type.SEQUENCE,
                    !0,
                    [
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.OID,
                        !1,
                        a.oidToDer(n.pki.oids.data).getBytes(),
                      ),
                    ],
                  )),
                  "content" in e &&
                    (e.content instanceof n.util.ByteBuffer
                      ? (s = e.content.bytes())
                      : "string" === typeof e.content &&
                        (s = n.util.encodeUtf8(e.content)),
                    i.detached
                      ? (e.detachedContent = a.create(
                          a.Class.UNIVERSAL,
                          a.Type.OCTETSTRING,
                          !1,
                          s,
                        ))
                      : e.contentInfo.value.push(
                          a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                            a.create(
                              a.Class.UNIVERSAL,
                              a.Type.OCTETSTRING,
                              !1,
                              s,
                            ),
                          ]),
                        )));
                if (0 !== e.signers.length) {
                  var o = t();
                  r(o);
                }
              },
              verify: function () {
                throw new Error(
                  "PKCS#7 signature verification not yet implemented.",
                );
              },
              addCertificate: function (t) {
                ("string" === typeof t && (t = n.pki.certificateFromPem(t)),
                  e.certificates.push(t));
              },
              addCertificateRevokationList: function (e) {
                throw new Error("PKCS#7 CRL support not yet implemented.");
              },
            }),
            e
          );
          function t() {
            for (var t = {}, r = 0; r < e.signers.length; ++r) {
              var i = e.signers[r],
                s = i.digestAlgorithm;
              (s in t || (t[s] = n.md[n.pki.oids[s]].create()),
                0 === i.authenticatedAttributes.length
                  ? (i.md = t[s])
                  : (i.md = n.md[n.pki.oids[s]].create()));
            }
            for (var s in ((e.digestAlgorithmIdentifiers = []), t))
              e.digestAlgorithmIdentifiers.push(
                a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                  a.create(
                    a.Class.UNIVERSAL,
                    a.Type.OID,
                    !1,
                    a.oidToDer(s).getBytes(),
                  ),
                  a.create(a.Class.UNIVERSAL, a.Type.NULL, !1, ""),
                ]),
              );
            return t;
          }
          function r(t) {
            var r;
            if (
              (e.detachedContent
                ? (r = e.detachedContent)
                : ((r = e.contentInfo.value[1]), (r = r.value[0])),
              !r)
            )
              throw new Error(
                "Could not sign PKCS#7 message; there is no content to sign.",
              );
            var i = a.derToOid(e.contentInfo.value[0].value),
              s = a.toDer(r);
            for (var o in (s.getByte(),
            a.getBerValueLength(s),
            (s = s.getBytes()),
            t))
              t[o].start().update(s);
            for (var c = new Date(), u = 0; u < e.signers.length; ++u) {
              var l = e.signers[u];
              if (0 === l.authenticatedAttributes.length) {
                if (i !== n.pki.oids.data)
                  throw new Error(
                    "Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.",
                  );
              } else {
                l.authenticatedAttributesAsn1 = a.create(
                  a.Class.CONTEXT_SPECIFIC,
                  0,
                  !0,
                  [],
                );
                for (
                  var d = a.create(a.Class.UNIVERSAL, a.Type.SET, !0, []),
                    h = 0;
                  h < l.authenticatedAttributes.length;
                  ++h
                ) {
                  var y = l.authenticatedAttributes[h];
                  (y.type === n.pki.oids.messageDigest
                    ? (y.value = t[l.digestAlgorithm].digest())
                    : y.type === n.pki.oids.signingTime &&
                      (y.value || (y.value = c)),
                    d.value.push(p(y)),
                    l.authenticatedAttributesAsn1.value.push(p(y)));
                }
                ((s = a.toDer(d).getBytes()), l.md.start().update(s));
              }
              l.signature = l.key.sign(l.md, "RSASSA-PKCS1-V1_5");
            }
            e.signerInfos = f(e.signers);
          }
        }),
        (i.createEncryptedData = function () {
          var e = null;
          return (
            (e = {
              type: n.pki.oids.encryptedData,
              version: 0,
              encryptedContent: { algorithm: n.pki.oids["aes256-CBC"] },
              fromAsn1: function (t) {
                h(e, t, i.asn1.encryptedDataValidator);
              },
              decrypt: function (t) {
                (void 0 !== t && (e.encryptedContent.key = t), y(e));
              },
            }),
            e
          );
        }),
        (i.createEnvelopedData = function () {
          var e = null;
          return (
            (e = {
              type: n.pki.oids.envelopedData,
              version: 0,
              recipients: [],
              encryptedContent: { algorithm: n.pki.oids["aes256-CBC"] },
              fromAsn1: function (t) {
                var r = h(e, t, i.asn1.envelopedDataValidator);
                e.recipients = c(r.recipientInfos.value);
              },
              toAsn1: function () {
                return a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                  a.create(
                    a.Class.UNIVERSAL,
                    a.Type.OID,
                    !1,
                    a.oidToDer(e.type).getBytes(),
                  ),
                  a.create(a.Class.CONTEXT_SPECIFIC, 0, !0, [
                    a.create(a.Class.UNIVERSAL, a.Type.SEQUENCE, !0, [
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.INTEGER,
                        !1,
                        a.integerToDer(e.version).getBytes(),
                      ),
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.SET,
                        !0,
                        u(e.recipients),
                      ),
                      a.create(
                        a.Class.UNIVERSAL,
                        a.Type.SEQUENCE,
                        !0,
                        d(e.encryptedContent),
                      ),
                    ]),
                  ]),
                ]);
              },
              findRecipient: function (t) {
                for (
                  var r = t.issuer.attributes, n = 0;
                  n < e.recipients.length;
                  ++n
                ) {
                  var a = e.recipients[n],
                    i = a.issuer;
                  if (
                    a.serialNumber === t.serialNumber &&
                    i.length === r.length
                  ) {
                    for (var s = !0, o = 0; o < r.length; ++o)
                      if (
                        i[o].type !== r[o].type ||
                        i[o].value !== r[o].value
                      ) {
                        s = !1;
                        break;
                      }
                    if (s) return a;
                  }
                }
                return null;
              },
              decrypt: function (t, r) {
                if (
                  void 0 === e.encryptedContent.key &&
                  void 0 !== t &&
                  void 0 !== r
                )
                  switch (t.encryptedContent.algorithm) {
                    case n.pki.oids.rsaEncryption:
                    case n.pki.oids.desCBC:
                      var a = r.decrypt(t.encryptedContent.content);
                      e.encryptedContent.key = n.util.createBuffer(a);
                      break;
                    default:
                      throw new Error(
                        "Unsupported asymmetric cipher, OID " +
                          t.encryptedContent.algorithm,
                      );
                  }
                y(e);
              },
              addRecipient: function (t) {
                e.recipients.push({
                  version: 0,
                  issuer: t.issuer.attributes,
                  serialNumber: t.serialNumber,
                  encryptedContent: {
                    algorithm: n.pki.oids.rsaEncryption,
                    key: t.publicKey,
                  },
                });
              },
              encrypt: function (t, r) {
                if (void 0 === e.encryptedContent.content) {
                  var a, i, s;
                  switch (
                    ((r = r || e.encryptedContent.algorithm),
                    (t = t || e.encryptedContent.key),
                    r)
                  ) {
                    case n.pki.oids["aes128-CBC"]:
                      ((a = 16), (i = 16), (s = n.aes.createEncryptionCipher));
                      break;
                    case n.pki.oids["aes192-CBC"]:
                      ((a = 24), (i = 16), (s = n.aes.createEncryptionCipher));
                      break;
                    case n.pki.oids["aes256-CBC"]:
                      ((a = 32), (i = 16), (s = n.aes.createEncryptionCipher));
                      break;
                    case n.pki.oids["des-EDE3-CBC"]:
                      ((a = 24), (i = 8), (s = n.des.createEncryptionCipher));
                      break;
                    default:
                      throw new Error("Unsupported symmetric cipher, OID " + r);
                  }
                  if (void 0 === t)
                    t = n.util.createBuffer(n.random.getBytes(a));
                  else if (t.length() != a)
                    throw new Error(
                      "Symmetric key has wrong length; got " +
                        t.length() +
                        " bytes, expected " +
                        a +
                        ".",
                    );
                  ((e.encryptedContent.algorithm = r),
                    (e.encryptedContent.key = t),
                    (e.encryptedContent.parameter = n.util.createBuffer(
                      n.random.getBytes(i),
                    )));
                  var o = s(t);
                  if (
                    (o.start(e.encryptedContent.parameter.copy()),
                    o.update(e.content),
                    !o.finish())
                  )
                    throw new Error("Symmetric encryption failed.");
                  e.encryptedContent.content = o.output;
                }
                for (var c = 0; c < e.recipients.length; ++c) {
                  var u = e.recipients[c];
                  if (void 0 === u.encryptedContent.content)
                    switch (u.encryptedContent.algorithm) {
                      case n.pki.oids.rsaEncryption:
                        u.encryptedContent.content =
                          u.encryptedContent.key.encrypt(
                            e.encryptedContent.key.data,
                          );
                        break;
                      default:
                        throw new Error(
                          "Unsupported asymmetric cipher, OID " +
                            u.encryptedContent.algorithm,
                        );
                    }
                }
              },
            }),
            e
          );
        }));
    },
    7854: function (e, t, r) {
      var n = r(2830);
      (r(3659), r(4290), r(4997), r(4291), r(2863));
      var a = (e.exports = n.ssh = n.ssh || {});
      function i(e, t) {
        var r = t.toString(16);
        r[0] >= "8" && (r = "00" + r);
        var a = n.util.hexToBytes(r);
        (e.putInt32(a.length), e.putBytes(a));
      }
      function s(e, t) {
        (e.putInt32(t.length), e.putString(t));
      }
      function o() {
        for (
          var e = n.md.sha1.create(), t = arguments.length, r = 0;
          r < t;
          ++r
        )
          e.update(arguments[r]);
        return e.digest();
      }
      ((a.privateKeyToPutty = function (e, t, r) {
        ((r = r || ""), (t = t || ""));
        var a = "ssh-rsa",
          c = "" === t ? "none" : "aes256-cbc",
          u = "PuTTY-User-Key-File-2: " + a + "\r\n";
        ((u += "Encryption: " + c + "\r\n"), (u += "Comment: " + r + "\r\n"));
        var l = n.util.createBuffer();
        (s(l, a), i(l, e.e), i(l, e.n));
        var f = n.util.encode64(l.bytes(), 64),
          p = Math.floor(f.length / 66) + 1;
        ((u += "Public-Lines: " + p + "\r\n"), (u += f));
        var d,
          h = n.util.createBuffer();
        if ((i(h, e.d), i(h, e.p), i(h, e.q), i(h, e.qInv), t)) {
          var y = h.length() + 16 - 1;
          y -= y % 16;
          var g = o(h.bytes());
          (g.truncate(g.length() - y + h.length()), h.putBuffer(g));
          var C = n.util.createBuffer();
          (C.putBuffer(o("\0\0\0\0", t)), C.putBuffer(o("\0\0\0", t)));
          var m = n.aes.createEncryptionCipher(C.truncate(8), "CBC");
          (m.start(n.util.createBuffer().fillWithByte(0, 16)),
            m.update(h.copy()),
            m.finish());
          var v = m.output;
          (v.truncate(16), (d = n.util.encode64(v.bytes(), 64)));
        } else d = n.util.encode64(h.bytes(), 64);
        ((p = Math.floor(d.length / 66) + 1),
          (u += "\r\nPrivate-Lines: " + p + "\r\n"),
          (u += d));
        var E = o("putty-private-key-file-mac-key", t),
          S = n.util.createBuffer();
        (s(S, a),
          s(S, c),
          s(S, r),
          S.putInt32(l.length()),
          S.putBuffer(l),
          S.putInt32(h.length()),
          S.putBuffer(h));
        var I = n.hmac.create();
        return (
          I.start("sha1", E),
          I.update(S.bytes()),
          (u += "\r\nPrivate-MAC: " + I.digest().toHex() + "\r\n"),
          u
        );
      }),
        (a.publicKeyToOpenSSH = function (e, t) {
          var r = "ssh-rsa";
          t = t || "";
          var a = n.util.createBuffer();
          return (
            s(a, r),
            i(a, e.e),
            i(a, e.n),
            r + " " + n.util.encode64(a.bytes()) + " " + t
          );
        }),
        (a.privateKeyToOpenSSH = function (e, t) {
          return t
            ? n.pki.encryptRsaPrivateKey(e, t, {
                legacy: !0,
                algorithm: "aes128",
              })
            : n.pki.privateKeyToPem(e);
        }),
        (a.getPublicKeyFingerprint = function (e, t) {
          t = t || {};
          var r = t.md || n.md.md5.create(),
            a = "ssh-rsa",
            o = n.util.createBuffer();
          (s(o, a), i(o, e.e), i(o, e.n), r.start(), r.update(o.getBytes()));
          var c = r.digest();
          if ("hex" === t.encoding) {
            var u = c.toHex();
            return t.delimiter ? u.match(/.{2}/g).join(t.delimiter) : u;
          }
          if ("binary" === t.encoding) return c.getBytes();
          if (t.encoding)
            throw new Error('Unknown encoding "' + t.encoding + '".');
          return c;
        }));
    },
    7858: function (e, t, r) {
      (function (t) {
        e.exports = t();
      })(function (e) {
        "use strict";
        var t = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        function r(e, t) {
          var r = e[0],
            n = e[1],
            a = e[2],
            i = e[3];
          ((r += (((n & a) | (~n & i)) + t[0] - 680876936) | 0),
            (r = (((r << 7) | (r >>> 25)) + n) | 0),
            (i += (((r & n) | (~r & a)) + t[1] - 389564586) | 0),
            (i = (((i << 12) | (i >>> 20)) + r) | 0),
            (a += (((i & r) | (~i & n)) + t[2] + 606105819) | 0),
            (a = (((a << 17) | (a >>> 15)) + i) | 0),
            (n += (((a & i) | (~a & r)) + t[3] - 1044525330) | 0),
            (n = (((n << 22) | (n >>> 10)) + a) | 0),
            (r += (((n & a) | (~n & i)) + t[4] - 176418897) | 0),
            (r = (((r << 7) | (r >>> 25)) + n) | 0),
            (i += (((r & n) | (~r & a)) + t[5] + 1200080426) | 0),
            (i = (((i << 12) | (i >>> 20)) + r) | 0),
            (a += (((i & r) | (~i & n)) + t[6] - 1473231341) | 0),
            (a = (((a << 17) | (a >>> 15)) + i) | 0),
            (n += (((a & i) | (~a & r)) + t[7] - 45705983) | 0),
            (n = (((n << 22) | (n >>> 10)) + a) | 0),
            (r += (((n & a) | (~n & i)) + t[8] + 1770035416) | 0),
            (r = (((r << 7) | (r >>> 25)) + n) | 0),
            (i += (((r & n) | (~r & a)) + t[9] - 1958414417) | 0),
            (i = (((i << 12) | (i >>> 20)) + r) | 0),
            (a += (((i & r) | (~i & n)) + t[10] - 42063) | 0),
            (a = (((a << 17) | (a >>> 15)) + i) | 0),
            (n += (((a & i) | (~a & r)) + t[11] - 1990404162) | 0),
            (n = (((n << 22) | (n >>> 10)) + a) | 0),
            (r += (((n & a) | (~n & i)) + t[12] + 1804603682) | 0),
            (r = (((r << 7) | (r >>> 25)) + n) | 0),
            (i += (((r & n) | (~r & a)) + t[13] - 40341101) | 0),
            (i = (((i << 12) | (i >>> 20)) + r) | 0),
            (a += (((i & r) | (~i & n)) + t[14] - 1502002290) | 0),
            (a = (((a << 17) | (a >>> 15)) + i) | 0),
            (n += (((a & i) | (~a & r)) + t[15] + 1236535329) | 0),
            (n = (((n << 22) | (n >>> 10)) + a) | 0),
            (r += (((n & i) | (a & ~i)) + t[1] - 165796510) | 0),
            (r = (((r << 5) | (r >>> 27)) + n) | 0),
            (i += (((r & a) | (n & ~a)) + t[6] - 1069501632) | 0),
            (i = (((i << 9) | (i >>> 23)) + r) | 0),
            (a += (((i & n) | (r & ~n)) + t[11] + 643717713) | 0),
            (a = (((a << 14) | (a >>> 18)) + i) | 0),
            (n += (((a & r) | (i & ~r)) + t[0] - 373897302) | 0),
            (n = (((n << 20) | (n >>> 12)) + a) | 0),
            (r += (((n & i) | (a & ~i)) + t[5] - 701558691) | 0),
            (r = (((r << 5) | (r >>> 27)) + n) | 0),
            (i += (((r & a) | (n & ~a)) + t[10] + 38016083) | 0),
            (i = (((i << 9) | (i >>> 23)) + r) | 0),
            (a += (((i & n) | (r & ~n)) + t[15] - 660478335) | 0),
            (a = (((a << 14) | (a >>> 18)) + i) | 0),
            (n += (((a & r) | (i & ~r)) + t[4] - 405537848) | 0),
            (n = (((n << 20) | (n >>> 12)) + a) | 0),
            (r += (((n & i) | (a & ~i)) + t[9] + 568446438) | 0),
            (r = (((r << 5) | (r >>> 27)) + n) | 0),
            (i += (((r & a) | (n & ~a)) + t[14] - 1019803690) | 0),
            (i = (((i << 9) | (i >>> 23)) + r) | 0),
            (a += (((i & n) | (r & ~n)) + t[3] - 187363961) | 0),
            (a = (((a << 14) | (a >>> 18)) + i) | 0),
            (n += (((a & r) | (i & ~r)) + t[8] + 1163531501) | 0),
            (n = (((n << 20) | (n >>> 12)) + a) | 0),
            (r += (((n & i) | (a & ~i)) + t[13] - 1444681467) | 0),
            (r = (((r << 5) | (r >>> 27)) + n) | 0),
            (i += (((r & a) | (n & ~a)) + t[2] - 51403784) | 0),
            (i = (((i << 9) | (i >>> 23)) + r) | 0),
            (a += (((i & n) | (r & ~n)) + t[7] + 1735328473) | 0),
            (a = (((a << 14) | (a >>> 18)) + i) | 0),
            (n += (((a & r) | (i & ~r)) + t[12] - 1926607734) | 0),
            (n = (((n << 20) | (n >>> 12)) + a) | 0),
            (r += ((n ^ a ^ i) + t[5] - 378558) | 0),
            (r = (((r << 4) | (r >>> 28)) + n) | 0),
            (i += ((r ^ n ^ a) + t[8] - 2022574463) | 0),
            (i = (((i << 11) | (i >>> 21)) + r) | 0),
            (a += ((i ^ r ^ n) + t[11] + 1839030562) | 0),
            (a = (((a << 16) | (a >>> 16)) + i) | 0),
            (n += ((a ^ i ^ r) + t[14] - 35309556) | 0),
            (n = (((n << 23) | (n >>> 9)) + a) | 0),
            (r += ((n ^ a ^ i) + t[1] - 1530992060) | 0),
            (r = (((r << 4) | (r >>> 28)) + n) | 0),
            (i += ((r ^ n ^ a) + t[4] + 1272893353) | 0),
            (i = (((i << 11) | (i >>> 21)) + r) | 0),
            (a += ((i ^ r ^ n) + t[7] - 155497632) | 0),
            (a = (((a << 16) | (a >>> 16)) + i) | 0),
            (n += ((a ^ i ^ r) + t[10] - 1094730640) | 0),
            (n = (((n << 23) | (n >>> 9)) + a) | 0),
            (r += ((n ^ a ^ i) + t[13] + 681279174) | 0),
            (r = (((r << 4) | (r >>> 28)) + n) | 0),
            (i += ((r ^ n ^ a) + t[0] - 358537222) | 0),
            (i = (((i << 11) | (i >>> 21)) + r) | 0),
            (a += ((i ^ r ^ n) + t[3] - 722521979) | 0),
            (a = (((a << 16) | (a >>> 16)) + i) | 0),
            (n += ((a ^ i ^ r) + t[6] + 76029189) | 0),
            (n = (((n << 23) | (n >>> 9)) + a) | 0),
            (r += ((n ^ a ^ i) + t[9] - 640364487) | 0),
            (r = (((r << 4) | (r >>> 28)) + n) | 0),
            (i += ((r ^ n ^ a) + t[12] - 421815835) | 0),
            (i = (((i << 11) | (i >>> 21)) + r) | 0),
            (a += ((i ^ r ^ n) + t[15] + 530742520) | 0),
            (a = (((a << 16) | (a >>> 16)) + i) | 0),
            (n += ((a ^ i ^ r) + t[2] - 995338651) | 0),
            (n = (((n << 23) | (n >>> 9)) + a) | 0),
            (r += ((a ^ (n | ~i)) + t[0] - 198630844) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~a)) + t[7] + 1126891415) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (a += ((r ^ (i | ~n)) + t[14] - 1416354905) | 0),
            (a = (((a << 15) | (a >>> 17)) + i) | 0),
            (n += ((i ^ (a | ~r)) + t[5] - 57434055) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (r += ((a ^ (n | ~i)) + t[12] + 1700485571) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~a)) + t[3] - 1894986606) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (a += ((r ^ (i | ~n)) + t[10] - 1051523) | 0),
            (a = (((a << 15) | (a >>> 17)) + i) | 0),
            (n += ((i ^ (a | ~r)) + t[1] - 2054922799) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (r += ((a ^ (n | ~i)) + t[8] + 1873313359) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~a)) + t[15] - 30611744) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (a += ((r ^ (i | ~n)) + t[6] - 1560198380) | 0),
            (a = (((a << 15) | (a >>> 17)) + i) | 0),
            (n += ((i ^ (a | ~r)) + t[13] + 1309151649) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (r += ((a ^ (n | ~i)) + t[4] - 145523070) | 0),
            (r = (((r << 6) | (r >>> 26)) + n) | 0),
            (i += ((n ^ (r | ~a)) + t[11] - 1120210379) | 0),
            (i = (((i << 10) | (i >>> 22)) + r) | 0),
            (a += ((r ^ (i | ~n)) + t[2] + 718787259) | 0),
            (a = (((a << 15) | (a >>> 17)) + i) | 0),
            (n += ((i ^ (a | ~r)) + t[9] - 343485551) | 0),
            (n = (((n << 21) | (n >>> 11)) + a) | 0),
            (e[0] = (r + e[0]) | 0),
            (e[1] = (n + e[1]) | 0),
            (e[2] = (a + e[2]) | 0),
            (e[3] = (i + e[3]) | 0));
        }
        function n(e) {
          var t,
            r = [];
          for (t = 0; t < 64; t += 4)
            r[t >> 2] =
              e.charCodeAt(t) +
              (e.charCodeAt(t + 1) << 8) +
              (e.charCodeAt(t + 2) << 16) +
              (e.charCodeAt(t + 3) << 24);
          return r;
        }
        function a(e) {
          var t,
            r = [];
          for (t = 0; t < 64; t += 4)
            r[t >> 2] =
              e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
          return r;
        }
        function i(e) {
          var t,
            a,
            i,
            s,
            o,
            c,
            u = e.length,
            l = [1732584193, -271733879, -1732584194, 271733878];
          for (t = 64; t <= u; t += 64) r(l, n(e.substring(t - 64, t)));
          for (
            e = e.substring(t - 64),
              a = e.length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              t = 0;
            t < a;
            t += 1
          )
            i[t >> 2] |= e.charCodeAt(t) << ((t % 4) << 3);
          if (((i[t >> 2] |= 128 << ((t % 4) << 3)), t > 55))
            for (r(l, i), t = 0; t < 16; t += 1) i[t] = 0;
          return (
            (s = 8 * u),
            (s = s.toString(16).match(/(.*?)(.{0,8})$/)),
            (o = parseInt(s[2], 16)),
            (c = parseInt(s[1], 16) || 0),
            (i[14] = o),
            (i[15] = c),
            r(l, i),
            l
          );
        }
        function s(e) {
          var t,
            n,
            i,
            s,
            o,
            c,
            u = e.length,
            l = [1732584193, -271733879, -1732584194, 271733878];
          for (t = 64; t <= u; t += 64) r(l, a(e.subarray(t - 64, t)));
          for (
            e = t - 64 < u ? e.subarray(t - 64) : new Uint8Array(0),
              n = e.length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              t = 0;
            t < n;
            t += 1
          )
            i[t >> 2] |= e[t] << ((t % 4) << 3);
          if (((i[t >> 2] |= 128 << ((t % 4) << 3)), t > 55))
            for (r(l, i), t = 0; t < 16; t += 1) i[t] = 0;
          return (
            (s = 8 * u),
            (s = s.toString(16).match(/(.*?)(.{0,8})$/)),
            (o = parseInt(s[2], 16)),
            (c = parseInt(s[1], 16) || 0),
            (i[14] = o),
            (i[15] = c),
            r(l, i),
            l
          );
        }
        function o(e) {
          var r,
            n = "";
          for (r = 0; r < 4; r += 1)
            n += t[(e >> (8 * r + 4)) & 15] + t[(e >> (8 * r)) & 15];
          return n;
        }
        function c(e) {
          var t;
          for (t = 0; t < e.length; t += 1) e[t] = o(e[t]);
          return e.join("");
        }
        function u(e) {
          return (
            /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
            e
          );
        }
        function l(e, t) {
          var r,
            n = e.length,
            a = new ArrayBuffer(n),
            i = new Uint8Array(a);
          for (r = 0; r < n; r += 1) i[r] = e.charCodeAt(r);
          return t ? i : a;
        }
        function f(e) {
          return String.fromCharCode.apply(null, new Uint8Array(e));
        }
        function p(e, t, r) {
          var n = new Uint8Array(e.byteLength + t.byteLength);
          return (
            n.set(new Uint8Array(e)),
            n.set(new Uint8Array(t), e.byteLength),
            r ? n : n.buffer
          );
        }
        function d(e) {
          var t,
            r = [],
            n = e.length;
          for (t = 0; t < n - 1; t += 2) r.push(parseInt(e.substr(t, 2), 16));
          return String.fromCharCode.apply(String, r);
        }
        function h() {
          this.reset();
        }
        return (
          "5d41402abc4b2a76b9719d911017c592" !== c(i("hello")) &&
            function (e, t) {
              var r = (65535 & e) + (65535 & t),
                n = (e >> 16) + (t >> 16) + (r >> 16);
              return (n << 16) | (65535 & r);
            },
          "undefined" === typeof ArrayBuffer ||
            ArrayBuffer.prototype.slice ||
            (function () {
              function t(e, t) {
                return (
                  (e = 0 | e || 0),
                  e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                );
              }
              ArrayBuffer.prototype.slice = function (r, n) {
                var a,
                  i,
                  s,
                  o,
                  c = this.byteLength,
                  u = t(r, c),
                  l = c;
                return (
                  n !== e && (l = t(n, c)),
                  u > l
                    ? new ArrayBuffer(0)
                    : ((a = l - u),
                      (i = new ArrayBuffer(a)),
                      (s = new Uint8Array(i)),
                      (o = new Uint8Array(this, u, a)),
                      s.set(o),
                      i)
                );
              };
            })(),
          (h.prototype.append = function (e) {
            return (this.appendBinary(u(e)), this);
          }),
          (h.prototype.appendBinary = function (e) {
            ((this._buff += e), (this._length += e.length));
            var t,
              a = this._buff.length;
            for (t = 64; t <= a; t += 64)
              r(this._hash, n(this._buff.substring(t - 64, t)));
            return ((this._buff = this._buff.substring(t - 64)), this);
          }),
          (h.prototype.end = function (e) {
            var t,
              r,
              n = this._buff,
              a = n.length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < a; t += 1)
              i[t >> 2] |= n.charCodeAt(t) << ((t % 4) << 3);
            return (
              this._finish(i, a),
              (r = c(this._hash)),
              e && (r = d(r)),
              this.reset(),
              r
            );
          }),
          (h.prototype.reset = function () {
            return (
              (this._buff = ""),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (h.prototype.getState = function () {
            return {
              buff: this._buff,
              length: this._length,
              hash: this._hash.slice(),
            };
          }),
          (h.prototype.setState = function (e) {
            return (
              (this._buff = e.buff),
              (this._length = e.length),
              (this._hash = e.hash),
              this
            );
          }),
          (h.prototype.destroy = function () {
            (delete this._hash, delete this._buff, delete this._length);
          }),
          (h.prototype._finish = function (e, t) {
            var n,
              a,
              i,
              s = t;
            if (((e[s >> 2] |= 128 << ((s % 4) << 3)), s > 55))
              for (r(this._hash, e), s = 0; s < 16; s += 1) e[s] = 0;
            ((n = 8 * this._length),
              (n = n.toString(16).match(/(.*?)(.{0,8})$/)),
              (a = parseInt(n[2], 16)),
              (i = parseInt(n[1], 16) || 0),
              (e[14] = a),
              (e[15] = i),
              r(this._hash, e));
          }),
          (h.hash = function (e, t) {
            return h.hashBinary(u(e), t);
          }),
          (h.hashBinary = function (e, t) {
            var r = i(e),
              n = c(r);
            return t ? d(n) : n;
          }),
          (h.ArrayBuffer = function () {
            this.reset();
          }),
          (h.ArrayBuffer.prototype.append = function (e) {
            var t,
              n = p(this._buff.buffer, e, !0),
              i = n.length;
            for (this._length += e.byteLength, t = 64; t <= i; t += 64)
              r(this._hash, a(n.subarray(t - 64, t)));
            return (
              (this._buff =
                t - 64 < i
                  ? new Uint8Array(n.buffer.slice(t - 64))
                  : new Uint8Array(0)),
              this
            );
          }),
          (h.ArrayBuffer.prototype.end = function (e) {
            var t,
              r,
              n = this._buff,
              a = n.length,
              i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < a; t += 1) i[t >> 2] |= n[t] << ((t % 4) << 3);
            return (
              this._finish(i, a),
              (r = c(this._hash)),
              e && (r = d(r)),
              this.reset(),
              r
            );
          }),
          (h.ArrayBuffer.prototype.reset = function () {
            return (
              (this._buff = new Uint8Array(0)),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (h.ArrayBuffer.prototype.getState = function () {
            var e = h.prototype.getState.call(this);
            return ((e.buff = f(e.buff)), e);
          }),
          (h.ArrayBuffer.prototype.setState = function (e) {
            return (
              (e.buff = l(e.buff, !0)),
              h.prototype.setState.call(this, e)
            );
          }),
          (h.ArrayBuffer.prototype.destroy = h.prototype.destroy),
          (h.ArrayBuffer.prototype._finish = h.prototype._finish),
          (h.ArrayBuffer.hash = function (e, t) {
            var r = s(new Uint8Array(e)),
              n = c(r);
            return t ? d(n) : n;
          }),
          h
        );
      });
    },
  },
]);
