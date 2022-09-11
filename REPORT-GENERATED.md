## Report timing information
  * this report ran at 11/09/2022 05:16:50
  * source /tmp/report.json mtime is 11/09/2022 05:16:49

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Damjan Marion <damarion@cisco.com>:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Ole Troan <ot@cisco.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Vengada <venggovi@cisco.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
### Nathan Skrzypczak <nathan.skrzypczak@gmail.com>:
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
### Dave Barach <vpp@barachs.net>:
  * BUG 277327 in function: pg_free_edit_group, file: /src/vnet/pg/pg.h
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibmemory/memory_shared.c
  * BUG 277320 in function: mspace_calloc, file: /src/vppinfra/dlmalloc.c
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Florin Coras <fcoras@cisco.com>:
  * BUG 277315 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
  * BUG 277317 in function: prom_stat_patterns_add, file: /src/plugins/prom/prom.c
  * BUG 277312 in function: prom_stat_patterns_add, file: /src/plugins/prom/prom.c


all emails: Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Florin Coras <fcoras@cisco.com>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Nathan Skrzypczak <nathan.skrzypczak@gmail.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Paul Atkins <patkins@graphiant.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### VNET IPv4 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Vector Library:
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
### VNET Ipfix Export:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Plugin - CNat:
  * BUG 248561 in function: cnat_maglev_shuffle, file: /src/plugins/cnat/cnat_maglev.c
  * BUG 253541 in function: cnat_maglev_print_changes, file: /src/plugins/cnat/cnat_maglev.c
### Binary API Libraries:
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibmemory/memory_shared.c
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Plugin - NSH:
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
### Infrastructure Library:
  * BUG 277320 in function: mspace_calloc, file: /src/vppinfra/dlmalloc.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
### VNET Packet Generator:
  * BUG 277327 in function: pg_free_edit_group, file: /src/vnet/pg/pg.h
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### VNET IPv6 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VNET FIB:
  * BUG 253539 in function: load_balance_fill_buckets_sticky, file: /src/vnet/dpo/load_balance.c
### Plugin - Prom:
  * BUG 277312 in function: prom_stat_patterns_add, file: /src/plugins/prom/prom.c
  * BUG 277317 in function: prom_stat_patterns_add, file: /src/plugins/prom/prom.c
### Plugin - IOAM:
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
### Plugin - LISP:
  * BUG 277315 in function: process_map_request, file: /src/plugins/lisp/lisp-cp/control.c
