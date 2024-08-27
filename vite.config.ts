import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@' 将指向 'src' 目录
      '@': path.resolve(__dirname, 'src'),//安装 pnpm install @types/node -D
      // 'components' 将指向 'src/components' 目录
      components: path.resolve(__dirname, 'src/components'),
    },
  },
});

