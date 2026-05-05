import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'src', 'assets');
const targetDir = path.join(projectRoot, 'public', 'assets');
const legacyShadowDir = path.join(projectRoot, 'public', 'src', 'assets');

if (!existsSync(sourceDir)) {
  console.warn(`Static image sync skipped: source folder not found at ${sourceDir}`);
  process.exit(0);
}

rmSync(legacyShadowDir, { recursive: true, force: true });

mkdirSync(path.dirname(targetDir), { recursive: true });
rmSync(targetDir, { recursive: true, force: true });
cpSync(sourceDir, targetDir, { recursive: true });

console.log(`Static assets synced to ${targetDir}`);

if (existsSync(path.join(projectRoot, 'public', 'src'))) {
  rmSync(path.join(projectRoot, 'public', 'src'), { recursive: true, force: true });
}