PlayerEvents.chat(event => {
    let { message, player, server } = event
    if (message != 'c') return
    function getitem(slot) { return player.inventory.getItem(slot) }
    //读背包指定格子物品当配方
    let input = [
        getitem(9).id, getitem(10).id, getitem(11).id,
        getitem(18).id, getitem(19).id, getitem(20).id,
        getitem(27).id, getitem(28).id, getitem(29).id
    ]
    let output = getitem(21)
    //处理合成配方需要的key
    let count = output.count > 1 ? `${output.count}x ` : ''
    let keys = "ABCDEFGHI"
    let dic = { 'minecraft:air': ' ' }
    for (let i in input) {
        if (!(input[i] in dic)) {
            dic[input[i]] = keys[0]
            keys = keys.slice(1)
        }
        input[i] = dic[input[i]]
    }
    let dic2 = {}
    for (let i in dic) {
        if (dic[i] == ' ') continue
        dic2[dic[i]] = i
    }
    //超级字符串拼接
    let str = `e.shaped('${count}${output.id}', [\n    '${input[0] + input[1] + input[2]}',\n    '${input[3] + input[4] + input[5]}',\n    '${input[6] + input[7] + input[8]}'\n], {\n`
    for (let i in dic2) {
        str += `    ${i}: '${dic2[i]}',\n`
    }
    str = str.slice(0, -2) + `\n})`
    player.tell(Text.of('配方已生成，点击复制').hover(str).clickCopy(str))
})
//使用方法
//背包左上的3x3区域会被用于生成配方，3x3右侧一格作为输出
//材材材
//材材材产
//材材材
//然后在聊天栏发c即可生成(点击聊天栏复制代码)

//无序合成 x
PlayerEvents.chat(event => {
    let { message, player, server } = event
    if (message != 'x') return
    function getitem(slot) { return player.inventory.getItem(slot) }

    // 读取3x3网格物品（从快捷栏下方开始）
    let inputSlots = [
        9, 10, 11,   // 第一行
        18, 19, 20,  // 第二行
        27, 28, 29   // 第三行
    ]
    let output = getitem(21)

    // 获取实际物品ID列表（过滤空气）
    let materials = inputSlots
        .map(slot => getitem(slot))
        .filter(item => item.id != 'minecraft:air')
        .map(item => `'${item.id}'`)

    // 生成配方字符串
    let count = output.count > 1 ? `${output.count}x ` : ''
    let recipe = `e.recipes.kubejs.shapeless('${count}${output.id}', [${materials.join(', ')}])`

    // 发送可点击的文本
    player.tell(
        Text.of('配方已生成，点击复制')
            .hover(recipe)
            .clickCopy(recipe)
    )
})

//熔炉 z
PlayerEvents.chat(event => {
    let { message, player } = event
    if (message != 'z') return
    
    function getitem(slot) { return player.inventory.getItem(slot) }

    // 依照你的要求：19号位是输入，21号位是输出
    let input = getitem(19)
    let output = getitem(21)

    // 处理输出数量逻辑（沿用你之前的写法）
    let count = output.count > 1 ? `${output.count}x ` : ''
    
    // 生成你指定的私人口味格式：e.recipes.minecraft.smelting('output', 'input')
    let str = `e.recipes.minecraft.smelting('${count}${output.id}', '${input.id}')`

    // 输出并支持点击复制
    player.tell(Text.of('配方已生成，点击复制').hover(str).clickCopy(str))
})

//背包所有东西排成糖葫芦 q
PlayerEvents.chat(event => {
    let { message, player } = event
    if (message != 'q') return

    let items = []
    // 遍历背包 0 到 35 号槽位
    for (let i = 0; i <= 35; i++) {
        let item = player.inventory.getItem(i)
        // 过滤空格子，只处理有物品的槽位
        if (!item.empty) {
            items.push(`'${item.id}'`)
        }
    }

    // 将数组用 逗号+换行符 拼接成你要求的排版
    let str = items.join(',\n')

    // 取消原消息发送，并发送点击复制提示、
    player.tell(Text.of('物品列表已生成 (0-35)，点击复制').hover(str).clickCopy(str))
})

//锻造台 s
PlayerEvents.chat(event => {
    let { message, player } = event
    if (message != 's') return

    function getitem(slot) { return player.inventory.getItem(slot) }

    let i18 = getitem(18).id
    let i19 = getitem(19).id
    let i20 = getitem(20).id
    let i21 = getitem(21).id

    let str = `e.recipes.minecraft.smithing_transform('${i21}', '${i18}', '${i19}', '${i20}')`

    player.tell(Text.of('配方已生成，点击复制').hover(str).clickCopy(str))
})