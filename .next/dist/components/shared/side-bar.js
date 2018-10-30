'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\MERN Stack\\CIC Hub Work\\E-commerse project\\components\\shared\\side-bar.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement(_Head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }), _react2.default.createElement('div', { style: styles.sideBar, className: 'col-md-2 side-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('div', { className: 'sidebar-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('a', { style: styles.sidebarAnchor, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('div', { style: styles.item, className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('i', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), ' Categories'))), _react2.default.createElement('a', { style: styles.sidebarAnchor, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('div', { style: styles.item, className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_link2.default, { href: '/main?category=Phones and Tablets', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('i', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), this.props.name1)))), _react2.default.createElement('a', { style: styles.sidebarAnchor, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('div', { style: styles.item, className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_link2.default, { href: '/main?category=Fashion', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('i', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), ' Fashion')))), _react2.default.createElement('a', { style: styles.sidebarAnchor, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', { style: styles.item, className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_link2.default, { href: '/main?category=Beauty and Health', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('i', { className: 'glyphicon ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), ' Beauty and Health')))), _react2.default.createElement('a', { style: styles.sidebarAnchor, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('div', { style: styles.item, className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_link2.default, { href: '/main?category=Toys and Games', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('i', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), ' Toys and Games')))))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
    sideBar: {
        color: "white",
        background_color: "rgba(155, 39, 176, 0.8)",
        minHeight: "650px",
        // color:"#F0C869",
        boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
    },
    item: {
        paddingBottom: "10px",
        paddingLeft: "5px",
        borderBottom: "1px solid rgba(0,0,0,0.1)"
    },
    sidebarAnchor: {
        cursor: "pointer",
        color: "rgba(155, 39, 176, 0.8)",
        background_color: "white",
        transition: "0.5s",
        textDecoration: "none"
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNoYXJlZFxcc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiTGluayIsInN0eWxlcyIsInNpZGVCYXIiLCJzaWRlYmFyQW5jaG9yIiwiaXRlbSIsInByb3BzIiwibmFtZTEiLCJDb21wb25lbnQiLCJjb2xvciIsImJhY2tncm91bmRfY29sb3IiLCJtaW5IZWlnaHQiLCJib3hTaGFkb3ciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJib3JkZXJCb3R0b20iLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHSyxBQUNKO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFNBQUssT0FBUyxPQUFkLEFBQXFCLFNBQVMsV0FBOUIsQUFBd0M7OEJBQXhDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBRUk7QUFGSjsrQkFFSSxjQUFBLE9BQUcsT0FBUyxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE9BQVMsT0FBZCxBQUFxQixNQUFNLFdBQTNCLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0RBQU8sV0FBSCxBQUFhOzhCQUFiO2dDQUFKLEFBQUk7QUFBQTtnQkFKaEIsQUFFSSxBQUNJLEFBQ0ksQUFHUixrQ0FBQSxjQUFBLE9BQUcsT0FBUyxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE9BQVMsT0FBZCxBQUFxQixNQUFNLFdBQTNCLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQWE7OEJBQWI7Z0NBQUEsQUFBaUQ7QUFBakQ7K0JBQWlELGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLG9EQUFPLFdBQUgsQUFBYTs4QkFBYjtnQ0FBSixBQUFJLEFBQXNCO0FBQXRCO3FCQUFzQixBQUFLLE1BVDVGLEFBT0ksQUFDSSxBQUNJLEFBQWlELEFBQXFDLEFBRzlGLDJCQUFBLGNBQUEsT0FBRyxPQUFTLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssT0FBUyxPQUFkLEFBQXFCLE1BQU0sV0FBM0IsQUFBcUM7OEJBQXJDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBYTs4QkFBYjtnQ0FBQSxBQUFzQztBQUF0QzsrQkFBc0MsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0RBQU8sV0FBSCxBQUFhOzhCQUFiO2dDQUFKLEFBQUk7QUFBQTtnQkFkdEQsQUFZSSxBQUNJLEFBQ0ksQUFBc0MsQUFHOUMsZ0NBQUEsY0FBQSxPQUFHLE9BQVMsT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxPQUFTLE9BQWQsQUFBcUIsTUFBTSxXQUEzQixBQUFxQzs4QkFBckM7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFhOzhCQUFiO2dDQUFBLEFBQWdEO0FBQWhEOytCQUFnRCxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvREFBTyxXQUFILEFBQWE7OEJBQWI7Z0NBQUosQUFBSTtBQUFBO2dCQW5CaEUsQUFpQkksQUFDSSxBQUNJLEFBQWdELEFBR3hELDBDQUFBLGNBQUEsT0FBRyxPQUFTLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssT0FBUyxPQUFkLEFBQXFCLE1BQU0sV0FBM0IsQUFBcUM7OEJBQXJDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBYTs4QkFBYjtnQ0FBQSxBQUE2QztBQUE3QzsrQkFBNkMsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0RBQU8sV0FBSCxBQUFhOzhCQUFiO2dDQUFKLEFBQUk7QUFBQTtnQkE1QnpFLEFBQ0ksQUFFSSxBQUNJLEFBc0JJLEFBQ0ksQUFDSSxBQUE2QyxBQU94RTs7Ozs7RUFyQ3dCLGdCQUFNLEE7Ozs7O0FBdUNuQyxJQUFJOztlQUNRLEFBQ0csQUFDVjswQkFGTyxBQUVXLEFBQ2Y7bUJBSEksQUFHTSxBQUNWO0FBQ0E7bUJBTkssQUFDRCxBQUtPLEFBRWY7QUFQUSxBQUNKOzt1QkFNQyxBQUNhLEFBQ2Q7cUJBRkMsQUFFVyxBQUNaO3NCQVhLLEFBUUosQUFHWSxBQUVqQjtBQUxLLEFBQ0Q7O2dCQUlVLEFBQ0YsQUFDUjtlQUZVLEFBRUgsQUFDVjswQkFIYSxBQUdLLEFBQ2xCO29CQUphLEFBSUQsQUFDVDt3QkFsQlIsQUFBYSxBQWFLLEFBS007QUFMTixBQUNWO0FBZEssQUFDVCIsImZpbGUiOiJzaWRlLWJhci5qcyIsInNvdXJjZVJvb3QiOiJGOi9NRVJOIFN0YWNrL0NJQyBIdWIgV29yay9FLWNvbW1lcnNlIHByb2plY3QifQ==