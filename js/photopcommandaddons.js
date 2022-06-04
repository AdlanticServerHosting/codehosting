console.log("Photop Command Addons V1 Loaded! Have fun!")

const uptime = "0"

function uptime() {
	while (true) {
  const uptime = uptime + "1"
	client.editor().setDescription(uptime + " | Boosted by Photop Addons").save()
  }
}

function runuptime() {
setInterval(uptime, 1000)
}
