import {
    createAccount,
    importAccount,
    getAccount
}
from "../src/wallet";

// example to create a new wallet account
async function createWalletAccount() {
    const account = await createAccount();
    console.log(account);
}

// createWalletAccount();  


// example to import an existing wallet account with menomic family maximum shoulder all reduce trash across beach gun law flame bird
async function importWalletAccount() {
    const account = await importAccount("family maximum shoulder all reduce trash across beach gun law flame bird");
    console.log(account);
}

//importWalletAccount();

// example for getAccount
async function getAccountInfo() {
    const account = await getAccount("akash1ek67a6maje35nruku3x7np9ewaq2msw7xf3cmt");
    console.log(account);
}

getAccountInfo();
