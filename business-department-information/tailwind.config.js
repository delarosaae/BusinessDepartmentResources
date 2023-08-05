/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './src/components/Tailwind/Flowbite/ButtonFilter.js',
    'src/components/Tailwind/Flowbite/TimeLineComponent.js',
    'src/components/TailwindAndMaterialUI/FilterLabelTransitionDuration.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
        },
  },
  plugins: [require('flowbite/plugin')],
  corePlugins: {
    preflight: false,
  }
}


