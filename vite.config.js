import react from '@vitejs/plugin-react';

export default {
   plugins: [react()],
   esbuild: {
    loader: 'jsx',
    include: /\.jsx?$/,
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.jsx', // Your entry point
      name: 'MessageWidget', // The name of your library
      fileName: (format) => `main.js`, // The output file name
    },
    rollupOptions: {
      // Additional Rollup options
    },
 },

};