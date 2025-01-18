import { createClient } from "redis";
const client = createClient();

client.on("error", (err) => {
  console.error("Redis client error:", err);
});

async function subscribeToChannel() {
  await client.connect();

  const channel = "my_channel";
  client.subscribe(channel, (message) => {
    console.log(`Message received from ${channel}: ${JSON.stringify(message)}`);
  });

  console.log(`Subscribed to ${channel}`);
}

subscribeToChannel();
