import{_ as s,c as a,o as n,a as o}from"./app.81262013.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"mxSdk.onMessage(OBJECT)","slug":"mxsdk-onmessage-object","link":"#mxsdk-onmessage-object","children":[]}],"relativePath":"funtions/onMessage/index.md"}'),p={name:"funtions/onMessage/index.md"},l=o(`<h3 id="mxsdk-onmessage-object" tabindex="-1">mxSdk.onMessage(OBJECT) <a class="header-anchor" href="#mxsdk-onmessage-object" aria-hidden="true">#</a></h3><h4 id="\u76D1\u542C\u5C0F\u7A0B\u5E8F\u53D1\u8FC7\u6765\u7684\u6D88\u606F" tabindex="-1">\u76D1\u542C\u5C0F\u7A0B\u5E8F\u53D1\u8FC7\u6765\u7684\u6D88\u606F <a class="header-anchor" href="#\u76D1\u542C\u5C0F\u7A0B\u5E8F\u53D1\u8FC7\u6765\u7684\u6D88\u606F" aria-hidden="true">#</a></h4><p><strong>OBJECT\u53C2\u6570\u8BF4\u660E</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u53C2\u6570\u8BF4\u660E</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * \u6D88\u606F\u4F20\u9012\u7C7B\u578B\u4E0E\u5C0F\u7A0B\u5E8F\u7AEF\u5171\u540C\u7EA6\u5B9A</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cb</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">info</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u793A\u4F8B</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/** \u76D1\u542C\u5C0F\u7A0B\u5E8F\u6D88\u606F */</span></span>
<span class="line"><span style="color:#A6ACCD;">mxSdk</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onMessage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u63A5\u6536\u5230\u4E86\u6D88\u606F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,6),e=[l];function t(c,r,y,D,i,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
