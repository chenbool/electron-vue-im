import {
  app,
  BrowserWindow,
  Menu,
  Tray,
  ipcMain
} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 580,
    width: 1100,
    useContentSize: true,
    frame: false,
    minHeight:450,
    minWidth: 550,
    focusable: true,
    thickFrame: true,
    transparent: true,
    titleBarStyle: 'hidden',
    // backgroundColor: '#2e2c29',
    // 任务栏显示
    skipTaskbar: false,
    title: "wechat",
    hasShadow: true,
    // darkTheme: true,
    titleBarStyle: 'hiddenInset',
    // icon: '',
    // alwaysOnTop: true,
    autoHideMenuBar: true,
    
    webPreferences: {
      devTools: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// 最小化
ipcMain.on('min', e => mainWindow.minimize());

// 最大化
ipcMain.on('max', e => {
  mainWindow.maximize()
});
ipcMain.on('unmax', e => {
  mainWindow.unmaximize()
});
// ipcMain.on('max', e => {

//   if (mainWindow.isMaximized()) {
//     mainWindow.unmaximize()
//   } else {
//     mainWindow.maximize()
//   }
// });

// 关闭
ipcMain.on('close', e => mainWindow.close());


/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
