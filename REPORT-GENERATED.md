## Report timing information
  * this report ran at 30/08/2022 05:59:07
  * source /tmp/report.json mtime is 30/08/2022 05:59:07

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Dave Barach <vpp@barachs.net>:
  * BUG 277203 in function: test_dma_command_fn, file: /src/vlib/dma/cli.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Vengada <venggovi@cisco.com>:
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Ole Troan <ot@cisco.com>:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 277203 in function: test_dma_command_fn, file: /src/vlib/dma/cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Klement Sekera <klement.sekera@gmail.com>:
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c


all emails: Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Varga <fivarga@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Klement Sekera <klement.sekera@gmail.com>; Matthew Smith <mgsmith@netgate.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### VNET IPSec:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Plugin - PPPoE:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Plugin - NAT:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Plugin - NSH:
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
### Binary API Libraries:
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
### Plugin - linux-cp:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Plugin - CNat:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
### Vector Library:
  * BUG 277203 in function: test_dma_command_fn, file: /src/vlib/dma/cli.c
### Plugin - memif device driver:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
### VNET FIB:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
### VNET Device Drivers:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
