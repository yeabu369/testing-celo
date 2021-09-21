import { newKit } from "@celo/contractkit";

const kit = newKit("https://alfajores-forno.celo-testnet.org");

const web3 = kit.web3;

const addr = "0x56A5798063007FB15a0A5CAEB02a0039c8Cc8203";
const balance = await web3.eth.getBalance(addr);

console.log(balance);


