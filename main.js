const{app,BrowserWindow} =require('electron')
function createWindow(){
    const win = new BrowserWindow({
        width:900,
        height:600,
        backgroundColor: "#228B22",
        title : "RCPACPC_Task",
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile("index.html")
}
app.whenReady().then(createWindow)