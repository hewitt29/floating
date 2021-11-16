const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        frame: false,
        width: 108,
        height: 28,
        resizable: false,
        transparent: true,
        alwaysOnTop: true,
        skipTaskbar: true
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
