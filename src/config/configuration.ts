export interface Config {
  url: string;
}

export default (): Config => ({
  url: process.env.DATABASE_URL,
});
