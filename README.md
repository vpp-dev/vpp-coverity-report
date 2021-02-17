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
  * this report ran at 17/02/2021 22:17:52
  * source /tmp/report.json mtime is 17/02/2021 22:17:52


### Neale Ranns <neale@graphiant.com>:
  * BUG 218454 in function: ipsec_spd_entry_sort, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218445 in function: vnet_crypto_key_add_linked, file: /src/vnet/crypto/crypto.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 218377 in function: ipsec_add_del_spd, file: /src/vnet/ipsec/ipsec_spd.c
  * BUG 218392 in function: ipsec_add_del_policy, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
  * BUG 218379 in function: dpdk_bind_devices_to_uio, file: /src/plugins/dpdk/device/init.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 218445 in function: vnet_crypto_key_add_linked, file: /src/vnet/crypto/crypto.c
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
  * BUG 214853 in function: memif_init_regions_and_queues, file: /src/plugins/memif/memif.c
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
### Satoru Matsushima <satoru.matsushima@gmail.com>:
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### Tetsuya Murakami <tetsuya.mrk@gmail.com>:
  * BUG 218434 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
  * BUG 218407 in function: srv6_end_m_gtp4_e_fn, file: /src/plugins/srv6-mobile/node.c
### Unidentified owner:
  * BUG 218425 in function: api_dhcp_client_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/dhcp/dhcp.api_test2.c
  * BUG 218431 in function: api_mpls_tunnel_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/mpls/mpls.api_test2.c
  * BUG 218449 in function: api_bier_disp_entry_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/bier/bier.api_test2.c
  * BUG 218435 in function: api_sr_policies_with_sl_index_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/srv6/sr.api_test2.c
  * BUG 218417 in function: api_acl_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/acl/acl.api_test2.c
  * BUG 218402 in function: api_ip_mroute_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/ip/ip.api_test2.c
  * BUG 218395 in function: api_vrrp_vr_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/vrrp/vrrp.api_test2.c
  * BUG 218421 in function: api_abf_policy_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/abf/abf.api_test2.c
  * BUG 218385 in function: api_mpls_route_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/mpls/mpls.api_test2.c
  * BUG 218455 in function: api_sr_policies_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/srv6/sr.api_test2.c
  * BUG 218383 in function: api_one_adjacencies_get, file: /build-root/build-vpp_debug-native/vpp/plugins/lisp/lisp-cp/one.api_test2.c
  * BUG 218443 in function: api_show_threads, file: /build-root/build-vpp_debug-native/vpp/vpp/api/vpe.api_test2.c
  * BUG 216705 in function: vnet_hw_if_update_runtime_data, file: /src/vnet/interface/runtime.c
  * BUG 218372 in function: api_gpe_fwd_entries_get, file: /build-root/build-vpp_debug-native/vpp/plugins/lisp/lisp-gpe/lisp_gpe.api_test2.c
  * BUG 218414 in function: api_cnat_translation_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/cnat/cnat.api_test2.c
  * BUG 218412 in function: api_lisp_adjacencies_get, file: /build-root/build-vpp_debug-native/vpp/plugins/lisp/lisp-cp/lisp.api_test2.c
  * BUG 218450 in function: api_dhcp_proxy_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/dhcp/dhcp.api_test2.c
  * BUG 218394 in function: api_ip_route_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/ip/ip.api_test2.c
  * BUG 218389 in function: api_wireguard_peers_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/wireguard/wireguard.api_test2.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 218410 in function: api_bridge_domain_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/l2/l2.api_test2.c
  * BUG 218418 in function: api_vrrp_vr_peer_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/vrrp/vrrp.api_test2.c
  * BUG 218374 in function: api_nat44_lb_static_mapping_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/nat/nat44.api_test2.c
  * BUG 218373 in function: api_l3xc_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/l3xc/l3xc.api_test2.c
  * BUG 218411 in function: api_bier_route_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/bier/bier.api_test2.c
  * BUG 218439 in function: api_macip_acl_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/acl/acl.api_test2.c
  * BUG 218420 in function: ila_ila2sir, file: /src/plugins/ila/ila.c
  * BUG 218456 in function: api_gbp_contract_dump, file: /build-root/build-vpp_debug-native/vpp/plugins/gbp/gbp.api_test2.c
### Ole Troan <ot@cisco.com>:
  * BUG 216248 in function: vl_api_mac_address_t_fromjson, file: /src/vat2/jsonconvert.c
  * BUG 216242 in function: vl_api_ip4_prefix_t_fromjson, file: /src/vat2/jsonconvert.c
  * BUG 216417 in function: vl_api_ip6_address_t_fromjson, file: /src/vat2/jsonconvert.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44_cli.c
  * BUG 216159 in function: snat_static_mapping_match, file: /src/plugins/nat/nat.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216079 in function: vl_api_ip6_prefix_t_fromjson, file: /src/vat2/jsonconvert.c
  * BUG 216275 in function: vl_api_ip4_address_t_fromjson, file: /src/vat2/jsonconvert.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218422 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44_cli.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218422 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216159 in function: snat_static_mapping_match, file: /src/plugins/nat/nat.c
### John Lo <loj@cisco.com>:
  * BUG 216104 in function: l2_arp_term_process, file: /src/vnet/l2/l2_api.c
  * BUG 218370 in function: l2_rw_mod_entry, file: /src/vnet/l2/l2_rw.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 218454 in function: ipsec_spd_entry_sort, file: /src/vnet/ipsec/ipsec_spd_policy.c
  * BUG 218377 in function: ipsec_add_del_spd, file: /src/vnet/ipsec/ipsec_spd.c
  * BUG 218392 in function: ipsec_add_del_policy, file: /src/vnet/ipsec/ipsec_spd_policy.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 218461 in function: policer_test, file: /src/plugins/unittest/policer_test.c
### Klement Sekera <ksekera@cisco.com>:
  * BUG 218422 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216586 in function: add_identity_mapping_command_fn, file: /src/plugins/nat/nat44_cli.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 216159 in function: snat_static_mapping_match, file: /src/plugins/nat/nat.c
### Dave Barach <vpp@barachs.net>:
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 218461 in function: policer_test, file: /src/plugins/unittest/policer_test.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 218550 in function: clib_macro_eval, file: /src/vppinfra/macros.c
  * BUG 216031 in function: vl_client_connect, file: /src/vlibmemory/memory_client.c
### Artem Glazychev <artem.glazychev@xored.com>:
  * BUG 218419 in function: wg_peer_fill, file: /src/plugins/wireguard/wireguard_peer.c
  * BUG 218400 in function: wg_handshake_process, file: /src/plugins/wireguard/wireguard_input.c
### Steven Luong <sluong@cisco.com>:
  * BUG 216104 in function: l2_arp_term_process, file: /src/vnet/l2/l2_api.c
  * BUG 218399 in function: bond_dev_class_tx_fn, file: /src/vnet/bonding/device.c
  * BUG 218370 in function: l2_rw_mod_entry, file: /src/vnet/l2/l2_rw.c
### Vengada <venggovi@cisco.com>:
  * BUG 218423 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218408 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
### Francois Clad <fclad@cisco.com>:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218423 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218408 in function: nsh_pop_inline, file: /src/plugins/nsh/nsh_pop.c
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h


all emails: Artem Glazychev <artem.glazychev@xored.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Francois Clad <fclad@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; John Lo <loj@cisco.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <ksekera@cisco.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Pablo Camarillo <pcamaril@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Satoru Matsushima <satoru.matsushima@gmail.com>; Steven Luong <sluong@cisco.com>; Tetsuya Murakami <tetsuya.mrk@gmail.com>; Vengada <venggovi@cisco.com>
