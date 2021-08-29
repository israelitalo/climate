export const toFixedTemp = (temp = undefined) => {
    if (!temp) {
        return null;
    }

    return temp.toFixed();
}