(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{683:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"migrating-from-ibc-go-v3-to-v4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-ibc-go-v3-to-v4"}},[e._v("#")]),e._v(" Migrating from ibc-go v3 to v4")]),e._v(" "),n("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),n("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),n("ul",[n("li",[e._v("Chains")]),e._v(" "),n("li",[e._v("IBC Apps")]),e._v(" "),n("li",[e._v("Relayers")]),e._v(" "),n("li",[e._v("IBC Light Clients")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3YzIC0mZ3Q7IGdpdGh1Yi5jb20vY29zbW9zL2liYy1nby92NAo="}}),e._v(" "),n("p",[e._v("No genesis or in-place migrations required when upgrading from v1 or v2 of ibc-go.")]),e._v(" "),n("h2",{attrs:{id:"chains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),n("h3",{attrs:{id:"ics27-interchain-accounts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),n("p",[e._v("The controller submodule implements now the 05-port "),n("code",[e._v("Middleware")]),e._v(" interface instead of the 05-port "),n("code",[e._v("IBCModule")]),e._v(" interface. Chains that integrate the controller submodule, need to create it with the "),n("code",[e._v("NewIBCMiddleware")]),e._v(" constructor function. For example:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSBpY2Fjb250cm9sbGVyLk5ld0lCQ01vZHVsZShhcHAuSUNBQ29udHJvbGxlcktlZXBlciwgaWNhQXV0aElCQ01vZHVsZSkKKyBpY2Fjb250cm9sbGVyLk5ld0lCQ01pZGRsZXdhcmUoaWNhQXV0aElCQ01vZHVsZSwgYXBwLklDQUNvbnRyb2xsZXJLZWVwZXIpCg=="}}),e._v(" "),n("p",[e._v("where "),n("code",[e._v("icaAuthIBCModule")]),e._v(" is the Interchain Accounts authentication IBC Module.")]),e._v(" "),n("h3",{attrs:{id:"ics29-fee-middleware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ics29-fee-middleware"}},[e._v("#")]),e._v(" ICS29 - Fee Middleware")]),e._v(" "),n("p",[e._v("The Fee Middleware module, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly.")]),e._v(" "),n("p",[e._v("Please read the Fee Middleware "),n("a",{attrs:{href:"https://ibc.cosmos.network/main/middleware/ics29-fee/integration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration documentation"),n("OutboundLink")],1),e._v(" for an in depth guide on how to congfigure the module correctly in order to incentivize IBC packets.")]),e._v(" "),n("p",[e._v("Take a look at the following diff for an "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1432/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08aL366",target:"_blank",rel:"noopener noreferrer"}},[e._v("example setup"),n("OutboundLink")],1),e._v(" of how to incentivize ics27 channels.")]),e._v(" "),n("h3",{attrs:{id:"migration-to-fix-support-for-base-denoms-with-slashes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#migration-to-fix-support-for-base-denoms-with-slashes"}},[e._v("#")]),e._v(" Migration to fix support for base denoms with slashes")]),e._v(" "),n("p",[e._v("As part of "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v1.5.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.5.0"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v2.3.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v2.3.0"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v3.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v3.1.0"),n("OutboundLink")],1),e._v(" some "),n("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/migrations/support-denoms-with-slashes.md#upgrade-proposal",target:"_blank",rel:"noopener noreferrer"}},[e._v("migration handler code sample was documented"),n("OutboundLink")],1),e._v(" that needs to run in order to correct the trace information of coins transferred using ICS20 whose base denom contains slashes.")]),e._v(" "),n("p",[e._v("Based on feedback from the community we add now an improved solution to run the same migration that does not require copying a large piece of code over from the migration document, but instead requires only adding a one-line upgrade handler.")]),e._v(" "),n("p",[e._v("If the chain will migrate to supporting base denoms with slashes, it must set the appropriate params during the execution of the upgrade handler in "),n("code",[e._v("app.go")]),e._v(":")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7TWlncmF0ZVRyYWNlcyZxdW90OywKICAgIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBfIHVwZ3JhZGV0eXBlcy5QbGFuLCBmcm9tVk0gbW9kdWxlLlZlcnNpb25NYXApIChtb2R1bGUuVmVyc2lvbk1hcCwgZXJyb3IpIHsKICAgICAgICAvLyB0cmFuc2ZlciBtb2R1bGUgY29uc2Vuc3VzIHZlcnNpb24gaGFzIGJlZW4gYnVtcGVkIHRvIDIKICAgICAgICByZXR1cm4gYXBwLm1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBhcHAuY29uZmlndXJhdG9yLCBmcm9tVk0pCiAgICB9KQoK"}}),e._v(" "),n("p",[e._v("If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect.")]),e._v(" "),n("p",[e._v("E.g. If a base denom of "),n("code",[e._v("testcoin/testcoin/testcoin")]),e._v(" is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: "),n("code",[e._v('Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"')]),e._v(".")]),e._v(" "),n("p",[e._v("This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes.")]),e._v(" "),n("h2",{attrs:{id:"ibc-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),n("h3",{attrs:{id:"ics03-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ics03-connection"}},[e._v("#")]),e._v(" ICS03 - Connection")]),e._v(" "),n("p",[e._v("Crossing hellos have been removed from 03-connection handshake negotiation.\n"),n("code",[e._v("PreviousConnectionId")]),e._v(" in "),n("code",[e._v("MsgConnectionOpenTry")]),e._v(" has been deprecated and is no longer used by core IBC.")]),e._v(" "),n("p",[n("code",[e._v("NewMsgConnectionOpenTry")]),e._v(" no longer takes in the "),n("code",[e._v("PreviousConnectionId")]),e._v(" as crossing hellos are no longer supported. A non-empty "),n("code",[e._v("PreviousConnectionId")]),e._v(" will fail basic validation for this message.")]),e._v(" "),n("h3",{attrs:{id:"ics04-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ics04-channel"}},[e._v("#")]),e._v(" ICS04 - Channel")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("WriteAcknowledgement")]),e._v(" API now takes the "),n("code",[e._v("exported.Acknowledgement")]),e._v(" type instead of passing in the acknowledgement byte array directly.\nThis is an API breaking change and as such IBC application developers will have to update any calls to "),n("code",[e._v("WriteAcknowledgement")]),e._v(".")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("OnChanOpenInit")]),e._v(" application callback has been modified.\nThe return signature now includes the application version as detailed in the latest IBC "),n("a",{attrs:{href:"https://github.com/cosmos/ibc/pull/629",target:"_blank",rel:"noopener noreferrer"}},[e._v("spec changes"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("NewErrorAcknowledgement")]),e._v(" method signature has changed.\nIt now accepts an "),n("code",[e._v("error")]),e._v(" rather than a "),n("code",[e._v("string")]),e._v(". This was done in order to prevent accidental state changes.\nAll error acknowledgements now contain a deterministic ABCI code and error message. It is the responsibility of the application developer to emit error details in events.")]),e._v(" "),n("p",[e._v("Crossing hellos have been removed from 04-channel handshake negotiation.\nIBC Applications no longer need to account from already claimed capabilities in the "),n("code",[e._v("OnChanOpenTry")]),e._v(" callback. The capability provided by core IBC must be able to be claimed with error.\n"),n("code",[e._v("PreviousChannelId")]),e._v(" in "),n("code",[e._v("MsgChannelOpenTry")]),e._v(" has been deprecated and is no longer used by core IBC.")]),e._v(" "),n("p",[n("code",[e._v("NewMsgChannelOpenTry")]),e._v(" no longer takes in the "),n("code",[e._v("PreviousChannelId")]),e._v(" as crossing hellos are no longer supported. A non-empty "),n("code",[e._v("PreviousChannelId")]),e._v(" will fail basic validation for this message.")]),e._v(" "),n("h3",{attrs:{id:"ics27-interchain-accounts-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts-2"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("RegisterInterchainAccount")]),e._v(" API has been modified to include an additional "),n("code",[e._v("version")]),e._v(" argument. This change has been made in order to support ICS29 fee middleware, for relayer incentivization of ICS27 packets.\nConsumers of the "),n("code",[e._v("RegisterInterchainAccount")]),e._v(" are now expected to build the appropriate JSON encoded version string themselves and pass it accordingly.\nThis should be constructed within the interchain accounts authentication module which leverages the APIs exposed via the interchain accounts "),n("code",[e._v("controllerKeeper")]),e._v(". If an empty string is passed in the "),n("code",[e._v("version")]),e._v(" argument, then the version will be initialized to a default value in the "),n("code",[e._v("OnChanOpenInit")]),e._v(" callback of the controller's handler, so that channel handshake can proceed.")]),e._v(" "),n("p",[e._v("The following code snippet illustrates how to construct an appropriate interchain accounts "),n("code",[e._v("Metadata")]),e._v(" and encode it as a JSON bytestring:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgICBWZXJzaW9uOiAgICAgICAgICAgICAgICBpY2F0eXBlcy5WZXJzaW9uLAogICAgQ29udHJvbGxlckNvbm5lY3Rpb25JZDogY29udHJvbGxlckNvbm5lY3Rpb25JRCwKICAgIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgICBFbmNvZGluZzogICAgICAgICAgICAgICBpY2F0eXBlcy5FbmNvZGluZ1Byb3RvYnVmLAogICAgVHhUeXBlOiAgICAgICAgICAgICAgICAgaWNhdHlwZXMuVHhUeXBlU0RLTXVsdGlNc2csCn0KCmFwcFZlcnNpb24sIGVyciA6PSBpY2F0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtpY2FNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrLmljYUNvbnRyb2xsZXJLZWVwZXIuUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudChjdHgsIG1zZy5Db25uZWN0aW9uSWQsIG1zZy5Pd25lciwgc3RyaW5nKGFwcFZlcnNpb24pKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0K"}}),e._v(" "),n("p",[e._v("Similarly, if the application stack is configured to route through ICS29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS29 "),n("code",[e._v("Metadata")]),e._v(" type:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgICBWZXJzaW9uOiAgICAgICAgICAgICAgICBpY2F0eXBlcy5WZXJzaW9uLAogICAgQ29udHJvbGxlckNvbm5lY3Rpb25JZDogY29udHJvbGxlckNvbm5lY3Rpb25JRCwKICAgIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgICBFbmNvZGluZzogICAgICAgICAgICAgICBpY2F0eXBlcy5FbmNvZGluZ1Byb3RvYnVmLAogICAgVHhUeXBlOiAgICAgICAgICAgICAgICAgaWNhdHlwZXMuVHhUeXBlU0RLTXVsdGlNc2csCn0KCmFwcFZlcnNpb24sIGVyciA6PSBpY2F0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtpY2FNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmZlZU1ldGFkYXRhIDo9IGZlZXR5cGVzLk1ldGFkYXRhewogICAgQXBwVmVyc2lvbjogc3RyaW5nKGFwcFZlcnNpb24pLAogICAgRmVlVmVyc2lvbjogZmVldHlwZXMuVmVyc2lvbiwKfQoKZmVlRW5hYmxlZFZlcnNpb24sIGVyciA6PSBmZWV0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtmZWVNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrLmljYUNvbnRyb2xsZXJLZWVwZXIuUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudChjdHgsIG1zZy5Db25uZWN0aW9uSWQsIG1zZy5Pd25lciwgc3RyaW5nKGZlZUVuYWJsZWRWZXJzaW9uKSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}}),e._v(" "),n("h2",{attrs:{id:"relayers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),n("p",[e._v("When using the "),n("code",[e._v("DenomTrace")]),e._v(" gRPC, the full IBC denomination with the "),n("code",[e._v("ibc/")]),e._v(" prefix may now be passed in.")]),e._v(" "),n("p",[e._v("Crossing hellos are no longer supported by core IBC for 03-connection and 04-channel. The handshake should be completed in the logical 4 step process (INIT, TRY, ACK, CONFIRM).")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);