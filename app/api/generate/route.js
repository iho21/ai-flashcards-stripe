import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator.

1. Identify the key concepts or topics to be covered by the flashcards.
2. Break down each concept into specific facts, definitions, or questions.
3. Write a clear and concise question or prompt on one side of the flashcard.
4. Write the corresponding answer, explanation, or definition on the opposite side of the flashcard.
5. Ensure that the information on each card is focused and not too dense.
6. Use simple and clear language to avoid confusion.
7. Organize the flashcards by topic or category for easier review.
8. Only Generate 10 flashcards.

Remeber, the goal is to facilitate effective learning and retention of inormation through these flashcards.

Return in the following JSON format
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`

export async function POST(req) {
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages: [
            {role: 'system', content: system},
            {role: 'user', content: data},
        ],
        model: "gpt-4o",
        response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards)
}