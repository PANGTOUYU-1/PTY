/**
 * 我们饥佬是这样的 Wiki · v4.8
 * 内容依据 bighead.zip 内 modinfo.lua、scripts/main/recipes.lua、strings.lua、
 * bighead_food.lua、角色/装备 prefab 与机制组件整理；基础值与成长效果分开说明。
 * 图片由模组 KTEX 转换并在导出时上下翻转。网站现有角色立绘与海报独立保留。
 * 修改内容后执行 node tools/check_data.mjs --strict 与 node tools/check_render.mjs。
 */
window.SITE_DATA = {
  "meta": {
    "site_title": "我们饥佬是这样的",
    "subtitle_latin": "",
    "author": "胖头鱼",
    "version": "v4.8",
    "workshop_url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230",
    "manifesto": "超级超级喜欢玩饥荒，搞了这个mod，哈哈哈哈，怎么方便怎么变态怎么来！",
    "links": [
      {
        "label": "创意工坊链接",
        "url": "https://steamcommunity.com/sharedfiles/filedetails/?id=3627920230"
      }
    ],
    "copyright": "© 2026 我们饥佬是这样的",
    "source_version": "4.8",
    "source": {
      "archive": "bighead.zip",
      "version": "4.8",
      "updated": "2026-10-30"
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
      "name": "其他"
    }
  ],
  "characters": [
    {
      "id": "pangtouyu",
      "side": "zuo",
      "name": "胖头鱼",
      "epithet": "鸿元净莲",
      "portrait": "assets/img/characters/pangtouyu_head.png",
      "stats": {
        "hp": 150,
        "san": 150,
        "hunger": 150
      },
      "setting": [
        "鸿元净莲。基础属性：生命150、理智150、饥饿150。",
        "默认移速为普通角色的2倍，可在模组设置中改为1.5倍；基础攻击倍率为1.5，灵气耗尽时降为0.5。",
        "初始携带[[避尘]]与两份[[草莓可丽饼]]。",
        "以[[灵气]]驱动装备技能，使用[[繁花]]照料植物，也能进入[[太极青玄阁]]。"
      ],
      "exclusive_intro": [
        "她的物件分成几路：武器是[[避尘]]（制作栏动作名「惊鸿」），护具有[[灵墨]]与[[两仪]]，工具里有[[玉如意]]、[[蕴灵如意]]、[[琦玉器]]、[[玄清灵鉴]]，住处则是[[太极青玄阁]]。",
        "对四季之灵的检查台词是「无比纯粹的能量，我要好好想想！」，对[[玄清灵鉴]]只有一句「用着不错。」",
        "包内还有以她命名的[[胖头鱼月饼]]，检查台词为「鱼哥联名款！」。",
        "已注册人物外观：小七、库洛米、2026情人节-胖头鱼、贫穷游侠、奶龙。"
      ],
      "quote": "三宝，不要乱跑！"
    },
    {
      "id": "gaojiaoniao",
      "side": "you",
      "name": "高脚鸟",
      "epithet": "上古魔龙",
      "portrait": "assets/img/characters/gaojiaoniao_head.png",
      "stats": {
        "hp": 150,
        "san": 100,
        "hunger": 200
      },
      "setting": [
        "上古魔龙。基础属性：生命150、理智100、饥饿200。",
        "默认移速为普通角色的2倍，可在模组设置中改为1.5倍。",
        "初始携带[[除祟]]与两份[[草莓可丽饼]]。",
        "[[噬心]]会随生存天数增长；领悟[[五道]]可增加属性上限，五道圆满后改变心魔效果。"
      ],
      "exclusive_intro": [
        "他的制作栏物件：[[凤求凰]]（动作名「万箭」）、[[封魂]]（「驱邪魂为己用，以怨念化剑锋。」）、[[除祟]]、[[轮回]]、[[芙蓉]]、[[古祭神辉]]、[[重明遗骨]]。",
        "对四季之灵的检查台词是「啧，还是问问她吧！」——包内胖头鱼、高脚鸟互相评价的句子基本都成对出现。",
        "以他命名的[[高脚鸟月饼]]，检查台词为「鸟弟联名款！」。",
        "已注册人物外观：萧诧、玉桂狗、2026情人节-高脚鸟、富贵王爷。"
      ],
      "quote": "此间天地的妖兽颇为有趣！"
    }
  ],
  "items": [
    {
      "id": "bighead_spear",
      "name": "避尘",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_spear.png",
      "summary": "清明净澈，应心映形。",
      "recipe": "无需科技；胖头鱼制作：冰×6 + 月亮碎片×6",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「好特别的剑！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「顺手的宝贝！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「她就用这个？」"
        },
        {
          "type": "text",
          "content": "基础攻击68，攻击距离2；胖头鱼专用。"
        },
        {
          "type": "text",
          "content": "惊鸿：消耗2点灵气，冷却2秒，施法距离16。落地范围伤害为施法扣费后的当前灵气×15；此段不受角色、装备和增益的攻击倍率加成。"
        },
        {
          "type": "text",
          "content": "自然保鲜期为5个游戏日，到期消失；交付一颗蓝宝石可停止腐坏。"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_lingqi",
        "bighead_armor"
      ],
      "tags": [
        "武器",
        "剑"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_fanhua",
      "name": "繁花",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_fanhua.png",
      "summary": "风传花信，雨濯春尘。",
      "recipe": "炼金引擎；胖头鱼制作：花瓣×99",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「风传花信，雨濯春尘。」"
        },
        {
          "type": "text",
          "content": "基础攻击20，武器攻击距离8、最大距离10；胖头鱼专用。"
        },
        {
          "type": "text",
          "content": "装备后可使用范围施肥（10灵气）、范围采集、范围催熟（5灵气）与嫁接；详见[[繁花园艺]]。"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_gardening"
      ],
      "tags": [
        "武器",
        "繁花"
      ],
      "tech": "炼金引擎；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_fqh",
      "name": "凤求凰",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fqh.png",
      "summary": "凤飞翱翔兮，四海求凰。",
      "recipe": "蓝图或指定制作站；高脚鸟制作：[bb_gaojiaoniao_fhd]×1 + 金色羽毛×10 + 红色羽毛×20 + 黄宝石×5",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「凤飞翱翔兮，四海求凰。」"
        },
        {
          "type": "text",
          "content": "初始基础攻击100，攻击距离14、最大距离16；高脚鸟专用。装备成长会改变攻击数值。"
        }
      ],
      "related": [
        "gaojiaoniao"
      ],
      "tags": [
        "武器",
        "长弓",
        "万箭"
      ],
      "tech": "蓝图或指定制作站；高脚鸟制作",
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_fh",
      "name": "封魂",
      "category": "weapon",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fh.png",
      "summary": "驱邪魂为己用，以怨念化剑锋。",
      "recipe": "远古伪科学站；高脚鸟制作：铥矿棒×5 + 传送魔杖×1 + 暗影香炉×1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「驱邪魂为己用，以怨念化剑锋。」"
        },
        {
          "type": "text",
          "content": "基础攻击125，攻击距离2；高脚鸟专用。"
        }
      ],
      "related": [
        "gaojiaoniao"
      ],
      "tags": [
        "武器",
        "剑"
      ],
      "tech": "远古伪科学站；高脚鸟制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_armor",
      "name": "灵墨",
      "category": "armor",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_armor.png",
      "summary": "留连戏蝶时时舞 自在娇莺恰恰啼。",
      "recipe": "无需科技；胖头鱼制作：骨头盔甲×1 + 绝望石×5 + 蝴蝶翅膀×20",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「留连戏蝶时时舞，自在娇莺恰恰啼。」"
        },
        {
          "type": "text",
          "content": "基础耐久3000，吸收90%的普通伤害；胖头鱼专用。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_spear"
      ],
      "tags": [
        "护具",
        "护甲"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_back",
      "name": "两仪",
      "category": "armor",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_back.png",
      "summary": "太极生两仪，两仪生四象，四象生八卦。",
      "recipe": "无需科技；胖头鱼制作：草×20 + 树枝×20 + 木炭×20 + 蜘蛛丝×10 + 大理石×5",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「太极生两仪，两仪生四象，四象生八卦。」"
        }
      ],
      "related": [
        "pangtouyu"
      ],
      "tags": [
        "护具",
        "背部"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_cs",
      "name": "除祟",
      "category": "armor",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_cs.png",
      "summary": "可压邪祟之气，护其不侵。",
      "recipe": "科学机器；高脚鸟制作：噩梦燃料×10 + 石头×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「可压邪祟之气，护其不侵。」"
        },
        {
          "type": "text",
          "content": "基础攻击68，攻击距离2，初始使用次数100；高脚鸟专用。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_wudao",
        "mech_shixin"
      ],
      "tags": [
        "护具",
        "护符"
      ],
      "tech": "科学机器；高脚鸟制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_ruyi",
      "name": "玉如意",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ruyi.png",
      "summary": "工欲善其事必先利其器。",
      "recipe": "无需科技；胖头鱼制作：月亮碎片×10 + 金块×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「工欲善其事必先利其器。」"
        },
        {
          "type": "text",
          "content": "基础攻击10。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ylry"
      ],
      "tags": [
        "工具",
        "如意"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「一柄蕴灵，万事随心。」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「灵光入玉，百事如意。」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「她倒是有件趁手的好东西。」"
        },
        {
          "type": "text",
          "content": "基础攻击10，范围技能施法距离8。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ruyi"
      ],
      "tags": [
        "工具",
        "如意",
        "收纳",
        "捕鱼"
      ],
      "source": "v4.8"
    },
    {
      "id": "bighead_umbrella",
      "name": "共潮生",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_umbrella.png",
      "summary": "烟雨入江南，山水如墨染。",
      "recipe": "炼金引擎；胖头鱼制作：邪天翁喙×1 + 月亮碎片×10 + 花瓣×5",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「烟雨入江南，山水如墨染。」"
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
      "source": "v4.8"
    },
    {
      "id": "bighead_flw",
      "name": "缚灵网",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_flw.png",
      "summary": "要好一些，但也就那样。",
      "recipe": "金企鹅兑换：[bighead_qbi]×16",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「要好一些，但也就那样。」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「要好一些，但也就那样。」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「要好一些，但也就那样。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_czflw"
      ],
      "tags": [
        "工具",
        "缚灵网"
      ],
      "tech": "金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_czflw",
      "name": "草制缚灵网",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_czflw.png",
      "summary": "粗制滥造，凑合着用吧！",
      "recipe": "金企鹅兑换：[bighead_qbi]×4",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「粗制滥造，凑合着用吧！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「粗制滥造，凑合着用吧！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「粗制滥造，凑合着用吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_flw"
      ],
      "tags": [
        "工具",
        "缚灵网"
      ],
      "tech": "金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_qyq",
      "name": "琦玉器",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_qyq.png",
      "summary": "得天独厚！",
      "recipe": "辉煌铁匠铺：月亮碎片×10 + [bighead_ylss]×2；金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "胖头鱼：「非凡品，属于sss+！（拿它刷东西啊！）」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「好用就行，我不挑！」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ylry"
      ],
      "tags": [
        "工具",
        "琦玉器"
      ],
      "tech": "辉煌铁匠铺 / 金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_scrolls",
      "name": "浮生卷轴",
      "category": "tool",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_scrolls.png",
      "summary": "浮光跃金，静影沉璧",
      "recipe": "无需科技；胖头鱼制作：莎草纸×10 + 橙宝石×3 + 花瓣×5",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「浮光跃金，静影沉璧」"
        }
      ],
      "related": [
        "pangtouyu"
      ],
      "tags": [
        "工具",
        "卷轴"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_hy",
      "name": "恒辉",
      "category": "tool",
      "owner": "common",
      "image": "assets/img/items/bighead_hy.png",
      "summary": "萤烛之辉",
      "recipe": "无需科技：木头×10 + 黄宝石×1 + 萤火虫×1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「萤烛之辉」"
        },
        {
          "type": "text",
          "content": "启用时，附近40距离内的温度被限制为30度。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_xqlj"
      ],
      "tags": [
        "工具",
        "照明"
      ],
      "tech": "无需科技",
      "source": "v4.8"
    },
    {
      "id": "bighead_llxz",
      "name": "连理木箱",
      "category": "structure",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_llxz.png",
      "summary": "在天愿作比翼鸟，在地愿为连理枝。",
      "recipe": "无需科技；胖头鱼制作：告密的心×2 + 活木×2",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「在天愿作比翼鸟，在地愿为连理枝。」"
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
      "source": "v4.8"
    },
    {
      "id": "bb_cct",
      "name": "春朝亭",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_cct.png",
      "summary": "是那只蝴蝶的家吗？",
      "recipe": "炼金引擎：蝴蝶×10 + 活木×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「是那只蝴蝶的家吗？」"
        }
      ],
      "related": [
        "bb_cwd"
      ],
      "tags": [
        "建筑",
        "亭台"
      ],
      "tech": "炼金引擎",
      "source": "v4.8"
    },
    {
      "id": "bb_hhlct",
      "name": "黄花梨茶台",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bb_hhlct.png",
      "summary": "开饭啦！",
      "recipe": "炼金引擎：烹饪指南×1 + 活木×3 + 木头×10 + 月光玻璃斧×1 + 黄金斧头×1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「开饭啦！」"
        }
      ],
      "related": [
        "bb_cct"
      ],
      "tags": [
        "建筑",
        "茶台",
        "食物"
      ],
      "tech": "炼金引擎",
      "source": "v4.8"
    },
    {
      "id": "bighead_sucookpot_item",
      "name": "芙蓉石蟠螭耳盖炉",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bighead_sucookpot_item.png",
      "recipe": "无需科技：红宝石×1 + 月亮碎片×6",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「芙蓉石蟠螭耳盖炉」"
        },
        {
          "type": "text",
          "content": "通用检查：「芙蓉石蟠螭耳盖炉是清乾隆时期的玉雕作品，现藏于南京博物院。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_hy"
      ],
      "tags": [
        "建筑",
        "锅具",
        "食物"
      ],
      "summary": "芙蓉石蟠螭耳盖炉",
      "tech": "无需科技",
      "source": "v4.8"
    },
    {
      "id": "bighead_ybhz",
      "name": "月饼盒子",
      "category": "structure",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bighead_ybhz.png",
      "summary": "可以拿来装月饼",
      "recipe": "炼金引擎；高脚鸟制作：活木×10 + 唤星者魔杖×1；金企鹅兑换：[bighead_qbi]×49",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「里面会有月饼吗」"
        },
        {
          "type": "text",
          "content": "可用活木×10与唤星者魔杖×1制作，制作角色为高脚鸟；也可在金企鹅处用[[Q币]]兑换。"
        },
        {
          "type": "text",
          "content": "满月时生成8种基础月饼，并从胖头鱼、高脚鸟、冷暴力、喵大仙四种隐藏款中随机生成一种。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ywyb"
      ],
      "tags": [
        "建筑",
        "容器",
        "月饼"
      ],
      "tech": "炼金引擎；高脚鸟制作 / 金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_xqlj",
      "name": "玄清灵鉴",
      "category": "structure",
      "owner": "common",
      "image": "assets/img/items/bighead_xqlj.png",
      "summary": "像是一个古老的器物！",
      "recipe": "天体祭坛：月亮碎片×10 + 绿宝石×1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "胖头鱼：「用着不错。」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「她会的挺多啊。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_hy"
      ],
      "tags": [
        "建筑",
        "器物"
      ],
      "tech": "天体祭坛",
      "source": "v4.8"
    },
    {
      "id": "bb_cm",
      "name": "草莓",
      "category": "food",
      "owner": "common",
      "image": "assets/img/items/bb_cm.png",
      "recipe": "",
      "detail_blocks": [],
      "related": [
        "dug_bb_cmbush"
      ],
      "tags": [
        "食物",
        "草莓",
        "水果"
      ],
      "source": "v4.8"
    },
    {
      "id": "bighead_cmgt",
      "name": "草莓罐头",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmgt.png",
      "recipe": "烹饪条件：草莓×至少1；蜂蜜×至少1；冰×至少2",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命50、饥饿30、理智0。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bb_cm"
      ],
      "tags": [
        "食物",
        "草莓"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_cmklb",
      "name": "草莓可丽饼",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmklb.png",
      "recipe": "烹饪条件：草莓×至少1；黄油×至少1；蜂蜜×至少1；伏特羊奶×至少1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命150、饥饿100、理智150。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bb_cm"
      ],
      "tags": [
        "食物",
        "草莓"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_cmrl",
      "name": "草莓软酪",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_cmrl.png",
      "recipe": "烹饪条件：草莓×至少1；黄油×至少2；不能加入蜂蜜",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命200、饥饿100、理智150。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bb_cm"
      ],
      "tags": [
        "食物",
        "草莓"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_fmss",
      "name": "蜂蜜酥山",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_fmss.png",
      "recipe": "烹饪条件：蜂蜜×至少2；冰×至少2",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命15、饥饿40、理智30。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ths"
      ],
      "tags": [
        "食物",
        "甜点"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_sgbql",
      "name": "双果冰淇淋",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sgbql.png",
      "recipe": "烹饪条件：火龙果×至少1；无花果×至少1；冰×至少2",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命50、饥饿60、理智50。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_snbql"
      ],
      "tags": [
        "食物",
        "冰淇淋"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_sgdg",
      "name": "水果蛋糕",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sgdg.png",
      "recipe": "烹饪条件：水果度≥2；蛋度≥1；蔬菜度≥1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命60、饥饿100、理智40。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_sgbql"
      ],
      "tags": [
        "食物",
        "蛋糕"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_snbql",
      "name": "酸奶冰淇淋",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_snbql.png",
      "recipe": "烹饪条件：伏特羊奶×至少1；冰×至少3",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命20、饥饿40、理智40。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_sgbql"
      ],
      "tags": [
        "食物",
        "冰淇淋"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_ths",
      "name": "桃花酥",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ths.png",
      "recipe": "烹饪条件：蔬菜度≥2；花瓣×至少2",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命20、饥饿70、理智30。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_fmss"
      ],
      "tags": [
        "食物",
        "甜点"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_xgss",
      "name": "西瓜酥山",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xgss.png",
      "recipe": "烹饪条件：西瓜×至少2；冰×至少2",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命40、饥饿50、理智50。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ths"
      ],
      "tags": [
        "食物",
        "甜点"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
    },
    {
      "id": "bighead_xrzslz",
      "name": "仙人掌石榴汁",
      "category": "food",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_xrzslz.png",
      "recipe": "烹饪条件：石榴×至少2；冰×至少1；仙人掌肉×至少1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "食用基础回复：生命60、饥饿60、理智40。角色饮食规则与食物效果会影响实际收益。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_snbql"
      ],
      "tags": [
        "食物",
        "饮品"
      ],
      "source": "v4.8",
      "tech": "烹饪锅"
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
        {
          "type": "text",
          "content": "通用检查：「就没别的味的了吗！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「凉飕飕的！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「呕~」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「神清气爽~」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「我胱乃天庭之主！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「让我来看看怎么个事~」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「巴适！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「好甜呀！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「鱼哥联名款！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「鸟弟联名款！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「冷暴力联名款！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「喵大仙联名款！」"
        },
        {
          "type": "text",
          "content": "食用基础回复：生命30、饥饿50、理智10。角色饮食规则与食物效果会影响实际收益。"
        },
        {
          "type": "text",
          "content": "此月饼不通过普通烹饪锅配方制作，可从月饼盒等模组机制获得。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_ybhz"
      ],
      "tags": [
        "食物",
        "月饼",
        "中秋",
        "联名"
      ],
      "source": "v4.8"
    },
    {
      "id": "dug_bb_cmbush",
      "name": "草莓丛",
      "category": "crop",
      "owner": "common",
      "image": "assets/img/items/dug_bb_cmbush.png",
      "recipe": "无需科技；胖头鱼制作：便便桶×1 + 松果×1",
      "detail_blocks": [],
      "related": [
        "bb_cm"
      ],
      "tags": [
        "作物",
        "草莓"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_wcs",
      "name": "七彩石",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_wcs.png",
      "summary": "幻光七色，天地灵生。",
      "recipe": "炼金引擎；高脚鸟制作：红宝石×1 + 蓝宝石×1 + 紫宝石×1 + 橙宝石×1 + 黄宝石×1 + 绿宝石×1；炼金引擎；高脚鸟制作：彩虹宝石×1",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「幻光七色，天地灵生。」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits"
      ],
      "tags": [
        "材料",
        "七彩石"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_ylss",
      "name": "蕴灵神石",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_ylss.png",
      "recipe": "",
      "detail_blocks": [],
      "related": [
        "pangtouyu",
        "mech_lingqi"
      ],
      "tags": [
        "材料",
        "灵石"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「沐月色而生，携净意而行。」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「沐月色而生，携净意而行。」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「沐月色而生，携净意而行。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_buran"
      ],
      "tags": [
        "材料",
        "莲子"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「雷纹能量稳定，本源刻印完整。」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「雷纹能量稳定，本源刻印完整。」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「雷纹能量稳定，本源刻印完整。」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_wcs"
      ],
      "tags": [
        "材料",
        "符文"
      ],
      "source": "v4.8"
    },
    {
      "id": "bighead_soul",
      "name": "魂魄",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_soul.png",
      "recipe": "",
      "detail_blocks": [],
      "related": [
        "pangtouyu",
        "bb_gaojiaoniao_fh"
      ],
      "tags": [
        "材料",
        "魂魄"
      ],
      "source": "v4.8"
    },
    {
      "id": "bighead_llxz_xz",
      "name": "双鱼玉佩",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_llxz_xz.png",
      "recipe": "",
      "detail_blocks": [],
      "related": [
        "pangtouyu",
        "bighead_llxz"
      ],
      "tags": [
        "材料",
        "玉佩"
      ],
      "source": "v4.8"
    },
    {
      "id": "bighead_qbi",
      "name": "Q币",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_qbi.png",
      "summary": "要充值吗？",
      "recipe": "无需科技：金块×6",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「充值很棒呀」"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_qyq"
      ],
      "tags": [
        "材料",
        "货币",
        "企鹅"
      ],
      "tech": "无需科技",
      "source": "v4.8"
    },
    {
      "id": "bighead_spring_spirit",
      "name": "春之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_spring_spirit.png",
      "summary": "里面蕴含着春天的气息！",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「里面蕴含着春天的气息！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_summer_spirit",
      "name": "夏之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_summer_spirit.png",
      "summary": "里面蕴含着夏天的气息！",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「里面蕴含着夏天的气息！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_autumn_spirit",
      "name": "秋之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_autumn_spirit.png",
      "summary": "里面蕴含着秋天的气息！",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「里面蕴含着秋天的气息！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bighead_winter_spirit",
      "name": "冬之灵",
      "category": "material",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_winter_spirit.png",
      "summary": "里面蕴含着冬天的气息！",
      "recipe": "金企鹅兑换：[bighead_qbi]×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「里面蕴含着冬天的气息！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「啧，还是问问她吧！」"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_spirits"
      ],
      "tags": [
        "材料",
        "四季之灵"
      ],
      "tech": "金企鹅兑换",
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_fhd",
      "name": "凤凰蛋",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_fhd.png",
      "summary": "上古之物！",
      "recipe": "炼金引擎；高脚鸟制作：岩浆虫卵×1 + 红宝石×99",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「上古之物！」"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fqh"
      ],
      "tags": [
        "材料",
        "凤凰",
        "蛋"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_cmyh",
      "name": "重明遗骨",
      "category": "material",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_cmyh.png",
      "summary": "形似鸡，鸣如凤，眼双瞳，唤重明。",
      "recipe": "炼金引擎；高脚鸟制作：[bb_gaojiaoniao_bzmgt]×8",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「形似鸡，鸣如凤，眼双瞳，唤重明。」"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fh"
      ],
      "tags": [
        "材料",
        "重明",
        "遗骨"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v4.8"
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
          "content": "制作栏描述：「不知名骨头」"
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
      "summary": "不知名骨头",
      "source": "v4.8"
    },
    {
      "id": "bighead_buran",
      "name": "不染",
      "category": "weapon",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_buran.png",
      "summary": "看取莲花净，应知不染心。",
      "recipe": "无需科技；胖头鱼制作：亮茄魔杖×1 + 花瓣×40 + 启迪碎片×5",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「看取莲花净，应知不染心。」"
        },
        {
          "type": "text",
          "content": "初始普通攻击1、位面伤害0，武器攻击距离8、最大距离10；通过装备成长提高数值，胖头鱼专用。"
        },
        {
          "type": "text",
          "content": "关联月台生成设置、季节能力与复活效果，详情见[[不染与月台]]。"
        }
      ],
      "related": [
        "pangtouyu",
        "mech_buran",
        "bighead_ymlx"
      ],
      "tags": [
        "其他",
        "莲",
        "月台"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_px_builder",
      "name": "莲令",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_px_builder.png",
      "summary": "这回应该可以听我的了吧！你这憨货！",
      "recipe": "无需科技；高脚鸟制作：理智×50",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「这回应该可以听我的了吧！你这憨货！」"
        }
      ],
      "related": [
        "gaojiaoniao"
      ],
      "tags": [
        "其他",
        "貔貅",
        "莲"
      ],
      "tech": "无需科技；高脚鸟制作",
      "source": "v4.8"
    },
    {
      "id": "bighead_sanbao_builder",
      "name": "何三宝",
      "category": "misc",
      "owner": "pangtouyu",
      "image": "assets/img/items/bighead_sanbao_builder.png",
      "summary": "好可爱的一只猫！",
      "recipe": "无需科技；胖头鱼制作：理智×20",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「好可爱的一只猫！」"
        }
      ],
      "related": [
        "pangtouyu"
      ],
      "tags": [
        "其他",
        "猫",
        "三宝"
      ],
      "tech": "无需科技；胖头鱼制作",
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "通用检查：「它正在忙碌」"
        }
      ],
      "related": [
        "bb_cct"
      ],
      "tags": [
        "其他",
        "蝴蝶",
        "春望"
      ],
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "制作栏描述：「水仙欲上锦鲤去，一夜芙蓉红泪多。」"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fh"
      ],
      "tags": [
        "其他",
        "芙蓉",
        "冥火"
      ],
      "source": "v4.8"
    },
    {
      "id": "bb_gaojiaoniao_lh",
      "name": "轮回",
      "category": "misc",
      "owner": "gaojiaoniao",
      "image": "assets/img/items/bb_gaojiaoniao_lh.png",
      "summary": "纵不入五道，亦有轮回。",
      "recipe": "炼金引擎；高脚鸟制作：红宝石×5 + 金块×20 + 噩梦燃料×10",
      "detail_blocks": [
        {
          "type": "text",
          "content": "制作栏描述：「纵不入五道，亦有轮回。」"
        },
        {
          "type": "text",
          "content": "初始耐久1500，初始普通伤害吸收率20%；可通过装备成长提高防护，详见[[五道]]。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_fh",
        "mech_wudao",
        "mech_shixin"
      ],
      "tags": [
        "其他",
        "轮回"
      ],
      "tech": "炼金引擎；高脚鸟制作",
      "source": "v4.8"
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
        {
          "type": "text",
          "content": "制作栏描述：「混沌初开，圣瞾五灵。」"
        }
      ],
      "related": [
        "gaojiaoniao",
        "bb_gaojiaoniao_lh",
        "mech_wudao",
        "mech_shixin"
      ],
      "tags": [
        "其他",
        "五灵",
        "祭祀"
      ],
      "source": "v4.8"
    }
  ],
  "mechanics": [
    {
      "id": "mech_lingqi",
      "title": "灵气",
      "summary": "初始10点，上限100；累计存活成长与季节装备可继续提高上限。",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "初始灵气10，上限100。默认每60秒回复1点；位于月岛区域额外回复1点，持有不染且其容器内有[[月冕莲心]]时再额外回复2点。"
        },
        {
          "type": "text",
          "content": "累计存活达到设定天数后，基础上限提升至200，默认50天，可设为10／25／50／100天。季节加成另加100上限，因此成长与季节加成同时生效时可达到300。"
        },
        {
          "type": "text",
          "content": "灵气耗尽时，胖头鱼攻击倍率降为0.5；其他时候恢复角色正常攻击倍率。技能消耗见各装备。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_spear",
        "bighead_buran",
        "bighead_ymlx"
      ]
    },
    {
      "id": "mech_jieqi",
      "title": "节气",
      "summary": "制作栏新增「节气」分类，24 节气与四季共 29 项。",
      "image": "assets/img/mechanics/jieqi_tab.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "包内字符串 STRINGS.UI.CRAFTING_FILTERS.BIGHEAD_JQ_TAB = 「节气」，即制作栏上的分类页签（图标 assets/img/mechanics/jieqi_tab.png 即该页签贴图）。"
        },
        {
          "type": "text",
          "content": "每个节气都带一条制作栏描述，内容就是二十四节气的三候原文，例如立春「东风解冻 蛰虫始振 鱼陟负冰」、大寒「鸡始乳 征鸟厉疾 水泽腹坚」。"
        },
        {
          "type": "text",
          "content": "四季另有春季、夏季、秋季、冬季四条，冬季还多一个「冬季(10级)」变体。"
        },
        {
          "type": "text",
          "content": "包内动画：bighead_jqproject_spring / summer / autumn / winter 等，节气名称与三候全部可在「节气」分区逐条查看。"
        },
        {
          "type": "text",
          "content": "春、夏、秋、冬季物品可升级，最高10级。对应四季之灵提供200经验，曼德拉草提供100经验；当前等级升到下一级需要（当前等级+1）×100经验。"
        }
      ],
      "related": [
        "pangtouyu",
        "jq_lc",
        "jq_dz",
        "jq_chun"
      ]
    },
    {
      "id": "mech_spirits",
      "title": "四季之灵",
      "summary": "春之灵、夏之灵、秋之灵、冬之灵，四种蕴含季节气息的能量。",
      "image": "assets/img/items/bighead_spring_spirit.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查（春之灵）：「里面蕴含着春天的气息！」夏、秋、冬三条只换季节名。"
        },
        {
          "type": "text",
          "content": "胖头鱼：「无比纯粹的能量，我要好好想想！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「啧，还是问问她吧！」"
        },
        {
          "type": "text",
          "content": "包内另有 bighead_jqspirit.lua 与 SPIRIT_FX 动画变体；四季投射动画为 bighead_jqproject_spring / summer / autumn / winter。"
        },
        {
          "type": "text",
          "content": "胖头鱼启用季节加成时，可吸收四季之灵恢复50点灵气；能否用蕴灵如意捕捉由模组设置控制。四季之灵也用于制作节气。"
        }
      ],
      "related": [
        "pangtouyu",
        "gaojiaoniao",
        "bighead_spring_spirit",
        "bighead_winter_spirit"
      ]
    },
    {
      "id": "mech_parasite",
      "title": "寄生灵",
      "summary": "寄生桃灵、寄生荷灵、寄生桂灵、寄生梅灵四种，各有 planted / active 两态。",
      "image": "assets/img/mechanics/jisheng_taoling.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "通用检查：「最好不要打扰它吧！」"
        },
        {
          "type": "text",
          "content": "胖头鱼：「万物皆有灵，但是你没我灵！」"
        },
        {
          "type": "text",
          "content": "高脚鸟：「前车之鉴，我还是不要招惹这类东西！」"
        },
        {
          "type": "text",
          "content": "包内动画：bighead_jisheng_taoling / heling / guiling / meiling，另有对应地图图标。"
        }
      ],
      "related": [
        "pangtouyu",
        "gaojiaoniao"
      ]
    },
    {
      "id": "mech_buran",
      "title": "不染与月台",
      "summary": "月台附近每个世界生成一次，可通过设置关闭。",
      "image": "assets/img/items/bighead_buran.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "月台生成默认开启，可在模组设置中关闭。[[不染]]也有胖头鱼专属制作配方。"
        },
        {
          "type": "text",
          "content": "不染共有5种已注册的装备皮肤，外观可在「外观」分区查看。"
        }
      ],
      "related": [
        "pangtouyu",
        "bighead_buran"
      ]
    },
    {
      "id": "mech_shixin",
      "title": "噬心",
      "summary": "高脚鸟的成长与风险机制：天数、理智、死亡及战斗都会改变体验。",
      "image": "assets/img/items/bb_gaojiaoniao_gjsh.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "初始1点，上限100。活着时每天增加1点；日结算时理智低于50%，则每天增加3点。击杀龙蝇增加1点。"
        },
        {
          "type": "text",
          "content": "五道未圆满时，死亡会使噬心低于76的角色增加5点，否则减少2点；超过25／50／75点时，分别每分钟损失20／30／60生命。"
        },
        {
          "type": "text",
          "content": "超过50点且五道未圆满时，食物治疗受到限制；超过75点且未圆满时，移速另乘0.4。"
        },
        {
          "type": "text",
          "content": "超过25点后攻击有机会召唤残影或心魔：残影真实伤害为当前世界天数×设置倍率，心魔为当前噬心×设置倍率。五道圆满后心魔转而攻击敌人。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_wudao"
      ]
    },
    {
      "id": "mech_wudao",
      "title": "五道",
      "summary": "神道、人道、畜生道、恶鬼道、地狱道，解锁后提升角色能力。",
      "image": "assets/img/items/bb_gaojiaoniao_lh.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "初始领悟神道。畜生道增加生命上限50，人道增加理智上限50，恶鬼道增加饥饿上限50；五道圆满后的三维上限为生命200、理智150、饥饿250。"
        },
        {
          "type": "text",
          "content": "畜生道：击杀生物有概率领悟，钢羊50%、考拉象20%、史诗或首领5%、其他符合条件的生物0.1%。恶鬼道通过饥饿死亡领悟；噬心达到100解锁地狱道。"
        },
        {
          "type": "text",
          "content": "人道：手持月岩雕像，对玩家骸骨执行「参悟人道」，消耗一份月岩雕像。神道在初始时已领悟。"
        },
        {
          "type": "text",
          "content": "五道圆满后解除噬心的持续损血、食物治疗限制与移速惩罚，并改变心魔攻击目标。"
        }
      ],
      "related": [
        "gaojiaoniao",
        "mech_shixin",
        "bb_gaojiaoniao_lh"
      ]
    },
    {
      "id": "mech_gardening",
      "title": "繁花园艺",
      "summary": "以繁花施肥、采集、催熟，并把同类植物嫁接到一起。",
      "image": "assets/img/mechanics/fanhua_graft.png",
      "detail_blocks": [
        {
          "type": "text",
          "content": "胖头鱼装备[[繁花]]后打开技能菜单，施法距离40。范围施肥消耗10灵气，范围采集不消耗灵气，范围催熟消耗5灵气。"
        },
        {
          "type": "text",
          "content": "施肥与采集半径40；催熟作用于范围内的[[春朝亭]]与蜂箱。嫁接需选择附近的可嫁接植物，并使用对应挖起植物作为材料。"
        },
        {
          "type": "text",
          "content": "嫁接支持草莓丛、树苗、草、浆果丛、香蕉丛、海带、猴尾草等植物。默认同株总株数上限99，可设为50或999；降低设置不会削减已有嫁接。"
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
        "dug_bb_cmbush"
      ]
    }
  ],
  "terrains": [
    {
      "id": "loc_qingxuan",
      "title": "太极青玄阁",
      "summary": "循阶而入，步入太极清玄阁，道韵清幽，尘烦尽散。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "pangtouyu",
        "bb_cct"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "「循阶而入，步入太极清玄阁，道韵清幽，尘烦尽散。」——包内对太极青玄阁的检查台词。"
        },
        {
          "type": "text",
          "content": "阁中的陈设各有名字：鎏金太极铃、太极莲尊、引霄灵藤、鎏角青玄门、银翘古木门、青石楼梯、花盖、藤蔓。"
        },
        {
          "type": "text",
          "content": "青石楼梯：「缓步出阁」。"
        },
        {
          "type": "text",
          "content": "太极青玄阁生成在月岛碎片区域，入口可通往阁内房间。"
        }
      ]
    },
    {
      "id": "loc_hall",
      "title": "阁中厅堂",
      "summary": "玄铃轻鸣，清音涤荡尘绪，循声迈步，进入厅堂之内。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "pangtouyu"
      ],
      "detail_blocks": [
        {
          "type": "text",
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
      "title": "阁主卧房",
      "summary": "合起鎏角青玄门，辞别阁主卧房。",
      "image": "assets/img/terrains/bighead_fishhouse.png",
      "related": [
        "pangtouyu"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "鎏角青玄门：「合起鎏角青玄门，辞别阁主卧房。」"
        },
        {
          "type": "text",
          "content": "银翘古木门：包内台词与鎏角青玄门相同。"
        },
        {
          "type": "text",
          "content": "引霄灵藤：「垂落一丛引霄灵藤，轻触藤蔓，便可循着后方阶梯去往上层阁楼。」"
        }
      ]
    }
  ],
  "seasons": [
    {
      "id": "jq_lc",
      "name": "立春",
      "image": "assets/img/seasons/jq_lc.png",
      "summary": "东风解冻 蛰虫始振 鱼陟负冰",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_ys",
      "name": "雨水",
      "image": "assets/img/seasons/jq_ys.png",
      "summary": "獺祭鱼 鸿雁来 草木萌动",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_lc]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_jz",
      "name": "惊蛰",
      "image": "assets/img/seasons/jq_jz.png",
      "summary": "桃始华 仓庚鸣 鹰化为鸠",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_ys]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_cf",
      "name": "春分",
      "image": "assets/img/seasons/jq_cf.png",
      "summary": "玄鸟至 雷乃发声 始电",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_jz]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_qm",
      "name": "清明",
      "image": "assets/img/seasons/jq_qm.png",
      "summary": "桐始华 田鼠化为驾 虹始见",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_cf]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_gy",
      "name": "谷雨",
      "image": "assets/img/seasons/jq_gy.png",
      "summary": "萍始生 鸣鸠拂其羽 戴胜降于桑",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_spring_spirit]×1 + 花朵金枪鱼×1 + [jq_qm]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_lx",
      "name": "立夏",
      "image": "assets/img/seasons/jq_lx.png",
      "summary": "蝼蟈鸣 蚯蚓岀 王瓜生",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_xm",
      "name": "小满",
      "image": "assets/img/seasons/jq_xm.png",
      "summary": "苦菜秀 靡草死 麦秋生",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_lx]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_mz",
      "name": "芒种",
      "image": "assets/img/seasons/jq_mz.png",
      "summary": "螳螂生 贍始鸣 反舌无声",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_xm]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_xz",
      "name": "夏至",
      "image": "assets/img/seasons/jq_xz.png",
      "summary": "鹿角解 蝉始鸣 半夏生",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_mz]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_xs",
      "name": "小暑",
      "image": "assets/img/seasons/jq_xs.png",
      "summary": "温风至 蟋蟀居辟 鷹始鸷",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_xz]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_ds",
      "name": "大暑",
      "image": "assets/img/seasons/jq_ds.png",
      "summary": "腐草为萤 土润溽暑 大雨时行",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_summer_spirit]×1 + 炽热太阳鱼×1 + [jq_xs]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_lq",
      "name": "立秋",
      "image": "assets/img/seasons/jq_lq.png",
      "summary": "凉风至 白露降 寒蝉鸣",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_cs",
      "name": "处暑",
      "image": "assets/img/seasons/jq_cs.png",
      "summary": "鹰乃祭鸟 天地始肃 禾乃登",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_lq]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_bl",
      "name": "白露",
      "image": "assets/img/seasons/jq_bl.png",
      "summary": "鸿雁来 玄鸟归 群鸟养羞",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_cs]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_qf",
      "name": "秋分",
      "image": "assets/img/seasons/jq_qf.png",
      "summary": "雷始收声 蛰虫培户 水始涸",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_bl]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_hl",
      "name": "寒露",
      "image": "assets/img/seasons/jq_hl.png",
      "summary": "鸿雁来宾 雀入大水为蛤 菊有黄华",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_qf]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_sj",
      "name": "霜降",
      "image": "assets/img/seasons/jq_sj.png",
      "summary": "豺乃祭兽 草木黄落 蛰虫咸伏",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_autumn_spirit]×1 + 落叶比目鱼×1 + [jq_hl]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_ld",
      "name": "立冬",
      "image": "assets/img/seasons/jq_ld.png",
      "summary": "水始冰 地始冻 雉入大水为蜃",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_xx",
      "name": "小雪",
      "image": "assets/img/seasons/jq_xx.png",
      "summary": "虹藏不见 天气腾地气降 闭塞成冬",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_ld]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_dx",
      "name": "大雪",
      "image": "assets/img/seasons/jq_dx.png",
      "summary": "鹃鸥不鸣 虎始交 茘挺生",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_xx]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_dz",
      "name": "冬至",
      "image": "assets/img/seasons/jq_dz.png",
      "summary": "蚯蚓结 麇角解 水泉动",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_dx]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_xh",
      "name": "小寒",
      "image": "assets/img/seasons/jq_xh.png",
      "summary": "雁北乡 鹋始巣 雉始鸲",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_dz]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_dh",
      "name": "大寒",
      "image": "assets/img/seasons/jq_dh.png",
      "summary": "鸡始乳 征鸟厉疾 水泽腹坚",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：[bighead_winter_spirit]×1 + 冰鲷鱼×1 + [jq_xh]×1",
      "tech": "无需科技"
    },
    {
      "id": "jq_chun",
      "name": "春季",
      "image": "assets/img/seasons/jq_chun.png",
      "summary": "春风又绿江南岸，明月何时照我还。",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：花朵金枪鱼×6 + [jq_lc]×1 + [jq_ys]×1 + [jq_jz]×1 + [jq_cf]×1 + [jq_qm]×1 + [jq_gy]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可通过对应四季之灵或曼德拉草升级，最高10级；四季之灵每份200经验，曼德拉草每份100经验。"
        },
        {
          "type": "text",
          "content": "启用春季主动效果时消耗5灵气，使周围40距离内符合条件的植物生长。"
        }
      ]
    },
    {
      "id": "jq_xia",
      "name": "夏季",
      "image": "assets/img/seasons/jq_xia.png",
      "summary": "绿树阴浓夏日长，楼台倒影入池塘。",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：炽热太阳鱼×6 + [jq_lx]×1 + [jq_xm]×1 + [jq_mz]×1 + [jq_xz]×1 + [jq_xs]×1 + [jq_ds]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可通过对应四季之灵或曼德拉草升级，最高10级；四季之灵每份200经验，曼德拉草每份100经验。"
        }
      ]
    },
    {
      "id": "jq_qiu",
      "name": "秋季",
      "image": "assets/img/seasons/jq_qiu.png",
      "summary": "停车坐爱枫林晚，霜叶红于二月花。",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：落叶比目鱼×6 + [jq_lq]×1 + [jq_cs]×1 + [jq_bl]×1 + [jq_qf]×1 + [jq_hl]×1 + [jq_sj]×1",
      "tech": "无需科技",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可通过对应四季之灵或曼德拉草升级，最高10级；四季之灵每份200经验，曼德拉草每份100经验。"
        }
      ]
    },
    {
      "id": "jq_dong",
      "name": "冬季",
      "image": "assets/img/seasons/jq_dong.png",
      "summary": "晚来天欲雪，能饮一杯无？",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "无需科技：冰鲷鱼×6 + [jq_ld]×1 + [jq_xx]×1 + [jq_dx]×1 + [jq_dz]×1 + [jq_xh]×1 + [jq_dh]×1；金企鹅兑换：[bighead_qbi]×50",
      "tech": "无需科技 / 金企鹅兑换",
      "detail_blocks": [
        {
          "type": "text",
          "content": "可通过对应四季之灵或曼德拉草升级，最高10级；四季之灵每份200经验，曼德拉草每份100经验。"
        },
        {
          "type": "text",
          "content": "冬季主动效果可扑灭周围40距离内的火焰与闷烧，并为可保护的植物提供20秒防枯萎保护。"
        }
      ]
    },
    {
      "id": "jq_dong10",
      "name": "冬季(10级)",
      "image": "assets/img/seasons/jq_dong10.png",
      "summary": "晚来天欲雪，能饮一杯无？",
      "related": [
        "pangtouyu",
        "mech_jieqi"
      ],
      "recipe": "金企鹅兑换：[bighead_qbi]×9",
      "tech": "金企鹅兑换"
    }
  ],
  "changelog": [
    {
      "id": "log_4800",
      "title": "v4.8 资料同步",
      "version": "v4.8",
      "date": "2026-10-30",
      "image": "assets/img/items/bighead_fanhua.png",
      "related": [
        "mech_lingqi",
        "mech_shixin",
        "mech_wudao",
        "mech_gardening"
      ],
      "changes": [
        "依据 v4.8 模组包更新角色称号、基础三维、装备属性、制作条件与食物回复。",
        "补充[[噬心]]、[[五道]]、[[繁花园艺]]及灵气成长规则，增加12项模组设置与装备外观图鉴。",
        "重新转换物品、节气、机制与外观贴图，修正图片上下方向。",
        "本日期为 Wiki 资料同步日期；旧版记录保留在下方。"
      ]
    },
    {
      "id": "log_4400",
      "title": "v4.4：站点按包内实装内容建立",
      "image": "assets/img/items/bighead_spear.png",
      "version": "v4.4",
      "date": "2026-10-18",
      "related": [
        "pangtouyu",
        "gaojiaoniao",
        "mech_jieqi",
        "mech_lingqi"
      ],
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
  "relations": {},
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
      "id": "skins",
      "title": "外观",
      "themeClass": "section--paper",
      "rootId": "skins-root"
    },
    {
      "id": "settings",
      "title": "设置",
      "themeClass": "section--ink",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_spear_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_fanhua_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_buran_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_buran_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_buran_skin3",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_buran_skin4",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_back_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_back_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_lh_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_armor_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_armor_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_cmyh_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_cmyh_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_px_skin1",
      "name": "玉桂狗 · 莲令",
      "image": "assets/img/items/bb_gaojiaoniao_px_builder.png",
      "summary": "莲令的装备外观。",
      "related": [
        "bb_gaojiaoniao_px_builder"
      ],
      "detail_blocks": [
        {
          "type": "text",
          "content": "对应装备：[[莲令]]。"
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        },
        {
          "type": "text",
          "content": "包内没有独立的外观图标，此处使用对应召唤物品的图标。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_fh_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_fh_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_fqh_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_fqh_skin2",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_cs_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_gjsh_skin1",
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
        },
        {
          "type": "text",
          "content": "模组已注册的装备外观。"
        }
      ]
    },
    {
      "id": "bighead_buran_skin5",
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
          "content": "此外观有指定用户解锁限制。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_lh_skin2",
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
          "content": "此外观有指定用户解锁限制。"
        }
      ]
    },
    {
      "id": "bighead_back_skin3",
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
          "content": "此外观有指定用户解锁限制。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_cmyh_skin3",
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
          "content": "此外观有指定用户解锁限制。"
        }
      ]
    },
    {
      "id": "bighead_armor_skin3",
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
          "content": "此外观有指定用户解锁限制。"
        }
      ]
    },
    {
      "id": "bb_gaojiaoniao_fqh_skin3",
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
          "content": "此外观有指定用户解锁限制。"
        }
      ]
    }
  ],
  "settings": [
    {
      "id": "config_bb_gaojiaoniao_demon_damage",
      "title": "高脚鸟心魔伤害",
      "summary": "默认：噬心值的100%",
      "image": "assets/img/mechanics/yinyang.svg",
      "detail_blocks": [
        {
          "type": "text",
          "content": "心魔真实伤害为当前噬心值乘以所选倍率。"
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
        "gaojiaoniao"
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
        "gaojiaoniao"
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
          "content": "提速50%为普通移速的1.5倍，提速100%为2倍。"
        },
        {
          "type": "text",
          "content": "可选：提速50% / 提速100%（原版）"
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
          "content": "提速50%为普通移速的1.5倍，提速100%为2倍。"
        },
        {
          "type": "text",
          "content": "可选：提速50% / 提速100%（原版）"
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
        "gaojiaoniao"
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
        "pangtouyu"
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
        "pangtouyu"
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
        }
      ],
      "related": [
        "gaojiaoniao"
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
        "pangtouyu"
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
          "content": "是否在月台附近生成不染，每个世界只生成一次。"
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
        "pangtouyu"
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
          "content": "胖头鱼累计存活达到指定天数后，灵气上限由100提升至200。"
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
        "pangtouyu"
      ]
    }
  ]
};
