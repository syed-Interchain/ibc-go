(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{653:function(e,a,t){"use strict";t.r(a);var n=t(1),c=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-025-ibc-passive-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-025-ibc-passive-channels"}},[e._v("#")]),e._v(" ADR 025: IBC Passive Channels")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v('2021-04-23: Change status to "deprecated"')]),e._v(" "),t("li",[e._v("2020-05-23: Provide sample Go code and more details")]),e._v(" "),t("li",[e._v("2020-05-18: Initial Draft")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[t("em",[e._v("deprecated")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v('The current "naive" IBC Relayer strategy currently establishes a single predetermined IBC channel atop a single connection between two clients (each potentially of a different chain).  This strategy then detects packets to be relayed by watching for '),t("code",[e._v("send_packet")]),e._v(" and "),t("code",[e._v("recv_packet")]),e._v(" events matching that channel, and sends the necessary transactions to relay those packets.")]),e._v(" "),t("p",[e._v('We wish to expand this "naive" strategy to a "passive" one which detects and relays both channel handshake messages and packets on a given connection, without the need to know each channel in advance of relaying it.')]),e._v(" "),t("p",[e._v("In order to accomplish this, we propose adding more comprehensive events to expose channel metadata for each transaction sent from the "),t("code",[e._v("x/ibc/core/04-channel/keeper/handshake.go")]),e._v(" and "),t("code",[e._v("x/ibc/core/04-channel/keeper/packet.go")]),e._v(" modules.")]),e._v(" "),t("p",[e._v("Here is an example of what would be in "),t("code",[e._v("ChanOpenInit")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogIEV2ZW50VHlwZUNoYW5uZWxNZXRhID0gJnF1b3Q7Y2hhbm5lbF9tZXRhJnF1b3Q7CiAgQXR0cmlidXRlS2V5QWN0aW9uID0gJnF1b3Q7YWN0aW9uJnF1b3Q7CiAgQXR0cmlidXRlS2V5SG9wcyA9ICZxdW90O2hvcHMmcXVvdDsKICBBdHRyaWJ1dGVLZXlPcmRlciA9ICZxdW90O29yZGVyJnF1b3Q7CiAgQXR0cmlidXRlS2V5U3JjUG9ydCA9ICZxdW90O3NyY19wb3J0JnF1b3Q7CiAgQXR0cmlidXRlS2V5U3JjQ2hhbm5lbCA9ICZxdW90O3NyY19jaGFubmVsJnF1b3Q7CiAgQXR0cmlidXRlS2V5U3JjVmVyc2lvbiA9ICZxdW90O3NyY192ZXJzaW9uJnF1b3Q7CiAgQXR0cmlidXRlS2V5RHN0UG9ydCA9ICZxdW90O2RzdF9wb3J0JnF1b3Q7CiAgQXR0cmlidXRlS2V5RHN0Q2hhbm5lbCA9ICZxdW90O2RzdF9jaGFubmVsJnF1b3Q7CiAgQXR0cmlidXRlS2V5RHN0VmVyc2lvbiA9ICZxdW90O2RzdF92ZXJzaW9uJnF1b3Q7CikKLy8gLi4uCiAgLy8gRW1pdCBFdmVudCB3aXRoIENoYW5uZWwgbWV0YWRhdGEgZm9yIHRoZSByZWxheWVyIHRvIHBpY2sgdXAgYW5kCiAgLy8gcmVsYXkgdG8gdGhlIG90aGVyIGNoYWluCiAgLy8gVGhpcyBhcHBlYXJzIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgc3VjY2Vzc2Z1bCByZXR1cm4gc3RhdGVtZW50LgogIGN0eC5FdmVudE1hbmFnZXIoKS5FbWl0RXZlbnRzKHNkay5FdmVudHN7CiAgICBzZGsuTmV3RXZlbnQoCiAgICAgIHR5cGVzLkV2ZW50VHlwZUNoYW5uZWxNZXRhLAogICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkF0dHJpYnV0ZUtleUFjdGlvbiwgJnF1b3Q7b3Blbl9pbml0JnF1b3Q7KSwKICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5BdHRyaWJ1dGVLZXlTcmNDb25uZWN0aW9uLCBjb25uZWN0aW9uSG9wc1swXSksCiAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5SG9wcywgc3RyaW5ncy5Kb2luKGNvbm5lY3Rpb25Ib3BzLCAmcXVvdDssJnF1b3Q7KSksCiAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5T3JkZXIsIG9yZGVyLlN0cmluZygpKSwKICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5BdHRyaWJ1dGVLZXlTcmNQb3J0LCBwb3J0SUQpLAogICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkF0dHJpYnV0ZUtleVNyY0NoYW5uZWwsIGNoYW5lbmxJRCksCiAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5U3JjVmVyc2lvbiwgdmVyc2lvbiksCiAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5RHN0UG9ydCwgY291bnRlcnBhcnR5LkdldFBvcnRJRCgpKSwKICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5BdHRyaWJ1dGVLZXlEc3RDaGFubmVsLCBjb3VudGVycGFydHkuR2V0Q2hhbm5lbElEKCkpLAogICAgICAvLyBUaGUgZGVzdGluYXRpb24gdmVyc2lvbiBpcyBub3QgeWV0IGtub3duLCBidXQgYSB2YWx1ZSBpcyBuZWNlc3NhcnkgdG8gcGFkCiAgICAgIC8vIHRoZSBldmVudCBhdHRyaWJ1dGUgb2Zmc2V0cwogICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkF0dHJpYnV0ZUtleURzdFZlcnNpb24sICZxdW90OyZxdW90OyksCiAgICApLAogIH0pCg=="}}),e._v(" "),t("p",[e._v('These metadata events capture all the "header" information needed to route IBC channel handshake transactions without requiring the client to query any data except that of the connection ID that it is willing to relay.  It is intended that '),t("code",[e._v("channel_meta.src_connection")]),e._v(" is the only event key that needs to be indexed for a passive relayer to function.")]),e._v(" "),t("h3",{attrs:{id:"handling-channel-open-attempts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling-channel-open-attempts"}},[e._v("#")]),e._v(" Handling Channel Open Attempts")]),e._v(" "),t("p",[e._v("In the case of the passive relayer, when one chain sends a "),t("code",[e._v("ChanOpenInit")]),e._v(', the relayer should inform the other chain of this open attempt and allow that chain to decide how (and if) it continues the handshake.  Once both chains have actively approved the channel opening, then the rest of the handshake can happen as it does with the current "naive" relayer.')]),e._v(" "),t("p",[e._v("To implement this behavior, we propose replacing the "),t("code",[e._v("cbs.OnChanOpenTry")]),e._v(" callback with a new "),t("code",[e._v("cbs.OnAttemptChanOpenTry")]),e._v(" callback which explicitly handles the "),t("code",[e._v("MsgChannelOpenTry")]),e._v(", usually by resulting in a call to "),t("code",[e._v("keeper.ChanOpenTry")]),e._v(".  The typical implementation, in "),t("code",[e._v("x/ibc-transfer/module.go")]),e._v(' would be compatible with the current "naive" relayer, as follows:')]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYW0gQXBwTW9kdWxlKSBPbkF0dGVtcHRDaGFuT3BlblRyeSgKICBjdHggc2RrLkNvbnRleHQsCiAgY2hhbktlZXBlciBjaGFubmVsLktlZXBlciwKICBwb3J0Q2FwICpjYXBhYmlsaXR5LkNhcGFiaWxpdHksCiAgbXNnIGNoYW5uZWwuTXNnQ2hhbm5lbE9wZW5UcnksCikgKCpzZGsuUmVzdWx0LCBlcnJvcikgewogIC8vIFJlcXVpcmUgcG9ydElEIGlzIHRoZSBwb3J0SUQgdHJhbnNmZXIgbW9kdWxlIGlzIGJvdW5kIHRvCiAgYm91bmRQb3J0IDo9IGFtLmtlZXBlci5HZXRQb3J0KGN0eCkKICBpZiBib3VuZFBvcnQgIT0gbXNnLlBvcnRJRCB7CiAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYocG9ydHR5cGVzLkVyckludmFsaWRQb3J0LCAmcXVvdDtpbnZhbGlkIHBvcnQ6ICVzLCBleHBlY3RlZCAlcyZxdW90OywgbXNnLlBvcnRJRCwgYm91bmRQb3J0KQogIH0KCiAgLy8gQkVHSU4gTkVXIENPREUKICAvLyBBc3NlcnQgb3VyIHByb3RvY29sIHZlcnNpb24sIG92ZXJyaWRpbmcgdGhlIHJlbGF5ZXIncyBzdWdnZXN0aW9uLgogIG1zZy5WZXJzaW9uID0gdHlwZXMuVmVyc2lvbgogIC8vIENvbnRpbnVlIHRoZSBDaGFuT3BlblRyeS4KICByZXMsIGNoYW5DYXAsIGVyciA6PSBjaGFubmVsLkhhbmRsZU1zZ0NoYW5uZWxPcGVuVHJ5KGN0eCwgY2hhbktlZXBlciwgcG9ydENhcCwgbXNnKQogIGlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuIG5pbCwgZXJyCiAgfQogIC8vIEVORCBPRiBORVcgQ09ERQoKICAvLyAuLi4gdGhlIHJlc3Qgb2YgdGhlIGNhbGxiYWNrIGlzIHNpbWlsYXIgdG8gdGhlIGV4aXN0aW5nIE9uQ2hhbk9wZW5UcnkKICAvLyBidXQgdXNlcyBtc2cuKiBkaXJlY3RseS4K"}}),e._v(" "),t("p",[e._v("Here is how this callback would be used, in the implementation of "),t("code",[e._v("x/ibc/handler.go")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gLi4uCiAgICBjYXNlIGNoYW5uZWwuTXNnQ2hhbm5lbE9wZW5Ucnk6CiAgICAgIC8vIExvb2t1cCBtb2R1bGUgYnkgcG9ydCBjYXBhYmlsaXR5CiAgICAgIG1vZHVsZSwgcG9ydENhcCwgZXJyIDo9IGsuUG9ydEtlZXBlci5Mb29rdXBNb2R1bGVCeVBvcnQoY3R4LCBtc2cuUG9ydElEKQogICAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChlcnIsICZxdW90O2NvdWxkIG5vdCByZXRyaWV2ZSBtb2R1bGUgZnJvbSBwb3J0LWlkJnF1b3Q7KQogICAgICB9CiAgICAgIC8vIFJldHJpZXZlIGNhbGxiYWNrcyBmcm9tIHJvdXRlcgogICAgICBjYnMsIG9rIDo9IGsuUm91dGVyLkdldFJvdXRlKG1vZHVsZSkKICAgICAgaWYgIW9rIHsKICAgICAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYocG9ydC5FcnJJbnZhbGlkUm91dGUsICZxdW90O3JvdXRlIG5vdCBmb3VuZCB0byBtb2R1bGU6ICVzJnF1b3Q7LCBtb2R1bGUpCiAgICAgIH0KICAgICAgLy8gRGVsZWdhdGUgdG8gdGhlIG1vZHVsZSdzIE9uQXR0ZW1wdENoYW5PcGVuVHJ5LgogICAgICByZXR1cm4gY2JzLk9uQXR0ZW1wdENoYW5PcGVuVHJ5KGN0eCwgay5DaGFubmVsS2VlcGVyLCBwb3J0Q2FwLCBtc2cpCg=="}}),e._v(" "),t("p",[e._v("The reason we do not have a more structured interaction between "),t("code",[e._v("x/ibc/handler.go")]),e._v(" and the port's module (to explicitly negotiate versions, etc) is that we do not wish to constrain the app module to have to finish handling the "),t("code",[e._v("MsgChannelOpenTry")]),e._v(" during this transaction or even this block.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("ul",[t("li",[e._v('Expose events to allow "passive" connection relayers.')]),e._v(" "),t("li",[e._v("Enable application-initiated channels via such passive relayers.")]),e._v(" "),t("li",[e._v("Allow port modules to control how to handle open-try messages.")])]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("p",[e._v("Makes channels into a complete application-level abstraction.")]),e._v(" "),t("p",[e._v("Applications have full control over initiating and accepting channels, rather than expecting a relayer to tell them when to do so.")]),e._v(" "),t("p",[e._v("A passive relayer does not have to know what kind of channel (version string, ordering constraints, firewalling logic) the application supports.  These are negotiated directly between applications.")]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("p",[e._v("Increased event size for IBC messages.")]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("p",[e._v("More IBC events are exposed.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[e._v("The Agoric VM's IBC handler currently "),t("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/904b3a0423222a1b32893453e44bbde598473960/packages/cosmic-swingset/lib/ag-solo/vats/ibc.js#L546",target:"_blank",rel:"noopener noreferrer"}},[e._v("accomodates "),t("code",[e._v("attemptChanOpenTry")]),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=c.exports}}]);