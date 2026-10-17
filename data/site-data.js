window.SITE_DATA = {

  /**
   * === A. 站点基础信息 meta ===
   *
   * 标准示例:
   * {
   *   site_title: "站点标题", subtitle_latin: "副标题", author: "作者名",
   *   version: "v0.1.0", workshop_url: "创意工坊链接", manifesto: "站点宣言",
   *   links: [{ label: "链接标签", url: "链接地址" }], copyright: "版权信息"
   * }
   *
   * 示例解释:
   * - site_title: 网站主标题，同时参与浏览器标题生成。
   * - subtitle_latin: 首页主视觉下方的副标题，留空则不显示。
   * - version: 当前模组版本号（取自包内 modinfo.lua）。
   * - manifesto: 站点宣言，展示在页脚，本页用的是 modinfo.lua 原文。
   * - links: 外部链接列表，展示在首页或页脚。
   */
  "meta": {
    "site_title": "我们饥佬是这样的",
    "subtitle_latin": "",
    "author": "胖头鱼",
    "version": "v4.4",
    "workshop_url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230",
    "manifesto": "超级超级喜欢玩饥荒，搞了这个mod，哈哈哈哈，怎么方便怎么变态怎么来！ —— modinfo.lua",
    "links": [
      {
        "label": "创意工坊链接",
        "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230"
      }
    ],
    "copyright": "© 2026 我们饥佬是这样的"
  },

  /**
   * === 物品分类定义 categories ===
   *
   * 标准示例: { "id": "分类标识", "name": "分类中文名" }
   * 新增分类只需在此数组加一条，筛选和标签自动生效。
   * 这里的分类是站点侧的编辑归类，不是包内数据；依据是物品中文名与包内制作栏描述。
   */
  "categories": [
    { "id": "weapon", "name": "武器" },
    { "id": "armor", "name": "护具" },
    { "id": "tool", "name": "工具" },
    { "id": "structure", "name": "建筑" },
    { "id": "food", "name": "食物" },
    { "id": "crop", "name": "作物" },
    { "id": "material", "name": "材料" },
    { "id": "misc", "name": "其他" }
  ],

  /**
   * === B. 角色数据 characters ===
   *
   * 标准示例:
   * {
   *   id: "角色唯一标识", side: "阵营，zuo 或 you", name: "角色名",
   *   epithet: "角色外号", portrait: "角色立绘路径",
   *   stats: { hp: 生命, san: 理智, hunger: 饥饿 },
   *   setting: ["设定条目"], exclusive_intro: ["角色专属介绍段落"]
   * }
   *
   * ⚠️ 数值说明：hp / san / hunger 沿用站点原有占位数字，包内角色属性写在加密脚本里，
   *    暂时无法核实，等作者给出真实数值后直接改这三个数即可。
   * setting / exclusive_intro 里的引号内容全部是包内 strings.lua 的检查台词或制作栏描述原文。
   */
  "characters": [
    {
      "id": "pangtouyu",
      "side": "zuo",
      "name": "胖头鱼",
      "epithet": "鱼哥",          // 取自「胖头鱼月饼」检查台词：鱼哥联名款！
      "portrait": "assets/img/characters/pangtouyu_head.png",
      "stats": { "hp": 150, "san": 200, "hunger": 150 },   // ⚠️ 占位数字，未核实
      "setting": [
        "随身之物多以「灵气」与「太极」为名：[[避尘]]、[[两仪]]、[[灵墨]]、[[太极青玄阁]]。",
        "对[[蕴灵如意]]：「灵光入玉，百事如意。」",
        "对[[琦玉器]]：「非凡品，属于sss+！（拿它刷东西啊！）」",
        "对[[寄生灵]]：「万物皆有灵，但是你没我灵！」"
      ],
      "exclusive_intro": [
        "她的物件分成几路：武器是[[避尘]]（制作栏动作名「惊鸿」），护具有[[灵墨]]与[[两仪]]，工具里有[[玉如意]]、[[蕴灵如意]]、[[琦玉器]]、[[玄清灵鉴]]，住处则是[[太极青玄阁]]。",
        "对四季之灵的检查台词是「无比纯粹的能量，我要好好想想！」，对[[玄清灵鉴]]只有一句「用着不错。」",
        "包内还有以她命名的[[胖头鱼月饼]]，检查台词为「鱼哥联名款！」。"
      ]
    },
    {
      "id": "gaojiaoniao",
      "side": "you",
      "name": "高脚鸟",
      "epithet": "鸟弟",          // 取自「高脚鸟月饼」检查台词：鸟弟联名款！
      "portrait": "assets/img/characters/gaojiaoniao_head.png",
      "stats": { "hp": 170, "san": 140, "hunger": 165 },   // ⚠️ 占位数字，未核实
      "setting": [
        "物件多以凤、魂、祟为名：[[凤求凰]]、[[封魂]]、[[除祟]]、[[轮回]]、[[古祭神辉]]。",
        "对[[蕴灵如意]]：「她倒是有件趁手的好东西。」",
        "对[[寄生灵]]：「前车之鉴，我还是不要招惹这类东西！」",
        "对[[琦玉器]]：「好用就行，我不挑！」"
      ],
      "exclusive_intro": [
        "他的制作栏物件：[[凤求凰]]（动作名「万箭」）、[[封魂]]（「驱邪魂为己用，以怨念化剑锋。」）、[[除祟]]、[[轮回]]、[[芙蓉]]、[[古祭神辉]]、[[重明遗骨]]。",
        "对四季之灵的检查台词是「啧，还是问问她吧！」——包内胖头鱼、高脚鸟互相评价的句子基本都成对出现。",
        "以他命名的[[高脚鸟月饼]]，检查台词为「鸟弟联名款！」。"
      ]
    }
  ],

  /**
   * === C. 物品数据 items ===
   *
   * 标准示例:
   * {
   *   id: "物品唯一标识", name: "物品名称", category: "分类", owner: "所属角色 id 或 common",
   *   image: "物品图标路径", summary: "物品简介", recipe: "配方，含 [id] 素材引用",
   *   tech: "所需科技", detail_blocks: [{ type: "text/image", ... }],
   *   related: ["关联条目 id"], tags: ["分类标签"]
   * }
   *
   * 本区说明:
   * - id 直接用包内 prefab 名（如 bighead_spear），方便和模组文件对照。
   * - summary 与 detail_blocks 的文字全部来自 strings.lua 的 RECIPE_DESC / DESCRIBE 原文。
   * - recipe 一律留空：制作配方在加密脚本 scripts/main/recipes.lua 里，包内不可读。
   * - 图标由包内 KTEX 贴图转换而来（见 assets/img/items/）。
   */
  "items": [
    // ── 武器 ──
    {
      "id": "bighead_spear",
      "name": "避尘",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_spear.png",
      "summary": "清明净澈，应心映形。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「好特别的剑！」" },
        { "type": "text", "content": "胖头鱼：「顺手的宝贝！」" },
        { "type": "text", "content": "高脚鸟：「她就用这个？」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_lingqi", "bighead_armor"],
      "tags": ["武器", "剑"]
    },
    {
      "id": "bighead_fanhua",
      "name": "繁花",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_fanhua.png",
      "summary": "风传花信，雨濯春尘。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「风传花信，雨濯春尘。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu"],
      "tags": ["武器", "繁花"]
    },
    {
      "id": "bb_gaojiaoniao_fqh",
      "name": "凤求凰",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fqh.png",
      "summary": "凤飞翱翔兮，四海求凰。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「凤飞翱翔兮，四海求凰。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao"],
      "tags": ["武器", "长弓", "万箭"]
    },
    {
      "id": "bb_gaojiaoniao_fh",
      "name": "封魂",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fh.png",
      "summary": "驱邪魂为己用，以怨念化剑锋。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「驱邪魂为己用，以怨念化剑锋。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao"],
      "tags": ["武器", "剑"]
    },
    // ── 护具 ──
    {
      "id": "bighead_armor",
      "name": "灵墨",
      "category": "armor",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_armor.png",
      "summary": "留连戏蝶时时舞，自在娇莺恰恰啼。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「留连戏蝶时时舞，自在娇莺恰恰啼。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_spear"],
      "tags": ["护具", "护甲"]
    },
    {
      "id": "bighead_back",
      "name": "两仪",
      "category": "armor",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_back.png",
      "summary": "太极生两仪，两仪生四象，四象生八卦。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「太极生两仪，两仪生四象，四象生八卦。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu"],
      "tags": ["护具", "背部"]
    },
    {
      "id": "bb_gaojiaoniao_cs",
      "name": "除祟",
      "category": "armor",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_cs.png",
      "summary": "可压邪祟之气，护其不侵。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「可压邪祟之气，护其不侵。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao"],
      "tags": ["护具", "护符"]
    },
    // ── 工具 ──
    {
      "id": "bighead_ruyi",
      "name": "玉如意",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ruyi.png",
      "summary": "工欲善其事必先利其器。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「工欲善其事必先利其器。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ylry"],
      "tags": ["工具", "如意"]
    },
    {
      "id": "bighead_ylry",
      "name": "蕴灵如意",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ylry.png",
      "summary": "一柄蕴灵，万事随心。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「一柄蕴灵，万事随心。」" },
        { "type": "text", "content": "胖头鱼：「灵光入玉，百事如意。」" },
        { "type": "text", "content": "高脚鸟：「她倒是有件趁手的好东西。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ruyi"],
      "tags": ["工具", "如意", "收纳", "捕鱼"]
    },
    {
      "id": "bighead_umbrella",
      "name": "共潮生",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_umbrella.png",
      "summary": "烟雨入江南，山水如墨染。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「烟雨入江南，山水如墨染。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu"],
      "tags": ["工具", "雨具"]
    },
    {
      "id": "bighead_flw",
      "name": "缚灵网",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_flw.png",
      "summary": "要好一些，但也就那样。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「要好一些，但也就那样。」" },
        { "type": "text", "content": "胖头鱼：「要好一些，但也就那样。」" },
        { "type": "text", "content": "高脚鸟：「要好一些，但也就那样。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_czflw"],
      "tags": ["工具", "缚灵网"]
    },
    {
      "id": "bighead_czflw",
      "name": "草制缚灵网",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_czflw.png",
      "summary": "粗制滥造，凑合着用吧！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「粗制滥造，凑合着用吧！」" },
        { "type": "text", "content": "胖头鱼：「粗制滥造，凑合着用吧！」" },
        { "type": "text", "content": "高脚鸟：「粗制滥造，凑合着用吧！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_flw"],
      "tags": ["工具", "缚灵网"]
    },
    {
      "id": "bighead_qyq",
      "name": "琦玉器",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_qyq.png",
      "summary": "得天独厚！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "胖头鱼：「非凡品，属于sss+！（拿它刷东西啊！）」" },
        { "type": "text", "content": "高脚鸟：「好用就行，我不挑！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ylry"],
      "tags": ["工具", "琦玉器"]
    },
    {
      "id": "bighead_scrolls",
      "name": "浮生卷轴",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_scrolls.png",
      "summary": "浮光跃金，静影沉璧",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「浮光跃金，静影沉璧」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu"],
      "tags": ["工具", "卷轴"]
    },
    {
      "id": "bighead_hy",
      "name": "恒辉",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_hy.png",
      "summary": "萤烛之辉",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「萤烛之辉」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_xqlj"],
      "tags": ["工具", "照明"]
    },
    // ── 建筑 ──
    {
      "id": "bighead_llxz",
      "name": "连理木箱",
      "category": "structure",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_llxz.png",
      "summary": "在天愿作比翼鸟，在地愿为连理枝。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「在天愿作比翼鸟，在地愿为连理枝。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_llxz_xz"],
      "tags": ["建筑", "容器"]
    },
    {
      "id": "bb_cct",
      "name": "春朝亭",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_cct.png",
      "summary": "是那只蝴蝶的家吗？",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「是那只蝴蝶的家吗？」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["bb_cwd"],
      "tags": ["建筑", "亭台"]
    },
    {
      "id": "bb_hhlct",
      "name": "黄花梨茶台",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_hhlct.png",
      "summary": "开饭啦！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「开饭啦！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["bb_cct"],
      "tags": ["建筑", "茶台", "食物"]
    },
    {
      "id": "bighead_sucookpot_item",
      "name": "芙蓉石蟠螭耳盖炉",
      "category": "structure",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sucookpot_item.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「芙蓉石蟠螭耳盖炉」" },
        { "type": "text", "content": "通用检查：「芙蓉石蟠螭耳盖炉是清乾隆时期的玉雕作品，现藏于南京博物院。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_hy"],
      "tags": ["建筑", "锅具", "食物"]
    },
    {
      "id": "bighead_ybhz",
      "name": "月饼盒子",
      "category": "structure",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ybhz.png",
      "summary": "可以拿来装月饼",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「里面会有月饼吗」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ywyb"],
      "tags": ["建筑", "容器", "月饼"]
    },
    {
      "id": "bighead_xqlj",
      "name": "玄清灵鉴",
      "category": "structure",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xqlj.png",
      "summary": "像是一个古老的器物！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "胖头鱼：「用着不错。」" },
        { "type": "text", "content": "高脚鸟：「她会的挺多啊。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_hy"],
      "tags": ["建筑", "器物"]
    },
    // ── 食物 ──
    {
      "id": "bb_cm",
      "name": "草莓",
      "category": "food",
      "owner": "common",
      "image": "assets/img/items/bb_cm.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["dug_bb_cmbush"],
      "tags": ["食物", "草莓", "水果"]
    },
    {
      "id": "bighead_cmgt",
      "name": "草莓罐头",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmgt.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bb_cm"],
      "tags": ["食物", "草莓"]
    },
    {
      "id": "bighead_cmklb",
      "name": "草莓可丽饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmklb.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bb_cm"],
      "tags": ["食物", "草莓"]
    },
    {
      "id": "bighead_cmrl",
      "name": "草莓软酪",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmrl.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bb_cm"],
      "tags": ["食物", "草莓"]
    },
    {
      "id": "bighead_fmss",
      "name": "蜂蜜酥山",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_fmss.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ths"],
      "tags": ["食物", "甜点"]
    },
    {
      "id": "bighead_sgbql",
      "name": "双果冰淇淋",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sgbql.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_snbql"],
      "tags": ["食物", "冰淇淋"]
    },
    {
      "id": "bighead_sgdg",
      "name": "水果蛋糕",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sgdg.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_sgbql"],
      "tags": ["食物", "蛋糕"]
    },
    {
      "id": "bighead_snbql",
      "name": "酸奶冰淇淋",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_snbql.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_sgbql"],
      "tags": ["食物", "冰淇淋"]
    },
    {
      "id": "bighead_ths",
      "name": "桃花酥",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ths.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_fmss"],
      "tags": ["食物", "甜点"]
    },
    {
      "id": "bighead_xgss",
      "name": "西瓜酥山",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xgss.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ths"],
      "tags": ["食物", "甜点"]
    },
    {
      "id": "bighead_xrzslz",
      "name": "仙人掌石榴汁",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xrzslz.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_snbql"],
      "tags": ["食物", "饮品"]
    },
    {
      "id": "bighead_ywyb",
      "name": "原味月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ywyb.png",
      "summary": "就没别的味的了吗！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「就没别的味的了吗！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_jlyb",
      "name": "巨鹿月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_jlyb.png",
      "summary": "凉飕飕的！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「凉飕飕的！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_gwyb",
      "name": "怪物月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_gwyb.png",
      "summary": "呕~",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「呕~」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_xgyb",
      "name": "西瓜月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xgyb.png",
      "summary": "神清气爽~",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「神清气爽~」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_fgyb",
      "name": "发光月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_fgyb.png",
      "summary": "我胱乃天庭之主！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「我胱乃天庭之主！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_ymyb",
      "name": "夜梅月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ymyb.png",
      "summary": "让我来看看怎么个事~",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「让我来看看怎么个事~」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_xjyb",
      "name": "香蕉月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xjyb.png",
      "summary": "巴适！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「巴适！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_cmyb",
      "name": "草莓月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmyb.png",
      "summary": "好甜呀！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「好甜呀！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋"]
    },
    {
      "id": "bighead_ptyyb",
      "name": "胖头鱼月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ptyyb.png",
      "summary": "鱼哥联名款！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「鱼哥联名款！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋", "联名"]
    },
    {
      "id": "bighead_gjnyb",
      "name": "高脚鸟月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_gjnyb.png",
      "summary": "鸟弟联名款！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「鸟弟联名款！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋", "联名"]
    },
    {
      "id": "bighead_lblyb",
      "name": "冷暴力月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_lblyb.png",
      "summary": "冷暴力联名款！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「冷暴力联名款！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋", "联名"]
    },
    {
      "id": "bighead_mdxyb",
      "name": "喵大仙月饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_mdxyb.png",
      "summary": "喵大仙联名款！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「喵大仙联名款！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_ybhz"],
      "tags": ["食物", "月饼", "中秋", "联名"]
    },
    // ── 作物 ──
    {
      "id": "dug_bb_cmbush",
      "name": "草莓丛",
      "category": "crop",
      "owner": "common",
      "image": "assets/img/items/dug_bb_cmbush.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["bb_cm"],
      "tags": ["作物", "草莓"]
    },
    // ── 材料 ──
    {
      "id": "bighead_wcs",
      "name": "七彩石",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_wcs.png",
      "summary": "幻光七色，天地灵生。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「幻光七色，天地灵生。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_spirits"],
      "tags": ["材料", "七彩石"]
    },
    {
      "id": "bighead_ylss",
      "name": "蕴灵神石",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ylss.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_lingqi"],
      "tags": ["材料", "灵石"]
    },
    {
      "id": "bighead_ymlx",
      "name": "月冕莲心",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ymlx.png",
      "summary": "沐月色而生，携净意而行。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「沐月色而生，携净意而行。」" },
        { "type": "text", "content": "胖头鱼：「沐月色而生，携净意而行。」" },
        { "type": "text", "content": "高脚鸟：「沐月色而生，携净意而行。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_buran"],
      "tags": ["材料", "莲子"]
    },
    {
      "id": "bighead_ygxlfw",
      "name": "远古星雷符文",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ygxlfw.png",
      "summary": "雷纹能量稳定，本源刻印完整。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「雷纹能量稳定，本源刻印完整。」" },
        { "type": "text", "content": "胖头鱼：「雷纹能量稳定，本源刻印完整。」" },
        { "type": "text", "content": "高脚鸟：「雷纹能量稳定，本源刻印完整。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_wcs"],
      "tags": ["材料", "符文"]
    },
    {
      "id": "bighead_soul",
      "name": "魂魄",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_soul.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bb_gaojiaoniao_fh"],
      "tags": ["材料", "魂魄"]
    },
    {
      "id": "bighead_llxz_xz",
      "name": "双鱼玉佩",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_llxz_xz.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_llxz"],
      "tags": ["材料", "玉佩"]
    },
    {
      "id": "bighead_qbi",
      "name": "Q币",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_qbi.png",
      "summary": "要充值吗？",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「充值很棒呀」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "bighead_qyq"],
      "tags": ["材料", "货币", "企鹅"]
    },
    {
      "id": "bighead_spring_spirit",
      "name": "春之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_spring_spirit.png",
      "summary": "里面蕴含着春天的气息！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「里面蕴含着春天的气息！」" },
        { "type": "text", "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」" },
        { "type": "text", "content": "高脚鸟：「啧，还是问问她吧！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_spirits"],
      "tags": ["材料", "四季之灵"]
    },
    {
      "id": "bighead_summer_spirit",
      "name": "夏之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_summer_spirit.png",
      "summary": "里面蕴含着夏天的气息！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「里面蕴含着夏天的气息！」" },
        { "type": "text", "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」" },
        { "type": "text", "content": "高脚鸟：「啧，还是问问她吧！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_spirits"],
      "tags": ["材料", "四季之灵"]
    },
    {
      "id": "bighead_autumn_spirit",
      "name": "秋之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_autumn_spirit.png",
      "summary": "里面蕴含着秋天的气息！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「里面蕴含着秋天的气息！」" },
        { "type": "text", "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」" },
        { "type": "text", "content": "高脚鸟：「啧，还是问问她吧！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_spirits"],
      "tags": ["材料", "四季之灵"]
    },
    {
      "id": "bighead_winter_spirit",
      "name": "冬之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_winter_spirit.png",
      "summary": "里面蕴含着冬天的气息！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「里面蕴含着冬天的气息！」" },
        { "type": "text", "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」" },
        { "type": "text", "content": "高脚鸟：「啧，还是问问她吧！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_spirits"],
      "tags": ["材料", "四季之灵"]
    },
    {
      "id": "bb_gaojiaoniao_fhd",
      "name": "凤凰蛋",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fhd.png",
      "summary": "上古之物！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「上古之物！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao", "bb_gaojiaoniao_fqh"],
      "tags": ["材料", "凤凰", "蛋"]
    },
    {
      "id": "bb_gaojiaoniao_cmyh",
      "name": "重明遗骨",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_cmyh.png",
      "summary": "形似鸡，鸣如凤，眼双瞳，唤重明。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「形似鸡，鸣如凤，眼双瞳，唤重明。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao", "bb_gaojiaoniao_fh"],
      "tags": ["材料", "重明", "遗骨"]
    },
    {
      "id": "bb_gaojiaoniao_bzmgt",
      "name": "不知名骨头",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_bzmgt.png",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「不知名骨头」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao", "bb_gaojiaoniao_cmyh"],
      "tags": ["材料", "遗骨"]
    },
    // ── 其他 ──
    {
      "id": "bighead_buran",
      "name": "不染",
      "category": "misc",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_buran.png",
      "summary": "看取莲花净，应知不染心。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「看取莲花净，应知不染心。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu", "mech_buran", "bighead_ymlx"],
      "tags": ["其他", "莲", "月台"]
    },
    {
      "id": "bb_gaojiaoniao_px_builder",
      "name": "莲令",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_px_builder.png",
      "summary": "这回应该可以听我的了吧！你这憨货！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「这回应该可以听我的了吧！你这憨货！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao"],
      "tags": ["其他", "貔貅", "莲"]
    },
    {
      "id": "bighead_sanbao_builder",
      "name": "何三宝",
      "category": "misc",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sanbao_builder.png",
      "summary": "好可爱的一只猫！",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「好可爱的一只猫！」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["pangtouyu"],
      "tags": ["其他", "猫", "三宝"]
    },
    {
      "id": "bb_cwd",
      "name": "春望蝶",
      "category": "misc",
      "owner": "common",
      "image": "assets/img/items/bb_cwd.png",
      "summary": "它正在忙碌",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「它正在忙碌」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["bb_cct"],
      "tags": ["其他", "蝴蝶", "春望"]
    },
    {
      "id": "bb_gaojiaoniao_fr",
      "name": "芙蓉",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fr.png",
      "summary": "水仙欲上锦鲤去，一夜芙蓉红泪多。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「水仙欲上锦鲤去，一夜芙蓉红泪多。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao", "bb_gaojiaoniao_fh"],
      "tags": ["其他", "芙蓉", "冥火"]
    },
    {
      "id": "bb_gaojiaoniao_lh",
      "name": "轮回",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_lh.png",
      "summary": "纵不入五道，亦有轮回。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「纵不入五道，亦有轮回。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao", "bb_gaojiaoniao_fh"],
      "tags": ["其他", "轮回"]
    },
    {
      "id": "bb_gaojiaoniao_gjsh",
      "name": "古祭神辉",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_gjsh.png",
      "summary": "混沌初开，圣瞾五灵。",
      "recipe": "",
      "detail_blocks": [
        { "type": "text", "content": "制作栏描述：「混沌初开，圣瞾五灵。」" },
        { "type": "text", "content": "配方与数值位于包内加密脚本，本站暂不收录。" },
      ],
      "related": ["gaojiaoniao", "bb_gaojiaoniao_lh"],
      "tags": ["其他", "五灵", "祭祀"]
    },
  ],

  /**
   * === D. 机制数据 mechanics ===
   *
   * 标准示例:
   * { id, title, summary, image, illustration, detail_blocks, related }
   *
   * 本区说明：机制文案来自 modinfo.lua 的配置项原文与 strings.lua 的台词，未作数值推断。
   */
  "mechanics": [
    {
      "id": "mech_lingqi",
      "title": "灵气",
      "summary": "累计存活达到设定天数后，灵气上限由 100 提升至 200。",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        { "type": "text", "content": "配置项「灵气上限成长天数」的说明原文：胖头鱼累计存活达到指定天数后，灵气上限由100提升至200。" },
        { "type": "text", "content": "可选天数：10 天 / 25 天 / 50 天 / 100 天，默认 50 天。" },
        { "type": "text", "content": "包内相关文件：scripts/components/bighead_lingqi.lua、scripts/widgets/bighead_lingqibadge.lua，动画 status_bighead_lingqi。" },
        { "type": "text", "content": "灵气的具体数值与消耗规则位于加密脚本，本页暂不列出。" },
      ],
      "related": ["pangtouyu", "bighead_ylss", "bighead_spear"]
    },
    {
      "id": "mech_jieqi",
      "title": "节气",
      "summary": "制作栏新增「节气」分类，24 节气与四季共 29 项。",
      "image": "assets/img/mechanics/jieqi_tab.png",
      "detail_blocks": [
        { "type": "text", "content": "包内字符串 STRINGS.UI.CRAFTING_FILTERS.BIGHEAD_JQ_TAB = 「节气」，即制作栏上的分类页签（图标 assets/img/mechanics/jieqi_tab.png 即该页签贴图）。" },
        { "type": "text", "content": "每个节气都带一条制作栏描述，内容就是二十四节气的三候原文，例如立春「东风解冻 蛰虫始振 鱼陟负冰」、大寒「鸡始乳 征鸟厉疾 水泽腹坚」。" },
        { "type": "text", "content": "四季另有春季、夏季、秋季、冬季四条，冬季还多一个「冬季(10级)」变体。" },
        { "type": "text", "content": "包内动画：bighead_jqproject_spring / summer / autumn / winter 等，节气名称与三候全部可在「节气」分区逐条查看。" },
      ],
      "related": ["pangtouyu", "jq_lc", "jq_dz", "jq_chun"]
    },
    {
      "id": "mech_spirits",
      "title": "四季之灵",
      "summary": "春之灵、夏之灵、秋之灵、冬之灵，四种蕴含季节气息的能量。",
      "image": "assets/img/items/bighead_spring_spirit.png",
      "detail_blocks": [
        { "type": "text", "content": "通用检查（春之灵）：「里面蕴含着春天的气息！」夏、秋、冬三条只换季节名。" },
        { "type": "text", "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」" },
        { "type": "text", "content": "高脚鸟：「啧，还是问问她吧！」" },
        { "type": "text", "content": "包内另有 bighead_jqspirit.lua 与 SPIRIT_FX 动画变体；四季投射动画为 bighead_jqproject_spring / summer / autumn / winter。" },
      ],
      "related": ["pangtouyu", "gaojiaoniao", "bighead_spring_spirit", "bighead_winter_spirit"]
    },
    {
      "id": "mech_parasite",
      "title": "寄生灵",
      "summary": "寄生桃灵、寄生荷灵、寄生桂灵、寄生梅灵四种，各有 planted / active 两态。",
      "image": "assets/img/mechanics/jisheng_taoling.png",
      "detail_blocks": [
        { "type": "text", "content": "通用检查：「最好不要打扰它吧！」" },
        { "type": "text", "content": "胖头鱼：「万物皆有灵，但是你没我灵！」" },
        { "type": "text", "content": "高脚鸟：「前车之鉴，我还是不要招惹这类东西！」" },
        { "type": "text", "content": "包内动画：bighead_jisheng_taoling / heling / guiling / meiling，另有对应地图图标。" },
      ],
      "related": ["pangtouyu", "gaojiaoniao"]
    },
    {
      "id": "mech_buran",
      "title": "不染与月台",
      "summary": "是否在月台附近生成不染，每个世界只生成一次（默认开启）。",
      "image": "assets/img/items/bighead_buran.png",
      "detail_blocks": [
        { "type": "text", "content": "配置项「不染在月台刷新」的说明原文：是否在月台附近生成不染，每个世界只生成一次。" },
        { "type": "text", "content": "「不染」本身是一个包内条目，制作栏描述为「看取莲花净，应知不染心。」，通用检查台词同句。" },
        { "type": "text", "content": "包内动画还分了 bighead_buran_skin1 ~ skin4 与 bighead_buran_pro 等版本。" },
      ],
      "related": ["pangtouyu", "bighead_buran", "bighead_ymlx"]
    }
  ],

  /**
   * === E. 地点数据 terrains ===
   *
   * 标准示例: { id, title, summary, image, related, detail_blocks }
   *
   * 本区说明：原来放的是占位地形，现改为模组里真实存在的地点——[[太极青玄阁]] 及其内部。
   * 文字全部来自 strings.lua 对阁内各物件的检查台词。
   */
  "terrains": [
    {
      "id": "loc_qingxuan",
      "title": "太极青玄阁",
      "summary": "循阶而入，步入太极清玄阁，道韵清幽，尘烦尽散。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": ["pangtouyu", "bb_cct"],
      "detail_blocks": [
        { "type": "text", "content": "「循阶而入，步入太极清玄阁，道韵清幽，尘烦尽散。」——包内对太极青玄阁的检查台词。" },
        { "type": "text", "content": "阁中的陈设各有名字：鎏金太极铃、太极莲尊、引霄灵藤、鎏角青玄门、银翘古木门、青石楼梯、花盖、藤蔓。" },
        { "type": "text", "content": "青石楼梯：「缓步出阁」。" },
      ]
    },
    {
      "id": "loc_hall",
      "title": "阁中厅堂",
      "summary": "玄铃轻鸣，清音涤荡尘绪，循声迈步，进入厅堂之内。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": ["pangtouyu"],
      "detail_blocks": [
        { "type": "text", "content": "鎏金太极铃：「玄铃轻鸣，清音涤荡尘绪，循声迈步，进入厅堂之内。」" },
        { "type": "text", "content": "太极莲尊：「巨椅高挺，肃穆玄奥，为阁中尊位。」" },
      ]
    },
    {
      "id": "loc_bedroom",
      "title": "阁主卧房",
      "summary": "合起鎏角青玄门，辞别阁主卧房。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": ["pangtouyu"],
      "detail_blocks": [
        { "type": "text", "content": "鎏角青玄门：「合起鎏角青玄门，辞别阁主卧房。」" },
        { "type": "text", "content": "银翘古木门：包内台词与鎏角青玄门相同。" },
        { "type": "text", "content": "引霄灵藤：「垂落一丛引霄灵藤，轻触藤蔓，便可循着后方阶梯去往上层阁楼。」" },
      ]
    }
  ],

  /**
   * === 季节数据 seasons（本站用作「节气」）===
   *
   * 标准示例: { id, name, image, summary, detail_blocks, related }
   *
   * 本区说明：扩展字段，由 assets/js/data.js 自动发现。
   * 24 节气 + 四季，名称与 summary（三候）均取自 strings.lua。
   */
  "seasons": [
    {
      "id": "jq_lc",
      "name": "立春",
      "image": "assets/img/seasons/jq_lc.png",
      "summary": "东风解冻 蛰虫始振 鱼陟负冰",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_ys",
      "name": "雨水",
      "image": "assets/img/seasons/jq_ys.png",
      "summary": "獺祭鱼 鸿雁来 草木萌动",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_jz",
      "name": "惊蛰",
      "image": "assets/img/seasons/jq_jz.png",
      "summary": "桃始华 仓庚鸣 鹰化为鸠",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_cf",
      "name": "春分",
      "image": "assets/img/seasons/jq_cf.png",
      "summary": "玄鸟至 雷乃发声 始电",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_qm",
      "name": "清明",
      "image": "assets/img/seasons/jq_qm.png",
      "summary": "桐始华 田鼠化为驾 虹始见",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_gy",
      "name": "谷雨",
      "image": "assets/img/seasons/jq_gy.png",
      "summary": "萍始生 鸣鸠拂其羽 戴胜降于桑",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_lx",
      "name": "立夏",
      "image": "assets/img/seasons/jq_lx.png",
      "summary": "蝼蟈鸣 蚯蚓岀 王瓜生",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_xm",
      "name": "小满",
      "image": "assets/img/seasons/jq_xm.png",
      "summary": "苦菜秀 靡草死 麦秋生",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_mz",
      "name": "芒种",
      "image": "assets/img/seasons/jq_mz.png",
      "summary": "螳螂生 贍始鸣 反舌无声",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_xz",
      "name": "夏至",
      "image": "assets/img/seasons/jq_xz.png",
      "summary": "鹿角解 蝉始鸣 半夏生",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_xs",
      "name": "小暑",
      "image": "assets/img/seasons/jq_xs.png",
      "summary": "温风至 蟋蟀居辟 鷹始鸷",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_ds",
      "name": "大暑",
      "image": "assets/img/seasons/jq_ds.png",
      "summary": "腐草为萤 土润溽暑 大雨时行",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_lq",
      "name": "立秋",
      "image": "assets/img/seasons/jq_lq.png",
      "summary": "凉风至 白露降 寒蝉鸣",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_cs",
      "name": "处暑",
      "image": "assets/img/seasons/jq_cs.png",
      "summary": "鹰乃祭鸟 天地始肃 禾乃登",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_bl",
      "name": "白露",
      "image": "assets/img/seasons/jq_bl.png",
      "summary": "鸿雁来 玄鸟归 群鸟养羞",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_qf",
      "name": "秋分",
      "image": "assets/img/seasons/jq_qf.png",
      "summary": "雷始收声 蛰虫培户 水始涸",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_hl",
      "name": "寒露",
      "image": "assets/img/seasons/jq_hl.png",
      "summary": "鸿雁来宾 雀入大水为蛤 菊有黄华",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_sj",
      "name": "霜降",
      "image": "assets/img/seasons/jq_sj.png",
      "summary": "豺乃祭兽 草木黄落 蛰虫咸伏",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_ld",
      "name": "立冬",
      "image": "assets/img/seasons/jq_ld.png",
      "summary": "水始冰 地始冻 雉入大水为蜃",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_xx",
      "name": "小雪",
      "image": "assets/img/seasons/jq_xx.png",
      "summary": "虹藏不见 天气腾地气降 闭塞成冬",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_dx",
      "name": "大雪",
      "image": "assets/img/seasons/jq_dx.png",
      "summary": "鹃鸥不鸣 虎始交 茘挺生",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_dz",
      "name": "冬至",
      "image": "assets/img/seasons/jq_dz.png",
      "summary": "蚯蚓结 麇角解 水泉动",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_xh",
      "name": "小寒",
      "image": "assets/img/seasons/jq_xh.png",
      "summary": "雁北乡 鹋始巣 雉始鸲",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_dh",
      "name": "大寒",
      "image": "assets/img/seasons/jq_dh.png",
      "summary": "鸡始乳 征鸟厉疾 水泽腹坚",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_chun",
      "name": "春季",
      "image": "assets/img/seasons/jq_chun.png",
      "summary": "春风又绿江南岸，明月何时照我还。",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_xia",
      "name": "夏季",
      "image": "assets/img/seasons/jq_xia.png",
      "summary": "绿树阴浓夏日长，楼台倒影入池塘。",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_qiu",
      "name": "秋季",
      "image": "assets/img/seasons/jq_qiu.png",
      "summary": "停车坐爱枫林晚，霜叶红于二月花。",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_dong",
      "name": "冬季",
      "image": "assets/img/seasons/jq_dong.png",
      "summary": "晚来天欲雪，能饮一杯无？",
      "related": ["pangtouyu", "mech_jieqi"]
    },
    {
      "id": "jq_dong10",
      "name": "冬季(10级)",
      "image": "assets/img/seasons/jq_dong10.png",
      "summary": "晚来天欲雪，能饮一杯无？",
      "related": ["pangtouyu", "mech_jieqi"]
    }
  ],

  /**
   * === F. 更新日志 changelog ===
   *
   * 标准示例: { id, title, image, related, version, date, changes }
   *
   * 本区说明：包内没有官方更新说明，所以这里只列「可按包内文件核对」的事实，
   * 不写未经证实的版本变更内容。date 取压缩包文件时间。
   */
  "changelog": [
    {
      "id": "log_4400",
      "title": "v4.4：站点按包内实装内容建立",
      "image": "assets/img/items/bighead_spear.png",
      "version": "v4.4",
      "date": "2026-10-18",
      "related": ["pangtouyu", "gaojiaoniao", "mech_jieqi", "mech_lingqi"],
      "changes": [
        "本条目依据模组包 bighead (38).zip 整理，包内 modinfo.lua 的 version = 4.4。",
        "两名角色：[[胖头鱼]]、[[高脚鸟]]（modinfo 署名「作者-胖头鱼，高脚鸟（后者是个不干活的）」）。",
        "收录 66 项物品，图标全部由包内 KTEX 贴图转成 PNG，文案取自 strings.lua 原文。",
        "新增机制条目：[[灵气]]、[[节气]]、[[四季之灵]]、[[寄生灵]]、[[不染与月台]]。",
        "制作栏新增「节气」分类，24 节气与四季共 29 项，每条都带三候原文。",
        "包内规模：动画 224 个、贴图 191 个；人物皮肤胖头鱼 6 套、高脚鸟 5 套（按 anim 文件名统计）。",
        "包内署名：参与美术 胖头鱼、魂姆、杰克天、喵大仙；人物动画 老张；装备动画 胖头鱼；代码 花花。",
        "配方、数值与技能说明位于加密脚本（modmain0/1、modworldgenmain0/1 及大部分 prefabs），本站暂不收录。"
      ]
    }
  ],

  /**
   * === G. 名称映射 relations ===
   *
   * id → 中文名的映射由 data.js 自动从 name / title 生成，此处留空即可。
   */
  "relations": {},

  /**
   * === H. 海报数据 posters ===
   *
   * 标准示例: { id, src, caption }
   * caption 同时作为 alt 文本与加载失败时的显示文字。
   */
  "posters": [
    {
      "id": "poster_1",
      "src": "assets/img/poster/1.png",
      "caption": "高脚鸟 · 角色立绘（横版）"
    },
    {
      "id": "poster_2",
      "src": "assets/img/poster/2.png",
      "caption": "高脚鸟 · 角色立绘"
    },
    {
      "id": "poster_3",
      "src": "assets/img/poster/3.png",
      "caption": "高脚鸟 · 角色立绘（竖版）"
    }
  ],

  /**
   * === I. 页面分区 sections ===
   *
   * 标准示例:
   * { id, title, themeClass, rootId, splitHeader?, filterButton? }
   *
   * 注意：items 的 rootId 必须是 items-root，changelog 必须是 changelog-root（render.js 写死）。
   * 地形分区标题改成「地点」、季节分区标题改成「节气」，id 保持不变以免死链。
   */
  "sections": [
    {
      "id": "items",
      "title": "物品",
      "themeClass": "section--paper",
      "rootId": "items-root",
      "splitHeader": true,
      "filterButton": true
    },
    {
      "id": "mechanics",
      "title": "机制",
      "themeClass": "section--ink",
      "rootId": "mechanics-root"
    },
    {
      "id": "terrains",
      "title": "地点",
      "themeClass": "section--paper",
      "rootId": "terrains-root"
    },
    {
      "id": "seasons",
      "title": "节气",
      "themeClass": "section--ink",
      "rootId": "season-root"
    },
    {
      "id": "changelog",
      "title": "更新",
      "themeClass": "section--paper",
      "rootId": "changelog-root"
    }
  ]
};
