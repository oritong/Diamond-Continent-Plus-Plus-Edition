//GPLV3协议分发，代码部分修改自整合包格雷科技休闲版
StartupEvents.registry('block',e=>{
    e.create("multi_functional_casing", "basic").noValidSpawns(true).soundType("metal").mapColor("metal").tagBlock("mineable/pickaxe").tagBlock("forge:mineable/wrench").requiresTool(true).hardness(3)
    e.create("grizzly_chute", "basic").noValidSpawns(true).soundType("metal").mapColor("metal").tagBlock("mineable/pickaxe").requiresTool(true).hardness(3)
    e.create("compress_diamond_block", "cardinal").noValidSpawns(true).soundType("metal").mapColor("metal").tagBlock("mineable/pickaxe").requiresTool(true).hardness(4)
})