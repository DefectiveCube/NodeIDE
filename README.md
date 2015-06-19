# NodeIDE

This is an experimental C# IDE powered by a NW.JS front-end with Polymer being used whenever possible. It's an alternative to my WPF-based solution, and is used as design prototyping tool (since XAML is far more verbose and slower to develop).

This project is in an early-early-early state. It has very limited editing capabilities. The overall goal is to determine the feasbility of using the GUI as a means of syntactic enforcement, or even semantics, instead of relying on a compiler for verification checks. Additionally, the project is intended as a learning tool, not a full-fledged commericial juggernaut.

### Build Instructions

__Windows__

Automated Installation
Run `setup.bat` in a command prompt or `setup.ps1` in Windows PowerShell

Manual Installation
* use bower to install polymer components `bower install`
* use npm to install dependencies `npm install`
* run nw on the root directory

__OSX__

TBD

### Example Uses
Identifiers can be changed at-will (as they are marked contenteditable) while keywords can not. Modifiers can be changed between states, such as the class modifiers of 'static' and 'abstract' (which are mutually exclusive). Disabled modifiers are shown in a different color and have a line-through indicating that modifier is not enabled for it's respective type.

### Future
Once developement has progressed, edge.js will be used to join the front-end with a .NET backend compilation tool (using .NET Compiler Platform).
