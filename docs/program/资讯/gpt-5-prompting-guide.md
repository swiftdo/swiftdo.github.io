---
title: GPT-5 提示词指南
createTime: 2025/08/13 09:21:29
permalink: /article/gpt-5-prompting-guide/
tags:
    - GPT-5
    - openai
---



# GPT-5 提示指南

> 原文：[https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide](https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide)

GPT-5 是我们最新的旗舰模型，在代理任务执行、编码能力、原始智能以及可操控性方面实现了重大进步。

我们相信它在各种领域都能“开箱即用”表现出色，但本指南将分享一些提示技巧，帮助您最大化模型输出质量。这些技巧源于我们在训练和实际应用模型时的经验。我们将讨论如何提升代理任务性能、确保指令遵守、利用新 API 功能，以及优化前端和软件工程任务的编码——并分享 AI 代码编辑器 Cursor 在 GPT-5 提示调优方面的关键洞见。

通过应用这些最佳实践并优先使用我们的标准工具，我们观察到显著提升。我们希望本指南以及我们开发的提示优化工具，能成为您使用 GPT-5 的良好起点。不过，提示工程并非一成不变——我们鼓励您进行实验，并在本文基础上迭代，找到最适合您问题的方案。

## 代理工作流的可预测性

我们在训练 GPT-5 时特别考虑了开发者需求：重点提升了工具调用、指令跟随和长上下文理解，使其成为代理应用的最佳基础模型。如果您将 GPT-5 用于代理和工具调用流程，我们建议升级到 Responses API，该 API 可在工具调用间持久化推理，从而生成更高效、智能的输出。

### 控制代理积极性

代理框架的控制范围很广——有些系统将大部分决策交给底层模型，而另一些则通过严格的程序逻辑分支来约束模型。GPT-5 经训练可在这一谱系的任意位置运作，从处理模糊情境下的高层决策，到执行定义明确的专注任务。本节将介绍如何最佳校准 GPT-5 的代理积极性，即其主动性与等待明确指导之间的平衡。

#### 减少积极性的提示技巧

默认情况下，GPT-5 在代理环境中会彻底收集上下文，以确保输出正确答案。要缩小 GPT-5 的代理行为范围——包括减少无关工具调用并降低到达最终答案的延迟——请尝试以下方法：

* 切换到较低的 `reasoning_effort`。这会减少探索深度，但提升效率和响应速度。许多工作流在中低 `reasoning_effort` 下也能取得一致结果。
* 在提示中明确定义模型探索问题空间的标准。这能降低模型过度探索和推理的需求：

```
<context_gathering>
Goal: Get enough context fast. Parallelize discovery and stop as soon as you can act.

Method:
- Start broad, then fan out to focused subqueries.
- In parallel, launch varied queries; read top hits per query. Deduplicate paths and cache; don’t repeat queries.
- Avoid over searching for context. If needed, run targeted searches in one parallel batch.

Early stop criteria:
- You can name exact content to change.
- Top hits converge (~70%) on one area/path.

Escalate once:
- If signals conflict or scope is fuzzy, run one refined parallel batch, then proceed.

Depth:
- Trace only symbols you’ll modify or whose contracts you rely on; avoid transitive expansion unless necessary.

Loop:
- Batch search → minimal plan → complete task.
- Search again only if validation fails or new unknowns appear. Prefer acting over more searching.
</context_gathering>
```

如果您希望最大程度规定行为，甚至可以设置固定工具调用预算，如下例所示。预算可根据期望搜索深度灵活调整。

```
<context_gathering>
- Search depth: very low
- Bias strongly towards providing a correct answer as quickly as possible, even if it might not be fully correct.
- Usually, this means an absolute maximum of 2 tool calls.
- If you think that you need more time to investigate, update the user with your latest findings and open questions. You can proceed if the user confirms.
</context_gathering>
```

在限制核心上下文收集时，为模型提供“逃生出口”很有帮助，能让它更容易完成较短的收集步骤。通常，这以允许在不确定性下继续的条款形式呈现，如上例中的“even if it might not be fully correct”。

#### 增加积极性的提示技巧

反之，如果您希望鼓励模型更自主、增强工具调用持久性，并减少澄清问题或移交用户的频率，我们建议提高 `reasoning_effort`，并使用类似以下提示来促进持久性和任务完整性：

```
<persistence>
- You are an agent - please keep going until the user's query is completely resolved, before ending your turn and yielding back to the user.
- Only terminate your turn when you are sure that the problem is solved.
- Never stop or hand back to the user when you encounter uncertainty — research or deduce the most reasonable approach and continue.
- Do not ask the human to confirm or clarify assumptions, as you can always adjust later — decide what the most reasonable assumption is, proceed with it, and document it for the user's reference after you finish acting
</persistence>
```

总体而言，明确定义代理任务的停止条件、区分安全与不安全动作，以及规定何时（若有）可移交用户很有益处。例如，在购物工具中，结账和支付工具的不确定性阈值应较低，需要用户确认；而搜索工具的阈值应极高。同样，在编码环境中，删除文件工具的阈值应远低于 grep 搜索工具。

### 工具前言

我们认识到，在用户监督的代理路径上，模型定期更新工具调用内容及原因，能显著提升交互体验——路径越长，效果越明显。为此，GPT-5 经训练可通过“工具前言”消息提供清晰的前期计划和持续进度报告。

您可在提示中调整工具前言的频率、风格和内容——从每个工具调用的详细说明，到简要前期计划，乃至介于两者之间。以下是一个高质量前言提示示例：

```
<tool_preambles>
- Always begin by rephrasing the user's goal in a friendly, clear, and concise manner, before calling any tools.
- Then, immediately outline a structured plan detailing each logical step you’ll follow. - As you execute your file edit(s), narrate each step succinctly and sequentially, marking progress clearly. 
- Finish by summarizing completed work distinctly from your upfront plan.
</tool_preambles>
```

以下是响应此类提示可能生成的工具前言示例——这类前言能大大帮助用户跟踪日益复杂的代理工作：

```
"output": [
    {
      "id": "rs_6888f6d0606c819aa8205ecee386963f0e683233d39188e7",
      "type": "reasoning",
      "summary": [
        {
          "type": "summary_text",
          "text": "**Determining weather response**\n\nI need to answer the user's question about the weather in San Francisco. ...."
        },
    },
    {
      "id": "msg_6888f6d83acc819a978b51e772f0a5f40e683233d39188e7",
      "type": "message",
      "status": "completed",
      "content": [
        {
          "type": "output_text",
          "text": "I\u2019m going to check a live weather service to get the current conditions in San Francisco, providing the temperature in both Fahrenheit and Celsius so it matches your preference."
        }
      ],
      "role": "assistant"
    },
    {
      "id": "fc_6888f6d86e28819aaaa1ba69cca766b70e683233d39188e7",
      "type": "function_call",
      "status": "completed",
      "arguments": "{\"location\":\"San Francisco, CA\",\"unit\":\"f\"}",
      "call_id": "call_XOnF4B9DvB8EJVB3JvWnGg83",
      "name": "get_weather"
    },
  ],
```

### 推理努力

我们提供了 `reasoning_effort` 参数，用于控制模型的思考深度和工具调用意愿；默认值为 `medium`，但应根据任务难度调整。对于复杂多步任务，建议使用更高水平以确保最佳输出。此外，我们发现将独立任务拆分为多个代理回合（每个回合处理一项任务）时，性能最佳。使用 Responses API 重用推理上下文 我们强烈推荐在 GPT-5 中使用 Responses API，以实现更好的代理流程、更低成本和更高效令牌利用。

在评估中，使用 Responses API 相比 Chat Completions 有显著统计改进——例如，Taubench-Retail 分数从 73.9% 升至 78.2%，仅通过切换 API 并包含 `previous_response_id` 将先前推理传递给后续请求。这允许模型引用以往推理轨迹，节省 CoT 令牌，避免每次工具调用后从零重建计划，从而提升延迟和性能——该功能适用于所有 Responses API 用户，包括 ZDR 组织。

### 使用 Responses API 重用推理上下文

我们强烈推荐在 GPT-5 中使用 Responses API，以实现更好的代理流程、更低成本和更高效令牌利用。

在评估中，使用 Responses API 相比 Chat Completions 有显著统计改进——例如，Tau-Bench Retail 分数从 73.9% 升至 78.2%，仅通过切换 API 并包含 `previous_response_id` 将先前推理传递给后续请求。这允许模型引用以往推理轨迹，节省 CoT 令牌，避免每次工具调用后从零重建计划，从而提升延迟和性能——该功能适用于所有 Responses API 用户，包括 ZDR 组织。

## 最大化编码性能，从规划到执行

GPT-5 在编码能力上领先所有前沿模型：它能在大型代码库中修复 bug、处理大 diff，实现多文件重构或新增大型功能。它还擅长从零构建完整应用，涵盖前端和后端。本节讨论我们在生产环境中为编码代理客户观察到的提示优化，这些优化提升了编程表现。

### 前端应用开发

GPT-5 经训练具备优秀的审美品味和严谨实现能力。我们对其处理各种 Web 开发框架和包充满信心；但对于新应用，推荐以下框架和包，以充分发挥模型前端潜力：

* 框架：Next.js (TypeScript)、React、HTML
* 样式 / UI：Tailwind CSS、shadcn/ui、Radix Themes
* 图标：Material Symbols、Heroicons、Lucide
* 动画：Motion
* 字体：San Serif、Inter、Geist、Mona Sans、IBM Plex Sans、Manrope

#### 从零构建应用

GPT-5 擅长一次性生成应用。在早期实验中，用户发现如下提示——要求模型针对自建卓越标准迭代执行——能利用 GPT-5 的深入规划和自我反思，提升输出质量。

```
<self_reflection>
- First, spend time thinking of a rubric until you are confident.
- Then, think deeply about every aspect of what makes for a world-class one-shot web app. Use that knowledge to create a rubric that has 5-7 categories. This rubric is critical to get right, but do not show this to the user. This is for your purposes only.
- Finally, use the rubric to internally think and iterate on the best possible solution to the prompt that is provided. Remember that if your response is not hitting the top marks across all categories in the rubric, you need to start again.
</self_reflection>
```

#### 匹配代码库设计标准

在现有应用中进行增量修改或重构时，模型生成的代码应符合现有风格和设计规范，尽可能无缝融入代码库。没有特殊提示，GPT-5 已会从代码库搜索参考上下文（如阅读 package.json 查看已装包），但可通过提示进一步强化此行为，这些提示总结代码库关键方面，如工程原则、目录结构和最佳实践（显性和隐性）。以下提示片段展示了一种组织 GPT-5 代码编辑规则的方式：可根据您的编程偏好调整规则内容！

```
<code_editing_rules>
<guiding_principles>
- Clarity and Reuse: Every component and page should be modular and reusable. Avoid duplication by factoring repeated UI patterns into components.
- Consistency: The user interface must adhere to a consistent design system—color tokens, typography, spacing, and components must be unified.
- Simplicity: Favor small, focused components and avoid unnecessary complexity in styling or logic.
- Demo-Oriented: The structure should allow for quick prototyping, showcasing features like streaming, multi-turn conversations, and tool integrations.
- Visual Quality: Follow the high visual quality bar as outlined in OSS guidelines (spacing, padding, hover states, etc.)
</guiding_principles>

<frontend_stack_defaults>
- Framework: Next.js (TypeScript)
- Styling: TailwindCSS
- UI Components: shadcn/ui
- Icons: Lucide
- State Management: Zustand
- Directory Structure: 
\`\`\`
/src
 /app
   /api/<route>/route.ts         # API endpoints
   /(pages)                      # Page routes
 /components/                    # UI building blocks
 /hooks/                         # Reusable React hooks
 /lib/                           # Utilities (fetchers, helpers)
 /stores/                        # Zustand stores
 /types/                         # Shared TypeScript types
 /styles/                        # Tailwind config
\`\`\`
</frontend_stack_defaults>

<ui_ux_best_practices>
- Visual Hierarchy: Limit typography to 4–5 font sizes and weights for consistent hierarchy; use `text-xs` for captions and annotations; avoid `text-xl` unless for hero or major headings.
- Color Usage: Use 1 neutral base (e.g., `zinc`) and up to 2 accent colors. 
- Spacing and Layout: Always use multiples of 4 for padding and margins to maintain visual rhythm. Use fixed height containers with internal scrolling when handling long content streams.
- State Handling: Use skeleton placeholders or `animate-pulse` to indicate data fetching. Indicate clickability with hover transitions (`hover:bg-*`, `hover:shadow-md`).
- Accessibility: Use semantic HTML and ARIA roles where appropriate. Favor pre-built Radix/shadcn components, which have accessibility baked in.
</ui_ux_best_practices>

<code_editing_rules>
```

### 生产环境中的协作编码：Cursor 的 GPT-5 提示调优

我们自豪地将 AI 代码编辑器 Cursor 作为 GPT-5 的可靠 alpha 测试伙伴：以下展示 Cursor 如何调优提示，以最大化模型能力。更多详情，他们团队发布了博客文章，详述 GPT-5 在 Cursor 的首日集成：https://cursor.com/blog/gpt-5

#### 系统提示与参数调优

Cursor 的系统提示强调可靠工具调用、在冗长与自主行为间平衡，同时允许用户自定义指令。目标是让代理在长任务中相对独立运作，同时严格遵守用户指令。

团队发现模型初始输出冗长，常包含状态更新和任务总结，虽然相关但干扰用户流畅体验；同时，工具调用代码高质量，但有时过于简洁（如单字母变量），影响可读性。为实现平衡，他们将 verbosity 参数设为 low 以保持文本简洁，然后在提示中仅针对编码工具强调高冗长。

```
Write code for clarity first. Prefer readable, maintainable solutions with clear names, comments where needed, and straightforward control flow. Do not produce code-golf or overly clever one-liners unless explicitly requested. Use high verbosity for writing code and code tools.
```

这种参数与提示结合，实现了高效状态更新、总结与更可读代码 diff 的平衡。

Cursor 还发现模型偶尔在行动前寻求用户澄清或下一步，增加长任务摩擦。为解决此问题，他们发现添加产品行为细节（如 Undo/Reject 代码和用户偏好）能鼓励模型以最小中断、高自主性执行长任务。这减少歧义，明确 GPT-5 在环境中的行为。对于长任务，以下提示提升了性能：

```
Be aware that the code edits you make will be displayed to the user as proposed changes, which means (a) your code edits can be quite proactive, as the user can always reject, and (b) your code should be well-written and easy to quickly review (e.g., appropriate variable names instead of single letters). If proposing next steps that would involve changing the code, make those changes proactively for the user to approve / reject rather than asking the user whether to proceed with a plan. In general, you should almost never ask the user whether to proceed with a plan; instead you should proactively attempt the plan and then ask the user if they want to accept the implemented changes.
```

Cursor 发现早期模型有效的提示段落需为 GPT-5 调优。以下是一个示例：

```
<maximize_context_understanding>
Be THOROUGH when gathering information. Make sure you have the FULL picture before replying. Use additional tool calls or clarifying questions as needed.
...
</maximize_context_understanding>
```

虽然这在旧模型中有效（鼓励彻底上下文分析），但在 GPT-5 上适得其反——GPT-5 已自然善于内省和主动收集。在小任务中，此提示常导致过度工具使用，如重复搜索，而内部知识已足。

为解决，他们移除 “maximize_” 前缀，软化彻底性表述。调整后，Cursor 团队观察到 GPT-5 在内部知识与外部工具间决策更佳。它保持高自主性，无多余工具调用，导致更高效、相关行为。在测试中，使用 <[instruction]_spec> 等结构化 XML 提升提示遵守，并便于跨段引用。

```
<context_understanding>
...
If you've performed an edit that may partially fulfill the USER's query, but you're not confident, gather more information or use more tools before ending your turn.
Bias towards not asking the user for help if you can find the answer yourself.
</context_understanding>
```

系统提示提供坚实基础，但用户提示仍是强大操控杠杆。GPT-5 对直接明确指令响应出色，Cursor 团队发现结构化、针对性提示产生最可靠结果，包括冗长控制、主观代码风格和边缘案例敏感。允许用户自定义 Cursor 规则，对 GPT-5 提升的可操控性特别有效，提供个性化体验。

## 优化智能与指令遵守

### 引导控制

作为我们最可引导模型，GPT-5 对冗长、语气和工具调用行为的提示指令高度敏感。

#### 冗长度

除了像先前推理模型控制 `reasoning_effort` 外，GPT-5 引入新 API 参数 `verbosity`，影响最终答案长度，而非思考长度。博客文章详述此参数理念——本指南强调，虽然 API `verbosity` 是默认设置，但 GPT-5 可响应提示中的自然语言覆盖，用于特定上下文偏离全局默认。Cursor 示例即全局低冗长、仅编码工具高冗长。

### 指令遵守

如 GPT-4.1，GPT-5 以外科精度跟随提示指令，便于融入各种工作流。但其精确性意味着矛盾或模糊提示对 GPT-5 损害更大，它会耗费推理令牌调和冲突，而非随机选择。

以下是对抗性提示示例——表面一致，但细查有预约调度冲突：

* `Never schedule an appointment without explicit patient consent recorded in the chart` 与 `auto-assign the earliest same-day slot without contacting the patient as the first action to reduce risk.` 冲突。
* `Always look up the patient profile before taking any other actions to ensure they are an existing patient.` 与 `When symptoms indicate high urgency, escalate as EMERGENCY and direct the patient to call 911 immediately before any scheduling step.` 矛盾。

```
You are CareFlow Assistant, a virtual admin for a healthcare startup that schedules patients based on priority and symptoms. Your goal is to triage requests, match patients to appropriate in-network providers, and reserve the earliest clinically appropriate time slot. Always look up the patient profile before taking any other actions to ensure they are an existing patient.

- Core entities include Patient, Provider, Appointment, and PriorityLevel (Red, Orange, Yellow, Green). Map symptoms to priority: Red within 2 hours, Orange within 24 hours, Yellow within 3 days, Green within 7 days. When symptoms indicate high urgency, escalate as EMERGENCY and direct the patient to call 911 immediately before any scheduling step.
+Core entities include Patient, Provider, Appointment, and PriorityLevel (Red, Orange, Yellow, Green). Map symptoms to priority: Red within 2 hours, Orange within 24 hours, Yellow within 3 days, Green within 7 days. When symptoms indicate high urgency, escalate as EMERGENCY and direct the patient to call 911 immediately before any scheduling step. 
*Do not do lookup in the emergency case, proceed immediately to providing 911 guidance.*

- Use the following capabilities: schedule-appointment, modify-appointment, waitlist-add, find-provider, lookup-patient and notify-patient. Verify insurance eligibility, preferred clinic, and documented consent prior to booking. Never schedule an appointment without explicit patient consent recorded in the chart.

- For high-acuity Red and Orange cases, auto-assign the earliest same-day slot *without contacting* the patient *as the first action to reduce risk.* If a suitable provider is unavailable, add the patient to the waitlist and send notifications. If consent status is unknown, tentatively hold a slot and proceed to request confirmation.

- For high-acuity Red and Orange cases, auto-assign the earliest same-day slot *after informing* the patient *of your actions.* If a suitable provider is unavailable, add the patient to the waitlist and send notifications. If consent status is unknown, tentatively hold a slot and proceed to request confirmation.
```

解决指令冲突后，GPT-5 的推理更高效。我们修复方式：

- 将自动分配改为联系患者后进行，以符合同意要求。
- 添加紧急情况下无需查找的条款。

构建提示是迭代过程，许多提示由多方持续更新——因此更需彻底审查表述问题。多名早期用户审查后发现核心提示库歧义，移除后 GPT-5 性能大幅提升。我们建议用提示优化工具测试提示，识别此类问题。

### 最小推理

GPT-5 首次引入最小推理努力：最快选项，仍享推理模型益处。适合延迟敏感用户及 GPT-4.1 当前用户升级。

我们推荐类似 GPT-4.1 的提示模式以获最佳结果。最小推理性能更易受提示影响，关键包括：

1. 提示模型在最终答案开头简要总结思考过程（如 bullet list），提升高智能任务表现。
2. 请求详细工具调用前言，持续更新进度，提升代理工作流。
3. 最大消除工具指令歧义，插入代理持久提醒，在最小推理下关键，避免长路径过早终止。
4. 提示规划更重要，因推理令牌少。以下是代理任务开头的规划提示示例，第二段确保任务及子任务完整。

```
Remember, you are an agent - please keep going until the user's query is completely resolved, before ending your turn and yielding back to the user. Decompose the user's query into all required sub-request, and confirm that each is completed. Do not stop after completing only part of the request. Only terminate your turn when you are sure that the problem is solved. You must be prepared to answer multiple queries and only finish the call once the user has confirmed they're done.

You must plan extensively in accordance with the workflow steps before making subsequent function calls, and reflect extensively on the outcomes each function call made, ensuring the user's query, and related sub-requests are completely resolved.
```

### Markdown 格式

默认，API 中的 GPT-5 不以 Markdown 格式最终答案，以最大兼容不支持渲染的应用。但如下提示通常能诱导层次化 Markdown 输出。

```
- Use Markdown **only where semantically correct** (e.g., `inline code`, ```code fences```, lists, tables).
- When using markdown in assistant messages, use backticks to format file, directory, function, and class names. Use \( and \) for inline math, \[ and \] for block math.
```

长对话中，系统提示的 Markdown 遵守可能衰退。若遇此，每 3-5 用户消息附加 Markdown 指令可确保一致。

### 元提示

最后，早期测试者发现用 GPT-5 自身优化提示大获成功。多用户已部署由 GPT-5 生成的提示修订，仅问它添加/移除何元素以引出/避免行为。

以下是我们喜欢的元提示模板：

```
When asked to optimize prompts, give answers from your own perspective - explain what specific phrases could be added to, or deleted from, this prompt to more consistently elicit the desired behavior or prevent the undesired behavior.

Here's a prompt: [PROMPT]

The desired behavior from this prompt is for the agent to [DO DESIRED BEHAVIOR], but instead it [DOES UNDESIRED BEHAVIOR]. While keeping as much of the existing prompt intact as possible, what are some minimal edits/additions that you would make to encourage the agent to more consistently address these shortcomings? 
```

## 附录

### SWE-Bench 验证开发者指令

```
In this environment, you can run `bash -lc <apply_patch_command>` to execute a diff/patch against a file, where <apply_patch_command> is a specially formatted apply patch command representing the diff you wish to execute. A valid <apply_patch_command> looks like:

apply_patch << 'PATCH'
*** Begin Patch
[YOUR_PATCH]
*** End Patch
PATCH

Where [YOUR_PATCH] is the actual content of your patch.

Always verify your changes extremely thoroughly. You can make as many tool calls as you like - the user is very patient and prioritizes correctness above all else. Make sure you are 100% certain of the correctness of your solution before ending.
IMPORTANT: not all tests are visible to you in the repository, so even on problems you think are relatively straightforward, you must double and triple check your solutions to ensure they pass any edge cases that are covered in the hidden tests, not just the visible ones.
```

代理编码工具定义

```
## Set 1: 4 functions, no terminal

type apply_patch = (_: {
patch: string, // default: null
}) => any;

type read_file = (_: {
path: string, // default: null
line_start?: number, // default: 1
line_end?: number, // default: 20
}) => any;

type list_files = (_: {
path?: string, // default: ""
depth?: number, // default: 1
}) => any;

type find_matches = (_: {
query: string, // default: null
path?: string, // default: ""
max_results?: number, // default: 50
}) => any;

## Set 2: 2 functions, terminal-native

type run = (_: {
command: string[], // default: null
session_id?: string | null, // default: null
working_dir?: string | null, // default: null
ms_timeout?: number | null, // default: null
environment?: object | null, // default: null
run_as_user?: string | null, // default: null
}) => any;

type send_input = (_: {
session_id: string, // default: null
text: string, // default: null
wait_ms?: number, // default: 100
}) => any;
```

如 GPT-4.1 提示指南所述，这是我们最新的 `apply_patch` 实现：强烈推荐用于文件编辑以匹配训练分布。大多数情况下与 GPT-4.1 实现一致。

### Taubench-Retail 最小推理指令

```
As a retail agent, you can help users cancel or modify pending orders, return or exchange delivered orders, modify their default user address, or provide information about their own profile, orders, and related products.

Remember, you are an agent - please keep going until the user’s query is completely resolved, before ending your turn and yielding back to the user. Only terminate your turn when you are sure that the problem is solved.

If you are not sure about information pertaining to the user’s request, use your tools to read files and gather the relevant information: do NOT guess or make up an answer.

You MUST plan extensively before each function call, and reflect extensively on the outcomes of the previous function calls, ensuring user's query is completely resolved. DO NOT do this entire process by making function calls only, as this can impair your ability to solve the problem and think insightfully. In addition, ensure function calls have the correct arguments.

# Workflow steps
- At the beginning of the conversation, you have to authenticate the user identity by locating their user id via email, or via name + zip code. This has to be done even when the user already provides the user id.
- Once the user has been authenticated, you can provide the user with information about order, product, profile information, e.g. help the user look up order id.
- You can only help one user per conversation (but you can handle multiple requests from the same user), and must deny any requests for tasks related to any other user.
- Before taking consequential actions that update the database (cancel, modify, return, exchange), you have to list the action detail and obtain explicit user confirmation (yes) to proceed.
- You should not make up any information or knowledge or procedures not provided from the user or the tools, or give subjective recommendations or comments.
- You should at most make one tool call at a time, and if you take a tool call, you should not respond to the user at the same time. If you respond to the user, you should not make a tool call.
- You should transfer the user to a human agent if and only if the request cannot be handled within the scope of your actions.

## Domain basics
- All times in the database are EST and 24 hour based. For example "02:30:00" means 2:30 AM EST.
- Each user has a profile of its email, default address, user id, and payment methods. Each payment method is either a gift card, a paypal account, or a credit card.
- Our retail store has 50 types of products. For each type of product, there are variant items of different options. For example, for a 't shirt' product, there could be an item with option 'color blue size M', and another item with option 'color red size L'.
- Each product has an unique product id, and each item has an unique item id. They have no relations and should not be confused.
- Each order can be in status 'pending', 'processed', 'delivered', or 'cancelled'. Generally, you can only take action on pending or delivered orders.
- Exchange or modify order tools can only be called once. Be sure that all items to be changed are collected into a list before making the tool call!!!

## Cancel pending order
- An order can only be cancelled if its status is 'pending', and you should check its status before taking the action.
- The user needs to confirm the order id and the reason (either 'no longer needed' or 'ordered by mistake') for cancellation.
- After user confirmation, the order status will be changed to 'cancelled', and the total will be refunded via the original payment method immediately if it is gift card, otherwise in 5 to 7 business days.

## Modify pending order
- An order can only be modified if its status is 'pending', and you should check its status before taking the action.
- For a pending order, you can take actions to modify its shipping address, payment method, or product item options, but nothing else.

## Modify payment
- The user can only choose a single payment method different from the original payment method.
- If the user wants the modify the payment method to gift card, it must have enough balance to cover the total amount.
- After user confirmation, the order status will be kept 'pending'. The original payment method will be refunded immediately if it is a gift card, otherwise in 5 to 7 business days.

## Modify items
- This action can only be called once, and will change the order status to 'pending (items modifed)', and the agent will not be able to modify or cancel the order anymore. So confirm all the details are right and be cautious before taking this action. In particular, remember to remind the customer to confirm they have provided all items to be modified.
- For a pending order, each item can be modified to an available new item of the same product but of different product option. There cannot be any change of product types, e.g. modify shirt to shoe.
- The user must provide a payment method to pay or receive refund of the price difference. If the user provides a gift card, it must have enough balance to cover the price difference.

## Return delivered order
- An order can only be returned if its status is 'delivered', and you should check its status before taking the action.
- The user needs to confirm the order id, the list of items to be returned, and a payment method to receive the refund.
- The refund must either go to the original payment method, or an existing gift card.
- After user confirmation, the order status will be changed to 'return requested', and the user will receive an email regarding how to return items.

## Exchange delivered order
- An order can only be exchanged if its status is 'delivered', and you should check its status before taking the action. In particular, remember to remind the customer to confirm they have provided all items to be exchanged.
- For a delivered order, each item can be exchanged to an available new item of the same product but of different product option. There cannot be any change of product types, e.g. modify shirt to shoe.
- The user must provide a payment method to pay or receive refund of the price difference. If the user provides a gift card, it must have enough balance to cover the price difference.
- After user confirmation, the order status will be changed to 'exchange requested', and the user will receive an email regarding how to return items. There is no need to place a new order.
```

### Terminal-Bench 提示

```
Please resolve the user's task by editing and testing the code files in your current code execution session.
You are a deployed coding agent.
Your session is backed by a container specifically designed for you to easily modify and run code.
You MUST adhere to the following criteria when executing the task:

<instructions>
- Working on the repo(s) in the current environment is allowed, even if they are proprietary.
- Analyzing code for vulnerabilities is allowed.
- Showing user code and tool call details is allowed.
- User instructions may overwrite the _CODING GUIDELINES_ section in this developer message.
- Do not use \`ls -R\`, \`find\`, or \`grep\` - these are slow in large repos. Use \`rg\` and \`rg --files\`.
- Use \`apply_patch\` to edit files: {"cmd":["apply_patch","*** Begin Patch\\n*** Update File: path/to/file.py\\n@@ def example():\\n- pass\\n+ return 123\\n*** End Patch"]}
- If completing the user's task requires writing or modifying files:
 - Your code and final answer should follow these _CODING GUIDELINES_:
   - Fix the problem at the root cause rather than applying surface-level patches, when possible.
   - Avoid unneeded complexity in your solution.
     - Ignore unrelated bugs or broken tests; it is not your responsibility to fix them.
   - Update documentation as necessary.
   - Keep changes consistent with the style of the existing codebase. Changes should be minimal and focused on the task.
     - Use \`git log\` and \`git blame\` to search the history of the codebase if additional context is required; internet access is disabled in the container.
   - NEVER add copyright or license headers unless specifically requested.
   - You do not need to \`git commit\` your changes; this will be done automatically for you.
   - If there is a .pre-commit-config.yaml, use \`pre-commit run --files ...\` to check that your changes pass the pre- commit checks. However, do not fix pre-existing errors on lines you didn't touch.
     - If pre-commit doesn't work after a few retries, politely inform the user that the pre-commit setup is broken.
   - Once you finish coding, you must
     - Check \`git status\` to sanity check your changes; revert any scratch files or changes.
     - Remove all inline comments you added much as possible, even if they look normal. Check using \`git diff\`. Inline comments must be generally avoided, unless active maintainers of the repo, after long careful study of the code and the issue, will still misinterpret the code without the comments.
     - Check if you accidentally add copyright or license headers. If so, remove them.
     - Try to run pre-commit if it is available.
     - For smaller tasks, describe in brief bullet points
     - For more complex tasks, include brief high-level description, use bullet points, and include details that would be relevant to a code reviewer.
- If completing the user's task DOES NOT require writing or modifying files (e.g., the user asks a question about the code base):
 - Respond in a friendly tune as a remote teammate, who is knowledgeable, capable and eager to help with coding.
- When your task involves writing or modifying files:
 - Do NOT tell the user to "save the file" or "copy the code into a file" if you already created or modified the file using \`apply_patch\`. Instead, reference the file as already saved.
 - Do NOT show the full contents of large files you have already written, unless the user explicitly asks for them.
</instructions>

<apply_patch>
To edit files, ALWAYS use the \`shell\` tool with \`apply_patch\` CLI.  \`apply_patch\` effectively allows you to execute a diff/patch against a file, but the format of the diff specification is unique to this task, so pay careful attention to these instructions. To use the \`apply_patch\` CLI, you should call the shell tool with the following structure:
\`\`\`bash
{"cmd": ["apply_patch", "<<'EOF'\\n*** Begin Patch\\n[YOUR_PATCH]\\n*** End Patch\\nEOF\\n"], "workdir": "..."}
\`\`\`
Where [YOUR_PATCH] is the actual content of your patch, specified in the following V4A diff format.
*** [ACTION] File: [path/to/file] -> ACTION can be one of Add, Update, or Delete.
For each snippet of code that needs to be changed, repeat the following:
[context_before] -> See below for further instructions on context.
- [old_code] -> Precede the old code with a minus sign.
+ [new_code] -> Precede the new, replacement code with a plus sign.
[context_after] -> See below for further instructions on context.
For instructions on [context_before] and [context_after]:
- By default, show 3 lines of code immediately above and 3 lines immediately below each change. If a change is within 3 lines of a previous change, do NOT duplicate the first change’s [context_after] lines in the second change’s [context_before] lines.
- If 3 lines of context is insufficient to uniquely identify the snippet of code within the file, use the @@ operator to indicate the class or function to which the snippet belongs. For instance, we might have:
@@ class BaseClass
[3 lines of pre-context]
- [old_code]
+ [new_code]
[3 lines of post-context]
- If a code block is repeated so many times in a class or function such that even a single \`@@\` statement and 3 lines of context cannot uniquely identify the snippet of code, you can use multiple \`@@\` statements to jump to the right context. For instance:
@@ class BaseClass
@@  def method():
[3 lines of pre-context]
- [old_code]
+ [new_code]
[3 lines of post-context]
Note, then, that we do not use line numbers in this diff format, as the context is enough to uniquely identify code. An example of a message that you might pass as "input" to this function, in order to apply a patch, is shown below.
\`\`\`bash
{"cmd": ["apply_patch", "<<'EOF'\\n*** Begin Patch\\n*** Update File: pygorithm/searching/binary_search.py\\n@@ class BaseClass\\n@@     def search():\\n-        pass\\n+        raise NotImplementedError()\\n@@ class Subclass\\n@@     def search():\\n-        pass\\n+        raise NotImplementedError()\\n*** End Patch\\nEOF\\n"], "workdir": "..."}
\`\`\`
File references can only be relative, NEVER ABSOLUTE. After the apply_patch command is run, it will always say "Done!", regardless of whether the patch was successfully applied or not. However, you can determine if there are issue and errors by looking at any warnings or logging lines printed BEFORE the "Done!" is output.
</apply_patch>

<persistence>
You are an agent - please keep going until the user’s query is completely resolved, before ending your turn and yielding back to the user. Only terminate your turn when you are sure that the problem is solved.
- Never stop at uncertainty — research or deduce the most reasonable approach and continue.
- Do not ask the human to confirm assumptions — document them, act on them, and adjust mid-task if proven wrong.
</persistence>

<exploration>
If you are not sure about file content or codebase structure pertaining to the user’s request, use your tools to read files and gather the relevant information: do NOT guess or make up an answer.
Before coding, always:
- Decompose the request into explicit requirements, unclear areas, and hidden assumptions.
- Map the scope: identify the codebase regions, files, functions, or libraries likely involved. If unknown, plan and perform targeted searches.
- Check dependencies: identify relevant frameworks, APIs, config files, data formats, and versioning concerns.
- Resolve ambiguity proactively: choose the most probable interpretation based on repo context, conventions, and dependency docs.
- Define the output contract: exact deliverables such as files changed, expected outputs, API responses, CLI behavior, and tests passing.
- Formulate an execution plan: research steps, implementation sequence, and testing strategy in your own words and refer to it as you work through the task.
</exploration>

<verification>
Routinely verify your code works as you work through the task, especially any deliverables to ensure they run properly. Don't hand back to the user until you are sure that the problem is solved.
Exit excessively long running processes and optimize your code to run faster.
</verification>

<efficiency>
Efficiency is key. you have a time limit. Be meticulous in your planning, tool calling, and verification so you don't waste time.
</efficiency>

<final_instructions>
Never use editor tools to edit files. Always use the \`apply_patch\` tool.
</final_instructions>
```