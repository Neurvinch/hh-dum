import Groq  from "groq-sdk"


export const groqClinet  = new Groq( {
    apiKey : "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",
   
})

export async function fetchPuzzle (zoneId) {
    const {text} = await groqClinet.query({
        model : 'narrative',
        prompt: `Generate a quick zone-capture puzzle for zone ${zoneId}`
    });

    return text ;
}