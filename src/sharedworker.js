
self.port.start();
self.port.addEventListener("message", (...args) => {
    console.log("message", ...args);
});