## Report timing information
  * this report ran at 28/01/2022 04:42:22
  * source /tmp/report.json mtime is 28/01/2022 04:42:22

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Mohsin Kazmi <sykazmi@cisco.com>:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 248517 in function: wg_input_post, file: /src/plugins/wireguard/wireguard_input.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 248517 in function: wg_input_post, file: /src/plugins/wireguard/wireguard_input.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 241460 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Steven Luong <sluong@cisco.com>:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
### Mohammed Hawari <mohammed@hawari.fr>:
  * BUG 241460 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Dave Barach <vpp@barachs.net>:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### Unidentified owner:
  * BUG 238635 in function: api_ip_punt_redirect_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c


all emails: Andrew Yourtchenko <ayourtch@gmail.com>; Artem Glazychev <artem.glazychev@xored.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Mohammed Hawari <mohammed@hawari.fr>; Mohsin Kazmi <sykazmi@cisco.com>; Neale Ranns <neale@graphiant.com>; Pablo Camarillo <pcamaril@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Steven Luong <sluong@cisco.com>


## Per-Component Open Coverity Defects
### VNET GSO:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### VNET IPv4 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### VNET IPSec:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### VNET Device Drivers:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
### VNET TAP Drivers:
  * BUG 243678 in function: tap_create_if, file: /src/vnet/devices/tap/tap.c
### VNET FIB:
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
### VNET IPv6 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### VNET Interface Common:
  * BUG 243671 in function: enqueue_one_to_tx_node, file: /src/vnet/interface_output.c
### VNET Ethernet:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Plugin - DPDK:
  * BUG 241460 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### Plugin - PPPoE:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### VNET Segment Routing (IPv6 and MPLS):
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### Plugin - Wireguard:
  * BUG 248517 in function: wg_input_post, file: /src/plugins/wireguard/wireguard_input.c
