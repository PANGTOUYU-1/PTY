/**
 * 我们饥佬是这样的 Wiki · v5.8
 * 内容依据 bighead.zip 内 modinfo.lua、scripts/main/recipes.lua、strings.lua、
 * bighead_food.lua、角色/装备 prefab 与机制组件整理；基础值与成长效果分开说明。
 * 小图标由模组 KTEX 转换并校正上下方向；展示图由 DST Mod Tool 原生渲染。
 * 修改内容后执行 node tools/check_data.mjs --strict 与 node tools/check_render.mjs。
 */
window.SITE_DATA = {
  "meta": {
    "site_title": "我们饥佬是这样的",
    "subtitle_latin": "",
    "author": "胖头鱼",
    "version": "v5.8",
    "workshop_url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230",
    "qq_group_url": "https://qm.qq.com/q/119CtJwiP8",
    "manifesto": "超级超级喜欢玩饥荒，搞了这个mod，哈哈哈哈，怎么方便怎么变态怎么来！",
    "links": [
      {
        "label": "创意工坊链接",
        "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230"
      }
    ],
    "copyright": "© 2026 我们饥佬是这样的",
    "source_version": "5.8",
    "source": {
      "archive": "bighead.zip",
      "version": "5.8",
      "updated": "2026-11-23"
    }
  },
  "categories": [
    {
      "id": "weapon",
      "name": "武器"
    },
    {
      "id": "armor",
      "name": "护具"
    },
    {
      "id": "tool",
      "name": "工具"
    },
    {
      "id": "structure",
      "name": "建筑"
    },
    {
      "id": "food",
      "name": "食物"
    },
    {
      "id": "crop",
      "name": "作物"
    },
    {
      "id": "material",
      "name": "材料"
    },
    {
      "id": "misc",
      "name": "生物"
    },
    {
      "id": "environment",
      "name": "自然景物"
    }
  ],
  "characters": [
    {
      "id": "pangtouyu",
      "side": "zuo",
      "name": "胖头鱼",
      "epithet": "鸿元净莲",
      "portrait": "assets/img/characters/pangtouyu_head.png",
      "model_image": "assets/img/characters/pangtouyu_idle.webp",
      "model_poster": "assets/img/characters/pangtouyu_idle.png",
      "appearances": [
        {
          "id": "default",
          "name": "原始形象",
          "label": "原始",
          "image": "assets/img/characters/pangtouyu_idle.webp",
          "poster": "assets/img/characters/pangtouyu_idle.png",
          "width": 311,
          "height": 477
        },
        {
          "id": "bighead_skin2",
          "name": "小七",
          "label": "小七",
          "image": "assets/img/characters/bighead_skin2_idle.webp",
          "poster": "assets/img/characters/bighead_skin2_idle.png",
          "width": 371,
          "height": 379
        },
        {
          "id": "bighead_skin3",
          "name": "库洛米",
          "label": "库洛米",
          "image": "assets/img/characters/bighead_skin3_idle.webp",
          "poster": "assets/img/characters/bighead_skin3_idle.png",
          "width": 316,
          "height": 377
        },
        {
          "id": "bighead_skin4",
          "name": "2026情人节-胖头鱼",
          "label": "情人节",
          "image": "assets/img/characters/bighead_skin4_idle.webp",
          "poster": "assets/img/characters/bighead_skin4_idle.png",
          "width": 376,
          "height": 352
        },
        {
          "id": "bighead_skin5",
          "name": "贫穷游侠",
          "label": "贫穷游侠",
          "image": "assets/img/characters/bighead_skin5_idle.webp",
          "poster": "assets/img/characters/bighead_skin5_idle.png",
          "width": 255,
          "height": 328
        },
        {
          "id": "bighead_skin6",
          "name": "奶龙",
          "label": "奶龙",
          "image": "assets/img/characters/bighead_skin6_idle.webp",
          "poster": "assets/img/characters/bighead_skin6_idle.png",
          "width": 312,
          "height": 350
        },
        {
          "id": "bighead_skin7",
          "name": "狐狸可是祥瑞",
          "label": "狐狸可是祥瑞",
          "image": "assets/img/characters/bighead_skin7_idle.webp",
          "poster": "assets/img/characters/bighead_skin7_idle.png",
          "width": 453,
          "height": 435
        }
      ],
      "featured_items": [
        "bighead_spear",
        "bighead_fanhua",
        "bighead_armor",
        "bighead_back"
      ],
      "shared_crafts": [
        "bighead_ruyi",
        "bighead_scrolls",
        "bighead_mwgt"
      ],
      "stats": {
        "hp": 150,
        "san": 150,
        "hunger": 150
      },
      "setting": [
        "鸿元净莲。基础属性：生命150、理智150、饥饿150。",
        "饮食：只吃料理，荤素都可以。普通锅料理、调味料理、[[芙蓉石蟠螭耳盖炉]]制作的七道料理及月饼均可食用。",
        "浆果、胡萝卜、生肉等原料不能直接吃，只用火烤熟也不能吃。最爱培根煎蛋，新鲜且未调味的一份回复90饥饿（通常为75）。",
        "当前[[灵气]]达到100时，还可食用灵魂，每次回复1点灵气；低于100时失去这项能力。",
        "默认移速为普通角色的2倍，可在模组设置中改为1.2倍或1.5倍；基础攻击倍率为1.5，灵气耗尽时降为0.5。",
        "初始携带[[避尘]]与一份[[果味加浓]]。",
        "使用[[繁花]]照料植物，也能进入[[太极青玄阁]]。",
        "空手对普通池塘使用捕鱼动作时，至少需要10饥饿；成功捕到后消耗10饥饿。[[碧波泉]]改为至少5饥饿、成功消耗5，也可泡澡恢复[[灵气]]。"
      ],
      "core_mechanics": [
        {
          "id": "mech_lingqi",
          "summary": "初始10点，初始上限100点。达到10点自带照明，50点可以踏水，100点在其他减伤后再减免30%伤害；装备技能和园艺会消耗灵气。"
        },
        {
          "id": "mech_jieqi",
          "summary": "通过琦玉器装配四季物品，获得制作双倍、攻击、减伤和冰冻等加成。四季主物品最高可升至10级。"
        }
      ],
      "exclusive_intro": [
        "她的物件分成几路：武器是[[避尘]]（制作栏动作名「惊鸿」），护具有[[灵墨]]与[[两仪]]，工具里有[[玉如意]]、[[蕴灵如意]]、[[琦玉器]]、[[玄清灵鉴]]，住处则是[[太极青玄阁]]。",
        "对四季之灵的检查台词是「无比纯粹的能量，我要好好想想！」，对[[玄清灵鉴]]只有一句「用着不错。」",
        "包内还有以她命名的[[胖头鱼月饼]]，检查台词为「鱼哥联名款！」。",
        "人物外观：小七、库洛米、2026情人节-胖头鱼、贫穷游侠、奶龙、狐狸可是祥瑞。其中「狐狸可是祥瑞」为指定账号解锁。"
      ],
      "quote": "三宝，不要乱跑！",
      "tagline": "打架什么的，都是洒洒水啦~"
    },
    {
      "id": "gaojiaoniao",
      "side": "you",
      "name": "高脚鸟",
      "epithet": "上古魔龙",
      "portrait": "assets/img/characters/gaojiaoniao_head.png",
      "model_image": "assets/img/characters/gaojiaoniao_idle.webp",
      "model_poster": "assets/img/characters/gaojiaoniao_idle.png",
      "appearances": [
        {
          "id": "default",
          "name": "原始形象",
          "label": "原始",
          "image": "assets/img/characters/gaojiaoniao_idle.webp",
          "poster": "assets/img/characters/gaojiaoniao_idle.png",
          "width": 426,
          "height": 442
        },
        {
          "id": "bb_gaojiaoniao_skin2",
          "name": "萧诧",
          "label": "萧诧",
          "image": "assets/img/characters/bb_gaojiaoniao_skin2_idle.webp",
          "poster": "assets/img/characters/bb_gaojiaoniao_skin2_idle.png",
          "width": 297,
          "height": 391
        },
        {
          "id": "bb_gaojiaoniao_skin3",
          "name": "玉桂狗",
          "label": "玉桂狗",
          "image": "assets/img/characters/bb_gaojiaoniao_skin3_idle.webp",
          "poster": "assets/img/characters/bb_gaojiaoniao_skin3_idle.png",
          "width": 243,
          "height": 381
        },
        {
          "id": "bb_gaojiaoniao_skin4",
          "name": "2026情人节-高脚鸟",
          "label": "情人节",
          "image": "assets/img/characters/bb_gaojiaoniao_skin4_idle.webp",
          "poster": "assets/img/characters/bb_gaojiaoniao_skin4_idle.png",
          "width": 330,
          "height": 371
        },
        {
          "id": "bb_gaojiaoniao_skin5",
          "name": "富贵王爷",
          "label": "富贵王爷",
          "image": "assets/img/characters/bb_gaojiaoniao_skin5_idle.webp",
          "poster": "assets/img/characters/bb_gaojiaoniao_skin5_idle.png",
          "width": 276,
          "height": 398
        }
      ],
      "featured_items": [
        "bb_gaojiaoniao_cs",
        "bb_gaojiaoniao_fqh",
        "bb_gaojiaoniao_fh",
        "bb_gaojiaoniao_cmyh"
      ],
      "shared_crafts": [
        "bighead_ybhz"
      ],
      "stats": {
        "hp": 150,
        "san": 100,
        "hunger": 200
      },
      "setting": [
        "上古魔龙。基础属性：生命150、理智100、饥饿200。",
        "默认移速为普通角色的2倍，可在模组设置中改为1.2倍或1.5倍。",
        "初始携带[[除祟]]、一份[[果味加浓]]与20弦的[[万象玑]]；新生时自动装备万象玑。",
        "获得[[芙蓉]]后可召唤专属伙伴[[溟羽]]，并切换激怒或安慰模式。",
        "可在物品栏献祭暗影心房：每次消耗1个，增加10点[[噬心]]并获得普通攻击伤害×2；持续期间不能重复献祭。"
      ],
      "core_mechanics": [
        {
          "id": "mech_shixin",
          "summary": "初始1点，上限100点，随生存天数增长，也可食用纯粹恐惧提高。超过25点开始持续损血；五道圆满后解除惩罚，友方心魔可为主人吸血。"
        },
        {
          "id": "mech_wudao",
          "summary": "通过参悟、击杀、饥饿死亡等条件领悟。五道圆满后三维上限为生命200、理智150、饥饿250，并免疫冻结、受击硬直和击退。"
        }
      ],
      "exclusive_intro": [
        "他的装备包括[[凤求凰]]（动作名「万箭」）、[[封魂]]、[[除祟]]、[[轮回]]、[[古祭神辉]]、[[重明遗骨]]和[[万象玑]]；[[芙蓉]]要通过[[花种祭眼仪式]]取得。",
        "对四季之灵的检查台词是「啧，还是问问她吧！」——包内胖头鱼、高脚鸟互相评价的句子基本都成对出现。",
        "以他命名的[[高脚鸟月饼]]，检查台词为「鸟弟联名款！」。",
        "人物外观：萧诧、玉桂狗、2026情人节-高脚鸟、富贵王爷。"
      ],
      "quote": "此间天地的妖兽颇为有趣！",
      "tagline": "永恒大陆？是何秘境！"
    }
  ],
  "items": [
    {
      "id": "bighead_spear",
      "name": "避尘",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_spear.png",
      "summary": "胖头鱼的近战剑，可跳向落点并释放八道剑影，适合突进和清怪。",
      "recipe": "无需科技；胖头鱼制作：冰×6 + 月亮碎片×6",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼装备在手部后普攻；冷却完成且当前[[灵气]]达到[[避尘施法灵气门槛]]时，右键选择落点施放“惊鸿”，最远16距离。默认门槛100点，可在设置中选50／60／70／80／90／100点；每次实际仍只消耗2点。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础攻击68、攻击距离2。惊鸿消耗2灵气，冷却2秒；落点半径4内造成施法扣费后当前灵气×15的伤害，向外飞出的八道剑影造成当前灵气×25的伤害，同一目标每次施法最多中一次剑影。技能这两段伤害不再乘人物与装备攻击倍率。"
        },
        {
          "type": "text",
          "title": "维护",
          "content": "自然保鲜期为5个游戏日，归零后消失；把一颗蓝宝石给予避尘，可使它永久保鲜。普攻不消耗攻击次数耐久。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「好特别的剑！」\n胖头鱼：「顺手的宝贝！」\n高脚鸟：「她就用这个？」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_lingqi",
        "bighead_spear_skin1",
        "bighead_spear_skin2",
        "bighead_spear_skin3",
        "config_bighead_bichen_min_lingqi"
      ],
      "tags": [
        "武器",
        "剑"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_spear.png"
    },
    {
      "id": "bighead_fanhua",
      "name": "繁花",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_fanhua.png",
      "summary": "胖头鱼的园艺法杖：范围施肥、采集、催熟和嫁接，也能远程攻击。",
      "recipe": "炼金引擎；胖头鱼制作：花瓣×99",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼先装备，再右键打开技能轮盘，选择施肥、采集、催熟或嫁接并指定目标；嫁接的材料与目标规则见[[繁花园艺]]。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础攻击20，攻击/命中距离8/10。持有时自动照料身边的农作物。范围施肥消耗10[[灵气]]，范围催熟消耗5灵气；范围采集不收取这两项灵气费用。施法最远40距离。\n 当前“范围催熟”实际针对[[春朝亭]]和普通蜂箱，补满黄油/蜂蜜产量；它不会把所有普通作物直接催到成熟。范围施肥会补充农田养分与水分。"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_gardening",
        "bighead_fanhua_skin1",
        "bighead_fanhua_skin2",
        "mech_lingqi",
        "bb_cct"
      ],
      "tags": [
        "武器",
        "繁花"
      ],
      "tech": "炼金引擎；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_fanhua.png"
    },
    {
      "id": "bb_gaojiaoniao_fqh",
      "name": "凤求凰",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fqh.png",
      "summary": "高脚鸟的成长型远程武器，可召唤剑雨与凤凰，并用材料提升攻击和暴击。",
      "recipe": "蓝图或指定制作站；高脚鸟制作：[bb_gaojiaoniao_fhd]×1 + 金色羽毛×10 + 红色羽毛×20 + 黄宝石×5",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备后远程普攻；右键瞄准地面施放剑雨技能，冷却180秒，最远16距离，骑乘时不能施放。把凤凰蛋或七彩石给予武器可升级。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "初始攻击100，攻击/命中距离14/16，装备移速×1.3。普攻命中生命低于10%的有效目标会将其斩杀。主动技能在目标周围落下约6秒剑雨并召唤凤、凰助战。"
        },
        {
          "type": "text",
          "title": "升级",
          "content": "把[[凤凰蛋]]或[[七彩石]]给予凤求凰，按下表强化。暴击伤害为普通命中的2倍。"
        },
        {
          "type": "table",
          "title": "升级材料",
          "columns": [
            "材料与用量",
            "效果与用量上限"
          ],
          "rows": [
            [
              "[[凤凰蛋]]×1",
              "基础攻击+50；可反复强化，攻击无升级上限"
            ],
            [
              "[[七彩石]]×1",
              "暴击率+1个百分点；最高95%；从初始0%升满需95颗"
            ]
          ]
        },
        {
          "type": "text",
          "title": "搭配胖头鱼",
          "content": "发射时附近12距离内有存活的胖头鱼，主弹丸命中后会延迟0.25秒追射一发75%伤害的次级弹丸，要求目标与使用者仍存活且武器仍由使用者持有。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fhd",
        "bighead_wcs",
        "bb_gaojiaoniao_fqh_skin1",
        "bb_gaojiaoniao_fqh_skin2",
        "bb_gaojiaoniao_fqh_skin3",
        "pangtouyu",
        "bb_gaojiaoniao_cmyh"
      ],
      "tags": [
        "武器",
        "长弓",
        "万箭"
      ],
      "tech": "蓝图或指定制作站；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_fqh.png"
    },
    {
      "id": "bb_gaojiaoniao_fh",
      "name": "封魂",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fh.png",
      "summary": "高脚鸟的近战剑，攻击时驱使五柄飞剑追击；封印成长会提高飞剑位面伤害。",
      "recipe": "远古伪科学站；高脚鸟制作：铥矿棒×5 + 懒人魔杖×1 + 暗影香炉×1",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备在手部，普攻目标时五柄飞剑随之追击。将指定首领雕像草图给予封魂，或持它参与击杀指定首领，积累封印。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "剑本体基础攻击125、距离2；飞剑初始位面伤害15，每个封印再增加10。"
        },
        {
          "type": "text",
          "title": "怎样升级",
          "content": "给予下表任意一种草图，每张增加1个封印，飞剑位面伤害+10；同种草图可重复使用。也可持封魂命中龙蝇、克劳斯、天体英雄第三阶段或远古织影者，目标随后死亡时增加1个封印。"
        },
        {
          "type": "table",
          "title": "升级材料",
          "columns": [
            "材料",
            "每次用量"
          ],
          "rows": [
            [
              "龙蝇雕塑草图",
              "1张"
            ],
            [
              "克劳斯雕塑草图",
              "1张"
            ],
            [
              "天体英雄雕塑草图",
              "1张"
            ],
            [
              "远古织影者雕塑草图",
              "1张"
            ]
          ]
        },
        {
          "type": "text",
          "title": "搭配",
          "content": "可将封魂交给[[古祭神辉]]收纳并保留成长与外观，改由头部装备触发飞剑；同一角色同时只能召出一组飞剑。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_gjsh",
        "bb_gaojiaoniao_fh_skin1",
        "bb_gaojiaoniao_fh_skin2",
        "bb_gaojiaoniao_fh_skin3"
      ],
      "tags": [
        "武器",
        "剑"
      ],
      "tech": "远古伪科学站；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_fh.png"
    },
    {
      "id": "bighead_armor",
      "name": "灵墨",
      "category": "armor",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_armor.png",
      "summary": "胖头鱼的身体护甲，提供90%普通伤害吸收、周期护盾和理智回复。",
      "recipe": "无需科技；胖头鱼制作：骨头盔甲×1 + 绝望石×5 + 蝴蝶翅膀×20",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼穿在身体栏即可生效；耐久不足时把噩梦燃料给予灵墨修复。损坏后修好才能重新装备。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "耐久3000、普通伤害吸收90%，穿戴每分钟回复10理智。护盾充能完成时可抵挡一次战斗、爆炸或部分落物伤害，护盾冷却时间与骨甲相同。"
        },
        {
          "type": "text",
          "title": "维护",
          "content": "一份噩梦燃料修复最大耐久的5%，即150耐久。护甲吸收与护盾有各自条件，不能当作永久无敌。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_armor_skin1",
        "bighead_armor_skin2",
        "bighead_armor_skin3"
      ],
      "tags": [
        "护具",
        "护甲"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_armor.png"
    },
    {
      "id": "bighead_back",
      "name": "两仪",
      "category": "armor",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_back.png",
      "summary": "胖头鱼的20格背包，支持无限堆叠，并提供绝缘和火焰减伤。",
      "recipe": "无需科技；胖头鱼制作：草×20 + 树枝×20 + 木炭×20 + 蜘蛛丝×10 + 大理石×5",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼装备后打开背包存取物品。优先占用扩展背包栏，没有该栏位时使用身体栏。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "20个储物格，允许超过普通上限的堆叠；装备时绝缘，抗火效果与龙鳞甲相同。物品本身不能再塞进其他容器。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_back_skin1",
        "bighead_back_skin2",
        "bighead_back_skin3"
      ],
      "tags": [
        "护具",
        "背部"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_back.png"
    },
    {
      "id": "bb_gaojiaoniao_cs",
      "name": "除祟",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_cs.png",
      "summary": "可用月岩、大理石和海象牙强化的近战武器，消耗30饥饿发动诛邪范围真实伤害。",
      "recipe": "科学机器；高脚鸟制作：噩梦燃料×10 + 石头×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备在手部后普攻。基础攻击68，攻击距离2，耐久500次；对暗影、梦魇类目标的普通伤害翻倍。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "命中在目标附近3距离附带20点位面范围攻击，并可使能惊慌的目标惊慌2秒。[[噬心]]高于25时，攻击不消耗耐久，每次扣2理智。"
        },
        {
          "type": "list",
          "title": "主动技能 · 诛邪",
          "items": [
            "手持除祟，在物品上使用「诛邪」进入准备状态；再次使用「收起诛邪」可取消。饥饿低于30时无法准备。",
            "准备后下一次攻击消耗30饥饿，对角色周围半径两块地皮内可攻击的敌人造成真实伤害；施放后退出准备状态。卸下或损坏也会取消准备。",
            "伤害＝施放时当前理智×当前噬心×[[诛邪伤害倍率]]，再乘人物攻击倍率与其他攻击修正；如[[心冻了莓]]提供的×3攻击修正。"
          ]
        },
        {
          "type": "table",
          "title": "给予材料强化",
          "columns": [
            "材料与用量",
            "效果与用量上限"
          ],
          "rows": [
            [
              "月岩×1",
              "基础攻击+2；累计50块；基础攻击最高168"
            ],
            [
              "大理石×1",
              "攻击附加1%减速，持续5秒，不影响玩家；累计50块；最高减速50%"
            ],
            [
              "海象牙×1",
              "手持移速+5%；累计5根；最高+25%"
            ]
          ]
        },
        {
          "type": "text",
          "title": "维护",
          "content": "每份噩梦燃料修复10次使用，可批量给予。损坏后修复即可重新装备；强化等级会保留。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_shixin",
        "bb_gaojiaoniao_cs_skin1",
        "config_bighead_zhuxie_mult",
        "bighead_xdlm",
        "bb_gaojiaoniao_cs_skin2"
      ],
      "tags": [
        "武器",
        "近战",
        "诛邪",
        "强化"
      ],
      "tech": "科学机器；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_cs.png"
    },
    {
      "id": "bighead_ruyi",
      "name": "玉如意",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_ruyi.png",
      "summary": "多功能工具：砍树、挖矿、铲挖、锤拆、捕虫、耕地、钓鱼和拾取附近物品。",
      "recipe": "无需科技；胖头鱼制作：[bb_ymz_jade]×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么获取",
          "content": "在[[云梦泽]]开采[[地玉笋]]获得[[地玉]]，由胖头鱼花费地玉×10制作，无需科技。"
        },
        {
          "type": "text",
          "title": "怎么使用",
          "content": "装备后点击树木可伐木，点击矿石可挖矿，点击可挖物可挖掘；对池塘钓鱼，对海面使用海钓。右键施法收取自己周围8距离内可拾取的散落物。耕地会在当前地块尝试生成3×3土堆。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装备移速×1.5，基础攻击10。砍树、挖矿工作效率2.5，兼有锤拆、铲挖和捕虫；未设置普通工具的次数耐久。"
        },
        {
          "type": "text",
          "title": "升级",
          "content": "把一颗[[蕴灵神石]]给予玉如意，会消耗原物品并变成[[蕴灵如意]]。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ylry",
        "bighead_ylss",
        "bb_ymz_jade",
        "bb_ymz_jade_rock",
        "mech_mist_forest"
      ],
      "tags": [
        "工具",
        "如意"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ruyi.png"
    },
    {
      "id": "bighead_ylry",
      "name": "蕴灵如意",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_ylry.png",
      "summary": "高效砍挖、范围开田、采集、捕鱼，也能对目标施放小旋风的如意。",
      "recipe": "将[bighead_ylss]×1给予[bighead_ruyi]，升级后获得",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "由[[玉如意]]接受一颗[[蕴灵神石]]升级得到。装备后右键打开轮盘，选择范围耕地、范围采集、范围捕鱼或小旋风；范围技能点选位置，小旋风右键指定目标。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础攻击10、移速×1.5，砍树、挖矿、铲挖、锤拆工作效率20；可捕虫、池塘钓鱼。施法最远8距离，采集与捕鱼半径8；采集会收获成熟植物并收取散落物，捕鱼将范围内海鱼转为背包里的活鱼。\n范围耕地尝试改造5×5地块，每块生成3×3土堆，受地形条件限制。 开启“[[蕴灵如意捕捉四季灵]]”设置时，也可用捕虫动作捕捉[[寄生灵]]释放的游离灵体。"
        },
        {
          "type": "text",
          "title": "小旋风",
          "content": "在轮盘选择「小旋风（右键目标）」，再右键指定可攻击或可工作的目标，召出追踪目标的龙卷风。无需先给予风向标强化。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「一柄蕴灵，万事随心。」\n胖头鱼：「灵光入玉，百事如意。」\n高脚鸟：「她倒是有件趁手的好东西。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ruyi",
        "bighead_ylss",
        "mech_parasite",
        "config_bighead_ruyi_catch_spirits"
      ],
      "tags": [
        "工具",
        "如意",
        "收纳",
        "捕鱼",
        "旋风"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ylry.png"
    },
    {
      "id": "bighead_umbrella",
      "name": "共潮生",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_umbrella.png",
      "summary": "胖头鱼的防雨防暑伞；放地上撑开后可为附近玩家遮雨、调温和回复理智。",
      "recipe": "炼金引擎；胖头鱼制作：邪天翁喙×1 + 月亮碎片×10 + 花瓣×5",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼手持时获得防雨和隔热。将伞放在地上，使用开启动作撑起伞罩；关闭后才能拾回。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "手持提供完全防水、夏季隔热和理智回复。地面伞罩开启时，在其范围内提供遮雨、温度覆盖25℃及每分钟30理智的光环；开启和手持都会消耗燃料。"
        },
        {
          "type": "text",
          "title": "维护",
          "content": "每片月亮碎片补充10%燃料，也能修好耗尽的伞。遮蔽范围和初始燃料容量与原版虚空风衣伞相同。"
        }
      ],
      "related": [
        "pangtouyu"
      ],
      "tags": [
        "工具",
        "雨具"
      ],
      "tech": "炼金引擎；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_umbrella.png"
    },
    {
      "id": "bighead_flw",
      "name": "缚灵网",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_flw.png",
      "summary": "捕捉寄生灵释放的四季灵体的网，也能捕虫；可用25次。",
      "recipe": "金企鹅兑换：[bighead_qbi]×16",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "装备在手部后，先处理[[寄生灵]]，让它释放游离灵体，再对游离灵体执行捕捉，得到对应的[[四季之灵]]材料。可用普通捕虫网对坎普斯背包执行“组合”得到，也可在金企鹅商店遇到时用[[Q币]]兑换。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "共25次捕捉耐久，每次捕捉扣1，耗尽后消失。四季寄生灵相关玩法需开启“节气系统”；寻找寄生灵可使用[[玄清灵鉴]]。组合会消耗捕虫网和背包，背包内容物先掉出。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「要好一些，但也就那样。」\n胖头鱼：「要好一些，但也就那样。」\n高脚鸟：「要好一些，但也就那样。」"
        }
      ],
      "related": [
        "bighead_czflw",
        "bighead_xqlj",
        "mech_parasite",
        "mech_spirits",
        "mech_gold_penguin",
        "mech_jieqi"
      ],
      "tags": [
        "工具",
        "缚灵网"
      ],
      "tech": "金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_flw.png"
    },
    {
      "id": "bighead_czflw",
      "name": "草制缚灵网",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_czflw.png",
      "summary": "捕捉寄生灵释放的四季灵体的网，也能捕虫；可用5次。",
      "recipe": "金企鹅兑换：[bighead_qbi]×4",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "装备在手部后，先处理[[寄生灵]]，让它释放游离灵体，再对游离灵体执行捕捉，得到对应的[[四季之灵]]材料。可用普通捕虫网对普通背包执行“组合”得到，也可在金企鹅商店遇到时用[[Q币]]兑换。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "共5次捕捉耐久，每次捕捉扣1，耗尽后消失。四季寄生灵相关玩法需开启“节气系统”；寻找寄生灵可使用[[玄清灵鉴]]。组合会消耗捕虫网和背包，背包内容物先掉出。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「粗制滥造，凑合着用吧！」\n胖头鱼：「粗制滥造，凑合着用吧！」\n高脚鸟：「粗制滥造，凑合着用吧！」"
        }
      ],
      "related": [
        "bighead_flw",
        "bighead_xqlj",
        "mech_parasite",
        "mech_spirits",
        "mech_gold_penguin",
        "mech_jieqi"
      ],
      "tags": [
        "工具",
        "缚灵网"
      ],
      "tech": "金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_czflw.png"
    },
    {
      "id": "bighead_qyq",
      "name": "琦玉器",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_qyq.png",
      "summary": "任何角色均可使用的四格节气容器，激活四季加成，并为四季主物品培养等级。",
      "recipe": "辉煌铁匠铺：月亮碎片×10 + [bighead_ylss]×2；金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任何角色装备后，都可将春、夏、秋、冬对应的节气物品放入四个季节槽，激活其被动和攻击联动。需要开启“节气系统”。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "放入的物品决定实际效果，详见各[[节气]]条目。四季齐全时，攻击会随机触发其中一件物品的攻击效果。收获巨大作物时，当季主物品获得10经验，最高10级。 灵气上限、回复及消耗灵气的主动能力仍要求角色具有相应能力；四季主物品的10级主动使用仍限胖头鱼。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "胖头鱼：「非凡品，属于sss+！（拿它刷东西啊！）」\n高脚鸟：「好用就行，我不挑！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_jieqi",
        "bighead_xqlj",
        "jq_chun",
        "jq_xia",
        "jq_qiu",
        "jq_dong",
        "mech_gold_penguin",
        "bighead_ylss",
        "mech_lingqi",
        "config_bighead_seasons"
      ],
      "tags": [
        "工具",
        "琦玉器"
      ],
      "tech": "辉煌铁匠铺 / 金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_qyq.png"
    },
    {
      "id": "bighead_scrolls",
      "name": "浮生卷轴",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_scrolls.png",
      "summary": "胖头鱼与高脚鸟使用的地图传送卷轴，也可送给寄居蟹提升好感。",
      "recipe": "无需科技；胖头鱼制作：莎草纸×10 + 橙宝石×3 + 花瓣×5",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "把卷轴带在身上，右键选“入画”打开地图，再选择有效地点传送。只允许胖头鱼或高脚鸟操作，海上落点需要有效的平台或地图标记。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "初始100点使用量，每次传送消耗10点，即满状态可用10次。使用量为0时暂时不能传送，给予紫宝石可补充50点。"
        },
        {
          "type": "text",
          "title": "其他用途",
          "content": "送给寄居蟹会消耗卷轴，将好感等级直接补至最高，并补入尚未领取的升级奖励。"
        }
      ],
      "related": [
        "pangtouyu",
        "gaojiaoniao"
      ],
      "tags": [
        "工具",
        "卷轴"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_scrolls.png"
    },
    {
      "id": "bighead_hy",
      "name": "恒辉",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bighead_hy.png",
      "summary": "基地照明与调温建筑：填满九颗彩虹宝石后启动大范围灯光和高额回理智光环。",
      "recipe": "无需科技：木头×10 + 黄宝石×1 + 萤火虫×1",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "建在地面，打开3×3容器；九个格子各放一颗彩虹宝石，全部填满才会点亮。取出任一颗即停用，不能用一叠宝石占一个格子代替。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "启动后覆盖40距离，把附近存活玩家温度维持为30℃，并提供每分钟800理智回复。宝石作为启动条件留在格子里，未设置按时燃烧消耗。"
        }
      ],
      "related": [],
      "tags": [
        "工具",
        "照明"
      ],
      "tech": "无需科技",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_hy.png"
    },
    {
      "id": "bighead_llxz",
      "name": "连理木箱",
      "category": "structure",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_llxz.png",
      "summary": "36格共享仓库；多个连理木箱与双鱼玉佩访问同一份库存。",
      "recipe": "无需科技；胖头鱼制作：告密的心×2 + 活木×2",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "建在地面后打开存取。给予箱子一颗告密的心，可获得用于随身开仓的[[双鱼玉佩]]；每个箱子只能这样领取一次。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "同一世界中的箱子连接同一个36格口袋仓库。未升级时按正常速度腐败；给一个箱子升级，会同步影响这份共享库存。"
        },
        {
          "type": "text",
          "title": "升级",
          "content": "将材料给予任意一个连理木箱，升级同步影响同一世界的共享仓库。堆叠和保鲜两种升级可分别进行。"
        },
        {
          "type": "table",
          "title": "升级材料",
          "columns": [
            "材料与用量",
            "效果与用量上限"
          ],
          "rows": [
            [
              "弹性空间制造器×1",
              "开启无限堆叠；只需1个"
            ],
            [
              "绿宝石×1",
              "每颗使保鲜倍率变为-0.1×累计颗数，让食物逐渐回鲜；最多10颗；满级倍率-1"
            ]
          ]
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_llxz_xz"
      ],
      "tags": [
        "建筑",
        "容器"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_llxz.png"
    },
    {
      "id": "bb_cct",
      "name": "春朝亭",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_cct.png",
      "summary": "饲养春望蝶并生产黄油的建筑，满产量可收获3份黄油。",
      "recipe": "炼金引擎：蝴蝶×10 + 活木×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "建在附近30距离内有花的地方，让[[春望蝶]]外出采粉并回亭。出现可收获状态时点击采收黄油。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "产物是黄油，最多积攒3份。冬天停止生产；正常活动需要蝴蝶和附近花朵，洞穴还受白天与光照条件限制。"
        }
      ],
      "related": [
        "bb_cwd",
        "bighead_fanhua",
        "mech_gardening"
      ],
      "tags": [
        "建筑",
        "亭台"
      ],
      "tech": "炼金引擎",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_cct.png"
    },
    {
      "id": "bb_hhlct",
      "name": "黄花梨茶台",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_hhlct.png",
      "summary": "存放料理、保鲜并把堆肥转为随机成品菜的茶台，可扩建至三级。",
      "recipe": "炼金引擎：烹饪指南×1 + 活木×3 + 木头×10 + 月光玻璃斧×1 + 黄金斧头×1",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "把料理放入食物格，把堆肥放入专用材料格并留出空食物格；每天日数变化时尝试产出一次。打开容器可用整理按钮合并排列。随机料理从当前世界可用的未调味料理中抽取。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "一级9个食物格，耗3堆肥产1～2份随机料理；二级12格，耗4产3～5份；三级36格，耗5产5～7份。数量受空格限制。前两级停止腐败，三级保鲜倍率-2，会逐渐回鲜；支持无限堆叠。"
        },
        {
          "type": "text",
          "title": "升级",
          "content": "在茶台上打开施工界面，按下表提交材料。一级扩建为二级后，再提交下一阶段材料升为三级；扩建会保留原有食物与堆肥。"
        },
        {
          "type": "table",
          "title": "升级材料",
          "columns": [
            "阶段",
            "本次扩建所需材料"
          ],
          "rows": [
            [
              "一级 → 二级",
              "催长剂起子×3 + 空鸟嘴壶×1 + 独奏乐器×1"
            ],
            [
              "二级 → 三级",
              "树果酱×3 + 排箫×1 + [[芙蓉石蟠螭耳盖炉]]×1 + 捆绑包装×6 + 弹性空间制造器×1"
            ]
          ]
        }
      ],
      "related": [
        "bighead_sucookpot_item"
      ],
      "tags": [
        "建筑",
        "茶台",
        "食物"
      ],
      "tech": "炼金引擎",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_hhlct.png"
    },
    {
      "id": "bighead_sucookpot_item",
      "name": "芙蓉石蟠螭耳盖炉",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bighead_sucookpot_item.png",
      "recipe": "无需科技：彩虹宝石×1 + 红宝石×3 + 月亮碎片×10",
      "detail_blocks": [
        {
          "type": "list",
          "title": "怎么使用",
          "items": [
            "把炉子部署到地上，打开容器：上方15格放成品，底部5格放原料。",
            "五个原料格都放入食材，可分别堆叠；按下烹饪后，每轮从每格各消耗1份，1秒后将料理存入成品区。",
            "配方有效且原料充足时连续烹饪。原料不足会停止，补齐后重新按烹饪；成品区装满时暂停，取出料理后自动继续。",
            "使用收起动作装回背包；收起或锤毁时，锅内物品和本轮料理掉落到地上。"
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "[[红锅出锅数量]]默认双倍，每轮产出2份；改为正常后每轮产出1份，五格原料的消耗不变。"
        },
        {
          "type": "list",
          "title": "能做哪些料理",
          "items": [
            "[[此间山]]、[[莓酱果子]]、[[糖渍果]]、[[果味加浓]]、[[月圆血石榴]]、[[心冻了莓]]、[[甜蜜风暴]]。",
            "五份原料须满足对应配方；不匹配时无法开锅，不消耗原料。若同时满足多个食谱，按料理优先级决定产物。",
            "月饼由[[月饼盒子]]在满月时产出。"
          ]
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「芙蓉石蟠螭耳盖炉是清乾隆时期的玉雕作品，现藏于南京博物院。」"
        }
      ],
      "related": [
        "bighead_cjs",
        "bighead_mjgz",
        "bighead_tzg",
        "bighead_gwjn",
        "bighead_yyxsl",
        "bighead_xdlm",
        "bighead_tmfb",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "建筑",
        "锅具",
        "食物"
      ],
      "summary": "五格原料自动批量烹饪、十五格收纳成品的便携红锅，默认每轮出2份。",
      "tech": "无需科技",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_sucookpot.png"
    },
    {
      "id": "bighead_ybhz",
      "name": "月饼盒子",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_ybhz.png",
      "summary": "随身月饼保鲜盒：满月状态到来时自动产出八款基础月饼和一款随机隐藏月饼。",
      "recipe": "炼金引擎；高脚鸟制作：活木×10 + 唤星者魔杖×1；金企鹅兑换：[bighead_qbi]×49",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "制作或兑换后保留盒子，等待世界进入满月状态，再打开取月饼。可以提前留出空间接收下一批。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "盒内食物停止腐败、支持无限堆叠。每次满月共生成9个月饼：8款基础月饼各1个，再从4款隐藏月饼中等概率随机选1个（每款25%）。满月当场新造盒子不会立即补发，要等下一次满月状态变化。"
        },
        {
          "type": "list",
          "layout": "grid",
          "title": "基础款 · 每次全部产出，各1个",
          "items": [
            "[[原味月饼]] ×1",
            "[[巨鹿月饼]] ×1",
            "[[怪物月饼]] ×1",
            "[[西瓜月饼]] ×1",
            "[[发光月饼]] ×1",
            "[[夜梅月饼]] ×1",
            "[[香蕉月饼]] ×1",
            "[[草莓月饼]] ×1"
          ]
        },
        {
          "type": "list",
          "layout": "grid",
          "title": "隐藏款 · 每次随机产出其中1款",
          "items": [
            "[[胖头鱼月饼]] ×1",
            "[[高脚鸟月饼]] ×1",
            "[[冷暴力月饼]] ×1",
            "[[喵大仙月饼]] ×1"
          ]
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「里面会有月饼吗」"
        }
      ],
      "related": [
        "bighead_ywyb",
        "bighead_jlyb",
        "bighead_gwyb",
        "bighead_xgyb",
        "bighead_fgyb",
        "bighead_ymyb",
        "bighead_xjyb",
        "bighead_cmyb",
        "bighead_ptyyb",
        "bighead_gjnyb",
        "bighead_lblyb",
        "bighead_mdxyb",
        "gaojiaoniao",
        "mech_gold_penguin",
        "bighead_qbi"
      ],
      "tags": [
        "工具",
        "随身容器",
        "月饼"
      ],
      "tech": "炼金引擎；高脚鸟制作 / 金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ybhz.png"
    },
    {
      "id": "bighead_xqlj",
      "name": "玄清灵鉴",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bighead_xqlj.png",
      "summary": "搜寻当前季节寄生灵的仪器，消耗对应宝石并揭示地图位置。",
      "recipe": "天体祭坛：月亮碎片×10 + 绿宝石×1",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "开启节气系统后，将灵鉴部署在地面，向容器放入当季宝石，再执行“搜寻”：春绿宝石、夏黄宝石、秋橙宝石、冬蓝宝石。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次成功搜寻消耗1颗对应宝石，优先标记已有的当季[[寄生灵]]；没有时尝试生成，原有位置不安全时会尝试迁移。落点须为地表主大陆或月岛上的安全陆地，排除船、海面、洞边和其他离岛；找不到合适位置则提示失败。成功后揭示位置与方向，并收回为可携带的灵鉴。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "胖头鱼：「用着不错。」\n高脚鸟：「她会的挺多啊。」"
        }
      ],
      "related": [
        "mech_parasite",
        "mech_spirits",
        "config_bighead_seasons"
      ],
      "tags": [
        "建筑",
        "器物"
      ],
      "tech": "天体祭坛",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_xqlj.png"
    },
    {
      "id": "bb_cm",
      "name": "草莓",
      "category": "food",
      "food_category": "ingredient",
      "owner": "common",
      "image": "assets/img/items/bb_cm.png",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "采收[[草莓丛]]获得，直接食用或放进烹饪锅当食材；入锅提供0.5水果度。在[[芙蓉石蟠螭耳盖炉]]中，可制作[[莓酱果子]]、[[糖渍果]]、[[心冻了莓]]或[[甜蜜风暴]]。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+5、饥饿+10、理智+5。容易腐败，适合尽快烹饪或放入保鲜容器。"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "dug_bb_cmbush",
        "bighead_mjgz",
        "bighead_tzg",
        "bighead_xdlm",
        "bighead_tmfb",
        "bighead_sucookpot_item"
      ],
      "tags": [
        "食物",
        "草莓",
        "水果"
      ],
      "source": "v5.8",
      "summary": "草莓丛产出的水果，可直接吃，也可在红锅制作莓酱果子、糖渍果等料理。",
      "display_image": "assets/img/displays/bb_cm.png"
    },
    {
      "id": "bighead_cjs",
      "name": "此间山",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_cjs.png",
      "summary": "体温上限65℃，每2秒恢复1理智，持续1天的清凉料理。",
      "recipe": "红锅五格配方：冰×至少2；奶制品度≥1；肉度、鱼度、蔬菜度均为0；共5份食材",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "一锅示例",
          "content": "冰×2 + 伏特羊奶×1 + 蜂蜜×2"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+80",
              "+150",
              "+80"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "食用后体温上限为65℃，每2秒恢复1理智，持续1游戏天（480秒）。它限制体温上限，不会提高低温时的体温。"
        },
        {
          "type": "text",
          "title": "增益显示与刷新",
          "content": "食用后在状态栏显示增益图标和剩余时间，悬停可查看效果。同一种增益再次食用会刷新持续时间，死亡后移除。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期4游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_cjs.png"
    },
    {
      "id": "bighead_mjgz",
      "name": "莓酱果子",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_mjgz.png",
      "summary": "降低30%饥饿消耗，持续2天的草莓料理。",
      "recipe": "红锅五格配方：黄油×至少1；蛋度≥1；[bb_cm]×至少1；伏特羊奶×至少1；肉度、鱼度均为0；共5份食材",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "一锅示例",
          "content": "黄油×1 + 鸟蛋×1 + [[草莓]]×1 + 伏特羊奶×1 + 冰×1"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+100",
              "+100",
              "+150"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "食用后饥饿消耗降低30%，持续2游戏天（960秒）。"
        },
        {
          "type": "text",
          "title": "增益显示与刷新",
          "content": "食用后在状态栏显示增益图标和剩余时间，悬停可查看效果。同一种增益再次食用会刷新持续时间，死亡后移除。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期12游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "bb_cm",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_mjgz.png"
    },
    {
      "id": "bighead_tzg",
      "name": "糖渍果",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_tzg.png",
      "summary": "草莓与蜂蜜制作的料理，保质期18天。",
      "recipe": "红锅五格配方：蜂蜜×至少1；[bb_cm]×至少2；肉度、鱼度、蔬菜度均为0；共5份食材",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "一锅示例",
          "content": "[[草莓]]×2 + 蜂蜜×3"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+30",
              "+80",
              "+70"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "没有额外的持续增益。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期18游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "bb_cm",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_tzg.png"
    },
    {
      "id": "bighead_gwjn",
      "name": "果味加浓",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_gwjn.png",
      "summary": "五种水果融合的料理，每秒恢复1生命，持续2天。",
      "recipe": "红锅五格配方：火龙果×1 + 无花果×1 + 石榴×1 + 西瓜×1 + 香蕉×1",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "材料要求",
          "content": "五种水果各占一格，使用原材料；肉度、鱼度、蔬菜度和冰度均须为0。"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+200",
              "+150",
              "+150"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "食用后每秒恢复1生命，持续2游戏天（960秒），不超过生命上限。两名角色初始各携带1份；开启每日投喂时，这也是高脚鸟可能抽到的奖励之一，每次2份。"
        },
        {
          "type": "text",
          "title": "增益显示与刷新",
          "content": "食用后在状态栏显示增益图标和剩余时间，悬停可查看效果。同一种增益再次食用会刷新持续时间，死亡后移除。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期12游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。这时每秒回血效果也暂停。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "pangtouyu",
        "gaojiaoniao",
        "config_bighead_daily_gift",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_gwjn.png"
    },
    {
      "id": "bighead_yyxsl",
      "name": "月圆血石榴",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_yyxsl.png",
      "summary": "格罗姆翅膀等五种指定材料制作，基础恢复500生命。",
      "recipe": "红锅五格配方：格罗姆翅膀×1 + 格罗姆的黏液×1 + 石榴×1 + 蚊子血囊×1 + 蜘蛛腺×1",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "材料要求",
          "content": "五种指定材料各占一格，格罗姆翅膀、格罗姆的黏液、蚊子血囊和蜘蛛腺均可放入红锅原料格。"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+500",
              "+200",
              "+80"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "没有额外的持续增益，基础生命回复较高，实际回复不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期5游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_yyxsl.png"
    },
    {
      "id": "bighead_xdlm",
      "name": "心冻了莓",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_xdlm.png",
      "summary": "提供×3攻击倍率，持续2天的战斗料理。",
      "recipe": "红锅五格配方：蛞蝓龟黏液×至少1；格罗姆的黏液×至少1；脓鼻涕×至少1；[bb_cm]×至少1；补齐至5份食材",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "一锅示例",
          "content": "蛞蝓龟黏液×1 + 格罗姆的黏液×1 + 脓鼻涕×1 + [[草莓]]×1 + 冰×1"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+100",
              "+100",
              "+60"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "食用后提供×3的攻击倍率修正，持续2游戏天（960秒），可影响[[除祟]]的诛邪伤害。"
        },
        {
          "type": "text",
          "title": "增益显示与刷新",
          "content": "食用后在状态栏显示增益图标和剩余时间，悬停可查看效果。同一种增益再次食用会刷新持续时间，死亡后移除。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期10游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "bb_cm",
        "bb_gaojiaoniao_cs",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_xdlm.png"
    },
    {
      "id": "bighead_tmfb",
      "name": "甜蜜风暴",
      "category": "food",
      "food_category": "cooked",
      "owner": "common",
      "image": "assets/img/items/bighead_tmfb.png",
      "summary": "提供90%减伤修正，持续2天的防护料理。",
      "recipe": "红锅五格配方：乳白物×至少1；[bb_cm]×至少1；肉度、鱼度、蔬菜度均为0；共5份食材",
      "tech": "芙蓉石蟠螭耳盖炉",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将五份原料放入[[芙蓉石蟠螭耳盖炉]]底部的五个原料格，按下烹饪。每轮1秒，默认产出2份，可通过[[红锅出锅数量]]改为1份。"
        },
        {
          "type": "text",
          "title": "一锅示例",
          "content": "乳白物×1 + [[草莓]]×1 + 冰×3"
        },
        {
          "type": "table",
          "title": "基础回复",
          "columns": [
            "生命",
            "理智",
            "饥饿"
          ],
          "rows": [
            [
              "+150",
              "+100",
              "+60"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "食用后提供90%的减伤修正，持续2游戏天（960秒）；实际伤害还受装备、其他效果以及攻击是否忽略减伤影响。"
        },
        {
          "type": "text",
          "title": "增益显示与刷新",
          "content": "食用后在状态栏显示增益图标和剩余时间，悬停可查看效果。同一种增益再次食用会刷新持续时间，死亡后移除。"
        },
        {
          "type": "text",
          "title": "保存",
          "content": "基础保质期2游戏天。三维回复受新鲜度、角色食性和食物倍率影响，不超过角色当前上限。"
        },
        {
          "type": "text",
          "title": "高脚鸟食用",
          "content": "[[噬心]]高于50且[[五道]]未圆满时，直接食用的生命回复为0。"
        }
      ],
      "related": [
        "bighead_sucookpot_item",
        "bb_cm",
        "config_bighead_pot_yield"
      ],
      "tags": [
        "食物",
        "料理",
        "红锅"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_tmfb.png"
    },
    {
      "id": "bighead_ywyb",
      "name": "原味月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_ywyb.png",
      "summary": "降低饥饿消耗的月饼，适合长时间行动。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。饥饿消耗倍率×0.5，持续480秒。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「就没别的味的了吗！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ywyb.png"
    },
    {
      "id": "bighead_jlyb",
      "name": "巨鹿月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_jlyb.png",
      "summary": "使攻击附带寒冷积累的月饼，适合冻结可冰冻敌人。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。命中时对可冰冻目标增加1点寒冷，增益持续480秒；对无法冰冻的目标无效。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「凉飕飕的！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_jlyb.png"
    },
    {
      "id": "bighead_gwyb",
      "name": "怪物月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_gwyb.png",
      "summary": "提供额外伤害吸收的月饼，适合战前食用。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。增加0.2外部伤害吸收，持续480秒；实际减伤与其他防御效果共同计算。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「呕~」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_gwyb.png"
    },
    {
      "id": "bighead_xgyb",
      "name": "西瓜月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_xgyb.png",
      "summary": "提供夏季隔热的月饼，用来延缓过热。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。夏季隔热增加240点，持续480秒；隔热不等于固定温度。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「神清气爽~」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_xgyb.png"
    },
    {
      "id": "bighead_fgyb",
      "name": "发光月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_fgyb.png",
      "summary": "让角色随身发光的月饼，用于夜间照明。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。生成跟随角色的照明光源，持续480秒。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「我胱乃天庭之主！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_fgyb.png"
    },
    {
      "id": "bighead_ymyb",
      "name": "夜梅月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_ymyb.png",
      "summary": "给予夜视的月饼，便于在黑暗环境观察。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。触发原版夜视增益，持续时间与原版夜视增益相同；夜视效果与照亮队友的光源不同。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「让我来看看怎么个事~」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ymyb.png"
    },
    {
      "id": "bighead_xjyb",
      "name": "香蕉月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_xjyb.png",
      "summary": "持续恢复理智的月饼，适合低理智时使用。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。每秒恢复1理智，持续480秒，实际回复不超过理智上限。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「巴适！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_xjyb.png"
    },
    {
      "id": "bighead_cmyb",
      "name": "草莓月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_cmyb.png",
      "summary": "持续回复生命的月饼，适合战后恢复。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。每秒恢复1生命，持续480秒，实际回复不超过生命上限。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "基础款，每盒每次满月产出1个。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「好甜呀！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_cmyb.png"
    },
    {
      "id": "bighead_ptyyb",
      "name": "胖头鱼月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_ptyyb.png",
      "summary": "同时提升移动与攻击的隐藏月饼，适合战斗和赶路。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。移速×1.3、攻击倍率×1.3，持续480秒。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "隐藏款，每盒每次满月只从四种隐藏款随机产出一种。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「鱼哥联名款！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ptyyb.png"
    },
    {
      "id": "bighead_gjnyb",
      "name": "高脚鸟月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_gjnyb.png",
      "summary": "给予电击攻击的隐藏月饼，可为原本具备位面攻击能力的角色增加位面伤害。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。获得电击攻击，持续480秒；原本具备位面攻击能力的角色额外获得100点位面伤害；其他角色只获得电击攻击效果。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "隐藏款，每盒每次满月只从四种隐藏款随机产出一种。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「鸟弟联名款！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_gjnyb.png"
    },
    {
      "id": "bighead_lblyb",
      "name": "冷暴力月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_lblyb.png",
      "summary": "给予踏水、温度上限保护和夜视的隐藏月饼。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。踏水和体温上限65℃持续480秒，并额外触发原版夜视。踏水到期前应回到陆地；夜视持续时间与原版夜视增益相同。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "隐藏款，每盒每次满月只从四种隐藏款随机产出一种。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「冷暴力联名款！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_lblyb.png"
    },
    {
      "id": "bighead_mdxyb",
      "name": "喵大仙月饼",
      "category": "food",
      "food_category": "mooncake",
      "owner": "common",
      "image": "assets/img/items/bighead_mdxyb.png",
      "summary": "提高采集速度、使收取烹饪产物翻倍的隐藏月饼。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "从[[月饼盒子]]取出后直接食用。等待满月自动产出，普通烹饪锅不能做出这种月饼。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "基础回复：生命+30、饥饿+50、理智+10。持续480秒，采集使用快速动作（翻找类目标除外），从锅中取菜可得到双倍产物。"
        },
        {
          "type": "text",
          "title": "获得与保存",
          "content": "隐藏款，每盒每次满月只从四种隐藏款随机产出一种。月饼在普通背包中会腐败，放回月饼盒子可以停止腐败；同类自定义增益再次食用刷新时长，不把倍数无限叠加。高脚鸟[[噬心]]高于50且[[五道]]未圆满时，食物的生命回复会受限。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「喵大仙联名款！」"
        },
        {
          "type": "text",
          "title": "特殊情况",
          "content": "高脚鸟：噬心高于50且五道未圆满时，食物的生命回复为0。"
        }
      ],
      "related": [
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_mdxyb.png"
    },
    {
      "id": "dug_bb_cmbush",
      "name": "草莓丛",
      "category": "crop",
      "owner": "pangtouyu",
      "image": "assets/img/items/dug_bb_cmbush.png",
      "recipe": "无需科技；胖头鱼制作：便便桶×1 + 松果×1",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "只能由胖头鱼制作根株，其他角色也能种植、采摘。将根株部署在地面，成熟后采摘[[草莓]]；用铲子挖回根株可搬家。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次成熟可采3颗草莓，再次成熟所需时间与普通浆果丛相同；夏季暂停生长，其他季节恢复。不按采收次数耗尽肥力。挖起时若正成熟，还会掉落1颗草莓。"
        }
      ],
      "related": [
        "bb_cm",
        "pangtouyu",
        "mech_gardening"
      ],
      "tags": [
        "作物",
        "草莓"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "summary": "胖头鱼专属制作的草莓作物，其他角色也能种植、采摘；每次成熟产3颗。",
      "display_image": "assets/img/displays/bb_cmbush.png"
    },
    {
      "id": "bighead_wcs",
      "name": "七彩石",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bighead_wcs.png",
      "summary": "给凤求凰提高暴击率的强化材料，每颗增加1个百分点，最高95%。",
      "recipe": "炼金引擎；高脚鸟制作：红宝石×1 + 蓝宝石×1 + 紫宝石×1 + 橙宝石×1 + 黄宝石×1 + 绿宝石×1；炼金引擎；高脚鸟制作：彩虹宝石×1",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "将七彩石给予[[凤求凰]]，材料消耗后永久增加该武器的暴击率。高脚鸟可在炼金引擎制作。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "暴击时普通伤害以及有效的特殊伤害翻倍；暴击率累计上限95%。两种配方任选：六色宝石各1颗，或彩虹宝石1颗。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fqh"
      ],
      "tags": [
        "材料",
        "七彩石"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_wcs.png"
    },
    {
      "id": "bighead_ylss",
      "name": "蕴灵神石",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bighead_ylss.png",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "list",
          "title": "用途",
          "items": [
            "强化[[不染]]：每颗增加5点基础位面伤害。",
            "升级[[玉如意]]：消耗1颗，变为[[蕴灵如意]]。",
            "制作[[琦玉器]]：需要2颗。"
          ]
        },
        {
          "type": "table",
          "title": "击杀掉落",
          "columns": [
            "生物生命上限",
            "掉落"
          ],
          "rows": [
            [
              "≥10000",
              "必掉1颗"
            ],
            [
              "≥3000且<10000",
              "5%概率掉1颗"
            ]
          ]
        }
      ],
      "related": [
        "bighead_buran",
        "bighead_ruyi",
        "bighead_qyq",
        "bighead_ylry"
      ],
      "tags": [
        "材料",
        "灵石"
      ],
      "source": "v5.8",
      "summary": "装备强化与制作材料。",
      "display_image": "assets/img/displays/bighead_ylss.png"
    },
    {
      "id": "bighead_ymlx",
      "name": "月冕莲心",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ymlx.png",
      "summary": "不染的可插拔配件，装备后每分钟额外恢复2点灵气。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "把月冕莲心放入[[不染]]的一个配件槽，装备不染后生效；它占用槽位，同种配件不能重复放入。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "天体英雄第三阶段有20%概率额外掉落。装备插入莲心的不染时，每分钟[[灵气]]恢复额外+2，可与月岛环境恢复加成共同生效。配件留在槽内，不会像[[蕴灵神石]]那样在给予升级时消耗。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「沐月色而生，携净意而行。」\n胖头鱼：「沐月色而生，携净意而行。」\n高脚鸟：「沐月色而生，携净意而行。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_buran",
        "mech_lingqi"
      ],
      "tags": [
        "材料",
        "莲子"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ymlx.png"
    },
    {
      "id": "bighead_ygxlfw",
      "name": "远古星雷符文",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ygxlfw.png",
      "summary": "不染的雷击配件，用于对付暗影和梦魇敌人。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "打开[[不染]]的配件槽，放入符文，再手持不染攻击敌人。"
        },
        {
          "type": "list",
          "title": "效果与限制",
          "items": [
            "攻击暗影敌人时，额外造成雷击伤害，每次消耗1点[[灵气]]。灵气不足1点时不触发。",
            "雷击伤害＝消耗前的灵气×50。例如剩余10点灵气时，造成500点额外伤害，之后剩9点灵气。",
            "对暗影生物、梦魇生物，命中还会扣除其全部剩余生命；这项效果不消耗灵气。"
          ]
        },
        {
          "type": "list",
          "title": "获得方式",
          "items": [
            "准备1个约束静电（月亮风暴任务中获得）。",
            "前往洞穴中的远古档案馆。若档案馆尚未通电，先把彩虹宝石放入空的宝石基座。",
            "找到周围有8块圆形地板的解谜机关，把约束静电丢在机关中央。",
            "尝试依次踩过周围的8块地板，找出正确顺序。顺序随机，没有固定答案；踩错后先离开地板，再继续尝试。",
            "完成解谜后，在机关中央捡取远古星雷符文。"
          ]
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「雷纹能量稳定，本源刻印完整。」\n胖头鱼：「雷纹能量稳定，本源刻印完整。」\n高脚鸟：「雷纹能量稳定，本源刻印完整。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_buran",
        "mech_lingqi"
      ],
      "tags": [
        "材料",
        "符文"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ygxlfw.png"
    },
    {
      "id": "bighead_soul",
      "name": "魂魄",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bighead_soul.png",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼靠近符合条件的死亡生物收魂，魂魄飞入背包。持有时作为制作材料；从背包丢到地上则会在短暂延迟后释放治疗并消失。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "一般要求死者可产魂且最大生命至少500。每个释放魂魄为范围内受伤、存活的玩家恢复50生命，不按人数平分；旺达等以年龄代替生命的角色不按此方式治疗。1魂魄+1鱼肉可制作一种季节鱼，需启用节气系统。"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "tags": [
        "材料",
        "魂魄"
      ],
      "source": "v5.8",
      "summary": "胖头鱼收集的魂魄：可用于季节鱼制作，也能释放在地上治疗附近玩家。",
      "display_image": "assets/img/displays/bighead_soul_ball.png"
    },
    {
      "id": "bighead_llxz_xz",
      "name": "双鱼玉佩",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_llxz_xz.png",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "先把1颗告密的心给予[[连理木箱]]取得玉佩；在背包中使用玉佩打开同一份仓库，结束动作时关闭。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "访问的是与连理木箱相连的共享库存，不额外生成一份独立空间。库存容量和保鲜、堆叠升级均跟随箱子的共享仓库。"
        }
      ],
      "related": [
        "bighead_llxz"
      ],
      "tags": [
        "材料",
        "玉佩"
      ],
      "source": "v5.8",
      "summary": "随身打开连理木箱共享库存的钥匙，无需回到箱子旁。",
      "display_image": "assets/img/displays/bighead_llxz_xz.png"
    },
    {
      "id": "bighead_qbi",
      "name": "Q币",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bighead_qbi.png",
      "summary": "金企鹅商店货币，6金块制1枚；冬天先给同一只普通企鹅10金块召出商人，再用Q币购物。",
      "recipe": "无需科技：金块×6→1枚；金块×60→10枚；金块×240→40枚",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "可用6金块制作1枚Q币，也可用60金块批量制作10枚、240金块制作40枚，兑换比均为6:1。[[金企鹅]]不是固定地点的商店：冬天找到普通企鹅，先用金块将它变成商人，再带Q币靠近它，在制作栏的金企鹅兑换页购买当前有库存的商品。"
        },
        {
          "type": "list",
          "title": "金企鹅在哪里、怎么召出",
          "items": [
            "冬天沿海岸找上岸的普通企鹅，选定同一只，对它逐个给予金块。",
            "这只企鹅累计收到10块金块后，会在原地变成金企鹅；进度按单只企鹅累计，分给不同企鹅不能凑足10次。",
            "召出商人用的是金块，不是Q币；购买商品才消耗Q币。金企鹅出现后只停留480秒（8分钟），最好提前准备购物所需Q币。",
            "同一世界同时最多存在3只金企鹅；已达上限或不是冬天时，普通企鹅不会接受这项金块转化。"
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每只[[金企鹅]]生成时随机选择商品，没有定时自动补货，售完就不能继续兑换。下表列出的是购买1件商品需要支付的Q币数，商品库存另计；具体是否上架以本次商店为准。节气相关商品还要求开启节气系统。"
        },
        {
          "type": "table",
          "title": "常见商品的单件售价",
          "columns": [
            "商品",
            "买1件需支付"
          ],
          "rows": [
            [
              "[[四季之灵]]（每种）",
              "10枚Q币"
            ],
            [
              "[[草制缚灵网]]",
              "4枚Q币"
            ],
            [
              "[[缚灵网]]",
              "16枚Q币"
            ],
            [
              "[[琦玉器]]",
              "10枚Q币"
            ],
            [
              "[[月饼盒子]]",
              "49枚Q币"
            ]
          ]
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「充值很棒呀」"
        }
      ],
      "related": [
        "bighead_qyq",
        "mech_gold_penguin"
      ],
      "tags": [
        "材料",
        "货币",
        "企鹅"
      ],
      "tech": "无需科技",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_qbi.png"
    },
    {
      "id": "bighead_spring_spirit",
      "name": "春之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_spring_spirit.png",
      "summary": "春季节气制作、四季主物品升级与胖头鱼补充灵气的消耗材料。",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "与花朵金枪鱼等材料合成春季节气；也可给予对应的四季主物品增加经验。胖头鱼通过[[琦玉器]]激活至少一种四季主物品时，可在背包选择“吸收[[灵气]]”。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次吸收消耗1个，回复50灵气，不能超过当前上限；没有激活四季主物品时不能吸收。给予四季主物品每个提供200经验。开启节气系统后，其他角色也能捕捉对应[[寄生灵]]释放的灵体，或在金企鹅出现对应商品时用10[[Q币]]兑换；吸收灵气仅限胖头鱼。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「里面蕴含着春天的气息！」\n胖头鱼：「无比纯粹的能量，我要好好想想！」\n高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits",
        "jq_chun",
        "bighead_xqlj",
        "bighead_qyq",
        "mech_gold_penguin",
        "mech_lingqi",
        "mech_parasite"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_spring_spirit.png"
    },
    {
      "id": "bighead_summer_spirit",
      "name": "夏之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_summer_spirit.png",
      "summary": "夏季节气制作、四季主物品升级与胖头鱼补充灵气的消耗材料。",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "与炽热太阳鱼等材料合成夏季节气；也可给予对应的四季主物品增加经验。胖头鱼通过[[琦玉器]]激活至少一种四季主物品时，可在背包选择“吸收[[灵气]]”。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次吸收消耗1个，回复50灵气，不能超过当前上限；没有激活四季主物品时不能吸收。给予四季主物品每个提供200经验。开启节气系统后，其他角色也能捕捉对应[[寄生灵]]释放的灵体，或在金企鹅出现对应商品时用10[[Q币]]兑换；吸收灵气仅限胖头鱼。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「里面蕴含着夏天的气息！」\n胖头鱼：「无比纯粹的能量，我要好好想想！」\n高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits",
        "jq_xia",
        "bighead_xqlj",
        "bighead_qyq",
        "mech_gold_penguin",
        "mech_lingqi",
        "mech_parasite"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_summer_spirit.png"
    },
    {
      "id": "bighead_autumn_spirit",
      "name": "秋之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_autumn_spirit.png",
      "summary": "秋季节气制作、四季主物品升级与胖头鱼补充灵气的消耗材料。",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "与落叶比目鱼等材料合成秋季节气；也可给予对应的四季主物品增加经验。胖头鱼通过[[琦玉器]]激活至少一种四季主物品时，可在背包选择“吸收[[灵气]]”。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次吸收消耗1个，回复50灵气，不能超过当前上限；没有激活四季主物品时不能吸收。给予四季主物品每个提供200经验。开启节气系统后，其他角色也能捕捉对应[[寄生灵]]释放的灵体，或在金企鹅出现对应商品时用10[[Q币]]兑换；吸收灵气仅限胖头鱼。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「里面蕴含着秋天的气息！」\n胖头鱼：「无比纯粹的能量，我要好好想想！」\n高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits",
        "jq_qiu",
        "bighead_xqlj",
        "bighead_qyq",
        "mech_gold_penguin",
        "mech_lingqi",
        "mech_parasite"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_autumn_spirit.png"
    },
    {
      "id": "bighead_winter_spirit",
      "name": "冬之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_winter_spirit.png",
      "summary": "冬季节气制作、四季主物品升级与胖头鱼补充灵气的消耗材料。",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "与冰鲷鱼等材料合成冬季节气；也可给予对应的四季主物品增加经验。胖头鱼通过[[琦玉器]]激活至少一种四季主物品时，可在背包选择“吸收[[灵气]]”。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次吸收消耗1个，回复50灵气，不能超过当前上限；没有激活四季主物品时不能吸收。给予四季主物品每个提供200经验。开启节气系统后，其他角色也能捕捉对应[[寄生灵]]释放的灵体，或在金企鹅出现对应商品时用10[[Q币]]兑换；吸收灵气仅限胖头鱼。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「里面蕴含着冬天的气息！」\n胖头鱼：「无比纯粹的能量，我要好好想想！」\n高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits",
        "jq_dong",
        "bighead_xqlj",
        "bighead_qyq",
        "mech_gold_penguin",
        "mech_lingqi",
        "mech_parasite"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_winter_spirit.png"
    },
    {
      "id": "bb_gaojiaoniao_fhd",
      "name": "凤凰蛋",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fhd.png",
      "summary": "制作凤求凰、提高其基础攻击的凤凰蛋；这里作为材料使用。",
      "recipe": "炼金引擎；高脚鸟制作：岩浆虫卵×1 + 红宝石×99",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟以岩浆虫卵和99红宝石在炼金引擎制作。保留1个用于[[凤求凰]]配方，多余的可给予已制成的凤求凰升级。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每个用于升级的凤凰蛋增加50基础攻击，升级会消耗蛋。满级[[何三宝]]寻宝也有机会带来凤凰蛋。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fqh",
        "bighead_sanbao_builder"
      ],
      "tags": [
        "材料",
        "凤凰",
        "蛋"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_fhd.png"
    },
    {
      "id": "bb_gaojiaoniao_cmyh",
      "name": "重明遗骨",
      "category": "armor",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_cmyh.png",
      "summary": "高脚鸟的衣物装备，可踏水、加速，并插入一颗月眼切换附加功能。",
      "recipe": "炼金引擎；高脚鸟制作：[bb_gaojiaoniao_bzmgt]×8",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备到服装栏，打开装备自带的单格容器放入一种月眼；更换月眼即可切换效果。由8个[[不知名骨头]]制作。"
        },
        {
          "type": "text",
          "title": "基础效果",
          "content": "不放月眼也有装备移速×1.3、踏水和穿越碰撞障碍的能力。装入月眼后，在基础能力上增加下列对应效果。"
        },
        {
          "type": "table",
          "title": "六种月眼的附加效果",
          "columns": [
            "月眼",
            "装入后的效果"
          ],
          "rows": [
            [
              "红色月眼",
              "提供500隔热，延缓高温环境下体温上升；并非高温免疫。"
            ],
            [
              "蓝色月眼",
              "提供500保暖，延缓低温环境下体温下降；并非低温免疫。"
            ],
            [
              "橙色月眼",
              "装备移速由×1.3提高至×1.5，也就是相对原始移速增加50%；不会与原来的×1.3再相乘。"
            ],
            [
              "黄色月眼",
              "获得随身照明，光源半径为4，可照亮身边区域。"
            ],
            [
              "绿色月眼",
              "采集、收获和制作使用更短的动作，加快这些操作；不提供砍树、采矿的效率倍率。翻找类采集及有专用制作动作的配方仍使用原动作。"
            ],
            [
              "紫色月眼",
              "攻击时在目标附近召唤暗影触手协助攻击。目标需有效且存活，通常不对建筑、墙体触发；附近还需有可放置触手的位置。"
            ]
          ]
        },
        {
          "type": "text",
          "title": "搭配凤求凰",
          "content": "同时装备[[凤求凰]]时，其弹丸还会附带灼烧。这个联动与月眼颜色无关，不放月眼也能生效。"
        },
        {
          "type": "text",
          "title": "使用提醒",
          "content": "只有1个月眼槽位，一次只能使用一种附加效果；取出或更换月眼时，原来的月眼效果会结束。踏水依赖装备状态，换下前先回到安全陆地。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_bzmgt",
        "bb_gaojiaoniao_fqh",
        "bb_gaojiaoniao_cmyh_skin1",
        "bb_gaojiaoniao_cmyh_skin2",
        "bb_gaojiaoniao_cmyh_skin3"
      ],
      "tags": [
        "材料",
        "重明",
        "遗骨"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_cmyh.png"
    },
    {
      "id": "bb_gaojiaoniao_bzmgt",
      "name": "不知名骨头",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_bzmgt.png",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "拆完沉底宝箱时有20%概率获得；保存起来，用8个制作[[重明遗骨]]。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "自身没有装备或主动使用效果，是制作材料。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_cmyh"
      ],
      "tags": [
        "材料",
        "遗骨"
      ],
      "summary": "制作重明遗骨的素材，攒够8个交由高脚鸟制作。",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_bzmgt.png"
    },
    {
      "id": "bighead_buran",
      "name": "不染",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_buran.png",
      "summary": "带3格配件容器的成长型远程法杖，可从6种配件中选装3种，并用神石强化位面伤害。",
      "recipe": "无需科技；胖头鱼制作：亮茄魔杖×1 + 花瓣×40 + 启迪碎片×5",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "由胖头鱼装备在手部攻击。在物品栏对不染执行「打开」，可查看竖排3格的配件容器；把配件放入格子，手持不染时发挥对应效果。"
        },
        {
          "type": "list",
          "title": "3格配件容器",
          "items": [
            "3个格子都可以放任一种允许的配件，没有固定的材料位置；每格只能放1件，最多同时装3种。",
            "只接受月冕莲心、远古星雷符文、注能暗影心房、天体宝球、珍珠、破裂珍珠这6种配件。同种配件不能重复放入，也不能在格内堆叠。",
            "配件可以取出、更换，放入时不会作为升级材料被消耗。蕴灵神石要用「给予」来强化，不放进这3个格子。"
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "初始普通攻击1、位面伤害0，攻击/命中距离8/10，移速×1.5；能以5工作效率砍树、挖矿。命中有5%概率触发冰圈，[[灵气]]>75时提高为20%。 非PVP世界中，弹体命中其他玩家时仅击退，不结算此次伤害与配件命中效果；冰圈也不会伤害其他玩家。"
        },
        {
          "type": "text",
          "title": "升级",
          "content": "将[[蕴灵神石]]给予不染，每颗永久增加5点基础位面伤害；这与装入、取出配件分别操作。普攻不消耗攻击次数耐久。"
        },
        {
          "type": "table",
          "title": "配件效果",
          "columns": [
            "放入的配件",
            "手持不染时的效果"
          ],
          "rows": [
            [
              "[[月冕莲心]]",
              "每60秒额外恢复2点灵气，可与默认回复、月岛加成叠加。"
            ],
            [
              "[[远古星雷符文]]",
              "攻击仍存活的暗影阵营、暗影或梦魇类目标时，若当前灵气至少1点，追加扣费前灵气×50的直接伤害，并消耗1点灵气；对暗影生物、梦魇生物还会追加清空当前生命的直接伤害。"
            ],
            [
              "注能暗影心房",
              "命中仍存活的目标时，有5%概率追加目标最大生命10%的直接伤害；角色死亡变鬼时，若仍装备不染且充能完成，可自动满血复活，随后冷却360秒。"
            ],
            [
              "天体宝球",
              "一次挖矿工作完成时有50%概率触发产宝石判定；红、蓝宝石各80%，紫宝石50%，黄、绿、橙宝石各30%，彩虹宝石10%，分别独立判定。"
            ],
            [
              "珍珠",
              "幸运值+1。"
            ],
            [
              "破裂珍珠",
              "命中仍存活的目标时，有1%概率追加1000×当前灵气的普通攻击伤害，不消耗灵气。"
            ]
          ]
        }
      ],
      "related": [
        "pangtouyu",
        "mech_buran",
        "bighead_ymlx",
        "bighead_ylss",
        "bighead_ygxlfw",
        "bighead_buran_skin1",
        "bighead_buran_skin2",
        "bighead_buran_skin3",
        "bighead_buran_skin4",
        "bighead_buran_skin5",
        "mech_lingqi"
      ],
      "tags": [
        "其他",
        "莲",
        "月台"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_buran.png"
    },
    {
      "id": "bb_gaojiaoniao_px_builder",
      "name": "貔貅",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_px.png",
      "summary": "高脚鸟的专属坐骑，可骑乘赶路、踏水，并将有金价的物品兑换成金块。",
      "recipe": "无需科技；高脚鸟召唤：理智×50",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟在专属制作栏花费50理智使用“莲令”，即可召唤貔貅。貔貅在场且无人骑乘时，再次使用“莲令”可将它收回。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "召唤后会跟随高脚鸟，仅主人可以骑乘。骑乘时可以踏水，移动速度可在模组设置中调整。"
        },
        {
          "type": "text",
          "title": "兑换金块",
          "content": "胖头鱼和高脚鸟都能打开貔貅的容器。放入有金价的物品后，物品会被消耗，并按金价与数量换成金块。容器也能放金块，但金块不会再次兑换。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "config_bb_gaojiaoniao_px_speed",
        "bb_gaojiaoniao_px_skin1"
      ],
      "tags": [
        "生物",
        "貔貅",
        "莲"
      ],
      "tech": "无需科技；高脚鸟召唤",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_px.png",
      "aliases": [
        "莲令",
        "麒麟",
        "貔貅（莲令）"
      ]
    },
    {
      "id": "bighead_sanbao_builder",
      "name": "何三宝",
      "category": "misc",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sanbao_builder.png",
      "summary": "召唤猫伙伴何三宝：随身20格仓库、战斗支援，喂到100级后还能寻宝。",
      "recipe": "无需科技；胖头鱼制作：理智×20",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼在专属制作栏花费20理智召唤。胖头鱼和高脚鸟可打开三宝容器，或用[[美味罐头]]喂养。"
        },
        {
          "type": "table",
          "title": "升级材料",
          "columns": [
            "材料与用量",
            "效果与用量上限"
          ],
          "rows": [
            [
              "[[美味罐头]]×1",
              "每份升1级，初始0级，最高100级；累计100份；可堆叠投喂，只收取升满所需数量"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "三宝有20格储物空间。攻击随等级分档提高：0～10级50、11～50级100、51～99级200、100级300；会在主人附近帮助攻击。满级再喂罐头触发随机寻宝，寻宝冷却5秒。 生命上限9999，普通伤害吸收99%，每秒恢复2生命。阵亡时关闭仓库、掉出全部储物，并清除待发放的寻宝奖励。"
        },
        {
          "type": "text",
          "title": "攻击与换角色",
          "content": "玩家攻击三宝时，会被直接扣尽生命，死因为「天道」。胖头鱼换角色时，三宝会关闭仓库、掉出全部储物并消失。"
        },
        {
          "type": "text",
          "title": "寻宝与限制",
          "content": "奖励包括鹿角、克劳斯赃物袋、当季[[寄生灵]]、沉底宝箱、[[凤凰蛋]]等。非这两个角色不能正常开仓或喂养；已达到宠物数量限制时不能重复召唤。召唤图标本身是制作动作。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_mwgt",
        "bb_gaojiaoniao_fhd",
        "gaojiaoniao",
        "mech_parasite"
      ],
      "tags": [
        "生物",
        "猫",
        "三宝"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_sanbao.png",
      "aliases": [
        "三宝"
      ]
    },
    {
      "id": "bb_cwd",
      "name": "春望蝶",
      "category": "misc",
      "owner": "common",
      "image": "assets/img/items/bb_cwd.png",
      "summary": "春朝亭里的授粉蝴蝶，外出采粉回家帮助生产黄油。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "先建[[春朝亭]]，在附近种花，让春望蝶自行外出采粉、返回亭子；玩家主要操作是收获亭内的黄油。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "它属于活体授粉生物，生命只有1。不是普通背包材料；当前版本不能用捕虫网捕捉。击杀通常掉落蝴蝶翅膀，也有较低概率掉落黄油。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「它正在忙碌」"
        }
      ],
      "related": [
        "bb_cct"
      ],
      "tags": [
        "生物",
        "蝴蝶",
        "春望"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_cwd.png"
    },
    {
      "id": "bb_gaojiaoniao_fr",
      "name": "芙蓉",
      "availability": "特殊获取",
      "category": "tool",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fr.png",
      "summary": "高脚鸟召唤、指挥溟羽及施放冥火、桎梏的花，通过花种培育和新月夜祭眼仪式取得。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "list",
          "title": "特殊获取方式",
          "items": [
            "由高脚鸟戴上高级耕作先驱帽，用1张蘑菇皮开启打包。放入暗影心房×1、格罗姆翅膀×2、腐烂物×10、花瓣×20，完成后得到[[花种]]。",
            "使花种自身温度连续保持至少50℃，持续3个游戏天，得到[[腐烂花种]]；低于50℃会清零培育计时。",
            "在新月的夜晚前往月台，找到附近生成的[[祭眼]]，给予腐烂花种即可取得芙蓉。完整准备和注意事项见[[花种祭眼仪式]]。"
          ]
        },
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟右键打开技能轮盘，选择“冥火”或“桎梏”，再指定地面位置。轮盘的这两种技能在骑乘时禁用。"
        },
        {
          "type": "list",
          "title": "召唤与指挥溟羽",
          "items": [
            "由高脚鸟对物品栏中的芙蓉使用「召唤」，叫出专属伙伴[[溟羽]]。",
            "溟羽出场后，对芙蓉使用「激怒」或「安慰」，在激怒战斗和防御跟随之间切换。",
            "想收回时，拿起芙蓉，对自己的溟羽执行「返回」。召唤、收回和切换模式不会消耗芙蓉。"
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "施法最远14距离，两种技能分别冷却60秒，骑乘时禁用。冥火持续480秒，提供照明并将半径16内温度维持为32℃；高脚鸟免受其理智光环影响，其他角色在光环内每分钟损失800理智。"
        },
        {
          "type": "text",
          "title": "冥火与噬心",
          "content": "高脚鸟在冥火半径16内连续停留，每累计60秒增加1点[[噬心]]。中途离开会中断，重新进入后重新累计；多个冥火重叠不会同时重复累计。"
        },
        {
          "type": "table",
          "title": "桎梏的四圈藤蔓",
          "columns": [
            "圈数",
            "距落点半径",
            "陷阱数"
          ],
          "rows": [
            [
              "第一圈",
              "2",
              "6"
            ],
            [
              "第二圈",
              "4.8",
              "16"
            ],
            [
              "第三圈",
              "7.4",
              "24"
            ],
            [
              "第四圈",
              "10",
              "32"
            ]
          ]
        },
        {
          "type": "text",
          "title": "藤蔓伤害",
          "content": "每个陷阱作用半径2，范围内有效敌人每秒直接损失最大生命的1%，站立不动也会受伤。同一目标共享1秒结算间隔，多个陷阱重叠不会加快此扣血频率。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_my",
        "bighead_flowerseed",
        "bighead_rotten_flowerseed",
        "bighead_ritual_eye",
        "mech_seed_ritual",
        "mech_shixin"
      ],
      "tags": [
        "其他",
        "芙蓉",
        "冥火",
        "召唤",
        "溟羽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_fr.png"
    },
    {
      "id": "bb_gaojiaoniao_my",
      "name": "溟羽",
      "aliases": [
        "冥羽"
      ],
      "category": "misc",
      "owner": "gaojiaoniao",
      "availability": "特殊获取",
      "image": "assets/img/mechanics/mingyu.png",
      "summary": "芙蓉召唤的高脚鸟专属伙伴，以直线冥焰作战，可喂材料提升减伤，夜晚伤害800。",
      "detail_blocks": [
        {
          "type": "list",
          "title": "怎么使用",
          "items": [
            "先取得[[芙蓉]]，由[[高脚鸟]]在其物品动作中选择「召唤」。溟羽没有独立的制作配方。",
            "出场默认防御模式，在主人附近协助交战；对芙蓉使用「激怒」切换模式。激怒时会寻找正与主人或溟羽交战的目标，或主人当前的战斗目标。",
            "再对芙蓉使用「安慰」可回到防御模式。拿起芙蓉，对自己的溟羽执行「返回」可收回伙伴。"
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "溟羽飞行跟随主人，可跨海移动，移动速度8。攻击距离8，攻击间隔设为4秒；朝目标方向释放直线冥焰，对路径内有效敌人直接扣血。火线长度随目标距离在6～16之间调整，左右各约2距离，并计入目标体型。"
        },
        {
          "type": "table",
          "title": "羁绊与生命上限",
          "columns": [
            "羁绊等级",
            "成长条件",
            "生命上限"
          ],
          "rows": [
            [
              "1级",
              "初始",
              "500"
            ],
            [
              "2级",
              "默认再经过1个游戏天",
              "1000"
            ],
            [
              "3级",
              "默认再经过1个游戏天",
              "2000"
            ]
          ]
        },
        {
          "type": "table",
          "title": "随昼夜变化的基础攻击",
          "columns": [
            "时段",
            "每次命中的基础伤害"
          ],
          "rows": [
            [
              "白天",
              "300"
            ],
            [
              "黄昏",
              "500"
            ],
            [
              "夜晚",
              "800"
            ]
          ]
        },
        {
          "type": "text",
          "title": "恢复与死亡",
          "content": "有主人链接、溟羽在场且没有战斗目标时，每秒恢复1生命。生命成长取决于羁绊，攻击取决于昼夜。溟羽阵亡后羁绊重置为1级；高脚鸟死亡时会收回溟羽并暂停羁绊成长，复活后从1级继续成长。不能使用幽灵药剂；只接受指定的减伤升级材料。"
        },
        {
          "type": "table",
          "title": "防御与喂养升级",
          "columns": [
            "项目",
            "效果"
          ],
          "rows": [
            [
              "自带位面防御",
              "40"
            ],
            [
              "给予[[不知名骨头]]×1",
              "每个增加5个百分点普通伤害吸收；从0%升至80%需16个"
            ],
            [
              "给予邪天翁羽毛×1",
              "每根增加0.5个百分点普通伤害吸收；从0%升至80%需160根"
            ],
            [
              "升级上限",
              "普通伤害吸收最多80%；支持堆叠交付，进度保存"
            ]
          ]
        },
        {
          "type": "text",
          "title": "命中后的额外掉落",
          "content": "冥焰或攻击命中存活目标后会为其挂上奖励标记。该目标之后死亡，额外掉落1个纯粹恐惧；若目标是石虾，还额外掉落1个绝望石。无需由溟羽完成最后一击，同一目标的奖励不会重复领取。"
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「她不会要我的小命吧！」\n胖头鱼：「你怎会沦落至此！溟羽！」\n高脚鸟：「倒还得力！」"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fr",
        "bb_gaojiaoniao_bzmgt",
        "mech_shixin"
      ],
      "tags": [
        "生物",
        "伙伴",
        "召唤",
        "羁绊"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_my.png"
    },
    {
      "id": "bb_gaojiaoniao_lh",
      "name": "轮回",
      "category": "armor",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_lh.png",
      "summary": "高脚鸟的20格护甲背包，能用材料提高减伤，五道领悟完成后可注入道蕴。",
      "recipe": "炼金引擎；高脚鸟制作：红宝石×5 + 金块×20 + 噩梦燃料×10",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备后存取物品。把升级或修复材料给予背包；完成[[五道]]后，将轮回放在地上使用注入道蕴动作。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "初始耐久1500、普通伤害吸收20%，容量20格并支持无限堆叠。耐久耗尽时护甲吸收归零。"
        },
        {
          "type": "table",
          "title": "升级材料",
          "columns": [
            "材料与用量",
            "效果与用量上限"
          ],
          "rows": [
            [
              "重生护符×1",
              "普通伤害吸收+1个百分点；与告密的心共用95%实际吸收上限"
            ],
            [
              "告密的心×1",
              "普通伤害吸收+0.5个百分点；与重生护符共用95%实际吸收上限"
            ],
            [
              "暗影心房×1",
              "位面防御+20；只可强化1次"
            ]
          ]
        },
        {
          "type": "text",
          "title": "修理材料",
          "content": "给予金块×1修复50耐久；黄宝石×1修复最大耐久的30%；橙宝石×1修复最大耐久的20%。"
        },
        {
          "type": "text",
          "title": "五道进阶",
          "content": "高脚鸟完成[[五道]]后，将轮回放在地上，使用「传入道蕴」，不额外消耗材料。进阶后最大耐久7500，另加50位面防御，内容物停止腐败，鬼魂作祟可满三维复活。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_wudao",
        "bb_gaojiaoniao_lh_skin1",
        "bb_gaojiaoniao_lh_skin2"
      ],
      "tags": [
        "其他",
        "轮回"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_lh.png"
    },
    {
      "id": "bb_gaojiaoniao_gjsh",
      "name": "古祭神辉",
      "category": "armor",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_gjsh.png",
      "summary": "高脚鸟的头部装备，提供阵营增伤、集血灵治疗，阻止噬心下降，并可收纳封魂驱使飞剑。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备到头部。把一把[[封魂]]交给它收纳，再用装备上的使用动作切换飞剑；要取回封魂，把装备放在地上进行一次开采。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "对暗影阵营与月亮阵营目标分别提供×3伤害加成。有效攻击有20%概率积1个血灵，集满5个时为8距离内符合友好条件的存活玩家回满生命，然后清空血灵。换下装备会清除尚未集满的血灵。"
        },
        {
          "type": "text",
          "title": "噬心保护",
          "content": "佩戴时[[噬心]]不会下降，包括[[五道]]圆满后每60秒减少2点的自然衰减；增加噬心仍会生效。"
        },
        {
          "type": "text",
          "title": "获得与搭配",
          "content": "击败天体英雄第三阶段，原启迪碎片掉落有10%概率被替换为古祭神辉。收纳封魂保留其封印成长和皮肤；同一角色同时只能召出一组飞剑，不能靠头部与手部重复叠出两组。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fh",
        "bb_gaojiaoniao_gjsh_skin1",
        "mech_shixin",
        "bb_gaojiaoniao_fh_skin3"
      ],
      "tags": [
        "其他",
        "五灵",
        "祭祀"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_gaojiaoniao_gjsh.png"
    },
    {
      "id": "bighead_mwgt",
      "name": "美味罐头",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bighead_mwgt.png",
      "summary": "何三宝专用饲料：每份升1级，100级后继续喂可触发寻宝。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "胖头鱼通过专属制作栏合成。胖头鱼或高脚鸟拿着罐头喂给[[何三宝]]，用作宠物的专用饲料。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "玩家不能直接食用。每次喂给[[何三宝]]消耗1份：未满100级时升1级，满级后触发寻宝，两次寻宝至少间隔5秒。也可用于交易。"
        }
      ],
      "related": [
        "bighead_sanbao_builder",
        "bighead_nr",
        "bighead_yr",
        "pangtouyu",
        "bb_gaojiaoniao_px_builder"
      ],
      "recipe": "胖头鱼专属制作，任选一组：[bighead_nr]×2 + 铥矿×1 + 肉×2 + 高脚鸟蛋×1；或[bighead_yr]×1 + 鱼肉×3 + 铥矿×1 + 高脚鸟蛋×1；或鸟腿×5 + 铥矿×1 + 小肉×5 + 鸟蛋×3；或鱼肉×3 + 无花果×2 + 铥矿×1 + 藤壶×3",
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_mwgt.png"
    },
    {
      "id": "bighead_nr",
      "name": "牛肉",
      "category": "food",
      "food_category": "ingredient",
      "owner": "common",
      "image": "assets/img/items/bighead_nr.png",
      "summary": "制作何三宝美味罐头的肉类材料，也可作为2肉度食材入锅。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "击杀皮弗娄牛固定额外掉落2份。用于[[美味罐头]]专属制作配方，或放进烹饪锅提供2肉度。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "属于会腐败的生肉，也可直接食用；基础食用数值沿用原版小量治疗、中量饥饿回复和少量理智损失。可交给[[貔貅]]按金价兑换金块。"
        }
      ],
      "related": [
        "bighead_mwgt",
        "bb_gaojiaoniao_px_builder"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_nr.png"
    },
    {
      "id": "bighead_yr",
      "name": "羊肉",
      "category": "food",
      "food_category": "ingredient",
      "owner": "common",
      "image": "assets/img/items/bighead_yr.png",
      "summary": "制作何三宝美味罐头的肉类材料，也可作为2肉度食材入锅。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "击杀伏特羊固定额外掉落1份。用于[[美味罐头]]专属制作配方，或放进烹饪锅提供2肉度。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "属于会腐败的生肉，也可直接食用；基础食用数值沿用原版小量治疗、中量饥饿回复和少量理智损失。可交给[[貔貅]]按金价兑换金块。"
        }
      ],
      "related": [
        "bighead_mwgt",
        "bb_gaojiaoniao_px_builder"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_yr.png"
    },
    {
      "id": "bighead_wanxiangji",
      "name": "万象玑",
      "category": "tool",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bighead_wanxiangji.png",
      "summary": "高脚鸟专用七法术饰品，以弦传送、束缚、治疗、改月相、切换降水和召唤仆从。",
      "recipe": "无需科技：红宝石×9 + 蓝宝石×9 + 紫宝石×9 + 橙宝石×9 + 黄宝石×9 + 绿宝石×9 + 彩虹宝石×9",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "高脚鸟装备万象玑后，打开法术轮盘并选择技能。「传」还需选择另一名玩家。优先占护符或颈部装备位，未扩展装备位时占身体位。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "弦上限1000；高脚鸟新生自带并自动装备的一件有20弦，另外制作的初始0弦。七宝石配方不限制制作者角色，但装备施法限高脚鸟。法术成功后才扣弦，弦不足不能施放。"
        },
        {
          "type": "table",
          "title": "七项法术",
          "columns": [
            "法术与弦消耗",
            "效果"
          ],
          "rows": [
            [
              "传 · 2弦",
              "传送到所选存活玩家附近的可行走落点；目标须在同一地表或洞穴世界，无法跨世界传送。"
            ],
            [
              "缚 · 2弦",
              "在周围24距离内有效敌人身旁生成暗影柱束缚。"
            ],
            [
              "新 · 20弦",
              "将世界月相改为新月。"
            ],
            [
              "血 · 5弦",
              "使周围24距离内存活玩家恢复至满生命。"
            ],
            [
              "盈 · 20弦",
              "将世界月相改为满月。"
            ],
            [
              "雨 · 2弦",
              "切换世界降水开关。"
            ],
            [
              "召 · 5弦",
              "补充暗影仆从至最多4个；仆从会跟随、工作，持续1个游戏天，数量受附近可用落点限制。"
            ]
          ]
        },
        {
          "type": "text",
          "title": "如何充弦",
          "content": "拿起下表材料，对万象玑执行「给予」。支持堆叠交付，按缺额限制消耗数量；最后一份材料仍整件消耗，超出1000上限的部分不会保留。"
        },
        {
          "type": "table",
          "title": "每件材料可充多少弦",
          "columns": [
            "充弦量",
            "可给予材料"
          ],
          "rows": [
            [
              "+2弦",
              "牛角、伏特羊角、齿轮、废料、钢丝绵、麋鹿鹅羽毛、邪天翁羽毛、触手皮、啜食者皮、兔绒、黄色羽毛、鳞片"
            ],
            [
              "+20弦",
              "邪天翁喙、守护者之角、独眼巨鹿眼球、熊皮、蘑菇皮、蜘蛛帽、蜘蛛卵、[[蕴灵神石]]"
            ],
            [
              "+40弦",
              "岩浆虫卵、冷冻虫卵"
            ],
            [
              "+100弦",
              "[[七彩石]]（三种物品形态均可）"
            ]
          ]
        },
        {
          "type": "text",
          "title": "检查台词",
          "content": "通用检查：「一色化千彩。」"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bighead_ylss",
        "bighead_wcs",
        "mech_seed_ritual"
      ],
      "tags": [
        "万象玑"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_wanxiangji.png",
      "tech": "无需科技；高脚鸟施法"
    },
    {
      "id": "bighead_flowerseed",
      "name": "花种",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bighead_flowerseed.png",
      "summary": "高脚鸟以指定材料打包取得的仪式种子，连续高温培育后变成腐烂花种。",
      "recipe": "仪式打包：蘑菇皮×1 + 暗影心房×1 + 格罗姆翅膀×2 + 腐烂物×10 + 花瓣×20",
      "detail_blocks": [
        {
          "type": "list",
          "title": "怎么使用",
          "items": [
            "由高脚鸟戴高级耕作先驱帽，拿1张蘑菇皮开启打包，蘑菇皮会在开始时消耗。",
            "四格中放入暗影心房×1、格罗姆翅膀×2、腐烂物×10、花瓣×20。只能含这四种材料，数量须足够；完成时只消耗所需数量，多余材料退回。",
            "完成打包取得花种，再保持花种自身温度至少50℃以培育。"
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "温度连续至少50℃、持续3个游戏天，转为[[腐烂花种]]。任何时候低于50℃都会将累计时间清零；培育进度可随存档保存。判断花种自身温度，不是只看角色或季节温度。"
        },
        {
          "type": "text",
          "title": "下一步",
          "content": "新月夜将腐烂花种给予月台旁的[[祭眼]]，即可取得[[芙蓉]]。完整步骤见[[花种祭眼仪式]]。"
        }
      ],
      "related": [
        "bighead_rotten_flowerseed",
        "bighead_ritual_eye",
        "bb_gaojiaoniao_fr",
        "mech_seed_ritual"
      ],
      "tags": [
        "花种"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_flowerseed.png",
      "availability": "特殊获取"
    },
    {
      "id": "bighead_rotten_flowerseed",
      "name": "腐烂花种",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bighead_rotten_flowerseed.png",
      "summary": "花种连续高温培育3个游戏天的产物，在新月夜交给祭眼换取芙蓉。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "使[[花种]]自身温度连续保持至少50℃满3个游戏天，得到本物。等到新月夜，在月台附近找到[[祭眼]]，拿起腐烂花种执行「给予」。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "祭眼接受后交付[[芙蓉]]，并改变自身外观。祭眼只在新月夜出现，白天或不再满足月相、夜晚条件时会移除；提前准备好材料再前往。"
        }
      ],
      "related": [
        "bighead_flowerseed",
        "bighead_ritual_eye",
        "bb_gaojiaoniao_fr",
        "mech_seed_ritual"
      ],
      "tags": [
        "腐烂花种"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_rotten_flowerseed.png",
      "availability": "特殊获取"
    },
    {
      "id": "bighead_ritual_eye",
      "name": "祭眼",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/mechanics/ritual_eye.png",
      "summary": "新月夜出现在月台附近的仪式对象，接受腐烂花种换芙蓉，或接受告密的心召唤Boss。",
      "recipe": "",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "在新月的夜晚前往月台，祭眼会尝试在月台附近约6距离的可行走位置出现。将[[腐烂花种]]给予它可取得[[芙蓉]]；给予告密的心则尝试召唤随机Boss组合。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "祭眼是临时场景对象，没有制作配方，不能作为普通物品携带。进入白天或不满足新月夜条件时移除。告密的心召唤要求候选Boss已在当前游戏注册，且存在合适落点；水生Boss会寻找海面落点，有些组合一次召出多只。"
        },
        {
          "type": "table",
          "title": "Boss抽选规则",
          "columns": [
            "先抽中的档位",
            "候选示例"
          ],
          "rows": [
            [
              "50%",
              "蜘蛛女王、果蝇王、树精守卫、大座狼、暗影三基佬、邪天翁等"
            ],
            [
              "30%",
              "独眼巨鹿、熊獾、麋鹿鹅、蚁狮、远古守护者、毒菌蟾蜍、恐怖之眼等"
            ],
            [
              "20%",
              "龙蝇、蜂王、克劳斯、悲惨的毒菌蟾蜍、远古织影者、帝王蟹、天体英雄等"
            ]
          ]
        },
        {
          "type": "text",
          "title": "概率怎么理解",
          "content": "先按50%／30%／20%选择档位，再从该档当前游戏已注册的有效候选组合中等概率选择。这些百分比不是单个Boss的出现率。"
        }
      ],
      "related": [
        "bighead_rotten_flowerseed",
        "bb_gaojiaoniao_fr",
        "mech_seed_ritual"
      ],
      "tags": [
        "祭眼"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bighead_ritual_eye.png",
      "availability": "特殊获取"
    },
    {
      "id": "bb_ymz_jade_rock",
      "name": "地玉笋",
      "category": "environment",
      "owner": "common",
      "image": "assets/img/mechanics/bb_ymz_jade_rock.png",
      "summary": "云梦泽中的玉矿，挖完掉落3～5个地玉；区域会定期补充。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么获取",
          "content": "创建新世界后，到沼泽相连的[[云梦泽]]寻找。森林初始尝试生成3～6处，中心另有2处。"
        },
        {
          "type": "text",
          "title": "怎么使用",
          "content": "使用镐或能挖矿的工具开采。普通挖矿需9次工作，挖完掉落3～5个[[地玉]]，矿体消失。"
        },
        {
          "type": "text",
          "title": "刷新规则",
          "content": "每10个游戏天，区域尝试将现存地玉笋总数补到随机5～8处，受可用空位限制；不是每轮额外增加5～8处。"
        }
      ],
      "related": [
        "mech_mist_forest",
        "bb_ymz_jade",
        "bighead_ruyi"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_jade_rock.png"
    },
    {
      "id": "bb_ymz_jade",
      "name": "地玉",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bb_ymz_jade.png",
      "summary": "开采地玉笋获得，用于制作玉如意。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么获取",
          "content": "在[[云梦泽]]开采[[地玉笋]]，每处挖完掉落3～5个。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "[[胖头鱼]]可用地玉×10制作[[玉如意]]，无需科技。"
        }
      ],
      "related": [
        "bb_ymz_jade_rock",
        "bighead_ruyi",
        "mech_mist_forest"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_jade.png"
    },
    {
      "id": "bb_ymz_compostbin",
      "name": "古骸培土机",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_ymz_compostbin.png",
      "summary": "把指定干湿材料转成血泥：容量6份，每消耗2份产出1份。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色均可制作，无需科技；建造消耗活木头×5、蚊子血囊×2和自身100生命。投入下表材料，等生产完成后采集[[血泥]]。"
        },
        {
          "type": "table",
          "title": "接受的材料",
          "columns": [
            "类别",
            "可投入材料"
          ],
          "rows": [
            [
              "湿料",
              "蚊子血囊、蜘蛛腺、怪物肉"
            ],
            [
              "干料",
              "犬牙、骨头碎片"
            ]
          ]
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每个材料计1份，最多存6份；每轮消耗2份，产出1份血泥。投入数量和干湿平衡影响生产时间。只接受表中五种材料；建筑防火、防雷。"
        }
      ],
      "related": [
        "bb_ymz_bloodmud",
        "mech_paddy"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_compostbin.png",
      "recipe": "无需科技：活木头×5 + 蚊子血囊×2 + 生命×100",
      "tech": "无需科技；任意角色制作"
    },
    {
      "id": "bb_ymz_bloodmud",
      "name": "血泥",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bb_ymz_bloodmud.png",
      "summary": "三种农田养分各补99；可催长一阶段，但被催长的作物不能成为巨型。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么获取",
          "content": "制作[[古骸培土机]]，投入其接受的干湿材料。每轮2份材料产出1份血泥，完成后从机器采集。"
        },
        {
          "type": "text",
          "title": "怎么使用",
          "content": "可当肥料使用，为农田补充三种养分各99。对未成熟农作物使用，可推进1个生长阶段；施用到地面时，还会推进同一地格内的未成熟农作物。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "被血泥催长的作物不能长成巨型作物。想收获巨型作物时，避免对作物或所在格使用血泥催长。[[水田]]本身的生长加速不附带这项限制。",
          "tone": "note"
        }
      ],
      "related": [
        "bb_ymz_compostbin",
        "mech_paddy"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_bloodmud.png"
    },
    {
      "id": "bb_ymz_pool",
      "name": "碧波泉",
      "category": "environment",
      "owner": "pangtouyu",
      "image": "assets/img/mechanics/bb_ymz_pool.png",
      "summary": "云梦泽天然泉池：胖头鱼泡澡每60秒恢复1灵气，空手捕鱼消耗5饥饿。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么获取",
          "content": "在新世界的[[云梦泽]]中央、[[太极青玄阁]]附近寻找天然泉池，无制作配方。"
        },
        {
          "type": "text",
          "title": "怎么使用",
          "content": "仅[[胖头鱼]]可右键进入泡澡，不能骑乘入池。空手左键可捕鱼，至少需要5饥饿，成功捕到后消耗5饥饿；普通池塘仍是10饥饿。"
        },
        {
          "type": "text",
          "title": "泡澡效果",
          "content": "连续泡澡每60秒额外恢复1点[[灵气]]，泡澡期间自然饥饿消耗变为80%；没有额外的生命或理智恢复。"
        },
        {
          "type": "text",
          "title": "鱼与水源",
          "content": "可捕到池塘鱼、鳗鱼和原版海鱼，受池内鱼量与补充时间限制。泉池也能作为水源。"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_lingqi",
        "mech_mist_forest",
        "loc_qingxuan"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_waterfall.png"
    },
    {
      "id": "bb_watertree_pillar",
      "name": "不死树",
      "category": "environment",
      "owner": "common",
      "image": "assets/img/mechanics/bb_watertree_pillar.png",
      "summary": "未实装：暂无正常获取入口；已放置的不死树可用蜂王浆1∶1兑换血浆。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "实装状态",
          "content": "未实装。当前版本没有自然生成或制作入口。[[云梦泽]]海边生成的是原版大树，不能用来兑换血浆。",
          "tone": "note"
        },
        {
          "type": "text",
          "title": "已实现的效果",
          "content": "若世界中已有放置的不死树，可将蜂王浆给予它，按投入数量1∶1换得[[血浆]]。这项兑换已写入效果，但不死树的正常获取链尚未接通。"
        }
      ],
      "related": [
        "bb_ymz_plasma",
        "bb_ymz_bloodpool",
        "mech_mist_forest"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_immortal_tree.png",
      "availability": "未实装"
    },
    {
      "id": "bb_ymz_plasma",
      "name": "血浆",
      "category": "material",
      "owner": "common",
      "image": "assets/img/items/bb_ymz_plasma.png",
      "summary": "未实装：依赖尚无获取入口的不死树兑换，是亡骸浸池的配方材料。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "实装状态",
          "content": "未实装。当前唯一产出方式是把蜂王浆给予[[不死树]]，按数量1∶1兑换；不死树尚无自然生成或制作入口，因此正常流程暂时无法取得血浆。",
          "tone": "note"
        },
        {
          "type": "text",
          "title": "已实现的用途",
          "content": "[[亡骸浸池]]配方需要血浆×99；该配方因原料获取链未接通，暂不能在正常流程完成。"
        }
      ],
      "related": [
        "bb_watertree_pillar",
        "bb_ymz_bloodpool"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_plasma.png",
      "availability": "未实装"
    },
    {
      "id": "bb_ymz_bloodpool",
      "name": "亡骸浸池",
      "category": "structure",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_ymz_bloodpool.png",
      "summary": "未实装：缺少血浆获取链；已实现高脚鸟泡澡增噬心、活物献祭和骷髅生成。",
      "detail_blocks": [
        {
          "type": "text",
          "title": "实装状态",
          "content": "未实装。虽有制作配方，但所需[[血浆]]依赖尚无正常获取入口的[[不死树]]，材料获取链未接通。",
          "tone": "note"
        },
        {
          "type": "text",
          "title": "配方与使用",
          "content": "仅[[高脚鸟]]可制作和进入泡澡，无需科技。配方为血浆×99、骨头碎片×50、蚊子血囊×99；不能骑乘入池。"
        },
        {
          "type": "table",
          "title": "已实现的泡澡效果",
          "columns": [
            "五道状态",
            "池子提供的效果"
          ],
          "rows": [
            [
              "未圆满",
              "每秒生命、饥饿、理智各−5，噬心+1。"
            ],
            [
              "已圆满",
              "每60秒噬心+1，池子不再每秒扣除三维。"
            ]
          ]
        },
        {
          "type": "text",
          "title": "噬心结算",
          "content": "泡澡加噬心与角色原本的自然变化分别结算。[[五道]]圆满后的每60秒噬心−2仍会发生，佩戴[[古祭神辉]]可阻止该下降；不能把池子的+1直接当作净增长。"
        },
        {
          "type": "text",
          "title": "已实现的献祭",
          "content": "可交付活兔子、鼹鼠、蜘蛛、乌鸦、红雀、雪雀、金丝雀或海鹦。每次随机产生一项结果：50%骨头碎片、30%骷髅、20%[[血泥]]。"
        },
        {
          "type": "text",
          "title": "周边变化",
          "content": "池子会周期性尝试在附近生成骷髅，受周围数量、间距与空位限制。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_ymz_plasma",
        "bb_watertree_pillar",
        "bb_ymz_bloodmud",
        "mech_shixin",
        "mech_wudao",
        "bb_gaojiaoniao_gjsh"
      ],
      "tags": [
        "云梦泽"
      ],
      "source": "v5.8",
      "display_image": "assets/img/displays/bb_ymz_bloodpool.png",
      "recipe": "无需科技；高脚鸟制作：[bb_ymz_plasma]×99 + 骨头碎片×50 + 蚊子血囊×99",
      "tech": "无需科技；高脚鸟制作",
      "availability": "未实装"
    }
  ],
  "mechanics": [
    {
      "id": "mech_gold_penguin",
      "owner": "common",
      "title": "金企鹅兑换",
      "aliases": [
        "金企鹅",
        "金企鹅商店"
      ],
      "summary": "冬天给同一只普通企鹅10金块，在原地召出限时商人；再用Q币兑换随机库存商品。",
      "image": "assets/img/items/bighead_qbi.png",
      "display_image": "assets/img/displays/bighead_gold_penguin.webp",
      "display_poster": "assets/img/displays/bighead_gold_penguin.png",
      "detail_blocks": [
        {
          "type": "list",
          "title": "到哪里找",
          "items": [
            "没有固定商店坐标。冬天沿海岸寻找上岸的普通企鹅，再把其中一只转化成金企鹅。",
            "对同一只普通企鹅逐个给予金块，累计10块后原地转化。不是给10枚Q币，也不能把金块分给不同企鹅凑数。",
            "转化只在冬天生效，同时最多存在3只金企鹅；未满足条件时普通企鹅会拒收。"
          ]
        },
        {
          "type": "list",
          "title": "怎么兑换",
          "items": [
            "提前制作[[Q币]]，每枚需要6金块；召出商人的10金块另算。 也可用60金块制作10枚、240金块制作40枚。",
            "靠近金企鹅，在制作栏的金企鹅兑换页选择当前有库存的商品，按标价消耗Q币。",
            "商人出现后480秒（8分钟）移除。生成时从商品池随机选5种，每种初始库存1份，另可能追加琦玉器或月饼盒子；不会定时自动刷新。"
          ]
        },
        {
          "type": "table",
          "title": "可能出现的商品与价格",
          "columns": [
            "商品",
            "单件售价（Q币）",
            "出现条件"
          ],
          "rows": [
            [
              "冰鲷鱼、甜味鱼",
              "各1枚",
              "随机商品池"
            ],
            [
              "出逃腿靴",
              "3枚",
              "随机商品池"
            ],
            [
              "曼德拉草",
              "5枚",
              "随机商品池"
            ],
            [
              "珍珠的珍珠",
              "99枚",
              "随机商品池"
            ],
            [
              "[[四季之灵]]",
              "每种10枚",
              "开启节气系统；分别抽选"
            ],
            [
              "[[草制缚灵网]] / [[缚灵网]]",
              "4枚 / 16枚",
              "开启节气系统；分别抽选"
            ],
            [
              "[[冬季]]主物品",
              "50枚",
              "开启节气系统；随机抽选"
            ],
            [
              "[[冬季(10级)]]",
              "9枚",
              "开启节气系统；随机抽选"
            ],
            [
              "[[琦玉器]]",
              "10枚",
              "开启节气系统；可能追加1份"
            ],
            [
              "[[月饼盒子]]",
              "49枚",
              "可能追加1份"
            ]
          ]
        },
        {
          "type": "text",
          "title": "为什么找不到想买的东西",
          "tone": "note",
          "content": "商品不是全部同时出售，库存售完也不会自动补满；节气系统关闭时，四季之灵、节气、缚灵网和琦玉器不会上架。商品价格与召唤商人花费分开计算。"
        }
      ],
      "related": [
        "bighead_qbi",
        "bighead_qyq",
        "bighead_ybhz",
        "bighead_flw",
        "bighead_czflw",
        "config_bighead_seasons"
      ]
    },
    {
      "id": "mech_lingqi",
      "owner": "pangtouyu",
      "title": "灵气",
      "summary": "胖头鱼的技能资源：储量决定照明、踏水与减伤，也影响避尘、不染的伤害，并用于施法和园艺。",
      "image": "assets/img/mechanics/lingqi.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "灵气到底有什么用",
          "content": "[[胖头鱼]]一方面可以消耗灵气使用装备技能，另一方面会根据当前剩余点数自动获得被动能力。留着灵气就能享受照明、踏水和减伤，部分武器伤害也会更高。各档能力可以同时生效；判断的是当前灵气，不是灵气上限。"
        },
        {
          "type": "table",
          "title": "存着灵气，就有什么能力",
          "columns": [
            "当前灵气",
            "自动生效的能力"
          ],
          "rows": [
            [
              "0点",
              "人物攻击倍率降为0.5；恢复到至少1点后，恢复正常倍率。"
            ],
            [
              "至少1点",
              "恢复人物正常攻击倍率，基础为1.5；不会仅因继续攒灵气而无限提高普攻倍率。"
            ],
            [
              "至少10点",
              "开启人物自带照明；低于10点关闭。"
            ],
            [
              "至少50点",
              "可以直接在水面行走，并穿过原本会挡路的物体；低于50点后失去这些能力，在水上可能溺水。"
            ],
            [
              "至少100点",
              "在装备与料理等其他减伤结算后，将剩余伤害再乘0.7（额外减伤30%）；忽略减伤的伤害不享受此效果。同时获得食用灵魂的能力，每次回复1点灵气。低于100点时移除这两项能力。"
            ]
          ]
        },
        {
          "type": "table",
          "title": "哪些技能会用到灵气",
          "columns": [
            "技能与消耗",
            "实际用途与效果"
          ],
          "rows": [
            [
              "[[避尘]] · 惊鸿（每次2点）",
              "右键选落点施放，当前灵气须达到设置门槛（默认100，可选50～100）。每次仍扣2点；落点范围伤害为扣费后当前灵气×15，剑影为命中时当前灵气×25，同一目标每次最多中一次剑影。"
            ],
            [
              "[[不染]] · 冰圈（不扣灵气）",
              "攻击触发概率平时为5%；当前灵气严格大于75点时，提高为20%，75点整仍是5%。"
            ],
            [
              "[[不染]] + [[远古星雷符文]]（雷击每次1点）",
              "命中仍存活的暗影阵营等适用目标时，追加扣费前当前灵气×50的直接伤害；不是装上配件后对所有目标都扣灵气。"
            ],
            [
              "[[不染]] + 破裂珍珠（不扣灵气）",
              "攻击有1%概率追加当前灵气×1000的普通攻击伤害；需要已插入对应配件。"
            ],
            [
              "[[繁花]] · 施肥10点 / 催熟5点",
              "施肥补充范围内植物肥力、农田养分与水分；催熟补满[[春朝亭]]或普通蜂箱产量，不会直接催熟所有普通作物。范围采集不消耗这两项灵气费用。"
            ],
            [
              "[[春季]] · 10级主动（每次5点）",
              "促进周围40范围内符合条件的农作物生长；这是四季主物品的主动技能，与繁花的范围催熟不同。"
            ]
          ]
        },
        {
          "type": "list",
          "title": "实战怎么留灵气",
          "items": [
            "跨海前至少攒到50点；踏水期间避免施法把灵气扣到50以下，以免失去踏水能力而溺水。",
            "需要减伤时尽量保留100点以上。例如100点施放一次避尘后剩98点，会失去这层30%减伤；102点施放后剩100点，仍保留效果。",
            "提高上限只是扩大储量，不会自动把当前灵气补满。想同时保住被动能力和连续施法，先提高上限，再补充当前灵气。"
          ]
        },
        {
          "type": "stats",
          "title": "基础灵气",
          "stats": [
            {
              "label": "初始灵气",
              "value": "10"
            },
            {
              "label": "初始上限",
              "value": "100"
            },
            {
              "label": "成长后基础上限",
              "value": "200"
            }
          ]
        },
        {
          "type": "table",
          "title": "每60秒如何回复",
          "columns": [
            "条件",
            "灵气回复"
          ],
          "rows": [
            [
              "默认回复",
              "+1"
            ],
            [
              "位于月岛区域",
              "额外 +1"
            ],
            [
              "手部装备[[不染]]，且其容器内有[[月冕莲心]]",
              "额外 +2"
            ],
            [
              "在[[碧波泉]]连续泡澡",
              "额外 +1"
            ]
          ]
        },
        {
          "type": "list",
          "title": "如何主动补充",
          "items": [
            "通过[[琦玉器]]激活至少一种四季主物品后，在背包里对[[四季之灵]]执行“吸收灵气”：每次消耗1个，回复50点，不超过当前上限。",
            "当前灵气至少100点、已获得食用灵魂能力时，食用灵魂每次回复1点。这是高灵气时解锁的补充方式，不能靠它从0点起步。",
            "自动回复、月岛加成与插入月冕莲心的不染可以叠加；同时满足时，每60秒回复4点。"
          ]
        },
        {
          "type": "list",
          "title": "如何提高上限",
          "items": [
            "累计存活达到设定天数后，基础上限从100提升至200。",
            "[[灵气上限成长天数]]默认50天，可选10／25／50／100天。",
            "通过[[琦玉器]]激活至少一种四季主物品，另加100上限，不按件数叠加；成长和这项加成同时生效时，可达到300。"
          ]
        },
        {
          "type": "text",
          "title": "别等用光才关注灵气",
          "content": "灵气不足时，对应主动技能无法施放；即使还没耗尽，跌破10、50、100点也会分别失去照明、踏水与额外减伤。维持这些被动本身不持续扣灵气。",
          "tone": "note"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_spear",
        "bighead_buran",
        "bighead_ygxlfw",
        "bighead_fanhua",
        "jq_chun",
        "bighead_qyq",
        "mech_spirits",
        "bighead_ymlx",
        "config_bighead_lingqi_upgrade_days",
        "bb_ymz_pool",
        "config_bighead_bichen_min_lingqi"
      ],
      "display_image": "assets/img/displays/status_bighead_lingqi.png"
    },
    {
      "id": "mech_jieqi",
      "owner": "common",
      "title": "节气",
      "summary": "通过琦玉器装配的四季饰品系统：任何角色都可获得制作双倍、攻击、减伤和冰冻等加成。",
      "image": "assets/img/mechanics/jieqi_tab.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "先准备什么",
          "content": "在模组设置中开启“[[四季相关内容]]”（默认开启）。先准备[[琦玉器]]；再用[[玄清灵鉴]]寻找当季[[寄生灵]]，处理后用[[缚灵网]]捕捉游离灵体，获得[[四季之灵]]。"
        },
        {
          "type": "text",
          "title": "如何制作",
          "content": "在制作栏的“节气”分类中，用对应四季之灵和季节鱼制作节气物品。后一个节气会消耗前一个，例如[[雨水]]需要消耗[[立春]]。每季的六种节气各留1件，再加6条对应季节鱼，可合成[[春季]]、[[夏季]]、[[秋季]]或[[冬季]]主物品。具体材料见各条目。"
        },
        {
          "type": "text",
          "title": "如何生效",
          "content": "任意角色装备琦玉器，将物品放入春、夏、秋、冬对应的四个槽位；只放在普通背包里不会生效。每个槽可选该季的小节气或四季主物品，取出或卸下琦玉器会取消对应加成。物品名称不限制使用季节，当前世界不必处于对应季节。"
        },
        {
          "type": "text",
          "title": "小节气有什么用",
          "content": "春系逐步提高移速，夏系提高普通攻击倍率，秋系提供普通伤害减免，冬系使命中增加寒冷值。[[立春]]、[[立夏]]、[[立秋]]、[[立冬]]本身没有独立被动加成，可作为后续合成材料，也能占据对应槽位凑齐四季。"
        },
        {
          "type": "list",
          "title": "四季主物品有什么用",
          "items": [
            "[[春季]]：制作物品概率双倍（胖头鱼50%、其他角色30%）、带电攻击、防潮。",
            "[[夏季]]：普通攻击倍率×1.5、快速攻击、防过热、沙漠护目镜视野。",
            "[[秋季]]：普通减伤50%，已有位面防御×1.3。",
            "[[冬季]]：命中增加6寒冷值，防过冷、防冰冻、冰面防滑。",
            "详细效果与10级技能见各主物品。"
          ]
        },
        {
          "type": "text",
          "title": "四季齐全与灵气",
          "content": "四个槽位都有对应季节物品时，攻击会随机选取已装配主物品的一种投射效果；小节气可帮助凑齐四季，但自身没有投射技能。胖头鱼只要激活至少一种四季主物品，[[灵气]]上限就额外增加100（不会按件数叠加），并可消耗四季之灵，每个回复50灵气。"
        },
        {
          "type": "list",
          "title": "怎样升级",
          "items": [
            "只有春、夏、秋、冬四种主物品可升级：初始1级，最高10级。",
            "给予对应四季之灵×1增加200经验：[[春季]]用[[春之灵]]、[[夏季]]用[[夏之灵]]、[[秋季]]用[[秋之灵]]、[[冬季]]用[[冬之灵]]；四种主物品都可改用曼德拉草×1增加100经验。",
            "升下一级需要（当前等级+1）×100经验，多余经验保留。从1级零经验升到10级共需5400经验，即对应四季之灵27个或曼德拉草54个，也可混用。",
            "任意角色装备琦玉器收获巨大作物时，装在器内的当季主物品另得10经验。",
            "达到10级后，胖头鱼可使用对应主动技能；其他角色仍可获得装配后的被动和攻击效果。"
          ]
        },
        {
          "type": "table",
          "title": "逐级升级需求",
          "columns": [
            "阶段",
            "本级所需经验",
            "从1级累计经验"
          ],
          "rows": [
            [
              "1级 → 2级",
              "200",
              "200"
            ],
            [
              "2级 → 3级",
              "300",
              "500"
            ],
            [
              "3级 → 4级",
              "400",
              "900"
            ],
            [
              "4级 → 5级",
              "500",
              "1400"
            ],
            [
              "5级 → 6级",
              "600",
              "2000"
            ],
            [
              "6级 → 7级",
              "700",
              "2700"
            ],
            [
              "7级 → 8级",
              "800",
              "3500"
            ],
            [
              "8级 → 9级",
              "900",
              "4400"
            ],
            [
              "9级 → 10级",
              "1000",
              "5400"
            ]
          ]
        }
      ],
      "related": [
        "bighead_qyq",
        "bighead_xqlj",
        "mech_spirits",
        "mech_parasite",
        "jq_chun",
        "jq_xia",
        "jq_qiu",
        "jq_dong",
        "config_bighead_seasons"
      ],
      "display_image": "assets/img/displays/bighead_jq_chun.png",
      "aliases": [
        "节气系统"
      ]
    },
    {
      "id": "mech_spirits",
      "owner": "common",
      "title": "四季之灵",
      "summary": "制作节气、升级四季主物品，以及为胖头鱼补充灵气的四种材料。",
      "image": "assets/img/items/bighead_spring_spirit.png",
      "detail_blocks": [
        {
          "type": "list",
          "title": "怎么获得",
          "items": [
            "用[[玄清灵鉴]]寻找对应季节的[[寄生灵]]；处理寄生灵后，才会释放游离灵体。",
            "用[[草制缚灵网]]或[[缚灵网]]捕捉，得到能放入背包的春、夏、秋、冬之灵。",
            "开启“[[蕴灵如意可捕捉四季之灵]]”设置时，也可用[[蕴灵如意]]捕捉。"
          ]
        },
        {
          "type": "text",
          "title": "制作与升级",
          "content": "四季之灵搭配对应季节鱼可制作小节气。给予对应的[[春季]]、[[夏季]]、[[秋季]]或[[冬季]]主物品，每个增加200经验，最高10级。"
        },
        {
          "type": "list",
          "title": "怎么吸收灵气",
          "items": [
            "先由胖头鱼通过[[琦玉器]]激活至少一种四季主物品。",
            "在背包里对四季之灵执行“吸收灵气”，每次消耗1个，回复50[[灵气]]，不超过当前上限。",
            "取下主物品后，便不能吸收。"
          ]
        }
      ],
      "related": [
        "mech_jieqi",
        "mech_parasite",
        "bighead_flw",
        "bighead_spring_spirit",
        "bighead_summer_spirit",
        "bighead_autumn_spirit",
        "bighead_winter_spirit",
        "bighead_czflw",
        "bighead_ylry",
        "mech_lingqi",
        "bighead_qyq",
        "mech_gold_penguin"
      ],
      "display_image": "assets/img/displays/bighead_spring_spirit.png"
    },
    {
      "id": "mech_parasite",
      "owner": "common",
      "title": "寄生灵",
      "summary": "获取四季之灵的来源：先找到并处理寄生灵，再用缚灵网捕捉释放的灵体。",
      "image": "assets/img/mechanics/jisheng_taoling.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "1. 寻找寄生灵",
          "content": "开启“[[四季相关内容]]”后，用[[玄清灵鉴]]搜寻当季寄生灵。春、夏、秋、冬分别对应桃灵、荷灵、桂灵、梅灵；采起地里的寄生灵会使其进入活动状态。 灵鉴会将生成或迁移落点限制在地表主大陆或月岛的安全陆地。"
        },
        {
          "type": "list",
          "title": "2. 污染并处理寄生灵",
          "items": [
            "活动中的寄生灵会用环绕灵体反击，并免疫普通物理伤害。",
            "给予1份便便桶，或累计给予5份便便／鸟粪，可污染它并使其释放灵体。",
            "冻结可暂时阻止其攻击。"
          ]
        },
        {
          "type": "list",
          "title": "3. 捕捉释放后的灵体",
          "items": [
            "处理完成会释放5个游离灵体，另掉落1株曼德拉草与1至9份对应季节作物种子。",
            "用[[缚灵网]]或[[草制缚灵网]]捕捉游离灵体，得到对应的[[四季之灵]]。"
          ]
        },
        {
          "type": "text",
          "title": "注意捕捉目标",
          "content": "网捕目标是释放后的灵体，不能直接网住寄生灵本体。",
          "tone": "note"
        }
      ],
      "related": [
        "bighead_xqlj",
        "bighead_flw",
        "bighead_czflw",
        "mech_spirits",
        "config_bighead_seasons"
      ],
      "display_image": "assets/img/displays/bighead_jisheng_taoling.png"
    },
    {
      "id": "mech_buran",
      "owner": "pangtouyu",
      "title": "不染与月台",
      "summary": "月台附近每个世界生成一次，可通过设置关闭。",
      "image": "assets/img/items/bighead_buran.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "月台生成默认开启，可在[[不染在月台刷新]]中关闭。[[不染]]也有胖头鱼专属制作配方。",
          "title": "在哪里获取"
        },
        {
          "type": "text",
          "title": "配件容器",
          "content": "不染自带3格配件容器，接受6种指定配件，每种最多放1件。打开[[不染]]详情，可查看全部配件的效果、装卸限制和神石强化方式。"
        },
        {
          "type": "text",
          "content": "不染共有5种装备外观，可在[[不染]]详情的外观栏查看。",
          "title": "装备外观"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_buran",
        "config_bighead_buran_moonbase_spawn"
      ],
      "display_image": "assets/img/displays/bighead_buran.png"
    },
    {
      "id": "mech_shixin",
      "owner": "gaojiaoniao",
      "title": "噬心",
      "summary": "高脚鸟的噬心资源：可食用纯粹恐惧提高，五道圆满后召出友方心魔并吸血。",
      "image": "assets/img/items/bb_gaojiaoniao_gjsh.png",
      "detail_blocks": [
        {
          "type": "stats",
          "title": "噬心范围",
          "stats": [
            {
              "label": "初始噬心",
              "value": "1"
            },
            {
              "label": "噬心上限",
              "value": "100"
            }
          ]
        },
        {
          "type": "table",
          "title": "噬心如何变化",
          "columns": [
            "条件",
            "变化"
          ],
          "rows": [
            [
              "存活时每日结算",
              "+1"
            ],
            [
              "日结算时理智低于50%",
              "当天增加3点"
            ],
            [
              "击杀龙蝇",
              "+1"
            ],
            [
              "死亡，噬心低于76且五道未圆满",
              "+5"
            ],
            [
              "死亡，噬心达到76且五道未圆满",
              "−2"
            ],
            [
              "食用1个纯粹恐惧",
              "+1"
            ],
            [
              "高脚鸟在[[芙蓉]]冥火半径16内连续停留60秒",
              "+1；离开中断计时，重叠冥火不重复累计"
            ],
            [
              "成功献祭1个暗影心房",
              "+10；增益持续期间不能重复献祭"
            ],
            [
              "五道圆满且存活，每60秒",
              "−2；佩戴古祭神辉时不会降低"
            ]
          ]
        },
        {
          "type": "text",
          "title": "怎么食用纯粹恐惧",
          "content": "由高脚鸟将纯粹恐惧放在自己的物品栏中，使用「食用」动作，每次消耗1个并增加1点噬心，不超过100。"
        },
        {
          "type": "text",
          "title": "暗影心房献祭",
          "content": "高脚鸟在自己的物品栏中，对暗影心房使用「献祭」动作，消耗1个暗影心房、增加10点噬心，获得普通攻击伤害×2。基础持续480秒；已领悟地狱道时持续2400秒。增益期间不能再次献祭，读档不会重新补满持续时间。"
        },
        {
          "type": "table",
          "title": "五道未圆满时的惩罚",
          "columns": [
            "当前噬心",
            "每分钟损失生命",
            "其他影响"
          ],
          "rows": [
            [
              "超过25点",
              "20",
              "—"
            ],
            [
              "超过50点",
              "30",
              "食物治疗受到限制。"
            ],
            [
              "超过75点",
              "60",
              "食物治疗受限，移速另乘0.4。"
            ]
          ]
        },
        {
          "type": "list",
          "title": "残影与心魔",
          "items": [
            "噬心超过25点后，攻击有机会召唤残影或心魔。",
            "残影真实伤害＝当前世界天数×设置倍率。倍率见[[高脚鸟分身伤害]]。",
            "心魔伤害＝当前噬心×设置倍率。倍率见[[高脚鸟心魔伤害]]。"
          ]
        },
        {
          "type": "text",
          "title": "五道圆满后",
          "content": "[[五道]]圆满后解除持续损血、食物治疗限制与移速惩罚，噬心每60秒降低2。触发友方心魔时一次召出1～3个，转而攻击敌人，并按各自实际造成伤害的5%为主人恢复生命。佩戴[[古祭神辉]]可阻止噬心下降。",
          "tone": "note"
        },
        {
          "type": "text",
          "title": "亡骸浸池",
          "content": "[[亡骸浸池]]已实现泡澡加噬心，但所需血浆没有完整获取链，当前标为「未实装」，暂不能作为正常流程的噬心来源。"
        },
        {
          "type": "text",
          "title": "状态栏操作",
          "content": "噬心图标与五道圆环可分别右键拖动，位置会保存；按住Alt右键单击可恢复默认位置。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_wudao",
        "config_bb_gaojiaoniao_demon_damage",
        "config_bb_gaojiaoniao_shadow_damage",
        "bb_gaojiaoniao_gjsh",
        "bb_gaojiaoniao_fr",
        "bb_gaojiaoniao_my",
        "bb_ymz_bloodpool"
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_gjsh.png"
    },
    {
      "id": "mech_wudao",
      "owner": "gaojiaoniao",
      "title": "五道",
      "summary": "神道、人道、畜生道、饿鬼道、地狱道；圆满后免疫冻结、受击硬直和击退。",
      "image": "assets/img/items/bb_gaojiaoniao_lh.png",
      "detail_blocks": [
        {
          "type": "table",
          "title": "五道怎么领悟",
          "columns": [
            "道",
            "领悟条件",
            "属性变化"
          ],
          "rows": [
            [
              "神道",
              "初始时已领悟。",
              "—"
            ],
            [
              "人道",
              "手持月岩雕像，对玩家骸骨执行「参悟人道」，消耗1份月岩雕像。",
              "理智上限 +50"
            ],
            [
              "畜生道",
              "击杀符合条件的生物，有概率领悟；概率见下表。",
              "生命上限 +50"
            ],
            [
              "饿鬼道",
              "通过饥饿死亡领悟。",
              "饥饿上限 +50"
            ],
            [
              "地狱道",
              "[[噬心]]达到100。",
              "—"
            ]
          ]
        },
        {
          "type": "table",
          "title": "畜生道领悟概率",
          "columns": [
            "击杀目标",
            "每次击杀的领悟概率"
          ],
          "rows": [
            [
              "钢羊",
              "50%"
            ],
            [
              "考拉象",
              "20%"
            ],
            [
              "史诗生物或首领",
              "5%"
            ],
            [
              "其他符合条件的生物",
              "0.1%"
            ]
          ]
        },
        {
          "type": "stats",
          "title": "五道圆满后的三维上限",
          "stats": [
            {
              "label": "生命",
              "value": "200"
            },
            {
              "label": "理智",
              "value": "150"
            },
            {
              "label": "饥饿",
              "value": "250"
            }
          ]
        },
        {
          "type": "text",
          "title": "圆满后有什么变化",
          "content": "解除[[噬心]]的持续损血、食物治疗限制与移速惩罚；免疫冻结、受击硬直和击退，仍会正常受到伤害。触发友方心魔时召出1～3个，并为主人吸血。噬心每60秒降低2，佩戴[[古祭神辉]]时不下降。被吞噬、悬吊等受控状态仍保留对应脱离流程。",
          "tone": "note"
        },
        {
          "type": "text",
          "title": "五道圆环",
          "content": "状态栏新增独立五道圆环，分别显示五道是否领悟；悬停查看条件和效果。圆环支持右键拖动，按住Alt右键单击复位。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_shixin",
        "bb_gaojiaoniao_lh",
        "bb_gaojiaoniao_gjsh"
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_lh.png"
    },
    {
      "id": "mech_gardening",
      "owner": "pangtouyu",
      "title": "繁花园艺",
      "summary": "以繁花施肥、采集、催熟，并把同类植物嫁接到一起。",
      "image": "assets/img/mechanics/fanhua_graft.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "先装备并选择技能",
          "content": "胖头鱼装备[[繁花]]后打开技能菜单，再选择目标；施法距离为40。"
        },
        {
          "type": "table",
          "title": "技能消耗与作用",
          "columns": [
            "技能",
            "灵气消耗",
            "作用"
          ],
          "rows": [
            [
              "范围施肥",
              "10",
              "半径40，补充农田养分与水分。"
            ],
            [
              "范围采集",
              "0",
              "半径40，采收附近符合条件的植物。"
            ],
            [
              "范围催熟",
              "5",
              "补满[[春朝亭]]黄油和普通蜂箱蜂蜜产量。"
            ]
          ]
        },
        {
          "type": "text",
          "title": "催熟的实际范围",
          "content": "范围催熟目前只补满春朝亭与普通蜂箱的产量，不会把所有普通作物直接催到成熟。消耗的[[灵气]]需提前准备。",
          "tone": "note"
        },
        {
          "type": "list",
          "title": "怎么嫁接",
          "items": [
            "选择附近可嫁接的植物，使用对应的挖起植物作为材料。",
            "支持[[草莓丛]]、树苗、草、浆果丛、香蕉丛、海带、猴尾草等植物。",
            "同株总株数默认上限99，可在[[繁花嫁接上限]]中设为50或999；降低设置不会削减已有嫁接。"
          ]
        },
        {
          "type": "image",
          "src": "assets/img/mechanics/fanhua_fertilize.png",
          "caption": "范围施肥 · 10灵气"
        },
        {
          "type": "image",
          "src": "assets/img/mechanics/fanhua_collect.png",
          "caption": "范围采集"
        },
        {
          "type": "image",
          "src": "assets/img/mechanics/fanhua_grow.png",
          "caption": "范围催熟 · 5灵气"
        },
        {
          "type": "image",
          "src": "assets/img/mechanics/fanhua_graft.png",
          "caption": "嫁接"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_fanhua",
        "dug_bb_cmbush",
        "bb_cct",
        "config_bighead_graft_limit",
        "mech_lingqi"
      ],
      "display_image": "assets/img/displays/bighead_fanhua.png"
    },
    {
      "id": "mech_seed_ritual",
      "owner": "gaojiaoniao",
      "title": "花种祭眼仪式",
      "aliases": [
        "花种仪式"
      ],
      "summary": "戴帽打包花种，连续高温培育3天，新月夜在月台旁祭眼换取芙蓉。",
      "image": "assets/img/items/bighead_flowerseed.png",
      "display_image": "assets/img/displays/bighead_ritual_eye.png",
      "source": "v5.8",
      "detail_blocks": [
        {
          "type": "list",
          "title": "1. 准备并打包",
          "items": [
            "由[[高脚鸟]]戴上高级耕作先驱帽，用蘑菇皮×1开启打包，开始时即消耗蘑菇皮。",
            "四格只放暗影心房×1、格罗姆翅膀×2、腐烂物×10、花瓣×20；数量足够后完成打包取得[[花种]]，多余材料退回。"
          ]
        },
        {
          "type": "text",
          "title": "2. 连续高温培育",
          "content": "使花种自身温度连续保持至少50℃，持续3个游戏天，转成[[腐烂花种]]。低于50℃会清零，重新升温后从头累计；进度可存档。"
        },
        {
          "type": "text",
          "title": "3. 新月夜前往月台",
          "content": "新月夜，月台附近会尝试生成[[祭眼]]。给予腐烂花种，获得[[芙蓉]]；祭眼随后改变外观。也可用[[万象玑]]的「新」法术改变月相，但仍须满足夜晚条件。"
        },
        {
          "type": "text",
          "title": "4. 召唤溟羽",
          "content": "高脚鸟对芙蓉使用「召唤」叫出[[溟羽]]，用「激怒」「安慰」切换模式，拿起芙蓉对自己的溟羽使用「返回」收回。"
        },
        {
          "type": "text",
          "title": "另一个用途：召唤Boss",
          "content": "将告密的心给予祭眼，可随机召唤Boss组合。详见祭眼的档位概率与落点说明。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bighead_flowerseed",
        "bighead_rotten_flowerseed",
        "bighead_ritual_eye",
        "bb_gaojiaoniao_fr",
        "bb_gaojiaoniao_my",
        "bighead_wanxiangji"
      ]
    },
    {
      "id": "mech_mist_forest",
      "owner": "common",
      "title": "云梦泽",
      "aliases": [
        "雾气桦树林",
        "雾气桦树林区域",
        "云梦泽区域"
      ],
      "summary": "与沼泽相连的地表区域，太极青玄阁位于中央，分布地玉笋、碧波泉和水田。",
      "image": "assets/img/mechanics/bb_ymz_jade_rock.png",
      "source": "v5.8",
      "detail_blocks": [
        {
          "type": "text",
          "title": "在哪里",
          "content": "创建采用默认地表任务集的新世界时生成，直接连接沼泽出口。[[太极青玄阁]]改在区域中央生成，旁边有[[碧波泉]]。"
        },
        {
          "type": "text",
          "title": "区域内容",
          "content": "地皮包括蓝弥、青璇、[[水田]]，初次布局尝试散布4格水田。可找到[[地玉笋]]、神秘植物、荧光花、玻璃绿洲，以及云藤、地光、喷泉和瀑布。"
        },
        {
          "type": "text",
          "title": "花园与海边",
          "content": "初次布置尝试放置1个蜂箱、50～56朵花；近海尝试生成2～3棵原版大树与海藤，实际数量受可用地形与空间限制。花园和海边大树不随地玉笋定期补充，读档也不会补刷。"
        },
        {
          "type": "text",
          "title": "资源补充",
          "content": "森林初始尝试生成3～6处地玉笋，中心另有2处。每10个游戏天检查，将区域现存总数尝试补到随机5～8处。开采后获得[[地玉]]，可制作[[玉如意]]。"
        },
        {
          "type": "text",
          "title": "生成条件",
          "content": "已有存档不会自动补入完整云梦泽，旧太极青玄阁也不会自动搬迁。这片区域属于地表，不是阁内房间。"
        }
      ],
      "related": [
        "loc_qingxuan",
        "bb_ymz_jade_rock",
        "bb_ymz_jade",
        "bb_ymz_pool",
        "mech_paddy",
        "log_5800"
      ],
      "display_image": "assets/img/displays/bb_ymz_jade_rock.png"
    },
    {
      "id": "mech_paddy",
      "title": "水田",
      "owner": "common",
      "aliases": [
        "水田耕作"
      ],
      "summary": "云梦泽可耕种地皮，保持湿润和三类养分，作物生长阶段耗时为通常的三分之一。",
      "image": "assets/img/items/bb_ymz_bloodmud.png",
      "display_image": "assets/img/displays/bb_ymz_bloodmud.png",
      "source": "v5.8",
      "detail_blocks": [
        {
          "type": "text",
          "title": "在哪里与怎么开垦",
          "content": "[[云梦泽]]初次布局尝试生成4格水田。在该区域使用耕地机，也会把目标地皮开成水田；已有水田不能重复部署耕地机。"
        },
        {
          "type": "text",
          "title": "怎么种植",
          "content": "可照常锄地、播种、浇水和收获。水田始终视为湿润，三种养分均为99，作物生长不会扣除这三种养分。"
        },
        {
          "type": "text",
          "title": "生长与限制",
          "content": "作物各生长阶段耗时为通常的三分之一，成熟停留和腐烂阶段不加速。其他种植条件仍需满足，水田不会保证所有作物都长成巨型。"
        },
        {
          "type": "text",
          "title": "与血泥搭配",
          "content": "[[血泥]]可额外催长1个阶段，但被血泥催长的作物不能成为巨型。准备种巨型作物时，使用水田自身加速即可。",
          "tone": "note"
        }
      ],
      "related": [
        "mech_mist_forest",
        "bb_ymz_bloodmud",
        "bb_ymz_compostbin"
      ]
    }
  ],
  "terrains": [
    {
      "id": "loc_qingxuan",
      "owner": "common",
      "building_entry": {
        "target": "loc_foyer",
        "label": "进入青玄阁"
      },
      "building_exits": [
        {
          "target": "loc_foyer",
          "label": "进入青玄阁"
        }
      ],
      "title": "太极青玄阁",
      "summary": "新世界中位于云梦泽中央的可进入建筑，内有前室、厅堂与左右两间独立卧房。",
      "building_highlights": [
        {
          "title": "躲猎犬",
          "text": "阻止针对你的普通猎犬波次生成，已生成的不会消失。"
        },
        {
          "title": "防寒暑",
          "text": "房间中心32范围内，环境温度保持32℃。"
        },
        {
          "title": "避雨",
          "text": "雨水不再增加潮湿，已有潮湿不会清零。"
        },
        {
          "title": "防蛙雨",
          "text": "房间中心32范围内，不生成蛙雨青蛙。"
        },
        {
          "title": "防夏季自燃",
          "text": "跳过室内玩家附近的夏季自燃触发。"
        },
        {
          "title": "防蚁狮塌陷",
          "text": "房间中心32范围内，不生成蚁狮地陷。"
        },
        {
          "title": "承接天气落雷",
          "text": "中心可承接普通天气落雷，不代表免疫雷电攻击。"
        },
        {
          "title": "夜间照明",
          "text": "入夜亮灯，中心光照半径10；白天、黄昏关闭。"
        }
      ],
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "pangtouyu",
        "loc_foyer",
        "loc_hall",
        "loc_bedroom",
        "loc_bedroom_right",
        "mech_mist_forest",
        "bb_ymz_pool"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "title": "在哪里",
          "content": "新世界在[[云梦泽]]中央寻找入口。旧存档中的房屋保留原位置，不会自动搬迁。"
        },
        {
          "type": "table",
          "title": "室内有什么用",
          "columns": [
            "功能",
            "实际效果与范围"
          ],
          "rows": [
            [
              "躲猎犬",
              "进入阁内房间后，阻止针对你的普通猎犬波次生成；屋外入口无效，也不会清除已生成的猎犬或取消袭击计时。听到预警可先入内，等本轮结束再出门。"
            ],
            [
              "防寒暑",
              "房间中心32范围内的环境温度设为32℃，降低冬冷夏热的影响；不会锁定角色体温，火源或冰冷物品仍会影响体温。"
            ],
            [
              "避雨",
              "识别为室内时，雨水不再增加角色潮湿；已有潮湿不会立刻清零。"
            ],
            [
              "防蛙雨",
              "房间中心32范围内阻止蛙雨生成青蛙。"
            ],
            [
              "防夏季自燃",
              "玩家在室内时，跳过其附近的夏季自燃触发；不等于所有物品都不会被点燃。"
            ],
            [
              "防蚁狮塌陷",
              "房间中心32范围内阻止蚁狮地陷生成。"
            ],
            [
              "承接天气落雷",
              "房间中心具有引雷标记，可承接附近的普通天气落雷；不能据此认定免疫怪物的雷电攻击。"
            ],
            [
              "夜间照明",
              "入夜自动亮灯、白天和黄昏关闭；光照半径为10，靠近房间中心使用。"
            ]
          ]
        },
        {
          "type": "table",
          "title": "怎么进去、怎么回来",
          "columns": [
            "所在位置",
            "下一步",
            "返回路线"
          ],
          "rows": [
            [
              "屋外入口",
              "对入口使用「进去」 → [[入阁前室]]",
              "—"
            ],
            [
              "[[入阁前室]]",
              "鎏金太极铃 → [[阁中厅堂]]",
              "青石楼梯 → 屋外"
            ],
            [
              "[[阁中厅堂]]",
              "两侧引霄灵藤 → 左、右卧房",
              "青石楼梯 → 前室"
            ],
            [
              "[[阁主卧房（左侧）]]",
              "鎏角青玄门 → 厅堂",
              "厅堂 → 前室 → 屋外"
            ],
            [
              "[[阁主卧房（右侧）]]",
              "银翘古木门 → 厅堂",
              "厅堂 → 前室 → 屋外"
            ]
          ]
        },
        {
          "type": "text",
          "title": "适用范围",
          "tone": "note",
          "content": "前室、厅堂和两间卧房都具有表中效果，但不能免疫所有怪物的伤害。"
        },
        {
          "type": "text",
          "title": "陈设与检查台词",
          "content": "「循阶而入，步入太极清玄阁，道韵清幽，尘烦尽散。」\n阁中陈设包括鎏金太极铃、太极莲尊、引霄灵藤、鎏角青玄门、银翘古木门、青石楼梯、花盖与藤蔓。青石楼梯的检查台词为「缓步出阁」。"
        }
      ],
      "display_image": "assets/img/displays/bighead_fishhouse.png",
      "aliases": [
        "太极清玄阁"
      ]
    },
    {
      "id": "loc_foyer",
      "owner": "common",
      "building_exits": [
        {
          "target": "loc_qingxuan",
          "label": "青石楼梯 · 回到屋外"
        },
        {
          "target": "loc_hall",
          "label": "鎏金太极铃 · 进入厅堂"
        }
      ],
      "title": "入阁前室",
      "aliases": [
        "第一间房",
        "青玄阁前室"
      ],
      "illustration": "assets/img/terrains/loc_foyer.png",
      "preview_caption": "前室内景预览",
      "scene_hotspots": [
        {
          "label": "鎏金太极铃",
          "target": "loc_hall",
          "x": 50.0309,
          "y": 28.6025,
          "width": 14.9134,
          "height": 12.0203,
          "hint": "进入厅堂"
        },
        {
          "label": "青石楼梯",
          "target": "loc_qingxuan",
          "x": 49.5978,
          "y": 95.2209,
          "width": 22.9579,
          "height": 7.2411,
          "hint": "回到屋外"
        }
      ],
      "scene_hint": "点击图中鎏金太极铃、青石楼梯，前往对应位置。",
      "summary": "进门后首先到达的房间：青石楼梯回屋外，鎏金太极铃通厅堂。入内即享有青玄阁的避难与温控保护。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "loc_qingxuan",
        "loc_hall"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "title": "进门就是这里",
          "content": "从[[太极青玄阁]]屋外入口使用「进去」，首先抵达这间前室，还没有直接到[[阁中厅堂]]。这里是屋外与厅堂之间的独立房间。"
        },
        {
          "type": "table",
          "title": "两个方向怎么走",
          "columns": [
            "门或陈设",
            "通向哪里"
          ],
          "rows": [
            [
              "鎏金太极铃",
              "进入[[阁中厅堂]]，再去左、右卧房"
            ],
            [
              "青石楼梯",
              "离开前室，返回屋外入口"
            ]
          ]
        },
        {
          "type": "text",
          "title": "前室有什么用",
          "content": "进入前室就已在室内，不必继续走到厅堂才避难。这里共用[[太极青玄阁]]的防猎犬波次生成、32℃环境温控、避雨、防蛙雨、防夏季自燃与蚁狮地陷，以及夜间中心照明；已有怪物不会因此消失。"
        }
      ]
    },
    {
      "id": "loc_hall",
      "owner": "common",
      "building_exits": [
        {
          "target": "loc_foyer",
          "label": "青石楼梯 · 返回前室"
        },
        {
          "target": "loc_bedroom",
          "label": "引霄灵藤 · 左侧卧房"
        },
        {
          "target": "loc_bedroom_right",
          "label": "引霄灵藤 · 右侧卧房"
        }
      ],
      "title": "阁中厅堂",
      "illustration": "assets/img/terrains/loc_hall.png",
      "preview_caption": "厅堂内景预览",
      "scene_hotspots": [
        {
          "label": "引霄灵藤（左侧）",
          "target": "loc_bedroom",
          "x": 15.9653,
          "y": 39.0308,
          "width": 14.4802,
          "height": 42.9956,
          "hint": "进入左侧卧房",
          "hint_align": "start"
        },
        {
          "label": "引霄灵藤（右侧）",
          "target": "loc_bedroom_right",
          "x": 84.0347,
          "y": 39.0308,
          "width": 14.4802,
          "height": 42.9956,
          "hint": "进入右侧卧房",
          "hint_align": "end"
        },
        {
          "label": "青石楼梯",
          "target": "loc_foyer",
          "x": 49.6287,
          "y": 94.5374,
          "width": 21.0396,
          "height": 8.1057,
          "hint": "返回前室"
        }
      ],
      "scene_hint": "点击图中引霄灵藤（左侧）、引霄灵藤（右侧）、青石楼梯，前往对应位置。",
      "summary": "青玄阁内连接两间卧房的厅堂，共用防猎犬生成、恒温、避雨与夜间照明。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "loc_qingxuan",
        "loc_foyer",
        "loc_bedroom",
        "loc_bedroom_right"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "title": "厅堂怎么用",
          "content": "从[[入阁前室]]的鎏金太极铃进入厅堂。左侧引霄灵藤通往[[阁主卧房（左侧）]]，右侧引霄灵藤通往[[阁主卧房（右侧）]]；厅堂的青石楼梯回前室，再由前室离开青玄阁。这里共用[[太极青玄阁]]的室内保护，包括防猎犬波次生成、32℃环境温控、避雨、防蛙雨、防夏季自燃与蚁狮地陷，以及夜间中心照明。具体条件见青玄阁详情。"
        },
        {
          "type": "text",
          "title": "太极莲尊",
          "content": "厅堂内的装饰座椅，无生命或理智回复效果。"
        },
        {
          "type": "text",
          "title": "陈设台词",
          "content": "鎏金太极铃：「玄铃轻鸣，清音涤荡尘绪，循声迈步，进入厅堂之内。」"
        },
        {
          "type": "text",
          "content": "太极莲尊：「巨椅高挺，肃穆玄奥，为阁中尊位。」"
        }
      ]
    },
    {
      "id": "loc_bedroom",
      "owner": "common",
      "building_exits": [
        {
          "target": "loc_hall",
          "label": "鎏角青玄门 · 返回厅堂"
        }
      ],
      "title": "阁主卧房（左侧）",
      "aliases": [
        "阁主卧房",
        "左侧卧房"
      ],
      "illustration": "assets/img/terrains/loc_bedroom.png",
      "scene_hotspots": [
        {
          "label": "鎏角青玄门",
          "target": "loc_hall",
          "x": 88.552,
          "y": 80.4878,
          "width": 19.802,
          "height": 36.5067,
          "hint": "返回厅堂",
          "hint_align": "end"
        }
      ],
      "preview_caption": "左侧卧房内景预览",
      "scene_hint": "点击图中鎏角青玄门，前往对应位置。",
      "summary": "由厅堂左侧引霄灵藤进入，鎏角青玄门返回厅堂。共用青玄阁的室内保护，没有自带睡眠或恢复效果。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "loc_qingxuan",
        "loc_hall"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "title": "卧房怎么用",
          "content": "从[[阁中厅堂]]左侧的引霄灵藤进入这间卧房，使用房内鎏角青玄门回厅堂，再经[[入阁前室]]回屋外。右侧通往另一间独立卧房，墙景不同。这里共用[[太极青玄阁]]的防猎犬波次生成、32℃环境温控、避雨、防蛙雨、防夏季自燃与蚁狮地陷、夜间中心照明。"
        },
        {
          "type": "text",
          "title": "休息与回复",
          "content": "卧房不提供睡觉、生命回复或理智回复功能。",
          "tone": "note"
        },
        {
          "type": "text",
          "title": "门与陈设台词",
          "content": "鎏角青玄门：「合起鎏角青玄门，辞别阁主卧房。」"
        },
        {
          "type": "text",
          "content": "引霄灵藤：「垂落一丛引霄灵藤，轻触藤蔓，便可循着后方阶梯去往上层阁楼。」"
        }
      ]
    },
    {
      "id": "loc_bedroom_right",
      "owner": "common",
      "building_exits": [
        {
          "target": "loc_hall",
          "label": "银翘古木门 · 返回厅堂"
        }
      ],
      "title": "阁主卧房（右侧）",
      "aliases": [
        "右侧卧房"
      ],
      "illustration": "assets/img/terrains/loc_bedroom_right.png",
      "scene_hotspots": [
        {
          "label": "银翘古木门",
          "target": "loc_hall",
          "x": 11.3243,
          "y": 80.4878,
          "width": 19.802,
          "height": 36.5067,
          "hint": "返回厅堂",
          "hint_align": "start"
        }
      ],
      "preview_caption": "右侧卧房内景预览",
      "scene_hint": "点击图中银翘古木门，前往对应位置。",
      "summary": "由厅堂右侧引霄灵藤进入，银翘古木门返回厅堂。与左侧卧房是不同房间，墙景独立，保护效果相同。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "loc_qingxuan",
        "loc_hall"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "title": "右侧还有一间",
          "content": "从[[阁中厅堂]]右侧的引霄灵藤进入，使用房内银翘古木门回厅堂，再经[[入阁前室]]回屋外。这间卧房有自己的墙景和地面，不是左侧卧房的同一个入口。"
        },
        {
          "type": "text",
          "title": "房间功能",
          "content": "共用[[太极青玄阁]]的防猎犬波次生成、32℃环境温控、避雨、防蛙雨、防夏季自燃与蚁狮地陷，以及夜间中心照明。与[[阁主卧房（左侧）]]一样，没有自带睡眠、自动回血或回理智效果。"
        },
        {
          "type": "text",
          "title": "返回厅堂",
          "content": "银翘古木门是这间卧房的出口，实际返回厅堂。它的检查台词与鎏角青玄门相同，但两扇门位于不同卧房。"
        }
      ]
    }
  ],
  "seasons": [
    {
      "id": "jq_lc",
      "owner": "common",
      "name": "立春",
      "title_note": "东风解冻 蛰虫始振 鱼陟负冰",
      "image": "assets/img/seasons/jq_lc.png",
      "summary": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_chun"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入春季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[春季]]，或作为[[雨水]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_lc.png"
    },
    {
      "id": "jq_ys",
      "owner": "common",
      "name": "雨水",
      "title_note": "獺祭鱼 鸿雁来 草木萌动",
      "image": "assets/img/seasons/jq_ys.png",
      "summary": "装入琦玉器后，装备者移速×1.05（提高5%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_chun"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_lc]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入春季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者移速×1.05（提高5%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[春季]]，或作为[[惊蛰]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_ys.png"
    },
    {
      "id": "jq_jz",
      "owner": "common",
      "name": "惊蛰",
      "title_note": "桃始华 仓庚鸣 鹰化为鸠",
      "image": "assets/img/seasons/jq_jz.png",
      "summary": "装入琦玉器后，装备者移速×1.10（提高10%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_chun"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_ys]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入春季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者移速×1.10（提高10%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[春季]]，或作为[[春分]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_jz.png"
    },
    {
      "id": "jq_cf",
      "owner": "common",
      "name": "春分",
      "title_note": "玄鸟至 雷乃发声 始电",
      "image": "assets/img/seasons/jq_cf.png",
      "summary": "装入琦玉器后，装备者移速×1.15（提高15%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_chun"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_jz]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入春季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者移速×1.15（提高15%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[春季]]，或作为[[清明]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_cf.png"
    },
    {
      "id": "jq_qm",
      "owner": "common",
      "name": "清明",
      "title_note": "桐始华 田鼠化为驾 虹始见",
      "image": "assets/img/seasons/jq_qm.png",
      "summary": "装入琦玉器后，装备者移速×1.20（提高20%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_chun"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_cf]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入春季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者移速×1.20（提高20%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[春季]]，或作为[[谷雨]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_qm.png"
    },
    {
      "id": "jq_gy",
      "owner": "common",
      "name": "谷雨",
      "title_note": "萍始生 鸣鸠拂其羽 戴胜降于桑",
      "image": "assets/img/seasons/jq_gy.png",
      "summary": "装入琦玉器后，装备者移速×1.25（提高25%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_chun"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_qm]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入春季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者移速×1.25（提高25%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[春季]]。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_gy.png"
    },
    {
      "id": "jq_lx",
      "owner": "common",
      "name": "立夏",
      "title_note": "蝼蟈鸣 蚯蚓岀 王瓜生",
      "image": "assets/img/seasons/jq_lx.png",
      "summary": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_xia"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入夏季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[夏季]]，或作为[[小满]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_lx.png"
    },
    {
      "id": "jq_xm",
      "owner": "common",
      "name": "小满",
      "title_note": "苦菜秀 靡草死 麦秋生",
      "image": "assets/img/seasons/jq_xm.png",
      "summary": "装入琦玉器后，装备者普通攻击倍率×1.05（提高5%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_xia"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_lx]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入夏季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者普通攻击倍率×1.05（提高5%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[夏季]]，或作为[[芒种]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_xm.png"
    },
    {
      "id": "jq_mz",
      "owner": "common",
      "name": "芒种",
      "title_note": "螳螂生 贍始鸣 反舌无声",
      "image": "assets/img/seasons/jq_mz.png",
      "summary": "装入琦玉器后，装备者普通攻击倍率×1.10（提高10%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_xia"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_xm]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入夏季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者普通攻击倍率×1.10（提高10%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[夏季]]，或作为[[夏至]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_mz.png"
    },
    {
      "id": "jq_xz",
      "owner": "common",
      "name": "夏至",
      "title_note": "鹿角解 蝉始鸣 半夏生",
      "image": "assets/img/seasons/jq_xz.png",
      "summary": "装入琦玉器后，装备者普通攻击倍率×1.15（提高15%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_xia"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_mz]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入夏季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者普通攻击倍率×1.15（提高15%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[夏季]]，或作为[[小暑]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_xz.png"
    },
    {
      "id": "jq_xs",
      "owner": "common",
      "name": "小暑",
      "title_note": "温风至 蟋蟀居辟 鷹始鸷",
      "image": "assets/img/seasons/jq_xs.png",
      "summary": "装入琦玉器后，装备者普通攻击倍率×1.20（提高20%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_xia"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_xz]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入夏季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者普通攻击倍率×1.20（提高20%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[夏季]]，或作为[[大暑]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_xs.png"
    },
    {
      "id": "jq_ds",
      "owner": "common",
      "name": "大暑",
      "title_note": "腐草为萤 土润溽暑 大雨时行",
      "image": "assets/img/seasons/jq_ds.png",
      "summary": "装入琦玉器后，装备者普通攻击倍率×1.25（提高25%）。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_xia"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_xs]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入夏季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者普通攻击倍率×1.25（提高25%）。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[夏季]]。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_ds.png"
    },
    {
      "id": "jq_lq",
      "owner": "common",
      "name": "立秋",
      "title_note": "凉风至 白露降 寒蝉鸣",
      "image": "assets/img/seasons/jq_lq.png",
      "summary": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_qiu"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入秋季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[秋季]]，或作为[[处暑]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_lq.png"
    },
    {
      "id": "jq_cs",
      "owner": "common",
      "name": "处暑",
      "title_note": "鹰乃祭鸟 天地始肃 禾乃登",
      "image": "assets/img/seasons/jq_cs.png",
      "summary": "装入琦玉器后，为装备者提供5%普通伤害减免，不提供位面防御。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_qiu"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_lq]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入秋季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，为装备者提供5%普通伤害减免，不提供位面防御。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[秋季]]，或作为[[白露]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_cs.png"
    },
    {
      "id": "jq_bl",
      "owner": "common",
      "name": "白露",
      "title_note": "鸿雁来 玄鸟归 群鸟养羞",
      "image": "assets/img/seasons/jq_bl.png",
      "summary": "装入琦玉器后，为装备者提供10%普通伤害减免，不提供位面防御。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_qiu"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_cs]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入秋季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，为装备者提供10%普通伤害减免，不提供位面防御。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[秋季]]，或作为[[秋分]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_bl.png"
    },
    {
      "id": "jq_qf",
      "owner": "common",
      "name": "秋分",
      "title_note": "雷始收声 蛰虫培户 水始涸",
      "image": "assets/img/seasons/jq_qf.png",
      "summary": "装入琦玉器后，为装备者提供15%普通伤害减免，不提供位面防御。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_qiu"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_bl]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入秋季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，为装备者提供15%普通伤害减免，不提供位面防御。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[秋季]]，或作为[[寒露]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_qf.png"
    },
    {
      "id": "jq_hl",
      "owner": "common",
      "name": "寒露",
      "title_note": "鸿雁来宾 雀入大水为蛤 菊有黄华",
      "image": "assets/img/seasons/jq_hl.png",
      "summary": "装入琦玉器后，为装备者提供20%普通伤害减免，不提供位面防御。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_qiu"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_qf]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入秋季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，为装备者提供20%普通伤害减免，不提供位面防御。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[秋季]]，或作为[[霜降]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_hl.png"
    },
    {
      "id": "jq_sj",
      "owner": "common",
      "name": "霜降",
      "title_note": "豺乃祭兽 草木黄落 蛰虫咸伏",
      "image": "assets/img/seasons/jq_sj.png",
      "summary": "装入琦玉器后，为装备者提供25%普通伤害减免，不提供位面防御。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_qiu"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_hl]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入秋季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，为装备者提供25%普通伤害减免，不提供位面防御。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[秋季]]。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_sj.png"
    },
    {
      "id": "jq_ld",
      "owner": "common",
      "name": "立冬",
      "title_note": "水始冰 地始冻 雉入大水为蜃",
      "image": "assets/img/seasons/jq_ld.png",
      "summary": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_dong"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入冬季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "没有独立被动加成；用于后续节气合成，也可装入琦玉器凑齐四季。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[冬季]]，或作为[[小雪]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_ld.png"
    },
    {
      "id": "jq_xx",
      "owner": "common",
      "name": "小雪",
      "title_note": "虹藏不见 天气腾地气降 闭塞成冬",
      "image": "assets/img/seasons/jq_xx.png",
      "summary": "装入琦玉器后，装备者每次命中可冻结的目标增加1寒冷值；实际冻结所需命中次数取决于目标抗性。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_dong"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_ld]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入冬季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者每次命中可冻结的目标增加1寒冷值；实际冻结所需命中次数取决于目标抗性。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[冬季]]，或作为[[大雪]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_xx.png"
    },
    {
      "id": "jq_dx",
      "owner": "common",
      "name": "大雪",
      "title_note": "鹃鸥不鸣 虎始交 茘挺生",
      "image": "assets/img/seasons/jq_dx.png",
      "summary": "装入琦玉器后，装备者每次命中可冻结的目标增加2寒冷值；实际冻结所需命中次数取决于目标抗性。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_dong"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_xx]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入冬季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者每次命中可冻结的目标增加2寒冷值；实际冻结所需命中次数取决于目标抗性。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[冬季]]，或作为[[冬至]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_dx.png"
    },
    {
      "id": "jq_dz",
      "owner": "common",
      "name": "冬至",
      "title_note": "蚯蚓结 麇角解 水泉动",
      "image": "assets/img/seasons/jq_dz.png",
      "summary": "装入琦玉器后，装备者每次命中可冻结的目标增加3寒冷值；实际冻结所需命中次数取决于目标抗性。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_dong"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_dx]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入冬季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者每次命中可冻结的目标增加3寒冷值；实际冻结所需命中次数取决于目标抗性。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[冬季]]，或作为[[小寒]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_dz.png"
    },
    {
      "id": "jq_xh",
      "owner": "common",
      "name": "小寒",
      "title_note": "雁北乡 鹋始巣 雉始鸲",
      "image": "assets/img/seasons/jq_xh.png",
      "summary": "装入琦玉器后，装备者每次命中可冻结的目标增加4寒冷值；实际冻结所需命中次数取决于目标抗性。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_dong"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_dz]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入冬季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者每次命中可冻结的目标增加4寒冷值；实际冻结所需命中次数取决于目标抗性。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[冬季]]，或作为[[大寒]]的制作材料；合成下一节气会消耗本件。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_xh.png"
    },
    {
      "id": "jq_dh",
      "owner": "common",
      "name": "大寒",
      "title_note": "鸡始乳 征鸟厉疾 水泽腹坚",
      "image": "assets/img/seasons/jq_dh.png",
      "summary": "装入琦玉器后，装备者每次命中可冻结的目标增加5寒冷值；实际冻结所需命中次数取决于目标抗性。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "jq_dong"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_xh]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，把本件放入冬季槽位。放入普通背包不会激活效果；取出或卸下琦玉器会取消效果。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入琦玉器后，装备者每次命中可冻结的目标增加5寒冷值；实际冻结所需命中次数取决于目标抗性。无需等待世界进入对应季节。"
        },
        {
          "type": "text",
          "title": "合成去向",
          "content": "该物品不能喂材料升级。可用于合成[[冬季]]。要合成四季主物品，需要把本季六种节气各准备1件。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_dh.png"
    },
    {
      "id": "jq_chun",
      "owner": "common",
      "name": "春季",
      "title_note": "春风又绿江南岸，明月何时照我还。",
      "image": "assets/img/seasons/jq_chun.png",
      "summary": "制作物品概率双倍：胖头鱼50%、其他角色30%；带电攻击、防潮，10级解锁范围促生长与快速制作。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "mech_spirits"
      ],
      "recipe": "无需科技：花朵金枪鱼×6 + [jq_lc]×1 + [jq_ys]×1 + [jq_jz]×1 + [jq_cf]×1 + [jq_qm]×1 + [jq_gy]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，放入对应季节槽位即可激活；不要求世界处于对应季节。胖头鱼激活至少一种四季主物品时，[[灵气]]上限额外增加100，并可消耗[[四季之灵]]回复灵气。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "装入[[琦玉器]]并激活后，制作背包物品时有概率获得双倍产量：胖头鱼50%、其他角色30%。按该配方本次完整产量翻倍，不要求达到10级；普通建筑摆放和锅中烹饪不享受此效果。同时攻击附带电属性，并提供防潮效果。取出本件或卸下琦玉器会取消。"
        },
        {
          "type": "text",
          "title": "四季齐全时的攻击",
          "content": "四季槽位齐全且攻击随机选中春季效果时，发射投射物：在目标周围半径4内造成100×等级的基础普通伤害，并回复自身最大生命的等级×1%。"
        },
        {
          "type": "text",
          "title": "怎样升级",
          "content": "初始1级，最高10级。给予[[春之灵]]×1增加200经验，或给予曼德拉草×1增加100经验。升下一级需要（当前等级+1）×100经验，多余经验保留。\n从1级零经验升到10级共需5400经验，全部使用春之灵需27个，全部使用曼德拉草需54个，也可混用。装备[[琦玉器]]收获巨大作物时，器内当季主物品每次另得10经验；逐级经验需求见[[节气]]。"
        },
        {
          "type": "text",
          "title": "10级主动效果",
          "content": "10级后仅胖头鱼可主动使用，消耗5灵气，促进周围40范围内符合条件的农作物生长；不对所有植物生效。10级主物品激活时，还提供快速制作。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_chun.png"
    },
    {
      "id": "jq_xia",
      "owner": "common",
      "name": "夏季",
      "title_note": "绿树阴浓夏日长，楼台倒影入池塘。",
      "image": "assets/img/seasons/jq_xia.png",
      "summary": "普通攻击倍率×1.5、快速攻击、防过热和护目镜视野；10级可给附近玩家战斗增益。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "mech_spirits"
      ],
      "recipe": "无需科技：炽热太阳鱼×6 + [jq_lx]×1 + [jq_xm]×1 + [jq_mz]×1 + [jq_xz]×1 + [jq_xs]×1 + [jq_ds]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，放入对应季节槽位即可激活；不要求世界处于对应季节。胖头鱼激活至少一种四季主物品时，[[灵气]]上限额外增加100，并可消耗[[四季之灵]]回复灵气。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "普通攻击倍率×1.5，获得快速攻击、防过热与沙漠护目镜视野。取出本件或卸下琦玉器会取消。"
        },
        {
          "type": "text",
          "title": "四季齐全时的攻击",
          "content": "四季槽位齐全且攻击随机选中夏季效果时，对目标造成按其最大生命与主物品等级计算的伤害，并附加可叠加的持续噬咬伤害。"
        },
        {
          "type": "text",
          "title": "怎样升级",
          "content": "初始1级，最高10级。给予[[夏之灵]]×1增加200经验，或给予曼德拉草×1增加100经验。升下一级需要（当前等级+1）×100经验，多余经验保留。\n从1级零经验升到10级共需5400经验，全部使用夏之灵需27个，全部使用曼德拉草需54个，也可混用。装备[[琦玉器]]收获巨大作物时，器内当季主物品每次另得10经验；逐级经验需求见[[节气]]。"
        },
        {
          "type": "text",
          "title": "10级主动效果",
          "content": "10级后仅胖头鱼可主动使用，为周围40范围内存活的玩家提供180秒战斗增益：普通攻击倍率×1.5，并对支持该效果的角色启用快速攻击。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_xia.png"
    },
    {
      "id": "jq_qiu",
      "owner": "common",
      "name": "秋季",
      "title_note": "停车坐爱枫林晚，霜叶红于二月花。",
      "image": "assets/img/seasons/jq_qiu.png",
      "summary": "普通减伤50%，已有位面防御×1.3；10级可给附近玩家加速和抗困倦。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "mech_spirits"
      ],
      "recipe": "无需科技：落叶比目鱼×6 + [jq_lq]×1 + [jq_cs]×1 + [jq_bl]×1 + [jq_qf]×1 + [jq_hl]×1 + [jq_sj]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，放入对应季节槽位即可激活；不要求世界处于对应季节。胖头鱼激活至少一种四季主物品时，[[灵气]]上限额外增加100，并可消耗[[四季之灵]]回复灵气。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "提供50%普通伤害减免；角色已有位面防御时，其数值×1.3。采集增产效果在当前版本可能失效，不能保证每次采集都有额外产出。"
        },
        {
          "type": "text",
          "title": "四季齐全时的攻击",
          "content": "四季槽位齐全且攻击随机选中秋季效果时，束缚目标周围半径8内符合条件的敌人，持续秒数等于主物品等级。"
        },
        {
          "type": "text",
          "title": "怎样升级",
          "content": "初始1级，最高10级。给予[[秋之灵]]×1增加200经验，或给予曼德拉草×1增加100经验。升下一级需要（当前等级+1）×100经验，多余经验保留。\n从1级零经验升到10级共需5400经验，全部使用秋之灵需27个，全部使用曼德拉草需54个，也可混用。装备[[琦玉器]]收获巨大作物时，器内当季主物品每次另得10经验；逐级经验需求见[[节气]]。"
        },
        {
          "type": "text",
          "title": "10级主动效果",
          "content": "10级后仅胖头鱼可主动使用，为周围40范围内存活的玩家提供180秒增益：移速×1.3，并阻止困倦累积。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_qiu.png"
    },
    {
      "id": "jq_dong",
      "owner": "common",
      "name": "冬季",
      "title_note": "晚来天欲雪，能饮一杯无？",
      "image": "assets/img/seasons/jq_dong.png",
      "summary": "命中增加6寒冷值、防过冷、防冰冻与冰面防滑；10级饥饿消耗减半并解锁范围灭火。",
      "related": [
        "bighead_qyq",
        "mech_jieqi",
        "mech_spirits"
      ],
      "recipe": "无需科技：冰鲷鱼×6 + [jq_ld]×1 + [jq_xx]×1 + [jq_dx]×1 + [jq_dz]×1 + [jq_xh]×1 + [jq_dh]×1；金企鹅兑换：[bighead_qbi]×50",
      "tech": "无需科技 / 金企鹅兑换",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，放入对应季节槽位即可激活；不要求世界处于对应季节。胖头鱼激活至少一种四季主物品时，[[灵气]]上限额外增加100，并可消耗[[四季之灵]]回复灵气。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次命中可冻结的目标增加6寒冷值；防过冷、防冰冻并提供冰面防滑。10级激活时，饥饿消耗×0.5，攻击另启用穿透无敌、生命层面的减伤与单次伤害上限的效果。"
        },
        {
          "type": "text",
          "title": "四季齐全时的攻击",
          "content": "四季槽位齐全且攻击随机选中冬季效果时，在目标周围生成三道踢击；本件的投射触发间隔至少5秒。"
        },
        {
          "type": "text",
          "title": "怎样升级",
          "content": "初始1级，最高10级。给予[[冬之灵]]×1增加200经验，或给予曼德拉草×1增加100经验。升下一级需要（当前等级+1）×100经验，多余经验保留。\n从1级零经验升到10级共需5400经验，全部使用冬之灵需27个，全部使用曼德拉草需54个，也可混用。装备[[琦玉器]]收获巨大作物时，器内当季主物品每次另得10经验；逐级经验需求见[[节气]]。"
        },
        {
          "type": "text",
          "title": "10级主动效果",
          "content": "10级后仅胖头鱼可主动使用，扑灭周围40范围内的火焰与闷烧，并为可保护植物提供20秒防枯萎保护；不扑灭营火。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_dong.png"
    },
    {
      "id": "jq_dong10",
      "owner": "common",
      "name": "冬季(10级)",
      "title_note": "晚来天欲雪，能饮一杯无？",
      "image": "assets/img/seasons/jq_dong10.png",
      "summary": "直接获得10级冬季主物品，省去从1级培养的过程；效果与10级冬季相同。",
      "related": [
        "jq_dong",
        "bighead_qyq",
        "bighead_qbi"
      ],
      "recipe": "金企鹅兑换：[bighead_qbi]×9",
      "tech": "金企鹅兑换",
      "detail_blocks": [
        {
          "type": "text",
          "title": "怎么获得",
          "content": "在金企鹅商店出现对应商品时，用9[[Q币]]兑换，实际拿到的是10级[[冬季]]主物品。"
        },
        {
          "type": "text",
          "title": "怎么使用",
          "content": "任意角色装备[[琦玉器]]，放入对应季节槽位即可激活；不要求世界处于对应季节。胖头鱼激活至少一种四季主物品时，[[灵气]]上限额外增加100，并可消耗[[四季之灵]]回复灵气。"
        },
        {
          "type": "text",
          "title": "效果与限制",
          "content": "每次命中可冻结的目标增加6寒冷值；防过冷、防冰冻并提供冰面防滑。10级激活时，饥饿消耗×0.5，攻击另启用穿透无敌、生命层面的减伤与单次伤害上限的效果。"
        },
        {
          "type": "text",
          "title": "10级主动效果",
          "content": "10级后仅胖头鱼可主动使用，扑灭周围40范围内的火焰与闷烧，并为可保护植物提供20秒防枯萎保护；不扑灭营火。"
        }
      ],
      "display_image": "assets/img/displays/bighead_jq_dong.png"
    }
  ],
  "changelog": [
    {
      "id": "log_5800",
      "title": "v5.8 · 云梦泽与农耕",
      "version": "v5.8",
      "date": "2026-11-23",
      "image": "assets/img/items/bb_ymz_jade.png",
      "changes": [
        "本条汇总v5.6至v5.8的累计变化，依据2026年11月23日提供的压缩包核对。",
        "原雾气桦树林改为[[云梦泽]]，仍与沼泽相连。新世界的[[太极青玄阁]]改在区域中央生成；旧存档不自动补入完整区域，房屋不会自动搬迁。",
        "新世界该区域不再额外生成猪王与5座猪屋，原版猪王不受影响；旧存档已有对象不会自动清除。",
        "新增蓝弥、青璇、[[水田]]地皮、[[地玉笋]]、[[地玉]]、云藤、地光、喷泉、瀑布及花园、海边大树。地玉笋每10个游戏天尝试补到现存5～8处。",
        "新增[[古骸培土机]]与[[血泥]]：指定干湿材料每2份产1血泥。水田保持湿润和三类养分，生长阶段耗时为通常的三分之一；血泥另可催长一阶段，但被催长作物不能成为巨型。",
        "新增[[碧波泉]]：胖头鱼专用泡澡，每60秒额外恢复1灵气，泡澡时自然饥饿消耗降20%；空手捕鱼成功消耗5饥饿。",
        "[[不死树]]、[[血浆]]、[[亡骸浸池]]标为「未实装」：不死树缺少正常生成或制作入口，血浆兑换与浸池配方的获取链尚未接通。",
        "[[玉如意]]配方改为地玉×10。[[避尘]]施法默认需当前灵气100，可在设置中选50～100；实际消耗仍2点、冷却仍2秒。",
        "[[春季]]主物品取消移速×1.3，改为制作背包物品概率双倍：胖头鱼50%、其他角色30%，不要求10级；建筑摆放与锅中烹饪不生效。带电攻击、防潮及10级效果保留。",
        "胖头鱼和高脚鸟的移速设置新增提速20%档，默认仍提速100%。高脚鸟献祭暗影心房新增10噬心，增益期间禁止重复献祭，读档不再重新补满时间。",
        "玩家攻击[[何三宝]]会被直接扣尽生命，死因为「天道」；胖头鱼换角色时，三宝关闭仓库、掉出储物后消失。",
        "新增胖头鱼人物外观「狐狸可是祥瑞」。修正冬季防滑初始化、五道圆满时受控状态的脱离流程，以及空手捕鱼的鱼量判断和鱼的显示、存档状态。"
      ],
      "related": [
        "mech_mist_forest",
        "mech_paddy",
        "bb_ymz_compostbin",
        "bb_ymz_bloodmud",
        "bb_ymz_jade_rock",
        "bb_ymz_pool",
        "bb_watertree_pillar",
        "bb_ymz_plasma",
        "bb_ymz_bloodpool",
        "bighead_ruyi",
        "bighead_spear",
        "jq_chun",
        "mech_shixin",
        "bighead_sanbao_builder",
        "pangtouyu"
      ]
    },
    {
      "id": "log_5600",
      "title": "v5.6 · 万象玑与花种祭眼",
      "version": "v5.6",
      "date": "2026-11-14",
      "image": "assets/img/items/bighead_wanxiangji.png",
      "related": [
        "bighead_wanxiangji",
        "mech_seed_ritual",
        "bb_gaojiaoniao_fr",
        "bb_gaojiaoniao_my",
        "mech_mist_forest",
        "bighead_buran",
        "bighead_qyq",
        "bighead_sanbao_builder",
        "bb_gaojiaoniao_cs_skin2",
        "bighead_spear_skin3",
        "bb_gaojiaoniao_fh_skin3"
      ],
      "changes": [
        "本条汇总v5.1至v5.6的累计变化，依据2026年11月14日提供的新包核对。",
        "新增[[万象玑]]：高脚鸟专用七法术饰品，弦上限1000；新生自带20弦，另行制作的初始0弦，可用指定材料充弦。",
        "新增[[花种]]、[[腐烂花种]]、[[祭眼]]与[[花种祭眼仪式]]。高脚鸟戴高级耕作先驱帽，用蘑菇皮打包指定材料；花种自身温度连续至少50℃满3个游戏天后，交给新月夜月台旁的祭眼换取[[芙蓉]]。祭眼另接受告密的心随机召唤Boss。",
        "芙蓉停用“给予枯萎格罗姆花暗影心房，有10%概率转换”的旧获取方式，现改为花种祭眼仪式。",
        "[[溟羽]]改为直线冥焰，白天／黄昏／夜晚伤害300／500／800；自带40位面防御，可喂不知名骨头或邪天翁羽毛将普通伤害吸收升至80%。无战斗目标且与主人链接、在场时每秒回血1；命中后标记目标，目标死亡额外掉纯粹恐惧，石虾另掉绝望石。",
        "[[芙蓉]]冥火范围内，高脚鸟连续停留每60秒增加1[[噬心]]。桎梏扩大为半径2／4.8／7.4／10的四圈、各6／16／24／32个陷阱；单陷阱作用半径2，有效敌人每秒损失最大生命1%，重叠不加快频率。",
        "新世界默认地表生成加入[[雾气桦树林]]，直接连到沼泽出口，含猪王与5座猪屋；旧存档不会自动补入。",
        "新增[[告白 · 除祟]]、[[恋爱 · 避尘]]、[[真爱无敌 · 封魂]]外观。封魂新外观支持独立飞剑与古祭神辉储存显示，凤求凰尾迹跟随当前外观。",
        "[[不染]]破裂珍珠触发率由5%降至1%；符文和注能暗影心房改用组件直接伤害，保留Boss部件伤害转移。非PVP世界弹体命中其他玩家仅击退，冰圈也不伤害其他玩家。",
        "[[何三宝]]新增9999生命、99%普通伤害吸收、每秒回血2；死亡会关闭仓库、掉出全部内容并清除待发寻宝奖励。",
        "[[琦玉器]]装配效果、攻击联动及巨大作物经验适用于其他角色；灵气相关收益仍要求相应能力，四季主物品10级主动使用仍限胖头鱼。",
        "胖头鱼空手池塘捕鱼至少需要10饥饿，成功后消耗10；移除攻击命中使目标增加潮湿的效果。",
        "[[Q币]]新增60金块制作10枚、240金块制作40枚的批量配方，兑换比仍为6:1。[[玄清灵鉴]]生成或迁移寄生灵时，只选择地表主大陆或月岛安全陆地，找不到合适点则提示失败。"
      ]
    },
    {
      "id": "log_5100",
      "title": "v5.1 · 料理与战斗调整",
      "version": "v5.1",
      "image": "assets/img/items/bighead_gwjn.png",
      "related": [
        "bighead_sucookpot_item",
        "bb_gaojiaoniao_cs",
        "mech_wudao",
        "mech_shixin",
        "mech_lingqi",
        "bighead_ylry",
        "bighead_fanhua_skin2",
        "config_bighead_pot_yield",
        "config_bighead_zhuxie_mult"
      ],
      "changes": [
        "本条汇总v4.8至v5.1的累计玩法变化。",
        "[[芙蓉石蟠螭耳盖炉]]改为5格原料、15格成品的批量红锅，每轮1秒；默认出2份，可通过[[红锅出锅数量]]改为1份。制作材料改为彩虹宝石×1、红宝石×3、月亮碎片×10。",
        "新增七道红锅料理：[[此间山]]、[[莓酱果子]]、[[糖渍果]]、[[果味加浓]]、[[月圆血石榴]]、[[心冻了莓]]、[[甜蜜风暴]]。新增料理增益图标、效果说明与剩余时间。",
        "停用草莓罐头、草莓可丽饼、草莓软酪、蜂蜜酥山、双果冰淇淋、水果蛋糕、酸奶冰淇淋、桃花酥、西瓜酥山、仙人掌石榴汁。这十道旧料理及其调味版会在旧存档加载时直接清除。",
        "两名角色的初始料理改为1份[[果味加浓]]；高脚鸟每日投喂中原有的两份草莓软酪也改为两份果味加浓。",
        "[[除祟]]耐久由100提高至500；新增月岩强化攻击、大理石强化减速、海象牙强化移速，支持批量交付升级和修理。",
        "除祟新增主动诛邪：消耗30饥饿，对周围敌人造成以当前理智和噬心计算的范围真实伤害；新增[[诛邪伤害倍率]]设置。",
        "[[五道]]圆满后免疫冻结、受击硬直和击退；友方心魔每次召出1～3个，并按实际造成伤害的5%为主人回血。修正五道三维上限与当前值的读档恢复。",
        "高脚鸟可食用纯粹恐惧，每个增加1点[[噬心]]；五道圆满后每60秒降低2点，佩戴[[古祭神辉]]时阻止噬心下降。新增可拖动的五道圆环，并调整噬心图标拖动操作。",
        "胖头鱼灵气达到100时，减伤改为在其他减伤后再减免30%，替代原有的50%普通伤害吸收。",
        "不染移除风向标强化与龙卷风施法；[[蕴灵如意]]新增小旋风，可右键指定目标施放。",
        "[[封魂]]配方中的传送魔杖改为懒人魔杖。移除秋季向猪王投喂料理换取秋之灵、曼德拉草或便便的额外奖励。",
        "[[繁花]]新增「[[爱慕 · 繁花]]」外观，调整手持动画、命中特效和皮肤切换显示。"
      ]
    },
    {
      "id": "log_4800",
      "title": "v4.8 · 新增玩法设置",
      "version": "v4.8",
      "image": "assets/img/items/bighead_fanhua.png",
      "related": [
        "config_bb_gaojiaoniao_demon_damage",
        "config_bb_gaojiaoniao_shadow_damage",
        "config_bighead_speed_bonus",
        "config_bb_gaojiaoniao_speed_bonus",
        "config_bb_gaojiaoniao_magma_regen",
        "config_bb_gaojiaoniao_px_speed",
        "config_bighead_seasons",
        "config_bighead_ruyi_catch_spirits",
        "config_bighead_daily_gift",
        "config_bighead_graft_limit"
      ],
      "changes": [
        "新增10项玩法设置，可在模组配置中调整伤害、移速、回复及部分玩法开关。",
        "高脚鸟心魔伤害可设为噬心值的50%、100%或200%；分身伤害可设为世界天数的50%、100%或200%。",
        "胖头鱼与高脚鸟的移速加成可分别选择50%或100%；[[貔貅]]移速可选择原速的50%、100%或150%。",
        "高脚鸟岩浆泡澡回复可选择无加成，或每秒恢复生命、理智、饥饿各1点或2点。",
        "增加四季相关内容、[[蕴灵如意]]捕捉[[四季之灵]]、高脚鸟每日投喂三个独立开关。",
        "[[繁花]]同株嫁接上限可选择50、99或999株；降低上限不会削减已有嫁接。"
      ]
    },
    {
      "id": "log_4400",
      "title": "v4.4 · 角色与四季玩法",
      "image": "assets/img/items/bighead_spear.png",
      "version": "v4.4",
      "related": [
        "pangtouyu",
        "gaojiaoniao",
        "mech_jieqi",
        "mech_lingqi"
      ],
      "changes": [
        "包含[[胖头鱼]]、[[高脚鸟]]两名角色及各自专属装备。",
        "包含[[灵气]]、[[节气]]、[[四季之灵]]、[[寄生灵]]与[[不染与月台]]相关玩法。",
        "制作栏设有「节气」分类，包含24节气和四季相关物品。",
        "可设置是否在月台附近生成[[不染]]，每个世界只生成一次。",
        "胖头鱼灵气上限由100提升至200所需的累计存活天数，可选择10、25、50或100天。"
      ]
    }
  ],
  "relations": {},
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
      "themeClass": "section--paper",
      "rootId": "mechanics-root"
    },
    {
      "id": "terrains",
      "title": "小房子",
      "themeClass": "section--paper",
      "rootId": "terrains-root"
    },
    {
      "id": "seasons",
      "title": "节气",
      "themeClass": "section--paper",
      "rootId": "season-root"
    },
    {
      "id": "settings",
      "title": "设置",
      "description": "创建世界时，或启动已有存档前，由房主在「模组」→《我们饥佬是这样的》→「配置」中修改，保存后启动世界。本页展示各选项的默认值与可选值。",
      "themeClass": "section--paper",
      "rootId": "settings-root"
    },
    {
      "id": "changelog",
      "title": "更新",
      "themeClass": "section--paper",
      "rootId": "changelog-root"
    }
  ],
  "skins": [
    {
      "id": "bighead_spear_skin1",
      "item_id": "bighead_spear",
      "name": "涟漪 · 避尘",
      "image": "assets/img/skins/bighead_spear_skin1.png",
      "summary": "避尘的装备外观。",
      "related": [
        "bighead_spear"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[避尘]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_spear_skin1.png"
    },
    {
      "id": "bighead_spear_skin2",
      "item_id": "bighead_spear",
      "name": "葡萄味拐杖糖 · 避尘",
      "image": "assets/img/skins/bighead_spear_skin2.png",
      "summary": "避尘的装备外观。",
      "related": [
        "bighead_spear"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[避尘]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_spear_skin2.png"
    },
    {
      "id": "bighead_fanhua_skin1",
      "item_id": "bighead_fanhua",
      "name": "神秘法杖 · 繁花",
      "image": "assets/img/skins/bighead_fanhua_skin1.png",
      "summary": "繁花的装备外观。",
      "related": [
        "bighead_fanhua"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[繁花]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_fanhua_skin1.png"
    },
    {
      "id": "bighead_fanhua_skin2",
      "item_id": "bighead_fanhua",
      "name": "爱慕 · 繁花",
      "image": "assets/img/skins/bighead_fanhua_skin2.png",
      "summary": "一枝繁花，满心爱慕。繁花的装备外观，限获授权账号使用。",
      "related": [
        "bighead_fanhua"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "title": "对应装备",
          "content": "[[繁花]]的「爱慕」外观，具有独立的手持动画和命中特效。"
        },
        {
          "type": "text",
          "title": "解锁限制",
          "content": "此外观按指定账号名单校验，仅获授权的账号可使用。"
        }
      ],
      "display_image": "assets/img/displays/bighead_fanhua_skin2.png"
    },
    {
      "id": "bighead_buran_skin1",
      "item_id": "bighead_buran",
      "name": "回溯 · 不染",
      "image": "assets/img/skins/bighead_buran_skin1.png",
      "summary": "不染的装备外观。",
      "related": [
        "bighead_buran"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[不染]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_buran_skin1.png"
    },
    {
      "id": "bighead_buran_skin2",
      "item_id": "bighead_buran",
      "name": "银月 · 不染",
      "image": "assets/img/skins/bighead_buran_skin2.png",
      "summary": "不染的装备外观。",
      "related": [
        "bighead_buran"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[不染]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_buran_skin2.png"
    },
    {
      "id": "bighead_buran_skin3",
      "item_id": "bighead_buran",
      "name": "魔女的扫把 · 不染",
      "image": "assets/img/skins/bighead_buran_skin3.png",
      "summary": "不染的装备外观。",
      "related": [
        "bighead_buran"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[不染]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_buran_skin3.png"
    },
    {
      "id": "bighead_buran_skin4",
      "item_id": "bighead_buran",
      "name": "奶油星糖 · 不染",
      "image": "assets/img/skins/bighead_buran_skin4.png",
      "summary": "不染的装备外观。",
      "related": [
        "bighead_buran"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[不染]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_buran_skin4.png"
    },
    {
      "id": "bighead_back_skin1",
      "item_id": "bighead_back",
      "name": "晨曦 · 两仪",
      "image": "assets/img/skins/bighead_back_skin1.png",
      "summary": "两仪的装备外观。",
      "related": [
        "bighead_back"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[两仪]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_back_skin1.png"
    },
    {
      "id": "bighead_back_skin2",
      "item_id": "bighead_back",
      "name": "玩偶背包 · 两仪",
      "image": "assets/img/skins/bighead_back_skin2.png",
      "summary": "两仪的装备外观。",
      "related": [
        "bighead_back"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[两仪]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_back_skin2.png"
    },
    {
      "id": "bb_gaojiaoniao_lh_skin1",
      "item_id": "bb_gaojiaoniao_lh",
      "name": "玩偶背包 · 轮回",
      "image": "assets/img/skins/bb_gaojiaoniao_lh_skin1.png",
      "summary": "轮回的装备外观。",
      "related": [
        "bb_gaojiaoniao_lh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[轮回]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_lh_skin1.png"
    },
    {
      "id": "bighead_armor_skin1",
      "item_id": "bighead_armor",
      "name": "漆园蝶 · 灵墨",
      "image": "assets/img/skins/bighead_armor_skin1.png",
      "summary": "灵墨的装备外观。",
      "related": [
        "bighead_armor"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[灵墨]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_armor_skin1.png"
    },
    {
      "id": "bighead_armor_skin2",
      "item_id": "bighead_armor",
      "name": "小恶魔翅膀 · 灵墨",
      "image": "assets/img/skins/bighead_armor_skin2.png",
      "summary": "灵墨的装备外观。",
      "related": [
        "bighead_armor"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[灵墨]]。"
        }
      ],
      "display_image": "assets/img/displays/bighead_armor_skin2.png"
    },
    {
      "id": "bb_gaojiaoniao_cmyh_skin1",
      "item_id": "bb_gaojiaoniao_cmyh",
      "name": "翠羽霜翅 · 重明遗骨",
      "image": "assets/img/skins/bb_gaojiaoniao_cmyh_skin1.png",
      "summary": "重明遗骨的装备外观。",
      "related": [
        "bb_gaojiaoniao_cmyh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[重明遗骨]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_cmyh_skin1.png"
    },
    {
      "id": "bb_gaojiaoniao_cmyh_skin2",
      "item_id": "bb_gaojiaoniao_cmyh",
      "name": "小天使翅膀 · 重明遗骨",
      "image": "assets/img/skins/bb_gaojiaoniao_cmyh_skin2.png",
      "summary": "重明遗骨的装备外观。",
      "related": [
        "bb_gaojiaoniao_cmyh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[重明遗骨]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_cmyh_skin2.png"
    },
    {
      "id": "bb_gaojiaoniao_px_skin1",
      "item_id": "bb_gaojiaoniao_px_builder",
      "name": "玉桂狗 · 貔貅",
      "image": "assets/img/items/bb_gaojiaoniao_px.png",
      "summary": "貔貅的玉桂狗外观。",
      "related": [
        "bb_gaojiaoniao_px_builder"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应生物：[[貔貅]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_px_skin1.png"
    },
    {
      "id": "bb_gaojiaoniao_fh_skin1",
      "item_id": "bb_gaojiaoniao_fh",
      "name": "墨蛟 · 封魂",
      "image": "assets/img/skins/bb_gaojiaoniao_fh_skin1.png",
      "summary": "封魂的装备外观。",
      "related": [
        "bb_gaojiaoniao_fh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[封魂]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_fh_skin1.png"
    },
    {
      "id": "bb_gaojiaoniao_fh_skin2",
      "item_id": "bb_gaojiaoniao_fh",
      "name": "为爱发电 · 封魂",
      "image": "assets/img/skins/bb_gaojiaoniao_fh_skin2.png",
      "summary": "封魂的装备外观。",
      "related": [
        "bb_gaojiaoniao_fh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[封魂]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_fh_skin2.png"
    },
    {
      "id": "bb_gaojiaoniao_fqh_skin1",
      "item_id": "bb_gaojiaoniao_fqh",
      "name": "辟邪神弓 · 凤求凰",
      "image": "assets/img/skins/bb_gaojiaoniao_fqh_skin1.png",
      "summary": "凤求凰的装备外观。",
      "related": [
        "bb_gaojiaoniao_fqh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[凤求凰]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_fqh_skin1.png"
    },
    {
      "id": "bb_gaojiaoniao_fqh_skin2",
      "item_id": "bb_gaojiaoniao_fqh",
      "name": "丘比特之弓 · 凤求凰",
      "image": "assets/img/skins/bb_gaojiaoniao_fqh_skin2.png",
      "summary": "凤求凰的装备外观。",
      "related": [
        "bb_gaojiaoniao_fqh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[凤求凰]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_fqh_skin2.png"
    },
    {
      "id": "bb_gaojiaoniao_cs_skin1",
      "item_id": "bb_gaojiaoniao_cs",
      "name": "玉桂狗法杖 · 除祟",
      "image": "assets/img/skins/bb_gaojiaoniao_cs_skin1.png",
      "summary": "除祟的装备外观。",
      "related": [
        "bb_gaojiaoniao_cs"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[除祟]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_cs_skin1.png"
    },
    {
      "id": "bb_gaojiaoniao_gjsh_skin1",
      "item_id": "bb_gaojiaoniao_gjsh",
      "name": "玉桂狗我头上带，谁见我不拜一拜 · 古祭神辉",
      "image": "assets/img/skins/bb_gaojiaoniao_gjsh_skin1.png",
      "summary": "古祭神辉的装备外观。",
      "related": [
        "bb_gaojiaoniao_gjsh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[古祭神辉]]。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_gjsh_skin1.png"
    },
    {
      "id": "bighead_buran_skin5",
      "item_id": "bighead_buran",
      "name": "万籁华光 · 不染",
      "image": "assets/img/skins/bighead_buran_skin5.png",
      "summary": "情律渐起，恋音有鸣。",
      "related": [
        "bighead_buran"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[不染]]。"
        },
        {
          "type": "text",
          "content": "此外观需通过特殊方式解锁。"
        }
      ],
      "display_image": "assets/img/displays/bighead_buran_skin5.png"
    },
    {
      "id": "bb_gaojiaoniao_lh_skin2",
      "item_id": "bb_gaojiaoniao_lh",
      "name": "誓言 · 轮回",
      "image": "assets/img/skins/bb_gaojiaoniao_lh_skin2.png",
      "summary": "愿于爱人永恒！",
      "related": [
        "bb_gaojiaoniao_lh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[轮回]]。"
        },
        {
          "type": "text",
          "content": "此外观需通过特殊方式解锁。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_lh_skin2.png"
    },
    {
      "id": "bighead_back_skin3",
      "item_id": "bighead_back",
      "name": "永恒 · 两仪",
      "image": "assets/img/skins/bighead_back_skin3.png",
      "summary": "许下一生誓言！",
      "related": [
        "bighead_back"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[两仪]]。"
        },
        {
          "type": "text",
          "content": "此外观需通过特殊方式解锁。"
        }
      ],
      "display_image": "assets/img/displays/bighead_back_skin3.png"
    },
    {
      "id": "bb_gaojiaoniao_cmyh_skin3",
      "item_id": "bb_gaojiaoniao_cmyh",
      "name": "大天使 · 重明遗骨",
      "image": "assets/img/skins/bb_gaojiaoniao_cmyh_skin3.png",
      "summary": "神辉落下，圣光永存！",
      "related": [
        "bb_gaojiaoniao_cmyh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[重明遗骨]]。"
        },
        {
          "type": "text",
          "content": "此外观需通过特殊方式解锁。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_cmyh_skin3.png"
    },
    {
      "id": "bighead_armor_skin3",
      "item_id": "bighead_armor",
      "name": "圣天使 · 灵墨",
      "image": "assets/img/skins/bighead_armor_skin3.png",
      "summary": "圣羽摇曳，我心亦真！",
      "related": [
        "bighead_armor"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[灵墨]]。"
        },
        {
          "type": "text",
          "content": "此外观需通过特殊方式解锁。"
        }
      ],
      "display_image": "assets/img/displays/bighead_armor_skin3.png"
    },
    {
      "id": "bb_gaojiaoniao_fqh_skin3",
      "item_id": "bb_gaojiaoniao_fqh",
      "name": "世有棱镜 · 凤求凰",
      "image": "assets/img/skins/bb_gaojiaoniao_fqh_skin3.png",
      "summary": "亘古永存，爱至终章。",
      "related": [
        "bb_gaojiaoniao_fqh"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[凤求凰]]。"
        },
        {
          "type": "text",
          "content": "此外观需通过特殊方式解锁。"
        }
      ],
      "display_image": "assets/img/displays/bb_gaojiaoniao_fqh_skin3.png"
    },
    {
      "id": "bb_gaojiaoniao_cs_skin2",
      "item_id": "bb_gaojiaoniao_cs",
      "name": "告白 · 除祟",
      "image": "assets/img/skins/bb_gaojiaoniao_cs_skin2.png",
      "display_image": "assets/img/displays/bb_gaojiaoniao_cs_skin2.png",
      "summary": "除祟的「告白」装备外观，限获授权账号使用。",
      "related": [
        "bb_gaojiaoniao_cs"
      ],
      "source": "v5.8",
      "detail_blocks": [
        {
          "type": "text",
          "title": "对应装备",
          "content": "[[除祟]]的「告白」外观，带独立手持表现。"
        },
        {
          "type": "text",
          "title": "解锁限制",
          "content": "此外观按指定账号名单校验，仅获授权的账号可使用。"
        }
      ]
    },
    {
      "id": "bighead_spear_skin3",
      "item_id": "bighead_spear",
      "name": "恋爱 · 避尘",
      "image": "assets/img/skins/bighead_spear_skin3.png",
      "display_image": "assets/img/displays/bighead_spear_skin3.png",
      "summary": "避尘的「恋爱」装备外观，限获授权账号使用。",
      "related": [
        "bighead_spear"
      ],
      "source": "v5.8",
      "detail_blocks": [
        {
          "type": "text",
          "title": "对应装备",
          "content": "[[避尘]]的「恋爱」外观，带独立手持表现。"
        },
        {
          "type": "text",
          "title": "解锁限制",
          "content": "此外观按指定账号名单校验，仅获授权的账号可使用。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_fh_skin3",
      "item_id": "bb_gaojiaoniao_fh",
      "name": "真爱无敌 · 封魂",
      "image": "assets/img/skins/bb_gaojiaoniao_fh_skin3.png",
      "display_image": "assets/img/displays/bb_gaojiaoniao_fh_skin3.png",
      "summary": "封魂的「真爱无敌」装备外观，限获授权账号使用。",
      "related": [
        "bb_gaojiaoniao_fh",
        "bb_gaojiaoniao_gjsh"
      ],
      "source": "v5.8",
      "detail_blocks": [
        {
          "type": "text",
          "title": "对应装备",
          "content": "[[封魂]]的「真爱无敌」外观，带独立手持表现。 飞剑也使用独立外观，并支持[[古祭神辉]]的封魂储存显示。"
        },
        {
          "type": "text",
          "title": "解锁限制",
          "content": "此外观按指定账号名单校验，仅获授权的账号可使用。"
        }
      ]
    }
  ],
  "settings": [
    {
      "id": "config_bighead_pot_yield",
      "title": "红锅出锅数量",
      "summary": "默认：双倍（每轮2份）",
      "image": "assets/img/items/bighead_sucookpot_item.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "作用",
          "content": "调整[[芙蓉石蟠螭耳盖炉]]每轮的料理产出。每轮仍从五个原料格各消耗1份食材，耗时1秒。"
        },
        {
          "type": "text",
          "title": "可选值",
          "content": "正常：1份；双倍：2份。"
        },
        {
          "type": "text",
          "title": "默认值",
          "content": "双倍：2份。"
        }
      ],
      "related": [
        "bighead_sucookpot_item"
      ]
    },
    {
      "id": "config_bighead_zhuxie_mult",
      "title": "诛邪伤害倍率",
      "summary": "默认：1倍",
      "image": "assets/img/items/bb_gaojiaoniao_cs.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "作用",
          "content": "调整[[除祟]]主动技能诛邪的伤害。基础公式为当前理智×当前[[噬心]]×所选倍率，再乘角色与其他攻击修正。"
        },
        {
          "type": "text",
          "title": "可选值",
          "content": "0.2倍 / 0.5倍 / 1倍。"
        },
        {
          "type": "text",
          "title": "默认值",
          "content": "1倍。"
        }
      ],
      "related": [
        "bb_gaojiaoniao_cs",
        "mech_shixin"
      ]
    },
    {
      "id": "config_bb_gaojiaoniao_demon_damage",
      "title": "高脚鸟心魔伤害",
      "summary": "默认：噬心值的100%",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "心魔真实伤害为当前[[噬心]]值乘以所选倍率。"
        },
        {
          "type": "text",
          "content": "可选：噬心值的50% / 噬心值的100% / 噬心值的200%"
        },
        {
          "type": "text",
          "content": "默认：噬心值的100%"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_shixin"
      ]
    },
    {
      "id": "config_bb_gaojiaoniao_shadow_damage",
      "title": "高脚鸟分身伤害",
      "summary": "默认：天数的100%",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "残影真实伤害为当前世界天数乘以所选倍率。"
        },
        {
          "type": "text",
          "content": "可选：天数的50% / 天数的100% / 天数的200%"
        },
        {
          "type": "text",
          "content": "默认：天数的100%"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_shixin"
      ]
    },
    {
      "id": "config_bighead_speed_bonus",
      "title": "胖头鱼移速加成",
      "summary": "默认：提速100%（原版）",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "提速20%为普通移速的1.2倍，提速50%为1.5倍，提速100%为2倍。"
        },
        {
          "type": "text",
          "content": "可选：提速20% / 提速50% / 提速100%（原版）"
        },
        {
          "type": "text",
          "content": "默认：提速100%（原版）"
        }
      ],
      "related": [
        "pangtouyu"
      ]
    },
    {
      "id": "config_bb_gaojiaoniao_speed_bonus",
      "title": "高脚鸟移速加成",
      "summary": "默认：提速100%（原版）",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "提速20%为普通移速的1.2倍，提速50%为1.5倍，提速100%为2倍。"
        },
        {
          "type": "text",
          "content": "可选：提速20% / 提速50% / 提速100%（原版）"
        },
        {
          "type": "text",
          "content": "默认：提速100%（原版）"
        }
      ],
      "related": [
        "gaojiaoniao"
      ]
    },
    {
      "id": "config_bb_gaojiaoniao_magma_regen",
      "title": "高脚鸟岩浆泡澡回复",
      "summary": "默认：三维每秒回复1",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可选：无加成 / 三维每秒回复1 / 三维每秒回复2"
        },
        {
          "type": "text",
          "content": "默认：三维每秒回复1"
        }
      ],
      "related": [
        "gaojiaoniao"
      ]
    },
    {
      "id": "config_bb_gaojiaoniao_px_speed",
      "title": "貔貅移速",
      "summary": "默认：100%（原版）",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可选：50% / 100%（原版） / 150%"
        },
        {
          "type": "text",
          "content": "默认：100%（原版）"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_px_builder"
      ]
    },
    {
      "id": "config_bighead_seasons",
      "title": "四季相关内容",
      "summary": "默认：开启",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可选：开启 / 关闭（移除四季物品）"
        },
        {
          "type": "text",
          "content": "默认：开启"
        }
      ],
      "related": [
        "mech_jieqi",
        "bighead_qyq",
        "mech_parasite"
      ]
    },
    {
      "id": "config_bighead_ruyi_catch_spirits",
      "title": "蕴灵如意捕捉四季灵",
      "summary": "默认：能",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可选：能 / 不能"
        },
        {
          "type": "text",
          "content": "默认：能"
        }
      ],
      "related": [
        "bighead_ylry",
        "mech_parasite",
        "mech_spirits"
      ],
      "aliases": [
        "蕴灵如意可捕捉四季之灵"
      ]
    },
    {
      "id": "config_bighead_daily_gift",
      "title": "高脚鸟每日投喂",
      "summary": "默认：有",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可选：有 / 无"
        },
        {
          "type": "text",
          "content": "默认：有"
        },
        {
          "type": "text",
          "title": "果味加浓",
          "content": "开启后，每日随机投喂可能获得两份[[果味加浓]]，并非每天固定发放这道料理。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bighead_gwjn"
      ]
    },
    {
      "id": "config_bighead_graft_limit",
      "title": "繁花嫁接上限",
      "summary": "默认：99",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "同株总株数上限；降低设置不会削减已有嫁接。"
        },
        {
          "type": "text",
          "content": "可选：50 / 99 / 999"
        },
        {
          "type": "text",
          "content": "默认：99"
        }
      ],
      "related": [
        "bighead_fanhua",
        "mech_gardening",
        "dug_bb_cmbush"
      ]
    },
    {
      "id": "config_bighead_buran_moonbase_spawn",
      "title": "不染在月台刷新",
      "summary": "默认：开启",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "是否在月台附近生成[[不染]]，每个世界只生成一次。"
        },
        {
          "type": "text",
          "content": "可选：开启 / 关闭"
        },
        {
          "type": "text",
          "content": "默认：开启"
        }
      ],
      "related": [
        "bighead_buran",
        "mech_buran"
      ]
    },
    {
      "id": "config_bighead_lingqi_upgrade_days",
      "title": "灵气上限成长天数",
      "summary": "默认：50天",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "胖头鱼累计存活达到指定天数后，[[灵气]]上限由100提升至200。"
        },
        {
          "type": "text",
          "content": "可选：10天 / 25天 / 50天 / 100天"
        },
        {
          "type": "text",
          "content": "默认：50天"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_lingqi"
      ]
    },
    {
      "id": "config_bighead_bichen_min_lingqi",
      "title": "避尘施法灵气门槛",
      "summary": "默认：100点；可选50／60／70／80／90／100点。",
      "image": "assets/img/items/bighead_spear.png",
      "detail_blocks": [
        {
          "type": "text",
          "title": "作用",
          "content": "当前[[灵气]]达到门槛，才可使用[[避尘]]的惊鸿。门槛只决定能否施法，每次实际消耗仍为2点，冷却仍为2秒。"
        },
        {
          "type": "text",
          "title": "可选值",
          "content": "50／60／70／80／90／100点，默认100点。"
        }
      ],
      "related": [
        "bighead_spear",
        "mech_lingqi"
      ]
    }
  ]
};
