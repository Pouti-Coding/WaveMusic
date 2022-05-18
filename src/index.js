const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();

const express = require("express")
const web = express()

web.listen(3000, () => {})
web.get("/", (req, res) => {
  res.send("Đang hoạt động!")
})

module.exports = client; 
client._loadPlayer()
client._loadClientEvents()
client._loadNodeEvents()
client._loadPlayerEvents()
client._loadCommands()
client._loadSlashCommands()
client.connect()

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});

process.on('multipleResolves', (type, promise, reason) => {
    console.log(type, promise, reason);
});
