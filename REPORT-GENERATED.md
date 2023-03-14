## Report timing information
  * this report ran at 14/03/2023 04:35:43
  * source /tmp/report.json mtime is 14/03/2023 04:35:43

Note: the 'ownership' is determined automatically from MAINTAINERS file. If you spot incorrect handling of data in MAINTAINERS file, please contact ayourtch@gmail.com.

### Damjan Marion <damarion@cisco.com>:
  * BUG 300120 in function: avf_flow_add, file: /src/plugins/avf/flow.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
### Neale Ranns <neale@graphiant.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Ole Troan <ot@cisco.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### Jon Loeliger <jdl@netgate.com>:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Paul Atkins <patkins@graphiant.com>:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### vpp-dev Mailing List <vpp-dev@fd.io>:
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
### Hongjun Ni <hongjun.ni@intel.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Vengada <venggovi@cisco.com>:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### Dave Barach <vpp@barachs.net>:
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
  * BUG 300152 in function: vl_socket_read_ready, file: /src/vlibmemory/socket_api.c
  * BUG 277327 in function: pg_free_edit_group, file: /src/vnet/pg/pg.h
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c


all emails: Damjan Marion <damarion@cisco.com>; Dave Barach <vpp@barachs.net>; Hongjun Ni <hongjun.ni@intel.com>; Jon Loeliger <jdl@netgate.com>; Neale Ranns <neale@graphiant.com>; Ole Troan <ot@cisco.com>; Paul Atkins <patkins@graphiant.com>; Vengada <venggovi@cisco.com>


## Per-Component Open Coverity Defects
### Plugin - AVF Device driver:
  * BUG 300120 in function: avf_flow_add, file: /src/plugins/avf/flow.c
### Plugin - NSH:
  * BUG 277318 in function: nsh_md2_ioam_trace_init, file: /src/plugins/nsh/nsh-md2-ioam/nsh_md2_ioam_trace.c
  * BUG 277316 in function: nsh_md2_ioam_export_init, file: /src/plugins/nsh/nsh-md2-ioam/export-nsh-md2-ioam/nsh_md2_ioam_export.c
### VNET Ethernet:
  * BUG 214973 in function: ethernet_input_inline, file: /src/vnet/ethernet/node.c
### Plugin - IOAM:
  * BUG 277324 in function: ioam_vxlan_gpe_init, file: /src/plugins/ioam/lib-vxlan-gpe/vxlan_gpe_api.c
  * BUG 277325 in function: ioam_export_init, file: /src/plugins/ioam/export/ioam_export.c
  * BUG 277326 in function: ioam_send_flows, file: /src/plugins/ioam/analyse/ioam_summary_export.c
  * BUG 277314 in function: vxlan_gpe_ioam_export_init, file: /src/plugins/ioam/export-vxlan-gpe/vxlan_gpe_ioam_export.c
  * BUG 277311 in function: udp_ping_send_flows, file: /src/plugins/ioam/udp-ping/udp_ping_export.c
### VNET IPv6 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### VNET Ipfix Export:
  * BUG 277323 in function: flow_report_init, file: /src/vnet/ipfix-export/flow_report.c
### VNET Packet Generator:
  * BUG 277327 in function: pg_free_edit_group, file: /src/vnet/pg/pg.h
### VNET Classifier:
  * BUG 253328 in function: vl_api_classify_pcap_lookup_table_t_handler, file: /src/vnet/classify/classify_api.c
### Vector Library:
  * BUG 277319 in function: load_one_plugin, file: /src/vlib/unix/plugin.c
### Binary API Libraries:
  * BUG 300152 in function: vl_socket_read_ready, file: /src/vlibmemory/socket_api.c
  * BUG 277321 in function: vl_msg_api_alloc_internal, file: /src/vlibapi/memory_shared.c
### VNET IPv4 LPM:
  * BUG 277322 in function: ip6_hop_by_hop_ioam_init, file: /src/vnet/ip/ip6_hop_by_hop.c
### Infrastructure Library:
  * BUG 277313 in function: clib_mem_main_init, file: /src/vppinfra/linux/mem.c
