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
  * this report ran at 23/07/2021 04:45:38
  * source /tmp/report.json mtime is 23/07/2021 04:45:38

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Unidentified owner:
  * BUG 218420 in function: ila_ila2sir, file: /src/plugins/ila/ila.c
  * BUG 219549 in function: vl_api_mss_clamp_dir_t_tojson, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/mss_clamp/mss_clamp.api_tojson.h
  * BUG 236117 in function: li_hit_node_fn_skx, file: /src/vnet/lawful-intercept/node.c
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 236134 in function: vapi_msg_bridge_domain_details_payload_hton, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vpp-api/vapi/l2.api.vapi.h
  * BUG 236118 in function: worker_handoff_node_fn_skx, file: /src/vnet/handoff.c
  * BUG 236135 in function: vapi_msg_bridge_domain_details_payload_ntoh, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vpp-api/vapi/l2.api.vapi.h
### Ole Troan <ot@cisco.com>:
  * BUG 237080 in function: vl_api_nat44_add_del_static_mapping_v2_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 236140 in function: test_loopbacks_1, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 237082 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 237079 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 237081 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 236138 in function: test_loopbacks_2, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 237083 in function: vl_api_nat44_add_del_identity_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 236137 in function: Delete_loopback_cb, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 236139 in function: Create_loopback_cb, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 237084 in function: vl_api_nat44_add_del_static_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 236136 in function: test_api_strings, file: /src/vpp-api/vapi/vapi_c_test.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 237081 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 237084 in function: vl_api_nat44_add_del_static_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237080 in function: vl_api_nat44_add_del_static_mapping_v2_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237083 in function: vl_api_nat44_add_del_identity_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237079 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 237082 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
### Klement Sekera <ksekera@cisco.com>:
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 237083 in function: vl_api_nat44_add_del_identity_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237080 in function: vl_api_nat44_add_del_static_mapping_v2_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237082 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 237081 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 237079 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 237084 in function: vl_api_nat44_add_del_static_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
### Vengada <venggovi@cisco.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### Miklos Tirpak <miklos.tirpak@emnify.com>:
  * BUG 219550 in function: vl_api_mss_clamp_enable_disable_t_handler, file: /src/plugins/mss_clamp/mss_clamp_api.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 236783 in function: snort_deq_ready, file: /src/plugins/snort/main.c
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
  * BUG 220290 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
  * BUG 236784 in function: snort_instance_create, file: /src/plugins/snort/main.c
  * BUG 220289 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
### Francois Clad <fclad@cisco.com>:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
### Dave Barach <vpp@barachs.net>:
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 237085 in function: clib_socket_init_netns, file: /src/vppinfra/socket.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h


all emails: Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Francois Clad <fclad@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <ksekera@cisco.com>; Miklos Tirpak <miklos.tirpak@emnify.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pablo Camarillo <pcamaril@cisco.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Plugin - NAT:
  * BUG 237084 in function: vl_api_nat44_add_del_static_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 237080 in function: vl_api_nat44_add_del_static_mapping_v2_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237083 in function: vl_api_nat44_add_del_identity_mapping_t_handler, file: /src/plugins/nat/nat44-ed/nat44_ed_api.c
  * BUG 237081 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44-ed/nat44_ed_cli.c
  * BUG 237082 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 237079 in function: nat44_ed_add_del_lb_static_mapping_local, file: /src/plugins/nat/nat44-ed/nat44_ed.c
### Plugin - DPDK:
  * BUG 220289 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 220290 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
### Plugin - TCP MSS Clamping:
  * BUG 219550 in function: vl_api_mss_clamp_enable_disable_t_handler, file: /src/plugins/mss_clamp/mss_clamp_api.c
### Binary API Compiler for C and C++:
  * BUG 236138 in function: test_loopbacks_2, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 236136 in function: test_api_strings, file: /src/vpp-api/vapi/vapi_c_test.c
  * BUG 236137 in function: Delete_loopback_cb, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 236139 in function: Create_loopback_cb, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
  * BUG 236140 in function: test_loopbacks_1, file: /src/vpp-api/vapi/vapi_cpp_test.cpp
### Plugin - Unit Tests:
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
### Plugin - PPPoE:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### VNET Policer:
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
### VNET - IP6 Neighbor Discovery:
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
### VNET FIB:
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
### Plugin - DHCP:
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
### VNET IPv4 LPM:
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
### VNET IPv6 LPM:
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
### VNET Segment Routing (IPv6 and MPLS):
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
### Plugin - NSH:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
### Vector Library - PCI:
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
### Infrastructure Library:
  * BUG 237085 in function: clib_socket_init_netns, file: /src/vppinfra/socket.c
### Plugin - snort plugin:
  * BUG 236784 in function: snort_instance_create, file: /src/plugins/snort/main.c
  * BUG 236783 in function: snort_deq_ready, file: /src/plugins/snort/main.c
### Plugin - IPv6 Segment Routing Masquerading Proxy:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Plugin - IOAM:
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h
