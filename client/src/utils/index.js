import {surpriseMePrompts} from '../constants';

export const getRandomPrompt = (prompt) => {
    const randIdx = Math.floor(Math.random() * surpriseMePrompts.length);
    const randPrompt = surpriseMePrompts[randIdx];

    if(randPrompt === prompt) return getRandomPrompt(prompt);

    return randPrompt;
}