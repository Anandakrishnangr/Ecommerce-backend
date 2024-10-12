// start.mjs
import  register  from '@babel/register';

register({
    extensions: ['.js', '.mjs'], // Specify the extensions you want Babel to transpile
});

import('./src/server.js').catch(err => {
    console.error(err);
    process.exit(1);
});
