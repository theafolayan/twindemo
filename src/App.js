/** @jsxImportSource @emotion/react */
import "twin.macro";

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
  return (
    <div>
      <DemoTestimonial />
    </div>
  );
}

export default App;
