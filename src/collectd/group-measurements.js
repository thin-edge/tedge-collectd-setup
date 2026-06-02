const utf8 = new TextDecoder();

class State {
    static batches_per_topic = {}
}

export function onMessage(message, context) {
    let measurement = JSON.parse(utf8.decode(message.payload));
    let batch = State.batches_per_topic[message.topic] || {};

    Object.assign(batch, measurement);
    State.batches_per_topic[message.topic] = batch;

    return []
}

export function onInterval(time, context) {
    let messages = [];
    for (const [topic, measurement] of Object.entries(State.batches_per_topic)) {
        messages.push({
            topic,
            payload: JSON.stringify(measurement)
        });
    }

    State.batches_per_topic = {}
    return messages
}
