// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

let rgb = (r, g, b) => {
  return (
    "#" +
    zeroAdder(r.toString(16)) +
    zeroAdder(g.toString(16)) +
    zeroAdder(b.toString(16))
  );
};

let zeroAdder = (x) => (x == 0 ? "00" : x);
let hex = (hex) => {
  let red = parseInt(hex[1] + hex[2], 16);
  let green = parseInt(hex[3] + hex[4], 16);
  let blue = parseInt(hex[5] + hex[6], 16);

  return `rgb(${red},${green},${blue})`;
};

let colorCodefinal = (x, y, z) => (x[0] === "#" ? hex(x) : rgb(x, y, z));

let result = colorCodefinal("#776800");
let result2 = colorCodefinal(141, 104, 146);
console.log("hex to rgb", result);
console.log("rgb to hex", result2);

