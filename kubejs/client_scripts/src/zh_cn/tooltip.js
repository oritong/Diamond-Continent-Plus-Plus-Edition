ItemEvents.tooltip(e => {
})
//格式[物品, tooltip]
let tooltip_zh_cn = [
    ['kubejs:stone_hammer', '脆弱到不能用来合成机器，只能在工作台里敲碎一些方块'],
    ['mekanism:basic_control_circuit', '§aULV等级'],
    ['kubejs:general_circuit_ulv', 'ULV等级'],
    ['mekanism:advanced_control_circuit', '§cLV级电路'],
    ['mekanism:elite_control_circuit', '§bMV级电路'],
    ['kubejs:general_circuit_ulv', 'ULV级电路'],
    ['kubejs:general_circuit_lv', 'LV级电路'],
    ['kubejs:general_circuit_mv', 'MV级电路'],
    ['kubejs:general_circuit_hv', 'HV级电路'],
    ['kubejs:general_circuit_ev', 'EV级电路'],
    ['kubejs:general_circuit_iv', 'IV级电路'],
    ['kubejs:general_circuit_luv', 'LuV级电路'],
    ['kubejs:general_circuit_zpm', 'ZPM级电路'],
    ['kubejs:general_circuit_uv', 'UV级电路'],
    ['kubejs:general_circuit_uhv', 'UHV级电路'],
    ['kubejs:general_circuit_uev', 'UEV级电路'],
    ['kubejs:general_circuit_uiv', 'UIV级电路'],
    ['kubejs:general_circuit_uxv', 'UXV级电路'],
    ['kubejs:general_circuit_opv', 'OpV级电路'],
    ['kubejs:general_circuit_max', 'MAX级电路'],
    ['kubejs:physics_assembler', '在几年后的世界似乎可以将黏在一起的东西变得"物理化"，可惜现在只是一个能帮助太空电梯模块运行的核心硬件'],
    ['gtceu:pcb_factory', '通过并行控制仓让机器同时处理多个相同配方。\n可用配方类型：PCB工厂'],
    ['gtceu:hyperdimensional_chemical_plant', '耗时倍数：0.2，耗能倍数：0.4\n按照线圈温度并行，每提高900K并行x2\n此机器以批处理模式运行配方\n仅支持激光仓\n该机器拥有跨配方并行机制\n无损超频\n可用配方类型：大型化学反应釜、化学浸洗机、超级化工厂、PCB工厂'],
    ['gtceu:directional_void_miner', '通过并行控制仓让机器同时处理多个相同配方。\n可用配方类型：定向虚空矿机']
]
let color_tooltip_zh_cn = [
    ['avaritia:infinity_elytra', '"圣城！请带着无翼的我们乘风而起吧！"'],
    ['kubejs:lost_item', '"遗失于时间夹缝的禁忌残响——无相，无名，无记录。任何探知皆为僭越，任何观测皆为诅咒；其内里是连神明都拒写注脚的深渊，唯有无知，方为庇护。"'],
    ['angelring:angel_ring', '以凡铁与欲望铸成的人造伪翼。飞行并非恩赐，而是对重力的叛逃；每升一尺，便向虚空抵押一分灵魂。你以为是征服，实则天空早已为每个僭越者预留了坠落的坐标。']
]
let color_tooltip_added = [
    'superflatcore:super_infinite_water_cover',
    'superflatcore:basic_air_intake_cover',
    'superflatcore:advanced_air_intake_cover',
    'superflatcore:elite_air_intake_cover',
    'superflatcore:ultimate_air_intake_cover',
    'superflatcore:creative_air_intake_cover',
    'superflatcore:configurable_auto_maintenance_hatch',
    'superflatcore:cleaning_configurable_auto_maintenance_hatch',
    'superflatcore:sterile_cleaning_configurable_auto_maintenance_hatch',
    'superflatcore:creative_sterile_cleaning_configurable_auto_maintenance_hatch',
    'superflatcore:uv_1048576a_laser_target_hatch',
    'superflatcore:uhv_1048576a_laser_target_hatch',
    'superflatcore:iv_1048576a_laser_source_hatch',
    'superflatcore:luv_1048576a_laser_source_hatch',
    'superflatcore:zpm_1048576a_laser_source_hatch',
    'superflatcore:uv_1048576a_laser_source_hatch',
    'superflatcore:uhv_1048576a_laser_source_hatch',
    'superflatcore:iv_4194304a_laser_target_hatch',
    'superflatcore:luv_4194304a_laser_target_hatch',
    'superflatcore:hv_energy_input_hatch_64a',
    'superflatcore:ev_energy_input_hatch_64a',
    'superflatcore:iv_energy_input_hatch_64a',
    'superflatcore:luv_energy_input_hatch_64a',
    'superflatcore:zpm_energy_input_hatch_64a',
    'superflatcore:uv_energy_input_hatch_64a',
    'superflatcore:uhv_energy_input_hatch_64a',
    'superflatcore:hv_energy_output_hatch_64a',
    'superflatcore:ev_energy_output_hatch_64a',
    'superflatcore:iv_energy_output_hatch_64a',
    'superflatcore:luv_energy_output_hatch_64a',
    'superflatcore:zpm_energy_output_hatch_64a',
    'superflatcore:uv_energy_output_hatch_64a',
    'superflatcore:uhv_energy_output_hatch_64a',
    'superflatcore:iv_262144a_laser_target_hatch',
    'superflatcore:luv_262144a_laser_target_hatch',
    'superflatcore:zpm_262144a_laser_target_hatch',
    'superflatcore:uv_262144a_laser_target_hatch',
    'superflatcore:uhv_262144a_laser_target_hatch',
    'superflatcore:iv_262144a_laser_source_hatch',
    'superflatcore:luv_262144a_laser_source_hatch',
    'superflatcore:zpm_262144a_laser_source_hatch',
    'superflatcore:uv_262144a_laser_source_hatch',
    'superflatcore:uhv_262144a_laser_source_hatch',
    'superflatcore:iv_1048576a_laser_target_hatch',
    'superflatcore:luv_1048576a_laser_target_hatch',
    'superflatcore:zpm_1048576a_laser_target_hatch',
    'superflatcore:iv_262144a_wireless_laser_source_hatch',
    'superflatcore:luv_262144a_wireless_laser_source_hatch',
    'superflatcore:zpm_262144a_wireless_laser_source_hatch',
    'superflatcore:uv_262144a_wireless_laser_source_hatch',
    'superflatcore:uhv_262144a_wireless_laser_source_hatch',
    'superflatcore:iv_1048576a_wireless_laser_target_hatch',
    'superflatcore:luv_1048576a_wireless_laser_target_hatch',
    'superflatcore:zpm_1048576a_wireless_laser_target_hatch',
    'superflatcore:uv_1048576a_wireless_laser_target_hatch',
    'superflatcore:zpm_4194304a_laser_target_hatch',
    'superflatcore:uv_4194304a_laser_target_hatch',
    'superflatcore:uhv_4194304a_laser_target_hatch',
    'superflatcore:iv_4194304a_laser_source_hatch',
    'superflatcore:luv_4194304a_laser_source_hatch',
    'superflatcore:zpm_4194304a_laser_source_hatch',
    'superflatcore:uv_4194304a_laser_source_hatch',
    'superflatcore:uhv_4194304a_laser_source_hatch',
    'superflatcore:hv_64a_wireless_energy_input_hatch',
    'superflatcore:ev_64a_wireless_energy_input_hatch',
    'superflatcore:iv_64a_wireless_energy_input_hatch',
    'superflatcore:luv_64a_wireless_energy_input_hatch',
    'superflatcore:zpm_64a_wireless_energy_input_hatch',
    'superflatcore:uv_64a_wireless_energy_input_hatch',
    'superflatcore:uhv_64a_wireless_energy_input_hatch',
    'superflatcore:hv_64a_wireless_energy_output_hatch',
    'superflatcore:ev_64a_wireless_energy_output_hatch',
    'superflatcore:iv_64a_wireless_energy_output_hatch',
    'superflatcore:luv_64a_wireless_energy_output_hatch',
    'superflatcore:zpm_64a_wireless_energy_output_hatch',
    'superflatcore:uv_64a_wireless_energy_output_hatch',
    'superflatcore:uhv_64a_wireless_energy_output_hatch',
    'superflatcore:iv_262144a_wireless_laser_target_hatch',
    'superflatcore:luv_262144a_wireless_laser_target_hatch',
    'superflatcore:zpm_262144a_wireless_laser_target_hatch',
    'superflatcore:uv_262144a_wireless_laser_target_hatch',
    'superflatcore:uhv_262144a_wireless_laser_target_hatch',
    'superflatcore:uhv_1048576a_wireless_laser_target_hatch',
    'superflatcore:iv_1048576a_wireless_laser_source_hatch',
    'superflatcore:luv_1048576a_wireless_laser_source_hatch',
    'superflatcore:zpm_1048576a_wireless_laser_source_hatch',
    'superflatcore:uv_1048576a_wireless_laser_source_hatch',
    'superflatcore:uhv_1048576a_wireless_laser_source_hatch',
    'superflatcore:iv_4194304a_wireless_laser_target_hatch',
    'superflatcore:luv_4194304a_wireless_laser_target_hatch',
    'superflatcore:zpm_4194304a_wireless_laser_target_hatch',
    'superflatcore:uv_4194304a_wireless_laser_target_hatch',
    'superflatcore:uhv_4194304a_wireless_laser_target_hatch',
    'superflatcore:iv_4194304a_wireless_laser_source_hatch',
    'superflatcore:luv_4194304a_wireless_laser_source_hatch',
    'superflatcore:zpm_4194304a_wireless_laser_source_hatch',
    'superflatcore:uv_4194304a_wireless_laser_source_hatch',
    'superflatcore:uhv_4194304a_wireless_laser_source_hatch',
    "gtceu:lv_dual_input_hatch",
    "gtceu:mv_dual_input_hatch",
    "gtceu:hv_dual_input_hatch",
    "gtceu:ev_dual_input_hatch",
    "gtceu:iv_dual_input_hatch",
    "gtceu:lv_dual_output_hatch",
    "gtceu:mv_dual_output_hatch",
    "gtceu:hv_dual_output_hatch",
    "gtceu:ev_dual_output_hatch",
    "gtceu:iv_dual_output_hatch",
    'gtceu:pcb_factory',
    'gtceu:hyperdimensional_chemical_plant',
    'gtceu:directional_void_miner'
]
let color_tooltip_modified = [
    'gtceu:iv_parallel_hatch',
    'gtceu:luv_parallel_hatch',
    'gtceu:zpm_parallel_hatch',
    'gtceu:uv_parallel_hatch',
    'expatternprovider:infinity_cell',
    'merequester:requester',
    'ars_nouveau:dominion_wand',
    "gtceu:luv_dual_input_hatch",
    "gtceu:zpm_dual_input_hatch",
    "gtceu:uv_dual_input_hatch",
    "gtceu:uhv_dual_input_hatch",
    "gtceu:luv_dual_output_hatch",
    "gtceu:zpm_dual_output_hatch",
    "gtceu:uv_dual_output_hatch",
    "gtceu:uhv_dual_output_hatch"
]
ItemEvents.tooltip(e => {
    tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]
        const lines = text.split('\n')

        lines.forEach((line, index) => {
            const langKey = 'tt.' + key + (lines.length > 1 ? '.' + index : '')
            e.add(key, Text.translate(langKey))
        })
    })
})

ClientEvents.lang('zh_cn', e => {
    tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]
        const lines = text.split('\n')

        lines.forEach((line, index) => {
            const langKey = 'tt.' + key + (lines.length > 1 ? '.' + index : '')
            e.add(langKey, line)
        })
    })
    color_tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]
        e.add('tt.' + key, text)
    })
    color_tooltip_added.forEach(key => {
        e.add('tt.' + key, '由钻石大陆加豪版添加')
    })
    color_tooltip_modified.forEach(key => {
        e.add('tt.' + key, '由钻石大陆加豪版修改')
    })
})
