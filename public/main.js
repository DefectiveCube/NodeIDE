global.gui = require('nw.gui');
global.edge = require('edge');
global.window = window;
//lobal.document = null;
//global.$ = $;

init();

function init() {
  
  /*var http = require('http');
  
  var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(80, '127.0.0.1');

  console.log('Server running at http://127.0.0.1:80/');*/
  
  /*global.$(global.window.document).ready(function(){
      global.document = global.window.document;
              
      //bindTemplates();
  });*/
  
  var gui = require('nw.gui');
  var win = gui.Window.get();
  /*var nativeMenuBar = new gui.Menu({
    type: "menubar"
  });
  nativeMenuBar.createMacBuiltin("My App");
  win.menu = nativeMenuBar;*/

  var helloWorld = global.edge.func(function () {
    /*
        async (input) => { 
            return ".NET Welcomes " + input.ToString(); 
        }
    */
  });

  helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
  });
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