(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{773:function(t,e,o){"use strict";o.r(e);var _=o(2),d=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在 Kubernetes 中，"),e("strong",[t._v("节点（Node）")]),t._v(" 和 "),e("strong",[t._v("Pod")]),t._v(" 的关系是集群架构的核心，节点是 Kubernetes 运行和管理 Pod 的物理或虚拟计算资源，而 Pod 是运行应用程序的最小单元。可以简单理解为节点是承载 Pod 的“主机”，而 Pod 是运行在节点上的工作负载。")]),t._v(" "),e("h3",{attrs:{id:"详细关系解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#详细关系解析"}},[t._v("#")]),t._v(" 详细关系解析：")]),t._v(" "),e("h4",{attrs:{id:"_1-节点是-pod-的运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-节点是-pod-的运行环境"}},[t._v("#")]),t._v(" 1. "),e("strong",[t._v("节点是 Pod 的运行环境")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("节点")]),t._v("：每个节点是一个工作机器，它可以是物理服务器或者虚拟机，负责为 Pod 提供计算、存储和网络等基础资源。")]),t._v(" "),e("li",[e("strong",[t._v("Pod")]),t._v("：Pod 是 Kubernetes 中的最小计算单元，包含一个或多个容器，负责运行应用程序或服务。")])]),t._v(" "),e("p",[t._v("当 Pod 被调度时，Kubernetes 会将 Pod 分配到某个节点上，节点为 Pod 提供所需的资源，比如 CPU、内存和存储。")]),t._v(" "),e("h4",{attrs:{id:"_2-节点可以运行多个-pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点可以运行多个-pod"}},[t._v("#")]),t._v(" 2. "),e("strong",[t._v("节点可以运行多个 Pod")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("一个节点可以运行多个 Pod，不同的 Pod 之间是独立的，但它们共享节点的硬件资源。Kubernetes 调度器根据资源需求（如 CPU、内存）和节点的负载情况将 Pod 分配到合适的节点上。")]),t._v(" "),e("p",[t._v("举例：如果某个节点的硬件资源较强大，那么 Kubernetes 可以在该节点上调度和运行多个 Pod。")])])]),t._v(" "),e("h4",{attrs:{id:"_3-kubelet-负责管理节点上的-pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-kubelet-负责管理节点上的-pod"}},[t._v("#")]),t._v(" 3. "),e("strong",[t._v("Kubelet 负责管理节点上的 Pod")])]),t._v(" "),e("ul",[e("li",[t._v("在每个节点上运行的 "),e("strong",[t._v("kubelet")]),t._v(" 是一个关键组件，它负责与 Kubernetes 控制平面进行通信，管理和监控节点上的 Pod。Kubelet 确保：\n"),e("ul",[e("li",[t._v("Pod 的状态符合预期（运行、停止等）。")]),t._v(" "),e("li",[t._v("如果 Pod 失败，Kubelet 会根据定义的策略尝试重启容器或通知 Kubernetes 控制平面。")])])])]),t._v(" "),e("h4",{attrs:{id:"_4-pod-的调度和分布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-pod-的调度和分布"}},[t._v("#")]),t._v(" 4. "),e("strong",[t._v("Pod 的调度和分布")])]),t._v(" "),e("ul",[e("li",[t._v("Pod 不会固定在某个特定节点上。Kubernetes 的调度器负责将新的 Pod 分配到合适的节点，调度的过程根据节点资源、标签、污点和容忍等规则来完成：\n"),e("ul",[e("li",[t._v("Kubernetes 自动选择最适合的节点来运行新的 Pod。")]),t._v(" "),e("li",[t._v("通过标签（"),e("code",[t._v("nodeSelector")]),t._v("）或者节点亲和性（"),e("code",[t._v("Node Affinity")]),t._v("），可以控制 Pod 被调度到指定的节点上。")])])])]),t._v(" "),e("h4",{attrs:{id:"_5-节点故障影响-pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-节点故障影响-pod"}},[t._v("#")]),t._v(" 5. "),e("strong",[t._v("节点故障影响 Pod")])]),t._v(" "),e("ul",[e("li",[t._v("如果一个节点发生故障（宕机、断网等），Kubernetes 会检测到节点不可用，并会将该节点上的 Pod 标记为不可用。如果使用了副本集（ReplicaSet）或者部署（Deployment），Kubernetes 会自动将这些 Pod 调度到其他健康的节点上运行，以保证服务的高可用性。")])]),t._v(" "),e("h4",{attrs:{id:"_6-pod-间的通信与网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-pod-间的通信与网络"}},[t._v("#")]),t._v(" 6. "),e("strong",[t._v("Pod 间的通信与网络")])]),t._v(" "),e("ul",[e("li",[t._v("节点提供 Pod 间以及 Pod 与外部网络的通信能力。每个 Pod 通过节点共享的网络插件（如 Calico、Flannel 等）与其他 Pod 或服务进行通信。即使 Pod 分布在不同的节点上，它们之间也可以通过虚拟网络进行通信。")])]),t._v(" "),e("h3",{attrs:{id:"节点与-pod-的图示关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节点与-pod-的图示关系"}},[t._v("#")]),t._v(" 节点与 Pod 的图示关系：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("节点")]),t._v("：可以看作是一个物理或虚拟的服务器，里面运行着多个 Pod。")]),t._v(" "),e("li",[e("strong",[t._v("Pod")]),t._v("：Pod 是运行在节点上的独立单元，每个 Pod 包含一个或多个容器。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Node 1                            Node 2\n+--------------------------------+ +---------------------------------+\n|  +--------------------------+ | |  +----------------------------+|\n|  | Pod A (App Container)     | | |  | Pod D (App Container)      ||\n|  +--------------------------+ | |  +----------------------------+|\n|                                | |                                 |\n|  +--------------------------+ | |  +----------------------------+|\n|  | Pod B (App Container)     | | |  | Pod E (App Container)      ||\n|  +--------------------------+ | |  +----------------------------+|\n|                                | |                                 |\n|  +--------------------------+ | |  +----------------------------+|\n|  | Pod C (App Container)     | | |  | Pod F (App Container)      ||\n|  +--------------------------+ | |  +----------------------------+|\n+--------------------------------+ +---------------------------------+\n")])])]),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("节点（Node）")]),t._v(" 是 Kubernetes 集群中承载 Pod 的物理或虚拟机器，为 Pod 提供计算、存储和网络资源。")]),t._v(" "),e("li",[e("strong",[t._v("Pod")]),t._v(" 是运行在节点上的最小应用单位，一个节点上可以运行多个 Pod，Pod 之间是相互隔离的。")]),t._v(" "),e("li",[e("strong",[t._v("kubelet")]),t._v(" 是运行在每个节点上的守护进程，负责管理节点上的 Pod 并与控制平面通信。")]),t._v(" "),e("li",[e("strong",[t._v("Pod 调度")]),t._v(" 是由 Kubernetes 控制的，它会根据资源使用情况、调度策略等，将 Pod 分配到最合适的节点上运行。")])]),t._v(" "),e("p",[t._v("这种结构使得 Kubernetes 能够动态调度和管理集群中的工作负载，同时保证服务的高可用性和弹性扩展。")])])}),[],!1,null,null,null);e.default=d.exports}}]);