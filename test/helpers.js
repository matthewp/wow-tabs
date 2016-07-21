
window.makeTestHelpers = function(wowTabs){
  if(typeof wowTabs === 'string') {
    wowTabs = document.querySelector(wowTabs);
  }

  function getTab(idx) {
    return wowTabs.shadowRoot.querySelector('li:nth-child(' + idx + ')')
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
    getPanel: getPanel,
    click: click
  };
};
