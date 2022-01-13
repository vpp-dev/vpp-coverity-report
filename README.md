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
  * this report ran at 13/01/2022 04:47:28
  * source /tmp/report.json mtime is 13/01/2022 04:47:28

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Mohammed Hawari <mohammed@hawari.fr>:
  * BUG 241460 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 243681 in function: af_xdp_finalize_queues, file: /src/plugins/af_xdp/device.c
### Satoru Matsushima <satoru.matsushima@gmail.com>:
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### Tetsuya Murakami <tetsuya.mrk@gmail.com>:
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### Mohsin Kazmi <sykazmi@cisco.com>:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Dave Barach <vpp@barachs.net>:
  * BUG 238468 in function: icmp6_router_solicitation, file: /src/vnet/ip6-nd/ip6_ra.c
  * BUG 243683 in function: set_interface_tx_hash_cmd, file: /src/vnet/interface_cli.c
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 243680 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 243673 in function: vl_api_sw_interface_tx_placement_details_t_handler, file: /src/vnet/interface_test.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 243763 in function: lcp_itf_pair_sync_state, file: /src/plugins/linux-cp/lcp_interface_sync.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Unidentified owner:
  * BUG 238635 in function: api_ip_punt_redirect_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### Steven Luong <sluong@cisco.com>:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 243763 in function: lcp_itf_pair_sync_state, file: /src/plugins/linux-cp/lcp_interface_sync.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
  * BUG 238468 in function: icmp6_router_solicitation, file: /src/vnet/ip6-nd/ip6_ra.c
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241460 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 243681 in function: af_xdp_finalize_queues, file: /src/plugins/af_xdp/device.c
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c


all emails: Andrew Yourtchenko <ayourtch@gmail.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Matthew Smith <mgsmith@netgate.com>; Mohammed Hawari <mohammed@hawari.fr>; Mohsin Kazmi <sykazmi@cisco.com>; Neale Ranns <neale@graphiant.com>; Pablo Camarillo <pcamaril@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Satoru Matsushima <satoru.matsushima@gmail.com>; Steven Luong <sluong@cisco.com>; Tetsuya Murakami <tetsuya.mrk@gmail.com>


## Per-Component Open Coverity Defects
### Plugin - linux-cp:
  * BUG 243763 in function: lcp_itf_pair_sync_state, file: /src/plugins/linux-cp/lcp_interface_sync.c
### VPP Executable:
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
### VPP Main App:
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
### VNET FIB:
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
### Plugin - PPPoE:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### VNET - IP6 Neighbor Discovery:
  * BUG 238468 in function: icmp6_router_solicitation, file: /src/vnet/ip6-nd/ip6_ra.c
### VNET TAP Drivers:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
### VNET IPv4 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
### VNET IPv6 LPM:
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### Plugin - IPv6 Segment Routing Mobile:
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### VNET IPSec:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### VNET Ethernet:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Plugin - AF_XDP driver:
  * BUG 243681 in function: af_xdp_finalize_queues, file: /src/plugins/af_xdp/device.c
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### VNET Device Drivers:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
### Plugin - DPDK:
  * BUG 241460 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### VNET Interface Common:
  * BUG 243683 in function: set_interface_tx_hash_cmd, file: /src/vnet/interface_cli.c
  * BUG 243680 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 243673 in function: vl_api_sw_interface_tx_placement_details_t_handler, file: /src/vnet/interface_test.c
### VNET Segment Routing (IPv6 and MPLS):
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
### VNET GSO:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
