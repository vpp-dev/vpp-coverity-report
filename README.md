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
  * this report ran at 28/02/2022 04:45:24
  * source /tmp/report.json mtime is 28/02/2022 04:45:24

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Unidentified owner:
  * BUG 238635 in function: api_ip_punt_redirect_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
### Ole Troan <ot@cisco.com>:
  * BUG 249174 in function: nat64_in2out_unk_proto, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249163 in function: nat64_in2out_unk_proto_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249160 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249216 in function: nat64_in2out_icmp_set_cb, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249203 in function: nat64_in2out_tcp_udp, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249159 in function: nat44_ed_add_lb_static_mapping, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249193 in function: nat64_in2out_tcp_udp_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 249210 in function: BIT_SET, file: /src/plugins/ioam/lib-e2e/ioam_seqno_lib.h
### Aloys Augustin <aloaugus@cisco.com>:
  * BUG 249488 in function: vts_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_server.c
  * BUG 249183 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249211 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249180 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249176 in function: hts_session_tx_no_zc, file: /src/plugins/hs_apps/http_tps.c
  * BUG 249196 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 249195 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
  * BUG 249323 in function: get_bus_to_sad_mappings, file: /src/plugins/perfmon/intel/bundle/iio_bw.c
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 218379 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 249190 in function: rdma_device_input_refill, file: /src/plugins/rdma/input.c
  * BUG 249186 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
  * BUG 249172 in function: vlib_buffer_free_inline, file: /src/vlib/buffer_funcs.h
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 249324 in function: init_intel_uncore_iio_bw, file: /src/plugins/perfmon/intel/bundle/iio_bw.c
  * BUG 249171 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 249167 in function: rdma_device_legacy_input_refill_additional, file: /src/plugins/rdma/input.c
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 249170 in function: vlib_buffer_main_init, file: /src/vlib/buffer.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 249163 in function: nat64_in2out_unk_proto_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249160 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249174 in function: nat64_in2out_unk_proto, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249159 in function: nat44_ed_add_lb_static_mapping, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249203 in function: nat64_in2out_tcp_udp, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249216 in function: nat64_in2out_icmp_set_cb, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249193 in function: nat64_in2out_tcp_udp_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
### Klement Sekera <ksekera@cisco.com>:
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249163 in function: nat64_in2out_unk_proto_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249160 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249159 in function: nat44_ed_add_lb_static_mapping, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249174 in function: nat64_in2out_unk_proto, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249193 in function: nat64_in2out_tcp_udp_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249216 in function: nat64_in2out_icmp_set_cb, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249203 in function: nat64_in2out_tcp_udp, file: /src/plugins/nat/nat64/nat64_in2out.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Vengada <venggovi@cisco.com>:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Steven Luong <sluong@cisco.com>:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
  * BUG 249177 in function: show_int_mode, file: /src/vnet/l2/l2_input.c
### Mohsin Kazmi <sykazmi@cisco.com>:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Mohammed Hawari <mohammed@hawari.fr>:
  * BUG 218379 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 249219 in function: noise_create_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249205 in function: ipsecmb_ops_chacha_poly, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249161 in function: ipsecmb_ops_hmac_inline, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249192 in function: vl_api_wireguard_peer_add_t_handler, file: /src/plugins/wireguard/wireguard_api.c
  * BUG 249188 in function: noise_create_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249221 in function: noise_consume_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249220 in function: noise_consume_initiation, file: /src/plugins/wireguard/wireguard_noise.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 249211 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249196 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249488 in function: vts_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_server.c
  * BUG 249187 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249180 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249183 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249164 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249208 in function: session_open, file: /src/vnet/session/session.c
  * BUG 249176 in function: hts_session_tx_no_zc, file: /src/plugins/hs_apps/http_tps.c
### John Lo <lojultra2020@outlook.com>:
  * BUG 249177 in function: show_int_mode, file: /src/vnet/l2/l2_input.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
  * BUG 249173 in function: macip_create_classify_tables, file: /src/plugins/acl/acl.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 249158 in function: vl_api_ip_dump_t_handler, file: /src/vnet/ip/ip_api.c
### Ray Kinsella <mdr@ashroe.eu>:
  * BUG 249323 in function: get_bus_to_sad_mappings, file: /src/plugins/perfmon/intel/bundle/iio_bw.c
  * BUG 249324 in function: init_intel_uncore_iio_bw, file: /src/plugins/perfmon/intel/bundle/iio_bw.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### Dave Wallace <dwallacelf@gmail.com>:
  * BUG 249196 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249183 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249180 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249211 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249488 in function: vts_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_server.c
  * BUG 249176 in function: hts_session_tx_no_zc, file: /src/plugins/hs_apps/http_tps.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249157 in function: dhcp_proxy_to_client_input, file: /src/plugins/dhcp/dhcp4_proxy_node.c
  * BUG 249205 in function: ipsecmb_ops_chacha_poly, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249161 in function: ipsecmb_ops_hmac_inline, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249182 in function: mpls_label_dpo_create, file: /src/vnet/dpo/mpls_label_dpo.c
  * BUG 249213 in function: cnat_snat_policy_add_pfx, file: /src/plugins/cnat/cnat_snat_policy.c
  * BUG 249166 in function: cnat_translation_stack, file: /src/plugins/cnat/cnat_translation.c
  * BUG 249168 in function: cnat_client_throttle_pool_process, file: /src/plugins/cnat/cnat_client.c
  * BUG 248562 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
  * BUG 249215 in function: want_ip_neighbor_events_reaper, file: /src/vnet/ip-neighbor/ip_neighbor_watch.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249158 in function: vl_api_ip_dump_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 249183 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249196 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249213 in function: cnat_snat_policy_add_pfx, file: /src/plugins/cnat/cnat_snat_policy.c
  * BUG 249488 in function: vts_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_server.c
  * BUG 249168 in function: cnat_client_throttle_pool_process, file: /src/plugins/cnat/cnat_client.c
  * BUG 248562 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249211 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249180 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249166 in function: cnat_translation_stack, file: /src/plugins/cnat/cnat_translation.c
  * BUG 249176 in function: hts_session_tx_no_zc, file: /src/plugins/hs_apps/http_tps.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 249221 in function: noise_consume_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249188 in function: noise_create_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249220 in function: noise_consume_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249219 in function: noise_create_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249192 in function: vl_api_wireguard_peer_add_t_handler, file: /src/plugins/wireguard/wireguard_api.c
### Dave Barach <vpp@barachs.net>:
  * BUG 249191 in function: tw_timer_expire_timers_internal_1t_3w_1024sl_ov, file: /src/vppinfra/tw_timer_template.c
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249181 in function: show_sw_interfaces, file: /src/vnet/interface_cli.c
  * BUG 249157 in function: dhcp_proxy_to_client_input, file: /src/plugins/dhcp/dhcp4_proxy_node.c
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249162 in function: tw_timer_expire_timers_internal_1t_3w_1024sl_ov, file: /src/vppinfra/tw_timer_template.c
  * BUG 249187 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249171 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 249185 in function: show_interface_sec_mac_addr_fn, file: /src/vnet/interface_cli.c
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 249172 in function: vlib_buffer_free_inline, file: /src/vlib/buffer_funcs.h
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 249164 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249222 in function: format_cpu_flags, file: /src/vppinfra/cpu.c
  * BUG 249158 in function: vl_api_ip_dump_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 249170 in function: vlib_buffer_main_init, file: /src/vlib/buffer.c
  * BUG 249206 in function: hash_bytes, file: /src/vppinfra/hash.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 249200 in function: vnet_classify_add_del, file: /src/vnet/classify/vnet_classify.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
  * BUG 249167 in function: rdma_device_legacy_input_refill_additional, file: /src/plugins/rdma/input.c
  * BUG 249190 in function: rdma_device_input_refill, file: /src/plugins/rdma/input.c


all emails: Aloys Augustin <aloaugus@cisco.com>; Andrew Yourtchenko <ayourtch@gmail.com>; Artem Glazychev <artem.glazychev@xored.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Dave Wallace <dwallacelf@gmail.com>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; John Lo <lojultra2020@outlook.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <ksekera@cisco.com>; Matthew Smith <mgsmith@netgate.com>; Mohammed Hawari <mohammed@hawari.fr>; Mohsin Kazmi <sykazmi@cisco.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pablo Camarillo <pcamaril@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Ray Kinsella <mdr@ashroe.eu>; Steven Luong <sluong@cisco.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Plugin - Crypto - ipsecmb:
  * BUG 249205 in function: ipsecmb_ops_chacha_poly, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
  * BUG 249161 in function: ipsecmb_ops_hmac_inline, file: /src/plugins/crypto_ipsecmb/ipsecmb.c
### VNET FIB:
  * BUG 249175 in function: fib_entry_src_get_vft, file: /src/vnet/fib/fib_entry_src.c
  * BUG 249182 in function: mpls_label_dpo_create, file: /src/vnet/dpo/mpls_label_dpo.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
### VNET Interface Common:
  * BUG 249179 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 249185 in function: show_interface_sec_mac_addr_fn, file: /src/vnet/interface_cli.c
  * BUG 249181 in function: show_sw_interfaces, file: /src/vnet/interface_cli.c
### VNET Session Layer:
  * BUG 249208 in function: session_open, file: /src/vnet/session/session.c
### VNET Classifier:
  * BUG 249223 in function: split_and_rehash, file: /src/vnet/classify/vnet_classify.c
  * BUG 249200 in function: vnet_classify_add_del, file: /src/vnet/classify/vnet_classify.c
### Plugin - memif device driver:
  * BUG 249199 in function: memif_device_input_inline, file: /src/plugins/memif/node.c
### VNET IPv6 LPM:
  * BUG 249158 in function: vl_api_ip_dump_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### VNET Segment Routing (IPv6 and MPLS):
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### Plugin - ACL:
  * BUG 249173 in function: macip_create_classify_tables, file: /src/plugins/acl/acl.c
### Plugin - Host Stack Applications:
  * BUG 249211 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249180 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249176 in function: hts_session_tx_no_zc, file: /src/plugins/hs_apps/http_tps.c
  * BUG 249488 in function: vts_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_server.c
  * BUG 249183 in function: vtc_worker_loop, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 249196 in function: vtc_worker_test_setup, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### VNET IP Neighbors:
  * BUG 249215 in function: want_ip_neighbor_events_reaper, file: /src/vnet/ip-neighbor/ip_neighbor_watch.c
### VNET Ethernet:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### SVM Library:
  * BUG 249209 in function: svmdb_local_unserialize_strings, file: /src/svm/svmdb.c
  * BUG 249207 in function: svmdb_local_serialize_strings, file: /src/svm/svmdb.c
### VNET Vhost User Driver:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Plugin - performance counter:
  * BUG 249323 in function: get_bus_to_sad_mappings, file: /src/plugins/perfmon/intel/bundle/iio_bw.c
  * BUG 249324 in function: init_intel_uncore_iio_bw, file: /src/plugins/perfmon/intel/bundle/iio_bw.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### VNET GSO:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Plugin - DPDK:
  * BUG 218379 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Plugin - linux-cp:
  * BUG 216937 in function: lcp_itf_pair_create, file: /src/plugins/linux-cp/lcp_interface.c
### VNET Native Virtio Drivers:
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Plugin - LISP:
  * BUG 249165 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
### Plugin - NAT:
  * BUG 249178 in function: nat44_ed_in2out_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249203 in function: nat64_in2out_tcp_udp, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249174 in function: nat64_in2out_unk_proto, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249163 in function: nat64_in2out_unk_proto_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249160 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249216 in function: nat64_in2out_icmp_set_cb, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249214 in function: nat44_ed_out2in_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
  * BUG 249193 in function: nat64_in2out_tcp_udp_hairpinning, file: /src/plugins/nat/nat64/nat64_in2out.c
  * BUG 249159 in function: nat44_ed_add_lb_static_mapping, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 249194 in function: nat44_ed_in2out_fast_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_in2out.c
  * BUG 249202 in function: nat44_ed_out2in_slow_path_node_fn_inline, file: /src/plugins/nat/nat44-ed/nat44_ed_out2in.c
### Vector Library - Buffer Management:
  * BUG 249170 in function: vlib_buffer_main_init, file: /src/vlib/buffer.c
  * BUG 249171 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 249172 in function: vlib_buffer_free_inline, file: /src/vlib/buffer_funcs.h
### VNET IPv4 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 249158 in function: vl_api_ip_dump_t_handler, file: /src/vnet/ip/ip_api.c
### VNET IPSec:
  * BUG 249204 in function: ipsec_sad_entry_add_v3, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 249212 in function: ipsec_tun_protect_input_inline, file: /src/vnet/ipsec/ipsec_tun_in.c
### Plugin - Unit Tests:
  * BUG 249187 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
  * BUG 249164 in function: build_chain, file: /src/plugins/unittest/test_buffer.c
### Plugin - Wireguard:
  * BUG 249188 in function: noise_create_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249220 in function: noise_consume_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249221 in function: noise_consume_response, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249219 in function: noise_create_initiation, file: /src/plugins/wireguard/wireguard_noise.c
  * BUG 249192 in function: vl_api_wireguard_peer_add_t_handler, file: /src/plugins/wireguard/wireguard_api.c
### VNET L2:
  * BUG 249177 in function: show_int_mode, file: /src/vnet/l2/l2_input.c
### Plugin - Simple DNS name resolver:
  * BUG 249189 in function: vl_api_dns_resolve_name_t_handler, file: /src/plugins/dns/dns.c
  * BUG 249198 in function: vl_api_dns_resolve_ip_t_handler, file: /src/plugins/dns/dns.c
### VNET Device Drivers:
  * BUG 249218 in function: af_packet_device_input_fn, file: /src/vnet/devices/af_packet/node.c
  * BUG 249184 in function: vhost_user_if_input, file: /src/vnet/devices/virtio/vhost_user_input.c
### Plugin - NSH:
  * BUG 249169 in function: vl_api_nsh_add_del_entry_t_handler, file: /src/plugins/nsh/nsh_api.c
  * BUG 249201 in function: vl_api_nsh_add_del_map_t_handler, file: /src/plugins/nsh/nsh_api.c
### Plugin - RDMA (ibverb) driver:
  * BUG 249167 in function: rdma_device_legacy_input_refill_additional, file: /src/plugins/rdma/input.c
  * BUG 249197 in function: format_rdma_bit_flag, file: /src/plugins/rdma/format.c
  * BUG 249190 in function: rdma_device_input_refill, file: /src/plugins/rdma/input.c
### Plugin - AVF Device driver:
  * BUG 249195 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
  * BUG 249186 in function: avf_rxq_refill, file: /src/plugins/avf/input.c
### Infrastructure Library:
  * BUG 249191 in function: tw_timer_expire_timers_internal_1t_3w_1024sl_ov, file: /src/vppinfra/tw_timer_template.c
  * BUG 249206 in function: hash_bytes, file: /src/vppinfra/hash.c
  * BUG 249217 in function: elog_read_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 249162 in function: tw_timer_expire_timers_internal_1t_3w_1024sl_ov, file: /src/vppinfra/tw_timer_template.c
  * BUG 249222 in function: format_cpu_flags, file: /src/vppinfra/cpu.c
### Plugin - CNat:
  * BUG 249213 in function: cnat_snat_policy_add_pfx, file: /src/plugins/cnat/cnat_snat_policy.c
  * BUG 249166 in function: cnat_translation_stack, file: /src/plugins/cnat/cnat_translation.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248562 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 249168 in function: cnat_client_throttle_pool_process, file: /src/plugins/cnat/cnat_client.c
### Plugin - PPPoE:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Plugin - IOAM:
  * BUG 249210 in function: BIT_SET, file: /src/plugins/ioam/lib-e2e/ioam_seqno_lib.h
### Plugin - DHCP:
  * BUG 249157 in function: dhcp_proxy_to_client_input, file: /src/plugins/dhcp/dhcp4_proxy_node.c
