import * as dotenv from "dotenv";
dotenv.config();

const args = [
  process.env.INITIAL_HOLDER_ADDR!,
  process.env.FORWARDER_ADDR!,
];

export default args;
