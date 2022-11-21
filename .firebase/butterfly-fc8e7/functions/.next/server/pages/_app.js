"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/main.tsx


const Main = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-h-screen bg-sky-50 min-w-fit",
        children: children
    });
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./web_assets/web_assets/whitelogo.svg
var whitelogo = __webpack_require__(9021);
// EXTERNAL MODULE: ./web_assets/web_assets/linkedin-icon.png
var linkedin_icon = __webpack_require__(7110);
;// CONCATENATED MODULE: ./components/layout/nav.tsx






let scrollY;
const NavLink = "items-center justify-center h-12 min-w-max mx-4 link-underline text-white font-sans text-3xl";
const Nav = ()=>{
    (0,external_react_.useEffect)(()=>{
        //Scroll event listener to show and hide navbar
        addScrollListner();
    });
    const addScrollListner = ()=>{
        const nav = document.getElementById("nav");
        scrollY = window.scrollY;
        const navHeight = nav.clientHeight / 2;
        window.addEventListener("scroll", ()=>{
            let currentScroll = window.scrollY;
            let diff = currentScroll - scrollY;
            if (diff < 0) {
                nav?.classList.remove("scroll-hide");
                nav?.classList.add("scroll-show");
            } else if (diff > 0 && currentScroll > navHeight) {
                nav?.classList.remove("scroll-show");
                nav?.classList.add("scroll-hide");
            }
            scrollY = window.scrollY;
        });
    };
    const collapse = ()=>{
        const nav = document.getElementById("nav");
        //Removing scroll events as it interferes with collapse
        nav?.classList.remove("scroll-show");
        nav?.classList.remove("scroll-hode");
        nav.classList.toggle("collapse-hide");
        nav.classList.toggle("collapse-show");
        document.getElementById("navbar").classList.toggle("hidden");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        id: "nav",
        className: "sticky top-0 flex flex-wrap items-center justify-center px-5 bg-fixed bg-custom-nav collapse-hide min-h-36",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "inline-flex items-center h-32 px-2 py-2 mr-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: whitelogo/* default */.Z,
                            height: 50,
                            width: 50,
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ml-3 logo-text",
                            children: "butterfly"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mb-6 text-6xl text-white",
                            children: "."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: collapse,
                className: "fixed right-0 inline-flex p-3 ml-10 mr-3 text-white rounded outline-none top-8 lg:hidden hover:text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navbar",
                className: "items-center justify-end hidden w-full bg-inherit lg:inline-flex lg:flex-grow lg:w-auto min-h-max",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center mr-12 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: NavLink,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/blog",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: NavLink,
                                children: "Blog"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: NavLink,
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: NavLink,
                                children: "Contact"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/company/butterflytechnologies/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: linkedin_icon/* default */.Z,
                                height: 40,
                                width: 40,
                                alt: "Logo"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./components/layout/header.tsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(nav, {});
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./web_assets/web_assets/Insta-logo.svg
/* harmony default export */ const Insta_logo = ({"src":"/_next/static/media/Insta-logo.d0a61bd7.svg","height":132,"width":132});
;// CONCATENATED MODULE: ./components/layout/footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bottom-0 flex flex-col justify-center w-full py-10 bg-custom-footer h-3/5 min-h-max h-max",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center justify-between h-48 p-4 text-xl text-center text-white",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Butterfly Technologies, Warwick University,"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Gibbet Hill Rd, Coventry,"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "CV4 7ES"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "United Kingdom "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row justify-between w-48 mt-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/butterfly.warwick/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Insta_logo,
                                height: 40,
                                width: 40,
                                alt: "Logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/company/butterflytechnologies/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: linkedin_icon/* default */.Z,
                                height: 40,
                                width: 40,
                                alt: "Logo"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps , router  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-screen h-screen bg-sky-50 min-w-screen",
        children: [
            router.route !== "/" && /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(main, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            router.route !== "/" && /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,670], () => (__webpack_exec__(4721)));
module.exports = __webpack_exports__;

})();