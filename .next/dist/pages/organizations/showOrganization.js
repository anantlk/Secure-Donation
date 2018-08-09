"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _campaign = require("../../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/anant/Anant/Projects/Secure-Donation/pages/organizations/showOrganization.js?entry",
    _this2 = undefined;

var OrganizationShow = function (_React$Component) {
  (0, _inherits3.default)(OrganizationShow, _React$Component);

  function OrganizationShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, OrganizationShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OrganizationShow.__proto__ || (0, _getPrototypeOf2.default)(OrganizationShow)).call.apply(_ref, [this].concat(args))), _this), _this.renderCards = function () {
      var items = [{
        header: "Donation Amount",
        meta: "Total amount donated in the organization",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, _web2.default.utils.fromWei(_this.props.balance, "ether")),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Requests",
        meta: "Total Number Of Requests",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _this.props.requests),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Contributors",
        meta: "Number of people who donated",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _this.props.contributors),
        style: { overflowWrap: "break-word" }
      }, {
        header: "Minimum Contibution",
        meta: "Minimum value to contribute",
        description: _react2.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, _this.props.minContributions),
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(OrganizationShow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Contribute To This Organization"), _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_routes.Link, { route: "/organizations/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "View Requests"))), _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { icon: true, labelPosition: "left", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "left arrow", __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), "Back")))))));
    }
  }]);

  return OrganizationShow;
}(_react2.default.Component);

OrganizationShow.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var campaign, summary;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            campaign = (0, _campaign2.default)(props.query.address);
            _context.next = 3;
            return campaign.methods.getSummary().call();

          case 3:
            summary = _context.sent;
            return _context.abrupt("return", {
              address: props.query.address,
              minContributions: summary[0],
              balance: summary[1],
              requests: summary[2],
              contributors: summary[3]
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = OrganizationShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZ2FuaXphdGlvbnMvc2hvd09yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhbXBhaWduIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJJY29uIiwiTGF5b3V0IiwiQ29udHJpYnV0ZUZvcm0iLCJ3ZWIzIiwiTGluayIsIk9yZ2FuaXphdGlvblNob3ciLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwicHJvcHMiLCJiYWxhbmNlIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZXF1ZXN0cyIsImNvbnRyaWJ1dG9ycyIsIm1pbkNvbnRyaWJ1dGlvbnMiLCJhZGRyZXNzIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTSxBQUFNLEFBQVE7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7OztnTyxBQWFKLGNBQWMsWUFBTSxBQUNsQjtVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQ0FBYSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLGdCQUFLLEFBQUssTUFBTCxBQUFXLFFBQVEsTUFBQSxBQUFLLE1BQXhCLEFBQThCLFNBSGxELEFBR2UsQUFBSyxBQUF1QyxBQUN6RDtlQUFPLEVBQUUsY0FMQyxBQUNaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQ0FBYSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLFFBQUssQUFBSyxNQUh6QixBQUdlLEFBQWdCLEFBQzdCO2VBQU8sRUFBRSxjQVhDLEFBT1osQUFJUyxBQUFnQjtBQUp6QixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQ0FBYSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLFFBQUssQUFBSyxNQUh6QixBQUdlLEFBQWdCLEFBQzdCO2VBQU8sRUFBRSxjQWpCQyxBQWFaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUNBQWEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsU0FBQSxRQUFLLEFBQUssTUFIekIsQUFHZSxBQUFnQixBQUM3QjtlQUFPLEVBQUUsY0F2QmIsQUFBYyxBQW1CWixBQUlTLEFBQWdCLEFBSTNCO0FBUkUsQUFDRTs7MkNBT0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTtBOzs7Ozs2QkFFQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUM5QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG9EQUFBLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUxOLEFBQ0UsQUFFRSxBQUVFLEFBSUo7QUFKSTs0QkFJSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSywyQkFBeUIsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFVBQTFDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQUhOLEFBQ0UsQUFDRSxBQUNFLEFBR0osb0NBQUEsQUFBQyw4QkFBSyxPQUFOO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE1BQVIsTUFBYSxlQUFiLEFBQTJCLFFBQU8sU0FBbEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQURGLEFBQ0U7QUFBQTtVQXJCaEIsQUFDRSxBQUNFLEFBU0UsQUFDRSxBQU1FLEFBQ0UsQUFDRSxBQVVmOzs7OztFQTFFNEIsZ0JBQU0sQTs7QUFBL0IsQSxpQixBQUNHO3VGQUFrQixpQkFBQSxBQUFNLE9BQU47a0JBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDakI7QUFEaUIsdUJBQ04sd0JBQVMsTUFBQSxBQUFNLE1BRFQsQUFDTixBQUFxQjs0QkFEZjttQkFFRCxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUZoQixBQUVELEFBQThCOztlQUE5QztBQUZpQiwrQkFBQTs7dUJBSVosTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7Z0NBQWtCLFFBRmIsQUFFYSxBQUFRLEFBQzFCO3VCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO3dCQUFVLFFBSkwsQUFJSyxBQUFRLEFBQ2xCOzRCQUFjLFFBUk8sQUFHaEIsQUFLUyxBQUFRO0FBTGpCLEFBQ0w7O2VBSnFCO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7QUE0RTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dPcmdhbml6YXRpb24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL21lZGlhL2FuYW50L0FuYW50L1Byb2plY3RzL1NlY3VyZS1Eb25hdGlvbiJ9