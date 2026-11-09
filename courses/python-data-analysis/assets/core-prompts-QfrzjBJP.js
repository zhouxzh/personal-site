import{Ct as e,Et as t,Tt as n,kt as r}from"./app-p182cZ-5.js";var i=JSON.parse(`{"path":"/prompts/core-prompts.html","title":"核心提示词库（可直接复制到 DSH）","lang":"zh-CN","frontmatter":{"description":"核心提示词库（可直接复制到 DSH） 提示词公式： 以下模板都按这个公式写成。使用时把 &lt;...&gt; 替换成自己的内容。 1. 未知数据集审计 2. 最小可运行版本 3. 带问题做 EDA 4. 数据清洗 5. 图表审查 6. 建模前的风险检查 7. 调试报错 8. 让 DSH 运行并反馈 9. 形成报告 10. 创建长期目标 11. 并行子...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"核心提示词库（可直接复制到 DSH）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://zhouxianzhong.cn/courses/python-data-analysis/prompts/core-prompts.html"}],["meta",{"property":"og:site_name","content":"Vibe Programming × Python 数据分析"}],["meta",{"property":"og:title","content":"核心提示词库（可直接复制到 DSH）"}],["meta",{"property":"og:description","content":"核心提示词库（可直接复制到 DSH） 提示词公式： 以下模板都按这个公式写成。使用时把 &lt;...&gt; 替换成自己的内容。 1. 未知数据集审计 2. 最小可运行版本 3. 带问题做 EDA 4. 数据清洗 5. 图表审查 6. 建模前的风险检查 7. 调试报错 8. 让 DSH 运行并反馈 9. 形成报告 10. 创建长期目标 11. 并行子..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"autoDesc":true,"filePathRelative":"prompts/core-prompts.md"}`),a={name:`core-prompts.md`};function o(e,i,a,o,s,c){return r(),n(`div`,null,[...i[0]||=[t(`<h1 id="核心提示词库-可直接复制到-dsh" tabindex="-1"><a class="header-anchor" href="#核心提示词库-可直接复制到-dsh"><span>核心提示词库（可直接复制到 DSH）</span></a></h1><p>提示词公式：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[角色] + [任务] + [数据/上下文] + [约束] + [交付物] + [验证要求]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以下模板都按这个公式写成。使用时把 <code>&lt;...&gt;</code> 替换成自己的内容。</p><h2 id="_1-未知数据集审计" tabindex="-1"><a class="header-anchor" href="#_1-未知数据集审计"><span>1. 未知数据集审计</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请作为数据分析审计员。</span>
<span class="line">任务：审计 \`&lt;data/04-cleaning/telco_customer_churn.csv&gt;\`，不要修改原文件。</span>
<span class="line">请输出：</span>
<span class="line">1. shape、列名、dtypes、每列缺失数、重复行数；</span>
<span class="line">2. 每个数据质量问题的判断依据；</span>
<span class="line">3. 按严重程度排序的前 5 个问题；</span>
<span class="line">4. 一份建议清洗方案。</span>
<span class="line">约束：只用 pandas；结论必须能从数据本身验证。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-最小可运行版本" tabindex="-1"><a class="header-anchor" href="#_2-最小可运行版本"><span>2. 最小可运行版本</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请为以下任务生成最小可运行代码：</span>
<span class="line">任务：&lt;找出哪一天订单数量最多&gt;</span>
<span class="line">数据：\`data/03-pandas/olist_orders_45d.csv\`</span>
<span class="line">约束：</span>
<span class="line">- 只使用 pandas；</span>
<span class="line">- 不超过 15 行；</span>
<span class="line">- 注释解释关键步骤；</span>
<span class="line">- 输出表格，不要输出多余图片。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-带问题做-eda" tabindex="-1"><a class="header-anchor" href="#_3-带问题做-eda"><span>3. 带问题做 EDA</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请基于 \`&lt;data/05-eda-viz/diamonds.csv&gt;\` 中的数据做 EDA。</span>
<span class="line">我要回答 3 个明确问题：</span>
<span class="line">1. &lt;不同切工的钻石价格分布是否明显不同？&gt;</span>
<span class="line">2. &lt;克拉数与价格的关系是否近似线性？&gt;</span>
<span class="line">3. &lt;是否存在价格或尺寸异常值？&gt;</span>
<span class="line">请为每个问题输出：</span>
<span class="line">- 对应的 pandas 代码；</span>
<span class="line">- 一张直接回答该问题的图；</span>
<span class="line">- 一个 50 字以内的结论；</span>
<span class="line">- 你需要提醒我的风险。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-数据清洗" tabindex="-1"><a class="header-anchor" href="#_4-数据清洗"><span>4. 数据清洗</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请写一个 pandas 清洗函数。</span>
<span class="line">数据：\`data/04-cleaning/telco_customer_churn.csv\`</span>
<span class="line">要求：</span>
<span class="line">1. 检查重复行和 Customer ID 重复；</span>
<span class="line">2. 把 Total Charges 转成正确数值类型并说明缺失策略；</span>
<span class="line">3. 检查 Churn、Customer Status、Tenure in Months 是否逻辑一致；</span>
<span class="line">4. 输出每列清洗前后缺失数和异常值变化；</span>
<span class="line">5. 保存清洗结果到 \`&lt;projects/example/output/clean_telco.csv&gt;\`。</span>
<span class="line">约束：不修改原始文件；每个策略都要有理由。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-图表审查" tabindex="-1"><a class="header-anchor" href="#_5-图表审查"><span>5. 图表审查</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请审查 \`&lt;projects/example/output/dashboard.png&gt;\` 对应的绘图代码。</span>
<span class="line">重点检查：</span>
<span class="line">1. 每张图是否对应一个明确问题；</span>
<span class="line">2. 标题、轴标签、图例、单位、数据来源是否完整；</span>
<span class="line">3. 是否存在误导：只画比例不写样本量、坐标轴截断、相关当因果；</span>
<span class="line">4. 是否写明过滤掉 price &lt;= 0 或 price &gt; 10000 的规则；</span>
<span class="line">5. 给出修改后的代码。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-建模前的风险检查" tabindex="-1"><a class="header-anchor" href="#_6-建模前的风险检查"><span>6. 建模前的风险检查</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请检查以下建模方案是否存在数据泄漏或逻辑问题。</span>
<span class="line">数据：&lt;data/07-modeling/GermanCredit.csv&gt;</span>
<span class="line">目标：&lt;credit_risk&gt;</span>
<span class="line">方案：&lt;我的特征和代码&gt;</span>
<span class="line">请检查：</span>
<span class="line">1. 哪些字段在放贷决策时是事后才知道的；</span>
<span class="line">2. 类别不平衡和样本量是否处理合理；</span>
<span class="line">3. 训练集和测试集是否可能重叠；</span>
<span class="line">4. 报告 accuracy、precision、recall 和简单基准，为什么。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-调试报错" tabindex="-1"><a class="header-anchor" href="#_7-调试报错"><span>7. 调试报错</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">我运行以下代码报错，请只针对这个错误给修复方案：</span>
<span class="line">错误信息：</span>
<span class="line">&lt;粘贴真实报错&gt;</span>
<span class="line">代码：</span>
<span class="line">&lt;粘贴代码&gt;</span>
<span class="line">约束：不要重写整个项目；先解释原因，再给最小修改。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-让-dsh-运行并反馈" tabindex="-1"><a class="header-anchor" href="#_8-让-dsh-运行并反馈"><span>8. 让 DSH 运行并反馈</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请运行 \`&lt;projects/example/scripts/clean_telco.py&gt;\`。</span>
<span class="line">然后把真实输出贴给我，并检查：</span>
<span class="line">1. 输出文件是否生成；</span>
<span class="line">2. 清洗前后行数和缺失数是否与预期一致；</span>
<span class="line">3. 如果结果异常，给出你的猜测和下一步验证方案。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-形成报告" tabindex="-1"><a class="header-anchor" href="#_9-形成报告"><span>9. 形成报告</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请根据以下文件写 \`&lt;report.md&gt;\`：</span>
<span class="line">- \`&lt;projects/example/audit.md&gt;\`</span>
<span class="line">- \`&lt;projects/example/output/clean_telco.csv&gt;\`</span>
<span class="line">- \`&lt;projects/example/output/dashboard.png&gt;\`</span>
<span class="line">要求：</span>
<span class="line">1. 分成：问题、数据来源、方法、发现、局限、下一步；</span>
<span class="line">2. 每个发现注明依据（字段、样本量、计算方式）；</span>
<span class="line">3. 明确区分“已验证事实”和“待验证推断”；</span>
<span class="line">4. 不超过 800 字。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-创建长期目标" tabindex="-1"><a class="header-anchor" href="#_10-创建长期目标"><span>10. 创建长期目标</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请创建一个目标：</span>
<span class="line">“完成《&lt;电信客户流失迷你报告&gt;》”</span>
<span class="line">验收标准：</span>
<span class="line">1. \`output/clean_telco.csv\` 存在；</span>
<span class="line">2. \`output/dashboard.png\` 存在；</span>
<span class="line">3. \`report.md\` 中有 3 个有数据依据的结论；</span>
<span class="line">4. 每个结论都注明局限。</span>
<span class="line">请持续推进，遇到无法解决的问题时报告阻塞原因。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-并行子代理" tabindex="-1"><a class="header-anchor" href="#_11-并行子代理"><span>11. 并行子代理</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请同时启动两个后台子代理：</span>
<span class="line">子代理 A：审计 \`&lt;data/04-cleaning/telco_customer_churn.csv&gt;\`，输出 \`&lt;projects/example/audit.md&gt;\`；</span>
<span class="line">子代理 B：审查 \`&lt;projects/example/scripts/clean_telco.py&gt;\`，输出代码审查意见；</span>
<span class="line">两个子代理都要独立验证，不共享结论；完成后汇总给我。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-结课项目工作流" tabindex="-1"><a class="header-anchor" href="#_12-结课项目工作流"><span>12. 结课项目工作流</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">请运行一个 workflow：</span>
<span class="line">名称：final-project-analysis</span>
<span class="line">阶段：数据审计、EDA 与可视化、报告撰写</span>
<span class="line">参数：datasetPath=&lt;你的数据路径&gt;</span>
<span class="line">目标：产出一个可复现分析报告，报告路径和验收标准见结课项目说明。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-反例与修正" tabindex="-1"><a class="header-anchor" href="#_13-反例与修正"><span>13. 反例与修正</span></a></h2><table><thead><tr><th>差提示词</th><th>为什么差</th><th>更好</th></tr></thead><tbody><tr><td>“帮我分析这个数据集”</td><td>没有任务、没有验收标准</td><td>“回答哪个地区的订单最多，输出分组表和样本量”</td></tr><tr><td>“帮我写完整报告”</td><td>跳过最小版本和验证</td><td>“先给我可运行的清洗函数，再逐步做 EDA 和报告”</td></tr><tr><td>“这个结果对不对”</td><td>没有给代码、数据、口径</td><td>“我用 4225 行电信数据按 Contract 统计流失率，样本量 3870，结果 26.6%，请检查我的口径”</td></tr><tr><td>“AI 说这是原因”</td><td>把相关当因果</td><td>“请列出支持因果的证据和替代解释”</td></tr></tbody></table>`,30)]])}var s=e(a,[[`render`,o]]);export{i as _pageData,s as default};