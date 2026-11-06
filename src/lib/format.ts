/** Format every displayed price as Indonesian Rupiah. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

/** Percentage discount between an old and current price. */
export function discountPercent(price: number, priceOld?: number): number {
  if (!priceOld || priceOld <= price) return 0
  return Math.round(((priceOld - price) / priceOld) * 100)
}
