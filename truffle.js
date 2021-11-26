module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "999", // match any network id
      from: "0xa0df350d2637096571F7A701CBc1C5fdE30dF76A", // account address from which to deploy
      gas: 6721975,
    },
    upt: { // Unique Public testnet

      provider: () => new HDWalletProvider({
          privateKeys: ["b8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329"],  
          providerOrUrl: "https://rpc-opal.unique.network/"}),/* http://35.157.131.180:9973/  http://15.236.177.137:9833/*/
          network_id: 8888,
          gasPrice: '0x01'
          /** Eth: 0xf1a477099Ef8aA0f096be09A4CBBA858da993c41  
           * pk eth 3f13f692c4b88b5a6a317e6583623443658e37f9b7cbcbc54267b7b4d1c3f54c
           *             * 
           * eth 0xa0df350d2637096571F7A701CBc1C5fdE30dF76A  
           * pk 0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329
           * polka 5H9kK46KadoBKXGbhufTcB6ujAMfuQYt7zGB9rjEV6KumKzi
  * ganache-cli -m "clutch captain shoe salt awake harvest setup primary inmate ugly among become" -i 999 -p 8545 -u 0xa0df350d2637096571F7A701CBc1C5fdE30dF76A --db ../ganache_local3 --allowUnlimitedContractSize  -g 0 -e 1000
  */
        }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
