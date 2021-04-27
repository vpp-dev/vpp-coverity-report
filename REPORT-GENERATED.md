## Report timing information
  * this report ran at 27/04/2021 04:50:33
  * source /tmp/report.json mtime is 27/04/2021 04:50:33

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Ole Troan <ot@cisco.com>:
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 221425 in function: nat_ipfix_logging_nat64_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221485 in function: nat_ipfix_logging_nat44_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 219703 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 221483 in function: nat_ipfix_logging_addr_exhausted, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221469 in function: nat_ipfix_logging_nat64_bibe, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 221463 in function: nat_ipfix_logging_max_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221476 in function: nat_ha_event_add, file: /src/plugins/nat/nat44-ei/nat44_ei_ha.c
  * BUG 221471 in function: nat_ha_resend_scan, file: /src/plugins/nat/nat44-ei/nat44_ei_ha.c
  * BUG 221455 in function: nat_ipfix_logging_max_bib, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 216149 in function: map_if_enable_disable, file: /src/plugins/map/map_api.c
  * BUG 219260 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 221475 in function: nat_ipfix_logging_max_entries_per_usr, file: /src/plugins/nat/lib/ipfix_logging.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
  * BUG 218401 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
  * BUG 218437 in function: pppoe_input_node_fn, file: /src/plugins/pppoe/pppoe_decap.c
### Radu Nicolau <radu.nicolau@intel.com>:
  * BUG 221456 in function: esp_add_footer_and_icv, file: /src/vnet/ipsec/esp_encrypt.c
  * BUG 221481 in function: esp_decrypt_chain_integ, file: /src/vnet/ipsec/esp_decrypt.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 221481 in function: esp_decrypt_chain_integ, file: /src/vnet/ipsec/esp_decrypt.c
  * BUG 221468 in function: ip4_icmp_error, file: /src/vnet/ip/icmp4.c
  * BUG 221435 in function: ikev2_process_pending_sa_init_one, file: /src/plugins/ikev2/ikev2.c
  * BUG 221490 in function: punt_socket_rx_fd, file: /src/vnet/ip/punt_node.c
  * BUG 221465 in function: ip4_frag_do_fragment, file: /src/vnet/ip/ip_frag.c
  * BUG 221438 in function: ip6_frag_do_fragment, file: /src/vnet/ip/ip_frag.c
  * BUG 221456 in function: esp_add_footer_and_icv, file: /src/vnet/ipsec/esp_encrypt.c
  * BUG 221478 in function: ikev2_get_new_ike_header_buff, file: /src/plugins/ikev2/ikev2.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 218398 in function: show_policer_command_fn, file: /src/vnet/policer/policer.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 221487 in function: create_buffer_for_client_message, file: /src/plugins/dhcp/dhcp6_pd_client_dp.c
  * BUG 221488 in function: igmp_pkt_get_buffer, file: /src/plugins/igmp/igmp_pkt.c
  * BUG 221450 in function: ip6_icmp_error, file: /src/vnet/ip/icmp6.c
  * BUG 216057 in function: fib_sas6_get, file: /src/vnet/fib/fib_sas.c
  * BUG 221486 in function: send_dhcp_pkt, file: /src/plugins/dhcp/client.c
### Mohsin Kazmi <sykazmi@cisco.com>:
  * BUG 221489 in function: add_buffer_to_slot, file: /src/vnet/devices/virtio/device.c
  * BUG 221448 in function: virtio_pci_send_ctrl_msg_split, file: /src/vnet/devices/virtio/pci.c
  * BUG 221433 in function: virtio_pci_send_ctrl_msg_packed, file: /src/vnet/devices/virtio/pci.c
  * BUG 221457 in function: add_buffer_to_slot_packed, file: /src/vnet/devices/virtio/device.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 221434 in function: ioam_export_init_buffer, file: /src/plugins/ioam/export-common/ioam_export.h
  * BUG 216232 in function: ioam_cache_ts_table_destroy, file: /src/plugins/ioam/ip6/ioam_cache.h
  * BUG 221454 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
### Unidentified owner:
  * BUG 221424 in function: build_map_register, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 221482 in function: create_buffer_for_rs, file: /src/vnet/ip6-nd/ip6_ra.c
  * BUG 221461 in function: build_map_reply, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 218420 in function: ila_ila2sir, file: /src/plugins/ila/ila.c
  * BUG 221473 in function: ip6_neighbor_send_mldpv2_report, file: /src/vnet/ip6-nd/ip6_mld.c
  * BUG 221449 in function: ipfix_classify_send_flows, file: /src/vnet/ipfix-export/flow_report_classify.c
  * BUG 221431 in function: lisp_gpe_test_send_nsh_packet, file: /src/plugins/lisp/lisp-gpe/lisp_gpe.c
  * BUG 220098 in function: api_ip_route_v2_dump, file: /build-root/build-vpp_debug-native/vpp/vnet/ip/ip.api_test2.c
  * BUG 221459 in function: build_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 221437 in function: build_encapsulated_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 219549 in function: vl_api_mss_clamp_dir_t_tojson, file: /build-root/build-vpp_debug-native/vpp/plugins/mss_clamp/mss_clamp.api_tojson.h
  * BUG 221447 in function: send_template_packet, file: /src/vnet/ipfix-export/flow_report.c
  * BUG 218382 in function: set_ip6_nd_proxy_cmd, file: /src/vnet/ip6-nd/ip6_nd_proxy.c
  * BUG 221484 in function: ip6_ra_process_timer_event, file: /src/vnet/ip6-nd/ip6_ra.c
  * BUG 216705 in function: vnet_hw_if_update_runtime_data, file: /src/vnet/interface/runtime.c
### Matus Fabian <matfabia@cisco.com>:
  * BUG 221479 in function: syslog_msg_send, file: /src/vnet/syslog/syslog.c
### Damjan Marion <damarion@cisco.com>:
  * BUG 216295 in function: format_text_cell, file: /src/plugins/perfmon/table.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 221442 in function: dpdk_ops_vpp_dequeue, file: /src/plugins/dpdk/buffer.c
  * BUG 221426 in function: dpdk_ops_vpp_enqueue, file: /src/plugins/dpdk/buffer.c
  * BUG 220290 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 221470 in function: vlib_buffer_add_data, file: /src/vlib/buffer.c
  * BUG 220105 in function: cryptodev_get_common_capabilities, file: /src/plugins/dpdk/cryptodev/cryptodev.c
  * BUG 216249 in function: perfmon_reset, file: /src/plugins/perfmon/perfmon.c
  * BUG 221478 in function: ikev2_get_new_ike_header_buff, file: /src/plugins/ikev2/ikev2.c
  * BUG 221457 in function: add_buffer_to_slot_packed, file: /src/vnet/devices/virtio/device.c
  * BUG 221451 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 221472 in function: vlib_buffer_chain_append_data_with_alloc, file: /src/vlib/buffer.c
  * BUG 221489 in function: add_buffer_to_slot, file: /src/vnet/devices/virtio/device.c
  * BUG 220289 in function: dpdk_lib_init, file: /src/plugins/dpdk/device/init.c
  * BUG 221440 in function: dpdk_ops_vpp_enqueue_no_cache_one, file: /src/plugins/dpdk/buffer.c
  * BUG 221435 in function: ikev2_process_pending_sa_init_one, file: /src/plugins/ikev2/ikev2.c
  * BUG 221458 in function: vlib_packet_template_get_packet, file: /src/vlib/buffer.c
  * BUG 221446 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 221474 in function: vlib_buffer_add_data, file: /src/vlib/buffer.c
  * BUG 221448 in function: virtio_pci_send_ctrl_msg_split, file: /src/vnet/devices/virtio/pci.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218459 in function: intel_uncore_init, file: /src/plugins/perfmon/intel/uncore.c
  * BUG 218391 in function: vlib_pci_device_open, file: /src/vlib/linux/pci.c
  * BUG 221433 in function: virtio_pci_send_ctrl_msg_packed, file: /src/vnet/devices/virtio/pci.c
  * BUG 218396 in function: linux_pci_init, file: /src/vlib/linux/pci.c
### Andrew Yourtchenko <ayourtch@gmail.com>:
  * BUG 221443 in function: init_icmp46_echo_request, file: /src/plugins/ping/ping.c
  * BUG 221460 in function: send_ip46_ping, file: /src/plugins/ping/ping.c
### Matthew Smith <mgsmith@netgate.com>:
  * BUG 221436 in function: vrrp_vr_multicast_group_join, file: /src/plugins/vrrp/vrrp_packet.c
### Filip Tehlar <ftehlar@cisco.com>:
  * BUG 221435 in function: ikev2_process_pending_sa_init_one, file: /src/plugins/ikev2/ikev2.c
  * BUG 221478 in function: ikev2_get_new_ike_header_buff, file: /src/plugins/ikev2/ikev2.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 221465 in function: ip4_frag_do_fragment, file: /src/vnet/ip/ip_frag.c
  * BUG 216149 in function: map_if_enable_disable, file: /src/plugins/map/map_api.c
  * BUG 221438 in function: ip6_frag_do_fragment, file: /src/vnet/ip/ip_frag.c
  * BUG 221468 in function: ip4_icmp_error, file: /src/vnet/ip/icmp4.c
  * BUG 221490 in function: punt_socket_rx_fd, file: /src/vnet/ip/punt_node.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 221450 in function: ip6_icmp_error, file: /src/vnet/ip/icmp6.c
### Dave Barach <vpp@barachs.net>:
  * BUG 218552 in function: add_sub_command, file: /src/vlib/cli.c
  * BUG 221480 in function: vnet_dns_send_dns6_request, file: /src/plugins/dns/dns.c
  * BUG 221474 in function: vlib_buffer_add_data, file: /src/vlib/buffer.c
  * BUG 221468 in function: ip4_icmp_error, file: /src/vnet/ip/icmp4.c
  * BUG 221470 in function: vlib_buffer_add_data, file: /src/vlib/buffer.c
  * BUG 221451 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 221445 in function: oddbuf_inline, file: /src/plugins/oddbuf/node.c
  * BUG 218549 in function: identify_subint, file: /src/vnet/ethernet/node.c
  * BUG 218381 in function: dhcpv6_proxy_to_client_input, file: /src/plugins/dhcp/dhcp6_proxy_node.c
  * BUG 221486 in function: send_dhcp_pkt, file: /src/plugins/dhcp/client.c
  * BUG 221446 in function: vlib_buffer_chain_linearize, file: /src/vlib/buffer_funcs.h
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 221465 in function: ip4_frag_do_fragment, file: /src/vnet/ip/ip_frag.c
  * BUG 220099 in function: vl_api_ip_route_lookup_v2_t_handler, file: /src/vnet/ip/ip_api.c
  * BUG 221450 in function: ip6_icmp_error, file: /src/vnet/ip/icmp6.c
  * BUG 214755 in function: ip_in_out_acl_inline, file: /src/vnet/ip/ip_in_out_acl.c
  * BUG 210240 in function: cJSON_SetValuestring, file: /src/vppinfra/cJSON.c
  * BUG 221438 in function: ip6_frag_do_fragment, file: /src/vnet/ip/ip_frag.c
  * BUG 221490 in function: punt_socket_rx_fd, file: /src/vnet/ip/punt_node.c
  * BUG 221428 in function: linearize_negative_current_data, file: /src/plugins/unittest/test_buffer.c
  * BUG 216981 in function: icmp_to_icmp6, file: /src/vnet/ip/ip4_to_ip6.h
  * BUG 221487 in function: create_buffer_for_client_message, file: /src/plugins/dhcp/dhcp6_pd_client_dp.c
  * BUG 221430 in function: vnet_dns_send_dns4_request, file: /src/plugins/dns/dns.c
  * BUG 221472 in function: vlib_buffer_chain_append_data_with_alloc, file: /src/vlib/buffer.c
  * BUG 221458 in function: vlib_packet_template_get_packet, file: /src/vlib/buffer.c
### Benoît Ganne <bganne@cisco.com>:
  * BUG 221435 in function: ikev2_process_pending_sa_init_one, file: /src/plugins/ikev2/ikev2.c
  * BUG 221478 in function: ikev2_get_new_ike_header_buff, file: /src/plugins/ikev2/ikev2.c
### Francois Clad <fclad@cisco.com>:
  * BUG 218441 in function: srv6_am_localsid_removal_fn, file: /src/plugins/srv6-am/am.c
### Vengada <venggovi@cisco.com>:
  * BUG 218432 in function: nsh_add_del_entry, file: /src/plugins/nsh/nsh_api.c
### Klement Sekera <ksekera@cisco.com>:
  * BUG 221463 in function: nat_ipfix_logging_max_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221485 in function: nat_ipfix_logging_nat44_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221455 in function: nat_ipfix_logging_max_bib, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 219260 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 221476 in function: nat_ha_event_add, file: /src/plugins/nat/nat44-ei/nat44_ei_ha.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 221444 in function: bfd_send_periodic, file: /src/vnet/bfd/bfd_main.c
  * BUG 221425 in function: nat_ipfix_logging_nat64_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221469 in function: nat_ipfix_logging_nat64_bibe, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221471 in function: nat_ha_resend_scan, file: /src/plugins/nat/nat44-ei/nat44_ei_ha.c
  * BUG 221432 in function: bfd_send_echo, file: /src/vnet/bfd/bfd_main.c
  * BUG 221475 in function: nat_ipfix_logging_max_entries_per_usr, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 219703 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 221483 in function: nat_ipfix_logging_addr_exhausted, file: /src/plugins/nat/lib/ipfix_logging.c
### Pablo Camarillo <pcamaril@cisco.com>:
  * BUG 218409 in function: sr_steering_policy, file: /src/vnet/srv6/sr_steering.c
  * BUG 218375 in function: sr_policy_del, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 218427 in function: sr_policy_mod, file: /src/vnet/srv6/sr_policy_rewrite.c
  * BUG 180995 in function: sr_mpls_policy_assign_endpoint_color, file: /src/vnet/srmpls/sr_mpls_policy.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 221477 in function: tcp_prepare_segment, file: /src/vnet/tcp/tcp_output.c
  * BUG 221467 in function: tcp_send_reset_w_pkt, file: /src/vnet/tcp/tcp_output.c
  * BUG 221441 in function: tcp_timer_persist_handler, file: /src/vnet/tcp/tcp_output.c
  * BUG 221429 in function: tcp_timer_retransmit_syn_handler, file: /src/vnet/tcp/tcp_output.c
  * BUG 221464 in function: tcp_send_reset, file: /src/vnet/tcp/tcp_output.c
  * BUG 221462 in function: tcp_send_synack, file: /src/vnet/tcp/tcp_output.c
  * BUG 218446 in function: test_crypto_perf, file: /src/plugins/unittest/crypto_test.c
  * BUG 221466 in function: tcp_timer_retransmit_handler, file: /src/vnet/tcp/tcp_output.c
  * BUG 221452 in function: tcp_send_ack, file: /src/vnet/tcp/tcp_output.c
  * BUG 221439 in function: tcp_send_fin, file: /src/vnet/tcp/tcp_output.c
  * BUG 221428 in function: linearize_negative_current_data, file: /src/plugins/unittest/test_buffer.c
  * BUG 221453 in function: tcp_send_syn, file: /src/vnet/tcp/tcp_output.c
### Ole Troan <otroan@employees.org>:
  * BUG 221427 in function: flowprobe_get_buffer, file: /src/plugins/flowprobe/node.c
### Miklos Tirpak <miklos.tirpak@emnify.com>:
  * BUG 219550 in function: vl_api_mss_clamp_enable_disable_t_handler, file: /src/plugins/mss_clamp/mss_clamp_api.c
### Filip Varga <fivarga@cisco.com>:
  * BUG 221483 in function: nat_ipfix_logging_addr_exhausted, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221469 in function: nat_ipfix_logging_nat64_bibe, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 219703 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c
  * BUG 221476 in function: nat_ha_event_add, file: /src/plugins/nat/nat44-ei/nat44_ei_ha.c
  * BUG 218442 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 221475 in function: nat_ipfix_logging_max_entries_per_usr, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221485 in function: nat_ipfix_logging_nat44_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221455 in function: nat_ipfix_logging_max_bib, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221471 in function: nat_ha_resend_scan, file: /src/plugins/nat/nat44-ei/nat44_ei_ha.c
  * BUG 218436 in function: send_interfaces_details, file: /src/plugins/nat/pnat/pnat_api.c
  * BUG 221425 in function: nat_ipfix_logging_nat64_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 221463 in function: nat_ipfix_logging_max_ses, file: /src/plugins/nat/lib/ipfix_logging.c
  * BUG 219260 in function: pnat_enable_interface, file: /src/plugins/nat/pnat/pnat.c


all emails: Andrew Yourtchenko <ayourtch@gmail.com>; Benoît Ganne <bganne@cisco.com>; Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Filip Tehlar <ftehlar@cisco.com>; Filip Varga <fivarga@cisco.com>; Florin Coras <fcoras@cisco.com>; Francois Clad <fclad@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Klement Sekera <ksekera@cisco.com>; Matthew Smith <mgsmith@netgate.com>; Matus Fabian <matfabia@cisco.com>; Miklos Tirpak <miklos.tirpak@emnify.com>; Mohsin Kazmi <sykazmi@cisco.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Ole Troan <otroan@employees.org>; Pablo Camarillo <pcamaril@cisco.com>; Radu Nicolau <radu.nicolau@intel.com>; Vengada <venggovi@cisco.com>
