
window.makeTestHelpers = function(wowTabs){
  if(typeof wowTabs === 'string') {
    wowTabs = document.querySelector(wowTabs);
  }

  function getTab(idx) {
    return wowTabs.shadowRoot.querySelector('li:nth-child(' + idx + ')')
  }

  function getTabButton(idx) {
    return getTab(idx).firstElementChild;
  }

  function getPanel(idx) {
    return wowTabs.children.item(idx);
  }

  function click(tab) {
    var event = new Event('click', { bubbles: true });
    tab.dispatchEvent(event);
  }

  return {
    getTab: getTab,
    getTabButton: getTabButton,
    getPanel: getPanel,
    click: click
  };
};
