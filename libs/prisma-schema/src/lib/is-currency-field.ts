export function isCurrencyField(name: string) {
  return new RegExp(
    /(cost|price|total|subtotal|tax|salesPrice|amount|rate|value|fee|revenue|expense|budget|discount|debit|credit|finance|currency|money|usd|eur|gbp|jpy)$/i
  ).test(name);
}
