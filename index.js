
'use strict';


const WIN = require("ui/window");
const Tabbar = require('ui/tabbar');
const LANG = require('./language/');
const LANG_T = antSword['language']['toastr'];

const vuls = [
  "MS08-067", "MS09-050", "MS10-073", "MS12-037", "MS14-064", "MS15-020", "MS16-051", "MS17-010",
  "S2-003", "S2-005", "S2-007", "S2-008", "S2-009", "S2-012", "S2-015", "S2-016", "S2-019",
  "S2-029", "S2-032", "S2-033", "S2-037", "S2-045", "S2-046", "S2-048", "S2-052",
  "php_charts_exec", "php_include", "php_xmlrpc_eval", "php_eval", "php_file_upload", "office_word_macro",
  "glossword_upload_exec", "office_word_hta", "badblue_passthru", "sepm_auth_bypass_rce", "jenkins_xstream_deserialize"
];

const tabStruct = {
  settings: {
    align: "left",
    skin: "dhx_skyblue"
  },
  tabs: (() => {
    var res = []
    for (let t in LANG['tabs']) {
      res.push({
        id: t,
        text: LANG['tabs'][t]['title']
      })
    }
    res[0]['active'] = true;
    return res;
  })()
}
const formData = {
  web: [{
    type: "fieldset",
    name: "data",
    label: LANG['form']['task_title'],
    list: [{
      type: "input",
      labelWidth: 100,
      inputWidth: 240,
      name: "target",
      label: LANG['form']['target'],
      labelAlign: "center",
      required: true
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "pretesting",
      value: LANG['form']['pretesting']
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "auto_attack",
      value: LANG['form']['auto_attack']
    }]
  }, {
    type: "fieldset",
    name: "vulsattack",
    label: LANG['tabs']['web']['form']['vuls_attack'],
    inputWidth: "auto",
    list: [{
      type: "combo",
      label: LANG['tabs']['web']['form']['vulns'],
      labelWidth: 100,
      inputWidth: 240,
      options: vuls.map((i) => { return { text: i, value: i } })
    }, {
      type: "newcolumn", offset: 10
    }, {
      type: "button",
      name: "exp_attack",
      value: LANG['tabs']['web']['form']['exp_attack']
    }, {
      type: "newcolumn", offset: 10
    }, {
      type: "button",
      name: "priviledge",
      value: LANG['tabs']['web']['form']['priviledge']
    }]
  }, {
    type: "fieldset",
    name: "onekeyattack",
    label: LANG['tabs']['web']['form']['onekeyattack'],
    list: (() => {
      var res = []
      Object.keys(LANG['web']).map((key, index) => {
        res.push({
          type: "button",
          width: 135,
          name: key,
          value: LANG['web'][key]['name']
        })
        if (index % 8 == 7) {
          res.push({ type: "newcolumn", offset: 10 })
        }
      });
      return res;
    })()
  }],
  ctf: [{
    type: "fieldset",
    name: "data",
    label: LANG['form']['task_title'],
    list: [{
      type: "input",
      labelWidth: 100,
      inputWidth: 240,
      name: "target",
      label: LANG['form']['target'],
      labelAlign: "center",
      required: true
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "pretesting",
      value: LANG['form']['pretesting']
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "auto_attack",
      value: LANG['form']['auto_attack']
    }]
  }, {
    type: "fieldset",
    name: "onekeyattack",
    label: LANG['tabs']['ctf']['form']['onekeyattack'],
    list: (() => {
      var res = []
      Object.keys(LANG['ctf']).map((key, index) => {
        res.push({
          type: "button",
          width: 135,
          name: key,
          value: LANG['ctf'][key]['name']
        })
        if (index % 10 == 9) {
          res.push({ type: "newcolumn", offset: 10 })
        }
      });
      return res;
    })()
  }],
  crack: [{
    type: "fieldset",
    name: "data",
    label: LANG['form']['task_title'],
    list: [{
      type: "input",
      labelWidth: 100,
      inputWidth: 240,
      name: "target",
      label: LANG['form']['target'],
      labelAlign: "center",
      required: true
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "pretesting",
      value: LANG['form']['pretesting']
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "auto_attack",
      value: LANG['form']['auto_attack']
    }]
  }, {
    type: "fieldset",
    name: "onekeyattack",
    label: LANG['tabs']['crack']['form']['onekeyattack'],
    list: (() => {
      var res = []
      Object.keys(LANG['crack']).map((key, index) => {
        res.push({
          type: "button",
          width: 135,
          name: key,
          value: LANG['crack'][key]['name']
        })
        if (index % 10 == 9) {
          res.push({ type: "newcolumn", offset: 10 })
        }
      });
      return res;
    })()
  }],
  wireless: [{
    type: "fieldset",
    name: "data",
    label: LANG['form']['task_title'],
    list: [{
      type: "input",
      labelWidth: 100,
      inputWidth: 240,
      name: "target",
      label: LANG['form']['target'],
      labelAlign: "center",
      required: true
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "pretesting",
      value: LANG['form']['pretesting']
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "auto_attack",
      value: LANG['form']['auto_attack']
    }]
  }, {
    type: "fieldset",
    name: "onekeyattack",
    label: LANG['tabs']['wireless']['form']['onekeyattack'],
    list: (() => {
      var res = []
      Object.keys(LANG['wireless']).map((key, index) => {
        res.push({
          type: "button",
          width: 135,
          name: key,
          value: LANG['wireless'][key]['name']
        })
        if (index % 10 == 9) {
          res.push({ type: "newcolumn", offset: 10 })
        }
      });
      return res;
    })()
  }],
  hardware: [{
    type: "fieldset",
    name: "data",
    label: LANG['form']['task_title'],
    list: [{
      type: "input",
      labelWidth: 100,
      inputWidth: 240,
      name: "target",
      label: LANG['form']['target'],
      labelAlign: "center",
      required: true
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "pretesting",
      value: LANG['form']['pretesting']
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "auto_attack",
      value: LANG['form']['auto_attack']
    }]
  }, {
    type: "fieldset",
    name: "onekeyattack",
    label: LANG['tabs']['hardware']['form']['onekeyattack'],
    list: (() => {
      var res = []
      Object.keys(LANG['hardware']).map((key, index) => {
        res.push({
          type: "button",
          width: 135,
          name: key,
          value: LANG['hardware'][key]['name']
        })
        if (index % 10 == 9) {
          res.push({ type: "newcolumn", offset: 10 })
        }
      });
      return res;
    })()
  }],
  others: [{
    type: "fieldset",
    name: "data",
    label: LANG['form']['task_title'],
    list: [{
      type: "input",
      labelWidth: 100,
      inputWidth: 240,
      name: "target",
      label: LANG['form']['target'],
      labelAlign: "center",
      required: true
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "pretesting",
      value: LANG['form']['pretesting']
    }, {
      type: "newcolumn",
      offset: 10
    }, {
      type: "button",
      name: "auto_attack",
      value: LANG['form']['auto_attack']
    }]
  }, {
    type: "fieldset",
    name: "onekeyattack",
    label: LANG['tabs']['others']['form']['onekeyattack'],
    list: (() => {
      var res = []
      Object.keys(LANG['others']).map((key, index) => {
        res.push({
          type: "button",
          width: 135,
          name: key,
          value: LANG['others'][key]['name']
        })
        if (index % 10 == 9) {
          res.push({ type: "newcolumn", offset: 10 })
        }
      });
      return res;
    })()
  }],
  about: []
}

const tabsData = {
  "web": formData['web'],
  "ctf": formData['ctf'],
  "crack": formData['crack'],
  "wireless": formData['wireless'],
  "hardware": formData['hardware'],
  "others": formData['others'],
  "about": {}
}
/**
 * 插件类
*/
class Plugin {
  constructor(opt) {
    // 创建一个 window
    this.win = new WIN({
      title: `${LANG['title']}`,
      height: 620,
      width: 658,
    });
    this.createMainLayout();
  }

  createMainLayout() {
    let layout = this.win.win.attachLayout('1C');
    layout.cells('a').hideHeader();
    this.createTabbar(layout.cells('a'));
    this.layout = layout;
  }

  createTabbar(cell) {
    let tabbar = cell.attachTabbar();
    tabbar.loadStruct(tabStruct);
    for (let tab in tabsData) {
      let tabForm = tabbar.tabs(tab).attachForm();
      tabForm.loadStruct(tabsData[tab]);
      this.bindClickHandler(tabForm);
    }
    this.tabbar = tabbar;
    window.tt = tabbar;
  }

  /**
   * 监听开始按钮点击事件
   * @param  {Element} element [description]
   */
  bindClickHandler(element) {
    var self = this;
    element.attachEvent('onButtonClick', (id) => {
      switch (id) {
        case 'godie':
          return layer.alert('Hacked By Virink', { title: "FBI Warning", icon: 1 });
        case 'joinctfgroup':
          return layer.alert('QQ Group : 473831530<br />\
          Challenge : <br />https://shimo.im/doc/rhhI8AQQm58DK2fD',
            { title: "FBI Warning", icon: 1 });
        default:
          break;
      }
      let tabId = self.tabbar.getActiveTab();
      let target = self.tabbar.tabs(tabId).getAttachedObject().getForm().getItemValue("target");
      if (!target || target == "" || target == null) {
        toastr.error(LANG['target_null'], LANG['error']);
        return 0;
      }
      this.win.win.progressOn();
      try {
        let msg = LANG[tabId][id]['msg'];
        if (typeof msg == 'function') {
          this.win.win.progressOff();
          return msg();
        }
        msg = (typeof msg == 'string') ? msg == "" ? [LANG['attacking']] : [msg] : msg;
        let i = 1000;
        msg.map((m) => {
          setTimeout(() => {
            layer.msg(m);
          }, i);
          i += 1000;
        });
      } catch (error) {
        this.win.win.progressOff();
        toastr.error(LANG['target_null'], LANG['error']);
        return 0;
      }
      this.win.win.progressOff();
      toastr.success(LANG['success'], LANG_T['success']);
    })
  }

}

module.exports = Plugin;