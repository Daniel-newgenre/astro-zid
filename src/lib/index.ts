export function getLocalePrefix(url: string) {
    // Split the URL by "/" and filter out empty strings
    const parts = url.split('/').filter(Boolean);
    // Return the first part, which is the prefix
    return parts[0] || '';
}