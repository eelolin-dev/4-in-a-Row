import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    define: {
      // Safely inject the API_KEY.
      // Priority: 
      // 1. System Env (Netlify) 
      // 2. .env file 
      // 3. Hardcoded Fallback (Your provided key)
      'process.env.API_KEY': JSON.stringify(
        process.env.API_KEY || 
        env.API_KEY || 
        "AIzaSyDx8IFZuD4ta1Fq--ivKdpI4e2mSztp69"
      )
    }
  };
});