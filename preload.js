const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveNote: (note) => ipcRenderer.invoke('save-note', note),
    loadNote: () => ipcRenderer.invoke('load-note'),
    saveAs: (text)=> ipcRenderer.invoke('save-as', text),
    deleteNote: () => ipcRenderer.invoke('delete-note'),
    newNote: () => ipcRenderer.invoke('new-note'),
    openFile: () => ipcRenderer.invoke('open-file'),
<<<<<<< HEAD
    smartSave: (text, filePath) => ipcRenderer.invoke('smart-save', text,filePath),
    onMenuAction: (channel, callback) => ipcRenderer.on(channel, callback), 
    getNotes: () => ipcRenderer.invoke('get-notes'),
    saveNoteJson: (note) => ipcRenderer.invoke('save-note-json', note),
    deleteNote: (id) => ipcRenderer.invoke('delete-note', id)

=======
    onMenuAction: (channel, callback) => ipcRenderer.on(channel, callback) //new
>>>>>>> 348ee9af34141989cd475bf0528e3a0e34163f36
});
