function postcodeValidation(string) {
  if (typeof string === "number" && string.toString().length === 4) {
    return { res: true, msg: "This is a correct postcode." };
  } else {
    return { res: false, msg: "Please enter a 4-digit postcode." };
  }
}

module.exports = postcodeValidation;
