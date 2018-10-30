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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Head = require('../components/shared/Head');

var _Head2 = _interopRequireDefault(_Head);

var _Style = require('../styles/Style');

var _Style2 = _interopRequireDefault(_Style);

var _navigationIndex = require('../components/navigationIndex');

var _navigationIndex2 = _interopRequireDefault(_navigationIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\MERN Stack\\CIC Hub Work\\E-commerse project\\pages\\index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { user: [] };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // axios.get('/getuser').then((response)=>{
            //     this.setState({user : response.data})
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_Head2.default, { cssLink: '../static/index.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('header', { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('div', { id: 'logo', className: 'col-md-1 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }), _react2.default.createElement('nav', { id: 'navbar', className: 'col-md-7', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('ul', { type: 'none', id: 'navList', className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Home', _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'keyboard_arrow_down')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'About us', _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'keyboard_arrow_down')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Contact', _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'keyboard_arrow_down')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Support', _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'keyboard_arrow_down')))), _react2.default.createElement(_link2.default, { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('button', { id: 'loginBtn', className: 'col-md-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Sign In'))), _react2.default.createElement(_link2.default, { href: '/adminLogin', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('button', { id: 'loginBtn', className: 'col-md-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Admin')))), _react2.default.createElement('section', { id: 'section1', className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('div', { id: 'subsec1', className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h1', { id: 'sec1head1', className: 'col-md-6 col-md-offset-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'The Most Popular eCommerce Platform'), _react2.default.createElement('h1', { id: 'sec1head2', className: 'col-md-6 col-md-offset-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'For Shopping the Best Products.'), _react2.default.createElement('p', { id: 'sec1para', className: 'col-md-8 col-md-offset-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'With Over 18,422,142 Items, Powers Over 39% Of All Online Stores.'), _react2.default.createElement(_link2.default, { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('button', { id: 'sec1Btn', className: 'col-md-2 col-md-offset-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Get Started'))))), _react2.default.createElement('section', { id: 'section2', className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('h1', { id: 'sec2head1', className: 'col-md-6 col-md-offset-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'The Most Popular eCommerce Platform'), _react2.default.createElement('h1', { id: 'sec2head2', className: 'col-md-6 col-md-offset-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'For Shopping the Best Products.'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement('div', { id: 'sec2div', className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('div', { id: 'sec2div1', className: 'col-md-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('i', { id: 'div1icon', className: 'material-icons col-md-3 col-md-offset-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'phonelink'), _react2.default.createElement('h1', { id: 'div1heading', className: 'col-md-10 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Easy To Use & Customize'), _react2.default.createElement('p', { id: 'div1para', className: 'col-md-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Build an online store in minutes, with our intuitive admin interface you can customize the look of your site easily.')), _react2.default.createElement('div', { id: 'sec2div2', className: 'col-md-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('i', { id: 'div2icon', className: 'material-icons col-md-3 col-md-offset-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'credit_card'), _react2.default.createElement('h1', { id: 'div2heading', className: 'col-md-10 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'No Transaction Fees'), _react2.default.createElement('p', { id: 'div2para', className: 'col-md-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Unlike our competitors we do not sneak-in transaction fees that could end up costing you a small fortune.')), _react2.default.createElement('div', { id: 'sec2div3', className: 'col-md-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('i', { id: 'div3icon', className: 'material-icons col-md-3 col-md-offset-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'timeline'), _react2.default.createElement('h1', { id: 'div3heading', className: 'col-md-10 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Feature Rich'), _react2.default.createElement('p', { id: 'div3para', className: 'col-md-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'We are undoubtedly the leader in advanced features, making us the right choice to build an online store (and at no extra cost)!')), _react2.default.createElement('div', { id: 'sec2div4', className: 'col-md-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('i', { id: 'div4icon', className: 'material-icons col-md-3 col-md-offset-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'hearing'), _react2.default.createElement('h1', { id: 'div4heading', className: 'col-md-10 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, '24/7 Free Tech Support'), _react2.default.createElement('p', { id: 'div4para', className: 'col-md-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'We\u2019re here to help our users from setup to the most complicated matter. Even if you\'re using the trial.')))), _react2.default.createElement('section', { id: 'section3', className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('div', { id: 'sec3headDiv', className: 'col-md-6 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('h1', { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'The most ', _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'customizable eCommerce platform'), ' for shopping the ', _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'Best Products'), '.')), _react2.default.createElement(_link2.default, { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('button', { id: 'sec3Btn', className: 'col-md-2 col-md-offset-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Get Started')))), _react2.default.createElement('section', { id: 'section4', className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('h1', { id: 'sec4heading', className: 'col-md-6 col-md-offset-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Puchase Anything. Beautifully.'), _react2.default.createElement('p', { id: 'sec4para', className: 'col-md-8 col-md-offset-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'From real products and digital downloads to subscriptions, content and even your time, you\u2019ll be able to purchase anything from store ', _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'that\u2019s perfect for you.')), _react2.default.createElement(_link2.default, { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('button', { id: 'sec4Btn', className: 'col-md-2 col-md-offset-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, 'Get Started')))), _react2.default.createElement('footer', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('div', { id: 'subFooter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('p', { id: 'footerPara', className: 'col-md-8 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Do you need help? ', _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Contact us'), ' | ', _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Legal notice'), ' | \xA9 2017, eCommerce Private Platform, Ltd.'), _react2.default.createElement('div', { id: 'footerIconsDiv', className: 'col-md-2 col-md-offset-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('i', { className: 'fa fa-facebook-f footerIcons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }), _react2.default.createElement('i', { className: 'fa fa-instagram footerIcons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }), _react2.default.createElement('i', { className: 'fa fa-slack footerIcons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), _react2.default.createElement('i', { className: 'fa fa-twitter footerIcons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }), _react2.default.createElement('i', { className: 'fa fa-github footerIcons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            })))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJheGlvcyIsIkhlYWQiLCJTdHlsZXMiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7Ozs7Ozs7O29DQUduQjs7b0JBQUEsQUFBWSxPQUFNOzRDQUFBOzswSUFBQSxBQUNSLEFBQ047O2NBQUEsQUFBSyxRQUFRLEVBQUMsTUFGQSxBQUVkLEFBQWEsQUFBUTtlQUN4Qjs7Ozs7NENBQ2tCLEFBQ2Y7QUFDQTtBQUNBO0FBQ0g7Ozs7aUNBQ08sQUFDSjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUdJO0FBSEo7QUFBQSxhQUFBLGtCQUdJLEFBQUMsZ0NBQUssU0FBTixBQUFjOzhCQUFkO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCOzhCQUFsQjtnQ0FBQSxBQUNJO0FBREo7c0RBQ1MsSUFBTCxBQUFRLFFBQU8sV0FBZixBQUF5Qjs4QkFBekI7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxTQUFLLElBQUwsQUFBUSxVQUFTLFdBQWpCLEFBQTJCOzhCQUEzQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLE1BQUosQUFBUyxRQUFPLElBQWhCLEFBQW1CLFdBQVUsV0FBN0IsQUFBdUM7OEJBQXZDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBUSx3QkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFEWixBQUNJLEFBQVEsQUFDUix5Q0FBQSxjQUFBOzs4QkFBQTtnQ0FB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LFlBQVEsSUFBUixBQUFXLFdBQVUsV0FBckIsQUFBK0I7OEJBQS9CO2dDQUFBO0FBQUE7ZUE5RXBDLEFBeUVRLEFBS0ksQUFBcUIsQUFBRyxBQUU1QixtQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFNBQUssSUFBTCxBQUFROzhCQUFSO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBLE9BQUcsSUFBSCxBQUFNLGNBQWEsV0FBbkIsQUFBNkI7OEJBQTdCO2dDQUFBO0FBQUE7ZUFBMEUsc0NBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQTFFLEFBQTBFLGVBQW9CLHVCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUE5RixBQUE4RixpQkFEOUYsQUFDQSxBQUNBLG1FQUFBLGNBQUEsU0FBSyxJQUFMLEFBQVEsa0JBQWlCLFdBQXpCLEFBQW1DOzhCQUFuQztnQ0FBQSxBQUNJO0FBREo7b0RBQ08sV0FBSCxBQUFhOzhCQUFiO2dDQURKLEFBQ0ksQUFDQTtBQURBO3FEQUNHLFdBQUgsQUFBYTs4QkFBYjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtxREFDRyxXQUFILEFBQWE7OEJBQWI7Z0NBSEosQUFHSSxBQUNBO0FBREE7cURBQ0csV0FBSCxBQUFhOzhCQUFiO2dDQUpKLEFBSUksQUFDQTtBQURBO3FEQUNHLFdBQUgsQUFBYTs4QkFBYjtnQ0F6RnBCLEFBQ0ksQUFnRlEsQUFDSSxBQUVBLEFBS0ksQUFNdkI7QUFOdUI7Ozs7OztFQXBHQyxnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L01FUk4gU3RhY2svQ0lDIEh1YiBXb3JrL0UtY29tbWVyc2UgcHJvamVjdCJ9