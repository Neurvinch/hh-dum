import  Fluvio from "@fluvio/client"

let  producer;



export async function sendGameEvent(topic, event) {
    if(!producer) {
        const fluvio = await Fluvio.connect();
        producer = await fluvio.topicProducer(topic);
    }

    await producer.send({ key : event.playerId, value : JSON.stringify(event)})
} 