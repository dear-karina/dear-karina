export function getCurrentTime(): string {
    const now = new Date();
    now.setHours(now.getHours() + 7); // Adding 7 hours to get GMT+7 time

    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    return `${hours}:${minutes}`;
}
