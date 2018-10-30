'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Head = require('../components/shared/Head');

var _Head2 = _interopRequireDefault(_Head);

var _sideBar = require('../components/shared/side-bar');

var _sideBar2 = _interopRequireDefault(_sideBar);

var _card = require('../components/shared/card');

var _card2 = _interopRequireDefault(_card);

var _navigation = require('../components/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\MERN Stack\\CIC Hub Work\\E-commerse project\\pages\\main.js?entry';

var counter1 = 0;

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { product: [], user: [], addingTocart: [], counter: 0 };
        _this.addToCart = _this.addToCart.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'addToCart',
        value: function addToCart(e) {
            var addingTocart = this.state.addingTocart;
            //console.log(e.target.id);

            this.state.addingTocart.push(e.target.id);
            //console.log(addingTocart);
            localStorage.setItem('cartProducts', (0, _stringify2.default)(addingTocart));
            //console.log(addingTocart);
            counter1++;
            this.setState({ counter: counter1 });
            console.log(this.state.counter);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            //This finds the username of logged in User
            _axios2.default.get('/getuser').then(function (response) {
                _this2.setState({ user: response.data });
            });
            //It fetches the data from the getdata api
            _axios2.default.get('/getdata').then(function (response) {
                _this2.setState({ product: response.data });
            });

            // this.setState({
            //     containerId: ReactDOM.findDOMNode(this).parentNode.getAttribute("id")
            // });console.log(this.state.containerId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_Head2.default, { cssLink: '../static/index.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement('header', { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('div', { id: 'logo', className: 'col-md-1 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement(_link2.default, { href: '/main', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('button', { id: 'loginBtn', className: 'col-md-1 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Home'))), _react2.default.createElement(_link2.default, { href: '/cart', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('button', { id: 'loginBtn', className: 'col-md-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Cart'))), _react2.default.createElement('h5', { style: Styles.counter, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.state.Counter), _react2.default.createElement(_link2.default, { href: '/logout', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('button', { id: 'loginBtn', className: 'col-md-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Logout')))), _react2.default.createElement(_sideBar2.default, {
                name1: 'Phones and Tablets',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement('div', { className: 'col-md-10', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, this.state.product.map(function (element) {
                {/*console.log(Object.keys(this.props.url.query).length);*/}

                if ((0, _keys2.default)(_this3.props.url.query).length === 0) {
                    return _react2.default.createElement('main', { key: Math.random(), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    }, _react2.default.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    }, _react2.default.createElement(_card2.default, { key: Math.random(),
                        Id: element._id,
                        image: element.image,
                        name: element.name,
                        price: element.price,
                        brand: element.brand,
                        desc: element.desc,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }), _react2.default.createElement('button', { type: 'submit', id: element._id, onClick: _this3.addToCart, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    }, 'Add to Cart')));
                } else if (element.category === _this3.props.url.query.category) {
                    return _react2.default.createElement('main', { key: Math.random(), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    }, _react2.default.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                        }
                    }, _react2.default.createElement(_card2.default, { key: Math.random(),
                        Id: element._id,
                        image: element.image,
                        name: element.name,
                        price: element.price,
                        brand: element.brand,
                        desc: element.desc,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                        }
                    }), _react2.default.createElement('button', { type: 'submit', id: element._id, onClick: _this3.addToCart, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                        }
                    }, 'Add to Cart')));
                }
            }))));
        }
    }]);

    return _class;
}(_react2.default.Component);

//Custom CSS 


exports.default = _class;

var Styles = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtYWluLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJMaW5rIiwiYXhpb3MiLCJIZWFkIiwiU2lkZWJhciIsIkNhcmQiLCJOYXZpZ2F0aW9uIiwiY291bnRlcjEiLCJwcm9wcyIsInN0YXRlIiwicHJvZHVjdCIsInVzZXIiLCJhZGRpbmdUb2NhcnQiLCJjb3VudGVyIiwiYWRkVG9DYXJ0IiwiYmluZCIsImUiLCJwdXNoIiwidGFyZ2V0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIlN0eWxlcyIsIkNvdW50ZXIiLCJtYXAiLCJlbGVtZW50IiwidXJsIiwicXVlcnkiLCJsZW5ndGgiLCJNYXRoIiwicmFuZG9tIiwiX2lkIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJicmFuZCIsImRlc2MiLCJjYXRlZ29yeSIsIkNvbXBvbmVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7Ozs7OztBQUN2QixJQUFJLFdBQUosQUFBZTs7O29DQUdWOztvQkFBQSxBQUFZLE9BQU07NENBQUE7OzBJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLLFFBQVEsRUFBQyxTQUFELEFBQVMsSUFBRyxNQUFaLEFBQWlCLElBQUcsY0FBcEIsQUFBa0MsSUFBSSxTQUFuRCxBQUFhLEFBQWdELEFBQzdEO2NBQUEsQUFBSyxZQUFZ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bEI7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0NBQWY7d0NBQUEsQUFDSTtBQURKO3VDQUNJLEFBQUMsZ0NBQU0sS0FBTyxLQUFkLEFBQWMsQUFBSyxBQUNuQjs0QkFBTSxRQUROLEFBQ2MsQUFDZDsrQkFBUyxRQUZULEFBRWlCLEFBQ2pCOzhCQUFRLFFBSFIsQUFHZ0IsQUFDaEI7K0JBQVMsUUFKVCxBQUlpQixBQUNqQjsrQkFBUyxRQUxULEFBS2lCLEFBQ2pCOzhCQUFRLFFBTlIsQUFNZ0I7O3NDQU5oQjt3Q0FESixBQUNJLEFBUUE7QUFSQTt3Q0FRQSxjQUFBLFlBQVMsTUFBVCxBQUFnQixVQUFTLElBQUksUUFBN0IsQUFBcUMsS0FBSyxTQUFXLE9BQXJELEFBQTBEO3NDQUExRDt3Q0FBQTtBQUFBO3VCQVhSLEFBQ0EsQUFDSSxBQVNJLEFBS1g7QUFqQkQsdUJBa0JLLElBQUcsUUFBQSxBQUFRLGFBQVcsT0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBckMsQUFBMkMsVUFBUyxBQUNwRDsyQ0FDRCxjQUFBLFVBQU0sS0FBTyxLQUFiLEFBQWEsQUFBSztzQ0FBbEI7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0NBQWY7d0NBQUEsQUFDSTtBQURKO3VDQUNJLEFBQUMsZ0NBQU0sS0FBTyxLQUFkLEFBQWMsQUFBSyxBQUNuQjs0QkFBTSxRQUROLEFBQ2MsQUFDZDsrQkFBUyxRQUZULEFBRWlCLEFBQ2pCOzhCQUFRLFFBSFIsQUFHZ0IsQUFDaEI7K0JBQVMsUUFKVCxBQUlpQixBQUNqQjsrQkFBUyxRQUxULEFBS2lCLEFBQ2pCOzhCQUFRLFFBTlIsQUFNZ0I7O3NDQU5oQjt3Q0FESixBQUNJLEFBUUE7QUFSQTt3Q0FRQSxjQUFBLFlBQVMsTUFBVCxBQUFnQixVQUFTLElBQUksUUFBN0IsQUFBcUMsS0FBSyxTQUFXLE9BQXJELEFBQTBEO3NDQUExRDt3Q0FBQTtBQUFBO3VCQVhQLEFBQ0QsQUFDSSxBQVNJLEFBS1g7QUFDSjtBQTFEakIsQUFDSSxBQWdCSSxBQUNJLEFBQ0ssQUE0Q3BCOzs7OztFQWpHd0IsZ0JBQU0sQTs7QUFvR25DOzs7OztBQUNBLElBQUk7O29CQUNRLEFBQ1MsQUFDYjttQkFGSSxBQUVRLEFBQ1o7QUFDQTtpQkFKSSxBQUlNLEFBQ1Y7QUFDQTtzQkFOSSxBQU1XLEFBQ2Y7a0JBUEksQUFPTyxBQUNYO2VBUkksQUFRSSxBQUNSO3lCQVZSLEFBQWEsQUFDRCxBQVNjO0FBVGQsQUFDSjtBQUZLLEFBQ1QiLCJmaWxlIjoibWFpbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJGOi9NRVJOIFN0YWNrL0NJQyBIdWIgV29yay9FLWNvbW1lcnNlIHByb2plY3QifQ==