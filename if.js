// (function () {
//     if (fieldname10) {
//         if (fieldname10 === 5000) {
//             return fieldname10 * 8;
//         }
//         if (fieldname10 === 100) {
//             return fieldname10 * 25;
//         }
//         if (fieldname10 === 300) {
//             return fieldname10 * 25;
//         }
//         if (fieldname10 === 500) {
//             return fieldname10 * 20;
//         }
//         if (fieldname10 === 1000) {
//             return fieldname10 * 18;
//         }
//     }
//     if(fieldname12) {
//         if (fieldname12 === 5000) {
//             return fieldname12 * 11;
//         }
//         if (fieldname12 === 1000) {
//             return fieldname12 * 20;
//         }
//         if (fieldname12 === 500) {
//             return fieldname12 * 25;
//         }
//         if (fieldname12 === 300) {
//             return fieldname12 * 30;
//         }
//         if (fieldname12 === 100) {
//             return fieldname12 * 30;
//         }
//     }
//     if(fieldname13) {
//         if (fieldname13 === 5000) {
//             return fieldname13 * 13;
//         }
//         if (fieldname13 === 1000) {
//             return fieldname13 * 40;
//         }
//         if (fieldname13 === 500) {
//             return fieldname13 * 45;
//         }
//         if (fieldname13 === 300) {
//             return fieldname13 * 55;
//         }
//         if (fieldname13 === 100) {
//             return fieldname13 * 55;
//         }
//     }
//     if(fieldname14) {
//         if (fieldname14 === 5000) {
//             return fieldname14 * 18;
//         }
//         if (fieldname14 === 1000) {
//             return fieldname14 * 48;
//         }
//         if (fieldname14 === 500) {
//             return fieldname14 * 50;
//         }
//         if (fieldname14 === 300) {
//             return fieldname14 * 60;
//         }
//         if (fieldname14 === 100) {
//             return fieldname14 * 60;
//         }
//     }
//     if(fieldname19) {
//         if (fieldname19 === 5000) {
//             return fieldname19 * 110;
//         }
//         if (fieldname19 === 1000) {
//             return fieldname19 * 125;
//         }
//         if (fieldname19 === 500) {
//             return fieldname19 * 135;
//         }
//         if (fieldname19 === 300) {
//             return fieldname19 * 150;
//         }
//         if (fieldname19 === 100) {
//             return fieldname19 * 150;
//         }
//     }
//     if(fieldname20) {
//         if (fieldname20 === 5000) {
//             return fieldname20 * 140;
//         }
//         if (fieldname20 === 1000) {
//             return fieldname20 * 155;
//         }
//         if (fieldname20 === 500) {
//             return fieldname20 * 165;
//         }
//         if (fieldname20 === 300) {
//             return fieldname20 * 180;
//         }
//         if (fieldname20 === 100) {
//             return fieldname20 * 180;
//         }
//     }
//     if(fieldname21) {
//         if (fieldname21 === 5000) {
//             return fieldname21 * 175;
//         }
//         if (fieldname21 === 1000) {
//             return fieldname21 * 185;
//         }
//         if (fieldname21 === 500) {
//             return fieldname21 * 195;
//         }
//         if (fieldname21 === 300) {
//             return fieldname21 * 210;
//         }
//         if (fieldname21 === 100) {
//             return fieldname21 * 210;
//         }
//     }
//     if(fieldname22) {
//         if (fieldname22 === 5000) {
//             return fieldname22 * 200;
//         }
//         if (fieldname22 === 1000) {
//             return fieldname22 * 215;
//         }
//         if (fieldname22 === 500) {
//             return fieldname22 * 225;
//         }
//         if (fieldname22 === 300) {
//             return fieldname22 * 240;
//         }
//         if (fieldname22 === 100) {
//             return fieldname22 * 240;
//         }
//     }
// })();
//
// function bad() {
//     throw new Error('bad');
// }
//
// function bad2() {
//     return new Promise(() => { throw new Error('bad2'); });
// }
//
// async function test() {
//     try {
//         await bad();
//     } catch (error) {
//         console.log('caught', error.message);
//     }
//
//     try {
//         await bad2();
//     } catch (error) {
//         console.log('caught', error.message);
//     }
// }
//
// test();
{
    "name": "node-rest-auth",
    "version": "0.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
    "accepts": {
        "version": "1.3.4",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.4.tgz",
            "integrity": "sha1-hiRnWMfdbSGmR0/whKR0DsBesh8=",
            "requires": {
            "mime-types": "2.1.17",
                "negotiator": "0.6.1"
        }
    },
    "acorn": {
        "version": "2.7.0",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-2.7.0.tgz",
            "integrity": "sha1-q259nYhqrKiwhbwzEreaGYQz8Oc="
    },
    "acorn-globals": {
        "version": "1.0.9",
            "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-1.0.9.tgz",
            "integrity": "sha1-VbtemGkVB7dFedBRNBMhfDgMVM8=",
            "requires": {
            "acorn": "2.7.0"
        }
    },
    "align-text": {
        "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/align-text/-/align-text-0.1.4.tgz",
            "integrity": "sha1-DNkKVhCT810KmSVsIrcGlDP60Rc=",
            "requires": {
            "kind-of": "3.2.2",
                "longest": "1.0.1",
                "repeat-string": "1.6.1"
        }
    },
    "amdefine": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
            "integrity": "sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU="
    },
    "append-field": {
        "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/append-field/-/append-field-0.1.0.tgz",
            "integrity": "sha1-bdxY+gg8e8VF08WZWygwzCNm1Eo="
    },
    "array-flatten": {
        "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
            "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "asap": {
        "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/asap/-/asap-1.0.0.tgz",
            "integrity": "sha1-sqRdpf36ILBJb8N2jMJ8EvqRan0="
    },
    "async": {
        "version": "2.1.4",
            "resolved": "https://registry.npmjs.org/async/-/async-2.1.4.tgz",
            "integrity": "sha1-LSFgx3iAMuTdbL4lAvH5osj2zeQ=",
            "requires": {
            "lodash": "4.17.4"
        }
    },
    "base64url": {
        "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/base64url/-/base64url-2.0.0.tgz",
            "integrity": "sha1-6sFuA+oUOO/5Qj1puqNiYu0fcLs="
    },
    "basic-auth": {
        "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-1.1.0.tgz",
            "integrity": "sha1-RSIe5Cn37h5QNb4/UVM/HN/SmIQ="
    },
    "bcrypt-nodejs": {
        "version": "0.0.3",
            "resolved": "https://registry.npmjs.org/bcrypt-nodejs/-/bcrypt-nodejs-0.0.3.tgz",
            "integrity": "sha1-xgkX8m3CNWYVZsaBBhwwPCsohCs="
    },
    "bluebird": {
        "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.0.tgz",
            "integrity": "sha1-eRQg1/VR7qKJdFOop3ZT+WYG1nw="
    },
    "body-parser": {
        "version": "1.17.2",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.17.2.tgz",
            "integrity": "sha1-+IkqvI+eYn1Crtr7yma/WrmRBO4=",
            "requires": {
            "bytes": "2.4.0",
                "content-type": "1.0.4",
                "debug": "2.6.7",
                "depd": "1.1.1",
                "http-errors": "1.6.2",
                "iconv-lite": "0.4.15",
                "on-finished": "2.3.0",
                "qs": "6.4.0",
                "raw-body": "2.2.0",
                "type-is": "1.6.15"
        },
        "dependencies": {
            "debug": {
                "version": "2.6.7",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.7.tgz",
                    "integrity": "sha1-krrR9tBbu2u6Isyoi80OyJTChh4=",
                    "requires": {
                    "ms": "2.0.0"
                }
            }
        }
    },
    "bson": {
        "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/bson/-/bson-1.0.6.tgz",
            "integrity": "sha512-D8zmlb46xfuK2gGvKmUjIklQEouN2nQ0LEHHeZ/NoHM2LDiMk2EYzZ5Ntw/Urk+bgMDosOZxaRzXxvhI5TcAVQ=="
    },
    "buffer-equal-constant-time": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
            "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
    },
    "buffer-shims": {
        "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/buffer-shims/-/buffer-shims-1.0.0.tgz",
            "integrity": "sha1-mXjOMXOIxkmth5MCjDR37wRKi1E="
    },
    "busboy": {
        "version": "0.2.14",
            "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.2.14.tgz",
            "integrity": "sha1-bCpiLvz0fFe7vh4qnDetNseSVFM=",
            "requires": {
            "dicer": "0.2.5",
                "readable-stream": "1.1.14"
        },
        "dependencies": {
            "isarray": {
                "version": "0.0.1",
                    "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
                    "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
            },
            "readable-stream": {
                "version": "1.1.14",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
                    "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
                    "requires": {
                    "core-util-is": "1.0.2",
                        "inherits": "2.0.3",
                        "isarray": "0.0.1",
                        "string_decoder": "0.10.31"
                }
            },
            "string_decoder": {
                "version": "0.10.31",
                    "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
                    "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
            }
        }
    },
    "bytes": {
        "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-2.4.0.tgz",
            "integrity": "sha1-fZcZb51br39pNeJZhVSe3SpsIzk="
    },
    "camelcase": {
        "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-1.2.1.tgz",
            "integrity": "sha1-m7UwTS4LVmmLLHWLCKPqqdqlijk="
    },
    "center-align": {
        "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/center-align/-/center-align-0.1.3.tgz",
            "integrity": "sha1-qg0yYptu6XIgBBHL1EYckHvCt60=",
            "requires": {
            "align-text": "0.1.4",
                "lazy-cache": "1.0.4"
        }
    },
    "character-parser": {
        "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/character-parser/-/character-parser-1.2.1.tgz",
            "integrity": "sha1-wN3kqxgnE7kZuXCVmhI+zBow/NY="
    },
    "clean-css": {
        "version": "3.4.28",
            "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-3.4.28.tgz",
            "integrity": "sha1-vxlF6C/ICPVWlebd6uwBQA79A/8=",
            "requires": {
            "commander": "2.8.1",
                "source-map": "0.4.4"
        },
        "dependencies": {
            "commander": {
                "version": "2.8.1",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-2.8.1.tgz",
                    "integrity": "sha1-Br42f+v9oMMwqh4qBy09yXYkJdQ=",
                    "requires": {
                    "graceful-readlink": "1.0.1"
                }
            }
        }
    },
    "cliui": {
        "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-2.1.0.tgz",
            "integrity": "sha1-S0dXYP+AJkx2LDoXGQMukcf+oNE=",
            "requires": {
            "center-align": "0.1.3",
                "right-align": "0.1.3",
                "wordwrap": "0.0.2"
        },
        "dependencies": {
            "wordwrap": {
                "version": "0.0.2",
                    "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz",
                    "integrity": "sha1-t5Zpu0LstAn4PVg8rVLKF+qhZD8="
            }
        }
    },
    "commander": {
        "version": "2.6.0",
            "resolved": "https://registry.npmjs.org/commander/-/commander-2.6.0.tgz",
            "integrity": "sha1-nfflL7Kgyw+4kFjugMMQQiXzfh0="
    },
    "concat-stream": {
        "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.0.tgz",
            "integrity": "sha1-CqxmL9Ur54lk1VMvaUeE5wEQrPc=",
            "requires": {
            "inherits": "2.0.3",
                "readable-stream": "2.2.7",
                "typedarray": "0.0.6"
        }
    },
    "config": {
        "version": "1.30.0",
            "resolved": "https://registry.npmjs.org/config/-/config-1.30.0.tgz",
            "integrity": "sha1-HWCp81NIoTwXV5jThOgaWhbDum4=",
            "requires": {
            "json5": "0.4.0",
                "os-homedir": "1.0.2"
        }
    },
    "constantinople": {
        "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/constantinople/-/constantinople-3.0.2.tgz",
            "integrity": "sha1-S5RdmTeQe82Y7ldRIsOBdRZUQUE=",
            "requires": {
            "acorn": "2.7.0"
        }
    },
    "content-disposition": {
        "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.2.tgz",
            "integrity": "sha1-DPaLud318r55YcOoUXjLhdunjLQ="
    },
    "content-type": {
        "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
            "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "cookie": {
        "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.3.1.tgz",
            "integrity": "sha1-5+Ch+e9DtMi6klxcWpboBtFoc7s="
    },
    "cookie-parser": {
        "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.3.tgz",
            "integrity": "sha1-D+MfoZ0AC5X0qt8fU/3CuKIDuqU=",
            "requires": {
            "cookie": "0.3.1",
                "cookie-signature": "1.0.6"
        }
    },
    "cookie-signature": {
        "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
            "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "core-util-is": {
        "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
            "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "css": {
        "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/css/-/css-1.0.8.tgz",
            "integrity": "sha1-k4aBHKgrzMnuf7WnMrHioxfIo+c=",
            "requires": {
            "css-parse": "1.0.4",
                "css-stringify": "1.0.5"
        }
    },
    "css-parse": {
        "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/css-parse/-/css-parse-1.0.4.tgz",
            "integrity": "sha1-OLBQP7+dqfVOnB29pg4UXHcRe90="
    },
    "css-stringify": {
        "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/css-stringify/-/css-stringify-1.0.5.tgz",
            "integrity": "sha1-sNBClG2ylTu50pKQCmy19tASIDE="
    },
    "debug": {
        "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
            "ms": "2.0.0"
        }
    },
    "decamelize": {
        "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
            "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
    },
    "depd": {
        "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.1.tgz",
            "integrity": "sha1-V4O04cRZ8G+lyif5kfPQbnoxA1k="
    },
    "destroy": {
        "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
            "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "dicer": {
        "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.2.5.tgz",
            "integrity": "sha1-WZbAhrszIYyBLAkL3cCc0S+stw8=",
            "requires": {
            "readable-stream": "1.1.14",
                "streamsearch": "0.1.2"
        },
        "dependencies": {
            "isarray": {
                "version": "0.0.1",
                    "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
                    "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
            },
            "readable-stream": {
                "version": "1.1.14",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
                    "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
                    "requires": {
                    "core-util-is": "1.0.2",
                        "inherits": "2.0.3",
                        "isarray": "0.0.1",
                        "string_decoder": "0.10.31"
                }
            },
            "string_decoder": {
                "version": "0.10.31",
                    "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
                    "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
            }
        }
    },
    "dotenv": {
        "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-5.0.1.tgz",
            "integrity": "sha512-4As8uPrjfwb7VXC+WnLCbXK7y+Ueb2B3zgNCePYfhxS1PYeaO1YTeplffTEcbfLhvFNGLAz90VvJs9yomG7bow=="
    },
    "ecdsa-sig-formatter": {
        "version": "1.0.9",
            "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.9.tgz",
            "integrity": "sha1-S8kmJ07Dtau1AW5+HWCSGsJisqE=",
            "requires": {
            "base64url": "2.0.0",
                "safe-buffer": "5.1.1"
        }
    },
    "ee-first": {
        "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "encodeurl": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.1.tgz",
            "integrity": "sha1-eePVhlU0aQn+bw9Fpd5oEDspTSA="
    },
    "es6-promise": {
        "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-3.2.1.tgz",
            "integrity": "sha1-7FYjOGgDKQkgcXDDlEjiREndH8Q="
    },
    "escape-html": {
        "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "etag": {
        "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "express": {
        "version": "4.15.5",
            "resolved": "https://registry.npmjs.org/express/-/express-4.15.5.tgz",
            "integrity": "sha1-ZwI1ypWYiQpa6BcLg9tyK4Qu2Sc=",
            "requires": {
            "accepts": "1.3.4",
                "array-flatten": "1.1.1",
                "content-disposition": "0.5.2",
                "content-type": "1.0.4",
                "cookie": "0.3.1",
                "cookie-signature": "1.0.6",
                "debug": "2.6.9",
                "depd": "1.1.1",
                "encodeurl": "1.0.1",
                "escape-html": "1.0.3",
                "etag": "1.8.1",
                "finalhandler": "1.0.6",
                "fresh": "0.5.2",
                "merge-descriptors": "1.0.1",
                "methods": "1.1.2",
                "on-finished": "2.3.0",
                "parseurl": "1.3.2",
                "path-to-regexp": "0.1.7",
                "proxy-addr": "1.1.5",
                "qs": "6.5.0",
                "range-parser": "1.2.0",
                "send": "0.15.6",
                "serve-static": "1.12.6",
                "setprototypeof": "1.0.3",
                "statuses": "1.3.1",
                "type-is": "1.6.15",
                "utils-merge": "1.0.0",
                "vary": "1.1.2"
        },
        "dependencies": {
            "qs": {
                "version": "6.5.0",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.0.tgz",
                    "integrity": "sha512-fjVFjW9yhqMhVGwRExCXLhJKrLlkYSaxNWdyc9rmHlrVZbk35YHH312dFd7191uQeXkI3mKLZTIbSvIeFwFemg=="
            }
        }
    },
    "finalhandler": {
        "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.0.6.tgz",
            "integrity": "sha1-AHrqM9Gk0+QgF/YkhIrVjSEvgU8=",
            "requires": {
            "debug": "2.6.9",
                "encodeurl": "1.0.1",
                "escape-html": "1.0.3",
                "on-finished": "2.3.0",
                "parseurl": "1.3.2",
                "statuses": "1.3.1",
                "unpipe": "1.0.0"
        }
    },
    "forwarded": {
        "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
            "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
    },
    "fresh": {
        "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "graceful-readlink": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/graceful-readlink/-/graceful-readlink-1.0.1.tgz",
            "integrity": "sha1-TK+tdrxi8C+gObL5Tpo906ORpyU="
    },
    "hoek": {
        "version": "~> 4.2.1.",
            "resolved": "https://registry.npmjs.org/hoek/-/hoek-2.16.3.tgz",
            "integrity": "sha1-ILt0A9POo5jpHcRxCo/xuCdKJe0="
    },
    "hooks-fixed": {
        "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/hooks-fixed/-/hooks-fixed-2.0.2.tgz",
            "integrity": "sha512-YurCM4gQSetcrhwEtpQHhQ4M7Zo7poNGqY4kQGeBS6eZtOcT3tnNs01ThFa0jYBByAiYt1MjMjP/YApG0EnAvQ=="
    },
    "http-errors": {
        "version": "1.6.2",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.2.tgz",
            "integrity": "sha1-CgAsyFcHGSp+eUbO7cERVfYOxzY=",
            "requires": {
            "depd": "1.1.1",
                "inherits": "2.0.3",
                "setprototypeof": "1.0.3",
                "statuses": "1.3.1"
        }
    },
    "iconv-lite": {
        "version": "0.4.15",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.15.tgz",
            "integrity": "sha1-/iZaIYrGpXz+hUkn6dBMGYJe3es="
    },
    "inherits": {
        "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
            "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "ipaddr.js": {
        "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.4.0.tgz",
            "integrity": "sha1-KWrKh4qCGBbluF0KKFqZvP9FgvA="
    },
    "is-buffer": {
        "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.5.tgz",
            "integrity": "sha1-Hzsm72E7IUuIy8ojzGwB2Hlh7sw="
    },
    "is-promise": {
        "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
            "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o="
    },
    "isarray": {
        "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "isemail": {
        "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/isemail/-/isemail-1.2.0.tgz",
            "integrity": "sha1-vgPfjMPineTSxd9lASY/H6RZXpo="
    },
    "jade": {
        "version": "1.11.0",
            "resolved": "https://registry.npmjs.org/jade/-/jade-1.11.0.tgz",
            "integrity": "sha1-nIDlOMEtP7lcjZu5VZ+gzAQEBf0=",
            "requires": {
            "character-parser": "1.2.1",
                "clean-css": "3.4.28",
                "commander": "2.6.0",
                "constantinople": "3.0.2",
                "jstransformer": "0.0.2",
                "mkdirp": "0.5.1",
                "transformers": "2.1.0",
                "uglify-js": "2.8.29",
                "void-elements": "2.0.1",
                "with": "4.0.3"
        }
    },
    "joi": {
        "version": "6.10.1",
            "resolved": "https://registry.npmjs.org/joi/-/joi-6.10.1.tgz",
            "integrity": "sha1-TVDDGAeRIgAP5fFq8f+OGRe3fgY=",
            "requires": {
            "hoek": "2.16.3",
                "isemail": "1.2.0",
                "moment": "2.20.1",
                "topo": "1.1.0"
        }
    },
    "json5": {
        "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/json5/-/json5-0.4.0.tgz",
            "integrity": "sha1-BUNS5MTIDIbAkjh31EneF2pzLI0="
    },
    "jsonwebtoken": {
        "version": "8.2.1",
            "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.2.1.tgz",
            "integrity": "sha512-l8rUBr0fqYYwPc8/ZGrue7GiW7vWdZtZqelxo4Sd5lMvuEeCK8/wS54sEo6tJhdZ6hqfutsj6COgC0d1XdbHGw==",
            "requires": {
            "jws": "3.1.4",
                "lodash.includes": "4.3.0",
                "lodash.isboolean": "3.0.3",
                "lodash.isinteger": "4.0.4",
                "lodash.isnumber": "3.0.3",
                "lodash.isplainobject": "4.0.6",
                "lodash.isstring": "4.0.1",
                "lodash.once": "4.1.1",
                "ms": "2.1.1",
                "xtend": "4.0.1"
        },
        "dependencies": {
            "ms": {
                "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
                    "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
            }
        }
    },
    "jstransformer": {
        "version": "0.0.2",
            "resolved": "https://registry.npmjs.org/jstransformer/-/jstransformer-0.0.2.tgz",
            "integrity": "sha1-eq4pqQPRls+glz2IXT5HlH7Ndqs=",
            "requires": {
            "is-promise": "2.1.0",
                "promise": "6.1.0"
        }
    },
    "jwa": {
        "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.1.5.tgz",
            "integrity": "sha1-oFUs4CIHQs1S4VN3SjKQXDDnVuU=",
            "requires": {
            "base64url": "2.0.0",
                "buffer-equal-constant-time": "1.0.1",
                "ecdsa-sig-formatter": "1.0.9",
                "safe-buffer": "5.1.1"
        }
    },
    "jws": {
        "version": "3.1.4",
            "resolved": "https://registry.npmjs.org/jws/-/jws-3.1.4.tgz",
            "integrity": "sha1-+ei5M46KhHJ31kRLFGT2GIDgUKI=",
            "requires": {
            "base64url": "2.0.0",
                "jwa": "1.1.5",
                "safe-buffer": "5.1.1"
        }
    },
    "kareem": {
        "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/kareem/-/kareem-1.5.0.tgz",
            "integrity": "sha1-4+QQHZ3P3imXadr0tNtk2JXRdEg="
    },
    "kind-of": {
        "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
            "is-buffer": "1.1.5"
        }
    },
    "lazy-cache": {
        "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-1.0.4.tgz",
            "integrity": "sha1-odePw6UEdMuAhF07O24dpJpEbo4="
    },
    "lodash": {
        "version": "4.17.4",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.4.tgz",
            "integrity": "sha1-eCA6TRwyiuHYbcpkYONptX9AVa4="
    },
    "lodash.get": {
        "version": "4.4.2",
            "resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
            "integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
    },
    "lodash.includes": {
        "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
            "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
    },
    "lodash.isboolean": {
        "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
            "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
    },
    "lodash.isinteger": {
        "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
            "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
    },
    "lodash.isnumber": {
        "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
            "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
    },
    "lodash.isplainobject": {
        "version": "4.0.6",
            "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
            "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
    },
    "lodash.isstring": {
        "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
            "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "lodash.once": {
        "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
            "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
    },
    "longest": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/longest/-/longest-1.0.1.tgz",
            "integrity": "sha1-MKCy2jj3N3DoKUoNIuZiXtd9AJc="
    },
    "media-typer": {
        "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "merge-descriptors": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
            "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "methods": {
        "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "mime": {
        "version": "1.3.4",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.3.4.tgz",
            "integrity": "sha1-EV+eO2s9rylZmDyzjxSaLUDrXVM="
    },
    "mime-db": {
        "version": "1.30.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.30.0.tgz",
            "integrity": "sha1-dMZD2i3Z1qRTmZY0ZbJtXKfXHwE="
    },
    "mime-types": {
        "version": "2.1.17",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.17.tgz",
            "integrity": "sha1-Cdejk/A+mVp5+K+Fe3Cp4KsWVXo=",
            "requires": {
            "mime-db": "1.30.0"
        }
    },
    "minimist": {
        "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
            "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
    },
    "mkdirp": {
        "version": "0.5.1",
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
            "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
            "requires": {
            "minimist": "0.0.8"
        }
    },
    "moment": {
        "version": "2.20.1",
            "resolved": "https://registry.npmjs.org/moment/-/moment-2.20.1.tgz",
            "integrity": "sha512-Yh9y73JRljxW5QxN08Fner68eFLxM5ynNOAw2LbIB1YAGeQzZT8QFSUvkAz609Zf+IHhhaUxqZK8dG3W/+HEvg=="
    },
    "mongodb": {
        "version": "2.2.34",
            "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-2.2.34.tgz",
            "integrity": "sha1-o09Zu+thdUrsQy3nLD/iFSakTBo=",
            "requires": {
            "es6-promise": "3.2.1",
                "mongodb-core": "2.1.18",
                "readable-stream": "2.2.7"
        }
    },
    "mongodb-core": {
        "version": "2.1.18",
            "resolved": "https://registry.npmjs.org/mongodb-core/-/mongodb-core-2.1.18.tgz",
            "integrity": "sha1-TEYTm986HwMt7ZHbSfOO7AFlkFA=",
            "requires": {
            "bson": "1.0.6",
                "require_optional": "1.0.1"
        }
    },
    "mongoose": {
        "version": "4.13.12",
            "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-4.13.12.tgz",
            "integrity": "sha512-pH8NK5AYGbnPeEFFGs5ACk18vzzcy4DFT48U9kKvkfg6SI3nJZkzGfN7o1NDWjy+kP26hWyU/AMhYTfe5hSVnA==",
            "requires": {
            "async": "2.1.4",
                "bson": "1.0.6",
                "hooks-fixed": "2.0.2",
                "kareem": "1.5.0",
                "lodash.get": "4.4.2",
                "mongodb": "2.2.34",
                "mpath": "0.3.0",
                "mpromise": "0.5.5",
                "mquery": "2.3.3",
                "ms": "2.0.0",
                "muri": "1.3.0",
                "regexp-clone": "0.0.1",
                "sliced": "1.0.1"
        }
    },
    "morgan": {
        "version": "1.8.2",
            "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.8.2.tgz",
            "integrity": "sha1-eErHc05KRTqcbm6GgKkyknXItoc=",
            "requires": {
            "basic-auth": "1.1.0",
                "debug": "2.6.8",
                "depd": "1.1.1",
                "on-finished": "2.3.0",
                "on-headers": "1.0.1"
        },
        "dependencies": {
            "debug": {
                "version": "2.6.8",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.8.tgz",
                    "integrity": "sha1-5zFTHKLt4n0YgiJCfaF4IdaP9Pw=",
                    "requires": {
                    "ms": "2.0.0"
                }
            }
        }
    },
    "mpath": {
        "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.3.0.tgz",
            "integrity": "sha1-elj3iem1/TyUUgY0FXlg8mvV70Q="
    },
    "mpromise": {
        "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/mpromise/-/mpromise-0.5.5.tgz",
            "integrity": "sha1-9bJCWddjrMIlewoMjG2Gb9UXMuY="
    },
    "mquery": {
        "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/mquery/-/mquery-2.3.3.tgz",
            "integrity": "sha512-NC8L14kn+qxJbbJ1gbcEMDxF0sC3sv+1cbRReXXwVvowcwY1y9KoVZFq0ebwARibsadu8lx8nWGvm3V0Pf0ZWQ==",
            "requires": {
            "bluebird": "3.5.0",
                "debug": "2.6.9",
                "regexp-clone": "0.0.1",
                "sliced": "0.0.5"
        },
        "dependencies": {
            "sliced": {
                "version": "0.0.5",
                    "resolved": "https://registry.npmjs.org/sliced/-/sliced-0.0.5.tgz",
                    "integrity": "sha1-XtwETKTrb3gW1Qui/GPiXY/kcH8="
            }
        }
    },
    "ms": {
        "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "multer": {
        "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/multer/-/multer-1.3.0.tgz",
            "integrity": "sha1-CSsmcPaEb6SRSWXvyM+Uwg/sbNI=",
            "requires": {
            "append-field": "0.1.0",
                "busboy": "0.2.14",
                "concat-stream": "1.6.0",
                "mkdirp": "0.5.1",
                "object-assign": "3.0.0",
                "on-finished": "2.3.0",
                "type-is": "1.6.15",
                "xtend": "4.0.1"
        },
        "dependencies": {
            "object-assign": {
                "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-3.0.0.tgz",
                    "integrity": "sha1-m+3VygiXlJvKR+f/QIBi1Un1h/I="
            }
        }
    },
    "muri": {
        "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/muri/-/muri-1.3.0.tgz",
            "integrity": "sha512-FiaFwKl864onHFFUV/a2szAl7X0fxVlSKNdhTf+BM8i8goEgYut8u5P9MqQqIYwvaMxjzVESsoEm/2kfkFH1rg=="
    },
    "negotiator": {
        "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.1.tgz",
            "integrity": "sha1-KzJxhOiZIQEXeyhWP7XnECrNDKk="
    },
    "on-finished": {
        "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
            "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
            "requires": {
            "ee-first": "1.1.1"
        }
    },
    "on-headers": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.1.tgz",
            "integrity": "sha1-ko9dD0cNSTQmUepnlLCFfBAGk/c="
    },
    "optimist": {
        "version": "0.3.7",
            "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.3.7.tgz",
            "integrity": "sha1-yQlBrVnkJzMokjB00s8ufLxuwNk=",
            "requires": {
            "wordwrap": "0.0.3"
        }
    },
    "os-homedir": {
        "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
            "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M="
    },
    "parseurl": {
        "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.2.tgz",
            "integrity": "sha1-/CidTtiZMRlGDBViUyYs3I3mW/M="
    },
    "passport": {
        "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/passport/-/passport-0.4.0.tgz",
            "integrity": "sha1-xQlWkTR71a07XhgCOMORTRbwWBE=",
            "requires": {
            "passport-strategy": "1.0.0",
                "pause": "0.0.1"
        }
    },
    "passport-jwt": {
        "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/passport-jwt/-/passport-jwt-3.0.1.tgz",
            "integrity": "sha1-5Pcnba2L0lHUPG/DiIMTC5YycvY=",
            "requires": {
            "jsonwebtoken": "7.4.3",
                "passport-strategy": "1.0.0"
        },
        "dependencies": {
            "jsonwebtoken": {
                "version": "7.4.3",
                    "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-7.4.3.tgz",
                    "integrity": "sha1-d/UCHeBYtgWheD+hKD6ZgS5kVjg=",
                    "requires": {
                    "joi": "6.10.1",
                        "jws": "3.1.4",
                        "lodash.once": "4.1.1",
                        "ms": "2.0.0",
                        "xtend": "4.0.1"
                }
            }
        }
    },
    "passport-strategy": {
        "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/passport-strategy/-/passport-strategy-1.0.0.tgz",
            "integrity": "sha1-tVOaqPwiWj0a0XlHbd8ja0QPUuQ="
    },
    "path-to-regexp": {
        "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
            "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "pause": {
        "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/pause/-/pause-0.0.1.tgz",
            "integrity": "sha1-HUCLP9t2kjuVQ9lvtMnf1TXZy10="
    },
    "process-nextick-args": {
        "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-1.0.7.tgz",
            "integrity": "sha1-FQ4gt1ZZCtP5EJPyWk8q2L/zC6M="
    },
    "promise": {
        "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/promise/-/promise-6.1.0.tgz",
            "integrity": "sha1-LOcp9rlLRcJoka0GAsXJDgTG7vY=",
            "requires": {
            "asap": "1.0.0"
        }
    },
    "proxy-addr": {
        "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-1.1.5.tgz",
            "integrity": "sha1-ccDuOxAt4/IC87ZPYI0XP8uhqRg=",
            "requires": {
            "forwarded": "0.1.2",
                "ipaddr.js": "1.4.0"
        }
    },
    "qs": {
        "version": "6.4.0",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.4.0.tgz",
            "integrity": "sha1-E+JtKK1rD/qpExLNO/cI7TUecjM="
    },
    "range-parser": {
        "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.0.tgz",
            "integrity": "sha1-9JvmtIeJTdxA3MlKMi9hEJLgDV4="
    },
    "raw-body": {
        "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.2.0.tgz",
            "integrity": "sha1-mUl2z2pQlqQRYoQEkvC9xdbn+5Y=",
            "requires": {
            "bytes": "2.4.0",
                "iconv-lite": "0.4.15",
                "unpipe": "1.0.0"
        }
    },
    "readable-stream": {
        "version": "2.2.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.2.7.tgz",
            "integrity": "sha1-BwV6y+JGeyIELTb5jFrVBwVOlbE=",
            "requires": {
            "buffer-shims": "1.0.0",
                "core-util-is": "1.0.2",
                "inherits": "2.0.3",
                "isarray": "1.0.0",
                "process-nextick-args": "1.0.7",
                "string_decoder": "1.0.3",
                "util-deprecate": "1.0.2"
        }
    },
    "regexp-clone": {
        "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-0.0.1.tgz",
            "integrity": "sha1-p8LgmJH9vzj7sQ03b7cwA+aKxYk="
    },
    "repeat-string": {
        "version": "1.6.1",
            "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
            "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
    },
    "require_optional": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
            "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
            "requires": {
            "resolve-from": "2.0.0",
                "semver": "5.5.0"
        }
    },
    "resolve-from": {
        "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
            "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c="
    },
    "right-align": {
        "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/right-align/-/right-align-0.1.3.tgz",
            "integrity": "sha1-YTObci/mo1FWiSENJOFMlhSGE+8=",
            "requires": {
            "align-text": "0.1.4"
        }
    },
    "safe-buffer": {
        "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.1.tgz",
            "integrity": "sha512-kKvNJn6Mm93gAczWVJg7wH+wGYWNrDHdWvpUmHyEsgCtIwwo3bqPtV4tR5tuPaUhTOo/kvhVwd8XwwOllGYkbg=="
    },
    "semver": {
        "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.5.0.tgz",
            "integrity": "sha512-4SJ3dm0WAwWy/NVeioZh5AntkdJoWKxHxcmyP622fOkgHa4z3R0TdBJICINyaSDE6uNwVc8gZr+ZinwZAH4xIA=="
    },
    "send": {
        "version": "0.15.6",
            "resolved": "https://registry.npmjs.org/send/-/send-0.15.6.tgz",
            "integrity": "sha1-IPI6nJJbdiq4JwX+L52yUqzkfjQ=",
            "requires": {
            "debug": "2.6.9",
                "depd": "1.1.1",
                "destroy": "1.0.4",
                "encodeurl": "1.0.1",
                "escape-html": "1.0.3",
                "etag": "1.8.1",
                "fresh": "0.5.2",
                "http-errors": "1.6.2",
                "mime": "1.3.4",
                "ms": "2.0.0",
                "on-finished": "2.3.0",
                "range-parser": "1.2.0",
                "statuses": "1.3.1"
        }
    },
    "serve-static": {
        "version": "1.12.6",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.12.6.tgz",
            "integrity": "sha1-uXN3P2NEmTTaVOW+ul4x2fQhFXc=",
            "requires": {
            "encodeurl": "1.0.1",
                "escape-html": "1.0.3",
                "parseurl": "1.3.2",
                "send": "0.15.6"
        }
    },
    "setprototypeof": {
        "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.0.3.tgz",
            "integrity": "sha1-ZlZ+NwQ+608E2RvWWMDL77VbjgQ="
    },
    "sliced": {
        "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
            "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
    },
    "source-map": {
        "version": "0.4.4",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.4.4.tgz",
            "integrity": "sha1-66T12pwNyZneaAMti092FzZSA2s=",
            "requires": {
            "amdefine": "1.0.1"
        }
    },
    "statuses": {
        "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.3.1.tgz",
            "integrity": "sha1-+vUbnrdKrvOzrPStX2Gr8ky3uT4="
    },
    "streamsearch": {
        "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
            "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo="
    },
    "string_decoder": {
        "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.0.3.tgz",
            "integrity": "sha512-4AH6Z5fzNNBcH+6XDMfA/BTt87skxqJlO0lAh3Dker5zThcAxG6mKz+iGu308UKoPPQ8Dcqx/4JhujzltRa+hQ==",
            "requires": {
            "safe-buffer": "5.1.1"
        }
    },
    "topo": {
        "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/topo/-/topo-1.1.0.tgz",
            "integrity": "sha1-6ddRYV0buH3IZdsYL6HKCl71NtU=",
            "requires": {
            "hoek": "2.16.3"
        }
    },
    "transformers": {
        "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/transformers/-/transformers-2.1.0.tgz",
            "integrity": "sha1-XSPLNVYd2F3Gf7hIIwm0fVPM6ac=",
            "requires": {
            "css": "1.0.8",
                "promise": "2.0.0",
                "uglify-js": "2.2.5"
        },
        "dependencies": {
            "is-promise": {
                "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-1.0.1.tgz",
                    "integrity": "sha1-MVc3YcBX4zwukaq56W2gjO++duU="
            },
            "promise": {
                "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/promise/-/promise-2.0.0.tgz",
                    "integrity": "sha1-RmSKqdYFr10ucMMCS/WUNtoCuA4=",
                    "requires": {
                    "is-promise": "1.0.1"
                }
            },
            "source-map": {
                "version": "0.1.43",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.43.tgz",
                    "integrity": "sha1-wkvBRspRfBRx9drL4lcbK3+eM0Y=",
                    "requires": {
                    "amdefine": "1.0.1"
                }
            },
            "uglify-js": {
                "version": "2.2.5",
                    "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-2.2.5.tgz",
                    "integrity": "sha1-puAqcNg5eSuXgEiLe4sYTAlcmcc=",
                    "requires": {
                    "optimist": "0.3.7",
                        "source-map": "0.1.43"
                }
            }
        }
    },
    "type-is": {
        "version": "1.6.15",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.15.tgz",
            "integrity": "sha1-yrEPtJCeRByChC6v4a1kbIGARBA=",
            "requires": {
            "media-typer": "0.3.0",
                "mime-types": "2.1.17"
        }
    },
    "typedarray": {
        "version": "0.0.6",
            "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
            "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "uglify-js": {
        "version": "2.8.29",
            "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-2.8.29.tgz",
            "integrity": "sha1-KcVzMUgFe7Th913zW3qcty5qWd0=",
            "requires": {
            "source-map": "0.5.7",
                "uglify-to-browserify": "1.0.2",
                "yargs": "3.10.0"
        },
        "dependencies": {
            "source-map": {
                "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
            }
        }
    },
    "uglify-to-browserify": {
        "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/uglify-to-browserify/-/uglify-to-browserify-1.0.2.tgz",
            "integrity": "sha1-bgkk1r2mta/jSeOabWMoUKD4grc=",
            "optional": true
    },
    "unpipe": {
        "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "util-deprecate": {
        "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "utils-merge": {
        "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz",
            "integrity": "sha1-ApT7kiu5N1FTVBxPcJYjHyh8ivg="
    },
    "vary": {
        "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "void-elements": {
        "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/void-elements/-/void-elements-2.0.1.tgz",
            "integrity": "sha1-wGavtYK7HLQSjWDqkjkulNXp2+w="
    },
    "window-size": {
        "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/window-size/-/window-size-0.1.0.tgz",
            "integrity": "sha1-VDjNLqk7IC76Ohn+iIeu58lPnJ0="
    },
    "with": {
        "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/with/-/with-4.0.3.tgz",
            "integrity": "sha1-7v0VTp550sjTQXtkeo8U2f7M4U4=",
            "requires": {
            "acorn": "1.2.2",
                "acorn-globals": "1.0.9"
        },
        "dependencies": {
            "acorn": {
                "version": "1.2.2",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-1.2.2.tgz",
                    "integrity": "sha1-yM4n3grMdtiW0rH6099YjZ6C8BQ="
            }
        }
    },
    "wordwrap": {
        "version": "0.0.3",
            "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
            "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc="
    },
    "xtend": {
        "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz",
            "integrity": "sha1-pcbVMr5lbiPbgg77lDofBJmNY68="
    },
    "yargs": {
        "version": "3.10.0",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-3.10.0.tgz",
            "integrity": "sha1-9+572FfdfB0tOMDnTvvWgdFDH9E=",
            "requires": {
            "camelcase": "1.2.1",
                "cliui": "2.1.0",
                "decamelize": "1.2.0",
                "window-size": "0.1.0"
        }
    }
}
}
