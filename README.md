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
  * this report ran at 05/04/2024 04:32:36
  * source /tmp/report.json mtime is 05/04/2024 04:32:36

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### community vpp-dev@lists.fd.io:
  * BUG 335349 in function: vl_api_geneve_add_del_tunnel_t_handler, file: /src/plugins/geneve/geneve_api.c
  * BUG 335355 in function: vl_api_geneve_add_del_tunnel2_t_handler, file: /src/plugins/geneve/geneve_api.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 358059 in function: vl_api_lcp_itf_pair_get_v2_t_handler, file: /src/plugins/linux-cp/lcp_api.c
### Unidentified owner:
  * BUG 218380 in function: api_ip_route_lookup, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 335351 in function: vac_rx_suspend, file: /src/vpp-api/client/client.c
  * BUG 313642 in function: api_sr_policies_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/srv6/sr.api_test2.c
  * BUG 335365 in function: vac_disconnect, file: /src/vpp-api/client/client.c
  * BUG 335357 in function: api_ip_route_lookup_v2, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 330918 in function: api_gtpu_get_transfer_counts, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/gtpu/gtpu.api_test2.c
  * BUG 335359 in function: vac_timeout_thread_fn, file: /src/vpp-api/client/client.c
  * BUG 335371 in function: vac_rx_thread_fn, file: /src/vpp-api/client/client.c
  * BUG 335358 in function: unformat_tunnel, file: /src/vnet/tunnel/tunnel.c
### Filip Tehlar <ftehlar@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Steven Luong <sluong@cisco.com>:
  * BUG 323122 in function: vl_api_arping_acd_t_handler, file: /src/plugins/arping/arping_api.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Klement Sekera <klement.sekera@gmail.com>:
  * BUG 335362 in function: det44_plugin_enable_disable_command_fn, file: /src/plugins/nat/det44/det44_cli.c
  * BUG 335347 in function: show_bfd, file: /src/vnet/bfd/bfd_cli.c
  * BUG 335368 in function: nat64_plugin_enable_disable_command_fn, file: /src/plugins/nat/nat64/nat64_cli.c
### Vengada <venggovi@cisco.com>:
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 335367 in function: vl_api_gtpu_add_del_tunnel_v2_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 330923 in function: vl_api_gtpu_get_transfer_counts_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335364 in function: vl_api_pppoe_add_del_session_t_handler, file: /src/plugins/pppoe/pppoe_api.c
  * BUG 330921 in function: vl_api_gtpu_add_del_tunnel_v2_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335366 in function: vl_api_gtpu_offload_rx_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335353 in function: vl_api_gtpu_add_del_forward_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335370 in function: vl_api_gtpu_add_del_tunnel_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
  * BUG 330908 in function: vl_api_gtpu_add_del_tunnel_v2_t_handler, file: /src/plugins/gtpu/gtpu_api.c
### Aloys Augustin <aloaugus@cisco.com>:
  * BUG 358073 in function: quic_echo_initiate_qsession_close_no_stream, file: /src/plugins/hs_apps/sapi/vpp_echo_proto_quic.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 334734 in function: vl_api_dev_attach_t_handler, file: /src/vnet/dev/dev_api.c
  * BUG 330913 in function: format_virtchnl_op_req, file: /src/plugins/dev_iavf/virtchnl.c
  * BUG 330914 in function: format_ena_aq_create_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330910 in function: vnet_dev_port_cfg_change, file: /src/vnet/dev/port.c
  * BUG 330926 in function: ena_reg_reset, file: /src/plugins/dev_ena/reg.c
  * BUG 330909 in function: ena_device_input_refill, file: /src/plugins/dev_ena/rx_node.c
  * BUG 330907 in function: ena_txq_deq, file: /src/plugins/dev_ena/tx_node.c
  * BUG 334735 in function: vl_api_dev_create_port_if_t_handler, file: /src/vnet/dev/dev_api.c
  * BUG 330919 in function: iavf_rxq_refill, file: /src/plugins/dev_iavf/rx_node.c
  * BUG 330917 in function: ena_reg_reset, file: /src/plugins/dev_ena/reg.c
  * BUG 330911 in function: format_ena_aq_feat_desc, file: /src/plugins/dev_ena/format_aq.c
  * BUG 335352 in function: format_virtchnl_op_resp, file: /src/plugins/dev_iavf/virtchnl.c
  * BUG 330925 in function: format_ena_aq_destroy_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330922 in function: format_ena_aq_create_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330920 in function: format_ena_aq_create_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330906 in function: iavf_rxq_refill, file: /src/plugins/dev_iavf/rx_node.c
  * BUG 330915 in function: vnet_dev_port_cfg_change, file: /src/vnet/dev/port.c
  * BUG 330924 in function: format_ena_aq_create_cq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 331028 in function: vnet_dev_arg_parse, file: /src/vnet/dev/args.c
  * BUG 330912 in function: ena_device_input_refill, file: /src/plugins/dev_ena/rx_node.c
  * BUG 330916 in function: unformat_flags, file: /src/vnet/dev/format.c
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 358335 in function: lpm_128_add, file: /src/plugins/map/lpm.c
### Tetsuya Murakami <tetsuya.mrk@gmail.com>:
  * BUG 358060 in function: vl_api_sr_mobile_policy_add_t_handler, file: /src/plugins/srv6-mobile/sr_mobile_api.c
  * BUG 358057 in function: vl_api_sr_mobile_localsid_add_del_t_handler, file: /src/plugins/srv6-mobile/sr_mobile_api.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 358073 in function: quic_echo_initiate_qsession_close_no_stream, file: /src/plugins/hs_apps/sapi/vpp_echo_proto_quic.c
  * BUG 322590 in function: cnat_timestamp_alloc, file: /src/plugins/cnat/cnat_inline.h
### Florin Coras <fcoras@cisco.com>:
  * BUG 358058 in function: http_state_wait_server_reply, file: /src/plugins/http/http.c
  * BUG 358073 in function: quic_echo_initiate_qsession_close_no_stream, file: /src/plugins/hs_apps/sapi/vpp_echo_proto_quic.c
### Satoru Matsushima <satoru.matsushima@gmail.com>:
  * BUG 358057 in function: vl_api_sr_mobile_localsid_add_del_t_handler, file: /src/plugins/srv6-mobile/sr_mobile_api.c
  * BUG 358060 in function: vl_api_sr_mobile_policy_add_t_handler, file: /src/plugins/srv6-mobile/sr_mobile_api.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 335368 in function: nat64_plugin_enable_disable_command_fn, file: /src/plugins/nat/nat64/nat64_cli.c
  * BUG 335362 in function: det44_plugin_enable_disable_command_fn, file: /src/plugins/nat/det44/det44_cli.c
### Fan Zhang <fanzhang.oss@gmail.com>:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 335363 in function: svs_route_cli, file: /src/plugins/svs/svs.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 358059 in function: vl_api_lcp_itf_pair_get_v2_t_handler, file: /src/plugins/linux-cp/lcp_api.c
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 322590 in function: cnat_timestamp_alloc, file: /src/plugins/cnat/cnat_inline.h
### Dave Barach <vpp@barachs.net>:
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 335354 in function: svm_region_unlink, file: /src/svm/svm.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
  * BUG 277327 in function: pg_free_edit_group, file: /src/vnet/pg/pg.h
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 335350 in function: vl_api_pg_interface_enable_disable_coalesce_t_handler, file: /src/vnet/pg/pg_api.c
### Ole Troan <ot@cisco.com>:
  * BUG 358066 in function: vapi_sock_send2, file: /src/vpp-api/vapi/vapi.c
  * BUG 358335 in function: lpm_128_add, file: /src/plugins/map/lpm.c
  * BUG 358065 in function: vapi_sockclnt_create_reply_t_handler, file: /src/vpp-api/vapi/vapi.c
  * BUG 358064 in function: vapi_sock_recv_internal, file: /src/vpp-api/vapi/vapi.c
  * BUG 335368 in function: nat64_plugin_enable_disable_command_fn, file: /src/plugins/nat/nat64/nat64_cli.c
  * BUG 358062 in function: vapi_sock_client_send_disconnect, file: /src/vpp-api/vapi/vapi.c
  * BUG 358061 in function: vapi_sock_send, file: /src/vpp-api/vapi/vapi.c
  * BUG 358056 in function: vapi_sock_recv_internal, file: /src/vpp-api/vapi/vapi.c
  * BUG 335362 in function: det44_plugin_enable_disable_command_fn, file: /src/plugins/nat/det44/det44_cli.c
  * BUG 358334 in function: disconnect, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Dave Wallace <dwallacelf@gmail.com>:
  * BUG 358073 in function: quic_echo_initiate_qsession_close_no_stream, file: /src/plugins/hs_apps/sapi/vpp_echo_proto_quic.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 323046 in function: launch_command, file: /src/plugins/fateshare/vpp_fateshare_monitor.c
  * BUG 323360 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
  * BUG 323359 in function: ping_api_send_ping_event, file: /src/plugins/ping/ping_api.c
  * BUG 323358 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
  * BUG 335360 in function: acl_show_aclplugin_tables_fn, file: /src/plugins/acl/acl.c


all emails: Aloys Augustin <aloaugus@cisco.com>; Andrew Yourtchenko <ayourtch@gmail.com>; Artem Glazychev <artem.glazychev@xored.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Dave Wallace <dwallacelf@gmail.com>; Fan Zhang <fanzhang.oss@gmail.com>; Filip Tehlar <ftehlar@cisco.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <klement.sekera@gmail.com>; Matthew Smith <mgsmith@netgate.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Paul Atkins <patkins@graphiant.com>; Radu Nicolau <radu.nicolau@intel.com>; Satoru Matsushima <satoru.matsushima@gmail.com>; Steven Luong <sluong@cisco.com>; Tetsuya Murakami <tetsuya.mrk@gmail.com>; Vengada <venggovi@cisco.com>; community vpp-dev@lists.fd.io


## Per-Component Open Coverity Defects
### Binary API Libraries:
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
### Plugin - ARPing CLI:
  * BUG 323122 in function: vl_api_arping_acd_t_handler, file: /src/plugins/arping/arping_api.c
### Plugin - NSH:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Plugin - Ping:
  * BUG 323359 in function: ping_api_send_ping_event, file: /src/plugins/ping/ping_api.c
  * BUG 323360 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
  * BUG 323358 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
### VNET IPSec:
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
### Plugin - geneve:
  * BUG 335349 in function: vl_api_geneve_add_del_tunnel_t_handler, file: /src/plugins/geneve/geneve_api.c
  * BUG 335355 in function: vl_api_geneve_add_del_tunnel2_t_handler, file: /src/plugins/geneve/geneve_api.c
### Plugin - CNat:
  * BUG 322590 in function: cnat_timestamp_alloc, file: /src/plugins/cnat/cnat_inline.h
### SVM Library:
  * BUG 335354 in function: svm_region_unlink, file: /src/svm/svm.c
### VNET Bidirectional Forwarding Detection (BFD):
  * BUG 335347 in function: show_bfd, file: /src/vnet/bfd/bfd_cli.c
### VNET Interface Common:
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
### Plugin - MAP:
  * BUG 358335 in function: lpm_128_add, file: /src/plugins/map/lpm.c
### Plugin - linux-cp:
  * BUG 358059 in function: vl_api_lcp_itf_pair_get_v2_t_handler, file: /src/plugins/linux-cp/lcp_api.c
### Plugin - Source VRF Select:
  * BUG 335363 in function: svs_route_cli, file: /src/plugins/svs/svs.c
### Infrastructure Library:
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
### Plugin - Internet Key Exchange (IKEv2) Protocol:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Binary API Compiler for C and C++:
  * BUG 358061 in function: vapi_sock_send, file: /src/vpp-api/vapi/vapi.c
  * BUG 358334 in function: disconnect, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 358066 in function: vapi_sock_send2, file: /src/vpp-api/vapi/vapi.c
  * BUG 358056 in function: vapi_sock_recv_internal, file: /src/vpp-api/vapi/vapi.c
  * BUG 358064 in function: vapi_sock_recv_internal, file: /src/vpp-api/vapi/vapi.c
  * BUG 358062 in function: vapi_sock_client_send_disconnect, file: /src/vpp-api/vapi/vapi.c
  * BUG 358065 in function: vapi_sockclnt_create_reply_t_handler, file: /src/vpp-api/vapi/vapi.c
### VNET IPv6 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VNET Ipfix Export:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Plugin - IPv6 Segment Routing Mobile:
  * BUG 358060 in function: vl_api_sr_mobile_policy_add_t_handler, file: /src/plugins/srv6-mobile/sr_mobile_api.c
  * BUG 358057 in function: vl_api_sr_mobile_localsid_add_del_t_handler, file: /src/plugins/srv6-mobile/sr_mobile_api.c
### Plugin - HTTP:
  * BUG 358058 in function: http_state_wait_server_reply, file: /src/plugins/http/http.c
### Plugin - Wireguard:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
### Vector Library:
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
### Plugin - IOAM:
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
### Plugin - Amazon Elastic Network Adapter (ENA) device driver:
  * BUG 330926 in function: ena_reg_reset, file: /src/plugins/dev_ena/reg.c
  * BUG 330917 in function: ena_reg_reset, file: /src/plugins/dev_ena/reg.c
  * BUG 330920 in function: format_ena_aq_create_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330914 in function: format_ena_aq_create_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330911 in function: format_ena_aq_feat_desc, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330909 in function: ena_device_input_refill, file: /src/plugins/dev_ena/rx_node.c
  * BUG 330924 in function: format_ena_aq_create_cq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330907 in function: ena_txq_deq, file: /src/plugins/dev_ena/tx_node.c
  * BUG 330912 in function: ena_device_input_refill, file: /src/plugins/dev_ena/rx_node.c
  * BUG 330925 in function: format_ena_aq_destroy_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
  * BUG 330922 in function: format_ena_aq_create_sq_cmd, file: /src/plugins/dev_ena/format_aq.c
### VNET Policer:
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
### VNET IPv4 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Plugin - GTPU:
  * BUG 335367 in function: vl_api_gtpu_add_del_tunnel_v2_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335370 in function: vl_api_gtpu_add_del_tunnel_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335366 in function: vl_api_gtpu_offload_rx_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 335353 in function: vl_api_gtpu_add_del_forward_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 330923 in function: vl_api_gtpu_get_transfer_counts_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 330908 in function: vl_api_gtpu_add_del_tunnel_v2_t_handler, file: /src/plugins/gtpu/gtpu_api.c
  * BUG 330921 in function: vl_api_gtpu_add_del_tunnel_v2_t_handler, file: /src/plugins/gtpu/gtpu_api.c
### Plugin - Host Stack Applications:
  * BUG 358073 in function: quic_echo_initiate_qsession_close_no_stream, file: /src/plugins/hs_apps/sapi/vpp_echo_proto_quic.c
### Plugin - PPPoE:
  * BUG 335364 in function: vl_api_pppoe_add_del_session_t_handler, file: /src/plugins/pppoe/pppoe_api.c
### Plugin - IAVF Device driver:
  * BUG 330906 in function: iavf_rxq_refill, file: /src/plugins/dev_iavf/rx_node.c
  * BUG 330919 in function: iavf_rxq_refill, file: /src/plugins/dev_iavf/rx_node.c
  * BUG 330913 in function: format_virtchnl_op_req, file: /src/plugins/dev_iavf/virtchnl.c
  * BUG 335352 in function: format_virtchnl_op_resp, file: /src/plugins/dev_iavf/virtchnl.c
### VNET New Device Drivers Infra:
  * BUG 330916 in function: unformat_flags, file: /src/vnet/dev/format.c
  * BUG 334735 in function: vl_api_dev_create_port_if_t_handler, file: /src/vnet/dev/dev_api.c
  * BUG 330915 in function: vnet_dev_port_cfg_change, file: /src/vnet/dev/port.c
  * BUG 330910 in function: vnet_dev_port_cfg_change, file: /src/vnet/dev/port.c
  * BUG 334734 in function: vl_api_dev_attach_t_handler, file: /src/vnet/dev/dev_api.c
  * BUG 331028 in function: vnet_dev_arg_parse, file: /src/vnet/dev/args.c
### Plugin - ACL:
  * BUG 335360 in function: acl_show_aclplugin_tables_fn, file: /src/plugins/acl/acl.c
### Plugin - NAT:
  * BUG 335362 in function: det44_plugin_enable_disable_command_fn, file: /src/plugins/nat/det44/det44_cli.c
  * BUG 335368 in function: nat64_plugin_enable_disable_command_fn, file: /src/plugins/nat/nat64/nat64_cli.c
### VNET Packet Generator:
  * BUG 335350 in function: vl_api_pg_interface_enable_disable_coalesce_t_handler, file: /src/vnet/pg/pg_api.c
  * BUG 277327 in function: pg_free_edit_group, file: /src/vnet/pg/pg.h
### VNET Classifier:
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Plugin - fateshare:
  * BUG 323046 in function: launch_command, file: /src/plugins/fateshare/vpp_fateshare_monitor.c
