## Report timing information
  * this report ran at 03/08/2022 05:25:09
  * source /tmp/report.json mtime is 03/08/2022 05:25:09

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Klement Sekera <klement.sekera@gmail.com>:
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Ray Kinsella <mdr@ashroe.eu>:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Ole Troan <otroan@employees.org>:
  * BUG 274742 in function: vl_api_flowprobe_interface_add_del_t_handler, file: /src/plugins/flowprobe/flowprobe.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 274735 in function: vl_api_policer_output_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
### Ole Troan <ot@cisco.com>:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 274736 in function: connect_to_vpp, file: /src/plugins/unittest/api_test.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### Dave Barach <vpp@barachs.net>:
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 274736 in function: connect_to_vpp, file: /src/plugins/unittest/api_test.c
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 274744 in function: vl_msg_api_trace_write_one, file: /src/vlibapi/api_shared.c
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Vengada <venggovi@cisco.com>:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c


all emails: Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Klement Sekera <klement.sekera@gmail.com>; Matthew Smith <mgsmith@netgate.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Ole Troan <otroan@employees.org>; Radu Nicolau <radu.nicolau@intel.com>; Ray Kinsella <mdr@ashroe.eu>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Plugin - NSH:
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
### Plugin - PPPoE:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### VNET Policer:
  * BUG 274735 in function: vl_api_policer_output_t_handler, file: /src/vnet/policer/policer_api.c
### Plugin - NAT:
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Plugin - linux-cp:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Binary API Libraries:
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 274744 in function: vl_msg_api_trace_write_one, file: /src/vlibapi/api_shared.c
### VNET FIB:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
### VNET Device Drivers:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
### Infrastructure Library:
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
### Plugin - Simple DNS name resolver:
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
### Plugin - memif device driver:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
### Plugin - Unit Tests:
  * BUG 274736 in function: connect_to_vpp, file: /src/plugins/unittest/api_test.c
### VNET IPSec:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### VNET Classifier:
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Plugin - CNat:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
### Plugin - flowprobe:
  * BUG 274742 in function: vl_api_flowprobe_interface_add_del_t_handler, file: /src/plugins/flowprobe/flowprobe.c
### Plugin - RDMA (ibverb) driver:
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### VNET Interface Common:
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
### Plugin - LISP:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
### VNET Ethernet:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### SVM Library:
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
