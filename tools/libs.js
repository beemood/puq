export async function libs() {
  return await readdir(join(__dirname, '..', 'libs'));
}
