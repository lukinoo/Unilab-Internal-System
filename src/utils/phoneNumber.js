const getLastDigitIndex = (string) => {
  for (let i = string.length - 1; i >= 0; i--) {
    if (/\d/.test(string[i])) return i;
  }
};

export const handleNumberChange = (e, patterns, countryCode) => {
  const value = e.target.value;
  const numberString = value.split(" ").join("").replaceAll("-", "");
  let newValue = patterns[countryCode];

  // replace each (-) symbol with the supplied digit
  for (const char of numberString) {
    if (!/\d/.test(char)) continue;
    newValue = newValue.replace("-", char);
  }

  if (newValue === patterns[countryCode]) newValue = "";

  let currentCarretIndex = e.target.selectionStart;
  e.target.value = newValue;

  let prevCaretIndex = getLastDigitIndex(value) + 1;
  let nextCarretIndex = getLastDigitIndex(newValue) + 1;

  // if the caret was moved to a previous point stop it from pointing to the last digit
  if (currentCarretIndex >= prevCaretIndex) {
    return e.target.setSelectionRange(nextCarretIndex, nextCarretIndex);
  }

  // move caret if it's not pointing at a digit
  while (
    !/\d/.test(newValue[currentCarretIndex]) &&
    currentCarretIndex < newValue.length
  ) {
    currentCarretIndex += 1;
  }

  e.target.setSelectionRange(currentCarretIndex, currentCarretIndex);
};
