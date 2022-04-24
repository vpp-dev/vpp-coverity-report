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
  * this report ran at 24/04/2022 04:50:29
  * source /tmp/report.json mtime is 24/04/2022 04:50:29

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Matthew Smith <mgsmith@netgate.com>:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Mohsin Kazmi <sykazmi@cisco.com>:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249213 in function: cnat_snat_policy_add_pfx, file: /src/plugins/cnat/cnat_snat_policy.c
### Dave Barach <vpp@barachs.net>:
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
  * BUG 249157 in function: dhcp_proxy_to_client_input, file: /src/plugins/dhcp/dhcp4_proxy_node.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 253329 in function: vl_msg_print_trace, file: /src/vlibmemory/vlib_api_cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 249171 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 249187 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 249222 in function: format_cpu_flags, file: /src/vppinfra/cpu.c
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
  * BUG 249206 in function: hash_bytes, file: /src/vppinfra/hash.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249200 in function: vnet_classify_add_del, file: /src/vnet/classify/vnet_classify.c
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 249172 in function: vlib_buffer_free_inline, file: /src/vlib/buffer_funcs.h
  * BUG 199502 in function: vnet_ip_mroute_cmd, file: /src/vnet/ip/lookup.c
  * BUG 253542 in function: send_client_message_start_stop, file: /src/plugins/dhcp/dhcp6_ia_na_client_cp.c
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 253540 in function: send_client_message_start_stop, file: /src/plugins/dhcp/dhcp6_pd_client_cp.c
  * BUG 249164 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
### Unidentified owner:
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 238635 in function: api_ip_punt_redirect_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 253543 in function: worker_handoff_node_fn, file: /src/vnet/handoff.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 249161 in function: ipsecmb_ops_hmac_inline, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249221 in function: noise_consume_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249219 in function: noise_create_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249205 in function: ipsecmb_ops_chacha_poly, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249220 in function: noise_consume_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249188 in function: noise_create_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
### Ole Troan <ot@cisco.com>:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 199502 in function: vnet_ip_mroute_cmd, file: /src/vnet/ip/lookup.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
  * BUG 249195 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 249172 in function: vlib_buffer_free_inline, file: /src/vlib/buffer_funcs.h
  * BUG 249190 in function: rdma_device_input_refill, file: /src/plugins/rdma/input.c
  * BUG 249171 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
  * BUG 249167 in function: rdma_device_legacy_input_refill_additional, file: /src/plugins/rdma/input.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 249186 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Ray Kinsella <mdr@ashroe.eu>:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 253542 in function: send_client_message_start_stop, file: /src/plugins/dhcp/dhcp6_ia_na_client_cp.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 199502 in function: vnet_ip_mroute_cmd, file: /src/vnet/ip/lookup.c
  * BUG 249161 in function: ipsecmb_ops_hmac_inline, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 249205 in function: ipsecmb_ops_chacha_poly, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
  * BUG 249213 in function: cnat_snat_policy_add_pfx, file: /src/plugins/cnat/cnat_snat_policy.c
  * BUG 253540 in function: send_client_message_start_stop, file: /src/plugins/dhcp/dhcp6_pd_client_cp.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249157 in function: dhcp_proxy_to_client_input, file: /src/plugins/dhcp/dhcp4_proxy_node.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 253332 in function: vl_api_lb_add_del_vip_t_handler, file: /src/plugins/lb/api.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Vengada <venggovi@cisco.com>:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 249190 in function: rdma_device_input_refill, file: /src/plugins/rdma/input.c
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
  * BUG 249167 in function: rdma_device_legacy_input_refill_additional, file: /src/plugins/rdma/input.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 249220 in function: noise_consume_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249188 in function: noise_create_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249219 in function: noise_create_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249221 in function: noise_consume_response, file: /src/plugins/wireguard/wireguard_noise.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 249210 in function: BIT_SET, file: /src/plugins/ioam/lib-e2e/ioam_seqno_lib.h
### Florin Coras <fcoras@cisco.com>:
  * BUG 249164 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 249187 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
### Steven Luong <sluong@cisco.com>:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Klement Sekera <klement.sekera@gmail.com>:
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Pfister <ppfister@cisco.com>:
  * BUG 253332 in function: vl_api_lb_add_del_vip_t_handler, file: /src/plugins/lb/api.c


all emails: Artem Glazychev <artem.glazychev@xored.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <klement.sekera@gmail.com>; Matthew Smith <mgsmith@netgate.com>; Mohsin Kazmi <sykazmi@cisco.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pfister <ppfister@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Ray Kinsella <mdr@ashroe.eu>; Steven Luong <sluong@cisco.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Binary API Libraries:
  * BUG 253329 in function: vl_msg_print_trace, file: /src/vlibmemory/vlib_api_cli.c
### Plugin - CNat:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249213 in function: cnat_snat_policy_add_pfx, file: /src/plugins/cnat/cnat_snat_policy.c
### Infrastructure Library:
  * BUG 249222 in function: format_cpu_flags, file: /src/vppinfra/cpu.c
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 249206 in function: hash_bytes, file: /src/vppinfra/hash.c
### Plugin - RDMA (ibverb) driver:
  * BUG 249190 in function: rdma_device_input_refill, file: /src/plugins/rdma/input.c
  * BUG 249167 in function: rdma_device_legacy_input_refill_additional, file: /src/plugins/rdma/input.c
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
### VNET Native Virtio Drivers:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### VNET FIB:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
### Plugin - Load Balancer:
  * BUG 253332 in function: vl_api_lb_add_del_vip_t_handler, file: /src/plugins/lb/api.c
### Plugin - IOAM:
  * BUG 249210 in function: BIT_SET, file: /src/plugins/ioam/lib-e2e/ioam_seqno_lib.h
### SVM Library:
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
### VNET Vhost User Driver:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
### Plugin - NSH:
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
### VNET Interface Common:
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
### Plugin - memif device driver:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
### VNET Classifier:
  * BUG 249200 in function: vnet_classify_add_del, file: /src/vnet/classify/vnet_classify.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
### Plugin - AVF Device driver:
  * BUG 249195 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
  * BUG 249186 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
### VNET IPv4 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 199502 in function: vnet_ip_mroute_cmd, file: /src/vnet/ip/lookup.c
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### VNET IPv6 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 199502 in function: vnet_ip_mroute_cmd, file: /src/vnet/ip/lookup.c
### VNET IPSec:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### VNET Device Drivers:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Plugin - PPPoE:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Plugin - NAT:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Plugin - Simple DNS name resolver:
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
### Plugin - Wireguard:
  * BUG 249188 in function: noise_create_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249221 in function: noise_consume_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249220 in function: noise_consume_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249219 in function: noise_create_initiation, file: /src/plugins/wireguard/wireguard_noise.c
### Plugin - DHCP:
  * BUG 249157 in function: dhcp_proxy_to_client_input, file: /src/plugins/dhcp/dhcp4_proxy_node.c
  * BUG 253542 in function: send_client_message_start_stop, file: /src/plugins/dhcp/dhcp6_ia_na_client_cp.c
  * BUG 253540 in function: send_client_message_start_stop, file: /src/plugins/dhcp/dhcp6_pd_client_cp.c
### Plugin - Unit Tests:
  * BUG 249187 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249164 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
### Vector Library - Buffer Management:
  * BUG 249172 in function: vlib_buffer_free_inline, file: /src/vlib/buffer_funcs.h
  * BUG 249171 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
### Plugin - LISP:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
### Plugin - linux-cp:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Plugin - Crypto - ipsecmb:
  * BUG 249205 in function: ipsecmb_ops_chacha_poly, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249161 in function: ipsecmb_ops_hmac_inline, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
