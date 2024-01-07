import { Connection,PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com")
console.log("Connected to the devnet network!")

const account_Address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN")
const account_Balance= await connection.getBalance(account_Address)

console.log(`The balance of the account at ${account_Address} is ${account_Balance} lamports`); 
