export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: [
      '.replit.dev',
      '.id.repl.co', 
      '.janeway.replit.dev'
    ],
  },
});
