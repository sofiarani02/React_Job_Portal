import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      // Add any aliases here if needed
    },
  },

  // Add the following if you need to support CommonJS modules
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    require: ['@vitejs/plugin-react-swc'],
  },
});
