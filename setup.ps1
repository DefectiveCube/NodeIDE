$source = "http://dl.nwjs.io/v0.12.2/nwjs-v0.12.2-win-x64.zip"
$destination = "nw.zip"

$bower = Test-Path("bower.json")
$node = Test-Path("package.json")
$nw = Test-Path("nw.zip");

Function Info
{
  Param ($message)

  Write-Host -NoNewline "["
  Write-Host -NoNewline "INFO" -ForegroundColor Green
  Write-Host -NoNewline "] "

  $message
}

Function Error
{
  Param ($message)

  Write-Host -NoNewline "["
  Write-Host -NoNewline "ERROR" -ForegroundColor Red
  Write-Host -NoNewline "] "

  $message
}

Function Warn
{
  Param($message)

  Write-Host -NoNewline "["
  Write-Host -NoNewline "WARN" -ForegroundColor Yellow
  Write-Host -NoNewline "] "

$message
}


If($nw -eq $false){
  Info "Downloading NW.JS"
  Invoke-WebRequest $source -OutFile $destination
}

If($bower){
  Info "Installing Polymer Components"
  Start-Process bower install
}Else{
  Error "Unable to get polymer components via Bower. bower.json is missing"
}

If($node){
  Info "Installing Node Modules"
  Start-Process npm install -Wait
  cd node_modules\edge

  Info "Building Edge Module"
  Start-Process -FilePath nw-gyp -ArgumentList 'configure','--target=0.12.2' -Wait
  Start-Process -FilePath nw-gyp -ArgumentList 'build' -Wait
}else{
  Error "Unable to install node modules via NPM. package.json is missing"
}