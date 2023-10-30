export const epochToDate = function(epochNumber) {
    const date = new Date(epochNumber * 1000);
    return date;
}
