## Report timing information
  * this report ran at 23/11/2021 18:08:57
  * source /tmp/report.json mtime is 23/11/2021 18:08:57

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Mohsin Kazmi <sykazmi@cisco.com>:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Fan Zhang <roy.fan.zhang@intel.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 238468 in function: icmp6_router_solicitation, file: /src/vnet/ip6-nd/ip6_ra.c
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 241249 in function: ipfix_write_headers, file: /src/vnet/ipfix-export/flow_report.c
  * BUG 241250 in function: vl_api_set_ipfix_exporter_t_internal, file: /src/vnet/ipfix-export/flow_api.c
  * BUG 241252 in function: send_template_packet, file: /src/vnet/ipfix-export/flow_report.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### Ole Troan <ot@cisco.com>:
  * BUG 241252 in function: send_template_packet, file: /src/vnet/ipfix-export/flow_report.c
  * BUG 241250 in function: vl_api_set_ipfix_exporter_t_internal, file: /src/vnet/ipfix-export/flow_api.c
  * BUG 241249 in function: ipfix_write_headers, file: /src/vnet/ipfix-export/flow_report.c
### Unidentified owner:
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 219549 in function: vl_api_mss_clamp_dir_t_tojson, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/mss_clamp/mss_clamp.api_tojson.h
  * BUG 238635 in function: api_ip_punt_redirect_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
### Dave Barach <vpp@barachs.net>:
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241159 in function: send_ttype, file: /src/vpp/app/vppctl.c
  * BUG 238468 in function: icmp6_router_solicitation, file: /src/vnet/ip6-nd/ip6_ra.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 241159 in function: send_ttype, file: /src/vpp/app/vppctl.c


all emails: Andrew Yourtchenko <ayourtch@gmail.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Fan Zhang <roy.fan.zhang@intel.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Mohsin Kazmi <sykazmi@cisco.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pablo Camarillo <pcamaril@cisco.com>; Paul Atkins <patkins@graphiant.com>; Radu Nicolau <radu.nicolau@intel.com>


## Per-Component Open Coverity Defects
### Plugin - performance counter:
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
### VNET IPv6 LPM:
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
### VNET GSO:
  * BUG 241251 in function: gso_segment_buffer_inline, file: /src/vnet/gso/gso.h
### VNET - IP6 Neighbor Discovery:
  * BUG 238468 in function: icmp6_router_solicitation, file: /src/vnet/ip6-nd/ip6_ra.c
### Plugin - PPPoE:
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### VNET Segment Routing (IPv6 and MPLS):
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
### VPP Executable:
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241159 in function: send_ttype, file: /src/vpp/app/vppctl.c
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
### VNET FIB:
  * BUG 240629 in function: fib_prefix_ip6_addr_increment, file: /src/vnet/fib/fib_types.c
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
### VNET IPSec:
  * BUG 241231 in function: vl_api_ipsec_itf_delete_t_handler, file: /src/vnet/ipsec/ipsec_api.c
### VNET Ipfix Export:
  * BUG 241250 in function: vl_api_set_ipfix_exporter_t_internal, file: /src/vnet/ipfix-export/flow_api.c
  * BUG 241252 in function: send_template_packet, file: /src/vnet/ipfix-export/flow_report.c
  * BUG 241249 in function: ipfix_write_headers, file: /src/vnet/ipfix-export/flow_report.c
### VPP Main App:
  * BUG 241161 in function: main, file: /src/vpp/app/vppctl.c
  * BUG 241159 in function: send_ttype, file: /src/vpp/app/vppctl.c
  * BUG 241160 in function: main, file: /src/vpp/app/vppctl.c
### VNET IPv4 LPM:
  * BUG 240368 in function: ip_in_out_acl_inline_trace, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 238636 in function: vl_api_add_del_ip_punt_redirect_v2_t_handler, file: /src/vnet/ip/ip_api.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
