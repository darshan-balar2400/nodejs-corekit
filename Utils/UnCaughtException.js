// uncaughtException handling

const UnCaughtException = () => {
    process.on("uncaughtException", (err) => {
        console.log(err.message);
        process.exit(1);
    });
}
