/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

  /**
   * Format number for currencies
   * @param {number} value The number to format
   * @param {string} locale Default: "en-US"
   * @param {string} currency Default: "USD"
   * @returns {string} The formatted number for example: $5.50
   */
 const formatter = (value, locale = "en-US", currency = "USD") => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formattedValue;
};

/**
 * Log the total price
 * @param {number} sum The number sum
 * @param {number} percentage The percentage: 4, 16, 18, etc
 * @param {string} locale Default: "en-US"
 * @param {string} currency Default: "USD"
 * @returns {void} void
 */
const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
    Sum before tip: ${formatter(sum, locale, currency)}
    Tip percentage: ${percentage}%
    Tip:            ${formatter(tip.toFixed(2), locale, currency)}
    Total:          ${formatter(total.toFixed(2), locale, currency)}
  `);
};

tipCalculator(29.95, 18, "es-ES", "EUR");
tipCalculator(24.50, 16, "es-MX", "MXN");
tipCalculator(18.50, 8, "nb-NO", "NOK");
tipCalculator(5.50, 8, "en-US", "USD");
