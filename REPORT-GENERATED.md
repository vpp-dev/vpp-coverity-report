## Report timing information
  * this report ran at 31/08/2022 05:58:12
  * source /tmp/report.json mtime is 31/08/2022 05:58:12

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Filip Varga <fivarga@cisco.com>:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Klement Sekera <klement.sekera@gmail.com>:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
### Ole Troan <ot@cisco.com>:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### Dave Barach <vpp@barachs.net>:
  * BUG 277203 in function: test_dma_command_fn, file: /src/vlib/dma/cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 277203 in function: test_dma_command_fn, file: /src/vlib/dma/cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c


all emails: Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Varga <fivarga@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Klement Sekera <klement.sekera@gmail.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>


## Per-Component Open Coverity Defects
### VNET IPSec:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Vector Library:
  * BUG 277203 in function: test_dma_command_fn, file: /src/vlib/dma/cli.c
### Plugin - NAT:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### VNET Device Drivers:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
### Plugin - PPPoE:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Binary API Libraries:
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
### Plugin - CNat:
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Plugin - memif device driver:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### VNET FIB:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
