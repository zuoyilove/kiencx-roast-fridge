import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge rebooted for a firmware update at 2am and forgot how to be cold — three grand of touchscreen that can't keep the butter solid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
console.log(line);
