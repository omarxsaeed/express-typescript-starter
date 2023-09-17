import dotenv from "dotenv";

// Load Configuration File
if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: `${__dirname}/.env.test` });
} else {
  dotenv.config({ path: `${__dirname}/.env` });
}

const config = {
  NODE_ENV: (process.env.NODE_ENV = process.env.NODE_ENV || "development"),
  server: {
    HOST: process.env.HOST || "localhost",
    PORT: parseInt(process.env.PORT!, 10) || 8000
  },
  LOG_LEVEL: process.env.LOG_LEVEL || "info"
};

export default config;
