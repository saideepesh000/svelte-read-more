export const getMaxCharacters = (
    maxCharacters,
    isOpen,
    children,
    text
) => {
        if (maxCharacters) {
            if (isOpen) {
                text = children
            } else {
                text = children.substring(0, maxCharacters)
            }
            return text
        }
};


export const isFullText = (truncatedText, text) => {
    return (
        truncatedText &&
        truncatedText.split('').filter((c) => c !== ' ').length ===
            text.split('').filter((c) => c !== ' ').length
    );
};