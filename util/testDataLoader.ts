import fs from 'fs';
import path from 'path';

export class TestDataLoader {
  static load(projectName: string, testName: string): any {
    try {
      const filePath = path.join(__dirname, 'testdata', projectName, `${testName}.json`);

      if (!fs.existsSync(filePath)) {
        throw new Error(`Test data file not found: ${filePath}`);
      }

      // Read and parse JSON data
      const rawData = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(rawData);
    } catch (error) {
      console.error(`Error loading test data: ${error.message}`);
      return null;
    }
  }
}
