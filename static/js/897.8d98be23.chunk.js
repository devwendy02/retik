/*! For license information please see 897.8d98be23.chunk.js.LICENSE.txt */
(self.webpackChunkwallet_connect = self.webpackChunkwallet_connect || []).push([
    [897], {
        91551: (t, e, r) => {
            "use strict";
            e.Xx = e._w = e.aP = e.KS = e.jQ = void 0;
            const i = r(88002),
                n = r(47227),
                s = r(72700);

            function o(t) {
                const e = new Float64Array(16);
                if (t)
                    for (let r = 0; r < t.length; r++) e[r] = t[r];
                return e
            }
            e.jQ = 64, e.KS = 64, e.aP = 32;
            new Uint8Array(32)[0] = 9;
            const a = o(),
                c = o([1]),
                h = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                u = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(t, e) {
                for (let r = 0; r < 16; r++) t[r] = 0 | e[r]
            }

            function g(t) {
                let e = 1;
                for (let r = 0; r < 16; r++) {
                    let i = t[r] + e + 65535;
                    e = Math.floor(i / 65536), t[r] = i - 65536 * e
                }
                t[0] += e - 1 + 37 * (e - 1)
            }

            function v(t, e, r) {
                const i = ~(r - 1);
                for (let n = 0; n < 16; n++) {
                    const r = i & (t[n] ^ e[n]);
                    t[n] ^= r, e[n] ^= r
                }
            }

            function y(t, e) {
                const r = o(),
                    i = o();
                for (let n = 0; n < 16; n++) i[n] = e[n];
                g(i), g(i), g(i);
                for (let n = 0; n < 2; n++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    const t = r[15] >> 16 & 1;
                    r[14] &= 65535, v(i, r, 1 - t)
                }
                for (let n = 0; n < 16; n++) t[2 * n] = 255 & i[n], t[2 * n + 1] = i[n] >> 8
            }

            function m(t, e) {
                let r = 0;
                for (let i = 0; i < 32; i++) r |= t[i] ^ e[i];
                return (1 & r - 1 >>> 8) - 1
            }

            function w(t, e) {
                const r = new Uint8Array(32),
                    i = new Uint8Array(32);
                return y(r, t), y(i, e), m(r, i)
            }

            function _(t) {
                const e = new Uint8Array(32);
                return y(e, t), 1 & e[0]
            }

            function b(t, e, r) {
                for (let i = 0; i < 16; i++) t[i] = e[i] + r[i]
            }

            function E(t, e, r) {
                for (let i = 0; i < 16; i++) t[i] = e[i] - r[i]
            }

            function I(t, e, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    u = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    v = 0,
                    y = 0,
                    m = 0,
                    w = 0,
                    _ = 0,
                    b = 0,
                    E = 0,
                    I = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    x = 0,
                    C = 0,
                    R = 0,
                    A = 0,
                    T = 0,
                    N = 0,
                    j = 0,
                    L = 0,
                    q = 0,
                    D = r[0],
                    M = r[1],
                    z = r[2],
                    k = r[3],
                    $ = r[4],
                    U = r[5],
                    H = r[6],
                    V = r[7],
                    B = r[8],
                    K = r[9],
                    F = r[10],
                    Z = r[11],
                    W = r[12],
                    G = r[13],
                    J = r[14],
                    Q = r[15];
                i = e[0], s += i * D, o += i * M, a += i * z, c += i * k, h += i * $, u += i * U, l += i * H, p += i * V, f += i * B, d += i * K, g += i * F, v += i * Z, y += i * W, m += i * G, w += i * J, _ += i * Q, i = e[1], o += i * D, a += i * M, c += i * z, h += i * k, u += i * $, l += i * U, p += i * H, f += i * V, d += i * B, g += i * K, v += i * F, y += i * Z, m += i * W, w += i * G, _ += i * J, b += i * Q, i = e[2], a += i * D, c += i * M, h += i * z, u += i * k, l += i * $, p += i * U, f += i * H, d += i * V, g += i * B, v += i * K, y += i * F, m += i * Z, w += i * W, _ += i * G, b += i * J, E += i * Q, i = e[3], c += i * D, h += i * M, u += i * z, l += i * k, p += i * $, f += i * U, d += i * H, g += i * V, v += i * B, y += i * K, m += i * F, w += i * Z, _ += i * W, b += i * G, E += i * J, I += i * Q, i = e[4], h += i * D, u += i * M, l += i * z, p += i * k, f += i * $, d += i * U, g += i * H, v += i * V, y += i * B, m += i * K, w += i * F, _ += i * Z, b += i * W, E += i * G, I += i * J, P += i * Q, i = e[5], u += i * D, l += i * M, p += i * z, f += i * k, d += i * $, g += i * U, v += i * H, y += i * V, m += i * B, w += i * K, _ += i * F, b += i * Z, E += i * W, I += i * G, P += i * J, S += i * Q, i = e[6], l += i * D, p += i * M, f += i * z, d += i * k, g += i * $, v += i * U, y += i * H, m += i * V, w += i * B, _ += i * K, b += i * F, E += i * Z, I += i * W, P += i * G, S += i * J, O += i * Q, i = e[7], p += i * D, f += i * M, d += i * z, g += i * k, v += i * $, y += i * U, m += i * H, w += i * V, _ += i * B, b += i * K, E += i * F, I += i * Z, P += i * W, S += i * G, O += i * J, x += i * Q, i = e[8], f += i * D, d += i * M, g += i * z, v += i * k, y += i * $, m += i * U, w += i * H, _ += i * V, b += i * B, E += i * K, I += i * F, P += i * Z, S += i * W, O += i * G, x += i * J, C += i * Q, i = e[9], d += i * D, g += i * M, v += i * z, y += i * k, m += i * $, w += i * U, _ += i * H, b += i * V, E += i * B, I += i * K, P += i * F, S += i * Z, O += i * W, x += i * G, C += i * J, R += i * Q, i = e[10], g += i * D, v += i * M, y += i * z, m += i * k, w += i * $, _ += i * U, b += i * H, E += i * V, I += i * B, P += i * K, S += i * F, O += i * Z, x += i * W, C += i * G, R += i * J, A += i * Q, i = e[11], v += i * D, y += i * M, m += i * z, w += i * k, _ += i * $, b += i * U, E += i * H, I += i * V, P += i * B, S += i * K, O += i * F, x += i * Z, C += i * W, R += i * G, A += i * J, T += i * Q, i = e[12], y += i * D, m += i * M, w += i * z, _ += i * k, b += i * $, E += i * U, I += i * H, P += i * V, S += i * B, O += i * K, x += i * F, C += i * Z, R += i * W, A += i * G, T += i * J, N += i * Q, i = e[13], m += i * D, w += i * M, _ += i * z, b += i * k, E += i * $, I += i * U, P += i * H, S += i * V, O += i * B, x += i * K, C += i * F, R += i * Z, A += i * W, T += i * G, N += i * J, j += i * Q, i = e[14], w += i * D, _ += i * M, b += i * z, E += i * k, I += i * $, P += i * U, S += i * H, O += i * V, x += i * B, C += i * K, R += i * F, A += i * Z, T += i * W, N += i * G, j += i * J, L += i * Q, i = e[15], _ += i * D, b += i * M, E += i * z, I += i * k, P += i * $, S += i * U, O += i * H, x += i * V, C += i * B, R += i * K, A += i * F, T += i * Z, N += i * W, j += i * G, L += i * J, q += i * Q, s += 38 * b, o += 38 * E, a += 38 * I, c += 38 * P, h += 38 * S, u += 38 * O, l += 38 * x, p += 38 * C, f += 38 * R, d += 38 * A, g += 38 * T, v += 38 * N, y += 38 * j, m += 38 * L, w += 38 * q, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), w = i - 65536 * n, i = _ + n + 65535, n = Math.floor(i / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), d = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), g = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), v = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), w = i - 65536 * n, i = _ + n + 65535, n = Math.floor(i / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = c, t[4] = h, t[5] = u, t[6] = l, t[7] = p, t[8] = f, t[9] = d, t[10] = g, t[11] = v, t[12] = y, t[13] = m, t[14] = w, t[15] = _
            }

            function P(t, e) {
                I(t, e, e)
            }

            function S(t, e) {
                const r = o();
                let i;
                for (i = 0; i < 16; i++) r[i] = e[i];
                for (i = 253; i >= 0; i--) P(r, r), 2 !== i && 4 !== i && I(r, r, e);
                for (i = 0; i < 16; i++) t[i] = r[i]
            }

            function O(t, e) {
                const r = o(),
                    i = o(),
                    n = o(),
                    s = o(),
                    a = o(),
                    c = o(),
                    h = o(),
                    l = o(),
                    p = o();
                E(r, t[1], t[0]), E(p, e[1], e[0]), I(r, r, p), b(i, t[0], t[1]), b(p, e[0], e[1]), I(i, i, p), I(n, t[3], e[3]), I(n, n, u), I(s, t[2], e[2]), b(s, s, s), E(a, i, r), E(c, s, n), b(h, s, n), b(l, i, r), I(t[0], a, c), I(t[1], l, h), I(t[2], h, c), I(t[3], a, l)
            }

            function x(t, e, r) {
                for (let i = 0; i < 4; i++) v(t[i], e[i], r)
            }

            function C(t, e) {
                const r = o(),
                    i = o(),
                    n = o();
                S(n, e[2]), I(r, e[0], n), I(i, e[1], n), y(t, i), t[31] ^= _(r) << 7
            }

            function R(t, e, r) {
                d(t[0], a), d(t[1], c), d(t[2], c), d(t[3], a);
                for (let i = 255; i >= 0; --i) {
                    const n = r[i / 8 | 0] >> (7 & i) & 1;
                    x(t, e, n), O(e, t), O(t, t), x(t, e, n)
                }
            }

            function A(t, e) {
                const r = [o(), o(), o(), o()];
                d(r[0], l), d(r[1], p), d(r[2], c), I(r[3], l, p), R(t, r, e)
            }

            function T(t) {
                if (t.length !== e.aP) throw new Error(`ed25519: seed must be ${e.aP} bytes`);
                const r = (0, n.hash)(t);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                const i = new Uint8Array(32),
                    s = [o(), o(), o(), o()];
                A(s, r), C(i, s);
                const a = new Uint8Array(64);
                return a.set(t), a.set(i, 32), {
                    publicKey: i,
                    secretKey: a
                }
            }
            e._w = T;
            const N = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function j(t, e) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) e[n] += r - 16 * e[i] * N[n - (i - 32)], r = Math.floor((e[n] + 128) / 256), e[n] -= 256 * r;
                    e[n] += r, e[i] = 0
                }
                for (r = 0, n = 0; n < 32; n++) e[n] += r - (e[31] >> 4) * N[n], r = e[n] >> 8, e[n] &= 255;
                for (n = 0; n < 32; n++) e[n] -= r * N[n];
                for (i = 0; i < 32; i++) e[i + 1] += e[i] >> 8, t[i] = 255 & e[i]
            }

            function L(t) {
                const e = new Float64Array(64);
                for (let r = 0; r < 64; r++) e[r] = t[r];
                for (let r = 0; r < 64; r++) t[r] = 0;
                j(t, e)
            }

            function q(t, e) {
                const r = o(),
                    i = o(),
                    n = o(),
                    s = o(),
                    u = o(),
                    l = o(),
                    p = o();
                return d(t[2], c),
                    function(t, e) {
                        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                        t[15] &= 32767
                    }(t[1], e), P(n, t[1]), I(s, n, h), E(n, n, t[2]), b(s, t[2], s), P(u, s), P(l, u), I(p, l, u), I(r, p, n), I(r, r, s),
                    function(t, e) {
                        const r = o();
                        let i;
                        for (i = 0; i < 16; i++) r[i] = e[i];
                        for (i = 250; i >= 0; i--) P(r, r), 1 !== i && I(r, r, e);
                        for (i = 0; i < 16; i++) t[i] = r[i]
                    }(r, r), I(r, r, n), I(r, r, s), I(r, r, s), I(t[0], r, s), P(i, t[0]), I(i, i, s), w(i, n) && I(t[0], t[0], f), P(i, t[0]), I(i, i, s), w(i, n) ? -1 : (_(t[0]) === e[31] >> 7 && E(t[0], a, t[0]), I(t[3], t[0], t[1]), 0)
            }
            e.Xx = function(t, e) {
                const r = new Float64Array(64),
                    i = [o(), o(), o(), o()],
                    s = (0, n.hash)(t.subarray(0, 32));
                s[0] &= 248, s[31] &= 127, s[31] |= 64;
                const a = new Uint8Array(64);
                a.set(s.subarray(32), 32);
                const c = new n.SHA512;
                c.update(a.subarray(32)), c.update(e);
                const h = c.digest();
                c.clean(), L(h), A(i, h), C(a, i), c.reset(), c.update(a.subarray(0, 32)), c.update(t.subarray(32)), c.update(e);
                const u = c.digest();
                L(u);
                for (let n = 0; n < 32; n++) r[n] = h[n];
                for (let n = 0; n < 32; n++)
                    for (let t = 0; t < 32; t++) r[n + t] += u[n] * s[t];
                return j(a.subarray(32), r), a
            }
        },
        47227: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(41400),
                n = r(72700);
            e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
            var s = function() {
                function t() {
                    this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return t.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, t.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, t.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, t.prototype.update = function(t, r) {
                    if (void 0 === r && (r = t.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < e.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = t[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = t[i++], r--;
                    return this
                }, t.prototype.finish = function(t) {
                    if (!this._finished) {
                        var e = this._bytesHashed,
                            r = this._bufferLength,
                            n = e / 536870912 | 0,
                            s = e << 3,
                            o = e % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
                        i.writeUint32BE(n, this._buffer, o - 8), i.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 8; c++) i.writeUint32BE(this._stateHi[c], t, 8 * c), i.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
                    return this
                }, t.prototype.digest = function() {
                    var t = new Uint8Array(this.digestLength);
                    return this.finish(t), t
                }, t.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, t.prototype.restoreState = function(t) {
                    return this._stateHi.set(t.stateHi), this._stateLo.set(t.stateLo), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
                }, t.prototype.cleanSavedState = function(t) {
                    n.wipe(t.stateHi), n.wipe(t.stateLo), t.buffer && n.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
                }, t
            }();
            e.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(t, e, r, n, s, a, c) {
                for (var h, u, l, p, f, d, g, v, y = r[0], m = r[1], w = r[2], _ = r[3], b = r[4], E = r[5], I = r[6], P = r[7], S = n[0], O = n[1], x = n[2], C = n[3], R = n[4], A = n[5], T = n[6], N = n[7]; c >= 128;) {
                    for (var j = 0; j < 16; j++) {
                        var L = 8 * j + a;
                        t[j] = i.readUint32BE(s, L), e[j] = i.readUint32BE(s, L + 4)
                    }
                    for (j = 0; j < 80; j++) {
                        var q, D, M = y,
                            z = m,
                            k = w,
                            $ = _,
                            U = b,
                            H = E,
                            V = I,
                            B = S,
                            K = O,
                            F = x,
                            Z = C,
                            W = R,
                            G = A,
                            J = T;
                        if (f = 65535 & (u = N), d = u >>> 16, g = 65535 & (h = P), v = h >>> 16, f += 65535 & (u = (R >>> 14 | b << 18) ^ (R >>> 18 | b << 14) ^ (b >>> 9 | R << 23)), d += u >>> 16, g += 65535 & (h = (b >>> 14 | R << 18) ^ (b >>> 18 | R << 14) ^ (R >>> 9 | b << 23)), v += h >>> 16, f += 65535 & (u = R & A ^ ~R & T), d += u >>> 16, g += 65535 & (h = b & E ^ ~b & I), v += h >>> 16, h = o[2 * j], f += 65535 & (u = o[2 * j + 1]), d += u >>> 16, g += 65535 & h, v += h >>> 16, h = t[j % 16], d += (u = e[j % 16]) >>> 16, g += 65535 & h, v += h >>> 16, g += (d += (f += 65535 & u) >>> 16) >>> 16, f = 65535 & (u = p = 65535 & f | d << 16), d = u >>> 16, g = 65535 & (h = l = 65535 & g | (v += g >>> 16) << 16), v = h >>> 16, f += 65535 & (u = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)), d += u >>> 16, g += 65535 & (h = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25)), v += h >>> 16, d += (u = S & O ^ S & x ^ O & x) >>> 16, g += 65535 & (h = y & m ^ y & w ^ m & w), v += h >>> 16, q = 65535 & (g += (d += (f += 65535 & u) >>> 16) >>> 16) | (v += g >>> 16) << 16, D = 65535 & f | d << 16, f = 65535 & (u = Z), d = u >>> 16, g = 65535 & (h = $), v = h >>> 16, d += (u = p) >>> 16, g += 65535 & (h = l), v += h >>> 16, m = M, w = z, _ = k, b = $ = 65535 & (g += (d += (f += 65535 & u) >>> 16) >>> 16) | (v += g >>> 16) << 16, E = U, I = H, P = V, y = q, O = B, x = K, C = F, R = Z = 65535 & f | d << 16, A = W, T = G, N = J, S = D, j % 16 === 15)
                            for (L = 0; L < 16; L++) h = t[L], f = 65535 & (u = e[L]), d = u >>> 16, g = 65535 & h, v = h >>> 16, h = t[(L + 9) % 16], f += 65535 & (u = e[(L + 9) % 16]), d += u >>> 16, g += 65535 & h, v += h >>> 16, l = t[(L + 1) % 16], f += 65535 & (u = ((p = e[(L + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)), d += u >>> 16, g += 65535 & (h = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7), v += h >>> 16, l = t[(L + 14) % 16], d += (u = ((p = e[(L + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16, g += 65535 & (h = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6), v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, t[L] = 65535 & g | v << 16, e[L] = 65535 & f | d << 16
                    }
                    f = 65535 & (u = S), d = u >>> 16, g = 65535 & (h = y), v = h >>> 16, h = r[0], d += (u = n[0]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[0] = y = 65535 & g | v << 16, n[0] = S = 65535 & f | d << 16, f = 65535 & (u = O), d = u >>> 16, g = 65535 & (h = m), v = h >>> 16, h = r[1], d += (u = n[1]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[1] = m = 65535 & g | v << 16, n[1] = O = 65535 & f | d << 16, f = 65535 & (u = x), d = u >>> 16, g = 65535 & (h = w), v = h >>> 16, h = r[2], d += (u = n[2]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[2] = w = 65535 & g | v << 16, n[2] = x = 65535 & f | d << 16, f = 65535 & (u = C), d = u >>> 16, g = 65535 & (h = _), v = h >>> 16, h = r[3], d += (u = n[3]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[3] = _ = 65535 & g | v << 16, n[3] = C = 65535 & f | d << 16, f = 65535 & (u = R), d = u >>> 16, g = 65535 & (h = b), v = h >>> 16, h = r[4], d += (u = n[4]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[4] = b = 65535 & g | v << 16, n[4] = R = 65535 & f | d << 16, f = 65535 & (u = A), d = u >>> 16, g = 65535 & (h = E), v = h >>> 16, h = r[5], d += (u = n[5]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[5] = E = 65535 & g | v << 16, n[5] = A = 65535 & f | d << 16, f = 65535 & (u = T), d = u >>> 16, g = 65535 & (h = I), v = h >>> 16, h = r[6], d += (u = n[6]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[6] = I = 65535 & g | v << 16, n[6] = T = 65535 & f | d << 16, f = 65535 & (u = N), d = u >>> 16, g = 65535 & (h = P), v = h >>> 16, h = r[7], d += (u = n[7]) >>> 16, g += 65535 & h, v += h >>> 16, v += (g += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, r[7] = P = 65535 & g | v << 16, n[7] = N = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            e.hash = function(t) {
                var e = new s;
                e.update(t);
                var r = e.digest();
                return e.clean(), r
            }
        },
        60786: (t, e, r) => {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                const t = i();
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = i, e.getSubtleCrypto = n, e.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        66086: (t, e, r) => {
            "use strict";
            var i = r(1839);

            function n() {
                return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return "undefined" !== typeof i && "undefined" !== typeof i.versions && "undefined" !== typeof i.versions.node
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = n, e.isNode = s, e.isBrowser = function() {
                return !n() && !s()
            }
        },
        74180: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(73104);
            i.__exportStar(r(60786), e), i.__exportStar(r(66086), e)
        },
        69897: (t, e, r) => {
            "use strict";
            r.d(e, {
                EthereumProvider: () => us,
                OPTIONAL_EVENTS: () => Qn,
                OPTIONAL_METHODS: () => Gn
            });
            var i = r(16977),
                n = r.n(i),
                s = r(94799),
                o = r(52104),
                a = r(16114),
                c = r(79485),
                h = r(21124);
            class u extends h.q {
                constructor(t) {
                    super(), this.opts = t, this.protocol = "wc", this.version = 2
                }
            }
            class l extends h.q {
                constructor(t, e) {
                    super(), this.core = t, this.logger = e, this.records = new Map
                }
            }
            class p {
                constructor(t, e) {
                    this.logger = t, this.core = e
                }
            }
            class f extends h.q {
                constructor(t, e) {
                    super(), this.relayer = t, this.logger = e
                }
            }
            class d extends h.q {
                constructor(t) {
                    super()
                }
            }
            class g {
                constructor(t, e, r, i) {
                    this.core = t, this.logger = e, this.name = r
                }
            }
            class v extends h.q {
                constructor(t, e) {
                    super(), this.relayer = t, this.logger = e
                }
            }
            class y extends h.q {
                constructor(t, e) {
                    super(), this.core = t, this.logger = e
                }
            }
            class m {
                constructor(t, e) {
                    this.projectId = t, this.logger = e
                }
            }
            class w {
                constructor(t) {
                    this.opts = t, this.protocol = "wc", this.version = 2
                }
            }
            class _ {
                constructor(t) {
                    this.client = t
                }
            }
            const b = t => JSON.stringify(t, ((t, e) => "bigint" === typeof e ? e.toString() + "n" : e));

            function E(t) {
                if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                try {
                    return (t => {
                        const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                        return JSON.parse(e, ((t, e) => "string" === typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
                    })(t)
                } catch (e) {
                    return t
                }
            }

            function I(t) {
                return "string" === typeof t ? t : b(t) || ""
            }
            var P = r(91551),
                S = r(88002),
                O = r(79486);
            const x = ".",
                C = "base64url",
                R = "utf8",
                A = "utf8",
                T = ":",
                N = "did",
                j = "key",
                L = "base58btc",
                q = "z",
                D = "K36";
            var M = r(84064),
                z = r(55112),
                k = r(30718);

            function $(t) {
                return (0, z.B)((0, k.m)(I(t), R), C)
            }

            function U(t) {
                const e = (0, k.m)(D, L),
                    r = q + (0, z.B)((0, M.z)([e, t]), L);
                return [N, j, r].join(T)
            }

            function H() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, S.randomBytes)(32);
                return P._w(t)
            }
            async function V(t, e, r, i) {
                let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, O.fromMiliseconds)(Date.now());
                const s = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    o = {
                        iss: U(i.publicKey),
                        sub: t,
                        aud: e,
                        iat: n,
                        exp: n + r
                    },
                    a = (c = {
                        header: s,
                        payload: o
                    }, (0, k.m)([$(c.header), $(c.payload)].join(x), A));
                var c;
                return function(t) {
                    return [$(t.header), $(t.payload), (e = t.signature, (0, z.B)(e, C))].join(x);
                    var e
                }({
                    header: s,
                    payload: o,
                    signature: P.Xx(i.secretKey, a)
                })
            }
            r(29744);
            var B = r(18954);
            const K = "INTERNAL_ERROR",
                F = "SERVER_ERROR",
                Z = [-32700, -32600, -32601, -32602, -32603],
                W = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [K]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [F]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                G = F;

            function J(t) {
                return Z.includes(t)
            }

            function Q(t) {
                return Object.keys(W).includes(t) ? W[t] : W[G]
            }

            function Y(t) {
                const e = Object.values(W).find((e => e.code === t));
                return e || W[G]
            }

            function X(t, e, r) {
                return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t
            }
            var tt = r(74180);

            function et() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
            }

            function rt() {
                return BigInt(et(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6))
            }

            function it(t, e, r) {
                return {
                    id: r || et(),
                    jsonrpc: "2.0",
                    method: t,
                    params: e
                }
            }

            function nt(t, e) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    result: e
                }
            }

            function st(t, e, r) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    error: ot(e, r)
                }
            }

            function ot(t, e) {
                return "undefined" === typeof t ? Q(K) : ("string" === typeof t && (t = Object.assign(Object.assign({}, Q(F)), {
                    message: t
                })), "undefined" !== typeof e && (t.data = e), J(t.code) && (t = Y(t.code)), t)
            }
            class at {}
            class ct extends at {
                constructor() {
                    super()
                }
            }
            class ht extends ct {
                constructor(t) {
                    super()
                }
            }

            function ut(t, e) {
                const r = function(t) {
                    const e = t.match(new RegExp(/^\w+:/, "gi"));
                    if (e && e.length) return e[0]
                }(t);
                return "undefined" !== typeof r && new RegExp(e).test(r)
            }

            function lt(t) {
                return ut(t, "^https?:")
            }

            function pt(t) {
                return ut(t, "^wss?:")
            }

            function ft(t) {
                return new RegExp("wss?://localhost(:d{2,5})?").test(t)
            }

            function dt(t) {
                return "object" === typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc
            }

            function gt(t) {
                return dt(t) && "method" in t
            }

            function vt(t) {
                return dt(t) && (yt(t) || mt(t))
            }

            function yt(t) {
                return "result" in t
            }

            function mt(t) {
                return "error" in t
            }
            class wt extends ht {
                constructor(t) {
                    super(t), this.events = new i.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                async connect() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    return this.requestStrict(it(t.method, t.params || [], t.id || rt().toString()), e)
                }
                async requestStrict(t, e) {
                    return new Promise((async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (n) {
                            i(n)
                        }
                        this.events.on(`${t.id}`, (t => {
                            mt(t) ? i(t.error) : r(t.result)
                        }));
                        try {
                            await this.connection.send(t, e)
                        } catch (n) {
                            i(n)
                        }
                    }))
                }
                setConnection() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                }
                onPayload(t) {
                    this.events.emit("payload", t), vt(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" === typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (t => this.onPayload(t))), this.connection.on("close", (t => this.onClose(t))), this.connection.on("error", (t => this.events.emit("error", t))), this.connection.on("register_error", (t => this.onClose())), this.hasRegisteredEventListeners = !0)
                }
            }
            const _t = t => t.split("?")[0],
                bt = "undefined" !== typeof WebSocket ? WebSocket : "undefined" !== typeof r.g && "undefined" !== typeof r.g.WebSocket ? r.g.WebSocket : "undefined" !== typeof window && "undefined" !== typeof window.WebSocket ? window.WebSocket : "undefined" !== typeof self && "undefined" !== typeof self.WebSocket ? self.WebSocket : r(45746);
            const Et = class {
                constructor(t) {
                    if (this.url = t, this.events = new i.EventEmitter, this.registering = !1, !pt(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                    this.url = t
                }
                get connected() {
                    return "undefined" !== typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(t)
                }
                async close() {
                    return new Promise(((t, e) => {
                        "undefined" !== typeof this.socket ? (this.socket.onclose = e => {
                            this.onClose(e), t()
                        }, this.socket.close()) : e(new Error("Connection already closed"))
                    }))
                }
                async send(t, e) {
                    "undefined" === typeof this.socket && (this.socket = await this.register());
                    try {
                        this.socket.send(I(t))
                    } catch (r) {
                        this.onError(t.id, r)
                    }
                }
                register() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!pt(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                            this.events.once("register_error", (t => {
                                this.resetMaxListeners(), e(t)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.socket) return e(new Error("WebSocket connection is missing or invalid"));
                                t(this.socket)
                            }))
                        }))
                    }
                    return this.url = t, this.registering = !0, new Promise(((e, i) => {
                        const n = (0, tt.isReactNative)() ? void 0 : {
                                rejectUnauthorized: !ft(t)
                            },
                            s = new bt(t, [], n);
                        "undefined" !== typeof WebSocket || "undefined" !== typeof r.g && "undefined" !== typeof r.g.WebSocket || "undefined" !== typeof window && "undefined" !== typeof window.WebSocket || "undefined" !== typeof self && "undefined" !== typeof self.WebSocket ? s.onerror = t => {
                            const e = t;
                            i(this.emitError(e.error))
                        } : s.on("error", (t => {
                            i(this.emitError(t))
                        })), s.onopen = () => {
                            this.onOpen(s), e(s)
                        }
                    }))
                }
                onOpen(t) {
                    t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open")
                }
                onClose(t) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", t)
                }
                onPayload(t) {
                    if ("undefined" === typeof t.data) return;
                    const e = "string" === typeof t.data ? E(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    const r = this.parseError(e),
                        i = st(t, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return X(t, _t(e), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(t) {
                    const e = this.parseError(new Error((null === t || void 0 === t ? void 0 : t.message) || `WebSocket connection failed for host: ${_t(this.url)}`));
                    return this.events.emit("register_error", e), e
                }
            };
            var It = r(8753),
                Pt = r.n(It);
            var St = function(t, e) {
                    if (t.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < t.length; n++) {
                        var s = t.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = t.length,
                        c = t.charAt(0),
                        h = Math.log(a) / Math.log(256),
                        u = Math.log(256) / Math.log(a);

                    function l(t) {
                        if ("string" != typeof t) throw new TypeError("Expected String");
                        if (0 === t.length) return new Uint8Array;
                        var e = 0;
                        if (" " !== t[e]) {
                            for (var i = 0, n = 0; t[e] === c;) i++, e++;
                            for (var s = (t.length - e) * h + 1 >>> 0, o = new Uint8Array(s); t[e];) {
                                var u = r[t.charCodeAt(e)];
                                if (255 === u) return;
                                for (var l = 0, p = s - 1;
                                    (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                                if (0 !== u) throw new Error("Non-zero carry");
                                n = l, e++
                            }
                            if (" " !== t[e]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(e) {
                            if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === e.length) return "";
                            for (var r = 0, i = 0, n = 0, s = e.length; n !== s && 0 === e[n];) n++, r++;
                            for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s;) {
                                for (var l = e[n], p = 0, f = o - 1;
                                    (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === h[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += t.charAt(h[d]);
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function(t) {
                            var r = l(t);
                            if (r) return r;
                            throw new Error(`Non-${e} character`)
                        }
                    }
                },
                Ot = St;
            const xt = t => {
                if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                if (t instanceof ArrayBuffer) return new Uint8Array(t);
                if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class Ct {
                constructor(t, e, r) {
                    this.name = t, this.prefix = e, this.baseEncode = r
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class Rt {
                constructor(t, e, r) {
                    if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
                }
                decode(t) {
                    if ("string" == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return Tt(this, t)
                }
            }
            class At {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return Tt(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e];
                    if (r) return r.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const Tt = (t, e) => new At({ ...t.decoders || {
                    [t.prefix]: t
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class Nt {
                constructor(t, e, r, i) {
                    this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = i, this.encoder = new Ct(t, e, r), this.decoder = new Rt(t, e, i)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const jt = t => {
                    let {
                        name: e,
                        prefix: r,
                        encode: i,
                        decode: n
                    } = t;
                    return new Nt(e, r, i, n)
                },
                Lt = t => {
                    let {
                        prefix: e,
                        name: r,
                        alphabet: i
                    } = t;
                    const {
                        encode: n,
                        decode: s
                    } = Ot(i, r);
                    return jt({
                        prefix: e,
                        name: r,
                        encode: n,
                        decode: t => xt(s(t))
                    })
                },
                qt = t => {
                    let {
                        name: e,
                        prefix: r,
                        bitsPerChar: i,
                        alphabet: n
                    } = t;
                    return jt({
                        prefix: r,
                        name: e,
                        encode: t => ((t, e, r) => {
                            const i = "=" === e[e.length - 1],
                                n = (1 << r) - 1;
                            let s = "",
                                o = 0,
                                a = 0;
                            for (let c = 0; c < t.length; ++c)
                                for (a = a << 8 | t[c], o += 8; o > r;) o -= r, s += e[n & a >> o];
                            if (o && (s += e[n & a << r - o]), i)
                                for (; s.length * r & 7;) s += "=";
                            return s
                        })(t, n, i),
                        decode: t => ((t, e, r, i) => {
                            const n = {};
                            for (let u = 0; u < e.length; ++u) n[e[u]] = u;
                            let s = t.length;
                            for (;
                                "=" === t[s - 1];) --s;
                            const o = new Uint8Array(s * r / 8 | 0);
                            let a = 0,
                                c = 0,
                                h = 0;
                            for (let u = 0; u < s; ++u) {
                                const e = n[t[u]];
                                if (void 0 === e) throw new SyntaxError(`Non-${i} character`);
                                c = c << r | e, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                            }
                            if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                            return o
                        })(t, n, i, e)
                    })
                },
                Dt = jt({
                    prefix: "\0",
                    name: "identity",
                    encode: t => (t => (new TextDecoder).decode(t))(t),
                    decode: t => (t => (new TextEncoder).encode(t))(t)
                });
            var Mt = Object.freeze({
                __proto__: null,
                identity: Dt
            });
            const zt = qt({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var kt = Object.freeze({
                __proto__: null,
                base2: zt
            });
            const $t = qt({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Ut = Object.freeze({
                __proto__: null,
                base8: $t
            });
            const Ht = Lt({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var Vt = Object.freeze({
                __proto__: null,
                base10: Ht
            });
            const Bt = qt({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Kt = qt({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var Ft = Object.freeze({
                __proto__: null,
                base16: Bt,
                base16upper: Kt
            });
            const Zt = qt({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Wt = qt({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Gt = qt({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Jt = qt({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Qt = qt({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Yt = qt({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Xt = qt({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                te = qt({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                ee = qt({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var re = Object.freeze({
                __proto__: null,
                base32: Zt,
                base32upper: Wt,
                base32pad: Gt,
                base32padupper: Jt,
                base32hex: Qt,
                base32hexupper: Yt,
                base32hexpad: Xt,
                base32hexpadupper: te,
                base32z: ee
            });
            const ie = Lt({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                ne = Lt({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var se = Object.freeze({
                __proto__: null,
                base36: ie,
                base36upper: ne
            });
            const oe = Lt({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                ae = Lt({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var ce = Object.freeze({
                __proto__: null,
                base58btc: oe,
                base58flickr: ae
            });
            const he = qt({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ue = qt({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                le = qt({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                pe = qt({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var fe = Object.freeze({
                __proto__: null,
                base64: he,
                base64pad: ue,
                base64url: le,
                base64urlpad: pe
            });
            const de = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                ge = de.reduce(((t, e, r) => (t[r] = e, t)), []),
                ve = de.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
            const ye = jt({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(t) {
                    return t.reduce(((t, e) => t += ge[e]), "")
                },
                decode: function(t) {
                    const e = [];
                    for (const r of t) {
                        const t = ve[r.codePointAt(0)];
                        if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            });
            var me = Object.freeze({
                    __proto__: null,
                    base256emoji: ye
                }),
                we = function t(e, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; e >= Ee;) r[i++] = 255 & e | _e, e /= 128;
                    for (; e & be;) r[i++] = 255 & e | _e, e >>>= 7;
                    return r[i] = 0 | e, t.bytes = i - n + 1, r
                },
                _e = 128,
                be = -128,
                Ee = Math.pow(2, 31);
            var Ie = function t(e, r) {
                    var i, n = 0,
                        s = 0,
                        o = r = r || 0,
                        a = e.length;
                    do {
                        if (o >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
                        i = e[o++], n += s < 28 ? (i & Se) << s : (i & Se) * Math.pow(2, s), s += 7
                    } while (i >= Pe);
                    return t.bytes = o - r, n
                },
                Pe = 128,
                Se = 127;
            var Oe = Math.pow(2, 7),
                xe = Math.pow(2, 14),
                Ce = Math.pow(2, 21),
                Re = Math.pow(2, 28),
                Ae = Math.pow(2, 35),
                Te = Math.pow(2, 42),
                Ne = Math.pow(2, 49),
                je = Math.pow(2, 56),
                Le = Math.pow(2, 63),
                qe = {
                    encode: we,
                    decode: Ie,
                    encodingLength: function(t) {
                        return t < Oe ? 1 : t < xe ? 2 : t < Ce ? 3 : t < Re ? 4 : t < Ae ? 5 : t < Te ? 6 : t < Ne ? 7 : t < je ? 8 : t < Le ? 9 : 10
                    }
                };
            const De = function(t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return qe.encode(t, e, r), e
                },
                Me = t => qe.encodingLength(t),
                ze = (t, e) => {
                    const r = e.byteLength,
                        i = Me(t),
                        n = i + Me(r),
                        s = new Uint8Array(n + r);
                    return De(t, s, 0), De(r, s, i), s.set(e, n), new ke(t, r, e, s)
                };
            class ke {
                constructor(t, e, r, i) {
                    this.code = t, this.size = e, this.digest = r, this.bytes = i
                }
            }
            const $e = t => {
                let {
                    name: e,
                    code: r,
                    encode: i
                } = t;
                return new Ue(e, r, i)
            };
            class Ue {
                constructor(t, e, r) {
                    this.name = t, this.code = e, this.encode = r
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t);
                        return e instanceof Uint8Array ? ze(this.code, e) : e.then((t => ze(this.code, t)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const He = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
                Ve = $e({
                    name: "sha2-256",
                    code: 18,
                    encode: He("SHA-256")
                }),
                Be = $e({
                    name: "sha2-512",
                    code: 19,
                    encode: He("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Ve,
                sha512: Be
            });
            const Ke = xt,
                Fe = {
                    code: 0,
                    name: "identity",
                    encode: Ke,
                    digest: t => ze(0, Ke(t))
                };
            Object.freeze({
                __proto__: null,
                identity: Fe
            });
            new TextEncoder, new TextDecoder;
            const Ze = { ...Mt,
                ...kt,
                ...Ut,
                ...Vt,
                ...Ft,
                ...re,
                ...se,
                ...ce,
                ...fe,
                ...me
            };

            function We(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }

            function Ge(t, e, r, i) {
                return {
                    name: t,
                    prefix: e,
                    encoder: {
                        name: t,
                        prefix: e,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            const Je = Ge("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
                Qe = Ge("ascii", "a", (t => {
                    let e = "a";
                    for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                    return e
                }), (t => {
                    const e = function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? We(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
                    }((t = t.substring(1)).length);
                    for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                    return e
                })),
                Ye = {
                    utf8: Je,
                    "utf-8": Je,
                    hex: Ze.base16,
                    latin1: Qe,
                    ascii: Qe,
                    binary: Qe,
                    ...Ze
                };
            const Xe = "core",
                tr = `wc@2:${Xe}:`,
                er = "error",
                rr = {
                    database: ":memory:"
                },
                ir = "client_ed25519_seed",
                nr = O.ONE_DAY,
                sr = O.SIX_HOURS,
                or = "wss://relay.walletconnect.com",
                ar = "wss://relay.walletconnect.org",
                cr = "relayer_message",
                hr = "relayer_message_ack",
                ur = "relayer_connect",
                lr = "relayer_disconnect",
                pr = "relayer_error",
                fr = "relayer_connection_stalled",
                dr = "relayer_publish",
                gr = "payload",
                vr = "connect",
                yr = "disconnect",
                mr = "error",
                wr = O.ONE_SECOND,
                _r = "subscription_created",
                br = "subscription_deleted",
                Er = "subscription_sync",
                Ir = "subscription_resubscribed",
                Pr = 1e3 * O.FIVE_SECONDS,
                Sr = {
                    wc_pairingDelete: {
                        req: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: O.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: O.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                Or = "pairing_create",
                xr = "pairing_expire",
                Cr = "pairing_delete",
                Rr = "pairing_ping",
                Ar = "history_created",
                Tr = "history_updated",
                Nr = "history_deleted",
                jr = "history_sync",
                Lr = "expirer_created",
                qr = "expirer_deleted",
                Dr = "expirer_expired",
                Mr = "expirer_sync",
                zr = "verify-api",
                kr = "https://verify.walletconnect.com",
                $r = "https://verify.walletconnect.org";
            class Ur {
                constructor(t, e) {
                    this.core = t, this.logger = e, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
                        if (!this.initialized) {
                            const t = await this.getKeyChain();
                            typeof t < "u" && (this.keychain = t), this.initialized = !0
                        }
                    }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, e) => {
                        this.isInitialized(), this.keychain.set(t, e), await this.persist()
                    }, this.get = t => {
                        this.isInitialized();
                        const e = this.keychain.get(t);
                        if (typeof e > "u") {
                            const {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                            throw new Error(e)
                        }
                        return e
                    }, this.del = async t => {
                        this.isInitialized(), this.keychain.delete(t), await this.persist()
                    }, this.core = t, this.logger = (0, c.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(t) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(t))
                }
                async getKeyChain() {
                    const t = await this.core.storage.getItem(this.storageKey);
                    return typeof t < "u" ? (0, s.IP)(t) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Hr {
                constructor(t, e, r) {
                    this.core = t, this.logger = e, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => {
                        this.isInitialized();
                        return U(H(await this.getClientSeed()).publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        const t = (0, s.Au)();
                        return this.setPrivateKey(t.publicKey, t.privateKey)
                    }, this.signJWT = async t => {
                        this.isInitialized();
                        const e = H(await this.getClientSeed()),
                            r = (0, s.jd)(),
                            i = nr;
                        return await V(r, t, i, e)
                    }, this.generateSharedKey = (t, e, r) => {
                        this.isInitialized();
                        const i = this.getPrivateKey(t),
                            n = (0, s.m$)(i, e);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (t, e) => {
                        this.isInitialized();
                        const r = e || (0, s.Ym)(t);
                        return await this.keychain.set(r, t), r
                    }, this.deleteKeyPair = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.deleteSymKey = async t => {
                        this.isInitialized(), await this.keychain.del(t)
                    }, this.encode = async (t, e, r) => {
                        this.isInitialized();
                        const i = (0, s.EN)(r),
                            n = I(e);
                        if ((0, s.Q8)(i)) {
                            const e = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            t = await this.generateSharedKey(e, r)
                        }
                        const o = this.getSymKey(t),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, s.HI)({
                            type: a,
                            symKey: o,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (t, e, r) => {
                        this.isInitialized();
                        const i = (0, s.Ll)(e, r);
                        if ((0, s.Q8)(i)) {
                            const e = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            t = await this.generateSharedKey(e, r)
                        }
                        try {
                            const r = this.getSymKey(t);
                            return E((0, s.pe)({
                                symKey: r,
                                encoded: e
                            }))
                        } catch (l) {
                            this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(l)
                        }
                    }, this.getPayloadType = t => {
                        const e = (0, s.vB)(t);
                        return (0, s.WG)(e.type)
                    }, this.getPayloadSenderPublicKey = t => {
                        const e = (0, s.vB)(t);
                        return e.senderPublicKey ? (0, B.BB)(e.senderPublicKey, s.AW) : void 0
                    }, this.core = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.keychain = r || new Ur(this.core, this.logger)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                async setPrivateKey(t, e) {
                    return await this.keychain.set(t, e), t
                }
                getPrivateKey(t) {
                    return this.keychain.get(t)
                }
                async getClientSeed() {
                    let t = "";
                    try {
                        t = this.keychain.get(ir)
                    } catch {
                        t = (0, s.jd)(), await this.keychain.set(ir, t)
                    }
                    return function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                        const r = Ye[e];
                        if (!r) throw new Error(`Unsupported encoding "${e}"`);
                        return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : We(globalThis.Buffer.from(t, "utf-8"))
                    }(t, "base16")
                }
                getSymKey(t) {
                    return this.keychain.get(t)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Vr extends p {
                constructor(t, e) {
                    super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                const t = await this.getRelayerMessages();
                                typeof t < "u" && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (t) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (t, e) => {
                        this.isInitialized();
                        const r = (0, s.rj)(e);
                        let i = this.messages.get(t);
                        return typeof i > "u" && (i = {}), typeof i[r] < "u" || (i[r] = e, this.messages.set(t, i), await this.persist()), r
                    }, this.get = t => {
                        this.isInitialized();
                        let e = this.messages.get(t);
                        return typeof e > "u" && (e = {}), e
                    }, this.has = (t, e) => {
                        this.isInitialized();
                        return typeof this.get(t)[(0, s.rj)(e)] < "u"
                    }, this.del = async t => {
                        this.isInitialized(), this.messages.delete(t), await this.persist()
                    }, this.logger = (0, c.generateChildLogger)(t, this.name), this.core = e
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(t) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(t))
                }
                async getRelayerMessages() {
                    const t = await this.core.storage.getItem(this.storageKey);
                    return typeof t < "u" ? (0, s.IP)(t) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Br extends f {
                constructor(t, e) {
                    super(t, e), this.relayer = t, this.logger = e, this.events = new i.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, O.toMiliseconds)(O.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (t, e, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: t,
                                message: e,
                                opts: r
                            }
                        });
                        try {
                            const o = (null === r || void 0 === r ? void 0 : r.ttl) || sr,
                                a = (0, s._H)(r),
                                c = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                                h = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                                u = (null === r || void 0 === r ? void 0 : r.id) || rt().toString(),
                                l = {
                                    topic: t,
                                    message: e,
                                    opts: {
                                        ttl: o,
                                        relay: a,
                                        prompt: c,
                                        tag: h,
                                        id: u
                                    }
                                },
                                p = setTimeout((() => this.queue.set(u, l)), this.publishTimeout);
                            try {
                                await await (0, s.hF)(this.rpcPublish(t, e, o, a, c, h, u), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(u), this.relayer.events.emit(dr, l)
                            } catch (n) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = null === r || void 0 === r ? void 0 : r.internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(u), n;
                                return
                            } finally {
                                clearTimeout(p)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: t,
                                    message: e,
                                    opts: r
                                }
                            })
                        } catch (o) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o
                        }
                    }, this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.relayer = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                rpcPublish(t, e, r, i, n, o, a) {
                    var c, h, u, l;
                    const p = {
                        method: (0, s.cO)(i.protocol).publish,
                        params: {
                            topic: t,
                            message: e,
                            ttl: r,
                            prompt: n,
                            tag: o
                        },
                        id: a
                    };
                    return (0, s.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (h = p.params) || delete h.prompt), (0, s.o8)(null == (u = p.params) ? void 0 : u.tag) && (null == (l = p.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }), this.relayer.request(p)
                }
                removeRequestFromQueue(t) {
                    this.queue.delete(t)
                }
                checkQueue() {
                    this.queue.forEach((async t => {
                        const {
                            topic: e,
                            message: r,
                            opts: i
                        } = t;
                        await this.publish(e, r, i)
                    }))
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (() => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(fr);
                        this.checkQueue()
                    })), this.relayer.on(hr, (t => {
                        this.removeRequestFromQueue(t.id.toString())
                    }))
                }
            }
            class Kr {
                constructor() {
                    this.map = new Map, this.set = (t, e) => {
                        const r = this.get(t);
                        this.exists(t, e) || this.map.set(t, [...r, e])
                    }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
                        if (typeof e > "u") return void this.map.delete(t);
                        if (!this.map.has(t)) return;
                        const r = this.get(t);
                        if (!this.exists(t, e)) return;
                        const i = r.filter((t => t !== e));
                        i.length ? this.map.set(t, i) : this.map.delete(t)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var Fr = Object.defineProperty,
                Zr = Object.defineProperties,
                Wr = Object.getOwnPropertyDescriptors,
                Gr = Object.getOwnPropertySymbols,
                Jr = Object.prototype.hasOwnProperty,
                Qr = Object.prototype.propertyIsEnumerable,
                Yr = (t, e, r) => e in t ? Fr(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Xr = (t, e) => {
                    for (var r in e || (e = {})) Jr.call(e, r) && Yr(t, r, e[r]);
                    if (Gr)
                        for (var r of Gr(e)) Qr.call(e, r) && Yr(t, r, e[r]);
                    return t
                },
                ti = (t, e) => Zr(t, Wr(e));
            class ei extends v {
                constructor(t, e) {
                    super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new Kr, this.events = new i.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = tr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (t, e) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: t,
                                opts: e
                            }
                        });
                        try {
                            const r = (0, s._H)(e),
                                i = {
                                    topic: t,
                                    relay: r
                                };
                            this.pending.set(t, i);
                            const n = await this.rpcSubscribe(t, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: t,
                                    opts: e
                                }
                            }), n
                        } catch (u) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(u), u
                        }
                    }, this.unsubscribe = async (t, e) => {
                        await this.restartToComplete(), this.isInitialized(), typeof(null === e || void 0 === e ? void 0 : e.id) < "u" ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e)
                    }, this.isSubscribed = async t => !!this.topics.includes(t) || await new Promise(((e, r) => {
                        const i = new O.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        const n = setInterval((() => {
                            !this.pending.has(t) && this.topics.includes(t) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), e(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= Pr && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(new Error("Subscription resolution timeout")))
                        }), this.pollingInterval)
                    })).catch((() => !1)), this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.clientId = ""
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(t, e) {
                    let r = !1;
                    try {
                        r = this.getSubscription(t).topic === e
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(t, e) {
                    const r = this.topicMap.get(t);
                    await Promise.all(r.map((async r => await this.unsubscribeById(t, r, e))))
                }
                async unsubscribeById(t, e, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: t,
                            id: e,
                            opts: r
                        }
                    });
                    try {
                        const i = (0, s._H)(r);
                        await this.rpcUnsubscribe(t, e, i);
                        const n = (0, s.D6)("USER_DISCONNECTED", `${this.name}, ${t}`);
                        await this.onUnsubscribe(t, e, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: t,
                                id: e,
                                opts: r
                            }
                        })
                    } catch (i) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i
                    }
                }
                async rpcSubscribe(t, e) {
                    const r = {
                        method: (0, s.cO)(e.protocol).subscribe,
                        params: {
                            topic: t
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(fr)
                    }
                    return (0, s.rj)(t + this.clientId)
                }
                async rpcBatchSubscribe(t) {
                    if (!t.length) return;
                    const e = t[0].relay,
                        r = {
                            method: (0, s.cO)(e.protocol).batchSubscribe,
                            params: {
                                topics: t.map((t => t.topic))
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(fr)
                    }
                }
                rpcUnsubscribe(t, e, r) {
                    const i = {
                        method: (0, s.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: t,
                            id: e
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(t, e) {
                    this.setSubscription(t, ti(Xr({}, e), {
                        id: t
                    })), this.pending.delete(e.topic)
                }
                onBatchSubscribe(t) {
                    t.length && t.forEach((t => {
                        this.setSubscription(t.id, Xr({}, t)), this.pending.delete(t.topic)
                    }))
                }
                async onUnsubscribe(t, e, r) {
                    this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t)
                }
                async setRelayerSubscriptions(t) {
                    await this.relayer.core.storage.setItem(this.storageKey, t)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(t, e) {
                    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: t,
                        subscription: e
                    }), this.addSubscription(t, e))
                }
                addSubscription(t, e) {
                    this.subscriptions.set(t, Xr({}, e)), this.topicMap.set(e.topic, t), this.events.emit(_r, e)
                }
                getSubscription(t) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: t
                    });
                    const e = this.subscriptions.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(e)
                    }
                    return e
                }
                deleteSubscription(t, e) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: t,
                        reason: e
                    });
                    const r = this.getSubscription(t);
                    this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(br, ti(Xr({}, r), {
                        reason: e
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(Er)
                }
                async reset() {
                    if (this.cached.length) {
                        const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let e = 0; e < t; e++) {
                            const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(t)
                        }
                    }
                    this.events.emit(Ir)
                }
                async restore() {
                    try {
                        const t = await this.getRelayerSubscriptions();
                        if (typeof t > "u" || !t.length) return;
                        if (this.subscriptions.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
                    }
                }
                async batchSubscribe(t) {
                    if (!t.length) return;
                    const e = await this.rpcBatchSubscribe(t);
                    (0, s.qt)(e) && this.onBatchSubscribe(e.map(((e, r) => ti(Xr({}, t[r]), {
                        id: e
                    }))))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    const t = [];
                    this.pending.forEach((e => {
                        t.push(e)
                    })), await this.batchSubscribe(t)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (async () => {
                        await this.checkPending()
                    })), this.relayer.on(ur, (async () => {
                        await this.onConnect()
                    })), this.relayer.on(lr, (() => {
                        this.onDisconnect()
                    })), this.events.on(_r, (async t => {
                        const e = _r;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), await this.persist()
                    })), this.events.on(br, (async t => {
                        const e = br;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), await this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise((t => {
                        const e = setInterval((() => {
                            this.restartInProgress || (clearInterval(e), t())
                        }), this.pollingInterval)
                    }))
                }
            }
            var ri = Object.defineProperty,
                ii = Object.getOwnPropertySymbols,
                ni = Object.prototype.hasOwnProperty,
                si = Object.prototype.propertyIsEnumerable,
                oi = (t, e, r) => e in t ? ri(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r;
            class ai extends d {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.events = new i.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async t => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(t)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = t => {
                        this.onProviderPayload(t)
                    }, this.onConnectHandler = () => {
                        this.events.emit(ur)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = t => {
                        this.logger.error(t), this.events.emit(pr, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(gr, this.onPayloadHandler), this.provider.on(vr, this.onConnectHandler), this.provider.on(yr, this.onDisconnectHandler), this.provider.on(mr, this.onProviderErrorHandler)
                    }, this.core = t.core, this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? (0, c.generateChildLogger)(t.logger, this.name) : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: t.logger || "error"
                    })), this.messages = new Vr(this.logger, t.core), this.subscriber = new ei(this, this.logger), this.publisher = new Br(this, this.logger), this.relayUrl = (null === t || void 0 === t ? void 0 : t.relayUrl) || or, this.projectId = t.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ar}...`), await this.restartTransport(ar)
                    }
                    this.initialized = !0, setTimeout((async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }), 1e4)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(t, e, r) {
                    this.isInitialized(), await this.publisher.publish(t, e, r), await this.recordMessageEvent({
                        topic: t,
                        message: e,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(t, e) {
                    var r;
                    this.isInitialized();
                    let i, n = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    const s = e => {
                        e.topic === t && (this.subscriber.off(_r, s), i())
                    };
                    return await Promise.all([new Promise((t => {
                        i = t, this.subscriber.on(_r, s)
                    })), new Promise((async r => {
                        n = await this.subscriber.subscribe(t, e), r()
                    }))]), n
                }
                async unsubscribe(t, e) {
                    this.isInitialized(), await this.subscriber.unsubscribe(t, e)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, s.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((() => this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(t) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise((t => {
                                if (!this.initialized) return t();
                                this.subscriber.once(Ir, (() => {
                                    t()
                                }))
                            })), new Promise((async (t, e) => {
                                try {
                                    await (0, s.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (r) {
                                    return void e(r)
                                }
                                t()
                            }))])
                        } catch (e) {
                            this.logger.error(e);
                            const t = e;
                            if (!this.isConnectionStalled(t.message)) throw e;
                            this.provider.events.emit(yr)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(t) {
                    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, s.Gg)()) throw new Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(t) {
                    return this.staleConnectionErrors.some((e => t.includes(e)))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    const t = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new wt(new Et((0, s.$0)({
                        sdkVersion: "2.10.2",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: t,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(t) {
                    const {
                        topic: e,
                        message: r
                    } = t;
                    await this.messages.set(e, r)
                }
                async shouldIgnoreMessageEvent(t) {
                    const {
                        topic: e,
                        message: r
                    } = t;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(e)) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
                    const i = this.messages.has(e, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(t) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: t
                        }), gt(t)) {
                        if (!t.method.endsWith("_subscription")) return;
                        const e = t.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = e.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((t, e) => {
                            for (var r in e || (e = {})) ni.call(e, r) && oi(t, r, e[r]);
                            if (ii)
                                for (var r of ii(e)) si.call(e, r) && oi(t, r, e[r]);
                            return t
                        })({
                            type: "event",
                            event: e.id
                        }, s)), this.events.emit(e.id, s), await this.acknowledgePayload(t), await this.onMessageEvent(s)
                    } else vt(t) && this.events.emit(hr, t)
                }
                async onMessageEvent(t) {
                    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(cr, t), await this.recordMessageEvent(t))
                }
                async acknowledgePayload(t) {
                    const e = nt(t.id, !0);
                    await this.provider.connection.send(e)
                }
                unregisterProviderListeners() {
                    this.provider.off(gr, this.onPayloadHandler), this.provider.off(vr, this.onConnectHandler), this.provider.off(yr, this.onDisconnectHandler), this.provider.off(mr, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(fr, (() => {
                        this.restartTransport().catch((t => this.logger.error(t)))
                    }));
                    let t = await (0, s.Gg)();
                    (0, s.uw)((async e => {
                        this.initialized && t !== e && (t = e, e ? await this.restartTransport().catch((t => this.logger.error(t))) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((t => this.logger.error(t)))))
                    }))
                }
                onProviderDisconnect() {
                    this.events.emit(lr), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((async () => {
                        await this.restartTransport().catch((t => this.logger.error(t)))
                    }), (0, O.toMiliseconds)(wr)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise((t => {
                            const e = setInterval((() => {
                                this.connected && (clearInterval(e), t())
                            }), this.connectionStatusPollingInterval)
                        }));
                        await this.restartTransport()
                    }
                }
            }
            var ci = Object.defineProperty,
                hi = Object.getOwnPropertySymbols,
                ui = Object.prototype.hasOwnProperty,
                li = Object.prototype.propertyIsEnumerable,
                pi = (t, e, r) => e in t ? ci(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                fi = (t, e) => {
                    for (var r in e || (e = {})) ui.call(e, r) && pi(t, r, e[r]);
                    if (hi)
                        for (var r of hi(e)) li.call(e, r) && pi(t, r, e[r]);
                    return t
                };
            class di extends g {
                constructor(t, e, r) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tr,
                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                    super(t, e, r, i), this.core = t, this.logger = e, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => {
                            this.getKey && null !== t && !(0, s.o8)(t) ? this.map.set(this.getKey(t), t) : (0, s.xW)(t) ? this.map.set(t.id, t) : (0, s.h1)(t) && this.map.set(t.topic, t)
                        })), this.cached = [], this.initialized = !0)
                    }, this.set = async (t, e) => {
                        this.isInitialized(), this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: t,
                            value: e
                        }), this.map.set(t, e), await this.persist())
                    }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: t
                    }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter((e => Object.keys(t).every((r => Pt()(e[r], t[r]))))) : this.values), this.update = async (t, e) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: t,
                            update: e
                        });
                        const r = fi(fi({}, this.getData(t)), e);
                        this.map.set(t, r), await this.persist()
                    }, this.delete = async (t, e) => {
                        this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: t,
                            reason: e
                        }), this.map.delete(t), await this.persist())
                    }, this.logger = (0, c.generateChildLogger)(e, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(t) {
                    const e = this.map.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(e), new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const t = await this.getDataStore();
                        if (typeof t > "u" || !t.length) return;
                        if (this.map.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class gi {
                constructor(t, e) {
                    this.core = t, this.logger = e, this.name = "pairing", this.version = "0.3", this.events = new(n()), this.initialized = !1, this.storagePrefix = tr, this.ignoredPayloadTypes = [s.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = t => {
                        let {
                            methods: e
                        } = t;
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        this.isInitialized();
                        const t = (0, s.jd)(),
                            e = await this.core.crypto.setSymKey(t),
                            r = (0, s.gn)(O.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            n = {
                                topic: e,
                                expiry: r,
                                relay: i,
                                active: !1
                            },
                            o = (0, s.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: e,
                                symKey: t,
                                relay: i
                            });
                        return await this.pairings.set(e, n), await this.core.relayer.subscribe(e), this.core.expirer.set(e, r), {
                            topic: e,
                            uri: o
                        }
                    }, this.pair = async t => {
                        this.isInitialized(), this.isValidPair(t);
                        const {
                            topic: e,
                            symKey: r,
                            relay: i
                        } = (0, s.he)(t.uri);
                        let n;
                        if (this.pairings.keys.includes(e) && (n = this.pairings.get(e), n.active)) throw new Error(`Pairing already exists: ${e}. Please try again with a new connection URI.`);
                        this.core.crypto.keychain.has(e) || (await this.core.crypto.setSymKey(r, e), await this.core.relayer.subscribe(e, {
                            relay: i
                        }));
                        const o = (0, s.gn)(O.FIVE_MINUTES),
                            a = {
                                topic: e,
                                relay: i,
                                expiry: o,
                                active: !1
                            };
                        return await this.pairings.set(e, a), this.core.expirer.set(e, o), t.activatePairing && await this.activate({
                            topic: e
                        }), this.events.emit(Or, a), a
                    }, this.activate = async t => {
                        let {
                            topic: e
                        } = t;
                        this.isInitialized();
                        const r = (0, s.gn)(O.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: r
                        }), this.core.expirer.set(e, r)
                    }, this.ping = async t => {
                        this.isInitialized(), await this.isValidPing(t);
                        const {
                            topic: e
                        } = t;
                        if (this.pairings.keys.includes(e)) {
                            const t = await this.sendRequest(e, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("pairing_ping", t), (t => {
                                let {
                                    error: e
                                } = t;
                                e ? n(e) : i()
                            })), await r()
                        }
                    }, this.updateExpiry = async t => {
                        let {
                            topic: e,
                            expiry: r
                        } = t;
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: r
                        })
                    }, this.updateMetadata = async t => {
                        let {
                            topic: e,
                            metadata: r
                        } = t;
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: r
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
                        this.isInitialized(), await this.isValidDisconnect(t);
                        const {
                            topic: e
                        } = t;
                        this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", (0, s.D6)("USER_DISCONNECTED")), await this.deletePairing(e))
                    }, this.sendRequest = async (t, e, r) => {
                        const i = it(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = Sr[e].req;
                        return this.core.history.set(t, i), this.core.relayer.publish(t, n, s), i.id
                    }, this.sendResult = async (t, e, r) => {
                        const i = nt(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = await this.core.history.get(e, t),
                            o = Sr[s.request.method].res;
                        await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (t, e, r) => {
                        const i = st(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = await this.core.history.get(e, t),
                            o = Sr[s.request.method] ? Sr[s.request.method].res : Sr.unregistered_method.res;
                        await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (t, e) => {
                        await this.core.relayer.unsubscribe(t), await Promise.all([this.pairings.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t)])
                    }, this.cleanup = async () => {
                        const t = this.pairings.getAll().filter((t => (0, s.Bw)(t.expiry)));
                        await Promise.all(t.map((t => this.deletePairing(t.topic))))
                    }, this.onRelayEventRequest = t => {
                        const {
                            topic: e,
                            payload: r
                        } = t;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(e, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(e, r);
                            default:
                                return this.onUnknownRpcMethodRequest(e, r)
                        }
                    }, this.onRelayEventResponse = async t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = (await this.core.history.get(e, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult(r, t, !0), this.events.emit(Rr, {
                                id: r,
                                topic: t
                            })
                        } catch (p) {
                            await this.sendError(r, t, p), this.logger.error(p)
                        }
                    }, this.onPairingPingResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        setTimeout((() => {
                            yt(e) ? this.events.emit((0, s.E0)("pairing_ping", r), {}) : mt(e) && this.events.emit((0, s.E0)("pairing_ping", r), {
                                error: e.error
                            })
                        }), 500)
                    }, this.onPairingDeleteRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidDisconnect({
                                topic: t
                            }), await this.deletePairing(t), this.events.emit(Cr, {
                                id: r,
                                topic: t
                            })
                        } catch (p) {
                            await this.sendError(r, t, p), this.logger.error(p)
                        }
                    }, this.onUnknownRpcMethodRequest = async (t, e) => {
                        const {
                            id: r,
                            method: i
                        } = e;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            const e = (0, s.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, t, e), this.logger.error(e)
                        } catch (n) {
                            await this.sendError(r, t, n), this.logger.error(n)
                        }
                    }, this.onUnknownRpcMethodResponse = t => {
                        this.registeredMethods.includes(t) || this.logger.error((0, s.D6)("WC_METHOD_UNSUPPORTED", t))
                    }, this.isValidPair = t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() params: ${t}`);
                            throw new Error(e)
                        }
                        if (!(0, s.jv)(t.uri)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
                            throw new Error(e)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidPairingTopic(e)
                    }, this.isValidDisconnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidPairingTopic(e)
                    }, this.isValidPairingTopic = async t => {
                        if (!(0, s.M_)(t, !1)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                            throw new Error(e)
                        }
                        if (!this.pairings.keys.includes(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                            throw new Error(e)
                        }
                        if ((0, s.Bw)(this.pairings.get(t).expiry)) {
                            await this.deletePairing(t);
                            const {
                                message: e
                            } = (0, s.Z7)("EXPIRED", `pairing topic: ${t}`);
                            throw new Error(e)
                        }
                    }, this.core = t, this.logger = (0, c.generateChildLogger)(e, this.name), this.pairings = new di(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(cr, (async t => {
                        const {
                            topic: e,
                            message: r
                        } = t;
                        if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        const i = await this.core.crypto.decode(e, r);
                        try {
                            gt(i) ? (this.core.history.set(e, i), this.onRelayEventRequest({
                                topic: e,
                                payload: i
                            })) : vt(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: e,
                                payload: i
                            }), this.core.history.delete(e, i.id))
                        } catch (u) {
                            this.logger.error(u)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.core.expirer.on(Dr, (async t => {
                        const {
                            topic: e
                        } = (0, s.iP)(t.target);
                        e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit(xr, {
                            topic: e
                        }))
                    }))
                }
            }
            class vi extends l {
                constructor(t, e) {
                    super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new i.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.records.set(t.id, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (t, e, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: t,
                                request: e,
                                chainId: r
                            }), this.records.has(e.id)) return;
                        const i = {
                            id: e.id,
                            topic: t,
                            request: {
                                method: e.method,
                                params: e.params || null
                            },
                            chainId: r,
                            expiry: (0, s.gn)(O.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(Ar, i)
                    }, this.resolve = async t => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: t
                            }), !this.records.has(t.id)) return;
                        const e = await this.getRecord(t.id);
                        typeof e.response > "u" && (e.response = mt(t) ? {
                            error: t.error
                        } : {
                            result: t.result
                        }, this.records.set(e.id, e), this.events.emit(Tr, e))
                    }, this.get = async (t, e) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: t,
                        id: e
                    }), await this.getRecord(e)), this.delete = (t, e) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: e
                        }), this.values.forEach((r => {
                            if (r.topic === t) {
                                if (typeof e < "u" && r.id !== e) return;
                                this.records.delete(r.id), this.events.emit(Nr, r)
                            }
                        }))
                    }, this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t), this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.logger = (0, c.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const t = [];
                    return this.values.forEach((e => {
                        if (typeof e.response < "u") return;
                        const r = {
                            topic: e.topic,
                            request: it(e.request.method, e.request.params, e.id),
                            chainId: e.chainId
                        };
                        return t.push(r)
                    })), t
                }
                async setJsonRpcRecords(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(t) {
                    this.isInitialized();
                    const e = this.records.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(jr)
                }
                async restore() {
                    try {
                        const t = await this.getJsonRpcRecords();
                        if (typeof t > "u" || !t.length) return;
                        if (this.records.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                    }
                }
                registerEventListeners() {
                    this.events.on(Ar, (t => {
                        const e = Ar;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.events.on(Tr, (t => {
                        const e = Tr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.events.on(Nr, (t => {
                        const e = Nr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            record: t
                        }), this.persist()
                    })), this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (() => {
                        this.cleanup()
                    }))
                }
                cleanup() {
                    try {
                        this.records.forEach((t => {
                            (0, O.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
                        }))
                    } catch (t) {
                        this.logger.warn(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class yi extends y {
                constructor(t, e) {
                    super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new i.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tr, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.expirations.set(t.target, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = t => {
                        try {
                            const e = this.formatTarget(t);
                            return typeof this.getExpiration(e) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (t, e) => {
                        this.isInitialized();
                        const r = this.formatTarget(t),
                            i = {
                                target: r,
                                expiry: e
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(Lr, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = t => {
                        this.isInitialized();
                        const e = this.formatTarget(t);
                        return this.getExpiration(e)
                    }, this.del = t => {
                        if (this.isInitialized(), this.has(t)) {
                            const e = this.formatTarget(t),
                                r = this.getExpiration(e);
                            this.expirations.delete(e), this.events.emit(qr, {
                                target: e,
                                expiration: r
                            })
                        }
                    }, this.on = (t, e) => {
                        this.events.on(t, e)
                    }, this.once = (t, e) => {
                        this.events.once(t, e)
                    }, this.off = (t, e) => {
                        this.events.off(t, e)
                    }, this.removeListener = (t, e) => {
                        this.events.removeListener(t, e)
                    }, this.logger = (0, c.generateChildLogger)(e, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(t) {
                    if ("string" == typeof t) return (0, s.Z4)(t);
                    if ("number" == typeof t) return (0, s.Gq)(t);
                    const {
                        message: e
                    } = (0, s.Z7)("UNKNOWN_TYPE", "Target type: " + typeof t);
                    throw new Error(e)
                }
                async setExpirations(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(Mr)
                }
                async restore() {
                    try {
                        const t = await this.getExpirations();
                        if (typeof t > "u" || !t.length) return;
                        if (this.expirations.size) {
                            const {
                                message: t
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(t), new Error(t)
                        }
                        this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
                    }
                }
                getExpiration(t) {
                    const e = this.expirations.get(t);
                    if (!e) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(e), new Error(e)
                    }
                    return e
                }
                checkExpiry(t, e) {
                    const {
                        expiry: r
                    } = e;
                    (0, O.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e)
                }
                expire(t, e) {
                    this.expirations.delete(t), this.events.emit(Dr, {
                        target: t,
                        expiration: e
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach(((t, e) => this.checkExpiry(e, t)))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(Lr, (t => {
                        const e = Lr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    })), this.events.on(Dr, (t => {
                        const e = Dr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    })), this.events.on(qr, (t => {
                        const e = qr;
                        this.logger.info(`Emitting ${e}`), this.logger.debug({
                            type: "event",
                            event: e,
                            data: t
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class mi extends m {
                constructor(t, e) {
                    super(t, e), this.projectId = t, this.logger = e, this.name = zr, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async () => {
                        if (this.verifyDisabled || (0, s.b$)() || !(0, s.jU)()) return;
                        const t = kr;
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = $r;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async t => {
                        this.initialized ? this.sendPost(t.attestationId) : (this.addToQueue(t.attestationId), await this.init())
                    }, this.resolve = async t => {
                        if (this.isDevEnv) return "";
                        const e = (null === t || void 0 === t ? void 0 : t.verifyUrl) || kr;
                        let r;
                        try {
                            r = await this.fetchAttestation(t.attestationId, e)
                        } catch (p) {
                            this.logger.info(`failed to resolve attestation: ${t.attestationId} from url: ${e}`), this.logger.info(p), r = await this.fetchAttestation(t.attestationId, $r)
                        }
                        return r
                    }, this.fetchAttestation = async (t, e) => {
                        this.logger.info(`resolving attestation: ${t} from url: ${e}`);
                        const r = this.startAbortTimer(2 * O.ONE_SECOND),
                            i = await fetch(`${e}/attestation/${t}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = t => {
                        this.queue.push(t)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach((t => this.sendPost(t))), this.queue = [])
                    }, this.sendPost = t => {
                        var e;
                        try {
                            if (!this.iframe) return;
                            null == (e = this.iframe.contentWindow) || e.postMessage(t, "*"), this.logger.info(`postMessage sent: ${t} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let t;
                        const e = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", e), t())
                        };
                        await Promise.race([new Promise((r => {
                            if (document.getElementById(zr)) return r();
                            window.addEventListener("message", e);
                            const i = document.createElement("iframe");
                            i.id = zr, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, t = r
                        })), new Promise(((t, r) => setTimeout((() => {
                            window.removeEventListener("message", e), r("verify iframe load timeout")
                        }), (0, O.toMiliseconds)(O.FIVE_SECONDS))))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.logger = (0, c.generateChildLogger)(e, this.name), this.verifyUrl = kr, this.abortController = new AbortController, this.isDevEnv = (0, s.UG)() && {
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0
                    }.IS_VITEST
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                startAbortTimer(t) {
                    return this.abortController = new AbortController, setTimeout((() => this.abortController.abort()), (0, O.toMiliseconds)(t))
                }
            }
            var wi = Object.defineProperty,
                _i = Object.getOwnPropertySymbols,
                bi = Object.prototype.hasOwnProperty,
                Ei = Object.prototype.propertyIsEnumerable,
                Ii = (t, e, r) => e in t ? wi(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Pi = (t, e) => {
                    for (var r in e || (e = {})) bi.call(e, r) && Ii(t, r, e[r]);
                    if (_i)
                        for (var r of _i(e)) Ei.call(e, r) && Ii(t, r, e[r]);
                    return t
                };
            class Si extends u {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = Xe, this.events = new i.EventEmitter, this.initialized = !1, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.projectId = null === t || void 0 === t ? void 0 : t.projectId, this.relayUrl = (null === t || void 0 === t ? void 0 : t.relayUrl) || or, this.customStoragePrefix = null != t && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
                    const e = typeof(null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof(null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: (null === t || void 0 === t ? void 0 : t.logger) || er
                    }));
                    this.logger = (0, c.generateChildLogger)(e, this.name), this.heartbeat = new a.HeartBeat, this.crypto = new Hr(this, this.logger, null === t || void 0 === t ? void 0 : t.keychain), this.history = new vi(this, this.logger), this.expirer = new yi(this, this.logger), this.storage = null != t && t.storage ? t.storage : new o.ZP(Pi(Pi({}, rr), null === t || void 0 === t ? void 0 : t.storageOptions)), this.relayer = new ai({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new gi(this, this.logger), this.verify = new mi(this.projectId || "", this.logger)
                }
                static async init(t) {
                    const e = new Si(t);
                    await e.initialize();
                    const r = await e.crypto.getClientId();
                    return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r), e
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (t) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
                    }
                }
            }
            const Oi = Si,
                xi = "client",
                Ci = `wc@2:${xi}:`,
                Ri = xi,
                Ai = "error",
                Ti = "WALLETCONNECT_DEEPLINK_CHOICE",
                Ni = "Proposal expired",
                ji = O.SEVEN_DAYS,
                Li = {
                    wc_sessionPropose: {
                        req: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: O.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: O.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: O.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: O.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                qi = {
                    min: O.FIVE_MINUTES,
                    max: O.SEVEN_DAYS
                },
                Di = "IDLE",
                Mi = "ACTIVE",
                zi = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var ki = Object.defineProperty,
                $i = Object.defineProperties,
                Ui = Object.getOwnPropertyDescriptors,
                Hi = Object.getOwnPropertySymbols,
                Vi = Object.prototype.hasOwnProperty,
                Bi = Object.prototype.propertyIsEnumerable,
                Ki = (t, e, r) => e in t ? ki(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Fi = (t, e) => {
                    for (var r in e || (e = {})) Vi.call(e, r) && Ki(t, r, e[r]);
                    if (Hi)
                        for (var r of Hi(e)) Bi.call(e, r) && Ki(t, r, e[r]);
                    return t
                },
                Zi = (t, e) => $i(t, Ui(e));
            class Wi extends _ {
                constructor(t) {
                    var e;
                    super(t), e = this, this.name = "engine", this.events = new(n()), this.initialized = !1, this.ignoredPayloadTypes = [s.rV], this.requestQueue = {
                        state: Di,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: Di,
                        queue: []
                    }, this.requestQueueDelay = O.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(Li)
                        }), this.initialized = !0, setTimeout((() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }), (0, O.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async t => {
                        await this.isInitialized();
                        const e = Zi(Fi({}, t), {
                            requiredNamespaces: t.requiredNamespaces || {},
                            optionalNamespaces: t.optionalNamespaces || {}
                        });
                        await this.isValidConnect(e);
                        const {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: o,
                            relays: a
                        } = e;
                        let c, h = r,
                            u = !1;
                        if (h && (u = this.client.core.pairing.pairings.get(h).active), !h || !u) {
                            const {
                                topic: t,
                                uri: e
                            } = await this.client.core.pairing.create();
                            h = t, c = e
                        }
                        const l = await this.client.core.crypto.generateKeyPair(),
                            p = Fi({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: null !== a && void 0 !== a ? a : [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, o && {
                                sessionProperties: o
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = (0, s.H1)(O.FIVE_MINUTES, Ni);
                        if (this.events.once((0, s.E0)("session_connect"), (async t => {
                                let {
                                    error: e,
                                    session: r
                                } = t;
                                if (e) f(e);
                                else if (r) {
                                    r.self.publicKey = l;
                                    const t = Zi(Fi({}, r), {
                                        requiredNamespaces: r.requiredNamespaces,
                                        optionalNamespaces: r.optionalNamespaces
                                    });
                                    await this.client.session.set(r.topic, t), await this.setExpiry(r.topic, r.expiry), h && await this.client.core.pairing.updateMetadata({
                                        topic: h,
                                        metadata: r.peer.metadata
                                    }), d(t)
                                }
                            })), !h) {
                            const {
                                message: t
                            } = (0, s.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
                            throw new Error(t)
                        }
                        const v = await this.sendRequest({
                                topic: h,
                                method: "wc_sessionPropose",
                                params: p
                            }),
                            y = (0, s.gn)(O.FIVE_MINUTES);
                        return await this.setProposal(v, Fi({
                            id: v,
                            expiry: y
                        }, p)), {
                            uri: c,
                            approval: g
                        }
                    }, this.pair = async t => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async t => {
                        await this.isInitialized(), await this.isValidApprove(t);
                        const {
                            id: e,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = t, o = this.client.proposal.get(e);
                        let {
                            pairingTopic: a,
                            proposer: c,
                            requiredNamespaces: h,
                            optionalNamespaces: u
                        } = o;
                        a = a || "", (0, s.L5)(h) || (h = (0, s.fc)(i, "approve()"));
                        const l = await this.client.core.crypto.generateKeyPair(),
                            p = c.publicKey,
                            f = await this.client.core.crypto.generateSharedKey(l, p);
                        a && e && (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: c.metadata
                        }), await this.sendResult({
                            id: e,
                            topic: a,
                            result: {
                                relay: {
                                    protocol: null !== r && void 0 !== r ? r : "irn"
                                },
                                responderPublicKey: l
                            }
                        }), await this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: a
                        }));
                        const d = Fi({
                            relay: {
                                protocol: null !== r && void 0 !== r ? r : "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: h,
                            optionalNamespaces: u,
                            pairingTopic: a,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: (0, s.gn)(ji)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(f), await this.sendRequest({
                            topic: f,
                            method: "wc_sessionSettle",
                            params: d,
                            throwOnFailedPublish: !0
                        });
                        const g = Zi(Fi({}, d), {
                            topic: f,
                            pairingTopic: a,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: c.publicKey,
                                metadata: c.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(f, g), await this.setExpiry(f, (0, s.gn)(ji)), {
                            topic: f,
                            acknowledged: () => new Promise((t => setTimeout((() => t(this.client.session.get(f))), 500)))
                        }
                    }, this.reject = async t => {
                        await this.isInitialized(), await this.isValidReject(t);
                        const {
                            id: e,
                            reason: r
                        } = t, {
                            pairingTopic: i
                        } = this.client.proposal.get(e);
                        i && (await this.sendError(e, i, r), await this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")))
                    }, this.update = async t => {
                        await this.isInitialized(), await this.isValidUpdate(t);
                        const {
                            topic: e,
                            namespaces: r
                        } = t, i = await this.sendRequest({
                            topic: e,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: o,
                            reject: a
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_update", i), (t => {
                            let {
                                error: e
                            } = t;
                            e ? a(e) : o()
                        })), await this.client.session.update(e, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async t => {
                        await this.isInitialized(), await this.isValidExtend(t);
                        const {
                            topic: e
                        } = t, r = await this.sendRequest({
                            topic: e,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: o
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_extend", r), (t => {
                            let {
                                error: e
                            } = t;
                            e ? o(e) : n()
                        })), await this.setExpiry(e, (0, s.gn)(ji)), {
                            acknowledged: i
                        }
                    }, this.request = async t => {
                        await this.isInitialized(), await this.isValidRequest(t);
                        const {
                            chainId: e,
                            request: r,
                            topic: i,
                            expiry: n
                        } = t, o = et(), {
                            done: a,
                            resolve: c,
                            reject: h
                        } = (0, s.H1)(n, "Request expired. Please try again.");
                        return this.events.once((0, s.E0)("session_request", o), (t => {
                            let {
                                error: e,
                                result: r
                            } = t;
                            e ? h(e) : c(r)
                        })), await Promise.all([new Promise((async t => {
                            await this.sendRequest({
                                clientRpcId: o,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: e
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch((t => h(t))), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: e,
                                id: o
                            }), t()
                        })), new Promise((async t => {
                            const e = await this.client.core.storage.getItem(Ti);
                            (0, s.Hh)({
                                id: o,
                                topic: i,
                                wcDeepLink: e
                            }), t()
                        })), a()]).then((t => t[2]))
                    }, this.respond = async t => {
                        await this.isInitialized(), await this.isValidRespond(t);
                        const {
                            topic: e,
                            response: r
                        } = t, {
                            id: i
                        } = r;
                        yt(r) ? await this.sendResult({
                            id: i,
                            topic: e,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }) : mt(r) && await this.sendError(i, e, r.error), this.cleanupAfterResponse(t)
                    }, this.ping = async t => {
                        await this.isInitialized(), await this.isValidPing(t);
                        const {
                            topic: e
                        } = t;
                        if (this.client.session.keys.includes(e)) {
                            const t = await this.sendRequest({
                                    topic: e,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("session_ping", t), (t => {
                                let {
                                    error: e
                                } = t;
                                e ? n(e) : i()
                            })), await r()
                        } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                            topic: e
                        })
                    }, this.emit = async t => {
                        await this.isInitialized(), await this.isValidEmit(t);
                        const {
                            topic: e,
                            event: r,
                            chainId: i
                        } = t;
                        await this.sendRequest({
                            topic: e,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async t => {
                        await this.isInitialized(), await this.isValidDisconnect(t);
                        const {
                            topic: e
                        } = t;
                        this.client.session.keys.includes(e) ? (await this.sendRequest({
                            topic: e,
                            method: "wc_sessionDelete",
                            params: (0, s.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(e)) : await this.client.core.pairing.disconnect({
                            topic: e
                        })
                    }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter((e => (0, s.Ih)(e, t)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async t => {
                        if (t.pairingTopic) try {
                            const e = this.client.core.pairing.pairings.get(t.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter((r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic
                                }));
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((t => this.client.core.pairing.disconnect({
                                topic: t.topic
                            })))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (t, e) => {
                        const {
                            self: r
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), e || this.client.core.expirer.del(t), this.client.core.storage.removeItem(Ti).catch((t => this.client.logger.warn(t)))
                    }, this.deleteProposal = async (t, e) => {
                        await Promise.all([this.client.proposal.delete(t, (0, s.D6)("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)])
                    }, this.deletePendingSessionRequest = async function(t, r) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        await Promise.all([e.client.pendingRequest.delete(t, r), i ? Promise.resolve() : e.client.core.expirer.del(t)]), e.sessionRequestQueue.queue = e.sessionRequestQueue.queue.filter((e => e.id !== t)), i && (e.sessionRequestQueue.state = Di)
                    }, this.setExpiry = async (t, e) => {
                        this.client.session.keys.includes(t) && await this.client.session.update(t, {
                            expiry: e
                        }), this.client.core.expirer.set(t, e)
                    }, this.setProposal = async (t, e) => {
                        await this.client.proposal.set(t, e), this.client.core.expirer.set(t, e.expiry)
                    }, this.setPendingSessionRequest = async t => {
                        const e = Li.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: o
                            } = t;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: o
                        }), e && this.client.core.expirer.set(r, (0, s.gn)(e))
                    }, this.sendRequest = async t => {
                        const {
                            topic: e,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: o,
                            clientRpcId: a,
                            throwOnFailedPublish: c
                        } = t, h = it(r, i, a);
                        if ((0, s.jU)() && zi.includes(r)) {
                            const t = (0, s.rj)(JSON.stringify(h));
                            this.client.core.verify.register({
                                attestationId: t
                            })
                        }
                        const u = await this.client.core.crypto.encode(e, h),
                            l = Li[r].req;
                        return n && (l.ttl = n), o && (l.id = o), this.client.core.history.set(e, h), c ? (l.internal = Zi(Fi({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(e, u, l)) : this.client.core.relayer.publish(e, u, l).catch((t => this.client.logger.error(t))), h.id
                    }, this.sendResult = async t => {
                        const {
                            id: e,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = t, s = nt(e, i), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, e), c = Li[a.request.method].res;
                        n ? (c.internal = Zi(Fi({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch((t => this.client.logger.error(t))), await this.client.core.history.resolve(s)
                    }, this.sendError = async (t, e, r) => {
                        const i = st(t, r),
                            n = await this.client.core.crypto.encode(e, i),
                            s = await this.client.core.history.get(e, t),
                            o = Li[s.request.method].res;
                        this.client.core.relayer.publish(e, n, o), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        const t = [],
                            e = [];
                        this.client.session.getAll().forEach((e => {
                            (0, s.Bw)(e.expiry) && t.push(e.topic)
                        })), this.client.proposal.getAll().forEach((t => {
                            (0, s.Bw)(t.expiry) && e.push(t.id)
                        })), await Promise.all([...t.map((t => this.deleteSession(t))), ...e.map((t => this.deleteProposal(t)))])
                    }, this.onRelayEventRequest = async t => {
                        this.requestQueue.queue.push(t), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state !== Mi) {
                            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                                this.requestQueue.state = Mi;
                                const e = this.requestQueue.queue.shift();
                                if (e) try {
                                    this.processRequest(e), await new Promise((t => setTimeout(t, 300)))
                                } catch (t) {
                                    this.client.logger.warn(t)
                                }
                            }
                            this.requestQueue.state = Di
                        } else this.client.logger.info("Request queue already active, skipping...")
                    }, this.processRequest = t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(e, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(e, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(e, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(e, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(e, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(e, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(e, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(e, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async t => {
                        const {
                            topic: e,
                            payload: r
                        } = t, i = (await this.client.core.history.get(e, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(e, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(e, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(e, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(e, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(e, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(e, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = t => {
                        const {
                            topic: e
                        } = t, {
                            message: r
                        } = (0, s.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(r)
                    }, this.onSessionProposeRequest = async (t, e) => {
                        const {
                            params: r,
                            id: i
                        } = e;
                        try {
                            this.isValidConnect(Fi({}, e.params));
                            const n = (0, s.gn)(O.FIVE_MINUTES),
                                o = Fi({
                                    id: i,
                                    pairingTopic: t,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, o);
                            const a = (0, s.rj)(JSON.stringify(e)),
                                c = await this.getVerifyContext(a, o.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: o,
                                verifyContext: c
                            })
                        } catch (u) {
                            await this.sendError(i, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionProposeResponse = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        if (yt(e)) {
                            const {
                                result: i
                            } = e;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            const n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            const s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            const o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            const a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            const c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: t
                            })
                        } else mt(e) && (await this.client.proposal.delete(r, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_connect"), {
                            error: e.error
                        }))
                    }, this.onSessionSettleRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidSessionSettleRequest(i);
                            const {
                                relay: r,
                                controller: n,
                                expiry: o,
                                namespaces: a,
                                requiredNamespaces: c,
                                optionalNamespaces: h,
                                sessionProperties: u,
                                pairingTopic: l
                            } = e.params, p = Fi({
                                topic: t,
                                relay: r,
                                expiry: o,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: c,
                                optionalNamespaces: h,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult({
                                id: e.id,
                                topic: t,
                                result: !0
                            }), this.events.emit((0, s.E0)("session_connect"), {
                                session: p
                            }), this.cleanupDuplicatePairings(p)
                        } catch (u) {
                            await this.sendError(r, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionSettleResponse = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        yt(e) ? (await this.client.session.update(t, {
                            acknowledged: !0
                        }), this.events.emit((0, s.E0)("session_approve", r), {})) : mt(e) && (await this.client.session.delete(t, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_approve", r), {
                            error: e.error
                        }))
                    }, this.onSessionUpdateRequest = async (t, e) => {
                        const {
                            params: r,
                            id: i
                        } = e;
                        try {
                            const e = `${t}_session_update`,
                                n = s.O6.get(e);
                            if (n && this.isRequestOutOfSync(n, i)) return void this.client.logger.info(`Discarding out of sync request - ${i}`);
                            this.isValidUpdate(Fi({
                                topic: t
                            }, r)), await this.client.session.update(t, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: t,
                                params: r
                            }), s.O6.set(e, i)
                        } catch (u) {
                            await this.sendError(i, t, u), this.client.logger.error(u)
                        }
                    }, this.isRequestOutOfSync = (t, e) => parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        yt(e) ? this.events.emit((0, s.E0)("session_update", r), {}) : mt(e) && this.events.emit((0, s.E0)("session_update", r), {
                            error: e.error
                        })
                    }, this.onSessionExtendRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidExtend({
                                topic: t
                            }), await this.setExpiry(t, (0, s.gn)(ji)), await this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionExtendResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        yt(e) ? this.events.emit((0, s.E0)("session_extend", r), {}) : mt(e) && this.events.emit((0, s.E0)("session_extend", r), {
                            error: e.error
                        })
                    }, this.onSessionPingRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidPing({
                                topic: t
                            }), await this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            await this.sendError(r, t, i), this.client.logger.error(i)
                        }
                    }, this.onSessionPingResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        setTimeout((() => {
                            yt(e) ? this.events.emit((0, s.E0)("session_ping", r), {}) : mt(e) && this.events.emit((0, s.E0)("session_ping", r), {
                                error: e.error
                            })
                        }), 500)
                    }, this.onSessionDeleteRequest = async (t, e) => {
                        const {
                            id: r
                        } = e;
                        try {
                            this.isValidDisconnect({
                                topic: t,
                                reason: e.params
                            }), await Promise.all([new Promise((e => {
                                this.client.core.relayer.once(dr, (async () => {
                                    e(await this.deleteSession(t))
                                }))
                            })), this.sendResult({
                                id: r,
                                topic: t,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: t
                            })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    }, this.onSessionRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            this.isValidRequest(Fi({
                                topic: t
                            }, i));
                            const e = (0, s.rj)(JSON.stringify(it("wc_sessionRequest", i, r))),
                                n = this.client.session.get(t),
                                o = {
                                    id: r,
                                    topic: t,
                                    params: i,
                                    verifyContext: await this.getVerifyContext(e, n.peer.metadata)
                                };
                            await this.setPendingSessionRequest(o), this.addSessionRequestToSessionRequestQueue(o), this.processSessionRequestQueue()
                        } catch (u) {
                            await this.sendError(r, t, u), this.client.logger.error(u)
                        }
                    }, this.onSessionRequestResponse = (t, e) => {
                        const {
                            id: r
                        } = e;
                        yt(e) ? this.events.emit((0, s.E0)("session_request", r), {
                            result: e.result
                        }) : mt(e) && this.events.emit((0, s.E0)("session_request", r), {
                            error: e.error
                        })
                    }, this.onSessionEventRequest = async (t, e) => {
                        const {
                            id: r,
                            params: i
                        } = e;
                        try {
                            const e = `${t}_session_event_${i.event.name}`,
                                n = s.O6.get(e);
                            if (n && this.isRequestOutOfSync(n, r)) return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                            this.isValidEmit(Fi({
                                topic: t
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: t,
                                params: i
                            }), s.O6.set(e, r)
                        } catch (u) {
                            await this.sendError(r, t, u), this.client.logger.error(u)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = t => {
                        this.sessionRequestQueue.queue.push(t)
                    }, this.cleanupAfterResponse = t => {
                        this.deletePendingSessionRequest(t.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout((() => {
                            this.sessionRequestQueue.state = Di, this.processSessionRequestQueue()
                        }), (0, O.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === Mi) return void this.client.logger.info("session request queue is already active.");
                        const t = this.sessionRequestQueue.queue[0];
                        if (t) try {
                            this.sessionRequestQueue.state = Mi, this.client.events.emit("session_request", t)
                        } catch (e) {
                            this.client.logger.error(e)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = t => {
                        if (t.active) return;
                        const e = this.client.proposal.getAll().find((e => e.pairingTopic === t.topic));
                        e && this.onSessionProposeRequest(t.topic, it("wc_sessionPropose", {
                            requiredNamespaces: e.requiredNamespaces,
                            optionalNamespaces: e.optionalNamespaces,
                            relays: e.relays,
                            proposer: e.proposer
                        }, e.id))
                    }, this.isValidConnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                            throw new Error(e)
                        }
                        const {
                            pairingTopic: e,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: o
                        } = t;
                        if ((0, s.o8)(e) || await this.isValidPairingTopic(e), !(0, s.PM)(o, !0)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw new Error(t)
                        }!(0, s.o8)(r) && 0 !== (0, s.L5)(r) && this.validateNamespaces(r, "requiredNamespaces"), !(0, s.o8)(i) && 0 !== (0, s.L5)(i) && this.validateNamespaces(i, "optionalNamespaces"), (0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (t, e) => {
                        const r = (0, s.n)(t, "connect()", e);
                        if (r) throw new Error(r.message)
                    }, this.isValidApprove = async t => {
                        if (!(0, s.EJ)(t)) throw new Error((0, s.Z7)("MISSING_OR_INVALID", `approve() params: ${t}`).message);
                        const {
                            id: e,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = t;
                        await this.isValidProposalId(e);
                        const o = this.client.proposal.get(e),
                            a = (0, s.in)(r, "approve()");
                        if (a) throw new Error(a.message);
                        const c = (0, s.rF)(o.requiredNamespaces, r, "approve()");
                        if (c) throw new Error(c.message);
                        if (!(0, s.M_)(i, !0)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw new Error(t)
                        }(0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            id: e,
                            reason: r
                        } = t;
                        if (await this.isValidProposalId(e), !(0, s.$t)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidSessionSettleRequest = t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            relay: e,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = t;
                        if (!(0, s.Z2)(e)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(t)
                        }
                        const o = (0, s.Dd)(r, "onSessionSettleRequest()");
                        if (o) throw new Error(o.message);
                        const a = (0, s.in)(i, "onSessionSettleRequest()");
                        if (a) throw new Error(a.message);
                        if ((0, s.Bw)(n)) {
                            const {
                                message: t
                            } = (0, s.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(t)
                        }
                    }, this.isValidUpdate = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `update() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            namespaces: r
                        } = t;
                        await this.isValidSessionTopic(e);
                        const i = this.client.session.get(e),
                            n = (0, s.in)(r, "update()");
                        if (n) throw new Error(n.message);
                        const o = (0, s.rF)(i.requiredNamespaces, r, "update()");
                        if (o) throw new Error(o.message)
                    }, this.isValidExtend = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `extend() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionTopic(e)
                    }, this.isValidRequest = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = t;
                        await this.isValidSessionTopic(e);
                        const {
                            namespaces: o
                        } = this.client.session.get(e);
                        if (!(0, s.p8)(o, i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw new Error(t)
                        }
                        if (!(0, s.hH)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                        if (!(0, s.al)(o, i, r.method)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw new Error(t)
                        }
                        if (n && !(0, s.ON)(n, qi)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${qi.min} and ${qi.max}`);
                            throw new Error(t)
                        }
                    }, this.isValidRespond = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            response: r
                        } = t;
                        if (await this.isValidSessionTopic(e), !(0, s.JT)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidPing = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionOrPairingTopic(e)
                    }, this.isValidEmit = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e,
                            event: r,
                            chainId: i
                        } = t;
                        await this.isValidSessionTopic(e);
                        const {
                            namespaces: n
                        } = this.client.session.get(e);
                        if (!(0, s.p8)(n, i)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw new Error(t)
                        }
                        if (!(0, s.nf)(r)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                        if (!(0, s.sI)(n, i, r.name)) {
                            const {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw new Error(t)
                        }
                    }, this.isValidDisconnect = async t => {
                        if (!(0, s.EJ)(t)) {
                            const {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                            throw new Error(e)
                        }
                        const {
                            topic: e
                        } = t;
                        await this.isValidSessionOrPairingTopic(e)
                    }, this.getVerifyContext = async (t, e) => {
                        const r = {
                            verified: {
                                verifyUrl: e.verifyUrl || kr,
                                validation: "UNKNOWN",
                                origin: e.url || ""
                            }
                        };
                        try {
                            const i = await this.client.core.verify.resolve({
                                attestationId: t,
                                verifyUrl: e.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(e.url).origin ? "VALID" : "INVALID")
                        } catch (i) {
                            this.client.logger.info(i)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (t, e) => {
                        Object.values(t).forEach((t => {
                            if (!(0, s.M_)(t, !1)) {
                                const {
                                    message: r
                                } = (0, s.Z7)("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
                                throw new Error(r)
                            }
                        }))
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(cr, (async t => {
                        const {
                            topic: e,
                            message: r
                        } = t;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        const i = await this.client.core.crypto.decode(e, r);
                        try {
                            gt(i) ? (this.client.core.history.set(e, i), this.onRelayEventRequest({
                                topic: e,
                                payload: i
                            })) : vt(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: e,
                                payload: i
                            }), this.client.core.history.delete(e, i.id)) : this.onRelayEventUnknownPayload({
                                topic: e,
                                payload: i
                            })
                        } catch (n) {
                            this.client.logger.error(n)
                        }
                    }))
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(Dr, (async t => {
                        const {
                            topic: e,
                            id: r
                        } = (0, s.iP)(t.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, s.Z7)("EXPIRED"), !0);
                        e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0), this.client.events.emit("session_expire", {
                            topic: e
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    }))
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(Or, (t => this.onPairingCreated(t)))
                }
                isValidPairingTopic(t) {
                    if (!(0, s.M_)(t, !1)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.core.pairing.pairings.get(t).expiry)) {
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `pairing topic: ${t}`);
                        throw new Error(e)
                    }
                }
                async isValidSessionTopic(t) {
                    if (!(0, s.M_)(t, !1)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.session.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.session.get(t).expiry)) {
                        await this.deleteSession(t);
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `session topic: ${t}`);
                        throw new Error(e)
                    }
                }
                async isValidSessionOrPairingTopic(t) {
                    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(t)) {
                            if ((0, s.M_)(t, !1)) {
                                const {
                                    message: e
                                } = (0, s.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                                throw new Error(e)
                            } {
                                const {
                                    message: e
                                } = (0, s.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                                throw new Error(e)
                            }
                        }
                        this.isValidPairingTopic(t)
                    }
                }
                async isValidProposalId(t) {
                    if (!(0, s.Q0)(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
                        throw new Error(e)
                    }
                    if (!this.client.proposal.keys.includes(t)) {
                        const {
                            message: e
                        } = (0, s.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
                        throw new Error(e)
                    }
                    if ((0, s.Bw)(this.client.proposal.get(t).expiry)) {
                        await this.deleteProposal(t);
                        const {
                            message: e
                        } = (0, s.Z7)("EXPIRED", `proposal id: ${t}`);
                        throw new Error(e)
                    }
                }
            }
            class Gi extends di {
                constructor(t, e) {
                    super(t, e, "proposal", Ci), this.core = t, this.logger = e
                }
            }
            class Ji extends di {
                constructor(t, e) {
                    super(t, e, "session", Ci), this.core = t, this.logger = e
                }
            }
            class Qi extends di {
                constructor(t, e) {
                    super(t, e, "request", Ci, (t => t.id)), this.core = t, this.logger = e
                }
            }
            class Yi extends w {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = Ri, this.events = new i.EventEmitter, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
                        try {
                            return await this.engine.connect(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async t => {
                        try {
                            return await this.engine.pair(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async t => {
                        try {
                            return await this.engine.approve(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async t => {
                        try {
                            return await this.engine.reject(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async t => {
                        try {
                            return await this.engine.update(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async t => {
                        try {
                            return await this.engine.extend(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async t => {
                        try {
                            return await this.engine.request(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async t => {
                        try {
                            return await this.engine.respond(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async t => {
                        try {
                            return await this.engine.ping(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async t => {
                        try {
                            return await this.engine.emit(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async t => {
                        try {
                            return await this.engine.disconnect(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = t => {
                        try {
                            return this.engine.find(t)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.name = (null === t || void 0 === t ? void 0 : t.name) || Ri, this.metadata = (null === t || void 0 === t ? void 0 : t.metadata) || (0, s.D)();
                    const e = typeof(null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof(null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: (null === t || void 0 === t ? void 0 : t.logger) || Ai
                    }));
                    this.core = (null === t || void 0 === t ? void 0 : t.core) || new Oi(t), this.logger = (0, c.generateChildLogger)(e, this.name), this.session = new Ji(this.core, this.logger), this.proposal = new Gi(this.core, this.logger), this.pendingRequest = new Qi(this.core, this.logger), this.engine = new Wi(this)
                }
                static async init(t) {
                    const e = new Yi(t);
                    return await e.initialize(), e
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (t) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
                    }
                }
            }
            var Xi = r(81045),
                tn = r.n(Xi);
            const en = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class rn {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.url = t, this.disableProviderPing = e, this.events = new i.EventEmitter, this.isAvailable = !1, this.registering = !1, !lt(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw new Error("Connection already closed");
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || await this.register();
                    try {
                        const e = I(t),
                            r = await tn()(this.url, Object.assign(Object.assign({}, en), {
                                body: e
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (r) {
                        this.onError(t.id, r)
                    }
                }
                async register() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!lt(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                            this.events.once("register_error", (t => {
                                this.resetMaxListeners(), e(t)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.isAvailable) return e(new Error("HTTP connection is missing or invalid"));
                                t()
                            }))
                        }))
                    }
                    this.url = t, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            const e = I({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await tn()(t, Object.assign(Object.assign({}, en), {
                                body: e
                            }))
                        }
                        this.onOpen()
                    } catch (e) {
                        const t = this.parseError(e);
                        throw this.events.emit("register_error", t), this.onClose(), t
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if ("undefined" === typeof t.data) return;
                    const e = "string" === typeof t.data ? E(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    const r = this.parseError(e),
                        i = st(t, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(t) {
                    return X(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const nn = rn,
                sn = "error",
                on = "wc@2:universal_provider:",
                an = "default_chain_changed";
            var cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {},
                hn = {
                    exports: {}
                };
            ! function(t, e) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 16,
                        a = 32,
                        c = 64,
                        h = 128,
                        u = 256,
                        l = 1 / 0,
                        p = 9007199254740991,
                        f = NaN,
                        d = 4294967295,
                        g = [
                            ["ary", h],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", o],
                            ["flip", 512],
                            ["partial", a],
                            ["partialRight", c],
                            ["rearg", u]
                        ],
                        v = "[object Arguments]",
                        y = "[object Array]",
                        m = "[object Boolean]",
                        w = "[object Date]",
                        _ = "[object Error]",
                        b = "[object Function]",
                        E = "[object GeneratorFunction]",
                        I = "[object Map]",
                        P = "[object Number]",
                        S = "[object Object]",
                        O = "[object Promise]",
                        x = "[object RegExp]",
                        C = "[object Set]",
                        R = "[object String]",
                        A = "[object Symbol]",
                        T = "[object WeakMap]",
                        N = "[object ArrayBuffer]",
                        j = "[object DataView]",
                        L = "[object Float32Array]",
                        q = "[object Float64Array]",
                        D = "[object Int8Array]",
                        M = "[object Int16Array]",
                        z = "[object Int32Array]",
                        k = "[object Uint8Array]",
                        $ = "[object Uint8ClampedArray]",
                        U = "[object Uint16Array]",
                        H = "[object Uint32Array]",
                        V = /\b__p \+= '';/g,
                        B = /\b(__p \+=) '' \+/g,
                        K = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        F = /&(?:amp|lt|gt|quot|#39);/g,
                        Z = /[&<>"']/g,
                        W = RegExp(F.source),
                        G = RegExp(Z.source),
                        J = /<%-([\s\S]+?)%>/g,
                        Q = /<%([\s\S]+?)%>/g,
                        Y = /<%=([\s\S]+?)%>/g,
                        X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        tt = /^\w*$/,
                        et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        rt = /[\\^$.*+?()[\]{}|]/g,
                        it = RegExp(rt.source),
                        nt = /^\s+/,
                        st = /\s/,
                        ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        at = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ct = /,? & /,
                        ht = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ut = /[()=,{}\[\]\/\s]/,
                        lt = /\\(\\)?/g,
                        pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        ft = /\w*$/,
                        dt = /^[-+]0x[0-9a-f]+$/i,
                        gt = /^0b[01]+$/i,
                        vt = /^\[object .+?Constructor\]$/,
                        yt = /^0o[0-7]+$/i,
                        mt = /^(?:0|[1-9]\d*)$/,
                        wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        _t = /($^)/,
                        bt = /['\n\r\u2028\u2029\\]/g,
                        Et = "\\ud800-\\udfff",
                        It = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Pt = "\\u2700-\\u27bf",
                        St = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Ot = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        xt = "\\ufe0e\\ufe0f",
                        Ct = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Rt = "['\u2019]",
                        At = "[" + Et + "]",
                        Tt = "[" + Ct + "]",
                        Nt = "[" + It + "]",
                        jt = "\\d+",
                        Lt = "[" + Pt + "]",
                        qt = "[" + St + "]",
                        Dt = "[^" + Et + Ct + jt + Pt + St + Ot + "]",
                        Mt = "\\ud83c[\\udffb-\\udfff]",
                        zt = "[^" + Et + "]",
                        kt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        $t = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Ut = "[" + Ot + "]",
                        Ht = "\\u200d",
                        Vt = "(?:" + qt + "|" + Dt + ")",
                        Bt = "(?:" + Ut + "|" + Dt + ")",
                        Kt = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Ft = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Zt = "(?:" + Nt + "|" + Mt + ")" + "?",
                        Wt = "[" + xt + "]?",
                        Gt = Wt + Zt + ("(?:" + Ht + "(?:" + [zt, kt, $t].join("|") + ")" + Wt + Zt + ")*"),
                        Jt = "(?:" + [Lt, kt, $t].join("|") + ")" + Gt,
                        Qt = "(?:" + [zt + Nt + "?", Nt, kt, $t, At].join("|") + ")",
                        Yt = RegExp(Rt, "g"),
                        Xt = RegExp(Nt, "g"),
                        te = RegExp(Mt + "(?=" + Mt + ")|" + Qt + Gt, "g"),
                        ee = RegExp([Ut + "?" + qt + "+" + Kt + "(?=" + [Tt, Ut, "$"].join("|") + ")", Bt + "+" + Ft + "(?=" + [Tt, Ut + Vt, "$"].join("|") + ")", Ut + "?" + Vt + "+" + Kt, Ut + "+" + Ft, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", jt, Jt].join("|"), "g"),
                        re = RegExp("[" + Ht + Et + It + xt + "]"),
                        ie = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        ne = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        se = -1,
                        oe = {};
                    oe[L] = oe[q] = oe[D] = oe[M] = oe[z] = oe[k] = oe[$] = oe[U] = oe[H] = !0, oe[v] = oe[y] = oe[N] = oe[m] = oe[j] = oe[w] = oe[_] = oe[b] = oe[I] = oe[P] = oe[S] = oe[x] = oe[C] = oe[R] = oe[T] = !1;
                    var ae = {};
                    ae[v] = ae[y] = ae[N] = ae[j] = ae[m] = ae[w] = ae[L] = ae[q] = ae[D] = ae[M] = ae[z] = ae[I] = ae[P] = ae[S] = ae[x] = ae[C] = ae[R] = ae[A] = ae[k] = ae[$] = ae[U] = ae[H] = !0, ae[_] = ae[b] = ae[T] = !1;
                    var ce = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        he = parseFloat,
                        ue = parseInt,
                        le = "object" == typeof cn && cn && cn.Object === Object && cn,
                        pe = "object" == typeof self && self && self.Object === Object && self,
                        fe = le || pe || Function("return this")(),
                        de = e && !e.nodeType && e,
                        ge = de && t && !t.nodeType && t,
                        ve = ge && ge.exports === de,
                        ye = ve && le.process,
                        me = function() {
                            try {
                                return ge && ge.require && ge.require("util").types || ye && ye.binding && ye.binding("util")
                            } catch {}
                        }(),
                        we = me && me.isArrayBuffer,
                        _e = me && me.isDate,
                        be = me && me.isMap,
                        Ee = me && me.isRegExp,
                        Ie = me && me.isSet,
                        Pe = me && me.isTypedArray;

                    function Se(t, e, r) {
                        switch (r.length) {
                            case 0:
                                return t.call(e);
                            case 1:
                                return t.call(e, r[0]);
                            case 2:
                                return t.call(e, r[0], r[1]);
                            case 3:
                                return t.call(e, r[0], r[1], r[2])
                        }
                        return t.apply(e, r)
                    }

                    function Oe(t, e, r, i) {
                        for (var n = -1, s = null == t ? 0 : t.length; ++n < s;) {
                            var o = t[n];
                            e(i, o, r(o), t)
                        }
                        return i
                    }

                    function xe(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i && !1 !== e(t[r], r, t););
                        return t
                    }

                    function Ce(t, e) {
                        for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
                        return t
                    }

                    function Re(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                            if (!e(t[r], r, t)) return !1;
                        return !0
                    }

                    function Ae(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                            var o = t[r];
                            e(o, r, t) && (s[n++] = o)
                        }
                        return s
                    }

                    function Te(t, e) {
                        return !!(null == t ? 0 : t.length) && Ue(t, e, 0) > -1
                    }

                    function Ne(t, e, r) {
                        for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
                            if (r(e, t[i])) return !0;
                        return !1
                    }

                    function je(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i;) n[r] = e(t[r], r, t);
                        return n
                    }

                    function Le(t, e) {
                        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
                        return t
                    }

                    function qe(t, e, r, i) {
                        var n = -1,
                            s = null == t ? 0 : t.length;
                        for (i && s && (r = t[++n]); ++n < s;) r = e(r, t[n], n, t);
                        return r
                    }

                    function De(t, e, r, i) {
                        var n = null == t ? 0 : t.length;
                        for (i && n && (r = t[--n]); n--;) r = e(r, t[n], n, t);
                        return r
                    }

                    function Me(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                            if (e(t[r], r, t)) return !0;
                        return !1
                    }
                    var ze = Ke("length");

                    function ke(t, e, r) {
                        var i;
                        return r(t, (function(t, r, n) {
                            if (e(t, r, n)) return i = r, !1
                        })), i
                    }

                    function $e(t, e, r, i) {
                        for (var n = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (e(t[s], s, t)) return s;
                        return -1
                    }

                    function Ue(t, e, r) {
                        return e === e ? function(t, e, r) {
                            for (var i = r - 1, n = t.length; ++i < n;)
                                if (t[i] === e) return i;
                            return -1
                        }(t, e, r) : $e(t, Ve, r)
                    }

                    function He(t, e, r, i) {
                        for (var n = r - 1, s = t.length; ++n < s;)
                            if (i(t[n], e)) return n;
                        return -1
                    }

                    function Ve(t) {
                        return t !== t
                    }

                    function Be(t, e) {
                        var r = null == t ? 0 : t.length;
                        return r ? We(t, e) / r : f
                    }

                    function Ke(t) {
                        return function(e) {
                            return null == e ? r : e[t]
                        }
                    }

                    function Fe(t) {
                        return function(e) {
                            return null == t ? r : t[e]
                        }
                    }

                    function Ze(t, e, r, i, n) {
                        return n(t, (function(t, n, s) {
                            r = i ? (i = !1, t) : e(r, t, n, s)
                        })), r
                    }

                    function We(t, e) {
                        for (var i, n = -1, s = t.length; ++n < s;) {
                            var o = e(t[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function Ge(t, e) {
                        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                        return i
                    }

                    function Je(t) {
                        return t && t.slice(0, pr(t) + 1).replace(nt, "")
                    }

                    function Qe(t) {
                        return function(e) {
                            return t(e)
                        }
                    }

                    function Ye(t, e) {
                        return je(e, (function(e) {
                            return t[e]
                        }))
                    }

                    function Xe(t, e) {
                        return t.has(e)
                    }

                    function tr(t, e) {
                        for (var r = -1, i = t.length; ++r < i && Ue(e, t[r], 0) > -1;);
                        return r
                    }

                    function er(t, e) {
                        for (var r = t.length; r-- && Ue(e, t[r], 0) > -1;);
                        return r
                    }
                    var rr = Fe({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        ir = Fe({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function nr(t) {
                        return "\\" + ce[t]
                    }

                    function sr(t) {
                        return re.test(t)
                    }

                    function or(t) {
                        var e = -1,
                            r = Array(t.size);
                        return t.forEach((function(t, i) {
                            r[++e] = [i, t]
                        })), r
                    }

                    function ar(t, e) {
                        return function(r) {
                            return t(e(r))
                        }
                    }

                    function cr(t, e) {
                        for (var r = -1, i = t.length, n = 0, o = []; ++r < i;) {
                            var a = t[r];
                            (a === e || a === s) && (t[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function hr(t) {
                        var e = -1,
                            r = Array(t.size);
                        return t.forEach((function(t) {
                            r[++e] = t
                        })), r
                    }

                    function ur(t) {
                        return sr(t) ? function(t) {
                            for (var e = te.lastIndex = 0; te.test(t);) ++e;
                            return e
                        }(t) : ze(t)
                    }

                    function lr(t) {
                        return sr(t) ? function(t) {
                            return t.match(te) || []
                        }(t) : function(t) {
                            return t.split("")
                        }(t)
                    }

                    function pr(t) {
                        for (var e = t.length; e-- && st.test(t.charAt(e)););
                        return e
                    }
                    var fr = Fe({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var dr = function t(e) {
                        var st = (e = null == e ? fe : dr.defaults(fe.Object(), e, dr.pick(fe, ne))).Array,
                            Et = e.Date,
                            It = e.Error,
                            Pt = e.Function,
                            St = e.Math,
                            Ot = e.Object,
                            xt = e.RegExp,
                            Ct = e.String,
                            Rt = e.TypeError,
                            At = st.prototype,
                            Tt = Pt.prototype,
                            Nt = Ot.prototype,
                            jt = e["__core-js_shared__"],
                            Lt = Tt.toString,
                            qt = Nt.hasOwnProperty,
                            Dt = 0,
                            Mt = function() {
                                var t = /[^.]+$/.exec(jt && jt.keys && jt.keys.IE_PROTO || "");
                                return t ? "Symbol(src)_1." + t : ""
                            }(),
                            zt = Nt.toString,
                            kt = Lt.call(Ot),
                            $t = fe._,
                            Ut = xt("^" + Lt.call(qt).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ht = ve ? e.Buffer : r,
                            Vt = e.Symbol,
                            Bt = e.Uint8Array,
                            Kt = Ht ? Ht.allocUnsafe : r,
                            Ft = ar(Ot.getPrototypeOf, Ot),
                            Zt = Ot.create,
                            Wt = Nt.propertyIsEnumerable,
                            Gt = At.splice,
                            Jt = Vt ? Vt.isConcatSpreadable : r,
                            Qt = Vt ? Vt.iterator : r,
                            te = Vt ? Vt.toStringTag : r,
                            re = function() {
                                try {
                                    var t = us(Ot, "defineProperty");
                                    return t({}, "", {}), t
                                } catch {}
                            }(),
                            ce = e.clearTimeout !== fe.clearTimeout && e.clearTimeout,
                            le = Et && Et.now !== fe.Date.now && Et.now,
                            pe = e.setTimeout !== fe.setTimeout && e.setTimeout,
                            de = St.ceil,
                            ge = St.floor,
                            ye = Ot.getOwnPropertySymbols,
                            me = Ht ? Ht.isBuffer : r,
                            ze = e.isFinite,
                            Fe = At.join,
                            gr = ar(Ot.keys, Ot),
                            vr = St.max,
                            yr = St.min,
                            mr = Et.now,
                            wr = e.parseInt,
                            _r = St.random,
                            br = At.reverse,
                            Er = us(e, "DataView"),
                            Ir = us(e, "Map"),
                            Pr = us(e, "Promise"),
                            Sr = us(e, "Set"),
                            Or = us(e, "WeakMap"),
                            xr = us(Ot, "create"),
                            Cr = Or && new Or,
                            Rr = {},
                            Ar = Ds(Er),
                            Tr = Ds(Ir),
                            Nr = Ds(Pr),
                            jr = Ds(Sr),
                            Lr = Ds(Or),
                            qr = Vt ? Vt.prototype : r,
                            Dr = qr ? qr.valueOf : r,
                            Mr = qr ? qr.toString : r;

                        function zr(t) {
                            if (ta(t) && !Vo(t) && !(t instanceof Hr)) {
                                if (t instanceof Ur) return t;
                                if (qt.call(t, "__wrapped__")) return Ms(t)
                            }
                            return new Ur(t)
                        }
                        var kr = function() {
                            function t() {}
                            return function(e) {
                                if (!Xo(e)) return {};
                                if (Zt) return Zt(e);
                                t.prototype = e;
                                var i = new t;
                                return t.prototype = r, i
                            }
                        }();

                        function $r() {}

                        function Ur(t, e) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r
                        }

                        function Hr(t) {
                            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, this.__views__ = []
                        }

                        function Vr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Br(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Kr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.clear(); ++e < r;) {
                                var i = t[e];
                                this.set(i[0], i[1])
                            }
                        }

                        function Fr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length;
                            for (this.__data__ = new Kr; ++e < r;) this.add(t[e])
                        }

                        function Zr(t) {
                            var e = this.__data__ = new Br(t);
                            this.size = e.size
                        }

                        function Wr(t, e) {
                            var r = Vo(t),
                                i = !r && Ho(t),
                                n = !r && !i && Zo(t),
                                s = !r && !i && !n && ca(t),
                                o = r || i || n || s,
                                a = o ? Ge(t.length, Ct) : [],
                                c = a.length;
                            for (var h in t)(e || qt.call(t, h)) && (!o || !("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || ys(h, c))) && a.push(h);
                            return a
                        }

                        function Gr(t) {
                            var e = t.length;
                            return e ? t[Fi(0, e - 1)] : r
                        }

                        function Jr(t, e) {
                            return js(Cn(t), si(e, 0, t.length))
                        }

                        function Qr(t) {
                            return js(Cn(t))
                        }

                        function Yr(t, e, i) {
                            (i !== r && !ko(t[e], i) || i === r && !(e in t)) && ii(t, e, i)
                        }

                        function Xr(t, e, i) {
                            var n = t[e];
                            (!qt.call(t, e) || !ko(n, i) || i === r && !(e in t)) && ii(t, e, i)
                        }

                        function ti(t, e) {
                            for (var r = t.length; r--;)
                                if (ko(t[r][0], e)) return r;
                            return -1
                        }

                        function ei(t, e, r, i) {
                            return ui(t, (function(t, n, s) {
                                e(i, t, r(t), s)
                            })), i
                        }

                        function ri(t, e) {
                            return t && Rn(e, Aa(e), t)
                        }

                        function ii(t, e, r) {
                            "__proto__" == e && re ? re(t, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: r,
                                writable: !0
                            }) : t[e] = r
                        }

                        function ni(t, e) {
                            for (var i = -1, n = e.length, s = st(n), o = null == t; ++i < n;) s[i] = o ? r : Sa(t, e[i]);
                            return s
                        }

                        function si(t, e, i) {
                            return t === t && (i !== r && (t = t <= i ? t : i), e !== r && (t = t >= e ? t : e)), t
                        }

                        function oi(t, e, i, n, s, o) {
                            var a, c = 1 & e,
                                h = 2 & e,
                                u = 4 & e;
                            if (i && (a = s ? i(t, n, s, o) : i(t)), a !== r) return a;
                            if (!Xo(t)) return t;
                            var l = Vo(t);
                            if (l) {
                                if (a = function(t) {
                                        var e = t.length,
                                            r = new t.constructor(e);
                                        return e && "string" == typeof t[0] && qt.call(t, "index") && (r.index = t.index, r.input = t.input), r
                                    }(t), !c) return Cn(t, a)
                            } else {
                                var p = fs(t),
                                    f = p == b || p == E;
                                if (Zo(t)) return En(t, c);
                                if (p == S || p == v || f && !s) {
                                    if (a = h || f ? {} : gs(t), !c) return h ? function(t, e) {
                                        return Rn(t, ps(t), e)
                                    }(t, function(t, e) {
                                        return t && Rn(e, Ta(e), t)
                                    }(a, t)) : function(t, e) {
                                        return Rn(t, ls(t), e)
                                    }(t, ri(a, t))
                                } else {
                                    if (!ae[p]) return s ? t : {};
                                    a = function(t, e, r) {
                                        var i = t.constructor;
                                        switch (e) {
                                            case N:
                                                return In(t);
                                            case m:
                                            case w:
                                                return new i(+t);
                                            case j:
                                                return function(t, e) {
                                                    var r = e ? In(t.buffer) : t.buffer;
                                                    return new t.constructor(r, t.byteOffset, t.byteLength)
                                                }(t, r);
                                            case L:
                                            case q:
                                            case D:
                                            case M:
                                            case z:
                                            case k:
                                            case $:
                                            case U:
                                            case H:
                                                return Pn(t, r);
                                            case I:
                                                return new i;
                                            case P:
                                            case R:
                                                return new i(t);
                                            case x:
                                                return function(t) {
                                                    var e = new t.constructor(t.source, ft.exec(t));
                                                    return e.lastIndex = t.lastIndex, e
                                                }(t);
                                            case C:
                                                return new i;
                                            case A:
                                                return function(t) {
                                                    return Dr ? Ot(Dr.call(t)) : {}
                                                }(t)
                                        }
                                    }(t, p, c)
                                }
                            }
                            o || (o = new Zr);
                            var d = o.get(t);
                            if (d) return d;
                            o.set(t, a), sa(t) ? t.forEach((function(r) {
                                a.add(oi(r, e, i, r, t, o))
                            })) : ea(t) && t.forEach((function(r, n) {
                                a.set(n, oi(r, e, i, n, t, o))
                            }));
                            var g = l ? r : (u ? h ? is : rs : h ? Ta : Aa)(t);
                            return xe(g || t, (function(r, n) {
                                g && (r = t[n = r]), Xr(a, n, oi(r, e, i, n, t, o))
                            })), a
                        }

                        function ai(t, e, i) {
                            var n = i.length;
                            if (null == t) return !n;
                            for (t = Ot(t); n--;) {
                                var s = i[n],
                                    o = e[s],
                                    a = t[s];
                                if (a === r && !(s in t) || !o(a)) return !1
                            }
                            return !0
                        }

                        function ci(t, e, n) {
                            if ("function" != typeof t) throw new Rt(i);
                            return Rs((function() {
                                t.apply(r, n)
                            }), e)
                        }

                        function hi(t, e, r, i) {
                            var n = -1,
                                s = Te,
                                o = !0,
                                a = t.length,
                                c = [],
                                h = e.length;
                            if (!a) return c;
                            r && (e = je(e, Qe(r))), i ? (s = Ne, o = !1) : e.length >= 200 && (s = Xe, o = !1, e = new Fr(e));
                            t: for (; ++n < a;) {
                                var u = t[n],
                                    l = null == r ? u : r(u);
                                if (u = i || 0 !== u ? u : 0, o && l === l) {
                                    for (var p = h; p--;)
                                        if (e[p] === l) continue t;
                                    c.push(u)
                                } else s(e, l, i) || c.push(u)
                            }
                            return c
                        }
                        zr.templateSettings = {
                            escape: J,
                            evaluate: Q,
                            interpolate: Y,
                            variable: "",
                            imports: {
                                _: zr
                            }
                        }, zr.prototype = $r.prototype, zr.prototype.constructor = zr, Ur.prototype = kr($r.prototype), Ur.prototype.constructor = Ur, Hr.prototype = kr($r.prototype), Hr.prototype.constructor = Hr, Vr.prototype.clear = function() {
                            this.__data__ = xr ? xr(null) : {}, this.size = 0
                        }, Vr.prototype.delete = function(t) {
                            var e = this.has(t) && delete this.__data__[t];
                            return this.size -= e ? 1 : 0, e
                        }, Vr.prototype.get = function(t) {
                            var e = this.__data__;
                            if (xr) {
                                var i = e[t];
                                return i === n ? r : i
                            }
                            return qt.call(e, t) ? e[t] : r
                        }, Vr.prototype.has = function(t) {
                            var e = this.__data__;
                            return xr ? e[t] !== r : qt.call(e, t)
                        }, Vr.prototype.set = function(t, e) {
                            var i = this.__data__;
                            return this.size += this.has(t) ? 0 : 1, i[t] = xr && e === r ? n : e, this
                        }, Br.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, Br.prototype.delete = function(t) {
                            var e = this.__data__,
                                r = ti(e, t);
                            return !(r < 0) && (r == e.length - 1 ? e.pop() : Gt.call(e, r, 1), --this.size, !0)
                        }, Br.prototype.get = function(t) {
                            var e = this.__data__,
                                i = ti(e, t);
                            return i < 0 ? r : e[i][1]
                        }, Br.prototype.has = function(t) {
                            return ti(this.__data__, t) > -1
                        }, Br.prototype.set = function(t, e) {
                            var r = this.__data__,
                                i = ti(r, t);
                            return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
                        }, Kr.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new Vr,
                                map: new(Ir || Br),
                                string: new Vr
                            }
                        }, Kr.prototype.delete = function(t) {
                            var e = cs(this, t).delete(t);
                            return this.size -= e ? 1 : 0, e
                        }, Kr.prototype.get = function(t) {
                            return cs(this, t).get(t)
                        }, Kr.prototype.has = function(t) {
                            return cs(this, t).has(t)
                        }, Kr.prototype.set = function(t, e) {
                            var r = cs(this, t),
                                i = r.size;
                            return r.set(t, e), this.size += r.size == i ? 0 : 1, this
                        }, Fr.prototype.add = Fr.prototype.push = function(t) {
                            return this.__data__.set(t, n), this
                        }, Fr.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Zr.prototype.clear = function() {
                            this.__data__ = new Br, this.size = 0
                        }, Zr.prototype.delete = function(t) {
                            var e = this.__data__,
                                r = e.delete(t);
                            return this.size = e.size, r
                        }, Zr.prototype.get = function(t) {
                            return this.__data__.get(t)
                        }, Zr.prototype.has = function(t) {
                            return this.__data__.has(t)
                        }, Zr.prototype.set = function(t, e) {
                            var r = this.__data__;
                            if (r instanceof Br) {
                                var i = r.__data__;
                                if (!Ir || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                                r = this.__data__ = new Kr(i)
                            }
                            return r.set(t, e), this.size = r.size, this
                        };
                        var ui = Nn(mi),
                            li = Nn(wi, !0);

                        function pi(t, e) {
                            var r = !0;
                            return ui(t, (function(t, i, n) {
                                return r = !!e(t, i, n)
                            })), r
                        }

                        function fi(t, e, i) {
                            for (var n = -1, s = t.length; ++n < s;) {
                                var o = t[n],
                                    a = e(o);
                                if (null != a && (c === r ? a === a && !aa(a) : i(a, c))) var c = a,
                                    h = o
                            }
                            return h
                        }

                        function di(t, e) {
                            var r = [];
                            return ui(t, (function(t, i, n) {
                                e(t, i, n) && r.push(t)
                            })), r
                        }

                        function gi(t, e, r, i, n) {
                            var s = -1,
                                o = t.length;
                            for (r || (r = vs), n || (n = []); ++s < o;) {
                                var a = t[s];
                                e > 0 && r(a) ? e > 1 ? gi(a, e - 1, r, i, n) : Le(n, a) : i || (n[n.length] = a)
                            }
                            return n
                        }
                        var vi = jn(),
                            yi = jn(!0);

                        function mi(t, e) {
                            return t && vi(t, e, Aa)
                        }

                        function wi(t, e) {
                            return t && yi(t, e, Aa)
                        }

                        function _i(t, e) {
                            return Ae(e, (function(e) {
                                return Jo(t[e])
                            }))
                        }

                        function bi(t, e) {
                            for (var i = 0, n = (e = mn(e, t)).length; null != t && i < n;) t = t[qs(e[i++])];
                            return i && i == n ? t : r
                        }

                        function Ei(t, e, r) {
                            var i = e(t);
                            return Vo(t) ? i : Le(i, r(t))
                        }

                        function Ii(t) {
                            return null == t ? t === r ? "[object Undefined]" : "[object Null]" : te && te in Ot(t) ? function(t) {
                                var e = qt.call(t, te),
                                    i = t[te];
                                try {
                                    t[te] = r;
                                    var n = !0
                                } catch {}
                                var s = zt.call(t);
                                return n && (e ? t[te] = i : delete t[te]), s
                            }(t) : function(t) {
                                return zt.call(t)
                            }(t)
                        }

                        function Pi(t, e) {
                            return t > e
                        }

                        function Si(t, e) {
                            return null != t && qt.call(t, e)
                        }

                        function Oi(t, e) {
                            return null != t && e in Ot(t)
                        }

                        function xi(t, e, i) {
                            for (var n = i ? Ne : Te, s = t[0].length, o = t.length, a = o, c = st(o), h = 1 / 0, u = []; a--;) {
                                var l = t[a];
                                a && e && (l = je(l, Qe(e))), h = yr(l.length, h), c[a] = !i && (e || s >= 120 && l.length >= 120) ? new Fr(a && l) : r
                            }
                            l = t[0];
                            var p = -1,
                                f = c[0];
                            t: for (; ++p < s && u.length < h;) {
                                var d = l[p],
                                    g = e ? e(d) : d;
                                if (d = i || 0 !== d ? d : 0, !(f ? Xe(f, g) : n(u, g, i))) {
                                    for (a = o; --a;) {
                                        var v = c[a];
                                        if (!(v ? Xe(v, g) : n(t[a], g, i))) continue t
                                    }
                                    f && f.push(g), u.push(d)
                                }
                            }
                            return u
                        }

                        function Ci(t, e, i) {
                            var n = null == (t = Os(t, e = mn(e, t))) ? t : t[qs(Ws(e))];
                            return null == n ? r : Se(n, t, i)
                        }

                        function Ri(t) {
                            return ta(t) && Ii(t) == v
                        }

                        function Ai(t, e, i, n, s) {
                            return t === e || (null == t || null == e || !ta(t) && !ta(e) ? t !== t && e !== e : function(t, e, i, n, s, o) {
                                var a = Vo(t),
                                    c = Vo(e),
                                    h = a ? y : fs(t),
                                    u = c ? y : fs(e);
                                h = h == v ? S : h, u = u == v ? S : u;
                                var l = h == S,
                                    p = u == S,
                                    f = h == u;
                                if (f && Zo(t)) {
                                    if (!Zo(e)) return !1;
                                    a = !0, l = !1
                                }
                                if (f && !l) return o || (o = new Zr), a || ca(t) ? ts(t, e, i, n, s, o) : function(t, e, r, i, n, s, o) {
                                    switch (r) {
                                        case j:
                                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                            t = t.buffer, e = e.buffer;
                                        case N:
                                            return !(t.byteLength != e.byteLength || !s(new Bt(t), new Bt(e)));
                                        case m:
                                        case w:
                                        case P:
                                            return ko(+t, +e);
                                        case _:
                                            return t.name == e.name && t.message == e.message;
                                        case x:
                                        case R:
                                            return t == e + "";
                                        case I:
                                            var a = or;
                                        case C:
                                            var c = 1 & i;
                                            if (a || (a = hr), t.size != e.size && !c) return !1;
                                            var h = o.get(t);
                                            if (h) return h == e;
                                            i |= 2, o.set(t, e);
                                            var u = ts(a(t), a(e), i, n, s, o);
                                            return o.delete(t), u;
                                        case A:
                                            if (Dr) return Dr.call(t) == Dr.call(e)
                                    }
                                    return !1
                                }(t, e, h, i, n, s, o);
                                if (!(1 & i)) {
                                    var d = l && qt.call(t, "__wrapped__"),
                                        g = p && qt.call(e, "__wrapped__");
                                    if (d || g) {
                                        var b = d ? t.value() : t,
                                            E = g ? e.value() : e;
                                        return o || (o = new Zr), s(b, E, i, n, o)
                                    }
                                }
                                return !!f && (o || (o = new Zr), function(t, e, i, n, s, o) {
                                    var a = 1 & i,
                                        c = rs(t),
                                        h = c.length,
                                        u = rs(e),
                                        l = u.length;
                                    if (h != l && !a) return !1;
                                    for (var p = h; p--;) {
                                        var f = c[p];
                                        if (!(a ? f in e : qt.call(e, f))) return !1
                                    }
                                    var d = o.get(t),
                                        g = o.get(e);
                                    if (d && g) return d == e && g == t;
                                    var v = !0;
                                    o.set(t, e), o.set(e, t);
                                    for (var y = a; ++p < h;) {
                                        var m = t[f = c[p]],
                                            w = e[f];
                                        if (n) var _ = a ? n(w, m, f, e, t, o) : n(m, w, f, t, e, o);
                                        if (!(_ === r ? m === w || s(m, w, i, n, o) : _)) {
                                            v = !1;
                                            break
                                        }
                                        y || (y = "constructor" == f)
                                    }
                                    if (v && !y) {
                                        var b = t.constructor,
                                            E = e.constructor;
                                        b != E && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof E && E instanceof E) && (v = !1)
                                    }
                                    return o.delete(t), o.delete(e), v
                                }(t, e, i, n, s, o))
                            }(t, e, i, n, Ai, s))
                        }

                        function Ti(t, e, i, n) {
                            var s = i.length,
                                o = s,
                                a = !n;
                            if (null == t) return !o;
                            for (t = Ot(t); s--;) {
                                var c = i[s];
                                if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                            }
                            for (; ++s < o;) {
                                var h = (c = i[s])[0],
                                    u = t[h],
                                    l = c[1];
                                if (a && c[2]) {
                                    if (u === r && !(h in t)) return !1
                                } else {
                                    var p = new Zr;
                                    if (n) var f = n(u, l, h, t, e, p);
                                    if (!(f === r ? Ai(l, u, 3, n, p) : f)) return !1
                                }
                            }
                            return !0
                        }

                        function Ni(t) {
                            return !(!Xo(t) || function(t) {
                                return !!Mt && Mt in t
                            }(t)) && (Jo(t) ? Ut : vt).test(Ds(t))
                        }

                        function ji(t) {
                            return "function" == typeof t ? t : null == t ? rc : "object" == typeof t ? Vo(t) ? ki(t[0], t[1]) : zi(t) : lc(t)
                        }

                        function Li(t) {
                            if (!Es(t)) return gr(t);
                            var e = [];
                            for (var r in Ot(t)) qt.call(t, r) && "constructor" != r && e.push(r);
                            return e
                        }

                        function qi(t) {
                            if (!Xo(t)) return function(t) {
                                var e = [];
                                if (null != t)
                                    for (var r in Ot(t)) e.push(r);
                                return e
                            }(t);
                            var e = Es(t),
                                r = [];
                            for (var i in t) "constructor" == i && (e || !qt.call(t, i)) || r.push(i);
                            return r
                        }

                        function Di(t, e) {
                            return t < e
                        }

                        function Mi(t, e) {
                            var r = -1,
                                i = Ko(t) ? st(t.length) : [];
                            return ui(t, (function(t, n, s) {
                                i[++r] = e(t, n, s)
                            })), i
                        }

                        function zi(t) {
                            var e = hs(t);
                            return 1 == e.length && e[0][2] ? Ps(e[0][0], e[0][1]) : function(r) {
                                return r === t || Ti(r, t, e)
                            }
                        }

                        function ki(t, e) {
                            return ws(t) && Is(e) ? Ps(qs(t), e) : function(i) {
                                var n = Sa(i, t);
                                return n === r && n === e ? Oa(i, t) : Ai(e, n, 3)
                            }
                        }

                        function $i(t, e, i, n, s) {
                            t !== e && vi(e, (function(o, a) {
                                if (s || (s = new Zr), Xo(o)) ! function(t, e, i, n, s, o, a) {
                                    var c = xs(t, i),
                                        h = xs(e, i),
                                        u = a.get(h);
                                    if (u) return void Yr(t, i, u);
                                    var l = o ? o(c, h, i + "", t, e, a) : r,
                                        p = l === r;
                                    if (p) {
                                        var f = Vo(h),
                                            d = !f && Zo(h),
                                            g = !f && !d && ca(h);
                                        l = h, f || d || g ? Vo(c) ? l = c : Fo(c) ? l = Cn(c) : d ? (p = !1, l = En(h, !0)) : g ? (p = !1, l = Pn(h, !0)) : l = [] : ia(h) || Ho(h) ? (l = c, Ho(c) ? l = va(c) : (!Xo(c) || Jo(c)) && (l = gs(h))) : p = !1
                                    }
                                    p && (a.set(h, l), s(l, h, n, o, a), a.delete(h)), Yr(t, i, l)
                                }(t, e, a, i, $i, n, s);
                                else {
                                    var c = n ? n(xs(t, a), o, a + "", t, e, s) : r;
                                    c === r && (c = o), Yr(t, a, c)
                                }
                            }), Ta)
                        }

                        function Ui(t, e) {
                            var i = t.length;
                            if (i) return ys(e += e < 0 ? i : 0, i) ? t[e] : r
                        }

                        function Hi(t, e, r) {
                            e = e.length ? je(e, (function(t) {
                                return Vo(t) ? function(e) {
                                    return bi(e, 1 === t.length ? t[0] : t)
                                } : t
                            })) : [rc];
                            var i = -1;
                            e = je(e, Qe(as()));
                            var n = Mi(t, (function(t, r, n) {
                                var s = je(e, (function(e) {
                                    return e(t)
                                }));
                                return {
                                    criteria: s,
                                    index: ++i,
                                    value: t
                                }
                            }));
                            return function(t, e) {
                                var r = t.length;
                                for (t.sort(e); r--;) t[r] = t[r].value;
                                return t
                            }(n, (function(t, e) {
                                return function(t, e, r) {
                                    for (var i = -1, n = t.criteria, s = e.criteria, o = n.length, a = r.length; ++i < o;) {
                                        var c = Sn(n[i], s[i]);
                                        if (c) return i >= a ? c : c * ("desc" == r[i] ? -1 : 1)
                                    }
                                    return t.index - e.index
                                }(t, e, r)
                            }))
                        }

                        function Vi(t, e, r) {
                            for (var i = -1, n = e.length, s = {}; ++i < n;) {
                                var o = e[i],
                                    a = bi(t, o);
                                r(a, o) && Qi(s, mn(o, t), a)
                            }
                            return s
                        }

                        function Bi(t, e, r, i) {
                            var n = i ? He : Ue,
                                s = -1,
                                o = e.length,
                                a = t;
                            for (t === e && (e = Cn(e)), r && (a = je(t, Qe(r))); ++s < o;)
                                for (var c = 0, h = e[s], u = r ? r(h) : h;
                                    (c = n(a, u, c, i)) > -1;) a !== t && Gt.call(a, c, 1), Gt.call(t, c, 1);
                            return t
                        }

                        function Ki(t, e) {
                            for (var r = t ? e.length : 0, i = r - 1; r--;) {
                                var n = e[r];
                                if (r == i || n !== s) {
                                    var s = n;
                                    ys(n) ? Gt.call(t, n, 1) : un(t, n)
                                }
                            }
                            return t
                        }

                        function Fi(t, e) {
                            return t + ge(_r() * (e - t + 1))
                        }

                        function Zi(t, e) {
                            var r = "";
                            if (!t || e < 1 || e > p) return r;
                            do {
                                e % 2 && (r += t), (e = ge(e / 2)) && (t += t)
                            } while (e);
                            return r
                        }

                        function Wi(t, e) {
                            return As(Ss(t, e, rc), t + "")
                        }

                        function Gi(t) {
                            return Gr(ka(t))
                        }

                        function Ji(t, e) {
                            var r = ka(t);
                            return js(r, si(e, 0, r.length))
                        }

                        function Qi(t, e, i, n) {
                            if (!Xo(t)) return t;
                            for (var s = -1, o = (e = mn(e, t)).length, a = o - 1, c = t; null != c && ++s < o;) {
                                var h = qs(e[s]),
                                    u = i;
                                if ("__proto__" === h || "constructor" === h || "prototype" === h) return t;
                                if (s != a) {
                                    var l = c[h];
                                    (u = n ? n(l, h, c) : r) === r && (u = Xo(l) ? l : ys(e[s + 1]) ? [] : {})
                                }
                                Xr(c, h, u), c = c[h]
                            }
                            return t
                        }
                        var Yi = Cr ? function(t, e) {
                                return Cr.set(t, e), t
                            } : rc,
                            Xi = re ? function(t, e) {
                                return re(t, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: Xa(e),
                                    writable: !0
                                })
                            } : rc;

                        function tn(t) {
                            return js(ka(t))
                        }

                        function en(t, e, r) {
                            var i = -1,
                                n = t.length;
                            e < 0 && (e = -e > n ? 0 : n + e), (r = r > n ? n : r) < 0 && (r += n), n = e > r ? 0 : r - e >>> 0, e >>>= 0;
                            for (var s = st(n); ++i < n;) s[i] = t[i + e];
                            return s
                        }

                        function rn(t, e) {
                            var r;
                            return ui(t, (function(t, i, n) {
                                return !(r = e(t, i, n))
                            })), !!r
                        }

                        function nn(t, e, r) {
                            var i = 0,
                                n = null == t ? i : t.length;
                            if ("number" == typeof e && e === e && n <= 2147483647) {
                                for (; i < n;) {
                                    var s = i + n >>> 1,
                                        o = t[s];
                                    null !== o && !aa(o) && (r ? o <= e : o < e) ? i = s + 1 : n = s
                                }
                                return n
                            }
                            return sn(t, e, rc, r)
                        }

                        function sn(t, e, i, n) {
                            var s = 0,
                                o = null == t ? 0 : t.length;
                            if (0 === o) return 0;
                            for (var a = (e = i(e)) !== e, c = null === e, h = aa(e), u = e === r; s < o;) {
                                var l = ge((s + o) / 2),
                                    p = i(t[l]),
                                    f = p !== r,
                                    d = null === p,
                                    g = p === p,
                                    v = aa(p);
                                if (a) var y = n || g;
                                else y = u ? g && (n || f) : c ? g && f && (n || !d) : h ? g && f && !d && (n || !v) : !d && !v && (n ? p <= e : p < e);
                                y ? s = l + 1 : o = l
                            }
                            return yr(o, 4294967294)
                        }

                        function on(t, e) {
                            for (var r = -1, i = t.length, n = 0, s = []; ++r < i;) {
                                var o = t[r],
                                    a = e ? e(o) : o;
                                if (!r || !ko(a, c)) {
                                    var c = a;
                                    s[n++] = 0 === o ? 0 : o
                                }
                            }
                            return s
                        }

                        function an(t) {
                            return "number" == typeof t ? t : aa(t) ? f : +t
                        }

                        function cn(t) {
                            if ("string" == typeof t) return t;
                            if (Vo(t)) return je(t, cn) + "";
                            if (aa(t)) return Mr ? Mr.call(t) : "";
                            var e = t + "";
                            return "0" == e && 1 / t == -l ? "-0" : e
                        }

                        function hn(t, e, r) {
                            var i = -1,
                                n = Te,
                                s = t.length,
                                o = !0,
                                a = [],
                                c = a;
                            if (r) o = !1, n = Ne;
                            else if (s >= 200) {
                                var h = e ? null : Wn(t);
                                if (h) return hr(h);
                                o = !1, n = Xe, c = new Fr
                            } else c = e ? [] : a;
                            t: for (; ++i < s;) {
                                var u = t[i],
                                    l = e ? e(u) : u;
                                if (u = r || 0 !== u ? u : 0, o && l === l) {
                                    for (var p = c.length; p--;)
                                        if (c[p] === l) continue t;
                                    e && c.push(l), a.push(u)
                                } else n(c, l, r) || (c !== a && c.push(l), a.push(u))
                            }
                            return a
                        }

                        function un(t, e) {
                            return null == (t = Os(t, e = mn(e, t))) || delete t[qs(Ws(e))]
                        }

                        function ln(t, e, r, i) {
                            return Qi(t, e, r(bi(t, e)), i)
                        }

                        function pn(t, e, r, i) {
                            for (var n = t.length, s = i ? n : -1;
                                (i ? s-- : ++s < n) && e(t[s], s, t););
                            return r ? en(t, i ? 0 : s, i ? s + 1 : n) : en(t, i ? s + 1 : 0, i ? n : s)
                        }

                        function fn(t, e) {
                            var r = t;
                            return r instanceof Hr && (r = r.value()), qe(e, (function(t, e) {
                                return e.func.apply(e.thisArg, Le([t], e.args))
                            }), r)
                        }

                        function dn(t, e, r) {
                            var i = t.length;
                            if (i < 2) return i ? hn(t[0]) : [];
                            for (var n = -1, s = st(i); ++n < i;)
                                for (var o = t[n], a = -1; ++a < i;) a != n && (s[n] = hi(s[n] || o, t[a], e, r));
                            return hn(gi(s, 1), e, r)
                        }

                        function gn(t, e, i) {
                            for (var n = -1, s = t.length, o = e.length, a = {}; ++n < s;) {
                                var c = n < o ? e[n] : r;
                                i(a, t[n], c)
                            }
                            return a
                        }

                        function vn(t) {
                            return Fo(t) ? t : []
                        }

                        function yn(t) {
                            return "function" == typeof t ? t : rc
                        }

                        function mn(t, e) {
                            return Vo(t) ? t : ws(t, e) ? [t] : Ls(ya(t))
                        }
                        var wn = Wi;

                        function _n(t, e, i) {
                            var n = t.length;
                            return i = i === r ? n : i, !e && i >= n ? t : en(t, e, i)
                        }
                        var bn = ce || function(t) {
                            return fe.clearTimeout(t)
                        };

                        function En(t, e) {
                            if (e) return t.slice();
                            var r = t.length,
                                i = Kt ? Kt(r) : new t.constructor(r);
                            return t.copy(i), i
                        }

                        function In(t) {
                            var e = new t.constructor(t.byteLength);
                            return new Bt(e).set(new Bt(t)), e
                        }

                        function Pn(t, e) {
                            var r = e ? In(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.length)
                        }

                        function Sn(t, e) {
                            if (t !== e) {
                                var i = t !== r,
                                    n = null === t,
                                    s = t === t,
                                    o = aa(t),
                                    a = e !== r,
                                    c = null === e,
                                    h = e === e,
                                    u = aa(e);
                                if (!c && !u && !o && t > e || o && a && h && !c && !u || n && a && h || !i && h || !s) return 1;
                                if (!n && !o && !u && t < e || u && i && s && !n && !o || c && i && s || !a && s || !h) return -1
                            }
                            return 0
                        }

                        function On(t, e, r, i) {
                            for (var n = -1, s = t.length, o = r.length, a = -1, c = e.length, h = vr(s - o, 0), u = st(c + h), l = !i; ++a < c;) u[a] = e[a];
                            for (; ++n < o;)(l || n < s) && (u[r[n]] = t[n]);
                            for (; h--;) u[a++] = t[n++];
                            return u
                        }

                        function xn(t, e, r, i) {
                            for (var n = -1, s = t.length, o = -1, a = r.length, c = -1, h = e.length, u = vr(s - a, 0), l = st(u + h), p = !i; ++n < u;) l[n] = t[n];
                            for (var f = n; ++c < h;) l[f + c] = e[c];
                            for (; ++o < a;)(p || n < s) && (l[f + r[o]] = t[n++]);
                            return l
                        }

                        function Cn(t, e) {
                            var r = -1,
                                i = t.length;
                            for (e || (e = st(i)); ++r < i;) e[r] = t[r];
                            return e
                        }

                        function Rn(t, e, i, n) {
                            var s = !i;
                            i || (i = {});
                            for (var o = -1, a = e.length; ++o < a;) {
                                var c = e[o],
                                    h = n ? n(i[c], t[c], c, i, t) : r;
                                h === r && (h = t[c]), s ? ii(i, c, h) : Xr(i, c, h)
                            }
                            return i
                        }

                        function An(t, e) {
                            return function(r, i) {
                                var n = Vo(r) ? Oe : ei,
                                    s = e ? e() : {};
                                return n(r, t, as(i, 2), s)
                            }
                        }

                        function Tn(t) {
                            return Wi((function(e, i) {
                                var n = -1,
                                    s = i.length,
                                    o = s > 1 ? i[s - 1] : r,
                                    a = s > 2 ? i[2] : r;
                                for (o = t.length > 3 && "function" == typeof o ? (s--, o) : r, a && ms(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), e = Ot(e); ++n < s;) {
                                    var c = i[n];
                                    c && t(e, c, n, o)
                                }
                                return e
                            }))
                        }

                        function Nn(t, e) {
                            return function(r, i) {
                                if (null == r) return r;
                                if (!Ko(r)) return t(r, i);
                                for (var n = r.length, s = e ? n : -1, o = Ot(r);
                                    (e ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                return r
                            }
                        }

                        function jn(t) {
                            return function(e, r, i) {
                                for (var n = -1, s = Ot(e), o = i(e), a = o.length; a--;) {
                                    var c = o[t ? a : ++n];
                                    if (!1 === r(s[c], c, s)) break
                                }
                                return e
                            }
                        }

                        function Ln(t) {
                            return function(e) {
                                var i = sr(e = ya(e)) ? lr(e) : r,
                                    n = i ? i[0] : e.charAt(0),
                                    s = i ? _n(i, 1).join("") : e.slice(1);
                                return n[t]() + s
                            }
                        }

                        function qn(t) {
                            return function(e) {
                                return qe(Ja(Ha(e).replace(Yt, "")), t, "")
                            }
                        }

                        function Dn(t) {
                            return function() {
                                var e = arguments;
                                switch (e.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e[0]);
                                    case 2:
                                        return new t(e[0], e[1]);
                                    case 3:
                                        return new t(e[0], e[1], e[2]);
                                    case 4:
                                        return new t(e[0], e[1], e[2], e[3]);
                                    case 5:
                                        return new t(e[0], e[1], e[2], e[3], e[4]);
                                    case 6:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                    case 7:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                }
                                var r = kr(t.prototype),
                                    i = t.apply(r, e);
                                return Xo(i) ? i : r
                            }
                        }

                        function Mn(t) {
                            return function(e, i, n) {
                                var s = Ot(e);
                                if (!Ko(e)) {
                                    var o = as(i, 3);
                                    e = Aa(e), i = function(t) {
                                        return o(s[t], t, s)
                                    }
                                }
                                var a = t(e, i, n);
                                return a > -1 ? s[o ? e[a] : a] : r
                            }
                        }

                        function zn(t) {
                            return es((function(e) {
                                var n = e.length,
                                    s = n,
                                    o = Ur.prototype.thru;
                                for (t && e.reverse(); s--;) {
                                    var a = e[s];
                                    if ("function" != typeof a) throw new Rt(i);
                                    if (o && !c && "wrapper" == ss(a)) var c = new Ur([], !0)
                                }
                                for (s = c ? s : n; ++s < n;) {
                                    var h = ss(a = e[s]),
                                        u = "wrapper" == h ? ns(a) : r;
                                    c = u && _s(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[ss(u[0])].apply(c, u[3]) : 1 == a.length && _s(a) ? c[h]() : c.thru(a)
                                }
                                return function() {
                                    var t = arguments,
                                        r = t[0];
                                    if (c && 1 == t.length && Vo(r)) return c.plant(r).value();
                                    for (var i = 0, s = n ? e[i].apply(this, t) : r; ++i < n;) s = e[i].call(this, s);
                                    return s
                                }
                            }))
                        }

                        function kn(t, e, i, n, s, o, a, c, u, l) {
                            var p = e & h,
                                f = 1 & e,
                                d = 2 & e,
                                g = 24 & e,
                                v = 512 & e,
                                y = d ? r : Dn(t);
                            return function h() {
                                for (var m = arguments.length, w = st(m), _ = m; _--;) w[_] = arguments[_];
                                if (g) var b = os(h),
                                    E = function(t, e) {
                                        for (var r = t.length, i = 0; r--;) t[r] === e && ++i;
                                        return i
                                    }(w, b);
                                if (n && (w = On(w, n, s, g)), o && (w = xn(w, o, a, g)), m -= E, g && m < l) {
                                    var I = cr(w, b);
                                    return Fn(t, e, kn, h.placeholder, i, w, I, c, u, l - m)
                                }
                                var P = f ? i : this,
                                    S = d ? P[t] : t;
                                return m = w.length, c ? w = function(t, e) {
                                    for (var i = t.length, n = yr(e.length, i), s = Cn(t); n--;) {
                                        var o = e[n];
                                        t[n] = ys(o, i) ? s[o] : r
                                    }
                                    return t
                                }(w, c) : v && m > 1 && w.reverse(), p && u < m && (w.length = u), this && this !== fe && this instanceof h && (S = y || Dn(S)), S.apply(P, w)
                            }
                        }

                        function $n(t, e) {
                            return function(r, i) {
                                return function(t, e, r, i) {
                                    return mi(t, (function(t, n, s) {
                                        e(i, r(t), n, s)
                                    })), i
                                }(r, t, e(i), {})
                            }
                        }

                        function Un(t, e) {
                            return function(i, n) {
                                var s;
                                if (i === r && n === r) return e;
                                if (i !== r && (s = i), n !== r) {
                                    if (s === r) return n;
                                    "string" == typeof i || "string" == typeof n ? (i = cn(i), n = cn(n)) : (i = an(i), n = an(n)), s = t(i, n)
                                }
                                return s
                            }
                        }

                        function Hn(t) {
                            return es((function(e) {
                                return e = je(e, Qe(as())), Wi((function(r) {
                                    var i = this;
                                    return t(e, (function(t) {
                                        return Se(t, i, r)
                                    }))
                                }))
                            }))
                        }

                        function Vn(t, e) {
                            var i = (e = e === r ? " " : cn(e)).length;
                            if (i < 2) return i ? Zi(e, t) : e;
                            var n = Zi(e, de(t / ur(e)));
                            return sr(e) ? _n(lr(n), 0, t).join("") : n.slice(0, t)
                        }

                        function Bn(t) {
                            return function(e, i, n) {
                                return n && "number" != typeof n && ms(e, i, n) && (i = n = r), e = pa(e), i === r ? (i = e, e = 0) : i = pa(i),
                                    function(t, e, r, i) {
                                        for (var n = -1, s = vr(de((e - t) / (r || 1)), 0), o = st(s); s--;) o[i ? s : ++n] = t, t += r;
                                        return o
                                    }(e, i, n = n === r ? e < i ? 1 : -1 : pa(n), t)
                            }
                        }

                        function Kn(t) {
                            return function(e, r) {
                                return "string" == typeof e && "string" == typeof r || (e = ga(e), r = ga(r)), t(e, r)
                            }
                        }

                        function Fn(t, e, i, n, s, o, h, u, l, p) {
                            var f = 8 & e;
                            e |= f ? a : c, 4 & (e &= ~(f ? c : a)) || (e &= -4);
                            var d = [t, e, s, f ? o : r, f ? h : r, f ? r : o, f ? r : h, u, l, p],
                                g = i.apply(r, d);
                            return _s(t) && Cs(g, d), g.placeholder = n, Ts(g, t, e)
                        }

                        function Zn(t) {
                            var e = St[t];
                            return function(t, r) {
                                if (t = ga(t), (r = null == r ? 0 : yr(fa(r), 292)) && ze(t)) {
                                    var i = (ya(t) + "e").split("e");
                                    return +((i = (ya(e(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                }
                                return e(t)
                            }
                        }
                        var Wn = Sr && 1 / hr(new Sr([, -0]))[1] == l ? function(t) {
                            return new Sr(t)
                        } : ac;

                        function Gn(t) {
                            return function(e) {
                                var r = fs(e);
                                return r == I ? or(e) : r == C ? function(t) {
                                    var e = -1,
                                        r = Array(t.size);
                                    return t.forEach((function(t) {
                                        r[++e] = [t, t]
                                    })), r
                                }(e) : function(t, e) {
                                    return je(e, (function(e) {
                                        return [e, t[e]]
                                    }))
                                }(e, t(e))
                            }
                        }

                        function Jn(t, e, n, l, p, f, d, g) {
                            var v = 2 & e;
                            if (!v && "function" != typeof t) throw new Rt(i);
                            var y = l ? l.length : 0;
                            if (y || (e &= -97, l = p = r), d = d === r ? d : vr(fa(d), 0), g = g === r ? g : fa(g), y -= p ? p.length : 0, e & c) {
                                var m = l,
                                    w = p;
                                l = p = r
                            }
                            var _ = v ? r : ns(t),
                                b = [t, e, n, l, p, m, w, f, d, g];
                            if (_ && function(t, e) {
                                    var r = t[1],
                                        i = e[1],
                                        n = r | i,
                                        o = n < 131,
                                        a = i == h && 8 == r || i == h && r == u && t[7].length <= e[8] || 384 == i && e[7].length <= e[8] && 8 == r;
                                    if (!o && !a) return t;
                                    1 & i && (t[2] = e[2], n |= 1 & r ? 0 : 4);
                                    var c = e[3];
                                    if (c) {
                                        var l = t[3];
                                        t[3] = l ? On(l, c, e[4]) : c, t[4] = l ? cr(t[3], s) : e[4]
                                    }
                                    c = e[5], c && (l = t[5], t[5] = l ? xn(l, c, e[6]) : c, t[6] = l ? cr(t[5], s) : e[6]), c = e[7], c && (t[7] = c), i & h && (t[8] = null == t[8] ? e[8] : yr(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = n
                                }(b, _), t = b[0], e = b[1], n = b[2], l = b[3], p = b[4], !(g = b[9] = b[9] === r ? v ? 0 : t.length : vr(b[9] - y, 0)) && 24 & e && (e &= -25), e && 1 != e) E = 8 == e || e == o ? function(t, e, i) {
                                var n = Dn(t);
                                return function s() {
                                    for (var o = arguments.length, a = st(o), c = o, h = os(s); c--;) a[c] = arguments[c];
                                    var u = o < 3 && a[0] !== h && a[o - 1] !== h ? [] : cr(a, h);
                                    return (o -= u.length) < i ? Fn(t, e, kn, s.placeholder, r, a, u, r, r, i - o) : Se(this && this !== fe && this instanceof s ? n : t, this, a)
                                }
                            }(t, e, g) : e != a && 33 != e || p.length ? kn.apply(r, b) : function(t, e, r, i) {
                                var n = 1 & e,
                                    s = Dn(t);
                                return function e() {
                                    for (var o = -1, a = arguments.length, c = -1, h = i.length, u = st(h + a), l = this && this !== fe && this instanceof e ? s : t; ++c < h;) u[c] = i[c];
                                    for (; a--;) u[c++] = arguments[++o];
                                    return Se(l, n ? r : this, u)
                                }
                            }(t, e, n, l);
                            else var E = function(t, e, r) {
                                var i = 1 & e,
                                    n = Dn(t);
                                return function e() {
                                    return (this && this !== fe && this instanceof e ? n : t).apply(i ? r : this, arguments)
                                }
                            }(t, e, n);
                            return Ts((_ ? Yi : Cs)(E, b), t, e)
                        }

                        function Qn(t, e, i, n) {
                            return t === r || ko(t, Nt[i]) && !qt.call(n, i) ? e : t
                        }

                        function Yn(t, e, i, n, s, o) {
                            return Xo(t) && Xo(e) && (o.set(e, t), $i(t, e, r, Yn, o), o.delete(e)), t
                        }

                        function Xn(t) {
                            return ia(t) ? r : t
                        }

                        function ts(t, e, i, n, s, o) {
                            var a = 1 & i,
                                c = t.length,
                                h = e.length;
                            if (c != h && !(a && h > c)) return !1;
                            var u = o.get(t),
                                l = o.get(e);
                            if (u && l) return u == e && l == t;
                            var p = -1,
                                f = !0,
                                d = 2 & i ? new Fr : r;
                            for (o.set(t, e), o.set(e, t); ++p < c;) {
                                var g = t[p],
                                    v = e[p];
                                if (n) var y = a ? n(v, g, p, e, t, o) : n(g, v, p, t, e, o);
                                if (y !== r) {
                                    if (y) continue;
                                    f = !1;
                                    break
                                }
                                if (d) {
                                    if (!Me(e, (function(t, e) {
                                            if (!Xe(d, e) && (g === t || s(g, t, i, n, o))) return d.push(e)
                                        }))) {
                                        f = !1;
                                        break
                                    }
                                } else if (g !== v && !s(g, v, i, n, o)) {
                                    f = !1;
                                    break
                                }
                            }
                            return o.delete(t), o.delete(e), f
                        }

                        function es(t) {
                            return As(Ss(t, r, Vs), t + "")
                        }

                        function rs(t) {
                            return Ei(t, Aa, ls)
                        }

                        function is(t) {
                            return Ei(t, Ta, ps)
                        }
                        var ns = Cr ? function(t) {
                            return Cr.get(t)
                        } : ac;

                        function ss(t) {
                            for (var e = t.name + "", r = Rr[e], i = qt.call(Rr, e) ? r.length : 0; i--;) {
                                var n = r[i],
                                    s = n.func;
                                if (null == s || s == t) return n.name
                            }
                            return e
                        }

                        function os(t) {
                            return (qt.call(zr, "placeholder") ? zr : t).placeholder
                        }

                        function as() {
                            var t = zr.iteratee || ic;
                            return t = t === ic ? ji : t, arguments.length ? t(arguments[0], arguments[1]) : t
                        }

                        function cs(t, e) {
                            var r = t.__data__;
                            return function(t) {
                                var e = typeof t;
                                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                            }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                        }

                        function hs(t) {
                            for (var e = Aa(t), r = e.length; r--;) {
                                var i = e[r],
                                    n = t[i];
                                e[r] = [i, n, Is(n)]
                            }
                            return e
                        }

                        function us(t, e) {
                            var i = function(t, e) {
                                return null == t ? r : t[e]
                            }(t, e);
                            return Ni(i) ? i : r
                        }
                        var ls = ye ? function(t) {
                                return null == t ? [] : (t = Ot(t), Ae(ye(t), (function(e) {
                                    return Wt.call(t, e)
                                })))
                            } : dc,
                            ps = ye ? function(t) {
                                for (var e = []; t;) Le(e, ls(t)), t = Ft(t);
                                return e
                            } : dc,
                            fs = Ii;

                        function ds(t, e, r) {
                            for (var i = -1, n = (e = mn(e, t)).length, s = !1; ++i < n;) {
                                var o = qs(e[i]);
                                if (!(s = null != t && r(t, o))) break;
                                t = t[o]
                            }
                            return s || ++i != n ? s : !!(n = null == t ? 0 : t.length) && Yo(n) && ys(o, n) && (Vo(t) || Ho(t))
                        }

                        function gs(t) {
                            return "function" != typeof t.constructor || Es(t) ? {} : kr(Ft(t))
                        }

                        function vs(t) {
                            return Vo(t) || Ho(t) || !!(Jt && t && t[Jt])
                        }

                        function ys(t, e) {
                            var r, i = typeof t;
                            return !!(e = null !== (r = e) && void 0 !== r ? r : p) && ("number" == i || "symbol" != i && mt.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function ms(t, e, r) {
                            if (!Xo(r)) return !1;
                            var i = typeof e;
                            return !!("number" == i ? Ko(r) && ys(e, r.length) : "string" == i && e in r) && ko(r[e], t)
                        }

                        function ws(t, e) {
                            if (Vo(t)) return !1;
                            var r = typeof t;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !aa(t)) || (tt.test(t) || !X.test(t) || null != e && t in Ot(e))
                        }

                        function _s(t) {
                            var e = ss(t),
                                r = zr[e];
                            if ("function" != typeof r || !(e in Hr.prototype)) return !1;
                            if (t === r) return !0;
                            var i = ns(r);
                            return !!i && t === i[0]
                        }(Er && fs(new Er(new ArrayBuffer(1))) != j || Ir && fs(new Ir) != I || Pr && fs(Pr.resolve()) != O || Sr && fs(new Sr) != C || Or && fs(new Or) != T) && (fs = function(t) {
                            var e = Ii(t),
                                i = e == S ? t.constructor : r,
                                n = i ? Ds(i) : "";
                            if (n) switch (n) {
                                case Ar:
                                    return j;
                                case Tr:
                                    return I;
                                case Nr:
                                    return O;
                                case jr:
                                    return C;
                                case Lr:
                                    return T
                            }
                            return e
                        });
                        var bs = jt ? Jo : gc;

                        function Es(t) {
                            var e = t && t.constructor;
                            return t === ("function" == typeof e && e.prototype || Nt)
                        }

                        function Is(t) {
                            return t === t && !Xo(t)
                        }

                        function Ps(t, e) {
                            return function(i) {
                                return null != i && (i[t] === e && (e !== r || t in Ot(i)))
                            }
                        }

                        function Ss(t, e, i) {
                            return e = vr(e === r ? t.length - 1 : e, 0),
                                function() {
                                    for (var r = arguments, n = -1, s = vr(r.length - e, 0), o = st(s); ++n < s;) o[n] = r[e + n];
                                    n = -1;
                                    for (var a = st(e + 1); ++n < e;) a[n] = r[n];
                                    return a[e] = i(o), Se(t, this, a)
                                }
                        }

                        function Os(t, e) {
                            return e.length < 2 ? t : bi(t, en(e, 0, -1))
                        }

                        function xs(t, e) {
                            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                        }
                        var Cs = Ns(Yi),
                            Rs = pe || function(t, e) {
                                return fe.setTimeout(t, e)
                            },
                            As = Ns(Xi);

                        function Ts(t, e, r) {
                            var i = e + "";
                            return As(t, function(t, e) {
                                var r = e.length;
                                if (!r) return t;
                                var i = r - 1;
                                return e[i] = (r > 1 ? "& " : "") + e[i], e = e.join(r > 2 ? ", " : " "), t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                            }(i, function(t, e) {
                                return xe(g, (function(r) {
                                    var i = "_." + r[0];
                                    e & r[1] && !Te(t, i) && t.push(i)
                                })), t.sort()
                            }(function(t) {
                                var e = t.match(at);
                                return e ? e[1].split(ct) : []
                            }(i), r)))
                        }

                        function Ns(t) {
                            var e = 0,
                                i = 0;
                            return function() {
                                var n = mr(),
                                    s = 16 - (n - i);
                                if (i = n, s > 0) {
                                    if (++e >= 800) return arguments[0]
                                } else e = 0;
                                return t.apply(r, arguments)
                            }
                        }

                        function js(t, e) {
                            var i = -1,
                                n = t.length,
                                s = n - 1;
                            for (e = e === r ? n : e; ++i < e;) {
                                var o = Fi(i, s),
                                    a = t[o];
                                t[o] = t[i], t[i] = a
                            }
                            return t.length = e, t
                        }
                        var Ls = function(t) {
                            var e = jo(t, (function(t) {
                                    return 500 === r.size && r.clear(), t
                                })),
                                r = e.cache;
                            return e
                        }((function(t) {
                            var e = [];
                            return 46 === t.charCodeAt(0) && e.push(""), t.replace(et, (function(t, r, i, n) {
                                e.push(i ? n.replace(lt, "$1") : r || t)
                            })), e
                        }));

                        function qs(t) {
                            if ("string" == typeof t || aa(t)) return t;
                            var e = t + "";
                            return "0" == e && 1 / t == -l ? "-0" : e
                        }

                        function Ds(t) {
                            if (null != t) {
                                try {
                                    return Lt.call(t)
                                } catch {}
                                try {
                                    return t + ""
                                } catch {}
                            }
                            return ""
                        }

                        function Ms(t) {
                            if (t instanceof Hr) return t.clone();
                            var e = new Ur(t.__wrapped__, t.__chain__);
                            return e.__actions__ = Cn(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                        }
                        var zs = Wi((function(t, e) {
                                return Fo(t) ? hi(t, gi(e, 1, Fo, !0)) : []
                            })),
                            ks = Wi((function(t, e) {
                                var i = Ws(e);
                                return Fo(i) && (i = r), Fo(t) ? hi(t, gi(e, 1, Fo, !0), as(i, 2)) : []
                            })),
                            $s = Wi((function(t, e) {
                                var i = Ws(e);
                                return Fo(i) && (i = r), Fo(t) ? hi(t, gi(e, 1, Fo, !0), r, i) : []
                            }));

                        function Us(t, e, r) {
                            var i = null == t ? 0 : t.length;
                            if (!i) return -1;
                            var n = null == r ? 0 : fa(r);
                            return n < 0 && (n = vr(i + n, 0)), $e(t, as(e, 3), n)
                        }

                        function Hs(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            if (!n) return -1;
                            var s = n - 1;
                            return i !== r && (s = fa(i), s = i < 0 ? vr(n + s, 0) : yr(s, n - 1)), $e(t, as(e, 3), s, !0)
                        }

                        function Vs(t) {
                            return (null == t ? 0 : t.length) ? gi(t, 1) : []
                        }

                        function Bs(t) {
                            return t && t.length ? t[0] : r
                        }
                        var Ks = Wi((function(t) {
                                var e = je(t, vn);
                                return e.length && e[0] === t[0] ? xi(e) : []
                            })),
                            Fs = Wi((function(t) {
                                var e = Ws(t),
                                    i = je(t, vn);
                                return e === Ws(i) ? e = r : i.pop(), i.length && i[0] === t[0] ? xi(i, as(e, 2)) : []
                            })),
                            Zs = Wi((function(t) {
                                var e = Ws(t),
                                    i = je(t, vn);
                                return (e = "function" == typeof e ? e : r) && i.pop(), i.length && i[0] === t[0] ? xi(i, r, e) : []
                            }));

                        function Ws(t) {
                            var e = null == t ? 0 : t.length;
                            return e ? t[e - 1] : r
                        }
                        var Gs = Wi(Js);

                        function Js(t, e) {
                            return t && t.length && e && e.length ? Bi(t, e) : t
                        }
                        var Qs = es((function(t, e) {
                            var r = null == t ? 0 : t.length,
                                i = ni(t, e);
                            return Ki(t, je(e, (function(t) {
                                return ys(t, r) ? +t : t
                            })).sort(Sn)), i
                        }));

                        function Ys(t) {
                            return null == t ? t : br.call(t)
                        }
                        var Xs = Wi((function(t) {
                                return hn(gi(t, 1, Fo, !0))
                            })),
                            to = Wi((function(t) {
                                var e = Ws(t);
                                return Fo(e) && (e = r), hn(gi(t, 1, Fo, !0), as(e, 2))
                            })),
                            eo = Wi((function(t) {
                                var e = Ws(t);
                                return e = "function" == typeof e ? e : r, hn(gi(t, 1, Fo, !0), r, e)
                            }));

                        function ro(t) {
                            if (!t || !t.length) return [];
                            var e = 0;
                            return t = Ae(t, (function(t) {
                                if (Fo(t)) return e = vr(t.length, e), !0
                            })), Ge(e, (function(e) {
                                return je(t, Ke(e))
                            }))
                        }

                        function io(t, e) {
                            if (!t || !t.length) return [];
                            var i = ro(t);
                            return null == e ? i : je(i, (function(t) {
                                return Se(e, r, t)
                            }))
                        }
                        var no = Wi((function(t, e) {
                                return Fo(t) ? hi(t, e) : []
                            })),
                            so = Wi((function(t) {
                                return dn(Ae(t, Fo))
                            })),
                            oo = Wi((function(t) {
                                var e = Ws(t);
                                return Fo(e) && (e = r), dn(Ae(t, Fo), as(e, 2))
                            })),
                            ao = Wi((function(t) {
                                var e = Ws(t);
                                return e = "function" == typeof e ? e : r, dn(Ae(t, Fo), r, e)
                            })),
                            co = Wi(ro);
                        var ho = Wi((function(t) {
                            var e = t.length,
                                i = e > 1 ? t[e - 1] : r;
                            return i = "function" == typeof i ? (t.pop(), i) : r, io(t, i)
                        }));

                        function uo(t) {
                            var e = zr(t);
                            return e.__chain__ = !0, e
                        }

                        function lo(t, e) {
                            return e(t)
                        }
                        var po = es((function(t) {
                            var e = t.length,
                                i = e ? t[0] : 0,
                                n = this.__wrapped__,
                                s = function(e) {
                                    return ni(e, t)
                                };
                            return !(e > 1 || this.__actions__.length) && n instanceof Hr && ys(i) ? ((n = n.slice(i, +i + (e ? 1 : 0))).__actions__.push({
                                func: lo,
                                args: [s],
                                thisArg: r
                            }), new Ur(n, this.__chain__).thru((function(t) {
                                return e && !t.length && t.push(r), t
                            }))) : this.thru(s)
                        }));
                        var fo = An((function(t, e, r) {
                            qt.call(t, r) ? ++t[r] : ii(t, r, 1)
                        }));
                        var go = Mn(Us),
                            vo = Mn(Hs);

                        function yo(t, e) {
                            return (Vo(t) ? xe : ui)(t, as(e, 3))
                        }

                        function mo(t, e) {
                            return (Vo(t) ? Ce : li)(t, as(e, 3))
                        }
                        var wo = An((function(t, e, r) {
                            qt.call(t, r) ? t[r].push(e) : ii(t, r, [e])
                        }));
                        var _o = Wi((function(t, e, r) {
                                var i = -1,
                                    n = "function" == typeof e,
                                    s = Ko(t) ? st(t.length) : [];
                                return ui(t, (function(t) {
                                    s[++i] = n ? Se(e, t, r) : Ci(t, e, r)
                                })), s
                            })),
                            bo = An((function(t, e, r) {
                                ii(t, r, e)
                            }));

                        function Eo(t, e) {
                            return (Vo(t) ? je : Mi)(t, as(e, 3))
                        }
                        var Io = An((function(t, e, r) {
                            t[r ? 0 : 1].push(e)
                        }), (function() {
                            return [
                                [],
                                []
                            ]
                        }));
                        var Po = Wi((function(t, e) {
                                if (null == t) return [];
                                var r = e.length;
                                return r > 1 && ms(t, e[0], e[1]) ? e = [] : r > 2 && ms(e[0], e[1], e[2]) && (e = [e[0]]), Hi(t, gi(e, 1), [])
                            })),
                            So = le || function() {
                                return fe.Date.now()
                            };

                        function Oo(t, e, i) {
                            return e = i ? r : e, e = t && null == e ? t.length : e, Jn(t, h, r, r, r, r, e)
                        }

                        function xo(t, e) {
                            var n;
                            if ("function" != typeof e) throw new Rt(i);
                            return t = fa(t),
                                function() {
                                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = r), n
                                }
                        }
                        var Co = Wi((function(t, e, r) {
                                var i = 1;
                                if (r.length) {
                                    var n = cr(r, os(Co));
                                    i |= a
                                }
                                return Jn(t, i, e, r, n)
                            })),
                            Ro = Wi((function(t, e, r) {
                                var i = 3;
                                if (r.length) {
                                    var n = cr(r, os(Ro));
                                    i |= a
                                }
                                return Jn(e, i, t, r, n)
                            }));

                        function Ao(t, e, n) {
                            var s, o, a, c, h, u, l = 0,
                                p = !1,
                                f = !1,
                                d = !0;
                            if ("function" != typeof t) throw new Rt(i);

                            function g(e) {
                                var i = s,
                                    n = o;
                                return s = o = r, l = e, c = t.apply(n, i)
                            }

                            function v(t) {
                                var i = t - u;
                                return u === r || i >= e || i < 0 || f && t - l >= a
                            }

                            function y() {
                                var t = So();
                                if (v(t)) return m(t);
                                h = Rs(y, function(t) {
                                    var r = e - (t - u);
                                    return f ? yr(r, a - (t - l)) : r
                                }(t))
                            }

                            function m(t) {
                                return h = r, d && s ? g(t) : (s = o = r, c)
                            }

                            function w() {
                                var t = So(),
                                    i = v(t);
                                if (s = arguments, o = this, u = t, i) {
                                    if (h === r) return function(t) {
                                        return l = t, h = Rs(y, e), p ? g(t) : c
                                    }(u);
                                    if (f) return bn(h), h = Rs(y, e), g(u)
                                }
                                return h === r && (h = Rs(y, e)), c
                            }
                            return e = ga(e) || 0, Xo(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? vr(ga(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d), w.cancel = function() {
                                h !== r && bn(h), l = 0, s = u = o = h = r
                            }, w.flush = function() {
                                return h === r ? c : m(So())
                            }, w
                        }
                        var To = Wi((function(t, e) {
                                return ci(t, 1, e)
                            })),
                            No = Wi((function(t, e, r) {
                                return ci(t, ga(e) || 0, r)
                            }));

                        function jo(t, e) {
                            if ("function" != typeof t || null != e && "function" != typeof e) throw new Rt(i);
                            var r = function() {
                                var i = arguments,
                                    n = e ? e.apply(this, i) : i[0],
                                    s = r.cache;
                                if (s.has(n)) return s.get(n);
                                var o = t.apply(this, i);
                                return r.cache = s.set(n, o) || s, o
                            };
                            return r.cache = new(jo.Cache || Kr), r
                        }

                        function Lo(t) {
                            if ("function" != typeof t) throw new Rt(i);
                            return function() {
                                var e = arguments;
                                switch (e.length) {
                                    case 0:
                                        return !t.call(this);
                                    case 1:
                                        return !t.call(this, e[0]);
                                    case 2:
                                        return !t.call(this, e[0], e[1]);
                                    case 3:
                                        return !t.call(this, e[0], e[1], e[2])
                                }
                                return !t.apply(this, e)
                            }
                        }
                        jo.Cache = Kr;
                        var qo = wn((function(t, e) {
                                var r = (e = 1 == e.length && Vo(e[0]) ? je(e[0], Qe(as())) : je(gi(e, 1), Qe(as()))).length;
                                return Wi((function(i) {
                                    for (var n = -1, s = yr(i.length, r); ++n < s;) i[n] = e[n].call(this, i[n]);
                                    return Se(t, this, i)
                                }))
                            })),
                            Do = Wi((function(t, e) {
                                var i = cr(e, os(Do));
                                return Jn(t, a, r, e, i)
                            })),
                            Mo = Wi((function(t, e) {
                                var i = cr(e, os(Mo));
                                return Jn(t, c, r, e, i)
                            })),
                            zo = es((function(t, e) {
                                return Jn(t, u, r, r, r, e)
                            }));

                        function ko(t, e) {
                            return t === e || t !== t && e !== e
                        }
                        var $o = Kn(Pi),
                            Uo = Kn((function(t, e) {
                                return t >= e
                            })),
                            Ho = Ri(function() {
                                return arguments
                            }()) ? Ri : function(t) {
                                return ta(t) && qt.call(t, "callee") && !Wt.call(t, "callee")
                            },
                            Vo = st.isArray,
                            Bo = we ? Qe(we) : function(t) {
                                return ta(t) && Ii(t) == N
                            };

                        function Ko(t) {
                            return null != t && Yo(t.length) && !Jo(t)
                        }

                        function Fo(t) {
                            return ta(t) && Ko(t)
                        }
                        var Zo = me || gc,
                            Wo = _e ? Qe(_e) : function(t) {
                                return ta(t) && Ii(t) == w
                            };

                        function Go(t) {
                            if (!ta(t)) return !1;
                            var e = Ii(t);
                            return e == _ || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !ia(t)
                        }

                        function Jo(t) {
                            if (!Xo(t)) return !1;
                            var e = Ii(t);
                            return e == b || e == E || "[object AsyncFunction]" == e || "[object Proxy]" == e
                        }

                        function Qo(t) {
                            return "number" == typeof t && t == fa(t)
                        }

                        function Yo(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= p
                        }

                        function Xo(t) {
                            var e = typeof t;
                            return null != t && ("object" == e || "function" == e)
                        }

                        function ta(t) {
                            return null != t && "object" == typeof t
                        }
                        var ea = be ? Qe(be) : function(t) {
                            return ta(t) && fs(t) == I
                        };

                        function ra(t) {
                            return "number" == typeof t || ta(t) && Ii(t) == P
                        }

                        function ia(t) {
                            if (!ta(t) || Ii(t) != S) return !1;
                            var e = Ft(t);
                            if (null === e) return !0;
                            var r = qt.call(e, "constructor") && e.constructor;
                            return "function" == typeof r && r instanceof r && Lt.call(r) == kt
                        }
                        var na = Ee ? Qe(Ee) : function(t) {
                            return ta(t) && Ii(t) == x
                        };
                        var sa = Ie ? Qe(Ie) : function(t) {
                            return ta(t) && fs(t) == C
                        };

                        function oa(t) {
                            return "string" == typeof t || !Vo(t) && ta(t) && Ii(t) == R
                        }

                        function aa(t) {
                            return "symbol" == typeof t || ta(t) && Ii(t) == A
                        }
                        var ca = Pe ? Qe(Pe) : function(t) {
                            return ta(t) && Yo(t.length) && !!oe[Ii(t)]
                        };
                        var ha = Kn(Di),
                            ua = Kn((function(t, e) {
                                return t <= e
                            }));

                        function la(t) {
                            if (!t) return [];
                            if (Ko(t)) return oa(t) ? lr(t) : Cn(t);
                            if (Qt && t[Qt]) return function(t) {
                                for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                                return r
                            }(t[Qt]());
                            var e = fs(t);
                            return (e == I ? or : e == C ? hr : ka)(t)
                        }

                        function pa(t) {
                            return t ? (t = ga(t)) === l || t === -l ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0 : 0 === t ? t : 0
                        }

                        function fa(t) {
                            var e = pa(t),
                                r = e % 1;
                            return e === e ? r ? e - r : e : 0
                        }

                        function da(t) {
                            return t ? si(fa(t), 0, d) : 0
                        }

                        function ga(t) {
                            if ("number" == typeof t) return t;
                            if (aa(t)) return f;
                            if (Xo(t)) {
                                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                                t = Xo(e) ? e + "" : e
                            }
                            if ("string" != typeof t) return 0 === t ? t : +t;
                            t = Je(t);
                            var r = gt.test(t);
                            return r || yt.test(t) ? ue(t.slice(2), r ? 2 : 8) : dt.test(t) ? f : +t
                        }

                        function va(t) {
                            return Rn(t, Ta(t))
                        }

                        function ya(t) {
                            return null == t ? "" : cn(t)
                        }
                        var ma = Tn((function(t, e) {
                                if (Es(e) || Ko(e)) Rn(e, Aa(e), t);
                                else
                                    for (var r in e) qt.call(e, r) && Xr(t, r, e[r])
                            })),
                            wa = Tn((function(t, e) {
                                Rn(e, Ta(e), t)
                            })),
                            _a = Tn((function(t, e, r, i) {
                                Rn(e, Ta(e), t, i)
                            })),
                            ba = Tn((function(t, e, r, i) {
                                Rn(e, Aa(e), t, i)
                            })),
                            Ea = es(ni);
                        var Ia = Wi((function(t, e) {
                                t = Ot(t);
                                var i = -1,
                                    n = e.length,
                                    s = n > 2 ? e[2] : r;
                                for (s && ms(e[0], e[1], s) && (n = 1); ++i < n;)
                                    for (var o = e[i], a = Ta(o), c = -1, h = a.length; ++c < h;) {
                                        var u = a[c],
                                            l = t[u];
                                        (l === r || ko(l, Nt[u]) && !qt.call(t, u)) && (t[u] = o[u])
                                    }
                                return t
                            })),
                            Pa = Wi((function(t) {
                                return t.push(r, Yn), Se(ja, r, t)
                            }));

                        function Sa(t, e, i) {
                            var n = null == t ? r : bi(t, e);
                            return n === r ? i : n
                        }

                        function Oa(t, e) {
                            return null != t && ds(t, e, Oi)
                        }
                        var xa = $n((function(t, e, r) {
                                null != e && "function" != typeof e.toString && (e = zt.call(e)), t[e] = r
                            }), Xa(rc)),
                            Ca = $n((function(t, e, r) {
                                null != e && "function" != typeof e.toString && (e = zt.call(e)), qt.call(t, e) ? t[e].push(r) : t[e] = [r]
                            }), as),
                            Ra = Wi(Ci);

                        function Aa(t) {
                            return Ko(t) ? Wr(t) : Li(t)
                        }

                        function Ta(t) {
                            return Ko(t) ? Wr(t, !0) : qi(t)
                        }
                        var Na = Tn((function(t, e, r) {
                                $i(t, e, r)
                            })),
                            ja = Tn((function(t, e, r, i) {
                                $i(t, e, r, i)
                            })),
                            La = es((function(t, e) {
                                var r = {};
                                if (null == t) return r;
                                var i = !1;
                                e = je(e, (function(e) {
                                    return e = mn(e, t), i || (i = e.length > 1), e
                                })), Rn(t, is(t), r), i && (r = oi(r, 7, Xn));
                                for (var n = e.length; n--;) un(r, e[n]);
                                return r
                            }));
                        var qa = es((function(t, e) {
                            return null == t ? {} : function(t, e) {
                                return Vi(t, e, (function(e, r) {
                                    return Oa(t, r)
                                }))
                            }(t, e)
                        }));

                        function Da(t, e) {
                            if (null == t) return {};
                            var r = je(is(t), (function(t) {
                                return [t]
                            }));
                            return e = as(e), Vi(t, r, (function(t, r) {
                                return e(t, r[0])
                            }))
                        }
                        var Ma = Gn(Aa),
                            za = Gn(Ta);

                        function ka(t) {
                            return null == t ? [] : Ye(t, Aa(t))
                        }
                        var $a = qn((function(t, e, r) {
                            return e = e.toLowerCase(), t + (r ? Ua(e) : e)
                        }));

                        function Ua(t) {
                            return Ga(ya(t).toLowerCase())
                        }

                        function Ha(t) {
                            return (t = ya(t)) && t.replace(wt, rr).replace(Xt, "")
                        }
                        var Va = qn((function(t, e, r) {
                                return t + (r ? "-" : "") + e.toLowerCase()
                            })),
                            Ba = qn((function(t, e, r) {
                                return t + (r ? " " : "") + e.toLowerCase()
                            })),
                            Ka = Ln("toLowerCase");
                        var Fa = qn((function(t, e, r) {
                            return t + (r ? "_" : "") + e.toLowerCase()
                        }));
                        var Za = qn((function(t, e, r) {
                            return t + (r ? " " : "") + Ga(e)
                        }));
                        var Wa = qn((function(t, e, r) {
                                return t + (r ? " " : "") + e.toUpperCase()
                            })),
                            Ga = Ln("toUpperCase");

                        function Ja(t, e, i) {
                            return t = ya(t), (e = i ? r : e) === r ? function(t) {
                                return ie.test(t)
                            }(t) ? function(t) {
                                return t.match(ee) || []
                            }(t) : function(t) {
                                return t.match(ht) || []
                            }(t) : t.match(e) || []
                        }
                        var Qa = Wi((function(t, e) {
                                try {
                                    return Se(t, r, e)
                                } catch (i) {
                                    return Go(i) ? i : new It(i)
                                }
                            })),
                            Ya = es((function(t, e) {
                                return xe(e, (function(e) {
                                    e = qs(e), ii(t, e, Co(t[e], t))
                                })), t
                            }));

                        function Xa(t) {
                            return function() {
                                return t
                            }
                        }
                        var tc = zn(),
                            ec = zn(!0);

                        function rc(t) {
                            return t
                        }

                        function ic(t) {
                            return ji("function" == typeof t ? t : oi(t, 1))
                        }
                        var nc = Wi((function(t, e) {
                                return function(r) {
                                    return Ci(r, t, e)
                                }
                            })),
                            sc = Wi((function(t, e) {
                                return function(r) {
                                    return Ci(t, r, e)
                                }
                            }));

                        function oc(t, e, r) {
                            var i = Aa(e),
                                n = _i(e, i);
                            null == r && (!Xo(e) || !n.length && i.length) && (r = e, e = t, t = this, n = _i(e, Aa(e)));
                            var s = !(Xo(r) && "chain" in r) || !!r.chain,
                                o = Jo(t);
                            return xe(n, (function(r) {
                                var i = e[r];
                                t[r] = i, o && (t.prototype[r] = function() {
                                    var e = this.__chain__;
                                    if (s || e) {
                                        var r = t(this.__wrapped__);
                                        return (r.__actions__ = Cn(this.__actions__)).push({
                                            func: i,
                                            args: arguments,
                                            thisArg: t
                                        }), r.__chain__ = e, r
                                    }
                                    return i.apply(t, Le([this.value()], arguments))
                                })
                            })), t
                        }

                        function ac() {}
                        var cc = Hn(je),
                            hc = Hn(Re),
                            uc = Hn(Me);

                        function lc(t) {
                            return ws(t) ? Ke(qs(t)) : function(t) {
                                return function(e) {
                                    return bi(e, t)
                                }
                            }(t)
                        }
                        var pc = Bn(),
                            fc = Bn(!0);

                        function dc() {
                            return []
                        }

                        function gc() {
                            return !1
                        }
                        var vc = Un((function(t, e) {
                                return t + e
                            }), 0),
                            yc = Zn("ceil"),
                            mc = Un((function(t, e) {
                                return t / e
                            }), 1),
                            wc = Zn("floor");
                        var _c = Un((function(t, e) {
                                return t * e
                            }), 1),
                            bc = Zn("round"),
                            Ec = Un((function(t, e) {
                                return t - e
                            }), 0);
                        return zr.after = function(t, e) {
                            if ("function" != typeof e) throw new Rt(i);
                            return t = fa(t),
                                function() {
                                    if (--t < 1) return e.apply(this, arguments)
                                }
                        }, zr.ary = Oo, zr.assign = ma, zr.assignIn = wa, zr.assignInWith = _a, zr.assignWith = ba, zr.at = Ea, zr.before = xo, zr.bind = Co, zr.bindAll = Ya, zr.bindKey = Ro, zr.castArray = function() {
                            if (!arguments.length) return [];
                            var t = arguments[0];
                            return Vo(t) ? t : [t]
                        }, zr.chain = uo, zr.chunk = function(t, e, i) {
                            e = (i ? ms(t, e, i) : e === r) ? 1 : vr(fa(e), 0);
                            var n = null == t ? 0 : t.length;
                            if (!n || e < 1) return [];
                            for (var s = 0, o = 0, a = st(de(n / e)); s < n;) a[o++] = en(t, s, s += e);
                            return a
                        }, zr.compact = function(t) {
                            for (var e = -1, r = null == t ? 0 : t.length, i = 0, n = []; ++e < r;) {
                                var s = t[e];
                                s && (n[i++] = s)
                            }
                            return n
                        }, zr.concat = function() {
                            var t = arguments.length;
                            if (!t) return [];
                            for (var e = st(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                            return Le(Vo(r) ? Cn(r) : [r], gi(e, 1))
                        }, zr.cond = function(t) {
                            var e = null == t ? 0 : t.length,
                                r = as();
                            return t = e ? je(t, (function(t) {
                                if ("function" != typeof t[1]) throw new Rt(i);
                                return [r(t[0]), t[1]]
                            })) : [], Wi((function(r) {
                                for (var i = -1; ++i < e;) {
                                    var n = t[i];
                                    if (Se(n[0], this, r)) return Se(n[1], this, r)
                                }
                            }))
                        }, zr.conforms = function(t) {
                            return function(t) {
                                var e = Aa(t);
                                return function(r) {
                                    return ai(r, t, e)
                                }
                            }(oi(t, 1))
                        }, zr.constant = Xa, zr.countBy = fo, zr.create = function(t, e) {
                            var r = kr(t);
                            return null == e ? r : ri(r, e)
                        }, zr.curry = function t(e, i, n) {
                            var s = Jn(e, 8, r, r, r, r, r, i = n ? r : i);
                            return s.placeholder = t.placeholder, s
                        }, zr.curryRight = function t(e, i, n) {
                            var s = Jn(e, o, r, r, r, r, r, i = n ? r : i);
                            return s.placeholder = t.placeholder, s
                        }, zr.debounce = Ao, zr.defaults = Ia, zr.defaultsDeep = Pa, zr.defer = To, zr.delay = No, zr.difference = zs, zr.differenceBy = ks, zr.differenceWith = $s, zr.drop = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? en(t, (e = i || e === r ? 1 : fa(e)) < 0 ? 0 : e, n) : []
                        }, zr.dropRight = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? en(t, 0, (e = n - (e = i || e === r ? 1 : fa(e))) < 0 ? 0 : e) : []
                        }, zr.dropRightWhile = function(t, e) {
                            return t && t.length ? pn(t, as(e, 3), !0, !0) : []
                        }, zr.dropWhile = function(t, e) {
                            return t && t.length ? pn(t, as(e, 3), !0) : []
                        }, zr.fill = function(t, e, i, n) {
                            var s = null == t ? 0 : t.length;
                            return s ? (i && "number" != typeof i && ms(t, e, i) && (i = 0, n = s), function(t, e, i, n) {
                                var s = t.length;
                                for ((i = fa(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : fa(n)) < 0 && (n += s), n = i > n ? 0 : da(n); i < n;) t[i++] = e;
                                return t
                            }(t, e, i, n)) : []
                        }, zr.filter = function(t, e) {
                            return (Vo(t) ? Ae : di)(t, as(e, 3))
                        }, zr.flatMap = function(t, e) {
                            return gi(Eo(t, e), 1)
                        }, zr.flatMapDeep = function(t, e) {
                            return gi(Eo(t, e), l)
                        }, zr.flatMapDepth = function(t, e, i) {
                            return i = i === r ? 1 : fa(i), gi(Eo(t, e), i)
                        }, zr.flatten = Vs, zr.flattenDeep = function(t) {
                            return (null == t ? 0 : t.length) ? gi(t, l) : []
                        }, zr.flattenDepth = function(t, e) {
                            return (null == t ? 0 : t.length) ? gi(t, e = e === r ? 1 : fa(e)) : []
                        }, zr.flip = function(t) {
                            return Jn(t, 512)
                        }, zr.flow = tc, zr.flowRight = ec, zr.fromPairs = function(t) {
                            for (var e = -1, r = null == t ? 0 : t.length, i = {}; ++e < r;) {
                                var n = t[e];
                                i[n[0]] = n[1]
                            }
                            return i
                        }, zr.functions = function(t) {
                            return null == t ? [] : _i(t, Aa(t))
                        }, zr.functionsIn = function(t) {
                            return null == t ? [] : _i(t, Ta(t))
                        }, zr.groupBy = wo, zr.initial = function(t) {
                            return (null == t ? 0 : t.length) ? en(t, 0, -1) : []
                        }, zr.intersection = Ks, zr.intersectionBy = Fs, zr.intersectionWith = Zs, zr.invert = xa, zr.invertBy = Ca, zr.invokeMap = _o, zr.iteratee = ic, zr.keyBy = bo, zr.keys = Aa, zr.keysIn = Ta, zr.map = Eo, zr.mapKeys = function(t, e) {
                            var r = {};
                            return e = as(e, 3), mi(t, (function(t, i, n) {
                                ii(r, e(t, i, n), t)
                            })), r
                        }, zr.mapValues = function(t, e) {
                            var r = {};
                            return e = as(e, 3), mi(t, (function(t, i, n) {
                                ii(r, i, e(t, i, n))
                            })), r
                        }, zr.matches = function(t) {
                            return zi(oi(t, 1))
                        }, zr.matchesProperty = function(t, e) {
                            return ki(t, oi(e, 1))
                        }, zr.memoize = jo, zr.merge = Na, zr.mergeWith = ja, zr.method = nc, zr.methodOf = sc, zr.mixin = oc, zr.negate = Lo, zr.nthArg = function(t) {
                            return t = fa(t), Wi((function(e) {
                                return Ui(e, t)
                            }))
                        }, zr.omit = La, zr.omitBy = function(t, e) {
                            return Da(t, Lo(as(e)))
                        }, zr.once = function(t) {
                            return xo(2, t)
                        }, zr.orderBy = function(t, e, i, n) {
                            return null == t ? [] : (Vo(e) || (e = null == e ? [] : [e]), Vo(i = n ? r : i) || (i = null == i ? [] : [i]), Hi(t, e, i))
                        }, zr.over = cc, zr.overArgs = qo, zr.overEvery = hc, zr.overSome = uc, zr.partial = Do, zr.partialRight = Mo, zr.partition = Io, zr.pick = qa, zr.pickBy = Da, zr.property = lc, zr.propertyOf = function(t) {
                            return function(e) {
                                return null == t ? r : bi(t, e)
                            }
                        }, zr.pull = Gs, zr.pullAll = Js, zr.pullAllBy = function(t, e, r) {
                            return t && t.length && e && e.length ? Bi(t, e, as(r, 2)) : t
                        }, zr.pullAllWith = function(t, e, i) {
                            return t && t.length && e && e.length ? Bi(t, e, r, i) : t
                        }, zr.pullAt = Qs, zr.range = pc, zr.rangeRight = fc, zr.rearg = zo, zr.reject = function(t, e) {
                            return (Vo(t) ? Ae : di)(t, Lo(as(e, 3)))
                        }, zr.remove = function(t, e) {
                            var r = [];
                            if (!t || !t.length) return r;
                            var i = -1,
                                n = [],
                                s = t.length;
                            for (e = as(e, 3); ++i < s;) {
                                var o = t[i];
                                e(o, i, t) && (r.push(o), n.push(i))
                            }
                            return Ki(t, n), r
                        }, zr.rest = function(t, e) {
                            if ("function" != typeof t) throw new Rt(i);
                            return Wi(t, e = e === r ? e : fa(e))
                        }, zr.reverse = Ys, zr.sampleSize = function(t, e, i) {
                            return e = (i ? ms(t, e, i) : e === r) ? 1 : fa(e), (Vo(t) ? Jr : Ji)(t, e)
                        }, zr.set = function(t, e, r) {
                            return null == t ? t : Qi(t, e, r)
                        }, zr.setWith = function(t, e, i, n) {
                            return n = "function" == typeof n ? n : r, null == t ? t : Qi(t, e, i, n)
                        }, zr.shuffle = function(t) {
                            return (Vo(t) ? Qr : tn)(t)
                        }, zr.slice = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? (i && "number" != typeof i && ms(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : fa(e), i = i === r ? n : fa(i)), en(t, e, i)) : []
                        }, zr.sortBy = Po, zr.sortedUniq = function(t) {
                            return t && t.length ? on(t) : []
                        }, zr.sortedUniqBy = function(t, e) {
                            return t && t.length ? on(t, as(e, 2)) : []
                        }, zr.split = function(t, e, i) {
                            return i && "number" != typeof i && ms(t, e, i) && (e = i = r), (i = i === r ? d : i >>> 0) ? (t = ya(t)) && ("string" == typeof e || null != e && !na(e)) && (!(e = cn(e)) && sr(t)) ? _n(lr(t), 0, i) : t.split(e, i) : []
                        }, zr.spread = function(t, e) {
                            if ("function" != typeof t) throw new Rt(i);
                            return e = null == e ? 0 : vr(fa(e), 0), Wi((function(r) {
                                var i = r[e],
                                    n = _n(r, 0, e);
                                return i && Le(n, i), Se(t, this, n)
                            }))
                        }, zr.tail = function(t) {
                            var e = null == t ? 0 : t.length;
                            return e ? en(t, 1, e) : []
                        }, zr.take = function(t, e, i) {
                            return t && t.length ? en(t, 0, (e = i || e === r ? 1 : fa(e)) < 0 ? 0 : e) : []
                        }, zr.takeRight = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            return n ? en(t, (e = n - (e = i || e === r ? 1 : fa(e))) < 0 ? 0 : e, n) : []
                        }, zr.takeRightWhile = function(t, e) {
                            return t && t.length ? pn(t, as(e, 3), !1, !0) : []
                        }, zr.takeWhile = function(t, e) {
                            return t && t.length ? pn(t, as(e, 3)) : []
                        }, zr.tap = function(t, e) {
                            return e(t), t
                        }, zr.throttle = function(t, e, r) {
                            var n = !0,
                                s = !0;
                            if ("function" != typeof t) throw new Rt(i);
                            return Xo(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), Ao(t, e, {
                                leading: n,
                                maxWait: e,
                                trailing: s
                            })
                        }, zr.thru = lo, zr.toArray = la, zr.toPairs = Ma, zr.toPairsIn = za, zr.toPath = function(t) {
                            return Vo(t) ? je(t, qs) : aa(t) ? [t] : Cn(Ls(ya(t)))
                        }, zr.toPlainObject = va, zr.transform = function(t, e, r) {
                            var i = Vo(t),
                                n = i || Zo(t) || ca(t);
                            if (e = as(e, 4), null == r) {
                                var s = t && t.constructor;
                                r = n ? i ? new s : [] : Xo(t) && Jo(s) ? kr(Ft(t)) : {}
                            }
                            return (n ? xe : mi)(t, (function(t, i, n) {
                                return e(r, t, i, n)
                            })), r
                        }, zr.unary = function(t) {
                            return Oo(t, 1)
                        }, zr.union = Xs, zr.unionBy = to, zr.unionWith = eo, zr.uniq = function(t) {
                            return t && t.length ? hn(t) : []
                        }, zr.uniqBy = function(t, e) {
                            return t && t.length ? hn(t, as(e, 2)) : []
                        }, zr.uniqWith = function(t, e) {
                            return e = "function" == typeof e ? e : r, t && t.length ? hn(t, r, e) : []
                        }, zr.unset = function(t, e) {
                            return null == t || un(t, e)
                        }, zr.unzip = ro, zr.unzipWith = io, zr.update = function(t, e, r) {
                            return null == t ? t : ln(t, e, yn(r))
                        }, zr.updateWith = function(t, e, i, n) {
                            return n = "function" == typeof n ? n : r, null == t ? t : ln(t, e, yn(i), n)
                        }, zr.values = ka, zr.valuesIn = function(t) {
                            return null == t ? [] : Ye(t, Ta(t))
                        }, zr.without = no, zr.words = Ja, zr.wrap = function(t, e) {
                            return Do(yn(e), t)
                        }, zr.xor = so, zr.xorBy = oo, zr.xorWith = ao, zr.zip = co, zr.zipObject = function(t, e) {
                            return gn(t || [], e || [], Xr)
                        }, zr.zipObjectDeep = function(t, e) {
                            return gn(t || [], e || [], Qi)
                        }, zr.zipWith = ho, zr.entries = Ma, zr.entriesIn = za, zr.extend = wa, zr.extendWith = _a, oc(zr, zr), zr.add = vc, zr.attempt = Qa, zr.camelCase = $a, zr.capitalize = Ua, zr.ceil = yc, zr.clamp = function(t, e, i) {
                            return i === r && (i = e, e = r), i !== r && (i = (i = ga(i)) === i ? i : 0), e !== r && (e = (e = ga(e)) === e ? e : 0), si(ga(t), e, i)
                        }, zr.clone = function(t) {
                            return oi(t, 4)
                        }, zr.cloneDeep = function(t) {
                            return oi(t, 5)
                        }, zr.cloneDeepWith = function(t, e) {
                            return oi(t, 5, e = "function" == typeof e ? e : r)
                        }, zr.cloneWith = function(t, e) {
                            return oi(t, 4, e = "function" == typeof e ? e : r)
                        }, zr.conformsTo = function(t, e) {
                            return null == e || ai(t, e, Aa(e))
                        }, zr.deburr = Ha, zr.defaultTo = function(t, e) {
                            return null == t || t !== t ? e : t
                        }, zr.divide = mc, zr.endsWith = function(t, e, i) {
                            t = ya(t), e = cn(e);
                            var n = t.length,
                                s = i = i === r ? n : si(fa(i), 0, n);
                            return (i -= e.length) >= 0 && t.slice(i, s) == e
                        }, zr.eq = ko, zr.escape = function(t) {
                            return (t = ya(t)) && G.test(t) ? t.replace(Z, ir) : t
                        }, zr.escapeRegExp = function(t) {
                            return (t = ya(t)) && it.test(t) ? t.replace(rt, "\\$&") : t
                        }, zr.every = function(t, e, i) {
                            var n = Vo(t) ? Re : pi;
                            return i && ms(t, e, i) && (e = r), n(t, as(e, 3))
                        }, zr.find = go, zr.findIndex = Us, zr.findKey = function(t, e) {
                            return ke(t, as(e, 3), mi)
                        }, zr.findLast = vo, zr.findLastIndex = Hs, zr.findLastKey = function(t, e) {
                            return ke(t, as(e, 3), wi)
                        }, zr.floor = wc, zr.forEach = yo, zr.forEachRight = mo, zr.forIn = function(t, e) {
                            return null == t ? t : vi(t, as(e, 3), Ta)
                        }, zr.forInRight = function(t, e) {
                            return null == t ? t : yi(t, as(e, 3), Ta)
                        }, zr.forOwn = function(t, e) {
                            return t && mi(t, as(e, 3))
                        }, zr.forOwnRight = function(t, e) {
                            return t && wi(t, as(e, 3))
                        }, zr.get = Sa, zr.gt = $o, zr.gte = Uo, zr.has = function(t, e) {
                            return null != t && ds(t, e, Si)
                        }, zr.hasIn = Oa, zr.head = Bs, zr.identity = rc, zr.includes = function(t, e, r, i) {
                            t = Ko(t) ? t : ka(t), r = r && !i ? fa(r) : 0;
                            var n = t.length;
                            return r < 0 && (r = vr(n + r, 0)), oa(t) ? r <= n && t.indexOf(e, r) > -1 : !!n && Ue(t, e, r) > -1
                        }, zr.indexOf = function(t, e, r) {
                            var i = null == t ? 0 : t.length;
                            if (!i) return -1;
                            var n = null == r ? 0 : fa(r);
                            return n < 0 && (n = vr(i + n, 0)), Ue(t, e, n)
                        }, zr.inRange = function(t, e, i) {
                            return e = pa(e), i === r ? (i = e, e = 0) : i = pa(i),
                                function(t, e, r) {
                                    return t >= yr(e, r) && t < vr(e, r)
                                }(t = ga(t), e, i)
                        }, zr.invoke = Ra, zr.isArguments = Ho, zr.isArray = Vo, zr.isArrayBuffer = Bo, zr.isArrayLike = Ko, zr.isArrayLikeObject = Fo, zr.isBoolean = function(t) {
                            return !0 === t || !1 === t || ta(t) && Ii(t) == m
                        }, zr.isBuffer = Zo, zr.isDate = Wo, zr.isElement = function(t) {
                            return ta(t) && 1 === t.nodeType && !ia(t)
                        }, zr.isEmpty = function(t) {
                            if (null == t) return !0;
                            if (Ko(t) && (Vo(t) || "string" == typeof t || "function" == typeof t.splice || Zo(t) || ca(t) || Ho(t))) return !t.length;
                            var e = fs(t);
                            if (e == I || e == C) return !t.size;
                            if (Es(t)) return !Li(t).length;
                            for (var r in t)
                                if (qt.call(t, r)) return !1;
                            return !0
                        }, zr.isEqual = function(t, e) {
                            return Ai(t, e)
                        }, zr.isEqualWith = function(t, e, i) {
                            var n = (i = "function" == typeof i ? i : r) ? i(t, e) : r;
                            return n === r ? Ai(t, e, r, i) : !!n
                        }, zr.isError = Go, zr.isFinite = function(t) {
                            return "number" == typeof t && ze(t)
                        }, zr.isFunction = Jo, zr.isInteger = Qo, zr.isLength = Yo, zr.isMap = ea, zr.isMatch = function(t, e) {
                            return t === e || Ti(t, e, hs(e))
                        }, zr.isMatchWith = function(t, e, i) {
                            return i = "function" == typeof i ? i : r, Ti(t, e, hs(e), i)
                        }, zr.isNaN = function(t) {
                            return ra(t) && t != +t
                        }, zr.isNative = function(t) {
                            if (bs(t)) throw new It("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return Ni(t)
                        }, zr.isNil = function(t) {
                            return null == t
                        }, zr.isNull = function(t) {
                            return null === t
                        }, zr.isNumber = ra, zr.isObject = Xo, zr.isObjectLike = ta, zr.isPlainObject = ia, zr.isRegExp = na, zr.isSafeInteger = function(t) {
                            return Qo(t) && t >= -p && t <= p
                        }, zr.isSet = sa, zr.isString = oa, zr.isSymbol = aa, zr.isTypedArray = ca, zr.isUndefined = function(t) {
                            return t === r
                        }, zr.isWeakMap = function(t) {
                            return ta(t) && fs(t) == T
                        }, zr.isWeakSet = function(t) {
                            return ta(t) && "[object WeakSet]" == Ii(t)
                        }, zr.join = function(t, e) {
                            return null == t ? "" : Fe.call(t, e)
                        }, zr.kebabCase = Va, zr.last = Ws, zr.lastIndexOf = function(t, e, i) {
                            var n = null == t ? 0 : t.length;
                            if (!n) return -1;
                            var s = n;
                            return i !== r && (s = (s = fa(i)) < 0 ? vr(n + s, 0) : yr(s, n - 1)), e === e ? function(t, e, r) {
                                for (var i = r + 1; i--;)
                                    if (t[i] === e) return i;
                                return i
                            }(t, e, s) : $e(t, Ve, s, !0)
                        }, zr.lowerCase = Ba, zr.lowerFirst = Ka, zr.lt = ha, zr.lte = ua, zr.max = function(t) {
                            return t && t.length ? fi(t, rc, Pi) : r
                        }, zr.maxBy = function(t, e) {
                            return t && t.length ? fi(t, as(e, 2), Pi) : r
                        }, zr.mean = function(t) {
                            return Be(t, rc)
                        }, zr.meanBy = function(t, e) {
                            return Be(t, as(e, 2))
                        }, zr.min = function(t) {
                            return t && t.length ? fi(t, rc, Di) : r
                        }, zr.minBy = function(t, e) {
                            return t && t.length ? fi(t, as(e, 2), Di) : r
                        }, zr.stubArray = dc, zr.stubFalse = gc, zr.stubObject = function() {
                            return {}
                        }, zr.stubString = function() {
                            return ""
                        }, zr.stubTrue = function() {
                            return !0
                        }, zr.multiply = _c, zr.nth = function(t, e) {
                            return t && t.length ? Ui(t, fa(e)) : r
                        }, zr.noConflict = function() {
                            return fe._ === this && (fe._ = $t), this
                        }, zr.noop = ac, zr.now = So, zr.pad = function(t, e, r) {
                            t = ya(t);
                            var i = (e = fa(e)) ? ur(t) : 0;
                            if (!e || i >= e) return t;
                            var n = (e - i) / 2;
                            return Vn(ge(n), r) + t + Vn(de(n), r)
                        }, zr.padEnd = function(t, e, r) {
                            t = ya(t);
                            var i = (e = fa(e)) ? ur(t) : 0;
                            return e && i < e ? t + Vn(e - i, r) : t
                        }, zr.padStart = function(t, e, r) {
                            t = ya(t);
                            var i = (e = fa(e)) ? ur(t) : 0;
                            return e && i < e ? Vn(e - i, r) + t : t
                        }, zr.parseInt = function(t, e, r) {
                            return r || null == e ? e = 0 : e && (e = +e), wr(ya(t).replace(nt, ""), e || 0)
                        }, zr.random = function(t, e, i) {
                            if (i && "boolean" != typeof i && ms(t, e, i) && (e = i = r), i === r && ("boolean" == typeof e ? (i = e, e = r) : "boolean" == typeof t && (i = t, t = r)), t === r && e === r ? (t = 0, e = 1) : (t = pa(t), e === r ? (e = t, t = 0) : e = pa(e)), t > e) {
                                var n = t;
                                t = e, e = n
                            }
                            if (i || t % 1 || e % 1) {
                                var s = _r();
                                return yr(t + s * (e - t + he("1e-" + ((s + "").length - 1))), e)
                            }
                            return Fi(t, e)
                        }, zr.reduce = function(t, e, r) {
                            var i = Vo(t) ? qe : Ze,
                                n = arguments.length < 3;
                            return i(t, as(e, 4), r, n, ui)
                        }, zr.reduceRight = function(t, e, r) {
                            var i = Vo(t) ? De : Ze,
                                n = arguments.length < 3;
                            return i(t, as(e, 4), r, n, li)
                        }, zr.repeat = function(t, e, i) {
                            return e = (i ? ms(t, e, i) : e === r) ? 1 : fa(e), Zi(ya(t), e)
                        }, zr.replace = function() {
                            var t = arguments,
                                e = ya(t[0]);
                            return t.length < 3 ? e : e.replace(t[1], t[2])
                        }, zr.result = function(t, e, i) {
                            var n = -1,
                                s = (e = mn(e, t)).length;
                            for (s || (s = 1, t = r); ++n < s;) {
                                var o = null == t ? r : t[qs(e[n])];
                                o === r && (n = s, o = i), t = Jo(o) ? o.call(t) : o
                            }
                            return t
                        }, zr.round = bc, zr.runInContext = t, zr.sample = function(t) {
                            return (Vo(t) ? Gr : Gi)(t)
                        }, zr.size = function(t) {
                            if (null == t) return 0;
                            if (Ko(t)) return oa(t) ? ur(t) : t.length;
                            var e = fs(t);
                            return e == I || e == C ? t.size : Li(t).length
                        }, zr.snakeCase = Fa, zr.some = function(t, e, i) {
                            var n = Vo(t) ? Me : rn;
                            return i && ms(t, e, i) && (e = r), n(t, as(e, 3))
                        }, zr.sortedIndex = function(t, e) {
                            return nn(t, e)
                        }, zr.sortedIndexBy = function(t, e, r) {
                            return sn(t, e, as(r, 2))
                        }, zr.sortedIndexOf = function(t, e) {
                            var r = null == t ? 0 : t.length;
                            if (r) {
                                var i = nn(t, e);
                                if (i < r && ko(t[i], e)) return i
                            }
                            return -1
                        }, zr.sortedLastIndex = function(t, e) {
                            return nn(t, e, !0)
                        }, zr.sortedLastIndexBy = function(t, e, r) {
                            return sn(t, e, as(r, 2), !0)
                        }, zr.sortedLastIndexOf = function(t, e) {
                            if (null == t ? 0 : t.length) {
                                var r = nn(t, e, !0) - 1;
                                if (ko(t[r], e)) return r
                            }
                            return -1
                        }, zr.startCase = Za, zr.startsWith = function(t, e, r) {
                            return t = ya(t), r = null == r ? 0 : si(fa(r), 0, t.length), e = cn(e), t.slice(r, r + e.length) == e
                        }, zr.subtract = Ec, zr.sum = function(t) {
                            return t && t.length ? We(t, rc) : 0
                        }, zr.sumBy = function(t, e) {
                            return t && t.length ? We(t, as(e, 2)) : 0
                        }, zr.template = function(t, e, i) {
                            var n = zr.templateSettings;
                            i && ms(t, e, i) && (e = r), t = ya(t), e = _a({}, e, n, Qn);
                            var s, o, a = _a({}, e.imports, n.imports, Qn),
                                c = Aa(a),
                                h = Ye(a, c),
                                u = 0,
                                l = e.interpolate || _t,
                                p = "__p += '",
                                f = xt((e.escape || _t).source + "|" + l.source + "|" + (l === Y ? pt : _t).source + "|" + (e.evaluate || _t).source + "|$", "g"),
                                d = "//# sourceURL=" + (qt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++se + "]") + "\n";
                            t.replace(f, (function(e, r, i, n, a, c) {
                                return i || (i = n), p += t.slice(u, c).replace(bt, nr), r && (s = !0, p += "' +\n__e(" + r + ") +\n'"), a && (o = !0, p += "';\n" + a + ";\n__p += '"), i && (p += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), u = c + e.length, e
                            })), p += "';\n";
                            var g = qt.call(e, "variable") && e.variable;
                            if (g) {
                                if (ut.test(g)) throw new It("Invalid `variable` option passed into `_.template`")
                            } else p = "with (obj) {\n" + p + "\n}\n";
                            p = (o ? p.replace(V, "") : p).replace(B, "$1").replace(K, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                            var v = Qa((function() {
                                return Pt(c, d + "return " + p).apply(r, h)
                            }));
                            if (v.source = p, Go(v)) throw v;
                            return v
                        }, zr.times = function(t, e) {
                            if ((t = fa(t)) < 1 || t > p) return [];
                            var r = d,
                                i = yr(t, d);
                            e = as(e), t -= d;
                            for (var n = Ge(i, e); ++r < t;) e(r);
                            return n
                        }, zr.toFinite = pa, zr.toInteger = fa, zr.toLength = da, zr.toLower = function(t) {
                            return ya(t).toLowerCase()
                        }, zr.toNumber = ga, zr.toSafeInteger = function(t) {
                            return t ? si(fa(t), -p, p) : 0 === t ? t : 0
                        }, zr.toString = ya, zr.toUpper = function(t) {
                            return ya(t).toUpperCase()
                        }, zr.trim = function(t, e, i) {
                            if ((t = ya(t)) && (i || e === r)) return Je(t);
                            if (!t || !(e = cn(e))) return t;
                            var n = lr(t),
                                s = lr(e);
                            return _n(n, tr(n, s), er(n, s) + 1).join("")
                        }, zr.trimEnd = function(t, e, i) {
                            if ((t = ya(t)) && (i || e === r)) return t.slice(0, pr(t) + 1);
                            if (!t || !(e = cn(e))) return t;
                            var n = lr(t);
                            return _n(n, 0, er(n, lr(e)) + 1).join("")
                        }, zr.trimStart = function(t, e, i) {
                            if ((t = ya(t)) && (i || e === r)) return t.replace(nt, "");
                            if (!t || !(e = cn(e))) return t;
                            var n = lr(t);
                            return _n(n, tr(n, lr(e))).join("")
                        }, zr.truncate = function(t, e) {
                            var i = 30,
                                n = "...";
                            if (Xo(e)) {
                                var s = "separator" in e ? e.separator : s;
                                i = "length" in e ? fa(e.length) : i, n = "omission" in e ? cn(e.omission) : n
                            }
                            var o = (t = ya(t)).length;
                            if (sr(t)) {
                                var a = lr(t);
                                o = a.length
                            }
                            if (i >= o) return t;
                            var c = i - ur(n);
                            if (c < 1) return n;
                            var h = a ? _n(a, 0, c).join("") : t.slice(0, c);
                            if (s === r) return h + n;
                            if (a && (c += h.length - c), na(s)) {
                                if (t.slice(c).search(s)) {
                                    var u, l = h;
                                    for (s.global || (s = xt(s.source, ya(ft.exec(s)) + "g")), s.lastIndex = 0; u = s.exec(l);) var p = u.index;
                                    h = h.slice(0, p === r ? c : p)
                                }
                            } else if (t.indexOf(cn(s), c) != c) {
                                var f = h.lastIndexOf(s);
                                f > -1 && (h = h.slice(0, f))
                            }
                            return h + n
                        }, zr.unescape = function(t) {
                            return (t = ya(t)) && W.test(t) ? t.replace(F, fr) : t
                        }, zr.uniqueId = function(t) {
                            var e = ++Dt;
                            return ya(t) + e
                        }, zr.upperCase = Wa, zr.upperFirst = Ga, zr.each = yo, zr.eachRight = mo, zr.first = Bs, oc(zr, function() {
                            var t = {};
                            return mi(zr, (function(e, r) {
                                qt.call(zr.prototype, r) || (t[r] = e)
                            })), t
                        }(), {
                            chain: !1
                        }), zr.VERSION = "4.17.21", xe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                            zr[t].placeholder = zr
                        })), xe(["drop", "take"], (function(t, e) {
                            Hr.prototype[t] = function(i) {
                                i = i === r ? 1 : vr(fa(i), 0);
                                var n = this.__filtered__ && !e ? new Hr(this) : this.clone();
                                return n.__filtered__ ? n.__takeCount__ = yr(i, n.__takeCount__) : n.__views__.push({
                                    size: yr(i, d),
                                    type: t + (n.__dir__ < 0 ? "Right" : "")
                                }), n
                            }, Hr.prototype[t + "Right"] = function(e) {
                                return this.reverse()[t](e).reverse()
                            }
                        })), xe(["filter", "map", "takeWhile"], (function(t, e) {
                            var r = e + 1,
                                i = 1 == r || 3 == r;
                            Hr.prototype[t] = function(t) {
                                var e = this.clone();
                                return e.__iteratees__.push({
                                    iteratee: as(t, 3),
                                    type: r
                                }), e.__filtered__ = e.__filtered__ || i, e
                            }
                        })), xe(["head", "last"], (function(t, e) {
                            var r = "take" + (e ? "Right" : "");
                            Hr.prototype[t] = function() {
                                return this[r](1).value()[0]
                            }
                        })), xe(["initial", "tail"], (function(t, e) {
                            var r = "drop" + (e ? "" : "Right");
                            Hr.prototype[t] = function() {
                                return this.__filtered__ ? new Hr(this) : this[r](1)
                            }
                        })), Hr.prototype.compact = function() {
                            return this.filter(rc)
                        }, Hr.prototype.find = function(t) {
                            return this.filter(t).head()
                        }, Hr.prototype.findLast = function(t) {
                            return this.reverse().find(t)
                        }, Hr.prototype.invokeMap = Wi((function(t, e) {
                            return "function" == typeof t ? new Hr(this) : this.map((function(r) {
                                return Ci(r, t, e)
                            }))
                        })), Hr.prototype.reject = function(t) {
                            return this.filter(Lo(as(t)))
                        }, Hr.prototype.slice = function(t, e) {
                            t = fa(t);
                            var i = this;
                            return i.__filtered__ && (t > 0 || e < 0) ? new Hr(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), e !== r && (i = (e = fa(e)) < 0 ? i.dropRight(-e) : i.take(e - t)), i)
                        }, Hr.prototype.takeRightWhile = function(t) {
                            return this.reverse().takeWhile(t).reverse()
                        }, Hr.prototype.toArray = function() {
                            return this.take(d)
                        }, mi(Hr.prototype, (function(t, e) {
                            var i = /^(?:filter|find|map|reject)|While$/.test(e),
                                n = /^(?:head|last)$/.test(e),
                                s = zr[n ? "take" + ("last" == e ? "Right" : "") : e],
                                o = n || /^find/.test(e);
                            s && (zr.prototype[e] = function() {
                                var e = this.__wrapped__,
                                    a = n ? [1] : arguments,
                                    c = e instanceof Hr,
                                    h = a[0],
                                    u = c || Vo(e),
                                    l = function(t) {
                                        var e = s.apply(zr, Le([t], a));
                                        return n && p ? e[0] : e
                                    };
                                u && i && "function" == typeof h && 1 != h.length && (c = u = !1);
                                var p = this.__chain__,
                                    f = !!this.__actions__.length,
                                    d = o && !p,
                                    g = c && !f;
                                if (!o && u) {
                                    e = g ? e : new Hr(this);
                                    var v = t.apply(e, a);
                                    return v.__actions__.push({
                                        func: lo,
                                        args: [l],
                                        thisArg: r
                                    }), new Ur(v, p)
                                }
                                return d && g ? t.apply(this, a) : (v = this.thru(l), d ? n ? v.value()[0] : v.value() : v)
                            })
                        })), xe(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                            var e = At[t],
                                r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                                i = /^(?:pop|shift)$/.test(t);
                            zr.prototype[t] = function() {
                                var t = arguments;
                                if (i && !this.__chain__) {
                                    var n = this.value();
                                    return e.apply(Vo(n) ? n : [], t)
                                }
                                return this[r]((function(r) {
                                    return e.apply(Vo(r) ? r : [], t)
                                }))
                            }
                        })), mi(Hr.prototype, (function(t, e) {
                            var r = zr[e];
                            if (r) {
                                var i = r.name + "";
                                qt.call(Rr, i) || (Rr[i] = []), Rr[i].push({
                                    name: e,
                                    func: r
                                })
                            }
                        })), Rr[kn(r, 2).name] = [{
                            name: "wrapper",
                            func: r
                        }], Hr.prototype.clone = function() {
                            var t = new Hr(this.__wrapped__);
                            return t.__actions__ = Cn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Cn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Cn(this.__views__), t
                        }, Hr.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var t = new Hr(this);
                                t.__dir__ = -1, t.__filtered__ = !0
                            } else(t = this.clone()).__dir__ *= -1;
                            return t
                        }, Hr.prototype.value = function() {
                            var t = this.__wrapped__.value(),
                                e = this.__dir__,
                                r = Vo(t),
                                i = e < 0,
                                n = r ? t.length : 0,
                                s = function(t, e, r) {
                                    for (var i = -1, n = r.length; ++i < n;) {
                                        var s = r[i],
                                            o = s.size;
                                        switch (s.type) {
                                            case "drop":
                                                t += o;
                                                break;
                                            case "dropRight":
                                                e -= o;
                                                break;
                                            case "take":
                                                e = yr(e, t + o);
                                                break;
                                            case "takeRight":
                                                t = vr(t, e - o)
                                        }
                                    }
                                    return {
                                        start: t,
                                        end: e
                                    }
                                }(0, n, this.__views__),
                                o = s.start,
                                a = s.end,
                                c = a - o,
                                h = i ? a : o - 1,
                                u = this.__iteratees__,
                                l = u.length,
                                p = 0,
                                f = yr(c, this.__takeCount__);
                            if (!r || !i && n == c && f == c) return fn(t, this.__actions__);
                            var d = [];
                            t: for (; c-- && p < f;) {
                                for (var g = -1, v = t[h += e]; ++g < l;) {
                                    var y = u[g],
                                        m = y.iteratee,
                                        w = y.type,
                                        _ = m(v);
                                    if (2 == w) v = _;
                                    else if (!_) {
                                        if (1 == w) continue t;
                                        break t
                                    }
                                }
                                d[p++] = v
                            }
                            return d
                        }, zr.prototype.at = po, zr.prototype.chain = function() {
                            return uo(this)
                        }, zr.prototype.commit = function() {
                            return new Ur(this.value(), this.__chain__)
                        }, zr.prototype.next = function() {
                            this.__values__ === r && (this.__values__ = la(this.value()));
                            var t = this.__index__ >= this.__values__.length;
                            return {
                                done: t,
                                value: t ? r : this.__values__[this.__index__++]
                            }
                        }, zr.prototype.plant = function(t) {
                            for (var e, i = this; i instanceof $r;) {
                                var n = Ms(i);
                                n.__index__ = 0, n.__values__ = r, e ? s.__wrapped__ = n : e = n;
                                var s = n;
                                i = i.__wrapped__
                            }
                            return s.__wrapped__ = t, e
                        }, zr.prototype.reverse = function() {
                            var t = this.__wrapped__;
                            if (t instanceof Hr) {
                                var e = t;
                                return this.__actions__.length && (e = new Hr(this)), (e = e.reverse()).__actions__.push({
                                    func: lo,
                                    args: [Ys],
                                    thisArg: r
                                }), new Ur(e, this.__chain__)
                            }
                            return this.thru(Ys)
                        }, zr.prototype.toJSON = zr.prototype.valueOf = zr.prototype.value = function() {
                            return fn(this.__wrapped__, this.__actions__)
                        }, zr.prototype.first = zr.prototype.head, Qt && (zr.prototype[Qt] = function() {
                            return this
                        }), zr
                    }();
                    ge ? ((ge.exports = dr)._ = dr, de._ = dr) : fe._ = dr
                }).call(cn)
            }(hn, hn.exports);
            var un = Object.defineProperty,
                ln = Object.defineProperties,
                pn = Object.getOwnPropertyDescriptors,
                fn = Object.getOwnPropertySymbols,
                dn = Object.prototype.hasOwnProperty,
                gn = Object.prototype.propertyIsEnumerable,
                vn = (t, e, r) => e in t ? un(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                yn = (t, e) => {
                    for (var r in e || (e = {})) dn.call(e, r) && vn(t, r, e[r]);
                    if (fn)
                        for (var r of fn(e)) gn.call(e, r) && vn(t, r, e[r]);
                    return t
                },
                mn = (t, e) => ln(t, pn(e));

            function wn(t, e, r) {
                var i;
                const n = (0, s.DQ)(t);
                return (null == (i = e.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function _n(t) {
                return t.includes(":") ? t.split(":")[1] : t
            }

            function bn(t) {
                return t.map((t => `${t.split(":")[0]}:${t.split(":")[1]}`))
            }

            function En(t) {
                var e, r, i, n;
                const o = {};
                if (!(0, s.L5)(t)) return o;
                for (const [a, c] of Object.entries(t)) {
                    const t = (0, s.gp)(a) ? [a] : c.chains,
                        h = c.methods || [],
                        u = c.events || [],
                        l = c.rpcMap || {},
                        p = (0, s.M)(a);
                    o[p] = mn(yn(yn({}, o[p]), c), {
                        chains: (0, s.eG)(t, null == (e = o[p]) ? void 0 : e.chains),
                        methods: (0, s.eG)(h, null == (r = o[p]) ? void 0 : r.methods),
                        events: (0, s.eG)(u, null == (i = o[p]) ? void 0 : i.events),
                        rpcMap: yn(yn({}, l), null == (n = o[p]) ? void 0 : n.rpcMap)
                    })
                }
                return o
            }

            function In(t) {
                return t.includes(":") ? t.split(":")[2] : t
            }

            function Pn(t) {
                const e = {};
                for (const [r, i] of Object.entries(t)) {
                    const t = i.methods || [],
                        n = i.events || [],
                        o = i.accounts || [],
                        a = (0, s.gp)(r) ? [r] : i.chains ? i.chains : bn(i.accounts);
                    e[r] = {
                        chains: a,
                        methods: t,
                        events: n,
                        accounts: o
                    }
                }
                return e
            }

            function Sn(t) {
                return "number" == typeof t ? t : t.includes("0x") ? parseInt(t, 16) : t.includes(":") ? Number(t.split(":")[1]) : Number(t)
            }
            const On = {},
                xn = t => On[t],
                Cn = (t, e) => {
                    On[t] = e
                };
            class Rn {
                constructor(t) {
                    this.name = "polkadot", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(an, `${this.name}:${t}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = _n(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || wn(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            class An {
                constructor(t) {
                    this.name = "eip155", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(t) {
                    switch (t.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(t);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(an, `${this.name}:${t}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                createHttpProvider(t, e) {
                    const r = e || wn(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new rn(r, xn("disableProviderPing")))
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = parseInt(_n(e));
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                getHttpProvider() {
                    const t = this.chainId,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                async handleSwitchChain(t) {
                    var e, r;
                    let i = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    const n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else {
                        if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                        await this.client.request({
                            topic: t.topic,
                            request: {
                                method: t.request.method,
                                params: [{
                                    chainId: i
                                }]
                            },
                            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                        }), this.setDefaultChain(`${n}`)
                    }
                    return null
                }
                isChainApproved(t) {
                    return this.namespace.chains.includes(`${this.name}:${t}`)
                }
            }
            class Tn {
                constructor(t) {
                    this.name = "solana", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(an, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = _n(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || wn(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            class Nn {
                constructor(t) {
                    this.name = "cosmos", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(an, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = _n(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || wn(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            class jn {
                constructor(t) {
                    this.name = "cip34", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(an, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        const r = this.getCardanoRPCUrl(e),
                            i = _n(e);
                        t[i] = this.createHttpProvider(i, r)
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                getCardanoRPCUrl(t) {
                    const e = this.namespace.rpcMap;
                    if (e) return e[t]
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || this.getCardanoRPCUrl(t);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            class Ln {
                constructor(t) {
                    this.name = "elrond", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(an, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = _n(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || wn(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            class qn {
                constructor(t) {
                    this.name = "multiversx", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(an, `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        const i = _n(e);
                        t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || wn(t, this.namespace, this.client.core.projectId);
                    if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            class Dn {
                constructor(t) {
                    this.name = "near", this.namespace = t.namespace, this.events = xn("events"), this.client = xn("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        const r = e || wn(`${this.name}:${t}`, this.namespace);
                        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(an, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach((e => {
                        var r;
                        t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                    })), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        e = this.httpProviders[t];
                    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e);
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || wn(t, this.namespace);
                    return typeof r > "u" ? void 0 : new wt(new nn(r, xn("disableProviderPing")))
                }
            }
            var Mn = Object.defineProperty,
                zn = Object.defineProperties,
                kn = Object.getOwnPropertyDescriptors,
                $n = Object.getOwnPropertySymbols,
                Un = Object.prototype.hasOwnProperty,
                Hn = Object.prototype.propertyIsEnumerable,
                Vn = (t, e, r) => e in t ? Mn(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                Bn = (t, e) => {
                    for (var r in e || (e = {})) Un.call(e, r) && Vn(t, r, e[r]);
                    if ($n)
                        for (var r of $n(e)) Hn.call(e, r) && Vn(t, r, e[r]);
                    return t
                },
                Kn = (t, e) => zn(t, kn(e));
            class Fn {
                constructor(t) {
                    this.events = new(n()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof(null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof(null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: (null === t || void 0 === t ? void 0 : t.logger) || sn
                    })), this.disableProviderPing = (null === t || void 0 === t ? void 0 : t.disableProviderPing) || !1
                }
                static async init(t) {
                    const e = new Fn(t);
                    return await e.initialize(), e
                }
                async request(t, e) {
                    const [r, i] = this.validateChain(e);
                    if (!this.session) throw new Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: Bn({}, t),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(t, e, r) {
                    this.request(t, r).then((t => e(null, t))).catch((t => e(t, void 0)))
                }
                async enable() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var t;
                    if (!this.session) throw new Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (t = this.session) ? void 0 : t.topic,
                        reason: (0, s.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(t) {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(t) {
                    this.shouldAbortPairingAttempt = !1;
                    let e = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                        if (e >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                        const {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: t,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then((t => {
                            this.session = t, this.namespaces || (this.namespaces = Pn(t.namespaces), this.persist("namespaces", this.namespaces))
                        })).catch((t => {
                            if (t.message !== Ni) throw t;
                            e++
                        }))
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(t, e) {
                    try {
                        if (!this.session) return;
                        const [r, i] = this.validateChain(t);
                        this.getProvider(r).setDefaultChain(i, e)
                    } catch (v) {
                        if (!/Please call connect/.test(v.message)) throw v
                    }
                }
                async cleanupPendingPairings() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger.info("Cleaning up inactive pairings...");
                    const e = this.client.pairing.getAll();
                    if ((0, s.qt)(e)) {
                        for (const r of e) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${e.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        const t = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await Yi.init({
                        logger: this.providerOpts.logger || sn,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const t = [...new Set(Object.keys(this.session.namespaces).map((t => (0, s.M)(t))))];
                    Cn("client", this.client), Cn("events", this.events), Cn("disableProviderPing", this.disableProviderPing), t.forEach((t => {
                        if (!this.session) return;
                        const e = function(t, e) {
                                const r = Object.keys(e.namespaces).filter((e => e.includes(t)));
                                if (!r.length) return [];
                                const i = [];
                                return r.forEach((t => {
                                    const r = e.namespaces[t].accounts;
                                    i.push(...r)
                                })), i
                            }(t, this.session),
                            r = bn(e),
                            i = function() {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                const e = En(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                                    r = En(t);
                                return hn.exports.merge(e, r)
                            }(this.namespaces, this.optionalNamespaces),
                            n = Kn(Bn({}, i[t]), {
                                accounts: e,
                                chains: r
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new An({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new Tn({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new Nn({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new Rn({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new jn({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new Ln({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new qn({
                                    namespace: n
                                });
                                break;
                            case "near":
                                this.rpcProviders[t] = new Dn({
                                    namespace: n
                                })
                        }
                    }))
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (t => {
                        this.events.emit("session_ping", t)
                    })), this.client.on("session_event", (t => {
                        const {
                            params: e
                        } = t, {
                            event: r
                        } = e;
                        if ("accountsChanged" === r.name) {
                            const t = r.data;
                            t && (0, s.qt)(t) && this.events.emit("accountsChanged", t.map(In))
                        } else if ("chainChanged" === r.name) {
                            const t = e.chainId,
                                r = e.event.data,
                                i = (0, s.M)(t),
                                n = Sn(t) !== Sn(r) ? `${i}:${Sn(r)}` : t;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", t)
                    })), this.client.on("session_update", (t => {
                        let {
                            topic: e,
                            params: r
                        } = t;
                        var i;
                        const {
                            namespaces: n
                        } = r, s = null == (i = this.client) ? void 0 : i.session.get(e);
                        this.session = Kn(Bn({}, s), {
                            namespaces: n
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: r
                        })
                    })), this.client.on("session_delete", (async t => {
                        await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Kn(Bn({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: t.topic
                        }))
                    })), this.on(an, (t => {
                        this.onChainChanged(t, !0)
                    }))
                }
                getProvider(t) {
                    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
                    return this.rpcProviders[t]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((t => {
                        var e;
                        this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
                    }))
                }
                setNamespaces(t) {
                    const {
                        namespaces: e,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = t;
                    e && Object.keys(e).length && (this.namespaces = e), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", e), this.persist("optionalNamespaces", r)
                }
                validateChain(t) {
                    const [e, r] = (null === t || void 0 === t ? void 0 : t.split(":")) || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, r];
                    if (e && !Object.keys(this.namespaces || {}).map((t => (0, s.M)(t))).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
                    if (e && r) return [e, r];
                    const i = (0, s.M)(Object.keys(this.namespaces)[0]);
                    return [i, this.rpcProviders[i].getDefaultChain()]
                }
                async requestAccounts() {
                    const [t] = this.validateChain();
                    return await this.getProvider(t).requestAccounts()
                }
                onChainChanged(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var r;
                    if (!this.namespaces) return;
                    const [i, n] = this.validateChain(t);
                    e || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(t, e) {
                    this.client.core.storage.setItem(`${on}/${t}`, e)
                }
                async getFromStore(t) {
                    return await this.client.core.storage.getItem(`${on}/${t}`)
                }
            }
            const Zn = Fn,
                Wn = ["eth_sendTransaction", "personal_sign"],
                Gn = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Jn = ["chainChanged", "accountsChanged"],
                Qn = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var Yn = Object.defineProperty,
                Xn = Object.defineProperties,
                ts = Object.getOwnPropertyDescriptors,
                es = Object.getOwnPropertySymbols,
                rs = Object.prototype.hasOwnProperty,
                is = Object.prototype.propertyIsEnumerable,
                ns = (t, e, r) => e in t ? Yn(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                ss = (t, e) => {
                    for (var r in e || (e = {})) rs.call(e, r) && ns(t, r, e[r]);
                    if (es)
                        for (var r of es(e)) is.call(e, r) && ns(t, r, e[r]);
                    return t
                },
                os = (t, e) => Xn(t, ts(e));

            function as(t) {
                return Number(t[0].split(":")[1])
            }

            function cs(t) {
                return `0x${t.toString(16)}`
            }
            class hs {
                constructor() {
                    this.events = new i.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
                }
                static async init(t) {
                    const e = new hs;
                    return await e.initialize(t), e
                }
                async request(t) {
                    return await this.signer.request(t, this.formatChainId(this.chainId))
                }
                sendAsync(t, e) {
                    this.signer.sendAsync(t, e, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(t) {
                    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(t);
                    const {
                        required: e,
                        optional: r
                    } = function(t) {
                        const {
                            chains: e,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: o,
                            optionalEvents: a,
                            rpcMap: c
                        } = t;
                        if (!(0, s.qt)(e)) throw new Error("Invalid chains");
                        const h = {
                                chains: e,
                                methods: i || Wn,
                                events: o || Jn,
                                rpcMap: ss({}, e.length ? {
                                    [as(e)]: c[as(e)]
                                } : {})
                            },
                            u = null === o || void 0 === o ? void 0 : o.filter((t => !Jn.includes(t))),
                            l = null === i || void 0 === i ? void 0 : i.filter((t => !Wn.includes(t)));
                        if (!r && !a && !n && (null == u || !u.length) && (null == l || !l.length)) return {
                            required: e.length ? h : void 0
                        };
                        const p = (null === u || void 0 === u ? void 0 : u.length) && (null === l || void 0 === l ? void 0 : l.length) || !r,
                            f = {
                                chains: [...new Set(p ? h.chains.concat(r || []) : r)],
                                methods: [...new Set(h.methods.concat(null != n && n.length ? n : Gn))],
                                events: [...new Set(h.events.concat(null != a && a.length ? a : Qn))],
                                rpcMap: c
                            };
                        return {
                            required: e.length ? h : void 0,
                            optional: r.length ? f : void 0
                        }
                    }(this.rpc);
                    try {
                        const i = await new Promise((async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((t => {
                                !t.open && !this.signer.session && (this.signer.abortPairingAttempt(), n(new Error("Connection request reset. Please try again.")))
                            }))), await this.signer.connect(os(ss({
                                namespaces: ss({}, e && {
                                    [this.namespace]: e
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: null === t || void 0 === t ? void 0 : t.pairingTopic
                            })).then((t => {
                                i(t)
                            })).catch((t => {
                                n(new Error(t.message))
                            }))
                        }));
                        if (!i) return;
                        const n = (0, s.gu)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: cs(this.chainId)
                        })
                    } catch (u) {
                        throw this.signer.logger.error(u), u
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", (t => {
                        const {
                            params: e
                        } = t, {
                            event: r
                        } = e;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", t)
                    })), this.signer.on("chainChanged", (t => {
                        const e = parseInt(t);
                        this.chainId = e, this.events.emit("chainChanged", cs(this.chainId)), this.persist()
                    })), this.signer.on("session_update", (t => {
                        this.events.emit("session_update", t)
                    })), this.signer.on("session_delete", (t => {
                        this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", os(ss({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    })), this.signer.on("display_uri", (t => {
                        var e, r;
                        this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: t
                        })), this.events.emit("display_uri", t)
                    }))
                }
                switchEthereumChain(t) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: t.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(t) {
                    return "string" == typeof t && t.startsWith(`${this.namespace}:`)
                }
                formatChainId(t) {
                    return `${this.namespace}:${t}`
                }
                parseChainId(t) {
                    return Number(t.split(":")[1])
                }
                setChainIds(t) {
                    const e = t.filter((t => this.isCompatibleChainId(t))).map((t => this.parseChainId(t)));
                    e.length && (this.chainId = e[0], this.events.emit("chainChanged", cs(this.chainId)), this.persist())
                }
                setChainId(t) {
                    if (this.isCompatibleChainId(t)) {
                        const e = this.parseChainId(t);
                        this.chainId = e, this.switchEthereumChain(e)
                    }
                }
                parseAccountId(t) {
                    const [e, r, i] = t.split(":");
                    return {
                        chainId: `${e}:${r}`,
                        address: i
                    }
                }
                setAccounts(t) {
                    this.accounts = t.filter((t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId)).map((t => this.parseAccountId(t).address)), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(t) {
                    var e, r;
                    const i = null != (e = null === t || void 0 === t ? void 0 : t.chains) ? e : [],
                        n = null != (r = null === t || void 0 === t ? void 0 : t.optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const o = i.length ? (null === t || void 0 === t ? void 0 : t.methods) || Wn : [],
                        a = i.length ? (null === t || void 0 === t ? void 0 : t.events) || Jn : [],
                        c = (null === t || void 0 === t ? void 0 : t.optionalMethods) || [],
                        h = (null === t || void 0 === t ? void 0 : t.optionalEvents) || [],
                        u = (null === t || void 0 === t ? void 0 : t.rpcMap) || this.buildRpcMap(s, t.projectId),
                        l = (null === t || void 0 === t ? void 0 : t.qrModalOptions) || void 0;
                    return {
                        chains: null === i || void 0 === i ? void 0 : i.map((t => this.formatChainId(t))),
                        optionalChains: n.map((t => this.formatChainId(t))),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: h,
                        rpcMap: u,
                        showQrModal: !(null == t || !t.showQrModal),
                        qrModalOptions: l,
                        projectId: t.projectId,
                        metadata: t.metadata
                    }
                }
                buildRpcMap(t, e) {
                    const r = {};
                    return t.forEach((t => {
                        r[t] = this.getRpcUrl(t, e)
                    })), r
                }
                async initialize(t) {
                    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? as(this.rpc.chains) : as(this.rpc.optionalChains), this.signer = await Zn.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: t.disableProviderPing,
                            relayUrl: t.relayUrl,
                            storageOptions: t.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let t;
                        try {
                            const {
                                WalletConnectModal: e
                            } = await r.e(495).then(r.bind(r, 22495));
                            t = e
                        } catch {
                            throw new Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (t) try {
                            this.modal = new t(ss({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), new Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(t) {
                    if (!t) return;
                    const {
                        chains: e,
                        optionalChains: r,
                        rpcMap: i
                    } = t;
                    e && (0, s.qt)(e) && (this.rpc.chains = e.map((t => this.formatChainId(t))), e.forEach((t => {
                        this.rpc.rpcMap[t] = (null === i || void 0 === i ? void 0 : i[t]) || this.getRpcUrl(t)
                    }))), r && (0, s.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null === r || void 0 === r ? void 0 : r.map((t => this.formatChainId(t))), r.forEach((t => {
                        this.rpc.rpcMap[t] = (null === i || void 0 === i ? void 0 : i[t]) || this.getRpcUrl(t)
                    })))
                }
                getRpcUrl(t, e) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(t ? [this.formatChainId(t)] : null === e || void 0 === e ? void 0 : e.accounts), this.setAccounts(null === e || void 0 === e ? void 0 : e.accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(t) {
                    return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map((t => this.parseAccount(t)))
                }
            }
            const us = hs
        },
        21124: (t, e, r) => {
            "use strict";
            r.d(e, {
                q: () => i
            });
            class i {}
        },
        67910: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                IEvents: () => i.q
            });
            var i = r(21124)
        },
        86014: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0;
            const i = r(79486);
            e.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, e.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        46427: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            r(73104).__exportStar(r(86014), e)
        },
        28576: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HeartBeat = void 0;
            const i = r(73104),
                n = r(16977),
                s = r(79486),
                o = r(17414),
                a = r(46427);
            class c extends o.IHeartBeat {
                constructor(t) {
                    super(t), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null === t || void 0 === t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        const e = new c(t);
                        return yield e.init(), e
                    }))
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        yield this.initialize()
                    }))
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval))
                    }))
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            e.HeartBeat = c
        },
        16114: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(73104);
            i.__exportStar(r(28576), e), i.__exportStar(r(17414), e), i.__exportStar(r(46427), e)
        },
        13023: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IHeartBeat = void 0;
            const i = r(67910);
            class n extends i.IEvents {
                constructor(t) {
                    super()
                }
            }
            e.IHeartBeat = n
        },
        17414: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            r(73104).__exportStar(r(13023), e)
        },
        52104: (t, e, r) => {
            "use strict";
            const i = r(73104),
                n = r(71697),
                s = i.__importDefault(r(49017)),
                o = r(18468);
            class a {
                constructor() {
                    this.localStorage = s.default
                }
                getKeys() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        return Object.keys(this.localStorage)
                    }))
                }
                getEntries() {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        return Object.entries(this.localStorage).map(o.parseEntry)
                    }))
                }
                getItem(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        const e = this.localStorage.getItem(t);
                        if (null !== e) return n.safeJsonParse(e)
                    }))
                }
                setItem(t, e) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.localStorage.setItem(t, n.safeJsonStringify(e))
                    }))
                }
                removeItem(t) {
                    return i.__awaiter(this, void 0, void 0, (function*() {
                        this.localStorage.removeItem(t)
                    }))
                }
            }
            e.ZP = a
        },
        49017: (t, e, r) => {
            "use strict";
            ! function() {
                let e;

                function i() {}
                e = i, e.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, e.prototype.setItem = function(t, e) {
                    this[t] = String(e)
                }, e.prototype.removeItem = function(t) {
                    delete this[t]
                }, e.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach((function(e) {
                        t[e] = void 0, delete t[e]
                    }))
                }, e.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, e.prototype.__defineGetter__("length", (function() {
                    return Object.keys(this).length
                })), "undefined" !== typeof r.g && r.g.localStorage ? t.exports = r.g.localStorage : "undefined" !== typeof window && window.localStorage ? t.exports = window.localStorage : t.exports = new i
            }()
        },
        18468: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(73104);
            i.__exportStar(r(88500), e), i.__exportStar(r(33041), e)
        },
        88500: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IKeyValueStorage = void 0;
            e.IKeyValueStorage = class {}
        },
        33041: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.parseEntry = void 0;
            const i = r(71697);
            e.parseEntry = function(t) {
                var e;
                return [t[0], i.safeJsonParse(null !== (e = t[1]) && void 0 !== e ? e : "")]
            }
        },
        27407: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PINO_CUSTOM_CONTEXT_KEY = e.PINO_LOGGER_DEFAULTS = void 0, e.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, e.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        79485: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.pino = void 0;
            const i = r(73104),
                n = i.__importDefault(r(85277));
            Object.defineProperty(e, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(27407), e), i.__exportStar(r(62199), e)
        },
        62199: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.generateChildLogger = e.formatChildLoggerContext = e.getLoggerContext = e.setBrowserLoggerContext = e.getBrowserLoggerContext = e.getDefaultLoggerOptions = void 0;
            const i = r(27407);

            function n(t) {
                return t[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.PINO_CUSTOM_CONTEXT_KEY] || ""
            }

            function s(t, e) {
                return t[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.PINO_CUSTOM_CONTEXT_KEY] = e, t
            }

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.PINO_CUSTOM_CONTEXT_KEY,
                    r = "";
                return r = "undefined" === typeof t.bindings ? n(t, e) : t.bindings().context || "", r
            }

            function a(t, e) {
                const r = o(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.PINO_CUSTOM_CONTEXT_KEY);
                return r.trim() ? `${r}/${e}` : e
            }
            e.getDefaultLoggerOptions = function(t) {
                return Object.assign(Object.assign({}, t), {
                    level: (null === t || void 0 === t ? void 0 : t.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, e.getBrowserLoggerContext = n, e.setBrowserLoggerContext = s, e.getLoggerContext = o, e.formatChildLoggerContext = a, e.generateChildLogger = function(t, e) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.PINO_CUSTOM_CONTEXT_KEY;
                const n = a(t, e, r);
                return s(t.child({
                    context: n
                }), n, r)
            }
        },
        29744: () => {},
        81045: function(t, e) {
            var r = "undefined" !== typeof self ? self : this,
                i = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return t.prototype = r, new t
                }();
            ! function(t) {
                ! function(e) {
                    var r = "URLSearchParams" in t,
                        i = "Symbol" in t && "iterator" in Symbol,
                        n = "FileReader" in t && "Blob" in t && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        s = "FormData" in t,
                        o = "ArrayBuffer" in t;
                    if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        c = ArrayBuffer.isView || function(t) {
                            return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function h(t) {
                        if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function u(t) {
                        return "string" !== typeof t && (t = String(t)), t
                    }

                    function l(t) {
                        var e = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return i && (e[Symbol.iterator] = function() {
                            return e
                        }), e
                    }

                    function p(t) {
                        this.map = {}, t instanceof p ? t.forEach((function(t, e) {
                            this.append(e, t)
                        }), this) : Array.isArray(t) ? t.forEach((function(t) {
                            this.append(t[0], t[1])
                        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                            this.append(e, t[e])
                        }), this)
                    }

                    function f(t) {
                        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function d(t) {
                        return new Promise((function(e, r) {
                            t.onload = function() {
                                e(t.result)
                            }, t.onerror = function() {
                                r(t.error)
                            }
                        }))
                    }

                    function g(t) {
                        var e = new FileReader,
                            r = d(e);
                        return e.readAsArrayBuffer(t), r
                    }

                    function v(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer
                    }

                    function y() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            var e;
                            this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : n && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : o && n && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = v(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t)) ? this._bodyArrayBuffer = v(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, n && (this.blob = function() {
                            var t = f(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                        }), this.text = function() {
                            var t = f(this);
                            if (t) return t;
                            if (this._bodyBlob) return function(t) {
                                var e = new FileReader,
                                    r = d(e);
                                return e.readAsText(t), r
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), r = new Array(e.length), i = 0; i < e.length; i++) r[i] = String.fromCharCode(e[i]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, s && (this.formData = function() {
                            return this.text().then(_)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    p.prototype.append = function(t, e) {
                        t = h(t), e = u(e);
                        var r = this.map[t];
                        this.map[t] = r ? r + ", " + e : e
                    }, p.prototype.delete = function(t) {
                        delete this.map[h(t)]
                    }, p.prototype.get = function(t) {
                        return t = h(t), this.has(t) ? this.map[t] : null
                    }, p.prototype.has = function(t) {
                        return this.map.hasOwnProperty(h(t))
                    }, p.prototype.set = function(t, e) {
                        this.map[h(t)] = u(e)
                    }, p.prototype.forEach = function(t, e) {
                        for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                    }, p.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, r) {
                            t.push(r)
                        })), l(t)
                    }, p.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        })), l(t)
                    }, p.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, r) {
                            t.push([r, e])
                        })), l(t)
                    }, i && (p.prototype[Symbol.iterator] = p.prototype.entries);
                    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function w(t, e) {
                        var r = (e = e || {}).body;
                        if (t instanceof w) {
                            if (t.bodyUsed) throw new TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = function(t) {
                                var e = t.toUpperCase();
                                return m.indexOf(e) > -1 ? e : t
                            }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(r)
                    }

                    function _(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach((function(t) {
                            if (t) {
                                var r = t.split("="),
                                    i = r.shift().replace(/\+/g, " "),
                                    n = r.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(i), decodeURIComponent(n))
                            }
                        })), e
                    }

                    function b(t) {
                        var e = new p;
                        return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                            var r = t.split(":"),
                                i = r.shift().trim();
                            if (i) {
                                var n = r.join(":").trim();
                                e.append(i, n)
                            }
                        })), e
                    }

                    function E(t, e) {
                        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
                    }
                    w.prototype.clone = function() {
                        return new w(this, {
                            body: this._bodyInit
                        })
                    }, y.call(w.prototype), y.call(E.prototype), E.prototype.clone = function() {
                        return new E(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new p(this.headers),
                            url: this.url
                        })
                    }, E.error = function() {
                        var t = new E(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var I = [301, 302, 303, 307, 308];
                    E.redirect = function(t, e) {
                        if (-1 === I.indexOf(e)) throw new RangeError("Invalid status code");
                        return new E(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, e.DOMException = t.DOMException;
                    try {
                        new e.DOMException
                    } catch (S) {
                        e.DOMException = function(t, e) {
                            this.message = t, this.name = e;
                            var r = Error(t);
                            this.stack = r.stack
                        }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                    }

                    function P(t, r) {
                        return new Promise((function(i, s) {
                            var o = new w(t, r);
                            if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                            var a = new XMLHttpRequest;

                            function c() {
                                a.abort()
                            }
                            a.onload = function() {
                                var t = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: b(a.getAllResponseHeaders() || "")
                                };
                                t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                                var e = "response" in a ? a.response : a.responseText;
                                i(new E(e, t))
                            }, a.onerror = function() {
                                s(new TypeError("Network request failed"))
                            }, a.ontimeout = function() {
                                s(new TypeError("Network request failed"))
                            }, a.onabort = function() {
                                s(new e.DOMException("Aborted", "AbortError"))
                            }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && n && (a.responseType = "blob"), o.headers.forEach((function(t, e) {
                                a.setRequestHeader(e, t)
                            })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                                4 === a.readyState && o.signal.removeEventListener("abort", c)
                            }), a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                        }))
                    }
                    P.polyfill = !0, t.fetch || (t.fetch = P, t.Headers = p, t.Request = w, t.Response = E), e.Headers = p, e.Request = w, e.Response = E, e.fetch = P, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }({})
            }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
            var n = i;
            (e = n.fetch).default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, t.exports = e
        },
        16977: t => {
            "use strict";
            var e, r = "object" === typeof Reflect ? Reflect : null,
                i = r && "function" === typeof r.apply ? r.apply : function(t, e, r) {
                    return Function.prototype.apply.call(t, e, r)
                };
            e = r && "function" === typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var n = Number.isNaN || function(t) {
                return t !== t
            };

            function s() {
                s.init.call(this)
            }
            t.exports = s, t.exports.once = function(t, e) {
                return new Promise((function(r, i) {
                    function n(r) {
                        t.removeListener(e, s), i(r)
                    }

                    function s() {
                        "function" === typeof t.removeListener && t.removeListener("error", n), r([].slice.call(arguments))
                    }
                    g(t, e, s, {
                        once: !0
                    }), "error" !== e && function(t, e, r) {
                        "function" === typeof t.on && g(t, "error", e, r)
                    }(t, n, {
                        once: !0
                    })
                }))
            }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var o = 10;

            function a(t) {
                if ("function" !== typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function c(t) {
                return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
            }

            function h(t, e, r, i) {
                var n, s, o, h;
                if (a(r), void 0 === (s = t._events) ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), s = t._events), o = s[e]), void 0 === o) o = s[e] = r, ++t._eventsCount;
                else if ("function" === typeof o ? o = s[e] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), (n = c(t)) > 0 && o.length > n && !o.warned) {
                    o.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = o.length, h = u, console && console.warn && console.warn(h)
                }
                return t
            }

            function u() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function l(t, e, r) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: r
                    },
                    n = u.bind(i);
                return n.listener = r, i.wrapFn = n, n
            }

            function p(t, e, r) {
                var i = t._events;
                if (void 0 === i) return [];
                var n = i[e];
                return void 0 === n ? [] : "function" === typeof n ? r ? [n.listener || n] : [n] : r ? function(t) {
                    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
                    return e
                }(n) : d(n, n.length)
            }

            function f(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var r = e[t];
                    if ("function" === typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function d(t, e) {
                for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
                return r
            }

            function g(t, e, r, i) {
                if ("function" === typeof t.on) i.once ? t.once(e, r) : t.on(e, r);
                else {
                    if ("function" !== typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                    t.addEventListener(e, (function n(s) {
                        i.once && t.removeEventListener(e, n), r(s)
                    }))
                }
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    if ("number" !== typeof t || t < 0 || n(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    o = t
                }
            }), s.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(t) {
                if ("number" !== typeof t || t < 0 || n(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, s.prototype.getMaxListeners = function() {
                return c(this)
            }, s.prototype.emit = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
                var n = "error" === t,
                    s = this._events;
                if (void 0 !== s) n = n && void 0 === s.error;
                else if (!n) return !1;
                if (n) {
                    var o;
                    if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
                    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o, a
                }
                var c = s[t];
                if (void 0 === c) return !1;
                if ("function" === typeof c) i(c, this, e);
                else {
                    var h = c.length,
                        u = d(c, h);
                    for (r = 0; r < h; ++r) i(u[r], this, e)
                }
                return !0
            }, s.prototype.addListener = function(t, e) {
                return h(this, t, e, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, e) {
                return h(this, t, e, !0)
            }, s.prototype.once = function(t, e) {
                return a(e), this.on(t, l(this, t, e)), this
            }, s.prototype.prependOnceListener = function(t, e) {
                return a(e), this.prependListener(t, l(this, t, e)), this
            }, s.prototype.removeListener = function(t, e) {
                var r, i, n, s, o;
                if (a(e), void 0 === (i = this._events)) return this;
                if (void 0 === (r = i[t])) return this;
                if (r === e || r.listener === e) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || e));
                else if ("function" !== typeof r) {
                    for (n = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === e || r[s].listener === e) {
                            o = r[s].listener, n = s;
                            break
                        }
                    if (n < 0) return this;
                    0 === n ? r.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(r, n), 1 === r.length && (i[t] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", t, o || e)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
                var e, r, i;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
                if (0 === arguments.length) {
                    var n, s = Object.keys(r);
                    for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" === typeof(e = r[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
                return this
            }, s.prototype.listeners = function(t) {
                return p(this, t, !0)
            }, s.prototype.rawListeners = function(t) {
                return p(this, t, !1)
            }, s.listenerCount = function(t, e) {
                return "function" === typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
            }, s.prototype.listenerCount = f, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? e(this._events) : []
            }
        },
        8753: (t, e, r) => {
            t = r.nmd(t);
            var i = "__lodash_hash_undefined__",
                n = 1,
                s = 2,
                o = 9007199254740991,
                a = "[object Arguments]",
                c = "[object Array]",
                h = "[object AsyncFunction]",
                u = "[object Boolean]",
                l = "[object Date]",
                p = "[object Error]",
                f = "[object Function]",
                d = "[object GeneratorFunction]",
                g = "[object Map]",
                v = "[object Number]",
                y = "[object Null]",
                m = "[object Object]",
                w = "[object Promise]",
                _ = "[object Proxy]",
                b = "[object RegExp]",
                E = "[object Set]",
                I = "[object String]",
                P = "[object Symbol]",
                S = "[object Undefined]",
                O = "[object WeakMap]",
                x = "[object ArrayBuffer]",
                C = "[object DataView]",
                R = /^\[object .+?Constructor\]$/,
                A = /^(?:0|[1-9]\d*)$/,
                T = {};
            T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T[a] = T[c] = T[x] = T[u] = T[C] = T[l] = T[p] = T[f] = T[g] = T[v] = T[m] = T[b] = T[E] = T[I] = T[O] = !1;
            var N = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                j = "object" == typeof self && self && self.Object === Object && self,
                L = N || j || Function("return this")(),
                q = e && !e.nodeType && e,
                D = q && t && !t.nodeType && t,
                M = D && D.exports === q,
                z = M && N.process,
                k = function() {
                    try {
                        return z && z.binding && z.binding("util")
                    } catch (t) {}
                }(),
                $ = k && k.isTypedArray;

            function U(t, e) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (e(t[r], r, t)) return !0;
                return !1
            }

            function H(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t, i) {
                    r[++e] = [i, t]
                })), r
            }

            function V(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t
                })), r
            }
            var B, K, F = Array.prototype,
                Z = Function.prototype,
                W = Object.prototype,
                G = L["__core-js_shared__"],
                J = Z.toString,
                Q = W.hasOwnProperty,
                Y = function() {
                    var t = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
                    return t ? "Symbol(src)_1." + t : ""
                }(),
                X = W.toString,
                tt = RegExp("^" + J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                et = M ? L.Buffer : void 0,
                rt = L.Symbol,
                it = L.Uint8Array,
                nt = W.propertyIsEnumerable,
                st = F.splice,
                ot = rt ? rt.toStringTag : void 0,
                at = Object.getOwnPropertySymbols,
                ct = et ? et.isBuffer : void 0,
                ht = (B = Object.keys, K = Object, function(t) {
                    return B(K(t))
                }),
                ut = zt(L, "DataView"),
                lt = zt(L, "Map"),
                pt = zt(L, "Promise"),
                ft = zt(L, "Set"),
                dt = zt(L, "WeakMap"),
                gt = zt(Object, "create"),
                vt = Ht(ut),
                yt = Ht(lt),
                mt = Ht(pt),
                wt = Ht(ft),
                _t = Ht(dt),
                bt = rt ? rt.prototype : void 0,
                Et = bt ? bt.valueOf : void 0;

            function It(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function Pt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function St(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var i = t[e];
                    this.set(i[0], i[1])
                }
            }

            function Ot(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new St; ++e < r;) this.add(t[e])
            }

            function xt(t) {
                var e = this.__data__ = new Pt(t);
                this.size = e.size
            }

            function Ct(t, e) {
                var r = Kt(t),
                    i = !r && Bt(t),
                    n = !r && !i && Ft(t),
                    s = !r && !i && !n && Qt(t),
                    o = r || i || n || s,
                    a = o ? function(t, e) {
                        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                        return i
                    }(t.length, String) : [],
                    c = a.length;
                for (var h in t) !e && !Q.call(t, h) || o && ("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || Ut(h, c)) || a.push(h);
                return a
            }

            function Rt(t, e) {
                for (var r = t.length; r--;)
                    if (Vt(t[r][0], e)) return r;
                return -1
            }

            function At(t) {
                return null == t ? void 0 === t ? S : y : ot && ot in Object(t) ? function(t) {
                    var e = Q.call(t, ot),
                        r = t[ot];
                    try {
                        t[ot] = void 0;
                        var i = !0
                    } catch (s) {}
                    var n = X.call(t);
                    i && (e ? t[ot] = r : delete t[ot]);
                    return n
                }(t) : function(t) {
                    return X.call(t)
                }(t)
            }

            function Tt(t) {
                return Jt(t) && At(t) == a
            }

            function Nt(t, e, r, i, o) {
                return t === e || (null == t || null == e || !Jt(t) && !Jt(e) ? t !== t && e !== e : function(t, e, r, i, o, h) {
                    var f = Kt(t),
                        d = Kt(e),
                        y = f ? c : $t(t),
                        w = d ? c : $t(e),
                        _ = (y = y == a ? m : y) == m,
                        S = (w = w == a ? m : w) == m,
                        O = y == w;
                    if (O && Ft(t)) {
                        if (!Ft(e)) return !1;
                        f = !0, _ = !1
                    }
                    if (O && !_) return h || (h = new xt), f || Qt(t) ? qt(t, e, r, i, o, h) : function(t, e, r, i, o, a, c) {
                        switch (r) {
                            case C:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                t = t.buffer, e = e.buffer;
                            case x:
                                return !(t.byteLength != e.byteLength || !a(new it(t), new it(e)));
                            case u:
                            case l:
                            case v:
                                return Vt(+t, +e);
                            case p:
                                return t.name == e.name && t.message == e.message;
                            case b:
                            case I:
                                return t == e + "";
                            case g:
                                var h = H;
                            case E:
                                var f = i & n;
                                if (h || (h = V), t.size != e.size && !f) return !1;
                                var d = c.get(t);
                                if (d) return d == e;
                                i |= s, c.set(t, e);
                                var y = qt(h(t), h(e), i, o, a, c);
                                return c.delete(t), y;
                            case P:
                                if (Et) return Et.call(t) == Et.call(e)
                        }
                        return !1
                    }(t, e, y, r, i, o, h);
                    if (!(r & n)) {
                        var R = _ && Q.call(t, "__wrapped__"),
                            A = S && Q.call(e, "__wrapped__");
                        if (R || A) {
                            var T = R ? t.value() : t,
                                N = A ? e.value() : e;
                            return h || (h = new xt), o(T, N, r, i, h)
                        }
                    }
                    if (!O) return !1;
                    return h || (h = new xt),
                        function(t, e, r, i, s, o) {
                            var a = r & n,
                                c = Dt(t),
                                h = c.length,
                                u = Dt(e),
                                l = u.length;
                            if (h != l && !a) return !1;
                            var p = h;
                            for (; p--;) {
                                var f = c[p];
                                if (!(a ? f in e : Q.call(e, f))) return !1
                            }
                            var d = o.get(t);
                            if (d && o.get(e)) return d == e;
                            var g = !0;
                            o.set(t, e), o.set(e, t);
                            var v = a;
                            for (; ++p < h;) {
                                var y = t[f = c[p]],
                                    m = e[f];
                                if (i) var w = a ? i(m, y, f, e, t, o) : i(y, m, f, t, e, o);
                                if (!(void 0 === w ? y === m || s(y, m, r, i, o) : w)) {
                                    g = !1;
                                    break
                                }
                                v || (v = "constructor" == f)
                            }
                            if (g && !v) {
                                var _ = t.constructor,
                                    b = e.constructor;
                                _ == b || !("constructor" in t) || !("constructor" in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b || (g = !1)
                            }
                            return o.delete(t), o.delete(e), g
                        }(t, e, r, i, o, h)
                }(t, e, r, i, Nt, o))
            }

            function jt(t) {
                return !(!Gt(t) || function(t) {
                    return !!Y && Y in t
                }(t)) && (Zt(t) ? tt : R).test(Ht(t))
            }

            function Lt(t) {
                if (! function(t) {
                        var e = t && t.constructor,
                            r = "function" == typeof e && e.prototype || W;
                        return t === r
                    }(t)) return ht(t);
                var e = [];
                for (var r in Object(t)) Q.call(t, r) && "constructor" != r && e.push(r);
                return e
            }

            function qt(t, e, r, i, o, a) {
                var c = r & n,
                    h = t.length,
                    u = e.length;
                if (h != u && !(c && u > h)) return !1;
                var l = a.get(t);
                if (l && a.get(e)) return l == e;
                var p = -1,
                    f = !0,
                    d = r & s ? new Ot : void 0;
                for (a.set(t, e), a.set(e, t); ++p < h;) {
                    var g = t[p],
                        v = e[p];
                    if (i) var y = c ? i(v, g, p, e, t, a) : i(g, v, p, t, e, a);
                    if (void 0 !== y) {
                        if (y) continue;
                        f = !1;
                        break
                    }
                    if (d) {
                        if (!U(e, (function(t, e) {
                                if (n = e, !d.has(n) && (g === t || o(g, t, r, i, a))) return d.push(e);
                                var n
                            }))) {
                            f = !1;
                            break
                        }
                    } else if (g !== v && !o(g, v, r, i, a)) {
                        f = !1;
                        break
                    }
                }
                return a.delete(t), a.delete(e), f
            }

            function Dt(t) {
                return function(t, e, r) {
                    var i = e(t);
                    return Kt(t) ? i : function(t, e) {
                        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
                        return t
                    }(i, r(t))
                }(t, Yt, kt)
            }

            function Mt(t, e) {
                var r = t.__data__;
                return function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }

            function zt(t, e) {
                var r = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return jt(r) ? r : void 0
            }
            It.prototype.clear = function() {
                this.__data__ = gt ? gt(null) : {}, this.size = 0
            }, It.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, It.prototype.get = function(t) {
                var e = this.__data__;
                if (gt) {
                    var r = e[t];
                    return r === i ? void 0 : r
                }
                return Q.call(e, t) ? e[t] : void 0
            }, It.prototype.has = function(t) {
                var e = this.__data__;
                return gt ? void 0 !== e[t] : Q.call(e, t)
            }, It.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = gt && void 0 === e ? i : e, this
            }, Pt.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, Pt.prototype.delete = function(t) {
                var e = this.__data__,
                    r = Rt(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : st.call(e, r, 1), --this.size, !0)
            }, Pt.prototype.get = function(t) {
                var e = this.__data__,
                    r = Rt(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, Pt.prototype.has = function(t) {
                return Rt(this.__data__, t) > -1
            }, Pt.prototype.set = function(t, e) {
                var r = this.__data__,
                    i = Rt(r, t);
                return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
            }, St.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new It,
                    map: new(lt || Pt),
                    string: new It
                }
            }, St.prototype.delete = function(t) {
                var e = Mt(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, St.prototype.get = function(t) {
                return Mt(this, t).get(t)
            }, St.prototype.has = function(t) {
                return Mt(this, t).has(t)
            }, St.prototype.set = function(t, e) {
                var r = Mt(this, t),
                    i = r.size;
                return r.set(t, e), this.size += r.size == i ? 0 : 1, this
            }, Ot.prototype.add = Ot.prototype.push = function(t) {
                return this.__data__.set(t, i), this
            }, Ot.prototype.has = function(t) {
                return this.__data__.has(t)
            }, xt.prototype.clear = function() {
                this.__data__ = new Pt, this.size = 0
            }, xt.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, xt.prototype.get = function(t) {
                return this.__data__.get(t)
            }, xt.prototype.has = function(t) {
                return this.__data__.has(t)
            }, xt.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof Pt) {
                    var i = r.__data__;
                    if (!lt || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new St(i)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var kt = at ? function(t) {
                    return null == t ? [] : (t = Object(t), function(t, e) {
                        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                            var o = t[r];
                            e(o, r, t) && (s[n++] = o)
                        }
                        return s
                    }(at(t), (function(e) {
                        return nt.call(t, e)
                    })))
                } : function() {
                    return []
                },
                $t = At;

            function Ut(t, e) {
                return !!(e = null == e ? o : e) && ("number" == typeof t || A.test(t)) && t > -1 && t % 1 == 0 && t < e
            }

            function Ht(t) {
                if (null != t) {
                    try {
                        return J.call(t)
                    } catch (e) {}
                    try {
                        return t + ""
                    } catch (e) {}
                }
                return ""
            }

            function Vt(t, e) {
                return t === e || t !== t && e !== e
            }(ut && $t(new ut(new ArrayBuffer(1))) != C || lt && $t(new lt) != g || pt && $t(pt.resolve()) != w || ft && $t(new ft) != E || dt && $t(new dt) != O) && ($t = function(t) {
                var e = At(t),
                    r = e == m ? t.constructor : void 0,
                    i = r ? Ht(r) : "";
                if (i) switch (i) {
                    case vt:
                        return C;
                    case yt:
                        return g;
                    case mt:
                        return w;
                    case wt:
                        return E;
                    case _t:
                        return O
                }
                return e
            });
            var Bt = Tt(function() {
                    return arguments
                }()) ? Tt : function(t) {
                    return Jt(t) && Q.call(t, "callee") && !nt.call(t, "callee")
                },
                Kt = Array.isArray;
            var Ft = ct || function() {
                return !1
            };

            function Zt(t) {
                if (!Gt(t)) return !1;
                var e = At(t);
                return e == f || e == d || e == h || e == _
            }

            function Wt(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
            }

            function Gt(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }

            function Jt(t) {
                return null != t && "object" == typeof t
            }
            var Qt = $ ? function(t) {
                return function(e) {
                    return t(e)
                }
            }($) : function(t) {
                return Jt(t) && Wt(t.length) && !!T[At(t)]
            };

            function Yt(t) {
                return null != (e = t) && Wt(e.length) && !Zt(e) ? Ct(t) : Lt(t);
                var e
            }
            t.exports = function(t, e) {
                return Nt(t, e)
            }
        },
        92297: t => {
            "use strict";

            function e(t) {
                try {
                    return JSON.stringify(t)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            t.exports = function(t, r, i) {
                var n = i && i.stringify || e;
                if ("object" === typeof t && null !== t) {
                    var s = r.length + 1;
                    if (1 === s) return t;
                    var o = new Array(s);
                    o[0] = n(t);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" !== typeof t) return t;
                var c = r.length;
                if (0 === c) return t;
                for (var h = "", u = 0, l = -1, p = t && t.length || 0, f = 0; f < p;) {
                    if (37 === t.charCodeAt(f) && f + 1 < p) {
                        switch (l = l > -1 ? l : 0, t.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (u >= c) break;
                                if (null == r[u]) break;
                                l < f && (h += t.slice(l, f)), h += Number(r[u]), l = f + 2, f++;
                                break;
                            case 105:
                                if (u >= c) break;
                                if (null == r[u]) break;
                                l < f && (h += t.slice(l, f)), h += Math.floor(Number(r[u])), l = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (u >= c) break;
                                if (void 0 === r[u]) break;
                                l < f && (h += t.slice(l, f));
                                var d = typeof r[u];
                                if ("string" === d) {
                                    h += "'" + r[u] + "'", l = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    h += r[u].name || "<anonymous>", l = f + 2, f++;
                                    break
                                }
                                h += n(r[u]), l = f + 2, f++;
                                break;
                            case 115:
                                if (u >= c) break;
                                l < f && (h += t.slice(l, f)), h += String(r[u]), l = f + 2, f++;
                                break;
                            case 37:
                                l < f && (h += t.slice(l, f)), h += "%", l = f + 2, f++, u--
                        }++u
                    }++f
                }
                if (-1 === l) return t;
                l < p && (h += t.slice(l));
                return h
            }
        },
        71697: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.safeJsonParse = function(t) {
                if ("string" !== typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return t
                }
            }, e.safeJsonStringify = function(t) {
                return "string" === typeof t ? t : JSON.stringify(t, ((t, e) => "undefined" === typeof e ? null : e))
            }
        },
        45746: t => {
            "use strict";
            t.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        85277: (t, e, r) => {
            "use strict";
            const i = r(92297);
            t.exports = o;
            const n = function() {
                    function t(t) {
                        return "undefined" !== typeof t && t
                    }
                    try {
                        return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch (e) {
                        return t(self) || t(window) || t(this) || {}
                    }
                }().console || {},
                s = {
                    mapHttpRequest: p,
                    mapHttpResponse: p,
                    wrapRequestSerializer: f,
                    wrapResponseSerializer: f,
                    wrapErrorSerializer: f,
                    req: p,
                    res: p,
                    err: function(t) {
                        const e = {
                            type: t.constructor.name,
                            msg: t.message,
                            stack: t.stack
                        };
                        for (const r in t) void 0 === e[r] && (e[r] = t[r]);
                        return e
                    }
                };

            function o(t) {
                (t = t || {}).browser = t.browser || {};
                const e = t.browser.transmit;
                if (e && "function" !== typeof e.send) throw Error("pino: transmit option must have a send function");
                const r = t.browser.write || n;
                t.browser.write && (t.browser.asObject = !0);
                const i = t.serializers || {},
                    s = function(t, e) {
                        if (Array.isArray(t)) return t.filter((function(t) {
                            return "!stdSerializers.err" !== t
                        }));
                        return !0 === t && Object.keys(e)
                    }(t.browser.serialize, i);
                let p = t.browser.serialize;
                Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (p = !1);
                "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === t.enabled && (t.level = "silent");
                const f = t.level || "info",
                    g = Object.create(r);
                g.log || (g.log = d), Object.defineProperty(g, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(g, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(t) {
                        if ("silent" !== t && !this.levels.values[t]) throw Error("unknown level " + t);
                        this._level = t, a(v, g, "error", "log"), a(v, g, "fatal", "error"), a(v, g, "warn", "error"), a(v, g, "info", "log"), a(v, g, "debug", "log"), a(v, g, "trace", "log")
                    }
                });
                const v = {
                    transmit: e,
                    serialize: s,
                    asObject: t.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: l(t)
                };
                return g.levels = o.levels, g.level = f, g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = d, g.serializers = i, g._serialize = s, g._stdErrSerialize = p, g.child = function(r, n) {
                    if (!r) throw new Error("missing bindings for child Pino");
                    n = n || {}, s && r.serializers && (n.serializers = r.serializers);
                    const o = n.serializers;
                    if (s && o) {
                        var a = Object.assign({}, i, o),
                            l = !0 === t.browser.serialize ? Object.keys(a) : s;
                        delete r.serializers, c([r], l, a, this._stdErrSerialize)
                    }

                    function p(t) {
                        this._childLevel = 1 + (0 | t._childLevel), this.error = h(t, r, "error"), this.fatal = h(t, r, "fatal"), this.warn = h(t, r, "warn"), this.info = h(t, r, "info"), this.debug = h(t, r, "debug"), this.trace = h(t, r, "trace"), a && (this.serializers = a, this._serialize = l), e && (this._logEvent = u([].concat(t._logEvent.bindings, r)))
                    }
                    return p.prototype = this, new p(this)
                }, e && (g._logEvent = u()), g
            }

            function a(t, e, r, s) {
                const a = Object.getPrototypeOf(e);
                e[r] = e.levelVal > e.levels.values[r] ? d : a[r] ? a[r] : n[r] || n[s] || d,
                    function(t, e, r) {
                        if (!t.transmit && e[r] === d) return;
                        e[r] = (s = e[r], function() {
                            const a = t.timestamp(),
                                h = new Array(arguments.length),
                                l = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                            for (var p = 0; p < h.length; p++) h[p] = arguments[p];
                            if (t.serialize && !t.asObject && c(h, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? s.call(l, function(t, e, r, n) {
                                    t._serialize && c(r, t._serialize, t.serializers, t._stdErrSerialize);
                                    const s = r.slice();
                                    let a = s[0];
                                    const h = {};
                                    n && (h.time = n), h.level = o.levels.values[e];
                                    let u = 1 + (0 | t._childLevel);
                                    if (u < 1 && (u = 1), null !== a && "object" === typeof a) {
                                        for (; u-- && "object" === typeof s[0];) Object.assign(h, s.shift());
                                        a = s.length ? i(s.shift(), s) : void 0
                                    } else "string" === typeof a && (a = i(s.shift(), s));
                                    return void 0 !== a && (h.msg = a), h
                                }(this, r, h, a)) : s.apply(l, h), t.transmit) {
                                const i = t.transmit.level || e.level,
                                    n = o.levels.values[i],
                                    s = o.levels.values[r];
                                if (s < n) return;
                                ! function(t, e, r) {
                                    const i = e.send,
                                        n = e.ts,
                                        s = e.methodLevel,
                                        o = e.methodValue,
                                        a = e.val,
                                        h = t._logEvent.bindings;
                                    c(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize), t._logEvent.ts = n, t._logEvent.messages = r.filter((function(t) {
                                        return -1 === h.indexOf(t)
                                    })), t._logEvent.level.label = s, t._logEvent.level.value = o, i(s, t._logEvent, a), t._logEvent = u(h)
                                }(this, {
                                    ts: a,
                                    methodLevel: r,
                                    methodValue: s,
                                    transmitLevel: i,
                                    transmitValue: o.levels.values[t.transmit.level || e.level],
                                    send: t.transmit.send,
                                    val: e.levelVal
                                }, h)
                            }
                        });
                        var s
                    }(t, e, r)
            }

            function c(t, e, r, i) {
                for (const n in t)
                    if (i && t[n] instanceof Error) t[n] = o.stdSerializers.err(t[n]);
                    else if ("object" === typeof t[n] && !Array.isArray(t[n]))
                    for (const i in t[n]) e && e.indexOf(i) > -1 && i in r && (t[n][i] = r[i](t[n][i]))
            }

            function h(t, e, r) {
                return function() {
                    const i = new Array(1 + arguments.length);
                    i[0] = e;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return t[r].apply(this, i)
                }
            }

            function u(t) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: t || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l(t) {
                return "function" === typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? g : v
            }

            function p() {
                return {}
            }

            function f(t) {
                return t
            }

            function d() {}

            function g() {
                return !1
            }

            function v() {
                return Date.now()
            }
            o.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
                nullTime: g,
                epochTime: v,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);
//# sourceMappingURL=897.8d98be23.chunk.js.map