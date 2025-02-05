import app from './app'
import mongoose from 'mongoose';
import config from './config';

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        // app code 
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    } catch (err) {
        console.log(err)
    }
}

main()
