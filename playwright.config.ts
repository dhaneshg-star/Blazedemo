import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: process.env.Second_BASE_URL,

    
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
  ]
});