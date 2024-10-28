import Counter from "./Counter";
import Calculator from "./Calculator";
import Box from "./Box";

const Main = () => {
  return (
    <main className="p-4">
      <section className="widescreen:section-min-height tallscreen:section-min-height py-20">
        <h2 className="text-xl font-bold mb-4">Welcome!</h2>
        <div className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 ">
          <p>Just trying out some React here</p>
          <img className="w-80 shadow-sm h-auto" src="/code.jpg" alt="Code" />
        </div>
      </section>

      <Counter />
      <Calculator />
      <Box />
    </main>
  );
};

export default Main;
