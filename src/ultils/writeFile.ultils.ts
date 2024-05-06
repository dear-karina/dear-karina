import fs from 'fs';

export const write_to_file = (data: string, file_path: string) => {
    fs.writeFile(file_path, data, (err: NodeJS.ErrnoException | null) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Data has been written to the file');
    });
}
