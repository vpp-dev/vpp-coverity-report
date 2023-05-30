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
  * this report ran at 30/05/2023 04:30:29
  * source /tmp/report.json mtime is 30/05/2023 04:30:29

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
### Dave Barach <vpp@barachs.net>:
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 313637 in function: elog_write_file, file: /src/vppinfra/elog.h
  * BUG 300152 in function: vl_socket_read_ready, file: /src/vlibmemory/socket_api.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 313636 in function: elog_write_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 313632 in function: test_clib_compress_u64, file: /src/vppinfra/test/compress.c
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 314879 in function: vl_socket_client_read_internal, file: /src/vlibmemory/socket_client.c
  * BUG 313652 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 313631 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Mohammed Hawari <mohammed@hawari.fr>:
  * BUG 314877 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
  * BUG 313639 in function: ldp_epoll_pwait_eventfd, file: /src/vcl/ldp.c
### Dave Wallace <dwallacelf@gmail.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Ole Troan <ot@cisco.com>:
  * BUG 313630 in function: stat_segment_index_to_name_r, file: /src/vpp-api/client/stat_client.c
  * BUG 314881 in function: Event_registration, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 314878 in function: Request, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
  * BUG 314880 in function: Dump, file: /src/vpp-api/vapi/vapi.hpp
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 314882 in function: lookup_dpo_ip6_inline, file: /src/vnet/dpo/lookup_dpo.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 314877 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Aloys Augustin <aloaugus@cisco.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Unidentified owner:
  * BUG 313642 in function: api_sr_policies_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/srv6/sr.api_test2.c
  * BUG 316074 in function: vl_api_trace_v2_dump_t_handler, file: /src/plugins/tracedump/tracedump.c
### Vengada <venggovi@cisco.com>:
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c


all emails: Aloys Augustin <aloaugus@cisco.com>; Artem Glazychev <artem.glazychev@xored.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Dave Wallace <dwallacelf@gmail.com>; Fan Zhang <roy.fan.zhang@intel.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Mohammed Hawari <mohammed@hawari.fr>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Paul Atkins <patkins@graphiant.com>; Radu Nicolau <radu.nicolau@intel.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Plugin - DPDK:
  * BUG 314877 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Plugin - Host Stack Applications:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### VNET IPv4 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VPP Comms Library:
  * BUG 313639 in function: ldp_epoll_pwait_eventfd, file: /src/vcl/ldp.c
### VNET Policer:
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
### Plugin - IOAM:
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
### Infrastructure Library:
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 313636 in function: elog_write_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 313632 in function: test_clib_compress_u64, file: /src/vppinfra/test/compress.c
  * BUG 313637 in function: elog_write_file, file: /src/vppinfra/elog.h
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
### Plugin - NSH:
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
### Binary API Compiler for C and C++:
  * BUG 314880 in function: Dump, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 314881 in function: Event_registration, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 314878 in function: Request, file: /src/vpp-api/vapi/vapi.hpp
### VNET IPSec:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
### VNET Classifier:
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Vector Library:
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
### Binary API Libraries:
  * BUG 314879 in function: vl_socket_client_read_internal, file: /src/vlibmemory/socket_client.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
  * BUG 300152 in function: vl_socket_read_ready, file: /src/vlibmemory/socket_api.c
### Plugin - Wireguard:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Statistics Segment:
  * BUG 313630 in function: stat_segment_index_to_name_r, file: /src/vpp-api/client/stat_client.c
### VNET FIB:
  * BUG 314882 in function: lookup_dpo_ip6_inline, file: /src/vnet/dpo/lookup_dpo.c
### VNET Interface Common:
  * BUG 313652 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313631 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
### VNET Ipfix Export:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### VNET IPv6 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
