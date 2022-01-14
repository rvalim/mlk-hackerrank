import * as fs from 'fs';
import * as path from 'path';

export function ReadFileText(fileName: string): string {
    return fs.readFileSync(path.resolve(fileName), 'utf8');
}
