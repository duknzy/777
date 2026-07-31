function formatChemicalFormula(text) {
  if (!text) return "";

  // 1. Extract KaTeX math blocks ($...$) into placeholders so regex won't touch HTML attributes
  const mathPlaceholders = [];
  let processed = text.replace(/\$([^\$]+)\$/g, function(match, mathStr) {
    const placeholder = `___MATH_PLACEHOLDER_${mathPlaceholders.length}___`;
    // Mock KaTeX output with aria-hidden="true"
    const fakeKatexHtml = `<span class="katex"><span class="katex-html" aria-hidden="true">${mathStr}</span></span>`;
    mathPlaceholders.push(fakeKatexHtml);
    return placeholder;
  });

  // 2. Chemical Caret notation e.g. 10^-14
  processed = processed.replace(/\^([0-9\+\-]+)/g, '<sup>$1</sup>');

  // 3. Ions with numbers and sign: e.g. Fe3+, Cu2+, SO42-, Cl-, OH-, Na+
  processed = processed.replace(/([A-Z][a-z]?|\))(\d*)([\+\-])/g, (match, symbol, num, sign) => {
    return symbol + '<sup>' + (num || '') + sign + '</sup>';
  });

  // 4. Isotopes e.g. 12C, 14C at start or isolated
  processed = processed.replace(/(^|[\s\(\[\{])(\d+)([A-Z][a-z]?)(?![a-z0-9])/g, '$1<sup>$2</sup>$3');

  // 5. Chemical formula subscript numbers: e.g. H2O -> H₂O, CuSO4 -> CuSO₄
  processed = processed.replace(/([A-Z][a-z]?|\))(\d+)/g, '$1<sub>$2</sub>');

  // 6. Restore math placeholders
  mathPlaceholders.forEach((html, i) => {
    processed = processed.replace(`___MATH_PLACEHOLDER_${i}___`, html);
  });

  return processed;
}

console.log("Q:", formatChemicalFormula("【第6章】25℃において、水中の [H+] と [OH-] の積 Kw の値はいくつか？"));
console.log("Ans:", formatChemicalFormula("$K_w = 1.0 \\times 10^{-14} \\text{ mol}^2/\\text{L}^2$"));
