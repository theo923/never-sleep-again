export const validateLink = (link: string) => {
  var httpProtocol;

  try {
    httpProtocol = new URL(link).protocol;
    if (!Boolean(httpProtocol === "http:" || httpProtocol === "https:"))
      throw "";
  } catch {
    return false;
  }

  return true;
};
