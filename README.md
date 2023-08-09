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
  * this report ran at 09/08/2023 04:29:58
  * source /tmp/report.json mtime is 09/08/2023 04:29:58

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
### Filip Tehlar <ftehlar@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 322372 in function: _vlib_pci_link_speed, file: /src/vlib/pci/pci.c
  * BUG 314877 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 314882 in function: lookup_dpo_ip6_inline, file: /src/vnet/dpo/lookup_dpo.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Aloys Augustin <aloaugus@cisco.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Dave Wallace <dwallacelf@gmail.com>:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
### Dave Barach <vpp@barachs.net>:
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 314879 in function: vl_socket_client_read_internal, file: /src/vlibmemory/socket_client.c
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 313637 in function: elog_write_file, file: /src/vppinfra/elog.h
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 313636 in function: elog_write_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 300152 in function: vl_socket_read_ready, file: /src/vlibmemory/socket_api.c
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 313632 in function: test_clib_compress_u64, file: /src/vppinfra/test/compress.c
### Mohammed Hawari <mohammed@hawari.fr>:
  * BUG 314877 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Unidentified owner:
  * BUG 320945 in function: vl_api_sr_mpls_policy_mod_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/srmpls/sr_mpls.api.h
  * BUG 320944 in function: vl_api_sr_mpls_policy_add_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/srmpls/sr_mpls.api.h
  * BUG 320947 in function: vl_api_sock_init_shm_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vlibmemory/memclnt.api.h
  * BUG 320946 in function: vl_api_acl_interface_set_acl_list_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/acl/acl.api.h
  * BUG 320941 in function: vl_api_acl_interface_list_details_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/acl/acl.api.h
  * BUG 320942 in function: vl_api_acl_interface_etype_whitelist_details_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/acl/acl.api.h
  * BUG 320943 in function: vl_api_macip_acl_interface_list_details_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/acl/acl.api.h
  * BUG 313642 in function: api_sr_policies_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/srv6/sr.api_test2.c
  * BUG 320949 in function: vl_api_ipsec_tunnel_protect_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ipsec/ipsec.api.h
  * BUG 320948 in function: vl_api_acl_interface_set_etype_whitelist_t_endian, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/acl/acl.api.h
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
### Ole Troan <ot@cisco.com>:
  * BUG 314878 in function: Request, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 313630 in function: stat_segment_index_to_name_r, file: /src/vpp-api/client/stat_client.c
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
  * BUG 314881 in function: Event_registration, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 314880 in function: Dump, file: /src/vpp-api/vapi/vapi.hpp
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
### Vengada <venggovi@cisco.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c


all emails: Aloys Augustin <aloaugus@cisco.com>; Artem Glazychev <artem.glazychev@xored.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Dave Wallace <dwallacelf@gmail.com>; Fan Zhang <roy.fan.zhang@intel.com>; Filip Tehlar <ftehlar@cisco.com>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Mohammed Hawari <mohammed@hawari.fr>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Paul Atkins <patkins@graphiant.com>; Radu Nicolau <radu.nicolau@intel.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Infrastructure Library:
  * BUG 313636 in function: elog_write_file_not_inline, file: /src/vppinfra/elog.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 313643 in function: perftest_fixed_36byte_x4, file: /src/vppinfra/test/toeplitz.c
  * BUG 313632 in function: test_clib_compress_u64, file: /src/vppinfra/test/compress.c
  * BUG 313638 in function: clib_socket_init, file: /src/vppinfra/socket.c
  * BUG 313637 in function: elog_write_file, file: /src/vppinfra/elog.h
  * BUG 313641 in function: _clib_socket_get_string, file: /src/vppinfra/socket.c
  * BUG 313646 in function: clib_socket_init, file: /src/vppinfra/socket.c
### Plugin - Wireguard:
  * BUG 313640 in function: wg_handoff, file: /src/plugins/wireguard/wireguard_handoff.c
  * BUG 318691 in function: wg_input_inline, file: /src/plugins/wireguard/wireguard_input.c
### VNET Ipfix Export:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### VNET Interface Common:
  * BUG 313644 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
  * BUG 313649 in function: vl_api_pcap_trace_on_t_handler, file: /src/vnet/interface_api.c
### VNET Policer:
  * BUG 313645 in function: vl_api_policer_dump_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 313651 in function: vl_api_policer_input_v2_t_handler, file: /src/vnet/policer/policer_api.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 313647 in function: vl_api_policer_output_v2_t_handler, file: /src/vnet/policer/policer_api.c
### Plugin - NSH:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### VNET FIB:
  * BUG 314882 in function: lookup_dpo_ip6_inline, file: /src/vnet/dpo/lookup_dpo.c
### Plugin - Internet Key Exchange (IKEv2) Protocol:
  * BUG 322310 in function: ikev2_node_internal, file: /src/plugins/ikev2/ikev2.c
### Statistics Segment:
  * BUG 313630 in function: stat_segment_index_to_name_r, file: /src/vpp-api/client/stat_client.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Binary API Compiler for C and C++:
  * BUG 314881 in function: Event_registration, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 314880 in function: Dump, file: /src/vpp-api/vapi/vapi.hpp
  * BUG 314878 in function: Request, file: /src/vpp-api/vapi/vapi.hpp
### VNET IPv6 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Plugin - DPDK:
  * BUG 314877 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### VNET IPv4 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VNET IPSec:
  * BUG 313650 in function: ipsec_sa_update, file: /src/vnet/ipsec/ipsec_sa.c
  * BUG 313634 in function: ipsec_sa_add_and_lock, file: /src/vnet/ipsec/ipsec_sa.c
### Vector Library - PCI:
  * BUG 322372 in function: _vlib_pci_link_speed, file: /src/vlib/pci/pci.c
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 313633 in function: vl_api_classify_pcap_set_table_t_handler, file: /src/vnet/classify/classify_api.c
### Vector Library:
  * BUG 314883 in function: restart_cmd_fn, file: /src/vlib/cli.c
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
### Binary API Libraries:
  * BUG 300152 in function: vl_socket_read_ready, file: /src/vlibmemory/socket_api.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
  * BUG 314879 in function: vl_socket_client_read_internal, file: /src/vlibmemory/socket_client.c
### Plugin - Host Stack Applications:
  * BUG 313635 in function: vtc_stream_client, file: /src/plugins/hs_apps/vcl/vcl_test_client.c
### Plugin - IOAM:
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
