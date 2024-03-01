const UnHandledException = () => {
  // unhandledRejection Error Handling
  process.on("unhandledRejection", (err) => {
    console.log(err.message);
    server.close(() => {
      process.exit(1);
    });
  });
  
};


module.exports = UnHandledException;