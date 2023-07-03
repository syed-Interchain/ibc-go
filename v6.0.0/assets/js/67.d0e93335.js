(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{629:function(e,t,o){"use strict";o.r(t);var a=o(0),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"building-an-authentication-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-an-authentication-module"}},[e._v("#")]),e._v(" Building an authentication module")]),e._v(" "),o("h2",{attrs:{id:"deprecation-notice"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deprecation-notice"}},[e._v("#")]),e._v(" Deprecation Notice")]),e._v(" "),o("p",[o("strong",[e._v("This document is deprecated and will be removed in future releases")]),e._v(".")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Authentication modules play the role of the "),o("code",[e._v("Base Application")]),e._v(" as described in "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-30 IBC Middleware"),o("OutboundLink")],1),e._v(", and enable application developers to perform custom logic when working with the Interchain Accounts controller API.")]),e._v(" "),o("p",[e._v("The controller submodule is used for account registration and packet sending. It executes only logic required of all controllers of interchain accounts. The type of authentication used to manage the interchain accounts remains unspecified. There may exist many different types of authentication which are desirable for different use cases. Thus the purpose of the authentication module is to wrap the controller submodule with custom authentication logic.")]),e._v(" "),o("p",[e._v("In ibc-go, authentication modules are connected to the controller chain via a middleware stack. The controller submodule is implemented as "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("middleware"),o("OutboundLink")],1),e._v(" and the authentication module is connected to the controller submodule as the base application of the middleware stack. To implement an authentication module, the "),o("code",[e._v("IBCModule")]),e._v(" interface must be fulfilled. By implementing the controller submodule as middleware, any amount of authentication modules can be created and connected to the controller submodule without writing redundant code.")]),e._v(" "),o("p",[e._v("The authentication module must:")]),e._v(" "),o("ul",[o("li",[e._v("Authenticate interchain account owners.")]),e._v(" "),o("li",[e._v("Track the associated interchain account address for an owner.")]),e._v(" "),o("li",[e._v("Send packets on behalf of an owner (after authentication).")])]),e._v(" "),o("blockquote",[o("p",[e._v("Please note that since ibc-go v6 the channel capability is claimed by the controller submodule and therefore it is not required for authentication modules to claim the capability in the "),o("code",[e._v("OnChanOpenInit")]),e._v(" callback. When the authentication module sends packets on the channel created for the associated interchain account it can pass a "),o("code",[e._v("nil")]),e._v(" capability to the legacy function "),o("code",[e._v("SendTx")]),e._v(" of the controller keeper (see "),o("a",{attrs:{href:"#sendtx"}},[e._v("section "),o("code",[e._v("SendTx")])]),e._v(" below for mode information).")])]),e._v(" "),o("h2",{attrs:{id:"ibcmodule-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibcmodule-implementation"}},[e._v("#")]),e._v(" "),o("code",[e._v("IBCModule")]),e._v(" implementation")]),e._v(" "),o("p",[e._v("The following "),o("code",[e._v("IBCModule")]),e._v(" callbacks must be implemented with appropriate custom logic:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gT25DaGFuT3BlbkluaXQgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5Jbml0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogICAgY29ubmVjdGlvbkhvcHMgW11zdHJpbmcsCiAgICBwb3J0SUQgc3RyaW5nLAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICB2ZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogICAgLy8gc2luY2UgaWJjLWdvIHY2IHRoZSBhdXRoZW50aWNhdGlvbiBtb2R1bGUgKm11c3Qgbm90KiBjbGFpbSB0aGUgY2hhbm5lbCBjYXBhYmlsaXR5IG9uIE9uQ2hhbk9wZW5Jbml0CgogICAgLy8gcGVyZm9ybSBjdXN0b20gbG9naWMKCiAgICByZXR1cm4gdmVyc2lvbiwgbmlsCn0KCi8vIE9uQ2hhbk9wZW5BY2sgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5BY2soCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICAgY291bnRlcnBhcnR5VmVyc2lvbiBzdHJpbmcsCikgZXJyb3IgewogICAgLy8gcGVyZm9ybSBjdXN0b20gbG9naWMKCiAgICByZXR1cm4gbmlsCn0KCi8vIE9uQ2hhbkNsb3NlQ29uZmlybSBpbXBsZW1lbnRzIHRoZSBJQkNNb2R1bGUgaW50ZXJmYWNlCmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuQ2xvc2VDb25maXJtKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICAvLyBwZXJmb3JtIGN1c3RvbSBsb2dpYwoKICAgIHJldHVybiBuaWwKfQoKLy8gT25BY2tub3dsZWRnZW1lbnRQYWNrZXQgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQWNrbm93bGVkZ2VtZW50UGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgICBhY2tub3dsZWRnZW1lbnQgW11ieXRlLAogICAgcmVsYXllciBzZGsuQWNjQWRkcmVzcywKKSBlcnJvciB7CiAgICAvLyBwZXJmb3JtIGN1c3RvbSBsb2dpYwoKICAgIHJldHVybiBuaWwKfQoKLy8gT25UaW1lb3V0UGFja2V0IGltcGxlbWVudHMgdGhlIElCQ01vZHVsZSBpbnRlcmZhY2UuCmZ1bmMgKGltIElCQ01vZHVsZSkgT25UaW1lb3V0UGFja2V0KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICAgIC8vIHBlcmZvcm0gY3VzdG9tIGxvZ2ljCgogICAgcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),o("p",[e._v("The following functions must be defined to fulfill the "),o("code",[e._v("IBCModule")]),e._v(" interface, but they will never be called by the controller submodule so they may error or panic. That is because in Interchain Accounts, the channel handshake is always initiated on the controller chain and packets are always sent to the host chain and never to the controller chain.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gT25DaGFuT3BlblRyeSBpbXBsZW1lbnRzIHRoZSBJQkNNb2R1bGUgaW50ZXJmYWNlCmZ1bmMgKGltIElCQ01vZHVsZSkgT25DaGFuT3BlblRyeSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICAgIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogICAgcGFuaWMoJnF1b3Q7VU5JTVBMRU1FTlRFRCZxdW90OykKfQoKLy8gT25DaGFuT3BlbkNvbmZpcm0gaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbk9wZW5Db25maXJtKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcG9ydElELAogICAgY2hhbm5lbElEIHN0cmluZywKKSBlcnJvciB7CiAgICBwYW5pYygmcXVvdDtVTklNUExFTUVOVEVEJnF1b3Q7KQp9CgovLyBPbkNoYW5DbG9zZUluaXQgaW1wbGVtZW50cyB0aGUgSUJDTW9kdWxlIGludGVyZmFjZQpmdW5jIChpbSBJQkNNb2R1bGUpIE9uQ2hhbkNsb3NlSW5pdCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogICAgcGFuaWMoJnF1b3Q7VU5JTVBMRU1FTlRFRCZxdW90OykKfQoKLy8gT25SZWN2UGFja2V0IGltcGxlbWVudHMgdGhlIElCQ01vZHVsZSBpbnRlcmZhY2UuIEEgc3VjY2Vzc2Z1bCBhY2tub3dsZWRnZW1lbnQKLy8gaXMgcmV0dXJuZWQgaWYgdGhlIHBhY2tldCBkYXRhIGlzIHN1Y2Nlc2Z1bGx5IGRlY29kZWQgYW5kIHRoZSByZWNlaXZlIGFwcGxpY2F0aW9uCi8vIGxvZ2ljIHJldHVybnMgd2l0aG91dCBlcnJvci4KZnVuYyAoaW0gSUJDTW9kdWxlKSBPblJlY3ZQYWNrZXQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKICAgIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgaWJjZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50IHsKICAgIHBhbmljKCZxdW90O1VOSU1QTEVNRU5URUQmcXVvdDspCn0K"}}),e._v(" "),o("h2",{attrs:{id:"onacknowledgementpacket"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket"}},[e._v("#")]),e._v(" "),o("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),o("p",[e._v("Controller chains will be able to access the acknowledgement written into the host chain state once a relayer relays the acknowledgement.\nThe acknowledgement bytes contain either the response of the execution of the message(s) on the host chain or an error. They will be passed to the auth module via the "),o("code",[e._v("OnAcknowledgementPacket")]),e._v(" callback. Auth modules are expected to know how to decode the acknowledgement.")]),e._v(" "),o("p",[e._v("If the controller chain is connected to a host chain using the host module on ibc-go, it may interpret the acknowledgement bytes as follows:")]),e._v(" "),o("p",[e._v("Begin by unmarshaling the acknowledgement into "),o("code",[e._v("sdk.TxMsgData")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGFjayBjaGFubmVsdHlwZXMuQWNrbm93bGVkZ2VtZW50CmlmIGVyciA6PSBjaGFubmVsdHlwZXMuU3ViTW9kdWxlQ2RjLlVubWFyc2hhbEpTT04oYWNrbm93bGVkZ2VtZW50LCAmYW1wO2Fjayk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cgp0eE1zZ0RhdGEgOj0gJmFtcDtzZGsuVHhNc2dEYXRhe30KaWYgZXJyIDo9IHByb3RvLlVubWFyc2hhbChhY2suR2V0UmVzdWx0KCksIHR4TXNnRGF0YSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}}),e._v(" "),o("p",[e._v("If the "),o("code",[e._v("txMsgData.Data")]),e._v(" field is non nil, the host chain is using SDK version <= v0.45.\nThe auth module should interpret the "),o("code",[e._v("txMsgData.Data")]),e._v(" as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3dpdGNoIGxlbih0eE1zZ0RhdGEuRGF0YSkgewpjYXNlIDA6CiAgICAvLyBzZWUgZG9jdW1lbnRhdGlvbiBiZWxvdyBmb3IgU0RLIDAuNDYueCBvciBncmVhdGVyCmRlZmF1bHQ6CiAgICBmb3IgXywgbXNnRGF0YSA6PSByYW5nZSB0eE1zZ0RhdGEuRGF0YSB7CiAgICAgICAgaWYgZXJyIDo9IGhhbmRsZXIobXNnRGF0YSk7IGVyciAhPSBuaWwgewogICAgICAgICAgICByZXR1cm4gZXJyCiAgICAgICAgfQogICAgfQouLi4KfSAgICAgICAgICAgIAo="}}),e._v(" "),o("p",[e._v("A handler will be needed to interpret what actions to perform based on the message type sent.\nA router could be used, or more simply a switch statement.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBoYW5kbGVyKG1zZ0RhdGEgc2RrLk1zZ0RhdGEpIGVycm9yIHsKc3dpdGNoIG1zZ0RhdGEuTXNnVHlwZSB7CmNhc2Ugc2RrLk1zZ1R5cGVVUkwoJmFtcDtiYW5rdHlwZXMuTXNnU2VuZHt9KToKICAgIG1zZ1Jlc3BvbnNlIDo9ICZhbXA7YmFua3R5cGVzLk1zZ1NlbmRSZXNwb25zZXt9CiAgICBpZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKG1zZ0RhdGEuRGF0YSwgbXNnUmVzcG9uc2V9OyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlQmFua1NlbmRNc2cobXNnUmVzcG9uc2UpCgpjYXNlIHNkay5Nc2dUeXBlVVJMKCZhbXA7c3Rha2luZ3R5cGVzLk1zZ0RlbGVnYXRle30pOgogICAgbXNnUmVzcG9uc2UgOj0gJmFtcDtzdGFraW5ndHlwZXMuTXNnRGVsZWdhdGVSZXNwb25zZXt9CiAgICBpZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKG1zZ0RhdGEuRGF0YSwgbXNnUmVzcG9uc2V9OyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlU3Rha2luZ0RlbGVnYXRlTXNnKG1zZ1Jlc3BvbnNlKQoKY2FzZSBzZGsuTXNnVHlwZVVSTCgmYW1wO3RyYW5zZmVydHlwZXMuTXNnVHJhbnNmZXJ7fSk6CiAgICBtc2dSZXNwb25zZSA6PSAmYW1wO3RyYW5zZmVydHlwZXMuTXNnVHJhbnNmZXJSZXNwb25zZXt9CiAgICBpZiBlcnIgOj0gcHJvdG8uVW5tYXJzaGFsKG1zZ0RhdGEuRGF0YSwgbXNnUmVzcG9uc2V9OyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlSUJDVHJhbnNmZXJNc2cobXNnUmVzcG9uc2UpCiAKZGVmYXVsdDoKICAgIHJldHVybgp9Cg=="}}),e._v(" "),o("p",[e._v("If the "),o("code",[e._v("txMsgData.Data")]),e._v(" is empty, the host chain is using SDK version > v0.45.\nThe auth module should interpret the "),o("code",[e._v("txMsgData.Responses")]),e._v(" as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCi8vIHN3aXRjaCBzdGF0ZW1lbnQgZnJvbSBhYm92ZQpjYXNlIDA6CiAgICBmb3IgXywgYW55IDo9IHJhbmdlIHR4TXNnRGF0YS5Nc2dSZXNwb25zZXMgewogICAgICAgIGlmIGVyciA6PSBoYW5kbGVBbnkoYW55KTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHJldHVybiBlcnIKICAgICAgICB9CiAgICB9Cn0K"}}),e._v(" "),o("p",[e._v("A handler will be needed to interpret what actions to perform based on the type URL of the Any.\nA router could be used, or more simply a switch statement.\nIt may be possible to deduplicate logic between "),o("code",[e._v("handler")]),e._v(" and "),o("code",[e._v("handleAny")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBoYW5kbGVBbnkoYW55ICpjb2RlY3R5cGVzLkFueSkgZXJyb3Igewpzd2l0Y2ggYW55LlR5cGVVUkwgewpjYXNlIGJhbmt0eXBlcy5Nc2dTZW5kOgogICAgbXNnUmVzcG9uc2UsIGVyciA6PSB1bnBhY2tCYW5rTXNnU2VuZFJlc3BvbnNlKGFueSkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICBoYW5kbGVCYW5rU2VuZE1zZyhtc2dSZXNwb25zZSkKCmNhc2Ugc3Rha2luZ3R5cGVzLk1zZ0RlbGVnYXRlOgogICAgbXNnUmVzcG9uc2UsIGVyciA6PSB1bnBhY2tTdGFraW5nRGVsZWdhdGVSZXNwb25zZShhbnkpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlU3Rha2luZ0RlbGVnYXRlTXNnKG1zZ1Jlc3BvbnNlKQoKICAgIGNhc2UgdHJhbnNmZXJ0eXBlcy5Nc2dUcmFuc2ZlcjoKICAgIG1zZ1Jlc3BvbnNlLCBlcnIgOj0gdW5wYWNrSUJDVHJhbnNmZXJNc2dSZXNwb25zZShhbnkpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgaGFuZGxlSUJDVHJhbnNmZXJNc2cobXNnUmVzcG9uc2UpCiAKZGVmYXVsdDoKICAgIHJldHVybgp9Cg=="}}),e._v(" "),o("h2",{attrs:{id:"integration-into-app-go-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integration-into-app-go-file"}},[e._v("#")]),e._v(" Integration into "),o("code",[e._v("app.go")]),e._v(" file")]),e._v(" "),o("p",[e._v("To integrate the authentication module into your chain, please follow the steps outlined in "),o("RouterLink",{attrs:{to:"/apps/interchain-accounts/legacy/integration.html#example-integration"}},[o("code",[e._v("app.go")]),e._v(" integration")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);