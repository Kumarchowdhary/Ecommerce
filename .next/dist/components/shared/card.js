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

var _jsxFileName = 'F:\\MERN Stack\\CIC Hub Work\\E-commerse project\\components\\shared\\card.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',

        // constructor(props){
        //     super(props);
        //     this.state = {addingTocart :[]};
        //     this.addToCart = this.addToCart.bind(this);
        // }

        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'thumbnail ', key: this.props.Id, style: Styles.cardBody, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_link2.default, { href: '/description?&productName=' + this.props.brand + '&productCost=' + this.props.price + '&productDesc=' + this.props.desc + '&productImage=' + this.props.image, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('img', { style: Styles.image, src: this.props.image, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('div', { className: 'caption', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Product Name : ', _react2.default.createElement('span', { className: 'label label-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, this.props.name))), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Price: ', _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, '$', this.props.price))), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Brand : ', _react2.default.createElement('span', { className: 'label label-primary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.props.brand)))))));
        }
    }]);

    return _class;
}(_react2.default.Component);
//href = {'/cart?&productName='+ this.props.name+
//     '&productCost='+this.props.price+'&id='+this.props.Id
//}


exports.default = _class;

var Styles = {
    image: {
        height: '150px'
    },
    cardBody: {
        // marginLeft:"50px",
    },
    cartButton: {
        borderRadius: '10px',
        width: '100%'
    }

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHNoYXJlZFxcY2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJMaW5rIiwicHJvcHMiLCJJZCIsIlN0eWxlcyIsImNhcmRCb2R5IiwiYnJhbmQiLCJwcmljZSIsImRlc2MiLCJpbWFnZSIsIm5hbWUiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJjYXJ0QnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBR0g7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs0Q0FFbUIsQUFHbEI7OztpQ0FDTyxBQUNKO21DQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsY0FBYSxLQUFLLEtBQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUFJLE9BQVMsT0FBekQsQUFBZ0U7OEJBQWhFO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUMsZ0NBQUssTUFBUSwrQkFBOEIsS0FBQSxBQUFLLE1BQW5DLEFBQXlDLFFBQXpDLEFBQ1Usa0JBQWdCLEtBQUEsQUFBSyxNQUQvQixBQUNxQyxRQURyQyxBQUVVLGtCQUFnQixLQUFBLEFBQUssTUFGL0IsQUFFcUMsT0FGckMsQUFHVSxtQkFBaUIsS0FBQSxBQUFLLE1BSDlDLEFBR29EOzhCQUhwRDtnQ0FBQSxBQUtJO0FBTEo7K0JBS0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsc0RBQ1MsT0FBUyxPQUFkLEFBQXFCLE9BQU8sS0FBTSxLQUFBLEFBQUssTUFBdkMsQUFBNkM7OEJBQTdDO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFtQixtQ0FBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjs4QkFBaEI7Z0NBQUEsQUFBdUM7QUFBdkM7b0JBQXVDLEFBQUssTUFGdkUsQUFDSSxBQUNJLEFBQW1CLEFBQWtELEFBRXpFLHlCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFXLDJCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFTLFVBQUEsQUFBSyxNQUxqQyxBQUlJLEFBQ0ksQUFBVyxBQUFvQixBQUVuQywwQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBVyw0QkFBQSxjQUFBLFVBQU0sV0FBTixBQUFrQjs4QkFBbEI7Z0NBQUEsQUFBeUM7QUFBekM7b0JBQXlDLEFBQUssTUFqQmpGLEFBQ0ksQUFDSSxBQUtJLEFBRUksQUFPSSxBQUNJLEFBQVcsQUFBb0QsQUFZMUY7Ozs7O0VBekN3QixnQkFBTSxBO0FBMkNuQztBQUNtQztBQUNGOzs7OztBQUNqQyxJQUFJOztnQkFBUyxBQUNILEFBQ08sQUFFYjtBQUhNLEFBQ0Y7O0FBRkssQUFJQSxBQUdUO0FBSFMsQUFDTDs7c0JBRVMsQUFDTSxBQUNmO2VBVFIsQUFBYSxBQU9JLEFBRUQ7QUFGQyxBQUNUOztBQVJLLEFBQ1QiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiJGOi9NRVJOIFN0YWNrL0NJQyBIdWIgV29yay9FLWNvbW1lcnNlIHByb2plY3QifQ==