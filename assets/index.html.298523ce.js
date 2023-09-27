import{r as c,o as h,c as l,a as o,b as t,w as a,F as r,d as e,e as i}from"./app.91722b13.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const p={},g=o("h2",{id:"installation",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),e(" Installation")],-1),m=o("h3",{id:"cargo",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#cargo","aria-hidden":"true"},"#"),e(" Cargo")],-1),u=e("Cocogitto is available on "),_={href:"https://crates.io/crates/cocogitto",target:"_blank",rel:"noopener noreferrer"},b=e("crates.io"),f=e(" :"),x=i(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cargo</span> install cocogitto
</code></pre></div><h3 id="archlinux" tabindex="-1"><a class="header-anchor" href="#archlinux" aria-hidden="true">#</a> Archlinux</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>pacman -S cocogitto
</code></pre></div><h3 id="nixos" tabindex="-1"><a class="header-anchor" href="#nixos" aria-hidden="true">#</a> Nixos</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nix-env -iA nixos.cocogitto
</code></pre></div><h3 id="void-linux" tabindex="-1"><a class="header-anchor" href="#void-linux" aria-hidden="true">#</a> Void Linux</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>xbps-install cocogitto
</code></pre></div><h2 id="shell-completions" tabindex="-1"><a class="header-anchor" href="#shell-completions" aria-hidden="true">#</a> Shell completions</h2><p>Before getting started you might want to install shell completions (Note that this is not needed for the official archlinux package). Supported shells are <code>bash</code>, <code>elvish</code>, <code>fish</code> and <code>zsh</code>.</p><p>Example installing completions:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-comment"># Bash</span>
<span class="hljs-built_in">cog</span> generate-completions bash &gt; ~/.local/share/bash-completion/completions/cog

<span class="hljs-comment"># Bash (macOS/Homebrew)</span>
<span class="hljs-built_in">cog</span> generate-completions bash &gt; $(brew --prefix)/etc/bash_completion.d/cog.bash-completion

<span class="hljs-comment"># Fish</span>
<span class="hljs-built_in">mkdir</span> -p ~/.config/fish/completions
<span class="hljs-built_in">cog</span> generate-completions fish &gt; ~/.config/fish/completions/cog.fish

<span class="hljs-comment"># Zsh</span>
<span class="hljs-built_in">cog</span> generate-completions zsh &gt; ~/.zfunc/_cog
</code></pre></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Cocogitto comes with a single binary named <code>cog</code>.</p><p>Use the <code>--help</code> to display options and usage about a specific subcommand :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> --help
<span class="hljs-built_in">cog</span> changelog --help
<span class="hljs-comment"># And so on...</span>
</code></pre></div>`,15),v=e("Note that if you do not care about automatic release, changelog generation and just want to create conventional commit message you can jump to the "),j=e("conventional commits section"),w=e("."),y=i(`<h2 id="conventional-commits" tabindex="-1"><a class="header-anchor" href="#conventional-commits" aria-hidden="true">#</a> Conventional commits</h2><p><code>cog commit</code> is primarily meant to be used as a replacement for the <code>git commit</code> command. It will produce commits with messages respecting the conventional commits specification with little effort.</p><p><strong>Example :</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-comment"># With git commit</span>
<span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;feat: implement the parser specification&quot;</span>

<span class="hljs-comment"># With cocogitto</span>
<span class="hljs-built_in">cog</span> commit feat <span class="hljs-string">&quot;implement the parser specification&quot;</span>
</code></pre></div><p>Using <code>cog commit</code> while working on a project using conventional commits is less verbose than good old git cli and prevent typos and common mistake when writing conventional commit messages.</p>`,5),k=e("See "),C=e("User guide -> Conventional commits"),S=e(" for more information."),B=i('<h2 id="repository-management" tabindex="-1"><a class="header-anchor" href="#repository-management" aria-hidden="true">#</a> Repository management</h2><p>While local commit are made with the <code>cog commit</code> command, other <code>cog</code> subcommands are meant to manage your repository both locally and in a CI context. For an in depth guide on how to use it see <a href="./guide">User guide</a>.</p><h2 id="github-integration" tabindex="-1"><a class="header-anchor" href="#github-integration" aria-hidden="true">#</a> GitHub integration</h2><h3 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> GitHub Action</h3>',4),G=e("Anything you can do with "),I=o("code",null,"cog",-1),N=e(" can be done in your CI pipeline with "),H={href:"https://github.com/cocogitto/cocogitto-action",target:"_blank",rel:"noopener noreferrer"},A=e("cocogitto-action"),E=e("."),L=e("See "),V=e("Github integration -> GitHub action"),q=e(" for more info."),F=o("h3",{id:"github-bot",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#github-bot","aria-hidden":"true"},"#"),e(" GitHub Bot")],-1),R=e("To help your contributors respect the specification "),U={href:"https://github.com/apps/cocogitto-bot",target:"_blank",rel:"noopener noreferrer"},z=e("cocogitto-bot"),W=e(" can decorate your PR with conventional commits status checks."),T=e("See "),O=e("Github integration -> GitHub bot"),P=e(" for more info.");function Z($,D){const s=c("ExternalLinkIcon"),n=c("RouterLink");return h(),l(r,null,[g,m,o("p",null,[u,o("a",_,[b,t(s)]),f]),x,o("p",null,[v,t(n,{to:"/guide/#conventional_commits"},{default:a(()=>[j]),_:1}),w]),y,o("p",null,[k,t(n,{to:"/guide/#conventional_commits"},{default:a(()=>[C]),_:1}),S]),B,o("p",null,[G,I,N,o("a",H,[A,t(s)]),E]),o("p",null,[L,t(n,{to:"/ci_cd/#github-action"},{default:a(()=>[V]),_:1}),q]),F,o("p",null,[R,o("a",U,[z,t(s)]),W]),o("p",null,[T,t(n,{to:"/ci_cd/#github-action"},{default:a(()=>[O]),_:1}),P])],64)}var M=d(p,[["render",Z]]);export{M as default};
