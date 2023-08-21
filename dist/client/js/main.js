(window["webpackJsonpKudoz"] = window["webpackJsonpKudoz"] || []).push([["main"],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(1));
const ReactDOM = __importStar(__webpack_require__(6));
const react_router_dom_1 = __webpack_require__(12);
const KudoEvent_1 = __importDefault(__webpack_require__(32));
__webpack_require__(284);
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                React.createElement("div", null, "Ahoj, toto je main routa, tu mozno raz daco bude, mozno nie :P")),
            React.createElement(react_router_dom_1.Route, { path: "/priklad" },
                React.createElement("div", null, "Priklad na inu route")),
            React.createElement(react_router_dom_1.Route, { path: "/event/:id", component: KudoEvent_1.default }))));
}
exports.default = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(1));
__webpack_require__(220);
exports.Knight = (props) => (React.createElement("div", { className: "kudoKnight" },
    React.createElement("div", null,
        React.createElement("img", { src: "/img/007-crusader.png" })),
    React.createElement("div", { className: "kudoKnight__content" },
        React.createElement("h3", null, "Kudo Knight"),
        React.createElement("h2", null, props.mostKudos))));
exports.KnightForUser = (props) => ( /*zmenaKnight pridanie KnightForUser*/React.createElement("div", { className: "kudoKnight" },
    React.createElement("div", null,
        React.createElement("img", { src: "/img/007-crusader.png" })),
    React.createElement("div", { className: "kudoKnight__content" },
        React.createElement("h3", null, "Kudo Knight"),
        React.createElement("h2", null, "?"))));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(222);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kudoKnight {\r\n  font-family: 'Ubuntu', Arial, Helvetica, sans-serif;\r\n  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%), #c6d8d3;\r\n  display: flex;\r\n  position: relative;\r\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n.kudoKnight__content {\r\n  margin-left: 110px;\r\n  margin-bottom: 16px;\r\n}\r\n.kudoKnight h3 {\r\n  font-family: 'Ubuntu_Medium';\r\n  margin-top: 20px;\r\n  font-size: 12px;\r\n  color: #6d686d;\r\n}\r\n\r\n.kudoKnight h2 {\r\n  font-family: 'Ubuntu_Medium';\r\n  font-size: 18px;\r\n  color: #331832;\r\n  margin-top: -5px;\r\n  margin-left: 0px;\r\n}\r\n.kudoKnight img {\r\n  position: absolute;\r\n  height: 120%;\r\n  bottom: 0;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(1));
__webpack_require__(225);
function getDate(dateFrom, dateTo) {
    const yearFrom = new Date(dateFrom).getFullYear();
    const monthFrom = new Date(dateFrom).getMonth() + 1;
    const dayFrom = new Date(dateFrom).getDate();
    const yearTo = new Date(dateTo).getFullYear();
    const monthTo = new Date(dateTo).getMonth() + 1;
    const dayTo = new Date(dateTo).getDate();
    if (yearFrom !== yearTo) {
        return `${dayFrom}.${monthFrom}.${yearFrom} - ${dayTo}.${monthTo}.${yearTo} `;
    }
    else if (monthFrom !== monthTo) {
        return `${dayFrom}.${monthFrom} - ${dayTo}.${monthTo}.${yearTo} `;
    }
    else {
        return `${dayFrom} - ${dayTo}.${monthTo}.${yearTo} `;
    }
}
exports.EventInfo = (props) => {
    return (react_1.default.createElement("div", { className: "eventInfo" },
        react_1.default.createElement("h1", null, props.eventName),
        react_1.default.createElement("h2", null, getDate(props.dateFrom, props.dateTo))));
};


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(226);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\r\n  --text-color: #ffffff;\r\n}\r\n\r\n.eventInfo {\r\n  position: relative;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.eventInfo h1,\r\nh2 {\r\n  font-family: 'Ubuntu_Normal';\r\n  font-style: normal;\r\n  color: var(--text-color);\r\n  margin: 2px;\r\n}\r\n\r\n.eventInfo h1 {\r\n  font-size: 24px;\r\n  line-height: 28px;\r\n}\r\n\r\n.eventInfo h2 {\r\n  font-size: 14px;\r\n  line-height: 17px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(1));
const react_select_search_1 = __importDefault(__webpack_require__(228));
const api_1 = __webpack_require__(33);
const constants_1 = __webpack_require__(234);
const CardIcon_1 = __webpack_require__(235);
__webpack_require__(238);
const CARD_TYPES = Object.values(constants_1.CARD_TYPE);
class KudoForm extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.eventId = props.eventId;
        this.formRef = react_1.default.createRef();
        this.messageRef = react_1.default.createRef();
        this.state = {
            name: undefined,
            type: constants_1.CARD_TYPE.totally_awesome
        };
    }
    componentDidMount() {
        if (this.formRef.current && this.messageRef.current) {
            const name_options = this.formRef.current.querySelector('.name .select-search-box__options');
            const type_options = this.formRef.current.querySelector('.typePicker .select-search-box__options');
            const message_height = this.messageRef.current.parentElement.offsetHeight;
            if (name_options && type_options) {
                name_options.style.maxHeight = `${message_height - 1}px`;
                type_options.style.height = `${message_height + 55}px`;
            }
        }
    }
    render() {
        const buttonClass = this.props.isActive ? '' : 'disabled';
        return (react_1.default.createElement("div", { className: "kudoForm", ref: this.formRef },
            react_1.default.createElement("div", { className: "typePicker" }, this.typePicker()),
            react_1.default.createElement("div", { className: "main" },
                this.props.isLoading
                    ? react_1.default.createElement("div", null, "Loading...")
                    : '',
                react_1.default.createElement("div", { className: "name" },
                    "Name ",
                    this.peoplePicker()),
                react_1.default.createElement("div", { className: "message" },
                    react_1.default.createElement("textarea", { ref: this.messageRef, placeholder: "Message" }))),
            react_1.default.createElement("div", { className: `submit ${buttonClass}`, onClick: () => this.onSubmit() }, "Give Kudos")));
    }
    typePicker() {
        const options = CARD_TYPES.map((type) => {
            return {
                name: type.replace('_', ' '),
                value: type
            };
        });
        const handleClick = (valueProps) => this.onTypeSelect(valueProps);
        return (react_1.default.createElement(react_select_search_1.default, { options: options, value: this.state.type, search: false, onChange: handleClick, renderOption: this.renderOption, renderValue: this.renderValue }));
    }
    renderValue(label) {
        return (react_1.default.createElement("div", { className: "typeTitle" },
            react_1.default.createElement(CardIcon_1.CardIcon, Object.assign({}, { cardType: label.replace(' ', '_') })),
            label));
    }
    renderOption(valueProps) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(CardIcon_1.CardIcon, Object.assign({}, { cardType: valueProps.value })),
            react_1.default.createElement("div", null, valueProps.name)));
    }
    peoplePicker() {
        const handleClick = (valueProps) => this.onFolkSelect(valueProps);
        const placeholder = this.props.peopleList.length > 0 ? 'Select name' : 'No names available';
        return react_1.default.createElement(react_select_search_1.default, { options: this.props.peopleList, onChange: handleClick, placeholder: placeholder, value: this.state.name });
    }
    onTypeSelect(valueProps) {
        this.setState({ type: valueProps.value });
    }
    onFolkSelect(valueProps) {
        this.setState({ name: valueProps.name });
    }
    drawRed(error) {
        const classlist = this.formRef.current.getElementsByClassName(error)[0].classList;
        classlist.add('red');
        setTimeout(() => {
            classlist.remove('red');
        }, 700);
    }
    onSubmit() {
        if (this.props.isActive) {
            if (this.state.name === undefined) {
                this.drawRed("name" /* name */);
            }
            else if (!this.messageRef.current ||
                (this.messageRef.current && this.messageRef.current.value.trim().length === 0) ||
                (this.messageRef.current && this.messageRef.current.value === 'Sprava')) {
                this.drawRed("message" /* message */);
            }
            else {
                const new_card = {
                    awardedTo: this.state.name,
                    created: new Date().getTime(),
                    eventId: this.eventId,
                    likes: 0,
                    text: this.messageRef.current.value,
                    type: this.state.type
                };
                api_1.insert('/api/cards', new_card)
                    .then((data) => {
                    const ownVOTE = localStorage.getItem('kudoVote-ownCards');
                    const ownCards = ownVOTE ? JSON.parse(ownVOTE) : [];
                    ownCards.push(data._id);
                    localStorage.setItem('kudoVote-ownCards', JSON.stringify(ownCards));
                    this.clearForm();
                    document.dispatchEvent(new CustomEvent('kudoz::cardListRefresh'));
                })
                    .catch(() => {
                    console.log('Error: card not inserted');
                });
            }
        }
    }
    clearForm() {
        this.setState({ name: undefined });
        this.messageRef.current.value = '';
    }
}
exports.default = KudoForm;


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(1));
const constants_1 = __webpack_require__(234);
__webpack_require__(236);
function getIcon(cardType) {
    switch (cardType) {
        case constants_1.CARD_TYPE.great_job:
            return '009-positive-vote.svg';
        case constants_1.CARD_TYPE.totally_awesome:
            return '005-star.svg';
        case constants_1.CARD_TYPE.well_done:
            return '006-smiling-face.svg';
        case constants_1.CARD_TYPE.many_thanks:
            return '003-flower.svg';
        case constants_1.CARD_TYPE.very_happy:
            return '002-heart.svg';
        case constants_1.CARD_TYPE.congrats:
            return '004-balloons.svg';
        case constants_1.CARD_TYPE.proud:
            return '001-crowns.svg';
        case constants_1.CARD_TYPE.thank_you:
            return '010-birthday-cupcake.svg';
        default:
            return '005-star.svg';
    }
}
exports.CardIcon = (props) => {
    return (react_1.default.createElement("div", { className: "cardIcon" },
        react_1.default.createElement("img", { src: `/img/${getIcon(props.cardType)}`, title: props.cardType.replace('_', ' ').toUpperCase() })));
};


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(237);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cardIcon {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.cardIcon img {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-width: 20px;\r\n  min-height: 20px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(239);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kudoForm {\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  font-family: 'Ubuntu_Normal';\r\n}\r\n\r\n.kudoForm input,\r\n.kudoForm textarea {\r\n  font-family: 'Ubuntu_Normal';\r\n}\r\n\r\n.kudoForm .typePicker {\r\n  font-family: 'Ubuntu_Normal';\r\n  display: flex;\r\n  align-items: center;\r\n  height: 67px;\r\n  border-radius: 10px 10px 0 0;\r\n  background-color: #fdf0d5;\r\n  font-size: 20px;\r\n  color: #331832;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.kudoForm .typePicker:hover {\r\n  background-color: #f9e6a3;\r\n}\r\n\r\n.kudoForm .typePicker .cardIcon {\r\n  max-width: 40px;\r\n  max-height: 40px;\r\n  margin-right: 16px;\r\n}\r\n\r\n.kudoForm .typeTitle {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.kudoForm .typePicker .select-search-box__options {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.kudoForm .typePicker .select-search-box__option:hover {\r\n  background: #f7e8d4;\r\n}\r\n.kudoForm .typePicker .select-search-box__option > div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.kudoForm .typePicker .select-search-box__options .cardIcon {\r\n  margin-right: 10px;\r\n  width: 30px;\r\n  max-width: 30px;\r\n  max-height: 30px;\r\n  min-width: 30px;\r\n}\r\n\r\n.kudoForm .typePicker .select-search-box__options li {\r\n  width: 50%;\r\n  padding: 14px;\r\n  height: 59px;\r\n  text-transform: capitalize;\r\n  background-color: #fbf8f4;\r\n}\r\n\r\n.kudoForm .typePicker .select-search-box__options li:hover {\r\n  background: rgba(47, 204, 139, 0.1);\r\n}\r\n\r\n.kudoForm .main {\r\n  height: 237px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.kudoForm .name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 23px;\r\n  height: 55px;\r\n  font-size: 12px;\r\n  color: #6d686d;\r\n  border-bottom: 1px solid rgba(198, 216, 211, 0.3);\r\n}\r\n\r\n.kudoForm .name .select-search-box__search {\r\n  background-color: transparent;\r\n  width: 100%;\r\n  height: 53px;\r\n  margin-left: 20px;\r\n  border-radius: initial;\r\n  border: none;\r\n  font-size: 16px;\r\n  color: #6d686d;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.kudoForm .name .select-search-box .select-search-box__select {\r\n  top: 55px;\r\n  width: calc(100% - 23px);\r\n}\r\n\r\n.kudoForm .message {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 21px 23px;\r\n  flex-grow: 1;\r\n}\r\n\r\n.kudoForm .message textarea {\r\n  flex-grow: 1;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  color: #6d686d;\r\n  resize: none;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.kudoForm .name.red,\r\n.kudoForm .message.red {\r\n  animation: blink 0.7s ease;\r\n}\r\n\r\n.kudoForm .submit {\r\n  font-family: 'Ubuntu_Bold';\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 49px;\r\n  border-radius: 0 0 10px 10px;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  background: linear-gradient(180deg, #f0544f 0%, #d74945 100%), #f0544f;\r\n  cursor: pointer;\r\n}\r\n.kudoForm .submit:hover {\r\n  background: #de3934;\r\n}\r\n\r\n.kudoForm .submit.disabled {\r\n  pointer-events: none;\r\n  background: linear-gradient(180deg, #cecece 0%, #bcbdc4 100%), #bcbdc4;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    background: transparent;\r\n  }\r\n  50% {\r\n    background: #f0544fc7;\r\n  }\r\n  100% {\r\n    background: transparent;\r\n  }\r\n}\r\n\r\n/* react-select-search */\r\n.select-search-box {\r\n  width: 100%;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  font-family: 'Ubuntu_Normal';\r\n}\r\n\r\n.select-search-box *,\r\n.select-search-box *::after,\r\n.select-search-box *::before {\r\n  box-sizing: inherit;\r\n}\r\n\r\n.select-search-box__select {\r\n  display: none;\r\n}\r\n\r\n.select-search-box__select.select-search-box__select--display {\r\n  display: block;\r\n  border-radius: 0;\r\n}\r\n\r\n.select-search-box__search {\r\n  outline: none;\r\n}\r\n\r\n.select-search-box__value {\r\n  position: relative;\r\n}\r\n\r\n.select-search-box__value::after {\r\n  content: '';\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: calc(50% - 9px);\r\n  right: 19px;\r\n  width: 11px;\r\n  height: 11px;\r\n  transform: rotate(45deg);\r\n  border-right: 1px solid #000;\r\n  border-bottom: 1px solid #000;\r\n  pointer-events: none;\r\n}\r\n\r\n.select-search-box__input {\r\n  display: block;\r\n  height: 36px;\r\n  width: 100%;\r\n  padding: 0 16px;\r\n  background: #fff;\r\n  border: none;\r\n  box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);\r\n  border-radius: 3px;\r\n  outline: none;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  line-height: 36px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.select-search-box__input::-webkit-search-decoration,\r\n.select-search-box__input::-webkit-search-cancel-button,\r\n.select-search-box__input::-webkit-search-results-button,\r\n.select-search-box__input::-webkit-search-results-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.select-search-box__input:hover {\r\n  border-color: #2fcc8b;\r\n}\r\n\r\n.select-search-box__input:not([readonly]):focus {\r\n  cursor: initial;\r\n}\r\n\r\n.select-search-box__select {\r\n  background: #fff;\r\n  box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.select-search-box:not(.select-search-box--multiple) .select-search-box__select {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 53px;\r\n  right: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n  max-height: 360px;\r\n}\r\n\r\n.select-search-box__options {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin: 0;\r\n}\r\n\r\n.select-search-box__option {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: start;\r\n  height: 47px;\r\n  width: 100%;\r\n  padding: 0 16px;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  cursor: pointer;\r\n}\r\n\r\n.select-search-box__option.is-selected {\r\n  background: #2fcc8b;\r\n  color: #fff;\r\n}\r\n\r\n.select-search-box__option.is-highlighted,\r\n.select-search-box__option:not(.is-selected):hover,\r\n.select-search-box__option:not(.select-search-box__option--hover):hover,\r\n.select-search-box__option--hover {\r\n  background: rgba(47, 204, 139, 0.1);\r\n}\r\n\r\n.select-search-box__option--hover:hover,\r\n.select-search-box__option--hover:not(.is-selected):hover {\r\n  background: rgba(47, 204, 139, 0.2);\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(1));
const CardIcon_1 = __webpack_require__(235);
const api_1 = __webpack_require__(33);
const client_1 = __webpack_require__(34);
__webpack_require__(241);
class Card extends react_1.Component {
    constructor(props) {
        super(props);
        /*40    <div className={this.props.highlighted ? 'card__text-highlighted ' : 'card__text__TVmode'}>*/
        this.vote = (event) => {
            const eventID = event.currentTarget.dataset.eventid;
            const cardID = event.currentTarget.dataset.cardid;
            const savedVote = localStorage.getItem(`kudosVote-${eventID}`);
            let voteData = {
                cardID: [],
                eventID
            };
            if (this.props.isActive) {
                if (savedVote) {
                    voteData = JSON.parse(savedVote);
                }
                voteData.cardID.push(cardID);
                if (!this.alreadyVoted(eventID, cardID)) {
                    // API call to increment likes
                    api_1.like(cardID)
                        .then(() => {
                        window.setTimeout(() => {
                            document.dispatchEvent(new CustomEvent('kudoz::cardListRefresh'));
                        }, 500);
                    })
                        .catch((err) => {
                        console.log(`Error: like not inserted - ${err}`);
                    });
                    this.setState({ voted: true });
                    localStorage.setItem(`kudosVote-${eventID}`, JSON.stringify(voteData));
                }
            }
            return;
        };
        this.state = {
            voted: false,
            role: client_1.getCookie('connect.role') /*zmenaLikes zistenie role*/
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: "card" },
            react_1.default.createElement("div", { className: "card__icon" },
                react_1.default.createElement(CardIcon_1.CardIcon, { cardType: this.props.cardType })),
            react_1.default.createElement("div", { className: location.href.indexOf('?tv=true') > -1 ? 'card__text-TVmode' : 'card__text' },
                react_1.default.createElement("h3", null, this.props.awarded),
                react_1.default.createElement("p", null, this.props.text)),
            this.getVoteButton()));
    }
    getVoteButton() {
        if (this.props.isTwoWeeks === true) {
            return (react_1.default.createElement("div", { className: "card__likes-noVote", title: "event is inactive" }, this.props.likes));
        }
        else if (this.props.Show === true && this.state.role === 'admin' && this.props.isActive === true) {
            if (this.yourChoice(this.props.eventID, this.props.cardID)) {
                return (react_1.default.createElement("div", { className: "card__likes-yourChoice", title: "your choice" }, this.props.likes));
            }
            else {
                return (react_1.default.createElement("div", { onClick: this.vote, "data-eventid": this.props.eventID, "data-cardid": this.props.cardID, className: "card__likes", title: "vote" }, this.props.likes));
            }
        }
        else if (this.props.Show === true && this.state.role === "admin" && this.props.isActive === false) {
            return (react_1.default.createElement("div", { className: "card__likes-noVote", title: "event is inactive" }, this.props.likes));
        }
        else if (this.props.isActive === true) {
            if (this.yourChoice(this.props.eventID, this.props.cardID)) {
                return (react_1.default.createElement("div", { className: "card__likes-yourChoice", title: "your choice" }));
            }
            else {
                return (react_1.default.createElement("div", { onClick: this.vote, "data-eventid": this.props.eventID, "data-cardid": this.props.cardID, className: "card__likes", title: "vote" }));
            }
        }
        else {
            return (react_1.default.createElement("div", { className: "card__likes-noVote", title: "event is inactive" }));
        }
    }
    alreadyVoted(eventID, cardID) {
        const savedVote = localStorage.getItem(`kudosVote-${eventID}`);
        if (savedVote) {
            const data = JSON.parse(savedVote);
            if (data.cardID.includes(cardID)) {
                return true;
            }
        }
        return false;
    }
    yourChoice(eventID, cardID) {
        const savedVote = localStorage.getItem(`kudosVote-${eventID}`);
        const ownVOTE = localStorage.getItem('kudoVote-ownCards');
        const ownCards = ownVOTE ? JSON.parse(ownVOTE) : [];
        if (savedVote) {
            const data = JSON.parse(savedVote);
            if (data.cardID.includes(cardID)) {
                return true;
            }
        }
        if (ownCards.includes(cardID)) {
            return true;
        }
        return false;
    }
}
exports.default = Card;


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(242);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\r\n  --card-bg-color-text: rgba(255, 255, 255, 0.9);\r\n  /*--card-bg-color-body-highlighted: rgba(253, 240, 213, 0.9);*/\r\n  --card-bg-color-icon: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%),\r\n    rgba(198, 216, 211, 0.9);\r\n  --card-text-color-h3: #331832;\r\n  --card-text-color: #6d686d;\r\n  --card-bg-color-likes: #f0544f;\r\n  --card-bg-color-likes-yourChoice: #2eb378;\r\n  --card-bg-color-likes-noVote: #bcbdc4;\r\n  --card-text-color-likes: #ffffff;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  position: relative;\r\n  min-height: 80px;\r\n  border-radius: 0px 10px 10px 0px;\r\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\r\n  background: transparent;\r\n  border-radius: 10px;\r\n  margin: 11px;\r\n}\r\n\r\n.card .card__icon {\r\n  min-width: 70px;\r\n  width: 70px;\r\n  background: var(--card-bg-color-icon);\r\n  border-radius: 10px 0px 0px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.card .card__icon img {\r\n  width: 33px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card .card__text,\r\n.card .card__text-TVmode {\r\n  width: 100%;\r\n}\r\n\r\n.card .card__text,\r\n.card .card__text-TVmode {\r\n  border-radius: 0px 10px 10px 0px;\r\n  padding: 20px 17px 20px 17px;\r\n  background: var(--card-bg-color-text);\r\n}\r\n\r\n.card .card__text h3{ /*napis na karte*/\r\n  font-family: 'Ubuntu_Medium';\r\n  font-size: 14px; \r\n  line-height: 16px;\r\n  color: var(--card-text-color-h3);\r\n  margin: 0px;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.card .card__text-TVmode h3{ /*napis na karte pocas TV modu*/\r\n  font-family: 'Ubuntu_Medium';\r\n  font-size: 28px; /*14px; */\r\n  line-height: 32px; /*16px;*/\r\n  color: var(--card-text-color-h3);\r\n  margin: 0px;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.card .card__text p { /*test na karte*/\r\n  font-family: 'Ubuntu_Normal';\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  color: var(--card-text-color);\r\n  margin: 0px;\r\n}\r\n\r\n.card .card__text-TVmode p{ /*test na karte pocas TV modu*/\r\n  font-family: 'Ubuntu_Normal';\r\n  font-size: 24px; /*12px;*/\r\n  line-height: 28px; /*14px;*/\r\n  color: var(--card-text-color);\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.card .card__likes,\r\n.card .card__likes-yourChoice,\r\n.card .card__likes-noVote {\r\n  width: 22px;\r\n  height: 22px;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: -11px;\r\n  background: var(--card-bg-color-likes-yourChoice);\r\n  border-radius: 50%;\r\n  color: var(--card-text-color-likes);\r\n  font-family: 'Ubuntu_Bold';\r\n  font-size: 10px;\r\n  line-height: 22px;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease-out;\r\n}\r\n.card .card__likes {\r\n  cursor: pointer;\r\n}\r\n\r\n.card .card__likes-noVote {\r\n  background: var(--card-bg-color-likes-noVote);\r\n}\r\n\r\n.card .card__likes-yourChoice {\r\n  background: var(--card-bg-color-likes);\r\n  animation: pulse 0.3s;\r\n  animation-iteration-count: 2;\r\n}\r\n\r\n@keyframes pulse {\r\n  from {\r\n    transform: scale(1, 1);\r\n  }\r\n  50% {\r\n    transform: scale(1.3, 1.3);\r\n  }\r\n  to {\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(1));
const client_1 = __webpack_require__(34);
class CardNotification extends react_1.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio('/audio/notification.wav');
        this.state = {
            play: this.props.playMusic ? this.props.playMusic : false
        };
        this.bind = {
            onEnded: this.onEnded.bind(this),
            onNotification: this.onNotification.bind(this)
        };
    }
    componentDidMount() {
        this.audio.addEventListener('ended', this.bind.onEnded);
        document.addEventListener('kudoz::newNotification', this.bind.onNotification);
    }
    componentWillUnmount() {
        this.audio.removeEventListener('ended', this.bind.onEnded);
        document.removeEventListener('kudoz::newNotification', this.bind.onNotification);
    }
    render() {
        this.state.play && client_1.soundTurnedOn() ? this.audio.play() : this.audio.pause();
        return react_1.default.createElement("div", null);
    }
    onEnded() {
        this.setState({ play: false });
    }
    onNotification() {
        this.setState({ play: true });
    }
}
exports.default = CardNotification;


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(1));
const SoundSwitch_1 = __importDefault(__webpack_require__(245));
__webpack_require__(248);
const react_switch_1 = __importDefault(__webpack_require__(250));
class KudoSettings extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { checked: window.location.href.includes('?tv=true') };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(checked) {
        this.setState({ checked });
        const url = window.location.origin + window.location.pathname;
        window.setTimeout(() => {
            if (checked) {
                window.location.href = `${url}?tv=true`;
            }
            else {
                window.location.href = url;
            }
        }, 200);
    }
    render() {
        return (react_1.default.createElement("div", { className: "kudoSettings" },
            react_1.default.createElement("div", { className: "tv_mode" },
                "TV mode: ",
                react_1.default.createElement(react_switch_1.default, { onChange: this.handleChange, checked: this.state.checked })),
            react_1.default.createElement("div", { className: "sound_mode" },
                "Sound: ",
                react_1.default.createElement(SoundSwitch_1.default, null))));
    }
}
exports.default = KudoSettings;


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(1));
const client_1 = __webpack_require__(34);
__webpack_require__(246);
class SoundSwitch extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: client_1.soundTurnedOn() ? 'on' : 'off'
        };
        this.bind = {
            onSoundOnOff: this.onSoundOnOff.bind(this)
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: `soundSwitch ${this.state.sound === 'off' ? 'soundSwitch--off' : 'soundSwitch--on'}`, title: `${this.state.sound === 'off' ? 'Turn sound on' : 'Turn sound off'}`, onClick: this.bind.onSoundOnOff }));
    }
    onSoundOnOff() {
        this.setState({ sound: client_1.soundTurnedOn() ? 'off' : 'on' });
        const data = localStorage.getItem('kudosSettings');
        let settings;
        if (data) {
            settings = JSON.parse(data);
            if (settings && settings.sound === 'on') {
                settings.sound = 'off';
            }
            else {
                settings.sound = 'on';
            }
        }
        else {
            settings = { sound: 'on' };
        }
        localStorage.setItem('kudosSettings', JSON.stringify(settings));
    }
}
exports.default = SoundSwitch;


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(247);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".soundSwitch,\r\n.soundSwitch--on,\r\n.soundSwitch--off {\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n  margin-left: 10px;\r\n}\r\n\r\n.soundSwitch--on {\r\n  background: url('/img/volume.png');\r\n  background-size: 20px;\r\n}\r\n\r\n.soundSwitch--off {\r\n  background: url('/img/no-sound.png');\r\n  background-size: 20px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(249);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kudoSettings {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  width: auto;\r\n  text-align: right;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  color: #ffffff;\r\n}\r\n.tv_mode, .sound_mode {\r\n  margin: 0 10px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(253);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kudoEvent {\r\n  background: url('/img/general-background.png');\r\n  background-size: cover;\r\n  font-family: 'Ubuntu', Arial, Helvetica, sans-serif;\r\n  padding-right: 0px;\r\n  min-height: calc(100vh + 50px);\r\n  width: 100%;\r\n}\r\n\r\n.kudoEvent .event_info { /*Totally Awesome a Give Kudos*/\r\n  float: left;\r\n  flex-basis: 460px;\r\n  width: 460px;\r\n  min-width: 460px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column; \r\n  align-items: start;\r\n  justify-content: center;\r\n  padding: 50px 50px 0 100px;\r\n}\r\n\r\n.kudoEvent .event_info > div {\r\n  width: 100%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.kudoEvent .event_info .eventInfo {\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.kudoEvent .event_info .kudoForm {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.kudoEvent .event_cards-TVmode,\r\n.kudoEvent .event_cards { /*usporiadanie cards*/\r\n  margin-left: 100px;\r\n  padding: 50px 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  overflow-y: auto;\r\n  flex: 1;\r\n}\r\n\r\n\r\n.kudoEvent .event_cards .card { /*velkost karty*/\r\n  width: 296px; /*455px*/\r\n}\r\n\r\n/* ked nebude potreba vymazat*/\r\n.kudoEvent .event_cards-TVmode .card { /*velkost karty v TVmode*/\r\n  width: 455px; /*296px; /* 454px-457px*/\r\n}\r\n\r\n.kudoEvent .newCard {\r\n  display: flex;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 4%;\r\n  position: absolute;\r\n  background: rgba(83, 83, 83, 0.3);\r\n}\r\n\r\n.kudoEvent .newCard.hidden {\r\n  display: none;\r\n}\r\n\r\n.kudoEvent .newCard > div {\r\n  position: relative;\r\n  margin: auto;\r\n  width: 70%;\r\n  height: 70%;\r\n  animation: popup 0.3s ease-out;\r\n}\r\n\r\n.kudoEvent .newCard .close {\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 12px;\r\n  width: 12px;\r\n  height: 12px;\r\n  z-index: 11;\r\n  cursor: pointer;\r\n}\r\n\r\n.kudoEvent .newCard .card {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.kudoEvent .newCard .card .card__icon {\r\n  width: 33%;\r\n  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%),\r\n    rgba(198, 216, 211, 1);\r\n}\r\n\r\n.kudoEvent .newCard .card .card__icon img {\r\n  width: 60%;\r\n}\r\n\r\n.kudoEvent .newCard .card .card__text{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background: #fdf0d5;\r\n}\r\n\r\n.kudoEvent .newCard .card .card__text h3{\r\n  font-size: 46px;\r\n  line-height: 54px;\r\n  padding: 1rem 2rem;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.kudoEvent .newCard .card .card__text p{\r\n  font-size: 40px;\r\n  line-height: 49px;\r\n  padding: 1rem 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.kudoEvent .newCard .card .card__likes {\r\n  display: none;\r\n}\r\n.kudoEvent .kudo-info-points {\r\n  background: #ffdc63;\r\n    right: 0;\r\n    z-index: 2;\r\n    padding: 0 10px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    box-shadow: 0px 2px 5px #c8d9d5;\r\n    cursor: help;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .kudoEvent {\r\n    padding: 0 0 0 20px;\r\n  }\r\n\r\n  .kudoEvent .event_info {\r\n    flex-basis: 320px;\r\n    width: 320px;\r\n    min-width: 320px;\r\n    padding: 0px 10px 0 0px;\r\n  }\r\n\r\n  .kudoEvent .event_cards-TVmode,\r\n  .kudoEvent .event_cards {\r\n    margin-left: 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 580px) {\r\n  .kudoEvent {\r\n    background: #0b1f39;\r\n    background: linear-gradient(140deg, #825640 0%, #0b1f39 100%);\r\n    flex-direction: column;\r\n    padding: 0px;\r\n    height: auto;\r\n  }\r\n\r\n  .kudoEvent .event_info {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 7%;\r\n  }\r\n  \r\n  .kudoEvent .event_cards-TVmode,\r\n  .kudoEvent .event_cards {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 7%;\r\n  }\r\n\r\n  .kudoEvent .event_cards-TVmode .card,\r\n  .kudoEvent .event_cards .card {\r\n    margin: 10px 0;\r\n    min-width: unset;\r\n    width: 100%;\r\n  }\r\n\r\n  .kudoEvent .event_cards-TVmode .card .card__text,\r\n  .kudoEvent .event_cards .card .card__text {\r\n    min-width: unset;\r\n  }\r\n\r\n  .kudoEvent .newCard {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@keyframes popup {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(1));
const qrcode_1 = __importDefault(__webpack_require__(255));
class QRcode extends react_1.Component {
    componentDidMount() {
        const canvas = document.getElementById('canvas');
        qrcode_1.default.toCanvas(canvas, this.props.url, { errorCorrectionLevel: 'H', width: 190 });
    }
    render() {
        return react_1.default.createElement("canvas", { id: "canvas" });
    }
}
exports.default = QRcode;


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(221);
            var content = __webpack_require__(285);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(286);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(223);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default padding */\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul[class],\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-weight: normal;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  scroll-behavior: smooth;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a class attribute */\r\nul[class],\r\nol[class] {\r\n  list-style: none;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(1));
const api_1 = __webpack_require__(33);
const client_1 = __webpack_require__(34);
const Knight_1 = __webpack_require__(219);
const EventInfo_1 = __webpack_require__(224);
const KudoForm_1 = __importDefault(__webpack_require__(227));
const Card_1 = __importDefault(__webpack_require__(240));
const CardNotification_1 = __importDefault(__webpack_require__(243));
const KudoSettings_1 = __importDefault(__webpack_require__(244));
__webpack_require__(252);
const QRcode_1 = __importDefault(__webpack_require__(254));
const client_2 = __webpack_require__(34);
const MODAL_INTERVAL = 120 * 1000;
const MODAL_TIME = 120 * 1000;
const REFRESH = 15 * 1000; // 60 seconds
function CardModal({ newCardProps, onClick }) {
    return (react_1.default.createElement("div", { className: "newCard" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "close", onClick: onClick },
                react_1.default.createElement("img", { src: "/img/cancel.png" })),
            react_1.default.createElement(Card_1.default, Object.assign({}, newCardProps)))));
}
class KudoEvent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.eventId = this.props.match.params.id;
        this.state = {
            cards: [],
            event: undefined,
            is_active: false,
            shouldDisplayModal: false,
            nameList: [],
            nameListLoading: true,
            show: false,
            is_two_weeks: false,
            role: client_2.getCookie('connect.role') /*zmenaKnight zistenie role*/
        };
        this.bind = {
            onCardListRefresh: this.onCardListRefresh.bind(this),
            onHideModal: this.onHideModal.bind(this),
            changeShow: this.changeShow.bind(this) /*zmenaButton*/
        };
    }
    componentDidMount() {
        this.getData();
        document.addEventListener('kudoz::cardListRefresh', this.bind.onCardListRefresh);
        window.clearInterval(this.interval);
        this.interval = window.setInterval(() => {
            this.getData();
        }, REFRESH);
    }
    componentDidUpdate(_prevProps, prevState) {
        if (prevState.cards.length < this.state.cards.length && !this.state.shouldDisplayModal) {
            const new_card = this.state.cards[this.state.cards.length - 1];
            const diff = new Date().getTime() - MODAL_INTERVAL;
            if (new_card && new_card.created > diff) {
                window.clearTimeout(this.timeout);
                this.setState({ shouldDisplayModal: true });
                this.timeout = window.setTimeout(() => {
                    this.setState({ shouldDisplayModal: false });
                }, MODAL_TIME);
            }
        }
    }
    componentWillUnmount() {
        document.removeEventListener('kudoz::cardListRefresh', this.bind.onCardListRefresh);
        window.clearInterval(this.interval);
        window.clearTimeout(this.timeout);
    }
    render() {
        if (location.href.indexOf('?tv=true') > -1) {
            const newCard = this.state.cards.length > 0 ? this.getCardProps(this.state.cards[this.state.cards.length - 1]) : undefined;
            return this.state.event ? (react_1.default.createElement("div", { className: "kudoEvent" },
                react_1.default.createElement("div", { className: "event_info" },
                    this.getEvent(),
                    this.getKnight(),
                    location.href.indexOf('?tv=true') > -1 ? (react_1.default.createElement(QRcode_1.default, { url: location.protocol + '//' + location.host + location.pathname })) : (react_1.default.createElement(KudoForm_1.default, { isLoading: this.state.nameListLoading, peopleList: this.state.nameList, eventId: this.eventId, isActive: this.state.is_active }))),
                react_1.default.createElement("div", { className: "event_cards-TVmode" }, this.processCards()),
                react_1.default.createElement(CardNotification_1.default, null),
                this.state.shouldDisplayModal ? react_1.default.createElement(CardModal, { newCardProps: newCard, onClick: this.bind.onHideModal }) : null,
                react_1.default.createElement(KudoSettings_1.default, null))) : (react_1.default.createElement("div", null));
        }
        else {
            const newCard = this.state.cards.length > 0 ? this.getCardProps(this.state.cards[this.state.cards.length - 1]) : undefined;
            return this.state.event ? (react_1.default.createElement("div", { className: "kudoEvent" },
                react_1.default.createElement("div", { className: "event_info" },
                    this.getEvent(),
                    this.getKnight(),
                    location.href.indexOf('?tv=true') > -1 ? (react_1.default.createElement(QRcode_1.default, { url: location.protocol + '//' + location.host + location.pathname })) : (react_1.default.createElement(KudoForm_1.default, { isLoading: this.state.nameListLoading, peopleList: this.state.nameList, eventId: this.eventId, isActive: this.state.is_active }))),
                react_1.default.createElement("div", { className: "event_cards" }, this.processCards()),
                react_1.default.createElement(CardNotification_1.default, null),
                this.state.shouldDisplayModal ? react_1.default.createElement(CardModal, { newCardProps: newCard, onClick: this.bind.onHideModal }) : null,
                react_1.default.createElement(KudoSettings_1.default, null))) : (react_1.default.createElement("div", null));
        }
    }
    /*zmenaButton vytvorenie buttonu a funkcie ktora na neho odkazuje*/
    changeShow() {
        this.setState({ show: !this.state.show });
        this.getData();
    }
    onHideModal() {
        this.setState({ shouldDisplayModal: false });
    }
    onCardListRefresh() {
        this.getData();
    }
    getData() {
        const now = new Date().getTime();
        api_1.select('/api/cards', { eventId: this.eventId }).then((data) => {
            if (this.state.cards.length < data.length) {
                document.dispatchEvent(new CustomEvent('kudoz::newNotification'));
            }
            if (this.state.show === true && this.state.role === 'admin') {
                data.sort((a, b) => b.likes - a.likes);
            }
            else { /*zmenaSort*/
                data.sort((a, b) => a.awardedTo.localeCompare(b.awardedTo));
            }
            this.setState({ cards: data });
        });
        api_1.select('/api/events', { _id: this.eventId })
            .then((data) => {
            const event = data[0];
            this.setState({
                event,
                is_active: event.dateFrom < now && now < event.dateTo,
                is_two_weeks: now > event.dateTo + 14 * 24 * 60 * 60 * 1000
            });
            this.loadNameList(event.userId);
        })
            .catch((err) => {
            console.log(err.message);
            window.clearInterval(this.interval);
        });
    }
    loadNameList(userId) {
        api_1.select('/api/namelist', { userId })
            .then((namesData) => {
            const nameList = namesData.length === 0 ? [] : this.formatNames(namesData[0].names);
            this.setState({ nameList, nameListLoading: false });
        })
            .catch((err) => {
            console.log('err', err);
        });
    }
    formatNames(namesData) {
        return namesData.split(',').map((name) => {
            const normalizedName = name.trim();
            return { name: normalizedName, value: normalizedName };
        });
    }
    getEvent() {
        if (this.state.event) {
            const event_props = {
                dateFrom: this.state.event.dateFrom,
                dateTo: this.state.event.dateTo,
                eventName: this.state.event.name
            };
            return react_1.default.createElement(EventInfo_1.EventInfo, Object.assign({}, event_props));
        }
        return react_1.default.createElement("div", null);
    }
    processCards() {
        const cards = [];
        this.state.cards.forEach((card_data) => {
            cards.push(react_1.default.createElement(Card_1.default, Object.assign({ key: card_data._id }, this.getCardProps(card_data))));
        });
        return cards;
    }
    getCardProps(card_data) {
        return {
            awarded: card_data.awardedTo,
            cardID: card_data._id,
            cardType: card_data.type,
            eventID: card_data.eventId,
            isActive: this.state.is_active,
            likes: card_data.likes,
            text: card_data.text,
            Show: this.state.show,
            isTwoWeeks: this.state.is_two_weeks
        };
    }
    getKnight() {
        // TODO get most frequent name from array
        const list = client_1.getKudoNumberList(this.state.cards);
        if (this.state.is_two_weeks) {
            return (react_1.default.createElement("div", { style: { position: 'relative' } },
                react_1.default.createElement("div", { className: "kudo-info-points", title: list.map((person) => `${person.name}:${person.count}`).join(', ') }, "i"),
                react_1.default.createElement(Knight_1.Knight, Object.assign({}, { mostKudos: client_1.getKudoKnight(list) }))));
        }
        else if (this.state.role === 'admin' && this.state.show === true) { /*zmenaKnight if*/ /*zmenaButton || this.state.show === true*/
            return (react_1.default.createElement("div", { style: { position: 'relative' }, onClick: this.bind.changeShow },
                react_1.default.createElement("div", { className: "kudo-info-points", title: list.map((person) => `${person.name}:${person.count}`).join(', ') }, "i"),
                react_1.default.createElement(Knight_1.Knight, Object.assign({}, { mostKudos: client_1.getKudoKnight(list) }))));
        }
        else if (this.state.role === 'admin' && this.state.show === false) { /*zmenaKnight if*/ /*zmenaButton || this.state.show === true*/
            return (react_1.default.createElement("div", { style: { position: 'relative' }, onClick: this.bind.changeShow },
                react_1.default.createElement(Knight_1.KnightForUser, Object.assign({}, { mostKudos: client_1.getKudoKnight(list) }))));
        }
        else {
            return (react_1.default.createElement("div", { style: { position: 'relative' } },
                react_1.default.createElement(Knight_1.KnightForUser, Object.assign({}, { mostKudos: client_1.getKudoKnight(list) }))));
        }
    }
}
exports.default = KudoEvent;


/***/ })

},[[0,"runtime","vendor","common"]]]);
//# sourceMappingURL=main.js.map