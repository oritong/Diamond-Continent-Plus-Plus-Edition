ItemEvents.tooltip(event => {
	let colorfulnames={
	"tt.avaritia:infinity_elytra":{id:'avaritia:infinity_elytra',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.kubejs:lost_item":{id:'kubejs:lost_item',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.angelring:angel_ring":{id:'angelring:angel_ring',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2}
	}
	for(let key in colorfulnames){
		let cname=colorfulnames[key];
		let namearray=Component.translatable(key).getString().split("");
		event.addAdvanced(cname.id, (item, advanced, text) => {
			let offset=Math.floor(Client.player.age/cname.time)%(cname.nodes.length*cname.length);
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
		text.set(1,coloredname);
		})
	}
})
