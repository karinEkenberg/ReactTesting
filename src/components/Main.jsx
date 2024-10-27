import Counter from "./Counter";
import Calculator from "./Calculator";
import Box from "./Box";

const Main = () => {
  return (
    <main className="p-4">
      <h2 className="text-xl font-bold mb-4">Welcome!</h2>
      <p>Just trying out some React here</p>

      <Counter />
      <Calculator />
      <Box />
    </main>
  );
};

export default Main;
