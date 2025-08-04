const typeConsole = (type = "log") => {
    if (typeof console[type] === "function") {
        console[type](`Đây là type: ${type}`);
    } else {
        console.log(`Type "${type}" không tồn tại trong console, dùng 'log' thay thế.`);
        console.log(`Đây là type: log`);
    }
};
typeConsole();
typeConsole("warn");
typeConsole("error");
typeConsole("abc"); 
