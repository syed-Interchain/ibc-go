(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{724:function(e,t,r){"use strict";r.r(t);var o=r(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"business-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#business-requirements"}},[e._v("#")]),e._v(" Business requirements")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("TL;DR")]),e._v(": There is no general incentivization mechanism to reward relayers for their service ensuring Interchain liveness.")])]),e._v(" "),r("h2",{attrs:{id:"problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),r("p",[e._v("The Interchain dream will never scale unless there is a clear way to incentivize relayers. An interface that can be easily adopted by any applications is needed, without precluding chains that do not use tokens.")]),e._v(" "),r("p",[e._v("Though IBC does not depend on relayer operators for transaction verification, the relayer infrastructure ensures liveness of the Interchain network — operators listen for packets sent through channels opened between chains, and perform the vital service of ferrying these packets (and proof of the transaction on the sending chain/receipt on the receiving chain) to the clients on each side of the channel. Though relaying is permissionless and completely decentralized and accessible, it does come with operational costs. Running full nodes to query transaction proofs and paying for transaction fees associated with IBC packets are two of the primary cost burdens which have driven the overall discussion on a general incentivization mechanism for relayers.")]),e._v(" "),r("h2",{attrs:{id:"objectives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[e._v("#")]),e._v(" Objectives")]),e._v(" "),r("p",[e._v("Provide a general fee payment design that can be adopted by any ICS application protocol as middleware.")]),e._v(" "),r("h2",{attrs:{id:"scope"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" Scope")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Features")]),e._v(" "),r("th",[e._v("Release")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Incentivize timely delivery of a packet (successfully submit "),r("code",[e._v("MsgRecvPacket")]),e._v(").")]),e._v(" "),r("td",[e._v("v1")])]),e._v(" "),r("tr",[r("td",[e._v("Incentivize relaying acknowledgement for a packet (successfully submit "),r("code",[e._v("MsgAcknowledgement")]),e._v(").")]),e._v(" "),r("td",[e._v("v1")])]),e._v(" "),r("tr",[r("td",[e._v("Incentivize relaying timeout for a packet when the timeout has expired before packet is delivered (successfully submit "),r("code",[e._v("MsgTimeout")]),e._v(").")]),e._v(" "),r("td",[e._v("v1")])]),e._v(" "),r("tr",[r("td",[e._v("Enable permissionless or permissioned relaying.")]),e._v(" "),r("td",[e._v("v1")])]),e._v(" "),r("tr",[r("td",[e._v("Allow opt-in for chains (an application with fee support on chain A could connect to the couterparty application without fee support on chain B).")]),e._v(" "),r("td",[e._v("v1")])])])]),e._v(" "),r("h1",{attrs:{id:"user-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-requirements"}},[e._v("#")]),e._v(" User requirements")]),e._v(" "),r("h2",{attrs:{id:"use-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),r("ul",[r("li",[e._v("A packet already sent may be incentivized for one or more of the messages "),r("code",[e._v("MsgRecvPacket")]),e._v(", "),r("code",[e._v("MsgAcknowledgement")]),e._v(", "),r("code",[e._v("MsgTimeout")]),e._v(".")]),e._v(" "),r("li",[e._v("The next packet to be sent may be incentivized for one or more of the messages "),r("code",[e._v("MsgRecvPacket")]),e._v(", "),r("code",[e._v("MsgAcknowledgement")]),e._v(", "),r("code",[e._v("MsgTimeout")]),e._v(".")])]),e._v(" "),r("h1",{attrs:{id:"functional-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functional-requirements"}},[e._v("#")]),e._v(" Functional requirements")]),e._v(" "),r("h2",{attrs:{id:"assumptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assumptions"}},[e._v("#")]),e._v(" Assumptions")]),e._v(" "),r("ol",[r("li",[e._v("Relayer addresses should not be forgeable.")])]),e._v(" "),r("h2",{attrs:{id:"known-limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations"}},[e._v("#")]),e._v(" Known limitations")]),e._v(" "),r("ol",[r("li",[e._v("Without channel upgradability it is not possible to use fee incentivization on an existing channel.")])]),e._v(" "),r("h2",{attrs:{id:"terminology"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),r("p",[e._v("See section "),r("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/main/spec/app/ics-029-fee-payment#definitions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Definitions"),r("OutboundLink")],1),e._v(" in ICS 29 spec.")]),e._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),r("h3",{attrs:{id:"_1-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-configuration"}},[e._v("#")]),e._v(" 1 - Configuration")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("1.02")]),e._v(" "),r("td",[e._v("A chain shall have the ability to export the fee middleware genesis state.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/genesis_test.go#L69",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("1.03")]),e._v(" "),r("td",[e._v("A chain shall have the ability to initialize the fee middleware genesis state.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/genesis_test.go#L9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h3",{attrs:{id:"_2-payee-registration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-payee-registration"}},[e._v("#")]),e._v(" 2 - Payee registration")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("2.01")]),e._v(" "),r("td",[e._v("A relayer shall have the ability to register for a channel an optional payee address to which fees shall be distributed for successful relaying "),r("code",[e._v("MsgAcknowledgement")]),e._v(" and "),r("code",[e._v("MsgTimeout")]),e._v(".")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L23",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("2.02")]),e._v(" "),r("td",[e._v("The payee address shall only be registered if the channel exist.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L28",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("2.03")]),e._v(" "),r("td",[e._v("The payee address shall only be registered if the channel is fee enabled.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L35",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("2.04")]),e._v(" "),r("td",[e._v("The payee address shall only be registered if the address is a valid "),r("code",[e._v("Bech32")]),e._v(" address.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("2.05")]),e._v(" "),r("td",[e._v("The payee address shall only be registered if the address is not blocked.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L49",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h3",{attrs:{id:"_3-counterparty-payee-registration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-counterparty-payee-registration"}},[e._v("#")]),e._v(" 3 - Counterparty payee registration")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("3.01")]),e._v(" "),r("td",[e._v("A relayer shall have the ability to register a counterparty payee to which fees shall be distributed for successful relaying of "),r("code",[e._v("MsgRecvPacket")]),e._v(".")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L102",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("3.02")]),e._v(" "),r("td",[e._v("The counterparty payee address shall only be registered if the channel exists.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("3.03")]),e._v(" "),r("td",[e._v("The counterparty payee address shall only be registered if the channel is fee enabled.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L122",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("3.04")]),e._v(" "),r("td",[e._v("The counterparty payee address may be an arbitrary string (since the counterparty chain may not be Cosmos-SDK based).")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h3",{attrs:{id:"_4-fee-incentivization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-fee-incentivization"}},[e._v("#")]),e._v(" 4 - Fee incentivization")]),e._v(" "),r("h4",{attrs:{id:"synchronously"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronously"}},[e._v("#")]),e._v(" Synchronously")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("4.01")]),e._v(" "),r("td",[e._v("If a channel is fee-enabled, the next sequence packet may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L178",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.02")]),e._v(" "),r("td",[e._v("If the fee module is not locked, the next sequence packet may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L210",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.03")]),e._v(" "),r("td",[e._v("The next sequence packet may be incentivized for some or all of "),r("code",[e._v("MsgRecvPacket")]),e._v(", "),r("code",[e._v("MsgAcknowledgement")]),e._v(", "),r("code",[e._v("MsgTimeout")]),e._v(".")]),e._v(" "),r("td",[e._v("Fees for any of the messages may be zero, but "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/types/fee.go#L87",target:"_blank",rel:"noopener noreferrer"}},[e._v("not all of them"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.04")]),e._v(" "),r("td",[e._v("A blocked account address shall not be allowed to incentivize the next sequence packet.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L239",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.05")]),e._v(" "),r("td",[e._v("A non-valid "),r("code",[e._v("Bech32")]),e._v(" account address shall not be allowed to incentivize the next sequence packet.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L225",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.06")]),e._v(" "),r("td",[e._v("The next sequence packet may be incentivized by multiple account addresses.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L183",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.07")]),e._v(" "),r("td",[e._v("The next sequence packet shall only be incentivized with valid coin denominations.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L246-L266",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h4",{attrs:{id:"aynchronously"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aynchronously"}},[e._v("#")]),e._v(" Aynchronously")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("4.08")]),e._v(" "),r("td",[e._v("Only packets that have been sent may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L376",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.09")]),e._v(" "),r("td",[e._v("A packet sent may be incentivized for some or all of "),r("code",[e._v("MsgRecvPacket")]),e._v(", "),r("code",[e._v("MsgAcknowledgement")]),e._v(", "),r("code",[e._v("MsgTimeout")]),e._v(".")]),e._v(" "),r("td",[e._v("Fees for any of the messages may be zero, but "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/types/fee.go#L87",target:"_blank",rel:"noopener noreferrer"}},[e._v("not all of them"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.10")]),e._v(" "),r("td",[e._v("Only packets that have not gone through the packet life cycle (i.e. have not been acknowledged or timed out yet) may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L382-L410",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.11")]),e._v(" "),r("td",[e._v("If a channel exists, a packet sent may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L365",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("4.12")]),e._v(" "),r("td",[e._v("If a channel is fee-enabled, a packet sent may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L357",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.13")]),e._v(" "),r("td",[e._v("If the fee module is not locked, a packet sent may be incentivized.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L350",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.14")]),e._v(" "),r("td",[e._v("A non-valid "),r("code",[e._v("Bech32")]),e._v(" account address shall not be allowed to incentivize a packet sent.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L412",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.15")]),e._v(" "),r("td",[e._v("An account that does not exist shall not be allowed to incentivize a packet sent.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L419",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("4.16")]),e._v(" "),r("td",[e._v("A blocked account shall not be allowed to incentivize a packet sent.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/msg_server_test.go#L426",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h3",{attrs:{id:"_5-fee-distribution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-fee-distribution"}},[e._v("#")]),e._v(" 5 - Fee distribution")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("5.01")]),e._v(" "),r("td",[e._v("Fee distribution shall occurr on the source chain from which packets originate.")]),e._v(" "),r("td",[e._v("Either in "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L288",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("OnAcknowledgementPacket")]),r("OutboundLink")],1),e._v(" or in "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L330",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("OnTimeoutPacket")]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h4",{attrs:{id:"onacknowledgementpacket"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket"}},[e._v("#")]),e._v(" "),r("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("5.02")]),e._v(" "),r("td",[e._v("Fees for successful relaying of "),r("code",[e._v("MsgAcknowledgement")]),e._v(" shall be distributed to the relayer address (or its associated payee address if one has been registered).")]),e._v(" "),r("td",[e._v("If a payee address exists for the relayer address, then "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L288",target:"_blank",rel:"noopener noreferrer"}},[e._v("fees are distributed to the payee address"),r("OutboundLink")],1),e._v("; otherwise "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L277",target:"_blank",rel:"noopener noreferrer"}},[e._v("fees are distributed to the relayer address"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("5.03")]),e._v(" "),r("td",[e._v("Fees for successful relaying of "),r("code",[e._v("MsgRecvPacket")]),e._v(" shall be distributed to the payee address of the relayer address.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow.go#L93",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fees are distributed to the payee address registered on the counterparty chain"),r("OutboundLink")],1),e._v(" if it is a valid "),r("code",[e._v("Bech32")]),e._v(" address and is not a blocked address.")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h4",{attrs:{id:"ontimeoutpacket"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ontimeoutpacket"}},[e._v("#")]),e._v(" "),r("code",[e._v("OnTimeoutPacket")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("5.05")]),e._v(" "),r("td",[e._v("Fees for successful relaying of "),r("code",[e._v("MsgTimeout")]),e._v(" shall be distributed to the relayer address (or its associated payee address if one has been registered).")]),e._v(" "),r("td",[e._v("If a payee address exists for the relayer address, then "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L330",target:"_blank",rel:"noopener noreferrer"}},[e._v("fees are distributed to the payee address"),r("OutboundLink")],1),e._v("; otherwise "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L319",target:"_blank",rel:"noopener noreferrer"}},[e._v("fees are distributed to the relayer address"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h3",{attrs:{id:"_6-fee-refunding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-fee-refunding"}},[e._v("#")]),e._v(" 6 - Fee refunding")]),e._v(" "),r("h4",{attrs:{id:"onacknowledgementpacket-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket-2"}},[e._v("#")]),e._v(" "),r("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("6.01")]),e._v(" "),r("td",[e._v("On successful processing of "),r("code",[e._v("MsgAcknowledgement")]),e._v(", fees for successful relay of "),r("code",[e._v("MsgTimeout")]),e._v(" shall be refunded.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow.go#L103",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fees are refunded is the refund address is a valid "),r("code",[e._v("Bech32")]),e._v(" address"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("6.02")]),e._v(" "),r("td",[e._v("On successful processing of "),r("code",[e._v("MsgAcknowledgement")]),e._v(", if fees for successful relay of "),r("code",[e._v("MsgRecvPacket")]),e._v(" cannot be distributed, then they should be refunded.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow.go#L96",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fees are refunded"),r("OutboundLink")],1),e._v(" if the payee address registered on the counterparty chain for the relayer is either "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow_test.go#L105",target:"_blank",rel:"noopener noreferrer"}},[e._v("invalid"),r("OutboundLink")],1),e._v(" or a "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow_test.go#L120",target:"_blank",rel:"noopener noreferrer"}},[e._v("blocked address"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h4",{attrs:{id:"ontimeoutpacket-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ontimeoutpacket-2"}},[e._v("#")]),e._v(" "),r("code",[e._v("OnTimeoutPacket")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("6.03")]),e._v(" "),r("td",[e._v("On successful processing of "),r("code",[e._v("MsgTimeout")]),e._v(", fees for successful relay of "),r("code",[e._v("MsgRecvPacket")]),e._v(" shall be refunded.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow.go#L146",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fees are refunded is the refund address is a valid "),r("code",[e._v("Bech32")]),e._v(" address"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("6.04")]),e._v(" "),r("td",[e._v("On successful processing of "),r("code",[e._v("MsgTimeout")]),e._v(", fees for successful relay of "),r("code",[e._v("MsgAcknowledgement")]),e._v(" shall be refunded.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow.go#L149",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fees are refunded is the refund address is a valid "),r("code",[e._v("Bech32")]),e._v(" address"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h4",{attrs:{id:"channel-closure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#channel-closure"}},[e._v("#")]),e._v(" Channel closure")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("6.04")]),e._v(" "),r("td",[e._v("Packet fees are refunded on channel closure.")]),e._v(" "),r("td",[e._v("Both on "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L182",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("OnChanCloseInit")]),r("OutboundLink")],1),e._v("  and "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/ibc_middleware.go#L207",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("OnChanCloseConfirm")]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h1",{attrs:{id:"non-functional-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#non-functional-requirements"}},[e._v("#")]),e._v(" Non-functional requirements")]),e._v(" "),r("h2",{attrs:{id:"_7-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-security"}},[e._v("#")]),e._v(" 7 - Security")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("7.01")]),e._v(" "),r("td",[e._v("If the escrow account does not have sufficient funds while distributing fees in "),r("code",[e._v("OnAcknowledgementPacket")]),e._v(", the fee module shall become locked.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow_test.go#L85",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("7.02")]),e._v(" "),r("td",[e._v("If the escrow account does not have sufficient funds while distributing fees in "),r("code",[e._v("OnTimeoutPacket")]),e._v(", the fee module shall become locked.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow_test.go#L236",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("7.03")]),e._v(" "),r("td",[e._v("If the escrow account does not have sufficient funds while refunding fees in channel closure, the fee module shall become locked.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/keeper/escrow_test.go#L377",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance test"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h1",{attrs:{id:"external-interface-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#external-interface-requirements"}},[e._v("#")]),e._v(" External interface requirements")]),e._v(" "),r("h2",{attrs:{id:"_8-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-cli"}},[e._v("#")]),e._v(" 8 - CLI")]),e._v(" "),r("h3",{attrs:{id:"query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("8.01")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for the incentivization of an unrelayed packet by port ID, channel ID and packet sequence.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L64",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.02")]),e._v(" "),r("td",[e._v("There shall be a CLI command to query for the incentivization of all unrelayed packets on all open channels.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L64",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.03")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for the total fees for "),r("code",[e._v("MsgRecvPacket")]),e._v(" for a given port ID, channel ID and packet sequence.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L105",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.04")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for the total fees for "),r("code",[e._v("MsgAcknowledgement")]),e._v(" for a given port ID, channel ID and packet sequence.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L151",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.05")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for the total fees for "),r("code",[e._v("MsgTimeout")]),e._v(" for a given port ID, channel ID and packet sequence.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L197",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.06")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for the payee address registered for a relayer for a specific channel ID.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#243",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.07")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for the counterparty payee address registered for a relayer for a specific channel ID.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#282",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.08")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query if a channel is fee-enabled for a port ID and channel ID.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L362",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.09")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to query for all the unrelayed incentivized packets in a channel by a port ID and channel ID.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/query.go#L397",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])]),e._v(" "),r("h3",{attrs:{id:"transaction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[e._v("#")]),e._v(" Transaction")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("ID")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Verification")]),e._v(" "),r("th",[e._v("Status")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("8.10")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to register a payee address for a channel by port ID and channel ID.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/tx.go#L26",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.11")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to register a counterparty payee address for a channel by port ID and channel ID.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/tx.go#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])]),e._v(" "),r("tr",[r("td",[e._v("8.12")]),e._v(" "),r("td",[e._v("There shall be a CLI command available to incentivize a packet by port ID, channel ID and packet sequence.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v4.0.0/modules/apps/29-fee/client/cli/tx.go#L76",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),r("OutboundLink")],1)]),e._v(" "),r("td",[r("code",[e._v("Verified")])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);