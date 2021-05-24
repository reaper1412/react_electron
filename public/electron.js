const electron = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadFile('build/index.html');
});
