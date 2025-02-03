const { defineConfig } = require("cypress");
const pg = require("pg");
const { Client } = require('pg');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false, // Disable Chrome's web security
  e2e: {
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: false,
    screenshotsFolder: "cypress/screenshots",
    baseUrl: 'http://localhost:1234', 
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      const xlsx = require("xlsx");
      require('cypress-mochawesome-reporter/plugin')(on);

      function generateJSONFromExcel(args) {
        const wb = xlsx.readFile(args.excelFilePath, { dateNF: "mm/dd/yyyy" });
        const ws = wb.Sheets[args.sheetName];
        return xlsx.utils.sheet_to_json(ws, { raw: false });
      }

      on("task", {
        generateJSONFromExcel: generateJSONFromExcel,
        async queryDatabase(query) {
          const client = new Client({
            user: "postgres",
            host: "localhost",
            database: "postgres",
            password: "root",
            port: "5432"
          });
          await client.connect();
          try {
            const res = await client.query(query);
            return res.rows;
          } catch (err) {
            console.error(err);
            throw err;
          } finally {
            await client.end();
          }
        },
        READFROMDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql);
        },
        INSERTINTODB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
            .then(res => {
              client.end();
              return res;
            })
            .catch(err => {
              client.end();
              throw err;
            });
        },
        UPDATEINDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
            .then(res => {
              client.end();
              return res;
            })
            .catch(err => {
              client.end();
              throw err;
            });
        },
        DELETEFROMDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
            .then(res => {
              client.end();
              return res;
            })
            .catch(err => {
              client.end();
              throw err;
            });
        },
      });

      // Launch Chrome with a specific profile
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const userDataDir = "C:\\Users\\jayas\\OneDrive\\Desktop\\Jay_Cypress-Training"; 
          const profileDirectory = 'Profile 9';

          launchOptions.args.push(`--user-data-dir=${userDataDir}`);
          launchOptions.args.push(`--profile-directory=${profileDirectory}`);
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-dev-shm-usage');

          return launchOptions;
        }
      });

      return config;
    }
  },

  DB: {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "root",
    port: "5432"
  }
});
