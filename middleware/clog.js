const clog = (req, res, next) => {
    // ANSI escape code that instructs the terminal to print in yellow
    const yellow = '\x1b[33m%s\x1b[0m';
  
    // Log out the request type and resource
    console.log(yellow, `${req.method} request to ${req.path}`);
  
    // Built-in express method to call the next middleware in the stack.
    next();
  };

  exports.clog = clog;