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
  * this report ran at 19/02/2021 04:41:20
  * source /tmp/report.json mtime is 19/02/2021 04:41:20

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Neale Ranns <neale@graphiant.com>:
  * BUG 218377 in function: ipsec_add_del_spd, file: /src/vnet/ipsec/ipsec_spd.c
  * BUG 218454 in function: ipsec_spd_entry_sort, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 218445 in function: vnet_crypto_key_add_linked, file: /src/vnet/crypto/crypto.c
  * BUG 218392 in function: ipsec_add_del_policy, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
### John Lo <loj@cisco.com>:
  * BUG 218370 in function: l2_rw_mod_entry, file: /src/vnet/l2/l2_rw.c
  * BUG 216104 in function: l2_arp_term_process, file: /src/vnet/l2/l2_api.c
### Tetsuya Murakami <tetsuya.mrk@gmail.com>:
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h
### Steven Luong <sluong@cisco.com>:
  * BUG 218399 in function: bond_dev_class_tx_fn, file: /src/vnet/bonding/device.c
  * BUG 218370 in function: l2_rw_mod_entry, file: /src/vnet/l2/l2_rw.c
  * BUG 216104 in function: l2_arp_term_process, file: /src/vnet/l2/l2_api.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44_cli.c
  * BUG 218422 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216159 in function: snat_static_mapping_match, file: /src/plugins/nat/nat.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
### Dave Barach <vpp@barachs.net>:
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
  * BUG 214853 in function: memif_init_regions_and_queues, file: /src/plugins/memif/memif.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
  * BUG 218379 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 218445 in function: vnet_crypto_key_add_linked, file: /src/vnet/crypto/crypto.c
### Francois Clad <fclad@cisco.com>:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 218392 in function: ipsec_add_del_policy, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 218377 in function: ipsec_add_del_spd, file: /src/vnet/ipsec/ipsec_spd.c
  * BUG 218454 in function: ipsec_spd_entry_sort, file: /src/vnet/ipsec/ipsec_spd_policy.c
### Satoru Matsushima <satoru.matsushima@gmail.com>:
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218408 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218423 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
### Vengada <venggovi@cisco.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218423 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
  * BUG 218408 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
### Ole Troan <ot@cisco.com>:
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218422 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44_cli.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 216159 in function: snat_static_mapping_match, file: /src/plugins/nat/nat.c
### Klement Sekera <ksekera@cisco.com>:
  * BUG 218422 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44_cli.c
  * BUG 216159 in function: snat_static_mapping_match, file: /src/plugins/nat/nat.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
### Unidentified owner:
  * BUG 218420 in function: ila_ila2sir, file: /src/plugins/ila/ila.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 216705 in function: vnet_hw_if_update_runtime_data, file: /src/vnet/interface/runtime.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 218400 in function: wg_handshake_process, file: /src/plugins/wireguard/wireguard_input.c
  * BUG 218419 in function: wg_peer_fill, file: /src/plugins/wireguard/wireguard_peer.c


all emails: Artem Glazychev <artem.glazychev@xored.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Francois Clad <fclad@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; John Lo <loj@cisco.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <ksekera@cisco.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pablo Camarillo <pcamaril@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Satoru Matsushima <satoru.matsushima@gmail.com>; Steven Luong <sluong@cisco.com>; Tetsuya Murakami <tetsuya.mrk@gmail.com>; Vengada <venggovi@cisco.com>
