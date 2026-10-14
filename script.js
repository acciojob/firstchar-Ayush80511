
function firstChar(text) {
    let trimmedText = text.trim();

    if (trimmedText.length === 0) {
        return "";
    }

    return trimmedText.charAt(0);
}

