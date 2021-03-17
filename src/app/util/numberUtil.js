export const formatNumber = Intl.NumberFormat('en', { notation: 'compact' }).format
export const formatNumberWithComma = Intl.NumberFormat('en', { useGrouping: true }).format
