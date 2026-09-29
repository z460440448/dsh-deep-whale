window.__ModuleLoader__.load({
	id: "@z460440448/dsh-client-ui-skin-astra-codex",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region src/client/asset-url.ts
		function skinAssetUrl(file) {
			return new URL(`skin-assets/astra-codex/${file}`, document.baseURI).href;
		}
		//#endregion
		//#region src/client/art.ts
		const ASTRA_LIGHT_ART = skinAssetUrl("172a367fd2f26d432f907e650059bddf4565bd26dd96e451797561b7c08abef3.webp");
		const ASTRA_DARK_ART = skinAssetUrl("468ef61d9f4f4ea3d8080fde22edc7414308f07818629ac7d088549d1622d6ec.webp");
		//#endregion
		//#region \0dsh-css:src/client/astra-codex.module.css.mjs
		const css = "body[data-dsh-astra-codex]{--astra-ink:#14171d;--astra-secondary:#4d5562;--astra-tertiary:#7c8796;--astra-accent:#108f83;--astra-accent-hover:#087a70;--astra-line:#2331451f;--astra-glass:#f7fbffad;--astra-glass-strong:#fcfeffdb;--astra-surface:#f6f9fdc7;--astra-shadow:0 18px 55px #2d46661f, 0 2px 8px #2d466614;--astra-ease:cubic-bezier(.23, 1, .32, 1);isolation:isolate;color:var(--astra-ink);font-optical-sizing:auto;--dsw-radius-xs:6px;--dsw-radius-sm:10px;--dsw-radius-md:14px;--dsw-radius-lg:18px;--dsw-radius-xl:24px;--dsw-radius-panel:28px;background:#edf4fb;font-family:-apple-system,BlinkMacSystemFont,SF Pro Text,SF Pro Display,Inter,system-ui,sans-serif;--dsw-static-blue-50:#e6faf6!important;--dsw-static-blue-100:#c8f1e9!important;--dsw-static-blue-300:#63c9ba!important;--dsw-static-blue-400:#2aac9d!important;--dsw-static-blue-500:#108f83!important;--dsw-static-blue-600:#087a70!important;--dsw-static-blue-800:#075c55!important;--dsw-static-blue-950:#043d39!important;--dsw-static-deepseek-50:#e6faf6!important;--dsw-static-deepseek-100:#c8f1e9!important;--dsw-static-deepseek-300:#63c9ba!important;--dsw-static-deepseek-400:#2aac9d!important;--dsw-static-deepseek-500:#108f83!important;--dsw-static-deepseek-600:#087a70!important;--dsw-static-deepseek-800:#075c55!important;--dsw-static-deepseek-900:#043d39!important;--dsw-alias-bg-base:#f1f7fdb8!important;--dsw-alias-bg-layer-1:#fbfdffc2!important;--dsw-alias-bg-layer-2:#f4f8fcd6!important;--dsw-alias-bg-layer-3:#ebf1f8e6!important;--dsw-alias-bg-module-platform:#f8fbfed1!important;--dsw-alias-bg-overlay:#fcfefff0!important;--dsw-alias-border-l1:#23314514!important;--dsw-alias-border-l2:#23314524!important;--dsw-alias-border-l3:#23314538!important;--dsw-alias-border-l4:#23314552!important;--dsw-alias-brand-primary:var(--astra-accent)!important;--dsw-alias-brand-primary-invert:#fff!important;--dsw-alias-brand-text:#087a70!important;--dsw-alias-button-primary-fill:var(--astra-accent)!important;--dsw-alias-button-primary-hover:var(--astra-accent-hover)!important;--dsw-alias-button-floating-fill:#fcfeffdb!important;--dsw-alias-button-floating-hover:#e5f0f7f0!important;--dsw-alias-button-tool-bar-fill:#f9fcffad!important;--dsw-alias-button-tool-bar-hover:#e0edf6e0!important;--dsw-alias-interactive-bg-active:#108f8324!important;--dsw-alias-interactive-bg-hover:#108f8314!important;--dsw-alias-interactive-bg-hover-solid:#e5f1f4!important;--dsw-alias-label-primary:var(--astra-ink)!important;--dsw-alias-label-secondary:var(--astra-secondary)!important;--dsw-alias-label-tertiary:var(--astra-tertiary)!important;--dsw-alias-label-caption:#929dab!important;--dsw-alias-state-business-primary:var(--astra-accent)!important;--dsw-alias-state-business-tertiary:#c8f1e9!important;--dsw-specific-bubble:#e4f1f8d1!important;--dsw-specific-bubble-highlight:#d2e8f1f0!important;--dsw-specific-input-major:#fcfeffc7!important;--dsw-specific-menu:#fcfefff0!important;--dsw-specific-selector:#f0f7fbe6!important;--dsw-specific-sidebar-fill:#eff7fc9e!important;--dsw-specific-sidebar-nav-item-active:#ffffffb8!important;--dsw-specific-sidebar-nav-item-active-accent:var(--astra-accent)!important;--dsw-specific-sidebar-nav-item-hover:#ffffff80!important;--dsw-input-solid:#f8fbfd!important}body[data-dsh-astra-codex][data-ds-dark-theme]{--astra-ink:#f2f5f8;--astra-secondary:#bbc3ce;--astra-tertiary:#858e9c;--astra-accent:#56d9c9;--astra-accent-hover:#78e8da;--astra-line:#dce5f01f;--astra-glass:#11141ca8;--astra-glass-strong:#161922d6;--astra-surface:#13161ec7;--astra-shadow:0 24px 70px #0000006b, 0 2px 10px #00000052;background:#090b10;--dsw-static-blue-50:#122824!important;--dsw-static-blue-100:#163b35!important;--dsw-static-blue-300:#2f9f92!important;--dsw-static-blue-400:#42bbae!important;--dsw-static-blue-500:#56d9c9!important;--dsw-static-blue-600:#73e4d7!important;--dsw-static-blue-800:#a0eee5!important;--dsw-static-blue-950:#d6faf6!important;--dsw-static-deepseek-50:#122824!important;--dsw-static-deepseek-100:#163b35!important;--dsw-static-deepseek-300:#2f9f92!important;--dsw-static-deepseek-400:#42bbae!important;--dsw-static-deepseek-500:#56d9c9!important;--dsw-static-deepseek-600:#73e4d7!important;--dsw-static-deepseek-800:#a0eee5!important;--dsw-static-deepseek-900:#c8f6f0!important;--dsw-alias-bg-base:#090b10c2!important;--dsw-alias-bg-layer-1:#12151dc2!important;--dsw-alias-bg-layer-2:#181c25d1!important;--dsw-alias-bg-layer-3:#1f232ee0!important;--dsw-alias-bg-module-platform:#11141cd1!important;--dsw-alias-bg-overlay:#14171ff0!important;--dsw-alias-border-l1:#dce5f014!important;--dsw-alias-border-l2:#dce5f024!important;--dsw-alias-border-l3:#dce5f038!important;--dsw-alias-border-l4:#dce5f057!important;--dsw-alias-brand-primary:var(--astra-accent)!important;--dsw-alias-brand-primary-invert:#07110f!important;--dsw-alias-brand-text:#82eadf!important;--dsw-alias-button-primary-fill:#52d2c3!important;--dsw-alias-button-primary-hover:#72e4d8!important;--dsw-alias-button-floating-fill:#1e222cdb!important;--dsw-alias-button-floating-hover:#2f3542f0!important;--dsw-alias-button-tool-bar-fill:#191d26b3!important;--dsw-alias-button-tool-bar-hover:#303643e0!important;--dsw-alias-interactive-bg-active:#56d9c929!important;--dsw-alias-interactive-bg-hover:#56d9c917!important;--dsw-alias-interactive-bg-hover-solid:#273b3b!important;--dsw-alias-label-primary:var(--astra-ink)!important;--dsw-alias-label-secondary:var(--astra-secondary)!important;--dsw-alias-label-tertiary:var(--astra-tertiary)!important;--dsw-alias-label-caption:#737d8b!important;--dsw-alias-state-business-primary:var(--astra-accent)!important;--dsw-alias-state-business-tertiary:#183f39!important;--dsw-specific-bubble:#27303dd6!important;--dsw-specific-bubble-highlight:#333e4df0!important;--dsw-specific-input-major:#181c25d1!important;--dsw-specific-menu:#161922f5!important;--dsw-specific-selector:#1e232deb!important;--dsw-specific-sidebar-fill:#0e1118ad!important;--dsw-specific-sidebar-nav-item-active:#353f4db8!important;--dsw-specific-sidebar-nav-item-active-accent:var(--astra-accent)!important;--dsw-specific-sidebar-nav-item-hover:#2d35429e!important;--dsw-input-solid:#171b24!important}body[data-dsh-astra-codex] [id=root]{z-index:1;position:relative}body[data-dsh-astra-codex] [data-slot=sidebar]>:first-child{border-right:1px solid var(--astra-line);background:linear-gradient(180deg, transparent 0 180px, var(--astra-glass) 300px), var(--astra-light-art) top center / max(100%, 360px) auto no-repeat;backdrop-filter:blur(24px)saturate(145%);box-shadow:inset -1px 0 #ffffff61}body[data-dsh-astra-codex][data-ds-dark-theme] [data-slot=sidebar]>:first-child{background:linear-gradient(180deg, #080a0f0f 0 160px, var(--astra-glass) 300px), var(--astra-dark-art) top center / max(100%, 350px) auto no-repeat;box-shadow:inset -1px 0 #ffffff14}body[data-dsh-astra-codex] [data-slot=sidebar]>:first-child>:first-child{backdrop-filter:blur(22px)saturate(150%);background:#ffffff70;border:1px solid #ffffff85;border-radius:16px;margin:10px 10px 0;box-shadow:0 8px 28px #2544661a}body[data-dsh-astra-codex][data-ds-dark-theme] [data-slot=sidebar]>:first-child>:first-child{background:#11141d8a;border-color:#ffffff1a;box-shadow:0 12px 34px #00000052}body[data-dsh-astra-codex] :where([role=dialog],[role=menu],[role=listbox],[data-composer-card]){backdrop-filter:blur(28px)saturate(150%);border:1px solid var(--astra-line)!important;background-color:var(--astra-glass-strong)!important;box-shadow:var(--astra-shadow)!important}body[data-dsh-astra-codex] :where(button,[role=button],[role=menuitem],[role=tab]){transition:color .16s ease, background-color .16s ease, border-color .16s ease, box-shadow .16s ease, transform .12s var(--astra-ease)}body[data-dsh-astra-codex] :where(button,[role=button]):active{transform:scale(.98)}body[data-dsh-astra-codex] :where(textarea,input,[contenteditable=true]):focus-visible,body[data-dsh-astra-codex] :where(button,[role=button]):focus-visible{outline-offset:2px;outline:3px solid color-mix(in srgb, var(--astra-accent) 34%, transparent)!important}.CYkQ7G_scene{z-index:0;pointer-events:none;background:radial-gradient(circle at 76% 12%,#76b8ff33,#0000 30%),linear-gradient(145deg,#ffffff80,#0000 48%);position:fixed;inset:0;overflow:hidden}.CYkQ7G_ambientGlow{aspect-ratio:1;filter:blur(24px);background:radial-gradient(circle,#58d9c933,#0000 68%);border-radius:50%;width:min(42vw,680px);position:absolute;top:-18vw;right:-10vw}.CYkQ7G_constellation{opacity:.26;background-image:radial-gradient(circle,#284b6e47 0 1px,#0000 1.5px);background-size:32px 32px;position:absolute;inset:0;mask-image:linear-gradient(100deg,#0000 20%,#000 70%,#0000 100%)}body[data-dsh-astra-codex][data-ds-dark-theme] .CYkQ7G_scene{background:radial-gradient(circle at 78% 14%,#6351bb33,#0000 30%),radial-gradient(circle at 54% 92%,#289e9621,#0000 34%),#090b10}body[data-dsh-astra-codex][data-ds-dark-theme] .CYkQ7G_constellation{opacity:.22;background-image:radial-gradient(circle,#bacdeb57 0 1px,#0000 1.5px)}html[data-platform=darwin] body[data-dsh-astra-codex]>[data-skin-chrome=astra-scene]{-webkit-app-region:initial!important}@media (width<=760px){body[data-dsh-astra-codex] [data-slot=sidebar]>:first-child{background-position:50% 0;background-size:420px}}@media (prefers-reduced-transparency:reduce){body[data-dsh-astra-codex]{--astra-glass:#f2f6fa;--astra-glass-strong:#f8fafc}body[data-dsh-astra-codex][data-ds-dark-theme]{--astra-glass:#12161d;--astra-glass-strong:#191e27}body[data-dsh-astra-codex] [data-slot=sidebar]>:first-child,body[data-dsh-astra-codex] :where([role=dialog],[role=menu],[role=listbox],[data-composer-card]){backdrop-filter:none}}@media (prefers-reduced-motion:reduce){body[data-dsh-astra-codex] :where(button,[role=button],[role=menuitem],[role=tab]){transition:color .12s,background-color .12s,border-color .12s}body[data-dsh-astra-codex] :where(button,[role=button]):active{transform:none}}";
		const tagId = "@z460440448/dsh-client-ui-skin-astra-codex/astra-codex.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@z460440448/dsh-client-ui-skin-astra-codex";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var astra_codex_module_css_default = {
			"ambientGlow": "CYkQ7G_ambientGlow",
			"constellation": "CYkQ7G_constellation",
			"scene": "CYkQ7G_scene"
		};
		//#endregion
		//#region src/client/index.ts
		const cls = (name) => astra_codex_module_css_default[name] ?? "";
		function apply(ctx) {
			const body = document.body;
			const originalTitle = document.title;
			const originalLightArt = body.style.getPropertyValue("--astra-light-art");
			const originalDarkArt = body.style.getPropertyValue("--astra-dark-art");
			const scene = document.createElement("div");
			scene.className = cls("scene");
			scene.dataset.astraCodexScene = "";
			scene.dataset.skinChrome = "astra-scene";
			scene.setAttribute("aria-hidden", "true");
			const glow = document.createElement("div");
			glow.className = cls("ambientGlow");
			const constellation = document.createElement("div");
			constellation.className = cls("constellation");
			scene.append(glow, constellation);
			body.dataset.dshAstraCodex = "";
			body.style.setProperty("--astra-light-art", `url("${ASTRA_LIGHT_ART}")`);
			body.style.setProperty("--astra-dark-art", `url("${ASTRA_DARK_ART}")`);
			document.title = "ASTRA CODEX · DSH";
			body.append(scene);
			ctx.effect(() => () => {
				scene.remove();
				delete body.dataset.dshAstraCodex;
				if (originalLightArt === "") body.style.removeProperty("--astra-light-art");
				else body.style.setProperty("--astra-light-art", originalLightArt);
				if (originalDarkArt === "") body.style.removeProperty("--astra-dark-art");
				else body.style.setProperty("--astra-dark-art", originalDarkArt);
				if (document.title === "ASTRA CODEX · DSH") document.title = originalTitle;
			}, "ui-skin-astra-codex: scene lifecycle");
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map