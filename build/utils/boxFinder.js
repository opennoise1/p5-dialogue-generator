import React from "../_snowpack/pkg/react.js";
const boxDirectory = {
  Akechi: true,
  Ann: true,
  Futaba: true,
  Kamoshida: true,
  Kaneshiro: true,
  Madarame: true,
  Mishima: true,
  Nakanohara: true,
  Okumura: true,
  Sae: true,
  Shido: true,
  Shiho: true,
  Sumire: true,
  Tanaka: true
};
const menuFinder = (char) => {
  switch (char) {
    case "Akechi": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Akechi"
      }, "Akechi"), /* @__PURE__ */ React.createElement("option", {
        value: "Cognitive Akechi"
      }, "Cognitive Akechi"));
    }
    case "Ann": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Ann"
      }, "Ann"), /* @__PURE__ */ React.createElement("option", {
        value: "Princess Ann"
      }, "Princess Ann"));
    }
    case "Futaba": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Futaba"
      }, "Futaba"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Futaba"
      }, "Shadow Futaba"));
    }
    case "Kamoshida": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Kamoshida"
      }, "Kamoshida"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Kamoshida"
      }, "Shadow Kamoshida"));
    }
    case "Kaneshiro": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Kaneshiro"
      }, "Kaneshiro"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Kaneshiro"
      }, "Shadow Kaneshiro"));
    }
    case "Madarame": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Madarame"
      }, "Madarame"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Madarame"
      }, "Shadow Madarame"));
    }
    case "Mishima": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Mishima"
      }, "Mishima"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Mishima"
      }, "Shadow Mishima"));
    }
    case "Nakanohara": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Nakanohara"
      }, "Nakanohara"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Nakanohara"
      }, "Shadow Nakanohara"));
    }
    case "Okumura": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Okumura"
      }, "Okumura"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Okumura"
      }, "Shadow Okumura"));
    }
    case "Sae": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Sae"
      }, "Sae"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Sae"
      }, "Shadow Sae"));
    }
    case "Shido": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Shido"
      }, "Shido"), /* @__PURE__ */ React.createElement("option", {
        value: "Shadow Shido"
      }, "Shadow Shido"));
    }
    case "Shiho": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Shiho"
      }, "Shiho"), /* @__PURE__ */ React.createElement("option", {
        value: "Cognitive Shiho"
      }, "Cognitive Shiho Suzui"));
    }
    case "Sumire": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Sumire"
      }, "Sumire"), /* @__PURE__ */ React.createElement("option", {
        value: "Kasumi"
      }, "Kasumi"));
    }
    case "Tanaka": {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
        value: "Tanaka"
      }, "Tanaka"), /* @__PURE__ */ React.createElement("option", {
        value: "Shady Commodities Tanaka"
      }, "Shady Commodities Tanaka"));
    }
  }
};
export {boxDirectory, menuFinder};
