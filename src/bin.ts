#!/usr/bin/env node
/**
 * Simple CLI Interface
 * Keep the library small
 * Don't ship an extra module just for CLI
 */
import * as cert from "./commands/cert";
import * as wallet from "./commands/wallet";

const pkg = require("../package.json");
const [nodePath, scriptPath, command, subcommand, ...rest] = process.argv;

const commands: any = { ...cert, ...wallet };
(async () => {
  if (commands[command] && commands[command][subcommand]) {
    await commands[command][subcommand](rest);
    process.exit(0);
  } else if (commands[command] && typeof commands[command] === "function") {
    await commands[command](rest);
    process.exit(0);
  }

  console.log(`version: ${pkg.version}`);
  console.log(``);
  console.log(`Help`);
  Object.keys(commands).forEach((command) => {
    const cmd = commands[command];
    if (typeof cmd === "function" && cmd.description) {
      console.log(`${command}\t\t${cmd.description}`);
    } else {
      Object.keys(cmd).forEach((subcommand) => {
        const sCmd = cmd[subcommand];
        if (typeof sCmd === "function" && sCmd.description) {
          console.log(`${command} ${subcommand}\t\t${sCmd.description}`);
        }
      });
    }
  });
})();
