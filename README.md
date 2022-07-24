# vpp-coverity-report
List of results of static analysis on VPP codebase; by-maintainer according to current MAINTAINERS file

Remark 1: if there are multiple maintainers for a given component, then each these owner gets all of the component issues
listed under their name.  This makes the overall table longer and scarier, but allows individual component owners just look
at "their" list.

Remark 2: if you are reading this and are not maintainer, but are curious to help - feel free to create account/login
to http://scan.coverity.com/, and then find the project "VPP" and request the access to it. Then within the list,
locate the given coverity issue by its number. Unfortunately there are no nice hyperlinks to offer because
it does not seem possible...

# Open Issues
## Report timing information
  * this report ran at 24/07/2022 04:53:57
  * source /tmp/report.json mtime is 24/07/2022 04:53:57

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Ole Troan <otroan@employees.org>:
  * BUG 274742 in function: vl_api_flowprobe_interface_add_del_t_handler, file: /src/plugins/flowprobe/flowprobe.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### Ole Troan <ot@cisco.com>:
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Vengada <venggovi@cisco.com>:
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 274739 in function: fill_ip4_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274968 in function: ipsec_fp_ip6_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274748 in function: ipsec_fp_ip4_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274967 in function: fill_ip6_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274746 in function: ipsec_fp_ip4_get_policy_mask, file: /src/vnet/ipsec/ipsec_spd_policy.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 274748 in function: ipsec_fp_ip4_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274967 in function: fill_ip6_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274968 in function: ipsec_fp_ip6_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274746 in function: ipsec_fp_ip4_get_policy_mask, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274739 in function: fill_ip4_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
### Dave Barach <vpp@barachs.net>:
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
  * BUG 274744 in function: vl_msg_api_trace_write_one, file: /src/vlibapi/api_shared.c
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 274736 in function: connect_to_vpp, file: /src/plugins/unittest/api_test.c
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 274736 in function: connect_to_vpp, file: /src/plugins/unittest/api_test.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
### Klement Sekera <klement.sekera@gmail.com>:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
  * BUG 274746 in function: ipsec_fp_ip4_get_policy_mask, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 274967 in function: fill_ip6_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274748 in function: ipsec_fp_ip4_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274968 in function: ipsec_fp_ip6_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274739 in function: fill_ip4_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274735 in function: vl_api_policer_output_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
### Ray Kinsella <mdr@ashroe.eu>:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c


all emails: Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Klement Sekera <klement.sekera@gmail.com>; Matthew Smith <mgsmith@netgate.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Ole Troan <otroan@employees.org>; Radu Nicolau <radu.nicolau@intel.com>; Ray Kinsella <mdr@ashroe.eu>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Binary API Libraries:
  * BUG 274750 in function: vl_msg_api_process_file, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 274744 in function: vl_msg_api_trace_write_one, file: /src/vlibapi/api_shared.c
### VNET FIB:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
### VNET Policer:
  * BUG 274735 in function: vl_api_policer_output_t_handler, file: /src/vnet/policer/policer_api.c
### Plugin - PPPoE:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Plugin - flowprobe:
  * BUG 274742 in function: vl_api_flowprobe_interface_add_del_t_handler, file: /src/plugins/flowprobe/flowprobe.c
### VNET IPSec:
  * BUG 274746 in function: ipsec_fp_ip4_get_policy_mask, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274967 in function: fill_ip6_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 274739 in function: fill_ip4_hash_policy_kv, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 274748 in function: ipsec_fp_ip4_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
  * BUG 274968 in function: ipsec_fp_ip6_out_policy_match_n, file: /src/vnet/ipsec/ipsec_spd_fp_lookup.h
### Infrastructure Library:
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
### Plugin - NAT:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
### Plugin - memif device driver:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### Plugin - linux-cp:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Plugin - Unit Tests:
  * BUG 274736 in function: connect_to_vpp, file: /src/plugins/unittest/api_test.c
### Plugin - NSH:
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
### Plugin - CNat:
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
### Plugin - Simple DNS name resolver:
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
### Plugin - RDMA (ibverb) driver:
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### Plugin - LISP:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
### VNET Interface Common:
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
### VNET Device Drivers:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
### SVM Library:
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
