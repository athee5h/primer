(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"phase-1-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-1-setup"}},[e._v("#")]),e._v(" Phase 1 setup")]),e._v(" "),t("p",[e._v("In order to complete the primer challenges, you will have to go through a setup that allows you to install the Desmos CLI as well as to connect it to a full node and get your Desmos account. If you have already done so, you can skip this step. Otherwise, following you will find a detailed description of the process.")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("In order to complete the challenges of the first phase, you will have to satisfy the following requirements first:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Having Go installed."),t("br"),e._v("\nIf you do not have it, you can get it at the following link: "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing Go"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Having Git installed."),t("br"),e._v("\nIf you do not have it yet, you can get it here: "),t("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Downloads"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Having Git setup with GitHub."),t("br"),e._v("\nIf you have not done it yet, you can connect Git with GitHub following these procedure: "),t("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/set-up-git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Set up Git"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),t("p",[e._v("Once all the requirements have been satisfied, you can setup your machine to start completing the challenges.")]),e._v(" "),t("h3",{attrs:{id:"_1-making-sure-go-is-installed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-making-sure-go-is-installed"}},[e._v("#")]),e._v(" 1. Making sure Go is installed")]),e._v(" "),t("p",[e._v("Execute the following command:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go version\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The output should look like")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go version go1.12.10 linux/amd64\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Please make sure the version is "),t("code",[e._v("1.12.10")]),e._v(" or later.")]),e._v(" "),t("h3",{attrs:{id:"_2-installing-the-desmos-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-installing-the-desmos-cli"}},[e._v("#")]),e._v(" 2. Installing the Desmos CLI")]),e._v(" "),t("p",[e._v("The Desmos Command Line Interface (in short, "),t("em",[e._v("CLI")]),e._v(") is the tools that allows you to perform Desmos-related operations using a terminal on your machine. It connects to a full node of the Desmos Chain allowing you to easily create, sign and send transactions to it.")]),e._v(" "),t("p",[e._v("In order to install it, please execute the following commands:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/desmos-labs/desmos.git $GOPATH/src/github.com/desmos-labs/desmos\ncd $GOPATH/src/github.com/desmos-labs/desmos\ngit checkout -b phase-1 tags/v0.1.0\nmake install\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Once all the above commands have completed successfully, you should be able to execute the following command:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("desmoscli version\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The result should be:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("0.1.0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-connecting-the-cli-to-a-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-connecting-the-cli-to-a-full-node"}},[e._v("#")]),e._v(" 3. Connecting the CLI to a full node")]),e._v(" "),t("p",[e._v("Once the CLI has been properly installed, to allow it reading and writing the chain state, we need to connect it to our public full node. To do so, please run:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("desmoscli config node http://34.74.131.47:26657\ndesmoscli config chain-id morpheus-1000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("The result should look something like")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("configuration saved to .desmoscli/config/config.toml\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("To make sure everything is done properly, try running:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("desmoscli query block 1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The output should be")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{"block_meta":{"block_id":{"hash":"CC24512EEE121FA27FA44A2CC9EE3CD27A41E5FD0F018DD7E1DCC83E6C2E52F0","parts":{"total":"1","hash":"F009ABF3312DEF71052DC7348368329D131C1BC26EA566ED969E01321DB5D773"}},"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-1000","height":"1","time":"2019-12-11T04:42:14.03384Z","num_txs":"0","total_txs":"0","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","next_validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"6435B4DF8C20D126978E030E946096066ED46050"}},"block":{"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-1000","height":"1","time":"2019-12-11T04:42:14.03384Z","num_txs":"0","total_txs":"0","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","next_validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"6435B4DF8C20D126978E030E946096066ED46050"},"data":{"txs":null},"evidence":{"evidence":null},"last_commit":{"block_id":{"hash":"","parts":{"total":"0","hash":""}},"precommits":null}}}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-creating-your-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-creating-your-address"}},[e._v("#")]),e._v(" 4. Creating your address")]),e._v(" "),t("p",[e._v("In order to perform operations on the Desmos chain, you will need a Desmos address. These are unique random-generated accounts based on 24 words-long mnemonic phrases.")]),e._v(" "),t("p",[e._v("In order to generate a new address, run the following commands:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("desmoscli keys add <your-name>\n\n# E.g. desmosli keys add jack  \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("After typing a password and the confirmation, the result should look like the following:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- name: jack\n  type: local\n  address: desmos1uht7hsl88wr002ses4qf5k24nshdyxukv3r2p8\n  pubkey: desmospub1addwnpepqvwf7qcdv97prfwv6cp20c5pgre4j8ln9y0tqygj4ut36xndd9srkrxhk3e\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nconduct never unit tobacco song hurt pepper silk hundred merit cheese bulb electric wink swarm auto rule afford taxi lounge local bundle trouble kitten\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Make sure you write somewhere safe the mnemonic phrase that is returned to you as this will be the only way to later recover the account if you need to do so. Loosing this phrase means loosing access to all your funds.")])]),e._v(" "),t("h3",{attrs:{id:"_5-receive-some-upotic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-receive-some-upotic"}},[e._v("#")]),e._v(" 5. Receive some "),t("code",[e._v("upotic")])]),e._v(" "),t("p",[e._v("Inside our testnets the tokens will be:")]),e._v(" "),t("ul",[t("li",[e._v("Daric (namely "),t("code",[e._v("udaric")]),e._v(") as the staking token")]),e._v(" "),t("li",[e._v("Potic (namely "),t("code",[e._v("upotic")]),e._v(") as the fee token")])]),e._v(" "),t("p",[e._v("To fully active your account, what you need to do is go to our "),t("a",{attrs:{href:"https://faucet.desmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("faucet page"),t("OutboundLink")],1),e._v(" and request come "),t("code",[e._v("upotic")]),e._v(" inserting your address. If you forgot it you can get it by running")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("desmoscli keys show <your-key-name> --address\n\n# Example \n# desmoscli keys show jack --address \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("This will return the associated address such as")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("desmos1gmu4uevcvwfcuu43yp27gcv4ngxuh9sxfpv3er\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("After you've put it into the faucet you will receive some tokens.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Welcome!")]),e._v(" "),t("p",[e._v("Congratulations, you successfully completed the setup of your Desmos account! You can now go and start from the "),t("router-link",{attrs:{to:"/phases/phase-1/challenges/level-1.html"}},[e._v("Level 1 challenges")]),e._v(" to start earning some Desmos Points!")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);