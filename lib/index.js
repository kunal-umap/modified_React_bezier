"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReactBezier = exports.makeHash = exports.clamp = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var clamp = function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};

exports.clamp = clamp;

var makeHash = function makeHash() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
};

exports.makeHash = makeHash;

var endXY = function endXY(el, container, direction, indent) {
  var rect = el.getBoundingClientRect();
  var containerRect = container.current.getBoundingClientRect();
  var offsetX = +indent >= 0 ? +indent : rect.width / 2;
  var offsetY = +indent >= 0 ? +indent : rect.height / 2;
  var xy = {
    x: rect.x - containerRect.x,
    y: rect.y - containerRect.y
  };

  switch (direction) {
    case "top":
      return {
        x: xy.x + offsetX,
        y: xy.y
      };

    case "bottom":
      return {
        x: xy.x + offsetX,
        y: xy.y + rect.height
      };

    case "left":
      return {
        x: xy.x,
        y: xy.y + offsetY
      };

    case "right":
      return {
        x: xy.x + rect.width,
        y: xy.y + offsetY
      };

    default:
      throw new Error("unexpected type");
  }
};

var arrowsCords = function arrowsCords(lines, hash) {
  var result = [];

  var _iterator = _createForOfIteratorHelper(lines.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 1),
          i = _step$value[0];

      var path = document.getElementById("path-".concat(hash, "-").concat(i));
      var pathLength = Math.floor(path.getTotalLength());
      var pt0 = path.getPointAtLength(70 * pathLength / 100);
      var pt1 = path.getPointAtLength(80 * pathLength / 100);
      result.push({
        x: pt1.x,
        y: pt1.y,
        orient: Math.atan2(pt1.y - pt0.y, pt1.x - pt0.x) * 180 / Math.PI
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
};

var getLine = function getLine(setting, container, hash) {
  var a = document.querySelector(".react-bezier-lines-".concat(hash, " [id='").concat(setting.from, "']"));
  var b = document.querySelector(".react-bezier-lines-".concat(hash, " [id='").concat(setting.to, "']"));
  var result = {
    cord0: {
      x: 0,
      y: 0
    },
    cord1: {
      x: 0,
      y: 0
    },
    cord2: {
      x: 0,
      y: 0
    },
    cord3: {
      x: 0,
      y: 0
    },
    style: setting.style
  };

  if (!a || !b) {
    return result; // throw new Error(`items not found: ${JSON.stringify(setting)}`);
  }

  result.cord0 = endXY(a, container, setting.positions.start.side, setting.positions.start.indent);
  result.cord3 = endXY(b, container, setting.positions.end.side, setting.positions.end.indent);

  switch (setting.positions.start.side) {
    case "top":
    case "bottom":
      {
        result.cord1.x = result.cord0.x;
        result.cord2.x = result.cord3.x;
        break;
      }

    case "left":
    case "right":
      {
        result.cord1.y = result.cord0.y;
        result.cord2.y = result.cord3.y;
        break;
      }

    default:
      break;
  }

  var halfX = Math.abs(result.cord3.x - result.cord0.x) / 2;
  var halfY = Math.abs(result.cord3.y - result.cord0.y) / 2;
  var clampX = clamp(halfX, 30, 100);
  var clampY = clamp(halfY, 30, 100);

  switch (setting.positions.end.side) {
    case "top":
      {
        switch (setting.positions.start.side) {
          case "top":
            result.cord1.y = result.cord0.y - clampY;
            result.cord2.y = result.cord3.y - clampY;
            break;

          case "bottom":
            result.cord1.y = result.cord0.y + clampY;
            result.cord2.y = result.cord3.y - clampY;
            break;

          case "left":
            result.cord1.x = result.cord0.x - clampY;
            result.cord2.x = result.cord3.x;
            result.cord2.y = result.cord3.y - clampY;
            break;

          case "right":
            result.cord1.x = result.cord0.x + clampX;
            result.cord2.x = result.cord3.x;
            result.cord2.y = result.cord3.y - clampY;
            break;

          default:
            break;
        }

        break;
      }

    case "bottom":
      {
        switch (setting.positions.start.side) {
          case "bottom":
            result.cord1.y = result.cord0.y + clampY;
            result.cord2.y = result.cord3.y + clampY;
            break;

          case "top":
            result.cord1.y = result.cord0.y - clampY;
            result.cord2.y = result.cord3.y + clampY;
            break;

          case "left":
            result.cord1.x = result.cord0.x - clampX;
            result.cord2.x = result.cord3.x;
            result.cord2.y = result.cord3.y + clampY;
            break;

          case "right":
            result.cord1.x = result.cord0.x + clampX;
            result.cord2.x = result.cord3.x;
            result.cord2.y = result.cord3.y + clampY;
            break;

          default:
            break;
        }

        break;
      }

    case "left":
      {
        switch (setting.positions.start.side) {
          case "left":
            result.cord1.x = result.cord0.x - clampX;
            result.cord2.x = result.cord3.x - clampX;
            break;

          case "right":
            result.cord1.x = result.cord0.x + clampX;
            result.cord2.x = result.cord3.x - clampX;
            break;

          case "top":
            result.cord1.y = result.cord0.y - clampY;
            result.cord2.x = result.cord3.x - clampX;
            result.cord2.y = result.cord3.y;
            break;

          case "bottom":
            result.cord1.y = result.cord0.y + clampY;
            result.cord2.y = result.cord3.y;
            result.cord2.x = result.cord3.x - clampX;
            break;

          default:
            break;
        }

        break;
      }

    case "right":
      {
        switch (setting.positions.start.side) {
          case "right":
            result.cord2.x = result.cord3.x + clampX;
            result.cord1.x = result.cord0.x + clampX;
            break;

          case "left":
            result.cord2.x = result.cord3.x + clampX;
            result.cord1.x = result.cord0.x - clampX;
            break;

          case "top":
            result.cord1.y = result.cord0.y - clampY;
            result.cord2.x = result.cord3.x + clampX;
            result.cord2.y = result.cord3.y;
            break;

          case "bottom":
            result.cord1.y = result.cord0.y + clampY;
            result.cord2.y = result.cord3.y;
            result.cord2.x = result.cord3.x + clampX;
            break;

          default:
            break;
        }

        break;
      }

    default:
      break;
  }

  return result;
};

var ReactBezierContext = /*#__PURE__*/_react["default"].createContext(null);

var ReactBezier = function ReactBezier(_ref) {
  var settings = _ref.settings,
      children = _ref.children,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? true : _ref$arrow;

  if (!settings) {
    throw new Error("ReactBezier - settings required");
  }

  var context = (0, _react.useContext)(ReactBezierContext);
  var container = (0, _react.useRef)();

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      linesObj = _useState2[0],
      setLinesObj = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      arrows = _useState4[0],
      setArrows = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      settingsGroup = _useState6[0],
      setSettingsGroup = _useState6[1];

  var _useState7 = (0, _react.useState)(makeHash()),
      _useState8 = _slicedToArray(_useState7, 1),
      hash = _useState8[0];

  var parentContainer = context === null || context === void 0 ? void 0 : context.parentContainer;
  var useContainer = parentContainer || container;
  var update = (0, _react.useCallback)(function (settings) {
    var oldLinesObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var lines = settings.map(function (v) {
      return _objectSpread(_objectSpread({}, getLine(v, useContainer, hash)), {}, {
        id: "".concat(v.from, ";").concat(v.to)
      });
    });
    var updateLinesObj = lines.reduce(function (results, v) {
      (results[v.id] = results[v.id] || []).push(v);
      return results;
    }, {});
    setLinesObj(_objectSpread(_objectSpread({}, oldLinesObj), updateLinesObj));
  }, [useContainer, hash]);
  (0, _react.useEffect)(function () {
    update(settings);
    var group = settings.reduce(function (results, v) {
      (results[v.from] = results[v.from] || []).push(v);
      (results[v.to] = results[v.to] || []).push(v);
      return results;
    }, {});
    setSettingsGroup(group);
  }, [update, settings]);
  (0, _react.useLayoutEffect)(function () {
    if (arrow) {
      setArrows(arrowsCords(Object.values(linesObj).flat(), hash));
    }
  }, [linesObj, hash]);
  (0, _react.useEffect)(function () {
    if (container.current) {
      var observer = new MutationObserver(function (data) {
        var setList = new Set();

        var _iterator2 = _createForOfIteratorHelper(data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var v = _step2.value;

            if (settingsGroup[v.target.id]) {
              settingsGroup[v.target.id].forEach(setList.add, setList);
            } else {
              var matchAll = v.target.innerHTML.matchAll(/id=['"`]{1}(.+?)['"`]{1}/g);
              var ids = Array.from(matchAll).map(function (val) {
                return val[1];
              });

              var _iterator3 = _createForOfIteratorHelper(ids),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var id = _step3.value;

                  if (settingsGroup[id]) {
                    settingsGroup[id].forEach(setList.add, setList);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var settings = Array.from(setList);

        if (settings.length) {
          window.requestAnimationFrame(function () {
            return update(settings, linesObj);
          });
        }
      });
      observer.observe(container.current, {
        attributes: true,
        characterData: true,
        subtree: true,
        childList: true
      });
      return function () {
        observer.disconnect();
      };
    }
  });
  return /*#__PURE__*/_react["default"].createElement(ReactBezierContext.Provider, {
    value: {
      parentContainer: useContainer
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: container,
    style: !parentContainer ? {
      position: "relative",
      height: "inherit"
    } : {},
    className: "react-bezier-lines-".concat(hash)
  }, children, Object.values(linesObj).flat().map(function (v, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "bezier-line"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      id: "path-".concat(hash, "-").concat(i),
      d: "M".concat(v.cord0.x, " ").concat(v.cord0.y, " C ").concat(v.cord1.x, " ").concat(v.cord1.y, ", ").concat(v.cord2.x, " ").concat(v.cord2.y, ", ").concat(v.cord3.x, " ").concat(v.cord3.y),
      className: v.style
    }), arrows && arrows[i] && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("marker", {
      id: "arrow-".concat(hash, "-").concat(i),
      markerWidth: "10",
      markerHeight: "10",
      refX: "9",
      refY: "5",
      orient: arrows[i].orient,
      markerUnits: "userSpaceOnUse"
    }, /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "1 1, 9 5, 1 9",
      fill: "none",
      className: v.style,
      style: {
        strokeDasharray: "none"
      }
    }))), /*#__PURE__*/_react["default"].createElement("g", {
      className: "arrow"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      markerEnd: "url(#arrow-".concat(hash, "-").concat(i, ")"),
      d: "M".concat(arrows[i].x, " ").concat(arrows[i].y),
      stroke: "none"
    })))));
  })));
};

exports.ReactBezier = ReactBezier;
var _default = ReactBezier;
exports["default"] = _default;
ReactBezier.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),
  settings: _propTypes["default"].array
};