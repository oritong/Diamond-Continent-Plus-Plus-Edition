ItemEvents.tooltip(event => {
	let colorfulnames = typeof global !== 'undefined' && global.colorTooltipEntries ? global.colorTooltipEntries : []
	for(let i=0;i<colorfulnames.length;i++){
		let cname=colorfulnames[i];
		let namelines=Component.translatable(cname.key).getString().split("\n");
		event.addAdvanced(cname.id, (item, advanced, text) => {
			let offset=Math.floor(Client.player.age/cname.time)%(cname.nodes.length*cname.length);
			let lineoffset=0;
			for(let i=0;i<namelines.length;i++){
				let namearray=namelines[i].split("");
				let coloredname=[];
				for(let j=0;j<namearray.length;j++){
					let pos=(j+lineoffset+offset)%(cname.nodes.length*cname.length)
					let newcolor=0;
					for(let k=0;k<3;k++){
						newcolor+=(Math.pow(256,2-k)*
						(
							cname.nodes[Math.floor(pos/cname.length)%cname.nodes.length][k]+
							Math.floor(
								((cname.nodes[(Math.floor(pos/cname.length)+1)%cname.nodes.length][k]-
								cname.nodes[Math.floor(pos/cname.length)%cname.nodes.length][k])/cname.length)
								*(pos%cname.length)
							)
						)
						)
					}
					coloredname.push(Text.of(namearray[j]).color(newcolor))
				}
				text.add(coloredname);
				lineoffset+=namearray.length;
			}
		})
	}
})

ItemEvents.tooltip(event => {
	let colorfulnames_static=[
	{
		id:"create:packager",
		name:"由伟大的机械动力之神Simibubi所创造的无需能源可以凭空制造出包裹并将物品放入其中同时又能吞下输入的包裹将包裹化成虚无并将物品放入相邻的指定容器中的人类科技无法解析的神级机器",
		nodes:[[255,255,0],[0,255,255],[255,0,255]],
		length:4,
		time:2
	},
	{
		id:"gtceu:hyperdimensional_chemical_plant",
		name:"超维度等分子化工厂",
		nodes:[[255,255,0],[0,255,255],[255,0,255]],
		length:4,
		time:2
	},
	{
		id:"angelring:angel_ring",
		name:"天使戒指",
		nodes:[[255,255,0],[0,255,255],[255,0,255]],
		length:4,
		time:2
	}	
	]
	for(let i=0;i<colorfulnames_static.length;i++){
		let cname=colorfulnames_static[i];
		event.addAdvanced(cname.id, (item, advanced, text) => {
			let offset=Math.floor(Client.player.age/cname.time)%(cname.nodes.length*cname.length);
			let namearray=cname.name.split("");
			let coloredname=[];
			for(let j=0;j<namearray.length;j++){
				let pos=(j+offset)%(cname.nodes.length*cname.length)
				let newcolor=0;
				for(let k=0;k<3;k++){
					newcolor+=(Math.pow(256,2-k)*
					(
						cname.nodes[Math.floor(pos/cname.length)%cname.nodes.length][k]+
						Math.floor(
							((cname.nodes[(Math.floor(pos/cname.length)+1)%cname.nodes.length][k]-
							cname.nodes[Math.floor(pos/cname.length)%cname.nodes.length][k])/cname.length)
							*(pos%cname.length)
						)
					)
					)
				}
				coloredname.push(Text.of(namearray[j]).color(newcolor))
			}
		text.set(0,coloredname);
		})
	}
})
