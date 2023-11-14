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
  * this report ran at 14/11/2023 04:34:37
  * source /tmp/report.json mtime is 14/11/2023 04:34:37

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Fan Zhang <fanzhang.oss@gmail.com>:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 330445 in function: ipsec_sa_anti_replay_window_shift, file: /src/vnet/ipsec/ipsec_sa.h
  * BUG 322716 in function: cryptodev_frame_dequeue_internal, file: /src/plugins/dpdk/cryptodev/cryptodev_op_data_path.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 323046 in function: launch_command, file: /src/plugins/fateshare/vpp_fateshare_monitor.c
  * BUG 323360 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
  * BUG 323359 in function: ping_api_send_ping_event, file: /src/plugins/ping/ping_api.c
  * BUG 323358 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 322716 in function: cryptodev_frame_dequeue_internal, file: /src/plugins/dpdk/cryptodev/cryptodev_op_data_path.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 330445 in function: ipsec_sa_anti_replay_window_shift, file: /src/vnet/ipsec/ipsec_sa.h
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 322590 in function: cnat_timestamp_alloc, file: /src/plugins/cnat/cnat_inline.h
### Damjan Marion <damarion@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
  * BUG 322716 in function: cryptodev_frame_dequeue_internal, file: /src/plugins/dpdk/cryptodev/cryptodev_op_data_path.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Unidentified owner:
  * BUG 313642 in function: api_sr_policies_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/srv6/sr.api_test2.c
### Mohammed Hawari <mohammed@hawari.fr>:
  * BUG 322716 in function: cryptodev_frame_dequeue_internal, file: /src/plugins/dpdk/cryptodev/cryptodev_op_data_path.c
### Filip Tehlar <ftehlar@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Ole Troan <ot@cisco.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
### Steven Luong <sluong@cisco.com>:
  * BUG 323122 in function: vl_api_arping_acd_t_handler, file: /src/plugins/arping/arping_api.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Vengada <venggovi@cisco.com>:
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Dave Barach <vpp@barachs.net>:
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 330445 in function: ipsec_sa_anti_replay_window_shift, file: /src/vnet/ipsec/ipsec_sa.h
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 322590 in function: cnat_timestamp_alloc, file: /src/plugins/cnat/cnat_inline.h
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c


all emails: Andrew Yourtchenko <ayourtch@gmail.com>; Artem Glazychev <artem.glazychev@xored.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <fanzhang.oss@gmail.com>; Filip Tehlar <ftehlar@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Mohammed Hawari <mohammed@hawari.fr>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Paul Atkins <patkins@graphiant.com>; Radu Nicolau <radu.nicolau@intel.com>; Steven Luong <sluong@cisco.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Plugin - Internet Key Exchange (IKEv2) Protocol:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Plugin - CNat:
  * BUG 322590 in function: cnat_timestamp_alloc, file: /src/plugins/cnat/cnat_inline.h
### VNET Policer:
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
### VNET Ipfix Export:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Plugin - fateshare:
  * BUG 323046 in function: launch_command, file: /src/plugins/fateshare/vpp_fateshare_monitor.c
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
### VNET IPv6 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### VNET IPSec:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 330445 in function: ipsec_sa_anti_replay_window_shift, file: /src/vnet/ipsec/ipsec_sa.h
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
### Plugin - ARPing CLI:
  * BUG 323122 in function: vl_api_arping_acd_t_handler, file: /src/plugins/arping/arping_api.c
### Binary API Libraries:
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
### Plugin - DPDK:
  * BUG 322716 in function: cryptodev_frame_dequeue_internal, file: /src/plugins/dpdk/cryptodev/cryptodev_op_data_path.c
### Plugin - Wireguard:
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
### Plugin - Ping:
  * BUG 323358 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
  * BUG 323359 in function: ping_api_send_ping_event, file: /src/plugins/ping/ping_api.c
  * BUG 323360 in function: vl_api_want_ping_finished_events_t_handler, file: /src/plugins/ping/ping_api.c
### Plugin - IOAM:
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
### Plugin - NSH:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Vector Library:
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
### VNET IPv4 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VNET Interface Common:
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
### Infrastructure Library:
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
### Plugin - DPDK Crypto:
  * BUG 322716 in function: cryptodev_frame_dequeue_internal, file: /src/plugins/dpdk/cryptodev/cryptodev_op_data_path.c
