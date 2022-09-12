import TOML from "@ltd/j-toml";

const Toml = () => {
  const source = `
      I_am_normal    = 'I_am_normal'
      hasOwnProperty = 'hasOwnProperty'
      constructor    = 'constructor'
      __proto__      = '__proto__'
`;

  const rootTable = TOML.parse(source);

  return (
    <div>
      <p>{rootTable.I_am_normal}</p>
      <p>{rootTable.hasOwnProperty}</p>
      <p>{rootTable.constructor}</p>
      <p>{rootTable.__proto__}</p>
    </div>
  );
};

export default Toml;
