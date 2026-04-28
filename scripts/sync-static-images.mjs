import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'src', 'assets');
const targetDirs = [
  path.join(projectRoot, 'public', 'assets'),
  path.join(projectRoot, 'public', 'src', 'assets'),
];

if (!existsSync(sourceDir)) {
  console.warn(`Static image sync skipped: source folder not found at ${sourceDir}`);
  process.exit(0);
}

for (const targetDir of targetDirs) {
  mkdirSync(path.dirname(targetDir), { recursive: true });
  rmSync(targetDir, { recursive: true, force: true });
  cpSync(sourceDir, targetDir, { recursive: true });
}

console.log(`Static assets synced to ${targetDirs.join(', ')}`);