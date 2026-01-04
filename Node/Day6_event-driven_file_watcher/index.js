const fs = require("fs");
const EventEmitter = require("events");

const watcher = new EventEmitter();
const dir = "./watch-dir";
let files = new Set(fs.readdirSync(dir));

fs.watch(dir, (event, filename) => {
  if (!filename) return;

  const exists = fs.existsSync(`${dir}/${filename}`);

  if (exists && !files.has(filename)) {
    files.add(filename);
    watcher.emit("added", filename);
  } else if (exists && files.has(filename)) {
    watcher.emit("modified", filename);
  } else if (!exists && files.has(filename)) {
    files.delete(filename);
    watcher.emit("deleted", filename);
  }
});

const log = (type, file) =>
  console.log(`[${new Date().toISOString()}] ${type}: ${file}`);

watcher.on("added", (f) => log("ADDED", f));
watcher.on("modified", (f) => log("MODIFIED", f));
watcher.on("deleted", (f) => log("DELETED", f));
watcher.on("error", (e) => console.error(e.message));