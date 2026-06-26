let key_zh_cn = [
    ['block.minecart.stone', '§o石头'],
    ['gtceu.enrichment_infuser', '富集灌注器'],
    ['gtceu.glimmer_collector', '"微光"收集器'],
    ['gtceu.enrichment_chamber', '冶金富集器'],
    ['gtceu.infused_extracter', '富集提取器']
]
let item_js_key_zh_cn = [
    ['stone_hammer', '石锤'],
    ['raw_apothecary', '花药台粗坯'],
    ['the_source_of_the_earth', '泥土之源'],
    ['orundum', '合成玉'],
    ['originium_shard', '源石碎片'],
    ['originium', '至纯源石'],
    ['raw_compressed_fireclay', '定型耐火黏土'],
    ['raw_vacuum_tube', '待抽空气的二极管'],
    ['general_circuit_ulv', 'ULV通用电路'],
    ['general_circuit_lv', 'LV通用电路'],
    ['general_circuit_mv', 'MV通用电路'],
    ['general_circuit_hv', 'HV通用电路'],
    ['general_circuit_ev', 'EV通用电路'],
    ['general_circuit_iv', 'IV通用电路'],
    ['general_circuit_luv', 'LuV通用电路'],
    ['general_circuit_zpm', 'ZPM通用电路'],
    ['general_circuit_uv', 'UV通用电路'],
    ['general_circuit_uhv', 'UHV通用电路'],
    ['general_circuit_uev', 'UEV通用电路'],
    ['general_circuit_uiv', 'UIV通用电路'],
    ['general_circuit_uxv', 'UXV通用电路'],
    ['general_circuit_opv', 'OpV通用电路'],
    ['general_circuit_max', 'MAX通用电路'],
    ['watered_raw_vacuum_tube', '充满水的真空管'],
    ['vaporeon_in_a_bottle', '瓶装雨天'],
    ['sleppy_in_a_bottle', '瓶装困倦'],
    ['sand_storm_in_a_bottle', '瓶装沙暴'],
    ['happiness_in_a_bottle', '瓶装开心'],
    ['glaceon_in_a_bottle', '瓶装冰雪'],
    ['fog_in_a_bottle', '瓶装迷雾'],
    ['fighting_spirit_in_a_bottle', '瓶装斗志'],
    ['fear_in_a_bottle', '瓶装恐惧'],
    ['physics_assembler', '物理组装器'],
    ['wood_ingot', '木锭']
]
let item_ori_key_zh_cn = [
    ['steel_upgrade_smithing_template', '钢升级锻造模板'],
    ['diamond_upgrade_smithing_template', '钻石升级锻造模板']
]
let block_js_key_zh_cn = [
    ['machine_core_1', '原始机器核心'],
    ['machine_core_2', '基础机器核心'],
    ['machine_core_3', '高级机器核心'],
    ['machine_core_4', '精英机器核心'],
    ['machine_core_5', '超级机器核心'],
    ['machine_core_6', '终极机器核心'],
    ['machine_core_7', '觉醒机器核心'],
    ['wood_block', '木块'],
    ['multi_functional_casing', '多功能机器外壳'],
    ['grizzly_chute', '格筛溜槽'],
    ['compress_diamond_block', '压缩钻石块'],
    ['raw_alumina_ceramic_block', '氧化铝陶瓷粗坯']
]
let material_gt_key_zh_cn = [
    ['caminite_brick', '方镁矾'],
    ['infused_alloy', '灌注合金'],
    ['manasteel', '魔力钢'],
    ['enriched_redstone', '富集红石'],
    ['diamond_ore_leachate', '钻石矿石浸出液'],
    ['enriched_diamond', '富集钻石'],
    ['dragon', '龙晶'],
    ['sodium_aluminate', '铝酸钠'],
    ['aluminum_hydroxide', '氢氧化铝'],
    ['alumina', '氧化铝'],
    ['alumina_ceramic', '氧化铝陶瓷'],
    ['sodium_hydroxide_solution', '氢氧化钠溶液']
]
let fluid_js_zh_cn = [
    ['glimmer', '"微光"']
]
let mbd2_key_zh_cn = [
    ['glimmer_collector', '"微光"收集者'],
    ['infused_extracter', '富集提取机']
]
ClientEvents.lang('zh_cn', e => {
    key_zh_cn.forEach(([key, value]) => {
        e.add(key, value)
    })
    item_js_key_zh_cn.forEach(([key, value]) => {
        e.add(`item.kubejs.${key}`, value)
    })
    item_ori_key_zh_cn.forEach(([key, value]) => {
        e.add(`item.oritong.${key}`, value)
    })
    block_js_key_zh_cn.forEach(([key, value]) => {
        e.add(`block.kubejs.${key}`, value)
    })
    material_gt_key_zh_cn.forEach(([key, value]) => {
        e.add(`material.gtceu.${key}`, value)
    })
    fluid_js_zh_cn.forEach(([key, name]) => {
        e.add(`item.oritong.${key}_bucket`, `${name}桶`)
        e.add(`fluid.oritong.${key}`, name)
        e.add(`block.oritong.${key}`, name)
    })
    mbd2_key_zh_cn.forEach(([key, name]) => {
        e.add(`block.mbd2.${key}`, name)
    })
})