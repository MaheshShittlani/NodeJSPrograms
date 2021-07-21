if(process.argv.length > 2) {
    console.log('List of names...');
    process.argv.forEach((val, index) => {
        if(index > 1) {
            console.log(`${index - 2}. ${val}\n`);
        }
    });    
}else {
    console.log('No list of names is received');
}
