!(function (e, t) {
  typeof exports == 'object' && typeof module == 'object' ? module.exports = t() : typeof define == 'function' && define.amd ? define([], t) : typeof exports == 'object' ? exports.ImageTool = t() : e.ImageTool = t();
}(window, function () {
  return (function (e) {
    var t = {};

    function n(o) {
      if (t[o]) return t[o].exports; var r = t[o] = {i: o, l: !1, exports: {}};

      return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    } return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o});
    }, n.r = function (e) {
      typeof Symbol != 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e == 'object' && e && e.__esModule) return e; var o = Object.create(null);

      if (n.r(o), Object.defineProperty(o, 'default', {enumerable: !0, value: e}), 2 & t && typeof e != 'string') {
        for (var r in e) {
          n.d(o, r, function (t) {
            return e[t];
          }.bind(null, r));
        }
      } return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };

      return n.d(t, 'a', t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = '/', n(n.s = 2);
  }([function (e, t, n) {
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}), t.make = void 0; var o = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];

          o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      } return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }()); var r = (function (e) {
      return e && e.__esModule ? e : {default: e};
    }(n(8))); var i = (function () {
      function e(t) {
        var n = t.api; var o = t.config; var r = t.onSelectFile;

        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, e)), this.api = n, this.config = o, this.onSelectFile = r, this.nodes = {wrapper: a('div', [this.CSS.baseClass, this.CSS.wrapper]), imageContainer: a('div', [ this.CSS.imageContainer ]), fileButton: this.createFileButton(), imageEl: void 0, imagePreloader: a('div', this.CSS.imagePreloader), caption: a('div', [this.CSS.input, this.CSS.caption], {contentEditable: !0})}, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
      } return o(e, [ {key: 'render',
        value: function (t) {
          return t.file && Object.keys(t.file).length !== 0 ? this.toggleStatus(e.status.UPLOADING) : this.toggleStatus(e.status.EMPTY), this.nodes.wrapper;
        }}, {key: 'createFileButton',
        value: function () {
          var e = this; var t = a('div', [ this.CSS.button ]);

          return t.innerHTML = this.config.buttonContent || r.default + ' Select an Image', t.addEventListener('click', function () {
            e.onSelectFile();
          }), t;
        }}, {key: 'showPreloader',
        value: function (t) {
          this.nodes.imagePreloader.style.backgroundImage = 'url(' + t + ')', this.toggleStatus(e.status.UPLOADING);
        }}, {key: 'hidePreloader',
        value: function () {
          this.nodes.imagePreloader.style.backgroundImage = '', this.toggleStatus(e.status.EMPTY);
        }}, {key: 'fillImage',
        value: function (t) {
          var n = this;

          this.nodes.imageEl = a('img', this.CSS.imageEl, {src: t}), this.nodes.imageContainer.appendChild(this.nodes.imageEl), this.nodes.imageEl.addEventListener('load', function () {
            n.toggleStatus(e.status.FILLED), n.nodes.imagePreloader && (n.nodes.imagePreloader.style.backgroundImage = '');
          });
        }}, {key: 'fillCaption',
        value: function (e) {
          this.nodes.caption && (this.nodes.caption.innerHTML = e);
        }}, {key: 'toggleStatus',
        value: function (t) {
          for (var n in e.status)e.status.hasOwnProperty(n) && this.nodes.wrapper.classList.toggle(this.CSS.wrapper + '--' + e.status[n], t === e.status[n]);
        }}, {key: 'applyTune',
        value: function (e, t) {
          this.nodes.wrapper.classList.toggle(this.CSS.wrapper + '--' + e, t);
        }}, {key: 'CSS',
        get: function () {
          return {baseClass: this.api.styles.block, loading: this.api.styles.loader, input: this.api.styles.input, button: this.api.styles.button, wrapper: 'image-tool', imageContainer: 'image-tool__image', imagePreloader: 'image-tool__image-preloader', imageEl: 'image-tool__image-picture', caption: 'image-tool__caption'};
        }} ], [ {key: 'status',
        get: function () {
          return {EMPTY: 'empty', UPLOADING: 'loading', FILLED: 'filled'};
        }} ]), e;
    }());

    t.default = i; var a = t.make = function (e) {
      var t; var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; var r = document.createElement(e);

      Array.isArray(n) ? (t = r.classList).add.apply(t, (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t]; return n;
        } return Array.from(e);
      }(n))) : n && r.classList.add(n); for (var i in o)r[i] = o[i]; return r;
    };
  }, function (e, t, n) {
    window, e.exports = (function (e) {
      var t = {};

      function n(o) {
        if (t[o]) return t[o].exports; var r = t[o] = {i: o, l: !1, exports: {}};

        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      } return n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o});
      }, n.r = function (e) {
        typeof Symbol != 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
      }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e == 'object' && e && e.__esModule) return e; var o = Object.create(null);

        if (n.r(o), Object.defineProperty(o, 'default', {enumerable: !0, value: e}), 2 & t && typeof e != 'string') {
          for (var r in e) {
            n.d(o, r, function (t) {
              return e[t];
            }.bind(null, r));
          }
        } return o;
      }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };

        return n.d(t, 'a', t), t;
      }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, n.p = '', n(n.s = 3);
    }([function (e, t) {
      var n;

      n = (function () {
        return this;
      }()); try {
        n = n || Function('return this')() || (0, eval)('this');
      } catch (e) {
        typeof window == 'object' && (n = window);
      }e.exports = n;
    }, function (e, t, n) {
      'use strict'; (function (e) {
        var o = n(2); var r = setTimeout;

        function i() {} function a(e) {
          if (!(this instanceof a)) throw new TypeError('Promises must be constructed via new'); if (typeof e != 'function') throw new TypeError('not a function'); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this);
        } function u(e, t) {
          for (;e._state === 3;)e = e._value; e._state !== 0 ? (e._handled = !0, a._immediateFn(function () {
            var n = e._state === 1 ? t.onFulfilled : t.onRejected;

            if (n !== null) {
              var o;

              try {
                o = n(e._value);
              } catch (e) {
                return void c(t.promise, e);
              }s(t.promise, o);
            } else (e._state === 1 ? s : c)(t.promise, e._value);
          })) : e._deferreds.push(t);
        } function s(e, t) {
          try {
            if (t === e) throw new TypeError('A promise cannot be resolved with itself.'); if (t && (typeof t == 'object' || typeof t == 'function')) {
              var n = t.then;

              if (t instanceof a) return e._state = 3, e._value = t, void l(e); if (typeof n == 'function') {
                return void f((function (e, t) {
                  return function () {
                    e.apply(t, arguments);
                  };
                }(n, t)), e);
              }
            }e._state = 1, e._value = t, l(e);
          } catch (t) {
            c(e, t);
          }
        } function c(e, t) {
          e._state = 2, e._value = t, l(e);
        } function l(e) {
          e._state === 2 && e._deferreds.length === 0 && a._immediateFn(function () {
            e._handled || a._unhandledRejectionFn(e._value);
          }); for (var t = 0, n = e._deferreds.length; t < n; t++)u(e, e._deferreds[t]); e._deferreds = null;
        } function f(e, t) {
          var n = !1;

          try {
            e(function (e) {
              n || (n = !0, s(t, e));
            }, function (e) {
              n || (n = !0, c(t, e));
            });
          } catch (e) {
            if (n) return; n = !0, c(t, e);
          }
        }a.prototype.catch = function (e) {
          return this.then(null, e);
        }, a.prototype.then = function (e, t) {
          var n = new this.constructor(i);

          return u(this, new function (e, t, n) {
            this.onFulfilled = typeof e == 'function' ? e : null, this.onRejected = typeof t == 'function' ? t : null, this.promise = n;
          }(e, t, n)), n;
        }, a.prototype.finally = o.a, a.all = function (e) {
          return new a(function (t, n) {
            if (!e || void 0 === e.length) throw new TypeError('Promise.all accepts an array'); var o = Array.prototype.slice.call(e);

            if (o.length === 0) return t([]); var r = o.length;

            function i(e, a) {
              try {
                if (a && (typeof a == 'object' || typeof a == 'function')) {
                  var u = a.then;

                  if (typeof u == 'function') {
                    return void u.call(a, function (t) {
                      i(e, t);
                    }, n);
                  }
                }o[e] = a, --r == 0 && t(o);
              } catch (e) {
                n(e);
              }
            } for (var a = 0; a < o.length; a++)i(a, o[a]);
          });
        }, a.resolve = function (e) {
          return e && typeof e == 'object' && e.constructor === a ? e : new a(function (t) {
            t(e);
          });
        }, a.reject = function (e) {
          return new a(function (t, n) {
            n(e);
          });
        }, a.race = function (e) {
          return new a(function (t, n) {
            for (var o = 0, r = e.length; o < r; o++)e[o].then(t, n);
          });
        }, a._immediateFn = typeof e == 'function' && function (t) {
          e(t);
        } || function (e) {
          r(e, 0);
        }, a._unhandledRejectionFn = function (e) {
          typeof console != 'undefined' && console && console.warn('Possible Unhandled Promise Rejection:', e);
        }, t.a = a;
      }).call(this, n(5).setImmediate);
    }, function (e, t, n) {
      'use strict'; t.a = function (e) {
        var t = this.constructor;

        return this.then(function (n) {
          return t.resolve(e()).then(function () {
            return n;
          });
        }, function (n) {
          return t.resolve(e()).then(function () {
            return t.reject(n);
          });
        });
      };
    }, function (e, t, n) {
      'use strict'; function o(e) {
        return (o = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (e) {
          return typeof e;
        } : function (e) {
          return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
      }n(4); var r = n(8); var i = (function () {
        var e = {URLENCODED: 'application/x-www-form-urlencoded; charset=utf-8', FORM: 'multipart/form-data', JSON: 'application/json; charset=utf-8'}; var t = function (e) {
          return new Promise(function (resolve, reject) {
            e = a(e), e = u(e); var o = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');

            o.open(e.method, e.url), o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), Object.keys(e.headers).forEach(function (t) {
              var n = e.headers[t];

              o.setRequestHeader(t, n);
            }); var r = e.ratio;

            o.upload.addEventListener('progress', function (t) {
              var n = Math.round(t.loaded / t.total * 100); var o = Math.ceil(n * r / 100);

              e.progress(o);
            }, !1), o.addEventListener('progress', function (t) {
              var n = Math.round(t.loaded / t.total * 100); var o = Math.ceil(n * (100 - r) / 100) + r;

              e.progress(o);
            }, !1), o.onreadystatechange = function () {
              if (o.readyState === 4) {
                var e = o.response;

                try {
                  e = JSON.parse(e);
                } catch (e) {}o.status === 200 ? t(e) : n(e);
              }
            }, o.send(e.data);
          });
        }; var n = function (e) {
          return e.method = 'POST', t(e);
        }; var a = function (t) {
          if (!t.url || typeof t.url != 'string') throw new Error('Url must be a non-empty string'); if (t.method && typeof t.method != 'string') throw new Error('`method` must be a string or null'); if (t.method = t.method ? t.method.toUpperCase() : 'GET', t.headers && o(t.headers) !== 'object') throw new Error('`headers` must be an object or null'); if (t.headers = t.headers || {}, t.type && (typeof t.type != 'string' || !Object.values(e).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library"); if (t.progress && typeof t.progress != 'function') throw new Error('`progress` must be a function or null'); if (t.progress = t.progress || function (e) {}, t.beforeSend = t.beforeSend || function (e) {}, t.ratio && typeof t.ratio != 'number') throw new Error('`ratio` must be a number'); if (t.ratio < 0 || t.ratio > 100) throw new Error('`ratio` must be in a 0-100 interval'); if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != 'string') throw new Error('`accept` must be a string with a list of allowed mime-types'); if (t.accept = t.accept || '*/*', t.multiple && typeof t.multiple != 'boolean') throw new Error('`multiple` must be a true or false'); if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != 'string') throw new Error('`fieldName` must be a string'); return t.fieldName = t.fieldName || 'files', t;
        }; var u = function (t) {
          switch (t.method) {
            case 'GET':var n = s(t.data, e.URLENCODED);

              delete t.data, t.url = /\?/.test(t.url) ? t.url + '&' + n : t.url + '?' + n; break; case 'POST':case 'PUT':case 'DELETE':case 'UPDATE':var o = (function () {
              return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || e.JSON;
            }(t));

              (r.isFormData(t.data) || r.isFormElement(t.data)) && (o = e.FORM), t.data = s(t.data, o), o !== i.contentType.FORM && (t.headers['content-type'] = o);
          } return t;
        }; var s = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case e.URLENCODED:return r.urlEncode(t); case e.JSON:return r.jsonEncode(t); case e.FORM:return r.formEncode(t); default:return t;
          }
        };

        return {contentType: e,
          request: t,
          get: function (e) {
            return e.method = 'GET', t(e);
          },
          post: n,
          transport: function (e) {
            return e = a(e), r.transport(e).then(function (t) {
              return r.isObject(e.data) && Object.keys(e.data).forEach(function (n) {
                var o = e.data[n];

                t.append(n, o);
              }), e.data = t, n(e);
            });
          }};
      }());

      e.exports = i;
    }, function (e, t, n) {
      'use strict'; n.r(t); var o = n(1);

      window.Promise = window.Promise || o.a;
    }, function (e, t, n) {
      (function (e) {
        var o = void 0 !== e && e || typeof self != 'undefined' && self || window; var r = Function.prototype.apply;

        function i(e, t) {
          this._id = e, this._clearFn = t;
        }t.setTimeout = function () {
          return new i(r.call(setTimeout, o, arguments), clearTimeout);
        }, t.setInterval = function () {
          return new i(r.call(setInterval, o, arguments), clearInterval);
        }, t.clearTimeout = t.clearInterval = function (e) {
          e && e.close();
        }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
          this._clearFn.call(o, this._id);
        }, t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
        }, t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
        }, t._unrefActive = t.active = function (e) {
          clearTimeout(e._idleTimeoutId); var t = e._idleTimeout;

          t >= 0 && (e._idleTimeoutId = setTimeout(function () {
            e._onTimeout && e._onTimeout();
          }, t));
        }, n(6), t.setImmediate = typeof self != 'undefined' && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = typeof self != 'undefined' && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function (e, t, n) {
      (function (e, t) {
        !(function (e, n) {
          'use strict'; if (!e.setImmediate) {
            var o; var r = 1; var i = {}; var a = !1; var u = e.document; var s = Object.getPrototypeOf && Object.getPrototypeOf(e);

            s = s && s.setTimeout ? s : e, {}.toString.call(e.process) === '[object process]' ? o = function (e) {
              t.nextTick(function () {
                l(e);
              });
            } : (function () {
              if (e.postMessage && !e.importScripts) {
                var t = !0; var n = e.onmessage;

                return e.onmessage = function () {
                  t = !1;
                }, e.postMessage('', '*'), e.onmessage = n, t;
              }
            }()) ? (function () {
                var t = 'setImmediate$' + Math.random() + '$'; var n = function (n) {
                  n.source === e && typeof n.data == 'string' && n.data.indexOf(t) === 0 && l(+n.data.slice(t.length));
                };

                e.addEventListener ? e.addEventListener('message', n, !1) : e.attachEvent('onmessage', n), o = function (n) {
                  e.postMessage(t + n, '*');
                };
              }()) : e.MessageChannel ? (function () {
                var e = new MessageChannel();

                e.port1.onmessage = function (e) {
                  l(e.data);
                }, o = function (t) {
                  e.port2.postMessage(t);
                };
              }()) : u && 'onreadystatechange' in u.createElement('script') ? (function () {
                var e = u.documentElement;

                o = function (t) {
                  var n = u.createElement('script');

                  n.onreadystatechange = function () {
                    l(t), n.onreadystatechange = null, e.removeChild(n), n = null;
                  }, e.appendChild(n);
                };
              }()) : o = function (e) {
                setTimeout(l, 0, e);
              }, s.setImmediate = function (e) {
              typeof e != 'function' && (e = new Function('' + e)); for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)t[n] = arguments[n + 1]; var a = {callback: e, args: t};

              return i[r] = a, o(r), r++;
            }, s.clearImmediate = c;
          } function c(e) {
            delete i[e];
          } function l(e) {
            if (a)setTimeout(l, 0, e); else {
              var t = i[e];

              if (t) {
                a = !0; try {
                  !(function (e) {
                    var t = e.callback; var o = e.args;

                    switch (o.length) {
                      case 0:t(); break; case 1:t(o[0]); break; case 2:t(o[0], o[1]); break; case 3:t(o[0], o[1], o[2]); break; default:t.apply(n, o);
                    }
                  }(t));
                } finally {
                  c(e), a = !1;
                }
              }
            }
          }
        }(typeof self == 'undefined' ? void 0 === e ? this : e : self));
      }).call(this, n(0), n(7));
    }, function (e, t) {
      var n; var o; var r = e.exports = {};

      function i() {
        throw new Error('setTimeout has not been defined');
      } function a() {
        throw new Error('clearTimeout has not been defined');
      } function u(e) {
        if (n === setTimeout) return setTimeout(e, 0); if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }!(function () {
        try {
          n = typeof setTimeout == 'function' ? setTimeout : i;
        } catch (e) {
          n = i;
        } try {
          o = typeof clearTimeout == 'function' ? clearTimeout : a;
        } catch (e) {
          o = a;
        }
      }()); var s; var c = []; var l = !1; var f = -1;

      function d() {
        l && s && (l = !1, s.length ? c = s.concat(c) : f = -1, c.length && p());
      } function p() {
        if (!l) {
          var e = u(d);

          l = !0; for (var t = c.length; t;) {
            for (s = c, c = []; ++f < t;)s && s[f].run(); f = -1, t = c.length;
          }s = null, l = !1, (function (e) {
            if (o === clearTimeout) return clearTimeout(e); if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e); try {
              o(e);
            } catch (t) {
              try {
                return o.call(null, e);
              } catch (t) {
                return o.call(this, e);
              }
            }
          }(e));
        }
      } function h(e, t) {
        this.fun = e, this.array = t;
      } function m() {}r.nextTick = function (e) {
        var t = new Array(arguments.length - 1);

        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n]; c.push(new h(e, t)), c.length !== 1 || l || u(p);
      }, h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, r.title = 'browser', r.browser = !0, r.env = {}, r.argv = [], r.version = '', r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function (e) {
        return [];
      }, r.binding = function (e) {
        throw new Error('process.binding is not supported');
      }, r.cwd = function () {
        return '/';
      }, r.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }, r.umask = function () {
        return 0;
      };
    }, function (e, t, n) {
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];

          o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      } var r = n(9);

      e.exports = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }(this, e));
        } return (function (e, t, n) {
          n && o(e, n);
        }(e, 0, [ {key: 'urlEncode',
          value: function (e) {
            return r(e);
          }}, {key: 'jsonEncode',
          value: function (e) {
            return JSON.stringify(e);
          }}, {key: 'formEncode',
          value: function (e) {
            if (this.isFormData(e)) return e; if (this.isFormElement(e)) return new FormData(e); if (this.isObject(e)) {
              var t = new FormData();

              return Object.keys(e).forEach(function (n) {
                var o = e[n];

                t.append(n, o);
              }), t;
            } throw new Error('`data` must be an instance of Object, FormData or <FORM> HTMLElement');
          }}, {key: 'isObject',
          value: function (e) {
            return Object.prototype.toString.call(e) === '[object Object]';
          }}, {key: 'isFormData',
          value: function (e) {
            return e instanceof FormData;
          }}, {key: 'isFormElement',
          value: function (e) {
            return e instanceof HTMLFormElement;
          }}, {key: 'transport',
          value: function (e) {
            return new Promise(function (resolve, reject) {
              var o = document.createElement('INPUT');

              o.type = 'file', e.multiple && o.setAttribute('multiple', 'multiple'), e.accept && o.setAttribute('accept', e.accept), o.addEventListener('change', function (n) {
                for (var o = n.target.files, r = new FormData(), i = 0; i < o.length; i++)r.append(e.fieldName, o[i], o[i].name); e.beforeSend(o), t(r);
              }, !1), o.click();
            });
          }} ])), e;
      }());
    }, function (e, t) {
      var n = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/%20/g, '+');
      }; var o = function (e, t, r, i) {
        return t = t || null, r = r || '&', i = i || null, e ? (function (e) {
          for (var t = new Array(), n = 0; n < e.length; n++)e[n] && t.push(e[n]); return t;
        }(Object.keys(e).map(function (a) {
          var u; var s = a;

          if (i && (s = i + '[' + s + ']'), typeof e[a] == 'object' && e[a] !== null)u = o(e[a], null, r, s); else {
            t && (s = (function (e) {
              return !isNaN(parseFloat(e)) && isFinite(e);
            }(s)) ? t + Number(s) : s); var c = e[a];

            c = (c = (c = !1 === (c = !0 === c ? '1' : c) ? '0' : c) === 0 ? '0' : c) || '', u = n(s) + '=' + n(c);
          } return u;
        }))).join(r).replace(/[!'()*]/g, '') : '';
      };

      e.exports = o;
    }]));
  }, function (e, t, n) {
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var o = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];

          o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      } return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }()); var r = (s(n(3)), s(n(0))); var i = s(n(9)); var a = s(n(13)); var u = s(n(14));
    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Image Tool for the CodeX Editor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author CodeX <team@ifmo.su>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @see {@link https://github.com/codex-editor/image}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * To developers.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * To simplify Tool structure, we split it to 4 parts:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  1) index.js — main Tool's interface, public API and methods for working with data
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  3) ui.js — module for UI manipulations: render, showing preloader, etc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * For debug purposes there is a testing server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that can save uploaded files and return a Response {@link UploadResponseFormat}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       $ node dev/server.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * image: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   class: ImageTool,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   config: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     endpoints: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       byFile: 'http://localhost:8008/uploadFile',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       byUrl: 'http://localhost:8008/fetchUrl',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

    function s(e) {
      return e && e.__esModule ? e : {default: e};
    } var c = (function () {
      function e(t) {
        var n = this; var o = t.data; var a = t.config; var s = t.api;

        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, e)), this.api = s, this.config = {endpoints: a.endpoints || '', additionalRequestData: a.additionalRequestData || {}, additionalRequestHeaders: a.additionalRequestHeaders || {}, field: a.field || 'image', types: a.types || 'image/*', captionPlaceholder: a.captionPlaceholder || 'Caption', buttonContent: a.buttonContent || ''}, this.uploader = new u.default({config: this.config,
          onUpload: function (e) {
            return n.onUpload(e);
          },
          onError: function (e) {
            return n.uploadingFailed(e);
          }}), this.ui = new r.default({api: s,
          config: this.config,
          onSelectFile: function () {
            n.uploader.uploadSelectedFile({onPreview: function (e) {
              n.ui.showPreloader(e);
            }});
          }}), this.tunes = new i.default({api: s,
          onChange: function (e) {
            return n.tuneToggled(e);
          }}), this._data = {}, this.data = o;
      } return o(e, null, [ {key: 'displayInToolbox',
        get: function () {
          return !0;
        }}, {key: 'toolboxIcon',
        get: function () {
          return a.default;
        }} ]), o(e, [ {key: 'render',
        value: function () {
          return this.ui.render(this.data);
        }}, {key: 'save',
        value: function () {
          var e = this.ui.nodes.caption;

          return this._data.caption = e.innerHTML, this.data;
        }}, {key: 'renderSettings',
        value: function () {
          return this.tunes.render(this.data);
        }}, {key: 'appendCallback',
        value: function () {
          this.ui.nodes.fileButton.click();
        }}, {key: 'onPaste',
        value: function (e) {
          var t = this;

          switch (e.type) {
            case 'tag':var n = e.detail.data;

              this.ui.showPreloader(n.src), this.uploader.uploadByUrl(n.src); break; case 'pattern':var o = e.detail.data;

              this.ui.showPreloader(o), this.uploader.uploadByUrl(o); break; case 'file':var r = e.detail.file;

              this.uploader.uploadByFile(r, {onPreview: function (e) {
                t.ui.showPreloader(e);
              }});
          }
        }}, {key: 'onUpload',
        value: function (e) {
          e.success && e.file ? this.image = e.file : this.uploadingFailed('incorrect response: ' + JSON.stringify(e));
        }}, {key: 'uploadingFailed',
        value: function (e) {
          console.log('Image Tool: uploading failed because of', e), this.api.notifier.show({message: 'Can not upload an image, try another', style: 'error'}), this.ui.hidePreloader();
        }}, {key: 'tuneToggled',
        value: function (e) {
          this.setTune(e, !this._data[e]);
        }}, {key: 'setTune',
        value: function (e, t) {
          var n = this;

          if (this._data[e] = t, this.ui.applyTune(e, t), e === 'stretched') {
            var o = this.api.blocks.getCurrentBlockIndex();

            setTimeout(function () {
              n.api.blocks.stretchBlock(o, t);
            }, 0);
          }
        }}, {key: 'data',
        set: function (e) {
          var t = this;

          this.image = e.file, this._data.caption = e.caption || '', this.ui.fillCaption(this._data.caption), i.default.tunes.forEach(function (n) {
            var o = n.name; var r = void 0 !== e[o] && e[o];

            t.setTune(o, r);
          });
        },
        get: function () {
          return this._data;
        }}, {key: 'image',
        set: function (e) {
          this._data.file = e || {}, e && e.url && this.ui.fillImage(e.url);
        }} ], [ {key: 'pasteConfig',
        get: function () {
          return {tags: [ 'img' ], patterns: {image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i}, files: {mimeTypes: [ 'image/*' ]}};
        }} ]), e;
    }());

    t.default = c;
  }, function (e, t, n) {
    var o = n(4);

    typeof o == 'string' && (o = [ [e.i, o, ''] ]); var r = {hmr: !0, transform: void 0, insertInto: void 0};

    n(6)(o, r); o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    (e.exports = n(5)(!1)).push([e.i, ".image-tool {\n  --bg-color: #CDD1E0;\n  --front-color: #388AE5;\n  --border-color: #E8E8EB;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: '';\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", '']);
  }, function (e, t) {
    e.exports = function (e) {
      var t = [];

      return t.toString = function () {
        return this.map(function (t) {
          var n = (function (e, t) {
            var n = e[1] || ''; var o = e[3];

            if (!o) return n; if (t && typeof btoa == 'function') {
              var r = (function (e) {
                return '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + ' */';
              }(o)); var i = o.sources.map(function (e) {
                return '/*# sourceURL=' + o.sourceRoot + e + ' */';
              });

              return [ n ].concat(i).concat([ r ]).join('\n');
            } return [ n ].join('\n');
          }(t, e));

          return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
        }).join('');
      }, t.i = function (e, n) {
        typeof e == 'string' && (e = [ [null, e, ''] ]); for (var o = {}, r = 0; r < this.length; r++) {
          var i = this[r][0];

          typeof i == 'number' && (o[i] = !0);
        } for (r = 0; r < e.length; r++) {
          var a = e[r];

          typeof a[0] == 'number' && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = '(' + a[2] + ') and (' + n + ')'), t.push(a));
        }
      }, t;
    };
  }, function (e, t, n) {
    var o = {}; var r = (function (e) {
      var t;

      return function () {
        return void 0 === t && (t = e.apply(this, arguments)), t;
      };
    }(function () {
      return window && document && document.all && !window.atob;
    })); var i = (function (e) {
      var t = {};

      return function (e) {
        if (typeof e == 'function') return e(); if (void 0 === t[e]) {
          var n = (function (e) {
            return document.querySelector(e);
          }.call(this, e));

          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) {
            try {
              n = n.contentDocument.head;
            } catch (e) {
              n = null;
            }
          }t[e] = n;
        } return t[e];
      };
    }()); var a = null; var u = 0; var s = []; var c = n(7);

    function l(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n]; var i = o[r.id];

        if (i) {
          i.refs++; for (var a = 0; a < i.parts.length; a++)i.parts[a](r.parts[a]); for (;a < r.parts.length; a++)i.parts.push(g(r.parts[a], t));
        } else {
          var u = [];

          for (a = 0; a < r.parts.length; a++)u.push(g(r.parts[a], t)); o[r.id] = {id: r.id, refs: 1, parts: u};
        }
      }
    } function f(e, t) {
      for (var n = [], o = {}, r = 0; r < e.length; r++) {
        var i = e[r]; var a = t.base ? i[0] + t.base : i[0]; var u = {css: i[1], media: i[2], sourceMap: i[3]};

        o[a] ? o[a].parts.push(u) : n.push(o[a] = {id: a, parts: [ u ]});
      } return n;
    } function d(e, t) {
      var n = i(e.insertInto);

      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var o = s[s.length - 1];

      if (e.insertAt === 'top')o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), s.push(t); else if (e.insertAt === 'bottom')n.appendChild(t); else {
        if (typeof e.insertAt != 'object' || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var r = i(e.insertInto + ' ' + e.insertAt.before);

        n.insertBefore(t, r);
      }
    } function p(e) {
      if (e.parentNode === null) return !1; e.parentNode.removeChild(e); var t = s.indexOf(e);

      t >= 0 && s.splice(t, 1);
    } function h(e) {
      var t = document.createElement('style');

      return void 0 === e.attrs.type && (e.attrs.type = 'text/css'), m(t, e.attrs), d(e, t), t;
    } function m(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    } function g(e, t) {
      var n, o, r, i;

      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function () {}; e.css = i;
      } if (t.singleton) {
        var s = u++;

        n = a || (a = h(t)), o = y.bind(null, n, s, !1), r = y.bind(null, n, s, !0);
      } else {
        e.sourceMap && typeof URL == 'function' && typeof URL.createObjectURL == 'function' && typeof URL.revokeObjectURL == 'function' && typeof Blob == 'function' && typeof btoa == 'function' ? (n = (function (e) {
          var t = document.createElement('link');

          return void 0 === e.attrs.type && (e.attrs.type = 'text/css'), e.attrs.rel = 'stylesheet', m(t, e.attrs), d(e, t), t;
        }(t)), o = function (e, t, n) {
          var o = n.css; var r = n.sourceMap; var i = void 0 === t.convertToAbsoluteUrls && r;

          (t.convertToAbsoluteUrls || i) && (o = c(o)); r && (o += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ' */'); var a = new Blob([ o ], {type: 'text/css'}); var u = e.href;

          e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u);
        }.bind(null, n, t), r = function () {
          p(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = h(t), o = function (e, t) {
          var n = t.css; var o = t.media;

          o && e.setAttribute('media', o); if (e.styleSheet)e.styleSheet.cssText = n; else {
            for (;e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), r = function () {
          p(n);
        });
      } return o(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return; o(e = t);
        } else r();
      };
    }e.exports = function (e, t) {
      if (typeof DEBUG != 'undefined' && DEBUG && typeof document != 'object') throw new Error('The style-loader cannot be used in a non-browser environment'); (t = t || {}).attrs = typeof t.attrs == 'object' ? t.attrs : {}, t.singleton || typeof t.singleton == 'boolean' || (t.singleton = r()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom'); var n = f(e, t);

      return l(n, t), function (e) {
        for (var r = [], i = 0; i < n.length; i++) {
          var a = n[i];

          (u = o[a.id]).refs--, r.push(u);
        }e && l(f(e, t), t); for (i = 0; i < r.length; i++) {
          var u;

          if ((u = r[i]).refs === 0) {
            for (var s = 0; s < u.parts.length; s++)u.parts[s](); delete o[u.id];
          }
        }
      };
    }; var v = (function () {
      var e = [];

      return function (t, n) {
        return e[t] = n, e.filter(Boolean).join('\n');
      };
    }());

    function y(e, t, n, o) {
      var r = n ? '' : o.css;

      if (e.styleSheet)e.styleSheet.cssText = v(t, r); else {
        var i = document.createTextNode(r); var a = e.childNodes;

        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      var t = typeof window != 'undefined' && window.location;

      if (!t) throw new Error('fixUrls requires window.location'); if (!e || typeof e != 'string') return e; var n = t.protocol + '//' + t.host; var o = n + t.pathname.replace(/\/[^\/]*$/, '/');

      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var r; var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });

        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (r = i.indexOf('//') === 0 ? i : i.indexOf('/') === 0 ? n + i : o + i.replace(/^\.\//, ''), 'url(' + JSON.stringify(r) + ')');
      });
    };
  }, function (e, t) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>';
  }, function (e, t, n) {
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var o = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];

          o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      } return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }()); var r = n(0); var i = s(n(10)); var a = s(n(11)); var u = s(n(12));

    function s(e) {
      return e && e.__esModule ? e : {default: e};
    } var c = (function () {
      function e(t) {
        var n = t.api; var o = t.onChange;

        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, e)), this.api = n, this.onChange = o, this.buttons = [];
      } return o(e, [ {key: 'render',
        value: function (t) {
          var n = this; var o = (0, r.make)('div', this.CSS.wrapper);

          return this.buttons = [], e.tunes.forEach(function (e) {
            var i = (0, r.make)('div', [n.CSS.buttonBase, n.CSS.button], {innerHTML: e.icon, title: e.title});

            i.addEventListener('click', function () {
              n.tuneClicked(e.name);
            }), i.dataset.tune = e.name, i.classList.toggle(n.CSS.buttonActive, t[e.name]), n.buttons.push(i), o.appendChild(i);
          }), o;
        }}, {key: 'tuneClicked',
        value: function (e) {
          var t = this.buttons.find(function (t) {
            return t.dataset.tune === e;
          });

          t.classList.toggle(this.CSS.buttonActive, !t.classList.contains(this.CSS.buttonActive)), this.onChange(e);
        }}, {key: 'CSS',
        get: function () {
          return {wrapper: '', buttonBase: this.api.styles.settingsButton, button: 'image-tool__tune', buttonActive: this.api.styles.settingsButtonActive};
        }} ], [ {key: 'tunes',
        get: function () {
          return [ {name: 'withBorder', icon: a.default, title: 'With border'}, {name: 'stretched', icon: u.default, title: 'Stretch image'}, {name: 'withBackground', icon: i.default, title: 'With background'} ];
        }} ]), e;
    }());

    t.default = c;
  }, function (e, t) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>';
  }, function (e, t) {
    e.exports = '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>';
  }, function (e, t, n) {
    'use strict'; Object.defineProperty(t, '__esModule', {value: !0}); var o = (function () {
      return function (e, t) {
        if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) {
          return (function (e, t) {
            var n = []; var o = !0; var r = !1; var i = void 0;

            try {
              for (var a, u = e[Symbol.iterator](); !(o = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
            } catch (e) {
              r = !0, i = e;
            } finally {
              try {
                !o && u.return && u.return();
              } finally {
                if (r) throw i;
              }
            } return n;
          }(e, t));
        } throw new TypeError('Invalid attempt to destructure non-iterable instance');
      };
    }()); var r = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];

          o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      } return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }()); var i = (function (e) {
      return e && e.__esModule ? e : {default: e};
    }(n(1))); var a = (function () {
      function e(t) {
        var n = t.config; var o = t.onUpload; var r = t.onError;

        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }(this, e)), this.config = n, this.onUpload = o, this.onError = r;
      } return r(e, [ {key: 'uploadSelectedFile',
        value: function (e) {
          var t = this; var n = e.onPreview;

          i.default.transport({url: this.config.endpoints.byFile,
            data: this.config.additionalRequestData,
            accept: this.config.types,
            headers: this.config.additionalRequestHeaders,
            beforeSend: function (e) {
              var t = new FileReader();

              t.readAsDataURL(e[0]), t.onload = function (e) {
                n(e.target.result);
              };
            },
            fieldName: this.config.field}).then(function (e) {
            t.onUpload(e);
          }).catch(function (e) {
            t.onError(e);
          });
        }}, {key: 'uploadByUrl',
        value: function (e) {
          var t = this;

          i.default.post({url: this.config.endpoints.byUrl, data: Object.assign({url: e}, this.config.additionalRequestData), type: i.default.contentType.JSON, headers: this.config.additionalRequestHeaders}).then(function (e) {
            t.onUpload(e);
          }).catch(function (e) {
            t.onError(e);
          });
        }}, {key: 'uploadByFile',
        value: function (e, t) {
          var n = this; var r = t.onPreview; var a = new FileReader();

          a.readAsDataURL(e), a.onload = function (e) {
            r(e.target.result);
          }; var u = new FormData();

          u.append(this.config.field, e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(function (e) {
            var t = o(e, 2); var n = t[0]; var r = t[1];

            u.append(n, r);
          }), i.default.post({url: this.config.endpoints.byFile, data: u, type: i.default.contentType.JSON, headers: this.config.additionalRequestHeaders}).then(function (e) {
            n.onUpload(e);
          }).catch(function (e) {
            n.onError(e);
          });
        }} ]), e;
    }());

    t.default = a;
  }])).default;
}));