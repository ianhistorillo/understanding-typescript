type Combinable = number | string; // type aliases / Custom types

function combine(
  input1: Combinable | string, // | operator stands for union types
  input2: number | string,
  resultConversion: "as-number" | "as-text" // Literal types sets a single type at the same time specific value.
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("30", "26", "as-number");
console.log(combinedNames);
