module.exports = {
  title: "无上帝兵",
  success: "操作成功",
  error: "操作失败",
  target_null: "本插件还不支持无差别攻击",
  attacking: "攻击中...",
  form: {
    task_title: "任务目标",
    target: "目标",
    pretesting: "预测试",
    auto_attack: "自动攻击",
  },
  tabs: {
    web: {
      title: "Web",
      form: {
        vuls_attack: "漏洞攻击",
        vulns: "漏洞",
        exp_attack: "Exp 攻击",
        priviledge: "提权",
        onekeyattack: "一键日站"
      }
    },
    ctf: {
      title: "夺旗赛",
      form: {
        onekeyattack: "一键打比赛"
      }
    },
    crack: {
      title: "破解",
      form: {
        onekeyattack: "一键破解"
      }
    },
    wireless: {
      title: "无线",
      form: {
        onekeyattack: "一键攻击"
      }
    },
    hardware: {
      title: "硬件",
      form: {
        onekeyattack: "一键攻击"
      }
    },
    others: {
      title: "其它",
      form: {
        onekeyattack: "一键攻击"
      }
    },
    about: {
      title: "关于"
    }
  },
  web: {
    backdoor: {
      name: "一键上后门",
      msg: "后门已经安排上了"
    },
    hackerpage: {
      name: '一键挂黑页',
      msg: ["9012年了还有人上黑页？？？"]
    },
    admindir: {
      name: '一键拿后台',
      msg: ''
    },
    adminaccount: {
      name: '一键获取管理员',
      msg: ''
    },
    getshell: {
      name: '一键 GetShell',
      msg: ''
    },
    pulldatabase: {
      name: '一键脱裤跑路',
      msg: ''
    },
    ddos: {
      name: '一键 DDOS 攻击',
      msg: ''
    },
    reverseshell: {
      name: '一键反弹 Shell',
      msg: ''
    },
    packagesite: {
      name: '一键整站打包',
      msg: ''
    },
    deepnetroam: {
      name: '一键暗网漫游',
      msg: ''
    },
    tunnelproxy: {
      name: '一键隧道代理',
      msg: ''
    },
    vpnproxy: {
      name: '一键 VPN 代理',
      msg: ''
    },
    freenetwork: {
      name: '一键免费上网',
      msg: ''
    },
    fucknetbar: {
      name: '一键日穿网吧',
      msg: ''
    },
    fuckedusys: {
      name: '一键日穿教务系统',
      msg: ''
    },
    fuckqq: {
      name: '一键盗 QQ',
      msg: ''
    },
    fuckwechat: {
      name: '一键盗  WeChat',
      msg: ''
    },
    fuckcmcc: {
      name: '一键日穿中国移动',
      msg: ''
    },
    fuckcu: {
      name: '一键日穿中国联通',
      msg: ''
    },
    fuckct: {
      name: '一键日穿中国电信',
      msg: ''
    },
    supervip: {
      name: '一键成为全网 VIP',
      msg: ''
    },
    getbtc: {
      name: '一键挖矿 BTC',
      msg: ''
    },
    innernet: {
      name: '一键日穿内网',
      msg: ''
    },
    debug: {
      name: '一键调试程序',
      msg: ''
    },
    fixbug: {
      name: '一键修复 Bug',
      msg: ''
    },
    auditcode: {
      name: '自动代码审计',
      msg: ''
    },
    issuevul: {
      name: '一键提交漏洞',
      msg: ''
    },
    rmrf: {
      name: 'rm -rf /*',
      msg: ''
    },
    gitclone: {
      name: '一键Clone仓库',
      msg: ''
    },
    godie: {
      name: '一键自杀',
      msg: ''
    }
  },
  ctf: {
    joinctfgroup: {
      name: '加入 CTF 交流群',
      msg: null
    },
    defense: {
      name: '绝对防御',
      msg: function (l, t) {
        l.open({
          type: 1,
          title: false,
          skin: 'layui-bg-black',
          closeBtn: 0,
          anim: 2,
          time: 3000,
          area: '500px',
          shadeClose: true,
          content: `<span style="font-size:40px"># mv ~ /dev/null<br /># grep root /etc/nmap<br /># nmap -sT -A ${t ? t : 'localhost'}<br />恭喜</span>`
        });
      }
    },
    findbug: {
      name: '一键找考点',
      msg: ''
    },
    findvul: {
      name: '一键找漏洞',
      msg: ''
    },
    getshell: {
      name: '一键 GetShell',
      msg: ''
    },
    nodieshell: {
      name: '一键不死马',
      msg: ''
    },
    getflag: {
      name: '一键拿 Flag',
      msg: ''
    },
    stealflag: {
      name: '一键偷 Flag',
      msg: ''
    },
    deleteflag: {
      name: '一键删除 Flag',
      msg: ''
    },
    changeflag: {
      name: '一键修改 Flag',
      msg: ''
    },
    pyflag: {
      name: '一键交易 Flag',
      msg: ''
    },
    writeups: {
      name: '一键生成 Writeups',
      msg: ''
    },
    maketrouble: {
      name: '一键搅屎',
      msg: ''
    },
    brokennet: {
      name: '一键断网',
      msg: ''
    },
    chaangerank: {
      name: '一键改排名',
      msg: ''
    },
    fucksystem: {
      name: '一键日平台',
      msg: ''
    },
    fuckmaker: {
      name: '一键暴打出题人',
      msg: ''
    },
    postzhihu: {
      name: '一键发知乎',
      msg: ''
    }
  },
  crack: {},
  wireless: {},
  hardware: {},
  others: {
    iplocation: {
      name: 'IP Location',
      msg: ''
    }
  },
  about: {}
}