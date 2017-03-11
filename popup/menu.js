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
function execCmd(code) {
  browser.tabs.executeScript(null, {
    code: code
  });
}
function cmdEdit() {
  execCmd('document.getElementsByTagName("html").item(0).contentEditable=true;');
}
function cmdSimple(cmd, value) {
  cmdEdit();
  if (!value) {
    value = '';
  }
  execCmd('window.document.execCommand("' + cmd + '", false, "' + value + '");');
}