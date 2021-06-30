import { createAccount, getAccount } from "../wallet";

async function create([password, password2]: any) {
  if (password !== password2 || !password) {
    console.log("Passwords don't match.");
  }
  const walletInfo = await createAccount(password);
  console.log(walletInfo);
}

async function get([address]: any) {
  const wallet = await getAccount(address);
  console.log(wallet);
}

create.description = "password1 password2\t\tcreate a new wallet account";

const wallet = { create, get };
export { wallet };
