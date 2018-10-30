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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Head = require('./shared/Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\MERN Stack\\CIC Hub Work\\E-commerse project\\components\\navigation.js';


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
            }), _react2.default.createElement('nav', { style: Styles.nav, className: 'navbar navbar-default', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('div', { className: 'navbar-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement('a', { className: 'navbar-commerse', href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('img', { src: '../static/images/logo.png', alt: 'E-Commerse', height: '100px', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }))), _react2.default.createElement('form', { className: 'navbar-form navbar-left', role: 'search', style: Styles.form, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            })), _react2.default.createElement('button', { type: 'submit', className: 'btn btn-default', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'Search')), _react2.default.createElement('p', { style: Styles.head, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, this.props.greetingsUser)), _react2.default.createElement('h5', { style: Styles.counter, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, this.props.Counter), _react2.default.createElement('div', { className: 'collapse navbar-collapse', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('ul', { className: 'nav nav-pills navbar-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_link2.default, { href: '/main', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Home'))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_link2.default, { href: this.props.link1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, this.props.name1))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_link2.default, { href: this.props.link2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, this.props.name2))), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_link2.default, { href: this.props.link3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, this.props.name3)))))));
        }
    }]);

    return _class;
}(_react2.default.Component);
//Custom CSS for Navigation 


exports.default = _class;

var Styles = {
    form: {
        marginTop: "35px",
        align: "center",
        display: 'inline-Block'
    },
    head: {
        marginLeft: '650px',
        fontSize: '150%'
    },
    nav: {
        // marginTop : "30px",
        backgroundColor: 'White',
        position: ''

    },
    counter: {
        marginLeft: '1050px',
        marginTop: '0px',
        //float : 'right',
        display: 'inline-Block',
        //border : '1px solid',
        borderRadius: '10%',
        position: 'absolute',
        color: 'white',
        backgroundColor: '#337AB7'
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSGVhZCIsIlN0eWxlcyIsIm5hdiIsImZvcm0iLCJoZWFkIiwicHJvcHMiLCJncmVldGluZ3NVc2VyIiwiY291bnRlciIsIkNvdW50ZXIiLCJsaW5rMSIsIm5hbWUxIiwibGluazIiLCJuYW1lMiIsImxpbmszIiwibmFtZTMiLCJDb21wb25lbnQiLCJtYXJnaW5Ub3AiLCJhbGlnbiIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHTCxBQUNKO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFNBQUssT0FBUyxPQUFkLEFBQXFCLEtBQU0sV0FBM0IsQUFBdUM7OEJBQXZDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFpQjs4QkFBakI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWUsbUJBQWtCLE1BQWpDLEFBQXdDOzhCQUF4QztnQ0FBQSxBQUNJO0FBREo7c0RBQ1MsS0FBTCxBQUFXLDZCQUE0QixLQUF2QyxBQUE2QyxjQUFhLFFBQTFELEFBQW1FOzhCQUFuRTtnQ0FIWixBQUNJLEFBQ0ksQUFDSSxBQUdSO0FBSFE7a0NBR1IsY0FBQSxVQUFNLFdBQU4sQUFBaUIsMkJBQTBCLE1BQTNDLEFBQWtELFVBQVMsT0FBUyxPQUFwRSxBQUEyRTs4QkFBM0U7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWlCOzhCQUFqQjtnQ0FBQSxBQUNJO0FBREo7d0RBQ1csTUFBUCxBQUFjLFFBQU8sV0FBckIsQUFBaUMsZ0JBQWUsYUFBaEQsQUFBNEQ7OEJBQTVEO2dDQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7aUNBRUosY0FBQSxZQUFRLE1BQVIsQUFBZSxVQUFTLFdBQXhCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBVlIsQUFNSSxBQUlJLEFBR0osNEJBQUEsY0FBQSxPQUFHLE9BQVMsT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFBeUI7QUFBekI7K0JBQXlCLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLG9CQUFJLEFBQUssTUFidEMsQUFhSSxBQUF5QixBQUFlLEFBQ3hDLGlDQUFBLGNBQUEsUUFBSSxPQUFTLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQThCO0FBQTlCO29CQUE4QixBQUFLLE1BZHZDLEFBY0ksQUFBeUMsQUFFekMsMEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBaUI7OEJBQWpCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFnQjs4QkFBaEI7Z0NBQUEsQUFDRTtBQURGOytCQUNFLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLCtCQUFLLEFBQUMsZ0NBQUssTUFBTixBQUFhOzhCQUFiO2dDQUFBLEFBQXFCO0FBQXJCOytCQUFxQixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFENUIsQUFDRSxBQUFLLEFBQXFCLEFBQzFCLDJCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLCtCQUFLLEFBQUMsZ0NBQUssTUFBUSxLQUFBLEFBQUssTUFBbkIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQWdDO0FBQWhDOytCQUFnQyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BRmhELEFBRUUsQUFBSyxBQUFnQyxBQUFlLEFBQ3BELDBCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLCtCQUFJLEFBQUMsZ0NBQUssTUFBUSxLQUFBLEFBQUssTUFBbkIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQWdDO0FBQWhDOytCQUFnQyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BSC9DLEFBR0UsQUFBSSxBQUFnQyxBQUFlLEFBQ25ELDBCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLCtCQUFJLEFBQUMsZ0NBQUssTUFBUSxLQUFBLEFBQUssTUFBbkIsQUFBeUI7OEJBQXpCO2dDQUFBLEFBQWdDO0FBQWhDOytCQUFnQyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BeEIvRCxBQUNJLEFBRUksQUFnQkksQUFDSSxBQUlFLEFBQUksQUFBZ0MsQUFBZSxBQU14RTs7Ozs7RUFoQ3dCLGdCLEFBQU07QUFrQ25DOzs7OztBQUNBLElBQUk7O21CQUNNLEFBQ1UsQUFDWjtlQUZFLEFBRU0sQUFDUjtpQkFKSyxBQUNILEFBR1EsQUFFZDtBQUxNLEFBQ0Y7O29CQUlFLEFBQ1UsQUFDWjtrQkFSSyxBQU1ILEFBRVMsQUFFZjtBQUpNLEFBQ0Y7O0FBS0E7eUJBRkMsQUFFaUIsQUFDbEI7a0JBYkssQUFVSixBQUdVLEFBR2Y7O0FBTkssQUFDRDs7b0JBS0ksQUFDUyxBQUNiO21CQUZJLEFBRVEsQUFDWjtBQUNBO2lCQUpJLEFBSU0sQUFDVjtBQUNBO3NCQU5JLEFBTVcsQUFDZjtrQkFQSSxBQU9PLEFBQ1g7ZUFSSSxBQVFJLEFBQ1I7eUJBekJSLEFBQWEsQUFnQkQsQUFTYztBQVRkLEFBQ0o7QUFqQkssQUFDVCIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IkY6L01FUk4gU3RhY2svQ0lDIEh1YiBXb3JrL0UtY29tbWVyc2UgcHJvamVjdCJ9