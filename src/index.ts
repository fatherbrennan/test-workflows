import { write } from 'bun';
import { rm } from 'fs/promises';
import { join, resolve } from 'path';

(async () => {
  const dir = resolve(__dirname, '..');
  const dirTmp = join(dir, 'tmp');

  await rm(dirTmp, { recursive: true, force: true });

  for (let i = 0; i < 10; i++) {
    await write(join(dirTmp, `${i + 1}.json`), JSON.stringify({ index: i }));
  }
})();
