/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { styled } from "twin.macro";
// import useState from React

function DemoTestimonial() {
  return (
    <div tw="md:flex m-12 bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        tw="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div tw="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p tw="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <div tw="font-medium">
          <div tw="text-blue-600">Sarah Dayan</div>
          <div tw="text-gray-500">Staff Engineer, Algolia</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const AppButton = () => <button tw="bg-blue-200"> Click Me </button>;
  const ConditionalInput = ({ hasError }) => (
    <input css={[tw`border p-4`, hasError && tw`border-red-700`]} />
  );

  const PrimaryButton = tw.button`bg-blue-800 text-white px-6 py-2 m-6 rounded-md hover:bg-blue-600`;
  const OtherButton = tw(PrimaryButton)`bg-purple-600 hover:bg-purple-200`;

  const [errorPresent, setErrorPresent] = useState(true);
  return (
    <div>
      <button tw="bg-blue-600 text-white p-3 hover:bg-blue-400 hover:text-gray-300">
        {" "}
        Call to Action{" "}
      </button>
      <br></br>
      <div tw="m-3 flex flex-col">
        <ConditionalInput hasError={errorPresent} />
        <button
          tw="bg-green-500 mt-3 p-2 text-white "
          onClick={() => setErrorPresent(!errorPresent)}
        >
          {" "}
          Toggle Error Present
        </button>
      </div>
      <AppButton />
      <PrimaryButton> Primary Button</PrimaryButton>
      <OtherButton> Other Button</OtherButton>
      {/* <Input /> */}
      {/* </div> */}
      <DemoTestimonial />
    </div>
  );
}

export default App;
