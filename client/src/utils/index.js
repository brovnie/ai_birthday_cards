import { prompts } from "../constans/prompts";

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    
    return randomPrompt;
}