"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _routes = require("../../../routes");

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RenderRow = require("../../../components/RenderRow");

var _RenderRow2 = _interopRequireDefault(_RenderRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/requests/index.js?entry";


var ViewRequests = function (_React$Component) {
  (0, _inherits3.default)(ViewRequests, _React$Component);

  function ViewRequests() {
    (0, _classCallCheck3.default)(this, ViewRequests);

    return (0, _possibleConstructorReturn3.default)(this, (ViewRequests.__proto__ || (0, _getPrototypeOf2.default)(ViewRequests)).apply(this, arguments));
  }

  (0, _createClass3.default)(ViewRequests, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      //console.log(this.props.requests);
      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RenderRow2.default, {
          id: index,
          request: request,
          key: index,
          approversCount: _this2.props.approverCount,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Add Request"))), _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", floated: "right", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), "Back"))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Requests"), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Approvals"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var _this3 = this;

        var address, campaign, requestCount, approverCount, requests;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                _context2.next = 3;
                return (0, _campaign2.default)(address);

              case 3:
                campaign = _context2.sent;
                _context2.next = 6;
                return campaign.methods.getRequestsCount().call();

              case 6:
                requestCount = _context2.sent;
                _context2.next = 9;
                return campaign.methods.approversCount().call();

              case 9:
                approverCount = _context2.sent;
                requests = void 0;
                _context2.next = 13;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(element, index) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", campaign.methods.requests(index).call());

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, _this3);
                  }));

                  return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 13:
                requests = _context2.sent;
                return _context2.abrupt("return", { address: address, requests: requests, approverCount: approverCount });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ViewRequests;
}(_react2.default.Component);

exports.default = ViewRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvcmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiVGFibGUiLCJEaW1tZXIiLCJMb2FkZXIiLCJJbWFnZSIsIlNlZ21lbnQiLCJJY29uIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJSZW5kZXJSb3ciLCJWaWV3UmVxdWVzdHMiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYXBwcm92ZXJDb3VudCIsImFkZHJlc3MiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZTs7Ozs7Ozs7O0lBRWhCLEE7Ozs7Ozs7Ozs7O2lDQWlCUzttQkFDWDs7QUFDQTtrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7Y0FBRCxBQUNNLEFBQ0o7bUJBRkYsQUFFVyxBQUNUO2VBSEYsQUFHTyxBQUNMOzBCQUFnQixPQUFBLEFBQUssTUFKdkIsQUFJNkIsQUFDM0I7bUJBQVMsT0FBQSxBQUFLLE1BTGhCLEFBS3NCOztzQkFMdEI7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURG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