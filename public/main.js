global.window = window;
global.$ = $;
global.gui = require('nw.gui');
global.document = null;

init();

function init() {
    //console.log('Initializing');

    /*global.$(global.window.document).ready(function(){
        global.document = global.window.document;
                
        //bindTemplates();
    });*/
    
    var gui = require('nw.gui');
    var win = gui.Window.get();
    var nativeMenuBar = new gui.Menu({ type: "menubar" });
    nativeMenuBar.createMacBuiltin("My App");
    win.menu = nativeMenuBar;
/*
    // Create an empty menu
    var menu = new gui.Menu({'type': 'menubar'});

    // Add some items
    menu.append(new gui.MenuItem({
        label: 'Item A'
    }));
    menu.append(new gui.MenuItem({
        label: 'Item B'
    }));
    menu.append(new gui.MenuItem({
        type: 'separator'
    }));
    menu.append(new gui.MenuItem({
        label: 'Item C'
    }));
*/
}