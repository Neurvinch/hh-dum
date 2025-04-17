import {Client} from "groq-sdk"


export const groqClinet  = new Client ( {
    apiKey : "",
    baseUrl : 'https://api.groq.com/v1'
})

export async function fetchPuzzle (zoneId) {
    const {text} = await groqClinet.query({
        model : 'narrative',
        prompt: `Generate a quick zone-capture puzzle for zone ${zoneId}`
    });

    return text ;
}