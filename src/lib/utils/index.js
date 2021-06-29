export const translate = (key, translateFn = null) => {
  let translatedText = key;
  if (translateFn) {
    translatedText = translateFn(key);
    if (typeof translatedText !== "string") {
      throw new Error("translateFn expects a string translation");
    }
  }

  return translatedText;
};
