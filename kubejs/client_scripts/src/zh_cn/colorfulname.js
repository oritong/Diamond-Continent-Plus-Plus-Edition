ItemEvents.tooltip(event => {
	let colorfulnames={
	"tt.avaritia:infinity_elytra":{id:'avaritia:infinity_elytra',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.kubejs:lost_item":{id:'kubejs:lost_item',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.angelring:angel_ring":{id:'angelring:angel_ring',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:iv_parallel_hatch":{id:'gtceu:iv_parallel_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:luv_parallel_hatch":{id:'gtceu:luv_parallel_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:zpm_parallel_hatch":{id:'gtceu:zpm_parallel_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:uv_parallel_hatch":{id:'gtceu:uv_parallel_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.expatternprovider:infinity_cell":{id:'expatternprovider:infinity_cell',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.ae2:pattern_encoding_terminal":{id:'ae2:pattern_encoding_terminal',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.merequester:requester":{id:'merequester:requester',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:super_infinite_water_cover":{id:'superflatcore:super_infinite_water_cover',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:basic_air_intake_cover":{id:'superflatcore:basic_air_intake_cover',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:advanced_air_intake_cover":{id:'superflatcore:advanced_air_intake_cover',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:elite_air_intake_cover":{id:'superflatcore:elite_air_intake_cover',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:ultimate_air_intake_cover":{id:'superflatcore:ultimate_air_intake_cover',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:creative_air_intake_cover":{id:'superflatcore:creative_air_intake_cover',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:configurable_auto_maintenance_hatch":{id:'superflatcore:configurable_auto_maintenance_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:cleaning_configurable_auto_maintenance_hatch":{id:'superflatcore:cleaning_configurable_auto_maintenance_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:sterile_cleaning_configurable_auto_maintenance_hatch":{id:'superflatcore:sterile_cleaning_configurable_auto_maintenance_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:creative_sterile_cleaning_configurable_auto_maintenance_hatch":{id:'superflatcore:creative_sterile_cleaning_configurable_auto_maintenance_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_1048576a_laser_target_hatch":{id:'superflatcore:uv_1048576a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_1048576a_laser_target_hatch":{id:'superflatcore:uhv_1048576a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_1048576a_laser_source_hatch":{id:'superflatcore:iv_1048576a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_1048576a_laser_source_hatch":{id:'superflatcore:luv_1048576a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_1048576a_laser_source_hatch":{id:'superflatcore:zpm_1048576a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_1048576a_laser_source_hatch":{id:'superflatcore:uv_1048576a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_1048576a_laser_source_hatch":{id:'superflatcore:uhv_1048576a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_4194304a_laser_target_hatch":{id:'superflatcore:iv_4194304a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_4194304a_laser_target_hatch":{id:'superflatcore:luv_4194304a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:hv_energy_input_hatch_64a":{id:'superflatcore:hv_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:ev_energy_input_hatch_64a":{id:'superflatcore:ev_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_energy_input_hatch_64a":{id:'superflatcore:iv_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_energy_input_hatch_64a":{id:'superflatcore:luv_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_energy_input_hatch_64a":{id:'superflatcore:zpm_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_energy_input_hatch_64a":{id:'superflatcore:uv_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_energy_input_hatch_64a":{id:'superflatcore:uhv_energy_input_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:hv_energy_output_hatch_64a":{id:'superflatcore:hv_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:ev_energy_output_hatch_64a":{id:'superflatcore:ev_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_energy_output_hatch_64a":{id:'superflatcore:iv_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_energy_output_hatch_64a":{id:'superflatcore:luv_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_energy_output_hatch_64a":{id:'superflatcore:zpm_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_energy_output_hatch_64a":{id:'superflatcore:uv_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_energy_output_hatch_64a":{id:'superflatcore:uhv_energy_output_hatch_64a',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_262144a_laser_target_hatch":{id:'superflatcore:iv_262144a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_262144a_laser_target_hatch":{id:'superflatcore:luv_262144a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_262144a_laser_target_hatch":{id:'superflatcore:zpm_262144a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_262144a_laser_target_hatch":{id:'superflatcore:uv_262144a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_262144a_laser_target_hatch":{id:'superflatcore:uhv_262144a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_262144a_laser_source_hatch":{id:'superflatcore:iv_262144a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_262144a_laser_source_hatch":{id:'superflatcore:luv_262144a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_262144a_laser_source_hatch":{id:'superflatcore:zpm_262144a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_262144a_laser_source_hatch":{id:'superflatcore:uv_262144a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_262144a_laser_source_hatch":{id:'superflatcore:uhv_262144a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_1048576a_laser_target_hatch":{id:'superflatcore:iv_1048576a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_1048576a_laser_target_hatch":{id:'superflatcore:luv_1048576a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_1048576a_laser_target_hatch":{id:'superflatcore:zpm_1048576a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_262144a_wireless_laser_source_hatch":{id:'superflatcore:iv_262144a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_262144a_wireless_laser_source_hatch":{id:'superflatcore:luv_262144a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_262144a_wireless_laser_source_hatch":{id:'superflatcore:zpm_262144a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_262144a_wireless_laser_source_hatch":{id:'superflatcore:uv_262144a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_262144a_wireless_laser_source_hatch":{id:'superflatcore:uhv_262144a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_1048576a_wireless_laser_target_hatch":{id:'superflatcore:iv_1048576a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_1048576a_wireless_laser_target_hatch":{id:'superflatcore:luv_1048576a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_1048576a_wireless_laser_target_hatch":{id:'superflatcore:zpm_1048576a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_1048576a_wireless_laser_target_hatch":{id:'superflatcore:uv_1048576a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_4194304a_laser_target_hatch":{id:'superflatcore:zpm_4194304a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_4194304a_laser_target_hatch":{id:'superflatcore:uv_4194304a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_4194304a_laser_target_hatch":{id:'superflatcore:uhv_4194304a_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_4194304a_laser_source_hatch":{id:'superflatcore:iv_4194304a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_4194304a_laser_source_hatch":{id:'superflatcore:luv_4194304a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_4194304a_laser_source_hatch":{id:'superflatcore:zpm_4194304a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_4194304a_laser_source_hatch":{id:'superflatcore:uv_4194304a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_4194304a_laser_source_hatch":{id:'superflatcore:uhv_4194304a_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:hv_64a_wireless_energy_input_hatch":{id:'superflatcore:hv_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:ev_64a_wireless_energy_input_hatch":{id:'superflatcore:ev_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_64a_wireless_energy_input_hatch":{id:'superflatcore:iv_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_64a_wireless_energy_input_hatch":{id:'superflatcore:luv_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_64a_wireless_energy_input_hatch":{id:'superflatcore:zpm_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_64a_wireless_energy_input_hatch":{id:'superflatcore:uv_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_64a_wireless_energy_input_hatch":{id:'superflatcore:uhv_64a_wireless_energy_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:hv_64a_wireless_energy_output_hatch":{id:'superflatcore:hv_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:ev_64a_wireless_energy_output_hatch":{id:'superflatcore:ev_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_64a_wireless_energy_output_hatch":{id:'superflatcore:iv_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_64a_wireless_energy_output_hatch":{id:'superflatcore:luv_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_64a_wireless_energy_output_hatch":{id:'superflatcore:zpm_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_64a_wireless_energy_output_hatch":{id:'superflatcore:uv_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_64a_wireless_energy_output_hatch":{id:'superflatcore:uhv_64a_wireless_energy_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_262144a_wireless_laser_target_hatch":{id:'superflatcore:iv_262144a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_262144a_wireless_laser_target_hatch":{id:'superflatcore:luv_262144a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_262144a_wireless_laser_target_hatch":{id:'superflatcore:zpm_262144a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_262144a_wireless_laser_target_hatch":{id:'superflatcore:uv_262144a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_262144a_wireless_laser_target_hatch":{id:'superflatcore:uhv_262144a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_1048576a_wireless_laser_target_hatch":{id:'superflatcore:uhv_1048576a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_1048576a_wireless_laser_source_hatch":{id:'superflatcore:iv_1048576a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_1048576a_wireless_laser_source_hatch":{id:'superflatcore:luv_1048576a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_1048576a_wireless_laser_source_hatch":{id:'superflatcore:zpm_1048576a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_1048576a_wireless_laser_source_hatch":{id:'superflatcore:uv_1048576a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_1048576a_wireless_laser_source_hatch":{id:'superflatcore:uhv_1048576a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_4194304a_wireless_laser_target_hatch":{id:'superflatcore:iv_4194304a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_4194304a_wireless_laser_target_hatch":{id:'superflatcore:luv_4194304a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_4194304a_wireless_laser_target_hatch":{id:'superflatcore:zpm_4194304a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_4194304a_wireless_laser_target_hatch":{id:'superflatcore:uv_4194304a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_4194304a_wireless_laser_target_hatch":{id:'superflatcore:uhv_4194304a_wireless_laser_target_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:iv_4194304a_wireless_laser_source_hatch":{id:'superflatcore:iv_4194304a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:luv_4194304a_wireless_laser_source_hatch":{id:'superflatcore:luv_4194304a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:zpm_4194304a_wireless_laser_source_hatch":{id:'superflatcore:zpm_4194304a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uv_4194304a_wireless_laser_source_hatch":{id:'superflatcore:uv_4194304a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.superflatcore:uhv_4194304a_wireless_laser_source_hatch":{id:'superflatcore:uhv_4194304a_wireless_laser_source_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:lv_dual_input_hatch":{id:'gtceu:lv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:mv_dual_input_hatch":{id:'gtceu:mv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:hv_dual_input_hatch":{id:'gtceu:hv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:ev_dual_input_hatch":{id:'gtceu:ev_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:iv_dual_input_hatch":{id:'gtceu:iv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:lv_dual_output_hatch":{id:'gtceu:lv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:mv_dual_output_hatch":{id:'gtceu:mv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:hv_dual_output_hatch":{id:'gtceu:hv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:ev_dual_output_hatch":{id:'gtceu:ev_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:iv_dual_output_hatch":{id:'gtceu:iv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:pcb_factory":{id:'gtceu:pcb_factory',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:hyperdimensional_chemical_plant":{id:'gtceu:hyperdimensional_chemical_plant',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:directional_void_miner":{id:'gtceu:directional_void_miner',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.ars_nouveau:dominion_wand":{id:'ars_nouveau:dominion_wand',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:luv_dual_input_hatch":{id:'gtceu:luv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:zpm_dual_input_hatch":{id:'gtceu:zpm_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:uv_dual_input_hatch":{id:'gtceu:uv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:uhv_dual_input_hatch":{id:'gtceu:uhv_dual_input_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:luv_dual_output_hatch":{id:'gtceu:luv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:zpm_dual_output_hatch":{id:'gtceu:zpm_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:uv_dual_output_hatch":{id:'gtceu:uv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2},
	"tt.gtceu:uhv_dual_output_hatch":{id:'gtceu:uhv_dual_output_hatch',nodes:[[255,255,0],[0,255,255],[255,0,255]],length:4,time:2}
	}
	for(let key in colorfulnames){
		let cname=colorfulnames[key];
		let namelines=Component.translatable(key).getString().split("\n");
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
