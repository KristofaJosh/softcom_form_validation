/**
 * Creates space separated values for card input
 * @param {number} text - number to be formatted
 * @return {string}
 */
export const cardValueFormatter = (text) => {
    if (text) {
        let textParts = text.toString().split('.');
        textParts[0] = textParts[0].replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
        return textParts.join('.');
    }
    return '';
};
