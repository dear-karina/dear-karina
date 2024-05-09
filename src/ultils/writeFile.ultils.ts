import fs from 'fs';

export const write_to_file = async (data: string, file_path: string) => {
    try {
        await new Promise<void>((resolve, reject) => {
            fs.writeFile(file_path, data, (err: NodeJS.ErrnoException | null) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
        console.log('Index File updated');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}
