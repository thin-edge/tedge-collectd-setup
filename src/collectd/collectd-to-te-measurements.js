// Translate a collectd measurement into a thin-edge measurement

const utf8 = new TextDecoder();

export function onMessage(message, context) {
  const { topic = "te/device/main///m/collectd" } = context.config;
  const groups = message.topic.split("/");
  const data = utf8.decode(message.payload).split(":");

  if (groups.length < 4) {
    throw new Error("Not a collectd topic");
  }

  if (data.length < 2) {
    throw new Error("Not a collectd payload");
  }

  let group = groups[2];
  let measurement = groups[3];
  let time = data[0];
  let values = data.slice(1);
  let output = [];

  values.forEach((value, index) => {
    let key = measurement;
    if (values.length > 1) {
      key = `${measurement}_val${index}`;
    }
    output.push({
      time: time * 1000,
      topic,
      payload: `{"time": ${time}, "${group}": {"${key}": ${value}}}`,
    }); 
  });

  return output;
}
