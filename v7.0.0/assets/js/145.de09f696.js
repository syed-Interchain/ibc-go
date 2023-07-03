(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{707:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"business-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#business-requirements"}},[e._v("#")]),e._v(" Business requirements")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("TL;DR")]),e._v(": Rather than creating an IBC application to expose cross-chain access to every module's features, the Interchain Accounts feature would allow to leverage the capabilities of an account to access a blockchain's application-specific features.")])]),e._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("p",[e._v("Without Interchain Accounts, cross-chain access to chain-specific features (such as staking, sending, voting, etc) has to be built as separate applications on top of the IBC TAO (Transport, Authentication, Ordering) layer. Creating new IBC application standards and implementations for each application-specific feature requires considerable time and resources. Interchain Accounts will allow new chain-specific features to be immediately available over IBC.")]),e._v(" "),a("h2",{attrs:{id:"objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[e._v("#")]),e._v(" Objectives")]),e._v(" "),a("p",[e._v("Provide a way to programmatically create accounts on a destination blockchain (called the host) and control them via transactions over IBC. An IBC packet will take a message from the controller blockchain to the host blockchain where it will be executed. This will allow new features on a blockchain to be immediately supported as IBC transactions, since the (destination blockchain) native messages are encapsulated in an IBC packet in an agnostic way. This will allow all of the modules on a chain to take advantage of the network effects created by the IBC ecosystem.")]),e._v(" "),a("h2",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" Scope")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Features")]),e._v(" "),a("th",[e._v("Release")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Deterministically create a new interchain account over IBC on the host chain.")]),e._v(" "),a("td",[e._v("v1")])]),e._v(" "),a("tr",[a("td",[e._v("Send over IBC a packet that contains the message to be executed by the interchain account on the host.")]),e._v(" "),a("td",[e._v("v1")])])])]),e._v(" "),a("h1",{attrs:{id:"user-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-requirements"}},[e._v("#")]),e._v(" User requirements")]),e._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),a("h3",{attrs:{id:"injective-band-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#injective-band-chain"}},[e._v("#")]),e._v(" Injective <> Band Chain")]),e._v(" "),a("p",[e._v("Currently, Injective sends an IBC transaction to Band Chain via their custom IBC oracle module, which is a data request. When this IBC packet is executed on Band Chain, validators on Band Chain fetch prices for 10 different markets. A random selection of validators will post this selection on-chain. Once a minimum quorum has been reached, an IBC packet is sent to Injective with the prices of markets. The roundtrip latency of this flow is around 30 seconds when things go well (no packet timeouts or delays in validation).")]),e._v(" "),a("p",[e._v("However, Injective wants to minimise as much as possible the latency between real world price updates and price updates on Injective. They can simplify this two-transaction flow to a single transaction using Interchain Accounts: Injective opens an interchain account on Band Chain, which would be able to pay for a continuous set of update transactions and maintain a standing request for the prices of marke. This would simplify the transaction flow to a single transaction, and introduce a simple flow to update the standing request if necessary.")]),e._v(" "),a("h3",{attrs:{id:"umee-cosmos-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#umee-cosmos-hub"}},[e._v("#")]),e._v(" Umee <> Cosmos Hub")]),e._v(" "),a("p",[e._v("Users on the Hub would send their ATOM to Umee. In return, the user gets equivalent amount of meTokens (this token would be a form of a liquid staking token), which could then be staked on the Hub, in some other liquidity pool, etc, in addition to other business logic which Umee could perform on behalf of the users in return for the ATOM.")]),e._v(" "),a("p",[e._v("Umee then stakes these ATOM tokens on the Hub on behalf of Umee (ATOMs get inflation rewards, etc). Without Interchain Accounts, Umee would have to use validator controlled multisig, because for this flow Umee needs an account on the Hub which can be controlled externally in a decentralised way. With Interchain Accounts, Umee can register an interchain account on the Hub and then receive the staking rewards for the ATOM, figure out distribution back to Umee chain, and send back to the corresponding existing account on Umee.")]),e._v(" "),a("h3",{attrs:{id:"hub-custodial-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hub-custodial-services"}},[e._v("#")]),e._v(" Hub custodial services")]),e._v(" "),a("p",[e._v("The problem the Cosmos ecosystem faces is fragmentation of services. When a new chain goes live, they need to talk to custodial solutions and exchanges to integrate. Many exchanges and custodial solutions don't want to integrate tens of chains unless paid in advance.")]),e._v(" "),a("p",[e._v("An alternative is offering the custodial service through the Hub. When a new chain goes live, the tokens of the chain are transferred through IBC to the Hub. This means that the custodial service would just have to integrate with one chain (the Hub), rather with an arbitrary number of them.")]),e._v(" "),a("p",[e._v("Using Interchain Accounts, a service could be built in which a user sends tokens to an interchain account address on chain "),a("code",[e._v("X")]),e._v(", which corresponds to the registered interchain account of chain "),a("code",[e._v("X")]),e._v(" on the Hub. This account would handle the token transfer to the Hub and then further on to the custodial wallet.")]),e._v(" "),a("h1",{attrs:{id:"functional-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-requirements"}},[e._v("#")]),e._v(" Functional requirements")]),e._v(" "),a("h2",{attrs:{id:"assumptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assumptions"}},[e._v("#")]),e._v(" Assumptions")]),e._v(" "),a("ol",[a("li",[e._v("Interchain account packets will rarely timeout with application-set values.")]),e._v(" "),a("li",[e._v("Cosmos-SDK modules deployed on a chain are not malicious.")]),e._v(" "),a("li",[e._v("Authentication modules may implement their own permissioning scheme.")])]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("h3",{attrs:{id:"_1-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-configuration"}},[e._v("#")]),e._v(" 1 - Configuration")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1.01")]),e._v(" "),a("td",[e._v("A chain shall have the ability to enable or disable Interchain Accounts controller functionality in the genesis state.")]),e._v(" "),a("td",[e._v("The controller parameters have a "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/types/host.pb.go#L30",target:"_blank",rel:"noopener noreferrer"}},[e._v("flag"),a("OutboundLink")],1),e._v(" to enable/disable the controller submodule, and this flag "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/params.go#L24",target:"_blank",rel:"noopener noreferrer"}},[e._v("is stored during genesis initialization"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.02")]),e._v(" "),a("td",[e._v("A chain shall have the ability to export the Interchain Accounts controller genesis state.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/genesis_test.go#L47",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.03")]),e._v(" "),a("td",[e._v("A chain shall have the ability to initialize the Interchain Accounts controller genesis state.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/genesis_test.go#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.04")]),e._v(" "),a("td",[e._v("A chain shall have the ability to set the Interchain Accounts controller parameters when upgrading or via proposal.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/module_test.go#L33",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.05")]),e._v(" "),a("td",[e._v("A chain shall have the ability to enable or disable Interchain Accounts host functionality in the genesis state.")]),e._v(" "),a("td",[e._v("The host parameters have a "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/types/host.pb.go#L30",target:"_blank",rel:"noopener noreferrer"}},[e._v("flag"),a("OutboundLink")],1),e._v(" to enable/disable the host submodule, and this flag "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/params.go#L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("is stored during genesis initialization"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.06")]),e._v(" "),a("td",[e._v("A chain shall have the ability to export the Interchain Accounts host genesis state.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/genesis_test.go#L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.07")]),e._v(" "),a("td",[e._v("A chain shall have the ability to initialize the Interchain Accounts host genesis state.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/genesis_test.go#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.08")]),e._v(" "),a("td",[e._v("A chain shall have the ability to set the Interchain Accounts host parameters when upgrading or via proposal.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/module_test.go#L33",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("1.09")]),e._v(" "),a("td",[e._v("The host chain shall have the ability to whitelist what types of messages or transactions that it chooses to facilitate (e.g. it can decide that registered interchain accounts cannot execute staking messages).")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/params_test.go#L5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])]),e._v(" "),a("h3",{attrs:{id:"_2-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-registration"}},[e._v("#")]),e._v(" 2 - Registration")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("2.01")]),e._v(" "),a("td",[e._v("The controller chain can programmatically create interchain accounts on the host chain that shall be controlled only by the owner account on the controller chain.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/account_test.go#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("2.02")]),e._v(" "),a("td",[e._v("An interchain account shall be created by any actor without the approval of a third party (e.g. chain governance).")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/account_test.go#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])]),e._v(" "),a("h3",{attrs:{id:"_3-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-control"}},[e._v("#")]),e._v(" 3 - Control")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("3.01")]),e._v(" "),a("td",[e._v("The controller chain can programmatically control the interchain account by submitting transactions to be executed on the host chain on the behalf of the interchain account.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/relay_test.go#L29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("3.02")]),e._v(" "),a("td",[e._v("Under no circumstances shall the owner account on the controller chain irretrievably lose control over the registered interchain account on the host chain.")]),e._v(" "),a("td",[e._v("If the channel between controller and host closes, then "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/account.go#L16-L17",target:"_blank",rel:"noopener noreferrer"}},[e._v("a relayer can open a new channel on the existing controller port"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])]),e._v(" "),a("h3",{attrs:{id:"_4-host-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-host-execution"}},[e._v("#")]),e._v(" 4 - Host execution")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("4.01")]),e._v(" "),a("td",[e._v("Transactions shall be executed by an interchain account on the host chain in exactly the same order in which they are submitted by the controller chain.")]),e._v(" "),a("td",[e._v("IBC packets with SDK messages will be sent from the controller to the host over an "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/account.go#L60",target:"_blank",rel:"noopener noreferrer"}},[e._v("ordered channel"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("4.02")]),e._v(" "),a("td",[e._v("The host shall execute only messages in the allow list.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/relay_test.go#L340",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("4.03")]),e._v(" "),a("td",[e._v("The controller chain shall know how the host chain will handle the transaction bytes in advance.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/handshake_test.go#L109-L133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("4.04")]),e._v(" "),a("td",[e._v("Each transaction submitted by the controller chain shall be executed only once by the interchain account on the host chain.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/relay_test.go#L248",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])]),e._v(" "),a("h1",{attrs:{id:"non-functional-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-functional-requirements"}},[e._v("#")]),e._v(" Non-functional requirements")]),e._v(" "),a("h2",{attrs:{id:"_5-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-security"}},[e._v("#")]),e._v(" 5 - Security")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("5.01")]),e._v(" "),a("td",[e._v("There shall be no means for the interchain account to execute transactions that have not been submitted first by the respective owner account on the controller chain.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/relay_test.go#L361",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("5.02")]),e._v(" "),a("td",[e._v("Every interchain account on the host chain shall have one and only one respective owner account on the controller chain.")]),e._v(" "),a("td",[e._v("The interchain account on the host "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/handshake.go#L73-L76",target:"_blank",rel:"noopener noreferrer"}},[e._v("is generated using the host connection ID and the address of the owner on the controller"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("5.03")]),e._v(" "),a("td",[e._v("The owner account on a controller chain shall not be able to control interchain accounts registered by other owner accounts on the same controller chain.")]),e._v(" "),a("td",[e._v("Before the host logic executes the received messages, it "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/keeper/relay.go#L94",target:"_blank",rel:"noopener noreferrer"}},[e._v("retrieves the interchain account associated with the port ID"),a("OutboundLink")],1),e._v(" over which it received the message. For owner address B to be able to execute a message with the interchain account registered with owner address A, it would need to send the messages over a channel that binds to a port ID that contains the owner address A, and since we have assumption number 3, this should not be allowed by applications.")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("5.04")]),e._v(" "),a("td",[e._v("A controller chain shall not be able to control interchain accounts registered by owner accounts on different controller chains.")]),e._v(" "),a("td",[e._v("Same as 5.03.")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("5.05")]),e._v(" "),a("td",[e._v("Each interchain account on the host chain is owned by a single owner account on the controller chain. It shall not be possible to register a second interchain account with the same owner account on the controller chain.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/account_test.go#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])]),e._v(" "),a("h1",{attrs:{id:"external-interface-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-interface-requirements"}},[e._v("#")]),e._v(" External interface requirements")]),e._v(" "),a("h2",{attrs:{id:"_6-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-cli"}},[e._v("#")]),e._v(" 6 - CLI")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("6.01")]),e._v(" "),a("td",[e._v("There shall be a CLI command available to query the host parameters.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/client/cli/query.go#L22",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("6.02")]),e._v(" "),a("td",[e._v("There shall be a CLI command available to query the receive packet events on the host chain to check the result of the execution of the message on the host.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/host/client/cli/query.go#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("6.03")]),e._v(" "),a("td",[e._v("There shall be a CLI command available to query the controller parameters.")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/client/cli/query.go#L15",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance tests"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])]),e._v(" "),a("h2",{attrs:{id:"_7-application-developers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-application-developers"}},[e._v("#")]),e._v(" 7 - Application developers")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Verification")]),e._v(" "),a("th",[e._v("Status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("7.01")]),e._v(" "),a("td",[e._v("An IBC application developer shall be able to develop an Interchain Accounts authentication module that can register interchain accounts.")]),e._v(" "),a("td",[e._v("The "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/account.go#L18",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("RegisterInterchainAccount")]),e._v(" function"),a("OutboundLink")],1),e._v(" is the entry point to registering an interchain account.")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])]),e._v(" "),a("tr",[a("td",[e._v("7.02")]),e._v(" "),a("td",[e._v("An IBC application developer shall be able to develop an Interchain Accounts authentication module that can send messages from the controller to the host.")]),e._v(" "),a("td",[e._v("The "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/apps/27-interchain-accounts/controller/keeper/relay.go#L18",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SendTx")]),e._v(" function"),a("OutboundLink")],1),e._v(" takes pre-built packet data containing messages to be executed on the host chain from an authentication module and attempts to send the packet.")]),e._v(" "),a("td",[a("code",[e._v("Verified")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);