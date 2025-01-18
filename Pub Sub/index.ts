import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => {
  console.error("Redis client error:", err);
});

async function publishMessage() {
  await client.connect();
  const channel = "my_channel";
  const message = {
    id: Math.floor(Math.random() * 1000000),
    timestamp: new Date().toISOString(),
    data: "Hello, Pub Sub!",
  };

  await client.publish(channel, JSON.stringify(message)).then(() => {
    console.log(`Message sent to ${channel}`);
  });
  client.disconnect();
}

setInterval(publishMessage, 2000);
