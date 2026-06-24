//生存 猎手 饕餮 圣徒 工匠 僧侣 溪流 大师
let matter_types = ['earth', 'nether', 'organic', 'ender', 'metallic', 'precious', 'living', 'quantum']
let item_value = [
    ['gtceu:rubber_plate', 20, 2, 8, 10, 25, 17, 21, 10]
]
let slug_plush = [
    ['rainrot:survivor_slug_plush', 'earth', 500],
    ['rainrot:hunter_slug_plush', 'nether', 500],
    ['rainrot:gourmand_slug_plush', 'organic', 500],
    ['rainrot:saint_slug_plush', 'ender', 500],
    ['rainrot:artificer_slug_plush', 'metallic', 500],
    ['rainrot:monk_slug_plush', 'precious', 500],
    ['rainrot:rivulet_slug_plush', 'living', 500],
    ['rainrot:spearmaster_slug_plush', 'quantum', 500]
]
ServerEvents.recipes(e => {
    // 批量数组注册
    item_value.forEach(arr => {
        let item = arr[0]
        let values = arr.slice(1)
        let matter = []
        values.forEach((v, i) => {
            if (v !== 0) {
                matter.push({ type: 'replication:' + matter_types[i], value: parseFloat(v + '.0') })
            }
        })
        e.custom({ type: 'replication:matter_value', input: { item: item }, matter: matter })
    })
    // 特殊物品
    e.custom({
        type: 'replication:matter_value',
        input: { item: 'replication:replica_ingot' },
        matter: matter_types.map(t => ({ type: 'replication:' + t, value: 80.0 }))
    })
    e.custom({
        type: 'replication:matter_value',
        input: { item: 'rainrot:data_pearl' },
        matter: matter_types.map(t => ({ type: 'replication:' + t, value: 175.0 }))
    })
    // 蛞蝓猫玩偶
    slug_plush.forEach(([item, type, value]) => {
        e.custom({
            type: 'replication:matter_value',
            input: { item: item },
            matter: [{ type: 'replication:' + type, value: parseFloat(value + '.0') }]
        })
    })
    e.custom({
        type: 'replication:matter_value',
        input: { item: 'rainrot:watcher_slug_plush' },
        matter: matter_types.map(t => ({ type: 'replication:' + t, value: 1325.0 }))
    })
    e.custom({
        type: 'replication:matter_value',
        input: { item: 'rainrot:inv_slug_plush' },
        matter: matter_types.map(t => ({ type: 'replication:' + t, value: 9999.0 }))
    })
})
ServerEvents.tags('item', e => {
    item_value.forEach(arr => {
        e.add('replication:cant_be_disintegrated', arr[0])
        e.add('replication:skip_calculation', arr[0])
    })
    e.add('replication:cant_be_scanned', 'replication:replica_ingot')
    e.add('replication:cant_be_scanned', 'rainrot:data_pearl')
    slug_plush.forEach(([item]) => {
        e.add('replication:cant_be_scanned', item)
    })
    e.add('replication:cant_be_scanned', 'rainrot:watcher_slug_plush')
    e.add('replication:cant_be_scanned', 'rainrot:inv_slug_plush')
})
