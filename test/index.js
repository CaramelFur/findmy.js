import { FindMy } from 'findmy.js';
import prompt from 'prompt';

async function main() {
  prompt.start();
  const result = await prompt.get({
    properties: {
      username: {
        description: 'Apple ID',
      },
      password: {
        description: 'Password',
        hidden: true,
      },
    },
  });

  console.log('Logging in...');
  const findmy = new FindMy(result.username, result.password);
  await findmy.authenticate();
  const devices = await findmy.getDevices();

  // For each device print name, battery and location
  console.log('---');
  devices.forEach((device) => {
    console.log(`Name: ${device.name}`);
    console.log(`Model: ${device.deviceDisplayName}`);
    console.log(`Battery: ${device.batteryLevel * 100}%`);
    console.log(
      `Location: ${device.location.latitude}, ${device.location.longitude}`,
    );
    console.log('---');
  });
}

main();
