export function BootNotification(websocket) {
  if (!websocket || !websocket.send) {
    console.warn(
      "No websocket connection found for sending BootNotification... aborting."
    );
    return;
  }

  var BN = JSON.stringify([
    2,
    randomMessageId(),
    "BootNotification",
    {
      chargingStation: {
        serialNumber: "SOME-serial-NUMBER-123",
        model: "MGWB Fake",
        vendorName: "Unicorn GmbH",
        firmwareVersion: "1.2.3",
      },
      reason: "PowerUp",
    },
  ]);

  console.log("Sending BootNotification.");
  websocket.send(BN);
  console.log("BootNotification sent!");
}

function randomMessageId() {
  const allowedChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (var i = 0; i < 36; i++) {
    id += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  return id;
}
