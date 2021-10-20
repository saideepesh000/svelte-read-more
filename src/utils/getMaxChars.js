export const getMaxChars = (
    maxCharacters,
    isOpen,
    children,
    text
) => {
        console.log('maxCharacters', maxCharacters)
        if (maxCharacters) {
            if (isOpen) {
                text = children
            } else {
                text = children.substring(0, maxCharacters)
            }
            return text
        }
};