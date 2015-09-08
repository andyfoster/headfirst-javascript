var inmates = [
  {name: "Steve", serial: 19827, risk: "high", gang: "white power"},
  {name: "Mongrel", serial: 19862, risk: "medium", gang: "mongrel mob"},
  {name: "Pete", serial: 19830, risk: "low", gang: "unaffiliated"},
  {name: "Bob", serial: 19810, risk: "high", gang: "white power"}
];

function notAllowedVisitors(inmate) {
  if (inmate.risk === "high") {
    return true;
  }
  return false;
}

function notAllowedCutlery(inmate) {
    return true;
}
