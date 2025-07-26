import { convertToModelMessages, streamText, UIMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export default defineLazyEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig();
  const apiKey = runtimeConfig.NUXT_OPENAI_API_KEY;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "OpenAI API key is not set",
    });
  }

  const openai = createOpenAI({ apiKey });

  return defineEventHandler(async (event) => {
    const { messages }: { messages: UIMessage[] } = await readBody(event);

    const result = streamText({
      model: openai("gpt-4o"),
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  });
});
