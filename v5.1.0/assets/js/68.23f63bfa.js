(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{629:function(e,t,s){"use strict";s.r(t);var n=s(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),s("h2",{attrs:{id:"msgtransfer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#msgtransfer"}},[e._v("#")]),e._v(" "),s("code",[e._v("MsgTransfer")])]),e._v(" "),s("p",[e._v("A fungible token cross chain transfer is achieved by using the "),s("code",[e._v("MsgTransfer")]),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dUcmFuc2ZlciBzdHJ1Y3QgewogIFNvdXJjZVBvcnQgICAgICAgIHN0cmluZwogIFNvdXJjZUNoYW5uZWwgICAgIHN0cmluZwogIFRva2VuICAgICAgICAgICAgIHNkay5Db2luCiAgU2VuZGVyICAgICAgICAgICAgc3RyaW5nCiAgUmVjZWl2ZXIgICAgICAgICAgc3RyaW5nCiAgVGltZW91dEhlaWdodCAgICAgaWJjZXhwb3J0ZWQuSGVpZ2h0CiAgVGltZW91dFRpbWVzdGFtcCAgdWludDY0CiAgTWVtbyAgICAgICAgICAgICAgc3RyaW5nCn0K"}}),e._v(" "),s("p",[e._v("This message is expected to fail if:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("SourcePort")]),e._v(" is invalid (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("SourceChannel")]),e._v(" is invalid (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("li",[s("code",[e._v("Token")]),e._v(" is invalid (denom is invalid or amount is negative)\n"),s("ul",[s("li",[s("code",[e._v("Token.Amount")]),e._v(" is not positive.")]),e._v(" "),s("li",[s("code",[e._v("Token.Denom")]),e._v(" is not a valid IBC denomination as per "),s("RouterLink",{attrs:{to:"/docs/architecture/adr-001-coin-source-tracing.html"}},[e._v("ADR 001 - Coin Source Tracing")]),e._v(".")],1)])]),e._v(" "),s("li",[s("code",[e._v("Sender")]),e._v(" is empty.")]),e._v(" "),s("li",[s("code",[e._v("Receiver")]),e._v(" is empty.")]),e._v(" "),s("li",[s("code",[e._v("TimeoutHeight")]),e._v(" and "),s("code",[e._v("TimeoutTimestamp")]),e._v(" are both zero.")])]),e._v(" "),s("p",[e._v("This message will send a fungible token to the counterparty chain represented by the counterparty Channel End connected to the Channel End with the identifiers "),s("code",[e._v("SourcePort")]),e._v(" and "),s("code",[e._v("SourceChannel")]),e._v(".")]),e._v(" "),s("p",[e._v("The denomination provided for transfer should correspond to the same denomination represented on this chain. The prefixes will be added as necessary upon by the receiving chain.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);