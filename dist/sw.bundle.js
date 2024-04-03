if (!self.define) {
  let e,
    c = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    c[i] ||
      new Promise((c) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = c), document.head.appendChild(e);
        } else (e = i), importScripts(i), c();
      }).then(() => {
        let e = c[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, f) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (c[a]) return;
    let r = {};
    const s = (e) => i(e, a),
      o = { module: { uri: a }, exports: r, require: s };
    c[a] = Promise.all(n.map((e) => o[e] || s(e))).then((e) => (f(...e), r));
  };
}
define(["./workbox-d249b2c8"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "2.bundle.js", revision: "a27efe0e11a871a06af6483bd0c52dc4" },
        { url: "946.bundle.js", revision: "cbc435a155cc44d631a17ce6c4bafa19" },
        {
          url: "app.webmanifest",
          revision: "ef092c5515a17b0d8b64530652d2b280",
        },
        {
          url: "app~a51fa3f5.bundle.js",
          revision: "b46640e2523d2f92d9d27698a9984eab",
        },
        {
          url: "app~a51fa3f5.bundle.js.LICENSE.txt",
          revision: "4e0e34f265fae8f33b01b27ae29d9d6f",
        },
        {
          url: "app~ca0940c6.bundle.js",
          revision: "a3de76a41aad0acf4c458f90724eec1b",
        },
        {
          url: "app~ca0940c6.bundle.js.LICENSE.txt",
          revision: "4e0e34f265fae8f33b01b27ae29d9d6f",
        },
        {
          url: "app~d1658f4b.bundle.js",
          revision: "9ec26941617531b4198c80ff936954fe",
        },
        {
          url: "app~e4317507.bundle.js",
          revision: "d7670bf0c1a5971bf9dc8d2fb3f47c68",
        },
        {
          url: "app~e4317507.bundle.js.LICENSE.txt",
          revision: "4e0e34f265fae8f33b01b27ae29d9d6f",
        },
        { url: "fav-icon.png", revision: "637cee02390a0fb02716f05f8101e7ee" },
        {
          url: "icons/icon-128.png",
          revision: "7dd2bac237bb2fa7300bd9e48eb70fce",
        },
        {
          url: "icons/icon-144.png",
          revision: "c38ea3446edf462f93b6b8ad6554c65d",
        },
        {
          url: "icons/icon-152.png",
          revision: "fc9731e8cdcaacf0e9259cff54ea7df3",
        },
        {
          url: "icons/icon-192.png",
          revision: "ba86c0f0bab7e789f76c10b8cdd6a178",
        },
        {
          url: "icons/icon-384.png",
          revision: "9ce8dc838bcacdce6a1ae6a347bc54bb",
        },
        {
          url: "icons/icon-512.png",
          revision: "b054be70252d7e9556aeea7e6fba2fd6",
        },
        {
          url: "icons/icon-72.png",
          revision: "eeebc076637cd63554faf7c8ea0555ee",
        },
        {
          url: "icons/icon-96.png",
          revision: "945f6f1d03a439b0e013af354c51ab23",
        },
        { url: "index.html", revision: "c404ac52150ccacf7bf3b663d410a6ec" },
      ],
      {}
    );
});
//# sourceMappingURL=sw.bundle.js.map
