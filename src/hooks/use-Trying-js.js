const useTryingJ = () => {
  const number = 120034701;
  console.log("number", number);
  const stringNumber = number.toString();
  console.log("stringNumber", stringNumber);
  const StringArray = stringNumber.split("");
  const noZeroString = StringArray.filter((a) => a !== "0");
  const ZeroString = StringArray.filter((a) => a === "0");
  const resultString = [...noZeroString, ...ZeroString];
  console.log(resultString.join(""));
};

export default useTryingJ;
