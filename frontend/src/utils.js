export const truncateText = (input) => input.length > 35 ? `${input.substring(0, 35)}...` : input;
