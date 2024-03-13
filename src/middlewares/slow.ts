// Slow middleware
export default async function slow(req, res, next) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  next();
}
