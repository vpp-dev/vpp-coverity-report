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
  * this report ran at 26/03/2021 05:48:50
  * source /tmp/report.json mtime is 26/03/2021 05:48:50

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 219711 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
  * BUG 181958 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
### Unidentified owner:
  * BUG 218420 in function: ila_ila2sir, file: /src/plugins/ila/ila.c
  * BUG 219549 in function: vl_api_mss_clamp_dir_t_tojson, file: /build-root/build-vpp_debug-native/vpp/plugins/mss_clamp/mss_clamp.api_tojson.h
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/ip/ip.api_test2.c
  * BUG 216705 in function: vnet_hw_if_update_runtime_data, file: /src/vnet/interface/runtime.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
### Ole Troan <ot@cisco.com>:
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 219703 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 219260 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 219996 in function: nat44_ed_get_out2in_worker_index, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216149 in function: map_if_enable_disable, file: /src/plugins/map/map_api.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 216149 in function: map_if_enable_disable, file: /src/plugins/map/map_api.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 214853 in function: memif_init_regions_and_queues, file: /src/plugins/memif/memif.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
  * BUG 220290 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 220105 in function: cryptodev_get_common_capabilities, file: /src/plugins/dpdk/cryptodev/cryptodev_dp_api.c
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
  * BUG 220289 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
  * BUG 218379 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
### Aloys Augustin <aloaugus@cisco.com>:
  * BUG 181958 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
  * BUG 219711 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
### Francois Clad <fclad@cisco.com>:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
### Dave Barach <vpp@barachs.net>:
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 220389 in function: vnet_interface_output_node_fn, file: /src/vnet/interface_output.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 181958 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
  * BUG 219711 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
### Vengada <venggovi@cisco.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Klement Sekera <ksekera@cisco.com>:
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 219703 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 219996 in function: nat44_ed_get_out2in_worker_index, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 219260 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
### Dave Wallace <dwallacelf@gmail.com>:
  * BUG 219711 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
  * BUG 181958 in function: proxy_server_create_command_fn, file: /src/plugins/hs_apps/proxy.c
### Miklos Tirpak <miklos.tirpak@emnify.com>:
  * BUG 219550 in function: vl_api_mss_clamp_enable_disable_t_handler, file: /src/plugins/mss_clamp/mss_clamp_api.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 219260 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 219703 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 219996 in function: nat44_ed_get_out2in_worker_index, file: /src/plugins/nat/nat44-ed/nat44_ed.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h


all emails: Aloys Augustin <aloaugus@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Dave Wallace <dwallacelf@gmail.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Francois Clad <fclad@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <ksekera@cisco.com>; Miklos Tirpak <miklos.tirpak@emnify.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pablo Camarillo <pcamaril@cisco.com>; Vengada <venggovi@cisco.com>
