// backend/src/app/modules/story_version/enhance_prompt.utils.ts

export const enhancePrompt = (prompt: string, context?: string): string => {
  // Use the following story context if available
  const compressedContext = context ? context : "No previous context";

  const metaPrompt = `You are a creative writing assistant. Rewrite the following story prompt to be more vivid, specific, and engaging. Add a character name, setting details, and a central conflict. Return ONLY the enhanced prompt, nothing else. Do not add any explanation or prefix.

Context: ${compressedContext}

Prompt: ${prompt}`;

  return metaPrompt;
};