var menuContainer = document.querySelector('#menu');
document.addEventListener('click', (e) => {
  if (e.target.id === 'edit') {
    cmdEdit();
    return;
  } else {
    var cmds = e.target.id.split('_');
    var cmd = cmds[0];
    var value = cmds[1];
    cmdSimple(cmd, value);
    return;
  }
});

function onError(error) {
  console.error(error);
}

initialize();
function initialize() {
}
function execCmd(code, onExecuted) {
  var executing = browser.tabs.executeScript({
    code: code
  });
  executing.then(onExecuted, onError);
}
function cmdEdit() {
  execCmd('document.getElementsByTagName("html").item(0).contentEditable=true;', function(value){});
}
function cmdSimple(cmd, value) {
  cmdEdit();
  if (!value) {
    value = '';
  }
  execCmd('document.execCommand("' + cmd + '", false, "' + value + '");', function(value){alert('ok ' + value)});
}