ItemEvents.tooltip(e => {
})
//格式[物品, tooltip]
let tooltip_zh_cn = [
    ['kubejs:stone_hammer', '脆弱到不能用来合成机器，只能在工作台里敲碎一些方块'],
    ['mekanism:basic_control_circuit', '§aULV等级'],
    ['kubejs:general_circuit_ulv', 'ULV等级'],
    ['mekanism:advanced_control_circuit', '§cLV级电路'],
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
    ['kubejs:physics_assembler', '在几年后的世界似乎可以将黏在一起的东西变得“物理化”，可惜现在只是一个能帮助太空电梯模块运行的核心硬件'],
    ['avaritia:infinity_elytra', '"§7圣城！请带着无翼的我们乘风而起吧！§r"']
]
ItemEvents.tooltip(e => {
    tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]

        e.add(key, Text.translate('tt.' + key))
    })
})

ClientEvents.lang('zh_cn', e => {
    tooltip_zh_cn.forEach(item => {
        const key = item[0]
        const text = item[1]
        e.add('tt.' + key, text)
    })
})