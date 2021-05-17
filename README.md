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
  * this report ran at 17/05/2021 04:56:43
  * source /tmp/report.json mtime is 17/05/2021 04:56:43

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Florin Coras <fcoras@cisco.com>:
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Unidentified owner:
  * BUG 218420 in function: ila_ila2sir, file: /src/plugins/ila/ila.c
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/vnet/ip/ip.api_test2.c
  * BUG 219549 in function: vl_api_mss_clamp_dir_t_tojson, file: /build-root/build-vpp_debug-native/vpp/CMakeFiles/plugins/mss_clamp/mss_clamp.api_tojson.h
### Damjan Marion <damarion@cisco.com>:
  * BUG 220105 in function: cryptodev_get_common_capabilities, file: /src/plugins/dpdk/cryptodev/cryptodev.c
  * BUG 208547 in function: aes_gcm_dec, file: /src/plugins/crypto_native/aes_gcm.c
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
  * BUG 220290 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 220289 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
### Vengada <venggovi@cisco.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h
### Jon Loeliger <jdl@netgate.com>:
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
### Miklos Tirpak <miklos.tirpak@emnify.com>:
  * BUG 219550 in function: vl_api_mss_clamp_enable_disable_t_handler, file: /src/plugins/mss_clamp/mss_clamp_api.c
### Francois Clad <fclad@cisco.com>:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Dave Barach <vpp@barachs.net>:
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c


all emails: Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Florin Coras <fcoras@cisco.com>; Francois Clad <fclad@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Miklos Tirpak <miklos.tirpak@emnify.com>; Neale Ranns <neale@graphiant.com>; Pablo Camarillo <pcamaril@cisco.com>; Vengada <venggovi@cisco.com>
