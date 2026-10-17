window.SITE_DATA = {

  /**
   * === A. 站点基础信息 meta ===
   *
   * 标准示例:
   * {
   *   site_title: "站点标题",
   *   subtitle_latin: "副标题",
   *   author: "作者名",
   *   version: "v0.1.0",
   *   workshop_url: "创意工坊链接",
   *   manifesto: "站点宣言",
   *   links: [{ label: "链接标签", url: "链接地址" }],
   *   copyright: "版权信息"
   * }
   *
   * 示例解释:
   * - site_title: 网站主标题，同时参与浏览器标题生成。
   * - subtitle_latin: 首页主视觉下方的副标题。
   * - author: 模组作者名。
   * - version: 当前站点/模组版本号。
   * - workshop_url: 创意工坊链接，用于首页和页脚。
   * - manifesto: 站点宣言或简介，展示在首页。
   * - links: 外部链接列表，展示在首页或页脚。
   * - copyright: 页脚版权说明。
   */
  "meta": {
    "site_title": "我们饥佬是这样的",             //主标题
    "subtitle_latin": "",                       // 副标题，留空则不展示
    "author": "胖头鱼",                         //作者
    "version": "v0.1.0",                        //版本
    "workshop_url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230",
    "manifesto": "站点宣言占位。",                //在网站最下面
    "links": [
      {
        "label": "创意工坊链接",
        "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230"
      },
      {
        "label": "占位外链2",
        "url": "https://github.com/example/dao-yinyang-site/issues"
      }//参考格式可以继续加链接
    ],
    "copyright": "© 2026 我们饥佬是这样的"
  },

  /**
   * === 物品分类定义 categories ===
   *
   * 标准示例:
   * { "id": "分类标识", "name": "分类中文名" }
   *
   * 示例解释:
   * - id: 物品 category 字段引用的值。
   * - name: 筛选面板和卡片上显示的分类名。
   * - 新增分类只需在此数组加一条，筛选和标签自动生效。
   */
  "categories": [
    { "id": "weapon", "name": "武器" },
    { "id": "tool", "name": "工具" },
    { "id": "material", "name": "材料" },
    { "id": "structure", "name": "建筑" },
    { "id": "food", "name": "食物" },
    { "id": "crop", "name": "作物" },
    { "id": "misc", "name": "其他" }
  ],

  /**
   * === B. 角色数据 characters ===
   *
   * 标准示例:
   * {
   *   id: "角色唯一标识",
   *   side: "阵营，zuo 或 you",
   *   name: "角色名",
   *   epithet: "角色外号/称号", 在右上角的全局搜索中可被搜索到
   *   portrait: "角色立绘路径",
   *   stats: { hp: 生命, san: 理智, hunger: 饥饿 },
   *   setting: ["设定条目"],
   *   exclusive_intro: ["角色专属介绍段落"]
   * }
   *
   * 示例解释:
   * - id: 程序用的稳定标识，其他条目的 owner / related 通过此值关联角色。
   * - side: 左右标识，"zuo" 为左，"you" 为右。目前胖头鱼在左，高脚鸟在右
   * - setting: 角色设定，逐条展示。
   * - exclusive_intro: 角色专属介绍
   */
  "characters": [
    {
      "id": "pangtouyu",
      "side": "zuo",                            // zuo=左, you=右
      "name": "胖头鱼",
      "epithet": "角色外号",
      "portrait": "assets/img/characters/pangtouyu_head.png",//角色立绘
      "stats": {
        "hp": 150,                              // 生命值
        "san": 200,                             // 理智值
        "hunger": 150                           // 饥饿值
      },
      "setting": [                              // 设定，逐条展示
        "胖头鱼设定占位1。",
        "胖头鱼设定占位2。"
      ],
      "exclusive_intro": [                      // "专属"的介绍，数组逐段渲染
        "胖头鱼专属介绍占位第一段。",
        "胖头鱼专属介绍占位第二段。"
      ],
    },
    {
      "id": "gaojiaoniao",
      "side": "you",
      "name": "高脚鸟",
      "epithet": "角色外号",
      "portrait": "assets/img/characters/gaojiaoniao_head.png",
      "stats": {
        "hp": 170,
        "san": 140,
        "hunger": 165
      },
      "setting": [
        "高脚鸟设定占位1。",
        "高脚鸟设定占位2。"
      ],
      "exclusive_intro": [                      // 角色专属介绍，数组逐段渲染
        "高脚鸟专属介绍占位第一段。",
        "高脚鸟专属介绍占位第二段。"
      ],
    }
  ],

  /**
   * === C. 物品数据 items ===
   *
   * 标准示例:
   * {
   *   id: "物品唯一标识",
   *   name: "物品名称",
   *   category: "分类：weapon/tool/material/structure/food/crop/misc",
   *   owner: "所属角色 id，common 表示通用",
   *   image: "物品图标路径",
   *   summary: "物品简介",
   *   recipe: "制作配方（含 [id] 格式的素材引用）",
   *   tech: "所需科技",
   *   detail_blocks: [{ type: "text/image", content/src: "...", caption: "..." }],
   *   related: ["关联条目 id 列表"],
   *   tags: ["分类标签"]
   * }
   *
   * 示例解释:
   * - category: 物品分类，用于筛选和分组展示。
   * - owner: 所属角色 id，common 表示所有角色通用。
   * - recipe: 配方中 [xxxx] 格式的标记会渲染为素材图标。[xxxx]就是物品id，可以自动将物品的图片缩小放在这里
   * - detail_blocks: 混合图文详情块，type 为 text（文本） 时用 content，为 image（图片） 时用 src（图片路径） + caption（图片说明）。
   * - related：这里写物品id，会在底下的关联里出现
   */
  "items": [
    {
      "id": "item_inkstone",                    //物品的专属id
      "name": "占位物品1",                       //物品的名字
      "category": "tool",                       // 物品分类：有weapon/tool/material/structure/food/crop/misc
      "owner": "pangtouyu",                     // 所属角色 id，common 表示通用
      "image": "assets/img/items/testitem.png",//图片路径
      "summary": "占位物品1简介。",
      "recipe": "[res_stone] ×1  [res_charcoal] ×1",  // 配方中 [id] 格式渲染为素材图标
      "tech": "物品科技占位",
      "detail_blocks": [                        // 混合图文详情块
        {
          "type": "text",                       // 类型：text=文本, image=图片
          "content": "占位物品1详情，可关联[[占位物品1]]与[[占位机制1]]。"
        },
        {
          "type": "text",                       // 类型：text=文本, image=图片
          "content": "占位物品1详情，可关联[[占位物品2]]与[[占位机制2]]。"
        },
        {
          "type": "image",
          "src": "assets/img/items/inkstone.svg",
          "caption": "占位物品1图片说明"          // 图片说明文字
        }
      ],
      "related": [                              // 关联条目 id 列表
        "pangtouyu",
        "item_brush",
        "mech_inkflow"
      ],
      "tags": [
        "占位物品标签",
        "占位工具"
      ]
    },
    {
      "id": "item_brush",
      "name": "占位物品2",
      "category": "weapon",                     // weapon=武器
      "owner": "pangtouyu",
      "image": "assets/img/items/brush.svg",
      "summary": "占位物品2简介。",
      "recipe": "[item_inkstone] ×1",
      "tech": "物品科技占位",
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位物品2详情，可在此填写武器、工具或装备说明。"
        }
      ],
      "related": [
        "pangtouyu",
        "item_inkstone",
        "mech_yinyang"
      ],
      "tags": [
        "占位物品标签",
        "占位武器"
      ]
    },
    {
      "id": "item_paper_lantern",
      "name": "占位物品3",
      "category": "structure",                  // structure=建筑
      "owner": "gaojiaoniao",
      "image": "assets/img/items/paperlantern.svg",
      "summary": "占位物品3简介。",
      "recipe": "[res_charcoal] ×1  [res_moonglass] ×1",
      "tech": "物品科技占位",
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位物品3详情，可填写建筑、照明或功能性说明。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_yinyang",
        "mech_inkflow"
      ],
      "tags": [
        "占位物品标签",
        "占位建筑"
      ]
    },
    {
      "id": "res_stone",
      "name": "占位材料1",
      "category": "material",                   // material=材料
      "owner": "common",                        // common=通用物品
      "image": "assets/img/items/res_stone.svg",
      "summary": "占位材料1简介。",
      "recipe": "",                             // 空字符串表示无制作配方
      "tech": "无",
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位材料1来源，可填写掉落、采集或制作来源。"
        }
      ],
      "related": [
        "item_inkstone"
      ],
      "tags": [
        "占位材料标签"
      ]
    },
    {
      "id": "res_charcoal",
      "name": "占位材料2",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/res_charcoal.svg",
      "summary": "占位材料2简介。",
      "recipe": "",
      "tech": "无",
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位材料2来源，可填写用途、合成链或刷新规则。"
        }
      ],
      "related": [
        "item_inkstone",
        "item_paper_lantern",
        "item_brush"
      ],
      "tags": [
        "占位材料标签"
      ]
    },
    {
      "id": "res_moonglass",
      "name": "占位材料3",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/res_moonglass.svg",
      "summary": "占位材料3简介。",
      "recipe": "",
      "tech": "无",
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位材料3来源，可填写地形、事件或怪物掉落。"
        }
      ],
      "related": [
        "item_inkstone",
        "item_paper_lantern",
        "terrain_moon_marsh"
      ],
      "tags": [
        "占位材料标签"
      ]
    }
  ],

  /**
   * === D. 机制数据 mechanics ===
   *
   * 标准示例:
   * {
   *   id: "机制唯一标识",
   *   title: "机制标题",
   *   summary: "简介",
   *   image: "机制图标路径",
   *   detail_blocks: [{ type: "text/image", content/src: "...", caption: "..." }],
   *   illustration: "说明图路径",
   *   related: ["关联条目 id 列表"]
   * }
   *
   * 示例解释:
   * - detail_blocks: 混合图文详情块，结构同 items。
   * - illustration: 机制详情页的说明配图。
   */
  "mechanics": [
    {
      "id": "mech_yinyang",
      "title": "占位机制1",
      "summary": "占位机制1简介。",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [                        // 混合图文详情块
        { "type": "text", "content": "占位机制1介绍第一段，可在此填写触发条件、范围与基础效果。" },
        { "type": "text", "content": "占位机制1介绍第二段，可在此填写数值、限制与联动说明。" },
        { "type": "text", "content": "占位机制1介绍第三段，可关联[[占位物品1]]或[[占位物品3]]。" }
      ],
      "related": [
        "pangtouyu",
        "gaojiaoniao",
        "item_inkstone",
        "item_paper_lantern"
      ]
    },
    {
      "id": "mech_inkflow",
      "title": "占位机制2",
      "summary": "占位机制2简介。",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        { "type": "text", "content": "占位机制2介绍第一段，可在此填写机制来源与表现。" },
        { "type": "text", "content": "占位机制2介绍第二段，可在此填写与角色、物品、地形的联动。" }
      ],
      "illustration": "assets/img/mechanics/yinyang.svg",
      "related": [
        "pangtouyu",
        "gaojiaoniao",
        "item_brush",
        "item_paper_lantern"
      ]
    }
  ],

  /**
   * === E. 地形数据 terrains ===
   *
   * 标准示例:
   * {
   *   id: "地形唯一标识",
   *   title: "地形标题",
   *   summary: "简介",
   *   image: "地形图标路径",
   *   related: ["关联条目 id 列表"],
   *   detail_blocks: [{ type: "text/image", content/src: "...", caption: "..." }]
   * }
   *
   * 示例解释:
   * - detail_blocks: 混合图文详情块，结构同 items。
   */
  "terrains": [
    {
      "id": "terrain_bamboo",
      "title": "占位地形1",
      "summary": "占位地形1简介。",
      "image": "assets/img/terrains/bamboo_grove.svg",
      "related": [
        "gaojiaoniao",
        "item_paper_lantern"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位地形1介绍，可填写地形外观、资源、危险与角色联动。"
        }
      ]
    },
    {
      "id": "terrain_moon_marsh",
      "title": "占位地形2",
      "summary": "占位地形2简介。",
      "image": "assets/img/terrains/moon_marsh.svg",
      "related": [
        "pangtouyu",
        "item_inkstone",
        "mech_yinyang"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "占位地形2介绍，可填写生成规则、特殊资源与机制影响。"
        }
      ]
    }
  ],

  /**
   * === 季节数据 seasons ===
   *
   * 标准示例:
   * {
   *   id: "季节唯一标识",
   *   name: "季节名称",
   *   image: "季节图标路径",
   *   summary: "季节简介",
   *   detail_blocks: [{ type: "text/image", content/src: "...", caption: "..." }],
   *   related: ["关联条目 id 列表"]
   * }
   *
   * 示例解释:
   * - id: 程序用的稳定标识。
   * - name: 季节展示名称。
   * - summary: 卡片摘要。
   * - detail_blocks: 混合图文详情块，结构同 items。
   */
  "seasons": [
    { "id": "spring",
      "name": "春季",
      "image": "assets/img/items/terrain_token.svg",
      "summary": "...",
      "related": [
          "pangtouyu",],
    }
  ],

  /**
   * === F. 更新日志 changelog ===
   *
   * 标准示例:
   * {
   *   id: "更新条目唯一标识",
   *   title: "更新标题",
   *   image: "更新封面图路径",
   *   related: ["关联条目 id 列表"],
   *   version: "版本号",
   *   date: "发布日期",
   *   changes: ["变更内容列表"]
   * }
   *
   * 示例解释:
   * - version: 语义化版本号。
   * - date: ISO 8601 日期格式。
   * - changes: 逐条列举的更新内容。
   */
  "changelog": [
    {
      "id": "log_010",
      "title": "占位更新1",
      "image": "assets/img/items/terrain_token.svg",
      "related": [
        "pangtouyu",
        "gaojiaoniao",
        "mech_yinyang"
      ],
      "version": "v0.1.0",
      "date": "2026-05-25",                     // ISO 8601 日期格式
      "changes": [                              // 逐条变更内容
        "占位更新1变更内容一。",
        "占位更新1变更内容二。",
        "占位更新1变更内容三。",
        "占位更新1变更内容三。",
        "占位更新1变更内容三。",
      ]
    },
    {
      "id": "log_009",
      "title": "占位更新2",
      "image": "assets/img/items/terrain_token.svg",
      "related": [
        "item_inkstone",
        "item_paper_lantern"
      ],
      "version": "v0.0.9",
      "date": "2026-05-18",
      "changes": [
        "占位更新2变更内容一。",
        "占位更新2变更内容二。"
      ]
    }
  ],

  /**
   * === G. 名称映射 relations ===
   *
   * id → 中文名的映射表，由 data.js 在加载时自动生成：
   * - 角色取 name 字段
   * - 物品取 name 字段
   * - 机制/地形/更新日志取 title 字段
   *
   * 如某条目需要不同于 name/title 的展示名，可在此对象中手动添加，手动值优先。
   * 反向映射 nameToId 由 data.js 运行时生成，供 [[名称]] 格式的站内跳转使用。
   */
  "relations": {},

  /**
   * === H. 海报数据 posters ===
   *
   * 标准示例:
   * {
   *   id: "海报唯一标识",
   *   src: "海报图片路径",
   *   caption: "海报说明文字"
   * }
   *
   * 示例解释:
   * - id: 程序用的海报标识。
   * - src: 海报图片路径。
   * - caption: 海报的 alt 文本和说明文字，同时作为图片加载失败时的显示。
   */
  "posters": [
    {
      "id": "test_1",
      "src": "assets/img/poster/1.png",
      "caption": "测试滚动屏图片 1"               // 海报说明文字，同时用作 alt
    },
    {
      "id": "test_2",
      "src": "assets/img/poster/2.png",
      "caption": "测试滚动屏图片 2"
    },
    {
      "id": "test_3",
      "src": "assets/img/poster/3.png",
      "caption": "测试滚动屏图片 3"
    }
  ],

  /**
   * === I. 页面分区 sections ===
   *
   * 标准示例:
   * {
   *   id: "分区唯一标识",
   *   title: "分区标题",
   *   themeClass: "分区主题类名（section--paper / section--ink）",paper就是白色，ink就是黑色
   *   rootId: "对应的 DOM 容器 id",你直接写对应的id-root就行了，比如物品是items，就写items-root不用管什么意思
   *   splitHeader: true,    // 可选：标题栏是否分离,目前只有物品区有，其余位置不要添加
   *   filterButton: true    // 可选：是否显示筛选按钮，目前只有物品区有，其余位置不要添加
   * }
   *
   * 示例解释:
   * - id: 程序用的分区标识，与路由 section 参数对应。
   * - title: 分区标题文本。
   * - themeClass: section--paper 白底 / section--ink 黑底。
   * - rootId: 内容注入容器的 DOM id。
   * - splitHeader: 标题栏与主体分离布局（仅物品区）。
   * - filterButton: 是否在标题栏渲染筛选按钮（仅物品区）。
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
      "title": "地形",
      "themeClass": "section--paper",
      "rootId": "terrains-root"
    },
    {
      "id": "seasons",
      "title": "季节",
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
